async function hashPassword(password, saltHex) {
  const enc = new TextEncoder();
  const salt = saltHex ? hexToBytes(saltHex) : crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, keyMaterial, 256);
  return { hash: bytesToHex(new Uint8Array(bits)), salt: bytesToHex(salt) };
}
function bytesToHex(bytes) { return [...bytes].map(b => b.toString(16).padStart(2, '0')).join(''); }
function hexToBytes(hex) { const arr = new Uint8Array(hex.length / 2); for (let i = 0; i < arr.length; i++) arr[i] = parseInt(hex.substr(i * 2, 2), 16); return arr; }
function newToken() { return bytesToHex(crypto.getRandomValues(new Uint8Array(32))); }
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function genCode() { return String(Math.floor(100000 + Math.random() * 900000)); }

async function sendVerificationEmail(env, email, code) {
  if (!env.RESEND_API_KEY) return { ok: false, skipped: true };
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Darin <onboarding@resend.dev>',
      to: [email],
      subject: 'رمز التحقق من حسابك في دارين',
      html: `<div dir="rtl" style="font-family:Tahoma,Arial,sans-serif; max-width:420px; margin:auto; padding:20px; background:#171512; color:#f1ece4; border-radius:12px;">
        <h2 style="margin-bottom:4px;">مرحبًا بك في دارين</h2>
        <p style="color:#a89e92;">استخدم الرمز التالي لتفعيل حسابك:</p>
        <div style="font-size:32px; font-weight:800; letter-spacing:8px; background:#201d19; padding:16px; border-radius:8px; text-align:center; color:#cda434;">${code}</div>
        <p style="color:#7a7167; font-size:12px; margin-top:16px;">هذا الرمز صالح لمدة ١٠ دقائق. إذا لم تطلب هذا الرمز تجاهل هذه الرسالة.</p>
      </div>`
    })
  });
  return { ok: res.ok };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' }
  });
}

function rowToProduct(r) {
  return {
    id: r.id, nameAr: r.name_ar, nameEn: r.name_en, descAr: r.desc_ar, descEn: r.desc_en,
    price: r.price, image: r.image, video: r.video, categoryId: r.category_id,
    status: r.status, outOfStock: !!r.out_of_stock,
    layout: r.layout ? JSON.parse(r.layout) : [],
    proposedBy: r.proposed_by, ratings: {}, comments: []
  };
}

const SESSION_DAYS = 30;

async function handleApi(request, env, url) {
  const path = url.pathname;
  const method = request.method;

  try {
    // ---- AUTH ----
    if (path === '/api/register' && method === 'POST') {
      const { name, email, password } = await request.json();
      if (!name || !email || !password) return json({ error: 'MISSING_FIELDS' }, 400);
      if (!isValidEmail(email)) return json({ error: 'INVALID_EMAIL' }, 400);
      if (password.length < 6) return json({ error: 'WEAK_PASSWORD' }, 400);
      const emailNorm = email.trim().toLowerCase();
      const existing = await env.DB.prepare('SELECT id, verified FROM users WHERE email=?').bind(emailNorm).first();
      if (existing && existing.verified) return json({ error: 'EMAIL_TAKEN' }, 400);
      if (!existing) {
        const existingName = await env.DB.prepare('SELECT id FROM users WHERE name=?').bind(name).first();
        if (existingName) return json({ error: 'NAME_TAKEN' }, 400);
        const id = 'u' + Date.now();
        const { hash, salt } = await hashPassword(password);
        await env.DB.prepare('INSERT INTO users (id, name, email, password_hash, salt, role, verified) VALUES (?,?,?,?,?,?,0)')
          .bind(id, name, emailNorm, hash, salt, 'user').run();
      }
      const code = genCode();
      const expires = new Date(Date.now() + 10 * 60000).toISOString();
      await env.DB.prepare('INSERT INTO verification_codes (email, code, expires_at) VALUES (?,?,?) ON CONFLICT(email) DO UPDATE SET code=excluded.code, expires_at=excluded.expires_at')
        .bind(emailNorm, code, expires).run();
      const sent = await sendVerificationEmail(env, emailNorm, code);
      return json({ requiresVerification: true, email: emailNorm, emailSent: sent.ok });
    }

    if (path === '/api/verify-email' && method === 'POST') {
      const { email, code } = await request.json();
      if (!email || !code) return json({ error: 'MISSING_FIELDS' }, 400);
      const emailNorm = email.trim().toLowerCase();
      const rec = await env.DB.prepare('SELECT * FROM verification_codes WHERE email=?').bind(emailNorm).first();
      if (!rec || rec.code !== String(code) || new Date(rec.expires_at) < new Date()) return json({ error: 'INVALID_CODE' }, 400);
      await env.DB.prepare('UPDATE users SET verified=1 WHERE email=?').bind(emailNorm).run();
      await env.DB.prepare('DELETE FROM verification_codes WHERE email=?').bind(emailNorm).run();
      const user = await env.DB.prepare('SELECT * FROM users WHERE email=?').bind(emailNorm).first();
      const token = newToken();
      const expires = new Date(Date.now() + SESSION_DAYS * 86400000).toISOString();
      await env.DB.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?,?,?)').bind(token, user.id, expires).run();
      return json({ id: user.id, name: user.name, email: user.email, role: user.role, token });
    }

    if (path === '/api/resend-code' && method === 'POST') {
      const { email } = await request.json();
      if (!email) return json({ error: 'MISSING_FIELDS' }, 400);
      const emailNorm = email.trim().toLowerCase();
      const user = await env.DB.prepare('SELECT id FROM users WHERE email=?').bind(emailNorm).first();
      if (!user) return json({ error: 'INVALID_CREDENTIALS' }, 400);
      const code = genCode();
      const expires = new Date(Date.now() + 10 * 60000).toISOString();
      await env.DB.prepare('INSERT INTO verification_codes (email, code, expires_at) VALUES (?,?,?) ON CONFLICT(email) DO UPDATE SET code=excluded.code, expires_at=excluded.expires_at')
        .bind(emailNorm, code, expires).run();
      const sent = await sendVerificationEmail(env, emailNorm, code);
      return json({ ok: true, emailSent: sent.ok });
    }

    if (path === '/api/login' && method === 'POST') {
      const { email, password } = await request.json();
      if (!email || !password) return json({ error: 'MISSING_FIELDS' }, 400);
      const emailNorm = email.trim().toLowerCase();
      const user = await env.DB.prepare('SELECT * FROM users WHERE email=?').bind(emailNorm).first();
      if (!user) return json({ error: 'INVALID_CREDENTIALS' }, 401);
      const { hash } = await hashPassword(password, user.salt);
      if (hash !== user.password_hash) return json({ error: 'INVALID_CREDENTIALS' }, 401);
      if (user.blocked) return json({ error: 'ACCOUNT_BLOCKED' }, 403);
      if (!user.verified) {
        const code = genCode();
        const expires = new Date(Date.now() + 10 * 60000).toISOString();
        await env.DB.prepare('INSERT INTO verification_codes (email, code, expires_at) VALUES (?,?,?) ON CONFLICT(email) DO UPDATE SET code=excluded.code, expires_at=excluded.expires_at')
          .bind(emailNorm, code, expires).run();
        await sendVerificationEmail(env, emailNorm, code);
        return json({ error: 'EMAIL_NOT_VERIFIED', email: emailNorm }, 403);
      }
      const token = newToken();
      const expires = new Date(Date.now() + SESSION_DAYS * 86400000).toISOString();
      await env.DB.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?,?,?)').bind(token, user.id, expires).run();
      return json({ id: user.id, name: user.name, email: user.email, role: user.role, token });
    }

    if (path === '/api/session' && method === 'POST') {
      const { token } = await request.json();
      if (!token) return json({ error: 'NO_TOKEN' }, 400);
      const sess = await env.DB.prepare('SELECT * FROM sessions WHERE token=?').bind(token).first();
      if (!sess || new Date(sess.expires_at) < new Date()) return json({ error: 'SESSION_EXPIRED' }, 401);
      const user = await env.DB.prepare('SELECT * FROM users WHERE id=?').bind(sess.user_id).first();
      if (!user || user.blocked) return json({ error: 'SESSION_INVALID' }, 401);
      return json({ id: user.id, name: user.name, email: user.email, role: user.role });
    }

    if (path === '/api/logout' && method === 'POST') {
      const { token } = await request.json();
      if (token) await env.DB.prepare('DELETE FROM sessions WHERE token=?').bind(token).run();
      return json({ ok: true });
    }

    // ---- CATEGORIES ----
    if (path === '/api/categories' && method === 'GET') {
      const { results } = await env.DB.prepare('SELECT * FROM categories').all();
      return json(results.map(c => ({ id: c.id, nameAr: c.name_ar, nameEn: c.name_en })));
    }

    // ---- PRODUCTS ----
    if (path === '/api/products' && method === 'GET') {
      const { results } = await env.DB.prepare('SELECT * FROM products').all();
      return json(results.map(rowToProduct));
    }

    if (path === '/api/products' && method === 'POST') {
      const p = await request.json();
      await env.DB.prepare(`INSERT INTO products
          (id, name_ar, name_en, desc_ar, desc_en, price, image, video, category_id, status, out_of_stock, layout, proposed_by)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
        ON CONFLICT(id) DO UPDATE SET
          name_ar=excluded.name_ar, name_en=excluded.name_en, desc_ar=excluded.desc_ar, desc_en=excluded.desc_en,
          price=excluded.price, image=excluded.image, video=excluded.video, category_id=excluded.category_id,
          status=excluded.status, out_of_stock=excluded.out_of_stock, layout=excluded.layout`)
        .bind(
          p.id, p.nameAr || '', p.nameEn || '', p.descAr || '', p.descEn || '',
          p.price || 0, p.image || '', p.video || '', p.categoryId || '',
          p.status || 'published', p.outOfStock ? 1 : 0, JSON.stringify(p.layout || []), p.proposedBy || ''
        ).run();
      return json({ ok: true });
    }

    if (path.startsWith('/api/products/') && method === 'DELETE') {
      const id = path.split('/').pop();
      await env.DB.prepare('DELETE FROM products WHERE id=?').bind(id).run();
      return json({ ok: true });
    }

    // ---- ORDERS ----
    if (path === '/api/orders' && method === 'POST') {
      const o = await request.json();
      const id = 'ord' + Date.now();
      await env.DB.prepare(`INSERT INTO orders
          (id, user_name, method, address, branch_name_ar, branch_name_en, subtotal, fee, total, items)
        VALUES (?,?,?,?,?,?,?,?,?,?)`)
        .bind(
          id, o.userName || '', o.method || '', o.address || '',
          o.branchNameAr || '', o.branchNameEn || '', o.subtotal || 0, o.fee || 0, o.total || 0,
          JSON.stringify(o.items || [])
        ).run();
      return json({ ok: true, id });
    }

    if (path === '/api/orders' && method === 'GET') {
      const { results } = await env.DB.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
      return json(results.map(r => ({
        id: r.id, userName: r.user_name, method: r.method, address: r.address,
        branchNameAr: r.branch_name_ar, branchNameEn: r.branch_name_en,
        subtotal: r.subtotal, fee: r.fee, total: r.total,
        items: JSON.parse(r.items), ts: r.created_at
      })));
    }

    return json({ error: 'NOT_FOUND' }, 404);
  } catch (err) {
    const raw = err.message || '';
    const code = /unique/i.test(raw) ? 'DUPLICATE_ERROR' : 'SERVER_ERROR';
    return json({ error: code }, 500);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      return handleApi(request, env, url);
    }
    return env.ASSETS.fetch(request);
  }
};
