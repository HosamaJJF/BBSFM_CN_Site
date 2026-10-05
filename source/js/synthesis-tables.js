(() => {
  function enhanceTables() {
    document.querySelectorAll('.synthesis-section .synthesis-table-wrap').forEach(wrap => {
      if (wrap.dataset.scrollControls) return;
      wrap.dataset.scrollControls = 'true';

      const panel = document.createElement('div');
      panel.className = 'synthesis-table-panel';
      const controls = document.createElement('div');
      controls.className = 'synthesis-scroll-controls';
      controls.hidden = true;
      const label = document.createElement('span');
      label.className = 'synthesis-scroll-label';
      label.textContent = '左右查看';
      const tableName = wrap.getAttribute('aria-label').replace('，可横向滚动', '');

      const left = document.createElement('button');
      left.type = 'button';
      left.textContent = '←';
      left.setAttribute('aria-label', `向左滚动${tableName}`);
      const right = document.createElement('button');
      right.type = 'button';
      right.textContent = '→';
      right.setAttribute('aria-label', `向右滚动${tableName}`);
      const slider = document.createElement('input');
      slider.type = 'range';
      slider.min = '0';
      slider.max = '0';
      slider.value = '0';
      slider.step = '1';
      slider.setAttribute('aria-label', `${tableName}横向滚动位置`);
      controls.append(label, left, slider, right);
      wrap.before(panel);
      panel.append(controls, wrap);

      function sync() {
        const max = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
        controls.hidden = max <= 1;
        slider.max = String(Math.round(max));
        slider.value = String(Math.round(wrap.scrollLeft));
        slider.setAttribute('aria-valuetext', `已向右滚动 ${max ? Math.round(wrap.scrollLeft / max * 100) : 0}%`);
        left.disabled = wrap.scrollLeft <= 1;
        right.disabled = wrap.scrollLeft >= max - 1;
      }
      slider.addEventListener('input', () => {
        wrap.scrollLeft = Number(slider.value);
        sync();
      });
      const scroll = direction => {
        wrap.scrollBy({
          left: direction * Math.max(160, wrap.clientWidth * 0.7),
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      };
      left.addEventListener('click', () => scroll(-1));
      right.addEventListener('click', () => scroll(1));
      wrap.addEventListener('scroll', sync, {passive: true});
      const observer = new ResizeObserver(sync);
      observer.observe(wrap);
      observer.observe(wrap.querySelector('table'));
      sync();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceTables, {once: true});
  } else {
    enhanceTables();
  }
  document.addEventListener('pjax:complete', enhanceTables);
})();
