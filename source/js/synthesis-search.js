(() => {
  const roles = ['泰拉', '维恩图斯', '阿库娅'];
  const normalize = value => value.normalize('NFKC').toLowerCase().replace(/\s+/g, '');
  const nameKey = name => name.ja || name.en || name.cn;
  const matches = (name, query) => [name.cn, name.ja, name.en].some(value => normalize(value).includes(query));

  function readName(cell) {
    const text = language => cell.querySelector(`.synthesis-name-${language}`)?.textContent.trim() || '';
    return {cn: text('cn'), ja: text('ja'), en: text('en')};
  }

  function readText(cell) {
    const copy = cell.cloneNode(true);
    copy.querySelectorAll('br').forEach(br => br.replaceWith('\n'));
    return copy.textContent.trim();
  }

  // Each visual row becomes a complete recipe, including inherited names,
  // ingredient levels and role flags from every rowspan / colspan.
  function expandRows(table) {
    const grid = [];
    Array.from(table.rows).forEach((row, rowIndex) => {
      grid[rowIndex] ||= [];
      let column = 0;
      Array.from(row.cells).forEach(cell => {
        while (grid[rowIndex][column]) column++;
        const height = cell.rowSpan || table.rows.length - rowIndex;
        for (let y = 0; y < height; y++) {
          grid[rowIndex + y] ||= [];
          for (let x = 0; x < cell.colSpan; x++) grid[rowIndex + y][column + x] = cell;
        }
        column += cell.colSpan;
      });
    });
    return grid;
  }

  function readTables(section) {
    const article = section.closest('#article-container');
    const commands = new Map();
    const abilities = new Map();
    const abilityRows = new Map();
    const recipes = [];
    const commandCells = new Map();
    const abilityCells = new Map();
    const register = (map, name) => {
      const key = nameKey(name);
      if (!map.has(key)) map.set(key, {name, aliases: [], key});
      map.get(key).aliases.push(name);
      return key;
    };

    article.querySelectorAll('.synthesis-table--abilities').forEach(table => {
      const grid = expandRows(table);
      Array.from(table.rows).forEach((row, rowIndex) => {
        const cells = grid[rowIndex];
        if (!cells[0]?.id.startsWith('ability-row-')) return;
        const letter = cells[0].textContent.trim();
        const mappings = [];
        cells.slice(1).forEach((cell, index) => {
          const name = readName(cell);
          // Random crystal outcomes have no specified ability in the source.
          if (!name.cn) return;
          const key = register(abilities, name);
          const crystal = readName(grid[0][index + 1]);
          mappings.push({key, name, crystal});
          abilityCells.set(cell, name);
        });
        abilityRows.set(letter, mappings);
      });
    });

    article.querySelectorAll('.synthesis-table--attack, .synthesis-table--magic, .synthesis-table--other').forEach((table, tableIndex) => {
      const grid = expandRows(table);
      const category = table.closest('section').querySelector('h2').textContent.trim();
      Array.from(table.rows).forEach((row, rowIndex) => {
        if (row.classList.contains('synthesis-header-row') || row.classList.contains('synthesis-spacer')) return;
        const cells = grid[rowIndex];
        if (cells.length !== 11 || !readName(cells[0]).cn) return;
        const output = readName(cells[0]);
        const ingredients = [1, 3].map(index => ({name: readName(cells[index]), level: readText(cells[index + 1])}));
        const key = register(commands, output);
        commandCells.set(cells[0], output);
        ingredients.forEach((ingredient, index) => {
          ingredient.key = register(commands, ingredient.name);
          commandCells.set(cells[index ? 3 : 1], ingredient.name);
        });
        row.id = `synthesis-recipe-${tableIndex}-${rowIndex}`;
        const letter = readText(cells[5]);
        recipes.push({
          key, output, ingredients, letter, category, source: row, cells,
          rate: readText(cells[6]), note: readText(cells[10]),
          roles: roles.filter((_, index) => cells[index + 7].classList.contains('synthesis-yes')),
          abilities: abilityRows.get(letter) || []
        });
      });
    });
    return {commands, abilities, recipes, commandCells, abilityCells};
  }

  function initialize() {
    const section = document.getElementById('synthesis-search');
    const mount = section?.querySelector('[data-synthesis-search]');
    if (!mount || mount.dataset.ready) return;
    const data = readTables(section);
    if (!data.recipes.length) return;
    mount.dataset.ready = 'true';
    mount.innerHTML = `
      <div class="synthesis-search-modes" role="group" aria-label="查询方式">
        <button type="button" data-mode="command" aria-pressed="true">查配方</button>
        <button type="button" data-mode="usage" aria-pressed="false">查用途</button>
        <button type="button" data-mode="ability" aria-pressed="false">查能力</button>
      </div>
      <form class="synthesis-search-form" role="search" aria-label="合成配方查询">
        <div class="synthesis-search-fields">
          <label class="synthesis-search-name"><span data-query-label>想合成的指令</span>
            <input type="search" name="query" list="synthesis-search-names" placeholder="例如：火焰冲刺 / Fire Dash" autocomplete="off" maxlength="100">
          </label>
          <label><span>使用角色</span><select name="role"><option value="">全部角色</option></select></label>
          <label data-ability-field><span>希望附带的能力</span><select name="ability"><option value="">不限能力</option></select></label>
        </div>
        <div class="synthesis-search-actions"><button type="submit" class="synthesis-search-submit">查询配方</button><button type="button" data-reset>重置</button></div>
      </form>
      <datalist id="synthesis-search-names"></datalist>
      <p class="synthesis-search-status" role="status" aria-live="polite" aria-atomic="true"></p>
      <div class="synthesis-search-results"></div>
      <button type="button" class="synthesis-search-more" hidden>显示更多配方</button>
      <p class="synthesis-search-footnote">成功率指获得卡片所示产物的概率，请留意角色和突变条件。查用途时，标记的指令为查询素材，能力筛选针对产物。混沌结晶、秘藏原石及不加入结晶的随机能力，不列入指定能力的反查结果。</p>`;

    const form = mount.querySelector('form');
    const query = form.elements.query;
    const role = form.elements.role;
    const ability = form.elements.ability;
    const status = mount.querySelector('.synthesis-search-status');
    const results = mount.querySelector('.synthesis-search-results');
    const more = mount.querySelector('.synthesis-search-more');
    const suggestions = mount.querySelector('datalist');
    const sortedAbilities = Array.from(data.abilities.values()).sort((a, b) => a.name.cn.localeCompare(b.name.cn, 'zh-CN'));
    roles.forEach(name => role.add(new Option(name, name)));
    sortedAbilities.forEach(entry => ability.add(new Option(entry.name.cn, entry.key)));

    let mode = 'command';
    let limit = 12;
    let filtered = [];
    let timer;

    function button(text, handler, className = '') {
      const element = document.createElement('button');
      element.type = 'button';
      element.className = className;
      element.textContent = text;
      element.addEventListener('click', handler);
      return element;
    }

    function moveToQuery(nextMode, name) {
      setMode(nextMode);
      query.value = name.cn;
      ability.value = '';
      render();
      section.scrollIntoView({behavior: scrollBehavior(), block: 'start'});
      query.focus({preventScroll: true});
    }

    function scrollBehavior() {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    }

    function setMode(nextMode) {
      if ((mode === 'ability') !== (nextMode === 'ability')) {
        query.value = '';
        ability.value = '';
      }
      mode = nextMode;
      limit = 12;
      mount.querySelectorAll('[data-mode]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.mode === mode)));
      mount.querySelector('[data-query-label]').textContent = mode === 'ability' ? '想获得的能力' : mode === 'usage' ? '已有的指令' : '想合成的指令';
      query.placeholder = mode === 'ability' ? '例如：绿叶庇护 / Leaf Bracer' : '例如：火焰冲刺 / Fire Dash';
      mount.querySelector('.synthesis-search-submit').textContent = mode === 'usage' ? '查询用途' : '查询配方';
      mount.querySelector('[data-ability-field]').hidden = mode === 'ability';
      mount.querySelector('.synthesis-search-fields').classList.toggle('synthesis-search-fields--ability', mode === 'ability');
      suggestions.replaceChildren();
      const entries = mode === 'ability' ? data.abilities : data.commands;
      entries.forEach(entry => {
        const aliases = new Map(entry.aliases.map(name => [name.cn, name]));
        aliases.forEach(name => {
          const option = document.createElement('option');
          option.value = name.cn;
          option.label = [name.ja, name.en].filter(Boolean).join(' / ');
          suggestions.append(option);
        });
      });
    }

    function locate(recipe, event) {
      event.preventDefault();
      const article = section.closest('#article-container');
      article.querySelectorAll('.synthesis-source-highlight').forEach(cell => cell.classList.remove('synthesis-source-highlight'));
      new Set(recipe.cells).forEach(cell => cell.classList.add('synthesis-source-highlight'));
      recipe.source.closest('.synthesis-table-wrap').scrollLeft = 0;
      recipe.source.scrollIntoView({behavior: scrollBehavior(), block: 'center'});
      recipe.source.tabIndex = -1;
      recipe.source.focus({preventScroll: true});
    }

    function appendName(parent, name, onClick) {
      parent.append(button(name.cn, onClick, 'synthesis-result-name'));
    }

    function renderCard(item) {
      const {recipe, mappings, matchedIngredients} = item;
      const card = document.createElement('article');
      card.className = 'synthesis-result-card';
      const header = document.createElement('div');
      header.className = 'synthesis-result-header';
      const output = document.createElement('div');
      if (mode === 'usage') output.append(document.createTextNode('产物：'));
      appendName(output, recipe.output, () => moveToQuery('command', recipe.output));
      header.append(output);
      const badge = document.createElement('span');
      badge.className = 'synthesis-result-badge';
      badge.textContent = `${recipe.category} · ${/^[A-P]$/.test(recipe.letter) ? `${recipe.letter} 行` : recipe.letter || '无合成行'}`;
      header.append(badge);
      const aliases = document.createElement('p');
      aliases.className = 'synthesis-result-aliases';
      aliases.textContent = [recipe.output.ja, recipe.output.en].filter(Boolean).join(' / ');
      const ingredients = document.createElement('div');
      ingredients.className = 'synthesis-result-ingredients';
      recipe.ingredients.forEach((ingredient, index) => {
        if (index) {
          const plus = document.createElement('span');
          plus.className = 'synthesis-result-plus';
          plus.textContent = '＋';
          ingredients.append(plus);
        }
        const part = document.createElement('div');
        appendName(part, ingredient.name, () => moveToQuery('command', ingredient.name));
        const level = document.createElement('span');
        level.className = 'synthesis-result-level';
        level.textContent = ingredient.level === '不限' ? '等级不限' : `Lv.${ingredient.level}`;
        part.append(level);
        if (matchedIngredients.includes(index)) {
          part.className = 'synthesis-result-ingredient--matched';
          const label = document.createElement('span');
          label.className = 'synthesis-result-match-label';
          label.textContent = '查询素材';
          part.append(label);
        }
        ingredients.append(part);
      });
      const metadata = document.createElement('dl');
      metadata.className = 'synthesis-result-meta';
      const detail = (label, value) => {
        const term = document.createElement('dt');
        term.textContent = label;
        const description = document.createElement('dd');
        description.textContent = value;
        metadata.append(term, description);
      };
      detail('适用角色', recipe.roles.join(' / '));
      detail('指令成功率', recipe.rate || '未确认');
      if (recipe.note) detail('备注', recipe.note);
      card.append(header, aliases, ingredients, metadata);
      if (mode === 'usage' && recipe.ingredients[0].key === recipe.ingredients[1].key) {
        const notice = document.createElement('p');
        notice.className = 'synthesis-result-notice';
        notice.textContent = '两项素材为同一指令，需要准备两份。';
        card.append(notice);
      }
      if (mappings.length) {
        const attachment = document.createElement('div');
        attachment.className = 'synthesis-result-attachment';
        attachment.append(document.createTextNode('加入结晶可附带：'));
        mappings.forEach(mapping => {
          const line = document.createElement('div');
          const material = document.createElement('strong');
          material.textContent = mapping.crystal.cn;
          line.append(material, document.createTextNode(' → '));
          appendName(line, mapping.name, () => moveToQuery('ability', mapping.name));
          attachment.append(line);
        });
        card.append(attachment);
      } else if (!recipe.abilities.length) {
        const notice = document.createElement('p');
        notice.className = 'synthesis-result-notice';
        notice.textContent = '本配方没有指定能力的合成行。';
        card.append(notice);
      } else {
        const details = document.createElement('details');
        details.className = 'synthesis-result-abilities';
        const summary = document.createElement('summary');
        summary.textContent = '查看可附带的能力与结晶';
        details.append(summary);
        recipe.abilities.forEach(mapping => {
          const line = document.createElement('div');
          line.append(document.createTextNode(`${mapping.crystal.cn} → `));
          appendName(line, mapping.name, () => moveToQuery('ability', mapping.name));
          details.append(line);
        });
        card.append(details);
      }
      const link = document.createElement('a');
      link.className = 'synthesis-result-source';
      link.href = `#${recipe.source.id}`;
      link.textContent = '定位原表 ↗';
      link.addEventListener('click', event => locate(recipe, event));
      const actions = document.createElement('div');
      actions.className = 'synthesis-result-actions';
      actions.append(button('查看产物用途', () => moveToQuery('usage', recipe.output), 'synthesis-result-usage'), link);
      card.append(actions);
      return card;
    }

    function showResults() {
      results.replaceChildren(...filtered.slice(0, limit).map(renderCard));
      more.hidden = filtered.length <= limit;
      more.textContent = `显示更多配方（已显示 ${Math.min(limit, filtered.length)} / ${filtered.length}）`;
    }

    function render() {
      clearTimeout(timer);
      limit = 12;
      const search = normalize(query.value.trim());
      if (!search && !(mode === 'command' && ability.value)) {
        filtered = [];
        results.replaceChildren();
        more.hidden = true;
        status.textContent = mode === 'ability' ? '输入想获得的能力，查看配方与所需结晶。' : mode === 'usage' ? '输入已有的指令，查看它可以参与哪些合成。' : '输入想合成的指令，或先选择希望附带的能力。';
        return;
      }
      const entries = mode === 'ability' ? data.abilities : data.commands;
      const matching = new Set(Array.from(entries.values()).filter(entry => entry.aliases.some(name => matches(name, search))).map(entry => entry.key));
      const candidates = data.recipes.filter(recipe => mode === 'command'
        ? matching.has(recipe.key)
        : mode === 'usage'
          ? recipe.ingredients.some(ingredient => matching.has(ingredient.key))
          : recipe.abilities.some(mapping => matching.has(mapping.key)));
      filtered = candidates.filter(recipe => !role.value || recipe.roles.includes(role.value)).flatMap(recipe => {
        const mappings = recipe.abilities.filter(mapping => mode === 'ability'
          ? matching.has(mapping.key)
          : ability.value && mapping.key === ability.value);
        if ((mode === 'ability' || ability.value) && !mappings.length) return [];
        const matchedIngredients = mode === 'usage'
          ? recipe.ingredients.flatMap((ingredient, index) => matching.has(ingredient.key) ? [index] : [])
          : [];
        return [{recipe, mappings, matchedIngredients}];
      });
      const target = query.value.trim() || ability.selectedOptions[0].textContent;
      if (filtered.length) {
        const commands = new Set(filtered.map(item => item.recipe.key)).size;
        status.textContent = mode === 'usage'
          ? `“${target}”：找到 ${filtered.length} 条用途配方，可合成 ${commands} 种指令${role.value ? ` · ${role.value}` : ''}。`
          : `“${target}”：找到 ${filtered.length} 条配方，涉及 ${commands} 种指令${role.value ? ` · ${role.value}` : ''}。`;
      } else if (!matching.size) {
        status.textContent = `未找到“${target}”。请尝试名称的一部分，或使用日文、英文名称。`;
      } else if (!candidates.length) {
        status.textContent = mode === 'usage'
          ? '本表未收录该指令作为素材的合成用途。'
          : '本表未列出该指令的合成配方；部分指令仅作为素材收录。';
      } else {
        status.textContent = mode === 'ability'
          ? '没有适用于所选角色的配方，请切换角色后重试。'
          : '没有符合所选角色或附带能力的配方。可以切换角色或放宽附带能力筛选。';
      }
      showResults();
    }

    mount.querySelectorAll('[data-mode]').forEach(item => item.addEventListener('click', () => {setMode(item.dataset.mode); render();}));
    form.addEventListener('submit', event => {event.preventDefault(); render();});
    query.addEventListener('input', () => {clearTimeout(timer); timer = setTimeout(render, 150);});
    [role, ability].forEach(select => select.addEventListener('change', render));
    mount.querySelector('[data-reset]').addEventListener('click', () => {form.reset(); render(); query.focus();});
    more.addEventListener('click', () => {limit += 12; showResults();});
    function enhanceName(cell, name, nextMode) {
      const chinese = cell.querySelector('.synthesis-name-cn');
      const link = button(name.cn, () => moveToQuery(nextMode, name), 'synthesis-name-link');
      link.setAttribute('aria-label', `查询${name.cn}的合成配方`);
      chinese.replaceChildren(link);
    }
    data.commandCells.forEach((name, cell) => enhanceName(cell, name, 'command'));
    data.abilityCells.forEach((name, cell) => enhanceName(cell, name, 'ability'));
    setMode('command');
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, {once: true});
  else initialize();
  document.addEventListener('pjax:complete', initialize);
})();
