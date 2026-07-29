/* ============================================================
   ICONS
============================================================ */
const ICON = {
  menu:`<path d="M3 6h18M3 12h18M3 18h18"/>`,
  close:`<path d="M18 6 6 18M6 6l12 12"/>`,
  search:`<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>`,
  home:`<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9h14v-9"/>`,
  grid:`<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`,
  heart:`<path d="M12 21s-7-4.4-9.3-8.8C1.2 9 2.6 6 5.6 6c1.9 0 3.3 1.1 4.4 2.7C11.1 7.1 12.5 6 14.4 6c3 0 4.4 3 3 6.2C19 16.6 12 21 12 21z"/>`,
  cart:`<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6"/>`,
  tag:`<path d="M20.6 12.4 12.4 20.6a2 2 0 0 1-2.8 0L3 14V3h11l6.6 6.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor"/>`,
  message:`<path d="M21 11.5a8.4 8.4 0 0 1-12.9 7.1L3 20l1.5-5A8.4 8.4 0 1 1 21 11.5z"/>`,
  shield:`<path d="M12 3 4 6v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V6l-8-3z"/>`,
  code:`<path d="m8 18-5-6 5-6M16 6l5 6-5 6"/>`,
  settings:`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h0a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v0a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1z"/>`,
  star:`<path d="M12 2.5 14.9 8.6 21.5 9.5 16.8 14 18 20.6 12 17.4 6 20.6 7.2 14 2.5 9.5 9.1 8.6z"/>`,
  user:`<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>`,
  edit:`<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>`,
  trash:`<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>`,
  plus:`<path d="M12 5v14M5 12h14"/>`,
  check:`<path d="M20 6 9 17l-5-5"/>`,
  x:`<path d="M18 6 6 18M6 6l12 12"/>`,
  warn:`<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>`,
  mute:`<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/>`,
  block:`<circle cx="12" cy="12" r="9"/><path d="M6 6l12 12"/>`,
  image:`<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>`,
  video:`<rect x="2" y="5" width="14" height="14" rx="2"/><path d="m22 8-6 4 6 4z"/>`,
  layers:`<path d="M12 2 3 7l9 5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>`,
  key:`<circle cx="8" cy="15" r="4"/><path d="M10.85 12.15 19 4M16 7l2 2M19 4l1.5 1.5"/>`,
  bell:`<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>`,
  reply:`<path d="M9 17 4 12l5-5"/><path d="M4 12h11a4 4 0 0 1 4 4v1"/>`,
  globe:`<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>`,
  history:`<path d="M3 12a9 9 0 1 0 2.6-6.4M3 4v5h5"/><path d="M12 7v5l3 3"/>`,
  arrowUp:`<path d="M12 19V5M5 12l7-7 7 7"/>`,
  arrowDown:`<path d="M12 5v14M19 12l-7 7-7-7"/>`,
  eye:`<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`,
  eyeOff:`<path d="M9.9 4.2A9.1 9.1 0 0 1 12 4c6.5 0 10 7 10 7a13.2 13.2 0 0 1-2.2 3M6.6 6.6A13.3 13.3 0 0 0 2 11s3.5 7 10 7a9 9 0 0 0 3.6-.7M3 3l18 18M9.9 9.9a3 3 0 0 0 4.2 4.2"/>`,
  logout:`<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>`,
  pin:`<path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>`,
  share:`<path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v14"/>`,
};
function icon(name, size=20){ return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICON[name]||''}</svg>`; }

function placeholderImg(label, hue){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='400' height='300' fill='hsl(${hue},35%,18%)'/><text x='50%' y='50%' font-family='Tajawal,sans-serif' font-size='28' fill='hsl(${hue},60%,70%)' text-anchor='middle' dominant-baseline='middle'>${label}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

/* ============================================================
   I18N — fixed UI strings
============================================================ */
const I18N = {
  home:{ar:'الرئيسية',en:'Home'}, categories:{ar:'التصنيفات',en:'Categories'},
  favorites:{ar:'المفضلة',en:'Favorites'}, cart:{ar:'العربة',en:'Cart'},
  offers:{ar:'العروض',en:'Offers'}, complaints:{ar:'الشكاوي والاقتراحات',en:'Feedback'},
  branches:{ar:'فروعنا',en:'Our branches'},
  social:{ar:'حساباتنا',en:'Our accounts'},
  panel:{ar:'لوحة التحكم',en:'Control Panel'}, settings:{ar:'الإعدادات',en:'Settings'},
  search_ph:{ar:'ابحث عن منتج أو تصنيف...',en:'Search products or categories...'},
  add_to_cart:{ar:'أضف للعربة',en:'Add to cart'}, in_cart:{ar:'في العربة',en:'In cart'},
  view:{ar:'عرض',en:'View'}, all:{ar:'الكل',en:'All'},
  recommended:{ar:'مقترح لك',en:'Recommended for you'},
  newest:{ar:'وصل حديثًا',en:'New arrivals'},
  rating:{ar:'التقييم',en:'Rating'}, comments:{ar:'التعليقات',en:'Comments'},
  add_comment:{ar:'أضف تعليقك...',en:'Write a comment...'}, send:{ar:'نشر',en:'Post'},
  edited:{ar:'(معدّل)',en:'(edited)'}, edit:{ar:'تعديل',en:'Edit'}, save:{ar:'حفظ',en:'Save'},
  cancel:{ar:'إلغاء',en:'Cancel'}, delete:{ar:'حذف',en:'Delete'},
  warn_user:{ar:'تحذير',en:'Warn'}, mute_user:{ar:'كتم',en:'Mute'},
  empty_cart:{ar:'العربة فارغة',en:'Your cart is empty'},
  empty_fav:{ar:'لا توجد عناصر مفضلة',en:'No favorites yet'},
  total:{ar:'الإجمالي',en:'Total'},
  checkout:{ar:'إتمام الطلب',en:'Checkout'},
  login:{ar:'تسجيل الدخول',en:'Log in'}, logout:{ar:'تسجيل الخروج',en:'Log out'},
  guest:{ar:'زائر',en:'Guest'}, developer:{ar:'مطور',en:'Developer'}, admin:{ar:'أدمن',en:'Admin'}, member:{ar:'عضو',en:'Member'},
  pending:{ar:'بانتظار الموافقة',en:'Pending approval'},
  approve:{ar:'اعتماد',en:'Approve'}, reject:{ar:'رفض',en:'Reject'},
  submit_complaint:{ar:'إرسال',en:'Submit'},
  reply:{ar:'رد',en:'Reply'},
  permissions:{ar:'الصلاحيات',en:'Permissions'}, accounts:{ar:'حسابات الأدمن',en:'Admin Accounts'},
  pending_products:{ar:'طلبات إضافة منتجات',en:'Product Requests'},
  sidebar_cfg:{ar:'القائمة الجانبية',en:'Sidebar'}, categories_cfg:{ar:'التصنيفات',en:'Categories'},
  slides_cfg:{ar:'شرائح العرض',en:'Slides'}, code_editor:{ar:'محرر الكود',en:'Code Editor'},
  audit:{ar:'سجل النشاط',en:'Activity Log'},
  add_product:{ar:'إضافة منتج',en:'Add product'},
  language:{ar:'اللغة',en:'Language'},
  developer_tools:{ar:'أدوات المطور',en:'Developer Tools'},
  muted_perm:{ar:'مكتوم بشكل دائم',en:'Permanently muted'},
  muted_until:{ar:'مكتوم حتى',en:'Muted until'},
};
function t(key){ return (I18N[key] && I18N[key][state.lang]) || key; }
function tv(obj){ if(!obj) return ''; return obj[state.lang] || obj.ar || obj.en || ''; }

/* ============================================================
   DATABASE (in-memory)
============================================================ */
const DB = {
  siteContent: {
    siteName: {ar:'دارين', en:'Darin'},
    heroBadge: {ar:'محمصة سعودية · ميناء دارين', en:'Saudi Roastery · Darin Port'},
    logoImage: '',
    nameColor: '',
    nameCharColors: {ar:[], en:[]},
    nameFont: 'ruqaa',
    logoDisplayMode: 'both',
  },
  slides: [
    {id:'s1', titleAr:'تحميصة الموسم وصلت', titleEn:'This season roast is here', subAr:'دفعات محدودة من إثيوبيا وكولومبيا، تحمّص أسبوعيًا بكميات صغيرة.', subEn:'Limited batches from Ethiopia & Colombia, roasted weekly in small lots.', color:'34,28,22'},
    {id:'s2', titleAr:'باقات الاشتراك الشهرية', titleEn:'Monthly subscription plans', subAr:'قهوة طازجة على بابك كل شهر، بدون أي تعقيد.', subEn:'Fresh coffee at your door every month, no fuss.', color:'22,30,28'},
    {id:'s3', titleAr:'أدوات تحضير مختارة', titleEn:'Selected brewing tools', subAr:'كل ما تحتاجه لتحضير فنجان مثالي في بيتك.', subEn:'Everything you need to brew the perfect cup at home.', color:'30,24,34'},
  ],
  categories: [
    {id:'c1', nameAr:'قهوة سعودية', nameEn:'Saudi Coffee'},
    {id:'c2', nameAr:'قهوة مختصة', nameEn:'Specialty Coffee'},
    {id:'c3', nameAr:'أدوات التحضير', nameEn:'Brewing Tools'},
    {id:'c4', nameAr:'هدايا', nameEn:'Gifts'},
  ],
  products: [
    {id:'p1', categoryId:'c1', status:'published', layout:['image','video','title','rating','category','desc','price','comments'],
      nameAr:'القهوة السعودية بالهيل والزعفران', nameEn:'Saudi Cardamom & Saffron Coffee',
      descAr:'تحميصة فاتحة جدًا، نكهات الهيل الأخضر والزعفران الأصلي، تُحمّص أسبوعيًا بكميات صغيرة لضمان الطزاجة.', descEn:'A very light roast with green cardamom and authentic saffron notes, roasted weekly in small batches for maximum freshness.',
      image: placeholderImg('Saudi Coffee', 28), video:'',
      price:45, ratings:{}, comments:[], outOfStock:false},
    {id:'p2', categoryId:'c2', status:'published', layout:['image','video','title','rating','category','desc','price','comments'],
      nameAr:'إثيوبيا يرغاتشيف', nameEn:'Ethiopia Yirgacheffe',
      descAr:'محطة غسل غيدامي، غسيل كامل، نكهات يوسفي وياسمين وعسل. تحميص متوسط يحافظ على حموضتها المشرقة.', descEn:'Gedamie washing station, fully washed, notes of mandarin, jasmine and honey. Medium roast preserving its bright acidity.',
      image: placeholderImg('Yirgacheffe', 95), video:'',
      price:58, ratings:{}, comments:[], outOfStock:false},
    {id:'p3', categoryId:'c2', status:'published', layout:['video','image','title','rating','category','desc','price','comments'],
      nameAr:'كولومبيا هويلا', nameEn:'Colombia Huila',
      descAr:'مزرعة المرادور، عسلي كاتورا، نكهات شوكولاتة وتمر وبندق. تحميص غامق متوازن.', descEn:'Finca El Mirador, honey Caturra process, notes of chocolate, date and hazelnut. Balanced dark roast.',
      image: placeholderImg('Colombia', 18), video:'',
      price:52, ratings:{}, comments:[], outOfStock:false},
    {id:'p4', categoryId:'c3', status:'published', layout:['image','video','title','rating','category','desc','price','comments'],
      nameAr:'دلة تقطير زجاجية', nameEn:'Glass Pour-Over Dripper',
      descAr:'دلة زجاجية مقاومة للحرارة لتحضير قهوة مقطّرة بنكهة نظيفة وواضحة.', descEn:'Heat-resistant glass dripper for a clean, bright pour-over cup.',
      image: placeholderImg('Dripper', 200), video:'',
      price:85, ratings:{}, comments:[], outOfStock:false},
    {id:'p5', categoryId:'c4', status:'published', layout:['image','video','title','rating','category','desc','price','comments'],
      nameAr:'مجموعة هدايا دارين', nameEn:'Darin Gift Set',
      descAr:'علبة هدايا تحتوي على كيسين قهوة مختارين وكوب سيراميك بتصميم دارين.', descEn:'A gift box with two selected coffee bags and a Darin-design ceramic mug.',
      image: placeholderImg('Gift Set', 320), video:'',
      price:140, ratings:{}, comments:[], outOfStock:false},
  ],
  pendingProducts: [],
  permissions: {
    comment:{labelAr:'التعليق على المحتوى', labelEn:'Comment on content', dev:'always', admin:true, user:true, editable:true},
    publish:{labelAr:'نشر محتوى جديد', labelEn:'Publish new content', dev:'always', admin:true, user:false, editable:true},
    addCategory:{labelAr:'إضافة تصنيفات', labelEn:'Add categories', dev:'always', admin:true, user:false, editable:true},
    rate:{labelAr:'التقييم بالنجوم', labelEn:'Star rating', dev:'always', admin:true, user:true, editable:true},
    deleteOthers:{labelAr:'حذف تعليقات الآخرين', labelEn:'Delete other users comments', dev:'always', admin:true, user:false, editable:true},
    muteUsers:{labelAr:'كتم الأعضاء', labelEn:'Mute members', dev:'always', admin:true, user:false, editable:true},
    blockUsers:{labelAr:'حظر الأعضاء', labelEn:'Block members', dev:'always', admin:true, user:false, editable:true},
    unblockUsers:{labelAr:'إلغاء حظر الأعضاء', labelEn:'Unblock members', dev:'always', admin:false, user:false, editable:true},
    manageStock:{labelAr:'تحديد نفاد كمية المنتج', labelEn:'Mark products out of stock', dev:'always', admin:true, user:false, editable:true},
    replyComplaints:{labelAr:'الرد على الشكاوي والاقتراحات', labelEn:'Reply to feedback', dev:'always', admin:true, user:false, editable:true},
    manageAccounts:{labelAr:'إنشاء حسابات أدمن', labelEn:'Create admin accounts', dev:'always', admin:false, user:false, editable:false},
    manageSocial:{labelAr:'إدارة حسابات التواصل الاجتماعي', labelEn:'Manage social accounts', dev:'always', admin:true, user:false, editable:true},
    editPermissions:{labelAr:'تعديل مصفوفة الصلاحيات', labelEn:'Edit permissions matrix', dev:'always', admin:false, user:false, editable:false},
    editSiteContent:{labelAr:'تعديل محتوى الموقع', labelEn:'Edit site content', dev:'always', admin:false, user:false, editable:false},
    editCode:{labelAr:'تحرير كود الموقع', labelEn:'Edit site code', dev:'always', admin:false, user:false, editable:false},
  },
  sidebarVisibility: {
    home:{admin:true,user:true}, categories:{admin:true,user:true}, favorites:{admin:true,user:true},
    cart:{admin:true,user:true}, offers:{admin:true,user:true}, complaints:{admin:true,user:true},
    branches:{admin:true,user:true}, social:{admin:true,user:true},
  },
  devAccount: {username:'developer', password:'Darin@2026'},
  accounts: [
    {id:'a1', username:'admin_sara', password:'1234', active:true},
  ],
  demoUsers: [
    {id:'u2', name:'سارة', password:'1111', warnings:0, mute:null, blocked:false},
    {id:'u3', name:'محمد', password:'2222', warnings:0, mute:null, blocked:false},
    {id:'u4', name:'فهد', password:'3333', warnings:0, mute:null, blocked:false},
  ],
  complaints: [],
  productApprovals: [],
  socialAccounts: [],
  fulfillment: {mode:'both', deliveryFee:15},
  orders: [],
  audit: [
    {ts:'اليوم', text:'تم تسجيل النظام — جميع الصلاحيات على وضعها الافتراضي.'},
  ],
  offers: [
    {id:'o1', kind:'promo', titleAr:'شحن مجاني للطلبات فوق ٢٠٠ ر.س', titleEn:'Free shipping over 200 SAR', descAr:'على جميع الطلبات داخل المملكة.', descEn:'On all orders within Saudi Arabia.', code:'FREESHIP', percent:0, start:'', end:'', visible:true},
  ],
  homeSections: [
    {id:'sec1', titleAr:'مقترح لك', titleEn:'Recommended for you', source:'recommended'},
    {id:'sec2', titleAr:'وصل حديثًا', titleEn:'New arrivals', source:'newest'},
    {id:'sec3', titleAr:'عروض اليوم', titleEn:'Today deals', source:'offers'},
  ],
  branches: [],
  pageBackgrounds: {},
};

/* ============================================================
   STATE
============================================================ */
const state = {
  page:'login', entered:false, productId:null, lang:'ar', sidebarOpen:false,
  category:'all', search:'', branchSearch:'',
  currentUser:{id:'guest', name: I18N.guest.ar, role:'guest'},
  toast:null, loginTab:'login', loginError:'',
};

const BRAND_SWATCHES = ['#0e0d0c','#f1ece4','#7a7167','#c2774c','#cda434','#5fae6e','#d9645a','#5a8fd9','#8b5cf6','#2a9d8f','#ec4899','#d946ef','#8b5e34','#e8dcc8','#1e3a5f'];
const FONT_OPTIONS = {
  tajawal:{ar:'خط عادي', en:'Regular font', family:"'Tajawal',sans-serif"},
  ruqaa:{ar:'مزخرف (نفس دارين)', en:'Ornate (Darin style)', family:"'Aref Ruqaa',serif"},
  rakkas:{ar:'عريض تراثي', en:'Bold heritage', family:"'Rakkas',serif"},
  lalezar:{ar:'عريض مرح', en:'Bold playful', family:"'Lalezar',sans-serif"},
  amiri:{ar:'كلاسيكي أنيق', en:'Elegant classic', family:"'Amiri',serif"},
  reemkufi:{ar:'كوفي عصري', en:'Modern Kufic', family:"'Reem Kufi',sans-serif"},
};
const LAYOUT_BLOCKS = {
  image:{ar:'الصورة', en:'Image'},
  video:{ar:'الفيديو', en:'Video'},
  title:{ar:'العنوان', en:'Title'},
  rating:{ar:'التقييم', en:'Rating'},
  category:{ar:'التصنيف', en:'Category'},
  desc:{ar:'الوصف', en:'Description'},
  price:{ar:'السعر والأزرار', en:'Price & actions'},
  comments:{ar:'التعليقات', en:'Comments'},
};

function setUser(u){ state.currentUser = u; render(); showToast(`${state.lang==='ar'?'تم تسجيل الدخول كـ':'Logged in as'} ${u.name}`); }
function cartKey(){ return 'cart_'+state.currentUser.id; }
function favKey(){ return 'fav_'+state.currentUser.id; }
DB._carts = {}; DB._favs = {};
function getCart(){ return DB._carts[cartKey()] || (DB._carts[cartKey()]=[]); }
function getFav(){ return DB._favs[favKey()] || (DB._favs[favKey()]=[]); }

function showToast(msg){
  document.getElementById('toast-root').innerHTML = `<div class="toast">${msg}</div>`;
  setTimeout(()=>{ document.getElementById('toast-root').innerHTML=''; }, 2200);
}
function audit(text){
  DB.audit.unshift({ts:'الآن', text});
}

/* ============================================================
   PERMISSIONS
============================================================ */
function can(permKey){
  const role = state.currentUser.role;
  if(role==='developer') return true;
  const p = DB.permissions[permKey];
  if(!p) return false;
  if(role==='admin') return !!p.admin;
  if(role==='user') return !!p.user;
  return false;
}
function isMuted(userId){
  const u = DB.demoUsers.find(x=>x.id===userId);
  if(!u || !u.mute) return false;
  if(u.mute.permanent) return true;
  if(u.mute.until > Date.now()) return true;
  u.mute = null; return false;
}
function muteLabel(userId){
  const u = DB.demoUsers.find(x=>x.id===userId);
  if(!u || !u.mute) return '';
  if(u.mute.permanent) return t('muted_perm');
  const mins = Math.ceil((u.mute.until - Date.now())/60000);
  return t('muted_until')+' '+ (mins>60? Math.ceil(mins/60)+'h' : mins+'m');
}

/* ============================================================
   ICONS for sidebar
============================================================ */
const SIDEBAR_ITEMS = [
  {key:'home', icon:'home', label:'home'},
  {key:'categories', icon:'grid', label:'categories'},
  {key:'favorites', icon:'heart', label:'favorites'},
  {key:'cart', icon:'cart', label:'cart'},
  {key:'offers', icon:'tag', label:'offers'},
  {key:'branches', icon:'pin', label:'branches'},
  {key:'social', icon:'share', label:'social'},
  {key:'complaints', icon:'message', label:'complaints'},
];

/* ============================================================
   RENDER ROOT
============================================================ */
function render(){
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang==='ar' ? 'rtl' : 'ltr';
  const root = document.getElementById('app');
  if(!state.entered){
    root.className='';
    root.innerHTML = `
      <div class="auth-gate" style="${DB.pageBackgrounds.login?`background-image:linear-gradient(rgba(14,13,12,.72),rgba(14,13,12,.72)), url('${DB.pageBackgrounds.login}'); background-size:cover; background-position:center; background-attachment:fixed;`:''}">
        <div class="auth-card fade-in">
          <div style="justify-content:center; display:flex; margin-bottom:6px;">${brandMark(30,{interactive:false, withIds:false})}</div>
          <div style="text-align:center; color:var(--dim); font-size:13px; margin-bottom:22px;">${state.lang==='ar'?'سجّل الدخول للمتابعة':'Sign in to continue'}
            <button class="iconbtn" data-action="toggle-lang" title="${t('language')}" style="display:inline-flex; vertical-align:middle; margin-right:6px;">${icon('globe',16)}</button>
          </div>
          ${pageLogin()}
        </div>
      </div>`;
    return;
  }
  root.innerHTML = `
    ${renderTopbar()}
    ${state.sidebarOpen?'<div class="sidebar-overlay show" data-action="toggle-sidebar"></div>':''}
    ${renderSidebar()}
    <main class="content fade-in" style="${DB.pageBackgrounds[state.page]?`background-image:linear-gradient(rgba(14,13,12,.72),rgba(14,13,12,.72)), url('${DB.pageBackgrounds[state.page]}'); background-size:cover; background-position:top center; background-attachment:fixed;`:''}">${renderPage()}</main>
  `;
  root.className = state.currentUser.role==='developer' ? 'dev-on' : '';
  attachLongPress();
}

function brandMark(sizePx, opts){
  opts = opts || {};
  const mode = DB.siteContent.logoDisplayMode || 'both';
  const hasLogo = !!DB.siteContent.logoImage;
  const showLogo = hasLogo && (mode==='logo-only' || mode==='both');
  const showName = !hasLogo || mode==='name-only' || mode==='both';
  const font = (FONT_OPTIONS[DB.siteContent.nameFont]||FONT_OPTIONS.ruqaa).family;
  const lang = state.lang;
  const text = DB.siteContent.siteName[lang] || '';
  const charColors = (DB.siteContent.nameCharColors && DB.siteContent.nameCharColors[lang]) || [];
  const withIds = opts.withIds!==false;
  const chars = [...text].map((ch,i)=>{
    const c = charColors[i] || DB.siteContent.nameColor || '';
    return `<span ${withIds?`id="brand-char-${lang}-${i}"`:''} style="${c?`color:${c};`:''}">${ch===' '?'&nbsp;':ch}</span>`;
  }).join('');
  const interactive = opts.interactive!==false && state.currentUser.role==='developer';
  const nameSpan = `<span ${interactive?'class="editable-text" data-edit-path="siteContent.siteName" data-action="edit-text"':''} style="font-family:${font}; font-size:${sizePx}px; font-weight:700; display:inline-flex; align-items:center; gap:6px; position:relative;"><span style="display:inline;">${chars}</span>${interactive?`<span class="edit-hint">${icon('edit',14)}</span>`:''}</span>`;
  const logoImg = hasLogo ? `<img src="${DB.siteContent.logoImage}" alt="logo" style="height:${sizePx+12}px; width:auto; max-width:${sizePx*5}px; object-fit:contain; border-radius:6px;">` : '';
  return `<div style="display:inline-flex; align-items:center; gap:8px;">${showLogo?logoImg:''}${showName?nameSpan:''}</div>`;
}
function renderTopbar(){
  const role = state.currentUser.role;
  let notifCount = 0;
  if(role==='admin'){
    const approvals = DB.productApprovals.filter(a=>a.submittedBy===state.currentUser.name && !a.seen).length;
    const replies = DB.complaints.filter(c=>c.fromAdmin && c.userName===state.currentUser.name && c.reply && !c.seenByAuthor).length;
    notifCount = approvals + replies;
  } else if(role==='user'){
    notifCount = DB.complaints.filter(c=>!c.fromAdmin && c.userName===state.currentUser.name && c.reply && !c.seenByAuthor).length;
  }
  const roleClass = state.currentUser.role==='developer'?'dev':state.currentUser.role==='admin'?'admin':state.currentUser.role==='user'?'user':'guest';
  const roleName = state.currentUser.role==='developer'?t('developer'):state.currentUser.role==='admin'?t('admin'):state.currentUser.role==='user'?t('member'):t('guest');
  return `
  <header class="topbar">
    <button class="iconbtn" data-action="toggle-sidebar">${icon('menu')}</button>
    ${brandMark(22)}
    <div class="spacer"></div>
    <button class="iconbtn" data-action="goto-search">${icon('search')}</button>
    <button class="iconbtn" data-action="toggle-lang" title="${t('language')}">${icon('globe')}</button>
    ${(role==='admin'||role==='user')?`<button class="iconbtn" data-action="goto-notif">${icon('bell')}${notifCount>0?`<span class="badge-dot">${notifCount}</span>`:''}</button>`:''}
    <div class="role-chip ${roleClass}" data-action="goto-login">
      ${icon(state.currentUser.role==='developer'?'key':state.currentUser.role==='admin'?'shield':'user',16)}
      <span>${state.currentUser.role==='guest'? roleName : state.currentUser.name}</span>
    </div>
  </header>`;
}

function renderSidebar(){
  const role = state.currentUser.role;
  const items = SIDEBAR_ITEMS.filter(it=>{
    if(role==='developer'||role==='guest') return true;
    const vis = DB.sidebarVisibility[it.key];
    if(role==='admin') return vis ? vis.admin : true;
    if(role==='user') return vis ? vis.user : true;
    return true;
  });
  let html = items.map(it=>{
    let count = 0;
    if(it.key==='complaints'){
      if(role==='developer') count = DB.complaints.filter(c=>c.status==='open').length;
      else if(role==='admin') count = DB.complaints.filter(c=>c.status==='open' && !c.fromAdmin).length;
      else if(role==='user') count = DB.complaints.filter(c=>!c.fromAdmin && c.userName===state.currentUser.name && c.reply && !c.seenByAuthor).length;
    }
    return `
    <div class="nav-item ${state.page===it.key?'active':''}" data-action="nav" data-page="${it.key}">
      ${icon(it.icon)}<span>${t(it.label)}</span>${count>0?`<span class="pill gold" style="margin-right:auto">${count}</span>`:''}
    </div>`;
  }).join('');

  if(role==='developer' || role==='admin'){
    html += `<div class="nav-divider"></div><div class="nav-label">${t('panel')}</div>`;
    if(role==='developer'){
      html += navP('panel-pending', icon('layers'), t('pending_products'), DB.pendingProducts.length);
      html += navP('panel-permissions', icon('shield'), t('permissions'));
      html += navP('panel-accounts', icon('key'), t('accounts'));
      html += navP('panel-blocked', icon('block'), state.lang==='ar'?'الأعضاء المحظورون':'Blocked members');
      html += navP('panel-categories', icon('grid'), t('categories_cfg'));
      html += navP('panel-slides', icon('image'), t('slides_cfg'));
      html += navP('panel-sidebar', icon('settings'), t('sidebar_cfg'));
    } else {
      if(can('publish')) html += navP('panel-add-product', icon('plus'), t('add_product'));
      html += navP('panel-admin-feedback', icon('message'), state.lang==='ar'?'رفع شكوى/اقتراح للمطور':'Submit feedback to developer');
      if(can('unblockUsers')) html += navP('panel-blocked', icon('block'), state.lang==='ar'?'الأعضاء المحظورون':'Blocked members');
    }
  }

  if(role==='developer'){
    html += `<div class="nav-divider"></div><div class="nav-label">${t('developer_tools')}</div>`;
    html += navP('panel-site-settings', icon('settings'), state.lang==='ar'?'إعدادات الموقع':'Site settings');
  }

  html += `<div class="nav-divider"></div>`;
  html += `<div class="nav-item" data-action="goto-login">${icon('user')}<span>${role==='guest'?t('login'):t('logout')}</span></div>`;

  return `<nav class="sidebar ${state.sidebarOpen?'open':''}">${html}</nav>`;
}
function navP(page, iconHtml, label, count){
  return `<div class="nav-item ${state.page===page?'active':''}" data-action="nav" data-page="${page}">
    ${iconHtml}<span>${label}</span>${count?`<span class="pill gold" style="margin-right:auto">${count}</span>`:''}
  </div>`;
}

/* ============================================================
   PAGE ROUTER
============================================================ */
function renderPage(){
  switch(state.page){
    case 'home': return pageHome();
    case 'categories': return pageCategories();
    case 'product': return pageProduct();
    case 'favorites': return pageFavorites();
    case 'cart': return pageCart();
    case 'offers': return pageOffers();
    case 'branches': return pageBranches();
    case 'social': return pageSocial();
    case 'complaints': return pageComplaints();
    case 'login': return pageLogin();
    case 'panel-pending': return pagePendingApprovals();
    case 'panel-permissions': return pagePermissions();
    case 'panel-accounts': return pageAccounts();
    case 'panel-blocked': return canSeeBlockedMembers() ? pageBlockedMembers() : `<div class="empty">${state.lang==='ar'?'لا تملك صلاحية الوصول لهذه الصفحة':'You do not have access to this page'}</div>`;
    case 'panel-categories': return pageCategoriesAdmin();
    case 'panel-slides': return pageSlidesAdmin();
    case 'panel-sidebar': return pageSidebarAdmin();
    case 'panel-audit': return pageAudit();
    case 'panel-add-product': return pageAddProduct();
    case 'panel-admin-feedback': return pageAdminFeedback();
    case 'panel-site-settings': return pageSiteSettings();
    case 'panel-code': return pageCodeEditor();
    default: return pageHome();
  }
}

/* ============================================================
   HOME
============================================================ */
function activeOfferForProduct(pid){
  const now = Date.now();
  const prod = DB.products.find(p=>p.id===pid);
  return DB.offers.find(o=>{
    if(o.kind!=='product') return false;
    if(o.start && new Date(o.start).getTime()>now) return false;
    if(o.end && new Date(o.end).getTime()<now) return false;
    if(o.scopeType==='category') return prod && o.categoryId && prod.categoryId===o.categoryId;
    return (o.productIds||[]).includes(pid);
  });
}
function effectivePrice(p){
  const off = activeOfferForProduct(p.id);
  if(off && off.percent>0){
    return {price: Math.round(p.price*(1-off.percent/100)), old:p.price, percent:off.percent};
  }
  return {price:p.price, old:null, percent:0};
}
function offerActive(o){
  if(o.kind!=='product') return true;
  const now=Date.now();
  return (!o.start || new Date(o.start).getTime()<=now) && (!o.end || new Date(o.end).getTime()>=now);
}

function pageHome(){
  const slidesHtml = DB.slides.map((s,i)=>`
    <div class="slide" style="background:linear-gradient(120deg, rgba(${s.color},1), rgba(${s.color},.4)); ${i===0?'':'display:none'}" data-slide="${i}">
      <h2 class="editable-text" data-edit-path="slides.${i}.titleAr|slides.${i}.titleEn" data-action="edit-text">${tv({ar:s.titleAr,en:s.titleEn})}<span class="edit-hint">${icon('edit',14)}</span></h2>
      <p class="editable-text" data-edit-path="slides.${i}.subAr|slides.${i}.subEn" data-action="edit-text">${tv({ar:s.subAr,en:s.subEn})}<span class="edit-hint">${icon('edit',14)}</span></p>
    </div>`).join('');
  const dots = DB.slides.map((s,i)=>`<div class="cdot ${i===0?'active':''}" data-action="goto-slide" data-i="${i}"></div>`).join('');

  const isDev = state.currentUser.role==='developer';
  const published = DB.products.filter(p=>p.status==='published');

  const sectionsHtml = DB.homeSections.map((sec,i)=>{
    let items=[];
    if(sec.source==='recommended') items = published.slice(0,6);
    else if(sec.source==='newest') items = [...published].reverse().slice(0,6);
    else if(sec.source==='offers') items = published.filter(p=>activeOfferForProduct(p.id));
    else if(sec.source && sec.source.startsWith('cat:')){ const cid=sec.source.slice(4); items = published.filter(p=>p.categoryId===cid); }
    const body = items.length
      ? `<div class="hrow">${items.map(productCard).join('')}</div>`
      : `<div class="empty" style="padding:24px;">${state.lang==='ar'?'لا توجد عناصر في هذا القسم':'No items in this section'}</div>`;
    return `<div style="margin-bottom:30px; ${sec.bgImage?`background-image:linear-gradient(rgba(14,13,12,.55),rgba(14,13,12,.55)), url('${sec.bgImage}'); background-size:cover; background-position:center; border-radius:14px; padding:16px;`:''}">
      <div class="section-head">
        <h2 class="editable-text" data-edit-path="homeSections.${i}.titleAr|homeSections.${i}.titleEn" data-action="edit-text">${tv({ar:sec.titleAr,en:sec.titleEn})}<span class="edit-hint">${icon('edit',14)}</span></h2>
        ${isDev?`<div class="sec-tools">
          <button class="iconbtn btn-sm" style="width:46px;height:46px;" data-action="section-move" data-i="${i}" data-dir="up" ${i===0?'disabled':''}>${icon('arrowUp',22)}</button>
          <button class="iconbtn btn-sm" style="width:46px;height:46px;" data-action="section-move" data-i="${i}" data-dir="down" ${i===DB.homeSections.length-1?'disabled':''}>${icon('arrowDown',22)}</button>
          <button class="iconbtn btn-sm" style="width:46px;height:46px; color:var(--red);" data-action="section-delete-confirm" data-i="${i}">${icon('trash',22)}</button>
        </div>`:''}
      </div>
      ${body}
    </div>`;
  }).join('');

  const addSection = isDev ? `<button class="btn" data-action="open-add-section">${icon('plus',14)} ${state.lang==='ar'?'إضافة قسم':'Add section'}</button>` : '';

  return `
    ${searchBar()}
    <div class="carousel" id="carousel">${slidesHtml}<div class="carousel-dots">${dots}</div></div>
    ${sectionsHtml}
    ${addSection}
  `;
}

function searchBar(){
  return `<div class="search-bar">
    ${icon('search',18)}
    <input type="text" placeholder="${t('search_ph')}" value="${state.search}" oninput="state.search=this.value; renderResultsOnly();">
  </div>
  <div id="search-results"></div>`;
}
function renderResultsOnly(){
  const box = document.getElementById('search-results');
  if(!state.search.trim()){ box.innerHTML=''; return; }
  const q = state.search.trim().toLowerCase();
  const results = DB.products.filter(p=>p.status==='published' &&
    (tv({ar:p.nameAr,en:p.nameEn}).toLowerCase().includes(q) || p.nameAr.includes(q) || p.nameEn.toLowerCase().includes(q)));
  box.innerHTML = results.length
    ? `<div class="grid grid-3" style="margin-bottom:28px;">${results.map(productCard).join('')}</div>`
    : `<div class="empty" style="padding:20px 0;">${state.lang==='ar'?'لا توجد نتائج':'No results'}</div>`;
  attachLongPress();
}

function productCard(p){
  const fav = getFav().includes(p.id);
  const r = ratingOf(p);
  const ep = effectivePrice(p);
  return `<div class="pcard" style="${p.outOfStock?'opacity:.7;':''}">
    ${p.outOfStock?`<span class="discount-badge" style="background:var(--dim2);">${state.lang==='ar'?'نفذت الكمية':'Out of stock'}</span>`:ep.percent?`<span class="discount-badge">-${ep.percent}%</span>`:''}
    <button class="fav-btn ${fav?'active':''}" data-action="toggle-fav" data-id="${p.id}">${icon('heart',18)}</button>
    <div class="media" data-action="nav" data-page="product" data-id="${p.id}"><img src="${p.image}" alt=""></div>
    <div class="body">
      <h3 class="editable-text" data-edit-path="products.${idx(p.id)}.nameAr|products.${idx(p.id)}.nameEn" data-action="edit-text" data-pid="${p.id}">${tv({ar:p.nameAr,en:p.nameEn})}<span class="edit-hint">${icon('edit',14)}</span></h3>
      <div class="stars">${avgStarsHtml(r.avg)}</div>
      <div class="meta">
        <span class="price">${ep.price} ${state.lang==='ar'?'ر.س':'SAR'}${ep.old?`<span class="old-price">${ep.old}</span>`:''}</span>
        <button class="btn btn-sm" data-action="nav" data-page="product" data-id="${p.id}">${t('view')}</button>
      </div>
    </div>
  </div>`;
}
function idx(pid){ return DB.products.findIndex(p=>p.id===pid); }
function ratingOf(p){
  const vals = Object.values(p.ratings||{});
  if(!vals.length) return {avg:0, count:0};
  return {avg: vals.reduce((a,b)=>a+b,0)/vals.length, count: vals.length};
}
function starIcon(fillState, size){
  const emptyIcon = icon('star', size).replace('<svg','<svg class="star-empty"');
  if(fillState==='empty') return `<span style="position:relative; display:inline-flex;">${emptyIcon}</span>`;
  const fullIcon = icon('star', size).replace('<svg','<svg class="star-fill"');
  if(fillState==='full') return `<span style="position:relative; display:inline-flex;">${fullIcon}</span>`;
  return `<span style="position:relative; display:inline-flex;">${emptyIcon}<span style="position:absolute; inset:0; overflow:hidden; width:50%;">${fullIcon}</span></span>`;
}
function avgStarsHtml(avg, big=false){
  const rounded = Math.round(avg*2)/2;
  let h='';
  for(let i=1;i<=5;i++){
    let st = 'empty';
    if(rounded >= i) st='full';
    else if(rounded >= i-0.5) st='half';
    h += starIcon(st, big?24:14);
  }
  return h;
}
function myRatingStars(pid){
  const p = DB.products.find(x=>x.id===pid);
  const mine = (p.ratings||{})[state.currentUser.id] || 0;
  let h='';
  for(let i=1;i<=5;i++){
    const filled = i<=mine;
    h += `<span data-action="rate" data-id="${pid}" data-v="${i}">${icon('star',22).replace('<svg','<svg class="'+(filled?'star-fill':'star-empty')+'"')}</span>`;
  }
  return h;
}

/* ============================================================
   CATEGORIES
============================================================ */
function pageCategories(){
  const cats = [{id:'all', nameAr:'الكل', nameEn:'All'}].concat(DB.categories);
  const chips = cats.map(c=>`<div class="chip ${state.category===c.id?'active':''}" data-action="set-category" data-id="${c.id}">${tv({ar:c.nameAr,en:c.nameEn})}</div>`).join('');
  const products = DB.products.filter(p=>p.status==='published' && (state.category==='all' || p.categoryId===state.category));
  return `
    <h1 class="page-title">${t('categories')}</h1>
    <div class="page-sub">${state.lang==='ar'?'تصفّح المنتجات حسب التصنيف':'Browse products by category'}</div>
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:20px;">${chips}</div>
    <div class="grid grid-3">${products.length?products.map(productCard).join(''):`<div class="empty">${state.lang==='ar'?'لا توجد منتجات':'No products'}</div>`}</div>
  `;
}

/* ============================================================
   PRODUCT PAGE
============================================================ */
function pageProduct(){
  const p = DB.products.find(x=>x.id===state.productId);
  if(!p) return `<div class="empty">${state.lang==='ar'?'المنتج غير موجود':'Product not found'}</div>`;
  const r = ratingOf(p);
  const fav = getFav().includes(p.id);
  const inCart = getCart().includes(p.id);
  const cat = DB.categories.find(c=>c.id===p.categoryId);

  const noVideo = !p.video && state.currentUser.role!=='developer';

  const blockRenderers = {
    image: ()=> `<div class="card" style="padding:0; overflow:hidden;"><img src="${p.image}" style="width:100%; max-height:420px; object-fit:cover;"></div>`,
    video: ()=> p.video
      ? `<div class="card" style="padding:0; overflow:hidden;"><video src="${p.video}" controls style="width:100%;"></video></div>`
      : (state.currentUser.role==='developer' ? `<div class="card empty" style="padding:24px;">${icon('video',28)}<div style="margin-top:8px;font-size:12px;">${state.lang==='ar'?'لا يوجد فيديو — أضفه من تعديل المنتج':'No video — add one via edit'}</div></div>` : ''),
    title: ()=> `<h1 class="page-title editable-text" data-edit-path="products.${idx(p.id)}.nameAr|products.${idx(p.id)}.nameEn" data-action="edit-text" data-pid="${p.id}">${tv({ar:p.nameAr,en:p.nameEn})}<span class="edit-hint">${icon('edit',14)}</span></h1>`,
    rating: ()=> `<div>
      <div class="stars lg">${avgStarsHtml(r.avg, true)}</div>
      <div style="font-size:12px; color:var(--dim); margin-top:6px;">${r.count} ${state.lang==='ar'?'تقييم':'ratings'}${r.count?` · ${r.avg.toFixed(1)}`:''}</div>
      ${can('rate')?`<div style="margin-top:14px; padding-top:14px; border-top:1px solid var(--border);">
        <div style="font-size:12px; color:var(--dim); margin-bottom:6px;">${state.lang==='ar'?'تقييمك الشخصي':'Your personal rating'}</div>
        <div class="stars lg">${myRatingStars(p.id)}</div>
      </div>`:''}
    </div>`,
    category: ()=> `<span class="pill blue" style="display:inline-block;">${tv({ar:cat?.nameAr,en:cat?.nameEn})}</span>`,
    desc: ()=> `<p class="editable-text" data-edit-path="products.${idx(p.id)}.descAr|products.${idx(p.id)}.descEn" data-action="edit-text" data-pid="${p.id}" style="color:var(--dim);">${tv({ar:p.descAr,en:p.descEn})}<span class="edit-hint">${icon('edit',14)}</span></p>`,
    price: ()=> `<div>
      <div class="price" style="font-size:26px; margin-bottom:14px;">${p.price} ${state.lang==='ar'?'ر.س':'SAR'}${p.outOfStock?` <span class="pill" style="background:var(--surface3); color:var(--dim);">${state.lang==='ar'?'نفذت الكمية':'Out of stock'}</span>`:''}</div>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        ${p.outOfStock
          ? `<button class="btn" disabled style="opacity:.5; cursor:not-allowed;">${icon('cart',16)} ${state.lang==='ar'?'غير متوفر حاليًا':'Currently unavailable'}</button>`
          : `<button class="btn btn-primary" data-action="toggle-cart" data-id="${p.id}">${icon('cart',16)} ${inCart?t('in_cart'):t('add_to_cart')}</button>`}
        <button class="btn" data-action="toggle-fav" data-id="${p.id}">${icon('heart',16)} ${fav? (state.lang==='ar'?'في المفضلة':'In favorites') : (state.lang==='ar'?'أضف للمفضلة':'Add to favorites')}</button>
        ${state.currentUser.role==='developer'?`<button class="btn btn-gold" data-action="open-product-edit" data-id="${p.id}">${icon('edit',16)} ${state.lang==='ar'?'تعديل المنتج':'Edit product'}</button>`:''}
      </div>
    </div>`,
    comments: ()=> `<div class="card" style="display:flex; align-items:center; justify-content:space-between; cursor:pointer;" data-action="open-comments-modal" data-id="${p.id}">
      <div style="display:flex; align-items:center; gap:10px;">
        ${icon('message',24)}
        <span style="font-weight:700; font-size:15px;">${t('comments')}</span>
      </div>
      <span class="pill gold">${p.comments.length}</span>
    </div>`,
  };

  const order = (p.layout && p.layout.length) ? p.layout : Object.keys(blockRenderers);
  const blocksHtml = order.map(key=>{
    if(!blockRenderers[key]) return '';
    if(key==='video' && noVideo) return '';
    const html = blockRenderers[key]();
    return html ? `<div class="product-block" data-block="${key}" style="margin-bottom:18px;">${html}</div>` : '';
  }).join('');

  return `
    <button class="btn btn-sm" data-action="nav" data-page="categories" style="margin-bottom:14px;">${state.lang==='ar'?'← رجوع':'← Back'}</button>
    <div style="max-width:640px;">${blocksHtml}</div>
  `;
}
function userWarnings(uid){ const u=DB.demoUsers.find(x=>x.id===uid); return u?u.warnings:0; }

/* ============================================================
   FAVORITES / CART / OFFERS
============================================================ */
function pageFavorites(){
  const ids = getFav();
  const products = DB.products.filter(p=>ids.includes(p.id));
  return `<h1 class="page-title">${t('favorites')}</h1><div class="page-sub">&nbsp;</div>
    ${products.length? `<div class="grid grid-3">${products.map(productCard).join('')}</div>` : emptyState('heart', t('empty_fav'))}`;
}
function pageCart(){
  const ids = getCart();
  const products = DB.products.filter(p=>ids.includes(p.id));
  const total = products.reduce((a,p)=>a+p.price,0);
  const hasOOS = products.some(p=>p.outOfStock);
  return `<h1 class="page-title">${t('cart')}</h1><div class="page-sub">&nbsp;</div>
    ${products.length? `
    <div class="card" style="padding:0;">
      ${products.map(p=>`<div style="display:flex; align-items:center; gap:14px; padding:14px; border-bottom:1px solid var(--border);">
        <img src="${p.image}" style="width:60px;height:60px;object-fit:cover;border-radius:8px; ${p.outOfStock?'opacity:.5;':''}">
        <div style="flex:1;"><div style="font-weight:700;">${tv({ar:p.nameAr,en:p.nameEn})}</div><div class="price">${p.price} ${state.lang==='ar'?'ر.س':'SAR'}</div>${p.outOfStock?`<span class="pill" style="background:var(--surface3); color:var(--dim);">${state.lang==='ar'?'نفذت الكمية':'Out of stock'}</span>`:''}</div>
        <button class="btn btn-sm btn-danger" data-action="toggle-cart" data-id="${p.id}">${icon('trash',14)}</button>
      </div>`).join('')}
    </div>
    ${hasOOS?`<div class="hint-box" style="margin-top:12px;">${state.lang==='ar'?'يوجد منتج نفذت كميته بسلتك — احذفه للمتابعة بإتمام الطلب.':'A product in your cart is out of stock — remove it to proceed with checkout.'}</div>`:''}
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:18px;">
      <div style="font-size:18px; font-weight:800;">${t('total')}: <span class="price">${total} ${state.lang==='ar'?'ر.س':'SAR'}</span></div>
      <button class="btn btn-primary" ${hasOOS?'disabled style="opacity:.5; cursor:not-allowed;"':''} data-action="open-checkout">${t('checkout')}</button>
    </div>` : emptyState('cart', t('empty_cart'))}`;
}
function fmtDate(d){ if(!d) return state.lang==='ar'?'بلا حد':'no limit'; try{ return new Date(d).toLocaleDateString(state.lang==='ar'?'ar-SA':'en-GB'); }catch(e){ return d; } }
function filterOfferProducts(q){
  q = q.trim().toLowerCase();
  document.querySelectorAll('.of-product-row').forEach(row=>{
    row.style.display = row.dataset.name.includes(q) ? 'flex' : 'none';
  });
}
function offerScopeLabel(o){
  if(o.scopeType==='category'){
    const c = DB.categories.find(c=>c.id===o.categoryId);
    return c ? `${state.lang==='ar'?'تصنيف':'Category'}: ${tv({ar:c.nameAr,en:c.nameEn})}` : (state.lang==='ar'?'تصنيف محذوف':'Deleted category');
  }
  const ids = o.productIds||[];
  const names = ids.map(pid=>{ const p=DB.products.find(p=>p.id===pid); return p?tv({ar:p.nameAr,en:p.nameEn}):null; }).filter(Boolean);
  if(!names.length) return state.lang==='ar'?'لم يُحدَّد منتج':'No product selected';
  if(names.length<=2) return names.join('، ');
  return names.slice(0,2).join('، ') + ` ${state.lang==='ar'?'و':'and'} ${names.length-2} ${state.lang==='ar'?'أخرى':'more'}`;
}
function pageOffers(){
  const isDev = state.currentUser.role==='developer';
  const visibleOffers = isDev ? DB.offers : DB.offers.filter(o=>o.visible!==false);
  const cards = DB.offers.map((o,i)=>{
    if(!isDev && o.visible===false) return '';
    const active = offerActive(o);
    return `<div class="offer-card" style="${active?'':'opacity:.55'}">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <span class="pill ${o.kind==='product'?'red':'gold'}">${o.kind==='product'? (state.lang==='ar'?'خصم منتج':'Product deal') : (state.lang==='ar'?'كود خصم':'Promo')}</span>
          ${isDev && o.visible===false?`<span class="pill" style="background:var(--surface3); color:var(--dim);">${icon('eyeOff',12)} ${state.lang==='ar'?'مخفي عن الزوار':'Hidden from visitors'}</span>`:''}
        </div>
        ${isDev?`<div style="display:flex; gap:8px;">
          <button class="iconbtn btn-sm" style="width:46px;height:46px;" data-action="open-offer-edit" data-i="${i}">${icon('edit',22)}</button>
          <button class="iconbtn btn-sm" style="width:46px;height:46px; color:var(--red);" data-action="offer-delete-confirm" data-i="${i}">${icon('trash',22)}</button>
        </div>`:''}
      </div>
      <h3 style="font-family:'Aref Ruqaa',serif; font-size:20px; margin:4px 0 6px;">${tv({ar:o.titleAr,en:o.titleEn})}</h3>
      <p style="color:var(--dim); font-size:13px; margin-bottom:12px;">${tv({ar:o.descAr,en:o.descEn})}</p>
      ${o.kind==='product' ? `<div style="font-size:13px; margin-bottom:10px;">
        ${offerScopeLabel(o)} — <span style="color:var(--red); font-weight:800;">${o.percent}%</span>
      </div>
      <div style="font-size:11px; color:var(--dim2); margin-bottom:10px;">${state.lang==='ar'?'من':'From'} ${fmtDate(o.start)} ${state.lang==='ar'?'إلى':'to'} ${fmtDate(o.end)} ${active?'':`· <span style="color:var(--red)">${state.lang==='ar'?'منتهٍ/غير نشط':'inactive'}</span>`}</div>`:''}
      ${o.code?`<div style="background:var(--surface2); border:1px dashed var(--gold); border-radius:8px; padding:8px 14px; display:inline-block; font-family:'JetBrains Mono',monospace; font-weight:700; letter-spacing:2px;">${o.code}</div>`:''}
    </div>`;
  }).join('');
  return `<h1 class="page-title">${t('offers')}</h1>
  <div class="page-sub">${isDev?(state.lang==='ar'?'تحكّم كامل: عروض أكواد عامة، أو خصومات نسبة مئوية على منتجات محددة أو تصنيف كامل، مع خيار إظهار/إخفاء العرض عن الزوار.':'Full control: promo codes, or % discounts on specific products or a whole category, with a visible/hidden toggle.'):'&nbsp;'}</div>
  ${isDev?`<button class="btn btn-primary" style="margin-bottom:16px;" data-action="open-offer-edit" data-i="-1">${icon('plus',14)} ${state.lang==='ar'?'إضافة عرض':'Add offer'}</button>`:''}
  <div class="grid grid-2">${cards || `<div class="empty">${state.lang==='ar'?'لا توجد عروض':'No offers'}</div>`}</div>`;
}
function emptyState(iconName, label){
  return `<div class="empty">${icon(iconName,40)}<div>${label}</div></div>`;
}

/* ============================================================
   COMPLAINTS
============================================================ */
/* ============================================================
   PAGE: BRANCHES
============================================================ */
function branchMatches(b, q){
  return (b.nameAr+' '+b.nameEn+' '+b.descAr+' '+b.descEn).toLowerCase().includes(q);
}
function branchCard(b, i){
  const isDev = state.currentUser.role==='developer';
  return `<div class="card" style="display:flex; gap:14px; align-items:center; cursor:${b.mapUrl?'pointer':'default'};" ${b.mapUrl?`data-action="open-map" data-url="${encodeURIComponent(b.mapUrl)}"`:''}>
    ${b.image?`<img src="${b.image}" style="width:68px;height:68px;object-fit:cover;border-radius:12px;flex:none;">`:`<div style="width:68px;height:68px;border-radius:12px;background:var(--surface2);display:flex;align-items:center;justify-content:center;flex:none;color:var(--accent);">${icon('pin',28)}</div>`}
    <div style="flex:1; min-width:0;">
      <div style="font-weight:800; font-size:15px;">${tv({ar:b.nameAr,en:b.nameEn})}</div>
      <div style="color:var(--dim); font-size:13px; margin-top:2px;">${tv({ar:b.descAr,en:b.descEn})}</div>
      ${b.mapUrl?`<div style="color:var(--accent); font-size:12px; display:inline-flex; gap:4px; align-items:center; margin-top:6px;">${icon('pin',13)} ${state.lang==='ar'?'اضغط لفتح الموقع بخرائط قوقل':'Tap to open in Google Maps'}</div>`:''}
    </div>
    ${isDev?`<div style="display:flex; gap:8px; flex:none;" data-no-map="1">
      <button class="iconbtn btn-sm" style="width:44px;height:44px;" data-action="open-branch-edit" data-i="${i}">${icon('edit',20)}</button>
      <button class="iconbtn btn-sm" style="width:44px;height:44px; color:var(--red);" data-action="delete-branch-confirm" data-i="${i}">${icon('trash',20)}</button>
    </div>`:''}
  </div>`;
}
function renderBranchList(){
  const box = document.getElementById('branches-list');
  if(!box) return;
  const q = state.branchSearch.trim().toLowerCase();
  const list = q ? DB.branches.filter(b=>branchMatches(b,q)) : DB.branches;
  box.innerHTML = list.length
    ? list.map((b)=>branchCard(b, DB.branches.indexOf(b))).join('')
    : `<div class="empty">${state.lang==='ar'?'لا توجد فروع مطابقة':'No matching branches'}</div>`;
}
function pageBranches(){
  const isDev = state.currentUser.role==='developer';
  return `<h1 class="page-title">${t('branches')}</h1>
  <div class="page-sub">${state.lang==='ar'?'كل فروعنا ومواقعها على الخريطة':'All our branches and their map locations'}</div>
  <div class="search-bar" style="margin-bottom:16px;">
    ${icon('search',18)}
    <input type="text" placeholder="${state.lang==='ar'?'ابحث باسم الفرع أو الحي أو الشارع...':'Search by branch name, area, or street...'}" value="${state.branchSearch}" oninput="state.branchSearch=this.value; renderBranchList();">
  </div>
  ${isDev?`<button class="btn btn-primary" style="margin-bottom:16px;" data-action="open-branch-edit" data-i="-1">${icon('plus',14)} ${state.lang==='ar'?'إضافة فرع':'Add branch'}</button>`:''}
  <div id="branches-list" style="display:flex; flex-direction:column; gap:12px;">${
    DB.branches.length ? DB.branches.map((b,i)=>branchCard(b,i)).join('') : `<div class="empty">${state.lang==='ar'?'لا توجد فروع بعد':'No branches yet'}</div>`
  }</div>`;
}
function openBranchEdit(i){
  const isNew = i<0;
  const b = isNew ? {nameAr:'', nameEn:'', descAr:'', descEn:'', mapUrl:'', image:''} : DB.branches[i];
  openModal(`
    <div class="modal-head"><h3>${isNew?(state.lang==='ar'?'إضافة فرع':'Add branch'):(state.lang==='ar'?'تعديل الفرع':'Edit branch')}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body">
      <div class="field-row">
        <div class="field"><label>${state.lang==='ar'?'اسم الفرع (عربي)':'Branch name (AR)'}</label><input id="br-name-ar" value="${b.nameAr}"></div>
        <div class="field"><label>${state.lang==='ar'?'اسم الفرع (إنجليزي)':'Branch name (EN)'}</label><input id="br-name-en" value="${b.nameEn}"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>${state.lang==='ar'?'الوصف (عربي) — مثل الحي أو بجانب معلم مشهور':'Description (AR) — e.g. area or a nearby landmark'}</label><textarea id="br-desc-ar" rows="2">${b.descAr}</textarea></div>
        <div class="field"><label>${state.lang==='ar'?'الوصف (إنجليزي)':'Description (EN)'}</label><textarea id="br-desc-en" rows="2">${b.descEn}</textarea></div>
      </div>
      <div class="field"><label>${state.lang==='ar'?'رابط خرائط قوقل':'Google Maps link'}</label><input id="br-map" value="${b.mapUrl}" placeholder="https://maps.app.goo.gl/..."></div>
      <div class="field">
        <label>${state.lang==='ar'?'صورة الفرع':'Branch image'}</label>
        <div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;">
          <img id="br-image-preview" src="${b.image||placeholderImg('','30')}" style="width:64px;height:64px;object-fit:cover;border-radius:8px;border:1px solid var(--border);">
          <input type="file" accept="image/*" onchange="handleFileUpload(this,'br-image-preview')" style="flex:1;">
        </div>
        <input id="br-image" value="${b.image&&!b.image.startsWith('data:')?b.image:''}" placeholder="${state.lang==='ar'?'أو الصق رابط صورة':'or paste an image URL'}">
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${t('cancel')}</button>
      <button class="btn btn-primary" data-action="save-branch" data-i="${i}">${t('save')}</button>
    </div>`, true);
}

/* ============================================================
   PAGE: SOCIAL ACCOUNTS
============================================================ */
function canManageSocial(){ return state.currentUser.role==='developer' || can('manageSocial'); }
function socialCard(s, i){
  const manage = canManageSocial();
  return `<div class="card" style="display:flex; gap:14px; align-items:center; cursor:${s.url?'pointer':'default'};" ${s.url?`data-action="open-map" data-url="${encodeURIComponent(s.url)}"`:''}>
    ${s.image?`<img src="${s.image}" style="width:60px;height:60px;object-fit:cover;border-radius:12px;flex:none;">`:`<div style="width:60px;height:60px;border-radius:12px;background:var(--surface2);display:flex;align-items:center;justify-content:center;flex:none;color:var(--accent);">${icon('share',24)}</div>`}
    <div style="flex:1; min-width:0;">
      <div style="font-weight:800; font-size:15px;">${tv({ar:s.nameAr,en:s.nameEn})}</div>
      <div style="color:var(--dim); font-size:13px; margin-top:2px;">${tv({ar:s.descAr,en:s.descEn})}</div>
    </div>
    ${manage?`<div style="display:flex; gap:8px; flex:none;">
      <button class="iconbtn btn-sm" style="width:44px;height:44px;" data-action="open-social-edit" data-i="${i}">${icon('edit',20)}</button>
      <button class="iconbtn btn-sm" style="width:44px;height:44px; color:var(--red);" data-action="delete-social-confirm" data-i="${i}">${icon('trash',20)}</button>
    </div>`:''}
  </div>`;
}
function pageSocial(){
  const manage = canManageSocial();
  const cards = DB.socialAccounts.map((s,i)=>socialCard(s,i)).join('');
  return `<h1 class="page-title">${t('social')}</h1>
  <div class="page-sub">${state.lang==='ar'?'تابعنا على منصات التواصل الاجتماعي':'Follow us on social media'}</div>
  ${manage?`<button class="btn btn-primary" style="margin-bottom:16px;" data-action="open-social-edit" data-i="-1">${icon('plus',14)} ${state.lang==='ar'?'إضافة حساب':'Add account'}</button>`:''}
  <div style="display:flex; flex-direction:column; gap:12px;">${cards || `<div class="empty">${state.lang==='ar'?'لا توجد حسابات بعد':'No accounts yet'}</div>`}</div>`;
}
function openSocialEdit(i){
  const isNew = i<0;
  const s = isNew ? {nameAr:'', nameEn:'', descAr:'', descEn:'', url:'', image:''} : DB.socialAccounts[i];
  openModal(`
    <div class="modal-head"><h3>${isNew?(state.lang==='ar'?'إضافة حساب تواصل':'Add social account'):(state.lang==='ar'?'تعديل الحساب':'Edit account')}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body">
      <div class="field-row">
        <div class="field"><label>${state.lang==='ar'?'اسم المنصة (عربي)':'Platform name (AR)'}</label><input id="so-name-ar" value="${s.nameAr}" placeholder="انستقرام"></div>
        <div class="field"><label>${state.lang==='ar'?'اسم المنصة (إنجليزي)':'Platform name (EN)'}</label><input id="so-name-en" value="${s.nameEn}" placeholder="Instagram"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>${state.lang==='ar'?'الوصف (عربي)':'Description (AR)'}</label><input id="so-desc-ar" value="${s.descAr}" placeholder="@darin_coffee"></div>
        <div class="field"><label>${state.lang==='ar'?'الوصف (إنجليزي)':'Description (EN)'}</label><input id="so-desc-en" value="${s.descEn}" placeholder="@darin_coffee"></div>
      </div>
      <div class="field"><label>${state.lang==='ar'?'رابط الحساب':'Account link'}</label><input id="so-url" value="${s.url}" placeholder="https://instagram.com/..."></div>
      <div class="field">
        <label>${state.lang==='ar'?'صورة/شعار المنصة':'Platform image/logo'}</label>
        <div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;">
          <img id="so-image-preview" src="${s.image||placeholderImg('','200')}" style="width:56px;height:56px;object-fit:cover;border-radius:8px;border:1px solid var(--border);">
          <input type="file" accept="image/*" onchange="handleFileUpload(this,'so-image-preview')" style="flex:1;">
        </div>
        <input id="so-image" value="${s.image&&!s.image.startsWith('data:')?s.image:''}" placeholder="${state.lang==='ar'?'أو الصق رابط صورة':'or paste an image URL'}">
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${t('cancel')}</button>
      <button class="btn btn-primary" data-action="save-social" data-i="${i}">${t('save')}</button>
    </div>`, true);
}

let activeCommentsModalPid = null;
function buildCommentsSection(pid){
  const p = DB.products.find(x=>x.id===pid);
  const own = (uid)=> uid===state.currentUser.id;
  const muted = isMuted(state.currentUser.id);
  const commentsHtml = p.comments.map(c=>{
    const isOwn = own(c.userId);
    const canMod = can('deleteOthers') || isOwn;
    return `<div class="comment">
      <div class="avatar">${escapeHtml(c.userName[0])}</div>
      <div class="comment-body">
        <div class="comment-head">
          <strong>${escapeHtml(c.userName)}</strong>
          ${c.role==='admin'?`<span class="pill blue">${t('admin')}</span>`:''}
          ${c.role==='developer'?`<span class="pill gold">${t('developer')}</span>`:''}
          <span style="font-size:11px;color:var(--dim2)">${c.ts}</span>
          ${c.edited?`<span style="font-size:11px;color:var(--dim2)">${t('edited')}</span>`:''}
        </div>
        <div data-comment-text="${c.id}">${escapeHtml(c.text)}</div>
        <div class="comment-actions">
          ${isOwn?`<button data-action="edit-comment" data-pid="${p.id}" data-cid="${c.id}">${icon('edit',18)} ${t('edit')}</button>`:''}
          ${canMod?`<button data-action="delete-comment" data-pid="${p.id}" data-cid="${c.id}">${icon('trash',18)} ${t('delete')}</button>`:''}
          ${(can('muteUsers') && c.userId!=='guest' && !isOwn)?`
            <button data-action="warn-user" data-uid="${c.userId}">${icon('warn',13)} ${t('warn_user')} ${userWarnings(c.userId)?`(${userWarnings(c.userId)})`:''}</button>
            <button data-action="mute-user" data-uid="${c.userId}">${icon('mute',13)} ${t('mute_user')}</button>
          `:''}
        </div>
      </div>
    </div>`;
  }).join('') || `<div class="empty" style="padding:20px;">${state.lang==='ar'?'لا توجد تعليقات بعد':'No comments yet'}</div>`;

  const commentForm = muted
    ? `<div class="muted-banner">${icon('mute',16)} ${muteLabel(state.currentUser.id)}</div>`
    : state.currentUser.role==='guest'
    ? `<div class="empty" style="padding:14px;">${state.lang==='ar'?'سجّل دخول لإضافة تعليق':'Log in to add a comment'} — <a href="#" data-action="goto-login" style="color:var(--accent)">${t('login')}</a></div>`
    : can('comment') ? `
    <div style="display:flex; gap:10px; margin-top:14px;">
      <div class="avatar">${state.currentUser.name[0]}</div>
      <div style="flex:1; display:flex; gap:8px;">
        <textarea id="new-comment" rows="1" placeholder="${t('add_comment')}" style="flex:1; background:var(--surface2); border:1px solid var(--border); border-radius:8px; padding:10px; color:var(--text); font-family:inherit; resize:none;"></textarea>
        <button class="btn btn-primary" data-action="post-comment" data-pid="${p.id}">${t('send')}</button>
      </div>
    </div>` : '';
  return commentsHtml + commentForm;
}
function openCommentsModal(pid){
  activeCommentsModalPid = pid;
  const p = DB.products.find(x=>x.id===pid);
  openModal(`
    <div class="modal-head"><h3>${icon('message',20)} ${t('comments')} (${p.comments.length})</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body" id="comments-modal-body">${buildCommentsSection(pid)}</div>`, true);
}
function refreshCommentsModalIfOpen(){
  if(activeCommentsModalPid){
    const body = document.getElementById('comments-modal-body');
    if(body) body.innerHTML = buildCommentsSection(activeCommentsModalPid);
  }
}

/* ============================================================
   CHECKOUT
============================================================ */
function openCheckoutModal(){
  const ids = getCart();
  const products = DB.products.filter(p=>ids.includes(p.id));
  const subtotal = products.reduce((a,p)=>a+p.price,0);
  const mode = DB.fulfillment.mode;
  const fee = DB.fulfillment.deliveryFee;
  const hasBranches = DB.branches.length>0;
  const branchOptions = DB.branches.map(b=>`<option value="${b.id}">${tv({ar:b.nameAr,en:b.nameEn})}</option>`).join('');
  const defaultMethod = mode==='pickup' ? 'pickup' : 'delivery';
  openModal(`
    <div class="modal-head"><h3>${t('checkout')}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body">
      ${mode==='both'?`
      <div class="field">
        <label>${state.lang==='ar'?'طريقة الاستلام':'Fulfillment method'}</label>
        <select id="co-method" onchange="updateCheckoutSummary()">
          <option value="delivery">${state.lang==='ar'?'توصيل':'Delivery'}</option>
          <option value="pickup">${state.lang==='ar'?'استلام من الفرع':'Branch pickup'}</option>
        </select>
      </div>`:`<input type="hidden" id="co-method" value="${defaultMethod}">`}
      <div id="co-delivery-field" class="field" style="display:${defaultMethod==='delivery'?'block':'none'}">
        <label>${state.lang==='ar'?'عنوان التوصيل':'Delivery address'}</label>
        <textarea id="co-address" rows="2" placeholder="${state.lang==='ar'?'الحي، الشارع، رقم المبنى...':'Area, street, building number...'}"></textarea>
      </div>
      <div id="co-branch-field" class="field" style="display:${defaultMethod==='pickup'?'block':'none'}">
        <label>${state.lang==='ar'?'اختر الفرع':'Choose branch'}</label>
        <select id="co-branch">${branchOptions || `<option value="">${state.lang==='ar'?'لا توجد فروع مضافة':'No branches added'}</option>`}</select>
      </div>
      <div class="hint-box" style="margin-top:10px;">
        <div>${state.lang==='ar'?'المجموع الفرعي':'Subtotal'}: ${subtotal} ${state.lang==='ar'?'ر.س':'SAR'}</div>
        <div id="co-fee-line" style="display:${defaultMethod==='delivery'?'block':'none'}">${state.lang==='ar'?'رسوم التوصيل':'Delivery fee'}: ${fee} ${state.lang==='ar'?'ر.س':'SAR'}</div>
        <div style="font-weight:800; margin-top:6px;">${state.lang==='ar'?'الإجمالي':'Total'}: <span id="co-total">${defaultMethod==='delivery'?subtotal+fee:subtotal}</span> ${state.lang==='ar'?'ر.س':'SAR'}</div>
      </div>
      ${defaultMethod==='pickup' && !hasBranches?`<div class="hint-box" style="margin-top:8px; color:var(--red);">${state.lang==='ar'?'لا يمكن إتمام الطلب حاليًا — لا توجد فروع مضافة للاستلام منها.':'Checkout is unavailable right now — no pickup branches have been added.'}</div>`:''}
    </div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${t('cancel')}</button>
      <button class="btn btn-primary" data-action="confirm-checkout">${state.lang==='ar'?'تأكيد الطلب':'Confirm order'}</button>
    </div>`);
}
function updateCheckoutSummary(){
  const method = document.getElementById('co-method').value;
  const ids = getCart();
  const subtotal = DB.products.filter(p=>ids.includes(p.id)).reduce((a,p)=>a+p.price,0);
  document.getElementById('co-delivery-field').style.display = method==='delivery'?'block':'none';
  document.getElementById('co-branch-field').style.display = method==='pickup'?'block':'none';
  document.getElementById('co-fee-line').style.display = method==='delivery'?'block':'none';
  document.getElementById('co-total').textContent = method==='delivery' ? subtotal+DB.fulfillment.deliveryFee : subtotal;
}

function pageComplaints(){
  const role = state.currentUser.role;
  const canReply = can('replyComplaints');
  const canBlock = role==='developer' || (role==='admin' && can('blockUsers'));
  let items = DB.complaints.slice();
  if(role==='developer'){
    items.sort((a,b)=>(b.fromAdmin?1:0)-(a.fromAdmin?1:0));
  } else {
    items = items.filter(c=>!c.fromAdmin);
  }
  const list = items.map(c=>{
    const targetUser = !c.fromAdmin ? DB.demoUsers.find(u=>u.name===c.userName) : null;
    const showBlockBtn = canBlock && targetUser && !targetUser.blocked;
    return `
    <div class="card" style="margin-bottom:12px; ${c.fromAdmin?'border:1px solid var(--gold);':''}">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-wrap:wrap; gap:6px;">
        <strong>${escapeHtml(c.userName)}</strong>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          ${c.fromAdmin?`<span class="pill gold">${state.lang==='ar'?'من إداري':'From admin'}</span>`:''}
          ${targetUser&&targetUser.blocked?`<span class="pill red">${state.lang==='ar'?'محظور':'Blocked'}</span>`:''}
          <span class="pill ${c.type==='complaint'?'red':'blue'}">${c.type==='complaint'?(state.lang==='ar'?'شكوى':'Complaint'):(state.lang==='ar'?'اقتراح':'Suggestion')}</span>
        </div>
      </div>
      <p style="margin-bottom:8px;">${escapeHtml(c.text)}</p>
      ${c.reply?`<div style="background:var(--surface2); border-radius:8px; padding:10px; font-size:13px; border-right:3px solid var(--accent);">
          <strong>${state.lang==='ar'?'الرد':'Reply'}:</strong> ${escapeHtml(c.reply)}
          ${role==='developer'&&c.repliedBy?`<div style="margin-top:4px; font-size:11px; color:var(--dim2);">${state.lang==='ar'?'رد بواسطة: ':'Replied by: '}${escapeHtml(c.repliedBy)}</div>`:''}
        </div>`:
        canReply?`<div style="display:flex; gap:8px; margin-top:8px;">
          <input type="text" id="reply-${c.id}" placeholder="${state.lang==='ar'?'اكتب ردك...':'Write a reply...'}" style="flex:1; background:var(--surface2); border:1px solid var(--border); border-radius:8px; padding:8px 10px; color:var(--text); font-family:inherit;">
          <button class="btn btn-sm btn-primary" data-action="reply-complaint" data-id="${c.id}">${t('reply')}</button>
        </div>`:`<span class="pill gold">${t('pending')}</span>`}
      ${showBlockBtn?`<div style="margin-top:8px;"><button class="btn btn-sm btn-danger" data-action="block-user-confirm" data-uid="${targetUser.id}">${icon('block',14)} ${state.lang==='ar'?'حظر صاحب البلاغ':'Block reporter'}</button></div>`:''}
    </div>`;
  }).join('');

  const form = role==='guest'
    ? `<div class="empty">${state.lang==='ar'?'سجّل دخول لإرسال شكوى أو اقتراح':'Log in to submit feedback'}</div>`
    : role==='user' ? `
    <div class="card" style="margin-bottom:20px;">
      <div class="field-row">
        <div class="field"><label>${state.lang==='ar'?'النوع':'Type'}</label>
          <select id="fb-type"><option value="suggestion">${state.lang==='ar'?'اقتراح':'Suggestion'}</option><option value="complaint">${state.lang==='ar'?'شكوى':'Complaint'}</option></select>
        </div>
      </div>
      <div class="field"><label>${state.lang==='ar'?'التفاصيل':'Details'}</label><textarea id="fb-text" rows="3"></textarea></div>
      <button class="btn btn-primary" data-action="submit-complaint">${t('submit_complaint')}</button>
    </div>` : '';

  return `<h1 class="page-title">${t('complaints')}</h1><div class="page-sub">&nbsp;</div>${form}${list || `<div class="empty">${state.lang==='ar'?'لا توجد شكاوي أو اقتراحات':'No feedback yet'}</div>`}`;
}

function pageAdminFeedback(){
  const mine = DB.complaints.filter(c=>c.fromAdmin && c.userName===state.currentUser.name);
  const list = mine.map(c=>`
    <div class="card" style="margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span class="pill ${c.type==='complaint'?'red':'blue'}">${c.type==='complaint'?(state.lang==='ar'?'شكوى':'Complaint'):(state.lang==='ar'?'اقتراح':'Suggestion')}</span>
        ${c.reply?`<span class="pill green">${state.lang==='ar'?'تم الرد':'Replied'}</span>`:`<span class="pill gold">${t('pending')}</span>`}
      </div>
      <p style="margin-bottom:8px;">${escapeHtml(c.text)}</p>
      ${c.reply?`<div style="background:var(--surface2); border-radius:8px; padding:10px; font-size:13px; border-right:3px solid var(--accent);"><strong>${state.lang==='ar'?'رد المطور':"Developer's reply"}:</strong> ${escapeHtml(c.reply)}</div>`:''}
    </div>`).join('');
  return `<h1 class="page-title">${state.lang==='ar'?'رفع شكوى/اقتراح للمطور':'Submit feedback to developer'}</h1>
  <div class="page-sub">${state.lang==='ar'?'يصل مباشرة للمطور وله أولوية على شكاوي الأعضاء العاديين.':'Goes straight to the developer and takes priority over regular members\' feedback.'}</div>
  <div class="card" style="margin-bottom:20px;">
    <div class="field-row">
      <div class="field"><label>${state.lang==='ar'?'النوع':'Type'}</label>
        <select id="af-type"><option value="suggestion">${state.lang==='ar'?'اقتراح':'Suggestion'}</option><option value="complaint">${state.lang==='ar'?'شكوى':'Complaint'}</option></select>
      </div>
    </div>
    <div class="field"><label>${state.lang==='ar'?'التفاصيل':'Details'}</label><textarea id="af-text" rows="3"></textarea></div>
    <button class="btn btn-primary" data-action="submit-admin-complaint">${state.lang==='ar'?'إرسال للمطور':'Send to developer'}</button>
  </div>
  ${list || `<div class="empty">${state.lang==='ar'?'ما رفعت شي بعد':'Nothing submitted yet'}</div>`}`;
}

/* ============================================================
   LOGIN / ROLE SWITCH
============================================================ */
function passwordField(id){
  return `<div class="field"><label>${state.lang==='ar'?'كلمة المرور':'Password'}</label>
    <div style="position:relative;">
      <input id="${id}" type="password" style="padding-left:42px;">
      <button type="button" class="pw-eye" data-action="toggle-pw" data-target="${id}">${icon('eye',18)}</button>
    </div></div>`;
}
function pageLogin(){
  if(state.entered && state.currentUser.role!=='guest'){
    return `<h1 class="page-title">${t('logout')}</h1>
    <div class="card">
      <p style="margin-bottom:14px;">${state.lang==='ar'?'أنت مسجل الدخول كـ':'You are logged in as'} <strong>${state.currentUser.name}</strong></p>
      <button class="btn btn-danger" data-action="do-logout">${icon('logout',16)} ${t('logout')}</button>
    </div>`;
  }
  const tabs = [
    {key:'login', label: state.lang==='ar'?'تسجيل الدخول':'Sign in'},
    {key:'signup', label: state.lang==='ar'?'إنشاء حساب':'Create account'},
  ];
  const tabBtns = tabs.map(tb=>`<div class="chip ${state.loginTab===tb.key?'active':''}" data-action="set-login-tab" data-tab="${tb.key}">${tb.label}</div>`).join('');

  let body='';
  if(state.loginTab==='signup'){
    body = `
      <div class="field"><label>${state.lang==='ar'?'الاسم':'Name'}</label><input id="su-name" type="text" placeholder="${state.lang==='ar'?'اسمك':'Your name'}"></div>
      <div class="field"><label>${state.lang==='ar'?'البريد الإلكتروني':'Email'}</label><input id="su-email" type="email" placeholder="you@example.com"></div>
      ${passwordField('su-pass')}
      <button type="button" class="btn btn-primary" style="width:100%;" data-action="signup-submit">${icon('user',16)} ${state.lang==='ar'?'إنشاء حساب عضو':'Create member account'}</button>
      <div class="hint-box">${state.lang==='ar'?'حسابات الأعضاء فقط تُنشأ من هنا. حسابات الأدمن يُنشئها المطور، وحساب المطور ثابت.':'Only member accounts are created here. Admin accounts are created by the developer; the developer account is fixed.'}</div>`;
  } else {
    body = `
      <div class="field"><label>${state.lang==='ar'?'البريد الإلكتروني':'Email'}</label><input id="lg-user" type="email" placeholder="you@example.com"></div>
      ${passwordField('lg-pass')}
      <button type="button" class="btn btn-primary" style="width:100%;" data-action="login-submit">${icon('key',16)} ${t('login')}</button>
      <div class="hint-box">${state.lang==='ar'?'حسابات الأدمن والمطور تسجّل الدخول باسم المستخدم كالمعتاد. الأعضاء يسجّلون بالبريد الإلكتروني.':'Admin and developer accounts still log in with their username as usual. Members log in with their email.'}</div>`;
  }

  return `
  <div class="login-tabs">${tabBtns}</div>
  ${state.loginError?`<div class="error-box">${state.loginError}</div>`:''}
  <form onsubmit="return false;">${body}</form>
  ${!state.entered ? `<div style="text-align:center; margin-top:14px;">
    <button class="btn btn-sm" data-action="continue-guest">${icon('user',13)} ${state.lang==='ar'?'متابعة كزائر':'Continue as guest'}</button>
  </div>` : ''}`;
}

/* ============================================================
   PANEL: PENDING APPROVALS
============================================================ */
function pagePendingApprovals(){
  if(!DB.pendingProducts.length) return `<h1 class="page-title">${t('pending_products')}</h1>${emptyState('layers', state.lang==='ar'?'لا توجد طلبات':'No requests')}`;
  return `<h1 class="page-title">${t('pending_products')}</h1>
  <div class="grid grid-2">${DB.pendingProducts.map((p,i)=>`
    <div class="card">
      <img src="${p.image}" style="width:100%; aspect-ratio:16/9; object-fit:cover; border-radius:8px; margin-bottom:10px;">
      <h3>${tv({ar:p.nameAr,en:p.nameEn})}</h3>
      <p style="color:var(--dim); font-size:13px; margin:6px 0;">${tv({ar:p.descAr,en:p.descEn})}</p>
      <div style="font-size:12px; color:var(--dim2); margin-bottom:10px;">${state.lang==='ar'?'مقترح من':'Proposed by'}: ${p.proposedBy} · ${p.price} ${state.lang==='ar'?'ر.س':'SAR'}</div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-primary btn-sm" data-action="approve-product" data-i="${i}">${icon('check',14)} ${t('approve')}</button>
        <button class="btn btn-danger btn-sm" data-action="reject-product" data-i="${i}">${icon('x',14)} ${t('reject')}</button>
      </div>
    </div>`).join('')}</div>`;
}

/* ============================================================
   PANEL: PERMISSIONS MATRIX
============================================================ */
function pagePermissions(){
  const rows = Object.entries(DB.permissions).map(([key,p])=>`
    <tr>
      <td>${tv({ar:p.labelAr,en:p.labelEn})}</td>
      <td><span class="pill gold">${state.lang==='ar'?'دائمًا':'Always'}</span></td>
      <td>${permCell('admin',key,p)}</td>
      <td>${permCell('user',key,p)}</td>
    </tr>`).join('');
  return `<h1 class="page-title">${t('permissions')}</h1>
  <div class="page-sub">${state.lang==='ar'?'مصفوفة الصلاحيات — مستوى ١ (افتراضي لكل الأدوار)':'Permissions matrix — Level 1 (role defaults)'}</div>
  <div class="card" style="overflow-x:auto;">
    <table>
      <thead><tr><th>${state.lang==='ar'?'الصلاحية':'Permission'}</th><th>${t('developer')}</th><th>${t('admin')}</th><th>${t('member')}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}
function permCell(role, key, p){
  if(!p.editable) return `<span class="pill red">${state.lang==='ar'?'محظور':'Locked'}</span>`;
  const on = !!p[role];
  return `<div class="toggle ${on?'on':''}" data-action="toggle-perm" data-key="${key}" data-role="${role}"></div>`;
}

/* ============================================================
   PANEL: ACCOUNTS
============================================================ */
function pageAccounts(){
  const rows = DB.accounts.map(a=>`
    <tr>
      <td>${a.username}</td>
      <td><span class="pill ${a.active?'green':'red'}">${a.active? (state.lang==='ar'?'مفعّل':'Active') : (state.lang==='ar'?'موقوف':'Suspended')}</span></td>
      <td><button class="btn btn-sm" data-action="toggle-account" data-id="${a.id}">${a.active? (state.lang==='ar'?'إيقاف':'Suspend') : (state.lang==='ar'?'تفعيل':'Activate')}</button></td>
    </tr>`).join('');
  return `<h1 class="page-title">${t('accounts')}</h1>
  <div class="page-sub">${state.lang==='ar'?'ينشئ المطور حسابات للموظفين ويعطيهم بيانات الدخول':'The developer creates staff accounts and shares the login details'}</div>
  <div class="card" style="margin-bottom:18px;">
    <div class="field-row">
      <div class="field"><label>${state.lang==='ar'?'اسم المستخدم':'Username'}</label><input id="acc-user" type="text" placeholder="admin_xxx"></div>
      <div class="field"><label>${state.lang==='ar'?'كلمة المرور':'Password'}</label><input id="acc-pass" type="text" placeholder="••••••"></div>
    </div>
    <button class="btn btn-primary" data-action="add-account">${icon('plus',14)} ${state.lang==='ar'?'إنشاء حساب':'Create account'}</button>
  </div>
  <div class="card" style="overflow-x:auto;">
    <table><thead><tr><th>${state.lang==='ar'?'المستخدم':'Username'}</th><th>${state.lang==='ar'?'الحالة':'Status'}</th><th></th></tr></thead><tbody>${rows}</tbody></table>
  </div>`;
}

function canSeeBlockedMembers(){ return state.currentUser.role==='developer' || can('unblockUsers'); }
function pageBlockedMembers(){
  const blocked = DB.demoUsers.filter(u=>u.blocked);
  const rows = blocked.map(u=>`
    <tr class="blocked-member-row" data-name="${u.name.toLowerCase()}">
      <td>${u.name}</td>
      <td><span class="pill red">${state.lang==='ar'?'محظور':'Blocked'}</span></td>
      <td><button class="btn btn-sm" data-action="unblock-user" data-uid="${u.id}">${icon('check',14)} ${state.lang==='ar'?'إلغاء الحظر':'Unblock'}</button></td>
    </tr>`).join('');
  return `<h1 class="page-title">${state.lang==='ar'?'الأعضاء المحظورون':'Blocked members'}</h1>
  <div class="page-sub">${state.lang==='ar'?'الأعضاء اللي تم حظرهم من تسجيل الدخول للموقع':'Members currently blocked from logging into the site'}</div>
  <div class="search-bar" style="margin-bottom:16px;">
    ${icon('search',18)}
    <input type="text" placeholder="${state.lang==='ar'?'ابحث عن عضو بالاسم...':'Search a member by name...'}" oninput="filterBlockedMembers(this.value)">
  </div>
  <div class="card" style="overflow-x:auto;">
    <table><thead><tr><th>${state.lang==='ar'?'العضو':'Member'}</th><th>${state.lang==='ar'?'الحالة':'Status'}</th><th></th></tr></thead>
    <tbody id="blocked-members-list">${rows || `<tr><td colspan="3">${state.lang==='ar'?'لا يوجد أعضاء محظورون':'No blocked members'}</td></tr>`}</tbody></table>
  </div>`;
}
function filterBlockedMembers(q){
  q = q.trim().toLowerCase();
  document.querySelectorAll('.blocked-member-row').forEach(row=>{
    row.style.display = row.dataset.name.includes(q) ? '' : 'none';
  });
}

/* ============================================================
   PANEL: CATEGORIES ADMIN
============================================================ */
function pageCategoriesAdmin(){
  const rows = DB.categories.map((c,i)=>`
    <tr><td>${tv({ar:c.nameAr,en:c.nameEn})}</td><td>
      <button class="btn btn-sm btn-danger" data-action="delete-category-confirm" data-i="${i}" style="padding:10px 16px;">${icon('trash',22)}</button>
    </td></tr>`).join('');
  return `<h1 class="page-title">${t('categories_cfg')}</h1>
  <div class="card" style="margin-bottom:18px;">
    <div class="field-row">
      <div class="field"><label>${state.lang==='ar'?'الاسم بالعربي':'Name (Arabic)'}</label><input id="cat-ar" type="text"></div>
      <div class="field"><label>${state.lang==='ar'?'الاسم بالإنجليزي':'Name (English)'}</label><input id="cat-en" type="text"></div>
    </div>
    <button class="btn btn-primary" data-action="add-category">${icon('plus',14)} ${state.lang==='ar'?'إضافة تصنيف':'Add category'}</button>
  </div>
  <div class="card" style="overflow-x:auto;"><table><tbody>${rows}</tbody></table></div>`;
}

/* ============================================================
   PANEL: SLIDES ADMIN
============================================================ */
function pageSlidesAdmin(){
  const rows = DB.slides.map((s,i)=>`
    <div class="card" style="margin-bottom:10px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <strong>${tv({ar:s.titleAr,en:s.titleEn})}</strong>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-sm" data-action="edit-text" data-edit-path="slides.${i}.titleAr|slides.${i}.titleEn" style="padding:10px 16px;">${icon('edit',22)}</button>
          <button class="btn btn-sm btn-danger" data-action="delete-slide-confirm" data-i="${i}" style="padding:10px 16px;">${icon('trash',22)}</button>
        </div>
      </div>
    </div>`).join('');
  return `<h1 class="page-title">${t('slides_cfg')}</h1>
  <div class="page-sub">${state.lang==='ar'?'الشرائح هي البانرات المتحركة في أعلى الصفحة الرئيسية':'Slides are the rotating banners at the top of the home page'}</div>
  <div class="hint-box" style="margin-bottom:16px; font-size:13px;">${state.lang==='ar'
    ?'الشريحة = بانر إعلاني كبير يظهر أعلى الرئيسية ويتغير تلقائيًا كل ٦ ثوانٍ. كل شريحة لها عنوان ووصف بالعربي والإنجليزي. تُستخدم للإعلان عن موسم جديد، تخفيضات، أو منتج مميز. تقدر تضيف/تحذف/تعدّل أي شريحة هنا، أو تضغط ضغطة مطوّلة على الشريحة نفسها في الرئيسية لتعديلها مباشرة.'
    :'A slide is a large promotional banner shown at the top of the home page that auto-rotates every 6 seconds. Each slide has an AR/EN title and subtitle, used to announce a new season, sale, or featured product. You can add/remove/edit slides here, or long-press a slide on the home page to edit it directly.'}</div>
  ${rows}
  <button class="btn btn-primary" data-action="add-slide">${icon('plus',14)} ${state.lang==='ar'?'إضافة شريحة':'Add slide'}</button>`;
}

/* ============================================================
   PANEL: SIDEBAR VISIBILITY
============================================================ */
function pageSidebarAdmin(){
  const rows = SIDEBAR_ITEMS.map(it=>{
    const vis = DB.sidebarVisibility[it.key] || (DB.sidebarVisibility[it.key] = {admin:true, user:true});
    return `
    <tr>
      <td>${t(it.label)}</td>
      <td><div class="toggle ${vis.admin?'on':''}" data-action="toggle-sidebar-vis" data-key="${it.key}" data-role="admin"></div></td>
      <td><div class="toggle ${vis.user?'on':''}" data-action="toggle-sidebar-vis" data-key="${it.key}" data-role="user"></div></td>
    </tr>`;
  }).join('');
  return `<h1 class="page-title">${t('sidebar_cfg')}</h1>
  <div class="page-sub">${state.lang==='ar'?'تحكم بظهور عناصر القائمة الجانبية لكل دور':'Control sidebar item visibility per role'}</div>
  <div class="card" style="overflow-x:auto;">
    <table><thead><tr><th>${state.lang==='ar'?'العنصر':'Item'}</th><th>${t('admin')}</th><th>${t('member')}</th></tr></thead><tbody>${rows}</tbody></table>
  </div>`;
}

/* ============================================================
   PANEL: AUDIT LOG
============================================================ */
function pageAudit(){
  return `<h1 class="page-title">${t('audit')}</h1>
  <div class="card">${DB.audit.map(a=>`<div class="audit-item"><div class="t">${a.ts}</div><div>${a.text}</div></div>`).join('')}</div>`;
}

/* ============================================================
   PANEL: ADD PRODUCT (admin draft)
============================================================ */
const PAGE_BG_TARGETS = [
  {key:'home', ar:'الصفحة الرئيسية (خلفية عامة خلف كل الأقسام)', en:'Home page (overall background behind all sections)'},
  {key:'categories', ar:'صفحة التصنيفات', en:'Categories page'},
  {key:'product', ar:'صفحة المنتج', en:'Product page'},
  {key:'favorites', ar:'صفحة المفضلة', en:'Favorites page'},
  {key:'cart', ar:'صفحة السلة', en:'Cart page'},
  {key:'offers', ar:'صفحة العروض', en:'Offers page'},
  {key:'branches', ar:'صفحة فروعنا', en:'Branches page'},
  {key:'complaints', ar:'صفحة الشكاوي والاقتراحات', en:'Feedback page'},
  {key:'login', ar:'صفحة تسجيل الدخول', en:'Login page'},
];
function pageSiteSettings(){
  const cssVar = k => (getComputedStyle(document.documentElement).getPropertyValue('--'+k)||'').trim() || '#000000';
  const QUICK_SWATCHES = ['#0e0d0c','#f1ece4','#7a7167','#c2774c','#cda434','#5fae6e','#d9645a','#5a8fd9','#8b5cf6','#2a9d8f','#ec4899','#d946ef','#8b5e34','#e8dcc8','#1e3a5f'];
  const colorRow = (key,labelAr,labelEn,usageAr,usageEn,previewStyle) => `
    <div style="padding:12px 0; border-bottom:1px solid var(--border);">
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="width:34px; height:34px; border-radius:8px; flex:none; border:1px solid var(--border); ${previewStyle(key)}"></div>
        <div style="flex:1; min-width:0;">
          <div style="font-size:13px; font-weight:700;">${state.lang==='ar'?labelAr:labelEn}</div>
          <div style="font-size:11px; color:var(--dim2);">${state.lang==='ar'?usageAr:usageEn}</div>
        </div>
      </div>
      <div style="display:flex; gap:6px; margin-top:10px; flex-wrap:wrap;">
        ${QUICK_SWATCHES.map(hex=>`<div onclick="pickSwatch('${key}','${hex}')" title="${hex}" style="width:28px; height:28px; border-radius:6px; cursor:pointer; background:${hex}; border:1px solid var(--border); flex:none;"></div>`).join('')}
      </div>
      <div style="margin-top:10px;">
        <label style="font-size:11px; color:var(--dim);">${state.lang==='ar'?'الإضاءة (فاتح ⇄ غامق)':'Brightness (light ⇄ dark)'}</label>
        <input type="range" min="8" max="92" value="${hexToHsl(cssVar(key))[2]}" id="light-${key}" oninput="adjustLightness('${key}', this.value)" style="width:100%; margin-top:4px;">
      </div>
    </div>`;
  const groupHead = (ar,en) => `<div style="font-size:12px; font-weight:800; color:var(--accent); margin:16px 0 2px; text-transform:uppercase; letter-spacing:.5px;">${state.lang==='ar'?ar:en}</div>`;
  const bgPreview = k=>`background:var(--${k});`;
  const textPreview = k=>`background:var(--surface2); color:var(--${k}); display:flex; align-items:center; justify-content:center; font-size:16px; font-weight:800;`;
  const pageBgRows = PAGE_BG_TARGETS.map(pg=>{
    const bg = DB.pageBackgrounds[pg.key];
    return `<div class="page-bg-row" data-name="${(pg.ar+' '+pg.en).toLowerCase()}" style="display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid var(--border);">
      <span style="flex:1; font-size:13px; font-weight:700;">${state.lang==='ar'?pg.ar:pg.en}</span>
      ${bg?`<img src="${bg}" style="width:44px;height:44px;object-fit:cover;border-radius:8px;border:1px solid var(--border);">`:''}
      <input type="file" accept="image/*" onchange="handleFileUpload(this, null, (val)=>{DB.pageBackgrounds['${pg.key}']=val; render();})" style="max-width:150px; font-size:11px;">
      ${bg?`<button class="iconbtn btn-sm" style="width:38px;height:38px; color:var(--red);" data-action="remove-page-bg" data-key="${pg.key}">${icon('trash',18)}</button>`:''}
    </div>`;
  }).join('');
  const sectionsRows = DB.homeSections.map((sec,i)=>`
    <div class="site-section-row" data-name="${(sec.titleAr+' '+sec.titleEn).toLowerCase()}" style="display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid var(--border);">
      <span style="flex:1; font-size:13px; font-weight:700;">${tv({ar:sec.titleAr,en:sec.titleEn})}</span>
      ${sec.bgImage?`<img src="${sec.bgImage}" style="width:44px;height:44px;object-fit:cover;border-radius:8px;border:1px solid var(--border);">`:''}
      <input type="file" accept="image/*" onchange="handleFileUpload(this, null, (val)=>{DB.homeSections[${i}].bgImage=val; render();})" style="max-width:150px; font-size:11px;">
      ${sec.bgImage?`<button class="iconbtn btn-sm" style="width:38px;height:38px; color:var(--red);" data-action="remove-section-bg" data-i="${i}">${icon('trash',18)}</button>`:''}
    </div>`).join('');
  return `<h1 class="page-title">${state.lang==='ar'?'إعدادات الموقع':'Site settings'}</h1>

  <div class="card" style="margin-bottom:16px;">
    <label style="font-weight:700; display:block; margin-bottom:6px;">${state.lang==='ar'?'خيارات التوصيل والاستلام':'Delivery & pickup options'}</label>
    <div class="hint-box" style="margin-bottom:10px; font-size:12px;">${state.lang==='ar'?'حدد الطريقة المتاحة للعملاء عند إتمام الطلب.':'Choose which fulfillment method customers can use at checkout.'}</div>
    <div class="field">
      <label>${state.lang==='ar'?'الطريقة المتاحة':'Available method'}</label>
      <select id="ff-mode" onchange="DB.fulfillment.mode=this.value; render();">
        <option value="both" ${DB.fulfillment.mode==='both'?'selected':''}>${state.lang==='ar'?'الاثنين معًا (توصيل واستلام من الفرع)':'Both (delivery & branch pickup)'}</option>
        <option value="delivery" ${DB.fulfillment.mode==='delivery'?'selected':''}>${state.lang==='ar'?'توصيل فقط':'Delivery only'}</option>
        <option value="pickup" ${DB.fulfillment.mode==='pickup'?'selected':''}>${state.lang==='ar'?'استلام من الفرع فقط':'Branch pickup only'}</option>
      </select>
    </div>
    ${DB.fulfillment.mode!=='pickup'?`
    <div class="field">
      <label>${state.lang==='ar'?'رسوم التوصيل (ر.س)':'Delivery fee (SAR)'}</label>
      <input id="ff-fee" type="number" min="0" value="${DB.fulfillment.deliveryFee}" onchange="DB.fulfillment.deliveryFee=parseFloat(this.value)||0;">
    </div>`:''}
    ${DB.fulfillment.mode!=='delivery' && !DB.branches.length?`<div class="hint-box" style="font-size:12px;">${state.lang==='ar'?'ملاحظة: ما فيه فروع مضافة بعد — أضف فروعك من قسم "فروعنا" عشان تظهر كخيارات استلام.':'Note: no branches added yet — add them from the "Our branches" section so they appear as pickup options.'}</div>`:''}
  </div>

  <div class="card" style="margin-bottom:16px;">
    <label style="font-weight:700; display:block; margin-bottom:10px;">${state.lang==='ar'?'اسم المتجر':'Store name'}</label>
    <div class="field-row">
      <div class="field"><label>${state.lang==='ar'?'الاسم (عربي)':'Name (AR)'}</label><input id="brand-name-ar" value="${DB.siteContent.siteName.ar}"></div>
      <div class="field"><label>${state.lang==='ar'?'الاسم (إنجليزي)':'Name (EN)'}</label><input id="brand-name-en" value="${DB.siteContent.siteName.en}"></div>
    </div>
    <button class="btn btn-primary btn-sm" data-action="save-brand-name">${icon('check',14)} ${state.lang==='ar'?'حفظ الاسم':'Save name'}</button>
    <div class="hint-box" style="margin-top:10px; font-size:12px;">${state.lang==='ar'?'هذا الاسم يظهر أعلى كل صفحات الموقع بدل "دارين" — غيّره لاسم أي متجر أو مقهى تبيع له الموقع.':'This name appears at the top of every page instead of "Darin" — change it to any restaurant or café brand you sell the site to.'}</div>

    <div style="margin-top:18px;">
      <label style="font-weight:700; display:block; margin-bottom:8px;">${state.lang==='ar'?'لون موحّد لكل الاسم':'One color for the whole name'}</label>
      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        ${BRAND_SWATCHES.map(hex=>`<div onclick="pickBrandColor('${hex}')" title="${hex}" style="width:28px; height:28px; border-radius:6px; cursor:pointer; background:${hex}; border:1px solid var(--border);"></div>`).join('')}
        <div onclick="pickBrandColor('')" title="${state.lang==='ar'?'افتراضي':'Default'}" style="width:28px; height:28px; border-radius:6px; cursor:pointer; border:2px dashed var(--border); display:flex; align-items:center; justify-content:center; color:var(--dim2);">${icon('x',12)}</div>
      </div>
      <div style="margin-top:10px;">
        <label style="font-size:11px; color:var(--dim);">${state.lang==='ar'?'الإضاءة (فاتح ⇄ غامق)':'Brightness (light ⇄ dark)'}</label>
        <input type="range" min="8" max="92" value="${hexToHsl(DB.siteContent.nameColor||'#f1ece4')[2]}" oninput="adjustBrandLightness(this.value)" style="width:100%; margin-top:4px;">
      </div>
      <div class="hint-box" style="margin-top:10px; font-size:12px;">${state.lang==='ar'?'اختيار لون هنا يطبّق نفس اللون على كل حرف بالاسم، ويلغي أي تلوين مخصص لحرف معيّن بالأسفل.':'Picking a color here applies the same color to every letter, and clears any per-letter customization below.'}</div>
    </div>

    <div style="margin-top:18px; padding-top:14px; border-top:1px solid var(--border);">
      <label style="font-weight:700; display:block; margin-bottom:8px;">${state.lang==='ar'?'تحكم دقيق: لون كل حرف لحاله':'Fine control: color each letter individually'}</label>
      <div class="hint-box" style="margin-bottom:10px; font-size:12px;">${state.lang==='ar'?'مثلاً أول حرفين أزرق وآخر ٣ أحرف أبيض — اختر لون لأي حرف من دوائره، وحرّك الشريط تحته لتفتيحه أو تغميقه.':'For example, the first two letters blue and the last three white — pick a color for any letter from its dots, and drag the bar under it to lighten or darken.'}</div>
      ${nameColorEditor('ar', 'الاسم بالعربي', 'Arabic name')}
      ${nameColorEditor('en', 'الاسم بالإنجليزي', 'English name')}
    </div>

    <div style="margin-top:18px;">
      <label style="font-weight:700; display:block; margin-bottom:8px;">${state.lang==='ar'?'نوع خط الاسم':'Name font style'}</label>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${Object.entries(FONT_OPTIONS).map(([key,f])=>`
          <div onclick="setBrandFont('${key}')" style="display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:8px; cursor:pointer; border:1px solid ${DB.siteContent.nameFont===key?'var(--accent)':'var(--border)'}; background:${DB.siteContent.nameFont===key?'var(--surface2)':'transparent'};">
            <div style="flex:1; font-family:${f.family}; font-size:20px; font-weight:700;">${tv(DB.siteContent.siteName)}</div>
            <div style="font-size:11px; color:var(--dim);">${state.lang==='ar'?f.ar:f.en}</div>
            ${DB.siteContent.nameFont===key?icon('check',16):''}
          </div>`).join('')}
      </div>
    </div>

    <div style="margin-top:18px; padding-top:14px; border-top:1px solid var(--border);">
      <label style="font-weight:700; display:block; margin-bottom:8px;">${state.lang==='ar'?'شعار الموقع (صورة)':'Site logo (image)'}</label>
      <div style="display:flex; gap:14px; align-items:center; flex-wrap:wrap;">
        ${DB.siteContent.logoImage
          ? `<img id="logo-preview" src="${DB.siteContent.logoImage}" style="width:56px;height:56px;object-fit:contain;border-radius:10px;border:1px solid var(--border); background:var(--surface2);">`
          : `<div style="font-size:26px;">${brandMark(22,{interactive:false, withIds:false})}</div>`}
        <input type="file" accept="image/*" onchange="handleFileUpload(this, ${DB.siteContent.logoImage?"'logo-preview'":'null'}, (val)=>{DB.siteContent.logoImage=val; render();})">
        ${DB.siteContent.logoImage?`<button class="btn btn-danger btn-sm" data-action="remove-logo">${icon('trash',14)} ${state.lang==='ar'?'إزالة الشعار':'Remove logo'}</button>`:''}
      </div>
      ${DB.siteContent.logoImage?`
      <div style="margin-top:14px;">
        <label style="font-size:12px; color:var(--dim); display:block; margin-bottom:6px;">${state.lang==='ar'?'كيف تبي تظهر أعلى الصفحات؟':'How should it appear at the top of pages?'}</label>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn btn-sm ${DB.siteContent.logoDisplayMode==='both'?'btn-primary':''}" data-action="set-logo-mode" data-mode="both">${state.lang==='ar'?'الشعار + الاسم':'Logo + name'}</button>
          <button class="btn btn-sm ${DB.siteContent.logoDisplayMode==='logo-only'?'btn-primary':''}" data-action="set-logo-mode" data-mode="logo-only">${state.lang==='ar'?'الشعار فقط':'Logo only'}</button>
          <button class="btn btn-sm ${DB.siteContent.logoDisplayMode==='name-only'?'btn-primary':''}" data-action="set-logo-mode" data-mode="name-only">${state.lang==='ar'?'الاسم فقط':'Name only'}</button>
        </div>
      </div>`:''}
      <div class="hint-box" style="margin-top:10px; font-size:12px;">${state.lang==='ar'?'ارفع صورة (يفضّل مربعة أو أفقية بخلفية شفافة). لو رفعت شعار، تقدر تختار تعرضه لحاله أو مع الاسم معًا.':'Upload an image (square or wide, ideally transparent background). Once uploaded, choose to show it alone or together with the name.'}</div>
    </div>
  </div>

  <div class="card" style="margin-bottom:16px;">
    <label style="font-weight:700; display:block; margin-bottom:6px;">${state.lang==='ar'?'خلفيات صفحات الموقع':'Site page backgrounds'}</label>
    <div class="hint-box" style="margin-bottom:10px; font-size:12px;">${state.lang==='ar'?'ارفع خلفية خاصة لأي صفحة من صفحات الموقع كاملة، أو أزلها للرجوع للخلفية الافتراضية.':'Upload a dedicated background for any full page of the site, or remove it to revert to the default background.'}</div>
    <input type="text" placeholder="${state.lang==='ar'?'ابحث عن صفحة...':'Search pages...'}" oninput="filterPageBg(this.value)" style="margin-bottom:8px;">
    <div id="page-bg-list">${pageBgRows}</div>
  </div>

  <div class="card" style="margin-bottom:16px;">
    <label style="font-weight:700; display:block; margin-bottom:6px;">${state.lang==='ar'?'خلفيات أقسام الصفحة الرئيسية':'Home section backgrounds'}</label>
    <div class="hint-box" style="margin-bottom:10px; font-size:12px;">${state.lang==='ar'?'ارفع صورة خلفية لأي قسم من الصفحة الرئيسية، أو أزلها للرجوع للخلفية الافتراضية الشفافة. كل قسم تضيفه من الرئيسية يظهر هنا تلقائيًا.':'Upload a background image for any home page section, or remove it to revert to the default transparent background. Every section you add on the home page appears here automatically.'}</div>
    <input type="text" placeholder="${state.lang==='ar'?'ابحث عن قسم...':'Search sections...'}" oninput="filterSiteSections(this.value)" style="margin-bottom:8px;">
    <div id="site-sections-list">${sectionsRows || `<div class="empty">${state.lang==='ar'?'لا توجد أقسام بعد':'No sections yet'}</div>`}</div>
  </div>

  <div class="card">
    <label style="font-weight:700; display:block; margin-bottom:6px;">${state.lang==='ar'?'ألوان الموقع':'Site colors'}</label>
    <div class="hint-box" style="margin-bottom:6px; font-size:12px;">${state.lang==='ar'?'لكل لون: اضغط أي دائرة تحته لتطبيقه فورًا بضغطة وحدة، وحرّك شريط "الإضاءة" تحتها لو تبيه أفتح أو أغمق من نفس اللون.':'For each color: tap a dot below it to apply instantly with one click, then drag the "brightness" bar under it to make that same color lighter or darker.'}</div>
    ${groupHead('الألوان الرئيسية','Primary colors')}
    ${colorRow('accent','اللون الأساسي','Primary color','الأزرار الرئيسية، الروابط، تفاصيل مميزة','Primary buttons, links, highlighted details', bgPreview)}
    ${colorRow('gold','الذهبي','Gold','النجوم، الشارات، الإطار الذهبي حول أكواد الخصم','Stars, badges, the gold border around promo codes', bgPreview)}
    ${groupHead('حالات وتنبيهات','States & alerts')}
    ${colorRow('green','الأخضر','Green','رسائل النجاح والحالات الإيجابية','Success messages and positive states', bgPreview)}
    ${colorRow('red','الأحمر','Red','التحذيرات، أزرار الحذف، الأخطاء','Warnings, delete buttons, errors', bgPreview)}
    ${colorRow('blue','الأزرق','Blue','عناصر ثانوية وروابط معلومات','Secondary elements and info links', bgPreview)}
    ${groupHead('الخلفيات','Backgrounds')}
    ${colorRow('bg','خلفية الموقع','Site background','الخلفية العامة وراء كل شي','The overall background behind everything', bgPreview)}
    ${colorRow('surface','خلفية البطاقات','Cards background','خلفية البطاقات والأقسام الرئيسية','Cards & main section backgrounds', bgPreview)}
    ${colorRow('surface2','خلفية العناصر الفرعية','Secondary surface','خلفية الحقول والأزرار الثانوية والمودالات','Input fields, secondary buttons, modals', bgPreview)}
    ${colorRow('surface3','خلفية ثالثية','Tertiary surface','خلفية عناصر داخل العناصر الفرعية (طبقة أعمق)','Elements nested inside secondary surfaces', bgPreview)}
    ${groupHead('النصوص والحدود','Text & borders')}
    ${colorRow('text','النص الأساسي','Main text','لون النص الأساسي في كل الموقع','The main text color across the whole site', textPreview)}
    ${colorRow('dim','النص الخافت','Dim text','النصوص الثانوية الأقل أهمية (الأوصاف)','Secondary, less prominent text (descriptions)', textPreview)}
    ${colorRow('dim2','النص الأخفت','Dimmer text','أخفت درجة نص، للتفاصيل الصغيرة جدًا','The dimmest text shade, for very fine details', textPreview)}
    ${colorRow('border','لون الحدود','Border color','خطوط الحدود حول البطاقات والحقول','Border lines around cards and fields', bgPreview)}
    <button class="btn" data-action="reset-colors" style="margin-top:14px;">${icon('x',14)} ${state.lang==='ar'?'إعادة كل الألوان للوضع الافتراضي':'Reset all colors to default'}</button>
  </div>`;
}
function hexToHsl(hex){
  hex = (hex||'#000000').trim();
  const m = hex.match(/^#?([0-9a-f]{6})$/i);
  const clean = m ? m[1] : '000000';
  let r = parseInt(clean.substr(0,2),16)/255, g = parseInt(clean.substr(2,2),16)/255, b = parseInt(clean.substr(4,2),16)/255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h=0, s=0, l=(max+min)/2;
  if(max!==min){
    const d = max-min;
    s = l>0.5 ? d/(2-max-min) : d/(max+min);
    switch(max){
      case r: h=(g-b)/d+(g<b?6:0); break;
      case g: h=(b-r)/d+2; break;
      case b: h=(r-g)/d+4; break;
    }
    h*=60;
  }
  return [Math.round(h), Math.round(s*100), Math.round(l*100)];
}
function hslToHex(h,s,l){
  h/=360; s/=100; l/=100;
  let r,g,b;
  if(s===0){ r=g=b=l; }
  else{
    const hue2rgb=(p,q,t)=>{ if(t<0)t+=1; if(t>1)t-=1; if(t<1/6)return p+(q-p)*6*t; if(t<1/2)return q; if(t<2/3)return p+(q-p)*(2/3-t)*6; return p; };
    const q = l<0.5 ? l*(1+s) : l+s-l*s;
    const p = 2*l-q;
    r=hue2rgb(p,q,h+1/3); g=hue2rgb(p,q,h); b=hue2rgb(p,q,h-1/3);
  }
  const toHex = x => Math.round(x*255).toString(16).padStart(2,'0');
  return '#'+toHex(r)+toHex(g)+toHex(b);
}
let colorHueSat = {};
function pickSwatch(key, hex){
  const [h,s,l] = hexToHsl(hex);
  colorHueSat[key] = {h,s};
  document.documentElement.style.setProperty('--'+key, hex);
  const slider = document.getElementById('light-'+key);
  if(slider) slider.value = l;
}
function adjustLightness(key, lVal){
  let hs = colorHueSat[key];
  if(!hs){
    const [h,s] = hexToHsl(getComputedStyle(document.documentElement).getPropertyValue('--'+key));
    hs = {h,s}; colorHueSat[key] = hs;
  }
  const hex = hslToHex(hs.h, hs.s, parseInt(lVal));
  document.documentElement.style.setProperty('--'+key, hex);
}
let brandHueSat = null;
function setBrandFont(key){ DB.siteContent.nameFont = key; render(); }
function pickBrandColor(hex){
  DB.siteContent.nameColor = hex;
  DB.siteContent.nameCharColors = {ar:[], en:[]};
  brandHueSat = hex ? {h:hexToHsl(hex)[0], s:hexToHsl(hex)[1]} : null;
  render();
}
function adjustBrandLightness(lVal){
  if(!brandHueSat){
    const [h,s] = hexToHsl(DB.siteContent.nameColor||'#f1ece4');
    brandHueSat = {h,s};
  }
  const hex = hslToHex(brandHueSat.h, brandHueSat.s, parseInt(lVal));
  DB.siteContent.nameColor = hex;
  document.querySelectorAll('[id^="brand-char-"]').forEach(el=>{ el.style.color = hex; });
}
let nameCharHueSat = {ar:{}, en:{}};
function pickCharColor(lang, i, hex){
  const [h,s,l] = hexToHsl(hex);
  nameCharHueSat[lang] = nameCharHueSat[lang] || {};
  nameCharHueSat[lang][i] = {h,s};
  DB.siteContent.nameCharColors[lang] = DB.siteContent.nameCharColors[lang] || [];
  DB.siteContent.nameCharColors[lang][i] = hex;
  const editEl = document.getElementById('editchar-'+lang+'-'+i);
  if(editEl) editEl.style.color = hex;
  const liveEl = document.getElementById('brand-char-'+lang+'-'+i);
  if(liveEl) liveEl.style.color = hex;
  const slider = document.getElementById('charlight-'+lang+'-'+i);
  if(slider) slider.value = l;
}
function adjustCharLightness(lang, i, lVal){
  nameCharHueSat[lang] = nameCharHueSat[lang] || {};
  let hs = nameCharHueSat[lang][i];
  if(!hs){
    const current = (DB.siteContent.nameCharColors[lang]||[])[i] || DB.siteContent.nameColor || '#f1ece4';
    const [h,s] = hexToHsl(current);
    hs = {h,s}; nameCharHueSat[lang][i] = hs;
  }
  const hex = hslToHex(hs.h, hs.s, parseInt(lVal));
  DB.siteContent.nameCharColors[lang] = DB.siteContent.nameCharColors[lang] || [];
  DB.siteContent.nameCharColors[lang][i] = hex;
  const editEl = document.getElementById('editchar-'+lang+'-'+i);
  if(editEl) editEl.style.color = hex;
  const liveEl = document.getElementById('brand-char-'+lang+'-'+i);
  if(liveEl) liveEl.style.color = hex;
}
function nameColorEditor(lang, labelAr, labelEn){
  const text = DB.siteContent.siteName[lang] || '';
  const arr = (DB.siteContent.nameCharColors[lang] = DB.siteContent.nameCharColors[lang] || []);
  const font = (FONT_OPTIONS[DB.siteContent.nameFont]||FONT_OPTIONS.ruqaa).family;
  const rows = [...text].map((ch,i)=>{
    const current = arr[i] || DB.siteContent.nameColor || '#f1ece4';
    const l = hexToHsl(current)[2];
    return `<div style="display:flex; align-items:center; gap:12px; padding:8px 0; border-bottom:1px solid var(--border);">
      <span id="editchar-${lang}-${i}" style="font-family:${font}; font-size:22px; font-weight:700; width:30px; flex:none; text-align:center; color:${current};">${ch===' '?'&nbsp;':ch}</span>
      <div style="flex:1; min-width:0;">
        <div style="display:flex; gap:5px; flex-wrap:wrap; margin-bottom:6px;">
          ${BRAND_SWATCHES.map(hex=>`<div onclick="pickCharColor('${lang}',${i},'${hex}')" style="width:20px; height:20px; border-radius:5px; cursor:pointer; background:${hex}; border:1px solid var(--border); flex:none;"></div>`).join('')}
        </div>
        <input type="range" min="8" max="92" value="${l}" id="charlight-${lang}-${i}" oninput="adjustCharLightness('${lang}',${i},this.value)" style="width:100%;">
      </div>
    </div>`;
  }).join('');
  return `<div style="margin-top:12px;">
    <div style="font-size:12px; color:var(--dim); margin-bottom:4px;">${state.lang==='ar'?labelAr:labelEn}</div>
    ${rows || `<div class="empty" style="padding:8px 0;">${state.lang==='ar'?'لا يوجد نص':'No text'}</div>`}
  </div>`;
}
function filterPageBg(q){
  q = q.trim().toLowerCase();
  document.querySelectorAll('.page-bg-row').forEach(row=>{
    row.style.display = row.dataset.name.includes(q) ? 'flex' : 'none';
  });
}
function filterSiteSections(q){
  q = q.trim().toLowerCase();
  document.querySelectorAll('.site-section-row').forEach(row=>{
    row.style.display = row.dataset.name.includes(q) ? 'flex' : 'none';
  });
}

function pageAddProduct(){
  const cats = DB.categories.map(c=>`<option value="${c.id}">${tv({ar:c.nameAr,en:c.nameEn})}</option>`).join('');
  return `<h1 class="page-title">${t('add_product')}</h1>
  <div class="page-sub">${state.lang==='ar'?'سيُرسل المنتج كمسودة للمطور للموافقة عليه قبل النشر':'The product will be sent to the developer as a draft for approval'}</div>
  <div class="card">
    <div class="field-row">
      <div class="field"><label>${state.lang==='ar'?'الاسم (عربي)':'Name (Arabic)'}</label><input id="np-ar" type="text"></div>
      <div class="field"><label>${state.lang==='ar'?'الاسم (إنجليزي)':'Name (English)'}</label><input id="np-en" type="text"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>${state.lang==='ar'?'الوصف (عربي)':'Description (Arabic)'}</label><textarea id="np-desc-ar" rows="3"></textarea></div>
      <div class="field"><label>${state.lang==='ar'?'الوصف (إنجليزي)':'Description (English)'}</label><textarea id="np-desc-en" rows="3"></textarea></div>
    </div>
    <div class="field-row">
      <div class="field"><label>${state.lang==='ar'?'السعر':'Price'}</label><input id="np-price" type="number" value="0"></div>
      <div class="field"><label>${state.lang==='ar'?'التصنيف':'Category'}</label><select id="np-cat">${cats}</select></div>
    </div>
    <button class="btn btn-primary" data-action="submit-product">${icon('plus',14)} ${state.lang==='ar'?'إرسال للموافقة':'Submit for approval'}</button>
  </div>`;
}

/* ============================================================
   PANEL: CODE EDITOR
============================================================ */
const CODE_SAMPLES = {
  html: `<!-- مثال: قسم البطاقة الترويجية -->
<section class="hero-banner">
  <h1>قهوة طازجة كل أسبوع</h1>
  <p>تحميص محلي بكميات صغيرة</p>
  <button class="cta">تصفح الآن</button>
</section>`,
  css: `:root{
  --accent: ${getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#c2774c'};
  --gold: ${getComputedStyle(document.documentElement).getPropertyValue('--gold') || '#cda434'};
}
.cta{
  background: var(--accent);
  color: #1b120a;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
}`,
  js: `// مثال: مدة عرض شرائح الصفحة الرئيسية (بالمللي ثانية)
const SLIDE_INTERVAL = 5000;

document.querySelectorAll('.cta').forEach(btn=>{
  btn.addEventListener('click', ()=> alert('مرحبًا بك في دارين!'));
});`
};
let codeState = {tab:'html', edited:{html:CODE_SAMPLES.html, css:CODE_SAMPLES.css, js:CODE_SAMPLES.js}};

function pageCodeEditor(){
  const tabs = ['html','css','js'].map(k=>`<div class="tab ${codeState.tab===k?'active':''}" data-action="code-tab" data-tab="${k}">${k.toUpperCase()}</div>`).join('');
  const code = codeState.edited[codeState.tab];
  const lines = code.split('\\n').map((_,i)=>i+1).join('\\n');
  return `<h1 class="page-title">${t('code_editor')}</h1>
  <div class="warn-box">${icon('warn',18)} <div>${state.lang==='ar'
    ?'تحذير: التعديل المباشر على الكود قد يكسر الموقع بالكامل لجميع الزوار. استخدم زر "تجربة" لمعاينة النتيجة في بيئة منفصلة قبل أي تطبيق نهائي، ويمكنك التراجع في أي وقت.'
    :'Warning: editing code directly can break the live site for everyone. Use "Test" to preview changes in a sandbox before applying, and you can revert anytime.'}</div></div>
  <div class="tabs">${tabs}</div>
  <div class="editor-toolbar"><span>${codeState.tab}.${codeState.tab==='js'?'js':codeState.tab}</span><span>${state.lang==='ar'?'وضع القراءة/الكتابة':'read/write'}</span></div>
  <div class="editor-wrap">
    <div class="editor-gutter">${lines}</div>
    <textarea class="editor-area" id="code-area" spellcheck="false">${escapeHtml(code)}</textarea>
  </div>
  <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap;">
    <button class="btn" data-action="code-test">${icon('check',14)} ${state.lang==='ar'?'تجربة':'Test'}</button>
    ${codeState.tab==='css'
      ? `<button class="btn btn-primary" data-action="code-apply">${icon('check',14)} ${state.lang==='ar'?'تطبيق على الموقع':'Apply to site'}</button>`
      : `<button class="btn" disabled style="opacity:.5; cursor:not-allowed;" title="${state.lang==='ar'?'التطبيق المباشر متاح حاليًا لـ CSS فقط':'Live apply is currently CSS only'}">${icon('check',14)} ${state.lang==='ar'?'التطبيق المباشر غير متاح لهذا التبويب':'Live apply not available for this tab'}</button>`}
    <button class="btn btn-danger" data-action="code-cancel">${icon('x',14)} ${state.lang==='ar'?'تراجع عن كل التغييرات':'Revert all changes'}</button>
  </div>
  <iframe class="preview-frame" id="code-preview" style="display:none;"></iframe>`;
}
function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* ============================================================
   GENERIC IMAGE UPLOAD (product images, logo, section backgrounds)
============================================================ */
function handleFileUpload(inputEl, previewImgId, onLoaded){
  const file = inputEl.files && inputEl.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    const dataUrl = reader.result;
    if(previewImgId){
      const img = document.getElementById(previewImgId);
      if(img){ img.src = dataUrl; img.dataset.value = dataUrl; }
    }
    if(onLoaded) onLoaded(dataUrl);
  };
  reader.readAsDataURL(file);
}

/* ============================================================
   LONG PRESS — DEVELOPER TEXT EDITING
============================================================ */
let pressTimer=null;
function attachLongPress(){
  if(state.currentUser.role!=='developer') return;
  document.querySelectorAll('.editable-text[data-edit-path]').forEach(el=>{
    el.addEventListener('pointerdown', (e)=>{
      pressTimer = setTimeout(()=> openTextEdit(el.dataset.editPath), 550);
    });
    ['pointerup','pointerleave','pointercancel'].forEach(ev=> el.addEventListener(ev, ()=> clearTimeout(pressTimer)));
  });
}
function getByPath(obj, path){
  return path.split('.').reduce((o,k)=> o && o[k], obj);
}
function setByPath(obj, path, val){
  const keys = path.split('.');
  let o = obj;
  for(let i=0;i<keys.length-1;i++) o = o[keys[i]];
  o[keys[keys.length-1]] = val;
}
function openTextEdit(pathSpec){
  const paths = pathSpec.split('|');
  const arPath = paths[0], enPath = paths[1] || paths[0];
  const isObjectField = paths.length===1 && arPath.split('.').length===2; // siteContent.x -> object {ar,en}
  let arVal, enVal;
  if(isObjectField){
    const obj = getByPath(DB, arPath) || {};
    arVal = obj.ar || ''; enVal = obj.en || '';
  } else {
    arVal = getByPath(DB, arPath) || '';
    enVal = getByPath(DB, enPath) || '';
  }
  openModal(`
    <div class="modal-head"><h3>${state.lang==='ar'?'تعديل النص':'Edit text'}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body">
      <div class="field"><label>العربية</label><textarea id="edit-ar" rows="3">${arVal}</textarea></div>
      <div class="field"><label>English</label><textarea id="edit-en" rows="3">${enVal}</textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${t('cancel')}</button>
      <button class="btn btn-primary" data-action="save-text" data-ar-path="${arPath}" data-en-path="${enPath}" data-is-obj="${isObjectField}">${t('save')}</button>
    </div>`);
}

/* ============================================================
   MODAL HELPERS
============================================================ */
function openModal(html, wide=false){
  document.getElementById('modal-root').innerHTML = `<div class="modal-overlay" data-action="close-modal-bg"><div class="modal ${wide?'wide':''}">${html}</div></div>`;
}
function closeModal(){ document.getElementById('modal-root').innerHTML=''; editLayoutState=null; activeCommentsModalPid=null; }

/* ============================================================
   PRODUCT EDIT MODAL (developer)
============================================================ */
let editLayoutState = null;
function renderLayoutList(){
  return editLayoutState.map((key,i)=>`
    <div style="display:flex; align-items:center; gap:10px; background:var(--surface2); border:1px solid var(--border); border-radius:8px; padding:8px 12px; margin-bottom:6px;">
      <span style="flex:1; font-size:13px; font-weight:700;">${i+1}. ${tv(LAYOUT_BLOCKS[key])}</span>
      <button class="iconbtn btn-sm" style="width:30px;height:30px;" data-action="layout-move" data-i="${i}" data-dir="up" ${i===0?'disabled':''}>${icon('arrowUp',15)}</button>
      <button class="iconbtn btn-sm" style="width:30px;height:30px;" data-action="layout-move" data-i="${i}" data-dir="down" ${i===editLayoutState.length-1?'disabled':''}>${icon('arrowDown',15)}</button>
    </div>`).join('');
}
function openProductEdit(pid){
  const p = DB.products.find(x=>x.id===pid);
  editLayoutState = (p.layout && p.layout.length) ? [...p.layout] : Object.keys(LAYOUT_BLOCKS);
  const cats = DB.categories.map(c=>`<option value="${c.id}" ${c.id===p.categoryId?'selected':''}>${tv({ar:c.nameAr,en:c.nameEn})}</option>`).join('');
  openModal(`
    <div class="modal-head"><h3>${state.lang==='ar'?'تعديل المنتج':'Edit product'}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body">
      <div class="field-row">
        <div class="field"><label>الاسم (عربي)</label><input id="pe-name-ar" value="${p.nameAr}"></div>
        <div class="field"><label>Name (English)</label><input id="pe-name-en" value="${p.nameEn}"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>الوصف (عربي)</label><textarea id="pe-desc-ar" rows="3">${p.descAr}</textarea></div>
        <div class="field"><label>Description (English)</label><textarea id="pe-desc-en" rows="3">${p.descEn}</textarea></div>
      </div>
      <div class="field-row">
        <div class="field"><label>${state.lang==='ar'?'السعر':'Price'}</label><input id="pe-price" type="number" value="${p.price}"></div>
        <div class="field"><label>${state.lang==='ar'?'التصنيف':'Category'}</label><select id="pe-cat">${cats}</select></div>
      </div>
      <div class="field">
        <label>${state.lang==='ar'?'حالة المنتج':'Product status'}</label>
        <select id="pe-status">
          <option value="published" ${p.status==='published'?'selected':''}>${state.lang==='ar'?'منشور — يظهر للزوار':'Published — visible to visitors'}</option>
          <option value="draft" ${p.status==='draft'?'selected':''}>${state.lang==='ar'?'غير منشور — مخفي مؤقتًا':'Unpublished — temporarily hidden'}</option>
        </select>
      </div>
      ${(state.currentUser.role==='developer' || can('manageStock')) ? `
      <div class="field" style="display:flex; align-items:center; gap:10px; flex-direction:row;">
        <input type="checkbox" id="pe-outofstock" ${p.outOfStock?'checked':''} style="width:18px; height:18px;">
        <label style="margin:0;">${state.lang==='ar'?'نفذت الكمية (يمنع الشراء مؤقتًا مع إبقاء المنتج ظاهرًا)':'Out of stock (blocks purchase while keeping the product visible)'}</label>
      </div>`:''}
      <div class="field">
        <label>${state.lang==='ar'?'صورة المنتج':'Product image'}</label>
        <div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;">
          <img id="pe-image-preview" src="${p.image}" style="width:64px;height:64px;object-fit:cover;border-radius:8px;border:1px solid var(--border);">
          <input type="file" accept="image/*" onchange="handleFileUpload(this,'pe-image-preview')" style="flex:1;">
        </div>
        <input id="pe-image" value="${p.image.startsWith('data:')?'':p.image}" placeholder="${state.lang==='ar'?'أو الصق رابط صورة':'or paste an image URL'}">
      </div>
      <div class="field"><label>${state.lang==='ar'?'رابط الفيديو':'Video URL'}</label><input id="pe-video" value="${p.video}" placeholder="https://..."></div>
      <div class="field">
        <label>${state.lang==='ar'?'ترتيب عناصر صفحة المنتج':'Product page block order'}</label>
        <div style="font-size:11px; color:var(--dim2); margin-bottom:8px;">${state.lang==='ar'?'استخدم الأسهم لإعادة ترتيب كل عنصر — الصورة، الفيديو، العنوان، التقييم، التصنيف، الوصف، السعر، التعليقات.':'Use the arrows to reorder every block — image, video, title, rating, category, description, price, comments.'}</div>
        <div id="layout-list">${renderLayoutList()}</div>
      </div>
    </div>
    <div class="modal-foot" style="justify-content:space-between;">
      <button class="btn btn-danger" data-action="delete-product-confirm" data-id="${pid}">${icon('trash',16)} ${state.lang==='ar'?'حذف المنتج':'Delete product'}</button>
      <div style="display:flex; gap:10px;">
        <button class="btn" data-action="close-modal">${t('cancel')}</button>
        <button class="btn btn-primary" data-action="save-product" data-id="${pid}">${t('save')}</button>
      </div>
    </div>`, true);
}

function confirmAction(titleAr, titleEn, msgAr, msgEn, action, dataAttrs, btnAr, btnEn, btnIcon){
  const attrs = Object.entries(dataAttrs||{}).map(([k,v])=>`data-${k}="${v}"`).join(' ');
  openModal(`
    <div class="modal-head"><h3>${state.lang==='ar'?titleAr:titleEn}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body"><div class="warn-box">${icon('warn',18)} <div>${state.lang==='ar'?msgAr:msgEn}</div></div></div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${t('cancel')}</button>
      <button class="btn btn-danger" data-action="${action}" ${attrs}>${icon(btnIcon,16)} ${state.lang==='ar'?btnAr:btnEn}</button>
    </div>`);
}
function confirmDelete(msgAr, msgEn, action, dataAttrs){
  confirmAction('تأكيد الحذف','Confirm delete', msgAr, msgEn, action, dataAttrs, 'حذف نهائي','Delete permanently', 'trash');
}

function openNotificationsModal(){
  const role = state.currentUser.role;
  let itemsHtml = '';
  if(role==='admin'){
    const approvals = DB.productApprovals.filter(a=>a.submittedBy===state.currentUser.name);
    const replies = DB.complaints.filter(c=>c.fromAdmin && c.userName===state.currentUser.name && c.reply);
    itemsHtml = approvals.map(a=>`<div class="card" style="margin-bottom:10px; display:flex; align-items:center; gap:10px;">${icon('check',18)} <span>${state.lang==='ar'?`تمت الموافقة على منتجك: ${escapeHtml(a.nameAr)}`:`Your product was approved: ${escapeHtml(a.nameEn)}`}</span></div>`).join('')
      + replies.map(c=>`<div class="card" style="margin-bottom:10px;"><strong>${state.lang==='ar'?`رد المطور على ${c.type==='complaint'?'شكواك':'اقتراحك'}:`:`Developer's reply to your ${c.type==='complaint'?'complaint':'suggestion'}:`}</strong><p style="margin-top:6px;">${escapeHtml(c.reply)}</p></div>`).join('');
    approvals.forEach(a=>a.seen=true);
    replies.forEach(c=>c.seenByAuthor=true);
  } else if(role==='user'){
    const replies = DB.complaints.filter(c=>!c.fromAdmin && c.userName===state.currentUser.name && c.reply);
    itemsHtml = replies.map(c=>`<div class="card" style="margin-bottom:10px;"><strong>${state.lang==='ar'?`رد على ${c.type==='complaint'?'شكواك':'اقتراحك'}:`:`Reply to your ${c.type==='complaint'?'complaint':'suggestion'}:`}</strong><p style="margin-top:6px;">${escapeHtml(c.reply)}</p></div>`).join('');
    replies.forEach(c=>c.seenByAuthor=true);
  }
  openModal(`
    <div class="modal-head"><h3>${state.lang==='ar'?'الإشعارات':'Notifications'}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body">${itemsHtml || `<div class="empty">${state.lang==='ar'?'لا توجد إشعارات':'No notifications'}</div>`}</div>
    <div class="modal-foot"><button class="btn" data-action="close-modal">${t('cancel')}</button></div>`);
  render();
}

/* ============================================================
   EVENT DELEGATION
============================================================ */
document.addEventListener('click', async (e)=>{
  const t_ = e.target.closest('[data-action]');
  if(!t_) return;
  const a = t_.dataset.action;

  switch(a){
    case 'toggle-sidebar': state.sidebarOpen = !state.sidebarOpen; render(); break;
    case 'toggle-lang': state.lang = state.lang==='ar'?'en':'ar'; render(); break;
    case 'nav':
      state.page = t_.dataset.page;
      if(t_.dataset.id) state.productId = t_.dataset.id;
      state.sidebarOpen=false; window.scrollTo(0,0); render(); break;
    case 'goto-search': state.page='home'; render(); document.querySelector('.search-bar input')?.focus(); break;
    case 'goto-notif': openNotificationsModal(); break;
    case 'goto-login': state.page='login'; state.loginError=''; render(); break;
    case 'do-logout': {
      const tok = localStorage.getItem('darin_session_token');
      if(tok){ localStorage.removeItem('darin_session_token'); fetch('/api/logout', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({token:tok})}).catch(()=>{}); }
      state.currentUser={id:'guest',name:I18N.guest.ar,role:'guest'};
      state.entered=false; state.page='login'; state.loginError=''; render(); break;
    }
    case 'set-login-tab': state.loginTab=t_.dataset.tab; state.loginError=''; render(); break;
    case 'continue-guest':
      state.currentUser={id:'guest',name:I18N.guest.ar,role:'guest'};
      state.entered=true; state.page='home'; render(); break;
    case 'toggle-pw': {
      const inp = document.getElementById(t_.dataset.target);
      if(inp){
        const show = inp.type==='password';
        inp.type = show?'text':'password';
        t_.innerHTML = icon(show?'eyeOff':'eye',18);
      }
      break;
    }
    case 'login-submit': {
      const u = document.getElementById('lg-user').value.trim();
      const p = document.getElementById('lg-pass').value;
      let found=null;
      let errMsg = state.lang==='ar'?'بيانات الدخول غير صحيحة':'Invalid credentials';
      if(u===DB.devAccount.username && p===DB.devAccount.password){
        found={id:'dev', name:t('developer'), role:'developer'};
      } else {
        const acc = DB.accounts.find(a=>a.username===u && a.password===p && a.active);
        if(acc) found={id:acc.id, name:acc.username, role:'admin'};
        else {
          try{
            const res = await fetch('/api/login', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email:u, password:p})});
            const data = await res.json();
            if(res.ok){
              found = {id:data.id, name:data.name, email:data.email, role:data.role};
              localStorage.setItem('darin_session_token', data.token);
              if(!DB.demoUsers.some(x=>x.id===data.id)) DB.demoUsers.push({id:data.id, name:data.name, email:data.email, password:'', warnings:0, mute:null, blocked:false});
            } else {
              errMsg = data.error || errMsg;
            }
          }catch(e){
            errMsg = state.lang==='ar'?'تعذّر الاتصال بالخادم، تأكد من اتصالك بالإنترنت':'Could not reach the server, check your connection';
          }
        }
      }
      if(found){
        state.currentUser=found; state.entered=true; state.page='home'; state.loginError='';
        render(); showToast(`${state.lang==='ar'?'تم تسجيل الدخول كـ':'Logged in as'} ${found.name}`);
      } else {
        state.loginError = errMsg;
        render();
      }
      break;
    }
    case 'signup-submit': {
      const name = document.getElementById('su-name').value.trim();
      const email = document.getElementById('su-email').value.trim();
      const pass = document.getElementById('su-pass').value;
      if(!name || !email || !pass){ state.loginError = state.lang==='ar'?'أدخل الاسم والبريد وكلمة المرور':'Enter name, email and password'; render(); break; }
      try{
        const res = await fetch('/api/register', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name, email, password:pass})});
        const data = await res.json();
        if(!res.ok){ state.loginError = data.error || (state.lang==='ar'?'تعذّر إنشاء الحساب':'Could not create account'); render(); break; }
        localStorage.setItem('darin_session_token', data.token);
        DB.demoUsers.push({id:data.id, name:data.name, email:data.email, password:'', warnings:0, mute:null, blocked:false});
        state.currentUser={id:data.id, name:data.name, email:data.email, role:'user'}; state.entered=true; state.page='home'; state.loginError='';
        audit((state.lang==='ar'?'عضو جديد سجّل: ':'New member signed up: ')+name);
        render(); showToast(state.lang==='ar'?'تم إنشاء الحساب':'Account created');
      }catch(e){
        state.loginError = state.lang==='ar'?'تعذّر الاتصال بالخادم، تأكد من اتصالك بالإنترنت':'Could not reach the server, check your connection';
        render();
      }
      break;
    }

    case 'toggle-fav': {
      const list = getFav(); const id=t_.dataset.id;
      const i=list.indexOf(id);
      if(i>-1) list.splice(i,1); else list.push(id);
      render(); break;
    }
    case 'toggle-cart': {
      const list = getCart(); const id=t_.dataset.id;
      const i=list.indexOf(id);
      if(i>-1) list.splice(i,1); else list.push(id);
      render(); break;
    }
    case 'open-checkout': {
      if(!getCart().length) break;
      if(state.currentUser.role==='guest'){ state.page='login'; render(); showToast(state.lang==='ar'?'سجّل دخول لإتمام الطلب':'Log in to check out'); break; }
      openCheckoutModal(); break;
    }
    case 'confirm-checkout': {
      const method = document.getElementById('co-method').value;
      if(method==='pickup' && !DB.branches.length) break;
      const ids = getCart();
      const products = DB.products.filter(p=>ids.includes(p.id));
      if(!products.length) break;
      const subtotal = products.reduce((a,p)=>a+p.price,0);
      const fee = method==='delivery' ? DB.fulfillment.deliveryFee : 0;
      const branchEl = document.getElementById('co-branch');
      const branch = method==='pickup' && branchEl ? DB.branches.find(b=>b.id===branchEl.value) : null;
      const order = {
        id:'ord'+Date.now(),
        userName: state.currentUser.name,
        items: products.map(p=>({nameAr:p.nameAr, nameEn:p.nameEn, price:p.price})),
        method,
        address: method==='delivery' ? (document.getElementById('co-address')?.value.trim()||'') : '',
        branchNameAr: branch?branch.nameAr:'', branchNameEn: branch?branch.nameEn:'',
        subtotal, fee, total: subtotal+fee,
        ts: new Date().toISOString(),
      };
      DB.orders.push(order);
      DB._carts[cartKey()] = [];
      audit((state.lang==='ar'?'طلب جديد من ':'New order from ')+state.currentUser.name);
      closeModal(); state.page='home'; render();
      showToast(state.lang==='ar'?'تم إرسال طلبك بنجاح':'Your order was placed successfully');
      try{ await fetch('/api/orders', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(order)}); }catch(e){}
      break;
    }
    case 'set-category': state.category=t_.dataset.id; render(); break;
    case 'goto-slide': showSlide(parseInt(t_.dataset.i)); break;
    case 'rate': {
      if(!can('rate') || state.currentUser.role==='guest'){ showToast(state.lang==='ar'?'سجّل دخول للتقييم':'Log in to rate'); break; }
      const p = DB.products.find(x=>x.id===t_.dataset.id || x.id===t_.closest('[data-id]')?.dataset.id);
      const prod = DB.products.find(x=>x.id===state.productId);
      prod.ratings[state.currentUser.id] = parseInt(t_.closest('[data-v]').dataset.v);
      render(); break;
    }

    case 'edit-text': {
      if(state.currentUser.role!=='developer') break;
      openTextEdit(t_.dataset.editPath); break;
    }
    case 'close-modal': closeModal(); break;
    case 'open-comments-modal': openCommentsModal(t_.dataset.id); break;
    case 'close-modal-bg': if(e.target.classList.contains('modal-overlay')) closeModal(); break;
    case 'save-text': {
      const ar = document.getElementById('edit-ar').value;
      const en = document.getElementById('edit-en').value;
      const arPath = t_.dataset.arPath, enPath = t_.dataset.enPath;
      const isObj = t_.dataset.isObj==='true';
      if(isObj && arPath===enPath){
        setByPath(DB, arPath+'.ar', ar);
        setByPath(DB, arPath+'.en', en);
      } else {
        setByPath(DB, arPath, ar);
        setByPath(DB, enPath, en);
      }
      audit((state.lang==='ar'?'تم تعديل نص: ':'Text edited: ')+arPath);
      closeModal(); render(); showToast(state.lang==='ar'?'تم الحفظ':'Saved'); break;
    }

    case 'open-product-edit': openProductEdit(t_.dataset.id); break;
    case 'layout-move': {
      const i = parseInt(t_.dataset.i);
      const dir = t_.dataset.dir;
      const j = dir==='up' ? i-1 : i+1;
      if(j<0 || j>=editLayoutState.length) break;
      [editLayoutState[i], editLayoutState[j]] = [editLayoutState[j], editLayoutState[i]];
      document.getElementById('layout-list').innerHTML = renderLayoutList();
      break;
    }
    case 'save-product': {
      const p = DB.products.find(x=>x.id===t_.dataset.id);
      p.nameAr = document.getElementById('pe-name-ar').value;
      p.nameEn = document.getElementById('pe-name-en').value;
      p.descAr = document.getElementById('pe-desc-ar').value;
      p.descEn = document.getElementById('pe-desc-en').value;
      p.price = parseFloat(document.getElementById('pe-price').value)||0;
      p.categoryId = document.getElementById('pe-cat').value;
      p.status = document.getElementById('pe-status').value;
      const stockCb = document.getElementById('pe-outofstock');
      if(stockCb) p.outOfStock = stockCb.checked;
      const uploaded = document.getElementById('pe-image-preview').dataset.value;
      const imgUrl = document.getElementById('pe-image').value.trim();
      if(uploaded) p.image = uploaded;
      else if(imgUrl) p.image = imgUrl;
      p.video = document.getElementById('pe-video').value.trim();
      p.layout = [...editLayoutState];
      editLayoutState = null;
      audit((state.lang==='ar'?'تم تعديل منتج: ':'Product edited: ')+p.nameAr);
      closeModal(); render(); showToast(state.lang==='ar'?'تم حفظ المنتج':'Product saved');
      try{ await fetch('/api/products', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(p)}); }catch(e){}
      break;
    }
    case 'open-map': window.open(decodeURIComponent(t_.dataset.url), '_blank'); break;
    case 'open-branch-edit': openBranchEdit(parseInt(t_.dataset.i)); break;
    case 'save-branch': {
      const i = parseInt(t_.dataset.i);
      const uploaded = document.getElementById('br-image-preview').dataset.value;
      const imgUrl = document.getElementById('br-image').value.trim();
      const obj = {
        id: i<0 ? 'br'+Date.now() : DB.branches[i].id,
        nameAr: document.getElementById('br-name-ar').value,
        nameEn: document.getElementById('br-name-en').value,
        descAr: document.getElementById('br-desc-ar').value,
        descEn: document.getElementById('br-desc-en').value,
        mapUrl: document.getElementById('br-map').value.trim(),
        image: uploaded || imgUrl || (i>=0 ? DB.branches[i].image : ''),
      };
      if(i<0) DB.branches.push(obj); else DB.branches[i]=obj;
      audit((state.lang==='ar'?'تم حفظ فرع: ':'Branch saved: ')+obj.nameAr);
      closeModal(); render(); showToast(state.lang==='ar'?'تم حفظ الفرع':'Branch saved'); break;
    }
    case 'delete-branch-confirm': {
      const b = DB.branches[parseInt(t_.dataset.i)];
      confirmDelete(`سيتم حذف فرع "${b.nameAr}" نهائيًا.`, `Branch "${b.nameEn}" will be permanently deleted.`, 'delete-branch', {i:t_.dataset.i});
      break;
    }
    case 'delete-branch': DB.branches.splice(parseInt(t_.dataset.i),1); closeModal(); render(); showToast(state.lang==='ar'?'تم حذف الفرع':'Branch deleted'); break;
    case 'open-social-edit': openSocialEdit(parseInt(t_.dataset.i)); break;
    case 'save-social': {
      const i = parseInt(t_.dataset.i);
      const uploaded = document.getElementById('so-image-preview').dataset.value;
      const imgUrl = document.getElementById('so-image').value.trim();
      const obj = {
        id: i<0 ? 'so'+Date.now() : DB.socialAccounts[i].id,
        nameAr: document.getElementById('so-name-ar').value,
        nameEn: document.getElementById('so-name-en').value,
        descAr: document.getElementById('so-desc-ar').value,
        descEn: document.getElementById('so-desc-en').value,
        url: document.getElementById('so-url').value.trim(),
        image: uploaded || imgUrl || (i>=0 ? DB.socialAccounts[i].image : ''),
      };
      if(i<0) DB.socialAccounts.push(obj); else DB.socialAccounts[i]=obj;
      audit((state.lang==='ar'?'تم حفظ حساب تواصل: ':'Social account saved: ')+obj.nameAr);
      closeModal(); render(); showToast(state.lang==='ar'?'تم الحفظ':'Saved'); break;
    }
    case 'delete-social-confirm': {
      const s = DB.socialAccounts[parseInt(t_.dataset.i)];
      confirmDelete(`سيتم حذف حساب "${s.nameAr}" نهائيًا.`, `Account "${s.nameEn}" will be permanently deleted.`, 'delete-social', {i:t_.dataset.i});
      break;
    }
    case 'delete-social': DB.socialAccounts.splice(parseInt(t_.dataset.i),1); closeModal(); render(); showToast(state.lang==='ar'?'تم الحذف':'Deleted'); break;
    case 'delete-product-confirm': {
      const pid = t_.dataset.id;
      const p = DB.products.find(x=>x.id===pid);
      openModal(`
        <div class="modal-head"><h3>${state.lang==='ar'?'تأكيد الحذف':'Confirm delete'}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
        <div class="modal-body"><div class="warn-box">${icon('warn',18)} <div>${state.lang==='ar'?`سيتم حذف "${p.nameAr}" نهائيًا ولا يمكن التراجع عن هذا.`:`"${p.nameEn}" will be permanently deleted. This cannot be undone.`}</div></div></div>
        <div class="modal-foot">
          <button class="btn" data-action="close-modal">${t('cancel')}</button>
          <button class="btn btn-danger" data-action="delete-product" data-id="${pid}">${icon('trash',16)} ${state.lang==='ar'?'حذف نهائي':'Delete permanently'}</button>
        </div>`);
      break;
    }
    case 'delete-product': {
      const pid = t_.dataset.id;
      const p = DB.products.find(x=>x.id===pid);
      DB.products = DB.products.filter(x=>x.id!==pid);
      audit((state.lang==='ar'?'تم حذف منتج: ':'Product deleted: ')+(p?p.nameAr:pid));
      closeModal(); state.page='home'; render(); showToast(state.lang==='ar'?'تم حذف المنتج':'Product deleted');
      try{ await fetch('/api/products/'+pid, {method:'DELETE'}); }catch(e){}
      break;
    }

    /* comments */
    case 'post-comment': {
      const ta = document.getElementById('new-comment');
      const text = ta.value.trim();
      if(!text) break;
      const p = DB.products.find(x=>x.id===t_.dataset.pid);
      p.comments.push({id:'c'+Date.now(), userId:state.currentUser.id, userName:state.currentUser.name, role:state.currentUser.role, text, edited:false, ts:state.lang==='ar'?'الآن':'now'});
      refreshCommentsModalIfOpen(); render(); break;
    }
    case 'edit-comment': {
      const p = DB.products.find(x=>x.id===t_.dataset.pid);
      const c = p.comments.find(x=>x.id===t_.dataset.cid);
      const el = document.querySelector(`[data-comment-text="${c.id}"]`);
      el.innerHTML = `<textarea style="width:100%; background:var(--surface2); border:1px solid var(--border); border-radius:8px; padding:8px; color:var(--text); font-family:inherit;" rows="2">${escapeHtml(c.text)}</textarea>
        <div style="margin-top:6px; display:flex; gap:6px;">
          <button class="btn btn-sm btn-primary" data-action="save-comment-edit" data-pid="${p.id}" data-cid="${c.id}">${t('save')}</button>
          <button class="btn btn-sm" data-action="cancel-comment-edit" data-pid="${p.id}" data-cid="${c.id}">${t('cancel')}</button>
        </div>`;
      break;
    }
    case 'save-comment-edit': {
      const p = DB.products.find(x=>x.id===t_.dataset.pid);
      const c = p.comments.find(x=>x.id===t_.dataset.cid);
      const ta = document.querySelector(`[data-comment-text="${c.id}"] textarea`);
      c.text = ta.value; c.edited = true;
      refreshCommentsModalIfOpen(); render(); break;
    }
    case 'cancel-comment-edit': {
      const p = DB.products.find(x=>x.id===t_.dataset.pid);
      refreshCommentsModalIfOpen(); render(); break;
    }
    case 'delete-comment': {
      const p = DB.products.find(x=>x.id===t_.dataset.pid);
      p.comments = p.comments.filter(x=>x.id!==t_.dataset.cid);
      refreshCommentsModalIfOpen(); render(); break;
    }
    case 'warn-user': {
      const u = DB.demoUsers.find(x=>x.id===t_.dataset.uid);
      u.warnings++;
      if(u.warnings>=3){
        u.mute = {permanent:false, until: Date.now()+24*3600*1000};
        u.warnings=0;
        audit((state.lang==='ar'?'كتم تلقائي بسبب ٣ تحذيرات: ':'Auto-muted after 3 warnings: ')+u.name);
        showToast(state.lang==='ar'?`${u.name}: تم الكتم ٢٤ ساعة بعد ٣ تحذيرات`:`${u.name}: auto-muted 24h after 3 warnings`);
      } else {
        audit((state.lang==='ar'?'تحذير لمستخدم: ':'Warning issued to: ')+u.name+` (${u.warnings}/3)`);
        showToast(state.lang==='ar'?`تم إرسال تحذير (${u.warnings}/3)`:`Warning sent (${u.warnings}/3)`);
      }
      refreshCommentsModalIfOpen(); render(); break;
    }
    case 'mute-user': openMuteModal(t_.dataset.uid); break;
    case 'confirm-mute': {
      const uid = t_.dataset.uid;
      const u = DB.demoUsers.find(x=>x.id===uid);
      const dur = document.getElementById('mute-duration').value;
      if(dur==='permanent') u.mute = {permanent:true};
      else {
        const hours = {h1:1, h24:24, d7:24*7}[dur];
        u.mute = {permanent:false, until: Date.now()+hours*3600*1000};
      }
      audit((state.lang==='ar'?'تم كتم مستخدم: ':'User muted: ')+u.name);
      closeModal(); render(); showToast(state.lang==='ar'?'تم الكتم':'User muted'); break;
    }
    case 'block-user-confirm': {
      const u = DB.demoUsers.find(x=>x.id===t_.dataset.uid);
      if(!u) break;
      confirmAction(
        'تأكيد الحظر', 'Confirm block',
        `سيتم حظر الحساب "${u.name}" نهائيًا من تسجيل الدخول للموقع. يمكنك إلغاء الحظر لاحقًا من صفحة "الأعضاء المحظورون".`,
        `The account "${u.name}" will be permanently blocked from logging into the site. You can unblock it later from the "Blocked members" page.`,
        'block-user', {uid: u.id}, 'حظر الحساب', 'Block account', 'block'
      );
      break;
    }
    case 'block-user': {
      const u = DB.demoUsers.find(x=>x.id===t_.dataset.uid);
      if(u){ u.blocked = true; audit((state.lang==='ar'?'تم حظر مستخدم: ':'User blocked: ')+u.name); }
      closeModal(); render(); showToast(state.lang==='ar'?'تم حظر الحساب':'Account blocked'); break;
    }
    case 'unblock-user': {
      const u = DB.demoUsers.find(x=>x.id===t_.dataset.uid);
      if(u){ u.blocked = false; audit((state.lang==='ar'?'تم إلغاء حظر مستخدم: ':'User unblocked: ')+u.name); }
      render(); showToast(state.lang==='ar'?'تم إلغاء الحظر':'Account unblocked'); break;
    }

    /* feedback */
    case 'submit-complaint': {
      const type = document.getElementById('fb-type').value;
      const text = document.getElementById('fb-text').value.trim();
      if(!text) break;
      DB.complaints.unshift({id:'f'+Date.now(), userName:state.currentUser.name, type, text, status:'open', reply:'', fromAdmin:false, seenByAuthor:true});
      render(); showToast(state.lang==='ar'?'تم الإرسال':'Submitted'); break;
    }
    case 'submit-admin-complaint': {
      const type = document.getElementById('af-type').value;
      const text = document.getElementById('af-text').value.trim();
      if(!text) break;
      DB.complaints.unshift({id:'f'+Date.now(), userName:state.currentUser.name, type, text, status:'open', reply:'', fromAdmin:true, seenByAuthor:true});
      render(); showToast(state.lang==='ar'?'تم الإرسال للمطور':'Sent to developer'); break;
    }
    case 'reply-complaint': {
      const c = DB.complaints.find(x=>x.id===t_.dataset.id);
      const val = document.getElementById('reply-'+c.id).value.trim();
      if(!val) break;
      c.reply = val; c.status='answered'; c.seenByAuthor=false; c.repliedBy = state.currentUser.name;
      render(); break;
    }

    /* pending products */
    case 'approve-product': {
      const p = DB.pendingProducts.splice(parseInt(t_.dataset.i),1)[0];
      p.status='published';
      DB.products.push(p);
      DB.productApprovals.push({id:'pa'+Date.now(), nameAr:p.nameAr, nameEn:p.nameEn, submittedBy:p.proposedBy, seen:false});
      audit((state.lang==='ar'?'تم اعتماد منتج: ':'Product approved: ')+p.nameAr);
      render(); showToast(state.lang==='ar'?'تم النشر':'Published');
      try{ await fetch('/api/products', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(p)}); }catch(e){}
      break;
    }
    case 'reject-product': {
      const p = DB.pendingProducts.splice(parseInt(t_.dataset.i),1)[0];
      audit((state.lang==='ar'?'تم رفض منتج: ':'Product rejected: ')+p.nameAr);
      render(); showToast(state.lang==='ar'?'تم الرفض':'Rejected'); break;
    }
    case 'submit-product': {
      DB.pendingProducts.push({
        id:'pp'+Date.now(), categoryId:document.getElementById('np-cat').value, status:'pending', layout:['image','video','title','rating','category','desc','price','comments'],
        nameAr:document.getElementById('np-ar').value, nameEn:document.getElementById('np-en').value,
        descAr:document.getElementById('np-desc-ar').value, descEn:document.getElementById('np-desc-en').value,
        price:parseFloat(document.getElementById('np-price').value)||0,
        image: placeholderImg('New', Math.floor(Math.random()*360)), video:'',
        ratings:{}, comments:[], proposedBy: state.currentUser.name, outOfStock:false,
      });
      audit((state.lang==='ar'?'طلب إضافة منتج من ':'Product request from ')+state.currentUser.name);
      state.page='home'; render(); showToast(state.lang==='ar'?'تم الإرسال للمطور':'Sent to developer'); break;
    }

    /* permissions */
    case 'toggle-perm': {
      const p = DB.permissions[t_.dataset.key];
      p[t_.dataset.role] = !p[t_.dataset.role];
      audit((state.lang==='ar'?'تعديل صلاحية: ':'Permission changed: ')+t_.dataset.key+' / '+t_.dataset.role);
      render(); break;
    }
    case 'toggle-sidebar-vis': {
      const v = DB.sidebarVisibility[t_.dataset.key];
      v[t_.dataset.role] = !v[t_.dataset.role];
      render(); break;
    }

    /* accounts */
    case 'add-account': {
      const u = document.getElementById('acc-user').value.trim();
      const p = document.getElementById('acc-pass').value.trim();
      if(!u||!p) break;
      DB.accounts.push({id:'a'+Date.now(), username:u, password:p, active:true});
      audit((state.lang==='ar'?'تم إنشاء حساب أدمن: ':'Admin account created: ')+u);
      render(); showToast(state.lang==='ar'?'تم إنشاء الحساب':'Account created'); break;
    }
    case 'toggle-account': {
      const acc = DB.accounts.find(x=>x.id===t_.dataset.id);
      acc.active = !acc.active; render(); break;
    }

    /* categories admin */
    case 'add-category': {
      const ar = document.getElementById('cat-ar').value.trim();
      const en = document.getElementById('cat-en').value.trim();
      if(!ar) break;
      DB.categories.push({id:'c'+Date.now(), nameAr:ar, nameEn:en||ar});
      audit((state.lang==='ar'?'تصنيف جديد: ':'New category: ')+ar);
      render(); break;
    }
    case 'delete-category-confirm': {
      const c = DB.categories[parseInt(t_.dataset.i)];
      confirmDelete(`سيتم حذف تصنيف "${c.nameAr}" نهائيًا.`, `Category "${c.nameEn}" will be permanently deleted.`, 'delete-category', {i:t_.dataset.i});
      break;
    }
    case 'delete-category': DB.categories.splice(parseInt(t_.dataset.i),1); closeModal(); render(); showToast(state.lang==='ar'?'تم حذف التصنيف':'Category deleted'); break;

    /* slides admin */
    case 'add-slide': {
      DB.slides.push({id:'s'+Date.now(), titleAr:'شريحة جديدة', titleEn:'New slide', subAr:'وصف الشريحة', subEn:'Slide description', color: Math.floor(Math.random()*30+15)+',25,22'});
      render(); break;
    }
    case 'delete-slide-confirm': {
      const s = DB.slides[parseInt(t_.dataset.i)];
      confirmDelete(`سيتم حذف الشريحة "${s.titleAr}" نهائيًا.`, `Slide "${s.titleEn}" will be permanently deleted.`, 'delete-slide', {i:t_.dataset.i});
      break;
    }
    case 'delete-slide': DB.slides.splice(parseInt(t_.dataset.i),1); closeModal(); render(); showToast(state.lang==='ar'?'تم حذف الشريحة':'Slide deleted'); break;

    /* site settings */
    case 'remove-logo': DB.siteContent.logoImage=''; render(); showToast(state.lang==='ar'?'تمت إزالة الشعار':'Logo removed'); break;
    case 'save-brand-name': {
      DB.siteContent.siteName.ar = document.getElementById('brand-name-ar').value;
      DB.siteContent.siteName.en = document.getElementById('brand-name-en').value;
      render(); showToast(state.lang==='ar'?'تم حفظ اسم المتجر':'Store name saved'); break;
    }
    case 'set-logo-mode': DB.siteContent.logoDisplayMode = t_.dataset.mode; render(); break;
    case 'remove-section-bg': DB.homeSections[parseInt(t_.dataset.i)].bgImage=''; render(); showToast(state.lang==='ar'?'تمت إزالة الخلفية':'Background removed'); break;
    case 'remove-page-bg': delete DB.pageBackgrounds[t_.dataset.key]; render(); showToast(state.lang==='ar'?'تمت إزالة الخلفية':'Background removed'); break;
    case 'reset-colors': document.documentElement.removeAttribute('style'); colorHueSat = {}; render(); showToast(state.lang==='ar'?'تم إرجاع الألوان الافتراضية':'Colors reset'); break;

    /* offers */
    case 'open-offer-edit': openOfferEdit(parseInt(t_.dataset.i)); break;
    case 'offer-delete-confirm': {
      const o = DB.offers[parseInt(t_.dataset.i)];
      confirmDelete(`سيتم حذف العرض "${o.titleAr}" نهائيًا.`, `Offer "${o.titleEn}" will be permanently deleted.`, 'offer-delete', {i:t_.dataset.i});
      break;
    }
    case 'offer-delete': DB.offers.splice(parseInt(t_.dataset.i),1); closeModal(); render(); showToast(state.lang==='ar'?'تم حذف العرض':'Offer deleted'); break;
    case 'save-offer': {
      const i = parseInt(t_.dataset.i);
      const kind = document.getElementById('of-kind').value;
      const scopeType = kind==='product' ? document.getElementById('of-scope').value : '';
      const productIds = (kind==='product' && scopeType==='products')
        ? [...document.querySelectorAll('.of-product-cb:checked')].map(cb=>cb.value) : [];
      const obj = {
        id: i<0 ? 'o'+Date.now() : DB.offers[i].id,
        kind,
        titleAr: document.getElementById('of-title-ar').value,
        titleEn: document.getElementById('of-title-en').value,
        descAr: document.getElementById('of-desc-ar').value,
        descEn: document.getElementById('of-desc-en').value,
        code: kind==='promo' ? document.getElementById('of-code').value.trim() : '',
        scopeType: kind==='product' ? scopeType : '',
        productIds: kind==='product' ? productIds : [],
        categoryId: (kind==='product' && scopeType==='category') ? document.getElementById('of-category').value : '',
        percent: kind==='product' ? (parseInt(document.getElementById('of-percent').value)||0) : 0,
        start: kind==='product' ? document.getElementById('of-start').value : '',
        end: kind==='product' ? document.getElementById('of-end').value : '',
        visible: document.getElementById('of-visible').checked,
      };
      if(i<0) DB.offers.push(obj); else DB.offers[i]=obj;
      audit((state.lang==='ar'?'تحديث عرض: ':'Offer saved: ')+obj.titleAr);
      closeModal(); render(); showToast(state.lang==='ar'?'تم حفظ العرض':'Offer saved'); break;
    }

    /* home sections */
    case 'open-add-section': openAddSection(); break;
    case 'save-section': {
      const ar = document.getElementById('sec-title-ar').value.trim();
      const en = document.getElementById('sec-title-en').value.trim();
      if(!ar && !en) break;
      DB.homeSections.push({id:'sec'+Date.now(), titleAr:ar||en, titleEn:en||ar, source:document.getElementById('sec-source').value});
      closeModal(); render(); showToast(state.lang==='ar'?'تمت إضافة القسم':'Section added'); break;
    }
    case 'section-move': {
      const i=parseInt(t_.dataset.i), dir=t_.dataset.dir, j=dir==='up'?i-1:i+1;
      if(j<0||j>=DB.homeSections.length) break;
      [DB.homeSections[i],DB.homeSections[j]]=[DB.homeSections[j],DB.homeSections[i]];
      render(); break;
    }
    case 'section-delete-confirm': {
      const sec = DB.homeSections[parseInt(t_.dataset.i)];
      confirmDelete(`سيتم حذف قسم "${sec.titleAr}" نهائيًا من الصفحة الرئيسية.`, `Section "${sec.titleEn}" will be permanently deleted from the home page.`, 'section-delete', {i:t_.dataset.i});
      break;
    }
    case 'section-delete': DB.homeSections.splice(parseInt(t_.dataset.i),1); closeModal(); render(); showToast(state.lang==='ar'?'تم حذف القسم':'Section deleted'); break;

    /* code editor */
    case 'code-tab':
      codeState.edited[codeState.tab] = document.getElementById('code-area').value;
      codeState.tab = t_.dataset.tab; render(); break;
    case 'code-test': {
      codeState.edited[codeState.tab] = document.getElementById('code-area').value;
      const frame = document.getElementById('code-preview');
      frame.style.display='block';
      const doc = `<html><head><style>body{font-family:Tajawal,sans-serif; padding:16px; background:#0e0d0c; color:#f1ece4;} ${codeState.edited.css}</style></head><body>${codeState.edited.html}` + '<scr'+'ipt>' + codeState.edited.js + '<\/scr'+'ipt>' + `</body></html>`;
      frame.srcdoc = doc;
      break;
    }
    case 'code-apply': {
      codeState.edited[codeState.tab] = document.getElementById('code-area').value;
      openModal(`
        <div class="modal-head"><h3>${state.lang==='ar'?'تأكيد التطبيق':'Confirm apply'}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
        <div class="modal-body">
          <div class="warn-box">${icon('warn',18)} <div>${state.lang==='ar'?'سيتم تطبيق متغيرات CSS الجديدة (مثل ألوان الموقع) على الواجهة الحالية مباشرة. تأكد أنك جربتها أولًا.':'New CSS variables (e.g. site colors) will be applied to the live interface. Make sure you tested first.'}</div></div>
        </div>
        <div class="modal-foot">
          <button class="btn" data-action="close-modal">${t('cancel')}</button>
          <button class="btn btn-primary" data-action="confirm-code-apply">${state.lang==='ar'?'تطبيق':'Apply'}</button>
        </div>`);
      break;
    }
    case 'confirm-code-apply': {
      const css = codeState.edited.css;
      const matches = [...css.matchAll(/--(accent|gold|green|red|blue|bg|surface|surface2):\\s*([^;]+);/g)];
      let applied=0;
      matches.forEach(m=>{ document.documentElement.style.setProperty('--'+m[1], m[2].trim()); applied++; });
      audit((state.lang==='ar'?'تم تطبيق تعديلات CSS ('+applied+' متغيرات)':'Applied CSS changes ('+applied+' variables)'));
      closeModal(); render(); showToast(state.lang==='ar'?'تم تطبيق التعديلات':'Changes applied'); break;
    }
    case 'code-cancel': {
      codeState.edited = {html:CODE_SAMPLES.html, css:CODE_SAMPLES.css, js:CODE_SAMPLES.js};
      document.documentElement.removeAttribute('style');
      render(); showToast(state.lang==='ar'?'تم التراجع':'Reverted'); break;
    }
  }
});

function openOfferEdit(i){
  const isNew = i<0;
  const o = isNew ? {kind:'product', titleAr:'', titleEn:'', descAr:'', descEn:'', code:'', scopeType:'products', productIds:[], categoryId:(DB.categories[0]&&DB.categories[0].id)||'', percent:10, start:'', end:'', visible:true} : DB.offers[i];
  const scopeType = o.scopeType || 'products';
  const pubProds = DB.products.filter(p=>p.status==='published');
  const productChecks = pubProds.map(p=>`<label class="of-product-row" data-name="${(p.nameAr+' '+p.nameEn).toLowerCase()}" style="display:flex; align-items:center; gap:10px; padding:6px 2px; border-bottom:1px solid var(--border);">
      <input type="checkbox" class="of-product-cb" value="${p.id}" ${(o.productIds||[]).includes(p.id)?'checked':''} style="width:18px; height:18px; flex-shrink:0;">
      <img src="${p.image}" style="width:36px; height:36px; object-fit:cover; border-radius:6px; flex-shrink:0;">
      <span style="font-size:13px;">${tv({ar:p.nameAr,en:p.nameEn})}</span>
    </label>`).join('');
  const catOptions = DB.categories.map(c=>`<option value="${c.id}" ${c.id===o.categoryId?'selected':''}>${tv({ar:c.nameAr,en:c.nameEn})}</option>`).join('');
  openModal(`
    <div class="modal-head"><h3>${isNew?(state.lang==='ar'?'إضافة عرض':'Add offer'):(state.lang==='ar'?'تعديل العرض':'Edit offer')}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body">
      <div class="field"><label>${state.lang==='ar'?'نوع العرض':'Offer type'}</label>
        <select id="of-kind" onchange="document.getElementById('of-product-fields').style.display=this.value==='product'?'block':'none'; document.getElementById('of-code-field').style.display=this.value==='promo'?'block':'none';">
          <option value="product" ${o.kind==='product'?'selected':''}>${state.lang==='ar'?'خصم نسبة على منتجات/تصنيف':'% discount on products/category'}</option>
          <option value="promo" ${o.kind==='promo'?'selected':''}>${state.lang==='ar'?'كود خصم عام':'General promo code'}</option>
        </select>
      </div>
      <div class="field-row">
        <div class="field"><label>${state.lang==='ar'?'العنوان (عربي)':'Title (AR)'}</label><input id="of-title-ar" value="${o.titleAr||''}"></div>
        <div class="field"><label>${state.lang==='ar'?'العنوان (إنجليزي)':'Title (EN)'}</label><input id="of-title-en" value="${o.titleEn||''}"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>${state.lang==='ar'?'الوصف (عربي)':'Desc (AR)'}</label><input id="of-desc-ar" value="${o.descAr||''}"></div>
        <div class="field"><label>${state.lang==='ar'?'الوصف (إنجليزي)':'Desc (EN)'}</label><input id="of-desc-en" value="${o.descEn||''}"></div>
      </div>
      <div id="of-product-fields" style="display:${o.kind==='product'?'block':'none'}">
        <div class="field"><label>${state.lang==='ar'?'نطاق التطبيق':'Applies to'}</label>
          <select id="of-scope" onchange="document.getElementById('of-scope-products').style.display=this.value==='products'?'block':'none'; document.getElementById('of-scope-category').style.display=this.value==='category'?'block':'none';">
            <option value="products" ${scopeType==='products'?'selected':''}>${state.lang==='ar'?'منتجات محددة (اختر واحد أو أكثر)':'Specific products (select one or more)'}</option>
            <option value="category" ${scopeType==='category'?'selected':''}>${state.lang==='ar'?'تصنيف كامل':'A whole category'}</option>
          </select>
        </div>
        <div id="of-scope-products" style="display:${scopeType==='products'?'block':'none'}">
          <label style="font-size:12px; color:var(--dim); display:block; margin-bottom:4px;">${state.lang==='ar'?'المنتجات المشمولة':'Included products'}</label>
          <input type="text" id="of-product-search" placeholder="${state.lang==='ar'?'ابحث باسم المنتج...':'Search products...'}" oninput="filterOfferProducts(this.value)" style="margin-bottom:8px;">
          <div style="max-height:220px; overflow-y:auto; border:1px solid var(--border); border-radius:8px; padding:6px 10px;" id="of-product-list">${productChecks || `<div class="empty" style="padding:10px 0;">${state.lang==='ar'?'لا توجد منتجات':'No products'}</div>`}</div>
        </div>
        <div id="of-scope-category" class="field" style="display:${scopeType==='category'?'block':'none'}">
          <label>${state.lang==='ar'?'التصنيف':'Category'}</label>
          <select id="of-category">${catOptions}</select>
        </div>
        <div class="field"><label>${state.lang==='ar'?'نسبة الخصم %':'Discount %'}</label><input id="of-percent" type="number" min="1" max="90" value="${o.percent||10}"></div>
        <div class="field-row">
          <div class="field"><label>${state.lang==='ar'?'تاريخ البداية':'Start date'}</label><input id="of-start" type="date" value="${o.start||''}"></div>
          <div class="field"><label>${state.lang==='ar'?'تاريخ النهاية':'End date'}</label><input id="of-end" type="date" value="${o.end||''}"></div>
        </div>
      </div>
      <div id="of-code-field" class="field" style="display:${o.kind==='promo'?'block':'none'}"><label>${state.lang==='ar'?'كود الخصم':'Promo code'}</label><input id="of-code" value="${o.code||''}" placeholder="DARIN15"></div>
      <div class="field" style="display:flex; align-items:center; gap:10px; flex-direction:row; margin-top:6px;">
        <input type="checkbox" id="of-visible" ${o.visible!==false?'checked':''} style="width:18px; height:18px;">
        <label style="margin:0; font-size:13px;">${state.lang==='ar'?'إظهار العرض في صفحة العروض العامة':'Show this offer on the public offers page'}</label>
      </div>
      <div class="hint-box" style="font-size:12px; margin-top:8px;">${state.lang==='ar'?'إلغاء التحديد يبقي العرض/الكود فعالاً تمامًا، لكنه يختفي من صفحة العروض التي يراها الزوار — مفيد لنشر كود حصري عبر تيك توك مثلاً.':'Unchecking keeps the offer/code fully active, but hides it from the public offers page visitors see — useful for an exclusive code shared on TikTok, for example.'}</div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${t('cancel')}</button>
      <button class="btn btn-primary" data-action="save-offer" data-i="${i}">${t('save')}</button>
    </div>`, true);
}

function openAddSection(){
  const cats = DB.categories.map(c=>`<option value="cat:${c.id}">${state.lang==='ar'?'تصنيف: ':'Category: '}${tv({ar:c.nameAr,en:c.nameEn})}</option>`).join('');
  openModal(`
    <div class="modal-head"><h3>${state.lang==='ar'?'إضافة قسم للرئيسية':'Add home section'}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body">
      <div class="field-row">
        <div class="field"><label>${state.lang==='ar'?'العنوان (عربي)':'Title (AR)'}</label><input id="sec-title-ar" placeholder="${state.lang==='ar'?'الأكثر مبيعًا':''}"></div>
        <div class="field"><label>${state.lang==='ar'?'العنوان (إنجليزي)':'Title (EN)'}</label><input id="sec-title-en" placeholder="Best sellers"></div>
      </div>
      <div class="field"><label>${state.lang==='ar'?'مصدر العناصر':'Items source'}</label>
        <select id="sec-source">
          <option value="recommended">${state.lang==='ar'?'مقترح لك':'Recommended'}</option>
          <option value="newest">${state.lang==='ar'?'وصل حديثًا':'Newest'}</option>
          <option value="offers">${state.lang==='ar'?'المنتجات التي عليها عروض':'Products on offer'}</option>
          ${cats}
        </select>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${t('cancel')}</button>
      <button class="btn btn-primary" data-action="save-section">${t('save')}</button>
    </div>`);
}

function openMuteModal(uid){
  const u = DB.demoUsers.find(x=>x.id===uid);
  openModal(`
    <div class="modal-head"><h3>${state.lang==='ar'?'كتم':'Mute'} ${u.name}</h3><button class="iconbtn" data-action="close-modal">${icon('close')}</button></div>
    <div class="modal-body">
      <div class="field"><label>${state.lang==='ar'?'مدة الكتم':'Mute duration'}</label>
        <select id="mute-duration">
          <option value="h1">${state.lang==='ar'?'ساعة واحدة':'1 hour'}</option>
          <option value="h24">${state.lang==='ar'?'٢٤ ساعة':'24 hours'}</option>
          <option value="d7">${state.lang==='ar'?'٧ أيام':'7 days'}</option>
          <option value="permanent">${state.lang==='ar'?'دائم':'Permanent'}</option>
        </select>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${t('cancel')}</button>
      <button class="btn btn-danger" data-action="confirm-mute" data-uid="${uid}">${icon('mute',14)} ${t('mute_user')}</button>
    </div>`);
}

function showSlide(i){
  document.querySelectorAll('#carousel .slide').forEach((s,idx)=> s.style.display = idx===i?'flex':'none');
  document.querySelectorAll('#carousel .cdot').forEach((d,idx)=> d.classList.toggle('active', idx===i));
}
let carouselAuto = setInterval(()=>{
  const dots = document.querySelectorAll('#carousel .cdot');
  if(!dots.length) return;
  let active = [...dots].findIndex(d=>d.classList.contains('active'));
  showSlide((active+1) % dots.length);
}, 6000);

async function bootstrapFromApi(){
  try{
    const res = await fetch('/api/products');
    if(!res.ok) throw new Error('fetch failed');
    const remoteProducts = await res.json();
    if(remoteProducts.length){
      DB.products = remoteProducts;
    } else {
      // First run: seed the database with the built-in demo products
      for(const p of DB.products){
        try{ await fetch('/api/products', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(p)}); }catch(e){}
      }
    }
  }catch(e){
    // API unreachable (offline/dev preview) — fall back to the built-in demo products silently
  }

  const token = localStorage.getItem('darin_session_token');
  if(token){
    try{
      const res = await fetch('/api/session', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({token})});
      const data = await res.json();
      if(res.ok){
        state.currentUser = {id:data.id, name:data.name, email:data.email, role:data.role};
        state.entered = true; state.page = 'home';
        if(!DB.demoUsers.some(x=>x.id===data.id)) DB.demoUsers.push({id:data.id, name:data.name, email:data.email, password:'', warnings:0, mute:null, blocked:false});
      } else {
        localStorage.removeItem('darin_session_token');
      }
    }catch(e){}
  }
  render();
}
bootstrapFromApi();
