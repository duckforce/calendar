import nt, { useMemo as I, memo as q, useCallback as U, useState as J, Fragment as rt } from "react";
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
          var c = typeof l;
          if (c === "string" || c === "number")
            a.push(l);
          else if (Array.isArray(l)) {
            if (l.length) {
              var m = o.apply(null, l);
              m && a.push(m);
            }
          } else if (c === "object") {
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
const E = ot.exports, Ot = "_TimeInterval_18m0r_1", Lt = "_TimeCell_18m0r_9", Ce = {
  TimeInterval: Ot,
  TimeCell: Lt
};
var De = { exports: {} }, ee = {};
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
function $t() {
  if (Ze)
    return ee;
  Ze = 1;
  var t = nt, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(m, g, S) {
    var d, _ = {}, y = null, T = null;
    S !== void 0 && (y = "" + S), g.key !== void 0 && (y = "" + g.key), g.ref !== void 0 && (T = g.ref);
    for (d in g)
      a.call(g, d) && !l.hasOwnProperty(d) && (_[d] = g[d]);
    if (m && m.defaultProps)
      for (d in g = m.defaultProps, g)
        _[d] === void 0 && (_[d] = g[d]);
    return { $$typeof: n, type: m, key: y, ref: T, props: _, _owner: i.current };
  }
  return ee.Fragment = o, ee.jsx = c, ee.jsxs = c, ee;
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
function Yt() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = nt, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), x = Symbol.iterator, j = "@@iterator";
    function R(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = x && e[x] || e[j];
      return typeof r == "function" ? r : null;
    }
    var w = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(e) {
      {
        for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          s[u - 1] = arguments[u];
        N("error", e, s);
      }
    }
    function N(e, r, s) {
      {
        var u = w.ReactDebugCurrentFrame, p = u.getStackAddendum();
        p !== "" && (r += "%s", s = s.concat([p]));
        var b = s.map(function(h) {
          return String(h);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var L = !1, z = !1, fe = !1, ge = !1, C = !1, A;
    A = Symbol.for("react.module.reference");
    function H(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === l || C || e === i || e === S || e === d || ge || e === T || L || z || fe || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === _ || e.$$typeof === c || e.$$typeof === m || e.$$typeof === g || e.$$typeof === A || e.getModuleId !== void 0));
    }
    function Z(e, r, s) {
      var u = e.displayName;
      if (u)
        return u;
      var p = r.displayName || r.name || "";
      return p !== "" ? s + "(" + p + ")" : s;
    }
    function Re(e) {
      return e.displayName || "Context";
    }
    function Y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
          case m:
            var r = e;
            return Re(r) + ".Consumer";
          case c:
            var s = e;
            return Re(s._context) + ".Provider";
          case g:
            return Z(e, e.render, "ForwardRef");
          case _:
            var u = e.displayName || null;
            return u !== null ? u : Y(e.type) || "Memo";
          case y: {
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
    var V = Object.assign, X = 0, Be, Ee, je, ke, Ie, Oe, Le;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function ct() {
      {
        if (X === 0) {
          Be = console.log, Ee = console.info, je = console.warn, ke = console.error, Ie = console.group, Oe = console.groupCollapsed, Le = console.groupEnd;
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
    function ut() {
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
              value: Le
            })
          });
        }
        X < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = w.ReactCurrentDispatcher, pe;
    function oe(e, r, s) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (p) {
            var u = p.stack.trim().match(/\n( *(at )?)/);
            pe = u && u[1] || "";
          }
        return `
` + pe + e;
      }
    }
    var me = !1, ae;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new dt();
    }
    function Ye(e, r) {
      if (!e || me)
        return "";
      {
        var s = ae.get(e);
        if (s !== void 0)
          return s;
      }
      var u;
      me = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = he.current, he.current = null, ct();
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
            } catch (F) {
              u = F;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (F) {
              u = F;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            u = F;
          }
          e();
        }
      } catch (F) {
        if (F && u && typeof F.stack == "string") {
          for (var f = F.stack.split(`
`), k = u.stack.split(`
`), D = f.length - 1, B = k.length - 1; D >= 1 && B >= 0 && f[D] !== k[B]; )
            B--;
          for (; D >= 1 && B >= 0; D--, B--)
            if (f[D] !== k[B]) {
              if (D !== 1 || B !== 1)
                do
                  if (D--, B--, B < 0 || f[D] !== k[B]) {
                    var O = `
` + f[D].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, O), O;
                  }
                while (D >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        me = !1, he.current = b, ut(), Error.prepareStackTrace = p;
      }
      var G = e ? e.displayName || e.name : "", He = G ? oe(G) : "";
      return typeof e == "function" && ae.set(e, He), He;
    }
    function _t(e, r, s) {
      return Ye(e, !1);
    }
    function ft(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function se(e, r, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ye(e, ft(e));
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
            return _t(e.render);
          case _:
            return se(e.type, r, s);
          case y: {
            var u = e, p = u._payload, b = u._init;
            try {
              return se(b(p), r, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, Fe = {}, Ne = w.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, s = se(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(s);
      } else
        Ne.setExtraStackFrame(null);
    }
    function gt(e, r, s, u, p) {
      {
        var b = Function.call.bind(ie);
        for (var h in e)
          if (b(e, h)) {
            var f = void 0;
            try {
              if (typeof e[h] != "function") {
                var k = Error((u || "React class") + ": " + s + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              f = e[h](r, h, u, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              f = D;
            }
            f && !(f instanceof Error) && (le(p), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", s, h, typeof f), le(null)), f instanceof Error && !(f.message in Fe) && (Fe[f.message] = !0, le(p), M("Failed %s type: %s", s, f.message), le(null));
          }
      }
    }
    var ht = Array.isArray;
    function ye(e) {
      return ht(e);
    }
    function pt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, s = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function mt(e) {
      try {
        return Ae(e), !1;
      } catch {
        return !0;
      }
    }
    function Ae(e) {
      return "" + e;
    }
    function Pe(e) {
      if (mt(e))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Ae(e);
    }
    var K = w.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Ve, be;
    be = {};
    function bt(e) {
      if (ie.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vt(e) {
      if (ie.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function St(e, r) {
      if (typeof e.ref == "string" && K.current && r && K.current.stateNode !== r) {
        var s = Y(K.current.type);
        be[s] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(K.current.type), e.ref), be[s] = !0);
      }
    }
    function Mt(e, r) {
      {
        var s = function() {
          ze || (ze = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Ct(e, r) {
      {
        var s = function() {
          Ve || (Ve = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var xt = function(e, r, s, u, p, b, h) {
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
        value: u
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function wt(e, r, s, u, p) {
      {
        var b, h = {}, f = null, k = null;
        s !== void 0 && (Pe(s), f = "" + s), vt(r) && (Pe(r.key), f = "" + r.key), bt(r) && (k = r.ref, St(r, p));
        for (b in r)
          ie.call(r, b) && !yt.hasOwnProperty(b) && (h[b] = r[b]);
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (b in D)
            h[b] === void 0 && (h[b] = D[b]);
        }
        if (f || k) {
          var B = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && Mt(h, B), k && Ct(h, B);
        }
        return xt(e, f, k, p, u, K.current, h);
      }
    }
    var ve = w.ReactCurrentOwner, Ue = w.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, s = se(e.type, e._source, r ? r.type : null);
        Ue.setExtraStackFrame(s);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function We() {
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
    function Dt(e) {
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
    function Tt(e) {
      {
        var r = We();
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
        var s = Tt(r);
        if (Ge[s])
          return;
        Ge[s] = !0;
        var u = "";
        e && e._owner && e._owner !== ve.current && (u = " It was passed a child from " + Y(e._owner.type) + "."), W(e), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, u), W(null);
      }
    }
    function Je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var s = 0; s < e.length; s++) {
            var u = e[s];
            Me(u) && Qe(u, r);
          }
        else if (Me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = R(e);
          if (typeof p == "function" && p !== e.entries)
            for (var b = p.call(e), h; !(h = b.next()).done; )
              Me(h.value) && Qe(h.value, r);
        }
      }
    }
    function Rt(e) {
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
          var u = Y(r);
          gt(s, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !Se) {
          Se = !0;
          var p = Y(r);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(e) {
      {
        for (var r = Object.keys(e.props), s = 0; s < r.length; s++) {
          var u = r[s];
          if (u !== "children" && u !== "key") {
            W(e), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), M("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function qe(e, r, s, u, p, b) {
      {
        var h = H(e);
        if (!h) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = Dt(p);
          k ? f += k : f += We();
          var D;
          e === null ? D = "null" : ye(e) ? D = "array" : e !== void 0 && e.$$typeof === n ? (D = "<" + (Y(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : D = typeof e, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, f);
        }
        var B = wt(e, r, s, p, b);
        if (B == null)
          return B;
        if (h) {
          var O = r.children;
          if (O !== void 0)
            if (u)
              if (ye(O)) {
                for (var G = 0; G < O.length; G++)
                  Je(O[G], e);
                Object.freeze && Object.freeze(O);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(O, e);
        }
        return e === a ? Bt(B) : Rt(B), B;
      }
    }
    function Et(e, r, s) {
      return qe(e, r, s, !0);
    }
    function jt(e, r, s) {
      return qe(e, r, s, !1);
    }
    var kt = jt, It = Et;
    te.Fragment = a, te.jsx = kt, te.jsxs = It;
  }()), te;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = $t() : t.exports = Yt();
})(De);
const v = De.exports.jsx, P = De.exports.jsxs, Ft = ({
  startValue: t,
  onStartChange: n,
  endValue: o,
  onEndChange: a,
  minStart: i,
  maxStart: l,
  minEnd: c,
  maxEnd: m
}) => /* @__PURE__ */ P("div", {
  className: E(Ce.TimeInterval),
  children: [/* @__PURE__ */ v("div", {
    className: E(Ce.TimeCell)
  }), /* @__PURE__ */ v("div", {
    className: E(Ce.TimeCell)
  })]
}), Nt = (t, n, o) => {
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
}, Pt = (t) => {
  const n = t.getDay(), o = t.getDate() - n + (n === 0 ? -6 : 1);
  return new Date(t.setDate(o));
}, zt = (t) => {
  const n = t.getDay(), o = t.getDate() - n + (n === 0 ? -6 : 1);
  return new Date(t.setDate(o + 7));
}, Vt = (t) => new Date(t.getFullYear(), t.getMonth() + 1, 0), Te = (t, n) => t.getMonth() === n.getMonth() && t.getFullYear() === n.getFullYear(), xe = (t, n) => t.getDate() === n.getDate() && t.getMonth() === n.getMonth() && t.getFullYear() === n.getFullYear(), Ut = (t, n) => {
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
}, Wt = (t, n) => t[0] > n[0] && t[0] < n[1] || n[0] > t[0] && n[0] < t[1], Gt = (t, n) => t.getMonth() <= n.getMonth() && t.getFullYear() <= n.getFullYear(), Qt = (t, n) => t.getMonth() >= n.getMonth() && t.getFullYear() >= n.getFullYear(), Ke = (t, n) => {
  const o = new Date(t), a = new Date(n != null ? n : t);
  return Te(o, a) && a.setMonth(a.getMonth() + 1), [o, a];
}, Jt = (t, n) => {
  const o = t.getTime();
  let a = [...n];
  return n.length ? n.length === 1 ? n[0].getTime() < o ? a.push(t) : a.unshift(t) : a.length === 2 && (a = [t]) : a.push(t), a;
}, qt = (t, n) => t.getFullYear() <= n.getFullYear() && t.getMonth() - 1 <= n.getMonth(), Ht = (t, n) => t.getFullYear() >= n.getFullYear() && t.getMonth() + 1 >= n.getMonth(), et = (t, n, o, a) => {
  let i;
  return n ? i = new Date(
    t.setFullYear(t.getFullYear() + (a ? -1 : 1))
  ) : o ? i = new Date(
    t.setFullYear(t.getFullYear() + (a ? -10 : 10))
  ) : i = new Date(t.setMonth(t.getMonth() + (a ? -1 : 1))), i;
}, Zt = (t) => t.reduce((n, o) => {
  if (o[0].getMonth() === o[1].getMonth() && o[0].getFullYear() === o[1].getFullYear())
    return n;
  const a = new Date(o[0]);
  a.getDate() !== 1 && a.setMonth(a.getMonth() + 1);
  const i = new Date(o[1]), l = new Date(i.getFullYear(), i.getMonth() + 1, 0);
  for (i.getDate() === l.getDate() && i.setMonth(i.getMonth() + 1); !Te(a, i); )
    n.push(new Date(a)), a.setMonth(a.getMonth() + 1);
  return n;
}, []), Xt = (t) => t.reduce((n, o) => {
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
), at = (t, n) => t && n ? [...t, n] : n ? [n] : t, Kt = (t, n) => I(() => {
  let o = $(t, n);
  o.setDate(1), o.setUTCHours(0), o.setUTCMinutes(0), o.setUTCSeconds(0), o.setUTCMilliseconds(0), o = Pt(o);
  const a = Vt(t), i = zt(a), l = [];
  for (; o <= i; )
    l.push(new Date(o)), o.setDate(o.getDate() + 1);
  return l;
}, [t.getDate(), t.getMonth(), t.getFullYear()]);
function st(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function en(t = "en-US") {
  const n = new Intl.DateTimeFormat(t, { month: "long" }).format;
  return [...Array(12).keys()].map((o) => st(n(new Date(Date.UTC(2021, (o + 1) % 12)))));
}
function tn(t = "en-US") {
  const n = new Intl.DateTimeFormat(t, { weekday: "long" }).format;
  return [...Array(7).keys()].map((o) => st(n(new Date(Date.UTC(2021, 5, o)))));
}
function it() {
  return navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
}
function nn() {
  return tn(it()).map((n) => [n.slice(0, 2), n]);
}
const rn = nn();
function on() {
  return en(it()).map((n, o) => [o, n]);
}
const _e = new Map(on()), an = "_h0_1fdx3_1", sn = "_h1_1fdx3_6", ln = "_h2_1fdx3_11", cn = "_h3_1fdx3_16", un = "_bigTextRegular_1fdx3_21", dn = "_bodyTextRegular_1fdx3_26", _n = "_bodyTextBold_1fdx3_31", fn = "_subtextRegular_1fdx3_36", gn = "_subtextBold_1fdx3_41", hn = "_subtitleBold_1fdx3_46", pn = "_captionRegular_1fdx3_52", mn = "_captionBoldV2_1fdx3_57", yn = "_captionBold_1fdx3_57", bn = "_upCaptionBold_1fdx3_67", vn = "_header_1fdx3_73", Sn = "_header__leftContainer_1fdx3_81", Mn = "_header__rightContainer_1fdx3_82", Cn = "_paginationLimitSelectorButton_1fdx3_86", xn = "_paginationLimitSelectorButton_item_1fdx3_97", wn = "_paginationLimitSelectorButton_selected_1fdx3_100", Dn = "_defaultCellStyles_1fdx3_103", Tn = "_defaultRowStyles_1fdx3_108", Rn = "_resetButtonStyles_1fdx3_112", Bn = "_cell_1fdx3_118", En = "_inrange_1fdx3_130", jn = "_holiday_1fdx3_134", kn = "_today_1fdx3_137", In = "_disabled_1fdx3_140", On = "_selected_1fdx3_144", Q = {
  h0: an,
  h1: sn,
  h2: ln,
  h3: cn,
  bigTextRegular: un,
  bodyTextRegular: dn,
  bodyTextBold: _n,
  subtextRegular: fn,
  subtextBold: gn,
  subtitleBold: hn,
  captionRegular: pn,
  captionBoldV2: mn,
  captionBold: yn,
  upCaptionBold: bn,
  header: vn,
  header__leftContainer: Sn,
  header__rightContainer: Mn,
  paginationLimitSelectorButton: Cn,
  paginationLimitSelectorButton_item: xn,
  paginationLimitSelectorButton_selected: wn,
  defaultCellStyles: Dn,
  defaultRowStyles: Tn,
  resetButtonStyles: Rn,
  cell: Bn,
  inrange: En,
  holiday: jn,
  today: kn,
  disabled: In,
  selected: On
}, Ln = q(({
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
})), $n = "_h0_kp8mr_1", Yn = "_h1_kp8mr_6", Fn = "_h2_kp8mr_11", Nn = "_h3_kp8mr_16", An = "_bigTextRegular_kp8mr_21", Pn = "_bodyTextRegular_kp8mr_26", zn = "_bodyTextBold_kp8mr_31", Vn = "_subtextRegular_kp8mr_36", Un = "_subtextBold_kp8mr_41", Wn = "_subtitleBold_kp8mr_46", Gn = "_captionRegular_kp8mr_52", Qn = "_captionBoldV2_kp8mr_57", Jn = "_captionBold_kp8mr_57", qn = "_upCaptionBold_kp8mr_67", Hn = "_header_kp8mr_73", Zn = "_header__leftContainer_kp8mr_81", Xn = "_header__rightContainer_kp8mr_82", Kn = "_paginationLimitSelectorButton_kp8mr_86", er = "_paginationLimitSelectorButton_item_kp8mr_97", tr = "_paginationLimitSelectorButton_selected_kp8mr_100", nr = "_defaultCellStyles_kp8mr_103", rr = "_defaultRowStyles_kp8mr_108", or = "_resetButtonStyles_kp8mr_112", ar = "_dayLabel_kp8mr_118", sr = {
  h0: $n,
  h1: Yn,
  h2: Fn,
  h3: Nn,
  bigTextRegular: An,
  bodyTextRegular: Pn,
  bodyTextBold: zn,
  subtextRegular: Vn,
  subtextBold: Un,
  subtitleBold: Wn,
  captionRegular: Gn,
  captionBoldV2: Qn,
  captionBold: Jn,
  upCaptionBold: qn,
  header: Hn,
  header__leftContainer: Zn,
  header__rightContainer: Xn,
  paginationLimitSelectorButton: Kn,
  paginationLimitSelectorButton_item: er,
  paginationLimitSelectorButton_selected: tr,
  defaultCellStyles: nr,
  defaultRowStyles: rr,
  resetButtonStyles: or,
  dayLabel: ar
}, ir = q(({
  title: t,
  children: n
}) => /* @__PURE__ */ v("button", {
  className: E(sr.dayLabel),
  title: t,
  type: "button",
  children: n
})), lr = "_h0_dm5kb_1", cr = "_h1_dm5kb_6", ur = "_h2_dm5kb_11", dr = "_h3_dm5kb_16", _r = "_bigTextRegular_dm5kb_21", fr = "_bodyTextRegular_dm5kb_26", gr = "_bodyTextBold_dm5kb_31", hr = "_subtextRegular_dm5kb_36", pr = "_subtextBold_dm5kb_41", mr = "_subtitleBold_dm5kb_46", yr = "_captionRegular_dm5kb_52", br = "_captionBoldV2_dm5kb_57", vr = "_captionBold_dm5kb_57", Sr = "_upCaptionBold_dm5kb_67", Mr = "_header_dm5kb_73", Cr = "_header__leftContainer_dm5kb_81", xr = "_header__rightContainer_dm5kb_82", wr = "_paginationLimitSelectorButton_dm5kb_86", Dr = "_paginationLimitSelectorButton_item_dm5kb_97", Tr = "_paginationLimitSelectorButton_selected_dm5kb_100", Rr = "_defaultCellStyles_dm5kb_103", Br = "_defaultRowStyles_dm5kb_108", Er = "_resetButtonStyles_dm5kb_112", jr = "_monthsYearsContainer_dm5kb_118", kr = "_monthsYearsCell_dm5kb_127", Ir = "_today_dm5kb_137", Or = "_selected_dm5kb_140", Lr = "_disabled_dm5kb_143", ne = {
  h0: lr,
  h1: cr,
  h2: ur,
  h3: dr,
  bigTextRegular: _r,
  bodyTextRegular: fr,
  bodyTextBold: gr,
  subtextRegular: hr,
  subtextBold: pr,
  subtitleBold: mr,
  captionRegular: yr,
  captionBoldV2: br,
  captionBold: vr,
  upCaptionBold: Sr,
  header: Mr,
  header__leftContainer: Cr,
  header__rightContainer: xr,
  paginationLimitSelectorButton: wr,
  paginationLimitSelectorButton_item: Dr,
  paginationLimitSelectorButton_selected: Tr,
  defaultCellStyles: Rr,
  defaultRowStyles: Br,
  resetButtonStyles: Er,
  monthsYearsContainer: jr,
  monthsYearsCell: kr,
  today: Ir,
  selected: Or,
  disabled: Lr
}, lt = q(({
  values: t,
  selected: n,
  disabled: o,
  onSelect: a,
  today: i
}) => /* @__PURE__ */ v("div", {
  className: E(ne.monthsYearsContainer),
  children: t.map((l, c) => /* @__PURE__ */ v("div", {
    className: E(ne.monthsYearsCell, {
      [ne.disabled]: o == null ? void 0 : o.includes(l),
      [ne.selected]: n === l,
      [ne.today]: i === l
    }),
    onClick: () => !(o != null && o.includes(l)) && a(c),
    children: l
  }, l + c))
})), tt = Array.from(_e.values()), $r = q(({
  selected: t,
  onSelect: n,
  min: o,
  max: a,
  filter: i
}) => {
  var S;
  const l = I(() => i ? Zt(i) : [], [i]), c = I(() => {
    const d = new Date(t || new Date());
    return Array.from(_e).reduce((_, [y, T]) => (d.setMonth(y), ((l == null ? void 0 : l.some((x) => Te(d, x))) || o && Gt(d, o) || a && Qt(d, a)) && _.push(T), _), []);
  }, [t, l, o, a]), m = U((d) => {
    const _ = new Date(t != null ? t : new Date());
    _.setMonth(d), n(_);
  }, [n, t]), g = new Date().getFullYear() === t.getFullYear() ? tt[new Date().getMonth()] : void 0;
  return /* @__PURE__ */ v(lt, {
    disabled: c,
    onSelect: m,
    selected: t && (S = _e.get(t.getMonth())) != null ? S : "",
    today: g,
    values: tt
  });
}), Yr = q(({
  selected: t,
  onSelect: n,
  min: o,
  max: a,
  filter: i
}) => {
  const l = I(() => i ? Xt(i) : [], [i]), c = I(() => {
    const d = (t || new Date()).getFullYear(), _ = parseInt(d.toString().slice(-1));
    let y = d - _;
    const T = [];
    for (; y < d - _ + 12; )
      T.push(y.toString()), y++;
    return T;
  }, [t]), m = I(() => c.reduce((S, d) => {
    const _ = parseInt(d);
    return ((l == null ? void 0 : l.some((y) => _ === y.getFullYear())) || o && _ < o.getFullYear() || a && _ > a.getFullYear()) && S.push(d), S;
  }, []), [l, a, o, c]), g = U((S) => {
    const d = new Date(t != null ? t : new Date());
    d.setFullYear(parseInt(c[S])), n(d);
  }, [n, t, c]);
  return /* @__PURE__ */ v(lt, {
    disabled: m,
    onSelect: g,
    selected: t ? t.getFullYear().toString() : "",
    today: new Date().getFullYear().toString(),
    values: c
  });
}), Fr = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43MDM1IDYuNzkyODlDMTUuMDk4OCA3LjE4MzQyIDE1LjA5ODggNy44MTY1OCAxNC43MDM1IDguMjA3MTFMMTAuODYzNSAxMkwxNC43MDM1IDE1Ljc5MjlDMTUuMDk4OCAxNi4xODM0IDE1LjA5ODggMTYuODE2NiAxNC43MDM1IDE3LjIwNzFDMTQuMzA4MSAxNy41OTc2IDEzLjY2NzEgMTcuNTk3NiAxMy4yNzE3IDE3LjIwNzFMOC43MjAyOCAxMi43MTE1QzguMzIzOTMgMTIuMzIgOC4zMjM5MiAxMS42OCA4LjcyMDI4IDExLjI4ODVMMTMuMjcxNyA2Ljc5Mjg5QzEzLjY2NzEgNi40MDIzNyAxNC4zMDgxIDYuNDAyMzcgMTQuNzAzNSA2Ljc5Mjg5WiIgZmlsbD0iIzAwNEVENiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+", Nr = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjI5NjUzIDYuNzkyODlDOC45MDExNiA3LjE4MzQyIDguOTAxMTYgNy44MTY1OCA5LjI5NjUzIDguMjA3MTFMMTMuMTM2NSAxMkw5LjI5NjUzIDE1Ljc5MjlDOC45MDExNiAxNi4xODM0IDguOTAxMTYgMTYuODE2NiA5LjI5NjUzIDE3LjIwNzFDOS42OTE5IDE3LjU5NzYgMTAuMzMyOSAxNy41OTc2IDEwLjcyODMgMTcuMjA3MUwxNS4yNzk3IDEyLjcxMTVDMTUuNjc2MSAxMi4zMiAxNS42NzYxIDExLjY4IDE1LjI3OTcgMTEuMjg4NUwxMC43MjgzIDYuNzkyODlDMTAuMzMyOSA2LjQwMjM3IDkuNjkxOSA2LjQwMjM3IDkuMjk2NTMgNi43OTI4OVoiIGZpbGw9IiMwMDRFRDYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==", Ar = "_h0_19ajy_1", Pr = "_h1_19ajy_6", zr = "_h2_19ajy_11", Vr = "_h3_19ajy_16", Ur = "_bigTextRegular_19ajy_21", Wr = "_bodyTextRegular_19ajy_26", Gr = "_bodyTextBold_19ajy_31", Qr = "_subtextRegular_19ajy_36", Jr = "_subtextBold_19ajy_41", qr = "_subtitleBold_19ajy_46", Hr = "_captionRegular_19ajy_52", Zr = "_captionBoldV2_19ajy_57", Xr = "_captionBold_19ajy_57", Kr = "_upCaptionBold_19ajy_67", eo = "_header_19ajy_73", to = "_header__leftContainer_19ajy_81", no = "_header__rightContainer_19ajy_82", ro = "_paginationLimitSelectorButton_19ajy_86", oo = "_paginationLimitSelectorButton_item_19ajy_97", ao = "_paginationLimitSelectorButton_selected_19ajy_100", so = "_defaultCellStyles_19ajy_103", io = "_defaultRowStyles_19ajy_108", lo = "_resetButtonStyles_19ajy_112", co = "_slider_19ajy_118", uo = "_sliderContent_19ajy_123", _o = "_sliderArrow_19ajy_133", fo = "_button_19ajy_136", ce = {
  h0: Ar,
  h1: Pr,
  h2: zr,
  h3: Vr,
  bigTextRegular: Ur,
  bodyTextRegular: Wr,
  bodyTextBold: Gr,
  subtextRegular: Qr,
  subtextBold: Jr,
  subtitleBold: qr,
  captionRegular: Hr,
  captionBoldV2: Zr,
  captionBold: Xr,
  upCaptionBold: Kr,
  header: eo,
  header__leftContainer: to,
  header__rightContainer: no,
  paginationLimitSelectorButton: ro,
  paginationLimitSelectorButton_item: oo,
  paginationLimitSelectorButton_selected: ao,
  defaultCellStyles: so,
  defaultRowStyles: io,
  resetButtonStyles: lo,
  slider: co,
  sliderContent: uo,
  sliderArrow: _o,
  button: fo
}, go = q(({
  onBackClick: t,
  onForwardClick: n,
  backDisabled: o,
  forwardDisabled: a,
  children: i
}) => /* @__PURE__ */ P("div", {
  className: E(ce.slider),
  children: [/* @__PURE__ */ v("img", {
    src: Fr,
    className: ce.button,
    alt: "logo",
    onClick: t
  }), /* @__PURE__ */ v("div", {
    className: E(ce.sliderContent),
    children: i
  }), /* @__PURE__ */ v("img", {
    src: Nr,
    className: ce.button,
    alt: "logo",
    onClick: n
  })]
})), ho = "_wrapper_1vnyz_1", po = "_calendar_1vnyz_4", mo = "_label_1vnyz_11", yo = "_daylabels_1vnyz_17", bo = "_days_1vnyz_24", vo = "_headerLabel_1vnyz_30", re = {
  wrapper: ho,
  calendar: po,
  label: mo,
  daylabels: yo,
  days: bo,
  headerLabel: vo
}, we = ({
  selected: t,
  hovered: n,
  onHoveredChange: o,
  onSelect: a,
  minMonth: i,
  maxMonth: l,
  calendarDate: c,
  onCalendarChange: m,
  filter: g,
  className: S
}) => {
  const [d, _] = J(!1), [y, T] = J(!1), x = Kt(c), j = U((C) => {
    Array.isArray(t) && !t.length || o == null || o(C.getTime());
  }, [t, o]), R = U((C) => {
    m(C), _(!1);
  }, [m, _]), w = U((C) => {
    m(C), T(!1), _(!0);
  }, [m, T, _]), M = i ? qt(c, i) : !1, N = l ? Ht(c, l) : !1, L = U(() => {
    if (!M) {
      const C = et(c, d, y, !0);
      m(C);
    }
  }, [M, m, c, d, y]), z = U(() => {
    if (!N) {
      const C = et(c, d, y);
      m(C);
    }
  }, [N, m, c, d, y]), fe = () => {
    T(!1), _(!0);
  }, ge = () => {
    _(!1), T(!0);
  };
  return /* @__PURE__ */ P("div", {
    className: E(re.calendar, S),
    children: [/* @__PURE__ */ P(go, {
      backDisabled: M,
      forwardDisabled: N,
      onBackClick: L,
      onForwardClick: z,
      children: [!d && /* @__PURE__ */ v("a", {
        className: E(re.headerLabel),
        onClick: fe,
        children: _e.get(c.getMonth())
      }), "\xA0", !y && /* @__PURE__ */ v("a", {
        className: E(re.headerLabel),
        onClick: ge,
        children: c.getFullYear()
      })]
    }), d && /* @__PURE__ */ v($r, {
      filter: g,
      max: l,
      min: i,
      onSelect: R,
      selected: c
    }), y && /* @__PURE__ */ v(Yr, {
      filter: g,
      max: l,
      min: i,
      onSelect: w,
      selected: c
    }), !d && !y && /* @__PURE__ */ P(rt, {
      children: [/* @__PURE__ */ v("div", {
        className: E(re.daylabels),
        children: rn.map(([C, A], H) => /* @__PURE__ */ v(ir, {
          title: A,
          children: C
        }, C + H))
      }), /* @__PURE__ */ v("div", {
        className: E(re.days),
        children: x.map((C) => {
          if (C.getMonth() !== c.getMonth())
            return /* @__PURE__ */ v("div", {}, C.toString());
          let A = !1;
          Array.isArray(t) ? A = t.some((Z) => xe(Z, C)) : t && (A = xe(C, t));
          const H = g ? g.some((Z) => Ut(C, Z)) : !1;
          return /* @__PURE__ */ v(Ln, {
            date: C,
            disabled: H,
            inRange: Array.isArray(t) && Nt(C.getTime(), t, n),
            onClick: a,
            onMouseEnter: j,
            selected: A
          }, C.toString());
        })
      })]
    })]
  });
}, So = "_container_1qw3r_1", Mo = "_calendarChildrenBottom_1qw3r_11", Co = "_calendarNoChildrenBottom_1qw3r_14", xo = "_divider_1qw3r_17", ue = {
  container: So,
  calendarChildrenBottom: Mo,
  calendarNoChildrenBottom: Co,
  divider: xo
}, wo = ({
  selected: t,
  timeZone: n,
  onChange: o,
  filter: a,
  clearable: i,
  children: l,
  minDate: c
}) => {
  const [m, g] = J(new Date()), S = I(() => {
    if (!c)
      return;
    const x = new Date(c);
    return x.setMonth(x.getMonth() - 1), x;
  }, [c]), d = I(() => S ? [S.toISOString(), c == null ? void 0 : c.toISOString()] : void 0, [S, c]), _ = I(() => {
    if (t) {
      const x = $(t, n);
      return g(new Date(x)), x;
    }
  }, [t, n]), y = I(() => {
    var x;
    return (x = at(a, d)) == null ? void 0 : x.map((j) => [$(j[0], n), $(j[1], n)]);
  }, [a, d, n]), T = (x) => {
    var R;
    let j;
    if (_ && xe(_, x)) {
      if (!i)
        return "";
      j = void 0;
    } else
      j = x;
    o && o((R = j == null ? void 0 : j.toISOString()) != null ? R : "");
  };
  return /* @__PURE__ */ P("div", {
    className: E(ue.container),
    children: [/* @__PURE__ */ v(we, {
      calendarDate: m,
      className: l ? ue.calendarChildrenBottom : ue.calendarNoChildrenBottom,
      filter: y,
      minMonth: S,
      onCalendarChange: g,
      onSelect: T,
      selected: _
    }), l && /* @__PURE__ */ P(rt, {
      children: [/* @__PURE__ */ v("div", {
        className: E(ue.divider)
      }), l]
    })]
  });
}, Do = "_container_3fa92_1", To = "_calendarCustom_3fa92_9", Ro = "_divider_3fa92_12", de = {
  container: Do,
  calendarCustom: To,
  divider: Ro
}, Bo = ({
  selected: t,
  timeZone: n,
  onChange: o,
  filter: a,
  minDate: i
}) => {
  const [l, c] = J(null), [m, g] = J(new Date()), [S, d] = J(new Date(new Date().setMonth(new Date().getMonth() + 1))), _ = I(() => {
    if (!i)
      return;
    const R = new Date(i);
    return R.setMonth(R.getMonth() - 1), R;
  }, [i]), y = I(() => _ ? [_.toISOString(), i == null ? void 0 : i.toISOString()] : void 0, [_, i]), T = I(() => {
    if (!Array.isArray(t) || !t.length)
      return [];
    const R = [$(t[0], n)];
    t.length === 2 && R.push($(t[1], n));
    const [w, M] = Ke(R[0], R[1]);
    return g(w), d(M), R;
  }, [t, n]), x = I(() => {
    var R;
    return (R = at(a, y)) == null ? void 0 : R.map((w) => [$(w[0], n), $(w[1], n)]);
  }, [a, n, y]), j = (R) => {
    var M, N;
    const w = Jt(R, T);
    if (!(w.length === 2 && a && a.some((L) => {
      const z = [$(L[0], n), $(L[1], n)];
      return Wt(z, w);
    }))) {
      if (w.length === 2) {
        const [L, z] = Ke(w[0], w[1]);
        g(L), d(z);
      }
      if (o) {
        const L = [(M = w[0]) == null ? void 0 : M.toISOString()];
        w.length === 2 && L.push((N = w[1]) == null ? void 0 : N.toISOString()), o(L);
      }
    }
  };
  return /* @__PURE__ */ P("div", {
    className: E(de.container),
    onMouseLeave: () => c(null),
    children: [/* @__PURE__ */ v(we, {
      calendarDate: m,
      className: de.calendarCustom,
      filter: x,
      hovered: l,
      maxMonth: S,
      minMonth: _,
      onCalendarChange: g,
      onHoveredChange: c,
      onSelect: j,
      selected: T
    }), /* @__PURE__ */ v("div", {
      className: E(de.divider)
    }), /* @__PURE__ */ v(we, {
      calendarDate: S,
      className: de.calendarCustom,
      filter: x,
      hovered: l,
      minMonth: m,
      onCalendarChange: d,
      onHoveredChange: c,
      onSelect: j,
      selected: T
    })]
  });
}, Eo = ({
  type: t = "basic",
  ...n
}) => {
  switch (t) {
    case "basic": {
      const {
        children: o,
        ...a
      } = n;
      return /* @__PURE__ */ v(wo, {
        ...a,
        children: o
      });
    }
    case "range":
      return /* @__PURE__ */ v(Bo, {
        ...n
      });
  }
};
Eo.TimeInterval = Ft;
export {
  Eo as default
};
//# sourceMappingURL=index.es.js.map
