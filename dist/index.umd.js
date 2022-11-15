(function(_,te){typeof exports=="object"&&typeof module<"u"?module.exports=te(require("react")):typeof define=="function"&&define.amd?define(["react"],te):(_=typeof globalThis<"u"?globalThis:_||self,_.Calendar=te(_.React))})(this,function(_){"use strict";const Re=(t=>t&&typeof t=="object"&&"default"in t?t:{default:t})(_);var Te={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function r(){for(var a=[],s=0;s<arguments.length;s++){var i=arguments[s];if(!!i){var u=typeof i;if(u==="string"||u==="number")a.push(i);else if(Array.isArray(i)){if(i.length){var y=r.apply(null,i);y&&a.push(y)}}else if(u==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){a.push(i.toString());continue}for(var h in i)n.call(i,h)&&i[h]&&a.push(h)}}}return a.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(Te);const j=Te.exports,de={TimeInterval:"_TimeInterval_18m0r_1",TimeCell:"_TimeCell_18m0r_9"};var _e={exports:{}},Q={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De;function at(){if(De)return Q;De=1;var t=Re.default,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(y,h,C){var d,f={},b=null,D=null;C!==void 0&&(b=""+C),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(D=h.ref);for(d in h)a.call(h,d)&&!i.hasOwnProperty(d)&&(f[d]=h[d]);if(y&&y.defaultProps)for(d in h=y.defaultProps,h)f[d]===void 0&&(f[d]=h[d]);return{$$typeof:n,type:y,key:b,ref:D,props:f,_owner:s.current}}return Q.Fragment=r,Q.jsx=u,Q.jsxs=u,Q}var J={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function lt(){return we||(we=1,process.env.NODE_ENV!=="production"&&function(){var t=Re.default,n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),y=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),B=Symbol.iterator,k="@@iterator";function w(e){if(e===null||typeof e!="object")return null;var o=B&&e[B]||e[k];return typeof o=="function"?o:null}var R=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function M(e){{for(var o=arguments.length,l=new Array(o>1?o-1:0),c=1;c<o;c++)l[c-1]=arguments[c];N("error",e,l)}}function N(e,o,l){{var c=R.ReactDebugCurrentFrame,m=c.getStackAddendum();m!==""&&(o+="%s",l=l.concat([m]));var S=l.map(function(p){return String(p)});S.unshift("Warning: "+o),Function.prototype.apply.call(console[e],console,S)}}var O=!1,z=!1,pe=!1,me=!1,x=!1,P;P=Symbol.for("react.module.reference");function X(e){return!!(typeof e=="string"||typeof e=="function"||e===a||e===i||x||e===s||e===C||e===d||me||e===D||O||z||pe||typeof e=="object"&&e!==null&&(e.$$typeof===b||e.$$typeof===f||e.$$typeof===u||e.$$typeof===y||e.$$typeof===h||e.$$typeof===P||e.getModuleId!==void 0))}function K(e,o,l){var c=e.displayName;if(c)return c;var m=o.displayName||o.name||"";return m!==""?l+"("+m+")":l}function $e(e){return e.displayName||"Context"}function F(e){if(e==null)return null;if(typeof e.tag=="number"&&M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case a:return"Fragment";case r:return"Portal";case i:return"Profiler";case s:return"StrictMode";case C:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:var o=e;return $e(o)+".Consumer";case u:var l=e;return $e(l._context)+".Provider";case h:return K(e,e.render,"ForwardRef");case f:var c=e.displayName||null;return c!==null?c:F(e.type)||"Memo";case b:{var m=e,S=m._payload,p=m._init;try{return F(p(S))}catch{return null}}}return null}var V=Object.assign,q=0,Fe,Ye,Ae,Ne,Pe,ze,Ve;function We(){}We.__reactDisabledLog=!0;function Lt(){{if(q===0){Fe=console.log,Ye=console.info,Ae=console.warn,Ne=console.error,Pe=console.group,ze=console.groupCollapsed,Ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:We,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}q++}}function Ot(){{if(q--,q===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:V({},e,{value:Fe}),info:V({},e,{value:Ye}),warn:V({},e,{value:Ae}),error:V({},e,{value:Ne}),group:V({},e,{value:Pe}),groupCollapsed:V({},e,{value:ze}),groupEnd:V({},e,{value:Ve})})}q<0&&M("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ye=R.ReactCurrentDispatcher,be;function le(e,o,l){{if(be===void 0)try{throw Error()}catch(m){var c=m.stack.trim().match(/\n( *(at )?)/);be=c&&c[1]||""}return`
`+be+e}}var ve=!1,se;{var $t=typeof WeakMap=="function"?WeakMap:Map;se=new $t}function Ue(e,o){if(!e||ve)return"";{var l=se.get(e);if(l!==void 0)return l}var c;ve=!0;var m=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var S;S=ye.current,ye.current=null,Lt();try{if(o){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(Y){c=Y}Reflect.construct(e,[],p)}else{try{p.call()}catch(Y){c=Y}e.call(p.prototype)}}else{try{throw Error()}catch(Y){c=Y}e()}}catch(Y){if(Y&&c&&typeof Y.stack=="string"){for(var g=Y.stack.split(`
`),I=c.stack.split(`
`),T=g.length-1,E=I.length-1;T>=1&&E>=0&&g[T]!==I[E];)E--;for(;T>=1&&E>=0;T--,E--)if(g[T]!==I[E]){if(T!==1||E!==1)do if(T--,E--,E<0||g[T]!==I[E]){var L=`
`+g[T].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),typeof e=="function"&&se.set(e,L),L}while(T>=1&&E>=0);break}}}finally{ve=!1,ye.current=S,Ot(),Error.prepareStackTrace=m}var G=e?e.displayName||e.name:"",rt=G?le(G):"";return typeof e=="function"&&se.set(e,rt),rt}function Ft(e,o,l){return Ue(e,!1)}function Yt(e){var o=e.prototype;return!!(o&&o.isReactComponent)}function ie(e,o,l){if(e==null)return"";if(typeof e=="function")return Ue(e,Yt(e));if(typeof e=="string")return le(e);switch(e){case C:return le("Suspense");case d:return le("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case h:return Ft(e.render);case f:return ie(e.type,o,l);case b:{var c=e,m=c._payload,S=c._init;try{return ie(S(m),o,l)}catch{}}}return""}var ue=Object.prototype.hasOwnProperty,Ge={},Qe=R.ReactDebugCurrentFrame;function ce(e){if(e){var o=e._owner,l=ie(e.type,e._source,o?o.type:null);Qe.setExtraStackFrame(l)}else Qe.setExtraStackFrame(null)}function At(e,o,l,c,m){{var S=Function.call.bind(ue);for(var p in e)if(S(e,p)){var g=void 0;try{if(typeof e[p]!="function"){var I=Error((c||"React class")+": "+l+" type `"+p+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[p]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw I.name="Invariant Violation",I}g=e[p](o,p,c,l,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){g=T}g&&!(g instanceof Error)&&(ce(m),M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",l,p,typeof g),ce(null)),g instanceof Error&&!(g.message in Ge)&&(Ge[g.message]=!0,ce(m),M("Failed %s type: %s",l,g.message),ce(null))}}}var Nt=Array.isArray;function Se(e){return Nt(e)}function Pt(e){{var o=typeof Symbol=="function"&&Symbol.toStringTag,l=o&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l}}function zt(e){try{return Je(e),!1}catch{return!0}}function Je(e){return""+e}function He(e){if(zt(e))return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Pt(e)),Je(e)}var ee=R.ReactCurrentOwner,Vt={key:!0,ref:!0,__self:!0,__source:!0},Ze,Xe,Ce;Ce={};function Wt(e){if(ue.call(e,"ref")){var o=Object.getOwnPropertyDescriptor(e,"ref").get;if(o&&o.isReactWarning)return!1}return e.ref!==void 0}function Ut(e){if(ue.call(e,"key")){var o=Object.getOwnPropertyDescriptor(e,"key").get;if(o&&o.isReactWarning)return!1}return e.key!==void 0}function Gt(e,o){if(typeof e.ref=="string"&&ee.current&&o&&ee.current.stateNode!==o){var l=F(ee.current.type);Ce[l]||(M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',F(ee.current.type),e.ref),Ce[l]=!0)}}function Qt(e,o){{var l=function(){Ze||(Ze=!0,M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}}function Jt(e,o){{var l=function(){Xe||(Xe=!0,M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};l.isReactWarning=!0,Object.defineProperty(e,"ref",{get:l,configurable:!0})}}var Ht=function(e,o,l,c,m,S,p){var g={$$typeof:n,type:e,key:o,ref:l,props:p,_owner:S};return g._store={},Object.defineProperty(g._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(g,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(g,"_source",{configurable:!1,enumerable:!1,writable:!1,value:m}),Object.freeze&&(Object.freeze(g.props),Object.freeze(g)),g};function Zt(e,o,l,c,m){{var S,p={},g=null,I=null;l!==void 0&&(He(l),g=""+l),Ut(o)&&(He(o.key),g=""+o.key),Wt(o)&&(I=o.ref,Gt(o,m));for(S in o)ue.call(o,S)&&!Vt.hasOwnProperty(S)&&(p[S]=o[S]);if(e&&e.defaultProps){var T=e.defaultProps;for(S in T)p[S]===void 0&&(p[S]=T[S])}if(g||I){var E=typeof e=="function"?e.displayName||e.name||"Unknown":e;g&&Qt(p,E),I&&Jt(p,E)}return Ht(e,g,I,m,c,ee.current,p)}}var Me=R.ReactCurrentOwner,Ke=R.ReactDebugCurrentFrame;function U(e){if(e){var o=e._owner,l=ie(e.type,e._source,o?o.type:null);Ke.setExtraStackFrame(l)}else Ke.setExtraStackFrame(null)}var xe;xe=!1;function Be(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function qe(){{if(Me.current){var e=F(Me.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Xt(e){{if(e!==void 0){var o=e.fileName.replace(/^.*[\\\/]/,""),l=e.lineNumber;return`

Check your code at `+o+":"+l+"."}return""}}var et={};function Kt(e){{var o=qe();if(!o){var l=typeof e=="string"?e:e.displayName||e.name;l&&(o=`

Check the top-level render call using <`+l+">.")}return o}}function tt(e,o){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var l=Kt(o);if(et[l])return;et[l]=!0;var c="";e&&e._owner&&e._owner!==Me.current&&(c=" It was passed a child from "+F(e._owner.type)+"."),U(e),M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',l,c),U(null)}}function nt(e,o){{if(typeof e!="object")return;if(Se(e))for(var l=0;l<e.length;l++){var c=e[l];Be(c)&&tt(c,o)}else if(Be(e))e._store&&(e._store.validated=!0);else if(e){var m=w(e);if(typeof m=="function"&&m!==e.entries)for(var S=m.call(e),p;!(p=S.next()).done;)Be(p.value)&&tt(p.value,o)}}}function qt(e){{var o=e.type;if(o==null||typeof o=="string")return;var l;if(typeof o=="function")l=o.propTypes;else if(typeof o=="object"&&(o.$$typeof===h||o.$$typeof===f))l=o.propTypes;else return;if(l){var c=F(o);At(l,e.props,"prop",c,e)}else if(o.PropTypes!==void 0&&!xe){xe=!0;var m=F(o);M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",m||"Unknown")}typeof o.getDefaultProps=="function"&&!o.getDefaultProps.isReactClassApproved&&M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function en(e){{for(var o=Object.keys(e.props),l=0;l<o.length;l++){var c=o[l];if(c!=="children"&&c!=="key"){U(e),M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),U(null);break}}e.ref!==null&&(U(e),M("Invalid attribute `ref` supplied to `React.Fragment`."),U(null))}}function ot(e,o,l,c,m,S){{var p=X(e);if(!p){var g="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(g+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var I=Xt(m);I?g+=I:g+=qe();var T;e===null?T="null":Se(e)?T="array":e!==void 0&&e.$$typeof===n?(T="<"+(F(e.type)||"Unknown")+" />",g=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,g)}var E=Zt(e,o,l,m,S);if(E==null)return E;if(p){var L=o.children;if(L!==void 0)if(c)if(Se(L)){for(var G=0;G<L.length;G++)nt(L[G],e);Object.freeze&&Object.freeze(L)}else M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else nt(L,e)}return e===a?en(E):qt(E),E}}function tn(e,o,l){return ot(e,o,l,!0)}function nn(e,o,l){return ot(e,o,l,!1)}var on=nn,rn=tn;J.Fragment=a,J.jsx=on,J.jsxs=rn}()),J}(function(t){process.env.NODE_ENV==="production"?t.exports=at():t.exports=lt()})(_e);const v=_e.exports.jsx,A=_e.exports.jsxs,st=({startValue:t,onStartChange:n,endValue:r,onEndChange:a,minStart:s,maxStart:i,minEnd:u,maxEnd:y})=>A("div",{className:j(de.TimeInterval),children:[v("div",{className:j(de.TimeCell)}),v("div",{className:j(de.TimeCell)})]}),it=(t,n,r)=>{if(!n.length)return!1;const a=n[0].getTime();if(n.length===2){const s=n[1].getTime();return a<t&&s>t}else return Boolean(r&&(a<t&&r>=t||t<a&&t>=r))},ut=t=>{const n=new Date;return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate()},ct=t=>{const n=t.getDay(),r=t.getDate()-n+(n===0?-6:1);return new Date(t.setDate(r))},dt=t=>{const n=t.getDay(),r=t.getDate()-n+(n===0?-6:1);return new Date(t.setDate(r+7))},_t=t=>new Date(t.getFullYear(),t.getMonth()+1,0),fe=(t,n)=>t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear(),ge=(t,n)=>t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear(),ft=(t,n)=>{const r=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=new Date(n[0].getFullYear(),n[0].getMonth(),n[0].getDate()),s=new Date(n[1].getFullYear(),n[1].getMonth(),n[1].getDate());return r>=a&&r<=s},gt=(t,n)=>t[0]>n[0]&&t[0]<n[1]||n[0]>t[0]&&n[0]<t[1],ht=(t,n)=>t.getMonth()<=n.getMonth()&&t.getFullYear()<=n.getFullYear(),pt=(t,n)=>t.getMonth()>=n.getMonth()&&t.getFullYear()>=n.getFullYear(),Ee=(t,n)=>{const r=new Date(t),a=new Date(n!=null?n:t);return fe(r,a)&&a.setMonth(a.getMonth()+1),[r,a]},mt=(t,n)=>{const r=t.getTime();let a=[...n];return n.length?n.length===1?n[0].getTime()<r?a.push(t):a.unshift(t):a.length===2&&(a=[t]):a.push(t),a},yt=(t,n)=>t.getFullYear()<=n.getFullYear()&&t.getMonth()-1<=n.getMonth(),bt=(t,n)=>t.getFullYear()>=n.getFullYear()&&t.getMonth()+1>=n.getMonth(),je=(t,n,r,a)=>{let s;return n?s=new Date(t.setFullYear(t.getFullYear()+(a?-1:1))):r?s=new Date(t.setFullYear(t.getFullYear()+(a?-10:10))):s=new Date(t.setMonth(t.getMonth()+(a?-1:1))),s},vt=t=>t.reduce((n,r)=>{if(r[0].getMonth()===r[1].getMonth()&&r[0].getFullYear()===r[1].getFullYear())return n;const a=new Date(r[0]);a.getDate()!==1&&a.setMonth(a.getMonth()+1);const s=new Date(r[1]),i=new Date(s.getFullYear(),s.getMonth()+1,0);for(s.getDate()===i.getDate()&&s.setMonth(s.getMonth()+1);!fe(a,s);)n.push(new Date(a)),a.setMonth(a.getMonth()+1);return n},[]),St=t=>t.reduce((n,r)=>{if(r[0].getFullYear()===r[1].getFullYear())return n;const a=new Date(r[0]);a.getMonth()!==1&&a.getDate()!==1&&a.setFullYear(a.getFullYear()+1);const s=new Date(r[1]),i=new Date(s.getFullYear(),s.getMonth()+1,0);for(s.getDate()===i.getDate()&&s.getMonth()===11&&s.setFullYear(s.getFullYear()+1);a.getFullYear()!==s.getFullYear();)n.push(new Date(a)),a.setFullYear(a.getFullYear()+1);return n},[]),$=(t,n)=>new Date(new Date(t||Date.now()).toLocaleString("en-US",{timeZone:n})),ke=(t,n)=>t&&n?[...t,n]:n?[n]:t,Ct=(t,n)=>_.useMemo(()=>{let r=$(t,n);r.setDate(1),r.setUTCHours(0),r.setUTCMinutes(0),r.setUTCSeconds(0),r.setUTCMilliseconds(0),r=ct(r);const a=_t(t),s=dt(a),i=[];for(;r<=s;)i.push(new Date(r)),r.setDate(r.getDate()+1);return i},[t.getDate(),t.getMonth(),t.getFullYear()]),Mt=[["\u041F\u043D","\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A"],["\u0412\u0442","\u0412\u0442\u043E\u0440\u043D\u0438\u043A"],["\u0421\u0440","\u0421\u0440\u0435\u0434\u0430"],["\u0427\u0442","\u0427\u0435\u0442\u0432\u0435\u0440\u0433"],["\u041F\u0442","\u041F\u044F\u0442\u043D\u0438\u0446\u0430"],["\u0421\u0431","\u0421\u0443\u0431\u0431\u043E\u0442\u0430"],["\u0412\u0441","\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435"]],ne=new Map([[0,"\u042F\u043D\u0432\u0430\u0440\u044C"],[1,"\u0424\u0435\u0432\u0440\u0430\u043B\u044C"],[2,"\u041C\u0430\u0440\u0442"],[3,"\u0410\u043F\u0440\u0435\u043B\u044C"],[4,"\u041C\u0430\u0439"],[5,"\u0418\u044E\u043D\u044C"],[6,"\u0418\u044E\u043B\u044C"],[7,"\u0410\u0432\u0433\u0443\u0441\u0442"],[8,"\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C"],[9,"\u041E\u043A\u0442\u044F\u0431\u0440\u044C"],[10,"\u041D\u043E\u044F\u0431\u0440\u044C"],[11,"\u0414\u0435\u043A\u0430\u0431\u0440\u044C"]]),W={h0:"_h0_1fdx3_1",h1:"_h1_1fdx3_6",h2:"_h2_1fdx3_11",h3:"_h3_1fdx3_16",bigTextRegular:"_bigTextRegular_1fdx3_21",bodyTextRegular:"_bodyTextRegular_1fdx3_26",bodyTextBold:"_bodyTextBold_1fdx3_31",subtextRegular:"_subtextRegular_1fdx3_36",subtextBold:"_subtextBold_1fdx3_41",subtitleBold:"_subtitleBold_1fdx3_46",captionRegular:"_captionRegular_1fdx3_52",captionBoldV2:"_captionBoldV2_1fdx3_57",captionBold:"_captionBold_1fdx3_57",upCaptionBold:"_upCaptionBold_1fdx3_67",header:"_header_1fdx3_73",header__leftContainer:"_header__leftContainer_1fdx3_81",header__rightContainer:"_header__rightContainer_1fdx3_82",paginationLimitSelectorButton:"_paginationLimitSelectorButton_1fdx3_86",paginationLimitSelectorButton_item:"_paginationLimitSelectorButton_item_1fdx3_97",paginationLimitSelectorButton_selected:"_paginationLimitSelectorButton_selected_1fdx3_100",defaultCellStyles:"_defaultCellStyles_1fdx3_103",defaultRowStyles:"_defaultRowStyles_1fdx3_108",resetButtonStyles:"_resetButtonStyles_1fdx3_112",cell:"_cell_1fdx3_118",inrange:"_inrange_1fdx3_130",holiday:"_holiday_1fdx3_134",today:"_today_1fdx3_137",disabled:"_disabled_1fdx3_140",selected:"_selected_1fdx3_144"},xt=_.memo(({date:t,inRange:n,selected:r,disabled:a,onClick:s,onMouseEnter:i})=>v("button",{className:j(W.cell,{[W.selected]:r,[W.holiday]:t.getDay()===6||t.getDay()===0,[W.today]:ut(t),[W.inrange]:n,[W.disabled]:a}),onClick:()=>!a&&s(t),onMouseEnter:()=>i(t),type:"button",children:t.getDate()})),Bt={h0:"_h0_kp8mr_1",h1:"_h1_kp8mr_6",h2:"_h2_kp8mr_11",h3:"_h3_kp8mr_16",bigTextRegular:"_bigTextRegular_kp8mr_21",bodyTextRegular:"_bodyTextRegular_kp8mr_26",bodyTextBold:"_bodyTextBold_kp8mr_31",subtextRegular:"_subtextRegular_kp8mr_36",subtextBold:"_subtextBold_kp8mr_41",subtitleBold:"_subtitleBold_kp8mr_46",captionRegular:"_captionRegular_kp8mr_52",captionBoldV2:"_captionBoldV2_kp8mr_57",captionBold:"_captionBold_kp8mr_57",upCaptionBold:"_upCaptionBold_kp8mr_67",header:"_header_kp8mr_73",header__leftContainer:"_header__leftContainer_kp8mr_81",header__rightContainer:"_header__rightContainer_kp8mr_82",paginationLimitSelectorButton:"_paginationLimitSelectorButton_kp8mr_86",paginationLimitSelectorButton_item:"_paginationLimitSelectorButton_item_kp8mr_97",paginationLimitSelectorButton_selected:"_paginationLimitSelectorButton_selected_kp8mr_100",defaultCellStyles:"_defaultCellStyles_kp8mr_103",defaultRowStyles:"_defaultRowStyles_kp8mr_108",resetButtonStyles:"_resetButtonStyles_kp8mr_112",dayLabel:"_dayLabel_kp8mr_118"},Rt=_.memo(({title:t,children:n})=>v("button",{className:j(Bt.dayLabel),title:t,type:"button",children:n})),H={h0:"_h0_dm5kb_1",h1:"_h1_dm5kb_6",h2:"_h2_dm5kb_11",h3:"_h3_dm5kb_16",bigTextRegular:"_bigTextRegular_dm5kb_21",bodyTextRegular:"_bodyTextRegular_dm5kb_26",bodyTextBold:"_bodyTextBold_dm5kb_31",subtextRegular:"_subtextRegular_dm5kb_36",subtextBold:"_subtextBold_dm5kb_41",subtitleBold:"_subtitleBold_dm5kb_46",captionRegular:"_captionRegular_dm5kb_52",captionBoldV2:"_captionBoldV2_dm5kb_57",captionBold:"_captionBold_dm5kb_57",upCaptionBold:"_upCaptionBold_dm5kb_67",header:"_header_dm5kb_73",header__leftContainer:"_header__leftContainer_dm5kb_81",header__rightContainer:"_header__rightContainer_dm5kb_82",paginationLimitSelectorButton:"_paginationLimitSelectorButton_dm5kb_86",paginationLimitSelectorButton_item:"_paginationLimitSelectorButton_item_dm5kb_97",paginationLimitSelectorButton_selected:"_paginationLimitSelectorButton_selected_dm5kb_100",defaultCellStyles:"_defaultCellStyles_dm5kb_103",defaultRowStyles:"_defaultRowStyles_dm5kb_108",resetButtonStyles:"_resetButtonStyles_dm5kb_112",monthsYearsContainer:"_monthsYearsContainer_dm5kb_118",monthsYearsCell:"_monthsYearsCell_dm5kb_127",today:"_today_dm5kb_137",selected:"_selected_dm5kb_140",disabled:"_disabled_dm5kb_143"},Ie=_.memo(({values:t,selected:n,disabled:r,onSelect:a,today:s})=>v("div",{className:j(H.monthsYearsContainer),children:t.map((i,u)=>v("div",{className:j(H.monthsYearsCell,{[H.disabled]:r==null?void 0:r.includes(i),[H.selected]:n===i,[H.today]:s===i}),onClick:()=>!(r!=null&&r.includes(i))&&a(u),children:i},i+u))})),Le=Array.from(ne.values()),Tt=_.memo(({selected:t,onSelect:n,min:r,max:a,filter:s})=>{var C;const i=_.useMemo(()=>s?vt(s):[],[s]),u=_.useMemo(()=>{const d=new Date(t||new Date);return Array.from(ne).reduce((f,[b,D])=>(d.setMonth(b),((i==null?void 0:i.some(B=>fe(d,B)))||r&&ht(d,r)||a&&pt(d,a))&&f.push(D),f),[])},[t,i,r,a]),y=_.useCallback(d=>{const f=new Date(t!=null?t:new Date);f.setMonth(d),n(f)},[n,t]),h=new Date().getFullYear()===t.getFullYear()?Le[new Date().getMonth()]:void 0;return v(Ie,{disabled:u,onSelect:y,selected:t&&(C=ne.get(t.getMonth()))!=null?C:"",today:h,values:Le})}),Dt=_.memo(({selected:t,onSelect:n,min:r,max:a,filter:s})=>{const i=_.useMemo(()=>s?St(s):[],[s]),u=_.useMemo(()=>{const d=(t||new Date).getFullYear(),f=parseInt(d.toString().slice(-1));let b=d-f;const D=[];for(;b<d-f+12;)D.push(b.toString()),b++;return D},[t]),y=_.useMemo(()=>u.reduce((C,d)=>{const f=parseInt(d);return((i==null?void 0:i.some(b=>f===b.getFullYear()))||r&&f<r.getFullYear()||a&&f>a.getFullYear())&&C.push(d),C},[]),[i,a,r,u]),h=_.useCallback(C=>{const d=new Date(t!=null?t:new Date);d.setFullYear(parseInt(u[C])),n(d)},[n,t,u]);return v(Ie,{disabled:y,onSelect:h,selected:t?t.getFullYear().toString():"",today:new Date().getFullYear().toString(),values:u})}),wt="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43MDM1IDYuNzkyODlDMTUuMDk4OCA3LjE4MzQyIDE1LjA5ODggNy44MTY1OCAxNC43MDM1IDguMjA3MTFMMTAuODYzNSAxMkwxNC43MDM1IDE1Ljc5MjlDMTUuMDk4OCAxNi4xODM0IDE1LjA5ODggMTYuODE2NiAxNC43MDM1IDE3LjIwNzFDMTQuMzA4MSAxNy41OTc2IDEzLjY2NzEgMTcuNTk3NiAxMy4yNzE3IDE3LjIwNzFMOC43MjAyOCAxMi43MTE1QzguMzIzOTMgMTIuMzIgOC4zMjM5MiAxMS42OCA4LjcyMDI4IDExLjI4ODVMMTMuMjcxNyA2Ljc5Mjg5QzEzLjY2NzEgNi40MDIzNyAxNC4zMDgxIDYuNDAyMzcgMTQuNzAzNSA2Ljc5Mjg5WiIgZmlsbD0iIzAwNEVENiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+",Et="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjI5NjUzIDYuNzkyODlDOC45MDExNiA3LjE4MzQyIDguOTAxMTYgNy44MTY1OCA5LjI5NjUzIDguMjA3MTFMMTMuMTM2NSAxMkw5LjI5NjUzIDE1Ljc5MjlDOC45MDExNiAxNi4xODM0IDguOTAxMTYgMTYuODE2NiA5LjI5NjUzIDE3LjIwNzFDOS42OTE5IDE3LjU5NzYgMTAuMzMyOSAxNy41OTc2IDEwLjcyODMgMTcuMjA3MUwxNS4yNzk3IDEyLjcxMTVDMTUuNjc2MSAxMi4zMiAxNS42NzYxIDExLjY4IDE1LjI3OTcgMTEuMjg4NUwxMC43MjgzIDYuNzkyODlDMTAuMzMyOSA2LjQwMjM3IDkuNjkxOSA2LjQwMjM3IDkuMjk2NTMgNi43OTI4OVoiIGZpbGw9IiMwMDRFRDYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==",oe={h0:"_h0_19ajy_1",h1:"_h1_19ajy_6",h2:"_h2_19ajy_11",h3:"_h3_19ajy_16",bigTextRegular:"_bigTextRegular_19ajy_21",bodyTextRegular:"_bodyTextRegular_19ajy_26",bodyTextBold:"_bodyTextBold_19ajy_31",subtextRegular:"_subtextRegular_19ajy_36",subtextBold:"_subtextBold_19ajy_41",subtitleBold:"_subtitleBold_19ajy_46",captionRegular:"_captionRegular_19ajy_52",captionBoldV2:"_captionBoldV2_19ajy_57",captionBold:"_captionBold_19ajy_57",upCaptionBold:"_upCaptionBold_19ajy_67",header:"_header_19ajy_73",header__leftContainer:"_header__leftContainer_19ajy_81",header__rightContainer:"_header__rightContainer_19ajy_82",paginationLimitSelectorButton:"_paginationLimitSelectorButton_19ajy_86",paginationLimitSelectorButton_item:"_paginationLimitSelectorButton_item_19ajy_97",paginationLimitSelectorButton_selected:"_paginationLimitSelectorButton_selected_19ajy_100",defaultCellStyles:"_defaultCellStyles_19ajy_103",defaultRowStyles:"_defaultRowStyles_19ajy_108",resetButtonStyles:"_resetButtonStyles_19ajy_112",slider:"_slider_19ajy_118",sliderContent:"_sliderContent_19ajy_123",sliderArrow:"_sliderArrow_19ajy_133",button:"_button_19ajy_136"},jt=_.memo(({onBackClick:t,onForwardClick:n,backDisabled:r,forwardDisabled:a,children:s})=>A("div",{className:j(oe.slider),children:[v("img",{src:wt,className:oe.button,alt:"logo",onClick:t}),v("div",{className:j(oe.sliderContent),children:s}),v("img",{src:Et,className:oe.button,alt:"logo",onClick:n})]})),Z={wrapper:"_wrapper_1vnyz_1",calendar:"_calendar_1vnyz_4",label:"_label_1vnyz_11",daylabels:"_daylabels_1vnyz_17",days:"_days_1vnyz_24",headerLabel:"_headerLabel_1vnyz_30"},he=({selected:t,hovered:n,onHoveredChange:r,onSelect:a,minMonth:s,maxMonth:i,calendarDate:u,onCalendarChange:y,filter:h,className:C})=>{const[d,f]=_.useState(!1),[b,D]=_.useState(!1),B=Ct(u),k=_.useCallback(x=>{Array.isArray(t)&&!t.length||r==null||r(x.getTime())},[t,r]),w=_.useCallback(x=>{y(x),f(!1)},[y,f]),R=_.useCallback(x=>{y(x),D(!1),f(!0)},[y,D,f]),M=s?yt(u,s):!1,N=i?bt(u,i):!1,O=_.useCallback(()=>{if(!M){const x=je(u,d,b,!0);y(x)}},[M,y,u,d,b]),z=_.useCallback(()=>{if(!N){const x=je(u,d,b);y(x)}},[N,y,u,d,b]),pe=()=>{D(!1),f(!0)},me=()=>{f(!1),D(!0)};return A("div",{className:j(Z.calendar,C),children:[A(jt,{backDisabled:M,forwardDisabled:N,onBackClick:O,onForwardClick:z,children:[!d&&v("a",{className:j(Z.headerLabel),onClick:pe,children:ne.get(u.getMonth())}),"\xA0",!b&&v("a",{className:j(Z.headerLabel),onClick:me,children:u.getFullYear()})]}),d&&v(Tt,{filter:h,max:i,min:s,onSelect:w,selected:u}),b&&v(Dt,{filter:h,max:i,min:s,onSelect:R,selected:u}),!d&&!b&&A(_.Fragment,{children:[v("div",{className:j(Z.daylabels),children:Mt.map(([x,P],X)=>v(Rt,{title:P,children:x},x+X))}),v("div",{className:j(Z.days),children:B.map(x=>{if(x.getMonth()!==u.getMonth())return v("div",{},x.toString());let P=!1;Array.isArray(t)?P=t.some(K=>ge(K,x)):t&&(P=ge(x,t));const X=h?h.some(K=>ft(x,K)):!1;return v(xt,{date:x,disabled:X,inRange:Array.isArray(t)&&it(x.getTime(),t,n),onClick:a,onMouseEnter:k,selected:P},x.toString())})})]})]})},re={container:"_container_1qw3r_1",calendarChildrenBottom:"_calendarChildrenBottom_1qw3r_11",calendarNoChildrenBottom:"_calendarNoChildrenBottom_1qw3r_14",divider:"_divider_1qw3r_17"},kt=({selected:t,timeZone:n,onChange:r,filter:a,clearable:s,children:i,minDate:u})=>{const[y,h]=_.useState(new Date),C=_.useMemo(()=>{if(!u)return;const B=new Date(u);return B.setMonth(B.getMonth()-1),B},[u]),d=_.useMemo(()=>C?[C.toISOString(),u==null?void 0:u.toISOString()]:void 0,[C,u]),f=_.useMemo(()=>{if(t){const B=$(t,n);return h(new Date(B)),B}},[t,n]),b=_.useMemo(()=>{var B;return(B=ke(a,d))==null?void 0:B.map(k=>[$(k[0],n),$(k[1],n)])},[a,d,n]),D=B=>{var w;let k;if(f&&ge(f,B)){if(!s)return"";k=void 0}else k=B;r&&r((w=k==null?void 0:k.toISOString())!=null?w:"")};return A("div",{className:j(re.container),children:[v(he,{calendarDate:y,className:i?re.calendarChildrenBottom:re.calendarNoChildrenBottom,filter:b,minMonth:C,onCalendarChange:h,onSelect:D,selected:f}),i&&A(_.Fragment,{children:[v("div",{className:j(re.divider)}),i]})]})},ae={container:"_container_3fa92_1",calendarCustom:"_calendarCustom_3fa92_9",divider:"_divider_3fa92_12"},It=({selected:t,timeZone:n,onChange:r,filter:a,minDate:s})=>{const[i,u]=_.useState(null),[y,h]=_.useState(new Date),[C,d]=_.useState(new Date(new Date().setMonth(new Date().getMonth()+1))),f=_.useMemo(()=>{if(!s)return;const w=new Date(s);return w.setMonth(w.getMonth()-1),w},[s]),b=_.useMemo(()=>f?[f.toISOString(),s==null?void 0:s.toISOString()]:void 0,[f,s]),D=_.useMemo(()=>{if(!Array.isArray(t)||!t.length)return[];const w=[$(t[0],n)];t.length===2&&w.push($(t[1],n));const[R,M]=Ee(w[0],w[1]);return h(R),d(M),w},[t,n]),B=_.useMemo(()=>{var w;return(w=ke(a,b))==null?void 0:w.map(R=>[$(R[0],n),$(R[1],n)])},[a,n,b]),k=w=>{var M,N;const R=mt(w,D);if(!(R.length===2&&a&&a.some(O=>{const z=[$(O[0],n),$(O[1],n)];return gt(z,R)}))){if(R.length===2){const[O,z]=Ee(R[0],R[1]);h(O),d(z)}if(r){const O=[(M=R[0])==null?void 0:M.toISOString()];R.length===2&&O.push((N=R[1])==null?void 0:N.toISOString()),r(O)}}};return A("div",{className:j(ae.container),onMouseLeave:()=>u(null),children:[v(he,{calendarDate:y,className:ae.calendarCustom,filter:B,hovered:i,maxMonth:C,minMonth:f,onCalendarChange:h,onHoveredChange:u,onSelect:k,selected:D}),v("div",{className:j(ae.divider)}),v(he,{calendarDate:C,className:ae.calendarCustom,filter:B,hovered:i,minMonth:y,onCalendarChange:d,onHoveredChange:u,onSelect:k,selected:D})]})},Oe=({type:t="basic",...n})=>{switch(t){case"basic":{const{children:r,...a}=n;return v(kt,{...a,children:r})}case"range":return v(It,{...n})}};return Oe.TimeInterval=st,Oe});
//# sourceMappingURL=index.umd.js.map
