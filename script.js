const menuData = [
{ id: 1 ,name: " Nasi Ayam Kipas ", category: "makanan", desc:" Nasi Ayam Kipas ", price: 16000 , rating: 4.9, reviews:598, popular:true, img: " gambar/Ayam%20Kipas.png ." },
{ id: 2 ,name: " Nasi Ayam Serundeng ", category: "makanan", desc:" Nasi Ayam Serundeng ", price: 15000 , rating: 4.2, reviews:378, popular:false, img: " gambar/Ayam%20Serundeng.png ." },
{ id: 3 ,name: " Nasi Cumi Calamari ", category: "makanan", desc:" Nasi Cumi Calamari ", price: 15000 , rating: 4.3, reviews:316, popular:true, img: " gambar/Cumi%20Calamari%201.png ." },
{ id: 4 ,name: " Nasi Udang Selimut ", category: "makanan", desc:" Nasi Udang Selimut ", price: 15000 , rating: 4.6, reviews:321, popular:true, img: " gambar/Udang%20Selimut.png ." },
{ id: 5 ,name: " Nasi Chicken Katsu Barbeque ", category: "makanan", desc:" Nasi Chicken Katsu Barbeque ", price: 15000 , rating: 4.8, reviews:299, popular:true, img: " gambar/Chicken%20Katsu%20Saus%20Barbeque.png ." },
{ id: 6 ,name: " Nasi Chicken Katsu Lada Hitam ", category: "makanan", desc:" Nasi Chicken Katsu Lada Hitam ", price: 15000 , rating: 4.4, reviews:224, popular:true, img: " gambar/Chicken%20Katsu%20%20Lada%20Hitam.png ." },
{ id: 7 ,name: " Nasi Sayap Spacy ", category: "makanan", desc:" Nasi Sayap Spacy ", price: 15000 , rating: 4.7, reviews:278, popular:false, img: " gambar/Sayap%20Spicy.png ." },
{ id: 8 ,name: " Nasi Telur Dadar ", category: "makanan", desc:" Nasi Telur Dadar ", price: 11000 , rating: 4.2, reviews:198, popular:false, img: " gambar/Telur%20Dadar.png ." },
{ id: 9 ,name: " Nasi Usus ", category: "makanan", desc:" Nasi Usus ", price: 13000 , rating: 4.6, reviews:198, popular:false, img: " gambar/Usus.png ." },
{ id: 10 ,name: " Nasi Putih ", category: "makanan", desc:" Nasi Putih ", price: 5000 , rating: 4.1, reviews:69, popular:false, img: " gambar/Nasi%20Putih.png ." },
{ id: 11 ,name: " Ceker Pedas ", category: "makanan", desc:" Ceker Pedas ", price: 10000 , rating: 4.9, reviews:564, popular:true, img: " gambar/Ceker%20Pedas.png ." },
{ id: 12 ,name: " Ceker Pedas Manis ", category: "makanan", desc:" Ceker Pedas Manis ", price: 10000 , rating: 4.6, reviews:447, popular:false, img: " gambar/Ceker%20Pedas%20Manis.png ." },
{ id: 13 ,name: " Sayap Pedas ", category: "makanan", desc:" Sayap Pedas ", price: 10000 , rating: 4.8, reviews:434, popular:true, img: " gambar/Sayap%20Pedas-1.png ." },
{ id: 14 ,name: " Sayap Pedas Manis ", category: "makanan", desc:" Sayap Pedas Manis ", price: 10000 , rating: 4.5, reviews:372, popular:false, img: " gambar/Sayap%20Pedas%20Manis.png ." },
{ id: 15 ,name: " Pempek ", category:"jajan", desc:" Pempek ", price: 13000 , rating: 4.2, reviews:102, popular:false, img: " gambar/Pempek.png ." },
{ id: 16 ,name: " Kentang Goreng ", category:"jajan", desc:" Kentang Goreng ", price: 10000 , rating: 4.3, reviews:76, popular:false, img: " gambar/Kentang%20Goreng.png ." },
{ id: 17 ,name: " Keju Aroma ", category:"jajan", desc:" Keju Aroma ", price: 15000 , rating: 4.4, reviews:104, popular:false, img: " gambar/keju%20aroma.png ." },
{ id: 18 ,name: " Dimsum ", category:"jajan", desc:" Dimsum ", price: 10000 , rating: 4.7, reviews:207, popular:true, img: " gambar/dimsum.png ." },
{ id: 19 ,name: " Tahu Dimsum ", category:"jajan", desc:" Tahu Dimsum ", price: 12000 , rating: 4.3, reviews:87, popular:true, img: " gambar/Tahu%20dimsum.png ." },
{ id: 20 ,name: " Salad Buah ", category:"jajan", desc:" Salad Buah ", price: 15000 , rating: 4.4, reviews:213, popular:true, img: " gambar/salad%20Buah.png ." },

{ id: 22 ,name: " Es Teh Original ", category: "minuman", desc:" Es Teh Original ", price: 4000 , rating: 4.7, reviews:473, popular:true, img: " gambar/Es%20Teh%20Ori.png ." },
{ id: 23 ,name: " Es Teh Leci ", category: "minuman", desc:" Es Teh Leci ", price: 7000 , rating: 4.6, reviews:234, popular:false, img: " gambar/Es%20Teh%20Leci.png ." },
{ id: 24 ,name: " Es Teh Melon ", category: "minuman", desc:" Es Teh Melon ", price: 7000 , rating: 4.5, reviews:142, popular:true, img: " gambar/Es%20Teh%20Melon.png ." },
{ id: 25 ,name: " Es Teh Strawberry ", category: "minuman", desc:" Es Teh Strawberry ", price: 7000 , rating: 4.3, reviews:122, popular:false, img: " gambar/Es%20Teh%20Strawberry.png ." },
{ id: 26 ,name: " Es Teh Lemon ", category: "minuman", desc:" Es Teh Lemon ", price: 7000 , rating: 4.4, reviews:169, popular:false, img: " gambar/Es%20Teh%20Lemon.png ." },
{ id: 27 ,name: " Milk Tea ", category: "minuman", desc:" Milk Tea ", price: 8000 , rating: 4.5, reviews:136, popular:false, img: " gambar/Milk%20Tea.png ." },
{ id: 28 ,name: " Milk Tea Strawberry ", category: "minuman", desc:" Milk Tea Strawberry ", price: 8000 , rating: 4.6, reviews:121, popular:false, img: " gambar/Milk%20Tea%20Strawberry.png ." },
{ id: 29 ,name: " Milk Tea Melon ", category: "minuman", desc:" Milk Tea Melon ", price: 8000 , rating: 4.8, reviews:118, popular:false, img: " gambar/Milk%20Tea%20Melon.png ." },
{ id: 30 ,name: " Durian Milk ", category: "minuman", desc:" Durian Milk ", price: 7000 , rating: 4.1, reviews:106, popular:false, img: " gambar/Durian%20Milk.png ." },
{ id: 31 ,name: " Strawberry Milk ", category: "minuman", desc:" Strawberry Milk ", price: 7000 , rating: 4.2, reviews:167, popular:false, img: " gambar/Strawberry%20Milk.png ." },
{ id: 32 ,name: " Melon Milk ", category: "minuman", desc:" Melon Milk ", price: 7000 , rating: 4.4, reviews:162, popular:false, img: " gambar/Melon%20Milk.png ." },
{ id: 33 ,name: " Grape Milk ", category: "minuman", desc:" Grape Milk ", price: 7000 , rating: 4.3, reviews:153, popular:false, img: " gambar/Grape%20Milk.png ." },
{ id: 34 ,name: " Mango Milk ", category: "minuman", desc:" Mango Milk ", price: 7000 , rating: 4.4, reviews:183, popular:false, img: " gambar/Mango%20Milk.png ." },
{ id: 35 ,name: " Chocolate Milk ", category: "minuman", desc:" Chocolate Milk ", price: 7000 , rating: 4.6, reviews:216, popular:true, img: " gambar/Chocolate%20Milk.png ." },
{ id: 36 ,name: " Coffee Latte ", category: "minuman", desc:" Coffee Latte ", price: 12000 , rating: 4.8, reviews:367, popular:true, img: " gambar/Coffee%20Latte.png." },
{ id: 37 ,name: " Coffee Latte Brown Sugar ", category: "minuman", desc:" Coffee Latte Brown Sugar ", price: 14000 , rating: 4.9, reviews:479, popular:true, img: " gambar/Coffee%20Latte%20brown%20sugar.png ." },
{ id: 38 ,name: " Kopi Hitam ", category: "minuman", desc:" Kopi Hitam ", price: 8000 , rating: 4.0, reviews:79, popular:false, img: " gambar/Kopi%20Hitam.png ." },
{ id: 39 ,name: " Sup Buah ", category: "minuman", desc:" Sup Buah ", price: 11000 , rating: 4.7, reviews:188, popular:true, img: " gambar/Sup%20Buah.png ." },
{ id: 40 ,name: " Cendol Kecebong ", category: "minuman", desc:" Cendol Kecebong ", price: 12000 , rating: 4.4, reviews:86, popular:false, img: " gambar/Cendol%20Kecebong.png ." },
];

let cart = [];
let currentCategory = 'all';
let currentView = 'grid';
let currentDetailItem = null;
let detailQty = 1;
let searchQuery = '';
let buyerAddress = { name:'', phone:'', address:'', notes:'', lat:'', lng:'', locText:'' };

function formatPrice(n) { return 'Rp ' + n.toLocaleString('id-ID'); }

let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 2500);
}

function switchScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.screen === name));
  if (name === 'cart') renderCart();
  if (name === 'menu') renderMenu();
  document.getElementById('screen-' + name).scrollTop = 0;
  updateFloatingCart();
}

function renderPopular() {
  const grid = document.getElementById('popular-grid');
  const popular = menuData.filter(m => m.popular).slice(0, 8);
  grid.innerHTML = popular.map((item, i) => `
    <div class="menu-card fade-up fade-up-d${i+1}" onclick="openDetail(${item.id})">
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="menu-card-rating"><iconify-icon icon="mdi:star"></iconify-icon> ${item.rating}</div>
        ${item.popular ? '<div class="popular-tag">Hot</div>' : ''}
        <button class="menu-card-add" onclick="event.stopPropagation();quickAdd(${item.id},this)"><iconify-icon icon="mdi:plus"></iconify-icon></button>
      </div>
      <div class="menu-card-info">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-price">${formatPrice(item.price)}</div>
      </div>
    </div>
  `).join('');
}

function renderMenu() {
  let items = menuData;
  if (currentCategory !== 'all') items = items.filter(m => m.category === currentCategory);
  if (searchQuery) { const q = searchQuery.toLowerCase(); items = items.filter(m => m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)); }

  const grid = document.getElementById('menuGrid');
  const list = document.getElementById('menuList');
  const empty = document.getElementById('menuEmpty');

  if (items.length === 0) { grid.style.display='none'; list.style.display='none'; empty.style.display='block'; return; }
  empty.style.display='none';

  if (currentView === 'grid') {
    grid.style.display='grid'; list.style.display='none';
    grid.innerHTML = items.map(item => `
      <div class="menu-card" onclick="openDetail(${item.id})">
        <div class="menu-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          <div class="menu-card-rating"><iconify-icon icon="mdi:star"></iconify-icon> ${item.rating}</div>
          ${item.popular?'<div class="popular-tag">Hot</div>':''}
          <button class="menu-card-add" onclick="event.stopPropagation();quickAdd(${item.id},this)"><iconify-icon icon="mdi:plus"></iconify-icon></button>
        </div>
        <div class="menu-card-info">
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-price">${formatPrice(item.price)}</div>
        </div>
      </div>
    `).join('');
  } else {
    grid.style.display='none'; list.style.display='block';
    list.innerHTML = items.map(item => `
      <div class="menu-list-item" onclick="openDetail(${item.id})">
        <img class="menu-list-img" src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="menu-list-info">
          <div class="menu-list-name">${item.name}</div>
          <div class="menu-list-desc">${item.desc}</div>
          <div class="menu-list-bottom">
            <span class="menu-list-price">${formatPrice(item.price)}</span>
            <div class="menu-list-rating"><iconify-icon icon="mdi:star"></iconify-icon> ${item.rating} (${item.reviews})</div>
          </div>
        </div>
        <button class="menu-list-add" onclick="event.stopPropagation();quickAdd(${item.id},this)"><iconify-icon icon="mdi:plus"></iconify-icon></button>
      </div>
    `).join('');
  }
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === cat));
  renderMenu();
}
function setView(v) {
  currentView = v;
  document.getElementById('viewGrid').classList.toggle('active', v==='grid');
  document.getElementById('viewList').classList.toggle('active', v==='list');
  renderMenu();
}
function handleSearch(q) {
  searchQuery = q;
  if (q.length > 0) { switchScreen('menu'); document.getElementById('menuSearchInput').value = q; }
  renderMenu();
}
function handleMenuSearch(q) { searchQuery = q; renderMenu(); }

function openDetail(id) {
  const item = menuData.find(m => m.id === id);
  if (!item) return;
  currentDetailItem = item; detailQty = 1;
  document.getElementById('detailImg').src = item.img;
  document.getElementById('detailCat').textContent = item.category.charAt(0).toUpperCase()+item.category.slice(1);
  document.getElementById('detailName').textContent = item.name;
  document.getElementById('detailDesc').textContent = item.desc;
  document.getElementById('detailPrice').textContent = formatPrice(item.price);
  document.getElementById('detailQty').textContent = '1';
  document.getElementById('detailRatingText').textContent = `${item.rating} • ${item.reviews} ulasan`;
  const full = Math.floor(item.rating), half = item.rating % 1 >= 0.5;
  let sh = '';
  for(let i=0;i<full;i++) sh+='<iconify-icon icon="mdi:star"></iconify-icon>';
  if(half) sh+='<iconify-icon icon="mdi:star-half-full"></iconify-icon>';
  for(let i=full+(half?1:0);i<5;i++) sh+='<iconify-icon icon="mdi:star-outline" style="opacity:0.3;"></iconify-icon>';
  document.getElementById('detailStars').innerHTML = sh;
  document.getElementById('detailOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeDetail(e) { if(e.target===document.getElementById('detailOverlay')) closeDetailDirect(); }
function closeDetailDirect() { document.getElementById('detailOverlay').classList.remove('active'); document.body.style.overflow=''; }
function changeDetailQty(d) {
  detailQty = Math.max(1, Math.min(20, detailQty+d));
  const el = document.getElementById('detailQty');
  el.textContent = detailQty;
  el.style.transform='scale(1.2)'; setTimeout(()=>el.style.transform='scale(1)',150);
}
function addToCartFromDetail() {
  if(!currentDetailItem) return;
  const ex = cart.find(c=>c.id===currentDetailItem.id);
  if(ex) ex.qty+=detailQty; else cart.push({...currentDetailItem, qty:detailQty});
  updateBadges(); updateFloatingCart(); closeDetailDirect();
  showToast(`✅ ${currentDetailItem.name} x${detailQty} ditambahkan`);
  const btn = document.getElementById('detailAddBtn');
  btn.classList.add('add-bounce'); setTimeout(()=>btn.classList.remove('add-bounce'),400);
}
function quickAdd(id, btnEl) {
  const item = menuData.find(m=>m.id===id); if(!item) return;
  const ex = cart.find(c=>c.id===id);
  if(ex) ex.qty+=1; else cart.push({...item, qty:1});
  updateBadges(); updateFloatingCart();
  if(btnEl){btnEl.classList.add('add-bounce');setTimeout(()=>btnEl.classList.remove('add-bounce'),400);}
  showToast(`✅ ${item.name} ditambahkan`);
}

function renderCart() {
  const c = document.getElementById('cartContent');
  const cb = document.getElementById('clearCartBtn');
  if(cart.length===0){
    cb.style.display='none';
    c.innerHTML = `<div class="empty-cart"><iconify-icon icon="mdi:cart-off"></iconify-icon><h3>Keranjang Kosong</h3><p>Yuk, pilih menu favorit kamu!</p><button class="add-to-cart-btn" style="margin-top:24px;max-width:200px;margin-left:auto;margin-right:auto;" onclick="switchScreen('menu')"><iconify-icon icon="mdi:silverware-fork-knife" style="font-size:1.1rem;"></iconify-icon>Jelajahi Menu</button></div>`;
    return;
  }
  cb.style.display='flex';
  const sub = cart.reduce((s,x)=>s+x.price*x.qty,0);

  const addrHtml = buildAddressSection();

  c.innerHTML = `
    ${addrHtml}
    ${cart.map(item=>`
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div class="cart-item-name">${item.name}</div>
            <button class="cart-remove" onclick="removeFromCart(${item.id})"><iconify-icon icon="mdi:close"></iconify-icon></button>
          </div>
          <div class="cart-item-price">${formatPrice(item.price*item.qty)}</div>
          <div class="cart-item-qty">
            <button class="cart-qty-btn" onclick="changeCartQty(${item.id},-1)"><iconify-icon icon="mdi:minus" style="font-size:0.8rem;"></iconify-icon></button>
            <span class="cart-qty-num">${item.qty}</span>
            <button class="cart-qty-btn" onclick="changeCartQty(${item.id},1)"><iconify-icon icon="mdi:plus" style="font-size:0.8rem;"></iconify-icon></button>
          </div>
        </div>
      </div>
    `).join('')}
    <div class="cart-summary">
      <div class="cart-tax-note"><iconify-icon icon="mdi:tag-check-outline"></iconify-icon>Harga sudah final — tanpa pajak tambahan</div>
      <div class="cart-row"><span class="label">Subtotal (${cart.reduce((s,x)=>s+x.qty,0)} item)</span><span class="value">${formatPrice(sub)}</span></div>
      <div class="cart-row"><span class="label">Pajak</span><span class="value" style="color:var(--gold-dark);">Rp 0</span></div>
      <div class="cart-row"><span class="label">Ongkos Kirim</span><span class="value" style="color:var(--text-muted);font-size:0.76rem;">Diinfo via WA</span></div>
      <div class="cart-row total"><span class="label">Total</span><span class="value">${formatPrice(sub)}</span></div>
      <button class="wa-btn" onclick="orderViaWhatsApp()"><iconify-icon icon="mdi:whatsapp" style="font-size:1.25rem;"></iconify-icon>Order via WhatsApp</button>
    </div>
  `;
}

function buildAddressSection() {
  const a = buyerAddress;
  const hasAddr = a.name || a.address || a.locText;
  const displayAddr = a.locText || a.address || '';

  return `
    <div class="cart-address-section">
      <div class="cart-address-header">
        <iconify-icon icon="mdi:map-marker"></iconify-icon>
        <span>Alamat Pengiriman</span>
      </div>
      <div class="cart-address-body ${hasAddr ? '' : 'empty'}">
        ${hasAddr
          ? (a.name ? `<strong>${a.name}</strong>${a.phone ? ` • ${a.phone}` : ''}<br>` : '') +
            (displayAddr ? displayAddr : '') +
            (a.notes ? `<br><em style="color:var(--text-muted);font-size:0.72rem;">📝 ${a.notes}</em>` : '')
          : 'Belum ada alamat. Tap untuk mengisi.'
        }
      </div>
      <div class="cart-address-actions">
        <button class="addr-btn" onclick="openAddressSheet()">
          <iconify-icon icon="mdi:pencil-outline"></iconify-icon> Edit
        </button>
        <button class="addr-btn primary" onclick="shareLocation()">
          <iconify-icon icon="mdi:crosshairs-gps"></iconify-icon> Lokasi GPS
        </button>
      </div>
    </div>
  `;
}

function changeCartQty(id, d) {
  const item = cart.find(c=>c.id===id); if(!item) return;
  item.qty += d;
  if(item.qty<=0) cart = cart.filter(c=>c.id!==id);
  updateBadges(); updateFloatingCart(); renderCart();
}
function removeFromCart(id) {
  const item = cart.find(c=>c.id===id);
  cart = cart.filter(c=>c.id!==id);
  updateBadges(); updateFloatingCart(); renderCart();
  if(item) showToast(`🗑️ ${item.name} dihapus`);
}
function clearCart() { cart=[]; updateBadges(); updateFloatingCart(); renderCart(); showToast('🗑️ Keranjang dikosongkan'); }

// ===== ADDRESS =====
function openAddressSheet() {
  document.getElementById('addrName').value = buyerAddress.name;
  document.getElementById('addrPhone').value = buyerAddress.phone;
  document.getElementById('addrText').value = buyerAddress.address;
  document.getElementById('addrNotes').value = buyerAddress.notes;
  const btn = document.getElementById('shareLocBtn');
  const txt = document.getElementById('shareLocText');
  if(buyerAddress.locText) { txt.textContent = '✅ Lokasi tersimpan'; btn.style.borderColor='rgba(37,211,102,0.3)'; btn.style.background='rgba(37,211,102,0.05)'; }
  else { txt.textContent = 'Bagikan Lokasi GPS'; btn.style.borderColor=''; btn.style.background=''; }
  document.getElementById('addressOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeAddressSheet(e) {
  if(e.target === document.getElementById('addressOverlay')) {
    document.getElementById('addressOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }
}
function saveAddress() {
  const name = document.getElementById('addrName').value.trim();
  const phone = document.getElementById('addrPhone').value.trim();
  const address = document.getElementById('addrText').value.trim();
  const notes = document.getElementById('addrNotes').value.trim();

  if(!name && !address && !buyerAddress.locText) {
    showToast('⚠️ Isi minimal nama atau alamat');
    return;
  }

  buyerAddress.name = name;
  buyerAddress.phone = phone;
  buyerAddress.address = address;
  buyerAddress.notes = notes;

  updateHomeLocation();
  document.getElementById('addressOverlay').classList.remove('active');
  document.body.style.overflow = '';
  showToast('✅ Alamat berhasil disimpan');
  if(document.getElementById('screen-cart').classList.contains('active')) renderCart();
}

function shareLocation() {
  const btn = document.getElementById('shareLocBtn');
  const txt = document.getElementById('shareLocText');
  btn.classList.add('loading');
  txt.textContent = 'Mencari lokasi...';

  if(!navigator.geolocation) {
    btn.classList.remove('loading');
    txt.textContent = 'Bagikan Lokasi GPS';
    showToast('⚠️ GPS tidak didukung browser ini');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lng = pos.coords.longitude.toFixed(6);
      buyerAddress.lat = lat;
      buyerAddress.lng = lng;
      buyerAddress.locText = `📍 GPS: ${lat}, ${lng}\n🔗 https://maps.google.com/?q=${lat},${lng}`;

      btn.classList.remove('loading');
      txt.textContent = '✅ Lokasi tersimpan';
      btn.style.borderColor = 'rgba(37,211,102,0.3)';
      btn.style.background = 'rgba(37,211,102,0.05)';
      showToast('✅ Lokasi GPS berhasil didapat');
    },
    (err) => {
      btn.classList.remove('loading');
      txt.textContent = 'Bagikan Lokasi GPS';
      let msg = '⚠️ Gagal mendapatkan lokasi';
      if(err.code === 1) msg = '⚠️ Akses lokasi ditolak. Aktifkan di pengaturan browser.';
      else if(err.code === 2) msg = '⚠️ Lokasi tidak tersedia';
      else if(err.code === 3) msg = '⚠️ Timeout mendapatkan lokasi';
      showToast(msg);
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function updateHomeLocation() {
  const el = document.getElementById('homeLocationAddress');
  if(buyerAddress.locText) {
    el.textContent = '📍 Lokasi GPS tersimpan';
  } else if(buyerAddress.address) {
    el.textContent = buyerAddress.address.length > 40 ? buyerAddress.address.substring(0,40)+'...' : buyerAddress.address;
  } else if(buyerAddress.name) {
    el.textContent = buyerAddress.name;
  } else {
    el.textContent = 'Pilih alamat pengiriman →';
  }
}

// ===== WHATSAPP =====
function orderViaWhatsApp() {
  if(cart.length===0) return;
  const sub = cart.reduce((s,c)=>s+c.price*c.qty,0);
  let msg = `🛒 *PESANAN BARU - REDGOLD Kitchen*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n\n`;
  cart.forEach((item,i)=>{
    msg += `${i+1}. *${item.name}*\n`;
    msg += `   ${item.qty}x ${formatPrice(item.price)} = ${formatPrice(item.price*item.qty)}\n\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📦 Subtotal: *${formatPrice(sub)}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n\n`;

  if(buyerAddress.name || buyerAddress.address || buyerAddress.locText) {
    msg += `📍 *Alamat Pengiriman:*\n`;
    if(buyerAddress.name) msg += `👤 ${buyerAddress.name}\n`;
    if(buyerAddress.phone) msg += `📱 ${buyerAddress.phone}\n`;
    if(buyerAddress.address) msg += `🏠 ${buyerAddress.address}\n`;
    if(buyerAddress.locText) msg += `🗺️ ${buyerAddress.locText}\n`;
    if(buyerAddress.notes) msg += `📝 ${buyerAddress.notes}\n`;
    msg += `\n`;
  } else {
    msg += `⚠️ *Belum ada alamat pengiriman!*\n\n`;
  }

  msg += `💳 Metode pembayaran: ?\n`;
  msg += `\n_Terima kasih!_ 🙏`;

  const waNumber = '6285819749737';
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== BADGES & FLOATING =====
function updateBadges() {
  const count = cart.reduce((s,c)=>s+c.qty,0);
  ['home-badge','menu-badge'].forEach(id=>{
    const b = document.getElementById(id);
    if(count>0){ b.style.display='flex'; b.textContent=count>99?'99+':count; b.classList.remove('pulse'); void b.offsetWidth; b.classList.add('pulse'); }
    else b.style.display='none';
  });
}
function updateFloatingCart() {
  const fc = document.getElementById('floatingCart');
  const active = document.querySelector('.screen.active');
  const isHomeMenu = active && (active.id==='screen-home'||active.id==='screen-menu');
  const count = cart.reduce((s,c)=>s+c.qty,0);
  const total = cart.reduce((s,c)=>s+c.price*c.qty,0);
  if(count>0 && isHomeMenu){
    fc.classList.add('show');
    document.getElementById('floatingCount').textContent = count;
    document.getElementById('floatingTotal').textContent = formatPrice(total);
  } else fc.classList.remove('show');
}

// ===== SWIPE =====
let touchStartY=0;
document.getElementById('detailSheet').addEventListener('touchstart',e=>{touchStartY=e.touches[0].clientY;},{passive:true});
document.getElementById('detailSheet').addEventListener('touchmove',e=>{if(e.touches[0].clientY-touchStartY>80&&document.getElementById('detailSheet').scrollTop<=0)closeDetailDirect();},{passive:true});

// ===== INIT =====
renderPopular();
renderMenu();
updateBadges();
updateFloatingCart();


// ===== PLATFORM HANDLER =====
function openPlatform(platform) {
  const iconEl = document.getElementById(platform === 'grab' ? 'grabIcon' : platform === 'shopee' ? 'shopeeIcon' : 'gojekIcon');

  // Ripple effect
  const ripple = document.createElement('div');
  ripple.className = 'platform-ripple';
  iconEl.appendChild(ripple);
  setTimeout(() => ripple.remove(), 500);

  const links = {
    grab: 'https://food.grab.com/id/id/restaurant/asap-pedas-pesanggrahan-delivery/6-C7WXLLAUN7DYPE?nameSlug=asap-pedas---pesanggrahan&id=6-C7WXLLAUN7DYPE',
    shopee: 'https://shopee.co.id/search?keyword=Asap+Pedas+X+Teko',
    gojek: 'https://gofood.co.id/malang/restaurant/asap-pedas-x-teko-kota-batu-22837f80-3b08-48be-9dc9-10db3a5221a1'
  };

  const names = {
    grab: 'GrabFood',
    shopee: 'Shopee Food',
    gojek: 'GoFood'
  };

  showToast(`🟢 Membuka ${names[platform]}...`);

  // Try deep link first, fallback to web
  const deepLinks = {
    grab: 'grabfood://',
    shopee: 'shopee://',
    gojek: 'gojek://'
  };

  // Attempt to open app, then fallback to web
  const appLink = deepLinks[platform];
  const webLink = links[platform];

  const timeout = setTimeout(() => {
    window.open(webLink, '_blank');
  }, 1500);

  window.location.href = appLink;

  // If app opens, the page will lose focus and timeout won't matter much
  // If it fails, web link opens after 1.5s
  window.addEventListener('blur', () => clearTimeout(timeout), { once: true });
}