async function hashPassword(password) {
  const enc = new TextEncoder().encode(password);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
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

async function handleApi(request, env, url) {
  const path = url.pathname;
  const method = request.method;

  try {
    // ---- AUTH ----
    if (path === '/api/register' && method === 'POST') {
      const { name, password } = await request.json();
      if (!name || !password) return json({ error: 'الاسم وكلمة المرور مطلوبان' }, 400);
      const existing = await env.DB.prepare('SELECT id FROM users WHERE name=?').bind(name).first();
      if (existing) return json({ error: 'هذا الاسم مستخدم من قبل' }, 400);
      const id = 'u' + Date.now();
      const hash = await hashPassword(password);
      await env.DB.prepare('INSERT INTO users (id, name, password_hash, role) VALUES (?,?,?,?)')
        .bind(id, name, hash, 'user').run();
      return json({ id, name, role: 'user', blocked: false });
    }

    if (path === '/api/login' && method === 'POST') {
      const { name, password } = await request.json();
      const user = await env.DB.prepare('SELECT * FROM users WHERE name=?').bind(name).first();
      if (!user) return json({ error: 'بيانات الدخول غير صحيحة' }, 401);
      const hash = await hashPassword(password);
      if (hash !== user.password_hash) return json({ error: 'بيانات الدخول غير صحيحة' }, 401);
      if (user.blocked) return json({ error: 'هذا الحساب محظور' }, 403);
      return json({ id: user.id, name: user.name, role: user.role, blocked: false });
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

    return json({ error: 'Not found' }, 404);
  } catch (err) {
    return json({ error: err.message }, 500);
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
