/* DOM-backed query: every displayed source record is already in the article. */
(() => {
  'use strict';
  const normalize = value => String(value || '').normalize('NFKC').toLowerCase().trim();
  const inShop = (value, level) => {
    if (!level || /不适用/.test(value)) return true;
    const range = value.match(/^(\d+)(?:\s*[-–～]\s*(\d+))?$/);
    return !!range && Number(level) >= Number(range[1]) && Number(level) <= Number(range[2] || range[1]);
  };

  function initialize() {
    document.querySelectorAll('[data-drop-query]').forEach(root => {
      if (root.dataset.initialized) return;
      root.dataset.initialized = 'true';
      const form = root.querySelector('form');
      const groups = Array.from(root.querySelectorAll('.dp-group'));
      const fields = Object.fromEntries(Array.from(form.querySelectorAll('[data-filter]')).map(el => [el.dataset.filter, el]));
      const count = root.querySelector('[data-result-count]');
      const pageLabel = root.querySelector('[data-page-label]');
      const prev = root.querySelector('[data-page="prev"]');
      const next = root.querySelector('[data-page="next"]');
      const pageSize = 8;
      let page = 1;
      let matching = [];
      const params = new URLSearchParams(location.search);
      if (params.has('q')) fields.query.value = params.get('q');
      for (const key of ['category', 'role', 'world', 'shop', 'type']) {
        if (fields[key] && params.has(key) && Array.from(fields[key].options).some(o => o.value === params.get(key))) {
          fields[key].value = params.get(key);
        }
      }

      function showPage() {
        const pages = Math.max(1, Math.ceil(matching.length / pageSize));
        page = Math.min(Math.max(1, page), pages);
        const visible = new Set(matching.slice((page - 1) * pageSize, page * pageSize));
        groups.forEach(group => { group.hidden = !visible.has(group); });
        prev.disabled = page === 1;
        next.disabled = page === pages;
        pageLabel.textContent = `第 ${page} / ${pages} 页`;
      }

      function apply() {
        const query = normalize(fields.query.value);
        const role = fields.role.value;
        let recordCount = 0;
        matching = groups.filter(group => {
          const nameMatches = !query || normalize(group.dataset.search).includes(query);
          let rowCount = 0;
          const categoryMatches = !fields.category.value || group.dataset.category === fields.category.value;
          group.querySelectorAll('.dp-record').forEach(row => {
            const roleLabel = row.querySelector('.dp-role-names');
            if (roleLabel) roleLabel.textContent = role ? fields.role.selectedOptions[0].textContent.split(' / ')[0] : roleLabel.dataset.roleLabel;
            const locations = Array.from(row.querySelectorAll('[data-world]'));
            const world = fields.world?.value || '';
            const inRole = el => !role || el.dataset.worldRoles.split(';').includes(role);
            const locationMatches = !locations.length || locations.some(el => inRole(el) && (!world || el.dataset.world === world));
            locations.forEach(el => {
              el.hidden = !inRole(el);
              el.classList.toggle('dp-world-selected', !!world && el.dataset.world === world);
            });
            const eligible = nameMatches && categoryMatches && (!role || row.dataset.roles.split(';').map(s => s.trim()).includes(role))
              && locationMatches && inShop(row.dataset.shop, fields.shop.value) && (!fields.type.value || row.dataset.dropType === fields.type.value);
            row.hidden = !eligible;
            if (eligible) rowCount++;
          });
          group.querySelector('[data-group-count]').textContent = rowCount;
          if (query && rowCount) group.open = true;
          recordCount += rowCount;
          return rowCount > 0;
        });
        count.textContent = `${matching.length} 种物品 · ${recordCount} 条掉落条件`;
        root.querySelector('[data-empty]').hidden = matching.length !== 0;
        page = 1;
        showPage();
      }

      form.addEventListener('submit', event => event.preventDefault());
      form.addEventListener('input', apply);
      form.addEventListener('change', apply);
      form.addEventListener('reset', () => setTimeout(() => {
        groups.forEach(group => { group.open = false; });
        apply();
      }, 0));
      prev.addEventListener('click', () => { page--; showPage(); root.scrollIntoView({ block: 'start' }); });
      next.addEventListener('click', () => { page++; showPage(); root.scrollIntoView({ block: 'start' }); });

      function revealHash() {
        if (!location.hash) return;
        let id;
        try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
        const group = groups.find(item => item.id === id);
        if (!group) return;
        form.reset();
        // Reset runs in a timer; set the exact item query afterwards.
        setTimeout(() => {
          fields.query.value = group.dataset.search.split(' / ')[0];
          // Use the existing name; querying the whole normalized string matches itself.
          apply();
          group.open = true;
          group.scrollIntoView({ block: 'start' });
        }, 1);
      }
      apply();
      revealHash();
      // Removed when a PJAX replacement disconnects the root.
      const onHash = () => {
        if (!root.isConnected) window.removeEventListener('hashchange', onHash);
        else revealHash();
      };
      document.addEventListener('pjax:send', () => window.removeEventListener('hashchange', onHash), { once: true });
      window.addEventListener('hashchange', onHash);
    });
  }

  // One lifecycle listener even when Butterfly executes data-pjax scripts again.
  if (!window.khDropPreviewLifecycle) {
    window.khDropPreviewLifecycle = true;
    document.addEventListener('pjax:complete', initialize);
    document.addEventListener('DOMContentLoaded', initialize);
  }
  initialize();
})();
