/* Local Chromium QA fallback when the in-app Browser runtime cannot load.
 * Uses the blog's existing ws dependency, an isolated profile and loopback only.
 * All temporary files are below BBSFM/work/runs and removed in finally.
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const WebSocket = require('ws');
const bbs = path.resolve(__dirname, '../..');
const stamp = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date()).replace(/\D/g, '');
const runs = path.join(bbs, 'work/runs');
const run = path.resolve(runs, `${stamp}-blog-drop-previews`);
const evidence = path.join(bbs, 'work/validation/blog-drop-previews-20261010');
const keepWork = process.argv.includes('--keep-work');
const origin = 'http://127.0.0.1:5001';
const pages = ['bbs-drops-items'];
const browserPaths = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Users/HosamaJJF/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe',
];
const chromePath = browserPaths.find(p => fs.existsSync(p));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let child, socket, nextId = 1;
const pending = new Map();
const checks = [];
const exceptions = [];
let started = false;
let browserLog = '';

function check(value, label) {
  if (!value) throw new Error(`Failed: ${label}`);
  checks.push(label);
  console.log(`PASS ${label}`);
}
function cdp(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = nextId++;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`CDP timeout: ${method}`)); }, 20000);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await cdp('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text + ': ' + result.exceptionDetails.exception?.description);
  return result.result.value;
}
async function until(fn, label, timeout = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await fn()) return;
    await sleep(100);
  }
  throw new Error(`Timeout: ${label}`);
}
async function go(slug, suffix = '') {
  const pathname = slug ? `/posts/${slug}/` : '/';
  await cdp('Page.navigate', { url: origin + pathname + suffix });
  await until(() => evaluate(`location.pathname === ${JSON.stringify(pathname)} && document.readyState === 'complete' ${slug && pages.indexOf(slug) < 2 ? "&& !!document.querySelector('[data-drop-query][data-initialized]')" : ''}`), slug || 'homepage');
  await sleep(250);
}
async function set(key, value) {
  await evaluate(`(() => { const el = document.querySelector('[data-filter="${key}"]'); el.value=${JSON.stringify(value)}; el.dispatchEvent(new Event('input',{bubbles:true})); })()`);
}
async function reset() {
  await evaluate(`document.querySelector('.dp-controls').reset()`);
  await sleep(50);
}
async function screenshot(name, scrollTop = true) {
  if (scrollTop) await evaluate('window.scrollTo(0,0)');
  await sleep(150);
  const { data } = await cdp('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  fs.writeFileSync(path.join(run, name + '.png'), Buffer.from(data, 'base64'));
}
async function click(selector) {
  await evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
}
async function measureMobile(slug) {
  await go(slug);
  if (pages.indexOf(slug) < 2) await evaluate(`document.querySelector('.dp-group:not([hidden])').open=true`);
  const widths = await evaluate(`({viewport:innerWidth, body:document.documentElement.scrollWidth, article:document.querySelector('#article-container').getBoundingClientRect().width})`);
  check(widths.body <= widths.viewport + 1, `${slug}: mobile width has no page overflow`);
  return widths;
}

(async () => {
  try {
    if (!chromePath) throw new Error('Installed Chromium not found');
    if (!run.startsWith(path.resolve(runs) + path.sep)) throw new Error('Invalid run path');
    fs.mkdirSync(run, { recursive: true });
    const profile = path.join(run, 'chrome-profile');
    child = spawn(chromePath, ['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--disable-extensions','--remote-debugging-port=0',`--user-data-dir=${profile}`,'about:blank'], { windowsHide: true, stdio: ['ignore','ignore','pipe'] });
    child.stderr.on('data', bytes => { browserLog = (browserLog + bytes.toString()).slice(-4000); });
    child.on('error', error => console.error(error.message));
    const portFile = path.join(profile, 'DevToolsActivePort');
    await until(async () => fs.existsSync(portFile), 'isolated browser launch');
    const port = Number(fs.readFileSync(portFile, 'utf8').split(/\r?\n/)[0]);
    const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
    socket = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.once('open', resolve); socket.once('error', reject); });
    socket.on('message', bytes => {
      const message = JSON.parse(bytes);
      if (message.id && pending.has(message.id)) {
        const item = pending.get(message.id); pending.delete(message.id); clearTimeout(item.timer);
        message.error ? item.reject(new Error(JSON.stringify(message.error))) : item.resolve(message.result);
      } else if (message.method === 'Runtime.exceptionThrown') exceptions.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
    });
    await cdp('Page.enable'); await cdp('Runtime.enable'); await cdp('Network.enable');
    await cdp('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1050, deviceScaleFactor: 1, mobile: false });
    started = true;

    for (const slug of pages) {
      await go(slug);
      check(await evaluate(`!!document.querySelector('#post #article-container .drop-preview') && !!document.querySelector('#nav') && !!document.querySelector('#aside-content')`), `${slug}: existing Butterfly article, navigation and sidebar`);
      check(await evaluate(`document.querySelectorAll('.dp-nav-links a').length === 0`), `${slug}: article omits comparison navigation`);
      await screenshot(slug + '-desktop');
    }

    await go(pages[0]);
    check(await evaluate(`document.querySelector('h1.post-title').textContent==='物品掉落来源与概率查询'`), 'published article uses the final title');
    check(await evaluate(`document.querySelector('#article-container').textContent.trim().startsWith('本文资料使用AI辅助整理，数据来源') && document.querySelectorAll('.dp-intro:first-child a').length===4`), 'opening retains AI attribution and all four source links');
    check(await evaluate(`!document.querySelector('#article-container').textContent.includes('想找某个结晶') && !document.querySelector('#article-container a[href*="downloads/drop-previews"]')`), 'removed introduction and attachment links remain absent');
    check(await evaluate(`document.querySelectorAll('.dp-group').length === 104 && document.querySelectorAll('.dp-record').length === 277`), 'item article contains all 104 items and 277 records');
    check(await evaluate(`document.querySelectorAll('.dp-group:not([hidden])').length === 8`), 'item pagination starts with eight groups');
    await click('[data-page="next"]');
    check(await evaluate(`document.querySelector('[data-page-label]').textContent.includes('2 / 13')`), 'item next-page navigation');
    check(await evaluate(`!document.querySelector('#article-container').textContent.includes('具体世界未按掉落条件细分') && !document.querySelector('#article-container').textContent.includes('不擅自拆成不同掉落表')`), 'selected article removes both unwanted explanations');
    check(await evaluate(`!document.querySelector('h1.post-title').textContent.includes('形式一') && document.querySelectorAll('.dp-worlds').length===277 && Array.from(document.querySelectorAll('.dp-worlds'),el=>el.querySelectorAll('[data-world]').length).every(n=>n>0)`), 'selected article has appearance worlds for every original condition');
    const appearanceSource=JSON.parse(fs.readFileSync(path.join(__dirname,'drop-preview-worlds.json'),'utf8'));
    const patchNames=JSON.parse(fs.readFileSync(path.join(__dirname,'drop-preview-names.json'),'utf8'));
    const worldNames=Object.fromEntries(patchNames.names.filter(n=>n.kind==='world').map(n=>[n.en,n.zh]));
    const expectedMilestones=appearanceSource.shop.milestones.map(m=>({level:String(m.level),names:m.worlds.map(w=>worldNames[w])}));
    await click('#shop-level-guide summary');
    check(await evaluate(`document.querySelector('#shop-level-guide').open && document.querySelectorAll('.dp-shop-table tbody tr').length===8 && ${JSON.stringify(expectedMilestones)}.every(m=>{const row=Array.from(document.querySelectorAll('.dp-shop-table tbody tr')).find(r=>r.querySelector('th').textContent===m.level);return m.names.every(n=>row.textContent.includes(n))})`), 'Shop Level guide contains all eight sourced milestones with patch world names');
    check(await evaluate(`!document.querySelector('.dp-shop-guide a') && document.querySelector('.dp-shop-guide').textContent.includes('通关对应世界') && !document.querySelector('.dp-shop-guide').textContent.includes('例如：')`), 'Shop Level explanation retains progression rules and omits the removed example and source paragraph');
    await evaluate(`document.querySelector('#shop-level-guide').scrollIntoView({block:'start'})`);
    await screenshot('items-shop-level-desktop',false);
    await reset(); await set('query','秘藏原石'); await set('shop','7'); await set('world','Deep Space'); await set('role','Aqua');
    check(await evaluate(`document.querySelector('[data-result-count]').textContent.includes('1 种物品') && document.querySelector('.dp-record:not([hidden]) .dp-rate').textContent==='0.04%' && document.querySelector('.dp-record:not([hidden]) .dp-role-names').textContent==='阿库娅'`), 'Aqua can find Secret Gem from Flood in Deep Space at Shop Level 7');
    await set('role','Terra');
    check(await evaluate(`!document.querySelector('[data-empty]').hidden`), 'Terra does not inherit Aqua-only Flood appearance in Deep Space');
    await reset(); await set('world','Realm of Darkness'); await set('role','Aqua');
    check(await evaluate(`document.querySelector('[data-result-count]').textContent.includes('9 条掉落条件') && Array.from(document.querySelectorAll('.dp-record:not([hidden])')).every(r=>r.querySelectorAll('[data-world]').length===1 && r.querySelector('[data-world]').dataset.world==='Realm of Darkness')`), 'Secret Episode retains exactly nine Aqua records in Realm of Darkness');
    await set('role','Terra');
    check(await evaluate(`!document.querySelector('[data-empty]').hidden`), 'Realm of Darkness rows remain restricted to Aqua');
    await reset(); await set('category','冰淇淋材料'); await set('world','Deep Space'); await set('role','Terra');
    check(await evaluate(`document.querySelector('[data-empty]').hidden && Array.from(document.querySelectorAll('.dp-record:not([hidden])')).every(r=>r.querySelectorAll('[data-world]').length===1 && r.querySelector('[data-world]').dataset.world==='Deep Space')`), 'Prize Pod material locations stay specific instead of inheriting every enemy world');
    await reset(); await set('world','Olympus Coliseum');
    check(await evaluate(`Array.from(document.querySelectorAll('.dp-record:not([hidden])')).filter(r=>r.textContent.includes('CBBS 独立表')).length===39`), '39 independent cup records remain associated with Olympus Coliseum');
    await reset(); await set('query','秘藏原石'); await set('role','Terra');
    check(await evaluate(`Array.from(document.querySelectorAll('.dp-world:not([hidden])')).filter(el=>el.closest('#item-secret-gem')).every(el=>el.dataset.worldRoles.includes('Terra')) && !document.querySelector('#item-secret-gem .dp-world[data-world="Deep Space"]:not([hidden])')`), 'world tags update when the selected character changes');
    await go(pages[0], '?q=Secret%20Gem&role=Aqua&shop=7&world=Deep%20Space');
    check(await evaluate(`document.querySelector('[data-filter="world"]').value==='Deep Space' && document.querySelector('[data-result-count]').textContent.includes('1 种物品')`), 'world and character filters work in a direct article link');
    check(await evaluate(`Array.from(document.querySelectorAll('.dp-evidence')).every(el=>el.querySelector('a[href*="oldid="]'))`), 'every condition links to a revision of its enemy appearance source');
    await reset();
    await set('query', '秘藏原石');
    check(await evaluate(`document.querySelector('[data-result-count]').textContent.includes('1 种物品')`), 'Chinese item search reuses existing translation');
    await set('query', '秘められし原石');
    check(await evaluate(`document.querySelector('[data-result-count]').textContent.includes('1 种物品')`), 'Japanese item search');
    await set('query', 'Secret Gem'); await set('shop', '6');
    check(await evaluate(`!document.querySelector('[data-empty]').hidden`), 'shop level 6 excludes the Secret Gem level 7–8 condition');
    await set('shop', '7'); await set('role', 'Aqua');
    check(await evaluate(`document.querySelector('.dp-record:not([hidden]) .dp-rate').textContent === '0.04%'`), 'English search and role/shop intersection retain 0.04%');
    await click('.dp-record:not([hidden]) .dp-evidence summary');
    check(await evaluate(`document.querySelector('.dp-record:not([hidden]) .dp-evidence').open && document.querySelector('.dp-record:not([hidden]) .dp-evidence').textContent.includes('1%')`), 'source details retain box weight and revision evidence');
    await reset(); await set('category', '冰淇淋材料'); await set('shop', '3');
    check(await evaluate(`document.querySelector('[data-result-count]').textContent.includes('42 种物品')`), 'Prize Pod materials remain available when Shop Level is inapplicable');
    await reset(); await set('query', "Dancin' Lemon");
    check(await evaluate(`!!Array.from(document.querySelectorAll('.dp-record:not([hidden])')).find(r=>r.querySelector('.dp-warning'))`), 'single-source material condition keeps its conflict badge');
    await reset(); await set('query', 'Ｆｉｒｅ');
    check(await evaluate(`document.querySelector('[data-empty]').hidden`), 'full-width English search normalization');
    await set('query', '<img src=x onerror=alert(1)>');
    check(await evaluate(`!document.querySelector('[data-empty]').hidden && !document.querySelector('img[src="x"]')`), 'search input is text only and supports empty state');
    await go(pages[0], '#item-secret-gem');
    check(await evaluate(`document.querySelector('#item-secret-gem').open && !document.querySelector('#item-secret-gem').hidden`), 'direct item anchor reveals a paginated record');

    await go('');
    await sleep(2000);
    await evaluate('window.__dropPreviewDocumentMarker=739');
    await click('a[href="/posts/bbs-drops-items/"]');
    await until(() => evaluate(`location.pathname.includes('bbs-drops-items') && !!document.querySelector('[data-drop-query][data-initialized]')`), 'homepage to item article');
    check(await evaluate(`window.__dropPreviewDocumentMarker===739 && getComputedStyle(document.querySelector('.dp-controls')).display==='grid'`), 'homepage PJAX entry initializes query and scoped styles');
    await click('.nav-site-title');
    await until(() => evaluate(`location.pathname==='/' && document.readyState==='complete'`), 'PJAX return to homepage');
    await sleep(2000);
    await click('a[href="/posts/bbs-drops-items/"]');
    await until(() => evaluate(`location.pathname.includes('bbs-drops-items') && !!document.querySelector('[data-drop-query][data-initialized]')`), 'repeat PJAX entry');
    await set('query', 'Secret Gem');
    check(await evaluate(`window.__dropPreviewDocumentMarker===739 && document.querySelector('[data-result-count]').textContent.includes('1 种物品')`), 'repeat PJAX entry keeps the query working');

    await cdp('Emulation.setDeviceMetricsOverride', { width: 390, height: 1050, deviceScaleFactor: 1, mobile: true });
    for (const slug of pages) {
      await measureMobile(slug);
      await screenshot(slug + '-mobile');
    }
    await go(pages[0], '?q=Secret%20Gem&role=Aqua&shop=7');
    await evaluate(`document.querySelector('#item-secret-gem').scrollIntoView({block:'start'})`);
    check(await evaluate(`document.documentElement.scrollWidth<=innerWidth+1`), 'appearance world tags fit a 390px mobile result card');
    await screenshot('items-worlds-mobile',false);
    await click('#shop-level-guide summary');
    await evaluate(`document.querySelector('#shop-level-guide').scrollIntoView({block:'start'})`);
    check(await evaluate(`document.documentElement.scrollWidth<=innerWidth+1`), 'expanded Shop Level milestone table fits mobile');
    await screenshot('items-shop-level-mobile',false);
    await go(pages[0]);
    await evaluate(`document.documentElement.setAttribute('data-theme','dark')`);
    check(await evaluate(`getComputedStyle(document.querySelector('.drop-preview')).getPropertyValue('--dp-ink').trim()==='#d3e0ed'`), 'scoped components follow Butterfly dark mode');
    await screenshot('items-mobile-dark');
    for (const pathname of ['/posts/bbs-drops-enemies/', '/posts/bbs-drops-mechanics/', '/posts/bbs-drops-research/', '/downloads/drop-previews/khbbsfm-drop-database.zip']) {
      const response = await fetch(origin + pathname);
      check(response.status === 404, `unused output removed: ${pathname}`);
    }
    check(exceptions.length === 0, 'no uncaught browser exceptions');

    fs.mkdirSync(evidence, { recursive: true });
    for (const name of fs.readdirSync(run).filter(name => name.endsWith('.png'))) fs.copyFileSync(path.join(run,name),path.join(evidence,name));
    fs.writeFileSync(path.join(evidence,'published-summary.json'), JSON.stringify({ passed: true, checks, exceptions, origin, pages, screenshot_count: fs.readdirSync(run).filter(n=>n.endsWith('.png')).length },null,2));
    console.log(JSON.stringify({ passed: true, check_count: checks.length, evidence }));
  } catch (error) {
    if (started) { try { await screenshot('failure'); } catch {} }
    console.error(error.stack);
    if (browserLog) console.error(browserLog);
    console.error(JSON.stringify({ exceptions, checks_completed: checks.length, run }));
    process.exitCode = 1;
  } finally {
    if (socket?.readyState === WebSocket.OPEN && started) {
      try { await cdp('Browser.close'); } catch {}
    }
    socket?.close();
    if (child && child.exitCode === null) {
      await Promise.race([new Promise(resolve=>child.once('exit',resolve)),sleep(2000)]);
      if (child.exitCode === null) child.kill();
    }
    for (const item of pending.values()) clearTimeout(item.timer);
    if (!keepWork && fs.existsSync(run)) {
      const verified = path.resolve(run);
      if (!verified.startsWith(path.resolve(runs)+path.sep) || fs.lstatSync(verified).isSymbolicLink()) throw new Error('Unsafe cleanup path');
      fs.rmSync(verified,{ recursive:true, force:true, maxRetries:10, retryDelay:300 });
    }
  }
})();
