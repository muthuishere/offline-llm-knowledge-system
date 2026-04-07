var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as y, c as h, s as j, i as F, a as he, S as ge, b as Se, r as be, F as m, v as V, d as Y, e as K, f as X, O as Ie, h as ye, u as q, j as De, k as _e, l as Me, m as Re, n as Te, o as ve, p as Ue, q as Pe, t as c, w as A, x as b, y as I, z as x, A as O, B as Ee, C as Ae, D as xe, E as Oe, G as Ce, H as Ne, I as Le, J as we, K as $e } from "./index-CWaGbhY_.js";
import { M as jt, L as Ft, N as Vt, P as Yt, Q as Kt, R as Xt, T as qt } from "./index-CWaGbhY_.js";
function J(e, t) {
  return { sharedInternalDocumentStore: t, docs: {}, count: 0 };
}
function Q(e, t) {
  const s = y(e.sharedInternalDocumentStore, t);
  return e.docs[s];
}
function Z(e, t) {
  const s = t.length, n = Array.from({ length: s });
  for (let r = 0; r < s; r++) {
    const i = y(e.sharedInternalDocumentStore, t[r]);
    n[r] = e.docs[i];
  }
  return n;
}
function H(e) {
  return e.docs;
}
function k(e, t, s, n) {
  return typeof e.docs[s] < "u" ? false : (e.docs[s] = n, e.count++, true);
}
function ee(e, t) {
  const s = y(e.sharedInternalDocumentStore, t);
  return typeof e.docs[s] > "u" ? false : (delete e.docs[s], e.count--, true);
}
function te(e) {
  return e.count;
}
function ne(e, t) {
  const s = t;
  return { docs: s.docs, count: s.count, sharedInternalDocumentStore: e };
}
function se(e) {
  return { docs: e.docs, count: e.count };
}
function re() {
  return { create: J, get: Q, getMultiple: Z, getAll: H, store: k, remove: ee, count: te, load: ne, save: se };
}
const ze = Object.freeze(Object.defineProperty({ __proto__: null, count: te, create: J, createDocumentsStore: re, get: Q, getAll: H, getMultiple: Z, load: ne, remove: ee, save: se, store: k }, Symbol.toStringTag, { value: "Module" })), me = ["beforeInsert", "afterInsert", "beforeRemove", "afterRemove", "beforeUpdate", "afterUpdate", "beforeUpsert", "afterUpsert", "beforeSearch", "afterSearch", "beforeInsertMultiple", "afterInsertMultiple", "beforeRemoveMultiple", "afterRemoveMultiple", "beforeUpdateMultiple", "afterUpdateMultiple", "beforeUpsertMultiple", "afterUpsertMultiple", "beforeLoad", "afterLoad", "afterCreate"];
function We(e, t) {
  var _a;
  const s = [], n = (_a = e.plugins) == null ? void 0 : _a.length;
  if (!n) return s;
  for (let r = 0; r < n; r++) try {
    const i = e.plugins[r];
    typeof i[t] == "function" && s.push(i[t]);
  } catch (i) {
    throw console.error("Caught error in getAllPluginsByHook:", i), h("PLUGIN_CRASHED");
  }
  return s;
}
function ie(e, t, s, n, r) {
  const i = { language: e.tokenizer.language, sharedInternalDocumentStore: t, enabled: true, isSorted: true, sortableProperties: [], sortablePropertiesWithTypes: {}, sorts: {} };
  for (const [u, o] of Object.entries(s)) {
    const l = `${r}${r ? "." : ""}${u}`;
    if (!n.includes(l)) {
      if (typeof o == "object" && !Array.isArray(o)) {
        const f = ie(e, t, o, n, l);
        j(i.sortableProperties, f.sortableProperties), i.sorts = { ...i.sorts, ...f.sorts }, i.sortablePropertiesWithTypes = { ...i.sortablePropertiesWithTypes, ...f.sortablePropertiesWithTypes };
        continue;
      }
      if (!F(o)) switch (o) {
        case "boolean":
        case "number":
        case "string":
          i.sortableProperties.push(l), i.sortablePropertiesWithTypes[l] = o, i.sorts[l] = { docs: /* @__PURE__ */ new Map(), orderedDocsToRemove: /* @__PURE__ */ new Map(), orderedDocs: [], type: o };
          break;
        case "geopoint":
        case "enum":
          continue;
        case "enum[]":
        case "boolean[]":
        case "number[]":
        case "string[]":
          continue;
        default:
          throw h("INVALID_SORT_SCHEMA_TYPE", Array.isArray(o) ? "array" : o, l);
      }
    }
  }
  return i;
}
function Ge(e, t, s, n) {
  return (n == null ? void 0 : n.enabled) !== false ? ie(e, t, s, (n || {}).unsortableProperties || [], "") : { disabled: true };
}
function Be(e, t, s, n) {
  if (!e.enabled) return;
  e.isSorted = false;
  const r = y(e.sharedInternalDocumentStore, s), i = e.sorts[t];
  i.orderedDocsToRemove.has(r) && w(e, t), i.docs.set(r, i.orderedDocs.length), i.orderedDocs.push([r, n]);
}
function oe(e) {
  if (e.isSorted || !e.enabled) return;
  const t = Object.keys(e.sorts);
  for (const s of t) Ye(e, s);
  e.isSorted = true;
}
function je(e, t, s) {
  return t[1].localeCompare(s[1], he(e));
}
function Fe(e, t) {
  return e[1] - t[1];
}
function Ve(e, t) {
  return t[1] ? -1 : 1;
}
function Ye(e, t) {
  const s = e.sorts[t];
  let n;
  switch (s.type) {
    case "string":
      n = je.bind(null, e.language);
      break;
    case "number":
      n = Fe.bind(null);
      break;
    case "boolean":
      n = Ve.bind(null);
      break;
  }
  s.orderedDocs.sort(n);
  const r = s.orderedDocs.length;
  for (let i = 0; i < r; i++) {
    const u = s.orderedDocs[i][0];
    s.docs.set(u, i);
  }
}
function Ke(e) {
  const t = Object.keys(e.sorts);
  for (const s of t) w(e, s);
}
function w(e, t) {
  const s = e.sorts[t];
  s.orderedDocsToRemove.size && (s.orderedDocs = s.orderedDocs.filter((n) => !s.orderedDocsToRemove.has(n[0])), s.orderedDocsToRemove.clear());
}
function Xe(e, t, s) {
  if (!e.enabled) return;
  const n = e.sorts[t], r = y(e.sharedInternalDocumentStore, s);
  n.docs.get(r) && (n.docs.delete(r), n.orderedDocsToRemove.set(r, true));
}
function qe(e, t, s) {
  if (!e.enabled) throw h("SORT_DISABLED");
  const n = s.property, r = s.order === "DESC", i = e.sorts[n];
  if (!i) throw h("UNABLE_TO_SORT_ON_UNKNOWN_FIELD", n, e.sortableProperties.join(", "));
  return w(e, n), oe(e), t.sort((u, o) => {
    const l = i.docs.get(y(e.sharedInternalDocumentStore, u[0])), f = i.docs.get(y(e.sharedInternalDocumentStore, o[0])), d = typeof l < "u", a = typeof f < "u";
    return !d && !a ? 0 : d ? a ? r ? f - l : l - f : -1 : 1;
  }), t;
}
function Je(e) {
  return e.enabled ? e.sortableProperties : [];
}
function Qe(e) {
  return e.enabled ? e.sortablePropertiesWithTypes : {};
}
function le(e, t) {
  const s = t;
  if (!s.enabled) return { enabled: false };
  const n = Object.keys(s.sorts).reduce((r, i) => {
    const { docs: u, orderedDocs: o, type: l } = s.sorts[i];
    return r[i] = { docs: new Map(Object.entries(u).map(([f, d]) => [+f, d])), orderedDocsToRemove: /* @__PURE__ */ new Map(), orderedDocs: o, type: l }, r;
  }, {});
  return { sharedInternalDocumentStore: e, language: s.language, sortableProperties: s.sortableProperties, sortablePropertiesWithTypes: s.sortablePropertiesWithTypes, sorts: n, enabled: true, isSorted: s.isSorted };
}
function ce(e) {
  if (!e.enabled) return { enabled: false };
  Ke(e), oe(e);
  const t = Object.keys(e.sorts).reduce((s, n) => {
    const { docs: r, orderedDocs: i, type: u } = e.sorts[n];
    return s[n] = { docs: Object.fromEntries(r.entries()), orderedDocs: i, type: u }, s;
  }, {});
  return { language: e.language, sortableProperties: e.sortableProperties, sortablePropertiesWithTypes: e.sortablePropertiesWithTypes, sorts: t, enabled: e.enabled, isSorted: e.isSorted };
}
function ue() {
  return { create: Ge, insert: Be, remove: Xe, save: ce, load: le, sortBy: qe, getSortableProperties: Je, getSortablePropertiesWithTypes: Qe };
}
const Ze = Object.freeze(Object.defineProperty({ __proto__: null, createSorter: ue, load: le, save: ce }, Symbol.toStringTag, { value: "Module" })), W = 192, He = 383, ke = [65, 65, 65, 65, 65, 65, 65, 67, 69, 69, 69, 69, 73, 73, 73, 73, 69, 78, 79, 79, 79, 79, 79, null, 79, 85, 85, 85, 85, 89, 80, 115, 97, 97, 97, 97, 97, 97, 97, 99, 101, 101, 101, 101, 105, 105, 105, 105, 101, 110, 111, 111, 111, 111, 111, null, 111, 117, 117, 117, 117, 121, 112, 121, 65, 97, 65, 97, 65, 97, 67, 99, 67, 99, 67, 99, 67, 99, 68, 100, 68, 100, 69, 101, 69, 101, 69, 101, 69, 101, 69, 101, 71, 103, 71, 103, 71, 103, 71, 103, 72, 104, 72, 104, 73, 105, 73, 105, 73, 105, 73, 105, 73, 105, 73, 105, 74, 106, 75, 107, 107, 76, 108, 76, 108, 76, 108, 76, 108, 76, 108, 78, 110, 78, 110, 78, 110, 110, 78, 110, 79, 111, 79, 111, 79, 111, 79, 111, 82, 114, 82, 114, 82, 114, 83, 115, 83, 115, 83, 115, 83, 115, 84, 116, 84, 116, 84, 116, 85, 117, 85, 117, 85, 117, 85, 117, 85, 117, 85, 117, 87, 119, 89, 121, 89, 90, 122, 90, 122, 90, 122, 115];
function et(e) {
  return e < W || e > He ? e : ke[e - W] || e;
}
function tt(e) {
  const t = [];
  for (let s = 0; s < e.length; s++) t[s] = et(e.charCodeAt(s));
  return String.fromCharCode(...t);
}
const nt = { ational: "ate", tional: "tion", enci: "ence", anci: "ance", izer: "ize", bli: "ble", alli: "al", entli: "ent", eli: "e", ousli: "ous", ization: "ize", ation: "ate", ator: "ate", alism: "al", iveness: "ive", fulness: "ful", ousness: "ous", aliti: "al", iviti: "ive", biliti: "ble", logi: "log" }, st = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" }, rt = "[^aeiou]", P = "[aeiouy]", D = rt + "[^aeiouy]*", v = P + "[aeiou]*", N = "^(" + D + ")?" + v + D, it = "^(" + D + ")?" + v + D + "(" + v + ")?$", U = "^(" + D + ")?" + v + D + v + D, G = "^(" + D + ")?" + P;
function ot(e) {
  var _a, _b, _c;
  let t, s, n, r, i, u;
  if (e.length < 3) return e;
  const o = e.substring(0, 1);
  if (o == "y" && (e = o.toUpperCase() + e.substring(1)), n = /^(.+?)(ss|i)es$/, r = /^(.+?)([^s])s$/, n.test(e) ? e = e.replace(n, "$1$2") : r.test(e) && (e = e.replace(r, "$1$2")), n = /^(.+?)eed$/, r = /^(.+?)(ed|ing)$/, n.test(e)) {
    const l = n.exec(e);
    n = new RegExp(N), n.test(l[1]) && (n = /.$/, e = e.replace(n, ""));
  } else r.test(e) && (t = r.exec(e)[1], r = new RegExp(G), r.test(t) && (e = t, r = /(at|bl|iz)$/, i = new RegExp("([^aeiouylsz])\\1$"), u = new RegExp("^" + D + P + "[^aeiouwxy]$"), r.test(e) ? e = e + "e" : i.test(e) ? (n = /.$/, e = e.replace(n, "")) : u.test(e) && (e = e + "e")));
  if (n = /^(.+?)y$/, n.test(e) && (t = (_a = n.exec(e)) == null ? void 0 : _a[1], n = new RegExp(G), t && n.test(t) && (e = t + "i")), n = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, n.test(e)) {
    const l = n.exec(e);
    t = l == null ? void 0 : l[1], s = l == null ? void 0 : l[2], n = new RegExp(N), t && n.test(t) && (e = t + nt[s]);
  }
  if (n = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, n.test(e)) {
    const l = n.exec(e);
    t = l == null ? void 0 : l[1], s = l == null ? void 0 : l[2], n = new RegExp(N), t && n.test(t) && (e = t + st[s]);
  }
  if (n = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, r = /^(.+?)(s|t)(ion)$/, n.test(e)) t = (_b = n.exec(e)) == null ? void 0 : _b[1], n = new RegExp(U), t && n.test(t) && (e = t);
  else if (r.test(e)) {
    const l = r.exec(e);
    t = (l == null ? void 0 : l[1]) ?? "" + (l == null ? void 0 : l[2]) ?? "", r = new RegExp(U), r.test(t) && (e = t);
  }
  return n = /^(.+?)e$/, n.test(e) && (t = (_c = n.exec(e)) == null ? void 0 : _c[1], n = new RegExp(U), r = new RegExp(it), i = new RegExp("^" + D + P + "[^aeiouwxy]$"), t && (n.test(t) || r.test(t) && !i.test(t)) && (e = t)), n = /ll$/, r = new RegExp(U), n.test(e) && r.test(e) && (n = /.$/, e = e.replace(n, "")), o == "y" && (e = o.toLowerCase() + e.substring(1)), e;
}
function E(e, t, s = true) {
  var _a;
  const n = `${this.language}:${e}:${t}`;
  return s && this.normalizationCache.has(n) ? this.normalizationCache.get(n) : ((_a = this.stopWords) == null ? void 0 : _a.includes(t)) ? (s && this.normalizationCache.set(n, ""), "") : (this.stemmer && !this.stemmerSkipProperties.has(e) && (t = this.stemmer(t)), t = tt(t), s && this.normalizationCache.set(n, t), t);
}
function lt(e) {
  for (; e[e.length - 1] === ""; ) e.pop();
  for (; e[0] === ""; ) e.shift();
  return e;
}
function B(e, t, s, n = true) {
  if (t && t !== this.language) throw h("LANGUAGE_NOT_SUPPORTED", t);
  if (typeof e != "string") return [e];
  const r = this.normalizeToken.bind(this, s ?? "");
  let i;
  if (s && this.tokenizeSkipProperties.has(s)) i = [r(e, n)];
  else {
    const o = Se[this.language];
    i = e.toLowerCase().split(o).map((l) => r(l, n)).filter(Boolean);
  }
  const u = lt(i);
  return this.allowDuplicates ? u : Array.from(new Set(u));
}
function L(e = {}) {
  if (!e.language) e.language = "english";
  else if (!ge.includes(e.language)) throw h("LANGUAGE_NOT_SUPPORTED", e.language);
  let t;
  if (e.stemming || e.stemmer && !("stemming" in e)) if (e.stemmer) {
    if (typeof e.stemmer != "function") throw h("INVALID_STEMMER_FUNCTION_TYPE");
    t = e.stemmer;
  } else if (e.language === "english") t = ot;
  else throw h("MISSING_STEMMER", e.language);
  let s;
  if (e.stopWords !== false) {
    if (s = [], Array.isArray(e.stopWords)) s = e.stopWords;
    else if (typeof e.stopWords == "function") s = e.stopWords(s);
    else if (e.stopWords) throw h("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");
    if (!Array.isArray(s)) throw h("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");
    for (const r of s) if (typeof r != "string") throw h("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");
  }
  const n = { tokenize: B, language: e.language, stemmer: t, stemmerSkipProperties: new Set(e.stemmerSkipProperties ? [e.stemmerSkipProperties].flat() : []), tokenizeSkipProperties: new Set(e.tokenizeSkipProperties ? [e.tokenizeSkipProperties].flat() : []), stopWords: s, allowDuplicates: !!e.allowDuplicates, normalizeToken: E, normalizationCache: /* @__PURE__ */ new Map() };
  return n.tokenize = B.bind(n), n.normalizeToken = E, n;
}
const ct = Object.freeze(Object.defineProperty({ __proto__: null, createTokenizer: L, normalizeToken: E }, Symbol.toStringTag, { value: "Module" }));
function ut(e) {
  const t = { formatElapsedTime: X, getDocumentIndexId: K, getDocumentProperties: Y, validateSchema: V };
  for (const s of m) {
    const n = s;
    if (e[n]) {
      if (typeof e[n] != "function") throw h("COMPONENT_MUST_BE_FUNCTION", n);
    } else e[n] = t[n];
  }
  for (const s of Object.keys(e)) if (!Ie.includes(s) && !m.includes(s)) throw h("UNSUPPORTED_COMPONENT", s);
}
function vt({ schema: e, sort: t, language: s, components: n, id: r, plugins: i }) {
  n || (n = {});
  for (const g of i ?? []) {
    if (!("getComponents" in g) || typeof g.getComponents != "function") continue;
    const $ = g.getComponents(e), pe = Object.keys($);
    for (const z of pe) if (n[z]) throw h("PLUGIN_COMPONENT_CONFLICT", z, g.name);
    n = { ...n, ...$ };
  }
  r || (r = q());
  let u = n.tokenizer, o = n.index, l = n.documentsStore, f = n.sorter, d = n.pinning;
  if (u ? u.tokenize ? u = u : u = L(u) : u = L({ language: s ?? "english" }), n.tokenizer && s) throw h("NO_LANGUAGE_WITH_CUSTOM_TOKENIZER");
  const a = ye();
  o || (o = De()), f || (f = ue()), l || (l = re()), d || (d = _e()), ut(n);
  const { getDocumentProperties: _, getDocumentIndexId: M, validateSchema: R, formatElapsedTime: T } = n, p = { data: {}, caches: {}, schema: e, tokenizer: u, index: o, sorter: f, documentsStore: l, pinning: d, internalDocumentIDStore: a, getDocumentProperties: _, getDocumentIndexId: M, validateSchema: R, beforeInsert: [], afterInsert: [], beforeRemove: [], afterRemove: [], beforeUpdate: [], afterUpdate: [], beforeUpsert: [], afterUpsert: [], beforeSearch: [], afterSearch: [], beforeInsertMultiple: [], afterInsertMultiple: [], beforeRemoveMultiple: [], afterRemoveMultiple: [], beforeUpdateMultiple: [], afterUpdateMultiple: [], beforeUpsertMultiple: [], afterUpsertMultiple: [], afterCreate: [], formatElapsedTime: T, id: r, plugins: i, version: ft() };
  p.data = { index: p.index.create(p, a, e), docs: p.documentsStore.create(p, a), sorting: p.sorter.create(p, a, e, t), pinning: p.pinning.create(a) };
  for (const g of me) p[g] = (p[g] ?? []).concat(We(p, g));
  const S = p.afterCreate;
  return S && be(S, p), p;
}
function ft() {
  return "{{VERSION}}";
}
const Ut = Object.freeze(Object.defineProperty({ __proto__: null, documentsStore: ze, formatElapsedTime: X, getDocumentIndexId: K, getDocumentProperties: Y, getInnerType: Me, getVectorSize: Re, index: Te, internalDocumentIDStore: ve, isArrayType: Ue, isGeoPointType: Pe, isVectorType: F, sorter: Ze, tokenizer: ct, validateSchema: V }, Symbol.toStringTag, { value: "Module" }));
function Pt(e, t) {
  e.pinning.addRule(e.data.pinning, t);
}
function Et(e, t) {
  e.pinning.updateRule(e.data.pinning, t);
}
function At(e, t) {
  return e.pinning.removeRule(e.data.pinning, t);
}
function xt(e, t) {
  return e.pinning.getRule(e.data.pinning, t);
}
function Ot(e) {
  return e.pinning.getAllRules(e.data.pinning);
}
function C(e, t, s, n) {
  return c(e.index.beforeRemove) || c(e.index.remove) || c(e.index.afterRemove) ? dt(e, t, s, n) : at(e, t, s, n);
}
async function dt(e, t, s, n) {
  var _a, _b, _c, _d;
  let r = true;
  const { index: i, docs: u } = e.data, o = e.documentsStore.get(u, t);
  if (!o) return false;
  const l = y(e.internalDocumentIDStore, t), f = A(e.internalDocumentIDStore, l), d = e.documentsStore.count(u);
  n || await b(e.beforeRemove, e, f);
  const a = e.index.getSearchableProperties(i), _ = e.index.getSearchablePropertiesWithTypes(i), M = e.getDocumentProperties(o, a);
  for (const p of a) {
    const S = M[p];
    if (typeof S > "u") continue;
    const g = _[p];
    await ((_b = (_a = e.index).beforeRemove) == null ? void 0 : _b.call(_a, e.data.index, p, f, S, g, s, e.tokenizer, d)), await e.index.remove(e.index, e.data.index, p, t, l, S, g, s, e.tokenizer, d) || (r = false), await ((_d = (_c = e.index).afterRemove) == null ? void 0 : _d.call(_c, e.data.index, p, f, S, g, s, e.tokenizer, d));
  }
  const R = await e.sorter.getSortableProperties(e.data.sorting), T = await e.getDocumentProperties(o, R);
  for (const p of R) typeof T[p] > "u" || e.sorter.remove(e.data.sorting, p, t);
  return n || await b(e.afterRemove, e, f), e.documentsStore.remove(e.data.docs, t, l), r;
}
function at(e, t, s, n) {
  var _a, _b, _c, _d;
  let r = true;
  const { index: i, docs: u } = e.data, o = e.documentsStore.get(u, t);
  if (!o) return false;
  const l = y(e.internalDocumentIDStore, t), f = A(e.internalDocumentIDStore, l), d = e.documentsStore.count(u);
  n || b(e.beforeRemove, e, f);
  const a = e.index.getSearchableProperties(i), _ = e.index.getSearchablePropertiesWithTypes(i), M = e.getDocumentProperties(o, a);
  for (const p of a) {
    const S = M[p];
    if (typeof S > "u") continue;
    const g = _[p];
    (_b = (_a = e.index).beforeRemove) == null ? void 0 : _b.call(_a, e.data.index, p, f, S, g, s, e.tokenizer, d), e.index.remove(e.index, e.data.index, p, t, l, S, g, s, e.tokenizer, d) || (r = false), (_d = (_c = e.index).afterRemove) == null ? void 0 : _d.call(_c, e.data.index, p, f, S, g, s, e.tokenizer, d);
  }
  const R = e.sorter.getSortableProperties(e.data.sorting), T = e.getDocumentProperties(o, R);
  for (const p of R) typeof T[p] > "u" || e.sorter.remove(e.data.sorting, p, t);
  return n || b(e.afterRemove, e, f), e.documentsStore.remove(e.data.docs, t, l), r;
}
function fe(e, t, s, n, r) {
  return c(e.index.beforeRemove) || c(e.index.remove) || c(e.index.afterRemove) || c(e.beforeRemoveMultiple) || c(e.afterRemoveMultiple) ? pt(e, t, s, n, r) : ht(e, t, s, n, r);
}
async function pt(e, t, s, n, r) {
  let i = 0;
  s || (s = 1e3);
  const u = r ? [] : t.map((o) => A(e.internalDocumentIDStore, y(e.internalDocumentIDStore, o)));
  return r || await I(e.beforeRemoveMultiple, e, u), await new Promise((o, l) => {
    let f = 0;
    async function d() {
      const a = t.slice(f * s, ++f * s);
      if (!a.length) return o();
      for (const _ of a) try {
        await C(e, _, n, r) && i++;
      } catch (M) {
        l(M);
      }
      setTimeout(d, 0);
    }
    setTimeout(d, 0);
  }), r || await I(e.afterRemoveMultiple, e, u), i;
}
function ht(e, t, s, n, r) {
  let i = 0;
  s || (s = 1e3);
  const u = r ? [] : t.map((f) => A(e.internalDocumentIDStore, y(e.internalDocumentIDStore, f)));
  r || I(e.beforeRemoveMultiple, e, u);
  let o = 0;
  function l() {
    const f = t.slice(o * s, ++o * s);
    if (f.length) {
      for (const d of f) C(e, d, n, r) && i++;
      setTimeout(l, 0);
    }
  }
  return l(), r || I(e.afterRemoveMultiple, e, u), i;
}
function Ct(e, t) {
  e.internalDocumentIDStore.load(e, t.internalDocumentIDStore), e.data.index = e.index.load(e.internalDocumentIDStore, t.index), e.data.docs = e.documentsStore.load(e.internalDocumentIDStore, t.docs), e.data.sorting = e.sorter.load(e.internalDocumentIDStore, t.sorting), e.data.pinning = e.pinning.load(e.internalDocumentIDStore, t.pinning), e.tokenizer.language = t.language;
}
function Nt(e) {
  return { internalDocumentIDStore: e.internalDocumentIDStore.save(e.internalDocumentIDStore), index: e.index.save(e.data.index), docs: e.documentsStore.save(e.data.docs), sorting: e.sorter.save(e.data.sorting), pinning: e.pinning.save(e.data.pinning), language: e.tokenizer.language };
}
function de(e, t, s, n, r) {
  return c(e.afterInsert) || c(e.beforeInsert) || c(e.afterRemove) || c(e.beforeRemove) || c(e.beforeUpdate) || c(e.afterUpdate) ? gt(e, t, s, n, r) : St(e, t, s, n, r);
}
async function gt(e, t, s, n, r) {
  !r && e.beforeUpdate && await b(e.beforeUpdate, e, t), await C(e, t, n, r);
  const i = await x(e, s, n, r);
  return !r && e.afterUpdate && await b(e.afterUpdate, e, i), i;
}
function St(e, t, s, n, r) {
  !r && e.beforeUpdate && b(e.beforeUpdate, e, t), C(e, t, n, r);
  const i = x(e, s, n, r);
  return !r && e.afterUpdate && b(e.afterUpdate, e, i), i;
}
function ae(e, t, s, n, r, i) {
  return c(e.afterInsert) || c(e.beforeInsert) || c(e.afterRemove) || c(e.beforeRemove) || c(e.beforeUpdate) || c(e.afterUpdate) || c(e.beforeUpdateMultiple) || c(e.afterUpdateMultiple) || c(e.beforeRemoveMultiple) || c(e.afterRemoveMultiple) || c(e.beforeInsertMultiple) || c(e.afterInsertMultiple) ? bt(e, t, s, n, r, i) : It(e, t, s, n, r, i);
}
async function bt(e, t, s, n, r, i) {
  i || await I(e.beforeUpdateMultiple, e, t);
  const u = s.length;
  for (let l = 0; l < u; l++) {
    const f = e.validateSchema(s[l], e.schema);
    if (f) throw h("SCHEMA_VALIDATION_FAILURE", f);
  }
  await fe(e, t, n, r, i);
  const o = await O(e, s, n, r, i);
  return i || await I(e.afterUpdateMultiple, e, o), o;
}
function It(e, t, s, n, r, i) {
  i || I(e.beforeUpdateMultiple, e, t);
  const u = s.length;
  for (let l = 0; l < u; l++) {
    const f = e.validateSchema(s[l], e.schema);
    if (f) throw h("SCHEMA_VALIDATION_FAILURE", f);
  }
  fe(e, t, n, r, i);
  const o = O(e, s, n, r, i);
  return i || I(e.afterUpdateMultiple, e, o), o;
}
function Lt(e, t, s, n, r) {
  return c(e.afterInsert) || c(e.beforeInsert) || c(e.afterRemove) || c(e.beforeRemove) || c(e.beforeUpdate) || c(e.afterUpdate) || c(e.beforeUpsert) || c(e.afterUpsert) || c(e.index.beforeInsert) || c(e.index.insert) || c(e.index.afterInsert) ? yt(e, t, s, n, r) : Dt(e, t, s, n, r);
}
async function yt(e, t, s, n, r) {
  const i = e.getDocumentIndexId(t);
  if (typeof i != "string") throw h("DOCUMENT_ID_MUST_BE_STRING", typeof i);
  !n && e.beforeUpsert && await b(e.beforeUpsert, e, i, t);
  const u = e.documentsStore.get(e.data.docs, i);
  let o;
  return u ? o = await de(e, i, t, s, n) : o = await x(e, t, s, n, r), !n && e.afterUpsert && await b(e.afterUpsert, e, o, t), o;
}
function Dt(e, t, s, n, r) {
  const i = e.getDocumentIndexId(t);
  if (typeof i != "string") throw h("DOCUMENT_ID_MUST_BE_STRING", typeof i);
  !n && e.beforeUpsert && b(e.beforeUpsert, e, i, t);
  const u = e.documentsStore.get(e.data.docs, i);
  let o;
  return u ? o = de(e, i, t, s, n) : o = x(e, t, s, n, r), !n && e.afterUpsert && b(e.afterUpsert, e, o, t), o;
}
function wt(e, t, s, n, r) {
  return c(e.afterInsert) || c(e.beforeInsert) || c(e.afterRemove) || c(e.beforeRemove) || c(e.beforeUpdate) || c(e.afterUpdate) || c(e.beforeUpsert) || c(e.afterUpsert) || c(e.beforeUpsertMultiple) || c(e.afterUpsertMultiple) || c(e.beforeInsertMultiple) || c(e.afterInsertMultiple) || c(e.beforeUpdateMultiple) || c(e.afterUpdateMultiple) || c(e.beforeRemoveMultiple) || c(e.afterRemoveMultiple) || c(e.index.beforeInsert) || c(e.index.insert) || c(e.index.afterInsert) ? _t(e, t, s, n, r) : Mt(e, t, s, n, r);
}
async function _t(e, t, s, n, r) {
  !r && e.beforeUpsertMultiple && await I(e.beforeUpsertMultiple, e, t);
  const i = t.length;
  for (let d = 0; d < i; d++) {
    const a = e.validateSchema(t[d], e.schema);
    if (a) throw h("SCHEMA_VALIDATION_FAILURE", a);
  }
  const u = [], o = [], l = [];
  for (const d of t) {
    const a = e.getDocumentIndexId(d);
    if (typeof a != "string") throw h("DOCUMENT_ID_MUST_BE_STRING", typeof a);
    e.documentsStore.get(e.data.docs, a) ? (o.push(d), l.push(a)) : u.push(d);
  }
  const f = [];
  if (o.length > 0) {
    const d = await ae(e, l, o, s, n, r);
    f.push(...d);
  }
  if (u.length > 0) {
    const d = await O(e, u, s, n, r);
    f.push(...d);
  }
  return !r && e.afterUpsertMultiple && await I(e.afterUpsertMultiple, e, f), f;
}
function Mt(e, t, s, n, r) {
  !r && e.beforeUpsertMultiple && I(e.beforeUpsertMultiple, e, t);
  const i = t.length;
  for (let d = 0; d < i; d++) {
    const a = e.validateSchema(t[d], e.schema);
    if (a) throw h("SCHEMA_VALIDATION_FAILURE", a);
  }
  const u = [], o = [], l = [];
  for (const d of t) {
    const a = e.getDocumentIndexId(d);
    if (typeof a != "string") throw h("DOCUMENT_ID_MUST_BE_STRING", typeof a);
    e.documentsStore.get(e.data.docs, a) ? (o.push(d), l.push(a)) : u.push(d);
  }
  const f = [];
  if (o.length > 0) {
    const d = ae(e, l, o, s, n, r);
    f.push(...d);
  }
  if (u.length > 0) {
    const d = O(e, u, s, n, r);
    f.push(...d);
  }
  return !r && e.afterUpsertMultiple && I(e.afterUpsertMultiple, e, f), f;
}
const Rt = "orama-secure-proxy";
class $t {
  constructor(t, s) {
    __publicField(this, "db");
    __publicField(this, "proxy", null);
    __publicField(this, "config");
    __publicField(this, "abortController", null);
    __publicField(this, "lastInteractionParams", null);
    __publicField(this, "chatModel", null);
    __publicField(this, "conversationID");
    __publicField(this, "messages", []);
    __publicField(this, "events");
    __publicField(this, "initPromise");
    __publicField(this, "state", []);
    this.db = t, this.config = s, this.init(), this.messages = s.initialMessages || [], this.events = s.events || {}, this.conversationID = s.conversationID || this.generateRandomID();
  }
  async ask(t) {
    await this.initPromise;
    let s = "";
    for await (const n of await this.askStream(t)) s += n;
    return s;
  }
  async askStream(t) {
    return await this.initPromise, this.fetchAnswer(t);
  }
  abortAnswer() {
    var _a;
    (_a = this.abortController) == null ? void 0 : _a.abort(), this.state[this.state.length - 1].aborted = true, this.triggerStateChange();
  }
  getMessages() {
    return this.messages;
  }
  clearSession() {
    this.messages = [], this.state = [];
  }
  regenerateLast({ stream: t = true }) {
    var _a;
    if (this.state.length === 0 || this.messages.length === 0) throw new Error("No messages to regenerate");
    if (!(((_a = this.messages.at(-1)) == null ? void 0 : _a.role) === "assistant")) throw h("ANSWER_SESSION_LAST_MESSAGE_IS_NOT_ASSISTANT");
    return this.messages.pop(), this.state.pop(), t ? this.askStream(this.lastInteractionParams) : this.ask(this.lastInteractionParams);
  }
  async *fetchAnswer(t) {
    if (!this.chatModel) throw h("PLUGIN_SECURE_PROXY_MISSING_CHAT_MODEL");
    this.abortController = new AbortController(), this.lastInteractionParams = t;
    const s = this.generateRandomID();
    this.messages.push({ role: "user", content: t.term ?? "" }), this.state.push({ interactionId: s, aborted: false, loading: true, query: t.term ?? "", response: "", sources: null, translatedQuery: null, error: false, errorMessage: null });
    const n = this.state.length - 1;
    this.addEmptyAssistantMessage(), this.triggerStateChange();
    try {
      const r = await Ee(this.db, t);
      this.state[n].sources = r, this.triggerStateChange();
      for await (const i of this.proxy.chatStream({ model: this.chatModel, messages: this.messages })) yield i, this.state[n].response += i, this.messages.findLast((u) => u.role === "assistant").content += i, this.triggerStateChange();
    } catch (r) {
      r.name === "AbortError" ? this.state[n].aborted = true : (this.state[n].error = true, this.state[n].errorMessage = r.toString()), this.triggerStateChange();
    }
    return this.state[n].loading = false, this.triggerStateChange(), this.state[n].response;
  }
  generateRandomID(t = 24) {
    return Array.from({ length: t }, () => Math.floor(Math.random() * 36).toString(36)).join("");
  }
  triggerStateChange() {
    this.events.onStateChange && this.events.onStateChange(this.state);
  }
  async init() {
    var _a, _b;
    const t = this;
    async function s() {
      return await t.db.plugins.find((i) => i.name === Rt);
    }
    const n = await s();
    if (!n) throw h("PLUGIN_SECURE_PROXY_NOT_FOUND");
    const r = n.extra;
    if (this.proxy = r.proxy, this.config.systemPrompt && this.messages.push({ role: "system", content: this.config.systemPrompt }), (_b = (_a = r == null ? void 0 : r.pluginParams) == null ? void 0 : _a.chat) == null ? void 0 : _b.model) this.chatModel = r.pluginParams.chat.model;
    else throw h("PLUGIN_SECURE_PROXY_MISSING_CHAT_MODEL");
  }
  addEmptyAssistantMessage() {
    this.messages.push({ role: "assistant", content: "" });
  }
}
const zt = Symbol("orama.insertions"), mt = Symbol("orama.removals"), Wt = Object.freeze(Object.defineProperty({ __proto__: null, boundedLevenshtein: Ae, convertDistanceToMeters: xe, formatBytes: Oe, formatNanoseconds: Ce, getNanosecondsTime: Ne, normalizeToken: E, safeArrayPush: j, setDifference: Le, setIntersection: we, setUnion: $e, uniqueId: q }, Symbol.toStringTag, { value: "Module" }));
export {
  $t as AnswerSession,
  jt as MODE_FULLTEXT_SEARCH,
  Ft as MODE_HYBRID_SEARCH,
  Vt as MODE_VECTOR_SEARCH,
  Ut as components,
  Yt as count,
  vt as create,
  At as deletePin,
  Ot as getAllPins,
  Kt as getByID,
  xt as getPin,
  x as insert,
  Xt as insertMultiple,
  Pt as insertPin,
  Wt as internals,
  zt as kInsertions,
  mt as kRemovals,
  Ct as load,
  C as remove,
  fe as removeMultiple,
  Nt as save,
  Ee as search,
  qt as searchVector,
  de as update,
  ae as updateMultiple,
  Et as updatePin,
  Lt as upsert,
  wt as upsertMultiple
};
