/* Local arithmetic only. No requests, analytics or persistence. */
(() => {
  const form = document.querySelector('#cost-workbench-form');
  if (!form) return;
  const state = new Map();
  const english = () => document.documentElement.lang.startsWith('en');
  const format = n => new Intl.NumberFormat(english() ? 'en' : 'zh', {maximumFractionDigits: 6}).format(n);
  const shareStatus = document.getElementById('cost-share-status');

  function evaluate(group) {
    const values = {};
    for (const input of group.querySelectorAll('input')) {
      if (input.value.trim() === '') return {error: 'missing'};
      const n = Number(input.value);
      if (!Number.isFinite(n) || n < 0 || !input.validity.valid) return {error: 'invalid'};
      values[input.name] = n;
    }
    const v = values;
    const id = group.dataset.costGroup;
    let total, formula, oneTime = 0, monthly = 0;
    if (id === 'api') {
      if (![v.tasks,v.calls,v.retries,v.tools].every(Number.isInteger)) return {error:'invalid'};
      const count = v.tasks * (v.calls + v.retries);
      const model = count * (v.input*v.inputRate + v.cached*v.cachedRate + v.output*v.outputRate)/1e6;
      const tool = v.tasks*v.tools*v.toolRate;
      total = model + tool;
      monthly = total;
      formula = `${v.tasks} × (${v.calls} + ${v.retries}) × (${v.input} × ${v.inputRate} + ${v.cached} × ${v.cachedRate} + ${v.output} × ${v.outputRate}) / 1000000 + ${v.tasks} × ${v.tools} × ${v.toolRate}`;
    } else if (id === 'team') {
      if (!Number.isInteger(v.seats)) return {error:'invalid'};
      total = v.seats*v.seatRate + v.hours*v.hourRate + v.fixed;
      monthly = total;
      formula = `${v.seats} × ${v.seatRate} + ${v.hours} × ${v.hourRate} + ${v.fixed}`;
    } else if (id === 'local') {
      if (v.months <= 0 || v.dailyHours > 24 || v.days > 31) return {error:'invalid'};
      oneTime = v.hardware/v.months;
      monthly = v.power*v.dailyHours*v.days*v.electricRate + v.maintenance;
      total = oneTime + monthly;
      formula = `${v.hardware} / ${v.months} + ${v.power} × ${v.dailyHours} × ${v.days} × ${v.electricRate} + ${v.maintenance}`;
    } else {
      if (v.attempts < 1 || ![v.shots,v.attempts].every(Number.isInteger)) return {error:'invalid'};
      total = v.shots*v.seconds*v.attempts*v.secondRate + v.editing;
      monthly = total;
      formula = `${v.shots} × ${v.seconds} × ${v.attempts} × ${v.secondRate} + ${v.editing}`;
    }
    return Number.isFinite(total) ? {values,total,formula,oneTime,monthly} : {error:'invalid'};
  }

  function setSplit(result) {
    const one = document.getElementById('cost-one-time-local');
    const month = document.getElementById('cost-monthly-local');
    if (!one || !month) return;
    if (result.error || result.oneTime == null) {
      one.textContent = '—';
      month.textContent = '—';
      return;
    }
    one.textContent = format(result.oneTime);
    month.textContent = format(result.monthly);
  }

  function render() {
    for (const group of form.querySelectorAll('[data-cost-group]')) {
      const id = group.dataset.costGroup;
      const result = evaluate(group);
      state.set(id,result);
      const output = document.querySelector(`#cost-result-${id}`);
      output.textContent = result.error === 'missing'
        ? (english() ? 'Fill every field in this group; enter 0 for costs that do not apply.' : '请填完本组数值；没有的费用请明确填 0。')
        : result.error ? (english() ? 'Check nonnegative values, whole-number counts, months > 0, hours ≤ 24 and days ≤ 31.' : '请检查非负数、整数次数、分摊月数大于 0、每日不超过 24 小时及每月不超过 31 天。')
        : `${english() ? 'Estimate (your currency, before tax)' : '估算金额（你填写的币种，未含税）'}: ${format(result.total)} = ${result.formula}`;
      if (id === 'local') setSplit(result);
    }
  }

  function dataSnapshot() {
    const groups = {};
    for (const group of form.querySelectorAll('[data-cost-group]')) {
      groups[group.dataset.costGroup] = {};
      for (const input of group.querySelectorAll('input')) if (input.value.trim() !== '') groups[group.dataset.costGroup][input.name] = input.value;
    }
    const breakeven = {};
    for (const id of ['be-hardware','be-local','be-api']) {
      const el = document.getElementById(id);
      if (el && el.value.trim() !== '') breakeven[id.slice(3)] = el.value;
    }
    return {groups, breakeven};
  }

  function applySnapshot(snapshot) {
    if (!snapshot || typeof snapshot !== 'object') return;
    for (const [group, values] of Object.entries(snapshot.groups || {})) {
      if (!values || typeof values !== 'object') continue;
      for (const [name, value] of Object.entries(values)) {
        const input = form.querySelector(`[data-cost-group="${group}"] input[name="${name}"]`);
        if (input && /^\d*(\.\d+)?$/.test(String(value))) input.value = String(value);
      }
    }
    for (const [name, value] of Object.entries(snapshot.breakeven || {})) {
      const el = document.getElementById(`be-${name}`);
      if (el && /^\d*(\.\d+)?$/.test(String(value))) el.value = String(value);
    }
  }

  function syncShareUrl(clear = false) {
    try {
      const u = new URL(location.href);
      if (clear) u.searchParams.delete('cost');
      else {
        const snapshot = dataSnapshot();
        u.searchParams.set('cost', JSON.stringify(snapshot));
      }
      history.replaceState(null, '', u);
    } catch (_) { /* A sandboxed frame may block URL updates; the calculator still works. */ }
  }

  const params = new URLSearchParams(location.search);
  if (params.get('cost')) {
    try { applySnapshot(JSON.parse(params.get('cost'))); } catch (_) { /* ignore malformed shared assumptions */ }
  }

  form.addEventListener('input', () => { render(); syncShareUrl(); });
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('reset', () => setTimeout(() => {
    const preset = document.querySelector('#cost-preset');
    if (preset) preset.value = '';
    render();
    renderBreakEven();
    syncShareUrl(true);
  },0));

  const preset = document.querySelector('#cost-preset');
  if (preset) {
    preset.addEventListener('change', () => {
      const values = preset.value === 'claude-intro'
        ? {inputRate:2, outputRate:10, cachedRate:0.20}
        : preset.value === 'claude-standard'
          ? {inputRate:3, outputRate:15, cachedRate:0.30}
          : null;
      if (!values) return;
      for (const [name, n] of Object.entries(values)) {
        const input = form.querySelector(`input[name="${name}"]`);
        if (input) input.value = String(n);
      }
      render();
      syncShareUrl();
    });
  }

  function renderBreakEven() {
    const output = document.querySelector('#be-result');
    if (!output) return;
    const ids = ['be-hardware','be-local','be-api'];
    const els = ids.map(id => document.getElementById(id));
    const vals = els.map(el => el ? Number(el.value) : NaN);
    if (els.some(el => !el || el.value.trim() === '') || vals.some(v => !Number.isFinite(v) || v < 0)) {
      output.textContent = english() ? 'Fill all three nonnegative values.' : '请填三项非负数。';
      return;
    }
    const [hardware, local, api] = vals;
    const gap = api - local;
    if (gap <= 0) {
      output.textContent = english()
        ? `No payback on savings: API ${format(api)} ≤ local ${format(local)} per month. Local value must come from privacy, offline access or control.`
        : `不会靠省钱回本：每月 API ${format(api)} ≤ 本地 ${format(local)}。本地的价值只能来自隐私、离线或可控性。`;
      return;
    }
    const months = hardware / gap;
    output.textContent = english()
      ? `Payback ≈ ${format(months)} months (${format(months/12)} years). Formula: ${format(hardware)} / (${format(api)} − ${format(local)}).`
      : `回本约 ${format(months)} 个月（${format(months/12)} 年）。算式：${format(hardware)} ÷（${format(api)} − ${format(local)}）。`;
  }

  for (const id of ['be-hardware','be-local','be-api']) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => { renderBreakEven(); syncShareUrl(); });
  }

  document.addEventListener('specul:preferences',() => { render(); renderBreakEven(); });

  const share = document.querySelector('#cost-share');
  if (share) share.addEventListener('click', () => {
    syncShareUrl();
    const url = location.href;
    const done = () => {
      if (shareStatus) shareStatus.textContent = '链接已复制；打开后是同一套假设。';
      share.textContent = '已复制';
      setTimeout(() => { share.textContent = '复制假设链接'; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done).catch(() => { if (shareStatus) shareStatus.textContent = '复制失败，可直接复制地址栏链接。'; });
    } else {
      const tmp = document.createElement('textarea');
      tmp.value = url; document.body.appendChild(tmp); tmp.select();
      try { document.execCommand('copy'); done(); } catch (_) { if (shareStatus) shareStatus.textContent = '复制失败，可直接复制地址栏链接。'; }
      document.body.removeChild(tmp);
    }
  });

  document.querySelector('#cost-export').addEventListener('click', () => {
    render();
    renderBreakEven();
    const snapshot = {source:location.href,created:new Date().toISOString(),currency:'user-supplied; one currency throughout',tax:'excluded',preset:preset?.value || '',assumptions:dataSnapshot(),groups:Object.fromEntries(state),breakeven:document.querySelector('#be-result')?.textContent || ''};
    const url = URL.createObjectURL(new Blob([JSON.stringify(snapshot,null,2)],{type:'application/json'}));
    const link = document.createElement('a');link.href=url;link.download='specul-cost-assumptions.json';link.click();setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  render();
  renderBreakEven();
})();
