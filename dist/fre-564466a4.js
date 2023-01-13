const e = {}, n = (n2, t2, l) => {
  n2 = n2 || e, t2 = t2 || e, Object.keys(n2).forEach((e2) => l(e2, n2[e2], t2[e2])), Object.keys(t2).forEach((e2) => !n2.hasOwnProperty(e2) && l(e2, void 0, t2[e2]));
}, t = (e2, t2, l) => {
  n(t2, l, (t3, l2, r2) => {
    l2 === r2 || "children" === t3 || ("style" !== t3 || te(r2) ? "o" === t3[0] && "n" === t3[1] ? (t3 = t3.slice(2).toLowerCase(), l2 && e2.removeEventListener(t3, l2), e2.addEventListener(t3, r2)) : !(t3 in e2) || e2 instanceof SVGElement ? null == r2 || false === r2 ? e2.removeAttribute(t3) : e2.setAttribute(t3, r2) : e2[t3] = r2 || "" : n(l2, r2, (n2, l3, r3) => {
      l3 !== r3 && (e2[t3][n2] = r3 || "");
    }));
  });
};
let r = 0;
const o = (e2) => s(null, e2), s = (e2, n2) => {
  const [t2, l] = h(r++);
  return 0 === t2.length && (t2[0] = n2, t2[1] = (n3) => {
    t2[0] = e2 ? e2(t2[0], n3) : ne(n3) ? n3(t2[0]) : n3, B(l);
  }), t2;
}, h = (e2) => {
  const n2 = ee(), t2 = n2.hooks || (n2.hooks = { list: [], effect: [], layout: [] });
  return e2 >= t2.list.length && t2.list.push([]), [t2.list[e2], n2];
}, g = [], m = [];
let v = 0;
const E = (e2) => {
  m.push(e2) && C();
}, b = (e2) => {
  g.push({ callback: e2 }), E(x);
}, w = (e2) => {
  const n2 = () => m.splice(0, 1).forEach((e3) => e3());
  if (!e2 && "undefined" != typeof queueMicrotask)
    return () => queueMicrotask(n2);
  if ("undefined" != typeof MessageChannel) {
    const { port1: e3, port2: t2 } = new MessageChannel();
    return e3.onmessage = n2, () => t2.postMessage(null);
  }
  return () => setTimeout(n2);
};
let C = w(false);
const x = () => {
  v = N() + 5;
  let e2 = M(g);
  for (; e2 && !A(); ) {
    const { callback: n2 } = e2;
    e2.callback = null;
    const t2 = n2();
    t2 ? e2.callback = t2 : g.shift(), e2 = M(g);
  }
  e2 && (C = w(A())) && E(x);
}, A = () => N() >= v, N = () => performance.now(), M = (e2) => e2[0], P = (e2, n2) => {
  let t2 = e2.next;
  e2.next = null;
  do {
    L(t2);
  } while (t2 = t2.next);
  n2.forEach(L);
}, L = (e2) => {
  64 & e2.lane || (8 !== e2.lane ? (4 & e2.lane && (e2.isComp ? (e2.child.lane = e2.lane, e2.child.after = e2.after, L(e2.child), e2.child.lane |= 64) : e2.parentNode.insertBefore(e2.node, e2.after)), 2 & e2.lane && (e2.isComp ? (e2.child.lane = e2.lane, L(e2.child), e2.child.lane |= 64) : t(e2.node, e2.oldProps || {}, e2.props)), O(e2.ref, e2.node)) : j(e2));
}, O = (e2, n2) => {
  e2 && (ne(e2) ? e2(n2) : e2.current = n2);
}, V = (e2) => {
  e2.forEach((e3) => {
    e3.kids && V(e3.kids), O(e3.ref, null);
  });
}, j = (e2) => {
  e2.isComp ? (e2.hooks && e2.hooks.list.forEach((e3) => e3[2] && e3[2]()), e2.kids.forEach(j)) : (V(e2.kids), e2.parentNode.removeChild(e2.node), O(e2.ref, null)), e2.lane = 0;
};
let S = null, T = null, q = [];
const U = (e2, n2) => {
  B({ node: n2, props: { children: e2 } });
}, B = (e2) => {
  !e2 || 32 & e2.lane || (e2.lane = 34, b(() => (T = e2, G(e2))));
}, G = (e2) => {
  for (; e2 && !A(); )
    e2 = z(e2);
  return e2 ? G.bind(null, e2) : null;
}, z = (e2) => {
  if (e2.isComp = ne(e2.type), e2.isComp) {
    const n2 = ((e3) => {
      if (e3.type.memo && e3.oldProps) {
        if (!(e3.type.shouldUpdate || I)(e3.props, e3.oldProps))
          return D(e3);
      }
      return null;
    })(e2);
    if (n2)
      return n2;
    J(e2);
  } else
    K(e2);
  if (e2.child)
    return e2.child;
  return D(e2);
}, D = (e2) => {
  for (; e2; ) {
    if (F(e2), 32 & e2.lane)
      return e2.lane &= -33, P(e2, q), null;
    if (e2.sibling)
      return e2.sibling;
    e2 = e2.parent;
  }
  return null;
}, F = (e2) => {
  e2.isComp && e2.hooks && ($(e2.hooks.layout), b(() => $(e2.hooks.effect)));
}, H = function(e2) {
  T.next = e2, T = e2;
}, I = (e2, n2) => {
  for (let t2 in e2)
    if (!(t2 in n2))
      return true;
  for (let t2 in n2)
    if (e2[t2] !== n2[t2])
      return true;
}, J = (e2) => {
  r = 0, S = e2;
  let n2 = e2.type(e2.props);
  W(e2, Q(n2));
}, K = (e2) => {
  e2.parentNode = R(e2) || {}, e2.node || ("svg" === e2.type && (e2.lane |= 16), e2.node = ((e3) => {
    const n2 = "#text" === e3.type ? document.createTextNode("") : 16 & e3.lane ? document.createElementNS("http://www.w3.org/2000/svg", e3.type) : document.createElement(e3.type);
    return t(n2, {}, e3.props), n2;
  })(e2)), e2.childNodes = Array.from(e2.node.childNodes || []), W(e2, e2.props.children);
}, Q = (e2) => te(e2) ? se(e2) : e2, R = (e2) => {
  for (; e2 = e2.parent; )
    if (!e2.isComp)
      return e2.node;
}, W = (e2, n2) => {
  var t2;
  let l = !e2.kids, r2 = e2.kids || [], o2 = e2.kids = Z(n2), s2 = 0, i = 0, a = r2.length - 1, u = o2.length - 1;
  for (; s2 <= a && i <= u && Y(r2[s2], o2[i]); )
    X(r2[s2++], o2[i++], 2);
  for (; s2 <= a && i <= u && Y(r2[a], o2[u]); )
    X(r2[a--], o2[u--], 2);
  const { diff: c, keymap: f } = function(e3, n3, t3 = 0, l2 = e3.length - 1, r3 = 0, o3 = n3.length - 1) {
    let s3, i2, a2, u2, c2, f2 = {}, d = [], h2 = 0, p = e3.length, y = n3.length, k = Math.min(p, y), g2 = Array(k + 1);
    g2[0] = -1;
    for (var m2 = 1; m2 < g2.length; m2++)
      g2[m2] = o3 + 1;
    let v2 = Array(k);
    for (m2 = r3; m2 <= o3; m2++)
      i2 = n3[m2], c2 = i2.key, null != c2 ? f2[c2] = m2 : d.push(m2);
    for (m2 = t3; m2 <= l2; m2++)
      s3 = e3[m2], u2 = null == s3.key ? d[h2++] : f2[s3.key], null != u2 && (a2 = _(g2, u2), a2 >= 0 && (g2[a2] = u2, v2[a2] = { newi: m2, oldi: u2, prev: v2[a2 - 1] }));
    a2 = g2.length - 1;
    for (; g2[a2] > o3; )
      a2--;
    let E2 = v2[a2], b2 = Array(y + p - a2), w2 = l2, C2 = o3, x2 = b2.length - 1;
    for (; E2; ) {
      const { newi: e4, oldi: n4 } = E2;
      for (; w2 > e4; )
        b2[x2--] = 4, w2--;
      for (; C2 > n4; )
        b2[x2--] = 8, C2--;
      b2[x2--] = 2, w2--, C2--, E2 = E2.prev;
    }
    for (; w2 >= t3; )
      b2[x2--] = 4, w2--;
    for (; C2 >= r3; )
      b2[x2--] = 8, C2--;
    return { diff: b2, keymap: f2 };
  }(o2, r2, i, u, s2, a);
  for (let n3, a2 = 0, u2 = s2, d = i; a2 < c.length; a2++) {
    const s3 = c[a2], i2 = null === (t2 = e2.node) || void 0 === t2 ? void 0 : t2.childNodes[u2];
    if (2 === s3)
      Y(r2[u2], o2[d]) ? X(r2[u2], o2[d], 2) : (o2[d].lane = 4, o2[d].after = i2, r2[u2].lane = 8, q.push(r2[u2]), H(o2[d])), u2++, d++;
    else if (4 === s3) {
      let e3 = o2[d];
      n3 = null != e3.key ? f[e3.key] : null, null != n3 ? (e3.after = i2, X(r2[n3], e3, 4), r2[n3] = void 0) : (e3.after = l ? null : i2, e3.lane = 4, H(e3)), d++;
    } else
      8 === s3 && u2++;
  }
  for (let e3 = 0, n3 = s2; e3 < c.length; e3++) {
    let t3 = c[e3];
    if (2 === t3)
      n3++;
    else if (8 === t3) {
      let e4 = r2[n3];
      void 0 !== e4 && (e4.lane = 8, q.push(e4)), n3++;
    }
  }
  for (let n3 = 0, t3 = null, l2 = o2.length; n3 < l2; n3++) {
    const l3 = o2[n3];
    16 & e2.lane && (l3.lane |= 16), l3.parent = e2, n3 > 0 ? t3.sibling = l3 : e2.child = l3, t3 = l3;
  }
};
function X(e2, n2, t2) {
  n2.hooks = e2.hooks, n2.ref = e2.ref, n2.node = e2.node, n2.oldProps = e2.props, n2.lane = t2, n2.kids = e2.kids, H(n2);
}
const Y = (e2, n2) => e2 && n2 && e2.key === n2.key && e2.type === n2.type, Z = (e2) => e2 ? ue(e2) ? e2 : [e2] : [], $ = (e2) => {
  e2.forEach((e3) => e3[2] && e3[2]()), e2.forEach((e3) => e3[2] = e3[0]()), e2.length = 0;
};
function _(e2, n2) {
  let t2 = 1, l = e2.length - 1;
  for (; t2 <= l; ) {
    let r2 = t2 + l >>> 1;
    n2 < e2[r2] ? l = r2 - 1 : t2 = r2 + 1;
  }
  return t2;
}
const ee = () => S || null, ne = (e2) => "function" == typeof e2, te = (e2) => "number" == typeof e2 || "string" == typeof e2, le = (e2, n2, ...t2) => {
  (t2 = re(Z((n2 = n2 || {}).children || t2))).length && (n2.children = 1 === t2.length ? t2[0] : t2);
  const l = n2.key || null, r2 = n2.ref || null;
  return l && (n2.key = void 0), r2 && (n2.ref = void 0), oe(e2, n2, l, r2);
}, re = (e2, n2 = []) => (e2.forEach((e3) => {
  var t2;
  ue(e3) ? re(e3, n2) : null != (t2 = e3) && true !== t2 && false !== t2 && n2.push(te(e3) ? se(e3) : e3);
}), n2), oe = (e2, n2, t2, l) => ({ type: e2, props: n2, key: t2, ref: l }), se = (e2) => ({ type: "#text", props: { nodeValue: e2 + "" } });
function ie(e2) {
  return e2.children;
}
const ue = Array.isArray;
export {
  U,
  ie as i,
  le as l,
  o
};
