export const qs = new URLSearchParams(location.search);
export const getParam = (k, def=null) => qs.get(k) ?? def;

export async function mountPartials() {
  // Detect relative path for partials depending on nesting
  const depth = location.pathname.split('/').length - 2; // rough
  const prefix = depth > 0 ? '../'.repeat(depth) : './';
  const [h, f] = await Promise.all([
    fetch(prefix + 'partials/header.html').then(r=>r.text()),
    fetch(prefix + 'partials/footer.html').then(r=>r.text()),
  ]);
  document.getElementById('site-header').innerHTML = h;
  document.getElementById('site-footer').innerHTML = f;

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
}

export function renderCards(el, items, linkBase){
  el.classList.add('grid');
  el.innerHTML = items.map(x => `
    <article class="card">
      <img src="${x.image}" alt="${x.name}">
      <div class="body">
        <h3>${x.name}</h3>
        <p>${x.short || ''}</p>
        <div>${(x.tags||[]).map(t=>`<span class="badge">${t}</span>`).join('')}</div>
      </div>
      <a class="btn" href="${linkBase}?id=${encodeURIComponent(x.id)}">Ver</a>
    </article>
  `).join('');
}

export function renderDetail(el, item){
  el.innerHTML = `
    <div class="detail">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h1>${item.name}</h1>
        <p>${item.desc || item.short || ''}</p>
        ${(item.tags||[]).map(t=>`<span class="badge">${t}</span>`).join(' ')}
        <div style="margin-top:14px">
          <a class="btn" href="./${location.pathname.split('/').pop()}">Volver</a>
        </div>
      </div>
    </div>
  `;
  document.title = `${item.name} | ${document.title}`;
}
