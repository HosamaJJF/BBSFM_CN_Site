hexo.extend.filter.register('after_render:html', function (html) {
  const root = this.config.root || '/';
  const href = `${root.replace(/\/$/, '')}/css/custom.css`.replace(/^\/\//, '/');
  html = html.replace('</head>', `<link rel="stylesheet" href="${href}"></head>`);
  // PJAX only replaces selected page fragments, so article-only scripts at the
  // end of <body> are not loaded when navigating here from another page.
  const scripts = ['synthesis-tables.js', 'synthesis-search.js'].map(name => {
    const src = `${root.replace(/\/$/, '')}/js/${name}`.replace(/^\/\//, '/');
    return `<script src="${src}" defer></script>`;
  }).join('');
  html = html.replace('</body>', `${scripts}</body>`);
  return html;
});
