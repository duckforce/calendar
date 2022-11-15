import nt, { useMemo as I, memo as q, useCallback as W, useState as J, Fragment as rt } from "react";
var ot = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var a = [], i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        if (!!l) {
          var u = typeof l;
          if (u === "string" || u === "number")
            a.push(l);
          else if (Array.isArray(l)) {
            if (l.length) {
              var y = o.apply(null, l);
              y && a.push(y);
            }
          } else if (u === "object") {
            if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]")) {
              a.push(l.toString());
              continue;
            }
            for (var g in l)
              n.call(l, g) && l[g] && a.push(g);
          }
        }
      }
      return a.join(" ");
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(ot);
const E = ot.exports, kt = "_TimeInterval_18m0r_1", It = "_TimeCell_18m0r_9", Me = {
  TimeInterval: kt,
  TimeCell: It
};
var we = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Ot() {
  if (Ze)
    return ee;
  Ze = 1;
  var t = nt, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(y, g, S) {
    var d, _ = {}, m = null, R = null;
    S !== void 0 && (m = "" + S), g.key !== void 0 && (m = "" + g.key), g.ref !== void 0 && (R = g.ref);
    for (d in g)
      a.call(g, d) && !l.hasOwnProperty(d) && (_[d] = g[d]);
    if (y && y.defaultProps)
      for (d in g = y.defaultProps, g)
        _[d] === void 0 && (_[d] = g[d]);
    return { $$typeof: n, type: y, key: m, ref: R, props: _, _owner: i.current };
  }
  return ee.Fragment = o, ee.jsx = u, ee.jsxs = u, ee;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Ft() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = nt, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), y = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), x = Symbol.iterator, j = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = x && e[x] || e[j];
      return typeof r == "function" ? r : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          s[c - 1] = arguments[c];
        L("error", e, s);
      }
    }
    function L(e, r, s) {
      {
        var c = D.ReactDebugCurrentFrame, p = c.getStackAddendum();
        p !== "" && (r += "%s", s = s.concat([p]));
        var b = s.map(function(h) {
          return String(h);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var F = !1, z = !1, fe = !1, ge = !1, M = !1, N;
    N = Symbol.for("react.module.reference");
    function H(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === l || M || e === i || e === S || e === d || ge || e === R || F || z || fe || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === _ || e.$$typeof === u || e.$$typeof === y || e.$$typeof === g || e.$$typeof === N || e.getModuleId !== void 0));
    }
    function Z(e, r, s) {
      var c = e.displayName;
      if (c)
        return c;
      var p = r.displayName || r.name || "";
      return p !== "" ? s + "(" + p + ")" : s;
    }
    function Te(e) {
      return e.displayName || "Context";
    }
    function Y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case S:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return Te(r) + ".Consumer";
          case u:
            var s = e;
            return Te(s._context) + ".Provider";
          case g:
            return Z(e, e.render, "ForwardRef");
          case _:
            var c = e.displayName || null;
            return c !== null ? c : Y(e.type) || "Memo";
          case m: {
            var p = e, b = p._payload, h = p._init;
            try {
              return Y(h(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, X = 0, Be, Ee, je, ke, Ie, Oe, Fe;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function it() {
      {
        if (X === 0) {
          Be = console.log, Ee = console.info, je = console.warn, ke = console.error, Ie = console.group, Oe = console.groupCollapsed, Fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        X++;
      }
    }
    function lt() {
      {
        if (X--, X === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, e, {
              value: Be
            }),
            info: V({}, e, {
              value: Ee
            }),
            warn: V({}, e, {
              value: je
            }),
            error: V({}, e, {
              value: ke
            }),
            group: V({}, e, {
              value: Ie
            }),
            groupCollapsed: V({}, e, {
              value: Oe
            }),
            groupEnd: V({}, e, {
              value: Fe
            })
          });
        }
        X < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = D.ReactCurrentDispatcher, pe;
    function oe(e, r, s) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (p) {
            var c = p.stack.trim().match(/\n( *(at )?)/);
            pe = c && c[1] || "";
          }
        return `
` + pe + e;
      }
    }
    var ye = !1, ae;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ut();
    }
    function Ye(e, r) {
      if (!e || ye)
        return "";
      {
        var s = ae.get(e);
        if (s !== void 0)
          return s;
      }
      var c;
      ye = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = he.current, he.current = null, it();
      try {
        if (r) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (A) {
              c = A;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (A) {
              c = A;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            c = A;
          }
          e();
        }
      } catch (A) {
        if (A && c && typeof A.stack == "string") {
          for (var f = A.stack.split(`
`), k = c.stack.split(`
`), w = f.length - 1, B = k.length - 1; w >= 1 && B >= 0 && f[w] !== k[B]; )
            B--;
          for (; w >= 1 && B >= 0; w--, B--)
            if (f[w] !== k[B]) {
              if (w !== 1 || B !== 1)
                do
                  if (w--, B--, B < 0 || f[w] !== k[B]) {
                    var O = `
` + f[w].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, O), O;
                  }
                while (w >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        ye = !1, he.current = b, lt(), Error.prepareStackTrace = p;
      }
      var G = e ? e.displayName || e.name : "", He = G ? oe(G) : "";
      return typeof e == "function" && ae.set(e, He), He;
    }
    function ct(e, r, s) {
      return Ye(e, !1);
    }
    function dt(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function se(e, r, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ye(e, dt(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case S:
          return oe("Suspense");
        case d:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return ct(e.render);
          case _:
            return se(e.type, r, s);
          case m: {
            var c = e, p = c._payload, b = c._init;
            try {
              return se(b(p), r, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, Ae = {}, Le = D.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, s = se(e.type, e._source, r ? r.type : null);
        Le.setExtraStackFrame(s);
      } else
        Le.setExtraStackFrame(null);
    }
    function _t(e, r, s, c, p) {
      {
        var b = Function.call.bind(ie);
        for (var h in e)
          if (b(e, h)) {
            var f = void 0;
            try {
              if (typeof e[h] != "function") {
                var k = Error((c || "React class") + ": " + s + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              f = e[h](r, h, c, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              f = w;
            }
            f && !(f instanceof Error) && (le(p), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", s, h, typeof f), le(null)), f instanceof Error && !(f.message in Ae) && (Ae[f.message] = !0, le(p), C("Failed %s type: %s", s, f.message), le(null));
          }
      }
    }
    var ft = Array.isArray;
    function me(e) {
      return ft(e);
    }
    function gt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, s = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function ht(e) {
      try {
        return Ne(e), !1;
      } catch {
        return !0;
      }
    }
    function Ne(e) {
      return "" + e;
    }
    function Pe(e) {
      if (ht(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Ne(e);
    }
    var K = D.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Ve, be;
    be = {};
    function yt(e) {
      if (ie.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function mt(e) {
      if (ie.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function bt(e, r) {
      if (typeof e.ref == "string" && K.current && r && K.current.stateNode !== r) {
        var s = Y(K.current.type);
        be[s] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(K.current.type), e.ref), be[s] = !0);
      }
    }
    function vt(e, r) {
      {
        var s = function() {
          ze || (ze = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function St(e, r) {
      {
        var s = function() {
          Ve || (Ve = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Ct = function(e, r, s, c, p, b, h) {
      var f = {
        $$typeof: n,
        type: e,
        key: r,
        ref: s,
        props: h,
        _owner: b
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function Mt(e, r, s, c, p) {
      {
        var b, h = {}, f = null, k = null;
        s !== void 0 && (Pe(s), f = "" + s), mt(r) && (Pe(r.key), f = "" + r.key), yt(r) && (k = r.ref, bt(r, p));
        for (b in r)
          ie.call(r, b) && !pt.hasOwnProperty(b) && (h[b] = r[b]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (b in w)
            h[b] === void 0 && (h[b] = w[b]);
        }
        if (f || k) {
          var B = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && vt(h, B), k && St(h, B);
        }
        return Ct(e, f, k, p, c, K.current, h);
      }
    }
    var ve = D.ReactCurrentOwner, We = D.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, s = se(e.type, e._source, r ? r.type : null);
        We.setExtraStackFrame(s);
      } else
        We.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ue() {
      {
        if (ve.current) {
          var e = Y(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function xt(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + r + ":" + s + ".";
        }
        return "";
      }
    }
    var Ge = {};
    function Dt(e) {
      {
        var r = Ue();
        if (!r) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (r = `

Check the top-level render call using <` + s + ">.");
        }
        return r;
      }
    }
    function Qe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = Dt(r);
        if (Ge[s])
          return;
        Ge[s] = !0;
        var c = "";
        e && e._owner && e._owner !== ve.current && (c = " It was passed a child from " + Y(e._owner.type) + "."), U(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, c), U(null);
      }
    }
    function Je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (me(e))
          for (var s = 0; s < e.length; s++) {
            var c = e[s];
            Ce(c) && Qe(c, r);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = T(e);
          if (typeof p == "function" && p !== e.entries)
            for (var b = p.call(e), h; !(h = b.next()).done; )
              Ce(h.value) && Qe(h.value, r);
        }
      }
    }
    function wt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var s;
        if (typeof r == "function")
          s = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || r.$$typeof === _))
          s = r.propTypes;
        else
          return;
        if (s) {
          var c = Y(r);
          _t(s, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !Se) {
          Se = !0;
          var p = Y(r);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rt(e) {
      {
        for (var r = Object.keys(e.props), s = 0; s < r.length; s++) {
          var c = r[s];
          if (c !== "children" && c !== "key") {
            U(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    function qe(e, r, s, c, p, b) {
      {
        var h = H(e);
        if (!h) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = xt(p);
          k ? f += k : f += Ue();
          var w;
          e === null ? w = "null" : me(e) ? w = "array" : e !== void 0 && e.$$typeof === n ? (w = "<" + (Y(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, f);
        }
        var B = Mt(e, r, s, p, b);
        if (B == null)
          return B;
        if (h) {
          var O = r.children;
          if (O !== void 0)
            if (c)
              if (me(O)) {
                for (var G = 0; G < O.length; G++)
                  Je(O[G], e);
                Object.freeze && Object.freeze(O);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(O, e);
        }
        return e === a ? Rt(B) : wt(B), B;
      }
    }
    function Tt(e, r, s) {
      return qe(e, r, s, !0);
    }
    function Bt(e, r, s) {
      return qe(e, r, s, !1);
    }
    var Et = Bt, jt = Tt;
    te.Fragment = a, te.jsx = Et, te.jsxs = jt;
  }()), te;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Ot() : t.exports = Ft();
})(we);
const v = we.exports.jsx, P = we.exports.jsxs, $t = ({
  startValue: t,
  onStartChange: n,
  endValue: o,
  onEndChange: a,
  minStart: i,
  maxStart: l,
  minEnd: u,
  maxEnd: y
}) => /* @__PURE__ */ P("div", {
  className: E(Me.TimeInterval),
  children: [/* @__PURE__ */ v("div", {
    className: E(Me.TimeCell)
  }), /* @__PURE__ */ v("div", {
    className: E(Me.TimeCell)
  })]
}), Yt = (t, n, o) => {
  if (!n.length)
    return !1;
  const a = n[0].getTime();
  if (n.length === 2) {
    const i = n[1].getTime();
    return a < t && i > t;
  } else
    return Boolean(
      o && (a < t && o >= t || t < a && t >= o)
    );
}, At = (t) => {
  const n = new Date();
  return n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth() && n.getDate() === t.getDate();
}, Lt = (t) => {
  const n = t.getDay(), o = t.getDate() - n + (n === 0 ? -6 : 1);
  return new Date(t.setDate(o));
}, Nt = (t) => {
  const n = t.getDay(), o = t.getDate() - n + (n === 0 ? -6 : 1);
  return new Date(t.setDate(o + 7));
}, Pt = (t) => new Date(t.getFullYear(), t.getMonth() + 1, 0), Re = (t, n) => t.getMonth() === n.getMonth() && t.getFullYear() === n.getFullYear(), xe = (t, n) => t.getDate() === n.getDate() && t.getMonth() === n.getMonth() && t.getFullYear() === n.getFullYear(), zt = (t, n) => {
  const o = new Date(t.getFullYear(), t.getMonth(), t.getDate()), a = new Date(
    n[0].getFullYear(),
    n[0].getMonth(),
    n[0].getDate()
  ), i = new Date(
    n[1].getFullYear(),
    n[1].getMonth(),
    n[1].getDate()
  );
  return o >= a && o <= i;
}, Vt = (t, n) => t[0] > n[0] && t[0] < n[1] || n[0] > t[0] && n[0] < t[1], Wt = (t, n) => t.getMonth() <= n.getMonth() && t.getFullYear() <= n.getFullYear(), Ut = (t, n) => t.getMonth() >= n.getMonth() && t.getFullYear() >= n.getFullYear(), Ke = (t, n) => {
  const o = new Date(t), a = new Date(n != null ? n : t);
  return Re(o, a) && a.setMonth(a.getMonth() + 1), [o, a];
}, Gt = (t, n) => {
  const o = t.getTime();
  let a = [...n];
  return n.length ? n.length === 1 ? n[0].getTime() < o ? a.push(t) : a.unshift(t) : a.length === 2 && (a = [t]) : a.push(t), a;
}, Qt = (t, n) => t.getFullYear() <= n.getFullYear() && t.getMonth() - 1 <= n.getMonth(), Jt = (t, n) => t.getFullYear() >= n.getFullYear() && t.getMonth() + 1 >= n.getMonth(), et = (t, n, o, a) => {
  let i;
  return n ? i = new Date(
    t.setFullYear(t.getFullYear() + (a ? -1 : 1))
  ) : o ? i = new Date(
    t.setFullYear(t.getFullYear() + (a ? -10 : 10))
  ) : i = new Date(t.setMonth(t.getMonth() + (a ? -1 : 1))), i;
}, qt = (t) => t.reduce((n, o) => {
  if (o[0].getMonth() === o[1].getMonth() && o[0].getFullYear() === o[1].getFullYear())
    return n;
  const a = new Date(o[0]);
  a.getDate() !== 1 && a.setMonth(a.getMonth() + 1);
  const i = new Date(o[1]), l = new Date(i.getFullYear(), i.getMonth() + 1, 0);
  for (i.getDate() === l.getDate() && i.setMonth(i.getMonth() + 1); !Re(a, i); )
    n.push(new Date(a)), a.setMonth(a.getMonth() + 1);
  return n;
}, []), Ht = (t) => t.reduce((n, o) => {
  if (o[0].getFullYear() === o[1].getFullYear())
    return n;
  const a = new Date(o[0]);
  a.getMonth() !== 1 && a.getDate() !== 1 && a.setFullYear(a.getFullYear() + 1);
  const i = new Date(o[1]), l = new Date(i.getFullYear(), i.getMonth() + 1, 0);
  for (i.getDate() === l.getDate() && i.getMonth() === 11 && i.setFullYear(i.getFullYear() + 1); a.getFullYear() !== i.getFullYear(); )
    n.push(new Date(a)), a.setFullYear(a.getFullYear() + 1);
  return n;
}, []), $ = (t, n) => new Date(
  new Date(t || Date.now()).toLocaleString("en-US", {
    timeZone: n
  })
), at = (t, n) => t && n ? [...t, n] : n ? [n] : t, Zt = (t, n) => I(() => {
  let o = $(t, n);
  o.setDate(1), o.setUTCHours(0), o.setUTCMinutes(0), o.setUTCSeconds(0), o.setUTCMilliseconds(0), o = Lt(o);
  const a = Pt(t), i = Nt(a), l = [];
  for (; o <= i; )
    l.push(new Date(o)), o.setDate(o.getDate() + 1);
  return l;
}, [t.getDate(), t.getMonth(), t.getFullYear()]), Xt = [
  ["\u041F\u043D", "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A"],
  ["\u0412\u0442", "\u0412\u0442\u043E\u0440\u043D\u0438\u043A"],
  ["\u0421\u0440", "\u0421\u0440\u0435\u0434\u0430"],
  ["\u0427\u0442", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433"],
  ["\u041F\u0442", "\u041F\u044F\u0442\u043D\u0438\u0446\u0430"],
  ["\u0421\u0431", "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"],
  ["\u0412\u0441", "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435"]
], _e = /* @__PURE__ */ new Map([
  [0, "\u042F\u043D\u0432\u0430\u0440\u044C"],
  [1, "\u0424\u0435\u0432\u0440\u0430\u043B\u044C"],
  [2, "\u041C\u0430\u0440\u0442"],
  [3, "\u0410\u043F\u0440\u0435\u043B\u044C"],
  [4, "\u041C\u0430\u0439"],
  [5, "\u0418\u044E\u043D\u044C"],
  [6, "\u0418\u044E\u043B\u044C"],
  [7, "\u0410\u0432\u0433\u0443\u0441\u0442"],
  [8, "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C"],
  [9, "\u041E\u043A\u0442\u044F\u0431\u0440\u044C"],
  [10, "\u041D\u043E\u044F\u0431\u0440\u044C"],
  [11, "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"]
]), Kt = "_h0_1fdx3_1", en = "_h1_1fdx3_6", tn = "_h2_1fdx3_11", nn = "_h3_1fdx3_16", rn = "_bigTextRegular_1fdx3_21", on = "_bodyTextRegular_1fdx3_26", an = "_bodyTextBold_1fdx3_31", sn = "_subtextRegular_1fdx3_36", ln = "_subtextBold_1fdx3_41", un = "_subtitleBold_1fdx3_46", cn = "_captionRegular_1fdx3_52", dn = "_captionBoldV2_1fdx3_57", _n = "_captionBold_1fdx3_57", fn = "_upCaptionBold_1fdx3_67", gn = "_header_1fdx3_73", hn = "_header__leftContainer_1fdx3_81", pn = "_header__rightContainer_1fdx3_82", yn = "_paginationLimitSelectorButton_1fdx3_86", mn = "_paginationLimitSelectorButton_item_1fdx3_97", bn = "_paginationLimitSelectorButton_selected_1fdx3_100", vn = "_defaultCellStyles_1fdx3_103", Sn = "_defaultRowStyles_1fdx3_108", Cn = "_resetButtonStyles_1fdx3_112", Mn = "_cell_1fdx3_118", xn = "_inrange_1fdx3_130", Dn = "_holiday_1fdx3_134", wn = "_today_1fdx3_137", Rn = "_disabled_1fdx3_140", Tn = "_selected_1fdx3_144", Q = {
  h0: Kt,
  h1: en,
  h2: tn,
  h3: nn,
  bigTextRegular: rn,
  bodyTextRegular: on,
  bodyTextBold: an,
  subtextRegular: sn,
  subtextBold: ln,
  subtitleBold: un,
  captionRegular: cn,
  captionBoldV2: dn,
  captionBold: _n,
  upCaptionBold: fn,
  header: gn,
  header__leftContainer: hn,
  header__rightContainer: pn,
  paginationLimitSelectorButton: yn,
  paginationLimitSelectorButton_item: mn,
  paginationLimitSelectorButton_selected: bn,
  defaultCellStyles: vn,
  defaultRowStyles: Sn,
  resetButtonStyles: Cn,
  cell: Mn,
  inrange: xn,
  holiday: Dn,
  today: wn,
  disabled: Rn,
  selected: Tn
}, Bn = q(({
  date: t,
  inRange: n,
  selected: o,
  disabled: a,
  onClick: i,
  onMouseEnter: l
}) => /* @__PURE__ */ v("button", {
  className: E(Q.cell, {
    [Q.selected]: o,
    [Q.holiday]: t.getDay() === 6 || t.getDay() === 0,
    [Q.today]: At(t),
    [Q.inrange]: n,
    [Q.disabled]: a
  }),
  onClick: () => !a && i(t),
  onMouseEnter: () => l(t),
  type: "button",
  children: t.getDate()
})), En = "_h0_kp8mr_1", jn = "_h1_kp8mr_6", kn = "_h2_kp8mr_11", In = "_h3_kp8mr_16", On = "_bigTextRegular_kp8mr_21", Fn = "_bodyTextRegular_kp8mr_26", $n = "_bodyTextBold_kp8mr_31", Yn = "_subtextRegular_kp8mr_36", An = "_subtextBold_kp8mr_41", Ln = "_subtitleBold_kp8mr_46", Nn = "_captionRegular_kp8mr_52", Pn = "_captionBoldV2_kp8mr_57", zn = "_captionBold_kp8mr_57", Vn = "_upCaptionBold_kp8mr_67", Wn = "_header_kp8mr_73", Un = "_header__leftContainer_kp8mr_81", Gn = "_header__rightContainer_kp8mr_82", Qn = "_paginationLimitSelectorButton_kp8mr_86", Jn = "_paginationLimitSelectorButton_item_kp8mr_97", qn = "_paginationLimitSelectorButton_selected_kp8mr_100", Hn = "_defaultCellStyles_kp8mr_103", Zn = "_defaultRowStyles_kp8mr_108", Xn = "_resetButtonStyles_kp8mr_112", Kn = "_dayLabel_kp8mr_118", er = {
  h0: En,
  h1: jn,
  h2: kn,
  h3: In,
  bigTextRegular: On,
  bodyTextRegular: Fn,
  bodyTextBold: $n,
  subtextRegular: Yn,
  subtextBold: An,
  subtitleBold: Ln,
  captionRegular: Nn,
  captionBoldV2: Pn,
  captionBold: zn,
  upCaptionBold: Vn,
  header: Wn,
  header__leftContainer: Un,
  header__rightContainer: Gn,
  paginationLimitSelectorButton: Qn,
  paginationLimitSelectorButton_item: Jn,
  paginationLimitSelectorButton_selected: qn,
  defaultCellStyles: Hn,
  defaultRowStyles: Zn,
  resetButtonStyles: Xn,
  dayLabel: Kn
}, tr = q(({
  title: t,
  children: n
}) => /* @__PURE__ */ v("button", {
  className: E(er.dayLabel),
  title: t,
  type: "button",
  children: n
})), nr = "_h0_dm5kb_1", rr = "_h1_dm5kb_6", or = "_h2_dm5kb_11", ar = "_h3_dm5kb_16", sr = "_bigTextRegular_dm5kb_21", ir = "_bodyTextRegular_dm5kb_26", lr = "_bodyTextBold_dm5kb_31", ur = "_subtextRegular_dm5kb_36", cr = "_subtextBold_dm5kb_41", dr = "_subtitleBold_dm5kb_46", _r = "_captionRegular_dm5kb_52", fr = "_captionBoldV2_dm5kb_57", gr = "_captionBold_dm5kb_57", hr = "_upCaptionBold_dm5kb_67", pr = "_header_dm5kb_73", yr = "_header__leftContainer_dm5kb_81", mr = "_header__rightContainer_dm5kb_82", br = "_paginationLimitSelectorButton_dm5kb_86", vr = "_paginationLimitSelectorButton_item_dm5kb_97", Sr = "_paginationLimitSelectorButton_selected_dm5kb_100", Cr = "_defaultCellStyles_dm5kb_103", Mr = "_defaultRowStyles_dm5kb_108", xr = "_resetButtonStyles_dm5kb_112", Dr = "_monthsYearsContainer_dm5kb_118", wr = "_monthsYearsCell_dm5kb_127", Rr = "_today_dm5kb_137", Tr = "_selected_dm5kb_140", Br = "_disabled_dm5kb_143", ne = {
  h0: nr,
  h1: rr,
  h2: or,
  h3: ar,
  bigTextRegular: sr,
  bodyTextRegular: ir,
  bodyTextBold: lr,
  subtextRegular: ur,
  subtextBold: cr,
  subtitleBold: dr,
  captionRegular: _r,
  captionBoldV2: fr,
  captionBold: gr,
  upCaptionBold: hr,
  header: pr,
  header__leftContainer: yr,
  header__rightContainer: mr,
  paginationLimitSelectorButton: br,
  paginationLimitSelectorButton_item: vr,
  paginationLimitSelectorButton_selected: Sr,
  defaultCellStyles: Cr,
  defaultRowStyles: Mr,
  resetButtonStyles: xr,
  monthsYearsContainer: Dr,
  monthsYearsCell: wr,
  today: Rr,
  selected: Tr,
  disabled: Br
}, st = q(({
  values: t,
  selected: n,
  disabled: o,
  onSelect: a,
  today: i
}) => /* @__PURE__ */ v("div", {
  className: E(ne.monthsYearsContainer),
  children: t.map((l, u) => /* @__PURE__ */ v("div", {
    className: E(ne.monthsYearsCell, {
      [ne.disabled]: o == null ? void 0 : o.includes(l),
      [ne.selected]: n === l,
      [ne.today]: i === l
    }),
    onClick: () => !(o != null && o.includes(l)) && a(u),
    children: l
  }, l + u))
})), tt = Array.from(_e.values()), Er = q(({
  selected: t,
  onSelect: n,
  min: o,
  max: a,
  filter: i
}) => {
  var S;
  const l = I(() => i ? qt(i) : [], [i]), u = I(() => {
    const d = new Date(t || new Date());
    return Array.from(_e).reduce((_, [m, R]) => (d.setMonth(m), ((l == null ? void 0 : l.some((x) => Re(d, x))) || o && Wt(d, o) || a && Ut(d, a)) && _.push(R), _), []);
  }, [t, l, o, a]), y = W((d) => {
    const _ = new Date(t != null ? t : new Date());
    _.setMonth(d), n(_);
  }, [n, t]), g = new Date().getFullYear() === t.getFullYear() ? tt[new Date().getMonth()] : void 0;
  return /* @__PURE__ */ v(st, {
    disabled: u,
    onSelect: y,
    selected: t && (S = _e.get(t.getMonth())) != null ? S : "",
    today: g,
    values: tt
  });
}), jr = q(({
  selected: t,
  onSelect: n,
  min: o,
  max: a,
  filter: i
}) => {
  const l = I(() => i ? Ht(i) : [], [i]), u = I(() => {
    const d = (t || new Date()).getFullYear(), _ = parseInt(d.toString().slice(-1));
    let m = d - _;
    const R = [];
    for (; m < d - _ + 12; )
      R.push(m.toString()), m++;
    return R;
  }, [t]), y = I(() => u.reduce((S, d) => {
    const _ = parseInt(d);
    return ((l == null ? void 0 : l.some((m) => _ === m.getFullYear())) || o && _ < o.getFullYear() || a && _ > a.getFullYear()) && S.push(d), S;
  }, []), [l, a, o, u]), g = W((S) => {
    const d = new Date(t != null ? t : new Date());
    d.setFullYear(parseInt(u[S])), n(d);
  }, [n, t, u]);
  return /* @__PURE__ */ v(st, {
    disabled: y,
    onSelect: g,
    selected: t ? t.getFullYear().toString() : "",
    today: new Date().getFullYear().toString(),
    values: u
  });
}), kr = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43MDM1IDYuNzkyODlDMTUuMDk4OCA3LjE4MzQyIDE1LjA5ODggNy44MTY1OCAxNC43MDM1IDguMjA3MTFMMTAuODYzNSAxMkwxNC43MDM1IDE1Ljc5MjlDMTUuMDk4OCAxNi4xODM0IDE1LjA5ODggMTYuODE2NiAxNC43MDM1IDE3LjIwNzFDMTQuMzA4MSAxNy41OTc2IDEzLjY2NzEgMTcuNTk3NiAxMy4yNzE3IDE3LjIwNzFMOC43MjAyOCAxMi43MTE1QzguMzIzOTMgMTIuMzIgOC4zMjM5MiAxMS42OCA4LjcyMDI4IDExLjI4ODVMMTMuMjcxNyA2Ljc5Mjg5QzEzLjY2NzEgNi40MDIzNyAxNC4zMDgxIDYuNDAyMzcgMTQuNzAzNSA2Ljc5Mjg5WiIgZmlsbD0iIzAwNEVENiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+", Ir = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjI5NjUzIDYuNzkyODlDOC45MDExNiA3LjE4MzQyIDguOTAxMTYgNy44MTY1OCA5LjI5NjUzIDguMjA3MTFMMTMuMTM2NSAxMkw5LjI5NjUzIDE1Ljc5MjlDOC45MDExNiAxNi4xODM0IDguOTAxMTYgMTYuODE2NiA5LjI5NjUzIDE3LjIwNzFDOS42OTE5IDE3LjU5NzYgMTAuMzMyOSAxNy41OTc2IDEwLjcyODMgMTcuMjA3MUwxNS4yNzk3IDEyLjcxMTVDMTUuNjc2MSAxMi4zMiAxNS42NzYxIDExLjY4IDE1LjI3OTcgMTEuMjg4NUwxMC43MjgzIDYuNzkyODlDMTAuMzMyOSA2LjQwMjM3IDkuNjkxOSA2LjQwMjM3IDkuMjk2NTMgNi43OTI4OVoiIGZpbGw9IiMwMDRFRDYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==", Or = "_h0_19ajy_1", Fr = "_h1_19ajy_6", $r = "_h2_19ajy_11", Yr = "_h3_19ajy_16", Ar = "_bigTextRegular_19ajy_21", Lr = "_bodyTextRegular_19ajy_26", Nr = "_bodyTextBold_19ajy_31", Pr = "_subtextRegular_19ajy_36", zr = "_subtextBold_19ajy_41", Vr = "_subtitleBold_19ajy_46", Wr = "_captionRegular_19ajy_52", Ur = "_captionBoldV2_19ajy_57", Gr = "_captionBold_19ajy_57", Qr = "_upCaptionBold_19ajy_67", Jr = "_header_19ajy_73", qr = "_header__leftContainer_19ajy_81", Hr = "_header__rightContainer_19ajy_82", Zr = "_paginationLimitSelectorButton_19ajy_86", Xr = "_paginationLimitSelectorButton_item_19ajy_97", Kr = "_paginationLimitSelectorButton_selected_19ajy_100", eo = "_defaultCellStyles_19ajy_103", to = "_defaultRowStyles_19ajy_108", no = "_resetButtonStyles_19ajy_112", ro = "_slider_19ajy_118", oo = "_sliderContent_19ajy_123", ao = "_sliderArrow_19ajy_133", so = "_button_19ajy_136", ue = {
  h0: Or,
  h1: Fr,
  h2: $r,
  h3: Yr,
  bigTextRegular: Ar,
  bodyTextRegular: Lr,
  bodyTextBold: Nr,
  subtextRegular: Pr,
  subtextBold: zr,
  subtitleBold: Vr,
  captionRegular: Wr,
  captionBoldV2: Ur,
  captionBold: Gr,
  upCaptionBold: Qr,
  header: Jr,
  header__leftContainer: qr,
  header__rightContainer: Hr,
  paginationLimitSelectorButton: Zr,
  paginationLimitSelectorButton_item: Xr,
  paginationLimitSelectorButton_selected: Kr,
  defaultCellStyles: eo,
  defaultRowStyles: to,
  resetButtonStyles: no,
  slider: ro,
  sliderContent: oo,
  sliderArrow: ao,
  button: so
}, io = q(({
  onBackClick: t,
  onForwardClick: n,
  backDisabled: o,
  forwardDisabled: a,
  children: i
}) => /* @__PURE__ */ P("div", {
  className: E(ue.slider),
  children: [/* @__PURE__ */ v("img", {
    src: kr,
    className: ue.button,
    alt: "logo",
    onClick: t
  }), /* @__PURE__ */ v("div", {
    className: E(ue.sliderContent),
    children: i
  }), /* @__PURE__ */ v("img", {
    src: Ir,
    className: ue.button,
    alt: "logo",
    onClick: n
  })]
})), lo = "_wrapper_1vnyz_1", uo = "_calendar_1vnyz_4", co = "_label_1vnyz_11", _o = "_daylabels_1vnyz_17", fo = "_days_1vnyz_24", go = "_headerLabel_1vnyz_30", re = {
  wrapper: lo,
  calendar: uo,
  label: co,
  daylabels: _o,
  days: fo,
  headerLabel: go
}, De = ({
  selected: t,
  hovered: n,
  onHoveredChange: o,
  onSelect: a,
  minMonth: i,
  maxMonth: l,
  calendarDate: u,
  onCalendarChange: y,
  filter: g,
  className: S
}) => {
  const [d, _] = J(!1), [m, R] = J(!1), x = Zt(u), j = W((M) => {
    Array.isArray(t) && !t.length || o == null || o(M.getTime());
  }, [t, o]), T = W((M) => {
    y(M), _(!1);
  }, [y, _]), D = W((M) => {
    y(M), R(!1), _(!0);
  }, [y, R, _]), C = i ? Qt(u, i) : !1, L = l ? Jt(u, l) : !1, F = W(() => {
    if (!C) {
      const M = et(u, d, m, !0);
      y(M);
    }
  }, [C, y, u, d, m]), z = W(() => {
    if (!L) {
      const M = et(u, d, m);
      y(M);
    }
  }, [L, y, u, d, m]), fe = () => {
    R(!1), _(!0);
  }, ge = () => {
    _(!1), R(!0);
  };
  return /* @__PURE__ */ P("div", {
    className: E(re.calendar, S),
    children: [/* @__PURE__ */ P(io, {
      backDisabled: C,
      forwardDisabled: L,
      onBackClick: F,
      onForwardClick: z,
      children: [!d && /* @__PURE__ */ v("a", {
        className: E(re.headerLabel),
        onClick: fe,
        children: _e.get(u.getMonth())
      }), "\xA0", !m && /* @__PURE__ */ v("a", {
        className: E(re.headerLabel),
        onClick: ge,
        children: u.getFullYear()
      })]
    }), d && /* @__PURE__ */ v(Er, {
      filter: g,
      max: l,
      min: i,
      onSelect: T,
      selected: u
    }), m && /* @__PURE__ */ v(jr, {
      filter: g,
      max: l,
      min: i,
      onSelect: D,
      selected: u
    }), !d && !m && /* @__PURE__ */ P(rt, {
      children: [/* @__PURE__ */ v("div", {
        className: E(re.daylabels),
        children: Xt.map(([M, N], H) => /* @__PURE__ */ v(tr, {
          title: N,
          children: M
        }, M + H))
      }), /* @__PURE__ */ v("div", {
        className: E(re.days),
        children: x.map((M) => {
          if (M.getMonth() !== u.getMonth())
            return /* @__PURE__ */ v("div", {}, M.toString());
          let N = !1;
          Array.isArray(t) ? N = t.some((Z) => xe(Z, M)) : t && (N = xe(M, t));
          const H = g ? g.some((Z) => zt(M, Z)) : !1;
          return /* @__PURE__ */ v(Bn, {
            date: M,
            disabled: H,
            inRange: Array.isArray(t) && Yt(M.getTime(), t, n),
            onClick: a,
            onMouseEnter: j,
            selected: N
          }, M.toString());
        })
      })]
    })]
  });
}, ho = "_container_1qw3r_1", po = "_calendarChildrenBottom_1qw3r_11", yo = "_calendarNoChildrenBottom_1qw3r_14", mo = "_divider_1qw3r_17", ce = {
  container: ho,
  calendarChildrenBottom: po,
  calendarNoChildrenBottom: yo,
  divider: mo
}, bo = ({
  selected: t,
  timeZone: n,
  onChange: o,
  filter: a,
  clearable: i,
  children: l,
  minDate: u
}) => {
  const [y, g] = J(new Date()), S = I(() => {
    if (!u)
      return;
    const x = new Date(u);
    return x.setMonth(x.getMonth() - 1), x;
  }, [u]), d = I(() => S ? [S.toISOString(), u == null ? void 0 : u.toISOString()] : void 0, [S, u]), _ = I(() => {
    if (t) {
      const x = $(t, n);
      return g(new Date(x)), x;
    }
  }, [t, n]), m = I(() => {
    var x;
    return (x = at(a, d)) == null ? void 0 : x.map((j) => [$(j[0], n), $(j[1], n)]);
  }, [a, d, n]), R = (x) => {
    var T;
    let j;
    if (_ && xe(_, x)) {
      if (!i)
        return "";
      j = void 0;
    } else
      j = x;
    o && o((T = j == null ? void 0 : j.toISOString()) != null ? T : "");
  };
  return /* @__PURE__ */ P("div", {
    className: E(ce.container),
    children: [/* @__PURE__ */ v(De, {
      calendarDate: y,
      className: l ? ce.calendarChildrenBottom : ce.calendarNoChildrenBottom,
      filter: m,
      minMonth: S,
      onCalendarChange: g,
      onSelect: R,
      selected: _
    }), l && /* @__PURE__ */ P(rt, {
      children: [/* @__PURE__ */ v("div", {
        className: E(ce.divider)
      }), l]
    })]
  });
}, vo = "_container_3fa92_1", So = "_calendarCustom_3fa92_9", Co = "_divider_3fa92_12", de = {
  container: vo,
  calendarCustom: So,
  divider: Co
}, Mo = ({
  selected: t,
  timeZone: n,
  onChange: o,
  filter: a,
  minDate: i
}) => {
  const [l, u] = J(null), [y, g] = J(new Date()), [S, d] = J(new Date(new Date().setMonth(new Date().getMonth() + 1))), _ = I(() => {
    if (!i)
      return;
    const T = new Date(i);
    return T.setMonth(T.getMonth() - 1), T;
  }, [i]), m = I(() => _ ? [_.toISOString(), i == null ? void 0 : i.toISOString()] : void 0, [_, i]), R = I(() => {
    if (!Array.isArray(t) || !t.length)
      return [];
    const T = [$(t[0], n)];
    t.length === 2 && T.push($(t[1], n));
    const [D, C] = Ke(T[0], T[1]);
    return g(D), d(C), T;
  }, [t, n]), x = I(() => {
    var T;
    return (T = at(a, m)) == null ? void 0 : T.map((D) => [$(D[0], n), $(D[1], n)]);
  }, [a, n, m]), j = (T) => {
    var C, L;
    const D = Gt(T, R);
    if (!(D.length === 2 && a && a.some((F) => {
      const z = [$(F[0], n), $(F[1], n)];
      return Vt(z, D);
    }))) {
      if (D.length === 2) {
        const [F, z] = Ke(D[0], D[1]);
        g(F), d(z);
      }
      if (o) {
        const F = [(C = D[0]) == null ? void 0 : C.toISOString()];
        D.length === 2 && F.push((L = D[1]) == null ? void 0 : L.toISOString()), o(F);
      }
    }
  };
  return /* @__PURE__ */ P("div", {
    className: E(de.container),
    onMouseLeave: () => u(null),
    children: [/* @__PURE__ */ v(De, {
      calendarDate: y,
      className: de.calendarCustom,
      filter: x,
      hovered: l,
      maxMonth: S,
      minMonth: _,
      onCalendarChange: g,
      onHoveredChange: u,
      onSelect: j,
      selected: R
    }), /* @__PURE__ */ v("div", {
      className: E(de.divider)
    }), /* @__PURE__ */ v(De, {
      calendarDate: S,
      className: de.calendarCustom,
      filter: x,
      hovered: l,
      minMonth: y,
      onCalendarChange: d,
      onHoveredChange: u,
      onSelect: j,
      selected: R
    })]
  });
}, xo = ({
  type: t = "basic",
  ...n
}) => {
  switch (t) {
    case "basic": {
      const {
        children: o,
        ...a
      } = n;
      return /* @__PURE__ */ v(bo, {
        ...a,
        children: o
      });
    }
    case "range":
      return /* @__PURE__ */ v(Mo, {
        ...n
      });
  }
};
xo.TimeInterval = $t;
export {
  xo as default
};
//# sourceMappingURL=index.es.js.map
