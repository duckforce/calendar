import rt, { useMemo as I, memo as q, useCallback as U, useState as J, Fragment as nt } from "react";
var ot = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function o() {
      for (var a = [], l = 0; l < arguments.length; l++) {
        var i = arguments[l];
        if (!!i) {
          var c = typeof i;
          if (c === "string" || c === "number")
            a.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var b = o.apply(null, i);
              b && a.push(b);
            }
          } else if (c === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              a.push(i.toString());
              continue;
            }
            for (var g in i)
              r.call(i, g) && i[g] && a.push(g);
          }
        }
      }
      return a.join(" ");
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(ot);
const x = ot.exports, Ot = "_TimeInterval_18m0r_1", Lt = "_TimeCell_18m0r_9", Ce = {
  TimeInterval: Ot,
  TimeCell: Lt
};
var Te = { exports: {} }, ee = {};
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
  var t = rt, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(b, g, S) {
    var _, d = {}, y = null, R = null;
    S !== void 0 && (y = "" + S), g.key !== void 0 && (y = "" + g.key), g.ref !== void 0 && (R = g.ref);
    for (_ in g)
      a.call(g, _) && !i.hasOwnProperty(_) && (d[_] = g[_]);
    if (b && b.defaultProps)
      for (_ in g = b.defaultProps, g)
        d[_] === void 0 && (d[_] = g[_]);
    return { $$typeof: r, type: b, key: y, ref: R, props: d, _owner: l.current };
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
    var t = rt, r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), b = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), w = Symbol.iterator, j = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = w && e[w] || e[j];
      return typeof n == "function" ? n : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(e) {
      {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
          s[u - 1] = arguments[u];
        N("error", e, s);
      }
    }
    function N(e, n, s) {
      {
        var u = D.ReactDebugCurrentFrame, p = u.getStackAddendum();
        p !== "" && (n += "%s", s = s.concat([p]));
        var m = s.map(function(h) {
          return String(h);
        });
        m.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var L = !1, z = !1, fe = !1, ge = !1, C = !1, A;
    A = Symbol.for("react.module.reference");
    function H(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === i || C || e === l || e === S || e === _ || ge || e === R || L || z || fe || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === d || e.$$typeof === c || e.$$typeof === b || e.$$typeof === g || e.$$typeof === A || e.getModuleId !== void 0));
    }
    function Z(e, n, s) {
      var u = e.displayName;
      if (u)
        return u;
      var p = n.displayName || n.name || "";
      return p !== "" ? s + "(" + p + ")" : s;
    }
    function ke(e) {
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
        case i:
          return "Profiler";
        case l:
          return "StrictMode";
        case S:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var n = e;
            return ke(n) + ".Consumer";
          case c:
            var s = e;
            return ke(s._context) + ".Provider";
          case g:
            return Z(e, e.render, "ForwardRef");
          case d:
            var u = e.displayName || null;
            return u !== null ? u : Y(e.type) || "Memo";
          case y: {
            var p = e, m = p._payload, h = p._init;
            try {
              return Y(h(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, X = 0, Be, xe, je, Ee, Ie, Oe, Le;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function ct() {
      {
        if (X === 0) {
          Be = console.log, xe = console.info, je = console.warn, Ee = console.error, Ie = console.group, Oe = console.groupCollapsed, Le = console.groupEnd;
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
              value: xe
            }),
            warn: V({}, e, {
              value: je
            }),
            error: V({}, e, {
              value: Ee
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
    var he = D.ReactCurrentDispatcher, pe;
    function oe(e, n, s) {
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
    var be = !1, ae;
    {
      var _t = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new _t();
    }
    function Ye(e, n) {
      if (!e || be)
        return "";
      {
        var s = ae.get(e);
        if (s !== void 0)
          return s;
      }
      var u;
      be = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = he.current, he.current = null, ct();
      try {
        if (n) {
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
`), E = u.stack.split(`
`), T = f.length - 1, B = E.length - 1; T >= 1 && B >= 0 && f[T] !== E[B]; )
            B--;
          for (; T >= 1 && B >= 0; T--, B--)
            if (f[T] !== E[B]) {
              if (T !== 1 || B !== 1)
                do
                  if (T--, B--, B < 0 || f[T] !== E[B]) {
                    var O = `
` + f[T].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, O), O;
                  }
                while (T >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        be = !1, he.current = m, ut(), Error.prepareStackTrace = p;
      }
      var G = e ? e.displayName || e.name : "", He = G ? oe(G) : "";
      return typeof e == "function" && ae.set(e, He), He;
    }
    function dt(e, n, s) {
      return Ye(e, !1);
    }
    function ft(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function se(e, n, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ye(e, ft(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case S:
          return oe("Suspense");
        case _:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return dt(e.render);
          case d:
            return se(e.type, n, s);
          case y: {
            var u = e, p = u._payload, m = u._init;
            try {
              return se(m(p), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, Fe = {}, Ne = D.ReactDebugCurrentFrame;
    function ie(e) {
      if (e) {
        var n = e._owner, s = se(e.type, e._source, n ? n.type : null);
        Ne.setExtraStackFrame(s);
      } else
        Ne.setExtraStackFrame(null);
    }
    function gt(e, n, s, u, p) {
      {
        var m = Function.call.bind(le);
        for (var h in e)
          if (m(e, h)) {
            var f = void 0;
            try {
              if (typeof e[h] != "function") {
                var E = Error((u || "React class") + ": " + s + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              f = e[h](n, h, u, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              f = T;
            }
            f && !(f instanceof Error) && (ie(p), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", s, h, typeof f), ie(null)), f instanceof Error && !(f.message in Fe) && (Fe[f.message] = !0, ie(p), M("Failed %s type: %s", s, f.message), ie(null));
          }
      }
    }
    var ht = Array.isArray;
    function ye(e) {
      return ht(e);
    }
    function pt(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, s = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function bt(e) {
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
      if (bt(e))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Ae(e);
    }
    var K = D.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Ve, me;
    me = {};
    function mt(e) {
      if (le.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vt(e) {
      if (le.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function St(e, n) {
      if (typeof e.ref == "string" && K.current && n && K.current.stateNode !== n) {
        var s = Y(K.current.type);
        me[s] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(K.current.type), e.ref), me[s] = !0);
      }
    }
    function Mt(e, n) {
      {
        var s = function() {
          ze || (ze = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Ct(e, n) {
      {
        var s = function() {
          Ve || (Ve = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var wt = function(e, n, s, u, p, m, h) {
      var f = {
        $$typeof: r,
        type: e,
        key: n,
        ref: s,
        props: h,
        _owner: m
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
    function Dt(e, n, s, u, p) {
      {
        var m, h = {}, f = null, E = null;
        s !== void 0 && (Pe(s), f = "" + s), vt(n) && (Pe(n.key), f = "" + n.key), mt(n) && (E = n.ref, St(n, p));
        for (m in n)
          le.call(n, m) && !yt.hasOwnProperty(m) && (h[m] = n[m]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (m in T)
            h[m] === void 0 && (h[m] = T[m]);
        }
        if (f || E) {
          var B = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && Mt(h, B), E && Ct(h, B);
        }
        return wt(e, f, E, p, u, K.current, h);
      }
    }
    var ve = D.ReactCurrentOwner, Ue = D.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var n = e._owner, s = se(e.type, e._source, n ? n.type : null);
        Ue.setExtraStackFrame(s);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
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
    function Tt(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + n + ":" + s + ".";
        }
        return "";
      }
    }
    var Ge = {};
    function Rt(e) {
      {
        var n = We();
        if (!n) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (n = `

Check the top-level render call using <` + s + ">.");
        }
        return n;
      }
    }
    function Qe(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = Rt(n);
        if (Ge[s])
          return;
        Ge[s] = !0;
        var u = "";
        e && e._owner && e._owner !== ve.current && (u = " It was passed a child from " + Y(e._owner.type) + "."), W(e), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, u), W(null);
      }
    }
    function Je(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var s = 0; s < e.length; s++) {
            var u = e[s];
            Me(u) && Qe(u, n);
          }
        else if (Me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = k(e);
          if (typeof p == "function" && p !== e.entries)
            for (var m = p.call(e), h; !(h = m.next()).done; )
              Me(h.value) && Qe(h.value, n);
        }
      }
    }
    function kt(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var s;
        if (typeof n == "function")
          s = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === g || n.$$typeof === d))
          s = n.propTypes;
        else
          return;
        if (s) {
          var u = Y(n);
          gt(s, e.props, "prop", u, e);
        } else if (n.PropTypes !== void 0 && !Se) {
          Se = !0;
          var p = Y(n);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(e) {
      {
        for (var n = Object.keys(e.props), s = 0; s < n.length; s++) {
          var u = n[s];
          if (u !== "children" && u !== "key") {
            W(e), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), M("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function qe(e, n, s, u, p, m) {
      {
        var h = H(e);
        if (!h) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = Tt(p);
          E ? f += E : f += We();
          var T;
          e === null ? T = "null" : ye(e) ? T = "array" : e !== void 0 && e.$$typeof === r ? (T = "<" + (Y(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, f);
        }
        var B = Dt(e, n, s, p, m);
        if (B == null)
          return B;
        if (h) {
          var O = n.children;
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
        return e === a ? Bt(B) : kt(B), B;
      }
    }
    function xt(e, n, s) {
      return qe(e, n, s, !0);
    }
    function jt(e, n, s) {
      return qe(e, n, s, !1);
    }
    var Et = jt, It = xt;
    te.Fragment = a, te.jsx = Et, te.jsxs = It;
  }()), te;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = $t() : t.exports = Yt();
})(Te);
const v = Te.exports.jsx, P = Te.exports.jsxs, Ft = ({
  startValue: t,
  onStartChange: r,
  endValue: o,
  onEndChange: a,
  minStart: l,
  maxStart: i,
  minEnd: c,
  maxEnd: b
}) => /* @__PURE__ */ P("div", {
  className: x(Ce.TimeInterval),
  children: [/* @__PURE__ */ v("div", {
    className: x(Ce.TimeCell)
  }), /* @__PURE__ */ v("div", {
    className: x(Ce.TimeCell)
  })]
}), Nt = (t, r, o) => {
  if (!r.length)
    return !1;
  const a = r[0].getTime();
  if (r.length === 2) {
    const l = r[1].getTime();
    return a < t && l > t;
  } else
    return Boolean(
      o && (a < t && o >= t || t < a && t >= o)
    );
}, At = (t) => {
  const r = new Date();
  return r.getFullYear() === t.getFullYear() && r.getMonth() === t.getMonth() && r.getDate() === t.getDate();
}, Pt = (t) => {
  const r = t.getDay(), o = t.getDate() - r + (r === 0 ? -6 : 1);
  return new Date(t.setDate(o));
}, zt = (t) => {
  const r = t.getDay(), o = t.getDate() - r + (r === 0 ? -6 : 1);
  return new Date(t.setDate(o + 7));
}, Vt = (t) => new Date(t.getFullYear(), t.getMonth() + 1, 0), Re = (t, r) => t.getMonth() === r.getMonth() && t.getFullYear() === r.getFullYear(), we = (t, r) => t.getDate() === r.getDate() && t.getMonth() === r.getMonth() && t.getFullYear() === r.getFullYear(), Ut = (t, r) => {
  const o = new Date(t.getFullYear(), t.getMonth(), t.getDate()), a = new Date(
    r[0].getFullYear(),
    r[0].getMonth(),
    r[0].getDate()
  ), l = new Date(
    r[1].getFullYear(),
    r[1].getMonth(),
    r[1].getDate()
  );
  return o >= a && o <= l;
}, Wt = (t, r) => t[0] > r[0] && t[0] < r[1] || r[0] > t[0] && r[0] < t[1], Gt = (t, r) => t.getMonth() <= r.getMonth() && t.getFullYear() <= r.getFullYear(), Qt = (t, r) => t.getMonth() >= r.getMonth() && t.getFullYear() >= r.getFullYear(), Ke = (t, r) => {
  const o = new Date(t), a = new Date(r != null ? r : t);
  return Re(o, a) && a.setMonth(a.getMonth() + 1), [o, a];
}, Jt = (t, r) => {
  const o = t.getTime();
  let a = [...r];
  return r.length ? r.length === 1 ? r[0].getTime() < o ? a.push(t) : a.unshift(t) : a.length === 2 && (a = [t]) : a.push(t), a;
}, qt = (t, r) => t.getFullYear() <= r.getFullYear() && t.getMonth() - 1 <= r.getMonth(), Ht = (t, r) => t.getFullYear() >= r.getFullYear() && t.getMonth() + 1 >= r.getMonth(), et = (t, r, o, a) => {
  let l;
  return r ? l = new Date(
    t.setFullYear(t.getFullYear() + (a ? -1 : 1))
  ) : o ? l = new Date(
    t.setFullYear(t.getFullYear() + (a ? -10 : 10))
  ) : l = new Date(t.setMonth(t.getMonth() + (a ? -1 : 1))), l;
}, Zt = (t) => t.reduce((r, o) => {
  if (o[0].getMonth() === o[1].getMonth() && o[0].getFullYear() === o[1].getFullYear())
    return r;
  const a = new Date(o[0]);
  a.getDate() !== 1 && a.setMonth(a.getMonth() + 1);
  const l = new Date(o[1]), i = new Date(l.getFullYear(), l.getMonth() + 1, 0);
  for (l.getDate() === i.getDate() && l.setMonth(l.getMonth() + 1); !Re(a, l); )
    r.push(new Date(a)), a.setMonth(a.getMonth() + 1);
  return r;
}, []), Xt = (t) => t.reduce((r, o) => {
  if (o[0].getFullYear() === o[1].getFullYear())
    return r;
  const a = new Date(o[0]);
  a.getMonth() !== 1 && a.getDate() !== 1 && a.setFullYear(a.getFullYear() + 1);
  const l = new Date(o[1]), i = new Date(l.getFullYear(), l.getMonth() + 1, 0);
  for (l.getDate() === i.getDate() && l.getMonth() === 11 && l.setFullYear(l.getFullYear() + 1); a.getFullYear() !== l.getFullYear(); )
    r.push(new Date(a)), a.setFullYear(a.getFullYear() + 1);
  return r;
}, []), $ = (t, r) => new Date(
  new Date(t || Date.now()).toLocaleString("en-US", {
    timeZone: r
  })
), at = (t, r) => t && r ? [...t, r] : r ? [r] : t, Kt = (t, r) => I(() => {
  let o = $(t, r);
  o.setDate(1), o.setUTCHours(0), o.setUTCMinutes(0), o.setUTCSeconds(0), o.setUTCMilliseconds(0), o = Pt(o);
  const a = Vt(t), l = zt(a), i = [];
  for (; o <= l; )
    i.push(new Date(o)), o.setDate(o.getDate() + 1);
  return i;
}, [t.getDate(), t.getMonth(), t.getFullYear()]);
function st(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function er(t = "en-US") {
  const r = new Intl.DateTimeFormat(t, { month: "long" }).format;
  return [...Array(12).keys()].map((o) => st(r(new Date(Date.UTC(2021, (o + 1) % 12)))));
}
function tr(t = "en-US") {
  const r = new Intl.DateTimeFormat(t, { weekday: "long" }).format;
  return [...Array(7).keys()].map((o) => st(r(new Date(Date.UTC(2021, 5, o)))));
}
function lt() {
  return navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
}
function rr() {
  return tr(lt()).map((r) => [r.slice(0, 2), r]);
}
const nr = rr();
function or() {
  return er(lt()).map((r, o) => [o, r]);
}
const de = new Map(or()), ar = "_h0_1lkhe_74", sr = "_h1_1lkhe_79", lr = "_h2_1lkhe_84", ir = "_h3_1lkhe_89", cr = "_bigTextRegular_1lkhe_94", ur = "_bodyTextRegular_1lkhe_99", _r = "_bodyTextBold_1lkhe_104", dr = "_subtextRegular_1lkhe_109", fr = "_subtextBold_1lkhe_114", gr = "_subtitleBold_1lkhe_119", hr = "_captionRegular_1lkhe_125", pr = "_captionBoldV2_1lkhe_130", br = "_captionBold_1lkhe_130", yr = "_upCaptionBold_1lkhe_140", mr = "_header_1lkhe_146", vr = "_header__leftContainer_1lkhe_154", Sr = "_header__rightContainer_1lkhe_155", Mr = "_paginationLimitSelectorButton_1lkhe_159", Cr = "_paginationLimitSelectorButton_item_1lkhe_170", wr = "_paginationLimitSelectorButton_selected_1lkhe_173", Dr = "_defaultCellStyles_1lkhe_176", Tr = "_defaultRowStyles_1lkhe_181", Rr = "_resetButtonStyles_1lkhe_185", kr = "_cell_1lkhe_191", Br = "_inrange_1lkhe_203", xr = "_holiday_1lkhe_207", jr = "_today_1lkhe_210", Er = "_disabled_1lkhe_213", Ir = "_selected_1lkhe_217", Q = {
  "dark-scrollbar": "_dark-scrollbar_1lkhe_29",
  "light-scrollbar": "_light-scrollbar_1lkhe_41",
  "no-scrollbar": "_no-scrollbar_1lkhe_53",
  "thin-scrollbar": "_thin-scrollbar_1lkhe_60",
  "thick-scrollbar": "_thick-scrollbar_1lkhe_67",
  h0: ar,
  h1: sr,
  h2: lr,
  h3: ir,
  bigTextRegular: cr,
  bodyTextRegular: ur,
  bodyTextBold: _r,
  subtextRegular: dr,
  subtextBold: fr,
  subtitleBold: gr,
  captionRegular: hr,
  captionBoldV2: pr,
  captionBold: br,
  upCaptionBold: yr,
  header: mr,
  header__leftContainer: vr,
  header__rightContainer: Sr,
  paginationLimitSelectorButton: Mr,
  paginationLimitSelectorButton_item: Cr,
  paginationLimitSelectorButton_selected: wr,
  defaultCellStyles: Dr,
  defaultRowStyles: Tr,
  resetButtonStyles: Rr,
  cell: kr,
  inrange: Br,
  holiday: xr,
  today: jr,
  disabled: Er,
  selected: Ir
}, Or = q(({
  date: t,
  inRange: r,
  selected: o,
  disabled: a,
  onClick: l,
  onMouseEnter: i
}) => /* @__PURE__ */ v("button", {
  className: x(Q.cell, {
    [Q.selected]: o,
    [Q.holiday]: t.getDay() === 6 || t.getDay() === 0,
    [Q.today]: At(t),
    [Q.inrange]: r,
    [Q.disabled]: a
  }),
  onClick: () => !a && l(t),
  onMouseEnter: () => i(t),
  type: "button",
  children: t.getDate()
})), Lr = "_h0_e40k8_74", $r = "_h1_e40k8_79", Yr = "_h2_e40k8_84", Fr = "_h3_e40k8_89", Nr = "_bigTextRegular_e40k8_94", Ar = "_bodyTextRegular_e40k8_99", Pr = "_bodyTextBold_e40k8_104", zr = "_subtextRegular_e40k8_109", Vr = "_subtextBold_e40k8_114", Ur = "_subtitleBold_e40k8_119", Wr = "_captionRegular_e40k8_125", Gr = "_captionBoldV2_e40k8_130", Qr = "_captionBold_e40k8_130", Jr = "_upCaptionBold_e40k8_140", qr = "_header_e40k8_146", Hr = "_header__leftContainer_e40k8_154", Zr = "_header__rightContainer_e40k8_155", Xr = "_paginationLimitSelectorButton_e40k8_159", Kr = "_paginationLimitSelectorButton_item_e40k8_170", en = "_paginationLimitSelectorButton_selected_e40k8_173", tn = "_defaultCellStyles_e40k8_176", rn = "_defaultRowStyles_e40k8_181", nn = "_resetButtonStyles_e40k8_185", on = "_dayLabel_e40k8_191", an = {
  "dark-scrollbar": "_dark-scrollbar_e40k8_29",
  "light-scrollbar": "_light-scrollbar_e40k8_41",
  "no-scrollbar": "_no-scrollbar_e40k8_53",
  "thin-scrollbar": "_thin-scrollbar_e40k8_60",
  "thick-scrollbar": "_thick-scrollbar_e40k8_67",
  h0: Lr,
  h1: $r,
  h2: Yr,
  h3: Fr,
  bigTextRegular: Nr,
  bodyTextRegular: Ar,
  bodyTextBold: Pr,
  subtextRegular: zr,
  subtextBold: Vr,
  subtitleBold: Ur,
  captionRegular: Wr,
  captionBoldV2: Gr,
  captionBold: Qr,
  upCaptionBold: Jr,
  header: qr,
  header__leftContainer: Hr,
  header__rightContainer: Zr,
  paginationLimitSelectorButton: Xr,
  paginationLimitSelectorButton_item: Kr,
  paginationLimitSelectorButton_selected: en,
  defaultCellStyles: tn,
  defaultRowStyles: rn,
  resetButtonStyles: nn,
  dayLabel: on
}, sn = q(({
  title: t,
  children: r
}) => /* @__PURE__ */ v("button", {
  className: x(an.dayLabel),
  title: t,
  type: "button",
  children: r
})), ln = "_h0_1ap3o_74", cn = "_h1_1ap3o_79", un = "_h2_1ap3o_84", _n = "_h3_1ap3o_89", dn = "_bigTextRegular_1ap3o_94", fn = "_bodyTextRegular_1ap3o_99", gn = "_bodyTextBold_1ap3o_104", hn = "_subtextRegular_1ap3o_109", pn = "_subtextBold_1ap3o_114", bn = "_subtitleBold_1ap3o_119", yn = "_captionRegular_1ap3o_125", mn = "_captionBoldV2_1ap3o_130", vn = "_captionBold_1ap3o_130", Sn = "_upCaptionBold_1ap3o_140", Mn = "_header_1ap3o_146", Cn = "_header__leftContainer_1ap3o_154", wn = "_header__rightContainer_1ap3o_155", Dn = "_paginationLimitSelectorButton_1ap3o_159", Tn = "_paginationLimitSelectorButton_item_1ap3o_170", Rn = "_paginationLimitSelectorButton_selected_1ap3o_173", kn = "_defaultCellStyles_1ap3o_176", Bn = "_defaultRowStyles_1ap3o_181", xn = "_resetButtonStyles_1ap3o_185", jn = "_monthsYearsContainer_1ap3o_191", En = "_monthsYearsCell_1ap3o_200", In = "_today_1ap3o_210", On = "_selected_1ap3o_213", Ln = "_disabled_1ap3o_216", re = {
  "dark-scrollbar": "_dark-scrollbar_1ap3o_29",
  "light-scrollbar": "_light-scrollbar_1ap3o_41",
  "no-scrollbar": "_no-scrollbar_1ap3o_53",
  "thin-scrollbar": "_thin-scrollbar_1ap3o_60",
  "thick-scrollbar": "_thick-scrollbar_1ap3o_67",
  h0: ln,
  h1: cn,
  h2: un,
  h3: _n,
  bigTextRegular: dn,
  bodyTextRegular: fn,
  bodyTextBold: gn,
  subtextRegular: hn,
  subtextBold: pn,
  subtitleBold: bn,
  captionRegular: yn,
  captionBoldV2: mn,
  captionBold: vn,
  upCaptionBold: Sn,
  header: Mn,
  header__leftContainer: Cn,
  header__rightContainer: wn,
  paginationLimitSelectorButton: Dn,
  paginationLimitSelectorButton_item: Tn,
  paginationLimitSelectorButton_selected: Rn,
  defaultCellStyles: kn,
  defaultRowStyles: Bn,
  resetButtonStyles: xn,
  monthsYearsContainer: jn,
  monthsYearsCell: En,
  today: In,
  selected: On,
  disabled: Ln
}, it = q(({
  values: t,
  selected: r,
  disabled: o,
  onSelect: a,
  today: l
}) => /* @__PURE__ */ v("div", {
  className: x(re.monthsYearsContainer),
  children: t.map((i, c) => /* @__PURE__ */ v("div", {
    className: x(re.monthsYearsCell, {
      [re.disabled]: o == null ? void 0 : o.includes(i),
      [re.selected]: r === i,
      [re.today]: l === i
    }),
    onClick: () => !(o != null && o.includes(i)) && a(c),
    children: i
  }, i + c))
})), tt = Array.from(de.values()), $n = q(({
  selected: t,
  onSelect: r,
  min: o,
  max: a,
  filter: l
}) => {
  var S;
  const i = I(() => l ? Zt(l) : [], [l]), c = I(() => {
    const _ = new Date(t || new Date());
    return Array.from(de).reduce((d, [y, R]) => (_.setMonth(y), ((i == null ? void 0 : i.some((w) => Re(_, w))) || o && Gt(_, o) || a && Qt(_, a)) && d.push(R), d), []);
  }, [t, i, o, a]), b = U((_) => {
    const d = new Date(t != null ? t : new Date());
    d.setMonth(_), r(d);
  }, [r, t]), g = new Date().getFullYear() === t.getFullYear() ? tt[new Date().getMonth()] : void 0;
  return /* @__PURE__ */ v(it, {
    disabled: c,
    onSelect: b,
    selected: t && (S = de.get(t.getMonth())) != null ? S : "",
    today: g,
    values: tt
  });
}), Yn = q(({
  selected: t,
  onSelect: r,
  min: o,
  max: a,
  filter: l
}) => {
  const i = I(() => l ? Xt(l) : [], [l]), c = I(() => {
    const _ = (t || new Date()).getFullYear(), d = parseInt(_.toString().slice(-1));
    let y = _ - d;
    const R = [];
    for (; y < _ - d + 12; )
      R.push(y.toString()), y++;
    return R;
  }, [t]), b = I(() => c.reduce((S, _) => {
    const d = parseInt(_);
    return ((i == null ? void 0 : i.some((y) => d === y.getFullYear())) || o && d < o.getFullYear() || a && d > a.getFullYear()) && S.push(_), S;
  }, []), [i, a, o, c]), g = U((S) => {
    const _ = new Date(t != null ? t : new Date());
    _.setFullYear(parseInt(c[S])), r(_);
  }, [r, t, c]);
  return /* @__PURE__ */ v(it, {
    disabled: b,
    onSelect: g,
    selected: t ? t.getFullYear().toString() : "",
    today: new Date().getFullYear().toString(),
    values: c
  });
}), Fn = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43MDM1IDYuNzkyODlDMTUuMDk4OCA3LjE4MzQyIDE1LjA5ODggNy44MTY1OCAxNC43MDM1IDguMjA3MTFMMTAuODYzNSAxMkwxNC43MDM1IDE1Ljc5MjlDMTUuMDk4OCAxNi4xODM0IDE1LjA5ODggMTYuODE2NiAxNC43MDM1IDE3LjIwNzFDMTQuMzA4MSAxNy41OTc2IDEzLjY2NzEgMTcuNTk3NiAxMy4yNzE3IDE3LjIwNzFMOC43MjAyOCAxMi43MTE1QzguMzIzOTMgMTIuMzIgOC4zMjM5MiAxMS42OCA4LjcyMDI4IDExLjI4ODVMMTMuMjcxNyA2Ljc5Mjg5QzEzLjY2NzEgNi40MDIzNyAxNC4zMDgxIDYuNDAyMzcgMTQuNzAzNSA2Ljc5Mjg5WiIgZmlsbD0iIzAwNEVENiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+", Nn = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjI5NjUzIDYuNzkyODlDOC45MDExNiA3LjE4MzQyIDguOTAxMTYgNy44MTY1OCA5LjI5NjUzIDguMjA3MTFMMTMuMTM2NSAxMkw5LjI5NjUzIDE1Ljc5MjlDOC45MDExNiAxNi4xODM0IDguOTAxMTYgMTYuODE2NiA5LjI5NjUzIDE3LjIwNzFDOS42OTE5IDE3LjU5NzYgMTAuMzMyOSAxNy41OTc2IDEwLjcyODMgMTcuMjA3MUwxNS4yNzk3IDEyLjcxMTVDMTUuNjc2MSAxMi4zMiAxNS42NzYxIDExLjY4IDE1LjI3OTcgMTEuMjg4NUwxMC43MjgzIDYuNzkyODlDMTAuMzMyOSA2LjQwMjM3IDkuNjkxOSA2LjQwMjM3IDkuMjk2NTMgNi43OTI4OVoiIGZpbGw9IiMwMDRFRDYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==", An = "_h0_brjps_74", Pn = "_h1_brjps_79", zn = "_h2_brjps_84", Vn = "_h3_brjps_89", Un = "_bigTextRegular_brjps_94", Wn = "_bodyTextRegular_brjps_99", Gn = "_bodyTextBold_brjps_104", Qn = "_subtextRegular_brjps_109", Jn = "_subtextBold_brjps_114", qn = "_subtitleBold_brjps_119", Hn = "_captionRegular_brjps_125", Zn = "_captionBoldV2_brjps_130", Xn = "_captionBold_brjps_130", Kn = "_upCaptionBold_brjps_140", eo = "_header_brjps_146", to = "_header__leftContainer_brjps_154", ro = "_header__rightContainer_brjps_155", no = "_paginationLimitSelectorButton_brjps_159", oo = "_paginationLimitSelectorButton_item_brjps_170", ao = "_paginationLimitSelectorButton_selected_brjps_173", so = "_defaultCellStyles_brjps_176", lo = "_defaultRowStyles_brjps_181", io = "_resetButtonStyles_brjps_185", co = "_slider_brjps_191", uo = "_sliderContent_brjps_196", _o = "_sliderArrow_brjps_206", fo = "_button_brjps_209", ce = {
  "dark-scrollbar": "_dark-scrollbar_brjps_29",
  "light-scrollbar": "_light-scrollbar_brjps_41",
  "no-scrollbar": "_no-scrollbar_brjps_53",
  "thin-scrollbar": "_thin-scrollbar_brjps_60",
  "thick-scrollbar": "_thick-scrollbar_brjps_67",
  h0: An,
  h1: Pn,
  h2: zn,
  h3: Vn,
  bigTextRegular: Un,
  bodyTextRegular: Wn,
  bodyTextBold: Gn,
  subtextRegular: Qn,
  subtextBold: Jn,
  subtitleBold: qn,
  captionRegular: Hn,
  captionBoldV2: Zn,
  captionBold: Xn,
  upCaptionBold: Kn,
  header: eo,
  header__leftContainer: to,
  header__rightContainer: ro,
  paginationLimitSelectorButton: no,
  paginationLimitSelectorButton_item: oo,
  paginationLimitSelectorButton_selected: ao,
  defaultCellStyles: so,
  defaultRowStyles: lo,
  resetButtonStyles: io,
  slider: co,
  sliderContent: uo,
  sliderArrow: _o,
  button: fo
}, go = q(({
  onBackClick: t,
  onForwardClick: r,
  backDisabled: o,
  forwardDisabled: a,
  children: l
}) => /* @__PURE__ */ P("div", {
  className: x(ce.slider),
  children: [/* @__PURE__ */ v("img", {
    src: Fn,
    className: ce.button,
    alt: "logo",
    onClick: t
  }), /* @__PURE__ */ v("div", {
    className: x(ce.sliderContent),
    children: l
  }), /* @__PURE__ */ v("img", {
    src: Nn,
    className: ce.button,
    alt: "logo",
    onClick: r
  })]
})), ho = "_wrapper_1vnyz_1", po = "_calendar_1vnyz_4", bo = "_label_1vnyz_11", yo = "_daylabels_1vnyz_17", mo = "_days_1vnyz_24", vo = "_headerLabel_1vnyz_30", ne = {
  wrapper: ho,
  calendar: po,
  label: bo,
  daylabels: yo,
  days: mo,
  headerLabel: vo
}, De = ({
  selected: t,
  hovered: r,
  onHoveredChange: o,
  onSelect: a,
  minMonth: l,
  maxMonth: i,
  calendarDate: c,
  onCalendarChange: b,
  filter: g,
  className: S
}) => {
  const [_, d] = J(!1), [y, R] = J(!1), w = Kt(c), j = U((C) => {
    Array.isArray(t) && !t.length || o == null || o(C.getTime());
  }, [t, o]), k = U((C) => {
    b(C), d(!1);
  }, [b, d]), D = U((C) => {
    b(C), R(!1), d(!0);
  }, [b, R, d]), M = l ? qt(c, l) : !1, N = i ? Ht(c, i) : !1, L = U(() => {
    if (!M) {
      const C = et(c, _, y, !0);
      b(C);
    }
  }, [M, b, c, _, y]), z = U(() => {
    if (!N) {
      const C = et(c, _, y);
      b(C);
    }
  }, [N, b, c, _, y]), fe = () => {
    R(!1), d(!0);
  }, ge = () => {
    d(!1), R(!0);
  };
  return /* @__PURE__ */ P("div", {
    className: x(ne.calendar, S),
    children: [/* @__PURE__ */ P(go, {
      backDisabled: M,
      forwardDisabled: N,
      onBackClick: L,
      onForwardClick: z,
      children: [!_ && /* @__PURE__ */ v("a", {
        className: x(ne.headerLabel),
        onClick: fe,
        children: de.get(c.getMonth())
      }), "\xA0", !y && /* @__PURE__ */ v("a", {
        className: x(ne.headerLabel),
        onClick: ge,
        children: c.getFullYear()
      })]
    }), _ && /* @__PURE__ */ v($n, {
      filter: g,
      max: i,
      min: l,
      onSelect: k,
      selected: c
    }), y && /* @__PURE__ */ v(Yn, {
      filter: g,
      max: i,
      min: l,
      onSelect: D,
      selected: c
    }), !_ && !y && /* @__PURE__ */ P(nt, {
      children: [/* @__PURE__ */ v("div", {
        className: x(ne.daylabels),
        children: nr.map(([C, A], H) => /* @__PURE__ */ v(sn, {
          title: A,
          children: C
        }, C + H))
      }), /* @__PURE__ */ v("div", {
        className: x(ne.days),
        children: w.map((C) => {
          if (C.getMonth() !== c.getMonth())
            return /* @__PURE__ */ v("div", {}, C.toString());
          let A = !1;
          Array.isArray(t) ? A = t.some((Z) => we(Z, C)) : t && (A = we(C, t));
          const H = g ? g.some((Z) => Ut(C, Z)) : !1;
          return /* @__PURE__ */ v(Or, {
            date: C,
            disabled: H,
            inRange: Array.isArray(t) && Nt(C.getTime(), t, r),
            onClick: a,
            onMouseEnter: j,
            selected: A
          }, C.toString());
        })
      })]
    })]
  });
}, So = "_container_1qw3r_1", Mo = "_calendarChildrenBottom_1qw3r_11", Co = "_calendarNoChildrenBottom_1qw3r_14", wo = "_divider_1qw3r_17", ue = {
  container: So,
  calendarChildrenBottom: Mo,
  calendarNoChildrenBottom: Co,
  divider: wo
}, Do = ({
  selected: t,
  timeZone: r,
  onChange: o,
  filter: a,
  clearable: l,
  children: i,
  minDate: c
}) => {
  const [b, g] = J(new Date()), S = I(() => {
    if (!c)
      return;
    const w = new Date(c);
    return w.setMonth(w.getMonth() - 1), w;
  }, [c]), _ = I(() => S ? [S.toISOString(), c == null ? void 0 : c.toISOString()] : void 0, [S, c]), d = I(() => {
    if (t) {
      const w = $(t, r);
      return g(new Date(w)), w;
    }
  }, [t, r]), y = I(() => {
    var w;
    return (w = at(a, _)) == null ? void 0 : w.map((j) => [$(j[0], r), $(j[1], r)]);
  }, [a, _, r]), R = (w) => {
    var k;
    let j;
    if (d && we(d, w)) {
      if (!l)
        return "";
      j = void 0;
    } else
      j = w;
    o && o((k = j == null ? void 0 : j.toISOString()) != null ? k : "");
  };
  return /* @__PURE__ */ P("div", {
    className: x(ue.container),
    children: [/* @__PURE__ */ v(De, {
      calendarDate: b,
      className: i ? ue.calendarChildrenBottom : ue.calendarNoChildrenBottom,
      filter: y,
      minMonth: S,
      onCalendarChange: g,
      onSelect: R,
      selected: d
    }), i && /* @__PURE__ */ P(nt, {
      children: [/* @__PURE__ */ v("div", {
        className: x(ue.divider)
      }), i]
    })]
  });
}, To = "_container_3fa92_1", Ro = "_calendarCustom_3fa92_9", ko = "_divider_3fa92_12", _e = {
  container: To,
  calendarCustom: Ro,
  divider: ko
}, Bo = ({
  selected: t,
  timeZone: r,
  onChange: o,
  filter: a,
  minDate: l
}) => {
  const [i, c] = J(null), [b, g] = J(new Date()), [S, _] = J(new Date(new Date().setMonth(new Date().getMonth() + 1))), d = I(() => {
    if (!l)
      return;
    const k = new Date(l);
    return k.setMonth(k.getMonth() - 1), k;
  }, [l]), y = I(() => d ? [d.toISOString(), l == null ? void 0 : l.toISOString()] : void 0, [d, l]), R = I(() => {
    if (!Array.isArray(t) || !t.length)
      return [];
    const k = [$(t[0], r)];
    t.length === 2 && k.push($(t[1], r));
    const [D, M] = Ke(k[0], k[1]);
    return g(D), _(M), k;
  }, [t, r]), w = I(() => {
    var k;
    return (k = at(a, y)) == null ? void 0 : k.map((D) => [$(D[0], r), $(D[1], r)]);
  }, [a, r, y]), j = (k) => {
    var M, N;
    const D = Jt(k, R);
    if (!(D.length === 2 && a && a.some((L) => {
      const z = [$(L[0], r), $(L[1], r)];
      return Wt(z, D);
    }))) {
      if (D.length === 2) {
        const [L, z] = Ke(D[0], D[1]);
        g(L), _(z);
      }
      if (o) {
        const L = [(M = D[0]) == null ? void 0 : M.toISOString()];
        D.length === 2 && L.push((N = D[1]) == null ? void 0 : N.toISOString()), o(L);
      }
    }
  };
  return /* @__PURE__ */ P("div", {
    className: x(_e.container),
    onMouseLeave: () => c(null),
    children: [/* @__PURE__ */ v(De, {
      calendarDate: b,
      className: _e.calendarCustom,
      filter: w,
      hovered: i,
      maxMonth: S,
      minMonth: d,
      onCalendarChange: g,
      onHoveredChange: c,
      onSelect: j,
      selected: R
    }), /* @__PURE__ */ v("div", {
      className: x(_e.divider)
    }), /* @__PURE__ */ v(De, {
      calendarDate: S,
      className: _e.calendarCustom,
      filter: w,
      hovered: i,
      minMonth: b,
      onCalendarChange: _,
      onHoveredChange: c,
      onSelect: j,
      selected: R
    })]
  });
}, xo = ({
  type: t = "basic",
  ...r
}) => {
  switch (t) {
    case "basic": {
      const {
        children: o,
        ...a
      } = r;
      return /* @__PURE__ */ v(Do, {
        ...a,
        children: o
      });
    }
    case "range":
      return /* @__PURE__ */ v(Bo, {
        ...r
      });
  }
};
xo.TimeInterval = Ft;
export {
  xo as default
};
//# sourceMappingURL=index.es.js.map
