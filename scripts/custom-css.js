hexo.extend.filter.register('after_render:html', function (html) {
  const root = this.config.root || '/';
  const href = `${root.replace(/\/$/, '')}/css/custom.css`.replace(/^\/\//, '/');
  html = html.replace('</head>', `<link rel="stylesheet" href="${href}"></head>`);
  if (html.includes('class="synthesis-section"')) {
    const script = `${root.replace(/\/$/, '')}/js/synthesis-tables.js`.replace(/^\/\//, '/');
    html = html.replace('</body>', `<script src="${script}" defer></script></body>`);
  }
  return html;
});
