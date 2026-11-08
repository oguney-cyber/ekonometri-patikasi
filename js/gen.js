/* Soru üreticileri. Her üretici {en, tr, opts:[doğru, ...yanlışlar], ex} döndürür. */
(function (root) {
  'use strict';
  const S = root.Stats;
  const Phi = S.normCdf;
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const RF = (a, b, step) => { const n = Math.round((b - a) / step); return +(a + step * R(0, n)).toFixed(6); };
  const f = (x, d) => { let s = (+x).toFixed(d); if (/^-0\.?0*$/.test(s)) s = s.slice(1); return s; };
  const sgn = (x) => (x < 0 ? '- ' + f(-x, 2) : '+ ' + f(x, 2));

  // Sayısal şıklar: doğru + yanlışlar; eksik kalırsa doğru değerin yakınından doldur.
  function nopts(correct, wrongs, d, opt) {
    opt = opt || {};
    const lo = opt.min != null ? opt.min : -Infinity, hi = opt.max != null ? opt.max : Infinity;
    const fmt = opt.fmt || ((x) => f(x, d));
    const c = fmt(correct); const out = [c];
    for (const w of wrongs) {
      if (w == null || !isFinite(w) || w < lo || w > hi) continue;
      const s = fmt(w); if (!out.includes(s)) out.push(s); if (out.length === 4) break;
    }
    const steps = [0.2, -0.2, 0.4, -0.4, 0.6, 0.12, -0.12, 0.8, -0.6, 1];
    for (let k = 0; out.length < 4 && k < 40; k++) {
      const st = steps[k % steps.length] * (1 + Math.floor(k / steps.length));
      const base = Math.abs(correct) < 1e-9 ? 1 : Math.abs(correct);
      const v = correct + st * base * (opt.spread || 0.5);
      if (v < lo || v > hi) continue;
      const s = fmt(v); if (!out.includes(s)) out.push(s);
    }
    return out;
  }
  const popts = (c, w, d) => nopts(c, w, d == null ? 4 : d, { min: 0, max: 1, spread: 0.6 });
  const iv = (a, b, d) => '(' + f(a, d) + ',\\ ' + f(b, d) + ')';
  const ivm = (a, b, d) => '$' + iv(a, b, d) + '$';
  const sq = (x) => x * x;

  const G = {};

  /* ---------- Ünite 0: matematik ---------- */
  G.sumLinear = () => {
    const n = R(5, 25), sx = R(10, 90), a = R(1, 7), b = R(2, 6);
    if (Math.random() < 0.5) {
      const c = n * a + b * sx;
      return {
        en: `Suppose $n=${n}$ and $\\sum_{i=1}^{n} X_i = ${sx}$. What is $\\sum_{i=1}^{n} (${a} + ${b}X_i)$?`,
        tr: `$n=${n}$ ve $\\sum X_i=${sx}$. $\\sum (${a}+${b}X_i)$ kaçtır?`,
        opts: nopts(c, [a + b * sx, n * (a + b * sx), (a + b) * sx, n * a * b * sx], 0),
        ex: `Toplam dağılır ve sabitin toplamı $n$ katıdır: $\\sum ${a} + ${b}\\sum X_i = ${n}\\cdot${a} + ${b}\\cdot${sx} = ${n * a} + ${b * sx} = ${c}$. Sabiti $n$ ile çarpmayı unutmak en sık hata.`
      };
    }
    const xb = R(2, 15), c = n * xb * b;
    return {
      en: `A sample of $n=${n}$ observations has mean $\\bar X = ${xb}$. What is $\\sum_{i=1}^{n} ${b}X_i$?`,
      tr: `$n=${n}$ gözlemin ortalaması $\\bar X=${xb}$. $\\sum ${b}X_i$ kaçtır?`,
      opts: nopts(c, [b * xb, n * xb, b * xb / n, n * xb + b], 0),
      ex: `$\\sum X_i = n\\bar X = ${n}\\cdot${xb} = ${n * xb}$. Sabit dışarı çıkar: $\\sum ${b}X_i = ${b}\\cdot${n * xb} = ${c}$.`
    };
  };

  G.sumSquares = () => {
    const k = R(3, 4); let xs;
    do { xs = Array.from({ length: k }, () => R(-3, 8)); } while (new Set(xs).size < 2);
    const s = xs.reduce((a, b) => a + b, 0), s2 = xs.reduce((a, b) => a + b * b, 0);
    const xb = s / k, dev = xs.reduce((a, b) => a + sq(b - xb), 0);
    const which = R(0, 2);
    const list = xs.join(',\\ ');
    if (which === 0) return { en: `Let $X = ${list}$. Compute $\\sum X_i^2$.`, tr: `$X = ${list}$. $\\sum X_i^2$ kaçtır?`, opts: nopts(s2, [s * s, s, dev], 0), ex: `Önce kare al, sonra topla: $${xs.map(x => `${x < 0 ? '(' + x + ')' : x}^2`).join('+')} = ${s2}$. $(\\sum X_i)^2 = ${s}^2 = ${s * s}$ farklıdır, karıştırma.` };
    if (which === 1) return { en: `Let $X = ${list}$. Compute $\\left(\\sum X_i\\right)^2$.`, tr: `$X = ${list}$. $(\\sum X_i)^2$ kaçtır?`, opts: nopts(s * s, [s2, s, 2 * s], 0), ex: `Önce topla, sonra kare al: $\\sum X_i = ${s}$, karesi $${s * s}$. Karelerin toplamı ise $${s2}$.` };
    return { en: `Let $X = ${list}$. Compute $\\sum (X_i-\\bar X)^2$.`, tr: `$X = ${list}$. $\\sum (X_i-\\bar X)^2$ kaçtır?`, opts: nopts(dev, [s2, 0, dev / (k - 1), s2 - xb * xb], 2), ex: `$\\bar X = ${s}/${k} = ${f(xb, 3)}$. Kısayol: $\\sum (X_i-\\bar X)^2 = \\sum X_i^2 - n\\bar X^2 = ${s2} - ${k}(${f(xb, 3)})^2 = ${f(dev, 2)}$. Sapmaların kendisinin toplamı 0'dır ama karelerinin toplamı değil.` };
  };

  G.dotProduct = () => {
    const a = [R(-3, 5), R(-3, 5), R(-3, 5)], b = [R(-3, 5), R(-3, 5), R(-3, 5)];
    const c = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const aa = a.reduce((s, x) => s + x * x, 0);
    const sumAll = a.reduce((s, x) => s + x, 0) + b.reduce((s, x) => s + x, 0);
    const v = (x) => `\\begin{pmatrix} ${x.join(' \\\\ ')} \\end{pmatrix}`;
    return {
      en: `Let $a = ${v(a)}$ and $b = ${v(b)}$. What is $a'b$?`,
      tr: `$a'b$ iç çarpımı kaçtır?`,
      opts: nopts(c, [aa, sumAll, c + 2 * a[0] * b[0], -c], 0),
      ex: `$a'b = \\sum a_ib_i = (${a[0]})(${b[0]}) + (${a[1]})(${b[1]}) + (${a[2]})(${b[2]}) = ${c}$. Sonuç tek bir sayı ($1\\times1$).`
    };
  };

  G.matDim = () => {
    const ds = [2, 3, 4, 5, 6, 7].sort(() => Math.random() - 0.5), m = ds[0], n = ds[1], p = ds[2];
    const t = R(0, 3);
    if (t === 0) return { en: `$A$ is $${m}\\times${n}$ and $B$ is $${n}\\times${p}$. The dimension of $AB$ is:`, tr: `$A$ $${m}\\times${n}$, $B$ $${n}\\times${p}$. $AB$'nin boyutu nedir?`, opts: [`$${m}\\times${p}$`, `$${n}\\times${n}$`, `$${p}\\times${m}$`, `not defined`].filter((x, i, s) => s.indexOf(x) === i), ex: `İçteki sayılar (${n} ve ${n}) eşit, çarpım tanımlı. Sonuç dıştakiler: $${m}\\times${p}$.` };
    if (t === 1) { const q = ds[3]; return { en: `$A$ is $${m}\\times${n}$ and $B$ is $${q}\\times${p}$. Then $AB$:`, tr: `$A$ $${m}\\times${n}$, $B$ $${q}\\times${p}$. $AB$ için ne söylenir?`, opts: [`is not defined`, `is $${m}\\times${p}$`, `is $${n}\\times${q}$`, `is $${m}\\times${q}$`], ex: `$A$'nın sütun sayısı (${n}) $B$'nin satır sayısına (${q}) eşit değil. Uyumlu değiller, çarpım tanımsız.` }; }
    if (t === 2) return { en: `$X$ is $${m * 10}\\times${n}$. What is the dimension of $X'X$?`, tr: `$X$ $${m * 10}\\times${n}$ ise $X'X$'in boyutu nedir?`, opts: [`$${n}\\times${n}$`, `$${m * 10}\\times${m * 10}$`, `$${n}\\times${m * 10}$`, `$${m * 10}\\times${n}$`], ex: `$X'$ $${n}\\times${m * 10}$. $(${n}\\times${m * 10})(${m * 10}\\times${n}) = ${n}\\times${n}$. Regresyonda $X'X$ her zaman (katsayı sayısı)×(katsayı sayısı) olur.` };
    return { en: `$A$ is $${m}\\times${n}$. What is the dimension of $A'A$?`, tr: `$A$ $${m}\\times${n}$ ise $A'A$'nın boyutu nedir?`, opts: [`$${n}\\times${n}$`, `$${m}\\times${m}$`, `$${m}\\times${n}$`, `not defined`].filter((x, i, s) => s.indexOf(x) === i), ex: `$A'$ $${n}\\times${m}$. $(${n}\\times${m})(${m}\\times${n}) = ${n}\\times${n}$.` };
  };

  G.matEntry = () => {
    const A = [[R(-2, 5), R(-2, 5)], [R(-2, 5), R(-2, 5)]], B = [[R(-2, 5), R(-2, 5)], [R(-2, 5), R(-2, 5)]];
    const mul = (P, Q) => [[P[0][0] * Q[0][0] + P[0][1] * Q[1][0], P[0][0] * Q[0][1] + P[0][1] * Q[1][1]], [P[1][0] * Q[0][0] + P[1][1] * Q[1][0], P[1][0] * Q[0][1] + P[1][1] * Q[1][1]]];
    const AB = mul(A, B), BA = mul(B, A);
    const i = R(0, 1), j = R(0, 1);
    const M = (X) => `\\begin{pmatrix} ${X[0][0]} & ${X[0][1]} \\\\ ${X[1][0]} & ${X[1][1]} \\end{pmatrix}`;
    const c = AB[i][j];
    return {
      en: `Let $A = ${M(A)}$ and $B = ${M(B)}$. What is the $(${i + 1},${j + 1})$ element of $AB$?`,
      tr: `$AB$ çarpımının $(${i + 1},${j + 1})$ elemanı kaçtır?`,
      opts: nopts(c, [BA[i][j], A[i][j] * B[i][j], AB[j][i], AB[1 - i][1 - j]], 0),
      ex: `$A$'nın ${i + 1}. satırı $(${A[i].join(', ')})$ ile $B$'nin ${j + 1}. sütunu $(${B[0][j]}, ${B[1][j]})$'nin iç çarpımı: $(${A[i][0]})(${B[0][j]}) + (${A[i][1]})(${B[1][j]}) = ${c}$.`
    };
  };

  G.det2 = () => {
    const a = R(-3, 7), b = R(-3, 7), c = R(-3, 7), d = R(-3, 7);
    const det = a * d - b * c;
    return {
      en: `What is the determinant of $\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$?`,
      tr: `Bu 2×2 matrisin determinantı kaçtır?`,
      opts: nopts(det, [a * d + b * c, b * c - a * d, a * b - c * d, a + d], 0),
      ex: `$|A| = a_{11}a_{22} - a_{12}a_{21} = (${a})(${d}) - (${b})(${c}) = ${a * d} - (${b * c}) = ${det}$.${det === 0 ? ' Determinant 0, yani matris tekil ve tersi yok.' : ''}`
    };
  };

  G.inv2 = () => {
    let a, b, c, d, det;
    do { a = R(1, 6); b = R(-3, 4); c = R(-3, 4); d = R(1, 6); det = a * d - b * c; } while (![1, 2, 4, 5, 8, 10, -1, -2, -4, -5].includes(det));
    const pos = pick([[0, 1], [1, 0], [0, 0], [1, 1]]);
    const adj = [[d, -b], [-c, a]];
    const val = adj[pos[0]][pos[1]] / det;
    const wrong = [[d, b], [c, a]][pos[0]][pos[1]] / det;
    return {
      en: `Let $A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$. What is the $(${pos[0] + 1},${pos[1] + 1})$ element of $A^{-1}$?`,
      tr: `$A^{-1}$'in $(${pos[0] + 1},${pos[1] + 1})$ elemanı kaçtır?`,
      opts: nopts(val, [wrong, adj[pos[0]][pos[1]] * det, [[a, b], [c, d]][pos[0]][pos[1]] / det, adj[pos[0]][pos[1]], -val], 3),
      ex: `$|A| = (${a})(${d}) - (${b})(${c}) = ${det}$. $A^{-1} = \\frac{1}{${det}}\\begin{pmatrix} ${d} & ${-b} \\\\ ${-c} & ${a} \\end{pmatrix}$. İstenen eleman $${adj[pos[0]][pos[1]]}/${det} = ${f(val, 3)}$. Köşegenler yer değiştirir, köşegen dışındakilerin işareti değişir.`
    };
  };

  G.olsSums = () => {
    let xs, ys, b1;
    do {
      xs = Array.from({ length: 5 }, () => R(1, 9)); const bb = R(-2, 3), b0 = R(0, 6);
      ys = xs.map(x => b0 + bb * x + R(-2, 2));
      const n = 5, sx = xs.reduce((a, b) => a + b), sy = ys.reduce((a, b) => a + b);
      const sxx = xs.reduce((a, b) => a + b * b, 0), sxy = xs.reduce((a, x, i) => a + x * ys[i], 0);
      const den = n * sxx - sx * sx; b1 = den === 0 ? NaN : (n * sxy - sx * sy) / den;
    } while (!isFinite(b1));
    const n = 5, sx = xs.reduce((a, b) => a + b), sy = ys.reduce((a, b) => a + b);
    const sxx = xs.reduce((a, b) => a + b * b, 0), sxy = xs.reduce((a, x, i) => a + x * ys[i], 0);
    const den = n * sxx - sx * sx;
    return {
      en: `For a simple regression with $n=5$: $\\sum X_i = ${sx}$, $\\sum Y_i = ${sy}$, $\\sum X_i^2 = ${sxx}$, $\\sum X_iY_i = ${sxy}$. Using $\\hat\\beta = (X'X)^{-1}X'Y$, what is $\\hat\\beta_1$?`,
      tr: `Verilen toplamlarla OLS eğimi $\\hat\\beta_1$ kaçtır?`,
      opts: nopts(b1, [sxy / sxx, (n * sxy - sx * sy) / (n * sxx), (sxy - sx * sy) / (sxx - sx * sx), sy / sx], 3),
      ex: `$\\hat\\beta_1 = \\dfrac{n\\sum X_iY_i - \\sum X_i\\sum Y_i}{n\\sum X_i^2 - (\\sum X_i)^2} = \\dfrac{5(${sxy}) - (${sx})(${sy})}{5(${sxx}) - ${sx}^2} = \\dfrac{${n * sxy - sx * sy}}{${den}} = ${f(b1, 3)}$.`
    };
  };

  /* ---------- Ünite 1 ---------- */
  const SCEN = [
    ['the GDP of 30 OECD countries in 2022', 'cross-sectional data', '30 OECD ülkesinin 2022 GSYH\'si'],
    ['the daily closing price of one stock from 2015 to 2024', 'time series data', 'tek bir hissenin 2015–2024 günlük kapanış fiyatı'],
    ['test scores of 420 school districts in one year', 'cross-sectional data', '420 okul bölgesinin bir yıllık test puanları'],
    ['annual unemployment rates of all 81 Turkish provinces from 2010 to 2020', 'panel data', '81 ilin 2010–2020 yıllık işsizlik oranları'],
    ['quarterly inflation in Turkey from 1990 to 2024', 'time series data', 'Türkiye\'nin 1990–2024 çeyreklik enflasyonu'],
    ['wages of the same 2,000 workers observed in 2018, 2020 and 2022', 'panel data', 'aynı 2.000 çalışanın 2018, 2020 ve 2022 ücretleri'],
    ['a 2024 survey of 5,000 households\' spending', 'cross-sectional data', '5.000 hanenin 2024 harcama anketi'],
    ['cigarette sales in each U.S. state every year from 1985 to 1995', 'panel data', 'ABD eyaletlerinin 1985–1995 yıllık sigara satışları'],
    ['the monthly exchange rate of the lira against the dollar since 2000', 'time series data', '2000\'den beri aylık dolar/TL kuru']
  ];
  G.dataType = () => {
    const s = pick(SCEN);
    const all = ['cross-sectional data', 'time series data', 'panel data'];
    const tr = { 'cross-sectional data': 'kesit veri: çok birim, tek dönem', 'time series data': 'zaman serisi: tek birim, çok dönem', 'panel data': 'panel veri: çok birim, çok dönem' };
    return { en: `A data set containing ${s[0]} is an example of:`, tr: `${s[2]} hangi veri türüdür?`, opts: [s[1], ...all.filter(x => x !== s[1])], ex: `**Doğru cevap: ${tr[s[1]]}.**
İki soruyu sırayla sor:
1. **Kaç birim var?** (kişi, firma, il, ülke)
2. **Kaç zaman dönemi var?** (yıl, ay, çeyrek)
| Birim | Dönem | Tür |
| çok | tek | kesit (cross-sectional) |
| tek | çok | zaman serisi (time series) |
| çok | çok | panel (longitudinal) |
Panel veride **aynı** birimler her dönem tekrar gözlenir. Her yıl farklı kişilere sorulan anket panel değildir.` };
  };

  /* ---------- Ünite 2 ---------- */
  function randProbs(k) {
    let w; do { w = Array.from({ length: k }, () => R(1, 8)); } while (false);
    const tot = w.reduce((a, b) => a + b, 0);
    let p = w.map(x => Math.round(x / tot * 20) / 20);
    let diff = +(1 - p.reduce((a, b) => a + b, 0)).toFixed(2);
    let i = p.indexOf(Math.max(...p)); p[i] = +(p[i] + diff).toFixed(2);
    if (p.some(x => x <= 0)) return randProbs(k);
    return p;
  }
  const tbl = (head, vals) => '\n| ' + head.join(' | ') + ' |\n| ' + vals.join(' | ') + ' |\n';

  G.cdfTable = () => {
    const p = randProbs(5), ys = [0, 1, 2, 3, 4];
    const k = R(1, 3), t = R(0, 2);
    const le = p.slice(0, k + 1).reduce((a, b) => a + b, 0), lt = le - p[k];
    const table = tbl(['$y$', ...ys], ['$P(Y=y)$', ...p.map(x => f(x, 2))]);
    if (t === 0) return { en: `$Y$ has the distribution below. What is $P(Y\\le ${k})$?` + table, tr: `$P(Y\\le ${k})$ kaçtır?`, opts: popts(le, [lt, p[k], 1 - le, 1 - lt], 2), ex: `"Küçük ya da eşit": $P(Y=0)+\\dots+P(Y=${k}) = ${f(le, 2)}$. $<$ ile $\\le$ farkına dikkat.` };
    if (t === 1) return { en: `$Y$ has the distribution below. What is $P(Y\\ge ${k})$?` + table, tr: `$P(Y\\ge ${k})$ kaçtır?`, opts: popts(1 - lt, [1 - le, lt, p[k], le], 2), ex: `$P(Y\\ge${k}) = 1 - P(Y\\le ${k - 1}) = 1 - ${f(lt, 2)} = ${f(1 - lt, 2)}$.` };
    return { en: `$Y$ has the distribution below. What is $P(Y > ${k})$?` + table, tr: `$P(Y>${k})$ kaçtır?`, opts: popts(1 - le, [1 - lt, le, p[k]], 2), ex: `$P(Y>${k}) = 1 - P(Y\\le ${k}) = 1 - ${f(le, 2)} = ${f(1 - le, 2)}$. $${k}$ dahil değil.` };
  };

  G.twoCoins = () => {
    const p = pick([0.2, 0.3, 0.35, 0.45, 0.55, 0.6, 0.7, 0.25, 0.65]), q = +(1 - p).toFixed(2);
    const P0 = q * q, P1 = 2 * p * q, P2 = p * p, E = 2 * p, V = 2 * p * q;
    const t = R(0, 3);
    const head = `Two coins are tossed independently; each lands heads with probability ${p}. Let $Y$ be the number of heads.`;
    const trh = `İki para atılıyor, tura olasılığı ${p}. $Y$ tura sayısı.`;
    if (t === 0) return { en: head + ' What is $P(Y=1)$?', tr: trh + ' $P(Y=1)$?', opts: popts(P1, [p * q, p, P2, P0], 4), ex: `$Y=1$: HT ya da TH, yani $2\\times${p}\\times${q} = ${f(P1, 4)}$.` };
    if (t === 1) return { en: head + ' What is $P(Y=0)$?', tr: trh + ' $P(Y=0)$?', opts: popts(P0, [q, P2, P1, 1 - p * p], 4), ex: `$Y=0$: TT, yani $${q}\\times${q} = ${f(P0, 4)}$.` };
    if (t === 2) return { en: head + ' What is $E(Y)$?', tr: trh + ' $E(Y)$?', opts: nopts(E, [p, V, P1, E * E], 2), ex: `$E(Y) = 0(${f(P0, 4)}) + 1(${f(P1, 4)}) + 2(${f(P2, 4)}) = ${f(E, 2)}$. Kısayol: $np = 2(${p})$.` };
    return { en: head + ' What is $\\text{var}(Y)$?', tr: trh + ' $\\text{var}(Y)$?', opts: nopts(V, [p * q, E, 2 * p * p, E * E, 4 * p * q], 4, { min: 0 }), ex: `$E(Y)=${f(E, 2)}$. $\\text{var}(Y) = \\sum (y-\\mu)^2P(y) = ${f(P0, 4)}(${f(E, 2)})^2 + ${f(P1, 4)}(1-${f(E, 2)})^2 + ${f(P2, 4)}(2-${f(E, 2)})^2 = ${f(V, 4)}$. Kısayol: $np(1-p) = 2(${p})(${q})$.` };
  };

  G.meanVar = () => {
    const ys = pick([[0, 1, 2], [1, 2, 4], [0, 2, 5], [-1, 0, 3], [10, 20, 30], [1, 3, 6]]);
    const p = randProbs(3);
    const E = ys.reduce((a, y, i) => a + y * p[i], 0), E2 = ys.reduce((a, y, i) => a + y * y * p[i], 0), V = E2 - E * E;
    const table = tbl(['$y$', ...ys], ['$P(Y=y)$', ...p.map(x => f(x, 2))]);
    const t = R(0, 2);
    if (t === 0) return { en: 'Find $E(Y)$ for the distribution below.' + table, tr: 'Bu dağılım için $E(Y)$ kaçtır?', opts: nopts(E, [ys.reduce((a, b) => a + b, 0) / 3, E2, V, ys[p.indexOf(Math.max(...p))]], 3), ex: `$E(Y) = ${ys.map((y, i) => `(${y})(${f(p[i], 2)})`).join(' + ')} = ${f(E, 3)}$. Değerlerin düz ortalaması değil, olasılık ağırlıklı ortalama.` };
    if (t === 1) return { en: 'Find $\\text{var}(Y)$ for the distribution below.' + table, tr: 'Bu dağılım için $\\text{var}(Y)$ kaçtır?', opts: nopts(V, [E2, E2 + E * E, Math.sqrt(V), E], 3, { min: 0 }), ex: `$E(Y) = ${f(E, 3)}$, $E(Y^2) = ${ys.map((y, i) => `(${y})^2(${f(p[i], 2)})`).join(' + ')} = ${f(E2, 3)}$. $\\text{var}(Y) = E(Y^2) - [E(Y)]^2 = ${f(E2, 3)} - ${f(E * E, 3)} = ${f(V, 3)}$.` };
    return { en: 'Find $E(Y^2)$ for the distribution below.' + table, tr: 'Bu dağılım için $E(Y^2)$ kaçtır?', opts: nopts(E2, [E * E, V, E], 3), ex: `$E(Y^2) = \\sum y^2P(Y=y) = ${f(E2, 3)}$. $[E(Y)]^2 = ${f(E * E, 3)}$ farklı bir şey.` };
  };

  G.bernoulli = () => {
    let p; do { p = RF(0.1, 0.9, 0.01); } while (Math.abs(p - 0.5) < 0.03);
    const v = p * (1 - p), sk = (1 - 2 * p) / Math.sqrt(v), ku = 1 / v - 3;
    const t = R(0, 4);
    const h = `$X$ is Bernoulli with $P(X=1) = ${p}$.`, th = `$X$ Bernoulli, $P(X=1)=${p}$.`;
    if (t === 0) return { en: h + ' What is $\\text{var}(X)$?', tr: th + ' $\\text{var}(X)$?', opts: popts(v, [p * p, p, 1 - p, Math.sqrt(v)], 4), ex: `$\\text{var}(X) = p(1-p) = ${p}\\times${f(1 - p, 2)} = ${f(v, 4)}$.` };
    if (t === 1) { const k = R(2, 6); return { en: h + ` What is $E(X^${k})$?`, tr: th + ` $E(X^${k})$?`, opts: popts(p, [Math.pow(p, k), v, k * p > 1 ? null : k * p], 4), ex: `$E(X^${k}) = 1^${k}\\cdot p + 0^${k}(1-p) = p = ${p}$. Üs, değere uygulanır, olasılığa değil.` }; }
    if (t === 2) return { en: h + ' The skewness of $X$ is:', tr: th + ' Çarpıklığı nedir?', opts: [p > 0.5 ? 'negative' : 'positive', p > 0.5 ? 'positive' : 'negative', 'zero', 'equal to 3'], ex: `Çarpıklık $= (1-2p)/\\sqrt{p(1-p)} = (1-2\\times${p})/\\sqrt{${p}\\times${f(1 - p, 2)}} = ${f(sk, 3)}$. $p${p > 0.5 ? '>' : '<'}0.5$ olduğu için uzun kuyruk ${p > 0.5 ? 'solda (0 tarafında), çarpıklık negatif' : 'sağda (1 tarafında), çarpıklık pozitif'}.` };
    if (t === 3) return { en: h + ' Compute the skewness of $X$.', tr: th + ' Çarpıklığı hesapla.', opts: nopts(sk, [-sk, (1 - 2 * p) / v, (1 - 2 * p), sk * sk], 3), ex: `$E(X-p)^3 = p(1-p)^3 + (1-p)(-p)^3 = ${f(p * Math.pow(1 - p, 3) - (1 - p) * Math.pow(p, 3), 4)}$, $\\sigma^3 = ${f(Math.pow(v, 1.5), 4)}$. Çarpıklık $= ${f(sk, 3)}$. Kısayol: $(1-2p)/\\sqrt{p(1-p)} = (1-2\\times${p})/\\sqrt{${p}\\times${f(1 - p, 2)}} = ${f(sk, 3)}$.` };
    return { en: h + ' Compute the kurtosis of $X$.', tr: th + ' Basıklığı hesapla.', opts: nopts(ku, [ku + 3, 1 / v, 3, v], 3), ex: `$E(X-p)^4 = p(1-p)^4 + (1-p)p^4 = ${f(p * Math.pow(1 - p, 4) + (1 - p) * Math.pow(p, 4), 4)}$, $\\sigma^4 = ${f(v * v, 4)}$. Basıklık $= ${f(ku, 3)}$. Kısayol: $\\frac{1}{p(1-p)} - 3 = 1/(${p}\\times${f(1 - p, 2)}) - 3 = ${f(ku, 3)}$.` };
  };

  const CTX = [
    { y: ['unemployed', 'employed'], x: ['non-college', 'college graduate'], yl: 'employment status', xl: 'college degree', yt: ['işsiz', 'çalışıyor'], xt: ['mezun değil', 'üniversite mezunu'] },
    { y: ['long commute', 'short commute'], x: ['rain', 'no rain'], yl: 'commute', xl: 'weather', yt: ['uzun yol', 'kısa yol'], xt: ['yağmurlu', 'yağmursuz'] },
    { y: ['does not own a car', 'owns a car'], x: ['rural', 'urban'], yl: 'car ownership', xl: 'location', yt: ['araba yok', 'araba var'], xt: ['kırsal', 'kentli'] },
    { y: ['fails the exam', 'passes the exam'], x: ['did not attend', 'attended review'], yl: 'exam result', xl: 'review session', yt: ['kaldı', 'geçti'], xt: ['katılmadı', 'tekrar dersine katıldı'] }
  ];
  function jointTable() {
    let c; do { c = randProbs(4); } while (c.some(v => v < 0.05));
    const P = { y0x0: c[0], y0x1: c[1], y1x0: c[2], y1x1: c[3] };
    P.y0 = P.y0x0 + P.y0x1; P.y1 = P.y1x0 + P.y1x1; P.x0 = P.y0x0 + P.y1x0; P.x1 = P.y0x1 + P.y1x1;
    const ctx = pick(CTX);
    const table = `\n| | $X=0$ (${ctx.x[0]}) | $X=1$ (${ctx.x[1]}) |\n| $Y=0$ (${ctx.y[0]}) | ${f(P.y0x0, 2)} | ${f(P.y0x1, 2)} |\n| $Y=1$ (${ctx.y[1]}) | ${f(P.y1x0, 2)} | ${f(P.y1x1, 2)} |\n`;
    return { P, ctx, table };
  }
  G.joint = () => {
    const { P, ctx, table } = jointTable();
    const t = R(0, 3), h = `The joint distribution of $Y$ (${ctx.yl}) and $X$ (${ctx.xl}) is:` + table;
    if (t === 0) return { en: h + 'What is $P(Y=1)$?', tr: '$Y=1$ (' + ctx.yt[1] + ') marjinal olasılığı?', opts: popts(P.y1, [P.y1x1, P.x1, P.y1x0, P.y0], 2), ex: `Marjinal = satır toplamı: $P(Y=1) = ${f(P.y1x0, 2)} + ${f(P.y1x1, 2)} = ${f(P.y1, 2)}$.` };
    if (t === 1) return { en: h + 'What is $P(Y=1\\mid X=1)$?', tr: `$X=1$ (${ctx.xt[1]}) iken $Y=1$ (${ctx.yt[1]}) olasılığı?`, opts: popts(P.y1x1 / P.x1, [P.y1x1, P.y1x1 / P.y1, P.y1, P.x1], 3), ex: `$P(Y=1\\mid X=1) = \\dfrac{P(Y=1,X=1)}{P(X=1)} = \\dfrac{${f(P.y1x1, 2)}}{${f(P.x1, 2)}} = ${f(P.y1x1 / P.x1, 3)}$. Koşul $X=1$, payda $P(X=1)$.` };
    if (t === 2) return { en: h + 'Given $Y=0$, what is the probability that $X=1$?', tr: `$Y=0$ (${ctx.yt[0]}) olduğu biliniyorsa $X=1$ (${ctx.xt[1]}) olasılığı?`, opts: popts(P.y0x1 / P.y0, [P.y0x1, P.y0x1 / P.x1, P.x1, P.y0], 3), ex: `$P(X=1\\mid Y=0) = \\dfrac{P(X=1,Y=0)}{P(Y=0)} = \\dfrac{${f(P.y0x1, 2)}}{${f(P.y0, 2)}} = ${f(P.y0x1 / P.y0, 3)}$.` };
    const prod = P.y0 * P.x0, ind = Math.abs(prod - P.y0x0) < 0.0005;
    return { en: h + 'Compare $P(Y=0,X=0)$ with $P(Y=0)P(X=0)$. Are $X$ and $Y$ independent?', tr: '$X$ ve $Y$ bağımsız mı?', opts: ind ? ['Yes, because the joint probability equals the product of the marginals', 'No, because the joint probability differs from the product of the marginals', 'No, because $P(Y=1)>P(Y=0)$', 'It cannot be determined from the table'] : ['No, because the joint probability differs from the product of the marginals', 'Yes, because the joint probability equals the product of the marginals', 'Yes, because all probabilities are positive', 'It cannot be determined from the table'], ex: `$P(Y=0)P(X=0) = ${f(P.y0, 2)}\\times${f(P.x0, 2)} = ${f(prod, 4)}$, ortak olasılık ise $${f(P.y0x0, 2)}$. ${ind ? 'Eşit (2×2 tabloda bir hücre tutuyorsa hepsi tutar), yani bağımsız.' : 'Eşit değil, yani bağımsız değiller.'}` };
  };

  G.condExp = () => {
    const { P, ctx, table } = jointTable();
    const t = R(0, 2), h = `The joint distribution of $Y$ (${ctx.yl}) and $X$ (${ctx.xl}) is:` + table;
    const e1 = P.y1x1 / P.x1, e0 = P.y1x0 / P.x0;
    if (t === 0) { const x = R(0, 1), e = x ? e1 : e0, j = x ? P.y1x1 : P.y1x0, m = x ? P.x1 : P.x0; return { en: h + `What is $E(Y\\mid X=${x})$?`, tr: `$E(Y\\mid X=${x})$ kaçtır?`, opts: popts(e, [j, x ? e0 : e1, P.y1, 1 - e], 3), ex: `$Y$ 0/1 olduğu için $E(Y\\mid X=${x}) = P(Y=1\\mid X=${x}) = ${f(j, 2)}/${f(m, 2)} = ${f(e, 3)}$.` }; }
    if (t === 1) return { en: h + 'Verify the law of iterated expectations: $E(Y) = E(Y\\mid X=0)P(X=0) + E(Y\\mid X=1)P(X=1)$ equals:', tr: 'LIE ile $E(Y)$ kaçtır?', opts: popts(P.y1, [(e0 + e1) / 2, e1, P.y1x1, e0 * e1], 3), ex: `$E(Y) = ${f(e0, 3)}(${f(P.x0, 2)}) + ${f(e1, 3)}(${f(P.x1, 2)}) = ${f(P.y1, 3)}$. Bu, doğrudan $P(Y=1)$'e eşit. Koşullu ortalamaların düz ortalaması değil.` };
    const x = R(0, 1), e = x ? e1 : e0;
    return { en: h + `What is $\\text{var}(Y\\mid X=${x})$?`, tr: `$\\text{var}(Y\\mid X=${x})$ kaçtır?`, opts: popts(e * (1 - e), [e, 1 - e, P.y1 * (1 - P.y1), e * e], 4), ex: `Koşullu dağılım Bernoulli, $p = ${f(e, 3)}$. $\\text{var}(Y\\mid X=${x}) = p(1-p) = ${f(e, 3)}\\times${f(1 - e, 3)} = ${f(e * (1 - e), 4)}$.` };
  };

  G.linComb = () => {
    const mx = R(-3, 8), my = R(-3, 8), vx = R(1, 9), vy = R(1, 9);
    const rho = RF(-0.8, 0.8, 0.1), cxy = +(rho * Math.sqrt(vx * vy)).toFixed(1);
    const a = R(1, 6), b = pick([-3, -2, 2, 3, 4]), c = pick([-2, 1, 2, 3]);
    const t = R(0, 3);
    const h = `$E(X)=${mx}$, $E(Y)=${my}$, $\\text{var}(X)=${vx}$, $\\text{var}(Y)=${vy}$, $\\text{cov}(X,Y)=${cxy}$.`;
    if (t === 0) { const v = a + b * mx + c * my; return { en: h + ` Find $E(${a} ${b < 0 ? '-' : '+'} ${Math.abs(b)}X ${c < 0 ? '-' : '+'} ${Math.abs(c)}Y)$.`, tr: 'Doğrusal birleşimin beklenen değeri?', opts: nopts(v, [b * mx + c * my, a + b * mx, a * (b * mx + c * my), a + b * vx + c * vy], 1), ex: `$E(a+bX+cY) = a + bE(X) + cE(Y) = ${a} + (${b})(${mx}) + (${c})(${my}) = ${f(v, 1)}$.` }; }
    if (t === 1) { const v = b * b * vx; return { en: h + ` Find $\\text{var}(${a} ${b < 0 ? '-' : '+'} ${Math.abs(b)}X)$.`, tr: '$\\text{var}(a+bX)$?', opts: nopts(v, [a + b * b * vx, b * vx, a * a + b * b * vx, Math.abs(b) * vx], 1, { min: 0 }), ex: `$\\text{var}(a+bX) = b^2\\text{var}(X) = (${b})^2(${vx}) = ${v}$. Sabit ${a} varyansı değiştirmez.` }; }
    if (t === 2) { const v = b * b * vx + c * c * vy + 2 * b * c * cxy; return { en: h + ` Find $\\text{var}(${b}X ${c < 0 ? '-' : '+'} ${Math.abs(c)}Y)$.`, tr: '$\\text{var}(aX+bY)$?', opts: nopts(v, [b * b * vx + c * c * vy, b * vx + c * vy, b * b * vx + c * c * vy + b * c * cxy, b * b * vx + c * c * vy - 2 * b * c * cxy], 1, { min: 0 }), ex: `$\\text{var}(aX+bY) = a^2\\sigma_X^2 + b^2\\sigma_Y^2 + 2ab\\,\\sigma_{XY} = ${b * b}(${vx}) + ${c * c}(${vy}) + 2(${b})(${c})(${cxy}) = ${f(v, 1)}$.` }; }
    const v = b * vx + c * cxy;
    return { en: h + ` Find $\\text{cov}(X,\\ ${a} ${b < 0 ? '-' : '+'} ${Math.abs(b)}X ${c < 0 ? '-' : '+'} ${Math.abs(c)}Y)$.`, tr: 'Kovaryansı bul.', opts: nopts(v, [a + b * vx + c * cxy, b * cxy + c * vy, b * c * cxy, b * vx + c * vy], 1), ex: `$\\text{cov}(X, a+bX+cY) = b\\,\\text{var}(X) + c\\,\\text{cov}(X,Y) = (${b})(${vx}) + (${c})(${cxy}) = ${f(v, 1)}$. Sabit $a$ kovaryansa girmez.` };
  };

  G.corrCalc = () => {
    const vx = pick([4, 9, 16, 25, 1, 36]), vy = pick([4, 9, 16, 25, 49, 100]);
    const r = RF(-0.95, 0.95, 0.05), cov = +(r * Math.sqrt(vx * vy)).toFixed(2);
    const rr = cov / Math.sqrt(vx * vy);
    return {
      en: `$\\text{var}(X) = ${vx}$, $\\text{var}(Y) = ${vy}$ and $\\text{cov}(X,Y) = ${cov}$. What is $\\text{corr}(X,Y)$?`,
      tr: 'Korelasyon kaçtır?',
      opts: nopts(rr, [cov / (vx * vy), cov / vx, cov, -rr], 3, { min: -1, max: 1 }),
      ex: `$\\text{corr} = \\dfrac{\\text{cov}}{\\sigma_X\\sigma_Y} = \\dfrac{${cov}}{\\sqrt{${vx}}\\sqrt{${vy}}} = \\dfrac{${cov}}{${Math.sqrt(vx)}\\times${Math.sqrt(vy)}} = ${f(rr, 3)}$. Varyansa değil, standart sapmaya böl.`
    };
  };

  /* ---------- Ünite 3 ---------- */
  G.normalProb = () => {
    const sd = pick([2, 3, 4, 5, 10, 1.5]), mu = R(-5, 60), v = +(sd * sd).toFixed(2);
    const t = R(0, 2);
    const z = () => pick([-2.5, -2, -1.5, -1.2, -1, -0.8, -0.5, 0.4, 0.5, 0.8, 1, 1.2, 1.5, 2, 2.5]);
    if (t === 0) { const zz = z(), c = +(mu + zz * sd).toFixed(2), ans = Phi(zz); return { en: `If $Y\\sim N(${mu}, ${v})$, find $P(Y\\le ${c})$.`, tr: `$Y\\sim N(${mu},${v})$ ise $P(Y\\le${c})$?`, opts: popts(ans, [Phi((c - mu) / v), 1 - ans, Phi(-Math.abs(zz) / 2), Phi((c - mu) / Math.sqrt(sd))], 4), ex: `$\\sigma = \\sqrt{${v}} = ${sd}$. $z = (${c}-${mu})/${sd} = ${f(zz, 2)}$. $\\Phi(${f(zz, 2)}) = ${f(ans, 4)}$. Varyansa (${v}) bölmek en sık hata.` }; }
    if (t === 1) { const zz = z(), c = +(mu + zz * sd).toFixed(2), ans = 1 - Phi(zz); return { en: `If $Y\\sim N(${mu}, ${v})$, find $P(Y > ${c})$.`, tr: `$Y\\sim N(${mu},${v})$ ise $P(Y>${c})$?`, opts: popts(ans, [Phi(zz), 1 - Phi((c - mu) / v), Phi(-zz) / 2], 4), ex: `$z = (${c}-${mu})/${sd} = ${f(zz, 2)}$. $P(Y>${c}) = 1-\\Phi(${f(zz, 2)}) = ${f(ans, 4)}$.` }; }
    let z1 = z(), z2 = z(); while (z2 <= z1) { z1 = z(); z2 = z(); }
    const a = +(mu + z1 * sd).toFixed(2), b = +(mu + z2 * sd).toFixed(2), ans = Phi(z2) - Phi(z1);
    return { en: `If $Y\\sim N(${mu}, ${v})$, find $P(${a}\\le Y\\le ${b})$.`, tr: `$Y\\sim N(${mu},${v})$ ise $P(${a}\\le Y\\le${b})$?`, opts: popts(ans, [Phi(z2), Phi((b - mu) / v) - Phi((a - mu) / v), 1 - ans, Phi(z2) + Phi(z1) - 1], 4), ex: `$z_1 = (${a}-${mu})/${sd} = ${f(z1, 2)}$, $z_2 = (${b}-${mu})/${sd} = ${f(z2, 2)}$. $\\Phi(${f(z2, 2)}) - \\Phi(${f(z1, 2)}) = ${f(Phi(z2), 4)} - ${f(Phi(z1), 4)} = ${f(ans, 4)}$.` };
  };

  G.chiF = () => {
    const m = pick([1, 2, 3, 4, 5, 6, 8, 10]), alpha = pick([0.10, 0.05, 0.01]);
    const c = +S.chi2Inv(1 - alpha, m).toFixed(2), p = 1 - S.chi2Cdf(c, m);
    const t = R(0, 2);
    const ao = ['0.10', '0.05', '0.01', '0.90', '0.95', '0.99'];
    const mk = (correct) => { const o = [correct]; for (const s of ao) if (s !== correct && o.length < 4 && !(correct === '0.10' && s === '0.90') && !(correct === '0.05' && s === '0.95') && !(correct === '0.01' && s === '0.99')) o.push(s); return o; };
    if (t === 0) return { en: `If $W\\sim\\chi^2_{${m}}$, then $P(W > ${c})$ is approximately:`, tr: `$W\\sim\\chi^2_{${m}}$ ise $P(W>${c})$ yaklaşık?`, opts: [f(p, 2), f(1 - p, 2), ...mk(f(p, 2)).slice(1, 3)], ex: `Ki-kare tablosunda ${m} serbestlik derecesi satırında ${c}, üst kuyruk olasılığı ${f(p, 2)} olan kritik değer. Yani $P(W>${c}) = ${f(p, 2)}$ ve $P(W\\le${c}) = ${f(1 - p, 2)}$.` };
    if (t === 1) { const fc = +(c / m).toFixed(3), pf = 1 - S.fCdf(fc, m, Infinity); return { en: `If $Y\\sim F_{${m},\\infty}$, then $P(Y > ${fc})$ is approximately:`, tr: `$Y\\sim F_{${m},\\infty}$ ise $P(Y>${fc})$?`, opts: [f(pf, 2), f(1 - pf, 2), ...mk(f(pf, 2)).slice(1, 3)], ex: `$F_{${m},\\infty} = \\chi^2_{${m}}/${m}$. $P(Y>${fc}) = P(W > ${m}\\times${fc}) = P(W>${f(m * fc, 2)})$, $W\\sim\\chi^2_{${m}}$. Tablodan $\\approx ${f(pf, 2)}$.` }; }
    const z = pick([1, 1.645, 1.96, 2, 2.576]), c1 = +(z * z).toFixed(3), pr = 2 * Phi(z) - 1;
    return { en: `If $Y\\sim\\chi^2_1$, find $P(Y\\le ${c1})$.`, tr: `$Y\\sim\\chi^2_1$ ise $P(Y\\le${c1})$?`, opts: popts(pr, [Phi(z), 1 - pr, Phi(c1)], 4), ex: `$\\chi^2_1 = Z^2$. $P(Z^2\\le ${c1}) = P(-${z}\\le Z\\le ${z}) = 2\\Phi(${z}) - 1 = ${f(pr, 4)}$.` };
  };

  G.chiMoments = () => {
    const m = R(2, 30), t = R(0, 2);
    if (t === 0) return { en: `If $W\\sim\\chi^2_{${m}}$, then $E(W)$ and $\\text{var}(W)$ are:`, tr: `$W\\sim\\chi^2_{${m}}$ için ortalama ve varyans?`, opts: [`$${m}$ and $${2 * m}$`, `$${m}$ and $${m}$`, `$0$ and $1$`, `$${2 * m}$ and $${m}$`], ex: `Ki-kare: $E = m$, $\\text{var} = 2m$. Burada ${m} ve ${2 * m}.` };
    if (t === 1) return { en: `Let $Z_1,\\dots,Z_{${m}}$ be i.i.d. $N(0,1)$. The distribution of $\\sum_{i=1}^{${m}} Z_i^2$ is:`, tr: `${m} bağımsız standart normalin karelerinin toplamının dağılımı?`, opts: [`$\\chi^2_{${m}}$`, `$N(0, ${m})$`, `$t_{${m}}$`, `$F_{1,${m}}$`], ex: `Tanım gereği $\\chi^2_{${m}}$. $N(0,${m})$ ise karesiz toplamın dağılımı olurdu.` };
    return { en: `If $W\\sim\\chi^2_{${m}}$, what is $\\text{var}(W/${m})$?`, tr: `$\\text{var}(W/${m})$?`, opts: nopts(2 / m, [2, 2 * m, 1 / m, 2 / (m * m)], 4, { min: 0 }), ex: `$\\text{var}(W/m) = \\text{var}(W)/m^2 = 2m/m^2 = 2/m = ${f(2 / m, 4)}$. Bu, $F_{${m},\\infty}$'un varyansı.` };
  };

  G.ybarVar = () => {
    const v = pick([4, 9, 16, 25, 36, 100, 64, 15, 12]), n = pick([16, 25, 36, 49, 64, 100, 400, 50, 80]);
    const t = R(0, 1);
    if (t === 0) return { en: `$Y_1,\\dots,Y_{${n}}$ are i.i.d. with $\\sigma_Y^2 = ${v}$. What is $\\text{var}(\\bar Y)$?`, tr: `$\\text{var}(\\bar Y)$ kaçtır?`, opts: nopts(v / n, [v, Math.sqrt(v / n), Math.sqrt(v) / n, v / Math.sqrt(n)], 4, { min: 0 }), ex: `$\\text{var}(\\bar Y) = \\sigma^2/n = ${v}/${n} = ${f(v / n, 4)}$.` };
    return { en: `$Y_1,\\dots,Y_{${n}}$ are i.i.d. with $\\sigma_Y^2 = ${v}$. What is the standard deviation of $\\bar Y$?`, tr: `$\\bar Y$'nin standart sapması?`, opts: nopts(Math.sqrt(v / n), [v / n, Math.sqrt(v), Math.sqrt(v) / n, v / Math.sqrt(n)], 4, { min: 0 }), ex: `$\\text{sd}(\\bar Y) = \\sigma/\\sqrt n = \\sqrt{${v}/${n}} = ${f(Math.sqrt(v / n), 4)}$.` };
  };

  G.ybarProb = () => {
    const mu = R(5, 50), v = pick([4, 9, 16, 25]), n = pick([16, 25, 36, 64, 100]), sd = Math.sqrt(v / n);
    const c = +(pick([0.5, 1, 1.5, 2, 2.5]) * sd).toFixed(2), z = c / sd, ans = 2 * Phi(z) - 1;
    return {
      en: `$Y_i\\sim N(${mu}, ${v})$, i.i.d., $n=${n}$. Find $P(${f(mu - c, 2)}\\le\\bar Y\\le ${f(mu + c, 2)})$.`,
      tr: `$P(${f(mu - c, 2)}\\le\\bar Y\\le${f(mu + c, 2)})$ kaçtır?`,
      opts: popts(ans, [2 * Phi(c / Math.sqrt(v)) - 1, Phi(z), 2 * Phi(c / (v / n)) - 1, 1 - ans], 4),
      ex: `$\\bar Y\\sim N(${mu}, ${v}/${n})$, $\\text{sd}(\\bar Y) = ${f(sd, 4)}$. $z = ${c}/${f(sd, 4)} = ${f(z, 2)}$. $P(-${f(z, 2)}\\le Z\\le ${f(z, 2)}) = 2\\Phi(${f(z, 2)}) - 1 = ${f(ans, 4)}$.`
    };
  };

  G.cltProb = () => {
    const mu = R(10, 80), v = R(5, 60), n = pick([30, 40, 50, 60, 80, 100, 120]), sd = Math.sqrt(v / n);
    const t = R(0, 1);
    if (t === 0) { const zz = pick([-1.5, -1, -0.7, -0.5, 0.5, 0.8, 1.2, 1.6]), c = +(mu + zz * sd).toFixed(2), z = (c - mu) / sd, ans = Phi(z); return { en: `A population has $\\mu_Y = ${mu}$ and $\\sigma_Y^2 = ${v}$ (not necessarily normal). In a random sample of $n=${n}$, use the CLT to approximate $P(\\bar Y < ${c})$.`, tr: `MLT ile $P(\\bar Y<${c})$ yaklaşık?`, opts: popts(ans, [Phi((c - mu) / Math.sqrt(v)), 1 - ans, Phi((c - mu) / (v / n))], 4), ex: `MLT: $\\bar Y\\approx N(${mu}, ${v}/${n} = ${f(v / n, 4)})$, $\\text{sd} = ${f(sd, 4)}$. $z = (${c}-${mu})/${f(sd, 4)} = ${f(z, 2)}$. $\\Phi(${f(z, 2)}) = ${f(ans, 4)}$.` }; }
    const z1 = pick([0.5, 1, 1.5]), z2 = z1 + pick([0.5, 1, 1.5]);
    const a = +(mu + z1 * sd).toFixed(2), b = +(mu + z2 * sd).toFixed(2);
    const za = (a - mu) / sd, zb = (b - mu) / sd, ans = Phi(zb) - Phi(za);
    return { en: `A population has $\\mu_Y = ${mu}$ and $\\sigma_Y^2 = ${v}$. With $n=${n}$, approximate $P(${a} < \\bar Y < ${b})$.`, tr: `MLT ile $P(${a}<\\bar Y<${b})$?`, opts: popts(ans, [Phi((b - mu) / Math.sqrt(v)) - Phi((a - mu) / Math.sqrt(v)), Phi(zb), 1 - Phi(za)], 4), ex: `$\\text{sd}(\\bar Y) = \\sqrt{${v}/${n}} = ${f(sd, 4)}$. $z_a = ${f(za, 2)}$, $z_b = ${f(zb, 2)}$. $\\Phi(${f(zb, 2)}) - \\Phi(${f(za, 2)}) = ${f(ans, 4)}$.` };
  };

  G.cltBern = () => {
    const p = pick([0.2, 0.3, 0.4, 0.45, 0.55, 0.6, 0.7]), n = pick([100, 200, 400, 500, 900]);
    const sd = Math.sqrt(p * (1 - p) / n), dz = pick([0.5, 0.8, 1, 1.25, 1.5, 2]);
    const up = Math.random() < 0.5, c = +(p + (up ? 1 : -1) * dz * sd).toFixed(3), z = (c - p) / sd;
    const ans = up ? 1 - Phi(z) : Phi(z);
    return {
      en: `$Y_i$ are i.i.d. Bernoulli with $p = ${p}$ and $n = ${n}$. Use the CLT to approximate $P(\\bar Y ${up ? '\\ge' : '\\le'} ${c})$.`,
      tr: `Bernoulli, $p=${p}$, $n=${n}$. $P(\\bar Y${up ? '\\ge' : '\\le'}${c})$ yaklaşık?`,
      opts: popts(ans, [1 - ans, up ? 1 - Phi((c - p) / Math.sqrt(p * (1 - p))) : Phi((c - p) / Math.sqrt(p * (1 - p))), up ? 1 - Phi((c - p) / (p * (1 - p) / n)) : null], 4),
      ex: `$E(Y_i) = ${p}$, $\\text{var}(Y_i) = p(1-p) = ${f(p * (1 - p), 4)}$. $\\text{sd}(\\bar Y) = \\sqrt{${f(p * (1 - p), 4)}/${n}} = ${f(sd, 4)}$. $z = (${c}-${p})/${f(sd, 4)} = ${f(z, 2)}$. Sonuç: ${up ? `$1-\\Phi(${f(z, 2)})$` : `$\\Phi(${f(z, 2)})$`} $= ${f(ans, 4)}$.`
    };
  };

  G.cltCount = () => {
    const p = pick([0.2, 0.25, 0.3, 0.4, 0.5]), n = pick([100, 150, 200]);
    const mu = n * p, v = n * p * (1 - p), sd = Math.sqrt(v), k = Math.round(mu + pick([0.5, 1, 1.5]) * sd);
    const z = (k - mu) / sd, ans = 1 - Phi(z);
    return {
      en: `Each of $n=${n}$ independent students passes with probability ${p}. Let $S$ be the number who pass. Using the CLT (no continuity correction), approximate $P(S > ${k})$.`,
      tr: `${n} öğrenci, geçme olasılığı ${p}. Geçen sayısı $S$. MLT ile $P(S>${k})$?`,
      opts: popts(ans, [Phi(z), 1 - Phi((k - mu) / v), 1 - Phi((k - mu) / Math.sqrt(p * (1 - p)))], 4),
      ex: `$S\\sim$ Binom$(${n}, ${p})$, $E(S) = np = ${f(mu, 1)}$, $\\text{var}(S) = np(1-p) = ${f(v, 2)}$, $\\text{sd} = ${f(sd, 3)}$. $z = (${k}-${f(mu, 1)})/${f(sd, 3)} = ${f(z, 3)}$. $P(S>${k})\\approx 1-\\Phi(${f(z, 3)}) = ${f(ans, 4)}$ (PS4 Soru 6 ile aynı yöntem).`
    };
  };

  G.sampleCorr = () => {
    const sx = pick([1.5, 2, 2.5, 3, 4, 5, 10]), sy = pick([2, 3, 4, 6, 8, 12, 20]);
    const r = RF(-0.9, 0.9, 0.05), sxy = +(r * sx * sy).toFixed(2), rr = sxy / (sx * sy);
    if (Math.random() < 0.5) return { en: `In a sample, $s_X = ${sx}$, $s_Y = ${sy}$ and $s_{XY} = ${sxy}$. The sample correlation $r_{XY}$ is:`, tr: '$r_{XY}$ kaçtır?', opts: nopts(rr, [sxy / (sx * sx * sy * sy), sxy / sx, -rr, sxy / (sx + sy)], 3, { min: -1, max: 1 }), ex: `$r = s_{XY}/(s_Xs_Y) = ${sxy}/(${sx}\\times${sy}) = ${f(rr, 3)}$.` };
    return { en: `In a sample, $s^2_X = ${f(sx * sx, 2)}$, $s^2_Y = ${f(sy * sy, 2)}$ and $s_{XY} = ${sxy}$. The sample correlation $r_{XY}$ is:`, tr: 'Varyanslar verilmiş. $r_{XY}$?', opts: nopts(rr, [sxy / (sx * sx * sy * sy), sxy / (sx * sx), -rr], 3, { min: -1, max: 1 }), ex: `Önce karekök al: $s_X = ${sx}$, $s_Y = ${sy}$. $r = ${sxy}/(${sx}\\times${sy}) = ${f(rr, 3)}$.` };
  };

  /* ---------- Ünite 4 ---------- */
  G.estimator = () => {
    const sets = [[[0.5, 0.5], 'unbiased'], [[0.25, 0.75], 'unbiased'], [[1 / 3, 2 / 3], 'unbiased'], [[0.4, 0.4], 'biased'], [[0.6, 0.6], 'biased'], [[1, 1], 'biased'], [[0.2, 0.8], 'unbiased']];
    const s = pick(sets), w = s[0], sw = w[0] + w[1], sw2 = w[0] * w[0] + w[1] * w[1];
    const fr = (x) => Math.abs(x - 1 / 3) < 1e-9 ? '\\tfrac13' : Math.abs(x - 2 / 3) < 1e-9 ? '\\tfrac23' : f(x, 2);
    const est = `${fr(w[0])}Y_1 + ${fr(w[1])}Y_2`;
    const t = R(0, 1), v = pick([4, 6, 10, 12]);
    if (t === 0) return { en: `$Y_1, Y_2$ are i.i.d. with mean $\\mu$ and variance $\\sigma^2$. Is $\\hat\\mu = ${est}$ unbiased for $\\mu$?`, tr: `$\\hat\\mu = ${est}$ yansız mı?`, opts: s[1] === 'unbiased' ? [`Yes, because the weights sum to 1, so $E(\\hat\\mu)=\\mu$`, `No, because $E(\\hat\\mu) = ${f(sw, 2)}\\mu \\ne \\mu$`, `No, because it does not use all observations equally`, `Yes, because its variance is zero`] : [`No, because $E(\\hat\\mu) = ${f(sw, 2)}\\mu \\ne \\mu$`, `Yes, because the weights sum to 1`, `Yes, because both weights are positive`, `Yes, because its variance is smaller than $\\sigma^2$`], ex: `$E(\\hat\\mu) = (${fr(w[0])} + ${fr(w[1])})\\mu = ${f(sw, 2)}\\mu$. Ağırlıkların toplamı ${Math.abs(sw - 1) < 1e-9 ? '1, yani yansız. Eşit ağırlık zorunlu değil, sadece toplam 1 olmalı.' : f(sw, 2) + ', yani yanlı.'}` };
    return { en: `$Y_1, Y_2$ are i.i.d. with variance $\\sigma^2 = ${v}$. What is $\\text{var}(${est})$?`, tr: `$\\text{var}(${est})$ kaçtır?`, opts: nopts(v * sw2, [v * sw, v * sw * sw, v / 2, v], 3, { min: 0 }), ex: `Bağımsızlıkta $\\text{var}(w_1Y_1+w_2Y_2) = (w_1^2+w_2^2)\\sigma^2 = (${f(w[0] * w[0], 4)} + ${f(w[1] * w[1], 4)})(${v}) = ${f(v * sw2, 3)}$. Ağırlıkların kendisi değil, kareleri kullanılır.` };
  };

  const HYP = [
    ['whether mean hourly earnings differ from', '\\ne', 'farklı mı'],
    ['whether the mean test score exceeds', '>', 'büyük mü'],
    ['whether average waiting time is less than', '<', 'küçük mü'],
    ['whether the average household income is different from', '\\ne', 'farklı mı'],
    ['whether the new method increases the mean score above', '>', 'artırıyor mu'],
    ['whether the mean fuel consumption has fallen below', '<', 'düşmüş mü']
  ];
  G.hypSetup = () => {
    const h = pick(HYP), c = R(5, 80);
    const ops = ['\\ne', '>', '<'];
    return { en: `A researcher wants to test ${h[0]} ${c}. The null and alternative hypotheses are:`, tr: `Ortalamanın ${c}'den ${h[2]} test ediliyor. Hipotezler?`, opts: [`$H_0:\\mu=${c}$ vs. $H_1:\\mu${h[1]}${c}$`, ...ops.filter(o => o !== h[1]).map(o => `$H_0:\\mu=${c}$ vs. $H_1:\\mu${o}${c}$`), `$H_0:\\mu${h[1]}${c}$ vs. $H_1:\\mu=${c}$`].slice(0, 4), ex: `Eşitlik her zaman $H_0$'dadır. "${h[2]}" ifadesi $H_1:\\mu${h[1]}${c}$ demek${h[1] === '\\ne' ? ', iki yönlü' : ', tek yönlü'}.` };
  };

  G.tMean = () => {
    const n = pick([64, 100, 144, 225, 400, 900]), s = pick([2, 3, 4, 5, 6, 8, 10, 12]), se = s / Math.sqrt(n);
    const mu0 = R(10, 90), tt = pick([-2.8, -2.2, -1.8, -1.2, 1.1, 1.5, 1.75, 2.1, 2.4, 3.0]);
    const yb = +(mu0 + tt * se).toFixed(2), t = (yb - mu0) / se;
    const k = R(0, 2);
    if (k === 0) return { en: `$n=${n}$, $\\bar Y = ${yb}$, $s_Y = ${s}$. What is the $t$-statistic for $H_0:\\mu_Y = ${mu0}$?`, tr: `$H_0:\\mu=${mu0}$ için t istatistiği?`, opts: nopts(t, [(yb - mu0) / s, (yb - mu0) / (s / n), (yb - mu0) / (s * s / n), -t], 2), ex: `$SE(\\bar Y) = s_Y/\\sqrt n = ${s}/\\sqrt{${n}} = ${f(se, 4)}$. $t = (${yb}-${mu0})/${f(se, 4)} = ${f(t, 2)}$. $s_Y$'ye bölmek SE'yi unutmak demek.` };
    if (k === 1) { const p2 = 2 * Phi(-Math.abs(t)); return { en: `$n=${n}$, $\\bar Y = ${yb}$, $s_Y = ${s}$. What is the two-sided p-value for $H_0:\\mu_Y = ${mu0}$?`, tr: `İki yönlü p-değeri?`, opts: popts(p2, [p2 / 2, 1 - p2, Phi(Math.abs(t)), 2 * Phi(-Math.abs((yb - mu0) / s))], 4), ex: `$t = (${yb}-${mu0})/(${s}/\\sqrt{${n}}) = ${f(t, 2)}$. $p = 2\\Phi(-|t|) = 2\\Phi(-${f(Math.abs(t), 2)}) = ${f(p2, 4)}$.` }; }
    const a = pick([0.10, 0.05, 0.01]), cv = { 0.1: 1.645, 0.05: 1.96, 0.01: 2.576 }[a], rej = Math.abs(t) > cv;
    return { en: `$n=${n}$, $\\bar Y = ${yb}$, $s_Y = ${s}$. Test $H_0:\\mu_Y = ${mu0}$ vs. $H_1:\\mu_Y\\ne${mu0}$ at the ${a * 100}% level.`, tr: `%${a * 100} düzeyinde iki yönlü test kararı?`, opts: rej ? [`Reject $H_0$, since $|t| = ${f(Math.abs(t), 2)} > ${cv}$`, `Do not reject $H_0$, since $|t| = ${f(Math.abs(t), 2)} < ${cv}$`, `Reject $H_0$, since $\\bar Y > 0$`, `Do not reject $H_0$, since $s_Y > 1$`] : [`Do not reject $H_0$, since $|t| = ${f(Math.abs(t), 2)} < ${cv}$`, `Reject $H_0$, since $|t| = ${f(Math.abs(t), 2)} > ${cv}$`, `Reject $H_0$, since $\\bar Y \\ne ${mu0}$`, `Accept $H_1$, since $n$ is large`], ex: `$t = (${yb}-${mu0})/(${s}/\\sqrt{${n}}) = ${f(t, 2)}$. İki yönlü %${a * 100} kritik değeri ${cv}. $|t|${rej ? '>' : '<'}${cv}$, ${rej ? 'reddet' : 'reddedemeyiz'}.` };
  };

  G.pValue = () => {
    const t = pick([-2.6, -2.1, -1.7, -1.3, 1.2, 1.6, 1.9, 2.3, 2.7, 3.1]), alt = pick(['two', 'gt', 'lt']);
    let p, ex;
    if (alt === 'two') { p = 2 * Phi(-Math.abs(t)); ex = `İki yönlü: $p = 2\\Phi(-|t|) = 2\\Phi(-${Math.abs(t)}) = ${f(p, 4)}$.`; }
    else if (alt === 'gt') { p = 1 - Phi(t); ex = `$H_1:\\mu>c$, sağ kuyruk: $p = 1-\\Phi(${t}) = ${f(p, 4)}$.${t < 0 ? ' t negatif olduğu için p büyük çıkar, sağ kuyruk lehine kanıt yok.' : ''}`; }
    else { p = Phi(t); ex = `$H_1:\\mu<c$, sol kuyruk: $p = \\Phi(${t}) = ${f(p, 4)}$.${t > 0 ? ' t pozitif olduğu için p büyük çıkar.' : ''}`; }
    const H = { two: '\\mu\\ne c', gt: '\\mu > c', lt: '\\mu < c' }[alt];
    return { en: `The $t$-statistic for $H_0:\\mu=c$ is $t = ${t}$. Using the normal approximation, the p-value for $H_1: ${H}$ is:`, tr: `$t=${t}$, $H_1:${H}$ için p-değeri?`, opts: popts(p, [2 * Phi(-Math.abs(t)), 1 - Phi(Math.abs(t)), 1 - p, Phi(-Math.abs(t)), Phi(Math.abs(t))].filter(x => Math.abs(x - p) > 1e-6), 4), ex };
  };

  G.ciMean = () => {
    const n = pick([100, 144, 225, 400, 625, 900, 1600]), s = R(5, 150), yb = R(20, 2000), se = s / Math.sqrt(n);
    const L = pick([[90, 1.645], [95, 1.96], [99, 2.576]]), m = L[1] * se;
    const others = [[90, 1.645], [95, 1.96], [99, 2.576]].filter(x => x[0] !== L[0]);
    const fmt = (x) => x;
    return {
      en: `$n=${n}$, $\\bar Y=${yb}$, $s_Y=${s}$. The ${L[0]}% confidence interval for $\\mu_Y$ is:`,
      tr: `%${L[0]} güven aralığı?`,
      opts: [ivm(yb - m, yb + m, 2), ivm(yb - others[0][1] * se, yb + others[0][1] * se, 2), ivm(yb - others[1][1] * se, yb + others[1][1] * se, 2), ivm(yb - L[1] * s / n, yb + L[1] * s / n, 2), ivm(yb - L[1] * s, yb + L[1] * s, 2)].filter((x, i, a) => a.indexOf(x) === i).slice(0, 4).map(fmt),
      ex: `$SE = ${s}/\\sqrt{${n}} = ${f(se, 3)}$. %${L[0]} için kritik değer ${L[1]}. $${yb}\\pm${L[1]}\\times${f(se, 3)} = ${yb}\\pm${f(m, 2)}$, yani $${iv(yb - m, yb + m, 2)}$.`
    };
  };

  G.ciProp = () => {
    const n = pick([200, 400, 500, 800, 1000]), k = Math.round(n * RF(0.35, 0.65, 0.01)), ph = k / n, se = Math.sqrt(ph * (1 - ph) / n);
    return {
      en: `In a survey of ${n} people, ${k} support a policy. The 95% confidence interval for the population proportion is approximately:`,
      tr: `${n} kişiden ${k}'i destekliyor. %95 GA?`,
      opts: [ivm(ph - 1.96 * se, ph + 1.96 * se, 3), ivm(ph - 2.576 * se, ph + 2.576 * se, 3), ivm(ph - 1.96 * ph * (1 - ph) / n, ph + 1.96 * ph * (1 - ph) / n, 3), ivm(ph - 1.96 * Math.sqrt(ph * (1 - ph)), ph + 1.96 * Math.sqrt(ph * (1 - ph)), 3)],
      ex: `$\\hat p = ${k}/${n} = ${f(ph, 4)}$. $SE = \\sqrt{\\hat p(1-\\hat p)/n} = ${f(se, 4)}$. $${f(ph, 4)}\\pm1.96(${f(se, 4)}) = ${iv(ph - 1.96 * se, ph + 1.96 * se, 3)}$.`
    };
  };

  G.ciTest = () => {
    const a = R(10, 60), w = R(2, 12), b = a + w, inside = Math.random() < 0.5;
    const mu0 = inside ? +(a + RF(0.1, 0.9, 0.1) * w).toFixed(1) : pick([+(a - RF(0.5, 3, 0.5)).toFixed(1), +(b + RF(0.5, 3, 0.5)).toFixed(1)]);
    return {
      en: `The 95% confidence interval for $\\mu_Y$ is $(${a},\\ ${b})$. At the 5% level, the two-sided test of $H_0:\\mu_Y = ${mu0}$:`,
      tr: `%95 GA $(${a}, ${b})$. $H_0:\\mu=${mu0}$ kararı?`,
      opts: inside ? [`does not reject $H_0$, because ${mu0} is inside the interval`, `rejects $H_0$, because ${mu0} is inside the interval`, `rejects $H_0$, because the interval does not contain 0`, `cannot be decided without the p-value`] : [`rejects $H_0$, because ${mu0} is outside the interval`, `does not reject $H_0$, because ${mu0} is outside the interval`, `does not reject $H_0$, because the interval is wide`, `cannot be decided without the p-value`],
      ex: `%95 GA, %5'te reddedilemeyen değerlerin kümesi. ${mu0} aralığın ${inside ? 'içinde, yani reddedemeyiz' : 'dışında, yani reddederiz'}.`
    };
  };

  G.diffMeans = () => {
    const nm = pick([400, 900, 1600, 1000]), nw = pick([400, 900, 1600, 1200]), sm = R(6, 14), sw = R(5, 12);
    const ym = +RF(18, 30, 0.01).toFixed(2), d = RF(-1, 4, 0.05), yw = +(ym - d).toFixed(2), diff = ym - yw;
    const se = Math.sqrt(sm * sm / nm + sw * sw / nw), t = diff / se;
    const k = R(0, 2);
    const h = `Men: $\\bar Y_m=${ym}$, $s_m=${sm}$, $n_m=${nm}$. Women: $\\bar Y_w=${yw}$, $s_w=${sw}$, $n_w=${nw}$.`;
    if (k === 0) return { en: h + ' What is $SE(\\bar Y_m-\\bar Y_w)$?', tr: 'Farkın standart hatası?', opts: nopts(se, [sm / Math.sqrt(nm) + sw / Math.sqrt(nw), Math.sqrt(sm / nm + sw / nw), Math.sqrt(Math.abs(sm * sm / nm - sw * sw / nw)), (sm + sw) / Math.sqrt(nm + nw)], 4, { min: 0 }), ex: `$SE = \\sqrt{s_m^2/n_m + s_w^2/n_w} = \\sqrt{${sm * sm}/${nm} + ${sw * sw}/${nw}} = ${f(se, 4)}$. Varyanslar toplanır, SE'ler toplanmaz.` };
    if (k === 1) return { en: h + ' What is the $t$-statistic for $H_0:\\mu_m-\\mu_w=0$?', tr: 'Fark testi t istatistiği?', opts: nopts(t, [diff / (sm / Math.sqrt(nm) + sw / Math.sqrt(nw)), diff / Math.sqrt(sm * sm + sw * sw), diff, -t], 2), ex: `Fark $= ${f(diff, 2)}$, $SE = ${f(se, 4)}$. $t = ${f(diff, 2)}/${f(se, 4)} = ${f(t, 2)}$.` };
    return { en: h + ' The 95% confidence interval for $\\mu_m-\\mu_w$ is:', tr: 'Fark için %95 GA?', opts: [ivm(diff - 1.96 * se, diff + 1.96 * se, 3), ivm(diff - 2.576 * se, diff + 2.576 * se, 3), ivm(diff - 1.96 * (sm / Math.sqrt(nm) + sw / Math.sqrt(nw)), diff + 1.96 * (sm / Math.sqrt(nm) + sw / Math.sqrt(nw)), 3), ivm(diff - se, diff + se, 3)], ex: `$${f(diff, 2)}\\pm1.96(${f(se, 4)}) = ${iv(diff - 1.96 * se, diff + 1.96 * se, 3)}$.${diff - 1.96 * se > 0 || diff + 1.96 * se < 0 ? ' 0 aralıkta yok, yani fark %5\'te anlamlı.' : ' 0 aralıkta, yani fark %5\'te anlamlı değil.'}` };
  };

  /* ---------- Ünite 5 ---------- */
  function olsData() {
    let xs, ys, b1, b0, n;
    do {
      n = R(4, 5);
      const pool = [1, 2, 3, 4, 5, 6, 7, 8]; xs = [];
      while (xs.length < n) { const v = pick(pool); if (!xs.includes(v)) xs.push(v); }
      xs.sort((a, b) => a - b);
      const bb = pick([-2, -1, 1, 2, 3, 0.5]), b00 = R(0, 8);
      ys = xs.map(x => Math.round(b00 + bb * x + R(-2, 2)));
      const xb = xs.reduce((a, b) => a + b) / n, yb = ys.reduce((a, b) => a + b) / n;
      const sxy = xs.reduce((a, x, i) => a + (x - xb) * (ys[i] - yb), 0), sxx = xs.reduce((a, x) => a + sq(x - xb), 0);
      b1 = sxy / sxx; b0 = yb - b1 * xb;
    } while (!isFinite(b1) || Math.abs(b1) < 0.05);
    const xb = xs.reduce((a, b) => a + b) / n, yb = ys.reduce((a, b) => a + b) / n;
    const sxy = xs.reduce((a, x, i) => a + (x - xb) * (ys[i] - yb), 0), sxx = xs.reduce((a, x) => a + sq(x - xb), 0);
    return { xs, ys, n, xb, yb, sxy, sxx, b1, b0 };
  }
  G.olsSmall = () => {
    const d = olsData(), t = R(0, 2);
    const table = '\n| $X$ | ' + d.xs.join(' | ') + ' |\n| $Y$ | ' + d.ys.join(' | ') + ' |\n';
    const steps = `$\\bar X = ${f(d.xb, 3)}$, $\\bar Y = ${f(d.yb, 3)}$, $\\sum(X-\\bar X)(Y-\\bar Y) = ${f(d.sxy, 3)}$, $\\sum(X-\\bar X)^2 = ${f(d.sxx, 3)}$.`;
    if (t === 0) return { en: 'Using the data below, compute the OLS slope $\\hat\\beta_1$ of $Y$ on $X$.' + table, tr: 'OLS eğimi $\\hat\\beta_1$?', opts: nopts(d.b1, [d.sxx / d.sxy, d.sxy / (d.n - 1), d.yb / d.xb, d.b0], 3), ex: steps + ` $\\hat\\beta_1 = ${f(d.sxy, 3)}/${f(d.sxx, 3)} = ${f(d.b1, 3)}$.` };
    if (t === 1) return { en: 'Using the data below, compute the OLS intercept $\\hat\\beta_0$.' + table, tr: 'OLS sabiti $\\hat\\beta_0$?', opts: nopts(d.b0, [d.yb + d.b1 * d.xb, d.yb, d.b1, d.yb - d.xb], 3), ex: steps + ` $\\hat\\beta_1 = ${f(d.b1, 3)}$. $\\hat\\beta_0 = \\bar Y - \\hat\\beta_1\\bar X = ${f(d.yb, 3)} - ${f(d.b1, 3)}(${f(d.xb, 3)}) = ${f(d.b0, 3)}$.` };
    const i = R(0, d.n - 1), yh = d.b0 + d.b1 * d.xs[i], res = d.ys[i] - yh;
    return { en: `Using the data below, the OLS line is $\\hat Y = ${f(d.b0, 3)} ${d.b1 < 0 ? '-' : '+'} ${f(Math.abs(d.b1), 3)}X$. What is the residual for the observation with $X=${d.xs[i]}$?` + table, tr: `$X=${d.xs[i]}$ gözleminin kalıntısı?`, opts: nopts(res, [-res, yh, d.ys[i] - d.yb], 3), ex: `$\\hat Y = ${f(d.b0, 3)} + (${f(d.b1, 3)})(${d.xs[i]}) = ${f(yh, 3)}$. Kalıntı $= Y - \\hat Y = ${d.ys[i]} - ${f(yh, 3)} = ${f(res, 3)}$.` };
  };

  G.olsMoments = () => {
    const xb = RF(2, 30, 0.5), sx2 = pick([4, 9, 2.25, 16, 25, 6.25]), b1 = RF(-4, 4, 0.25) || 1.5, sxy = +(b1 * sx2).toFixed(3), yb = RF(10, 100, 0.5);
    const b0 = yb - (sxy / sx2) * xb, t = R(0, 2);
    if (t === 0) return { en: `$s_{XY} = ${sxy}$ and $s^2_X = ${sx2}$. What is $\\hat\\beta_1$?`, tr: '$\\hat\\beta_1$?', opts: nopts(sxy / sx2, [sxy / Math.sqrt(sx2), sx2 / sxy, sxy * sx2], 3), ex: `$\\hat\\beta_1 = s_{XY}/s_X^2 = ${sxy}/${sx2} = ${f(sxy / sx2, 3)}$.` };
    if (t === 1) return { en: `$\\bar X = ${xb}$, $\\bar Y = ${yb}$, $s_{XY} = ${sxy}$, $s^2_X = ${sx2}$. What is $\\hat\\beta_0$?`, tr: '$\\hat\\beta_0$?', opts: nopts(b0, [yb + (sxy / sx2) * xb, yb - sxy * xb, yb, xb - (sxy / sx2) * yb], 2), ex: `$\\hat\\beta_1 = ${sxy}/${sx2} = ${f(sxy / sx2, 3)}$. $\\hat\\beta_0 = \\bar Y - \\hat\\beta_1\\bar X = ${yb} - ${f(sxy / sx2, 3)}(${xb}) = ${f(b0, 2)}$.` };
    const r = RF(-0.9, 0.9, 0.05) || 0.5, sX = pick([2, 3, 4, 5]), sY = pick([6, 8, 10, 12, 20]), bb = r * sY / sX;
    return { en: `The sample correlation between $X$ and $Y$ is ${r}, $s_X = ${sX}$ and $s_Y = ${sY}$. What is the OLS slope $\\hat\\beta_1$?`, tr: 'Korelasyondan eğim?', opts: nopts(bb, [r * sX / sY, r, r * sY * sX, r * r * sY / sX], 3), ex: `$\\hat\\beta_1 = r_{XY}\\, s_Y/s_X = ${r}\\times${sY}/${sX} = ${f(bb, 3)}$.` };
  };

  const REG = [
    { y: 'TestScore', x: 'STR', b0: [600, 720], b1: [-4, -1], xr: [14, 26], yu: 'points', xu: 'students per teacher', yt: 'test puanı', xt: 'öğretmen başına öğrenci' },
    { y: 'AWE', x: 'Age', b0: [400, 700], b1: [5, 15], xr: [25, 65], yu: 'dollars per week', xu: 'years', yt: 'haftalık kazanç', xt: 'yaş' },
    { y: 'Wage', x: 'Educ', b0: [-5, 5], b1: [1, 3], xr: [8, 20], yu: 'dollars per hour', xu: 'years of schooling', yt: 'saatlik ücret', xt: 'eğitim yılı' },
    { y: 'Growth', x: 'TradeShare', b0: [0.3, 1.2], b1: [1, 3], xr: [0.2, 1.5], yu: 'percentage points', xu: 'share', yt: 'büyüme', xt: 'ticaret payı', dec: 2 },
    { y: 'Weight', x: 'Height', b0: [-120, -80], b1: [3, 5], xr: [60, 75], yu: 'pounds', xu: 'inches', yt: 'kilo', xt: 'boy' }
  ];
  function regCtx() {
    const c = pick(REG), dec = c.dec || 0;
    const b0 = +RF(c.b0[0], c.b0[1], dec ? 0.01 : 0.1).toFixed(2), b1 = +RF(c.b1[0], c.b1[1], 0.01).toFixed(2);
    return { c, b0, b1, dec };
  }
  const line = (o) => `$\\widehat{${o.c.y}} = ${o.b0} ${o.b1 < 0 ? '-' : '+'} ${Math.abs(o.b1)}\\times ${o.c.x}$`;
  G.regPredict = () => {
    const o = regCtx(), x = o.dec ? +RF(o.c.xr[0], o.c.xr[1], 0.1).toFixed(1) : R(o.c.xr[0], o.c.xr[1]), y = o.b0 + o.b1 * x;
    return { en: `The estimated regression is ${line(o)}. What is the predicted value of ${o.c.y} when ${o.c.x} $= ${x}$?`, tr: `${o.c.xt} $=${x}$ iken tahmini ${o.c.yt}?`, opts: nopts(y, [o.b0 - o.b1 * x, o.b1 * x, o.b0 + o.b1, o.b0 * x + o.b1], 3), ex: `Yerine koy: $${o.b0} + (${o.b1})(${x}) = ${o.b0} ${o.b1 * x < 0 ? '-' : '+'} ${f(Math.abs(o.b1 * x), 3)} = ${f(y, 3)}$.` };
  };
  G.regChange = () => {
    const o = regCtx(), dx = o.dec ? pick([0.1, 0.2, 0.5, -0.3]) : pick([-5, -3, -2, 2, 3, 4, 5, 10]), dy = o.b1 * dx;
    return { en: `The estimated regression is ${line(o)}. If ${o.c.x} changes by $${dx}$, the predicted change in ${o.c.y} is:`, tr: `${o.c.xt} $${dx}$ değişirse tahmini değişim?`, opts: nopts(dy, [o.b0 + o.b1 * dx, o.b1, -dy, o.b0 * dx], 3), ex: `$\\Delta\\hat Y = \\hat\\beta_1\\Delta X = (${o.b1})(${dx}) = ${f(dy, 3)}$. Sabit terim fark alınınca düşer.` };
  };
  G.regMean = () => {
    const o = regCtx(), xb = o.dec ? +RF(o.c.xr[0], o.c.xr[1], 0.01).toFixed(2) : +RF(o.c.xr[0], o.c.xr[1], 0.1).toFixed(1), yb = o.b0 + o.b1 * xb;
    return { en: `The estimated regression is ${line(o)}. The sample average of ${o.c.x} is ${xb}. What is the sample average of ${o.c.y}?`, tr: `Ortalama ${o.c.xt} ${xb} ise ortalama ${o.c.yt}?`, opts: nopts(yb, [o.b0, o.b0 - o.b1 * xb, o.b1 * xb], 3), ex: `OLS doğrusu $(\\bar X, \\bar Y)$'den geçer: $\\bar Y = \\hat\\beta_0 + \\hat\\beta_1\\bar X = ${o.b0} + (${o.b1})(${xb}) = ${f(yb, 3)}$.` };
  };

  G.r2Calc = () => {
    const t = R(0, 2);
    if (t === 0) { const tss = R(200, 5000), ssr = Math.round(tss * RF(0.3, 0.97, 0.01)), r2 = 1 - ssr / tss; return { en: `A regression has $TSS = ${tss}$ and $SSR = ${ssr}$. What is $R^2$?`, tr: '$R^2$ kaçtır?', opts: popts(r2, [ssr / tss, 1 - tss / (tss + ssr), (tss - ssr) / ssr], 3), ex: `$R^2 = 1 - SSR/TSS = 1 - ${ssr}/${tss} = ${f(r2, 3)}$.` }; }
    if (t === 1) { const tss = R(200, 5000), ess = Math.round(tss * RF(0.03, 0.7, 0.01)), r2 = ess / tss; return { en: `A regression has $ESS = ${ess}$ and $TSS = ${tss}$. What is $R^2$?`, tr: '$R^2$ kaçtır?', opts: popts(r2, [1 - r2, ess / (tss + ess), Math.sqrt(r2)], 3), ex: `$R^2 = ESS/TSS = ${ess}/${tss} = ${f(r2, 3)}$.` }; }
    const r = RF(-0.9, 0.9, 0.05) || 0.3;
    return { en: `In a simple regression, the sample correlation between $X$ and $Y$ is ${r}. What is the $R^2$?`, tr: `$r=${r}$ ise $R^2$?`, opts: popts(r * r, [Math.abs(r), Math.sqrt(Math.abs(r)), 1 - r * r], 4), ex: `Tek regresörlü modelde $R^2 = r^2 = (${r})^2 = ${f(r * r, 4)}$.` };
  };
  G.serCalc = () => {
    const n = pick([22, 52, 102, 202, 420, 65]), ser0 = RF(2, 30, 0.5), ssr = Math.round(ser0 * ser0 * (n - 2)), ser = Math.sqrt(ssr / (n - 2));
    return { en: `A regression with $n=${n}$ observations has $SSR = ${ssr}$. What is the SER?`, tr: 'SER kaçtır?', opts: nopts(ser, [Math.sqrt(ssr / n), ssr / (n - 2), Math.sqrt(ssr / (n - 1)) + 0.2, Math.sqrt(ssr) / (n - 2)], 3, { min: 0 }), ex: `$SER = \\sqrt{SSR/(n-2)} = \\sqrt{${ssr}/${n - 2}} = ${f(ser, 3)}$. Payda $n-2$, karekök almayı unutma.` };
  };
  G.sdYfromR2 = () => {
    const n = pick([50, 100, 200, 420]), r2 = RF(0.02, 0.6, 0.01), ser = RF(2, 40, 0.5);
    const sy = Math.sqrt((n - 2) / (n - 1) * ser * ser / (1 - r2));
    return { en: `A regression with $n=${n}$ has $R^2=${r2}$ and $SER=${ser}$. What is the sample standard deviation of $Y$?`, tr: '$s_Y$ kaçtır?', opts: nopts(sy, [ser, ser / (1 - r2), Math.sqrt(ser * ser * (1 - r2)), (n - 2) / (n - 1) * ser * ser / (1 - r2)], 3, { min: 0 }), ex: `$SSR = (n-2)SER^2$, $TSS = SSR/(1-R^2)$, $s_Y = \\sqrt{TSS/(n-1)}$. Birleştirince $s_Y = \\sqrt{\\frac{${n - 2}}{${n - 1}}\\cdot\\frac{${ser}^2}{1-${r2}}} = ${f(sy, 3)}$ (PS5 Soru 2d).` };
  };
  G.seScale = () => {
    const k = pick([4, 9, 16, 100]), se = RF(0.2, 3, 0.05), n = pick([100, 200, 500]);
    return { en: `With $n=${n}$, $SE(\\hat\\beta_1) = ${se}$. Holding everything else fixed, approximately what would $SE(\\hat\\beta_1)$ be with $n=${n * k}$?`, tr: `Örneklem ${k} katına çıkarsa SE ne olur?`, opts: nopts(se / Math.sqrt(k), [se / k, se, se * Math.sqrt(k)], 3, { min: 0 }), ex: `Varyans $1/n$ ile orantılı, SE ise $1/\\sqrt n$ ile. $n$ ${k} katına çıkınca SE $1/\\sqrt{${k}} = 1/${Math.sqrt(k)}$ katına iner: $${se}/${Math.sqrt(k)} = ${f(se / Math.sqrt(k), 3)}$.` };
  };

  /* ---------- Ünite 6 ---------- */
  G.regT = () => {
    const se = RF(0.1, 2.5, 0.01), c = pick([0, 0, 0, 1, -1]), tt = pick([-3.2, -2.5, -2.05, -1.8, -1.2, 0.9, 1.4, 1.75, 2.2, 2.9, 4.1]);
    const b = +(c + tt * se).toFixed(2), t = (b - c) / se, k = R(0, 2);
    if (k === 0) return { en: `$\\hat\\beta_1 = ${b}$ with $SE(\\hat\\beta_1) = ${se}$. What is the $t$-statistic for $H_0:\\beta_1 = ${c}$?`, tr: `$H_0:\\beta_1=${c}$ için t?`, opts: nopts(t, [b / se, (b - c) / (se * se), (c - b) / se, b - c], 2), ex: `$t = (\\hat\\beta_1 - ${c})/SE = (${b} ${c < 0 ? '+ 1' : c > 0 ? '- 1' : '- 0'})/${se} = ${f(t, 2)}$.` };
    if (k === 1) { const a = pick([0.10, 0.05, 0.01]), cv = { 0.1: 1.645, 0.05: 1.96, 0.01: 2.576 }[a], rej = Math.abs(t) > cv; return { en: `$\\hat\\beta_1 = ${b}$, $SE(\\hat\\beta_1) = ${se}$. Test $H_0:\\beta_1 = ${c}$ vs. $H_1:\\beta_1\\ne${c}$ at the ${a * 100}% level.`, tr: `%${a * 100} düzeyinde iki yönlü test kararı?`, opts: rej ? [`Reject $H_0$ ($|t| = ${f(Math.abs(t), 2)} > ${cv}$)`, `Do not reject $H_0$ ($|t| = ${f(Math.abs(t), 2)} < ${cv}$)`, `Reject $H_0$ because $\\hat\\beta_1\\ne0$`, `Do not reject $H_0$ because $t$ is ${t < 0 ? 'negative' : 'positive'}`] : [`Do not reject $H_0$ ($|t| = ${f(Math.abs(t), 2)} < ${cv}$)`, `Reject $H_0$ ($|t| = ${f(Math.abs(t), 2)} > ${cv}$)`, `Reject $H_0$ because $\\hat\\beta_1\\ne${c}$`, `Accept $H_1$ because $SE<1$`], ex: `$t = (${b}-(${c}))/${se} = ${f(t, 2)}$. Kritik değer ${cv}. ${rej ? 'Reddet.' : 'Reddedemeyiz.'}` }; }
    const p = 2 * Phi(-Math.abs(t));
    return { en: `$\\hat\\beta_1 = ${b}$, $SE(\\hat\\beta_1) = ${se}$. The two-sided p-value for $H_0:\\beta_1=${c}$ is approximately:`, tr: 'İki yönlü p-değeri?', opts: popts(p, [p / 2, 1 - p, Phi(Math.abs(t))], 4), ex: `$t = ${f(t, 2)}$, $p = 2\\Phi(-${f(Math.abs(t), 2)}) = ${f(p, 4)}$.` };
  };

  G.regOutput = () => {
    const o = regCtx(), sb1 = +Math.abs(o.b1 * RF(0.15, 0.8, 0.01)).toFixed(3), sb0 = +(Math.abs(o.b0) * RF(0.02, 0.2, 0.01) + 0.5).toFixed(3);
    const t1 = o.b1 / sb1, t0 = o.b0 / sb0, p1 = 2 * Phi(-Math.abs(t1)), n = R(60, 500), r2 = RF(0.01, 0.4, 0.001), ser = RF(1, 40, 0.01);
    const fp = (p) => p < 2e-16 ? '< 2e-16' : p < 0.001 ? p.toExponential(2) : f(p, 4);
    const pad = (s, w) => (s + '').padStart(w);
    const out = `\n~~~\n            Estimate Std. Error t value Pr(>|t|)\n(Intercept) ${pad(f(o.b0, 3), 8)} ${pad(f(sb0, 3), 10)} ${pad(f(t0, 3), 7)} ${pad(fp(2 * Phi(-Math.abs(t0))), 9)}\n${o.c.x.toLowerCase().padEnd(11)} ${pad(f(o.b1, 3), 8)} ${pad(f(sb1, 3), 10)} ${pad(f(t1, 3), 7)} ${pad(fp(p1), 9)}\nResidual standard error: ${f(ser, 2)} on ${n - 2} degrees of freedom\nMultiple R-squared: ${f(r2, 4)}\n~~~\n`;
    const k = R(0, 2), h = `R output for the regression of ${o.c.y} on ${o.c.x}:` + out;
    if (k === 0) { const lo = o.b1 - 1.96 * sb1, hi = o.b1 + 1.96 * sb1; return { en: h + `The 95% confidence interval for the slope is:`, tr: 'Eğim için %95 GA?', opts: [ivm(lo, hi, 3), ivm(o.b1 - 1.645 * sb1, o.b1 + 1.645 * sb1, 3), ivm(o.b1 - 1.96 * sb0, o.b1 + 1.96 * sb0, 3), ivm(o.b1 - sb1, o.b1 + sb1, 3)], ex: `$${f(o.b1, 3)}\\pm1.96\\times${f(sb1, 3)} = ${iv(lo, hi, 3)}$. Eğimin SE'sini kullan, sabitinkini değil.` }; }
    if (k === 1) { const sig = p1 < 0.05; return { en: h + `At the 5% level, is the slope coefficient statistically significant?`, tr: 'Eğim %5\'te anlamlı mı?', opts: sig ? [`Yes, $|t| = ${f(Math.abs(t1), 2)} > 1.96$ (p $< 0.05$)`, `No, $|t| < 1.96$`, `No, because $R^2$ is small`, `Yes, because the intercept is significant`] : [`No, $|t| = ${f(Math.abs(t1), 2)} < 1.96$ (p $> 0.05$)`, `Yes, $|t| > 1.96$`, `Yes, because the intercept is significant`, `Yes, because $n$ is large`], ex: `Eğim satırında $t = ${f(t1, 3)}$, $p = ${fp(p1)}$. ${sig ? 'p < 0.05, yani anlamlı.' : 'p > 0.05, yani %5\'te anlamlı değil.'} $R^2$'nin küçük olması anlamlılığı belirlemez.` }; }
    return { en: h + `What fraction of the sample variance of ${o.c.y} is explained by ${o.c.x}?`, tr: 'Açıklanan varyans oranı?', opts: [`${f(r2 * 100, 2)}%`, `${f(Math.sqrt(r2) * 100, 2)}%`, `${f(ser, 2)}%`, `${f((1 - r2) * 100, 2)}%`], ex: `Bunu $R^2$ gösterir: ${f(r2, 4)}, yani %${f(r2 * 100, 2)}. Residual standard error SER'dir, oran değil.` };
  };

  G.regCI = () => {
    const se = RF(0.1, 2, 0.01), b = +RF(-5, 5, 0.01).toFixed(2), L = pick([[90, 1.645], [95, 1.96], [99, 2.576]]);
    const oth = [[90, 1.645], [95, 1.96], [99, 2.576]].filter(x => x[0] !== L[0]);
    return { en: `$\\hat\\beta_1 = ${b}$ and $SE(\\hat\\beta_1) = ${se}$. The ${L[0]}% confidence interval for $\\beta_1$ is:`, tr: `%${L[0]} GA?`, opts: [ivm(b - L[1] * se, b + L[1] * se, 3), ivm(b - oth[0][1] * se, b + oth[0][1] * se, 3), ivm(b - oth[1][1] * se, b + oth[1][1] * se, 3), ivm(b - L[1] * se * se, b + L[1] * se * se, 3)], ex: `$${b}\\pm${L[1]}\\times${se} = ${b}\\pm${f(L[1] * se, 3)}$, yani $${iv(b - L[1] * se, b + L[1] * se, 3)}$.${(b - L[1] * se) * (b + L[1] * se) > 0 ? ' 0 aralıkta değil, yani bu düzeyde anlamlı.' : ' 0 aralıkta, yani bu düzeyde anlamlı değil.'}` };
  };
  G.regCIdx = () => {
    const se = RF(0.2, 1.5, 0.01), b = +RF(-4, 4, 0.01).toFixed(2) || -2.28, dx = pick([-3, -2, 2, 3, 5, -5]);
    const lo = (b - 1.96 * se) * dx, hi = (b + 1.96 * se) * dx, A = Math.min(lo, hi), B = Math.max(lo, hi);
    return { en: `$\\hat\\beta_1 = ${b}$, $SE(\\hat\\beta_1) = ${se}$. What is the 95% confidence interval for the effect on $Y$ of changing $X$ by $\\Delta x = ${dx}$?`, tr: `$\\Delta x = ${dx}$ etkisi için %95 GA?`, opts: [ivm(A, B, 3), ivm(b - 1.96 * se, b + 1.96 * se, 3), ivm(b * dx - 1.96 * se, b * dx + 1.96 * se, 3), ivm(-B, -A, 3)], ex: `$\\beta_1$ için GA: $${iv(b - 1.96 * se, b + 1.96 * se, 3)}$. Uçları $${dx}$ ile çarp: $(${b}-1.96\\times${se})\\times(${dx}) = ${f(lo, 3)}$ ve $(${b}+1.96\\times${se})\\times(${dx}) = ${f(hi, 3)}$.${dx < 0 ? ' Negatif sayıyla çarpınca uçlar yer değiştirir: ' : ' '}$${iv(A, B, 3)}$.` };
  };
  G.dummyReg = () => {
    const ctx = pick([['Earnings', 'Female', 'female', 'kadın'], ['TestScore', 'SmallClass', 'a small class', 'küçük sınıf'], ['Wage', 'Union', 'a union member', 'sendikalı'], ['Price', 'Garage', 'a house with a garage', 'garajlı ev']]);
    const b0 = +RF(10, 700, 0.01).toFixed(2), b1 = +RF(-15, 15, 0.01).toFixed(2), t = R(0, 2);
    const h = `$\\widehat{${ctx[0]}} = ${b0} ${b1 < 0 ? '-' : '+'} ${Math.abs(b1)}\\times ${ctx[1]}$, where ${ctx[1]} $=1$ for ${ctx[2]} and $0$ otherwise.`;
    if (t === 0) return { en: h + ` The estimated mean of ${ctx[0]} when ${ctx[1]} $=1$ is:`, tr: `${ctx[3]} grubunun ortalaması?`, opts: nopts(b0 + b1, [b0, b1, b0 - b1], 2), ex: `$D=1$: $\\hat\\beta_0+\\hat\\beta_1 = ${b0} + (${b1}) = ${f(b0 + b1, 2)}$.` };
    if (t === 1) return { en: h + ` The estimated mean of ${ctx[0]} when ${ctx[1]} $=0$ is:`, tr: `Diğer grubun (D=0) ortalaması?`, opts: nopts(b0, [b0 + b1, b1, b0 - b1], 2), ex: `$D=0$: sadece $\\hat\\beta_0 = ${b0}$.` };
    return { en: h + ` The coefficient ${b1} is best interpreted as:`, tr: 'Katsayının yorumu?', opts: [`the difference in mean ${ctx[0]} between the ${ctx[1]}$=1$ and ${ctx[1]}$=0$ groups`, `the slope of ${ctx[0]} with respect to a continuous ${ctx[1]}`, `the mean of ${ctx[0]} in the ${ctx[1]}$=0$ group`, `the probability that ${ctx[1]}$=1$`], ex: `Kukla regresörde $\\beta_1 = E(Y\\mid D=1) - E(Y\\mid D=0)$, yani iki grubun ortalama farkı.` };
  };
  G.homoVar = () => {
    const su = pick([4, 9, 16, 25, 100]), sx = pick([1, 2, 4, 5, 10]), n = pick([100, 200, 400, 500]);
    const v = su / (n * sx), t = R(0, 1);
    if (t === 0) return { en: `Under homoskedasticity, $\\sigma^2_u = ${su}$, $\\sigma^2_X = ${sx}$ and $n = ${n}$. What is $\\text{var}(\\hat\\beta_1)$?`, tr: 'Homoskedastisite altında $\\text{var}(\\hat\\beta_1)$?', opts: nopts(v, [sx / (n * su), su / sx, su / (n * sx * sx), Math.sqrt(v)], 5, { min: 0 }), ex: `$\\sigma^2_{\\hat\\beta_1} = \\sigma^2_u/(n\\sigma^2_X) = ${su}/(${n}\\times${sx}) = ${f(v, 5)}$.` };
    return { en: `Under homoskedasticity, $\\sigma^2_u = ${su}$, $\\sigma^2_X = ${sx}$ and $n = ${n}$. What is the standard deviation of $\\hat\\beta_1$?`, tr: '$\\hat\\beta_1$\'in standart sapması?', opts: nopts(Math.sqrt(v), [v, Math.sqrt(su / sx), Math.sqrt(sx / (n * su))], 4, { min: 0 }), ex: `$\\text{var} = ${su}/(${n}\\times${sx}) = ${f(v, 5)}$, karekökü $\\sqrt{${su}/(${n}\\times${sx})} = ${f(Math.sqrt(v), 4)}$.` };
  };

  root.GENS = G;
})(typeof window !== 'undefined' ? window : globalThis);

/* Üretilen soruların açıklamalarını zenginleştir: doğru cevap + yöntem + sık hatalar.
   Sayısal ara adımlar üreticinin kendi açıklamasında; burada soru türüne özel yöntem ve tuzaklar eklenir. */
(function (root) {
  const T = String.raw;
  const has = (q, re) => re.test(q.en);
  const G = {
    sumLinear: (q) => ({
      how: T`Toplamı terimlere dağıt. Sabitin toplamı $n$ ile çarpılır ($\sum a = na$), sabit çarpan dışarı çıkar ($\sum bX_i = b\sum X_i$). Ortalama verilmişse önce $\sum X_i = n\bar X$ yaz.`,
      traps: [T`Sabitin toplamını $n$ ile çarpmamak: $\sum a$'yı $a$ sanmak.`, T`Ortalama verilince $\sum X_i = n\bar X$ dönüşümünü unutmak.`, T`Katsayıları birbiriyle çarpmak ya da toplamak; her terim ayrı ayrı toplanır.`]
    }),
    sumSquares: (q) => has(q, /bar X/) ? ({
      how: T`Önce $\bar X = \sum X_i/n$. Sonra ya her sapmanın karesini alıp topla, ya da kısayolu kullan: $\sum (X_i-\bar X)^2 = \sum X_i^2 - n\bar X^2$.`,
      traps: [T`Sapmaların toplamı 0'dır ama karelerinin toplamı 0 değildir.`, T`$n-1$'e bölmek: bu örneklem varyansını verir, soru sadece toplamı istiyor.`, T`Kısayolda $n\bar X^2$ yerine sadece $\bar X^2$ çıkarmak.`]
    }) : ({
      how: has(q, /left\(/) ? T`$\left(\sum X_i\right)^2$: önce bütün sayıları topla, sonra sonucun karesini al.` : T`$\sum X_i^2$: önce her sayının karesini al, sonra topla.`,
      traps: [T`$\sum X_i^2$ ile $\left(\sum X_i\right)^2$'yi karıştırmak: işlem sırası farklı, sonuçlar farklı.`, T`Negatif sayının karesinde işaret: (−3)² = 9, −9 değil. Hesap makinesinde parantez kullan.`]
    }),
    dotProduct: () => ({
      how: T`$a'b = a_1b_1 + a_2b_2 + a_3b_3$: aynı sıradaki elemanları çarp, çarpımları topla. Boyut $(1\times 3)(3\times 1) = 1\times 1$, sonuç tek bir sayı.`,
      traps: [T`Negatif elemanlarda işaret hatası: (−2)·(−3) = +6.`, T`$a'a$ (kendi karelerinin toplamı) ile $a'b$'yi karıştırmak.`, T`Bütün elemanları toplamak: iç çarpım, çarpımların toplamıdır.`]
    }),
    matDim: () => ({
      how: T`Boyutları yan yana yaz: $(m\times n)(n\times p)$. İçteki iki sayı eşitse çarpım tanımlı, sonuç dıştaki iki sayı: $m\times p$. Transpoz boyutu ters çevirir: $m\times n \to n\times m$.`,
      traps: [T`İçteki ve dıştaki sayıları karıştırmak.`, T`$A'A$ ile $AA'$'yı karıştırmak: $A$ $m\times n$ ise $A'A$ $n\times n$, $AA'$ $m\times m$.`, T`Uyumsuz boyutlarda (içtekiler farklı) çarpımı tanımlı sanmak.`]
    }),
    matEntry: () => ({
      how: T`$(i,j)$ elemanı = $A$'nın $i$. satırı ile $B$'nin $j$. sütununun iç çarpımı. Bütün matrisi hesaplama, sadece o satır ve sütunu çarp.`,
      traps: [T`$BA$'nın elemanını hesaplamak: matris çarpımında sıra önemli, $AB\ne BA$.`, T`Eleman eleman çarpmak ($a_{ij}b_{ij}$): matris çarpımı böyle yapılmaz.`, T`Satır ve sütun indekslerini karıştırmak.`]
    }),
    det2: () => ({
      how: T`$2\times 2$ determinant: ana köşegen çarpımı eksi ters köşegen çarpımı, $a_{11}a_{22} - a_{12}a_{21}$.`,
      traps: [T`Çıkarma yerine toplama.`, T`Sırayı ters çevirmek ($a_{12}a_{21} - a_{11}a_{22}$): sonucun işareti değişir.`, T`Negatif elemanlarda işaret: −(−2)·3 = +6.`],
      tip: T`Determinant 0 çıkarsa matris tekildir, tersi yoktur.`
    }),
    inv2: () => ({
      how: T`1. Determinantı bul. 2. Köşegendeki iki elemanın yerini değiştir. 3. Köşegen dışındaki iki elemanın işaretini çevir. 4. Hepsini determinanta böl.`,
      traps: [T`İşaret çevirmeyi unutmak.`, T`Determinanta bölmek yerine çarpmak.`, T`Köşegenleri değiştirmeyi unutup orijinal elemanı determinanta bölmek.`]
    }),
    olsSums: () => ({
      how: T`Toplamlarla eğim: $\hat\beta_1 = \dfrac{n\sum X_iY_i - \sum X_i\sum Y_i}{n\sum X_i^2 - (\sum X_i)^2}$. Pay ve paydadaki $n$ çarpanlarına dikkat.`,
      traps: [T`$\sum X_iY_i/\sum X_i^2$ kullanmak: ortalamadan sapma alınmamış, yanlış.`, T`Paydada $(\sum X_i)^2$ yerine $\sum X_i^2$ yazmak.`, T`Paydaki ya da paydadaki $n$'yi unutmak.`]
    }),
    dataType: () => ({ tip: T`Sadece iki soru: kaç birim, kaç dönem? İkisi de çoksa panel.` }),
    cdfTable: (q) => ({
      how: has(q, /\\ge/) ? T`$P(Y\ge k) = 1 - P(Y\le k-1)$: $k$ dahil, bu yüzden $k-1$'e kadar olanları 1'den çıkar.` : has(q, /\\le/) ? T`$P(Y\le k)$: $Y=0$'dan $Y=k$'ye kadar (dahil) olasılıkları topla.` : T`$P(Y>k) = 1 - P(Y\le k)$: $k$ dahil değil, $k$'ye kadar olanları 1'den çıkar.`,
      traps: [T`$<$ ile $\le$'yi karıştırmak: kesikli değişkende sınır değerin dahil olup olmadığı sonucu değiştirir.`, T`Tümleyeni yanlış almak: $P(Y\ge k) = 1-P(Y\le k-1)$, $1-P(Y\le k)$ değil.`, T`Sadece $P(Y=k)$'yi almak.`]
    }),
    twoCoins: (q) => ({
      how: T`Atışlar bağımsız, olasılıklar çarpılır. Bir tura iki farklı sırayla gelir (HT ve TH), bu yüzden $P(Y=1) = 2p(1-p)$. Kısayol (binom, $n=2$): $E(Y) = np$, $\text{var}(Y) = np(1-p)$.`,
      traps: [T`$P(Y=1)$'de 2 ile çarpmayı unutmak.`, T`Tek paranın değerlerini ($p$ ya da $p(1-p)$) iki para için cevap vermek.`, T`$P(Y=0)$ için $1-p$ yazmak; iki yazı gerekir: $(1-p)^2$.`]
    }),
    meanVar: (q) => ({
      how: T`$E(Y) = \sum y\,P(Y=y)$: her değeri olasılığıyla çarp, topla. $E(Y^2) = \sum y^2P(Y=y)$. Varyans: $E(Y^2) - [E(Y)]^2$.`,
      traps: [T`Değerlerin düz ortalamasını almak; olasılıklar hesaba katılmalı.`, T`$E(Y^2)$ ile $[E(Y)]^2$'yi karıştırmak.`, T`Varyans istenirken $E(Y^2)$'yi ya da standart sapmayı vermek.`]
    }),
    bernoulli: (q) => has(q, /kurtosis/) ? ({
      how: T`Bernoulli basıklığı kısayolu: $\dfrac{1}{p(1-p)} - 3$.`,
      traps: [T`3'ü çıkarmayı unutmak, yani sadece $\frac{1}{p(1-p)}$ vermek.`, T`Normalin basıklığı 3'ü cevap sanmak.`]
    }) : has(q, /skewness/) ? ({
      how: T`Bernoulli çarpıklığı: $\dfrac{1-2p}{\sqrt{p(1-p)}}$. $p > 0.5$ ise 1'ler çoğunlukta, az sayıdaki 0 sol kuyruk oluşturur, çarpıklık negatif. $p < 0.5$ ise pozitif.`,
      traps: [T`İşareti ters almak: kuyruk hangi taraftaysa işaret o.`, T`Paydada karekök almamak, yani $p(1-p)$'ye bölmek.`]
    }) : has(q, /E\(X\^/) ? ({
      how: T`$X$ sadece 0 ve 1 alır; $1^k = 1$ ve $0^k = 0$. Bu yüzden her $k\ge 1$ için $E(X^k) = 1\cdot p + 0\cdot(1-p) = p$.`,
      traps: [T`Üssü olasılığa uygulamak: $E(X^k) = p^k$ değil.`, T`Varyansla karıştırmak.`]
    }) : ({
      how: T`Bernoulli varyansı: $\text{var}(X) = p(1-p)$. Çünkü $E(X^2) = p$ ve $\text{var} = p - p^2$.`,
      traps: [T`$p^2$ vermek; varyans $p - p^2$.`, T`Ortalamayı ($p$) ya da $1-p$'yi vermek.`, T`Karekök almak (bu standart sapma).`]
    }),
    joint: (q) => has(q, /independent/) ? ({
      how: T`Bağımsızlık: her hücrede ortak olasılık = iki marjinalin çarpımı. Bir hücrede bile tutmazsa bağımlıdır.`,
      traps: [T`Olasılıkların pozitif olmasını ya da birinin diğerinden büyük olmasını bağımsızlık kanıtı sanmak.`, T`Marjinali yanlış toplamak (satır yerine sütun).`]
    }) : has(q, /mid|Given/) ? ({
      how: T`Koşullu olasılık = ortak hücre ÷ koşulun marjinali. "|" işaretinin sağındaki (verilen) değişken koşuldur; payda onun satır ya da sütun toplamı.`,
      traps: [T`Bölmeyi unutup ortak olasılıkla yetinmek.`, T`Yanlış marjinale bölmek: koşulun yönünü karıştırmak.`, T`Marjinal olasılığı koşullu sanmak.`]
    }) : ({
      how: T`Marjinal olasılık = istenen değerin satırındaki (ya da sütunundaki) bütün hücrelerin toplamı.`,
      traps: [T`Tek bir hücreyi (ortak olasılığı) marjinal sanmak.`, T`Satır yerine sütun toplamını almak.`]
    }),
    condExp: (q) => has(q, /iterated/) ? ({
      how: T`LIE: $E(Y) = E(Y\mid X=0)P(X=0) + E(Y\mid X=1)P(X=1)$. Koşullu ortalamalar $X$'in olasılıklarıyla ağırlıklandırılır.`,
      traps: [T`Koşullu ortalamaların düz ortalamasını almak (ağırlıksız).`, T`Tek bir koşullu ortalamayı genel ortalama sanmak.`]
    }) : has(q, /text\{var\}/) ? ({
      how: T`$Y$ 0/1 olduğu için koşullu dağılım Bernoulli: önce $p = P(Y=1\mid X=x)$, sonra $\text{var} = p(1-p)$.`,
      traps: [T`Koşulsuz $P(Y=1)$'i kullanmak.`, T`$p(1-p)$ yerine $p$ ya da $p^2$ vermek.`]
    }) : ({
      how: T`$Y$ 0/1 ise $E(Y\mid X=x) = P(Y=1\mid X=x)$ = ortak hücre ÷ $P(X=x)$.`,
      traps: [T`Ortak olasılığı koşullu beklenti sanmak (bölmeyi unutmak).`, T`Diğer $X$ değerinin koşullu ortalamasını vermek.`]
    }),
    linComb: () => ({
      how: T`Beklenti doğrusal: $E(a+bX+cY) = a + bE(X) + cE(Y)$. Varyansta sabit kaybolur, katsayılar karesiyle çıkar ve $2bc\,\text{cov}$ eklenir. Kovaryansta sabit kaybolur, katsayı karesiz çıkar.`,
      traps: [T`Varyansa ya da kovaryansa sabiti eklemek.`, T`Varyansta katsayının karesini almamak.`, T`$2bc\,\text{cov}(X,Y)$ terimini unutmak ya da negatif katsayılarda işaretini yanlış almak.`]
    }),
    corrCalc: () => ({
      how: T`$\text{corr} = \text{cov}/(\sigma_X\sigma_Y)$; standart sapma = varyansın karekökü.`,
      traps: [T`Varyansların çarpımına bölmek.`, T`Sadece bir standart sapmaya bölmek.`, T`Sonuç $[-1, 1]$ dışında çıktıysa bir hata yaptın.`]
    }),
    normalProb: (q) => ({
      how: T`1. $\sigma = \sqrt{\text{varyans}}$. 2. $z = (c-\mu)/\sigma$. 3. $\le$ için $\Phi(z)$, $>$ için $1-\Phi(z)$, aralık için $\Phi(z_2)-\Phi(z_1)$. Negatif $z$: $\Phi(-z) = 1-\Phi(z)$.`,
      traps: [T`$N(\mu, \sigma^2)$'deki ikinci sayıyı (varyansı) standart sapma gibi kullanmak.`, T`Sağ kuyrukta $1-\Phi$ almayı unutmak.`, T`Aralıkta iki $\Phi$'yi toplamak ya da sadece birini almak.`],
      tip: T`Küçük bir çan çiz ve istenen alanı tara; işaret hatalarını önler.`
    }),
    chiF: (q) => has(q, /chi\^2_1/) && !has(q, /F_/) && has(q, /\\le/) ? ({
      how: T`$\chi^2_1 = Z^2$. $P(Z^2\le c^2) = P(-c\le Z\le c) = 2\Phi(c) - 1$.`,
      traps: [T`Sadece $\Phi(c)$ almak: $Z^2\le c^2$ hem pozitif hem negatif tarafı kapsar.`, T`Tümleyeni ($1 - $ olasılık) vermek.`]
    }) : ({
      how: T`Ki-kare ve F tabloları **üst kuyruk** verir: serbestlik derecesi satırında kritik değeri bul, sütun başlığı $P(W > c)$'dir. $F_{m,\infty} = \chi^2_m/m$, yani $P(F > c) = P(\chi^2_m > mc)$.`,
      traps: [T`Üst kuyrukla alt kuyruğu karıştırmak (0.05 yerine 0.95).`, T`F'de $m$ ile çarpmayı unutmak.`]
    }),
    chiMoments: () => ({
      how: T`$\chi^2_m$ = $m$ bağımsız standart normalin karelerinin toplamı. $E = m$, $\text{var} = 2m$. Sabitle bölmek varyansı karesiyle böler: $\text{var}(W/m) = 2m/m^2$.`,
      traps: [T`Ortalama ile varyansı yer değiştirmek.`, T`Karesiz toplamı ($N(0,m)$) ki-kare sanmak.`, T`$\text{var}(W/m)$'de $m^2$ yerine $m$'ye bölmek.`]
    }),
    ybarVar: () => ({
      how: T`$\text{var}(\bar Y) = \sigma^2/n$ ve $\text{sd}(\bar Y) = \sigma/\sqrt n = \sqrt{\sigma^2/n}$.`,
      traps: [T`Varyans istenirken standart sapma vermek (ya da tersi).`, T`Varyansta $n$ yerine $\sqrt n$'ye bölmek.`, T`Tek gözlemin varyansını ($\sigma^2$) vermek.`]
    }),
    ybarProb: () => ({
      how: T`$\bar Y\sim N(\mu, \sigma^2/n)$. 1. sd$(\bar Y) = \sqrt{\sigma^2/n}$. 2. Sınırı standartlaştır. 3. Simetrik aralık: $2\Phi(z) - 1$.`,
      traps: [T`$\sqrt n$'ye bölmeyi unutup tek gözlemin sd'sini kullanmak.`, T`$\sigma^2/n$'yi (varyansı) sd sanmak.`, T`Simetrik aralıkta sadece $\Phi(z)$ almak.`]
    }),
    cltProb: () => ({
      how: T`MLT: $Y$ normal olmasa bile $\bar Y\approx N(\mu, \sigma^2/n)$. sd$(\bar Y) = \sqrt{\sigma^2/n}$; sonra standartlaştır ve $\Phi$ kullan.`,
      traps: [T`$\sigma$'yı $\sqrt n$'ye bölmeden kullanmak.`, T`$\sigma^2/n$'nin karekökünü almamak.`, T`Yön: $\bar Y < c$ için $\Phi(z)$, $\bar Y > c$ için $1-\Phi(z)$.`]
    }),
    cltBern: () => ({
      how: T`Bernoulli: $\mu = p$, $\sigma^2 = p(1-p)$. MLT: sd$(\bar Y) = \sqrt{p(1-p)/n}$. Sonra $z = (c - p)/\text{sd}$.`,
      traps: [T`$n$'ye bölmeyi unutmak (tek gözlemin sd'si).`, T`$p(1-p)/n$'nin karekökünü almamak.`, T`$\ge$ için $1-\Phi$, $\le$ için $\Phi$.`]
    }),
    cltCount: () => ({
      how: T`Sayım $S$ (başarı sayısı): $E(S) = np$, $\text{var}(S) = np(1-p)$, sd = karekök. MLT ile $S$ yaklaşık normal; standartlaştır.`,
      traps: [T`Varyansı ($np(1-p)$) sd gibi kullanmak.`, T`Tek denemenin sd'sini ($\sqrt{p(1-p)}$) kullanmak.`, T`$P(S > k)$ için $1-\Phi$ almayı unutmak.`]
    }),
    sampleCorr: () => ({
      how: T`$r_{XY} = s_{XY}/(s_Xs_Y)$. Varyanslar verilmişse önce karekök al.`,
      traps: [T`Varyanslara bölmek.`, T`Sadece bir standart sapmaya bölmek.`]
    }),
    estimator: (q) => ({
      how: T`$\hat\mu = w_1Y_1 + w_2Y_2$ için: $E(\hat\mu) = (w_1+w_2)\mu$ ve $\text{var}(\hat\mu) = (w_1^2+w_2^2)\sigma^2$. Ağırlıkların toplamı 1 ise yansız.`,
      traps: [T`Yansızlık için eşit ağırlık şart sanmak; sadece toplam 1 olmalı.`, T`Varyansta ağırlıkların karesini almamak.`, T`Ağırlık toplamının karesini almak.`]
    }),
    hypSetup: () => ({
      how: T`Eşitlik her zaman $H_0$'da. "Farklı mı" → $\ne$ (iki yönlü). "Büyük mü, aşıyor mu, artırıyor mu" → $>$. "Küçük mü, düşmüş mü" → $<$.`,
      traps: [T`Eşitliği $H_1$'e koymak.`, T`Tek yönlü soruda $\ne$ seçmek ya da yönü ters almak.`]
    }),
    tMean: (q) => ({
      how: T`1. $SE = s_Y/\sqrt n$. 2. $t = (\bar Y - \mu_0)/SE$. 3. İki yönlü: $p = 2\Phi(-|t|)$; karar için $|t|$'yi kritik değerle (%10: 1.645, %5: 1.96, %1: 2.576) karşılaştır.`,
      traps: [T`SE yerine $s_Y$'ye bölmek.`, T`$\sqrt n$ yerine $n$'ye bölmek.`, T`İki yönlü p'yi 2 ile çarpmamak.`]
    }),
    pValue: () => ({
      how: T`İki yönlü ($\ne$): $2\Phi(-|t|)$. Sağ ($>$): $1-\Phi(t)$. Sol ($<$): $\Phi(t)$.`,
      traps: [T`Yönü karıştırmak.`, T`İki yönlüde 2 ile çarpmayı unutmak.`, T`Tek yönlüde $t$'nin işaretini yok saymak: yanlış yönde bir $t$ büyük p verir.`]
    }),
    ciMean: () => ({
      how: T`1. $SE = s_Y/\sqrt n$. 2. Kritik değer: %90 1.645, %95 1.96, %99 2.576. 3. $\bar Y \pm$ kritik değer $\times SE$.`,
      traps: [T`SE yerine $s_Y$ kullanmak: çok geniş aralık.`, T`$\sqrt n$ yerine $n$'ye bölmek: çok dar aralık.`, T`Yanlış güven düzeyinin kritik değerini kullanmak.`]
    }),
    ciProp: () => ({
      how: T`$\hat p = k/n$, $SE = \sqrt{\hat p(1-\hat p)/n}$, %95 GA: $\hat p \pm 1.96\,SE$.`,
      traps: [T`Karekök almamak (varyansla aralık kurmak).`, T`$n$'ye bölmeyi unutmak.`, T`%95 yerine %99 kritik değerini (2.576) kullanmak.`]
    }),
    ciTest: () => ({
      how: T`%95 GA = %5 düzeyinde iki yönlü testte reddedilemeyen değerlerin kümesi. $H_0$ değeri içerideyse reddetme, dışarıdaysa reddet.`,
      traps: [T`Kararı ters vermek.`, T`$H_0$ değeri yerine 0'ın aralıkta olup olmadığına bakmak.`]
    }),
    diffMeans: () => ({
      how: T`Bağımsız örneklemlerde varyanslar toplanır: $SE = \sqrt{s_m^2/n_m + s_w^2/n_w}$. $t = \text{fark}/SE$, %95 GA: fark $\pm 1.96\,SE$.`,
      traps: [T`Standart hataları toplamak ($s_m/\sqrt{n_m} + s_w/\sqrt{n_w}$).`, T`$s^2$ yerine $s$ kullanmak.`, T`Farkta varyansları çıkarmak; farkta bile toplanır.`]
    }),
    olsSmall: (q) => ({
      how: has(q, /residual/) ? T`Önce tahmini değer: $\hat Y = \hat\beta_0 + \hat\beta_1X$. Kalıntı = gerçek − tahmin = $Y - \hat Y$.` : T`5 adım: ortalamalar → sapmalar → $\sum(X-\bar X)(Y-\bar Y)$ → $\sum(X-\bar X)^2$ → $\hat\beta_1$ = birincisi ÷ ikincisi, $\hat\beta_0 = \bar Y - \hat\beta_1\bar X$. Hesap makinesinde STAT (A+BX): B eğim, A sabit.`,
      traps: has(q, /residual/) ? [T`Kalıntıyı ters almak ($\hat Y - Y$).`, T`Tahmini değeri kalıntı sanmak.`] : [T`Kesri ters çevirmek: $\sum(X-\bar X)^2/\sum(X-\bar X)(Y-\bar Y)$.`, T`$\hat\beta_0$'da işaret: $\bar Y - \hat\beta_1\bar X$, artı değil.`, T`Casio'da A ile B'yi karıştırmak: A sabit, B eğim.`]
    }),
    olsMoments: () => ({
      how: T`$\hat\beta_1 = s_{XY}/s_X^2 = r_{XY}\,s_Y/s_X$. $\hat\beta_0 = \bar Y - \hat\beta_1\bar X$.`,
      traps: [T`Varyans yerine standart sapmaya bölmek ($s_{XY}/s_X$).`, T`Korelasyondan eğimde oranı ters almak ($r\,s_X/s_Y$).`, T`$\hat\beta_0$'da artı işareti kullanmak.`]
    }),
    regPredict: () => ({
      how: T`$X$'in değerini denklemde yerine koy: $\hat Y = \hat\beta_0 + \hat\beta_1X$.`,
      traps: [T`Negatif eğimde işaret hatası.`, T`Sabit terimi eklemeyi unutmak.`, T`Sabit ile eğimi yer değiştirmek.`]
    }),
    regChange: () => ({
      how: T`Değişim sorusu: $\Delta\hat Y = \hat\beta_1\,\Delta X$. Sabit terim fark alınınca düşer; başlangıç değeri önemsiz.`,
      traps: [T`Sabit terimi eklemek.`, T`$\Delta X$ ile çarpmayı unutmak (sadece eğimi vermek).`, T`İşaret: negatif eğim ya da negatif $\Delta X$.`]
    }),
    regMean: () => ({
      how: T`OLS doğrusu her zaman $(\bar X, \bar Y)$'den geçer: $\bar Y = \hat\beta_0 + \hat\beta_1\bar X$.`,
      traps: [T`Sabit terimi ortalama sanmak.`, T`İşaret hatası (eğimi çıkarmak).`]
    }),
    r2Calc: () => ({
      how: T`$R^2 = ESS/TSS = 1 - SSR/TSS$: açıklanan oran. Tek regresörde $R^2 = r^2$.`,
      traps: [T`$SSR/TSS$ vermek: bu açıklanamayan oran.`, T`Korelasyonun karesini almamak.`, T`$R^2$ negatif olamaz; negatif çıktıysa hata var.`]
    }),
    serCalc: () => ({
      how: T`$SER = \sqrt{SSR/(n-2)}$: iki katsayı tahmin edildiği için $n-2$.`,
      traps: [T`$n$ ya da $n-1$'e bölmek.`, T`Karekök almamak.`, T`$\sqrt{SSR}$'yi $(n-2)$'ye bölmek.`]
    }),
    sdYfromR2: () => ({
      how: T`Geri hesap: $SSR = (n-2)SER^2$, $TSS = SSR/(1-R^2)$, $s_Y = \sqrt{TSS/(n-1)}$.`,
      traps: [T`SER'i $s_Y$ sanmak.`, T`$1-R^2$'ye bölmek yerine çarpmak.`, T`Karekök almayı unutmak.`]
    }),
    seScale: () => ({
      how: T`Varyans $1/n$ ile, SE ise $1/\sqrt n$ ile orantılı. $n$ $k$ katına çıkarsa SE $1/\sqrt k$ katına iner.`,
      traps: [T`SE'yi $k$'ye bölmek (bu varyansın kuralı).`, T`SE'nin değişmeyeceğini ya da artacağını sanmak.`]
    }),
    regT: (q) => ({
      how: T`$t = (\hat\beta_1 - c)/SE(\hat\beta_1)$. İki yönlü testte $|t|$'yi kritik değerle karşılaştır; p-değeri $2\Phi(-|t|)$.`,
      traps: [T`$c\ne 0$ iken $\hat\beta_1/SE$ kullanmak: önce $c$'yi çıkar.`, T`Varyansa ($SE^2$) bölmek.`, T`İki yönlü testte $t$'nin işaretine bakarak karar vermek; mutlak değer önemli.`]
    }),
    regOutput: (q) => has(q, /fraction/) ? ({
      how: T`Açıklanan varyans oranı = Multiple R-squared ($R^2$). Yüzdeye çevirmek için 100 ile çarp.`,
      traps: [T`$\sqrt{R^2}$ (korelasyon) vermek.`, T`Residual standard error'u (SER) oran sanmak.`, T`$1 - R^2$ (açıklanamayan oran) vermek.`]
    }) : has(q, /significant/) ? ({
      how: T`Eğim satırında t value (= Estimate / Std. Error) ve Pr(>|t|) var. %5'te anlamlı ⇔ $|t| > 1.96$ ⇔ p $< 0.05$.`,
      traps: [T`$R^2$ küçük diye katsayıyı anlamsız saymak.`, T`Sabitin (Intercept) anlamlılığına bakmak.`]
    }) : ({
      how: T`Eğimin %95 GA'sı: Estimate $\pm 1.96\times$ Std. Error (eğim satırından).`,
      traps: [T`Sabitin Std. Error'unu kullanmak.`, T`1.96 yerine 1.645 (bu %90).`]
    }),
    regCI: () => ({
      how: T`$\hat\beta_1 \pm$ kritik değer $\times SE$. %90: 1.645, %95: 1.96, %99: 2.576. 0 aralıkta değilse o düzeyde anlamlı.`,
      traps: [T`Yanlış güven düzeyinin kritik değerini kullanmak.`, T`SE'nin karesini kullanmak.`]
    }),
    regCIdx: () => ({
      how: T`1. $\beta_1$'in %95 GA'sı. 2. Uçları $\Delta x$ ile çarp. 3. $\Delta x$ negatifse uçlar yer değiştirir; küçüğü başa yaz.`,
      traps: [T`Sadece $\hat\beta_1$'i $\Delta x$ ile çarpıp SE'yi çarpmamak.`, T`Negatif $\Delta x$'te sıralamayı düzeltmemek.`, T`$\beta_1$'in GA'sını $\Delta x$ ile çarpmadan vermek.`]
    }),
    dummyReg: (q) => ({
      how: T`$D=0$ grubunun ortalaması $\hat\beta_0$; $D=1$ grubunun ortalaması $\hat\beta_0 + \hat\beta_1$; $\hat\beta_1$ iki grubun ortalama farkı.`,
      traps: [T`$D=1$ grubunun ortalamasına sadece $\hat\beta_1$ demek.`, T`Negatif katsayıyı eklerken işaret hatası.`, T`$\hat\beta_1$'i sürekli bir eğim gibi yorumlamak.`]
    }),
    homoVar: () => ({
      how: T`Homoskedastisite altında $\text{var}(\hat\beta_1) = \sigma^2_u/(n\sigma^2_X)$; standart sapma bunun karekökü.`,
      traps: [T`Kesri ters çevirmek ($\sigma^2_X$ payda).`, T`Varyans ile standart sapmayı karıştırmak.`, T`$n$'yi unutmak.`]
    })
  };
  function enrich(name, q) {
    const g = G[name], r = g ? g(q) : null;
    let ex = /^\*\*Doğru cevap/.test(q.ex) ? q.ex : '**Doğru cevap: ' + q.opts[0] + '.**\n' + q.ex;
    if (r) {
      if (r.how) ex += '\n\n**Yöntem:** ' + r.how;
      if (r.traps && r.traps.length) ex += '\n\n**Sık hatalar:**\n' + r.traps.map(t => '• ' + t).join('\n');
      if (r.tip) ex += '\n\n:::ipucu Sınavda\n' + r.tip + '\n:::';
    }
    q.ex = ex;
    q.hint = r && r.how ? r.how : '';
    return q;
  }
  root.GEN_GUIDE = G;

  /* Tekrar eden şıkları ayıkla; 3'ten az kalırsa yeniden üret. */
  root.genQ = function (name) {
    let q = null;
    for (let k = 0; k < 10; k++) {
      q = root.GENS[name]();
      const o = q.opts.filter((x, i, a) => a.indexOf(x) === i);
      if (o.length >= 3) { q.opts = o.slice(0, 4); return enrich(name, q); }
    }
    return enrich(name, q);
  };
})(typeof window !== 'undefined' ? window : globalThis);
