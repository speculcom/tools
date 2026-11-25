(function () {
  'use strict';
  const data = window.SPECUL_DECISION_DATA;
  const form = document.getElementById('finder-form');
  const results = document.getElementById('finder-results');
  const title = document.getElementById('finder-title');
  const excludedBox = document.getElementById('finder-excluded');
  const compareBox = document.getElementById('finder-compare');
  const compareHead = document.getElementById('finder-compare-head');
  const compareBody = document.getElementById('finder-compare-body');
  const share = document.getElementById('finder-share');
  const shareStatus = document.getElementById('finder-share-status');
  if (!data || !form || !results) return;

  const TASK_LABEL = {
    research: '找资料/做研究', coding: '写代码/改代码', meeting: '会议记录',
    writing: '写文档/改稿', tables: '表格/数据', image: '图像', video: '视频',
    local: '本地跑模型', transcription: '语音转写', automation: '搭工作流',
    chat: '通用问答', privacy: '隐私/离线', search: '搜索', evidence: '证据/引用',
    docs: '文档', slides: '演示', summary: '摘要', audio: '音频', voice: '语音',
    music: '音乐', design: '设计', presentation: '演示', workflow: '工作流',
    agent: '智能体', build: '构建', integration: '集成', tools: '工具调用',
    deploy: '部署', safety: '安全', compliance: '合规', read: '读文献',
    notes: '笔记', crm: 'CRM', terminal: '终端', refactor: '重构', review: '评审',
    test: '测试', github: 'GitHub', cloud: '云端续跑',
  };

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const selectedIds = new Set();
  let latestMatches = [];

  function checkedValues(name) {
    return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map((x) => x.value);
  }

  function oneValue(name) {
    const x = form.querySelector(`input[name="${name}"]:checked`);
    return x ? x.value : '';
  }

  function money(p) {
    if (!p) return '价格未核验';
    if (p.label) return p.label;
    if (p.entry === 0) return '免费（自备算力）';
    if (typeof p.entry === 'number') return (p.currency === 'CNY' ? '¥' : '$') + p.entry;
    return '价格未核验';
  }

  function ageDays(checked) {
    if (!checked) return null;
    const t = Date.parse(checked + 'T00:00:00Z');
    if (!Number.isFinite(t)) return null;
    return Math.floor((Date.now() - t) / 86400000);
  }

  function freshness(checked) {
    if (!checked) return { label: '未标核验日', stale: true };
    const days = ageDays(checked);
    if (days == null) return { label: '核验日格式异常', stale: true };
    if (days > 90) return { label: `核验 ${checked} · 待复核`, stale: true };
    return { label: `核验 ${checked}`, stale: false };
  }

  function budgetPass(item, budget) {
    if (budget === 'any') return true;
    const p = item.pricing || {};
    if (budget === 'free') return p.free === true;
    if (typeof p.entry !== 'number') return true; // unknown price stays, marked as a flag
    if (budget === 'under50') return p.entry <= 50;
    if (budget === 'under150') return p.entry <= 150;
    return true;
  }

  function budgetLabel(budget) {
    return { free: '只接受免费', under50: '≤ $50 / 月', under150: '≤ $150 / 月', any: '不限价' }[budget] || budget;
  }

  function taskHit(item, tasks) {
    return (item.tasks || []).filter((t) => tasks.includes(t));
  }

  function reasonsFor(item, tasks, opts) {
    const reasons = [];
    const flags = [];
    const hit = taskHit(item, tasks);
    if (hit.length) reasons.push('任务命中：' + hit.map((t) => TASK_LABEL[t] || t).join('、'));

    if (opts.cite && (item.outputs || []).includes('citations')) {
      reasons.push('产物含引用/来源');
    }
    if (opts.cn) {
      if (item.cn.direct === 'yes') reasons.push('国内直连已核验');
      else if (item.cn.direct === 'unknown') flags.push('国内直连未核验');
    }
    if (opts.local) {
      if (item.hardware === 'local') reasons.push('可在本地运行');
    }
    if (opts.sensitive === 'confidential') {
      if (item.hardware === 'local') reasons.push('数据可不出机器');
      else flags.push('云端处理，机密数据需额外评估');
    }
    if (item.pricing && typeof item.pricing.entry === 'number') {
      reasons.push('起步价：' + money(item.pricing));
      if (item.pricing.checked) {
        const fresh = freshness(item.pricing.checked);
        if (fresh.stale) flags.push('价格' + fresh.label);
      }
    } else {
      flags.push('价格未核验');
    }
    if (item.cn && item.cn.direct === 'no') flags.push('需网络环境');
    if (item.limits && /未核验|unknown/.test(item.limits.data_training || '')) flags.push('数据训练口径未核验');
    if (item.license && /unknown|other|专有/.test(item.license)) flags.push('许可需读原文');
    return { reasons, flags, hit };
  }

  function hardFailReason(item, tasks, opts) {
    const hit = taskHit(item, tasks);
    if (!hit.length) return '任务不匹配';
    if (!budgetPass(item, opts.budget)) return '超出预算上限（' + budgetLabel(opts.budget) + '）';
    if (opts.cn && item.cn.direct === 'no') return '国内直连不可用';
    if (opts.local && item.hardware !== 'local') return '不是本地运行形态';
    if (opts.cite && !(item.outputs || []).includes('citations')) return '不提供引用/来源';
    if (opts.sensitive === 'confidential' && item.hardware !== 'local') return '云端处理，不适合机密数据';
    return '';
  }

  function currentOpts() {
    return {
      budget: oneValue('budget') || 'free',
      cn: form.querySelector('input[name="cn"]').checked,
      local: form.querySelector('input[name="local"]').checked,
      cite: form.querySelector('input[name="cite"]').checked,
      sensitive: oneValue('sensitive') || 'public',
    };
  }

  function applyUrl() {
    const params = new URLSearchParams(location.search);
    const tasks = params.getAll('task');
    form.querySelectorAll('input[name="task"]').forEach((x) => { x.checked = tasks.includes(x.value); });
    const budget = params.get('budget');
    if (['free', 'under50', 'under150', 'any'].includes(budget)) {
      const radio = form.querySelector(`input[name="budget"][value="${budget}"]`);
      if (radio) radio.checked = true;
    }
    for (const key of ['cn', 'local', 'cite']) {
      const box = form.querySelector(`input[name="${key}"]`);
      if (box) box.checked = params.get(key) === '1';
    }
    const sensitive = params.get('sensitive');
    if (['public', 'internal', 'confidential'].includes(sensitive)) {
      const radio = form.querySelector(`input[name="sensitive"][value="${sensitive}"]`);
      if (radio) radio.checked = true;
    }
    const cmp = (params.get('cmp') || '').split(',').filter(Boolean);
    selectedIds.clear();
    cmp.slice(0, 2).forEach((id) => selectedIds.add(id));
  }

  function syncUrl(tasks) {
    try {
      const u = new URL(location.href);
      u.search = '';
      tasks.forEach((t) => u.searchParams.append('task', t));
      const opts = currentOpts();
      if (opts.budget && opts.budget !== 'free') u.searchParams.set('budget', opts.budget);
      for (const key of ['cn', 'local', 'cite']) if (opts[key]) u.searchParams.set(key, '1');
      if (opts.sensitive !== 'public') u.searchParams.set('sensitive', opts.sensitive);
      if (selectedIds.size) u.searchParams.set('cmp', Array.from(selectedIds).join(','));
      history.replaceState(null, '', u);
    } catch (_) { /* URL may be unavailable in a sandbox; filtering still works. */ }
  }

  function renderCompare() {
    if (!compareBox || !compareHead || !compareBody) return;
    const picked = latestMatches.map((x) => x.item).filter((x) => selectedIds.has(x.id));
    if (picked.length < 2) {
      compareBox.hidden = true;
      compareHead.innerHTML = '';
      compareBody.innerHTML = '';
      return;
    }
    compareBox.hidden = false;
    compareHead.innerHTML = '<tr><th>字段</th>' + picked.map((x) => `<th>${esc(x.name)}</th>`).join('') + '</tr>';
    const row = (label, fn) => '<tr><th scope="row">' + label + '</th>' + picked.map((x) => `<td>${fn(x)}</td>`).join('') + '</tr>';
    compareBody.innerHTML = [
      row('类型', (x) => x.type === 'model' ? '模型' : '工具'),
      row('厂商', (x) => esc(x.vendor)),
      row('起步价', (x) => esc(money(x.pricing)) + (x.pricing?.checked ? `<br><span class="t-xs">${esc(freshness(x.pricing.checked).label)}</span>` : '')),
      row('许可', (x) => esc(x.license || '未核验')),
      row('国内直连', (x) => x.cn?.direct === 'yes' ? '是' : x.cn?.direct === 'no' ? '否' : '未核验'),
      row('本地运行', (x) => x.hardware === 'local' ? '是' : '否/未核验'),
      row('数据训练口径', (x) => esc(x.limits?.data_training || '未核验')),
      row('档案核验', (x) => { const f = freshness(x.last_verified || x.pricing?.checked); return esc(f.label); }),
      row('档案', (x) => `<a href="${esc(x.url)}">打开 →</a>`),
    ].join('');
  }

  function render() {
    const tasks = checkedValues('task');
    if (!tasks.length) {
      title.textContent = '先选任务';
      results.innerHTML = '<p class="finder-empty">先在上面的“要它干什么”里至少选一项。</p>';
      if (excludedBox) { excludedBox.hidden = true; excludedBox.innerHTML = ''; }
      latestMatches = [];
      if (compareBox) compareBox.hidden = true;
      syncUrl(tasks);
      return;
    }
    const opts = currentOpts();
    const pool = data.tools.concat(data.models || []);
    const candidates = pool.filter((item) => taskHit(item, tasks).length > 0);
    const scored = candidates
      .filter((item) => !hardFailReason(item, tasks, opts))
      .map((item) => ({ item, ...reasonsFor(item, tasks, opts) }))
      .sort((a, b) => b.hit.length - a.hit.length || a.item.name.localeCompare(b.item.name, 'zh'));

    latestMatches = scored;
    title.textContent = '按你的硬条件，先看这 ' + Math.min(3, scored.length) + ' 个';
    if (!scored.length) {
      const relax = [];
      if (opts.budget === 'free') relax.push('把“只接受免费”放宽到 ≤ $50/月');
      if (opts.local) relax.push('去掉“必须本地运行”');
      if (opts.cn) relax.push('去掉“必须国内直连”');
      if (opts.cite) relax.push('去掉“必须给引用/来源”');
      if (opts.sensitive === 'confidential') relax.push('把数据敏感度改成“内部资料”');
      results.innerHTML = '<p class="finder-empty">没有候选同时满足这些硬条件。可以先试：' +
        (relax.length ? relax.map((x) => '<br>· ' + esc(x)).join('') : '<br>· 换一个任务标签') +
        '</p><p class="finder-empty"><a href="/mcp/guides/compare-research-tools.html">去逐项对照里手动找 →</a></p>';
      if (excludedBox) { excludedBox.hidden = true; excludedBox.innerHTML = ''; }
      if (compareBox) compareBox.hidden = true;
      syncUrl(tasks);
      return;
    }

    results.innerHTML = scored.slice(0, 3).map((x, i) => {
      const item = x.item;
      const strong = x.flags.length === 0;
      const cls = strong ? 'is-strong' : 'is-warn';
      const flagHtml = x.flags.length
        ? x.flags.map((f) => '<span class="flag flag-warn">' + esc(f) + '</span>').join('')
        : '<span class="flag flag-ok">主要条件已对上</span>';
      const taskText = x.hit.map((t) => TASK_LABEL[t] || t).join('、');
      const fresh = freshness(item.last_verified || item.pricing?.checked);
      const checked = selectedIds.has(item.id) ? ' checked' : '';
      return '<article class="finder-result ' + cls + '" data-id="' + esc(item.id) + '">' +
        '<div class="finder-rank"><span>候选 ' + (i + 1) + '</span><span>' + (item.type === 'model' ? '模型' : '工具') + '</span></div>' +
        '<h3><a href="' + esc(item.url) + '">' + esc(item.name) + '</a></h3>' +
        '<p class="finder-vendor">' + esc(item.vendor) + ' · ' + esc(item.category || '') + '</p>' +
        '<ul class="finder-why">' +
          x.reasons.map((r) => '<li>' + esc(r) + '</li>').join('') +
          '<li>匹配任务：' + esc(taskText) + '</li>' +
          '<li>许可：' + esc(item.license || '未核验') + '</li>' +
        '</ul>' +
        '<p class="finder-fresh ' + (fresh.stale ? 'is-stale' : '') + '">' + esc(fresh.label) + '</p>' +
        '<div class="finder-flags">' + flagHtml + '</div>' +
        '<div class="finder-links"><a href="' + esc(item.url) + '">看档案 →</a><a href="/costs/">算成本</a><a href="/guides/">找任务手册</a></div>' +
        '<label class="finder-compare-check"><input type="checkbox" data-compare="' + esc(item.id) + '"' + checked + '> 加入对比</label>' +
      '</article>';
    }).join('');

    const notPicked = candidates
      .filter((item) => !scored.some((x) => x.item.id === item.id))
      .map((item) => ({ item, why: hardFailReason(item, tasks, opts) }))
      .filter((x) => x.why)
      .slice(0, 3);
    if (excludedBox) {
      excludedBox.hidden = notPicked.length === 0;
      excludedBox.innerHTML = notPicked.length
        ? '<h3>为什么没选它</h3><p class="t-sm">下面这些也命中了任务，但被你的一条硬条件排除了。不是“它不好”，是“现在不适合”。</p><ul class="finder-excluded-list">' +
          notPicked.map((x) => '<li><a href="' + esc(x.item.url) + '">' + esc(x.item.name) + '</a><span>' + esc(x.why) + '</span></li>').join('') +
          '</ul>'
        : '';
    }
    renderCompare();
    syncUrl(tasks);
  }

  form.addEventListener('submit', function (e) { e.preventDefault(); render(); });
  form.addEventListener('change', render);
  if (results) {
    results.addEventListener('change', function (e) {
      const box = e.target.closest('input[data-compare]');
      if (!box) return;
      if (box.checked) {
        if (selectedIds.size >= 2) { box.checked = false; render(); return; }
        selectedIds.add(box.dataset.compare);
      } else {
        selectedIds.delete(box.dataset.compare);
      }
      renderCompare();
      syncUrl(checkedValues('task'));
    });
  }
  if (share) {
    share.addEventListener('click', function () {
      const url = location.href;
      const done = function () {
        if (shareStatus) shareStatus.textContent = '链接已复制；换台设备打开也是同一组条件。';
        if (share) share.textContent = '已复制';
        setTimeout(function () { if (share) share.textContent = '复制结果链接'; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(function () { if (shareStatus) shareStatus.textContent = '复制失败，可直接复制地址栏链接。'; });
      } else {
        const tmp = document.createElement('textarea');
        tmp.value = url; document.body.appendChild(tmp); tmp.select();
        try { document.execCommand('copy'); done(); } catch (_) { if (shareStatus) shareStatus.textContent = '复制失败，可直接复制地址栏链接。'; }
        document.body.removeChild(tmp);
      }
    });
  }

  applyUrl();
  const initialTasks = checkedValues('task');
  if (initialTasks.length) render();
  else syncUrl([]);
})();
