import {
  createElementBlock,
  defineComponent,
  nextTick,
  openBlock
} from "./chunk-RJCAH2DQ.js";
import "./chunk-TWLJ45QX.js";

// node_modules/vue3-particles/dist/vue3-particles.es.js
var Xe = class {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map();
  }
  addEventListener(e, t) {
    var i;
    this.removeEventListener(e, t), this._listeners.get(e) || this._listeners.set(e, []), (i = this._listeners.get(e)) === null || i === void 0 || i.push(t);
  }
  dispatchEvent(e, t) {
    var i;
    (i = this._listeners.get(e)) === null || i === void 0 || i.forEach((s) => s(t));
  }
  hasEventListener(e) {
    return !!this._listeners.get(e);
  }
  removeAllEventListeners(e) {
    e ? this._listeners.delete(e) : this._listeners = /* @__PURE__ */ new Map();
  }
  removeEventListener(e, t) {
    const i = this._listeners.get(e);
    if (!i)
      return;
    const s = i.length, o = i.indexOf(t);
    o < 0 || (s === 1 ? this._listeners.delete(e) : i.splice(o, 1));
  }
};
var P = class {
  constructor(e, t, i) {
    if (typeof e != "number" && e) {
      this.x = e.x, this.y = e.y;
      const s = e;
      this.z = s.z ? s.z : 0;
    } else if (e !== void 0 && t !== void 0)
      this.x = e, this.y = t, this.z = i != null ? i : 0;
    else
      throw new Error("tsParticles - Vector3d not initialized correctly");
  }
  static get origin() {
    return P.create(0, 0, 0);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(e) {
    this.updateFromAngle(e, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(e) {
    this.updateFromAngle(this.angle, e);
  }
  static clone(e) {
    return P.create(e.x, e.y, e.z);
  }
  static create(e, t, i) {
    return new P(e, t, i);
  }
  add(e) {
    return P.create(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  addTo(e) {
    this.x += e.x, this.y += e.y, this.z += e.z;
  }
  copy() {
    return P.clone(this);
  }
  distanceTo(e) {
    return this.sub(e).length;
  }
  distanceToSq(e) {
    return this.sub(e).getLengthSq();
  }
  div(e) {
    return P.create(this.x / e, this.y / e, this.z / e);
  }
  divTo(e) {
    this.x /= e, this.y /= e, this.z /= e;
  }
  getLengthSq() {
    return this.x ** 2 + this.y ** 2;
  }
  mult(e) {
    return P.create(this.x * e, this.y * e, this.z * e);
  }
  multTo(e) {
    this.x *= e, this.y *= e, this.z *= e;
  }
  rotate(e) {
    return P.create(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e), 0);
  }
  setTo(e) {
    this.x = e.x, this.y = e.y;
    const t = e;
    this.z = t.z ? t.z : 0;
  }
  sub(e) {
    return P.create(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  subFrom(e) {
    this.x -= e.x, this.y -= e.y, this.z -= e.z;
  }
  updateFromAngle(e, t) {
    this.x = Math.cos(e) * t, this.y = Math.sin(e) * t;
  }
};
var F = class extends P {
  constructor(e, t) {
    super(e, t, 0);
  }
  static get origin() {
    return F.create(0, 0);
  }
  static clone(e) {
    return F.create(e.x, e.y);
  }
  static create(e, t) {
    return new F(e, t);
  }
};
var Ye = Math.random;
function D() {
  return Te(Ye(), 0, 1 - 1e-16);
}
function Te(n, e, t) {
  return Math.min(Math.max(n, e), t);
}
function H(n) {
  const e = de(n);
  let t = ue(n);
  return e === t && (t = 0), D() * (e - t) + t;
}
function y(n) {
  return typeof n == "number" ? n : H(n);
}
function ue(n) {
  return typeof n == "number" ? n : n.min;
}
function de(n) {
  return typeof n == "number" ? n : n.max;
}
function g(n, e) {
  if (n === e || e === void 0 && typeof n == "number")
    return n;
  const t = ue(n), i = de(n);
  return e !== void 0 ? {
    min: Math.min(t, e),
    max: Math.max(i, e)
  } : g(t, i);
}
function je(n) {
  const e = n.random, { enable: t, minimumValue: i } = typeof e == "boolean" ? {
    enable: e,
    minimumValue: 0
  } : e;
  return y(t ? g(n.value, i) : n.value);
}
function Je(n, e) {
  const t = n.x - e.x, i = n.y - e.y;
  return { dx: t, dy: i, distance: Math.sqrt(t * t + i * i) };
}
function fe(n, e) {
  return Je(n, e).distance;
}
function Ze(n, e, t) {
  if (typeof n == "number")
    return n * Math.PI / 180;
  switch (n) {
    case "top":
      return -Math.PI / 2;
    case "top-right":
      return -Math.PI / 4;
    case "right":
      return 0;
    case "bottom-right":
      return Math.PI / 4;
    case "bottom":
      return Math.PI / 2;
    case "bottom-left":
      return 3 * Math.PI / 4;
    case "left":
      return Math.PI;
    case "top-left":
      return -3 * Math.PI / 4;
    case "inside":
      return Math.atan2(t.y - e.y, t.x - e.x);
    case "outside":
      return Math.atan2(e.y - t.y, e.x - t.x);
    default:
      return D() * Math.PI * 2;
  }
}
function Qe(n) {
  const e = F.origin;
  return e.length = 1, e.angle = n, e;
}
function Ke(n) {
  return n.position && n.position.x !== void 0 && n.position.y !== void 0 ? {
    x: n.position.x * n.size.width / 100,
    y: n.position.y * n.size.height / 100
  } : void 0;
}
function et(n) {
  var e, t, i, s;
  return {
    x: (t = (e = n.position) === null || e === void 0 ? void 0 : e.x) !== null && t !== void 0 ? t : D() * n.size.width,
    y: (s = (i = n.position) === null || i === void 0 ? void 0 : i.y) !== null && s !== void 0 ? s : D() * n.size.height
  };
}
function Ie(n) {
  return n ? n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n) : 1;
}
function X() {
  return typeof window > "u" || !window || typeof window.document > "u" || !window.document;
}
function tt() {
  return !X() && typeof matchMedia < "u";
}
function Ee(n) {
  if (!!tt())
    return matchMedia(n);
}
function it() {
  return X() ? (n) => setTimeout(n) : (n) => (requestAnimationFrame || setTimeout)(n);
}
function st() {
  return X() ? (n) => clearTimeout(n) : (n) => (cancelAnimationFrame || clearTimeout)(n);
}
function nt(n, e) {
  return n === e || e instanceof Array && e.indexOf(n) > -1;
}
function ot(n) {
  return Math.floor(D() * n.length);
}
function pe(n, e, t = true) {
  return n[e !== void 0 && t ? e % n.length : ot(n)];
}
function z(n, ...e) {
  for (const t of e) {
    if (t == null)
      continue;
    if (typeof t != "object") {
      n = t;
      continue;
    }
    const i = Array.isArray(t);
    i && (typeof n != "object" || !n || !Array.isArray(n)) ? n = [] : !i && (typeof n != "object" || !n || Array.isArray(n)) && (n = {});
    for (const s in t) {
      if (s === "__proto__")
        continue;
      const o = t, r = o[s], l = typeof r == "object", a = n;
      a[s] = l && Array.isArray(r) ? r.map((h) => z(a[s], h)) : z(a[s], r);
    }
  }
  return n;
}
function W(n, e) {
  return n instanceof Array ? n.map((t) => e(t)) : e(n);
}
function N(n, e, t) {
  return n instanceof Array ? pe(n, e, t) : n;
}
var rt = "random";
var Z = /* @__PURE__ */ new Map();
function De(n) {
  Z.set(n.key, n);
}
function ee(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * (2 / 3 - t) * 6 : n;
}
function at(n) {
  for (const [, o] of Z)
    if (n.startsWith(o.stringPrefix))
      return o.parseString(n);
  const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, t = n.replace(e, (o, r, l, a, h) => r + r + l + l + a + a + (h !== void 0 ? h + h : "")), i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, s = i.exec(t);
  return s ? {
    a: s[4] !== void 0 ? parseInt(s[4], 16) / 255 : 1,
    b: parseInt(s[3], 16),
    g: parseInt(s[2], 16),
    r: parseInt(s[1], 16)
  } : void 0;
}
function V(n, e, t = true) {
  if (!n)
    return;
  const i = typeof n == "string" ? { value: n } : n;
  if (typeof i.value == "string")
    return Ae(i.value, e, t);
  if (i.value instanceof Array)
    return V({
      value: pe(i.value, e, t)
    });
  for (const [, s] of Z) {
    const o = s.handleRangeColor(i);
    if (o)
      return o;
  }
}
function Ae(n, e, t = true) {
  if (!n)
    return;
  const i = typeof n == "string" ? { value: n } : n;
  if (typeof i.value == "string")
    return i.value === rt ? ut() : ht(i.value);
  if (i.value instanceof Array)
    return Ae({
      value: pe(i.value, e, t)
    });
  for (const [, s] of Z) {
    const o = s.handleColor(i);
    if (o)
      return o;
  }
}
function be(n, e, t = true) {
  const i = V(n, e, t);
  return i ? lt(i) : void 0;
}
function lt(n) {
  const e = n.r / 255, t = n.g / 255, i = n.b / 255, s = Math.max(e, t, i), o = Math.min(e, t, i), r = {
    h: 0,
    l: (s + o) / 2,
    s: 0
  };
  return s !== o && (r.s = r.l < 0.5 ? (s - o) / (s + o) : (s - o) / (2 - s - o), r.h = e === s ? (t - i) / (s - o) : r.h = t === s ? 2 + (i - e) / (s - o) : 4 + (e - t) / (s - o)), r.l *= 100, r.s *= 100, r.h *= 60, r.h < 0 && (r.h += 360), r.h >= 360 && (r.h -= 360), r;
}
function ht(n) {
  return at(n);
}
function ce(n) {
  const e = { b: 0, g: 0, r: 0 }, t = {
    h: n.h / 360,
    l: n.l / 100,
    s: n.s / 100
  };
  if (!t.s)
    e.b = t.l, e.g = t.l, e.r = t.l;
  else {
    const i = t.l < 0.5 ? t.l * (1 + t.s) : t.l + t.s - t.l * t.s, s = 2 * t.l - i;
    e.r = ee(s, i, t.h + 1 / 3), e.g = ee(s, i, t.h), e.b = ee(s, i, t.h - 1 / 3);
  }
  return e.r = Math.floor(e.r * 255), e.g = Math.floor(e.g * 255), e.b = Math.floor(e.b * 255), e;
}
function ct(n) {
  const e = ce(n);
  return {
    a: n.a,
    b: e.b,
    g: e.g,
    r: e.r
  };
}
function ut(n) {
  const e = n != null ? n : 0;
  return {
    b: Math.floor(H(g(e, 256))),
    g: Math.floor(H(g(e, 256))),
    r: Math.floor(H(g(e, 256)))
  };
}
function J(n, e) {
  return `rgba(${n.r}, ${n.g}, ${n.b}, ${e != null ? e : 1})`;
}
function we(n, e) {
  return `hsla(${n.h}, ${n.s}%, ${n.l}%, ${e != null ? e : 1})`;
}
function xe(n) {
  return n !== void 0 ? {
    h: n.h.value,
    s: n.s.value,
    l: n.l.value
  } : void 0;
}
function dt(n, e, t) {
  n.fillStyle = t != null ? t : "rgba(0,0,0,0)", n.fillRect(0, 0, e.width, e.height);
}
function te(n, e) {
  n.clearRect(0, 0, e.width, e.height);
}
function ft(n) {
  var e, t, i, s, o, r;
  const { container: l, context: a, particle: h, delta: d, colorStyles: u, backgroundMask: f, composite: m, radius: c, opacity: v, shadow: p, transform: b } = n, x = h.getPosition(), R = h.rotation + (h.pathRotation ? h.velocity.angle : 0), M = {
    sin: Math.sin(R),
    cos: Math.cos(R)
  }, T = {
    a: M.cos * ((e = b.a) !== null && e !== void 0 ? e : 1),
    b: M.sin * ((t = b.b) !== null && t !== void 0 ? t : 1),
    c: -M.sin * ((i = b.c) !== null && i !== void 0 ? i : 1),
    d: M.cos * ((s = b.d) !== null && s !== void 0 ? s : 1)
  };
  a.setTransform(T.a, T.b, T.c, T.d, x.x, x.y), a.beginPath(), f && (a.globalCompositeOperation = m);
  const C = h.shadowColor;
  p.enable && C && (a.shadowBlur = p.blur, a.shadowColor = J(C), a.shadowOffsetX = p.offset.x, a.shadowOffsetY = p.offset.y), u.fill && (a.fillStyle = u.fill);
  const S = h.stroke;
  a.lineWidth = (o = h.strokeWidth) !== null && o !== void 0 ? o : 0, u.stroke && (a.strokeStyle = u.stroke), pt(l, a, h, c, v, d), ((r = S == null ? void 0 : S.width) !== null && r !== void 0 ? r : 0) > 0 && a.stroke(), h.close && a.closePath(), h.fill && a.fill(), mt(l, a, h, c, v, d), a.globalCompositeOperation = "source-over", a.setTransform(1, 0, 0, 1, 0, 0);
}
function pt(n, e, t, i, s, o) {
  if (!t.shape)
    return;
  const r = n.drawers.get(t.shape);
  !r || r.draw(e, t, i, s, o, n.retina.pixelRatio);
}
function mt(n, e, t, i, s, o) {
  if (!t.shape)
    return;
  const r = n.drawers.get(t.shape);
  !(r != null && r.afterEffect) || r.afterEffect(e, t, i, s, o, n.retina.pixelRatio);
}
function vt(n, e, t) {
  !e.draw || e.draw(n, t);
}
function gt(n, e, t, i) {
  !e.drawParticle || e.drawParticle(n, t, i);
}
function yt(n, e, t) {
  return {
    h: n.h,
    s: n.s,
    l: n.l + (e === "darken" ? -1 : 1) * t
  };
}
var G = "generated";
var ze = "touchend";
var _t = "pointerdown";
var bt = "pointerup";
var Me = "pointermove";
var wt = "touchstart";
var xt = "touchmove";
var Pe = "pointerleave";
var zt = "pointerout";
var Mt = "touchcancel";
var Pt = "resize";
var Ot = "visibilitychange";
function kt(n, e, t) {
  var i;
  const s = e[t];
  s !== void 0 && (n[t] = ((i = n[t]) !== null && i !== void 0 ? i : 1) * s);
}
var Ct = class {
  constructor(e) {
    this.container = e, this.size = {
      height: 0,
      width: 0
    }, this._context = null, this._generated = false, this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = [], this._mutationObserver = !X() && typeof MutationObserver < "u" ? new MutationObserver((t) => {
      for (const i of t)
        i.type === "attributes" && i.attributeName === "style" && this._repairStyle();
    }) : void 0;
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const e = this.container.actualOptions, t = e.particles.move.trail;
    e.backgroundMask.enable ? this.paint() : t.enable && t.length > 0 && this._trailFillColor ? this._paintBase(J(this._trailFillColor, 1 / t.length)) : this.draw((i) => {
      te(i, this.size);
    });
  }
  destroy() {
    var e, t;
    (e = this._mutationObserver) === null || e === void 0 || e.disconnect(), this._generated ? (t = this.element) === null || t === void 0 || t.remove() : this._resetOriginalStyle(), this.draw((i) => {
      te(i, this.size);
    }), this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = [];
  }
  draw(e) {
    if (!!this._context)
      return e(this._context);
  }
  drawParticle(e, t) {
    var i;
    if (e.spawning || e.destroyed)
      return;
    const s = e.getRadius();
    if (s <= 0)
      return;
    const o = e.getFillColor(), r = (i = e.getStrokeColor()) !== null && i !== void 0 ? i : o;
    let [l, a] = this._getPluginParticleColors(e);
    l || (l = o), a || (a = r), !(!l && !a) && this.draw((h) => {
      var d, u, f, m, c;
      const v = this.container.actualOptions, p = e.options.zIndex, b = (1 - e.zIndexFactor) ** p.opacityRate, x = (f = (d = e.bubble.opacity) !== null && d !== void 0 ? d : (u = e.opacity) === null || u === void 0 ? void 0 : u.value) !== null && f !== void 0 ? f : 1, R = (c = (m = e.stroke) === null || m === void 0 ? void 0 : m.opacity) !== null && c !== void 0 ? c : x, M = x * b, T = R * b, C = {}, S = {
        fill: l ? we(l, M) : void 0
      };
      S.stroke = a ? we(a, T) : S.fill, this._applyPreDrawUpdaters(h, e, s, M, S, C), ft({
        container: this.container,
        context: h,
        particle: e,
        delta: t,
        colorStyles: S,
        backgroundMask: v.backgroundMask.enable,
        composite: v.backgroundMask.composite,
        radius: s * (1 - e.zIndexFactor) ** p.sizeRate,
        opacity: M,
        shadow: e.options.shadow,
        transform: C
      }), this._applyPostDrawUpdaters(e);
    });
  }
  drawParticlePlugin(e, t, i) {
    this.draw((s) => {
      gt(s, e, t, i);
    });
  }
  drawPlugin(e, t) {
    this.draw((i) => {
      vt(i, e, t);
    });
  }
  init() {
    var e;
    this.resize(), this._initStyle(), this._initCover(), this._initTrail(), this.initBackground(), this.element && ((e = this._mutationObserver) === null || e === void 0 || e.observe(this.element, { attributes: true })), this.initUpdaters(), this.initPlugins(), this.paint();
  }
  initBackground() {
    const e = this.container.actualOptions, t = e.background, i = this.element, s = i == null ? void 0 : i.style;
    if (!!s) {
      if (t.color) {
        const o = V(t.color);
        s.backgroundColor = o ? J(o, t.opacity) : "";
      } else
        s.backgroundColor = "";
      s.backgroundImage = t.image || "", s.backgroundPosition = t.position || "", s.backgroundRepeat = t.repeat || "", s.backgroundSize = t.size || "";
    }
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const [, e] of this.container.plugins)
      e.resize && this._resizePlugins.push(e), (e.particleFillColor || e.particleStrokeColor) && this._colorPlugins.push(e);
  }
  initUpdaters() {
    this._preDrawUpdaters = [], this._postDrawUpdaters = [];
    for (const e of this.container.particles.updaters)
      e.afterDraw && this._postDrawUpdaters.push(e), (e.getColorStyles || e.getTransformValues || e.beforeDraw) && this._preDrawUpdaters.push(e);
  }
  loadCanvas(e) {
    var t, i;
    this._generated && ((t = this.element) === null || t === void 0 || t.remove()), this._generated = e.dataset && G in e.dataset ? e.dataset[G] === "true" : this._generated, this.element = e, this.element.ariaHidden = "true", this._originalStyle = z({}, this.element.style), this.size.height = e.offsetHeight, this.size.width = e.offsetWidth, this._context = this.element.getContext("2d"), (i = this._mutationObserver) === null || i === void 0 || i.observe(this.element, { attributes: true }), this.container.retina.init(), this.initBackground();
  }
  paint() {
    const e = this.container.actualOptions;
    this.draw((t) => {
      e.backgroundMask.enable && e.backgroundMask.cover ? (te(t, this.size), this._paintBase(this._coverColorStyle)) : this._paintBase();
    });
  }
  resize() {
    if (!this.element)
      return;
    const e = this.container, t = e.retina.pixelRatio, i = e.canvas.size, s = {
      width: this.element.offsetWidth * t,
      height: this.element.offsetHeight * t
    };
    if (s.height === i.height && s.width === i.width && s.height === this.element.height && s.width === this.element.width)
      return;
    const o = Object.assign({}, i);
    this.element.width = i.width = this.element.offsetWidth * t, this.element.height = i.height = this.element.offsetHeight * t, this.container.started && (this.resizeFactor = {
      width: i.width / o.width,
      height: i.height / o.height
    });
  }
  async windowResize() {
    if (!this.element)
      return;
    this.resize();
    const e = this.container, t = e.updateActualOptions();
    e.particles.setDensity(), this._applyResizePlugins(), t && await e.refresh();
  }
  _applyPostDrawUpdaters(e) {
    var t;
    for (const i of this._postDrawUpdaters)
      (t = i.afterDraw) === null || t === void 0 || t.call(i, e);
  }
  _applyPreDrawUpdaters(e, t, i, s, o, r) {
    var l;
    for (const a of this._preDrawUpdaters) {
      if (a.getColorStyles) {
        const { fill: h, stroke: d } = a.getColorStyles(t, e, i, s);
        h && (o.fill = h), d && (o.stroke = d);
      }
      if (a.getTransformValues) {
        const h = a.getTransformValues(t);
        for (const d in h)
          kt(r, h, d);
      }
      (l = a.beforeDraw) === null || l === void 0 || l.call(a, t);
    }
  }
  _applyResizePlugins() {
    for (const e of this._resizePlugins)
      e.resize && e.resize();
  }
  _getPluginParticleColors(e) {
    let t, i;
    for (const s of this._colorPlugins)
      if (!t && s.particleFillColor && (t = be(s.particleFillColor(e))), !i && s.particleStrokeColor && (i = be(s.particleStrokeColor(e))), t && i)
        break;
    return [t, i];
  }
  _initCover() {
    const e = this.container.actualOptions, t = e.backgroundMask.cover, i = t.color, s = V(i);
    if (s) {
      const o = {
        r: s.r,
        g: s.g,
        b: s.b,
        a: t.opacity
      };
      this._coverColorStyle = J(o, o.a);
    }
  }
  _initStyle() {
    const e = this.element, t = this.container.actualOptions;
    if (!!e) {
      this._fullScreen ? (this._originalStyle = z({}, e.style), this._setFullScreenStyle()) : this._resetOriginalStyle();
      for (const i in t.style) {
        if (!i || !t.style)
          continue;
        const s = t.style[i];
        !s || e.style.setProperty(i, s, "important");
      }
    }
  }
  _initTrail() {
    const e = this.container.actualOptions, t = e.particles.move.trail, i = V(t.fillColor);
    if (i) {
      const s = e.particles.move.trail;
      this._trailFillColor = Object.assign(Object.assign({}, i), { a: 1 / s.length });
    }
  }
  _paintBase(e) {
    this.draw((t) => {
      dt(t, this.size, e);
    });
  }
  _repairStyle() {
    var e, t;
    const i = this.element;
    !i || ((e = this._mutationObserver) === null || e === void 0 || e.disconnect(), this._initStyle(), this.initBackground(), (t = this._mutationObserver) === null || t === void 0 || t.observe(i, { attributes: true }));
  }
  _resetOriginalStyle() {
    const e = this.element, t = this._originalStyle;
    !(e && t) || (e.style.position = t.position, e.style.zIndex = t.zIndex, e.style.top = t.top, e.style.left = t.left, e.style.width = t.width, e.style.height = t.height);
  }
  _setFullScreenStyle() {
    const e = this.element;
    if (!e)
      return;
    const t = "important";
    e.style.setProperty("position", "fixed", t), e.style.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), t), e.style.setProperty("top", "0", t), e.style.setProperty("left", "0", t), e.style.setProperty("width", "100%", t), e.style.setProperty("height", "100%", t);
  }
};
function O(n, e, t, i, s) {
  if (i) {
    let o = { passive: true };
    typeof s == "boolean" ? o.capture = s : s !== void 0 && (o = s), n.addEventListener(e, t, o);
  } else {
    const o = s;
    n.removeEventListener(e, t, o);
  }
}
var St = class {
  constructor(e) {
    this.container = e, this.canPush = true, this.mouseMoveHandler = (t) => this.mouseTouchMove(t), this.touchStartHandler = (t) => this.mouseTouchMove(t), this.touchMoveHandler = (t) => this.mouseTouchMove(t), this.touchEndHandler = () => this.mouseTouchFinish(), this.mouseLeaveHandler = () => this.mouseTouchFinish(), this.touchCancelHandler = () => this.mouseTouchFinish(), this.touchEndClickHandler = (t) => this.mouseTouchClick(t), this.mouseUpHandler = (t) => this.mouseTouchClick(t), this.mouseDownHandler = () => this.mouseDown(), this.visibilityChangeHandler = () => this.handleVisibilityChange(), this.themeChangeHandler = (t) => this.handleThemeChange(t), this.oldThemeChangeHandler = (t) => this.handleThemeChange(t), this.resizeHandler = () => this.handleWindowResize();
  }
  addListeners() {
    this.manageListeners(true);
  }
  removeListeners() {
    this.manageListeners(false);
  }
  doMouseTouchClick(e) {
    const t = this.container, i = t.actualOptions;
    if (this.canPush) {
      const s = t.interactivity.mouse.position;
      if (!s)
        return;
      t.interactivity.mouse.clickPosition = Object.assign({}, s), t.interactivity.mouse.clickTime = new Date().getTime();
      const o = i.interactivity.events.onClick;
      W(o.mode, (r) => this.handleClickMode(r));
    }
    e.type === "touchend" && setTimeout(() => this.mouseTouchFinish(), 500);
  }
  handleClickMode(e) {
    this.container.handleClickMode(e);
  }
  handleThemeChange(e) {
    const t = e, i = t.matches ? this.container.options.defaultThemes.dark : this.container.options.defaultThemes.light, s = this.container.options.themes.find((o) => o.name === i);
    s && s.default.auto && this.container.loadTheme(i);
  }
  handleVisibilityChange() {
    const e = this.container, t = e.actualOptions;
    this.mouseTouchFinish(), t.pauseOnBlur && (document != null && document.hidden ? (e.pageHidden = true, e.pause()) : (e.pageHidden = false, e.getAnimationStatus() ? e.play(true) : e.draw(true)));
  }
  handleWindowResize() {
    this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout(async () => {
      var e;
      return (e = this.container.canvas) === null || e === void 0 ? void 0 : e.windowResize();
    }, 500);
  }
  manageListeners(e) {
    var t;
    const i = this.container, s = i.actualOptions, o = s.interactivity.detectsOn;
    let r = Pe;
    if (o === "window")
      i.interactivity.element = window, r = zt;
    else if (o === "parent" && i.canvas.element) {
      const d = i.canvas.element;
      i.interactivity.element = (t = d.parentElement) !== null && t !== void 0 ? t : d.parentNode;
    } else
      i.interactivity.element = i.canvas.element;
    const l = Ee("(prefers-color-scheme: dark)");
    l && (l.addEventListener !== void 0 ? O(l, "change", this.themeChangeHandler, e) : l.addListener !== void 0 && (e ? l.addListener(this.oldThemeChangeHandler) : l.removeListener(this.oldThemeChangeHandler)));
    const a = i.interactivity.element;
    if (!a)
      return;
    const h = a;
    (s.interactivity.events.onHover.enable || s.interactivity.events.onClick.enable) && (O(a, Me, this.mouseMoveHandler, e), O(a, wt, this.touchStartHandler, e), O(a, xt, this.touchMoveHandler, e), s.interactivity.events.onClick.enable ? (O(a, ze, this.touchEndClickHandler, e), O(a, bt, this.mouseUpHandler, e), O(a, _t, this.mouseDownHandler, e)) : O(a, ze, this.touchEndHandler, e), O(a, r, this.mouseLeaveHandler, e), O(a, Mt, this.touchCancelHandler, e)), i.canvas.element && (i.canvas.element.style.pointerEvents = h === i.canvas.element ? "initial" : "none"), s.interactivity.events.resize && (typeof ResizeObserver < "u" ? this.resizeObserver && !e ? (i.canvas.element && this.resizeObserver.unobserve(i.canvas.element), this.resizeObserver.disconnect(), delete this.resizeObserver) : !this.resizeObserver && e && i.canvas.element && (this.resizeObserver = new ResizeObserver((d) => {
      !d.find((f) => f.target === i.canvas.element) || this.handleWindowResize();
    }), this.resizeObserver.observe(i.canvas.element)) : O(window, Pt, this.resizeHandler, e)), document && O(document, Ot, this.visibilityChangeHandler, e, false);
  }
  mouseDown() {
    const e = this.container.interactivity;
    if (e) {
      const t = e.mouse;
      t.clicking = true, t.downPosition = t.position;
    }
  }
  mouseTouchClick(e) {
    const t = this.container, i = t.actualOptions, s = t.interactivity.mouse;
    s.inside = true;
    let o = false;
    const r = s.position;
    if (!(!r || !i.interactivity.events.onClick.enable)) {
      for (const [, l] of t.plugins)
        if (!!l.clickPositionValid && (o = l.clickPositionValid(r), o))
          break;
      o || this.doMouseTouchClick(e), s.clicking = false;
    }
  }
  mouseTouchFinish() {
    const e = this.container.interactivity;
    if (!e)
      return;
    const t = e.mouse;
    delete t.position, delete t.clickPosition, delete t.downPosition, e.status = Pe, t.inside = false, t.clicking = false;
  }
  mouseTouchMove(e) {
    var t, i, s, o, r, l, a;
    const h = this.container, d = h.actualOptions;
    if (!(!((t = h.interactivity) === null || t === void 0) && t.element))
      return;
    h.interactivity.mouse.inside = true;
    let u;
    const f = h.canvas.element;
    if (e.type.startsWith("pointer")) {
      this.canPush = true;
      const c = e;
      if (h.interactivity.element === window) {
        if (f) {
          const v = f.getBoundingClientRect();
          u = {
            x: c.clientX - v.left,
            y: c.clientY - v.top
          };
        }
      } else if (d.interactivity.detectsOn === "parent") {
        const v = c.target, p = c.currentTarget, b = h.canvas.element;
        if (v && p && b) {
          const x = v.getBoundingClientRect(), R = p.getBoundingClientRect(), M = b.getBoundingClientRect();
          u = {
            x: c.offsetX + 2 * x.left - (R.left + M.left),
            y: c.offsetY + 2 * x.top - (R.top + M.top)
          };
        } else
          u = {
            x: (i = c.offsetX) !== null && i !== void 0 ? i : c.clientX,
            y: (s = c.offsetY) !== null && s !== void 0 ? s : c.clientY
          };
      } else
        c.target === h.canvas.element && (u = {
          x: (o = c.offsetX) !== null && o !== void 0 ? o : c.clientX,
          y: (r = c.offsetY) !== null && r !== void 0 ? r : c.clientY
        });
    } else {
      this.canPush = e.type !== "touchmove";
      const c = e, v = c.touches[c.touches.length - 1], p = f == null ? void 0 : f.getBoundingClientRect();
      u = {
        x: v.clientX - ((l = p == null ? void 0 : p.left) !== null && l !== void 0 ? l : 0),
        y: v.clientY - ((a = p == null ? void 0 : p.top) !== null && a !== void 0 ? a : 0)
      };
    }
    const m = h.retina.pixelRatio;
    u && (u.x *= m, u.y *= m), h.interactivity.mouse.position = u, h.interactivity.status = Me;
  }
};
function Rt(n, e = 60, t = false) {
  return {
    value: n,
    factor: t ? 60 / e : 60 * n / 1e3
  };
}
var Tt = class {
  constructor(e) {
    this.container = e;
  }
  async nextFrame(e) {
    var t;
    try {
      const i = this.container;
      if (!i.smooth && i.lastFrameTime !== void 0 && e < i.lastFrameTime + 1e3 / i.fpsLimit) {
        i.draw(false);
        return;
      }
      (t = i.lastFrameTime) !== null && t !== void 0 || (i.lastFrameTime = e);
      const s = Rt(e - i.lastFrameTime, i.fpsLimit, i.smooth);
      if (i.lifeTime += s.value, i.lastFrameTime = e, s.value > 1e3) {
        i.draw(false);
        return;
      }
      if (await i.particles.draw(s), i.duration > 0 && i.lifeTime > i.duration) {
        i.destroy();
        return;
      }
      i.getAnimationStatus() && i.draw(false);
    } catch (i) {
      console.error("tsParticles error in animation loop", i);
    }
  }
};
var k = class {
  constructor() {
    this.value = "";
  }
  static create(e, t) {
    const i = new k();
    return i.load(e), t !== void 0 && (typeof t == "string" || t instanceof Array ? i.load({ value: t }) : i.load(t)), i;
  }
  load(e) {
    (e == null ? void 0 : e.value) !== void 0 && (this.value = e.value);
  }
};
var It = class {
  constructor() {
    this.color = new k(), this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1;
  }
  load(e) {
    !e || (e.color !== void 0 && (this.color = k.create(this.color, e.color)), e.image !== void 0 && (this.image = e.image), e.position !== void 0 && (this.position = e.position), e.repeat !== void 0 && (this.repeat = e.repeat), e.size !== void 0 && (this.size = e.size), e.opacity !== void 0 && (this.opacity = e.opacity));
  }
};
var Et = class {
  constructor() {
    this.color = new k(), this.color.value = "#fff", this.opacity = 1;
  }
  load(e) {
    !e || (e.color !== void 0 && (this.color = k.create(this.color, e.color)), e.opacity !== void 0 && (this.opacity = e.opacity));
  }
};
var Dt = class {
  constructor() {
    this.composite = "destination-out", this.cover = new Et(), this.enable = false;
  }
  load(e) {
    if (!!e) {
      if (e.composite !== void 0 && (this.composite = e.composite), e.cover !== void 0) {
        const t = e.cover, i = typeof e.cover == "string" ? { color: e.cover } : e.cover;
        this.cover.load(t.color !== void 0 ? t : { color: i });
      }
      e.enable !== void 0 && (this.enable = e.enable);
    }
  }
};
var At = class {
  constructor() {
    this.enable = true, this.zIndex = 0;
  }
  load(e) {
    !e || (e.enable !== void 0 && (this.enable = e.enable), e.zIndex !== void 0 && (this.zIndex = e.zIndex));
  }
};
var Lt = class {
  constructor() {
    this.enable = false, this.mode = [];
  }
  load(e) {
    !e || (e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode));
  }
};
var Oe = class {
  constructor() {
    this.selectors = [], this.enable = false, this.mode = [], this.type = "circle";
  }
  get el() {
    return this.elementId;
  }
  set el(e) {
    this.elementId = e;
  }
  get elementId() {
    return this.ids;
  }
  set elementId(e) {
    this.ids = e;
  }
  get ids() {
    return W(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = W(e, (t) => `#${t}`);
  }
  load(e) {
    var t, i;
    if (!e)
      return;
    const s = (i = (t = e.ids) !== null && t !== void 0 ? t : e.elementId) !== null && i !== void 0 ? i : e.el;
    s !== void 0 && (this.ids = s), e.selectors !== void 0 && (this.selectors = e.selectors), e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), e.type !== void 0 && (this.type = e.type);
  }
};
var Ft = class {
  constructor() {
    this.enable = false, this.force = 2, this.smooth = 10;
  }
  load(e) {
    !e || (e.enable !== void 0 && (this.enable = e.enable), e.force !== void 0 && (this.force = e.force), e.smooth !== void 0 && (this.smooth = e.smooth));
  }
};
var Ht = class {
  constructor() {
    this.enable = false, this.mode = [], this.parallax = new Ft();
  }
  load(e) {
    !e || (e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), this.parallax.load(e.parallax));
  }
};
var Vt = class {
  constructor() {
    this.onClick = new Lt(), this.onDiv = new Oe(), this.onHover = new Ht(), this.resize = true;
  }
  get onclick() {
    return this.onClick;
  }
  set onclick(e) {
    this.onClick = e;
  }
  get ondiv() {
    return this.onDiv;
  }
  set ondiv(e) {
    this.onDiv = e;
  }
  get onhover() {
    return this.onHover;
  }
  set onhover(e) {
    this.onHover = e;
  }
  load(e) {
    var t, i, s;
    if (!e)
      return;
    this.onClick.load((t = e.onClick) !== null && t !== void 0 ? t : e.onclick);
    const o = (i = e.onDiv) !== null && i !== void 0 ? i : e.ondiv;
    o !== void 0 && (this.onDiv = W(o, (r) => {
      const l = new Oe();
      return l.load(r), l;
    })), this.onHover.load((s = e.onHover) !== null && s !== void 0 ? s : e.onhover), e.resize !== void 0 && (this.resize = e.resize);
  }
};
var Wt = class {
  constructor(e, t) {
    this._engine = e, this._container = t;
  }
  load(e) {
    if (!!e && this._container) {
      const t = this._engine.plugins.interactors.get(this._container);
      if (t)
        for (const i of t)
          i.loadModeOptions && i.loadModeOptions(this, e);
    }
  }
};
var Le = class {
  constructor(e, t) {
    this.detectsOn = "window", this.events = new Vt(), this.modes = new Wt(e, t);
  }
  get detect_on() {
    return this.detectsOn;
  }
  set detect_on(e) {
    this.detectsOn = e;
  }
  load(e) {
    var t;
    if (!e)
      return;
    const i = (t = e.detectsOn) !== null && t !== void 0 ? t : e.detect_on;
    i !== void 0 && (this.detectsOn = i), this.events.load(e.events), this.modes.load(e.modes);
  }
};
var Bt = class {
  load(e) {
    var t, i;
    !e || (e.position !== void 0 && (this.position = {
      x: (t = e.position.x) !== null && t !== void 0 ? t : 50,
      y: (i = e.position.y) !== null && i !== void 0 ? i : 50
    }), e.options !== void 0 && (this.options = z({}, e.options)));
  }
};
var Ut = class {
  constructor() {
    this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas";
  }
  load(e) {
    !e || (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth), e.mode !== void 0 && (e.mode === "screen" ? this.mode = "screen" : this.mode = "canvas"), e.options !== void 0 && (this.options = z({}, e.options)));
  }
};
var qt = class {
  constructor() {
    this.auto = false, this.mode = "any", this.value = false;
  }
  load(e) {
    !e || (e.auto !== void 0 && (this.auto = e.auto), e.mode !== void 0 && (this.mode = e.mode), e.value !== void 0 && (this.value = e.value));
  }
};
var Nt = class {
  constructor() {
    this.name = "", this.default = new qt();
  }
  load(e) {
    !e || (e.name !== void 0 && (this.name = e.name), this.default.load(e.default), e.options !== void 0 && (this.options = z({}, e.options)));
  }
};
var ie = class {
  constructor() {
    this.count = 0, this.enable = false, this.offset = 0, this.speed = 1, this.decay = 0, this.sync = true;
  }
  load(e) {
    !e || (e.count !== void 0 && (this.count = g(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.offset !== void 0 && (this.offset = g(e.offset)), e.speed !== void 0 && (this.speed = g(e.speed)), e.decay !== void 0 && (this.decay = g(e.decay)), e.sync !== void 0 && (this.sync = e.sync));
  }
};
var Gt = class {
  constructor() {
    this.h = new ie(), this.s = new ie(), this.l = new ie();
  }
  load(e) {
    !e || (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l));
  }
};
var $ = class extends k {
  constructor() {
    super(), this.animation = new Gt();
  }
  static create(e, t) {
    const i = new $();
    return i.load(e), t !== void 0 && (typeof t == "string" || t instanceof Array ? i.load({ value: t }) : i.load(t)), i;
  }
  load(e) {
    if (super.load(e), !e)
      return;
    const t = e.animation;
    t !== void 0 && (t.enable !== void 0 ? this.animation.h.load(t) : this.animation.load(e.animation));
  }
};
var $t = class {
  constructor() {
    this.speed = 2;
  }
  load(e) {
    !e || e.speed !== void 0 && (this.speed = e.speed);
  }
};
var Xt = class {
  constructor() {
    this.enable = true, this.retries = 0;
  }
  load(e) {
    !e || (e.enable !== void 0 && (this.enable = e.enable), e.retries !== void 0 && (this.retries = e.retries));
  }
};
var Yt = class {
  constructor() {
    this.enable = false, this.minimumValue = 0;
  }
  load(e) {
    !e || (e.enable !== void 0 && (this.enable = e.enable), e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue));
  }
};
var Y = class {
  constructor() {
    this.random = new Yt(), this.value = 0;
  }
  load(e) {
    !e || (typeof e.random == "boolean" ? this.random.enable = e.random : this.random.load(e.random), e.value !== void 0 && (this.value = g(e.value, this.random.enable ? this.random.minimumValue : void 0)));
  }
};
var ke = class extends Y {
  constructor() {
    super(), this.random.minimumValue = 0.1, this.value = 1;
  }
};
var Fe = class {
  constructor() {
    this.horizontal = new ke(), this.vertical = new ke();
  }
  load(e) {
    !e || (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical));
  }
};
var jt = class {
  constructor() {
    this.absorb = new $t(), this.bounce = new Fe(), this.enable = false, this.mode = "bounce", this.overlap = new Xt();
  }
  load(e) {
    !e || (this.absorb.load(e.absorb), this.bounce.load(e.bounce), e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), this.overlap.load(e.overlap));
  }
};
var Jt = class {
  constructor() {
    this.offset = 0, this.value = 90;
  }
  load(e) {
    !e || (e.offset !== void 0 && (this.offset = g(e.offset)), e.value !== void 0 && (this.value = g(e.value)));
  }
};
var Zt = class {
  constructor() {
    this.distance = 200, this.enable = false, this.rotate = {
      x: 3e3,
      y: 3e3
    };
  }
  get rotateX() {
    return this.rotate.x;
  }
  set rotateX(e) {
    this.rotate.x = e;
  }
  get rotateY() {
    return this.rotate.y;
  }
  set rotateY(e) {
    this.rotate.y = e;
  }
  load(e) {
    var t, i, s, o;
    if (!e)
      return;
    e.distance !== void 0 && (this.distance = g(e.distance)), e.enable !== void 0 && (this.enable = e.enable);
    const r = (i = (t = e.rotate) === null || t === void 0 ? void 0 : t.x) !== null && i !== void 0 ? i : e.rotateX;
    r !== void 0 && (this.rotate.x = r);
    const l = (o = (s = e.rotate) === null || s === void 0 ? void 0 : s.y) !== null && o !== void 0 ? o : e.rotateY;
    l !== void 0 && (this.rotate.y = l);
  }
};
var Qt = class {
  constructor() {
    this.x = 50, this.y = 50, this.mode = "percent", this.radius = 0;
  }
  load(e) {
    !e || (e.x !== void 0 && (this.x = e.x), e.y !== void 0 && (this.y = e.y), e.mode !== void 0 && (this.mode = e.mode), e.radius !== void 0 && (this.radius = e.radius));
  }
};
var Kt = class {
  constructor() {
    this.acceleration = 9.81, this.enable = false, this.inverse = false, this.maxSpeed = 50;
  }
  load(e) {
    !e || (e.acceleration !== void 0 && (this.acceleration = g(e.acceleration)), e.enable !== void 0 && (this.enable = e.enable), e.inverse !== void 0 && (this.inverse = e.inverse), e.maxSpeed !== void 0 && (this.maxSpeed = g(e.maxSpeed)));
  }
};
var ei = class {
  constructor() {
    this.clamp = true, this.delay = new Y(), this.enable = false, this.options = {};
  }
  load(e) {
    !e || (e.clamp !== void 0 && (this.clamp = e.clamp), this.delay.load(e.delay), e.enable !== void 0 && (this.enable = e.enable), this.generator = e.generator, e.options && (this.options = z(this.options, e.options)));
  }
};
var ti = class {
  constructor() {
    this.enable = false, this.length = 10, this.fillColor = new k(), this.fillColor.value = "#000000";
  }
  load(e) {
    !e || (e.enable !== void 0 && (this.enable = e.enable), this.fillColor = k.create(this.fillColor, e.fillColor), e.length !== void 0 && (this.length = e.length));
  }
};
var ii = class {
  constructor() {
    this.default = "out";
  }
  load(e) {
    var t, i, s, o;
    !e || (e.default !== void 0 && (this.default = e.default), this.bottom = (t = e.bottom) !== null && t !== void 0 ? t : e.default, this.left = (i = e.left) !== null && i !== void 0 ? i : e.default, this.right = (s = e.right) !== null && s !== void 0 ? s : e.default, this.top = (o = e.top) !== null && o !== void 0 ? o : e.default);
  }
};
var si = class {
  constructor() {
    this.acceleration = 0, this.enable = false;
  }
  load(e) {
    !e || (e.acceleration !== void 0 && (this.acceleration = g(e.acceleration)), e.enable !== void 0 && (this.enable = e.enable), this.position = e.position ? z({}, e.position) : void 0);
  }
};
var ni = class {
  constructor() {
    this.angle = new Jt(), this.attract = new Zt(), this.center = new Qt(), this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = false, this.gravity = new Kt(), this.path = new ei(), this.outModes = new ii(), this.random = false, this.size = false, this.speed = 2, this.spin = new si(), this.straight = false, this.trail = new ti(), this.vibrate = false, this.warp = false;
  }
  get bounce() {
    return this.collisions;
  }
  set bounce(e) {
    this.collisions = e;
  }
  get collisions() {
    return false;
  }
  set collisions(e) {
  }
  get noise() {
    return this.path;
  }
  set noise(e) {
    this.path = e;
  }
  get outMode() {
    return this.outModes.default;
  }
  set outMode(e) {
    this.outModes.default = e;
  }
  get out_mode() {
    return this.outMode;
  }
  set out_mode(e) {
    this.outMode = e;
  }
  load(e) {
    var t, i, s;
    if (!e)
      return;
    this.angle.load(typeof e.angle == "number" ? { value: e.angle } : e.angle), this.attract.load(e.attract), this.center.load(e.center), e.decay !== void 0 && (this.decay = e.decay), e.direction !== void 0 && (this.direction = e.direction), e.distance !== void 0 && (this.distance = typeof e.distance == "number" ? {
      horizontal: e.distance,
      vertical: e.distance
    } : Object.assign({}, e.distance)), e.drift !== void 0 && (this.drift = g(e.drift)), e.enable !== void 0 && (this.enable = e.enable), this.gravity.load(e.gravity);
    const o = (i = (t = e.outModes) !== null && t !== void 0 ? t : e.outMode) !== null && i !== void 0 ? i : e.out_mode;
    o !== void 0 && (typeof o == "object" ? this.outModes.load(o) : this.outModes.load({
      default: o
    })), this.path.load((s = e.path) !== null && s !== void 0 ? s : e.noise), e.random !== void 0 && (this.random = e.random), e.size !== void 0 && (this.size = e.size), e.speed !== void 0 && (this.speed = g(e.speed)), this.spin.load(e.spin), e.straight !== void 0 && (this.straight = e.straight), this.trail.load(e.trail), e.vibrate !== void 0 && (this.vibrate = e.vibrate), e.warp !== void 0 && (this.warp = e.warp);
  }
};
var He = class {
  constructor() {
    this.count = 0, this.enable = false, this.speed = 1, this.decay = 0, this.sync = false;
  }
  load(e) {
    !e || (e.count !== void 0 && (this.count = g(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = g(e.speed)), e.decay !== void 0 && (this.decay = g(e.decay)), e.sync !== void 0 && (this.sync = e.sync));
  }
};
var oi = class extends He {
  constructor() {
    super(), this.destroy = "none", this.enable = false, this.speed = 2, this.startValue = "random", this.sync = false;
  }
  get opacity_min() {
    return this.minimumValue;
  }
  set opacity_min(e) {
    this.minimumValue = e;
  }
  load(e) {
    var t;
    !e || (super.load(e), e.destroy !== void 0 && (this.destroy = e.destroy), e.enable !== void 0 && (this.enable = e.enable), this.minimumValue = (t = e.minimumValue) !== null && t !== void 0 ? t : e.opacity_min, e.speed !== void 0 && (this.speed = e.speed), e.startValue !== void 0 && (this.startValue = e.startValue), e.sync !== void 0 && (this.sync = e.sync));
  }
};
var ri = class extends Y {
  constructor() {
    super(), this.animation = new oi(), this.random.minimumValue = 0.1, this.value = 1;
  }
  get anim() {
    return this.animation;
  }
  set anim(e) {
    this.animation = e;
  }
  load(e) {
    var t;
    if (!e)
      return;
    super.load(e);
    const i = (t = e.animation) !== null && t !== void 0 ? t : e.anim;
    i !== void 0 && (this.animation.load(i), this.value = g(this.value, this.animation.enable ? this.animation.minimumValue : void 0));
  }
};
var ai = class {
  constructor() {
    this.enable = false, this.area = 800, this.factor = 1e3;
  }
  get value_area() {
    return this.area;
  }
  set value_area(e) {
    this.area = e;
  }
  load(e) {
    var t;
    if (!e)
      return;
    e.enable !== void 0 && (this.enable = e.enable);
    const i = (t = e.area) !== null && t !== void 0 ? t : e.value_area;
    i !== void 0 && (this.area = i), e.factor !== void 0 && (this.factor = e.factor);
  }
};
var li = class {
  constructor() {
    this.density = new ai(), this.limit = 0, this.value = 100;
  }
  get max() {
    return this.limit;
  }
  set max(e) {
    this.limit = e;
  }
  load(e) {
    var t;
    if (!e)
      return;
    this.density.load(e.density);
    const i = (t = e.limit) !== null && t !== void 0 ? t : e.max;
    i !== void 0 && (this.limit = i), e.value !== void 0 && (this.value = e.value);
  }
};
var hi = class {
  constructor() {
    this.blur = 0, this.color = new k(), this.enable = false, this.offset = {
      x: 0,
      y: 0
    }, this.color.value = "#000";
  }
  load(e) {
    !e || (e.blur !== void 0 && (this.blur = e.blur), this.color = k.create(this.color, e.color), e.enable !== void 0 && (this.enable = e.enable), e.offset !== void 0 && (e.offset.x !== void 0 && (this.offset.x = e.offset.x), e.offset.y !== void 0 && (this.offset.y = e.offset.y)));
  }
};
var se = "character";
var ne = "char";
var oe = "image";
var re = "images";
var ae = "polygon";
var le = "star";
var ci = class {
  constructor() {
    this.options = {}, this.type = "circle";
  }
  get character() {
    var e;
    return (e = this.options[se]) !== null && e !== void 0 ? e : this.options[ne];
  }
  set character(e) {
    this.options[ne] = this.options[se] = e;
  }
  get custom() {
    return this.options;
  }
  set custom(e) {
    this.options = e;
  }
  get image() {
    var e;
    return (e = this.options[oe]) !== null && e !== void 0 ? e : this.options[re];
  }
  set image(e) {
    this.options[re] = this.options[oe] = e;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
  get polygon() {
    var e;
    return (e = this.options[ae]) !== null && e !== void 0 ? e : this.options[le];
  }
  set polygon(e) {
    this.options[le] = this.options[ae] = e;
  }
  get stroke() {
    return [];
  }
  set stroke(e) {
  }
  load(e) {
    var t, i, s;
    if (!e)
      return;
    const o = (t = e.options) !== null && t !== void 0 ? t : e.custom;
    if (o !== void 0)
      for (const r in o) {
        const l = o[r];
        l && (this.options[r] = z((i = this.options[r]) !== null && i !== void 0 ? i : {}, l));
      }
    this.loadShape(e.character, se, ne, true), this.loadShape(e.polygon, ae, le, false), this.loadShape((s = e.image) !== null && s !== void 0 ? s : e.images, oe, re, true), e.type !== void 0 && (this.type = e.type);
  }
  loadShape(e, t, i, s) {
    var o, r;
    if (!e)
      return;
    const l = e instanceof Array, a = l ? [] : {}, h = l !== this.options[t] instanceof Array, d = l !== this.options[i] instanceof Array;
    h && (this.options[t] = a), d && s && (this.options[i] = a), this.options[t] = z((o = this.options[t]) !== null && o !== void 0 ? o : a, e), (!this.options[i] || s) && (this.options[i] = z((r = this.options[i]) !== null && r !== void 0 ? r : a, e));
  }
};
var ui = class extends He {
  constructor() {
    super(), this.destroy = "none", this.enable = false, this.speed = 5, this.startValue = "random", this.sync = false;
  }
  get size_min() {
    return this.minimumValue;
  }
  set size_min(e) {
    this.minimumValue = e;
  }
  load(e) {
    var t;
    super.load(e), e && (e.destroy !== void 0 && (this.destroy = e.destroy), e.enable !== void 0 && (this.enable = e.enable), this.minimumValue = (t = e.minimumValue) !== null && t !== void 0 ? t : e.size_min, e.speed !== void 0 && (this.speed = e.speed), e.startValue !== void 0 && (this.startValue = e.startValue), e.sync !== void 0 && (this.sync = e.sync));
  }
};
var di = class extends Y {
  constructor() {
    super(), this.animation = new ui(), this.random.minimumValue = 1, this.value = 3;
  }
  get anim() {
    return this.animation;
  }
  set anim(e) {
    this.animation = e;
  }
  load(e) {
    var t;
    if (super.load(e), !e)
      return;
    const i = (t = e.animation) !== null && t !== void 0 ? t : e.anim;
    i !== void 0 && (this.animation.load(i), this.value = g(this.value, this.animation.enable ? this.animation.minimumValue : void 0));
  }
};
var Ce = class {
  constructor() {
    this.width = 0;
  }
  load(e) {
    !e || (e.color !== void 0 && (this.color = $.create(this.color, e.color)), e.width !== void 0 && (this.width = e.width), e.opacity !== void 0 && (this.opacity = e.opacity));
  }
};
var fi = class extends Y {
  constructor() {
    super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1;
  }
  load(e) {
    super.load(e), e && (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate), e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate), e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate));
  }
};
var pi = class {
  constructor(e, t) {
    this._engine = e, this._container = t, this.bounce = new Fe(), this.collisions = new jt(), this.color = new $(), this.color.value = "#fff", this.groups = {}, this.move = new ni(), this.number = new li(), this.opacity = new ri(), this.reduceDuplicates = false, this.shadow = new hi(), this.shape = new ci(), this.size = new di(), this.stroke = new Ce(), this.zIndex = new fi();
  }
  load(e) {
    var t, i, s, o, r, l;
    if (!e)
      return;
    if (this.bounce.load(e.bounce), this.color.load($.create(this.color, e.color)), e.groups !== void 0)
      for (const d in e.groups) {
        const u = e.groups[d];
        u !== void 0 && (this.groups[d] = z((t = this.groups[d]) !== null && t !== void 0 ? t : {}, u));
      }
    this.move.load(e.move), this.number.load(e.number), this.opacity.load(e.opacity), e.reduceDuplicates !== void 0 && (this.reduceDuplicates = e.reduceDuplicates), this.shape.load(e.shape), this.size.load(e.size), this.shadow.load(e.shadow), this.zIndex.load(e.zIndex);
    const a = (s = (i = e.move) === null || i === void 0 ? void 0 : i.collisions) !== null && s !== void 0 ? s : (o = e.move) === null || o === void 0 ? void 0 : o.bounce;
    a !== void 0 && (this.collisions.enable = a), this.collisions.load(e.collisions), e.interactivity !== void 0 && (this.interactivity = z({}, e.interactivity));
    const h = (r = e.stroke) !== null && r !== void 0 ? r : (l = e.shape) === null || l === void 0 ? void 0 : l.stroke;
    if (h && (this.stroke = W(h, (d) => {
      const u = new Ce();
      return u.load(d), u;
    })), this._container) {
      const d = this._engine.plugins.updaters.get(this._container);
      if (d)
        for (const f of d)
          f.loadOptions && f.loadOptions(this, e);
      const u = this._engine.plugins.interactors.get(this._container);
      if (u)
        for (const f of u)
          f.loadParticlesOptions && f.loadParticlesOptions(this, e);
    }
  }
};
function Ve(n, ...e) {
  for (const t of e)
    n.load(t);
}
function We(n, e, ...t) {
  const i = new pi(n, e);
  return Ve(i, ...t), i;
}
var mi = class {
  constructor(e, t) {
    this._engine = e, this._container = t, this.autoPlay = true, this.background = new It(), this.backgroundMask = new Dt(), this.defaultThemes = {}, this.delay = 0, this.fullScreen = new At(), this.detectRetina = true, this.duration = 0, this.fpsLimit = 120, this.interactivity = new Le(e, t), this.manualParticles = [], this.particles = We(this._engine, this._container), this.pauseOnBlur = true, this.pauseOnOutsideViewport = true, this.responsive = [], this.smooth = false, this.style = {}, this.themes = [], this.zLayers = 100;
  }
  get backgroundMode() {
    return this.fullScreen;
  }
  set backgroundMode(e) {
    this.fullScreen.load(e);
  }
  get fps_limit() {
    return this.fpsLimit;
  }
  set fps_limit(e) {
    this.fpsLimit = e;
  }
  get retina_detect() {
    return this.detectRetina;
  }
  set retina_detect(e) {
    this.detectRetina = e;
  }
  load(e) {
    var t, i, s, o, r;
    if (!e)
      return;
    e.preset !== void 0 && W(e.preset, (u) => this._importPreset(u)), e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay), e.delay !== void 0 && (this.delay = g(e.delay));
    const l = (t = e.detectRetina) !== null && t !== void 0 ? t : e.retina_detect;
    l !== void 0 && (this.detectRetina = l), e.duration !== void 0 && (this.duration = g(e.duration));
    const a = (i = e.fpsLimit) !== null && i !== void 0 ? i : e.fps_limit;
    a !== void 0 && (this.fpsLimit = a), e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur), e.pauseOnOutsideViewport !== void 0 && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport), e.zLayers !== void 0 && (this.zLayers = e.zLayers), this.background.load(e.background);
    const h = (s = e.fullScreen) !== null && s !== void 0 ? s : e.backgroundMode;
    typeof h == "boolean" ? this.fullScreen.enable = h : this.fullScreen.load(h), this.backgroundMask.load(e.backgroundMask), this.interactivity.load(e.interactivity), e.manualParticles !== void 0 && (this.manualParticles = e.manualParticles.map((u) => {
      const f = new Bt();
      return f.load(u), f;
    })), this.particles.load(e.particles), this.style = z(this.style, e.style), this._engine.plugins.loadOptions(this, e), e.smooth !== void 0 && (this.smooth = e.smooth);
    const d = this._engine.plugins.interactors.get(this._container);
    if (d)
      for (const u of d)
        u.loadOptions && u.loadOptions(this, e);
    if (e.responsive !== void 0)
      for (const u of e.responsive) {
        const f = new Ut();
        f.load(u), this.responsive.push(f);
      }
    if (this.responsive.sort((u, f) => u.maxWidth - f.maxWidth), e.themes !== void 0)
      for (const u of e.themes) {
        const f = new Nt();
        f.load(u), this.themes.push(f);
      }
    this.defaultThemes.dark = (o = this._findDefaultTheme("dark")) === null || o === void 0 ? void 0 : o.name, this.defaultThemes.light = (r = this._findDefaultTheme("light")) === null || r === void 0 ? void 0 : r.name;
  }
  setResponsive(e, t, i) {
    this.load(i);
    const s = this.responsive.find((o) => o.mode === "screen" && screen ? o.maxWidth > screen.availWidth : o.maxWidth * t > e);
    return this.load(s == null ? void 0 : s.options), s == null ? void 0 : s.maxWidth;
  }
  setTheme(e) {
    if (e) {
      const t = this.themes.find((i) => i.name === e);
      t && this.load(t.options);
    } else {
      const t = Ee("(prefers-color-scheme: dark)"), i = t && t.matches, s = this._findDefaultTheme(i ? "dark" : "light");
      s && this.load(s.options);
    }
  }
  _findDefaultTheme(e) {
    var t;
    return (t = this.themes.find((i) => i.default.value && i.default.mode === e)) !== null && t !== void 0 ? t : this.themes.find((i) => i.default.value && i.default.mode === "any");
  }
  _importPreset(e) {
    this.load(this._engine.plugins.getPreset(e));
  }
};
var vi = class {
  constructor(e, t) {
    this.container = t, this._engine = e, this._interactors = this._engine.plugins.getInteractors(this.container, true), this._externalInteractors = [], this._particleInteractors = [];
  }
  async externalInteract(e) {
    for (const t of this._externalInteractors)
      t.isEnabled() && await t.interact(e);
  }
  handleClickMode(e) {
    for (const t of this._externalInteractors)
      t.handleClickMode && t.handleClickMode(e);
  }
  init() {
    this._externalInteractors = [], this._particleInteractors = [];
    for (const e of this._interactors) {
      switch (e.type) {
        case 0:
          this._externalInteractors.push(e);
          break;
        case 1:
          this._particleInteractors.push(e);
          break;
      }
      e.init();
    }
  }
  async particlesInteract(e, t) {
    for (const i of this._externalInteractors)
      i.clear(e, t);
    for (const i of this._particleInteractors)
      i.isEnabled(e) && await i.interact(e, t);
  }
  async reset(e) {
    for (const t of this._externalInteractors)
      t.isEnabled() && await t.reset(e);
    for (const t of this._particleInteractors)
      t.isEnabled(e) && await t.reset(e);
  }
};
var Se = (n) => {
  !nt(n.outMode, n.checkModes) || (n.coord > n.maxCoord - n.radius * 2 ? n.setCb(-n.radius) : n.coord < n.radius * 2 && n.setCb(n.radius));
};
var gi = class {
  constructor(e, t, i, s, o, r) {
    this.container = i, this._engine = e, this.init(t, s, o, r);
  }
  destroy(e) {
    if (!(this.unbreakable || this.destroyed)) {
      this.destroyed = true, this.bubble.inRange = false, this.slow.inRange = false;
      for (const [, t] of this.container.plugins)
        t.particleDestroyed && t.particleDestroyed(this, e);
      for (const t of this.container.particles.updaters)
        t.particleDestroyed && t.particleDestroyed(this, e);
    }
  }
  draw(e) {
    const t = this.container;
    for (const [, i] of t.plugins)
      t.canvas.drawParticlePlugin(i, this, e);
    t.canvas.drawParticle(this, e);
  }
  getFillColor() {
    var e, t;
    const i = (e = this.bubble.color) !== null && e !== void 0 ? e : xe(this.color);
    if (i && this.roll && (this.backColor || this.roll.alter)) {
      const s = this.roll.horizontal && this.roll.vertical ? 2 : 1, o = this.roll.horizontal ? Math.PI / 2 : 0;
      if (Math.floor((((t = this.roll.angle) !== null && t !== void 0 ? t : 0) + o) / (Math.PI / s)) % 2) {
        if (this.backColor)
          return this.backColor;
        if (this.roll.alter)
          return yt(i, this.roll.alter.type, this.roll.alter.value);
      }
    }
    return i;
  }
  getMass() {
    return this.getRadius() ** 2 * Math.PI / 2;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z
    };
  }
  getRadius() {
    var e;
    return (e = this.bubble.radius) !== null && e !== void 0 ? e : this.size.value;
  }
  getStrokeColor() {
    var e, t;
    return (t = (e = this.bubble.color) !== null && e !== void 0 ? e : xe(this.strokeColor)) !== null && t !== void 0 ? t : this.getFillColor();
  }
  init(e, t, i, s) {
    var o, r, l, a, h, d, u, f, m;
    const c = this.container, v = this._engine;
    this.id = e, this.group = s, this.fill = true, this.pathRotation = false, this.close = true, this.lastPathTime = 0, this.destroyed = false, this.unbreakable = false, this.rotation = 0, this.misplaced = false, this.retina = {
      maxDistance: {}
    }, this.outType = "normal", this.ignoresResizeRatio = true;
    const p = c.retina.pixelRatio, b = c.actualOptions, x = We(this._engine, c, b.particles), R = x.shape.type, { reduceDuplicates: M } = x;
    this.shape = N(R, this.id, M);
    const T = x.shape;
    if (i && i.shape && i.shape.type) {
      const I = i.shape.type, _e = N(I, this.id, M);
      _e && (this.shape = _e, T.load(i.shape));
    }
    this.shapeData = this._loadShapeData(T, M), x.load(i), x.load((o = this.shapeData) === null || o === void 0 ? void 0 : o.particles), this.interactivity = new Le(v, c), this.interactivity.load(c.actualOptions.interactivity), this.interactivity.load(x.interactivity), this.fill = (l = (r = this.shapeData) === null || r === void 0 ? void 0 : r.fill) !== null && l !== void 0 ? l : this.fill, this.close = (h = (a = this.shapeData) === null || a === void 0 ? void 0 : a.close) !== null && h !== void 0 ? h : this.close, this.options = x;
    const C = this.options.move.path;
    this.pathDelay = je(C.delay) * 1e3, C.generator && (this.pathGenerator = this._engine.plugins.getPathGenerator(C.generator), this.pathGenerator && c.addPath(C.generator, this.pathGenerator) && this.pathGenerator.init(c));
    const S = y(this.options.zIndex.value);
    c.retina.initParticle(this);
    const B = this.options.size, me = B.value, Q = B.animation;
    if (this.size = {
      enable: B.animation.enable,
      value: y(B.value) * c.retina.pixelRatio,
      max: de(me) * p,
      min: ue(me) * p,
      loops: 0,
      maxLoops: y(B.animation.count)
    }, Q.enable)
      switch (this.size.status = 0, this.size.decay = 1 - y(Q.decay), Q.startValue) {
        case "min":
          this.size.value = this.size.min, this.size.status = 0;
          break;
        case "random":
          this.size.value = H(this.size) * p, this.size.status = D() >= 0.5 ? 0 : 1;
          break;
        case "max":
        default:
          this.size.value = this.size.max, this.size.status = 1;
          break;
      }
    this.bubble = {
      inRange: false
    }, this.slow = {
      inRange: false,
      factor: 1
    }, this.position = this._calcPosition(c, t, Te(S, 0, c.zLayers)), this.initialPosition = this.position.copy();
    const ve = c.canvas.size, K = Object.assign({}, this.options.move.center), ge = K.mode === "percent";
    switch (this.moveCenter = {
      x: K.x * (ge ? ve.width / 100 : 1),
      y: K.y * (ge ? ve.height / 100 : 1),
      radius: (d = this.options.move.center.radius) !== null && d !== void 0 ? d : 0,
      mode: (u = this.options.move.center.mode) !== null && u !== void 0 ? u : "percent"
    }, this.direction = Ze(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
      case "inside":
        this.outType = "inside";
        break;
      case "outside":
        this.outType = "outside";
        break;
    }
    this.initialVelocity = this._calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - y(this.options.move.decay), this.offset = F.origin;
    const j = c.particles;
    j.needsSort = j.needsSort || j.lastZIndex < this.position.z, j.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / c.zLayers, this.sides = 24;
    let w = c.drawers.get(this.shape);
    w || (w = this._engine.plugins.getShapeDrawer(this.shape), w && c.drawers.set(this.shape, w)), w != null && w.loadShape && (w == null || w.loadShape(this));
    const ye = w == null ? void 0 : w.getSidesCount;
    ye && (this.sides = ye(this)), this.spawning = false, this.shadowColor = V(this.options.shadow.color);
    for (const I of c.particles.updaters)
      I.init(this);
    for (const I of c.particles.movers)
      (f = I.init) === null || f === void 0 || f.call(I, this);
    w != null && w.particleInit && w.particleInit(c, this);
    for (const [, I] of c.plugins)
      (m = I.particleCreated) === null || m === void 0 || m.call(I, this);
  }
  isInsideCanvas() {
    const e = this.getRadius(), t = this.container.canvas.size;
    return this.position.x >= -e && this.position.y >= -e && this.position.y <= t.height + e && this.position.x <= t.width + e;
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    var e;
    for (const t of this.container.particles.updaters)
      (e = t.reset) === null || e === void 0 || e.call(t, this);
  }
  _calcPosition(e, t, i, s = 0) {
    var o, r, l, a;
    for (const [, p] of e.plugins) {
      const b = p.particlePosition !== void 0 ? p.particlePosition(t, this) : void 0;
      if (b !== void 0)
        return P.create(b.x, b.y, i);
    }
    const h = e.canvas.size, d = et({
      size: h,
      position: t
    }), u = P.create(d.x, d.y, i), f = this.getRadius(), m = this.options.move.outModes, c = (p) => {
      Se({
        outMode: p,
        checkModes: ["bounce", "bounce-horizontal"],
        coord: u.x,
        maxCoord: e.canvas.size.width,
        setCb: (b) => u.x += b,
        radius: f
      });
    }, v = (p) => {
      Se({
        outMode: p,
        checkModes: ["bounce", "bounce-vertical"],
        coord: u.y,
        maxCoord: e.canvas.size.height,
        setCb: (b) => u.y += b,
        radius: f
      });
    };
    return c((o = m.left) !== null && o !== void 0 ? o : m.default), c((r = m.right) !== null && r !== void 0 ? r : m.default), v((l = m.top) !== null && l !== void 0 ? l : m.default), v((a = m.bottom) !== null && a !== void 0 ? a : m.default), this._checkOverlap(u, s) ? this._calcPosition(e, void 0, i, s + 1) : u;
  }
  _calculateVelocity() {
    const t = Qe(this.direction).copy(), i = this.options.move;
    if (i.direction === "inside" || i.direction === "outside")
      return t;
    const s = Math.PI / 180 * y(i.angle.value), o = Math.PI / 180 * y(i.angle.offset), r = {
      left: o - s / 2,
      right: o + s / 2
    };
    return i.straight || (t.angle += H(g(r.left, r.right))), i.random && typeof i.speed == "number" && (t.length *= D()), t;
  }
  _checkOverlap(e, t = 0) {
    const i = this.options.collisions, s = this.getRadius();
    if (!i.enable)
      return false;
    const o = i.overlap;
    if (o.enable)
      return false;
    const r = o.retries;
    if (r >= 0 && t > r)
      throw new Error("Particle is overlapping and can't be placed");
    let l = false;
    for (const a of this.container.particles.array)
      if (fe(e, a.position) < s + a.getRadius()) {
        l = true;
        break;
      }
    return l;
  }
  _loadShapeData(e, t) {
    const i = e.options[this.shape];
    if (i)
      return z({}, N(i, this.id, t));
  }
};
var yi = class {
  constructor(e, t) {
    this.position = e, this.particle = t;
  }
};
var Be = class {
  constructor(e, t) {
    this.position = {
      x: e,
      y: t
    };
  }
};
var Ue = class extends Be {
  constructor(e, t, i) {
    super(e, t), this.radius = i;
  }
  contains(e) {
    return fe(e, this.position) <= this.radius;
  }
  intersects(e) {
    const t = e, i = e, s = this.position, o = e.position, r = { x: Math.abs(o.x - s.x), y: Math.abs(o.y - s.y) }, l = this.radius;
    if (i.radius !== void 0) {
      const a = l + i.radius, h = Math.sqrt(r.x ** 2 + r.y ** 2);
      return a > h;
    } else if (t.size !== void 0) {
      const a = t.size.width, h = t.size.height;
      return Math.pow(r.x - a, 2) + Math.pow(r.y - h, 2) <= l ** 2 || r.x <= l + a && r.y <= l + h || r.x <= a || r.y <= h;
    }
    return false;
  }
};
var E = class extends Be {
  constructor(e, t, i, s) {
    super(e, t), this.size = {
      height: s,
      width: i
    };
  }
  contains(e) {
    const t = this.size.width, i = this.size.height, s = this.position;
    return e.x >= s.x && e.x <= s.x + t && e.y >= s.y && e.y <= s.y + i;
  }
  intersects(e) {
    e instanceof Ue && e.intersects(this);
    const t = this.size.width, i = this.size.height, s = this.position, o = e.position, r = e instanceof E ? e.size : { width: 0, height: 0 }, l = r.width, a = r.height;
    return o.x < s.x + t && o.x + l > s.x && o.y < s.y + i && o.y + a > s.y;
  }
};
var A = class {
  constructor(e, t) {
    this.rectangle = e, this.capacity = t, this._points = [], this._divided = false;
  }
  insert(e) {
    var t, i, s, o, r;
    return this.rectangle.contains(e.position) ? this._points.length < this.capacity ? (this._points.push(e), true) : (this._divided || this.subdivide(), (r = ((t = this._NE) === null || t === void 0 ? void 0 : t.insert(e)) || ((i = this._NW) === null || i === void 0 ? void 0 : i.insert(e)) || ((s = this._SE) === null || s === void 0 ? void 0 : s.insert(e)) || ((o = this._SW) === null || o === void 0 ? void 0 : o.insert(e))) !== null && r !== void 0 ? r : false) : false;
  }
  query(e, t, i) {
    var s, o, r, l;
    const a = i != null ? i : [];
    if (!e.intersects(this.rectangle))
      return [];
    for (const h of this._points)
      !e.contains(h.position) && fe(e.position, h.position) > h.particle.getRadius() && (!t || t(h.particle)) || a.push(h.particle);
    return this._divided && ((s = this._NE) === null || s === void 0 || s.query(e, t, a), (o = this._NW) === null || o === void 0 || o.query(e, t, a), (r = this._SE) === null || r === void 0 || r.query(e, t, a), (l = this._SW) === null || l === void 0 || l.query(e, t, a)), a;
  }
  queryCircle(e, t, i) {
    return this.query(new Ue(e.x, e.y, t), i);
  }
  queryRectangle(e, t, i) {
    return this.query(new E(e.x, e.y, t.width, t.height), i);
  }
  subdivide() {
    const e = this.rectangle.position.x, t = this.rectangle.position.y, i = this.rectangle.size.width, s = this.rectangle.size.height, o = this.capacity;
    this._NE = new A(new E(e, t, i / 2, s / 2), o), this._NW = new A(new E(e + i / 2, t, i / 2, s / 2), o), this._SE = new A(new E(e, t + s / 2, i / 2, s / 2), o), this._SW = new A(new E(e + i / 2, t + s / 2, i / 2, s / 2), o), this._divided = true;
  }
};
var _i = class {
  constructor(e, t) {
    this.container = t, this._engine = e, this.nextId = 0, this.array = [], this.zArray = [], this.pool = [], this.limit = 0, this.needsSort = false, this.lastZIndex = 0, this.interactionManager = new vi(this._engine, t);
    const i = this.container.canvas.size;
    this.quadTree = new A(new E(-i.width / 4, -i.height / 4, i.width * 3 / 2, i.height * 3 / 2), 4), this.movers = this._engine.plugins.getMovers(t, true), this.updaters = this._engine.plugins.getUpdaters(t, true);
  }
  get count() {
    return this.array.length;
  }
  addManualParticles() {
    const e = this.container, t = e.actualOptions;
    for (const i of t.manualParticles)
      this.addParticle(Ke({
        size: e.canvas.size,
        position: i.position
      }), i.options);
  }
  addParticle(e, t, i, s) {
    const o = this.container, r = o.actualOptions, l = r.particles.number.limit;
    if (l > 0) {
      const a = this.count + 1 - l;
      a > 0 && this.removeQuantity(a);
    }
    return this._pushParticle(e, t, i, s);
  }
  clear() {
    this.array = [], this.zArray = [];
  }
  destroy() {
    this.array = [], this.zArray = [], this.movers = [], this.updaters = [];
  }
  async draw(e) {
    const t = this.container, i = this.container.canvas.size;
    this.quadTree = new A(new E(-i.width / 4, -i.height / 4, i.width * 3 / 2, i.height * 3 / 2), 4), t.canvas.clear(), await this.update(e), this.needsSort && (this.zArray.sort((s, o) => o.position.z - s.position.z || s.id - o.id), this.lastZIndex = this.zArray[this.zArray.length - 1].position.z, this.needsSort = false);
    for (const [, s] of t.plugins)
      t.canvas.drawPlugin(s, e);
    for (const s of this.zArray)
      s.draw(e);
  }
  handleClickMode(e) {
    this.interactionManager.handleClickMode(e);
  }
  init() {
    var e;
    const t = this.container, i = t.actualOptions;
    this.lastZIndex = 0, this.needsSort = false;
    let s = false;
    this.updaters = this._engine.plugins.getUpdaters(t, true), this.interactionManager.init();
    for (const [, o] of t.plugins)
      if (o.particlesInitialization !== void 0 && (s = o.particlesInitialization()), s)
        break;
    this.interactionManager.init();
    for (const [, o] of t.pathGenerators)
      o.init(t);
    if (this.addManualParticles(), !s) {
      for (const o in i.particles.groups) {
        const r = i.particles.groups[o];
        for (let l = this.count, a = 0; a < ((e = r.number) === null || e === void 0 ? void 0 : e.value) && l < i.particles.number.value; l++, a++)
          this.addParticle(void 0, r, o);
      }
      for (let o = this.count; o < i.particles.number.value; o++)
        this.addParticle();
    }
  }
  push(e, t, i, s) {
    this.pushing = true;
    for (let o = 0; o < e; o++)
      this.addParticle(t == null ? void 0 : t.position, i, s);
    this.pushing = false;
  }
  async redraw() {
    this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
  }
  remove(e, t, i) {
    this.removeAt(this.array.indexOf(e), void 0, t, i);
  }
  removeAt(e, t = 1, i, s) {
    if (e < 0 || e > this.count)
      return;
    let o = 0;
    for (let r = e; o < t && r < this.count; r++) {
      const l = this.array[r];
      if (!l || l.group !== i)
        continue;
      l.destroy(s), this.array.splice(r--, 1);
      const a = this.zArray.indexOf(l);
      this.zArray.splice(a, 1), this.pool.push(l), o++, this._engine.dispatchEvent("particleRemoved", {
        container: this.container,
        data: {
          particle: l
        }
      });
    }
  }
  removeQuantity(e, t) {
    this.removeAt(0, e, t);
  }
  setDensity() {
    const e = this.container.actualOptions;
    for (const t in e.particles.groups)
      this._applyDensity(e.particles.groups[t], 0, t);
    this._applyDensity(e.particles, e.manualParticles.length);
  }
  async update(e) {
    var t, i;
    const s = this.container, o = [];
    for (const [, r] of s.pathGenerators)
      r.update();
    for (const [, r] of s.plugins)
      (t = r.update) === null || t === void 0 || t.call(r, e);
    for (const r of this.array) {
      const l = s.canvas.resizeFactor;
      l && !r.ignoresResizeRatio && (r.position.x *= l.width, r.position.y *= l.height, r.initialPosition.x *= l.width, r.initialPosition.y *= l.height), r.ignoresResizeRatio = false, await this.interactionManager.reset(r);
      for (const [, a] of this.container.plugins) {
        if (r.destroyed)
          break;
        (i = a.particleUpdate) === null || i === void 0 || i.call(a, r, e);
      }
      for (const a of this.movers)
        a.isEnabled(r) && a.move(r, e);
      if (r.destroyed) {
        o.push(r);
        continue;
      }
      this.quadTree.insert(new yi(r.getPosition(), r));
    }
    for (const r of o)
      this.remove(r);
    await this.interactionManager.externalInteract(e);
    for (const r of this.array) {
      for (const l of this.updaters)
        l.update(r, e);
      !r.destroyed && !r.spawning && await this.interactionManager.particlesInteract(r, e);
    }
    delete s.canvas.resizeFactor;
  }
  _applyDensity(e, t, i) {
    var s;
    if (!(!((s = e.number.density) === null || s === void 0) && s.enable))
      return;
    const o = e.number, r = this._initDensityFactor(o.density), l = o.value, a = o.limit > 0 ? o.limit : l, h = Math.min(l, a) * r + t, d = Math.min(this.count, this.array.filter((u) => u.group === i).length);
    this.limit = o.limit * r, d < h ? this.push(Math.abs(h - d), void 0, e, i) : d > h && this.removeQuantity(d - h, i);
  }
  _initDensityFactor(e) {
    const t = this.container;
    if (!t.canvas.element || !e.enable)
      return 1;
    const i = t.canvas.element, s = t.retina.pixelRatio;
    return i.width * i.height / (e.factor * s ** 2 * e.area);
  }
  _pushParticle(e, t, i, s) {
    try {
      let o = this.pool.pop();
      o ? o.init(this.nextId, e, t, i) : o = new gi(this._engine, this.nextId, this.container, e, t, i);
      let r = true;
      return s && (r = s(o)), r ? (this.array.push(o), this.zArray.push(o), this.nextId++, this._engine.dispatchEvent("particleAdded", {
        container: this.container,
        data: {
          particle: o
        }
      }), o) : void 0;
    } catch (o) {
      console.warn(`error adding particle: ${o}`);
      return;
    }
  }
};
var bi = class {
  constructor(e) {
    this.container = e;
  }
  init() {
    const e = this.container, t = e.actualOptions;
    this.pixelRatio = !t.detectRetina || X() ? 1 : window.devicePixelRatio, this.reduceFactor = 1;
    const i = this.pixelRatio;
    if (e.canvas.element) {
      const o = e.canvas.element;
      e.canvas.size.width = o.offsetWidth * i, e.canvas.size.height = o.offsetHeight * i;
    }
    const s = t.particles;
    this.attractDistance = y(s.move.attract.distance) * i, this.sizeAnimationSpeed = y(s.size.animation.speed) * i, this.maxSpeed = y(s.move.gravity.maxSpeed) * i;
  }
  initParticle(e) {
    const t = e.options, i = this.pixelRatio, s = t.move.distance, o = e.retina;
    o.attractDistance = y(t.move.attract.distance) * i, o.moveDrift = y(t.move.drift) * i, o.moveSpeed = y(t.move.speed) * i, o.sizeAnimationSpeed = y(t.size.animation.speed) * i;
    const r = o.maxDistance;
    r.horizontal = s.horizontal !== void 0 ? s.horizontal * i : void 0, r.vertical = s.vertical !== void 0 ? s.vertical * i : void 0, o.maxSpeed = y(t.move.gravity.maxSpeed) * i;
  }
};
function _(n) {
  return n && !n.destroyed;
}
function U(n, e, ...t) {
  const i = new mi(n, e);
  return Ve(i, ...t), i;
}
var wi = "default";
var Re = {
  generate: (n) => {
    const e = n.velocity.copy();
    return e.angle += e.length * Math.PI / 180, e;
  },
  init: () => {
  },
  update: () => {
  }
};
var xi = class {
  constructor(e, t, i) {
    this.id = t, this._engine = e, this.fpsLimit = 120, this.smooth = false, this._delay = 0, this.duration = 0, this.lifeTime = 0, this._firstStart = true, this.started = false, this.destroyed = false, this._paused = true, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = false, this._sourceOptions = i, this._initialSourceOptions = i, this.retina = new bi(this), this.canvas = new Ct(this), this.particles = new _i(this._engine, this), this.frameManager = new Tt(this), this.pathGenerators = /* @__PURE__ */ new Map(), this.interactivity = {
      mouse: {
        clicking: false,
        inside: false
      }
    }, this.plugins = /* @__PURE__ */ new Map(), this.drawers = /* @__PURE__ */ new Map(), this._options = U(this._engine, this), this.actualOptions = U(this._engine, this), this._eventListeners = new St(this), typeof IntersectionObserver < "u" && IntersectionObserver && (this._intersectionObserver = new IntersectionObserver((s) => this._intersectionManager(s))), this._engine.dispatchEvent("containerBuilt", { container: this });
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(e) {
    if (!_(this))
      return;
    const t = this.interactivity.element;
    if (!t)
      return;
    const i = (u, f, m) => {
      if (!_(this))
        return;
      const c = this.retina.pixelRatio, v = {
        x: f.x * c,
        y: f.y * c
      }, p = this.particles.quadTree.queryCircle(v, m * c);
      e(u, p);
    }, s = (u) => {
      if (!_(this))
        return;
      const f = u, m = {
        x: f.offsetX || f.clientX,
        y: f.offsetY || f.clientY
      };
      i(u, m, 1);
    }, o = () => {
      !_(this) || (h = true, d = false);
    }, r = () => {
      !_(this) || (d = true);
    }, l = (u) => {
      if (!!_(this)) {
        if (h && !d) {
          const f = u;
          let m = f.touches[f.touches.length - 1];
          if (!m && (m = f.changedTouches[f.changedTouches.length - 1], !m))
            return;
          const c = this.canvas.element, v = c ? c.getBoundingClientRect() : void 0, p = {
            x: m.clientX - (v ? v.left : 0),
            y: m.clientY - (v ? v.top : 0)
          };
          i(u, p, Math.max(m.radiusX, m.radiusY));
        }
        h = false, d = false;
      }
    }, a = () => {
      !_(this) || (h = false, d = false);
    };
    let h = false, d = false;
    t.addEventListener("click", s), t.addEventListener("touchstart", o), t.addEventListener("touchmove", r), t.addEventListener("touchend", l), t.addEventListener("touchcancel", a);
  }
  addPath(e, t, i = false) {
    return !_(this) || !i && this.pathGenerators.has(e) ? false : (this.pathGenerators.set(e, t != null ? t : Re), true);
  }
  destroy() {
    if (!_(this))
      return;
    this.stop(), this.particles.destroy(), this.canvas.destroy();
    for (const [, i] of this.drawers)
      i.destroy && i.destroy(this);
    for (const i of this.drawers.keys())
      this.drawers.delete(i);
    this._engine.plugins.destroy(this), this.destroyed = true;
    const e = this._engine.dom(), t = e.findIndex((i) => i === this);
    t >= 0 && e.splice(t, 1), this._engine.dispatchEvent("containerDestroyed", { container: this });
  }
  draw(e) {
    if (!_(this))
      return;
    let t = e;
    this._drawAnimationFrame = it()(async (i) => {
      t && (this.lastFrameTime = void 0, t = false), await this.frameManager.nextFrame(i);
    });
  }
  exportConfiguration() {
    return JSON.stringify(this.actualOptions, (e, t) => {
      if (!(e === "_engine" || e === "_container"))
        return t;
    }, 2);
  }
  exportImage(e, t, i) {
    const s = this.canvas.element;
    s && s.toBlob(e, t != null ? t : "image/png", i);
  }
  exportImg(e) {
    this.exportImage(e);
  }
  getAnimationStatus() {
    return !this._paused && !this.pageHidden && _(this);
  }
  handleClickMode(e) {
    if (!!_(this)) {
      this.particles.handleClickMode(e);
      for (const [, t] of this.plugins)
        t.handleClickMode && t.handleClickMode(e);
    }
  }
  async init() {
    if (!_(this))
      return;
    const e = this._engine.plugins.getSupportedShapes();
    for (const i of e) {
      const s = this._engine.plugins.getShapeDrawer(i);
      s && this.drawers.set(i, s);
    }
    this._options = U(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = U(this._engine, this, this._options);
    const t = this._engine.plugins.getAvailablePlugins(this);
    for (const [i, s] of t)
      this.plugins.set(i, s);
    this.retina.init(), this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this.duration = y(this.actualOptions.duration) * 1e3, this._delay = y(this.actualOptions.delay) * 1e3, this.lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120, this.smooth = this.actualOptions.smooth;
    for (const [, i] of this.drawers)
      i.init && await i.init(this);
    for (const [, i] of this.plugins)
      i.init && await i.init();
    this._engine.dispatchEvent("containerInit", { container: this }), this.particles.init(), this.particles.setDensity();
    for (const [, i] of this.plugins)
      i.particlesSetup && i.particlesSetup();
    this._engine.dispatchEvent("particlesSetup", { container: this });
  }
  async loadTheme(e) {
    !_(this) || (this._currentTheme = e, await this.refresh());
  }
  pause() {
    if (!!_(this) && (this._drawAnimationFrame !== void 0 && (st()(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
      for (const [, e] of this.plugins)
        e.pause && e.pause();
      this.pageHidden || (this._paused = true), this._engine.dispatchEvent("containerPaused", { container: this });
    }
  }
  play(e) {
    if (!_(this))
      return;
    const t = this._paused || e;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = false;
      return;
    }
    if (this._paused && (this._paused = false), t)
      for (const [, i] of this.plugins)
        i.play && i.play();
    this._engine.dispatchEvent("containerPlay", { container: this }), this.draw(t || false);
  }
  async refresh() {
    if (!!_(this))
      return this.stop(), this.start();
  }
  async reset() {
    if (!!_(this))
      return this._options = U(this._engine, this), this.refresh();
  }
  setNoise(e, t, i) {
    !_(this) || this.setPath(e, t, i);
  }
  setPath(e, t, i) {
    if (!e || !_(this))
      return;
    const s = Object.assign({}, Re);
    if (typeof e == "function")
      s.generate = e, t && (s.init = t), i && (s.update = i);
    else {
      const o = s;
      s.generate = e.generate || o.generate, s.init = e.init || o.init, s.update = e.update || o.update;
    }
    this.addPath(wi, s, true);
  }
  async start() {
    !_(this) || this.started || (await this.init(), this.started = true, await new Promise((e) => {
      this._delayTimeout = setTimeout(async () => {
        this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element);
        for (const [, t] of this.plugins)
          t.start && await t.start();
        this._engine.dispatchEvent("containerStarted", { container: this }), this.play(), e();
      }, this._delay);
    }));
  }
  stop() {
    if (!(!_(this) || !this.started)) {
      this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout), this._firstStart = true, this.started = false, this._eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.clear(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element);
      for (const [, e] of this.plugins)
        e.stop && e.stop();
      for (const e of this.plugins.keys())
        this.plugins.delete(e);
      this._sourceOptions = this._options, this._engine.dispatchEvent("containerStopped", { container: this });
    }
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const e = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
    return this.actualOptions.setTheme(this._currentTheme), this.responsiveMaxWidth === e ? false : (this.responsiveMaxWidth = e, true);
  }
  _intersectionManager(e) {
    if (!(!_(this) || !this.actualOptions.pauseOnOutsideViewport))
      for (const t of e)
        t.target === this.interactivity.element && (t.isIntersecting ? this.play : this.pause)();
  }
};
function zi(n) {
  console.error(`tsParticles - Error ${n} while retrieving config file`);
}
async function Mi(n, e) {
  const t = N(n, e);
  if (!t)
    return;
  const i = await fetch(t);
  if (i.ok)
    return i.json();
  zi(i.status);
}
var Pi = class {
  constructor(e) {
    this._engine = e;
  }
  load(e, t, i) {
    const s = { index: i, remote: false };
    return typeof e == "string" ? s.tagId = e : s.options = e, typeof t == "number" ? s.index = t : s.options = t != null ? t : s.options, this.loadOptions(s);
  }
  async loadJSON(e, t, i) {
    let s, o;
    return typeof t == "number" || t === void 0 ? s = e : (o = e, s = t), this.loadRemoteOptions({ tagId: o, url: s, index: i, remote: true });
  }
  async loadOptions(e) {
    var t, i, s;
    const o = (t = e.tagId) !== null && t !== void 0 ? t : `tsparticles${Math.floor(D() * 1e4)}`, { index: r, url: l, remote: a } = e, h = a ? await Mi(l, r) : e.options;
    let d = (i = e.element) !== null && i !== void 0 ? i : document.getElementById(o);
    d || (d = document.createElement("div"), d.id = o, (s = document.querySelector("body")) === null || s === void 0 || s.append(d));
    const u = N(h, r), f = this._engine.dom(), m = f.findIndex((p) => p.id === o);
    if (m >= 0) {
      const p = this._engine.domItem(m);
      p && !p.destroyed && (p.destroy(), f.splice(m, 1));
    }
    let c;
    if (d.tagName.toLowerCase() === "canvas")
      c = d, c.dataset[G] = "false";
    else {
      const p = d.getElementsByTagName("canvas");
      p.length ? (c = p[0], c.dataset[G] = "false") : (c = document.createElement("canvas"), c.dataset[G] = "true", d.appendChild(c));
    }
    c.style.width || (c.style.width = "100%"), c.style.height || (c.style.height = "100%");
    const v = new xi(this._engine, o, u);
    return m >= 0 ? f.splice(m, 0, v) : f.push(v), v.canvas.loadCanvas(c), await v.start(), v;
  }
  async loadRemoteOptions(e) {
    return this.loadOptions(e);
  }
  async set(e, t, i, s) {
    const o = { index: s, remote: false };
    return typeof e == "string" ? o.tagId = e : o.element = e, t instanceof HTMLElement ? o.element = t : o.options = t, typeof i == "number" ? o.index = i : o.options = i != null ? i : o.options, this.loadOptions(o);
  }
  async setJSON(e, t, i, s) {
    let o, r, l, a;
    return e instanceof HTMLElement ? (a = e, o = t, l = i) : (r = e, a = t, o = i, l = s), this.loadRemoteOptions({ tagId: r, url: o, index: l, element: a, remote: true });
  }
};
function he(n, e, t, i = false) {
  let s = e.get(n);
  return (!s || i) && (s = [...t.values()].map((o) => o(n)), e.set(n, s)), s;
}
var Oi = class {
  constructor(e) {
    this._engine = e, this.plugins = [], this._initializers = {
      interactors: /* @__PURE__ */ new Map(),
      movers: /* @__PURE__ */ new Map(),
      updaters: /* @__PURE__ */ new Map()
    }, this.interactors = /* @__PURE__ */ new Map(), this.movers = /* @__PURE__ */ new Map(), this.updaters = /* @__PURE__ */ new Map(), this.presets = /* @__PURE__ */ new Map(), this.drawers = /* @__PURE__ */ new Map(), this.pathGenerators = /* @__PURE__ */ new Map();
  }
  addInteractor(e, t) {
    this._initializers.interactors.set(e, t);
  }
  addParticleMover(e, t) {
    this._initializers.movers.set(e, t);
  }
  addParticleUpdater(e, t) {
    this._initializers.updaters.set(e, t);
  }
  addPathGenerator(e, t) {
    this.getPathGenerator(e) || this.pathGenerators.set(e, t);
  }
  addPlugin(e) {
    this.getPlugin(e.id) || this.plugins.push(e);
  }
  addPreset(e, t, i = false) {
    (i || !this.getPreset(e)) && this.presets.set(e, t);
  }
  addShapeDrawer(e, t) {
    this.getShapeDrawer(e) || this.drawers.set(e, t);
  }
  destroy(e) {
    this.updaters.delete(e), this.movers.delete(e), this.interactors.delete(e);
  }
  getAvailablePlugins(e) {
    const t = /* @__PURE__ */ new Map();
    for (const i of this.plugins)
      !i.needsPlugin(e.actualOptions) || t.set(i.id, i.getPlugin(e));
    return t;
  }
  getInteractors(e, t = false) {
    return he(e, this.interactors, this._initializers.interactors, t);
  }
  getMovers(e, t = false) {
    return he(e, this.movers, this._initializers.movers, t);
  }
  getPathGenerator(e) {
    return this.pathGenerators.get(e);
  }
  getPlugin(e) {
    return this.plugins.find((t) => t.id === e);
  }
  getPreset(e) {
    return this.presets.get(e);
  }
  getShapeDrawer(e) {
    return this.drawers.get(e);
  }
  getSupportedShapes() {
    return this.drawers.keys();
  }
  getUpdaters(e, t = false) {
    return he(e, this.updaters, this._initializers.updaters, t);
  }
  loadOptions(e, t) {
    for (const i of this.plugins)
      i.loadOptions(e, t);
  }
  loadParticlesOptions(e, t, ...i) {
    const s = this.updaters.get(e);
    if (!!s)
      for (const o of s)
        o.loadOptions && o.loadOptions(t, ...i);
  }
};
var ki = class {
  constructor() {
    this._domArray = [], this._eventDispatcher = new Xe(), this._initialized = false, this._loader = new Pi(this), this.plugins = new Oi(this);
  }
  addEventListener(e, t) {
    this._eventDispatcher.addEventListener(e, t);
  }
  async addInteractor(e, t) {
    this.plugins.addInteractor(e, t), await this.refresh();
  }
  async addMover(e, t) {
    this.plugins.addParticleMover(e, t), await this.refresh();
  }
  async addParticleUpdater(e, t) {
    this.plugins.addParticleUpdater(e, t), await this.refresh();
  }
  async addPathGenerator(e, t) {
    this.plugins.addPathGenerator(e, t), await this.refresh();
  }
  async addPlugin(e) {
    this.plugins.addPlugin(e), await this.refresh();
  }
  async addPreset(e, t, i = false) {
    this.plugins.addPreset(e, t, i), await this.refresh();
  }
  async addShape(e, t, i, s, o) {
    let r;
    typeof t == "function" ? r = {
      afterEffect: s,
      destroy: o,
      draw: t,
      init: i
    } : r = t, this.plugins.addShapeDrawer(e, r), await this.refresh();
  }
  dispatchEvent(e, t) {
    this._eventDispatcher.dispatchEvent(e, t);
  }
  dom() {
    return this._domArray;
  }
  domItem(e) {
    const t = this.dom(), i = t[e];
    if (i && !i.destroyed)
      return i;
    t.splice(e, 1);
  }
  init() {
    this._initialized || (this._initialized = true);
  }
  async load(e, t) {
    return this._loader.load(e, t);
  }
  async loadFromArray(e, t, i) {
    return this._loader.load(e, t, i);
  }
  async loadJSON(e, t, i) {
    return this._loader.loadJSON(e, t, i);
  }
  async refresh() {
    for (const e of this.dom())
      await e.refresh();
  }
  removeEventListener(e, t) {
    this._eventDispatcher.removeEventListener(e, t);
  }
  async set(e, t, i) {
    return this._loader.set(e, t, i);
  }
  async setJSON(e, t, i, s) {
    return this._loader.setJSON(e, t, i, s);
  }
  setOnClickHandler(e) {
    const t = this.dom();
    if (!t.length)
      throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
    for (const i of t)
      i.addClickHandler(e);
  }
};
var Ci = class {
  constructor() {
    this.key = "hsl", this.stringPrefix = "hsl";
  }
  handleColor(e) {
    var t;
    const i = e.value, s = (t = i.hsl) !== null && t !== void 0 ? t : e.value;
    if (s.h !== void 0 && s.l !== void 0)
      return ce(s);
  }
  handleRangeColor(e) {
    var t;
    const i = e.value, s = (t = i.hsl) !== null && t !== void 0 ? t : e.value;
    if (s.h !== void 0 && s.l !== void 0)
      return ce({
        h: y(s.h),
        l: y(s.l),
        s: y(s.s)
      });
  }
  parseString(e) {
    if (!e.startsWith("hsl"))
      return;
    const t = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, i = t.exec(e);
    return i ? ct({
      a: i.length > 4 ? Ie(i[5]) : 1,
      h: parseInt(i[1], 10),
      l: parseInt(i[3], 10),
      s: parseInt(i[2], 10)
    }) : void 0;
  }
};
var Si = class {
  constructor() {
    this.key = "rgb", this.stringPrefix = "rgb";
  }
  handleColor(e) {
    var t;
    const i = e.value, s = (t = i.rgb) !== null && t !== void 0 ? t : e.value;
    if (s.r !== void 0)
      return s;
  }
  handleRangeColor(e) {
    var t;
    const i = e.value, s = (t = i.rgb) !== null && t !== void 0 ? t : e.value;
    if (s.r !== void 0)
      return {
        r: y(s.r),
        g: y(s.g),
        b: y(s.b)
      };
  }
  parseString(e) {
    if (!e.startsWith(this.stringPrefix))
      return;
    const t = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, i = t.exec(e);
    return i ? {
      a: i.length > 4 ? Ie(i[5]) : 1,
      b: parseInt(i[3], 10),
      g: parseInt(i[2], 10),
      r: parseInt(i[1], 10)
    } : void 0;
  }
};
var Ri = new Si();
var Ti = new Ci();
De(Ri);
De(Ti);
var q = new ki();
q.init();
var L;
var Ii = defineComponent({
  name: "Particles",
  props: {
    id: {
      type: String,
      required: true
    },
    options: {
      type: Object
    },
    url: {
      type: String
    },
    particlesLoaded: {
      type: Function
    },
    particlesInit: {
      type: Function
    }
  },
  mounted() {
    nextTick(async () => {
      var t;
      if (!this.id)
        throw new Error("Prop 'id' is required!");
      q.init(), this.particlesInit && await this.particlesInit(q);
      const n = (i) => {
        L = i, this.particlesLoaded && L && this.particlesLoaded(L);
      }, e = await (this.url ? q.loadJSON(this.id, this.url) : q.load(this.id, (t = this.options) != null ? t : {}));
      n(e);
    });
  },
  unmounted() {
    L && (L.destroy(), L = void 0);
  }
});
var Ei = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [i, s] of e)
    t[i] = s;
  return t;
};
var Di = ["id"];
function Ai(n, e, t, i, s, o) {
  return openBlock(), createElementBlock("div", { id: n.id }, null, 8, Di);
}
var Li = Ei(Ii, [["render", Ai]]);
var Hi = (n, e) => {
  n.component("Particles", Li);
};
export {
  Li as ParticlesComponent,
  Hi as default
};
//# sourceMappingURL=vue3-particles.js.map
