function _k(n,e){for(var t=0;t<e.length;t++){const a=e[t];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in n)){const o=Object.getOwnPropertyDescriptor(a,r);o&&Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function Z2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Ak(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function a(){var r=!1;try{r=this instanceof a}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(a){var r=Object.getOwnPropertyDescriptor(n,a);Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:function(){return n[a]}})}),t}var Sh={exports:{}},Uo={};var Rv;function Ok(){if(Rv)return Uo;Rv=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,r,o){var l=null;if(o!==void 0&&(l=""+o),r.key!==void 0&&(l=""+r.key),"key"in r){o={};for(var c in r)c!=="key"&&(o[c]=r[c])}else o=r;return r=o.ref,{$$typeof:n,type:a,key:l,ref:r!==void 0?r:null,props:o}}return Uo.Fragment=e,Uo.jsx=t,Uo.jsxs=t,Uo}var _v;function Ik(){return _v||(_v=1,Sh.exports=Ok()),Sh.exports}var It=Ik(),Th={exports:{}},Vo={},Ch={exports:{}},Nh={};var Av;function Dk(){return Av||(Av=1,(function(n){function e(P,ae){var ie=P.length;P.push(ae);e:for(;0<ie;){var ge=ie-1>>>1,be=P[ge];if(0<r(be,ae))P[ge]=ae,P[ie]=be,ie=ge;else break e}}function t(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var ae=P[0],ie=P.pop();if(ie!==ae){P[0]=ie;e:for(var ge=0,be=P.length,L=be>>>1;ge<L;){var Q=2*(ge+1)-1,re=P[Q],he=Q+1,Se=P[he];if(0>r(re,ie))he<be&&0>r(Se,re)?(P[ge]=Se,P[he]=ie,ge=he):(P[ge]=re,P[Q]=ie,ge=Q);else if(he<be&&0>r(Se,ie))P[ge]=Se,P[he]=ie,ge=he;else break e}}return ae}function r(P,ae){var ie=P.sortIndex-ae.sortIndex;return ie!==0?ie:P.id-ae.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();n.unstable_now=function(){return l.now()-c}}var f=[],d=[],p=1,m=null,y=3,x=!1,v=!1,S=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function A(P){for(var ae=t(d);ae!==null;){if(ae.callback===null)a(d);else if(ae.startTime<=P)a(d),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(d)}}function z(P){if(S=!1,A(P),!v)if(t(f)!==null)v=!0,j||(j=!0,Z());else{var ae=t(d);ae!==null&&de(z,ae.startTime-P)}}var j=!1,G=-1,X=5,V=-1;function U(){return w?!0:!(n.unstable_now()-V<X)}function R(){if(w=!1,j){var P=n.unstable_now();V=P;var ae=!0;try{e:{v=!1,S&&(S=!1,$(G),G=-1),x=!0;var ie=y;try{t:{for(A(P),m=t(f);m!==null&&!(m.expirationTime>P&&U());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,y=m.priorityLevel;var be=ge(m.expirationTime<=P);if(P=n.unstable_now(),typeof be=="function"){m.callback=be,A(P),ae=!0;break t}m===t(f)&&a(f),A(P)}else a(f);m=t(f)}if(m!==null)ae=!0;else{var L=t(d);L!==null&&de(z,L.startTime-P),ae=!1}}break e}finally{m=null,y=ie,x=!1}ae=void 0}}finally{ae?Z():j=!1}}}var Z;if(typeof O=="function")Z=function(){O(R)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,fe=oe.port2;oe.port1.onmessage=R,Z=function(){fe.postMessage(null)}}else Z=function(){T(R,0)};function de(P,ae){G=T(function(){P(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_next=function(P){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var ie=y;y=ae;try{return P()}finally{y=ie}},n.unstable_requestPaint=function(){w=!0},n.unstable_runWithPriority=function(P,ae){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ie=y;y=P;try{return ae()}finally{y=ie}},n.unstable_scheduleCallback=function(P,ae,ie){var ge=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ge+ie:ge):ie=ge,P){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ie+be,P={id:p++,callback:ae,priorityLevel:P,startTime:ie,expirationTime:be,sortIndex:-1},ie>ge?(P.sortIndex=ie,e(d,P),t(f)===null&&P===t(d)&&(S?($(G),G=-1):S=!0,de(z,ie-ge))):(P.sortIndex=be,e(f,P),v||x||(v=!0,j||(j=!0,Z()))),P},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(P){var ae=y;return function(){var ie=y;y=ae;try{return P.apply(this,arguments)}finally{y=ie}}}})(Nh)),Nh}var Ov;function Lk(){return Ov||(Ov=1,Ch.exports=Dk()),Ch.exports}var $h={exports:{}},Te={};var Iv;function Fk(){if(Iv)return Te;Iv=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,w={};function T(L,Q,re){this.props=L,this.context=Q,this.refs=w,this.updater=re||v}T.prototype.isReactComponent={},T.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},T.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function $(){}$.prototype=T.prototype;function O(L,Q,re){this.props=L,this.context=Q,this.refs=w,this.updater=re||v}var A=O.prototype=new $;A.constructor=O,S(A,T.prototype),A.isPureReactComponent=!0;var z=Array.isArray;function j(){}var G={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function V(L,Q,re){var he=re.ref;return{$$typeof:n,type:L,key:Q,ref:he!==void 0?he:null,props:re}}function U(L,Q){return V(L.type,Q,L.props)}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function Z(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(re){return Q[re]})}var oe=/\/+/g;function fe(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?Z(""+L.key):Q.toString(36)}function de(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(j,j):(L.status="pending",L.then(function(Q){L.status==="pending"&&(L.status="fulfilled",L.value=Q)},function(Q){L.status==="pending"&&(L.status="rejected",L.reason=Q)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,Q,re,he,Se){var $e=typeof L;($e==="undefined"||$e==="boolean")&&(L=null);var Ve=!1;if(L===null)Ve=!0;else switch($e){case"bigint":case"string":case"number":Ve=!0;break;case"object":switch(L.$$typeof){case n:case e:Ve=!0;break;case p:return Ve=L._init,P(Ve(L._payload),Q,re,he,Se)}}if(Ve)return Se=Se(L),Ve=he===""?"."+fe(L,0):he,z(Se)?(re="",Ve!=null&&(re=Ve.replace(oe,"$&/")+"/"),P(Se,Q,re,"",function(Wi){return Wi})):Se!=null&&(R(Se)&&(Se=U(Se,re+(Se.key==null||L&&L.key===Se.key?"":(""+Se.key).replace(oe,"$&/")+"/")+Ve)),Q.push(Se)),1;Ve=0;var Ht=he===""?".":he+":";if(z(L))for(var ut=0;ut<L.length;ut++)he=L[ut],$e=Ht+fe(he,ut),Ve+=P(he,Q,re,$e,Se);else if(ut=x(L),typeof ut=="function")for(L=ut.call(L),ut=0;!(he=L.next()).done;)he=he.value,$e=Ht+fe(he,ut++),Ve+=P(he,Q,re,$e,Se);else if($e==="object"){if(typeof L.then=="function")return P(de(L),Q,re,he,Se);throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Ve}function ae(L,Q,re){if(L==null)return L;var he=[],Se=0;return P(L,he,"","",function($e){return Q.call(re,$e,Se++)}),he}function ie(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(re){(L._status===0||L._status===-1)&&(L._status=1,L._result=re)},function(re){(L._status===0||L._status===-1)&&(L._status=2,L._result=re)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var ge=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},be={map:ae,forEach:function(L,Q,re){ae(L,function(){Q.apply(this,arguments)},re)},count:function(L){var Q=0;return ae(L,function(){Q++}),Q},toArray:function(L){return ae(L,function(Q){return Q})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return Te.Activity=m,Te.Children=be,Te.Component=T,Te.Fragment=t,Te.Profiler=r,Te.PureComponent=O,Te.StrictMode=a,Te.Suspense=f,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,Te.__COMPILER_RUNTIME={__proto__:null,c:function(L){return G.H.useMemoCache(L)}},Te.cache=function(L){return function(){return L.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(L,Q,re){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var he=S({},L.props),Se=L.key;if(Q!=null)for($e in Q.key!==void 0&&(Se=""+Q.key),Q)!X.call(Q,$e)||$e==="key"||$e==="__self"||$e==="__source"||$e==="ref"&&Q.ref===void 0||(he[$e]=Q[$e]);var $e=arguments.length-2;if($e===1)he.children=re;else if(1<$e){for(var Ve=Array($e),Ht=0;Ht<$e;Ht++)Ve[Ht]=arguments[Ht+2];he.children=Ve}return V(L.type,Se,he)},Te.createContext=function(L){return L={$$typeof:l,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:o,_context:L},L},Te.createElement=function(L,Q,re){var he,Se={},$e=null;if(Q!=null)for(he in Q.key!==void 0&&($e=""+Q.key),Q)X.call(Q,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(Se[he]=Q[he]);var Ve=arguments.length-2;if(Ve===1)Se.children=re;else if(1<Ve){for(var Ht=Array(Ve),ut=0;ut<Ve;ut++)Ht[ut]=arguments[ut+2];Se.children=Ht}if(L&&L.defaultProps)for(he in Ve=L.defaultProps,Ve)Se[he]===void 0&&(Se[he]=Ve[he]);return V(L,$e,Se)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(L){return{$$typeof:c,render:L}},Te.isValidElement=R,Te.lazy=function(L){return{$$typeof:p,_payload:{_status:-1,_result:L},_init:ie}},Te.memo=function(L,Q){return{$$typeof:d,type:L,compare:Q===void 0?null:Q}},Te.startTransition=function(L){var Q=G.T,re={};G.T=re;try{var he=L(),Se=G.S;Se!==null&&Se(re,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(j,ge)}catch($e){ge($e)}finally{Q!==null&&re.types!==null&&(Q.types=re.types),G.T=Q}},Te.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},Te.use=function(L){return G.H.use(L)},Te.useActionState=function(L,Q,re){return G.H.useActionState(L,Q,re)},Te.useCallback=function(L,Q){return G.H.useCallback(L,Q)},Te.useContext=function(L){return G.H.useContext(L)},Te.useDebugValue=function(){},Te.useDeferredValue=function(L,Q){return G.H.useDeferredValue(L,Q)},Te.useEffect=function(L,Q){return G.H.useEffect(L,Q)},Te.useEffectEvent=function(L){return G.H.useEffectEvent(L)},Te.useId=function(){return G.H.useId()},Te.useImperativeHandle=function(L,Q,re){return G.H.useImperativeHandle(L,Q,re)},Te.useInsertionEffect=function(L,Q){return G.H.useInsertionEffect(L,Q)},Te.useLayoutEffect=function(L,Q){return G.H.useLayoutEffect(L,Q)},Te.useMemo=function(L,Q){return G.H.useMemo(L,Q)},Te.useOptimistic=function(L,Q){return G.H.useOptimistic(L,Q)},Te.useReducer=function(L,Q,re){return G.H.useReducer(L,Q,re)},Te.useRef=function(L){return G.H.useRef(L)},Te.useState=function(L){return G.H.useState(L)},Te.useSyncExternalStore=function(L,Q,re){return G.H.useSyncExternalStore(L,Q,re)},Te.useTransition=function(){return G.H.useTransition()},Te.version="19.2.3",Te}var Dv;function $p(){return Dv||(Dv=1,$h.exports=Fk()),$h.exports}var Eh={exports:{}},Ft={};var Lv;function Bk(){if(Lv)return Ft;Lv=1;var n=$p();function e(f){var d="https://react.dev/errors/"+f;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)d+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+f+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(f,d,p){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:m==null?null:""+m,children:f,containerInfo:d,implementation:p}}var l=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(f,d){if(f==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ft.createPortal=function(f,d){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return o(f,d,null,p)},Ft.flushSync=function(f){var d=l.T,p=a.p;try{if(l.T=null,a.p=2,f)return f()}finally{l.T=d,a.p=p,a.d.f()}},Ft.preconnect=function(f,d){typeof f=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(f,d))},Ft.prefetchDNS=function(f){typeof f=="string"&&a.d.D(f)},Ft.preinit=function(f,d){if(typeof f=="string"&&d&&typeof d.as=="string"){var p=d.as,m=c(p,d.crossOrigin),y=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;p==="style"?a.d.S(f,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:m,integrity:y,fetchPriority:x}):p==="script"&&a.d.X(f,{crossOrigin:m,integrity:y,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ft.preinitModule=function(f,d){if(typeof f=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var p=c(d.as,d.crossOrigin);a.d.M(f,{crossOrigin:p,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(f)},Ft.preload=function(f,d){if(typeof f=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var p=d.as,m=c(p,d.crossOrigin);a.d.L(f,p,{crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ft.preloadModule=function(f,d){if(typeof f=="string")if(d){var p=c(d.as,d.crossOrigin);a.d.m(f,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:p,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(f)},Ft.requestFormReset=function(f){a.d.r(f)},Ft.unstable_batchedUpdates=function(f,d){return f(d)},Ft.useFormState=function(f,d,p){return l.H.useFormState(f,d,p)},Ft.useFormStatus=function(){return l.H.useHostTransitionStatus()},Ft.version="19.2.3",Ft}var Fv;function zk(){if(Fv)return Eh.exports;Fv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Eh.exports=Bk(),Eh.exports}var Bv;function Uk(){if(Bv)return Vo;Bv=1;var n=Lk(),e=$p(),t=zk();function a(s){var i="https://react.dev/errors/"+s;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)i+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+s+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function o(s){var i=s,u=s;if(s.alternate)for(;i.return;)i=i.return;else{s=i;do i=s,(i.flags&4098)!==0&&(u=i.return),s=i.return;while(s)}return i.tag===3?u:null}function l(s){if(s.tag===13){var i=s.memoizedState;if(i===null&&(s=s.alternate,s!==null&&(i=s.memoizedState)),i!==null)return i.dehydrated}return null}function c(s){if(s.tag===31){var i=s.memoizedState;if(i===null&&(s=s.alternate,s!==null&&(i=s.memoizedState)),i!==null)return i.dehydrated}return null}function f(s){if(o(s)!==s)throw Error(a(188))}function d(s){var i=s.alternate;if(!i){if(i=o(s),i===null)throw Error(a(188));return i!==s?null:s}for(var u=s,h=i;;){var g=u.return;if(g===null)break;var b=g.alternate;if(b===null){if(h=g.return,h!==null){u=h;continue}break}if(g.child===b.child){for(b=g.child;b;){if(b===u)return f(g),s;if(b===h)return f(g),i;b=b.sibling}throw Error(a(188))}if(u.return!==h.return)u=g,h=b;else{for(var N=!1,E=g.child;E;){if(E===u){N=!0,u=g,h=b;break}if(E===h){N=!0,h=g,u=b;break}E=E.sibling}if(!N){for(E=b.child;E;){if(E===u){N=!0,u=b,h=g;break}if(E===h){N=!0,h=b,u=g;break}E=E.sibling}if(!N)throw Error(a(189))}}if(u.alternate!==h)throw Error(a(190))}if(u.tag!==3)throw Error(a(188));return u.stateNode.current===u?s:i}function p(s){var i=s.tag;if(i===5||i===26||i===27||i===6)return s;for(s=s.child;s!==null;){if(i=p(s),i!==null)return i;s=s.sibling}return null}var m=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),O=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),R=Symbol.iterator;function Z(s){return s===null||typeof s!="object"?null:(s=R&&s[R]||s["@@iterator"],typeof s=="function"?s:null)}var oe=Symbol.for("react.client.reference");function fe(s){if(s==null)return null;if(typeof s=="function")return s.$$typeof===oe?null:s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case S:return"Fragment";case T:return"Profiler";case w:return"StrictMode";case z:return"Suspense";case j:return"SuspenseList";case V:return"Activity"}if(typeof s=="object")switch(s.$$typeof){case v:return"Portal";case O:return s.displayName||"Context";case $:return(s._context.displayName||"Context")+".Consumer";case A:var i=s.render;return s=s.displayName,s||(s=i.displayName||i.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case G:return i=s.displayName||null,i!==null?i:fe(s.type)||"Memo";case X:i=s._payload,s=s._init;try{return fe(s(i))}catch{}}return null}var de=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ge=[],be=-1;function L(s){return{current:s}}function Q(s){0>be||(s.current=ge[be],ge[be]=null,be--)}function re(s,i){be++,ge[be]=s.current,s.current=i}var he=L(null),Se=L(null),$e=L(null),Ve=L(null);function Ht(s,i){switch(re($e,i),re(Se,s),re(he,null),i.nodeType){case 9:case 11:s=(s=i.documentElement)&&(s=s.namespaceURI)?Zx(s):0;break;default:if(s=i.tagName,i=i.namespaceURI)i=Zx(i),s=Jx(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Q(he),re(he,s)}function ut(){Q(he),Q(Se),Q($e)}function Wi(s){s.memoizedState!==null&&re(Ve,s);var i=he.current,u=Jx(i,s.type);i!==u&&(re(Se,s),re(he,u))}function Tl(s){Se.current===s&&(Q(he),Q(Se)),Ve.current===s&&(Q(Ve),Lo._currentValue=ie)}var af,k0;function Is(s){if(af===void 0)try{throw Error()}catch(u){var i=u.stack.trim().match(/\n( *(at )?)/);af=i&&i[1]||"",k0=-1<u.stack.indexOf(`
    at`)?" (<anonymous>)":-1<u.stack.indexOf("@")?"@unknown:0:0":""}return`
`+af+s+k0}var sf=!1;function rf(s,i){if(!s||sf)return"";sf=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var h={DetermineComponentFrameRoot:function(){try{if(i){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(Y){var K=Y}Reflect.construct(s,[],ne)}else{try{ne.call()}catch(Y){K=Y}s.call(ne.prototype)}}else{try{throw Error()}catch(Y){K=Y}(ne=s())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(Y){if(Y&&K&&typeof Y.stack=="string")return[Y.stack,K.stack]}return[null,null]}};h.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var g=Object.getOwnPropertyDescriptor(h.DetermineComponentFrameRoot,"name");g&&g.configurable&&Object.defineProperty(h.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=h.DetermineComponentFrameRoot(),N=b[0],E=b[1];if(N&&E){var D=N.split(`
`),W=E.split(`
`);for(g=h=0;h<D.length&&!D[h].includes("DetermineComponentFrameRoot");)h++;for(;g<W.length&&!W[g].includes("DetermineComponentFrameRoot");)g++;if(h===D.length||g===W.length)for(h=D.length-1,g=W.length-1;1<=h&&0<=g&&D[h]!==W[g];)g--;for(;1<=h&&0<=g;h--,g--)if(D[h]!==W[g]){if(h!==1||g!==1)do if(h--,g--,0>g||D[h]!==W[g]){var J=`
`+D[h].replace(" at new "," at ");return s.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",s.displayName)),J}while(1<=h&&0<=g);break}}}finally{sf=!1,Error.prepareStackTrace=u}return(u=s?s.displayName||s.name:"")?Is(u):""}function o$(s,i){switch(s.tag){case 26:case 27:case 5:return Is(s.type);case 16:return Is("Lazy");case 13:return s.child!==i&&i!==null?Is("Suspense Fallback"):Is("Suspense");case 19:return Is("SuspenseList");case 0:case 15:return rf(s.type,!1);case 11:return rf(s.type.render,!1);case 1:return rf(s.type,!0);case 31:return Is("Activity");default:return""}}function R0(s){try{var i="",u=null;do i+=o$(s,u),u=s,s=s.return;while(s);return i}catch(h){return`
Error generating stack: `+h.message+`
`+h.stack}}var of=Object.prototype.hasOwnProperty,lf=n.unstable_scheduleCallback,uf=n.unstable_cancelCallback,l$=n.unstable_shouldYield,u$=n.unstable_requestPaint,ln=n.unstable_now,c$=n.unstable_getCurrentPriorityLevel,_0=n.unstable_ImmediatePriority,A0=n.unstable_UserBlockingPriority,Cl=n.unstable_NormalPriority,f$=n.unstable_LowPriority,O0=n.unstable_IdlePriority,d$=n.log,h$=n.unstable_setDisableYieldValue,qi=null,un=null;function Ha(s){if(typeof d$=="function"&&h$(s),un&&typeof un.setStrictMode=="function")try{un.setStrictMode(qi,s)}catch{}}var cn=Math.clz32?Math.clz32:g$,p$=Math.log,m$=Math.LN2;function g$(s){return s>>>=0,s===0?32:31-(p$(s)/m$|0)|0}var Nl=256,$l=262144,El=4194304;function Ds(s){var i=s&42;if(i!==0)return i;switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return s&261888;case 262144:case 524288:case 1048576:case 2097152:return s&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return s&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return s}}function kl(s,i,u){var h=s.pendingLanes;if(h===0)return 0;var g=0,b=s.suspendedLanes,N=s.pingedLanes;s=s.warmLanes;var E=h&134217727;return E!==0?(h=E&~b,h!==0?g=Ds(h):(N&=E,N!==0?g=Ds(N):u||(u=E&~s,u!==0&&(g=Ds(u))))):(E=h&~b,E!==0?g=Ds(E):N!==0?g=Ds(N):u||(u=h&~s,u!==0&&(g=Ds(u)))),g===0?0:i!==0&&i!==g&&(i&b)===0&&(b=g&-g,u=i&-i,b>=u||b===32&&(u&4194048)!==0)?i:g}function ji(s,i){return(s.pendingLanes&~(s.suspendedLanes&~s.pingedLanes)&i)===0}function y$(s,i){switch(s){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(){var s=El;return El<<=1,(El&62914560)===0&&(El=4194304),s}function cf(s){for(var i=[],u=0;31>u;u++)i.push(s);return i}function Xi(s,i){s.pendingLanes|=i,i!==268435456&&(s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0)}function b$(s,i,u,h,g,b){var N=s.pendingLanes;s.pendingLanes=u,s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0,s.expiredLanes&=u,s.entangledLanes&=u,s.errorRecoveryDisabledLanes&=u,s.shellSuspendCounter=0;var E=s.entanglements,D=s.expirationTimes,W=s.hiddenUpdates;for(u=N&~u;0<u;){var J=31-cn(u),ne=1<<J;E[J]=0,D[J]=-1;var K=W[J];if(K!==null)for(W[J]=null,J=0;J<K.length;J++){var Y=K[J];Y!==null&&(Y.lane&=-536870913)}u&=~ne}h!==0&&D0(s,h,0),b!==0&&g===0&&s.tag!==0&&(s.suspendedLanes|=b&~(N&~i))}function D0(s,i,u){s.pendingLanes|=i,s.suspendedLanes&=~i;var h=31-cn(i);s.entangledLanes|=i,s.entanglements[h]=s.entanglements[h]|1073741824|u&261930}function L0(s,i){var u=s.entangledLanes|=i;for(s=s.entanglements;u;){var h=31-cn(u),g=1<<h;g&i|s[h]&i&&(s[h]|=i),u&=~g}}function F0(s,i){var u=i&-i;return u=(u&42)!==0?1:ff(u),(u&(s.suspendedLanes|i))!==0?0:u}function ff(s){switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=128;break;case 268435456:s=134217728;break;default:s=0}return s}function df(s){return s&=-s,2<s?8<s?(s&134217727)!==0?32:268435456:8:2}function B0(){var s=ae.p;return s!==0?s:(s=window.event,s===void 0?32:Sv(s.type))}function z0(s,i){var u=ae.p;try{return ae.p=s,i()}finally{ae.p=u}}var Wa=Math.random().toString(36).slice(2),kt="__reactFiber$"+Wa,jt="__reactProps$"+Wa,$r="__reactContainer$"+Wa,hf="__reactEvents$"+Wa,x$="__reactListeners$"+Wa,v$="__reactHandles$"+Wa,U0="__reactResources$"+Wa,Ki="__reactMarker$"+Wa;function pf(s){delete s[kt],delete s[jt],delete s[hf],delete s[x$],delete s[v$]}function Er(s){var i=s[kt];if(i)return i;for(var u=s.parentNode;u;){if(i=u[$r]||u[kt]){if(u=i.alternate,i.child!==null||u!==null&&u.child!==null)for(s=iv(s);s!==null;){if(u=s[kt])return u;s=iv(s)}return i}s=u,u=s.parentNode}return null}function kr(s){if(s=s[kt]||s[$r]){var i=s.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return s}return null}function Yi(s){var i=s.tag;if(i===5||i===26||i===27||i===6)return s.stateNode;throw Error(a(33))}function Rr(s){var i=s[U0];return i||(i=s[U0]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vt(s){s[Ki]=!0}var V0=new Set,M0={};function Ls(s,i){_r(s,i),_r(s+"Capture",i)}function _r(s,i){for(M0[s]=i,s=0;s<i.length;s++)V0.add(i[s])}var w$=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),P0={},G0={};function S$(s){return of.call(G0,s)?!0:of.call(P0,s)?!1:w$.test(s)?G0[s]=!0:(P0[s]=!0,!1)}function Rl(s,i,u){if(S$(i))if(u===null)s.removeAttribute(i);else{switch(typeof u){case"undefined":case"function":case"symbol":s.removeAttribute(i);return;case"boolean":var h=i.toLowerCase().slice(0,5);if(h!=="data-"&&h!=="aria-"){s.removeAttribute(i);return}}s.setAttribute(i,""+u)}}function _l(s,i,u){if(u===null)s.removeAttribute(i);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(i);return}s.setAttribute(i,""+u)}}function pa(s,i,u,h){if(h===null)s.removeAttribute(u);else{switch(typeof h){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(u);return}s.setAttributeNS(i,u,""+h)}}function Nn(s){switch(typeof s){case"bigint":case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function H0(s){var i=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function T$(s,i,u){var h=Object.getOwnPropertyDescriptor(s.constructor.prototype,i);if(!s.hasOwnProperty(i)&&typeof h<"u"&&typeof h.get=="function"&&typeof h.set=="function"){var g=h.get,b=h.set;return Object.defineProperty(s,i,{configurable:!0,get:function(){return g.call(this)},set:function(N){u=""+N,b.call(this,N)}}),Object.defineProperty(s,i,{enumerable:h.enumerable}),{getValue:function(){return u},setValue:function(N){u=""+N},stopTracking:function(){s._valueTracker=null,delete s[i]}}}}function mf(s){if(!s._valueTracker){var i=H0(s)?"checked":"value";s._valueTracker=T$(s,i,""+s[i])}}function W0(s){if(!s)return!1;var i=s._valueTracker;if(!i)return!0;var u=i.getValue(),h="";return s&&(h=H0(s)?s.checked?"true":"false":s.value),s=h,s!==u?(i.setValue(s),!0):!1}function Al(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}var C$=/[\n"\\]/g;function $n(s){return s.replace(C$,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function gf(s,i,u,h,g,b,N,E){s.name="",N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?s.type=N:s.removeAttribute("type"),i!=null?N==="number"?(i===0&&s.value===""||s.value!=i)&&(s.value=""+Nn(i)):s.value!==""+Nn(i)&&(s.value=""+Nn(i)):N!=="submit"&&N!=="reset"||s.removeAttribute("value"),i!=null?yf(s,N,Nn(i)):u!=null?yf(s,N,Nn(u)):h!=null&&s.removeAttribute("value"),g==null&&b!=null&&(s.defaultChecked=!!b),g!=null&&(s.checked=g&&typeof g!="function"&&typeof g!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?s.name=""+Nn(E):s.removeAttribute("name")}function q0(s,i,u,h,g,b,N,E){if(b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(s.type=b),i!=null||u!=null){if(!(b!=="submit"&&b!=="reset"||i!=null)){mf(s);return}u=u!=null?""+Nn(u):"",i=i!=null?""+Nn(i):u,E||i===s.value||(s.value=i),s.defaultValue=i}h=h??g,h=typeof h!="function"&&typeof h!="symbol"&&!!h,s.checked=E?s.checked:!!h,s.defaultChecked=!!h,N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"&&(s.name=N),mf(s)}function yf(s,i,u){i==="number"&&Al(s.ownerDocument)===s||s.defaultValue===""+u||(s.defaultValue=""+u)}function Ar(s,i,u,h){if(s=s.options,i){i={};for(var g=0;g<u.length;g++)i["$"+u[g]]=!0;for(u=0;u<s.length;u++)g=i.hasOwnProperty("$"+s[u].value),s[u].selected!==g&&(s[u].selected=g),g&&h&&(s[u].defaultSelected=!0)}else{for(u=""+Nn(u),i=null,g=0;g<s.length;g++){if(s[g].value===u){s[g].selected=!0,h&&(s[g].defaultSelected=!0);return}i!==null||s[g].disabled||(i=s[g])}i!==null&&(i.selected=!0)}}function j0(s,i,u){if(i!=null&&(i=""+Nn(i),i!==s.value&&(s.value=i),u==null)){s.defaultValue!==i&&(s.defaultValue=i);return}s.defaultValue=u!=null?""+Nn(u):""}function X0(s,i,u,h){if(i==null){if(h!=null){if(u!=null)throw Error(a(92));if(de(h)){if(1<h.length)throw Error(a(93));h=h[0]}u=h}u==null&&(u=""),i=u}u=Nn(i),s.defaultValue=u,h=s.textContent,h===u&&h!==""&&h!==null&&(s.value=h),mf(s)}function Or(s,i){if(i){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=i;return}}s.textContent=i}var N$=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function K0(s,i,u){var h=i.indexOf("--")===0;u==null||typeof u=="boolean"||u===""?h?s.setProperty(i,""):i==="float"?s.cssFloat="":s[i]="":h?s.setProperty(i,u):typeof u!="number"||u===0||N$.has(i)?i==="float"?s.cssFloat=u:s[i]=(""+u).trim():s[i]=u+"px"}function Y0(s,i,u){if(i!=null&&typeof i!="object")throw Error(a(62));if(s=s.style,u!=null){for(var h in u)!u.hasOwnProperty(h)||i!=null&&i.hasOwnProperty(h)||(h.indexOf("--")===0?s.setProperty(h,""):h==="float"?s.cssFloat="":s[h]="");for(var g in i)h=i[g],i.hasOwnProperty(g)&&u[g]!==h&&K0(s,g,h)}else for(var b in i)i.hasOwnProperty(b)&&K0(s,b,i[b])}function bf(s){if(s.indexOf("-")===-1)return!1;switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $$=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),E$=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(s){return E$.test(""+s)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":s}function ma(){}var xf=null;function vf(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Ir=null,Dr=null;function Q0(s){var i=kr(s);if(i&&(s=i.stateNode)){var u=s[jt]||null;e:switch(s=i.stateNode,i.type){case"input":if(gf(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name),i=u.name,u.type==="radio"&&i!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll('input[name="'+$n(""+i)+'"][type="radio"]'),i=0;i<u.length;i++){var h=u[i];if(h!==s&&h.form===s.form){var g=h[jt]||null;if(!g)throw Error(a(90));gf(h,g.value,g.defaultValue,g.defaultValue,g.checked,g.defaultChecked,g.type,g.name)}}for(i=0;i<u.length;i++)h=u[i],h.form===s.form&&W0(h)}break e;case"textarea":j0(s,u.value,u.defaultValue);break e;case"select":i=u.value,i!=null&&Ar(s,!!u.multiple,i,!1)}}}var wf=!1;function Z0(s,i,u){if(wf)return s(i,u);wf=!0;try{var h=s(i);return h}finally{if(wf=!1,(Ir!==null||Dr!==null)&&(xu(),Ir&&(i=Ir,s=Dr,Dr=Ir=null,Q0(i),s)))for(i=0;i<s.length;i++)Q0(s[i])}}function Qi(s,i){var u=s.stateNode;if(u===null)return null;var h=u[jt]||null;if(h===null)return null;u=h[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(s=s.type,h=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!h;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(a(231,i,typeof u));return u}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(ga)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Sf=!1}var qa=null,Tf=null,Il=null;function J0(){if(Il)return Il;var s,i=Tf,u=i.length,h,g="value"in qa?qa.value:qa.textContent,b=g.length;for(s=0;s<u&&i[s]===g[s];s++);var N=u-s;for(h=1;h<=N&&i[u-h]===g[b-h];h++);return Il=g.slice(s,1<h?1-h:void 0)}function Dl(s){var i=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&i===13&&(s=13)):s=i,s===10&&(s=13),32<=s||s===13?s:0}function Ll(){return!0}function eb(){return!1}function Xt(s){function i(u,h,g,b,N){this._reactName=u,this._targetInst=g,this.type=h,this.nativeEvent=b,this.target=N,this.currentTarget=null;for(var E in s)s.hasOwnProperty(E)&&(u=s[E],this[E]=u?u(b):b[E]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?Ll:eb,this.isPropagationStopped=eb,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),i}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Xt(Fs),Ji=m({},Fs,{view:0,detail:0}),k$=Xt(Ji),Cf,Nf,eo,Bl=m({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==eo&&(eo&&s.type==="mousemove"?(Cf=s.screenX-eo.screenX,Nf=s.screenY-eo.screenY):Nf=Cf=0,eo=s),Cf)},movementY:function(s){return"movementY"in s?s.movementY:Nf}}),tb=Xt(Bl),R$=m({},Bl,{dataTransfer:0}),_$=Xt(R$),A$=m({},Ji,{relatedTarget:0}),$f=Xt(A$),O$=m({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),I$=Xt(O$),D$=m({},Fs,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),L$=Xt(D$),F$=m({},Fs,{data:0}),nb=Xt(F$),B$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V$(s){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(s):(s=U$[s])?!!i[s]:!1}function Ef(){return V$}var M$=m({},Ji,{key:function(s){if(s.key){var i=B$[s.key]||s.key;if(i!=="Unidentified")return i}return s.type==="keypress"?(s=Dl(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?z$[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(s){return s.type==="keypress"?Dl(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Dl(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),P$=Xt(M$),G$=m({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ab=Xt(G$),H$=m({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),W$=Xt(H$),q$=m({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),j$=Xt(q$),X$=m({},Bl,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),K$=Xt(X$),Y$=m({},Fs,{newState:0,oldState:0}),Q$=Xt(Y$),Z$=[9,13,27,32],kf=ga&&"CompositionEvent"in window,to=null;ga&&"documentMode"in document&&(to=document.documentMode);var J$=ga&&"TextEvent"in window&&!to,sb=ga&&(!kf||to&&8<to&&11>=to),rb=" ",ib=!1;function ob(s,i){switch(s){case"keyup":return Z$.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lb(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Lr=!1;function eE(s,i){switch(s){case"compositionend":return lb(i);case"keypress":return i.which!==32?null:(ib=!0,rb);case"textInput":return s=i.data,s===rb&&ib?null:s;default:return null}}function tE(s,i){if(Lr)return s==="compositionend"||!kf&&ob(s,i)?(s=J0(),Il=Tf=qa=null,Lr=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return sb&&i.locale!=="ko"?null:i.data;default:return null}}var nE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ub(s){var i=s&&s.nodeName&&s.nodeName.toLowerCase();return i==="input"?!!nE[s.type]:i==="textarea"}function cb(s,i,u,h){Ir?Dr?Dr.push(h):Dr=[h]:Ir=h,i=$u(i,"onChange"),0<i.length&&(u=new Fl("onChange","change",null,u,h),s.push({event:u,listeners:i}))}var no=null,ao=null;function aE(s){qx(s,0)}function zl(s){var i=Yi(s);if(W0(i))return s}function fb(s,i){if(s==="change")return i}var db=!1;if(ga){var Rf;if(ga){var _f="oninput"in document;if(!_f){var hb=document.createElement("div");hb.setAttribute("oninput","return;"),_f=typeof hb.oninput=="function"}Rf=_f}else Rf=!1;db=Rf&&(!document.documentMode||9<document.documentMode)}function pb(){no&&(no.detachEvent("onpropertychange",mb),ao=no=null)}function mb(s){if(s.propertyName==="value"&&zl(ao)){var i=[];cb(i,ao,s,vf(s)),Z0(aE,i)}}function sE(s,i,u){s==="focusin"?(pb(),no=i,ao=u,no.attachEvent("onpropertychange",mb)):s==="focusout"&&pb()}function rE(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return zl(ao)}function iE(s,i){if(s==="click")return zl(i)}function oE(s,i){if(s==="input"||s==="change")return zl(i)}function lE(s,i){return s===i&&(s!==0||1/s===1/i)||s!==s&&i!==i}var fn=typeof Object.is=="function"?Object.is:lE;function so(s,i){if(fn(s,i))return!0;if(typeof s!="object"||s===null||typeof i!="object"||i===null)return!1;var u=Object.keys(s),h=Object.keys(i);if(u.length!==h.length)return!1;for(h=0;h<u.length;h++){var g=u[h];if(!of.call(i,g)||!fn(s[g],i[g]))return!1}return!0}function gb(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function yb(s,i){var u=gb(s);s=0;for(var h;u;){if(u.nodeType===3){if(h=s+u.textContent.length,s<=i&&h>=i)return{node:u,offset:i-s};s=h}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=gb(u)}}function bb(s,i){return s&&i?s===i?!0:s&&s.nodeType===3?!1:i&&i.nodeType===3?bb(s,i.parentNode):"contains"in s?s.contains(i):s.compareDocumentPosition?!!(s.compareDocumentPosition(i)&16):!1:!1}function xb(s){s=s!=null&&s.ownerDocument!=null&&s.ownerDocument.defaultView!=null?s.ownerDocument.defaultView:window;for(var i=Al(s.document);i instanceof s.HTMLIFrameElement;){try{var u=typeof i.contentWindow.location.href=="string"}catch{u=!1}if(u)s=i.contentWindow;else break;i=Al(s.document)}return i}function Af(s){var i=s&&s.nodeName&&s.nodeName.toLowerCase();return i&&(i==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||i==="textarea"||s.contentEditable==="true")}var uE=ga&&"documentMode"in document&&11>=document.documentMode,Fr=null,Of=null,ro=null,If=!1;function vb(s,i,u){var h=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;If||Fr==null||Fr!==Al(h)||(h=Fr,"selectionStart"in h&&Af(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),ro&&so(ro,h)||(ro=h,h=$u(Of,"onSelect"),0<h.length&&(i=new Fl("onSelect","select",null,i,u),s.push({event:i,listeners:h}),i.target=Fr)))}function Bs(s,i){var u={};return u[s.toLowerCase()]=i.toLowerCase(),u["Webkit"+s]="webkit"+i,u["Moz"+s]="moz"+i,u}var Br={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionrun:Bs("Transition","TransitionRun"),transitionstart:Bs("Transition","TransitionStart"),transitioncancel:Bs("Transition","TransitionCancel"),transitionend:Bs("Transition","TransitionEnd")},Df={},wb={};ga&&(wb=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function zs(s){if(Df[s])return Df[s];if(!Br[s])return s;var i=Br[s],u;for(u in i)if(i.hasOwnProperty(u)&&u in wb)return Df[s]=i[u];return s}var Sb=zs("animationend"),Tb=zs("animationiteration"),Cb=zs("animationstart"),cE=zs("transitionrun"),fE=zs("transitionstart"),dE=zs("transitioncancel"),Nb=zs("transitionend"),$b=new Map,Lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lf.push("scrollEnd");function Hn(s,i){$b.set(s,i),Ls(i,[s])}var Ul=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},En=[],zr=0,Ff=0;function Vl(){for(var s=zr,i=Ff=zr=0;i<s;){var u=En[i];En[i++]=null;var h=En[i];En[i++]=null;var g=En[i];En[i++]=null;var b=En[i];if(En[i++]=null,h!==null&&g!==null){var N=h.pending;N===null?g.next=g:(g.next=N.next,N.next=g),h.pending=g}b!==0&&Eb(u,g,b)}}function Ml(s,i,u,h){En[zr++]=s,En[zr++]=i,En[zr++]=u,En[zr++]=h,Ff|=h,s.lanes|=h,s=s.alternate,s!==null&&(s.lanes|=h)}function Bf(s,i,u,h){return Ml(s,i,u,h),Pl(s)}function Us(s,i){return Ml(s,null,null,i),Pl(s)}function Eb(s,i,u){s.lanes|=u;var h=s.alternate;h!==null&&(h.lanes|=u);for(var g=!1,b=s.return;b!==null;)b.childLanes|=u,h=b.alternate,h!==null&&(h.childLanes|=u),b.tag===22&&(s=b.stateNode,s===null||s._visibility&1||(g=!0)),s=b,b=b.return;return s.tag===3?(b=s.stateNode,g&&i!==null&&(g=31-cn(u),s=b.hiddenUpdates,h=s[g],h===null?s[g]=[i]:h.push(i),i.lane=u|536870912),b):null}function Pl(s){if(50<ko)throw ko=0,qd=null,Error(a(185));for(var i=s.return;i!==null;)s=i,i=s.return;return s.tag===3?s.stateNode:null}var Ur={};function hE(s,i,u,h){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(s,i,u,h){return new hE(s,i,u,h)}function zf(s){return s=s.prototype,!(!s||!s.isReactComponent)}function ya(s,i){var u=s.alternate;return u===null?(u=dn(s.tag,i,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=i,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&65011712,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,i=s.dependencies,u.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u.refCleanup=s.refCleanup,u}function kb(s,i){s.flags&=65011714;var u=s.alternate;return u===null?(s.childLanes=0,s.lanes=i,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,i=u.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),s}function Gl(s,i,u,h,g,b){var N=0;if(h=s,typeof s=="function")zf(s)&&(N=1);else if(typeof s=="string")N=bk(s,u,he.current)?26:s==="html"||s==="head"||s==="body"?27:5;else e:switch(s){case V:return s=dn(31,u,i,g),s.elementType=V,s.lanes=b,s;case S:return Vs(u.children,g,b,i);case w:N=8,g|=24;break;case T:return s=dn(12,u,i,g|2),s.elementType=T,s.lanes=b,s;case z:return s=dn(13,u,i,g),s.elementType=z,s.lanes=b,s;case j:return s=dn(19,u,i,g),s.elementType=j,s.lanes=b,s;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case O:N=10;break e;case $:N=9;break e;case A:N=11;break e;case G:N=14;break e;case X:N=16,h=null;break e}N=29,u=Error(a(130,s===null?"null":typeof s,"")),h=null}return i=dn(N,u,i,g),i.elementType=s,i.type=h,i.lanes=b,i}function Vs(s,i,u,h){return s=dn(7,s,h,i),s.lanes=u,s}function Uf(s,i,u){return s=dn(6,s,null,i),s.lanes=u,s}function Rb(s){var i=dn(18,null,null,0);return i.stateNode=s,i}function Vf(s,i,u){return i=dn(4,s.children!==null?s.children:[],s.key,i),i.lanes=u,i.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},i}var _b=new WeakMap;function kn(s,i){if(typeof s=="object"&&s!==null){var u=_b.get(s);return u!==void 0?u:(i={value:s,source:i,stack:R0(i)},_b.set(s,i),i)}return{value:s,source:i,stack:R0(i)}}var Vr=[],Mr=0,Hl=null,io=0,Rn=[],_n=0,ja=null,ra=1,ia="";function ba(s,i){Vr[Mr++]=io,Vr[Mr++]=Hl,Hl=s,io=i}function Ab(s,i,u){Rn[_n++]=ra,Rn[_n++]=ia,Rn[_n++]=ja,ja=s;var h=ra;s=ia;var g=32-cn(h)-1;h&=~(1<<g),u+=1;var b=32-cn(i)+g;if(30<b){var N=g-g%5;b=(h&(1<<N)-1).toString(32),h>>=N,g-=N,ra=1<<32-cn(i)+g|u<<g|h,ia=b+s}else ra=1<<b|u<<g|h,ia=s}function Mf(s){s.return!==null&&(ba(s,1),Ab(s,1,0))}function Pf(s){for(;s===Hl;)Hl=Vr[--Mr],Vr[Mr]=null,io=Vr[--Mr],Vr[Mr]=null;for(;s===ja;)ja=Rn[--_n],Rn[_n]=null,ia=Rn[--_n],Rn[_n]=null,ra=Rn[--_n],Rn[_n]=null}function Ob(s,i){Rn[_n++]=ra,Rn[_n++]=ia,Rn[_n++]=ja,ra=i.id,ia=i.overflow,ja=s}var Rt=null,Je=null,Ie=!1,Xa=null,An=!1,Gf=Error(a(519));function Ka(s){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(kn(i,s)),Gf}function Ib(s){var i=s.stateNode,u=s.type,h=s.memoizedProps;switch(i[kt]=s,i[jt]=h,u){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(u=0;u<_o.length;u++)Re(_o[u],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":Re("invalid",i),q0(i,h.value,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name,!0);break;case"select":Re("invalid",i);break;case"textarea":Re("invalid",i),X0(i,h.value,h.defaultValue,h.children)}u=h.children,typeof u!="string"&&typeof u!="number"&&typeof u!="bigint"||i.textContent===""+u||h.suppressHydrationWarning===!0||Yx(i.textContent,u)?(h.popover!=null&&(Re("beforetoggle",i),Re("toggle",i)),h.onScroll!=null&&Re("scroll",i),h.onScrollEnd!=null&&Re("scrollend",i),h.onClick!=null&&(i.onclick=ma),i=!0):i=!1,i||Ka(s,!0)}function Db(s){for(Rt=s.return;Rt;)switch(Rt.tag){case 5:case 31:case 13:An=!1;return;case 27:case 3:An=!0;return;default:Rt=Rt.return}}function Pr(s){if(s!==Rt)return!1;if(!Ie)return Db(s),Ie=!0,!1;var i=s.tag,u;if((u=i!==3&&i!==27)&&((u=i===5)&&(u=s.type,u=!(u!=="form"&&u!=="button")||oh(s.type,s.memoizedProps)),u=!u),u&&Je&&Ka(s),Db(s),i===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));Je=rv(s)}else if(i===31){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));Je=rv(s)}else i===27?(i=Je,us(s.type)?(s=dh,dh=null,Je=s):Je=i):Je=Rt?In(s.stateNode.nextSibling):null;return!0}function Ms(){Je=Rt=null,Ie=!1}function Hf(){var s=Xa;return s!==null&&(Zt===null?Zt=s:Zt.push.apply(Zt,s),Xa=null),s}function oo(s){Xa===null?Xa=[s]:Xa.push(s)}var Wf=L(null),Ps=null,xa=null;function Ya(s,i,u){re(Wf,i._currentValue),i._currentValue=u}function va(s){s._currentValue=Wf.current,Q(Wf)}function qf(s,i,u){for(;s!==null;){var h=s.alternate;if((s.childLanes&i)!==i?(s.childLanes|=i,h!==null&&(h.childLanes|=i)):h!==null&&(h.childLanes&i)!==i&&(h.childLanes|=i),s===u)break;s=s.return}}function jf(s,i,u,h){var g=s.child;for(g!==null&&(g.return=s);g!==null;){var b=g.dependencies;if(b!==null){var N=g.child;b=b.firstContext;e:for(;b!==null;){var E=b;b=g;for(var D=0;D<i.length;D++)if(E.context===i[D]){b.lanes|=u,E=b.alternate,E!==null&&(E.lanes|=u),qf(b.return,u,s),h||(N=null);break e}b=E.next}}else if(g.tag===18){if(N=g.return,N===null)throw Error(a(341));N.lanes|=u,b=N.alternate,b!==null&&(b.lanes|=u),qf(N,u,s),N=null}else N=g.child;if(N!==null)N.return=g;else for(N=g;N!==null;){if(N===s){N=null;break}if(g=N.sibling,g!==null){g.return=N.return,N=g;break}N=N.return}g=N}}function Gr(s,i,u,h){s=null;for(var g=i,b=!1;g!==null;){if(!b){if((g.flags&524288)!==0)b=!0;else if((g.flags&262144)!==0)break}if(g.tag===10){var N=g.alternate;if(N===null)throw Error(a(387));if(N=N.memoizedProps,N!==null){var E=g.type;fn(g.pendingProps.value,N.value)||(s!==null?s.push(E):s=[E])}}else if(g===Ve.current){if(N=g.alternate,N===null)throw Error(a(387));N.memoizedState.memoizedState!==g.memoizedState.memoizedState&&(s!==null?s.push(Lo):s=[Lo])}g=g.return}s!==null&&jf(i,s,u,h),i.flags|=262144}function Wl(s){for(s=s.firstContext;s!==null;){if(!fn(s.context._currentValue,s.memoizedValue))return!0;s=s.next}return!1}function Gs(s){Ps=s,xa=null,s=s.dependencies,s!==null&&(s.firstContext=null)}function _t(s){return Lb(Ps,s)}function ql(s,i){return Ps===null&&Gs(s),Lb(s,i)}function Lb(s,i){var u=i._currentValue;if(i={context:i,memoizedValue:u,next:null},xa===null){if(s===null)throw Error(a(308));xa=i,s.dependencies={lanes:0,firstContext:i},s.flags|=524288}else xa=xa.next=i;return u}var pE=typeof AbortController<"u"?AbortController:function(){var s=[],i=this.signal={aborted:!1,addEventListener:function(u,h){s.push(h)}};this.abort=function(){i.aborted=!0,s.forEach(function(u){return u()})}},mE=n.unstable_scheduleCallback,gE=n.unstable_NormalPriority,dt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new pE,data:new Map,refCount:0}}function lo(s){s.refCount--,s.refCount===0&&mE(gE,function(){s.controller.abort()})}var uo=null,Kf=0,Hr=0,Wr=null;function yE(s,i){if(uo===null){var u=uo=[];Kf=0,Hr=Zd(),Wr={status:"pending",value:void 0,then:function(h){u.push(h)}}}return Kf++,i.then(Fb,Fb),i}function Fb(){if(--Kf===0&&uo!==null){Wr!==null&&(Wr.status="fulfilled");var s=uo;uo=null,Hr=0,Wr=null;for(var i=0;i<s.length;i++)(0,s[i])()}}function bE(s,i){var u=[],h={status:"pending",value:null,reason:null,then:function(g){u.push(g)}};return s.then(function(){h.status="fulfilled",h.value=i;for(var g=0;g<u.length;g++)(0,u[g])(i)},function(g){for(h.status="rejected",h.reason=g,g=0;g<u.length;g++)(0,u[g])(void 0)}),h}var Bb=P.S;P.S=function(s,i){vx=ln(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&yE(s,i),Bb!==null&&Bb(s,i)};var Hs=L(null);function Yf(){var s=Hs.current;return s!==null?s:Ke.pooledCache}function jl(s,i){i===null?re(Hs,Hs.current):re(Hs,i.pool)}function zb(){var s=Yf();return s===null?null:{parent:dt._currentValue,pool:s}}var qr=Error(a(460)),Qf=Error(a(474)),Xl=Error(a(542)),Kl={then:function(){}};function Ub(s){return s=s.status,s==="fulfilled"||s==="rejected"}function Vb(s,i,u){switch(u=s[u],u===void 0?s.push(i):u!==i&&(i.then(ma,ma),i=u),i.status){case"fulfilled":return i.value;case"rejected":throw s=i.reason,Pb(s),s;default:if(typeof i.status=="string")i.then(ma,ma);else{if(s=Ke,s!==null&&100<s.shellSuspendCounter)throw Error(a(482));s=i,s.status="pending",s.then(function(h){if(i.status==="pending"){var g=i;g.status="fulfilled",g.value=h}},function(h){if(i.status==="pending"){var g=i;g.status="rejected",g.reason=h}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw s=i.reason,Pb(s),s}throw qs=i,qr}}function Ws(s){try{var i=s._init;return i(s._payload)}catch(u){throw u!==null&&typeof u=="object"&&typeof u.then=="function"?(qs=u,qr):u}}var qs=null;function Mb(){if(qs===null)throw Error(a(459));var s=qs;return qs=null,s}function Pb(s){if(s===qr||s===Xl)throw Error(a(483))}var jr=null,co=0;function Yl(s){var i=co;return co+=1,jr===null&&(jr=[]),Vb(jr,s,i)}function fo(s,i){i=i.props.ref,s.ref=i!==void 0?i:null}function Ql(s,i){throw i.$$typeof===y?Error(a(525)):(s=Object.prototype.toString.call(i),Error(a(31,s==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":s)))}function Gb(s){function i(M,B){if(s){var H=M.deletions;H===null?(M.deletions=[B],M.flags|=16):H.push(B)}}function u(M,B){if(!s)return null;for(;B!==null;)i(M,B),B=B.sibling;return null}function h(M){for(var B=new Map;M!==null;)M.key!==null?B.set(M.key,M):B.set(M.index,M),M=M.sibling;return B}function g(M,B){return M=ya(M,B),M.index=0,M.sibling=null,M}function b(M,B,H){return M.index=H,s?(H=M.alternate,H!==null?(H=H.index,H<B?(M.flags|=67108866,B):H):(M.flags|=67108866,B)):(M.flags|=1048576,B)}function N(M){return s&&M.alternate===null&&(M.flags|=67108866),M}function E(M,B,H,ee){return B===null||B.tag!==6?(B=Uf(H,M.mode,ee),B.return=M,B):(B=g(B,H),B.return=M,B)}function D(M,B,H,ee){var xe=H.type;return xe===S?J(M,B,H.props.children,ee,H.key):B!==null&&(B.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===X&&Ws(xe)===B.type)?(B=g(B,H.props),fo(B,H),B.return=M,B):(B=Gl(H.type,H.key,H.props,null,M.mode,ee),fo(B,H),B.return=M,B)}function W(M,B,H,ee){return B===null||B.tag!==4||B.stateNode.containerInfo!==H.containerInfo||B.stateNode.implementation!==H.implementation?(B=Vf(H,M.mode,ee),B.return=M,B):(B=g(B,H.children||[]),B.return=M,B)}function J(M,B,H,ee,xe){return B===null||B.tag!==7?(B=Vs(H,M.mode,ee,xe),B.return=M,B):(B=g(B,H),B.return=M,B)}function ne(M,B,H){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Uf(""+B,M.mode,H),B.return=M,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case x:return H=Gl(B.type,B.key,B.props,null,M.mode,H),fo(H,B),H.return=M,H;case v:return B=Vf(B,M.mode,H),B.return=M,B;case X:return B=Ws(B),ne(M,B,H)}if(de(B)||Z(B))return B=Vs(B,M.mode,H,null),B.return=M,B;if(typeof B.then=="function")return ne(M,Yl(B),H);if(B.$$typeof===O)return ne(M,ql(M,B),H);Ql(M,B)}return null}function K(M,B,H,ee){var xe=B!==null?B.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return xe!==null?null:E(M,B,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return H.key===xe?D(M,B,H,ee):null;case v:return H.key===xe?W(M,B,H,ee):null;case X:return H=Ws(H),K(M,B,H,ee)}if(de(H)||Z(H))return xe!==null?null:J(M,B,H,ee,null);if(typeof H.then=="function")return K(M,B,Yl(H),ee);if(H.$$typeof===O)return K(M,B,ql(M,H),ee);Ql(M,H)}return null}function Y(M,B,H,ee,xe){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return M=M.get(H)||null,E(B,M,""+ee,xe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case x:return M=M.get(ee.key===null?H:ee.key)||null,D(B,M,ee,xe);case v:return M=M.get(ee.key===null?H:ee.key)||null,W(B,M,ee,xe);case X:return ee=Ws(ee),Y(M,B,H,ee,xe)}if(de(ee)||Z(ee))return M=M.get(H)||null,J(B,M,ee,xe,null);if(typeof ee.then=="function")return Y(M,B,H,Yl(ee),xe);if(ee.$$typeof===O)return Y(M,B,H,ql(B,ee),xe);Ql(B,ee)}return null}function pe(M,B,H,ee){for(var xe=null,Be=null,ye=B,Ne=B=0,Oe=null;ye!==null&&Ne<H.length;Ne++){ye.index>Ne?(Oe=ye,ye=null):Oe=ye.sibling;var ze=K(M,ye,H[Ne],ee);if(ze===null){ye===null&&(ye=Oe);break}s&&ye&&ze.alternate===null&&i(M,ye),B=b(ze,B,Ne),Be===null?xe=ze:Be.sibling=ze,Be=ze,ye=Oe}if(Ne===H.length)return u(M,ye),Ie&&ba(M,Ne),xe;if(ye===null){for(;Ne<H.length;Ne++)ye=ne(M,H[Ne],ee),ye!==null&&(B=b(ye,B,Ne),Be===null?xe=ye:Be.sibling=ye,Be=ye);return Ie&&ba(M,Ne),xe}for(ye=h(ye);Ne<H.length;Ne++)Oe=Y(ye,M,Ne,H[Ne],ee),Oe!==null&&(s&&Oe.alternate!==null&&ye.delete(Oe.key===null?Ne:Oe.key),B=b(Oe,B,Ne),Be===null?xe=Oe:Be.sibling=Oe,Be=Oe);return s&&ye.forEach(function(ps){return i(M,ps)}),Ie&&ba(M,Ne),xe}function ve(M,B,H,ee){if(H==null)throw Error(a(151));for(var xe=null,Be=null,ye=B,Ne=B=0,Oe=null,ze=H.next();ye!==null&&!ze.done;Ne++,ze=H.next()){ye.index>Ne?(Oe=ye,ye=null):Oe=ye.sibling;var ps=K(M,ye,ze.value,ee);if(ps===null){ye===null&&(ye=Oe);break}s&&ye&&ps.alternate===null&&i(M,ye),B=b(ps,B,Ne),Be===null?xe=ps:Be.sibling=ps,Be=ps,ye=Oe}if(ze.done)return u(M,ye),Ie&&ba(M,Ne),xe;if(ye===null){for(;!ze.done;Ne++,ze=H.next())ze=ne(M,ze.value,ee),ze!==null&&(B=b(ze,B,Ne),Be===null?xe=ze:Be.sibling=ze,Be=ze);return Ie&&ba(M,Ne),xe}for(ye=h(ye);!ze.done;Ne++,ze=H.next())ze=Y(ye,M,Ne,ze.value,ee),ze!==null&&(s&&ze.alternate!==null&&ye.delete(ze.key===null?Ne:ze.key),B=b(ze,B,Ne),Be===null?xe=ze:Be.sibling=ze,Be=ze);return s&&ye.forEach(function(Rk){return i(M,Rk)}),Ie&&ba(M,Ne),xe}function Xe(M,B,H,ee){if(typeof H=="object"&&H!==null&&H.type===S&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case x:e:{for(var xe=H.key;B!==null;){if(B.key===xe){if(xe=H.type,xe===S){if(B.tag===7){u(M,B.sibling),ee=g(B,H.props.children),ee.return=M,M=ee;break e}}else if(B.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===X&&Ws(xe)===B.type){u(M,B.sibling),ee=g(B,H.props),fo(ee,H),ee.return=M,M=ee;break e}u(M,B);break}else i(M,B);B=B.sibling}H.type===S?(ee=Vs(H.props.children,M.mode,ee,H.key),ee.return=M,M=ee):(ee=Gl(H.type,H.key,H.props,null,M.mode,ee),fo(ee,H),ee.return=M,M=ee)}return N(M);case v:e:{for(xe=H.key;B!==null;){if(B.key===xe)if(B.tag===4&&B.stateNode.containerInfo===H.containerInfo&&B.stateNode.implementation===H.implementation){u(M,B.sibling),ee=g(B,H.children||[]),ee.return=M,M=ee;break e}else{u(M,B);break}else i(M,B);B=B.sibling}ee=Vf(H,M.mode,ee),ee.return=M,M=ee}return N(M);case X:return H=Ws(H),Xe(M,B,H,ee)}if(de(H))return pe(M,B,H,ee);if(Z(H)){if(xe=Z(H),typeof xe!="function")throw Error(a(150));return H=xe.call(H),ve(M,B,H,ee)}if(typeof H.then=="function")return Xe(M,B,Yl(H),ee);if(H.$$typeof===O)return Xe(M,B,ql(M,H),ee);Ql(M,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,B!==null&&B.tag===6?(u(M,B.sibling),ee=g(B,H),ee.return=M,M=ee):(u(M,B),ee=Uf(H,M.mode,ee),ee.return=M,M=ee),N(M)):u(M,B)}return function(M,B,H,ee){try{co=0;var xe=Xe(M,B,H,ee);return jr=null,xe}catch(ye){if(ye===qr||ye===Xl)throw ye;var Be=dn(29,ye,null,M.mode);return Be.lanes=ee,Be.return=M,Be}}}var js=Gb(!0),Hb=Gb(!1),Qa=!1;function Zf(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(s,i){s=s.updateQueue,i.updateQueue===s&&(i.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,callbacks:null})}function Za(s){return{lane:s,tag:0,payload:null,callback:null,next:null}}function Ja(s,i,u){var h=s.updateQueue;if(h===null)return null;if(h=h.shared,(Ue&2)!==0){var g=h.pending;return g===null?i.next=i:(i.next=g.next,g.next=i),h.pending=i,i=Pl(s),Eb(s,null,u),i}return Ml(s,h,i,u),Pl(s)}function ho(s,i,u){if(i=i.updateQueue,i!==null&&(i=i.shared,(u&4194048)!==0)){var h=i.lanes;h&=s.pendingLanes,u|=h,i.lanes=u,L0(s,u)}}function ed(s,i){var u=s.updateQueue,h=s.alternate;if(h!==null&&(h=h.updateQueue,u===h)){var g=null,b=null;if(u=u.firstBaseUpdate,u!==null){do{var N={lane:u.lane,tag:u.tag,payload:u.payload,callback:null,next:null};b===null?g=b=N:b=b.next=N,u=u.next}while(u!==null);b===null?g=b=i:b=b.next=i}else g=b=i;u={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:b,shared:h.shared,callbacks:h.callbacks},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=i:s.next=i,u.lastBaseUpdate=i}var td=!1;function po(){if(td){var s=Wr;if(s!==null)throw s}}function mo(s,i,u,h){td=!1;var g=s.updateQueue;Qa=!1;var b=g.firstBaseUpdate,N=g.lastBaseUpdate,E=g.shared.pending;if(E!==null){g.shared.pending=null;var D=E,W=D.next;D.next=null,N===null?b=W:N.next=W,N=D;var J=s.alternate;J!==null&&(J=J.updateQueue,E=J.lastBaseUpdate,E!==N&&(E===null?J.firstBaseUpdate=W:E.next=W,J.lastBaseUpdate=D))}if(b!==null){var ne=g.baseState;N=0,J=W=D=null,E=b;do{var K=E.lane&-536870913,Y=K!==E.lane;if(Y?(Ae&K)===K:(h&K)===K){K!==0&&K===Hr&&(td=!0),J!==null&&(J=J.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var pe=s,ve=E;K=i;var Xe=u;switch(ve.tag){case 1:if(pe=ve.payload,typeof pe=="function"){ne=pe.call(Xe,ne,K);break e}ne=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=ve.payload,K=typeof pe=="function"?pe.call(Xe,ne,K):pe,K==null)break e;ne=m({},ne,K);break e;case 2:Qa=!0}}K=E.callback,K!==null&&(s.flags|=64,Y&&(s.flags|=8192),Y=g.callbacks,Y===null?g.callbacks=[K]:Y.push(K))}else Y={lane:K,tag:E.tag,payload:E.payload,callback:E.callback,next:null},J===null?(W=J=Y,D=ne):J=J.next=Y,N|=K;if(E=E.next,E===null){if(E=g.shared.pending,E===null)break;Y=E,E=Y.next,Y.next=null,g.lastBaseUpdate=Y,g.shared.pending=null}}while(!0);J===null&&(D=ne),g.baseState=D,g.firstBaseUpdate=W,g.lastBaseUpdate=J,b===null&&(g.shared.lanes=0),ss|=N,s.lanes=N,s.memoizedState=ne}}function Wb(s,i){if(typeof s!="function")throw Error(a(191,s));s.call(i)}function qb(s,i){var u=s.callbacks;if(u!==null)for(s.callbacks=null,s=0;s<u.length;s++)Wb(u[s],i)}var Xr=L(null),Zl=L(0);function jb(s,i){s=Ra,re(Zl,s),re(Xr,i),Ra=s|i.baseLanes}function nd(){re(Zl,Ra),re(Xr,Xr.current)}function ad(){Ra=Zl.current,Q(Xr),Q(Zl)}var hn=L(null),On=null;function es(s){var i=s.alternate;re(ct,ct.current&1),re(hn,s),On===null&&(i===null||Xr.current!==null||i.memoizedState!==null)&&(On=s)}function sd(s){re(ct,ct.current),re(hn,s),On===null&&(On=s)}function Xb(s){s.tag===22?(re(ct,ct.current),re(hn,s),On===null&&(On=s)):ts()}function ts(){re(ct,ct.current),re(hn,hn.current)}function pn(s){Q(hn),On===s&&(On=null),Q(ct)}var ct=L(0);function Jl(s){for(var i=s;i!==null;){if(i.tag===13){var u=i.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||ch(u)||fh(u)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break;for(;i.sibling===null;){if(i.return===null||i.return===s)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wa=0,Ce=null,qe=null,ht=null,eu=!1,Kr=!1,Xs=!1,tu=0,go=0,Yr=null,xE=0;function ot(){throw Error(a(321))}function rd(s,i){if(i===null)return!1;for(var u=0;u<i.length&&u<s.length;u++)if(!fn(s[u],i[u]))return!1;return!0}function id(s,i,u,h,g,b){return wa=b,Ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=s===null||s.memoizedState===null?A1:wd,Xs=!1,b=u(h,g),Xs=!1,Kr&&(b=Yb(i,u,h,g)),Kb(s),b}function Kb(s){P.H=xo;var i=qe!==null&&qe.next!==null;if(wa=0,ht=qe=Ce=null,eu=!1,go=0,Yr=null,i)throw Error(a(300));s===null||pt||(s=s.dependencies,s!==null&&Wl(s)&&(pt=!0))}function Yb(s,i,u,h){Ce=s;var g=0;do{if(Kr&&(Yr=null),go=0,Kr=!1,25<=g)throw Error(a(301));if(g+=1,ht=qe=null,s.updateQueue!=null){var b=s.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}P.H=O1,b=i(u,h)}while(Kr);return b}function vE(){var s=P.H,i=s.useState()[0];return i=typeof i.then=="function"?yo(i):i,s=s.useState()[0],(qe!==null?qe.memoizedState:null)!==s&&(Ce.flags|=1024),i}function od(){var s=tu!==0;return tu=0,s}function ld(s,i,u){i.updateQueue=s.updateQueue,i.flags&=-2053,s.lanes&=~u}function ud(s){if(eu){for(s=s.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}eu=!1}wa=0,ht=qe=Ce=null,Kr=!1,go=tu=0,Yr=null}function Wt(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Ce.memoizedState=ht=s:ht=ht.next=s,ht}function ft(){if(qe===null){var s=Ce.alternate;s=s!==null?s.memoizedState:null}else s=qe.next;var i=ht===null?Ce.memoizedState:ht.next;if(i!==null)ht=i,qe=s;else{if(s===null)throw Ce.alternate===null?Error(a(467)):Error(a(310));qe=s,s={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ht===null?Ce.memoizedState=ht=s:ht=ht.next=s}return ht}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(s){var i=go;return go+=1,Yr===null&&(Yr=[]),s=Vb(Yr,s,i),i=Ce,(ht===null?i.memoizedState:ht.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?A1:wd),s}function au(s){if(s!==null&&typeof s=="object"){if(typeof s.then=="function")return yo(s);if(s.$$typeof===O)return _t(s)}throw Error(a(438,String(s)))}function cd(s){var i=null,u=Ce.updateQueue;if(u!==null&&(i=u.memoCache),i==null){var h=Ce.alternate;h!==null&&(h=h.updateQueue,h!==null&&(h=h.memoCache,h!=null&&(i={data:h.data.map(function(g){return g.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),u===null&&(u=nu(),Ce.updateQueue=u),u.memoCache=i,u=i.data[i.index],u===void 0)for(u=i.data[i.index]=Array(s),h=0;h<s;h++)u[h]=U;return i.index++,u}function Sa(s,i){return typeof i=="function"?i(s):i}function su(s){var i=ft();return fd(i,qe,s)}function fd(s,i,u){var h=s.queue;if(h===null)throw Error(a(311));h.lastRenderedReducer=u;var g=s.baseQueue,b=h.pending;if(b!==null){if(g!==null){var N=g.next;g.next=b.next,b.next=N}i.baseQueue=g=b,h.pending=null}if(b=s.baseState,g===null)s.memoizedState=b;else{i=g.next;var E=N=null,D=null,W=i,J=!1;do{var ne=W.lane&-536870913;if(ne!==W.lane?(Ae&ne)===ne:(wa&ne)===ne){var K=W.revertLane;if(K===0)D!==null&&(D=D.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),ne===Hr&&(J=!0);else if((wa&K)===K){W=W.next,K===Hr&&(J=!0);continue}else ne={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},D===null?(E=D=ne,N=b):D=D.next=ne,Ce.lanes|=K,ss|=K;ne=W.action,Xs&&u(b,ne),b=W.hasEagerState?W.eagerState:u(b,ne)}else K={lane:ne,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},D===null?(E=D=K,N=b):D=D.next=K,Ce.lanes|=ne,ss|=ne;W=W.next}while(W!==null&&W!==i);if(D===null?N=b:D.next=E,!fn(b,s.memoizedState)&&(pt=!0,J&&(u=Wr,u!==null)))throw u;s.memoizedState=b,s.baseState=N,s.baseQueue=D,h.lastRenderedState=b}return g===null&&(h.lanes=0),[s.memoizedState,h.dispatch]}function dd(s){var i=ft(),u=i.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var h=u.dispatch,g=u.pending,b=i.memoizedState;if(g!==null){u.pending=null;var N=g=g.next;do b=s(b,N.action),N=N.next;while(N!==g);fn(b,i.memoizedState)||(pt=!0),i.memoizedState=b,i.baseQueue===null&&(i.baseState=b),u.lastRenderedState=b}return[b,h]}function Qb(s,i,u){var h=Ce,g=ft(),b=Ie;if(b){if(u===void 0)throw Error(a(407));u=u()}else u=i();var N=!fn((qe||g).memoizedState,u);if(N&&(g.memoizedState=u,pt=!0),g=g.queue,md(e1.bind(null,h,g,s),[s]),g.getSnapshot!==i||N||ht!==null&&ht.memoizedState.tag&1){if(h.flags|=2048,Qr(9,{destroy:void 0},Jb.bind(null,h,g,u,i),null),Ke===null)throw Error(a(349));b||(wa&127)!==0||Zb(h,i,u)}return u}function Zb(s,i,u){s.flags|=16384,s={getSnapshot:i,value:u},i=Ce.updateQueue,i===null?(i=nu(),Ce.updateQueue=i,i.stores=[s]):(u=i.stores,u===null?i.stores=[s]:u.push(s))}function Jb(s,i,u,h){i.value=u,i.getSnapshot=h,t1(i)&&n1(s)}function e1(s,i,u){return u(function(){t1(i)&&n1(s)})}function t1(s){var i=s.getSnapshot;s=s.value;try{var u=i();return!fn(s,u)}catch{return!0}}function n1(s){var i=Us(s,2);i!==null&&Jt(i,s,2)}function hd(s){var i=Wt();if(typeof s=="function"){var u=s;if(s=u(),Xs){Ha(!0);try{u()}finally{Ha(!1)}}}return i.memoizedState=i.baseState=s,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:s},i}function a1(s,i,u,h){return s.baseState=u,fd(s,qe,typeof h=="function"?h:Sa)}function wE(s,i,u,h,g){if(ou(s))throw Error(a(485));if(s=i.action,s!==null){var b={payload:g,action:s,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(N){b.listeners.push(N)}};P.T!==null?u(!0):b.isTransition=!1,h(b),u=i.pending,u===null?(b.next=i.pending=b,s1(i,b)):(b.next=u.next,i.pending=u.next=b)}}function s1(s,i){var u=i.action,h=i.payload,g=s.state;if(i.isTransition){var b=P.T,N={};P.T=N;try{var E=u(g,h),D=P.S;D!==null&&D(N,E),r1(s,i,E)}catch(W){pd(s,i,W)}finally{b!==null&&N.types!==null&&(b.types=N.types),P.T=b}}else try{b=u(g,h),r1(s,i,b)}catch(W){pd(s,i,W)}}function r1(s,i,u){u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(function(h){i1(s,i,h)},function(h){return pd(s,i,h)}):i1(s,i,u)}function i1(s,i,u){i.status="fulfilled",i.value=u,o1(i),s.state=u,i=s.pending,i!==null&&(u=i.next,u===i?s.pending=null:(u=u.next,i.next=u,s1(s,u)))}function pd(s,i,u){var h=s.pending;if(s.pending=null,h!==null){h=h.next;do i.status="rejected",i.reason=u,o1(i),i=i.next;while(i!==h)}s.action=null}function o1(s){s=s.listeners;for(var i=0;i<s.length;i++)(0,s[i])()}function l1(s,i){return i}function u1(s,i){if(Ie){var u=Ke.formState;if(u!==null){e:{var h=Ce;if(Ie){if(Je){t:{for(var g=Je,b=An;g.nodeType!==8;){if(!b){g=null;break t}if(g=In(g.nextSibling),g===null){g=null;break t}}b=g.data,g=b==="F!"||b==="F"?g:null}if(g){Je=In(g.nextSibling),h=g.data==="F!";break e}}Ka(h)}h=!1}h&&(i=u[0])}}return u=Wt(),u.memoizedState=u.baseState=i,h={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l1,lastRenderedState:i},u.queue=h,u=k1.bind(null,Ce,h),h.dispatch=u,h=hd(!1),b=vd.bind(null,Ce,!1,h.queue),h=Wt(),g={state:i,dispatch:null,action:s,pending:null},h.queue=g,u=wE.bind(null,Ce,g,b,u),g.dispatch=u,h.memoizedState=s,[i,u,!1]}function c1(s){var i=ft();return f1(i,qe,s)}function f1(s,i,u){if(i=fd(s,i,l1)[0],s=su(Sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var h=yo(i)}catch(N){throw N===qr?Xl:N}else h=i;i=ft();var g=i.queue,b=g.dispatch;return u!==i.memoizedState&&(Ce.flags|=2048,Qr(9,{destroy:void 0},SE.bind(null,g,u),null)),[h,b,s]}function SE(s,i){s.action=i}function d1(s){var i=ft(),u=qe;if(u!==null)return f1(i,u,s);ft(),i=i.memoizedState,u=ft();var h=u.queue.dispatch;return u.memoizedState=s,[i,h,!1]}function Qr(s,i,u,h){return s={tag:s,create:u,deps:h,inst:i,next:null},i=Ce.updateQueue,i===null&&(i=nu(),Ce.updateQueue=i),u=i.lastEffect,u===null?i.lastEffect=s.next=s:(h=u.next,u.next=s,s.next=h,i.lastEffect=s),s}function h1(){return ft().memoizedState}function ru(s,i,u,h){var g=Wt();Ce.flags|=s,g.memoizedState=Qr(1|i,{destroy:void 0},u,h===void 0?null:h)}function iu(s,i,u,h){var g=ft();h=h===void 0?null:h;var b=g.memoizedState.inst;qe!==null&&h!==null&&rd(h,qe.memoizedState.deps)?g.memoizedState=Qr(i,b,u,h):(Ce.flags|=s,g.memoizedState=Qr(1|i,b,u,h))}function p1(s,i){ru(8390656,8,s,i)}function md(s,i){iu(2048,8,s,i)}function TE(s){Ce.flags|=4;var i=Ce.updateQueue;if(i===null)i=nu(),Ce.updateQueue=i,i.events=[s];else{var u=i.events;u===null?i.events=[s]:u.push(s)}}function m1(s){var i=ft().memoizedState;return TE({ref:i,nextImpl:s}),function(){if((Ue&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function g1(s,i){return iu(4,2,s,i)}function y1(s,i){return iu(4,4,s,i)}function b1(s,i){if(typeof i=="function"){s=s();var u=i(s);return function(){typeof u=="function"?u():i(null)}}if(i!=null)return s=s(),i.current=s,function(){i.current=null}}function x1(s,i,u){u=u!=null?u.concat([s]):null,iu(4,4,b1.bind(null,i,s),u)}function gd(){}function v1(s,i){var u=ft();i=i===void 0?null:i;var h=u.memoizedState;return i!==null&&rd(i,h[1])?h[0]:(u.memoizedState=[s,i],s)}function w1(s,i){var u=ft();i=i===void 0?null:i;var h=u.memoizedState;if(i!==null&&rd(i,h[1]))return h[0];if(h=s(),Xs){Ha(!0);try{s()}finally{Ha(!1)}}return u.memoizedState=[h,i],h}function yd(s,i,u){return u===void 0||(wa&1073741824)!==0&&(Ae&261930)===0?s.memoizedState=i:(s.memoizedState=u,s=Sx(),Ce.lanes|=s,ss|=s,u)}function S1(s,i,u,h){return fn(u,i)?u:Xr.current!==null?(s=yd(s,u,h),fn(s,i)||(pt=!0),s):(wa&42)===0||(wa&1073741824)!==0&&(Ae&261930)===0?(pt=!0,s.memoizedState=u):(s=Sx(),Ce.lanes|=s,ss|=s,i)}function T1(s,i,u,h,g){var b=ae.p;ae.p=b!==0&&8>b?b:8;var N=P.T,E={};P.T=E,vd(s,!1,i,u);try{var D=g(),W=P.S;if(W!==null&&W(E,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var J=bE(D,h);bo(s,i,J,yn(s))}else bo(s,i,h,yn(s))}catch(ne){bo(s,i,{then:function(){},status:"rejected",reason:ne},yn())}finally{ae.p=b,N!==null&&E.types!==null&&(N.types=E.types),P.T=N}}function CE(){}function bd(s,i,u,h){if(s.tag!==5)throw Error(a(476));var g=C1(s).queue;T1(s,g,i,ie,u===null?CE:function(){return N1(s),u(h)})}function C1(s){var i=s.memoizedState;if(i!==null)return i;i={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:ie},next:null};var u={};return i.next={memoizedState:u,baseState:u,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:u},next:null},s.memoizedState=i,s=s.alternate,s!==null&&(s.memoizedState=i),i}function N1(s){var i=C1(s);i.next===null&&(i=s.alternate.memoizedState),bo(s,i.next.queue,{},yn())}function xd(){return _t(Lo)}function $1(){return ft().memoizedState}function E1(){return ft().memoizedState}function NE(s){for(var i=s.return;i!==null;){switch(i.tag){case 24:case 3:var u=yn();s=Za(u);var h=Ja(i,s,u);h!==null&&(Jt(h,i,u),ho(h,i,u)),i={cache:Xf()},s.payload=i;return}i=i.return}}function $E(s,i,u){var h=yn();u={lane:h,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},ou(s)?R1(i,u):(u=Bf(s,i,u,h),u!==null&&(Jt(u,s,h),_1(u,i,h)))}function k1(s,i,u){var h=yn();bo(s,i,u,h)}function bo(s,i,u,h){var g={lane:h,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null};if(ou(s))R1(i,g);else{var b=s.alternate;if(s.lanes===0&&(b===null||b.lanes===0)&&(b=i.lastRenderedReducer,b!==null))try{var N=i.lastRenderedState,E=b(N,u);if(g.hasEagerState=!0,g.eagerState=E,fn(E,N))return Ml(s,i,g,0),Ke===null&&Vl(),!1}catch{}if(u=Bf(s,i,g,h),u!==null)return Jt(u,s,h),_1(u,i,h),!0}return!1}function vd(s,i,u,h){if(h={lane:2,revertLane:Zd(),gesture:null,action:h,hasEagerState:!1,eagerState:null,next:null},ou(s)){if(i)throw Error(a(479))}else i=Bf(s,u,h,2),i!==null&&Jt(i,s,2)}function ou(s){var i=s.alternate;return s===Ce||i!==null&&i===Ce}function R1(s,i){Kr=eu=!0;var u=s.pending;u===null?i.next=i:(i.next=u.next,u.next=i),s.pending=i}function _1(s,i,u){if((u&4194048)!==0){var h=i.lanes;h&=s.pendingLanes,u|=h,i.lanes=u,L0(s,u)}}var xo={readContext:_t,use:au,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};xo.useEffectEvent=ot;var A1={readContext:_t,use:au,useCallback:function(s,i){return Wt().memoizedState=[s,i===void 0?null:i],s},useContext:_t,useEffect:p1,useImperativeHandle:function(s,i,u){u=u!=null?u.concat([s]):null,ru(4194308,4,b1.bind(null,i,s),u)},useLayoutEffect:function(s,i){return ru(4194308,4,s,i)},useInsertionEffect:function(s,i){ru(4,2,s,i)},useMemo:function(s,i){var u=Wt();i=i===void 0?null:i;var h=s();if(Xs){Ha(!0);try{s()}finally{Ha(!1)}}return u.memoizedState=[h,i],h},useReducer:function(s,i,u){var h=Wt();if(u!==void 0){var g=u(i);if(Xs){Ha(!0);try{u(i)}finally{Ha(!1)}}}else g=i;return h.memoizedState=h.baseState=g,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:g},h.queue=s,s=s.dispatch=$E.bind(null,Ce,s),[h.memoizedState,s]},useRef:function(s){var i=Wt();return s={current:s},i.memoizedState=s},useState:function(s){s=hd(s);var i=s.queue,u=k1.bind(null,Ce,i);return i.dispatch=u,[s.memoizedState,u]},useDebugValue:gd,useDeferredValue:function(s,i){var u=Wt();return yd(u,s,i)},useTransition:function(){var s=hd(!1);return s=T1.bind(null,Ce,s.queue,!0,!1),Wt().memoizedState=s,[!1,s]},useSyncExternalStore:function(s,i,u){var h=Ce,g=Wt();if(Ie){if(u===void 0)throw Error(a(407));u=u()}else{if(u=i(),Ke===null)throw Error(a(349));(Ae&127)!==0||Zb(h,i,u)}g.memoizedState=u;var b={value:u,getSnapshot:i};return g.queue=b,p1(e1.bind(null,h,b,s),[s]),h.flags|=2048,Qr(9,{destroy:void 0},Jb.bind(null,h,b,u,i),null),u},useId:function(){var s=Wt(),i=Ke.identifierPrefix;if(Ie){var u=ia,h=ra;u=(h&~(1<<32-cn(h)-1)).toString(32)+u,i="_"+i+"R_"+u,u=tu++,0<u&&(i+="H"+u.toString(32)),i+="_"}else u=xE++,i="_"+i+"r_"+u.toString(32)+"_";return s.memoizedState=i},useHostTransitionStatus:xd,useFormState:u1,useActionState:u1,useOptimistic:function(s){var i=Wt();i.memoizedState=i.baseState=s;var u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=u,i=vd.bind(null,Ce,!0,u),u.dispatch=i,[s,i]},useMemoCache:cd,useCacheRefresh:function(){return Wt().memoizedState=NE.bind(null,Ce)},useEffectEvent:function(s){var i=Wt(),u={impl:s};return i.memoizedState=u,function(){if((Ue&2)!==0)throw Error(a(440));return u.impl.apply(void 0,arguments)}}},wd={readContext:_t,use:au,useCallback:v1,useContext:_t,useEffect:md,useImperativeHandle:x1,useInsertionEffect:g1,useLayoutEffect:y1,useMemo:w1,useReducer:su,useRef:h1,useState:function(){return su(Sa)},useDebugValue:gd,useDeferredValue:function(s,i){var u=ft();return S1(u,qe.memoizedState,s,i)},useTransition:function(){var s=su(Sa)[0],i=ft().memoizedState;return[typeof s=="boolean"?s:yo(s),i]},useSyncExternalStore:Qb,useId:$1,useHostTransitionStatus:xd,useFormState:c1,useActionState:c1,useOptimistic:function(s,i){var u=ft();return a1(u,qe,s,i)},useMemoCache:cd,useCacheRefresh:E1};wd.useEffectEvent=m1;var O1={readContext:_t,use:au,useCallback:v1,useContext:_t,useEffect:md,useImperativeHandle:x1,useInsertionEffect:g1,useLayoutEffect:y1,useMemo:w1,useReducer:dd,useRef:h1,useState:function(){return dd(Sa)},useDebugValue:gd,useDeferredValue:function(s,i){var u=ft();return qe===null?yd(u,s,i):S1(u,qe.memoizedState,s,i)},useTransition:function(){var s=dd(Sa)[0],i=ft().memoizedState;return[typeof s=="boolean"?s:yo(s),i]},useSyncExternalStore:Qb,useId:$1,useHostTransitionStatus:xd,useFormState:d1,useActionState:d1,useOptimistic:function(s,i){var u=ft();return qe!==null?a1(u,qe,s,i):(u.baseState=s,[s,u.queue.dispatch])},useMemoCache:cd,useCacheRefresh:E1};O1.useEffectEvent=m1;function Sd(s,i,u,h){i=s.memoizedState,u=u(h,i),u=u==null?i:m({},i,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var Td={enqueueSetState:function(s,i,u){s=s._reactInternals;var h=yn(),g=Za(h);g.payload=i,u!=null&&(g.callback=u),i=Ja(s,g,h),i!==null&&(Jt(i,s,h),ho(i,s,h))},enqueueReplaceState:function(s,i,u){s=s._reactInternals;var h=yn(),g=Za(h);g.tag=1,g.payload=i,u!=null&&(g.callback=u),i=Ja(s,g,h),i!==null&&(Jt(i,s,h),ho(i,s,h))},enqueueForceUpdate:function(s,i){s=s._reactInternals;var u=yn(),h=Za(u);h.tag=2,i!=null&&(h.callback=i),i=Ja(s,h,u),i!==null&&(Jt(i,s,u),ho(i,s,u))}};function I1(s,i,u,h,g,b,N){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(h,b,N):i.prototype&&i.prototype.isPureReactComponent?!so(u,h)||!so(g,b):!0}function D1(s,i,u,h){s=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(u,h),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(u,h),i.state!==s&&Td.enqueueReplaceState(i,i.state,null)}function Ks(s,i){var u=i;if("ref"in i){u={};for(var h in i)h!=="ref"&&(u[h]=i[h])}if(s=s.defaultProps){u===i&&(u=m({},u));for(var g in s)u[g]===void 0&&(u[g]=s[g])}return u}function L1(s){Ul(s)}function F1(s){console.error(s)}function B1(s){Ul(s)}function lu(s,i){try{var u=s.onUncaughtError;u(i.value,{componentStack:i.stack})}catch(h){setTimeout(function(){throw h})}}function z1(s,i,u){try{var h=s.onCaughtError;h(u.value,{componentStack:u.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(g){setTimeout(function(){throw g})}}function Cd(s,i,u){return u=Za(u),u.tag=3,u.payload={element:null},u.callback=function(){lu(s,i)},u}function U1(s){return s=Za(s),s.tag=3,s}function V1(s,i,u,h){var g=u.type.getDerivedStateFromError;if(typeof g=="function"){var b=h.value;s.payload=function(){return g(b)},s.callback=function(){z1(i,u,h)}}var N=u.stateNode;N!==null&&typeof N.componentDidCatch=="function"&&(s.callback=function(){z1(i,u,h),typeof g!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var E=h.stack;this.componentDidCatch(h.value,{componentStack:E!==null?E:""})})}function EE(s,i,u,h,g){if(u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){if(i=u.alternate,i!==null&&Gr(i,u,g,!0),u=hn.current,u!==null){switch(u.tag){case 31:case 13:return On===null?vu():u.alternate===null&&lt===0&&(lt=3),u.flags&=-257,u.flags|=65536,u.lanes=g,h===Kl?u.flags|=16384:(i=u.updateQueue,i===null?u.updateQueue=new Set([h]):i.add(h),Kd(s,h,g)),!1;case 22:return u.flags|=65536,h===Kl?u.flags|=16384:(i=u.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([h])},u.updateQueue=i):(u=i.retryQueue,u===null?i.retryQueue=new Set([h]):u.add(h)),Kd(s,h,g)),!1}throw Error(a(435,u.tag))}return Kd(s,h,g),vu(),!1}if(Ie)return i=hn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=g,h!==Gf&&(s=Error(a(422),{cause:h}),oo(kn(s,u)))):(h!==Gf&&(i=Error(a(423),{cause:h}),oo(kn(i,u))),s=s.current.alternate,s.flags|=65536,g&=-g,s.lanes|=g,h=kn(h,u),g=Cd(s.stateNode,h,g),ed(s,g),lt!==4&&(lt=2)),!1;var b=Error(a(520),{cause:h});if(b=kn(b,u),Eo===null?Eo=[b]:Eo.push(b),lt!==4&&(lt=2),i===null)return!0;h=kn(h,u),u=i;do{switch(u.tag){case 3:return u.flags|=65536,s=g&-g,u.lanes|=s,s=Cd(u.stateNode,h,s),ed(u,s),!1;case 1:if(i=u.type,b=u.stateNode,(u.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(rs===null||!rs.has(b))))return u.flags|=65536,g&=-g,u.lanes|=g,g=U1(g),V1(g,s,u,h),ed(u,g),!1}u=u.return}while(u!==null);return!1}var Nd=Error(a(461)),pt=!1;function At(s,i,u,h){i.child=s===null?Hb(i,null,u,h):js(i,s.child,u,h)}function M1(s,i,u,h,g){u=u.render;var b=i.ref;if("ref"in h){var N={};for(var E in h)E!=="ref"&&(N[E]=h[E])}else N=h;return Gs(i),h=id(s,i,u,N,b,g),E=od(),s!==null&&!pt?(ld(s,i,g),Ta(s,i,g)):(Ie&&E&&Mf(i),i.flags|=1,At(s,i,h,g),i.child)}function P1(s,i,u,h,g){if(s===null){var b=u.type;return typeof b=="function"&&!zf(b)&&b.defaultProps===void 0&&u.compare===null?(i.tag=15,i.type=b,G1(s,i,b,h,g)):(s=Gl(u.type,null,h,i,i.mode,g),s.ref=i.ref,s.return=i,i.child=s)}if(b=s.child,!Id(s,g)){var N=b.memoizedProps;if(u=u.compare,u=u!==null?u:so,u(N,h)&&s.ref===i.ref)return Ta(s,i,g)}return i.flags|=1,s=ya(b,h),s.ref=i.ref,s.return=i,i.child=s}function G1(s,i,u,h,g){if(s!==null){var b=s.memoizedProps;if(so(b,h)&&s.ref===i.ref)if(pt=!1,i.pendingProps=h=b,Id(s,g))(s.flags&131072)!==0&&(pt=!0);else return i.lanes=s.lanes,Ta(s,i,g)}return $d(s,i,u,h,g)}function H1(s,i,u,h){var g=h.children,b=s!==null?s.memoizedState:null;if(s===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),h.mode==="hidden"){if((i.flags&128)!==0){if(b=b!==null?b.baseLanes|u:u,s!==null){for(h=i.child=s.child,g=0;h!==null;)g=g|h.lanes|h.childLanes,h=h.sibling;h=g&~b}else h=0,i.child=null;return W1(s,i,b,u,h)}if((u&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},s!==null&&jl(i,b!==null?b.cachePool:null),b!==null?jb(i,b):nd(),Xb(i);else return h=i.lanes=536870912,W1(s,i,b!==null?b.baseLanes|u:u,u,h)}else b!==null?(jl(i,b.cachePool),jb(i,b),ts(),i.memoizedState=null):(s!==null&&jl(i,null),nd(),ts());return At(s,i,g,u),i.child}function vo(s,i){return s!==null&&s.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function W1(s,i,u,h,g){var b=Yf();return b=b===null?null:{parent:dt._currentValue,pool:b},i.memoizedState={baseLanes:u,cachePool:b},s!==null&&jl(i,null),nd(),Xb(i),s!==null&&Gr(s,i,h,!0),i.childLanes=g,null}function uu(s,i){return i=fu({mode:i.mode,children:i.children},s.mode),i.ref=s.ref,s.child=i,i.return=s,i}function q1(s,i,u){return js(i,s.child,null,u),s=uu(i,i.pendingProps),s.flags|=2,pn(i),i.memoizedState=null,s}function kE(s,i,u){var h=i.pendingProps,g=(i.flags&128)!==0;if(i.flags&=-129,s===null){if(Ie){if(h.mode==="hidden")return s=uu(i,h),i.lanes=536870912,vo(null,s);if(sd(i),(s=Je)?(s=sv(s,An),s=s!==null&&s.data==="&"?s:null,s!==null&&(i.memoizedState={dehydrated:s,treeContext:ja!==null?{id:ra,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},u=Rb(s),u.return=i,i.child=u,Rt=i,Je=null)):s=null,s===null)throw Ka(i);return i.lanes=536870912,null}return uu(i,h)}var b=s.memoizedState;if(b!==null){var N=b.dehydrated;if(sd(i),g)if(i.flags&256)i.flags&=-257,i=q1(s,i,u);else if(i.memoizedState!==null)i.child=s.child,i.flags|=128,i=null;else throw Error(a(558));else if(pt||Gr(s,i,u,!1),g=(u&s.childLanes)!==0,pt||g){if(h=Ke,h!==null&&(N=F0(h,u),N!==0&&N!==b.retryLane))throw b.retryLane=N,Us(s,N),Jt(h,s,N),Nd;vu(),i=q1(s,i,u)}else s=b.treeContext,Je=In(N.nextSibling),Rt=i,Ie=!0,Xa=null,An=!1,s!==null&&Ob(i,s),i=uu(i,h),i.flags|=4096;return i}return s=ya(s.child,{mode:h.mode,children:h.children}),s.ref=i.ref,i.child=s,s.return=i,s}function cu(s,i){var u=i.ref;if(u===null)s!==null&&s.ref!==null&&(i.flags|=4194816);else{if(typeof u!="function"&&typeof u!="object")throw Error(a(284));(s===null||s.ref!==u)&&(i.flags|=4194816)}}function $d(s,i,u,h,g){return Gs(i),u=id(s,i,u,h,void 0,g),h=od(),s!==null&&!pt?(ld(s,i,g),Ta(s,i,g)):(Ie&&h&&Mf(i),i.flags|=1,At(s,i,u,g),i.child)}function j1(s,i,u,h,g,b){return Gs(i),i.updateQueue=null,u=Yb(i,h,u,g),Kb(s),h=od(),s!==null&&!pt?(ld(s,i,b),Ta(s,i,b)):(Ie&&h&&Mf(i),i.flags|=1,At(s,i,u,b),i.child)}function X1(s,i,u,h,g){if(Gs(i),i.stateNode===null){var b=Ur,N=u.contextType;typeof N=="object"&&N!==null&&(b=_t(N)),b=new u(h,b),i.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=Td,i.stateNode=b,b._reactInternals=i,b=i.stateNode,b.props=h,b.state=i.memoizedState,b.refs={},Zf(i),N=u.contextType,b.context=typeof N=="object"&&N!==null?_t(N):Ur,b.state=i.memoizedState,N=u.getDerivedStateFromProps,typeof N=="function"&&(Sd(i,u,N,h),b.state=i.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(N=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),N!==b.state&&Td.enqueueReplaceState(b,b.state,null),mo(i,h,b,g),po(),b.state=i.memoizedState),typeof b.componentDidMount=="function"&&(i.flags|=4194308),h=!0}else if(s===null){b=i.stateNode;var E=i.memoizedProps,D=Ks(u,E);b.props=D;var W=b.context,J=u.contextType;N=Ur,typeof J=="object"&&J!==null&&(N=_t(J));var ne=u.getDerivedStateFromProps;J=typeof ne=="function"||typeof b.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,J||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(E||W!==N)&&D1(i,b,h,N),Qa=!1;var K=i.memoizedState;b.state=K,mo(i,h,b,g),po(),W=i.memoizedState,E||K!==W||Qa?(typeof ne=="function"&&(Sd(i,u,ne,h),W=i.memoizedState),(D=Qa||I1(i,u,D,h,K,W,N))?(J||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=h,i.memoizedState=W),b.props=h,b.state=W,b.context=N,h=D):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),h=!1)}else{b=i.stateNode,Jf(s,i),N=i.memoizedProps,J=Ks(u,N),b.props=J,ne=i.pendingProps,K=b.context,W=u.contextType,D=Ur,typeof W=="object"&&W!==null&&(D=_t(W)),E=u.getDerivedStateFromProps,(W=typeof E=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(N!==ne||K!==D)&&D1(i,b,h,D),Qa=!1,K=i.memoizedState,b.state=K,mo(i,h,b,g),po();var Y=i.memoizedState;N!==ne||K!==Y||Qa||s!==null&&s.dependencies!==null&&Wl(s.dependencies)?(typeof E=="function"&&(Sd(i,u,E,h),Y=i.memoizedState),(J=Qa||I1(i,u,J,h,K,Y,D)||s!==null&&s.dependencies!==null&&Wl(s.dependencies))?(W||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(h,Y,D),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(h,Y,D)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||N===s.memoizedProps&&K===s.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||N===s.memoizedProps&&K===s.memoizedState||(i.flags|=1024),i.memoizedProps=h,i.memoizedState=Y),b.props=h,b.state=Y,b.context=D,h=J):(typeof b.componentDidUpdate!="function"||N===s.memoizedProps&&K===s.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||N===s.memoizedProps&&K===s.memoizedState||(i.flags|=1024),h=!1)}return b=h,cu(s,i),h=(i.flags&128)!==0,b||h?(b=i.stateNode,u=h&&typeof u.getDerivedStateFromError!="function"?null:b.render(),i.flags|=1,s!==null&&h?(i.child=js(i,s.child,null,g),i.child=js(i,null,u,g)):At(s,i,u,g),i.memoizedState=b.state,s=i.child):s=Ta(s,i,g),s}function K1(s,i,u,h){return Ms(),i.flags|=256,At(s,i,u,h),i.child}var Ed={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kd(s){return{baseLanes:s,cachePool:zb()}}function Rd(s,i,u){return s=s!==null?s.childLanes&~u:0,i&&(s|=gn),s}function Y1(s,i,u){var h=i.pendingProps,g=!1,b=(i.flags&128)!==0,N;if((N=b)||(N=s!==null&&s.memoizedState===null?!1:(ct.current&2)!==0),N&&(g=!0,i.flags&=-129),N=(i.flags&32)!==0,i.flags&=-33,s===null){if(Ie){if(g?es(i):ts(),(s=Je)?(s=sv(s,An),s=s!==null&&s.data!=="&"?s:null,s!==null&&(i.memoizedState={dehydrated:s,treeContext:ja!==null?{id:ra,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},u=Rb(s),u.return=i,i.child=u,Rt=i,Je=null)):s=null,s===null)throw Ka(i);return fh(s)?i.lanes=32:i.lanes=536870912,null}var E=h.children;return h=h.fallback,g?(ts(),g=i.mode,E=fu({mode:"hidden",children:E},g),h=Vs(h,g,u,null),E.return=i,h.return=i,E.sibling=h,i.child=E,h=i.child,h.memoizedState=kd(u),h.childLanes=Rd(s,N,u),i.memoizedState=Ed,vo(null,h)):(es(i),_d(i,E))}var D=s.memoizedState;if(D!==null&&(E=D.dehydrated,E!==null)){if(b)i.flags&256?(es(i),i.flags&=-257,i=Ad(s,i,u)):i.memoizedState!==null?(ts(),i.child=s.child,i.flags|=128,i=null):(ts(),E=h.fallback,g=i.mode,h=fu({mode:"visible",children:h.children},g),E=Vs(E,g,u,null),E.flags|=2,h.return=i,E.return=i,h.sibling=E,i.child=h,js(i,s.child,null,u),h=i.child,h.memoizedState=kd(u),h.childLanes=Rd(s,N,u),i.memoizedState=Ed,i=vo(null,h));else if(es(i),fh(E)){if(N=E.nextSibling&&E.nextSibling.dataset,N)var W=N.dgst;N=W,h=Error(a(419)),h.stack="",h.digest=N,oo({value:h,source:null,stack:null}),i=Ad(s,i,u)}else if(pt||Gr(s,i,u,!1),N=(u&s.childLanes)!==0,pt||N){if(N=Ke,N!==null&&(h=F0(N,u),h!==0&&h!==D.retryLane))throw D.retryLane=h,Us(s,h),Jt(N,s,h),Nd;ch(E)||vu(),i=Ad(s,i,u)}else ch(E)?(i.flags|=192,i.child=s.child,i=null):(s=D.treeContext,Je=In(E.nextSibling),Rt=i,Ie=!0,Xa=null,An=!1,s!==null&&Ob(i,s),i=_d(i,h.children),i.flags|=4096);return i}return g?(ts(),E=h.fallback,g=i.mode,D=s.child,W=D.sibling,h=ya(D,{mode:"hidden",children:h.children}),h.subtreeFlags=D.subtreeFlags&65011712,W!==null?E=ya(W,E):(E=Vs(E,g,u,null),E.flags|=2),E.return=i,h.return=i,h.sibling=E,i.child=h,vo(null,h),h=i.child,E=s.child.memoizedState,E===null?E=kd(u):(g=E.cachePool,g!==null?(D=dt._currentValue,g=g.parent!==D?{parent:D,pool:D}:g):g=zb(),E={baseLanes:E.baseLanes|u,cachePool:g}),h.memoizedState=E,h.childLanes=Rd(s,N,u),i.memoizedState=Ed,vo(s.child,h)):(es(i),u=s.child,s=u.sibling,u=ya(u,{mode:"visible",children:h.children}),u.return=i,u.sibling=null,s!==null&&(N=i.deletions,N===null?(i.deletions=[s],i.flags|=16):N.push(s)),i.child=u,i.memoizedState=null,u)}function _d(s,i){return i=fu({mode:"visible",children:i},s.mode),i.return=s,s.child=i}function fu(s,i){return s=dn(22,s,null,i),s.lanes=0,s}function Ad(s,i,u){return js(i,s.child,null,u),s=_d(i,i.pendingProps.children),s.flags|=2,i.memoizedState=null,s}function Q1(s,i,u){s.lanes|=i;var h=s.alternate;h!==null&&(h.lanes|=i),qf(s.return,i,u)}function Od(s,i,u,h,g,b){var N=s.memoizedState;N===null?s.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:h,tail:u,tailMode:g,treeForkCount:b}:(N.isBackwards=i,N.rendering=null,N.renderingStartTime=0,N.last=h,N.tail=u,N.tailMode=g,N.treeForkCount=b)}function Z1(s,i,u){var h=i.pendingProps,g=h.revealOrder,b=h.tail;h=h.children;var N=ct.current,E=(N&2)!==0;if(E?(N=N&1|2,i.flags|=128):N&=1,re(ct,N),At(s,i,h,u),h=Ie?io:0,!E&&s!==null&&(s.flags&128)!==0)e:for(s=i.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Q1(s,u,i);else if(s.tag===19)Q1(s,u,i);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}switch(g){case"forwards":for(u=i.child,g=null;u!==null;)s=u.alternate,s!==null&&Jl(s)===null&&(g=u),u=u.sibling;u=g,u===null?(g=i.child,i.child=null):(g=u.sibling,u.sibling=null),Od(i,!1,g,u,b,h);break;case"backwards":case"unstable_legacy-backwards":for(u=null,g=i.child,i.child=null;g!==null;){if(s=g.alternate,s!==null&&Jl(s)===null){i.child=g;break}s=g.sibling,g.sibling=u,u=g,g=s}Od(i,!0,u,null,b,h);break;case"together":Od(i,!1,null,null,void 0,h);break;default:i.memoizedState=null}return i.child}function Ta(s,i,u){if(s!==null&&(i.dependencies=s.dependencies),ss|=i.lanes,(u&i.childLanes)===0)if(s!==null){if(Gr(s,i,u,!1),(u&i.childLanes)===0)return null}else return null;if(s!==null&&i.child!==s.child)throw Error(a(153));if(i.child!==null){for(s=i.child,u=ya(s,s.pendingProps),i.child=u,u.return=i;s.sibling!==null;)s=s.sibling,u=u.sibling=ya(s,s.pendingProps),u.return=i;u.sibling=null}return i.child}function Id(s,i){return(s.lanes&i)!==0?!0:(s=s.dependencies,!!(s!==null&&Wl(s)))}function RE(s,i,u){switch(i.tag){case 3:Ht(i,i.stateNode.containerInfo),Ya(i,dt,s.memoizedState.cache),Ms();break;case 27:case 5:Wi(i);break;case 4:Ht(i,i.stateNode.containerInfo);break;case 10:Ya(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,sd(i),null;break;case 13:var h=i.memoizedState;if(h!==null)return h.dehydrated!==null?(es(i),i.flags|=128,null):(u&i.child.childLanes)!==0?Y1(s,i,u):(es(i),s=Ta(s,i,u),s!==null?s.sibling:null);es(i);break;case 19:var g=(s.flags&128)!==0;if(h=(u&i.childLanes)!==0,h||(Gr(s,i,u,!1),h=(u&i.childLanes)!==0),g){if(h)return Z1(s,i,u);i.flags|=128}if(g=i.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),re(ct,ct.current),h)break;return null;case 22:return i.lanes=0,H1(s,i,u,i.pendingProps);case 24:Ya(i,dt,s.memoizedState.cache)}return Ta(s,i,u)}function J1(s,i,u){if(s!==null)if(s.memoizedProps!==i.pendingProps)pt=!0;else{if(!Id(s,u)&&(i.flags&128)===0)return pt=!1,RE(s,i,u);pt=(s.flags&131072)!==0}else pt=!1,Ie&&(i.flags&1048576)!==0&&Ab(i,io,i.index);switch(i.lanes=0,i.tag){case 16:e:{var h=i.pendingProps;if(s=Ws(i.elementType),i.type=s,typeof s=="function")zf(s)?(h=Ks(s,h),i.tag=1,i=X1(null,i,s,h,u)):(i.tag=0,i=$d(null,i,s,h,u));else{if(s!=null){var g=s.$$typeof;if(g===A){i.tag=11,i=M1(null,i,s,h,u);break e}else if(g===G){i.tag=14,i=P1(null,i,s,h,u);break e}}throw i=fe(s)||s,Error(a(306,i,""))}}return i;case 0:return $d(s,i,i.type,i.pendingProps,u);case 1:return h=i.type,g=Ks(h,i.pendingProps),X1(s,i,h,g,u);case 3:e:{if(Ht(i,i.stateNode.containerInfo),s===null)throw Error(a(387));h=i.pendingProps;var b=i.memoizedState;g=b.element,Jf(s,i),mo(i,h,null,u);var N=i.memoizedState;if(h=N.cache,Ya(i,dt,h),h!==b.cache&&jf(i,[dt],u,!0),po(),h=N.element,b.isDehydrated)if(b={element:h,isDehydrated:!1,cache:N.cache},i.updateQueue.baseState=b,i.memoizedState=b,i.flags&256){i=K1(s,i,h,u);break e}else if(h!==g){g=kn(Error(a(424)),i),oo(g),i=K1(s,i,h,u);break e}else for(s=i.stateNode.containerInfo,s.nodeType===9?s=s.body:s=s.nodeName==="HTML"?s.ownerDocument.body:s,Je=In(s.firstChild),Rt=i,Ie=!0,Xa=null,An=!0,u=Hb(i,null,h,u),i.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Ms(),h===g){i=Ta(s,i,u);break e}At(s,i,h,u)}i=i.child}return i;case 26:return cu(s,i),s===null?(u=cv(i.type,null,i.pendingProps,null))?i.memoizedState=u:Ie||(u=i.type,s=i.pendingProps,h=Eu($e.current).createElement(u),h[kt]=i,h[jt]=s,Ot(h,u,s),vt(h),i.stateNode=h):i.memoizedState=cv(i.type,s.memoizedProps,i.pendingProps,s.memoizedState),null;case 27:return Wi(i),s===null&&Ie&&(h=i.stateNode=ov(i.type,i.pendingProps,$e.current),Rt=i,An=!0,g=Je,us(i.type)?(dh=g,Je=In(h.firstChild)):Je=g),At(s,i,i.pendingProps.children,u),cu(s,i),s===null&&(i.flags|=4194304),i.child;case 5:return s===null&&Ie&&((g=h=Je)&&(h=rk(h,i.type,i.pendingProps,An),h!==null?(i.stateNode=h,Rt=i,Je=In(h.firstChild),An=!1,g=!0):g=!1),g||Ka(i)),Wi(i),g=i.type,b=i.pendingProps,N=s!==null?s.memoizedProps:null,h=b.children,oh(g,b)?h=null:N!==null&&oh(g,N)&&(i.flags|=32),i.memoizedState!==null&&(g=id(s,i,vE,null,null,u),Lo._currentValue=g),cu(s,i),At(s,i,h,u),i.child;case 6:return s===null&&Ie&&((s=u=Je)&&(u=ik(u,i.pendingProps,An),u!==null?(i.stateNode=u,Rt=i,Je=null,s=!0):s=!1),s||Ka(i)),null;case 13:return Y1(s,i,u);case 4:return Ht(i,i.stateNode.containerInfo),h=i.pendingProps,s===null?i.child=js(i,null,h,u):At(s,i,h,u),i.child;case 11:return M1(s,i,i.type,i.pendingProps,u);case 7:return At(s,i,i.pendingProps,u),i.child;case 8:return At(s,i,i.pendingProps.children,u),i.child;case 12:return At(s,i,i.pendingProps.children,u),i.child;case 10:return h=i.pendingProps,Ya(i,i.type,h.value),At(s,i,h.children,u),i.child;case 9:return g=i.type._context,h=i.pendingProps.children,Gs(i),g=_t(g),h=h(g),i.flags|=1,At(s,i,h,u),i.child;case 14:return P1(s,i,i.type,i.pendingProps,u);case 15:return G1(s,i,i.type,i.pendingProps,u);case 19:return Z1(s,i,u);case 31:return kE(s,i,u);case 22:return H1(s,i,u,i.pendingProps);case 24:return Gs(i),h=_t(dt),s===null?(g=Yf(),g===null&&(g=Ke,b=Xf(),g.pooledCache=b,b.refCount++,b!==null&&(g.pooledCacheLanes|=u),g=b),i.memoizedState={parent:h,cache:g},Zf(i),Ya(i,dt,g)):((s.lanes&u)!==0&&(Jf(s,i),mo(i,null,null,u),po()),g=s.memoizedState,b=i.memoizedState,g.parent!==h?(g={parent:h,cache:h},i.memoizedState=g,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=g),Ya(i,dt,h)):(h=b.cache,Ya(i,dt,h),h!==g.cache&&jf(i,[dt],u,!0))),At(s,i,i.pendingProps.children,u),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ca(s){s.flags|=4}function Dd(s,i,u,h,g){if((i=(s.mode&32)!==0)&&(i=!1),i){if(s.flags|=16777216,(g&335544128)===g)if(s.stateNode.complete)s.flags|=8192;else if($x())s.flags|=8192;else throw qs=Kl,Qf}else s.flags&=-16777217}function ex(s,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)s.flags&=-16777217;else if(s.flags|=16777216,!mv(i))if($x())s.flags|=8192;else throw qs=Kl,Qf}function du(s,i){i!==null&&(s.flags|=4),s.flags&16384&&(i=s.tag!==22?I0():536870912,s.lanes|=i,ti|=i)}function wo(s,i){if(!Ie)switch(s.tailMode){case"hidden":i=s.tail;for(var u=null;i!==null;)i.alternate!==null&&(u=i),i=i.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var h=null;u!==null;)u.alternate!==null&&(h=u),u=u.sibling;h===null?i||s.tail===null?s.tail=null:s.tail.sibling=null:h.sibling=null}}function et(s){var i=s.alternate!==null&&s.alternate.child===s.child,u=0,h=0;if(i)for(var g=s.child;g!==null;)u|=g.lanes|g.childLanes,h|=g.subtreeFlags&65011712,h|=g.flags&65011712,g.return=s,g=g.sibling;else for(g=s.child;g!==null;)u|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=s,g=g.sibling;return s.subtreeFlags|=h,s.childLanes=u,i}function _E(s,i,u){var h=i.pendingProps;switch(Pf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(i),null;case 1:return et(i),null;case 3:return u=i.stateNode,h=null,s!==null&&(h=s.memoizedState.cache),i.memoizedState.cache!==h&&(i.flags|=2048),va(dt),ut(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(s===null||s.child===null)&&(Pr(i)?Ca(i):s===null||s.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hf())),et(i),null;case 26:var g=i.type,b=i.memoizedState;return s===null?(Ca(i),b!==null?(et(i),ex(i,b)):(et(i),Dd(i,g,null,h,u))):b?b!==s.memoizedState?(Ca(i),et(i),ex(i,b)):(et(i),i.flags&=-16777217):(s=s.memoizedProps,s!==h&&Ca(i),et(i),Dd(i,g,s,h,u)),null;case 27:if(Tl(i),u=$e.current,g=i.type,s!==null&&i.stateNode!=null)s.memoizedProps!==h&&Ca(i);else{if(!h){if(i.stateNode===null)throw Error(a(166));return et(i),null}s=he.current,Pr(i)?Ib(i):(s=ov(g,h,u),i.stateNode=s,Ca(i))}return et(i),null;case 5:if(Tl(i),g=i.type,s!==null&&i.stateNode!=null)s.memoizedProps!==h&&Ca(i);else{if(!h){if(i.stateNode===null)throw Error(a(166));return et(i),null}if(b=he.current,Pr(i))Ib(i);else{var N=Eu($e.current);switch(b){case 1:b=N.createElementNS("http://www.w3.org/2000/svg",g);break;case 2:b=N.createElementNS("http://www.w3.org/1998/Math/MathML",g);break;default:switch(g){case"svg":b=N.createElementNS("http://www.w3.org/2000/svg",g);break;case"math":b=N.createElementNS("http://www.w3.org/1998/Math/MathML",g);break;case"script":b=N.createElement("div"),b.innerHTML="<script><\/script>",b=b.removeChild(b.firstChild);break;case"select":b=typeof h.is=="string"?N.createElement("select",{is:h.is}):N.createElement("select"),h.multiple?b.multiple=!0:h.size&&(b.size=h.size);break;default:b=typeof h.is=="string"?N.createElement(g,{is:h.is}):N.createElement(g)}}b[kt]=i,b[jt]=h;e:for(N=i.child;N!==null;){if(N.tag===5||N.tag===6)b.appendChild(N.stateNode);else if(N.tag!==4&&N.tag!==27&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===i)break e;for(;N.sibling===null;){if(N.return===null||N.return===i)break e;N=N.return}N.sibling.return=N.return,N=N.sibling}i.stateNode=b;e:switch(Ot(b,g,h),g){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}h&&Ca(i)}}return et(i),Dd(i,i.type,s===null?null:s.memoizedProps,i.pendingProps,u),null;case 6:if(s&&i.stateNode!=null)s.memoizedProps!==h&&Ca(i);else{if(typeof h!="string"&&i.stateNode===null)throw Error(a(166));if(s=$e.current,Pr(i)){if(s=i.stateNode,u=i.memoizedProps,h=null,g=Rt,g!==null)switch(g.tag){case 27:case 5:h=g.memoizedProps}s[kt]=i,s=!!(s.nodeValue===u||h!==null&&h.suppressHydrationWarning===!0||Yx(s.nodeValue,u)),s||Ka(i,!0)}else s=Eu(s).createTextNode(h),s[kt]=i,i.stateNode=s}return et(i),null;case 31:if(u=i.memoizedState,s===null||s.memoizedState!==null){if(h=Pr(i),u!==null){if(s===null){if(!h)throw Error(a(318));if(s=i.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(557));s[kt]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;et(i),s=!1}else u=Hf(),s!==null&&s.memoizedState!==null&&(s.memoizedState.hydrationErrors=u),s=!0;if(!s)return i.flags&256?(pn(i),i):(pn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return et(i),null;case 13:if(h=i.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(g=Pr(i),h!==null&&h.dehydrated!==null){if(s===null){if(!g)throw Error(a(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(a(317));g[kt]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;et(i),g=!1}else g=Hf(),s!==null&&s.memoizedState!==null&&(s.memoizedState.hydrationErrors=g),g=!0;if(!g)return i.flags&256?(pn(i),i):(pn(i),null)}return pn(i),(i.flags&128)!==0?(i.lanes=u,i):(u=h!==null,s=s!==null&&s.memoizedState!==null,u&&(h=i.child,g=null,h.alternate!==null&&h.alternate.memoizedState!==null&&h.alternate.memoizedState.cachePool!==null&&(g=h.alternate.memoizedState.cachePool.pool),b=null,h.memoizedState!==null&&h.memoizedState.cachePool!==null&&(b=h.memoizedState.cachePool.pool),b!==g&&(h.flags|=2048)),u!==s&&u&&(i.child.flags|=8192),du(i,i.updateQueue),et(i),null);case 4:return ut(),s===null&&nh(i.stateNode.containerInfo),et(i),null;case 10:return va(i.type),et(i),null;case 19:if(Q(ct),h=i.memoizedState,h===null)return et(i),null;if(g=(i.flags&128)!==0,b=h.rendering,b===null)if(g)wo(h,!1);else{if(lt!==0||s!==null&&(s.flags&128)!==0)for(s=i.child;s!==null;){if(b=Jl(s),b!==null){for(i.flags|=128,wo(h,!1),s=b.updateQueue,i.updateQueue=s,du(i,s),i.subtreeFlags=0,s=u,u=i.child;u!==null;)kb(u,s),u=u.sibling;return re(ct,ct.current&1|2),Ie&&ba(i,h.treeForkCount),i.child}s=s.sibling}h.tail!==null&&ln()>yu&&(i.flags|=128,g=!0,wo(h,!1),i.lanes=4194304)}else{if(!g)if(s=Jl(b),s!==null){if(i.flags|=128,g=!0,s=s.updateQueue,i.updateQueue=s,du(i,s),wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!Ie)return et(i),null}else 2*ln()-h.renderingStartTime>yu&&u!==536870912&&(i.flags|=128,g=!0,wo(h,!1),i.lanes=4194304);h.isBackwards?(b.sibling=i.child,i.child=b):(s=h.last,s!==null?s.sibling=b:i.child=b,h.last=b)}return h.tail!==null?(s=h.tail,h.rendering=s,h.tail=s.sibling,h.renderingStartTime=ln(),s.sibling=null,u=ct.current,re(ct,g?u&1|2:u&1),Ie&&ba(i,h.treeForkCount),s):(et(i),null);case 22:case 23:return pn(i),ad(),h=i.memoizedState!==null,s!==null?s.memoizedState!==null!==h&&(i.flags|=8192):h&&(i.flags|=8192),h?(u&536870912)!==0&&(i.flags&128)===0&&(et(i),i.subtreeFlags&6&&(i.flags|=8192)):et(i),u=i.updateQueue,u!==null&&du(i,u.retryQueue),u=null,s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),h=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(h=i.memoizedState.cachePool.pool),h!==u&&(i.flags|=2048),s!==null&&Q(Hs),null;case 24:return u=null,s!==null&&(u=s.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),va(dt),et(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function AE(s,i){switch(Pf(i),i.tag){case 1:return s=i.flags,s&65536?(i.flags=s&-65537|128,i):null;case 3:return va(dt),ut(),s=i.flags,(s&65536)!==0&&(s&128)===0?(i.flags=s&-65537|128,i):null;case 26:case 27:case 5:return Tl(i),null;case 31:if(i.memoizedState!==null){if(pn(i),i.alternate===null)throw Error(a(340));Ms()}return s=i.flags,s&65536?(i.flags=s&-65537|128,i):null;case 13:if(pn(i),s=i.memoizedState,s!==null&&s.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ms()}return s=i.flags,s&65536?(i.flags=s&-65537|128,i):null;case 19:return Q(ct),null;case 4:return ut(),null;case 10:return va(i.type),null;case 22:case 23:return pn(i),ad(),s!==null&&Q(Hs),s=i.flags,s&65536?(i.flags=s&-65537|128,i):null;case 24:return va(dt),null;case 25:return null;default:return null}}function tx(s,i){switch(Pf(i),i.tag){case 3:va(dt),ut();break;case 26:case 27:case 5:Tl(i);break;case 4:ut();break;case 31:i.memoizedState!==null&&pn(i);break;case 13:pn(i);break;case 19:Q(ct);break;case 10:va(i.type);break;case 22:case 23:pn(i),ad(),s!==null&&Q(Hs);break;case 24:va(dt)}}function So(s,i){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var g=h.next;u=g;do{if((u.tag&s)===s){h=void 0;var b=u.create,N=u.inst;h=b(),N.destroy=h}u=u.next}while(u!==g)}}catch(E){Ge(i,i.return,E)}}function ns(s,i,u){try{var h=i.updateQueue,g=h!==null?h.lastEffect:null;if(g!==null){var b=g.next;h=b;do{if((h.tag&s)===s){var N=h.inst,E=N.destroy;if(E!==void 0){N.destroy=void 0,g=i;var D=u,W=E;try{W()}catch(J){Ge(g,D,J)}}}h=h.next}while(h!==b)}}catch(J){Ge(i,i.return,J)}}function nx(s){var i=s.updateQueue;if(i!==null){var u=s.stateNode;try{qb(i,u)}catch(h){Ge(s,s.return,h)}}}function ax(s,i,u){u.props=Ks(s.type,s.memoizedProps),u.state=s.memoizedState;try{u.componentWillUnmount()}catch(h){Ge(s,i,h)}}function To(s,i){try{var u=s.ref;if(u!==null){switch(s.tag){case 26:case 27:case 5:var h=s.stateNode;break;case 30:h=s.stateNode;break;default:h=s.stateNode}typeof u=="function"?s.refCleanup=u(h):u.current=h}}catch(g){Ge(s,i,g)}}function oa(s,i){var u=s.ref,h=s.refCleanup;if(u!==null)if(typeof h=="function")try{h()}catch(g){Ge(s,i,g)}finally{s.refCleanup=null,s=s.alternate,s!=null&&(s.refCleanup=null)}else if(typeof u=="function")try{u(null)}catch(g){Ge(s,i,g)}else u.current=null}function sx(s){var i=s.type,u=s.memoizedProps,h=s.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":u.autoFocus&&h.focus();break e;case"img":u.src?h.src=u.src:u.srcSet&&(h.srcset=u.srcSet)}}catch(g){Ge(s,s.return,g)}}function Ld(s,i,u){try{var h=s.stateNode;JE(h,s.type,u,i),h[jt]=i}catch(g){Ge(s,s.return,g)}}function rx(s){return s.tag===5||s.tag===3||s.tag===26||s.tag===27&&us(s.type)||s.tag===4}function Fd(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||rx(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.tag===27&&us(s.type)||s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Bd(s,i,u){var h=s.tag;if(h===5||h===6)s=s.stateNode,i?(u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u).insertBefore(s,i):(i=u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u,i.appendChild(s),u=u._reactRootContainer,u!=null||i.onclick!==null||(i.onclick=ma));else if(h!==4&&(h===27&&us(s.type)&&(u=s.stateNode,i=null),s=s.child,s!==null))for(Bd(s,i,u),s=s.sibling;s!==null;)Bd(s,i,u),s=s.sibling}function hu(s,i,u){var h=s.tag;if(h===5||h===6)s=s.stateNode,i?u.insertBefore(s,i):u.appendChild(s);else if(h!==4&&(h===27&&us(s.type)&&(u=s.stateNode),s=s.child,s!==null))for(hu(s,i,u),s=s.sibling;s!==null;)hu(s,i,u),s=s.sibling}function ix(s){var i=s.stateNode,u=s.memoizedProps;try{for(var h=s.type,g=i.attributes;g.length;)i.removeAttributeNode(g[0]);Ot(i,h,u),i[kt]=s,i[jt]=u}catch(b){Ge(s,s.return,b)}}var Na=!1,mt=!1,zd=!1,ox=typeof WeakSet=="function"?WeakSet:Set,wt=null;function OE(s,i){if(s=s.containerInfo,rh=Du,s=xb(s),Af(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var h=u.getSelection&&u.getSelection();if(h&&h.rangeCount!==0){u=h.anchorNode;var g=h.anchorOffset,b=h.focusNode;h=h.focusOffset;try{u.nodeType,b.nodeType}catch{u=null;break e}var N=0,E=-1,D=-1,W=0,J=0,ne=s,K=null;t:for(;;){for(var Y;ne!==u||g!==0&&ne.nodeType!==3||(E=N+g),ne!==b||h!==0&&ne.nodeType!==3||(D=N+h),ne.nodeType===3&&(N+=ne.nodeValue.length),(Y=ne.firstChild)!==null;)K=ne,ne=Y;for(;;){if(ne===s)break t;if(K===u&&++W===g&&(E=N),K===b&&++J===h&&(D=N),(Y=ne.nextSibling)!==null)break;ne=K,K=ne.parentNode}ne=Y}u=E===-1||D===-1?null:{start:E,end:D}}else u=null}u=u||{start:0,end:0}}else u=null;for(ih={focusedElem:s,selectionRange:u},Du=!1,wt=i;wt!==null;)if(i=wt,s=i.child,(i.subtreeFlags&1028)!==0&&s!==null)s.return=i,wt=s;else for(;wt!==null;){switch(i=wt,b=i.alternate,s=i.flags,i.tag){case 0:if((s&4)!==0&&(s=i.updateQueue,s=s!==null?s.events:null,s!==null))for(u=0;u<s.length;u++)g=s[u],g.ref.impl=g.nextImpl;break;case 11:case 15:break;case 1:if((s&1024)!==0&&b!==null){s=void 0,u=i,g=b.memoizedProps,b=b.memoizedState,h=u.stateNode;try{var pe=Ks(u.type,g);s=h.getSnapshotBeforeUpdate(pe,b),h.__reactInternalSnapshotBeforeUpdate=s}catch(ve){Ge(u,u.return,ve)}}break;case 3:if((s&1024)!==0){if(s=i.stateNode.containerInfo,u=s.nodeType,u===9)uh(s);else if(u===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":uh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((s&1024)!==0)throw Error(a(163))}if(s=i.sibling,s!==null){s.return=i.return,wt=s;break}wt=i.return}}function lx(s,i,u){var h=u.flags;switch(u.tag){case 0:case 11:case 15:Ea(s,u),h&4&&So(5,u);break;case 1:if(Ea(s,u),h&4)if(s=u.stateNode,i===null)try{s.componentDidMount()}catch(N){Ge(u,u.return,N)}else{var g=Ks(u.type,i.memoizedProps);i=i.memoizedState;try{s.componentDidUpdate(g,i,s.__reactInternalSnapshotBeforeUpdate)}catch(N){Ge(u,u.return,N)}}h&64&&nx(u),h&512&&To(u,u.return);break;case 3:if(Ea(s,u),h&64&&(s=u.updateQueue,s!==null)){if(i=null,u.child!==null)switch(u.child.tag){case 27:case 5:i=u.child.stateNode;break;case 1:i=u.child.stateNode}try{qb(s,i)}catch(N){Ge(u,u.return,N)}}break;case 27:i===null&&h&4&&ix(u);case 26:case 5:Ea(s,u),i===null&&h&4&&sx(u),h&512&&To(u,u.return);break;case 12:Ea(s,u);break;case 31:Ea(s,u),h&4&&fx(s,u);break;case 13:Ea(s,u),h&4&&dx(s,u),h&64&&(s=u.memoizedState,s!==null&&(s=s.dehydrated,s!==null&&(u=ME.bind(null,u),ok(s,u))));break;case 22:if(h=u.memoizedState!==null||Na,!h){i=i!==null&&i.memoizedState!==null||mt,g=Na;var b=mt;Na=h,(mt=i)&&!b?ka(s,u,(u.subtreeFlags&8772)!==0):Ea(s,u),Na=g,mt=b}break;case 30:break;default:Ea(s,u)}}function ux(s){var i=s.alternate;i!==null&&(s.alternate=null,ux(i)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(i=s.stateNode,i!==null&&pf(i)),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}var nt=null,Kt=!1;function $a(s,i,u){for(u=u.child;u!==null;)cx(s,i,u),u=u.sibling}function cx(s,i,u){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(qi,u)}catch{}switch(u.tag){case 26:mt||oa(u,i),$a(s,i,u),u.memoizedState?u.memoizedState.count--:u.stateNode&&(u=u.stateNode,u.parentNode.removeChild(u));break;case 27:mt||oa(u,i);var h=nt,g=Kt;us(u.type)&&(nt=u.stateNode,Kt=!1),$a(s,i,u),Oo(u.stateNode),nt=h,Kt=g;break;case 5:mt||oa(u,i);case 6:if(h=nt,g=Kt,nt=null,$a(s,i,u),nt=h,Kt=g,nt!==null)if(Kt)try{(nt.nodeType===9?nt.body:nt.nodeName==="HTML"?nt.ownerDocument.body:nt).removeChild(u.stateNode)}catch(b){Ge(u,i,b)}else try{nt.removeChild(u.stateNode)}catch(b){Ge(u,i,b)}break;case 18:nt!==null&&(Kt?(s=nt,nv(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,u.stateNode),ui(s)):nv(nt,u.stateNode));break;case 4:h=nt,g=Kt,nt=u.stateNode.containerInfo,Kt=!0,$a(s,i,u),nt=h,Kt=g;break;case 0:case 11:case 14:case 15:ns(2,u,i),mt||ns(4,u,i),$a(s,i,u);break;case 1:mt||(oa(u,i),h=u.stateNode,typeof h.componentWillUnmount=="function"&&ax(u,i,h)),$a(s,i,u);break;case 21:$a(s,i,u);break;case 22:mt=(h=mt)||u.memoizedState!==null,$a(s,i,u),mt=h;break;default:$a(s,i,u)}}function fx(s,i){if(i.memoizedState===null&&(s=i.alternate,s!==null&&(s=s.memoizedState,s!==null))){s=s.dehydrated;try{ui(s)}catch(u){Ge(i,i.return,u)}}}function dx(s,i){if(i.memoizedState===null&&(s=i.alternate,s!==null&&(s=s.memoizedState,s!==null&&(s=s.dehydrated,s!==null))))try{ui(s)}catch(u){Ge(i,i.return,u)}}function IE(s){switch(s.tag){case 31:case 13:case 19:var i=s.stateNode;return i===null&&(i=s.stateNode=new ox),i;case 22:return s=s.stateNode,i=s._retryCache,i===null&&(i=s._retryCache=new ox),i;default:throw Error(a(435,s.tag))}}function pu(s,i){var u=IE(s);i.forEach(function(h){if(!u.has(h)){u.add(h);var g=PE.bind(null,s,h);h.then(g,g)}})}function Yt(s,i){var u=i.deletions;if(u!==null)for(var h=0;h<u.length;h++){var g=u[h],b=s,N=i,E=N;e:for(;E!==null;){switch(E.tag){case 27:if(us(E.type)){nt=E.stateNode,Kt=!1;break e}break;case 5:nt=E.stateNode,Kt=!1;break e;case 3:case 4:nt=E.stateNode.containerInfo,Kt=!0;break e}E=E.return}if(nt===null)throw Error(a(160));cx(b,N,g),nt=null,Kt=!1,b=g.alternate,b!==null&&(b.return=null),g.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)hx(i,s),i=i.sibling}var Wn=null;function hx(s,i){var u=s.alternate,h=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:Yt(i,s),Qt(s),h&4&&(ns(3,s,s.return),So(3,s),ns(5,s,s.return));break;case 1:Yt(i,s),Qt(s),h&512&&(mt||u===null||oa(u,u.return)),h&64&&Na&&(s=s.updateQueue,s!==null&&(h=s.callbacks,h!==null&&(u=s.shared.hiddenCallbacks,s.shared.hiddenCallbacks=u===null?h:u.concat(h))));break;case 26:var g=Wn;if(Yt(i,s),Qt(s),h&512&&(mt||u===null||oa(u,u.return)),h&4){var b=u!==null?u.memoizedState:null;if(h=s.memoizedState,u===null)if(h===null)if(s.stateNode===null){e:{h=s.type,u=s.memoizedProps,g=g.ownerDocument||g;t:switch(h){case"title":b=g.getElementsByTagName("title")[0],(!b||b[Ki]||b[kt]||b.namespaceURI==="http://www.w3.org/2000/svg"||b.hasAttribute("itemprop"))&&(b=g.createElement(h),g.head.insertBefore(b,g.querySelector("head > title"))),Ot(b,h,u),b[kt]=s,vt(b),h=b;break e;case"link":var N=hv("link","href",g).get(h+(u.href||""));if(N){for(var E=0;E<N.length;E++)if(b=N[E],b.getAttribute("href")===(u.href==null||u.href===""?null:u.href)&&b.getAttribute("rel")===(u.rel==null?null:u.rel)&&b.getAttribute("title")===(u.title==null?null:u.title)&&b.getAttribute("crossorigin")===(u.crossOrigin==null?null:u.crossOrigin)){N.splice(E,1);break t}}b=g.createElement(h),Ot(b,h,u),g.head.appendChild(b);break;case"meta":if(N=hv("meta","content",g).get(h+(u.content||""))){for(E=0;E<N.length;E++)if(b=N[E],b.getAttribute("content")===(u.content==null?null:""+u.content)&&b.getAttribute("name")===(u.name==null?null:u.name)&&b.getAttribute("property")===(u.property==null?null:u.property)&&b.getAttribute("http-equiv")===(u.httpEquiv==null?null:u.httpEquiv)&&b.getAttribute("charset")===(u.charSet==null?null:u.charSet)){N.splice(E,1);break t}}b=g.createElement(h),Ot(b,h,u),g.head.appendChild(b);break;default:throw Error(a(468,h))}b[kt]=s,vt(b),h=b}s.stateNode=h}else pv(g,s.type,s.stateNode);else s.stateNode=dv(g,h,s.memoizedProps);else b!==h?(b===null?u.stateNode!==null&&(u=u.stateNode,u.parentNode.removeChild(u)):b.count--,h===null?pv(g,s.type,s.stateNode):dv(g,h,s.memoizedProps)):h===null&&s.stateNode!==null&&Ld(s,s.memoizedProps,u.memoizedProps)}break;case 27:Yt(i,s),Qt(s),h&512&&(mt||u===null||oa(u,u.return)),u!==null&&h&4&&Ld(s,s.memoizedProps,u.memoizedProps);break;case 5:if(Yt(i,s),Qt(s),h&512&&(mt||u===null||oa(u,u.return)),s.flags&32){g=s.stateNode;try{Or(g,"")}catch(pe){Ge(s,s.return,pe)}}h&4&&s.stateNode!=null&&(g=s.memoizedProps,Ld(s,g,u!==null?u.memoizedProps:g)),h&1024&&(zd=!0);break;case 6:if(Yt(i,s),Qt(s),h&4){if(s.stateNode===null)throw Error(a(162));h=s.memoizedProps,u=s.stateNode;try{u.nodeValue=h}catch(pe){Ge(s,s.return,pe)}}break;case 3:if(_u=null,g=Wn,Wn=ku(i.containerInfo),Yt(i,s),Wn=g,Qt(s),h&4&&u!==null&&u.memoizedState.isDehydrated)try{ui(i.containerInfo)}catch(pe){Ge(s,s.return,pe)}zd&&(zd=!1,px(s));break;case 4:h=Wn,Wn=ku(s.stateNode.containerInfo),Yt(i,s),Qt(s),Wn=h;break;case 12:Yt(i,s),Qt(s);break;case 31:Yt(i,s),Qt(s),h&4&&(h=s.updateQueue,h!==null&&(s.updateQueue=null,pu(s,h)));break;case 13:Yt(i,s),Qt(s),s.child.flags&8192&&s.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(gu=ln()),h&4&&(h=s.updateQueue,h!==null&&(s.updateQueue=null,pu(s,h)));break;case 22:g=s.memoizedState!==null;var D=u!==null&&u.memoizedState!==null,W=Na,J=mt;if(Na=W||g,mt=J||D,Yt(i,s),mt=J,Na=W,Qt(s),h&8192)e:for(i=s.stateNode,i._visibility=g?i._visibility&-2:i._visibility|1,g&&(u===null||D||Na||mt||Ys(s)),u=null,i=s;;){if(i.tag===5||i.tag===26){if(u===null){D=u=i;try{if(b=D.stateNode,g)N=b.style,typeof N.setProperty=="function"?N.setProperty("display","none","important"):N.display="none";else{E=D.stateNode;var ne=D.memoizedProps.style,K=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;E.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(pe){Ge(D,D.return,pe)}}}else if(i.tag===6){if(u===null){D=i;try{D.stateNode.nodeValue=g?"":D.memoizedProps}catch(pe){Ge(D,D.return,pe)}}}else if(i.tag===18){if(u===null){D=i;try{var Y=D.stateNode;g?av(Y,!0):av(D.stateNode,!1)}catch(pe){Ge(D,D.return,pe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===s)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;u===i&&(u=null),i=i.return}u===i&&(u=null),i.sibling.return=i.return,i=i.sibling}h&4&&(h=s.updateQueue,h!==null&&(u=h.retryQueue,u!==null&&(h.retryQueue=null,pu(s,u))));break;case 19:Yt(i,s),Qt(s),h&4&&(h=s.updateQueue,h!==null&&(s.updateQueue=null,pu(s,h)));break;case 30:break;case 21:break;default:Yt(i,s),Qt(s)}}function Qt(s){var i=s.flags;if(i&2){try{for(var u,h=s.return;h!==null;){if(rx(h)){u=h;break}h=h.return}if(u==null)throw Error(a(160));switch(u.tag){case 27:var g=u.stateNode,b=Fd(s);hu(s,b,g);break;case 5:var N=u.stateNode;u.flags&32&&(Or(N,""),u.flags&=-33);var E=Fd(s);hu(s,E,N);break;case 3:case 4:var D=u.stateNode.containerInfo,W=Fd(s);Bd(s,W,D);break;default:throw Error(a(161))}}catch(J){Ge(s,s.return,J)}s.flags&=-3}i&4096&&(s.flags&=-4097)}function px(s){if(s.subtreeFlags&1024)for(s=s.child;s!==null;){var i=s;px(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),s=s.sibling}}function Ea(s,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)lx(s,i.alternate,i),i=i.sibling}function Ys(s){for(s=s.child;s!==null;){var i=s;switch(i.tag){case 0:case 11:case 14:case 15:ns(4,i,i.return),Ys(i);break;case 1:oa(i,i.return);var u=i.stateNode;typeof u.componentWillUnmount=="function"&&ax(i,i.return,u),Ys(i);break;case 27:Oo(i.stateNode);case 26:case 5:oa(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}s=s.sibling}}function ka(s,i,u){for(u=u&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var h=i.alternate,g=s,b=i,N=b.flags;switch(b.tag){case 0:case 11:case 15:ka(g,b,u),So(4,b);break;case 1:if(ka(g,b,u),h=b,g=h.stateNode,typeof g.componentDidMount=="function")try{g.componentDidMount()}catch(W){Ge(h,h.return,W)}if(h=b,g=h.updateQueue,g!==null){var E=h.stateNode;try{var D=g.shared.hiddenCallbacks;if(D!==null)for(g.shared.hiddenCallbacks=null,g=0;g<D.length;g++)Wb(D[g],E)}catch(W){Ge(h,h.return,W)}}u&&N&64&&nx(b),To(b,b.return);break;case 27:ix(b);case 26:case 5:ka(g,b,u),u&&h===null&&N&4&&sx(b),To(b,b.return);break;case 12:ka(g,b,u);break;case 31:ka(g,b,u),u&&N&4&&fx(g,b);break;case 13:ka(g,b,u),u&&N&4&&dx(g,b);break;case 22:b.memoizedState===null&&ka(g,b,u),To(b,b.return);break;case 30:break;default:ka(g,b,u)}i=i.sibling}}function Ud(s,i){var u=null;s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==u&&(s!=null&&s.refCount++,u!=null&&lo(u))}function Vd(s,i){s=null,i.alternate!==null&&(s=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==s&&(i.refCount++,s!=null&&lo(s))}function qn(s,i,u,h){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)mx(s,i,u,h),i=i.sibling}function mx(s,i,u,h){var g=i.flags;switch(i.tag){case 0:case 11:case 15:qn(s,i,u,h),g&2048&&So(9,i);break;case 1:qn(s,i,u,h);break;case 3:qn(s,i,u,h),g&2048&&(s=null,i.alternate!==null&&(s=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==s&&(i.refCount++,s!=null&&lo(s)));break;case 12:if(g&2048){qn(s,i,u,h),s=i.stateNode;try{var b=i.memoizedProps,N=b.id,E=b.onPostCommit;typeof E=="function"&&E(N,i.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(D){Ge(i,i.return,D)}}else qn(s,i,u,h);break;case 31:qn(s,i,u,h);break;case 13:qn(s,i,u,h);break;case 23:break;case 22:b=i.stateNode,N=i.alternate,i.memoizedState!==null?b._visibility&2?qn(s,i,u,h):Co(s,i):b._visibility&2?qn(s,i,u,h):(b._visibility|=2,Zr(s,i,u,h,(i.subtreeFlags&10256)!==0||!1)),g&2048&&Ud(N,i);break;case 24:qn(s,i,u,h),g&2048&&Vd(i.alternate,i);break;default:qn(s,i,u,h)}}function Zr(s,i,u,h,g){for(g=g&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var b=s,N=i,E=u,D=h,W=N.flags;switch(N.tag){case 0:case 11:case 15:Zr(b,N,E,D,g),So(8,N);break;case 23:break;case 22:var J=N.stateNode;N.memoizedState!==null?J._visibility&2?Zr(b,N,E,D,g):Co(b,N):(J._visibility|=2,Zr(b,N,E,D,g)),g&&W&2048&&Ud(N.alternate,N);break;case 24:Zr(b,N,E,D,g),g&&W&2048&&Vd(N.alternate,N);break;default:Zr(b,N,E,D,g)}i=i.sibling}}function Co(s,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var u=s,h=i,g=h.flags;switch(h.tag){case 22:Co(u,h),g&2048&&Ud(h.alternate,h);break;case 24:Co(u,h),g&2048&&Vd(h.alternate,h);break;default:Co(u,h)}i=i.sibling}}var No=8192;function Jr(s,i,u){if(s.subtreeFlags&No)for(s=s.child;s!==null;)gx(s,i,u),s=s.sibling}function gx(s,i,u){switch(s.tag){case 26:Jr(s,i,u),s.flags&No&&s.memoizedState!==null&&xk(u,Wn,s.memoizedState,s.memoizedProps);break;case 5:Jr(s,i,u);break;case 3:case 4:var h=Wn;Wn=ku(s.stateNode.containerInfo),Jr(s,i,u),Wn=h;break;case 22:s.memoizedState===null&&(h=s.alternate,h!==null&&h.memoizedState!==null?(h=No,No=16777216,Jr(s,i,u),No=h):Jr(s,i,u));break;default:Jr(s,i,u)}}function yx(s){var i=s.alternate;if(i!==null&&(s=i.child,s!==null)){i.child=null;do i=s.sibling,s.sibling=null,s=i;while(s!==null)}}function $o(s){var i=s.deletions;if((s.flags&16)!==0){if(i!==null)for(var u=0;u<i.length;u++){var h=i[u];wt=h,xx(h,s)}yx(s)}if(s.subtreeFlags&10256)for(s=s.child;s!==null;)bx(s),s=s.sibling}function bx(s){switch(s.tag){case 0:case 11:case 15:$o(s),s.flags&2048&&ns(9,s,s.return);break;case 3:$o(s);break;case 12:$o(s);break;case 22:var i=s.stateNode;s.memoizedState!==null&&i._visibility&2&&(s.return===null||s.return.tag!==13)?(i._visibility&=-3,mu(s)):$o(s);break;default:$o(s)}}function mu(s){var i=s.deletions;if((s.flags&16)!==0){if(i!==null)for(var u=0;u<i.length;u++){var h=i[u];wt=h,xx(h,s)}yx(s)}for(s=s.child;s!==null;){switch(i=s,i.tag){case 0:case 11:case 15:ns(8,i,i.return),mu(i);break;case 22:u=i.stateNode,u._visibility&2&&(u._visibility&=-3,mu(i));break;default:mu(i)}s=s.sibling}}function xx(s,i){for(;wt!==null;){var u=wt;switch(u.tag){case 0:case 11:case 15:ns(8,u,i);break;case 23:case 22:if(u.memoizedState!==null&&u.memoizedState.cachePool!==null){var h=u.memoizedState.cachePool.pool;h!=null&&h.refCount++}break;case 24:lo(u.memoizedState.cache)}if(h=u.child,h!==null)h.return=u,wt=h;else e:for(u=s;wt!==null;){h=wt;var g=h.sibling,b=h.return;if(ux(h),h===u){wt=null;break e}if(g!==null){g.return=b,wt=g;break e}wt=b}}}var DE={getCacheForType:function(s){var i=_t(dt),u=i.data.get(s);return u===void 0&&(u=s(),i.data.set(s,u)),u},cacheSignal:function(){return _t(dt).controller.signal}},LE=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ke=null,ke=null,Ae=0,Pe=0,mn=null,as=!1,ei=!1,Md=!1,Ra=0,lt=0,ss=0,Qs=0,Pd=0,gn=0,ti=0,Eo=null,Zt=null,Gd=!1,gu=0,vx=0,yu=1/0,bu=null,rs=null,gt=0,is=null,ni=null,_a=0,Hd=0,Wd=null,wx=null,ko=0,qd=null;function yn(){return(Ue&2)!==0&&Ae!==0?Ae&-Ae:P.T!==null?Zd():B0()}function Sx(){if(gn===0)if((Ae&536870912)===0||Ie){var s=$l;$l<<=1,($l&3932160)===0&&($l=262144),gn=s}else gn=536870912;return s=hn.current,s!==null&&(s.flags|=32),gn}function Jt(s,i,u){(s===Ke&&(Pe===2||Pe===9)||s.cancelPendingCommit!==null)&&(ai(s,0),os(s,Ae,gn,!1)),Xi(s,u),((Ue&2)===0||s!==Ke)&&(s===Ke&&((Ue&2)===0&&(Qs|=u),lt===4&&os(s,Ae,gn,!1)),la(s))}function Tx(s,i,u){if((Ue&6)!==0)throw Error(a(327));var h=!u&&(i&127)===0&&(i&s.expiredLanes)===0||ji(s,i),g=h?zE(s,i):Xd(s,i,!0),b=h;do{if(g===0){ei&&!h&&os(s,i,0,!1);break}else{if(u=s.current.alternate,b&&!FE(u)){g=Xd(s,i,!1),b=!1;continue}if(g===2){if(b=i,s.errorRecoveryDisabledLanes&b)var N=0;else N=s.pendingLanes&-536870913,N=N!==0?N:N&536870912?536870912:0;if(N!==0){i=N;e:{var E=s;g=Eo;var D=E.current.memoizedState.isDehydrated;if(D&&(ai(E,N).flags|=256),N=Xd(E,N,!1),N!==2){if(Md&&!D){E.errorRecoveryDisabledLanes|=b,Qs|=b,g=4;break e}b=Zt,Zt=g,b!==null&&(Zt===null?Zt=b:Zt.push.apply(Zt,b))}g=N}if(b=!1,g!==2)continue}}if(g===1){ai(s,0),os(s,i,0,!0);break}e:{switch(h=s,b=g,b){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:os(h,i,gn,!as);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(g=gu+300-ln(),10<g)){if(os(h,i,gn,!as),kl(h,0,!0)!==0)break e;_a=i,h.timeoutHandle=ev(Cx.bind(null,h,u,Zt,bu,Gd,i,gn,Qs,ti,as,b,"Throttled",-0,0),g);break e}Cx(h,u,Zt,bu,Gd,i,gn,Qs,ti,as,b,null,-0,0)}}break}while(!0);la(s)}function Cx(s,i,u,h,g,b,N,E,D,W,J,ne,K,Y){if(s.timeoutHandle=-1,ne=i.subtreeFlags,ne&8192||(ne&16785408)===16785408){ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ma},gx(i,b,ne);var pe=(b&62914560)===b?gu-ln():(b&4194048)===b?vx-ln():0;if(pe=vk(ne,pe),pe!==null){_a=b,s.cancelPendingCommit=pe(Ox.bind(null,s,i,b,u,h,g,N,E,D,J,ne,null,K,Y)),os(s,b,N,!W);return}}Ox(s,i,b,u,h,g,N,E,D)}function FE(s){for(var i=s;;){var u=i.tag;if((u===0||u===11||u===15)&&i.flags&16384&&(u=i.updateQueue,u!==null&&(u=u.stores,u!==null)))for(var h=0;h<u.length;h++){var g=u[h],b=g.getSnapshot;g=g.value;try{if(!fn(b(),g))return!1}catch{return!1}}if(u=i.child,i.subtreeFlags&16384&&u!==null)u.return=i,i=u;else{if(i===s)break;for(;i.sibling===null;){if(i.return===null||i.return===s)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function os(s,i,u,h){i&=~Pd,i&=~Qs,s.suspendedLanes|=i,s.pingedLanes&=~i,h&&(s.warmLanes|=i),h=s.expirationTimes;for(var g=i;0<g;){var b=31-cn(g),N=1<<b;h[b]=-1,g&=~N}u!==0&&D0(s,u,i)}function xu(){return(Ue&6)===0?(Ro(0),!1):!0}function jd(){if(ke!==null){if(Pe===0)var s=ke.return;else s=ke,xa=Ps=null,ud(s),jr=null,co=0,s=ke;for(;s!==null;)tx(s.alternate,s),s=s.return;ke=null}}function ai(s,i){var u=s.timeoutHandle;u!==-1&&(s.timeoutHandle=-1,nk(u)),u=s.cancelPendingCommit,u!==null&&(s.cancelPendingCommit=null,u()),_a=0,jd(),Ke=s,ke=u=ya(s.current,null),Ae=i,Pe=0,mn=null,as=!1,ei=ji(s,i),Md=!1,ti=gn=Pd=Qs=ss=lt=0,Zt=Eo=null,Gd=!1,(i&8)!==0&&(i|=i&32);var h=s.entangledLanes;if(h!==0)for(s=s.entanglements,h&=i;0<h;){var g=31-cn(h),b=1<<g;i|=s[g],h&=~b}return Ra=i,Vl(),u}function Nx(s,i){Ce=null,P.H=xo,i===qr||i===Xl?(i=Mb(),Pe=3):i===Qf?(i=Mb(),Pe=4):Pe=i===Nd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,ke===null&&(lt=1,lu(s,kn(i,s.current)))}function $x(){var s=hn.current;return s===null?!0:(Ae&4194048)===Ae?On===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?s===On:!1}function Ex(){var s=P.H;return P.H=xo,s===null?xo:s}function kx(){var s=P.A;return P.A=DE,s}function vu(){lt=4,as||(Ae&4194048)!==Ae&&hn.current!==null||(ei=!0),(ss&134217727)===0&&(Qs&134217727)===0||Ke===null||os(Ke,Ae,gn,!1)}function Xd(s,i,u){var h=Ue;Ue|=2;var g=Ex(),b=kx();(Ke!==s||Ae!==i)&&(bu=null,ai(s,i)),i=!1;var N=lt;e:do try{if(Pe!==0&&ke!==null){var E=ke,D=mn;switch(Pe){case 8:jd(),N=6;break e;case 3:case 2:case 9:case 6:hn.current===null&&(i=!0);var W=Pe;if(Pe=0,mn=null,si(s,E,D,W),u&&ei){N=0;break e}break;default:W=Pe,Pe=0,mn=null,si(s,E,D,W)}}BE(),N=lt;break}catch(J){Nx(s,J)}while(!0);return i&&s.shellSuspendCounter++,xa=Ps=null,Ue=h,P.H=g,P.A=b,ke===null&&(Ke=null,Ae=0,Vl()),N}function BE(){for(;ke!==null;)Rx(ke)}function zE(s,i){var u=Ue;Ue|=2;var h=Ex(),g=kx();Ke!==s||Ae!==i?(bu=null,yu=ln()+500,ai(s,i)):ei=ji(s,i);e:do try{if(Pe!==0&&ke!==null){i=ke;var b=mn;t:switch(Pe){case 1:Pe=0,mn=null,si(s,i,b,1);break;case 2:case 9:if(Ub(b)){Pe=0,mn=null,_x(i);break}i=function(){Pe!==2&&Pe!==9||Ke!==s||(Pe=7),la(s)},b.then(i,i);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:Ub(b)?(Pe=0,mn=null,_x(i)):(Pe=0,mn=null,si(s,i,b,7));break;case 5:var N=null;switch(ke.tag){case 26:N=ke.memoizedState;case 5:case 27:var E=ke;if(N?mv(N):E.stateNode.complete){Pe=0,mn=null;var D=E.sibling;if(D!==null)ke=D;else{var W=E.return;W!==null?(ke=W,wu(W)):ke=null}break t}}Pe=0,mn=null,si(s,i,b,5);break;case 6:Pe=0,mn=null,si(s,i,b,6);break;case 8:jd(),lt=6;break e;default:throw Error(a(462))}}UE();break}catch(J){Nx(s,J)}while(!0);return xa=Ps=null,P.H=h,P.A=g,Ue=u,ke!==null?0:(Ke=null,Ae=0,Vl(),lt)}function UE(){for(;ke!==null&&!l$();)Rx(ke)}function Rx(s){var i=J1(s.alternate,s,Ra);s.memoizedProps=s.pendingProps,i===null?wu(s):ke=i}function _x(s){var i=s,u=i.alternate;switch(i.tag){case 15:case 0:i=j1(u,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=j1(u,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:ud(i);default:tx(u,i),i=ke=kb(i,Ra),i=J1(u,i,Ra)}s.memoizedProps=s.pendingProps,i===null?wu(s):ke=i}function si(s,i,u,h){xa=Ps=null,ud(i),jr=null,co=0;var g=i.return;try{if(EE(s,g,i,u,Ae)){lt=1,lu(s,kn(u,s.current)),ke=null;return}}catch(b){if(g!==null)throw ke=g,b;lt=1,lu(s,kn(u,s.current)),ke=null;return}i.flags&32768?(Ie||h===1?s=!0:ei||(Ae&536870912)!==0?s=!1:(as=s=!0,(h===2||h===9||h===3||h===6)&&(h=hn.current,h!==null&&h.tag===13&&(h.flags|=16384))),Ax(i,s)):wu(i)}function wu(s){var i=s;do{if((i.flags&32768)!==0){Ax(i,as);return}s=i.return;var u=_E(i.alternate,i,Ra);if(u!==null){ke=u;return}if(i=i.sibling,i!==null){ke=i;return}ke=i=s}while(i!==null);lt===0&&(lt=5)}function Ax(s,i){do{var u=AE(s.alternate,s);if(u!==null){u.flags&=32767,ke=u;return}if(u=s.return,u!==null&&(u.flags|=32768,u.subtreeFlags=0,u.deletions=null),!i&&(s=s.sibling,s!==null)){ke=s;return}ke=s=u}while(s!==null);lt=6,ke=null}function Ox(s,i,u,h,g,b,N,E,D){s.cancelPendingCommit=null;do Su();while(gt!==0);if((Ue&6)!==0)throw Error(a(327));if(i!==null){if(i===s.current)throw Error(a(177));if(b=i.lanes|i.childLanes,b|=Ff,b$(s,u,b,N,E,D),s===Ke&&(ke=Ke=null,Ae=0),ni=i,is=s,_a=u,Hd=b,Wd=g,wx=h,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(s.callbackNode=null,s.callbackPriority=0,GE(Cl,function(){return Bx(),null})):(s.callbackNode=null,s.callbackPriority=0),h=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||h){h=P.T,P.T=null,g=ae.p,ae.p=2,N=Ue,Ue|=4;try{OE(s,i,u)}finally{Ue=N,ae.p=g,P.T=h}}gt=1,Ix(),Dx(),Lx()}}function Ix(){if(gt===1){gt=0;var s=is,i=ni,u=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||u){u=P.T,P.T=null;var h=ae.p;ae.p=2;var g=Ue;Ue|=4;try{hx(i,s);var b=ih,N=xb(s.containerInfo),E=b.focusedElem,D=b.selectionRange;if(N!==E&&E&&E.ownerDocument&&bb(E.ownerDocument.documentElement,E)){if(D!==null&&Af(E)){var W=D.start,J=D.end;if(J===void 0&&(J=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(J,E.value.length);else{var ne=E.ownerDocument||document,K=ne&&ne.defaultView||window;if(K.getSelection){var Y=K.getSelection(),pe=E.textContent.length,ve=Math.min(D.start,pe),Xe=D.end===void 0?ve:Math.min(D.end,pe);!Y.extend&&ve>Xe&&(N=Xe,Xe=ve,ve=N);var M=yb(E,ve),B=yb(E,Xe);if(M&&B&&(Y.rangeCount!==1||Y.anchorNode!==M.node||Y.anchorOffset!==M.offset||Y.focusNode!==B.node||Y.focusOffset!==B.offset)){var H=ne.createRange();H.setStart(M.node,M.offset),Y.removeAllRanges(),ve>Xe?(Y.addRange(H),Y.extend(B.node,B.offset)):(H.setEnd(B.node,B.offset),Y.addRange(H))}}}}for(ne=[],Y=E;Y=Y.parentNode;)Y.nodeType===1&&ne.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ne.length;E++){var ee=ne[E];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Du=!!rh,ih=rh=null}finally{Ue=g,ae.p=h,P.T=u}}s.current=i,gt=2}}function Dx(){if(gt===2){gt=0;var s=is,i=ni,u=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||u){u=P.T,P.T=null;var h=ae.p;ae.p=2;var g=Ue;Ue|=4;try{lx(s,i.alternate,i)}finally{Ue=g,ae.p=h,P.T=u}}gt=3}}function Lx(){if(gt===4||gt===3){gt=0,u$();var s=is,i=ni,u=_a,h=wx;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?gt=5:(gt=0,ni=is=null,Fx(s,s.pendingLanes));var g=s.pendingLanes;if(g===0&&(rs=null),df(u),i=i.stateNode,un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(qi,i,void 0,(i.current.flags&128)===128)}catch{}if(h!==null){i=P.T,g=ae.p,ae.p=2,P.T=null;try{for(var b=s.onRecoverableError,N=0;N<h.length;N++){var E=h[N];b(E.value,{componentStack:E.stack})}}finally{P.T=i,ae.p=g}}(_a&3)!==0&&Su(),la(s),g=s.pendingLanes,(u&261930)!==0&&(g&42)!==0?s===qd?ko++:(ko=0,qd=s):ko=0,Ro(0)}}function Fx(s,i){(s.pooledCacheLanes&=i)===0&&(i=s.pooledCache,i!=null&&(s.pooledCache=null,lo(i)))}function Su(){return Ix(),Dx(),Lx(),Bx()}function Bx(){if(gt!==5)return!1;var s=is,i=Hd;Hd=0;var u=df(_a),h=P.T,g=ae.p;try{ae.p=32>u?32:u,P.T=null,u=Wd,Wd=null;var b=is,N=_a;if(gt=0,ni=is=null,_a=0,(Ue&6)!==0)throw Error(a(331));var E=Ue;if(Ue|=4,bx(b.current),mx(b,b.current,N,u),Ue=E,Ro(0,!1),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(qi,b)}catch{}return!0}finally{ae.p=g,P.T=h,Fx(s,i)}}function zx(s,i,u){i=kn(u,i),i=Cd(s.stateNode,i,2),s=Ja(s,i,2),s!==null&&(Xi(s,2),la(s))}function Ge(s,i,u){if(s.tag===3)zx(s,s,u);else for(;i!==null;){if(i.tag===3){zx(i,s,u);break}else if(i.tag===1){var h=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(rs===null||!rs.has(h))){s=kn(u,s),u=U1(2),h=Ja(i,u,2),h!==null&&(V1(u,h,i,s),Xi(h,2),la(h));break}}i=i.return}}function Kd(s,i,u){var h=s.pingCache;if(h===null){h=s.pingCache=new LE;var g=new Set;h.set(i,g)}else g=h.get(i),g===void 0&&(g=new Set,h.set(i,g));g.has(u)||(Md=!0,g.add(u),s=VE.bind(null,s,i,u),i.then(s,s))}function VE(s,i,u){var h=s.pingCache;h!==null&&h.delete(i),s.pingedLanes|=s.suspendedLanes&u,s.warmLanes&=~u,Ke===s&&(Ae&u)===u&&(lt===4||lt===3&&(Ae&62914560)===Ae&&300>ln()-gu?(Ue&2)===0&&ai(s,0):Pd|=u,ti===Ae&&(ti=0)),la(s)}function Ux(s,i){i===0&&(i=I0()),s=Us(s,i),s!==null&&(Xi(s,i),la(s))}function ME(s){var i=s.memoizedState,u=0;i!==null&&(u=i.retryLane),Ux(s,u)}function PE(s,i){var u=0;switch(s.tag){case 31:case 13:var h=s.stateNode,g=s.memoizedState;g!==null&&(u=g.retryLane);break;case 19:h=s.stateNode;break;case 22:h=s.stateNode._retryCache;break;default:throw Error(a(314))}h!==null&&h.delete(i),Ux(s,u)}function GE(s,i){return lf(s,i)}var Tu=null,ri=null,Yd=!1,Cu=!1,Qd=!1,ls=0;function la(s){s!==ri&&s.next===null&&(ri===null?Tu=ri=s:ri=ri.next=s),Cu=!0,Yd||(Yd=!0,WE())}function Ro(s,i){if(!Qd&&Cu){Qd=!0;do for(var u=!1,h=Tu;h!==null;){if(s!==0){var g=h.pendingLanes;if(g===0)var b=0;else{var N=h.suspendedLanes,E=h.pingedLanes;b=(1<<31-cn(42|s)+1)-1,b&=g&~(N&~E),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(u=!0,Gx(h,b))}else b=Ae,b=kl(h,h===Ke?b:0,h.cancelPendingCommit!==null||h.timeoutHandle!==-1),(b&3)===0||ji(h,b)||(u=!0,Gx(h,b));h=h.next}while(u);Qd=!1}}function HE(){Vx()}function Vx(){Cu=Yd=!1;var s=0;ls!==0&&tk()&&(s=ls);for(var i=ln(),u=null,h=Tu;h!==null;){var g=h.next,b=Mx(h,i);b===0?(h.next=null,u===null?Tu=g:u.next=g,g===null&&(ri=u)):(u=h,(s!==0||(b&3)!==0)&&(Cu=!0)),h=g}gt!==0&&gt!==5||Ro(s),ls!==0&&(ls=0)}function Mx(s,i){for(var u=s.suspendedLanes,h=s.pingedLanes,g=s.expirationTimes,b=s.pendingLanes&-62914561;0<b;){var N=31-cn(b),E=1<<N,D=g[N];D===-1?((E&u)===0||(E&h)!==0)&&(g[N]=y$(E,i)):D<=i&&(s.expiredLanes|=E),b&=~E}if(i=Ke,u=Ae,u=kl(s,s===i?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),h=s.callbackNode,u===0||s===i&&(Pe===2||Pe===9)||s.cancelPendingCommit!==null)return h!==null&&h!==null&&uf(h),s.callbackNode=null,s.callbackPriority=0;if((u&3)===0||ji(s,u)){if(i=u&-u,i===s.callbackPriority)return i;switch(h!==null&&uf(h),df(u)){case 2:case 8:u=A0;break;case 32:u=Cl;break;case 268435456:u=O0;break;default:u=Cl}return h=Px.bind(null,s),u=lf(u,h),s.callbackPriority=i,s.callbackNode=u,i}return h!==null&&h!==null&&uf(h),s.callbackPriority=2,s.callbackNode=null,2}function Px(s,i){if(gt!==0&&gt!==5)return s.callbackNode=null,s.callbackPriority=0,null;var u=s.callbackNode;if(Su()&&s.callbackNode!==u)return null;var h=Ae;return h=kl(s,s===Ke?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),h===0?null:(Tx(s,h,i),Mx(s,ln()),s.callbackNode!=null&&s.callbackNode===u?Px.bind(null,s):null)}function Gx(s,i){if(Su())return null;Tx(s,i,!0)}function WE(){ak(function(){(Ue&6)!==0?lf(_0,HE):Vx()})}function Zd(){if(ls===0){var s=Hr;s===0&&(s=Nl,Nl<<=1,(Nl&261888)===0&&(Nl=256)),ls=s}return ls}function Hx(s){return s==null||typeof s=="symbol"||typeof s=="boolean"?null:typeof s=="function"?s:Ol(""+s)}function Wx(s,i){var u=i.ownerDocument.createElement("input");return u.name=i.name,u.value=i.value,s.id&&u.setAttribute("form",s.id),i.parentNode.insertBefore(u,i),s=new FormData(s),u.parentNode.removeChild(u),s}function qE(s,i,u,h,g){if(i==="submit"&&u&&u.stateNode===g){var b=Hx((g[jt]||null).action),N=h.submitter;N&&(i=(i=N[jt]||null)?Hx(i.formAction):N.getAttribute("formAction"),i!==null&&(b=i,N=null));var E=new Fl("action","action",null,h,g);s.push({event:E,listeners:[{instance:null,listener:function(){if(h.defaultPrevented){if(ls!==0){var D=N?Wx(g,N):new FormData(g);bd(u,{pending:!0,data:D,method:g.method,action:b},null,D)}}else typeof b=="function"&&(E.preventDefault(),D=N?Wx(g,N):new FormData(g),bd(u,{pending:!0,data:D,method:g.method,action:b},b,D))},currentTarget:g}]})}}for(var Jd=0;Jd<Lf.length;Jd++){var eh=Lf[Jd],jE=eh.toLowerCase(),XE=eh[0].toUpperCase()+eh.slice(1);Hn(jE,"on"+XE)}Hn(Sb,"onAnimationEnd"),Hn(Tb,"onAnimationIteration"),Hn(Cb,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(cE,"onTransitionRun"),Hn(fE,"onTransitionStart"),Hn(dE,"onTransitionCancel"),Hn(Nb,"onTransitionEnd"),_r("onMouseEnter",["mouseout","mouseover"]),_r("onMouseLeave",["mouseout","mouseover"]),_r("onPointerEnter",["pointerout","pointerover"]),_r("onPointerLeave",["pointerout","pointerover"]),Ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ls("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function qx(s,i){i=(i&4)!==0;for(var u=0;u<s.length;u++){var h=s[u],g=h.event;h=h.listeners;e:{var b=void 0;if(i)for(var N=h.length-1;0<=N;N--){var E=h[N],D=E.instance,W=E.currentTarget;if(E=E.listener,D!==b&&g.isPropagationStopped())break e;b=E,g.currentTarget=W;try{b(g)}catch(J){Ul(J)}g.currentTarget=null,b=D}else for(N=0;N<h.length;N++){if(E=h[N],D=E.instance,W=E.currentTarget,E=E.listener,D!==b&&g.isPropagationStopped())break e;b=E,g.currentTarget=W;try{b(g)}catch(J){Ul(J)}g.currentTarget=null,b=D}}}}function Re(s,i){var u=i[hf];u===void 0&&(u=i[hf]=new Set);var h=s+"__bubble";u.has(h)||(jx(i,s,2,!1),u.add(h))}function th(s,i,u){var h=0;i&&(h|=4),jx(u,s,h,i)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function nh(s){if(!s[Nu]){s[Nu]=!0,V0.forEach(function(u){u!=="selectionchange"&&(KE.has(u)||th(u,!1,s),th(u,!0,s))});var i=s.nodeType===9?s:s.ownerDocument;i===null||i[Nu]||(i[Nu]=!0,th("selectionchange",!1,i))}}function jx(s,i,u,h){switch(Sv(i)){case 2:var g=Tk;break;case 8:g=Ck;break;default:g=yh}u=g.bind(null,i,u,s),g=void 0,!Sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(g=!0),h?g!==void 0?s.addEventListener(i,u,{capture:!0,passive:g}):s.addEventListener(i,u,!0):g!==void 0?s.addEventListener(i,u,{passive:g}):s.addEventListener(i,u,!1)}function ah(s,i,u,h,g){var b=h;if((i&1)===0&&(i&2)===0&&h!==null)e:for(;;){if(h===null)return;var N=h.tag;if(N===3||N===4){var E=h.stateNode.containerInfo;if(E===g)break;if(N===4)for(N=h.return;N!==null;){var D=N.tag;if((D===3||D===4)&&N.stateNode.containerInfo===g)return;N=N.return}for(;E!==null;){if(N=Er(E),N===null)return;if(D=N.tag,D===5||D===6||D===26||D===27){h=b=N;continue e}E=E.parentNode}}h=h.return}Z0(function(){var W=b,J=vf(u),ne=[];e:{var K=$b.get(s);if(K!==void 0){var Y=Fl,pe=s;switch(s){case"keypress":if(Dl(u)===0)break e;case"keydown":case"keyup":Y=P$;break;case"focusin":pe="focus",Y=$f;break;case"focusout":pe="blur",Y=$f;break;case"beforeblur":case"afterblur":Y=$f;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=tb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=_$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=W$;break;case Sb:case Tb:case Cb:Y=I$;break;case Nb:Y=j$;break;case"scroll":case"scrollend":Y=k$;break;case"wheel":Y=K$;break;case"copy":case"cut":case"paste":Y=L$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=ab;break;case"toggle":case"beforetoggle":Y=Q$}var ve=(i&4)!==0,Xe=!ve&&(s==="scroll"||s==="scrollend"),M=ve?K!==null?K+"Capture":null:K;ve=[];for(var B=W,H;B!==null;){var ee=B;if(H=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||H===null||M===null||(ee=Qi(B,M),ee!=null&&ve.push(Ao(B,ee,H))),Xe)break;B=B.return}0<ve.length&&(K=new Y(K,pe,null,u,J),ne.push({event:K,listeners:ve}))}}if((i&7)===0){e:{if(K=s==="mouseover"||s==="pointerover",Y=s==="mouseout"||s==="pointerout",K&&u!==xf&&(pe=u.relatedTarget||u.fromElement)&&(Er(pe)||pe[$r]))break e;if((Y||K)&&(K=J.window===J?J:(K=J.ownerDocument)?K.defaultView||K.parentWindow:window,Y?(pe=u.relatedTarget||u.toElement,Y=W,pe=pe?Er(pe):null,pe!==null&&(Xe=o(pe),ve=pe.tag,pe!==Xe||ve!==5&&ve!==27&&ve!==6)&&(pe=null)):(Y=null,pe=W),Y!==pe)){if(ve=tb,ee="onMouseLeave",M="onMouseEnter",B="mouse",(s==="pointerout"||s==="pointerover")&&(ve=ab,ee="onPointerLeave",M="onPointerEnter",B="pointer"),Xe=Y==null?K:Yi(Y),H=pe==null?K:Yi(pe),K=new ve(ee,B+"leave",Y,u,J),K.target=Xe,K.relatedTarget=H,ee=null,Er(J)===W&&(ve=new ve(M,B+"enter",pe,u,J),ve.target=H,ve.relatedTarget=Xe,ee=ve),Xe=ee,Y&&pe)t:{for(ve=YE,M=Y,B=pe,H=0,ee=M;ee;ee=ve(ee))H++;ee=0;for(var xe=B;xe;xe=ve(xe))ee++;for(;0<H-ee;)M=ve(M),H--;for(;0<ee-H;)B=ve(B),ee--;for(;H--;){if(M===B||B!==null&&M===B.alternate){ve=M;break t}M=ve(M),B=ve(B)}ve=null}else ve=null;Y!==null&&Xx(ne,K,Y,ve,!1),pe!==null&&Xe!==null&&Xx(ne,Xe,pe,ve,!0)}}e:{if(K=W?Yi(W):window,Y=K.nodeName&&K.nodeName.toLowerCase(),Y==="select"||Y==="input"&&K.type==="file")var Be=fb;else if(ub(K))if(db)Be=oE;else{Be=rE;var ye=sE}else Y=K.nodeName,!Y||Y.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?W&&bf(W.elementType)&&(Be=fb):Be=iE;if(Be&&(Be=Be(s,W))){cb(ne,Be,u,J);break e}ye&&ye(s,K,W),s==="focusout"&&W&&K.type==="number"&&W.memoizedProps.value!=null&&yf(K,"number",K.value)}switch(ye=W?Yi(W):window,s){case"focusin":(ub(ye)||ye.contentEditable==="true")&&(Fr=ye,Of=W,ro=null);break;case"focusout":ro=Of=Fr=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,vb(ne,u,J);break;case"selectionchange":if(uE)break;case"keydown":case"keyup":vb(ne,u,J)}var Ne;if(kf)e:{switch(s){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Lr?ob(s,u)&&(Oe="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(Oe="onCompositionStart");Oe&&(sb&&u.locale!=="ko"&&(Lr||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Lr&&(Ne=J0()):(qa=J,Tf="value"in qa?qa.value:qa.textContent,Lr=!0)),ye=$u(W,Oe),0<ye.length&&(Oe=new nb(Oe,s,null,u,J),ne.push({event:Oe,listeners:ye}),Ne?Oe.data=Ne:(Ne=lb(u),Ne!==null&&(Oe.data=Ne)))),(Ne=J$?eE(s,u):tE(s,u))&&(Oe=$u(W,"onBeforeInput"),0<Oe.length&&(ye=new nb("onBeforeInput","beforeinput",null,u,J),ne.push({event:ye,listeners:Oe}),ye.data=Ne)),qE(ne,s,W,u,J)}qx(ne,i)})}function Ao(s,i,u){return{instance:s,listener:i,currentTarget:u}}function $u(s,i){for(var u=i+"Capture",h=[];s!==null;){var g=s,b=g.stateNode;if(g=g.tag,g!==5&&g!==26&&g!==27||b===null||(g=Qi(s,u),g!=null&&h.unshift(Ao(s,g,b)),g=Qi(s,i),g!=null&&h.push(Ao(s,g,b))),s.tag===3)return h;s=s.return}return[]}function YE(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5&&s.tag!==27);return s||null}function Xx(s,i,u,h,g){for(var b=i._reactName,N=[];u!==null&&u!==h;){var E=u,D=E.alternate,W=E.stateNode;if(E=E.tag,D!==null&&D===h)break;E!==5&&E!==26&&E!==27||W===null||(D=W,g?(W=Qi(u,b),W!=null&&N.unshift(Ao(u,W,D))):g||(W=Qi(u,b),W!=null&&N.push(Ao(u,W,D)))),u=u.return}N.length!==0&&s.push({event:i,listeners:N})}var QE=/\r\n?/g,ZE=/\u0000|\uFFFD/g;function Kx(s){return(typeof s=="string"?s:""+s).replace(QE,`
`).replace(ZE,"")}function Yx(s,i){return i=Kx(i),Kx(s)===i}function je(s,i,u,h,g,b){switch(u){case"children":typeof h=="string"?i==="body"||i==="textarea"&&h===""||Or(s,h):(typeof h=="number"||typeof h=="bigint")&&i!=="body"&&Or(s,""+h);break;case"className":_l(s,"class",h);break;case"tabIndex":_l(s,"tabindex",h);break;case"dir":case"role":case"viewBox":case"width":case"height":_l(s,u,h);break;case"style":Y0(s,h,b);break;case"data":if(i!=="object"){_l(s,"data",h);break}case"src":case"href":if(h===""&&(i!=="a"||u!=="href")){s.removeAttribute(u);break}if(h==null||typeof h=="function"||typeof h=="symbol"||typeof h=="boolean"){s.removeAttribute(u);break}h=Ol(""+h),s.setAttribute(u,h);break;case"action":case"formAction":if(typeof h=="function"){s.setAttribute(u,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b=="function"&&(u==="formAction"?(i!=="input"&&je(s,i,"name",g.name,g,null),je(s,i,"formEncType",g.formEncType,g,null),je(s,i,"formMethod",g.formMethod,g,null),je(s,i,"formTarget",g.formTarget,g,null)):(je(s,i,"encType",g.encType,g,null),je(s,i,"method",g.method,g,null),je(s,i,"target",g.target,g,null)));if(h==null||typeof h=="symbol"||typeof h=="boolean"){s.removeAttribute(u);break}h=Ol(""+h),s.setAttribute(u,h);break;case"onClick":h!=null&&(s.onclick=ma);break;case"onScroll":h!=null&&Re("scroll",s);break;case"onScrollEnd":h!=null&&Re("scrollend",s);break;case"dangerouslySetInnerHTML":if(h!=null){if(typeof h!="object"||!("__html"in h))throw Error(a(61));if(u=h.__html,u!=null){if(g.children!=null)throw Error(a(60));s.innerHTML=u}}break;case"multiple":s.multiple=h&&typeof h!="function"&&typeof h!="symbol";break;case"muted":s.muted=h&&typeof h!="function"&&typeof h!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(h==null||typeof h=="function"||typeof h=="boolean"||typeof h=="symbol"){s.removeAttribute("xlink:href");break}u=Ol(""+h),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",u);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":h!=null&&typeof h!="function"&&typeof h!="symbol"?s.setAttribute(u,""+h):s.removeAttribute(u);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":h&&typeof h!="function"&&typeof h!="symbol"?s.setAttribute(u,""):s.removeAttribute(u);break;case"capture":case"download":h===!0?s.setAttribute(u,""):h!==!1&&h!=null&&typeof h!="function"&&typeof h!="symbol"?s.setAttribute(u,h):s.removeAttribute(u);break;case"cols":case"rows":case"size":case"span":h!=null&&typeof h!="function"&&typeof h!="symbol"&&!isNaN(h)&&1<=h?s.setAttribute(u,h):s.removeAttribute(u);break;case"rowSpan":case"start":h==null||typeof h=="function"||typeof h=="symbol"||isNaN(h)?s.removeAttribute(u):s.setAttribute(u,h);break;case"popover":Re("beforetoggle",s),Re("toggle",s),Rl(s,"popover",h);break;case"xlinkActuate":pa(s,"http://www.w3.org/1999/xlink","xlink:actuate",h);break;case"xlinkArcrole":pa(s,"http://www.w3.org/1999/xlink","xlink:arcrole",h);break;case"xlinkRole":pa(s,"http://www.w3.org/1999/xlink","xlink:role",h);break;case"xlinkShow":pa(s,"http://www.w3.org/1999/xlink","xlink:show",h);break;case"xlinkTitle":pa(s,"http://www.w3.org/1999/xlink","xlink:title",h);break;case"xlinkType":pa(s,"http://www.w3.org/1999/xlink","xlink:type",h);break;case"xmlBase":pa(s,"http://www.w3.org/XML/1998/namespace","xml:base",h);break;case"xmlLang":pa(s,"http://www.w3.org/XML/1998/namespace","xml:lang",h);break;case"xmlSpace":pa(s,"http://www.w3.org/XML/1998/namespace","xml:space",h);break;case"is":Rl(s,"is",h);break;case"innerText":case"textContent":break;default:(!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(u=$$.get(u)||u,Rl(s,u,h))}}function sh(s,i,u,h,g,b){switch(u){case"style":Y0(s,h,b);break;case"dangerouslySetInnerHTML":if(h!=null){if(typeof h!="object"||!("__html"in h))throw Error(a(61));if(u=h.__html,u!=null){if(g.children!=null)throw Error(a(60));s.innerHTML=u}}break;case"children":typeof h=="string"?Or(s,h):(typeof h=="number"||typeof h=="bigint")&&Or(s,""+h);break;case"onScroll":h!=null&&Re("scroll",s);break;case"onScrollEnd":h!=null&&Re("scrollend",s);break;case"onClick":h!=null&&(s.onclick=ma);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!M0.hasOwnProperty(u))e:{if(u[0]==="o"&&u[1]==="n"&&(g=u.endsWith("Capture"),i=u.slice(2,g?u.length-7:void 0),b=s[jt]||null,b=b!=null?b[u]:null,typeof b=="function"&&s.removeEventListener(i,b,g),typeof h=="function")){typeof b!="function"&&b!==null&&(u in s?s[u]=null:s.hasAttribute(u)&&s.removeAttribute(u)),s.addEventListener(i,h,g);break e}u in s?s[u]=h:h===!0?s.setAttribute(u,""):Rl(s,u,h)}}}function Ot(s,i,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",s),Re("load",s);var h=!1,g=!1,b;for(b in u)if(u.hasOwnProperty(b)){var N=u[b];if(N!=null)switch(b){case"src":h=!0;break;case"srcSet":g=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:je(s,i,b,N,u,null)}}g&&je(s,i,"srcSet",u.srcSet,u,null),h&&je(s,i,"src",u.src,u,null);return;case"input":Re("invalid",s);var E=b=N=g=null,D=null,W=null;for(h in u)if(u.hasOwnProperty(h)){var J=u[h];if(J!=null)switch(h){case"name":g=J;break;case"type":N=J;break;case"checked":D=J;break;case"defaultChecked":W=J;break;case"value":b=J;break;case"defaultValue":E=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(a(137,i));break;default:je(s,i,h,J,u,null)}}q0(s,b,E,D,W,N,g,!1);return;case"select":Re("invalid",s),h=N=b=null;for(g in u)if(u.hasOwnProperty(g)&&(E=u[g],E!=null))switch(g){case"value":b=E;break;case"defaultValue":N=E;break;case"multiple":h=E;default:je(s,i,g,E,u,null)}i=b,u=N,s.multiple=!!h,i!=null?Ar(s,!!h,i,!1):u!=null&&Ar(s,!!h,u,!0);return;case"textarea":Re("invalid",s),b=g=h=null;for(N in u)if(u.hasOwnProperty(N)&&(E=u[N],E!=null))switch(N){case"value":h=E;break;case"defaultValue":g=E;break;case"children":b=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:je(s,i,N,E,u,null)}X0(s,h,g,b);return;case"option":for(D in u)u.hasOwnProperty(D)&&(h=u[D],h!=null)&&(D==="selected"?s.selected=h&&typeof h!="function"&&typeof h!="symbol":je(s,i,D,h,u,null));return;case"dialog":Re("beforetoggle",s),Re("toggle",s),Re("cancel",s),Re("close",s);break;case"iframe":case"object":Re("load",s);break;case"video":case"audio":for(h=0;h<_o.length;h++)Re(_o[h],s);break;case"image":Re("error",s),Re("load",s);break;case"details":Re("toggle",s);break;case"embed":case"source":case"link":Re("error",s),Re("load",s);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in u)if(u.hasOwnProperty(W)&&(h=u[W],h!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:je(s,i,W,h,u,null)}return;default:if(bf(i)){for(J in u)u.hasOwnProperty(J)&&(h=u[J],h!==void 0&&sh(s,i,J,h,u,void 0));return}}for(E in u)u.hasOwnProperty(E)&&(h=u[E],h!=null&&je(s,i,E,h,u,null))}function JE(s,i,u,h){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var g=null,b=null,N=null,E=null,D=null,W=null,J=null;for(Y in u){var ne=u[Y];if(u.hasOwnProperty(Y)&&ne!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":D=ne;default:h.hasOwnProperty(Y)||je(s,i,Y,null,h,ne)}}for(var K in h){var Y=h[K];if(ne=u[K],h.hasOwnProperty(K)&&(Y!=null||ne!=null))switch(K){case"type":b=Y;break;case"name":g=Y;break;case"checked":W=Y;break;case"defaultChecked":J=Y;break;case"value":N=Y;break;case"defaultValue":E=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,i));break;default:Y!==ne&&je(s,i,K,Y,h,ne)}}gf(s,N,E,D,W,J,b,g);return;case"select":Y=N=E=K=null;for(b in u)if(D=u[b],u.hasOwnProperty(b)&&D!=null)switch(b){case"value":break;case"multiple":Y=D;default:h.hasOwnProperty(b)||je(s,i,b,null,h,D)}for(g in h)if(b=h[g],D=u[g],h.hasOwnProperty(g)&&(b!=null||D!=null))switch(g){case"value":K=b;break;case"defaultValue":E=b;break;case"multiple":N=b;default:b!==D&&je(s,i,g,b,h,D)}i=E,u=N,h=Y,K!=null?Ar(s,!!u,K,!1):!!h!=!!u&&(i!=null?Ar(s,!!u,i,!0):Ar(s,!!u,u?[]:"",!1));return;case"textarea":Y=K=null;for(E in u)if(g=u[E],u.hasOwnProperty(E)&&g!=null&&!h.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:je(s,i,E,null,h,g)}for(N in h)if(g=h[N],b=u[N],h.hasOwnProperty(N)&&(g!=null||b!=null))switch(N){case"value":K=g;break;case"defaultValue":Y=g;break;case"children":break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(a(91));break;default:g!==b&&je(s,i,N,g,h,b)}j0(s,K,Y);return;case"option":for(var pe in u)K=u[pe],u.hasOwnProperty(pe)&&K!=null&&!h.hasOwnProperty(pe)&&(pe==="selected"?s.selected=!1:je(s,i,pe,null,h,K));for(D in h)K=h[D],Y=u[D],h.hasOwnProperty(D)&&K!==Y&&(K!=null||Y!=null)&&(D==="selected"?s.selected=K&&typeof K!="function"&&typeof K!="symbol":je(s,i,D,K,h,Y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in u)K=u[ve],u.hasOwnProperty(ve)&&K!=null&&!h.hasOwnProperty(ve)&&je(s,i,ve,null,h,K);for(W in h)if(K=h[W],Y=u[W],h.hasOwnProperty(W)&&K!==Y&&(K!=null||Y!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,i));break;default:je(s,i,W,K,h,Y)}return;default:if(bf(i)){for(var Xe in u)K=u[Xe],u.hasOwnProperty(Xe)&&K!==void 0&&!h.hasOwnProperty(Xe)&&sh(s,i,Xe,void 0,h,K);for(J in h)K=h[J],Y=u[J],!h.hasOwnProperty(J)||K===Y||K===void 0&&Y===void 0||sh(s,i,J,K,h,Y);return}}for(var M in u)K=u[M],u.hasOwnProperty(M)&&K!=null&&!h.hasOwnProperty(M)&&je(s,i,M,null,h,K);for(ne in h)K=h[ne],Y=u[ne],!h.hasOwnProperty(ne)||K===Y||K==null&&Y==null||je(s,i,ne,K,h,Y)}function Qx(s){switch(s){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ek(){if(typeof performance.getEntriesByType=="function"){for(var s=0,i=0,u=performance.getEntriesByType("resource"),h=0;h<u.length;h++){var g=u[h],b=g.transferSize,N=g.initiatorType,E=g.duration;if(b&&E&&Qx(N)){for(N=0,E=g.responseEnd,h+=1;h<u.length;h++){var D=u[h],W=D.startTime;if(W>E)break;var J=D.transferSize,ne=D.initiatorType;J&&Qx(ne)&&(D=D.responseEnd,N+=J*(D<E?1:(E-W)/(D-W)))}if(--h,i+=8*(b+N)/(g.duration/1e3),s++,10<s)break}}if(0<s)return i/s/1e6}return navigator.connection&&(s=navigator.connection.downlink,typeof s=="number")?s:5}var rh=null,ih=null;function Eu(s){return s.nodeType===9?s:s.ownerDocument}function Zx(s){switch(s){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jx(s,i){if(s===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return s===1&&i==="foreignObject"?0:s}function oh(s,i){return s==="textarea"||s==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function tk(){var s=window.event;return s&&s.type==="popstate"?s===lh?!1:(lh=s,!0):(lh=null,!1)}var ev=typeof setTimeout=="function"?setTimeout:void 0,nk=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,ak=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(s){return tv.resolve(null).then(s).catch(sk)}:ev;function sk(s){setTimeout(function(){throw s})}function us(s){return s==="head"}function nv(s,i){var u=i,h=0;do{var g=u.nextSibling;if(s.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"||u==="/&"){if(h===0){s.removeChild(g),ui(i);return}h--}else if(u==="$"||u==="$?"||u==="$~"||u==="$!"||u==="&")h++;else if(u==="html")Oo(s.ownerDocument.documentElement);else if(u==="head"){u=s.ownerDocument.head,Oo(u);for(var b=u.firstChild;b;){var N=b.nextSibling,E=b.nodeName;b[Ki]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&b.rel.toLowerCase()==="stylesheet"||u.removeChild(b),b=N}}else u==="body"&&Oo(s.ownerDocument.body);u=g}while(u);ui(i)}function av(s,i){var u=s;s=0;do{var h=u.nextSibling;if(u.nodeType===1?i?(u._stashedDisplay=u.style.display,u.style.display="none"):(u.style.display=u._stashedDisplay||"",u.getAttribute("style")===""&&u.removeAttribute("style")):u.nodeType===3&&(i?(u._stashedText=u.nodeValue,u.nodeValue=""):u.nodeValue=u._stashedText||""),h&&h.nodeType===8)if(u=h.data,u==="/$"){if(s===0)break;s--}else u!=="$"&&u!=="$?"&&u!=="$~"&&u!=="$!"||s++;u=h}while(u)}function uh(s){var i=s.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var u=i;switch(i=i.nextSibling,u.nodeName){case"HTML":case"HEAD":case"BODY":uh(u),pf(u);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(u.rel.toLowerCase()==="stylesheet")continue}s.removeChild(u)}}function rk(s,i,u,h){for(;s.nodeType===1;){var g=u;if(s.nodeName.toLowerCase()!==i.toLowerCase()){if(!h&&(s.nodeName!=="INPUT"||s.type!=="hidden"))break}else if(h){if(!s[Ki])switch(i){case"meta":if(!s.hasAttribute("itemprop"))break;return s;case"link":if(b=s.getAttribute("rel"),b==="stylesheet"&&s.hasAttribute("data-precedence"))break;if(b!==g.rel||s.getAttribute("href")!==(g.href==null||g.href===""?null:g.href)||s.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin)||s.getAttribute("title")!==(g.title==null?null:g.title))break;return s;case"style":if(s.hasAttribute("data-precedence"))break;return s;case"script":if(b=s.getAttribute("src"),(b!==(g.src==null?null:g.src)||s.getAttribute("type")!==(g.type==null?null:g.type)||s.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin))&&b&&s.hasAttribute("async")&&!s.hasAttribute("itemprop"))break;return s;default:return s}}else if(i==="input"&&s.type==="hidden"){var b=g.name==null?null:""+g.name;if(g.type==="hidden"&&s.getAttribute("name")===b)return s}else return s;if(s=In(s.nextSibling),s===null)break}return null}function ik(s,i,u){if(i==="")return null;for(;s.nodeType!==3;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!u||(s=In(s.nextSibling),s===null))return null;return s}function sv(s,i){for(;s.nodeType!==8;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!i||(s=In(s.nextSibling),s===null))return null;return s}function ch(s){return s.data==="$?"||s.data==="$~"}function fh(s){return s.data==="$!"||s.data==="$?"&&s.ownerDocument.readyState!=="loading"}function ok(s,i){var u=s.ownerDocument;if(s.data==="$~")s._reactRetry=i;else if(s.data!=="$?"||u.readyState!=="loading")i();else{var h=function(){i(),u.removeEventListener("DOMContentLoaded",h)};u.addEventListener("DOMContentLoaded",h),s._reactRetry=h}}function In(s){for(;s!=null;s=s.nextSibling){var i=s.nodeType;if(i===1||i===3)break;if(i===8){if(i=s.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return s}var dh=null;function rv(s){s=s.nextSibling;for(var i=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"||u==="/&"){if(i===0)return In(s.nextSibling);i--}else u!=="$"&&u!=="$!"&&u!=="$?"&&u!=="$~"&&u!=="&"||i++}s=s.nextSibling}return null}function iv(s){s=s.previousSibling;for(var i=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"||u==="$~"||u==="&"){if(i===0)return s;i--}else u!=="/$"&&u!=="/&"||i++}s=s.previousSibling}return null}function ov(s,i,u){switch(i=Eu(u),s){case"html":if(s=i.documentElement,!s)throw Error(a(452));return s;case"head":if(s=i.head,!s)throw Error(a(453));return s;case"body":if(s=i.body,!s)throw Error(a(454));return s;default:throw Error(a(451))}}function Oo(s){for(var i=s.attributes;i.length;)s.removeAttributeNode(i[0]);pf(s)}var Dn=new Map,lv=new Set;function ku(s){return typeof s.getRootNode=="function"?s.getRootNode():s.nodeType===9?s:s.ownerDocument}var Aa=ae.d;ae.d={f:lk,r:uk,D:ck,C:fk,L:dk,m:hk,X:mk,S:pk,M:gk};function lk(){var s=Aa.f(),i=xu();return s||i}function uk(s){var i=kr(s);i!==null&&i.tag===5&&i.type==="form"?N1(i):Aa.r(s)}var ii=typeof document>"u"?null:document;function uv(s,i,u){var h=ii;if(h&&typeof i=="string"&&i){var g=$n(i);g='link[rel="'+s+'"][href="'+g+'"]',typeof u=="string"&&(g+='[crossorigin="'+u+'"]'),lv.has(g)||(lv.add(g),s={rel:s,crossOrigin:u,href:i},h.querySelector(g)===null&&(i=h.createElement("link"),Ot(i,"link",s),vt(i),h.head.appendChild(i)))}}function ck(s){Aa.D(s),uv("dns-prefetch",s,null)}function fk(s,i){Aa.C(s,i),uv("preconnect",s,i)}function dk(s,i,u){Aa.L(s,i,u);var h=ii;if(h&&s&&i){var g='link[rel="preload"][as="'+$n(i)+'"]';i==="image"&&u&&u.imageSrcSet?(g+='[imagesrcset="'+$n(u.imageSrcSet)+'"]',typeof u.imageSizes=="string"&&(g+='[imagesizes="'+$n(u.imageSizes)+'"]')):g+='[href="'+$n(s)+'"]';var b=g;switch(i){case"style":b=oi(s);break;case"script":b=li(s)}Dn.has(b)||(s=m({rel:"preload",href:i==="image"&&u&&u.imageSrcSet?void 0:s,as:i},u),Dn.set(b,s),h.querySelector(g)!==null||i==="style"&&h.querySelector(Io(b))||i==="script"&&h.querySelector(Do(b))||(i=h.createElement("link"),Ot(i,"link",s),vt(i),h.head.appendChild(i)))}}function hk(s,i){Aa.m(s,i);var u=ii;if(u&&s){var h=i&&typeof i.as=="string"?i.as:"script",g='link[rel="modulepreload"][as="'+$n(h)+'"][href="'+$n(s)+'"]',b=g;switch(h){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=li(s)}if(!Dn.has(b)&&(s=m({rel:"modulepreload",href:s},i),Dn.set(b,s),u.querySelector(g)===null)){switch(h){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(u.querySelector(Do(b)))return}h=u.createElement("link"),Ot(h,"link",s),vt(h),u.head.appendChild(h)}}}function pk(s,i,u){Aa.S(s,i,u);var h=ii;if(h&&s){var g=Rr(h).hoistableStyles,b=oi(s);i=i||"default";var N=g.get(b);if(!N){var E={loading:0,preload:null};if(N=h.querySelector(Io(b)))E.loading=5;else{s=m({rel:"stylesheet",href:s,"data-precedence":i},u),(u=Dn.get(b))&&hh(s,u);var D=N=h.createElement("link");vt(D),Ot(D,"link",s),D._p=new Promise(function(W,J){D.onload=W,D.onerror=J}),D.addEventListener("load",function(){E.loading|=1}),D.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ru(N,i,h)}N={type:"stylesheet",instance:N,count:1,state:E},g.set(b,N)}}}function mk(s,i){Aa.X(s,i);var u=ii;if(u&&s){var h=Rr(u).hoistableScripts,g=li(s),b=h.get(g);b||(b=u.querySelector(Do(g)),b||(s=m({src:s,async:!0},i),(i=Dn.get(g))&&ph(s,i),b=u.createElement("script"),vt(b),Ot(b,"link",s),u.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},h.set(g,b))}}function gk(s,i){Aa.M(s,i);var u=ii;if(u&&s){var h=Rr(u).hoistableScripts,g=li(s),b=h.get(g);b||(b=u.querySelector(Do(g)),b||(s=m({src:s,async:!0,type:"module"},i),(i=Dn.get(g))&&ph(s,i),b=u.createElement("script"),vt(b),Ot(b,"link",s),u.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},h.set(g,b))}}function cv(s,i,u,h){var g=(g=$e.current)?ku(g):null;if(!g)throw Error(a(446));switch(s){case"meta":case"title":return null;case"style":return typeof u.precedence=="string"&&typeof u.href=="string"?(i=oi(u.href),u=Rr(g).hoistableStyles,h=u.get(i),h||(h={type:"style",instance:null,count:0,state:null},u.set(i,h)),h):{type:"void",instance:null,count:0,state:null};case"link":if(u.rel==="stylesheet"&&typeof u.href=="string"&&typeof u.precedence=="string"){s=oi(u.href);var b=Rr(g).hoistableStyles,N=b.get(s);if(N||(g=g.ownerDocument||g,N={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},b.set(s,N),(b=g.querySelector(Io(s)))&&!b._p&&(N.instance=b,N.state.loading=5),Dn.has(s)||(u={rel:"preload",as:"style",href:u.href,crossOrigin:u.crossOrigin,integrity:u.integrity,media:u.media,hrefLang:u.hrefLang,referrerPolicy:u.referrerPolicy},Dn.set(s,u),b||yk(g,s,u,N.state))),i&&h===null)throw Error(a(528,""));return N}if(i&&h!==null)throw Error(a(529,""));return null;case"script":return i=u.async,u=u.src,typeof u=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=li(u),u=Rr(g).hoistableScripts,h=u.get(i),h||(h={type:"script",instance:null,count:0,state:null},u.set(i,h)),h):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,s))}}function oi(s){return'href="'+$n(s)+'"'}function Io(s){return'link[rel="stylesheet"]['+s+"]"}function fv(s){return m({},s,{"data-precedence":s.precedence,precedence:null})}function yk(s,i,u,h){s.querySelector('link[rel="preload"][as="style"]['+i+"]")?h.loading=1:(i=s.createElement("link"),h.preload=i,i.addEventListener("load",function(){return h.loading|=1}),i.addEventListener("error",function(){return h.loading|=2}),Ot(i,"link",u),vt(i),s.head.appendChild(i))}function li(s){return'[src="'+$n(s)+'"]'}function Do(s){return"script[async]"+s}function dv(s,i,u){if(i.count++,i.instance===null)switch(i.type){case"style":var h=s.querySelector('style[data-href~="'+$n(u.href)+'"]');if(h)return i.instance=h,vt(h),h;var g=m({},u,{"data-href":u.href,"data-precedence":u.precedence,href:null,precedence:null});return h=(s.ownerDocument||s).createElement("style"),vt(h),Ot(h,"style",g),Ru(h,u.precedence,s),i.instance=h;case"stylesheet":g=oi(u.href);var b=s.querySelector(Io(g));if(b)return i.state.loading|=4,i.instance=b,vt(b),b;h=fv(u),(g=Dn.get(g))&&hh(h,g),b=(s.ownerDocument||s).createElement("link"),vt(b);var N=b;return N._p=new Promise(function(E,D){N.onload=E,N.onerror=D}),Ot(b,"link",h),i.state.loading|=4,Ru(b,u.precedence,s),i.instance=b;case"script":return b=li(u.src),(g=s.querySelector(Do(b)))?(i.instance=g,vt(g),g):(h=u,(g=Dn.get(b))&&(h=m({},u),ph(h,g)),s=s.ownerDocument||s,g=s.createElement("script"),vt(g),Ot(g,"link",h),s.head.appendChild(g),i.instance=g);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(h=i.instance,i.state.loading|=4,Ru(h,u.precedence,s));return i.instance}function Ru(s,i,u){for(var h=u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),g=h.length?h[h.length-1]:null,b=g,N=0;N<h.length;N++){var E=h[N];if(E.dataset.precedence===i)b=E;else if(b!==g)break}b?b.parentNode.insertBefore(s,b.nextSibling):(i=u.nodeType===9?u.head:u,i.insertBefore(s,i.firstChild))}function hh(s,i){s.crossOrigin==null&&(s.crossOrigin=i.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=i.referrerPolicy),s.title==null&&(s.title=i.title)}function ph(s,i){s.crossOrigin==null&&(s.crossOrigin=i.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=i.referrerPolicy),s.integrity==null&&(s.integrity=i.integrity)}var _u=null;function hv(s,i,u){if(_u===null){var h=new Map,g=_u=new Map;g.set(u,h)}else g=_u,h=g.get(u),h||(h=new Map,g.set(u,h));if(h.has(s))return h;for(h.set(s,null),u=u.getElementsByTagName(s),g=0;g<u.length;g++){var b=u[g];if(!(b[Ki]||b[kt]||s==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!=="http://www.w3.org/2000/svg"){var N=b.getAttribute(i)||"";N=s+N;var E=h.get(N);E?E.push(b):h.set(N,[b])}}return h}function pv(s,i,u){s=s.ownerDocument||s,s.head.insertBefore(u,i==="title"?s.querySelector("head > title"):null)}function bk(s,i,u){if(u===1||i.itemProp!=null)return!1;switch(s){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(s=i.disabled,typeof i.precedence=="string"&&s==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function mv(s){return!(s.type==="stylesheet"&&(s.state.loading&3)===0)}function xk(s,i,u,h){if(u.type==="stylesheet"&&(typeof h.media!="string"||matchMedia(h.media).matches!==!1)&&(u.state.loading&4)===0){if(u.instance===null){var g=oi(h.href),b=i.querySelector(Io(g));if(b){i=b._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(s.count++,s=Au.bind(s),i.then(s,s)),u.state.loading|=4,u.instance=b,vt(b);return}b=i.ownerDocument||i,h=fv(h),(g=Dn.get(g))&&hh(h,g),b=b.createElement("link"),vt(b);var N=b;N._p=new Promise(function(E,D){N.onload=E,N.onerror=D}),Ot(b,"link",h),u.instance=b}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(u,i),(i=u.state.preload)&&(u.state.loading&3)===0&&(s.count++,u=Au.bind(s),i.addEventListener("load",u),i.addEventListener("error",u))}}var mh=0;function vk(s,i){return s.stylesheets&&s.count===0&&Iu(s,s.stylesheets),0<s.count||0<s.imgCount?function(u){var h=setTimeout(function(){if(s.stylesheets&&Iu(s,s.stylesheets),s.unsuspend){var b=s.unsuspend;s.unsuspend=null,b()}},6e4+i);0<s.imgBytes&&mh===0&&(mh=62500*ek());var g=setTimeout(function(){if(s.waitingForImages=!1,s.count===0&&(s.stylesheets&&Iu(s,s.stylesheets),s.unsuspend)){var b=s.unsuspend;s.unsuspend=null,b()}},(s.imgBytes>mh?50:800)+i);return s.unsuspend=u,function(){s.unsuspend=null,clearTimeout(h),clearTimeout(g)}}:null}function Au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Iu(this,this.stylesheets);else if(this.unsuspend){var s=this.unsuspend;this.unsuspend=null,s()}}}var Ou=null;function Iu(s,i){s.stylesheets=null,s.unsuspend!==null&&(s.count++,Ou=new Map,i.forEach(wk,s),Ou=null,Au.call(s))}function wk(s,i){if(!(i.state.loading&4)){var u=Ou.get(s);if(u)var h=u.get(null);else{u=new Map,Ou.set(s,u);for(var g=s.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<g.length;b++){var N=g[b];(N.nodeName==="LINK"||N.getAttribute("media")!=="not all")&&(u.set(N.dataset.precedence,N),h=N)}h&&u.set(null,h)}g=i.instance,N=g.getAttribute("data-precedence"),b=u.get(N)||h,b===h&&u.set(null,g),u.set(N,g),this.count++,h=Au.bind(this),g.addEventListener("load",h),g.addEventListener("error",h),b?b.parentNode.insertBefore(g,b.nextSibling):(s=s.nodeType===9?s.head:s,s.insertBefore(g,s.firstChild)),i.state.loading|=4}}var Lo={$$typeof:O,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Sk(s,i,u,h,g,b,N,E,D){this.tag=1,this.containerInfo=s,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cf(0),this.hiddenUpdates=cf(null),this.identifierPrefix=h,this.onUncaughtError=g,this.onCaughtError=b,this.onRecoverableError=N,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function gv(s,i,u,h,g,b,N,E,D,W,J,ne){return s=new Sk(s,i,u,N,D,W,J,ne,E),i=1,b===!0&&(i|=24),b=dn(3,null,null,i),s.current=b,b.stateNode=s,i=Xf(),i.refCount++,s.pooledCache=i,i.refCount++,b.memoizedState={element:h,isDehydrated:u,cache:i},Zf(b),s}function yv(s){return s?(s=Ur,s):Ur}function bv(s,i,u,h,g,b){g=yv(g),h.context===null?h.context=g:h.pendingContext=g,h=Za(i),h.payload={element:u},b=b===void 0?null:b,b!==null&&(h.callback=b),u=Ja(s,h,i),u!==null&&(Jt(u,s,i),ho(u,s,i))}function xv(s,i){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<i?u:i}}function gh(s,i){xv(s,i),(s=s.alternate)&&xv(s,i)}function vv(s){if(s.tag===13||s.tag===31){var i=Us(s,67108864);i!==null&&Jt(i,s,67108864),gh(s,67108864)}}function wv(s){if(s.tag===13||s.tag===31){var i=yn();i=ff(i);var u=Us(s,i);u!==null&&Jt(u,s,i),gh(s,i)}}var Du=!0;function Tk(s,i,u,h){var g=P.T;P.T=null;var b=ae.p;try{ae.p=2,yh(s,i,u,h)}finally{ae.p=b,P.T=g}}function Ck(s,i,u,h){var g=P.T;P.T=null;var b=ae.p;try{ae.p=8,yh(s,i,u,h)}finally{ae.p=b,P.T=g}}function yh(s,i,u,h){if(Du){var g=bh(h);if(g===null)ah(s,i,h,Lu,u),Tv(s,h);else if($k(g,s,i,u,h))h.stopPropagation();else if(Tv(s,h),i&4&&-1<Nk.indexOf(s)){for(;g!==null;){var b=kr(g);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var N=Ds(b.pendingLanes);if(N!==0){var E=b;for(E.pendingLanes|=2,E.entangledLanes|=2;N;){var D=1<<31-cn(N);E.entanglements[1]|=D,N&=~D}la(b),(Ue&6)===0&&(yu=ln()+500,Ro(0))}}break;case 31:case 13:E=Us(b,2),E!==null&&Jt(E,b,2),xu(),gh(b,2)}if(b=bh(h),b===null&&ah(s,i,h,Lu,u),b===g)break;g=b}g!==null&&h.stopPropagation()}else ah(s,i,h,null,u)}}function bh(s){return s=vf(s),xh(s)}var Lu=null;function xh(s){if(Lu=null,s=Er(s),s!==null){var i=o(s);if(i===null)s=null;else{var u=i.tag;if(u===13){if(s=l(i),s!==null)return s;s=null}else if(u===31){if(s=c(i),s!==null)return s;s=null}else if(u===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;s=null}else i!==s&&(s=null)}}return Lu=s,null}function Sv(s){switch(s){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(c$()){case _0:return 2;case A0:return 8;case Cl:case f$:return 32;case O0:return 268435456;default:return 32}default:return 32}}var vh=!1,cs=null,fs=null,ds=null,Fo=new Map,Bo=new Map,hs=[],Nk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tv(s,i){switch(s){case"focusin":case"focusout":cs=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":Fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(i.pointerId)}}function zo(s,i,u,h,g,b){return s===null||s.nativeEvent!==b?(s={blockedOn:i,domEventName:u,eventSystemFlags:h,nativeEvent:b,targetContainers:[g]},i!==null&&(i=kr(i),i!==null&&vv(i)),s):(s.eventSystemFlags|=h,i=s.targetContainers,g!==null&&i.indexOf(g)===-1&&i.push(g),s)}function $k(s,i,u,h,g){switch(i){case"focusin":return cs=zo(cs,s,i,u,h,g),!0;case"dragenter":return fs=zo(fs,s,i,u,h,g),!0;case"mouseover":return ds=zo(ds,s,i,u,h,g),!0;case"pointerover":var b=g.pointerId;return Fo.set(b,zo(Fo.get(b)||null,s,i,u,h,g)),!0;case"gotpointercapture":return b=g.pointerId,Bo.set(b,zo(Bo.get(b)||null,s,i,u,h,g)),!0}return!1}function Cv(s){var i=Er(s.target);if(i!==null){var u=o(i);if(u!==null){if(i=u.tag,i===13){if(i=l(u),i!==null){s.blockedOn=i,z0(s.priority,function(){wv(u)});return}}else if(i===31){if(i=c(u),i!==null){s.blockedOn=i,z0(s.priority,function(){wv(u)});return}}else if(i===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Fu(s){if(s.blockedOn!==null)return!1;for(var i=s.targetContainers;0<i.length;){var u=bh(s.nativeEvent);if(u===null){u=s.nativeEvent;var h=new u.constructor(u.type,u);xf=h,u.target.dispatchEvent(h),xf=null}else return i=kr(u),i!==null&&vv(i),s.blockedOn=u,!1;i.shift()}return!0}function Nv(s,i,u){Fu(s)&&u.delete(i)}function Ek(){vh=!1,cs!==null&&Fu(cs)&&(cs=null),fs!==null&&Fu(fs)&&(fs=null),ds!==null&&Fu(ds)&&(ds=null),Fo.forEach(Nv),Bo.forEach(Nv)}function Bu(s,i){s.blockedOn===i&&(s.blockedOn=null,vh||(vh=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Ek)))}var zu=null;function $v(s){zu!==s&&(zu=s,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){zu===s&&(zu=null);for(var i=0;i<s.length;i+=3){var u=s[i],h=s[i+1],g=s[i+2];if(typeof h!="function"){if(xh(h||u)===null)continue;break}var b=kr(u);b!==null&&(s.splice(i,3),i-=3,bd(b,{pending:!0,data:g,method:u.method,action:h},h,g))}}))}function ui(s){function i(D){return Bu(D,s)}cs!==null&&Bu(cs,s),fs!==null&&Bu(fs,s),ds!==null&&Bu(ds,s),Fo.forEach(i),Bo.forEach(i);for(var u=0;u<hs.length;u++){var h=hs[u];h.blockedOn===s&&(h.blockedOn=null)}for(;0<hs.length&&(u=hs[0],u.blockedOn===null);)Cv(u),u.blockedOn===null&&hs.shift();if(u=(s.ownerDocument||s).$$reactFormReplay,u!=null)for(h=0;h<u.length;h+=3){var g=u[h],b=u[h+1],N=g[jt]||null;if(typeof b=="function")N||$v(u);else if(N){var E=null;if(b&&b.hasAttribute("formAction")){if(g=b,N=b[jt]||null)E=N.formAction;else if(xh(g)!==null)continue}else E=N.action;typeof E=="function"?u[h+1]=E:(u.splice(h,3),h-=3),$v(u)}}}function Ev(){function s(b){b.canIntercept&&b.info==="react-transition"&&b.intercept({handler:function(){return new Promise(function(N){return g=N})},focusReset:"manual",scroll:"manual"})}function i(){g!==null&&(g(),g=null),h||setTimeout(u,20)}function u(){if(!h&&!navigation.transition){var b=navigation.currentEntry;b&&b.url!=null&&navigation.navigate(b.url,{state:b.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var h=!1,g=null;return navigation.addEventListener("navigate",s),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(u,100),function(){h=!0,navigation.removeEventListener("navigate",s),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),g!==null&&(g(),g=null)}}}function wh(s){this._internalRoot=s}Uu.prototype.render=wh.prototype.render=function(s){var i=this._internalRoot;if(i===null)throw Error(a(409));var u=i.current,h=yn();bv(u,h,s,i,null,null)},Uu.prototype.unmount=wh.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var i=s.containerInfo;bv(s.current,2,null,s,null,null),xu(),i[$r]=null}};function Uu(s){this._internalRoot=s}Uu.prototype.unstable_scheduleHydration=function(s){if(s){var i=B0();s={blockedOn:null,target:s,priority:i};for(var u=0;u<hs.length&&i!==0&&i<hs[u].priority;u++);hs.splice(u,0,s),u===0&&Cv(s)}};var kv=e.version;if(kv!=="19.2.3")throw Error(a(527,kv,"19.2.3"));ae.findDOMNode=function(s){var i=s._reactInternals;if(i===void 0)throw typeof s.render=="function"?Error(a(188)):(s=Object.keys(s).join(","),Error(a(268,s)));return s=d(i),s=s!==null?p(s):null,s=s===null?null:s.stateNode,s};var kk={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{qi=Vu.inject(kk),un=Vu}catch{}}return Vo.createRoot=function(s,i){if(!r(s))throw Error(a(299));var u=!1,h="",g=L1,b=F1,N=B1;return i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onUncaughtError!==void 0&&(g=i.onUncaughtError),i.onCaughtError!==void 0&&(b=i.onCaughtError),i.onRecoverableError!==void 0&&(N=i.onRecoverableError)),i=gv(s,1,!1,null,null,u,h,null,g,b,N,Ev),s[$r]=i.current,nh(s),new wh(i)},Vo.hydrateRoot=function(s,i,u){if(!r(s))throw Error(a(299));var h=!1,g="",b=L1,N=F1,E=B1,D=null;return u!=null&&(u.unstable_strictMode===!0&&(h=!0),u.identifierPrefix!==void 0&&(g=u.identifierPrefix),u.onUncaughtError!==void 0&&(b=u.onUncaughtError),u.onCaughtError!==void 0&&(N=u.onCaughtError),u.onRecoverableError!==void 0&&(E=u.onRecoverableError),u.formState!==void 0&&(D=u.formState)),i=gv(s,1,!0,i,u??null,h,g,D,b,N,E,Ev),i.context=yv(null),u=i.current,h=yn(),h=ff(h),g=Za(h),g.callback=null,Ja(u,g,h),u=h,i.current.lanes=u,Xi(i,u),la(i),s[$r]=i.current,nh(s),new Uu(i)},Vo.version="19.2.3",Vo}var zv;function Vk(){if(zv)return Th.exports;zv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Th.exports=Uk(),Th.exports}var Mk=Vk(),gs=$p();const Pk=Z2(gs);const Gk=1e-7,Hk=1e-4;class J2{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class Ep{refCount(e){return en("refCount")}incRef(e){return en("incRef")}timerAvailable(){return!0}time(e){return en("time")}read(e){return en("read")}readSync(e){return en("readSync")}readToGPU(e,t){return en("readToGPU")}numDataIds(){return en("numDataIds")}disposeData(e,t){return en("disposeData")}write(e,t,a){return en("write")}move(e,t,a,r,o){return en("move")}createTensorFromGPUData(e,t,a){return en("createTensorFromGPUData")}memory(){return en("memory")}floatPrecision(){return en("floatPrecision")}epsilon(){return this.floatPrecision()===32?Gk:Hk}dispose(){return en("dispose")}}function en(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function kp(n){return n%2===0?n:n+1}function Mo(n,e,t){const a=n[e];n[e]=n[t],n[t]=a}function Wk(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t];return e}function _(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function vn(n,e,t=""){_(st(n,e),()=>t+` Shapes ${n} and ${e} must match`)}function Ai(n){_(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function se(n){if(n.length===0)return 1;let e=n[0];for(let t=1;t<n.length;t++)e*=n[t];return e}function qk(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==null&&e[t]!==null&&n[t]!==e[t])return!1;return!0}function st(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function vi(n){return n%1===0}function Gh(n){const e=Math.ceil(Math.sqrt(n));return[e,Math.ceil(n/e)]}function pi(n,e){return e<=n.length?n:n+" ".repeat(e-n.length)}function Uv(n,e=r=>0,t,a){return new Promise((r,o)=>{let l=0;const c=()=>{if(n()){r();return}l++;const f=e(l);if(t!=null&&l>=t){o();return}a!=null?a(c,f):setTimeout(c,f)};c()})}function jk(n,e){let t=1,a=-1;for(let o=0;o<n.length;++o)if(n[o]>=0)t*=n[o];else if(n[o]===-1){if(a!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${a} and dim ${o}`);a=o}else if(n[o]<0)throw Error(`Shapes can not be < 0. Found ${n[o]} at dim ${o}`);if(a===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${n}`);return n}if(t===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);const r=n.slice();return r[a]=e/t,r}function xt(n,e){const t=e.length;return n=n==null?e.map((a,r)=>r):[].concat(n),_(n.every(a=>a>=-t&&a<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${n}`),_(n.every(a=>vi(a)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(a=>a<0?t+a:a)}function Es(n,e){const t=[],a=[],r=e!=null&&Array.isArray(e)&&e.length===0,o=e==null||r?null:xt(e,n).sort();let l=0;for(let c=0;c<n.length;++c){if(o!=null){if(o[l]===c&&n[c]!==1)throw new Error(`Can't squeeze axis ${c} since its dim '${n[c]}' is not 1`);(o[l]==null||o[l]>c)&&n[c]===1&&(t.push(n[c]),a.push(c)),o[l]<=c&&l++}n[c]!==1&&(t.push(n[c]),a.push(c))}return{newShape:t,keptDims:a}}function Ss(n,e){return bt(n,e)}function bt(n,e){let t=null;if(n==null||n==="float32")t=new Float32Array(e);else if(n==="int32")t=new Int32Array(e);else if(n==="bool")t=new Uint8Array(e);else if(n==="string")t=new Array(e);else throw new Error(`Unknown data type ${n}`);return t}function Xk(n,e){for(let t=0;t<n.length;t++){const a=n[t];if(isNaN(a)||!isFinite(a))throw Error(`A tensor of type ${e} being uploaded contains ${a}.`)}}function Kk(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Yk(n,e){return!(e==="complex64"||e==="float32"&&n!=="complex64"||e==="int32"&&n!=="float32"&&n!=="complex64"||e==="bool"&&n==="bool")}function uc(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Qk(n){if(n==null)return 0;let e=0;return n.forEach(t=>e+=t.length),e}function Ac(n){return typeof n=="string"||n instanceof String}function Zk(n){return typeof n=="boolean"}function Jk(n){return typeof n=="number"}function ol(n){return Array.isArray(n)?ol(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Jk(n)?"float32":Ac(n)?"string":Zk(n)?"bool":"float32"}function Hh(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Wh(n,e){for(let t=e;t<n;++t)if(n%t===0)return t;return n}function Nt(n){const e=n.length;if(e<2)return[];const t=new Array(e-1);t[e-2]=n[e-1];for(let a=e-3;a>=0;--a)t[a]=t[a+1]*n[a+1];return t}function ew(n,e,t,a=!1){const r=new Array;if(e.length===1){const o=e[0]*(a?2:1);for(let l=0;l<o;l++)r[l]=t[n+l]}else{const o=e[0],l=e.slice(1),c=l.reduce((f,d)=>f*d)*(a?2:1);for(let f=0;f<o;f++)r[f]=ew(n+f*c,l,t,a)}return r}function qh(n,e,t=!1){if(n.length===0)return e[0];const a=n.reduce((r,o)=>r*o)*(t?2:1);if(a===0)return[];if(a!==e.length)throw new Error(`[${n}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return ew(0,n,e,t)}function tw(n,e){const t=Ts(n,e);for(let a=0;a<t.length;a++)t[a]=1;return t}function Ts(n,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${e}`)}function wn(n){n.forEach(e=>{_(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function jh(n,e,t){if(e===0)return 0;if(e===1)return n[0];let a=n[n.length-1];for(let r=0;r<n.length-1;++r)a+=t[r]*n[r];return a}function Rp(n,e,t){if(e===0)return[];if(e===1)return[n];const a=new Array(e);for(let r=0;r<a.length-1;++r)a[r]=Math.floor(n/t[r]),n-=a[r]*t[r];return a[a.length-1]=n,a}function cr(n){return n&&n.then&&typeof n.then=="function"}const Vv="tfjsflags";class nw{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=eR,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(q().getBool("IS_TEST")||q().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,a){if(this.flagRegistry[e]={evaluationFn:t,setHook:a},this.urlFlags[e]!=null){const r=this.urlFlags[e];q().getBool("IS_TEST")||q().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${r}.`),this.set(e,r)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(cr(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Vv in e&&e[Vv].split(",").forEach(a=>{const[r,o]=a.split(":");this.urlFlags[r]=nR(r,o)})}}function eR(n){const e={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...a)=>(tR(e,a[0],a[1]),a.join("="))),e}function tR(n,e,t){n[decodeURIComponent(e)]=decodeURIComponent(t||"")}function nR(n,e){const t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function q(){return _p}let _p=null;function aR(n){_p=n}let kh;function aw(){if(kh==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");kh=n}return kh}function sR(){const n=aw();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Ap(n,e){const t=sR();if(t.has(n))return t.get(n);{const a=e();return t.set(n,a),t.get(n)}}const Op="Abs",Ip="Acos",Dp="Acosh",Oc="Add",Lp="AddN",Fp="All",Bp="Any",zp="ArgMax",Up="ArgMin",Vp="Asin",Mp="Asinh",Pp="Atan",Gp="Atanh",Hp="Atan2",Wp="AvgPool",sw="AvgPoolGrad",qp="AvgPool3D",rw="AvgPool3DGrad",jp="BatchMatMul",Xp="BatchToSpaceND",Kp="Bincount",Yp="BitwiseAnd",Qp="BroadcastArgs",Ic="Cast",Zp="Ceil",Jp="ClipByValue",em="Complex",tm="ComplexAbs",nm="Concat",am="Conv2D",sm="Conv2DBackpropFilter",rm="Conv2DBackpropInput",im="Conv3D",iw="Conv3DBackpropFilterV2",om="Conv3DBackpropInputV2",lm="Cos",um="Cosh",cm="Cumprod",fm="Cumsum",dm="CropAndResize",hm="DenseBincount",pm="DepthToSpace",mm="DepthwiseConv2dNative",gm="DepthwiseConv2dNativeBackpropFilter",ym="DepthwiseConv2dNativeBackpropInput",bm="Diag",xm="Dilation2D",vm="RealDiv",wm="Einsum",Sm="Elu",ow="EluGrad",Tm="Erf",Cm="Equal",Nm="Exp",$m="ExpandDims",Em="Expm1",km="FFT",Rm="Fill",_m="FlipLeftRight",Am="Floor",Om="FloorDiv",Im="FusedBatchNorm",Dm="GatherV2",Lm="GatherNd",Fm="Greater",Bm="GreaterEqual",Dc="Identity",zm="IFFT",Um="Imag",Vm="IsFinite",Mm="IsInf",Pm="IsNan",Gm="LeakyRelu",Hm="Less",Wm="LessEqual",qm="LinSpace",jm="Log",Xm="Log1p",Km="LogicalAnd",Ym="LogicalNot",Qm="LogicalOr",Zm="LRN",lw="LRNGrad",Jm="Max",eg="Maximum",tg="MaxPool",uw="MaxPoolGrad",ng="MaxPool3D",cw="MaxPool3DGrad",ag="MaxPoolWithArgmax",sg="Mean",rg="Min",ig="Minimum",og="MirrorPad",lg="Mod",ug="Multinomial",cg="Multiply",fg="Neg",dg="NotEqual",hg="NonMaxSuppressionV3",pg="NonMaxSuppressionV4",mg="NonMaxSuppressionV5",gg="OnesLike",yg="OneHot",bg="Pack",xg="PadV2",vg="Pow",wg="Prelu",Sg="Prod",Tg="RaggedGather",Cg="RaggedRange",Ng="RaggedTensorToTensor",$g="Range",Eg="Real",kg="Reciprocal",Rg="Relu",_g="Reshape",Ag="ResizeNearestNeighbor",fw="ResizeNearestNeighborGrad",Og="ResizeBilinear",dw="ResizeBilinearGrad",Ig="Relu6",Dg="Reverse",Lg="Round",Fg="Rsqrt",Bg="ScatterNd",zg="TensorScatterUpdate",Ug="SearchSorted",Vg="Select",Mg="Selu",Pg="Slice",Gg="Sin",Hg="Sinh",Wg="Sign",qg="Sigmoid",jg="Softplus",Xg="Sqrt",Kg="Sum",Yg="SpaceToBatchND",Qg="SplitV",Zg="Softmax",Jg="SparseFillEmptyRows",ey="SparseReshape",ty="SparseSegmentMean",ny="SparseSegmentSum",ay="SparseToDense",sy="SquaredDifference",hw="Square",ry="StaticRegexReplace",iy="StridedSlice",oy="StringNGrams",ly="StringSplit",uy="StringToHashBucketFast",cy="Sub",fy="Tan",dy="Tanh",Lc="Tile",hy="TopK",py="Transform",Xo="Transpose",my="Unique",gy="Unpack",yy="UnsortedSegmentSum",by="ZerosLike",xy="Step",cc="FromPixels",vy="RotateWithOffset",fc="_FusedMatMul",dc="FusedConv2D",hc="FusedDepthwiseConv2D";function Qn(...n){q().getBool("IS_TEST")||q().getBool("PROD")||console.warn(...n)}const pc=Ap("kernelRegistry",()=>new Map),rR=Ap("gradRegistry",()=>new Map);function mc(n,e){const t=mw(n,e);return pc.get(t)}function Xh(n){return rR.get(n)}function Kh(n){const e=pc.entries(),t=[];for(;;){const{done:a,value:r}=e.next();if(a)break;const[o,l]=r,[c]=o.split("_");c===n&&t.push(l)}return t}function pw(n){const{kernelName:e,backendName:t}=n,a=mw(e,t);pc.has(a)&&Qn(`The kernel '${e}' for backend '${t}' is already registered`),pc.set(a,n)}function mw(n,e){return`${e}_${n}`}function gw(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}var Rh,Mv;function iR(){if(Mv)return Rh;Mv=1,Rh=e;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function e(U,R,Z){this.low=U|0,this.high=R|0,this.unsigned=!!Z}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0});function t(U){return(U&&U.__isLong__)===!0}e.isLong=t;var a={},r={};function o(U,R){var Z,oe,fe;return R?(U>>>=0,(fe=0<=U&&U<256)&&(oe=r[U],oe)?oe:(Z=c(U,(U|0)<0?-1:0,!0),fe&&(r[U]=Z),Z)):(U|=0,(fe=-128<=U&&U<128)&&(oe=a[U],oe)?oe:(Z=c(U,U<0?-1:0,!1),fe&&(a[U]=Z),Z))}e.fromInt=o;function l(U,R){if(isNaN(U))return R?$:T;if(R){if(U<0)return $;if(U>=v)return G}else{if(U<=-S)return X;if(U+1>=S)return j}return U<0?l(-U,R).neg():c(U%x|0,U/x|0,R)}e.fromNumber=l;function c(U,R,Z){return new e(U,R,Z)}e.fromBits=c;var f=Math.pow;function d(U,R,Z){if(U.length===0)throw Error("empty string");if(U==="NaN"||U==="Infinity"||U==="+Infinity"||U==="-Infinity")return T;if(typeof R=="number"?(Z=R,R=!1):R=!!R,Z=Z||10,Z<2||36<Z)throw RangeError("radix");var oe;if((oe=U.indexOf("-"))>0)throw Error("interior hyphen");if(oe===0)return d(U.substring(1),R,Z).neg();for(var fe=l(f(Z,8)),de=T,P=0;P<U.length;P+=8){var ae=Math.min(8,U.length-P),ie=parseInt(U.substring(P,P+ae),Z);if(ae<8){var ge=l(f(Z,ae));de=de.mul(ge).add(l(ie))}else de=de.mul(fe),de=de.add(l(ie))}return de.unsigned=R,de}e.fromString=d;function p(U,R){return typeof U=="number"?l(U,R):typeof U=="string"?d(U,R):c(U.low,U.high,typeof R=="boolean"?R:U.unsigned)}e.fromValue=p;var m=65536,y=1<<24,x=m*m,v=x*x,S=v/2,w=o(y),T=o(0);e.ZERO=T;var $=o(0,!0);e.UZERO=$;var O=o(1);e.ONE=O;var A=o(1,!0);e.UONE=A;var z=o(-1);e.NEG_ONE=z;var j=c(-1,2147483647,!1);e.MAX_VALUE=j;var G=c(-1,-1,!0);e.MAX_UNSIGNED_VALUE=G;var X=c(0,-2147483648,!1);e.MIN_VALUE=X;var V=e.prototype;return V.toInt=function(){return this.unsigned?this.low>>>0:this.low},V.toNumber=function(){return this.unsigned?(this.high>>>0)*x+(this.low>>>0):this.high*x+(this.low>>>0)},V.toString=function(R){if(R=R||10,R<2||36<R)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(X)){var Z=l(R),oe=this.div(Z),fe=oe.mul(Z).sub(this);return oe.toString(R)+fe.toInt().toString(R)}else return"-"+this.neg().toString(R);for(var de=l(f(R,6),this.unsigned),P=this,ae="";;){var ie=P.div(de),ge=P.sub(ie.mul(de)).toInt()>>>0,be=ge.toString(R);if(P=ie,P.isZero())return be+ae;for(;be.length<6;)be="0"+be;ae=""+be+ae}},V.getHighBits=function(){return this.high},V.getHighBitsUnsigned=function(){return this.high>>>0},V.getLowBits=function(){return this.low},V.getLowBitsUnsigned=function(){return this.low>>>0},V.getNumBitsAbs=function(){if(this.isNegative())return this.eq(X)?64:this.neg().getNumBitsAbs();for(var R=this.high!=0?this.high:this.low,Z=31;Z>0&&(R&1<<Z)==0;Z--);return this.high!=0?Z+33:Z+1},V.isZero=function(){return this.high===0&&this.low===0},V.eqz=V.isZero,V.isNegative=function(){return!this.unsigned&&this.high<0},V.isPositive=function(){return this.unsigned||this.high>=0},V.isOdd=function(){return(this.low&1)===1},V.isEven=function(){return(this.low&1)===0},V.equals=function(R){return t(R)||(R=p(R)),this.unsigned!==R.unsigned&&this.high>>>31===1&&R.high>>>31===1?!1:this.high===R.high&&this.low===R.low},V.eq=V.equals,V.notEquals=function(R){return!this.eq(R)},V.neq=V.notEquals,V.ne=V.notEquals,V.lessThan=function(R){return this.comp(R)<0},V.lt=V.lessThan,V.lessThanOrEqual=function(R){return this.comp(R)<=0},V.lte=V.lessThanOrEqual,V.le=V.lessThanOrEqual,V.greaterThan=function(R){return this.comp(R)>0},V.gt=V.greaterThan,V.greaterThanOrEqual=function(R){return this.comp(R)>=0},V.gte=V.greaterThanOrEqual,V.ge=V.greaterThanOrEqual,V.compare=function(R){if(t(R)||(R=p(R)),this.eq(R))return 0;var Z=this.isNegative(),oe=R.isNegative();return Z&&!oe?-1:!Z&&oe?1:this.unsigned?R.high>>>0>this.high>>>0||R.high===this.high&&R.low>>>0>this.low>>>0?-1:1:this.sub(R).isNegative()?-1:1},V.comp=V.compare,V.negate=function(){return!this.unsigned&&this.eq(X)?X:this.not().add(O)},V.neg=V.negate,V.add=function(R){t(R)||(R=p(R));var Z=this.high>>>16,oe=this.high&65535,fe=this.low>>>16,de=this.low&65535,P=R.high>>>16,ae=R.high&65535,ie=R.low>>>16,ge=R.low&65535,be=0,L=0,Q=0,re=0;return re+=de+ge,Q+=re>>>16,re&=65535,Q+=fe+ie,L+=Q>>>16,Q&=65535,L+=oe+ae,be+=L>>>16,L&=65535,be+=Z+P,be&=65535,c(Q<<16|re,be<<16|L,this.unsigned)},V.subtract=function(R){return t(R)||(R=p(R)),this.add(R.neg())},V.sub=V.subtract,V.multiply=function(R){if(this.isZero())return T;if(t(R)||(R=p(R)),n){var Z=n.mul(this.low,this.high,R.low,R.high);return c(Z,n.get_high(),this.unsigned)}if(R.isZero())return T;if(this.eq(X))return R.isOdd()?X:T;if(R.eq(X))return this.isOdd()?X:T;if(this.isNegative())return R.isNegative()?this.neg().mul(R.neg()):this.neg().mul(R).neg();if(R.isNegative())return this.mul(R.neg()).neg();if(this.lt(w)&&R.lt(w))return l(this.toNumber()*R.toNumber(),this.unsigned);var oe=this.high>>>16,fe=this.high&65535,de=this.low>>>16,P=this.low&65535,ae=R.high>>>16,ie=R.high&65535,ge=R.low>>>16,be=R.low&65535,L=0,Q=0,re=0,he=0;return he+=P*be,re+=he>>>16,he&=65535,re+=de*be,Q+=re>>>16,re&=65535,re+=P*ge,Q+=re>>>16,re&=65535,Q+=fe*be,L+=Q>>>16,Q&=65535,Q+=de*ge,L+=Q>>>16,Q&=65535,Q+=P*ie,L+=Q>>>16,Q&=65535,L+=oe*be+fe*ge+de*ie+P*ae,L&=65535,c(re<<16|he,L<<16|Q,this.unsigned)},V.mul=V.multiply,V.divide=function(R){if(t(R)||(R=p(R)),R.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&R.low===-1&&R.high===-1)return this;var Z=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,R.low,R.high);return c(Z,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?$:T;var oe,fe,de;if(this.unsigned){if(R.unsigned||(R=R.toUnsigned()),R.gt(this))return $;if(R.gt(this.shru(1)))return A;de=$}else{if(this.eq(X)){if(R.eq(O)||R.eq(z))return X;if(R.eq(X))return O;var P=this.shr(1);return oe=P.div(R).shl(1),oe.eq(T)?R.isNegative()?O:z:(fe=this.sub(R.mul(oe)),de=oe.add(fe.div(R)),de)}else if(R.eq(X))return this.unsigned?$:T;if(this.isNegative())return R.isNegative()?this.neg().div(R.neg()):this.neg().div(R).neg();if(R.isNegative())return this.div(R.neg()).neg();de=T}for(fe=this;fe.gte(R);){oe=Math.max(1,Math.floor(fe.toNumber()/R.toNumber()));for(var ae=Math.ceil(Math.log(oe)/Math.LN2),ie=ae<=48?1:f(2,ae-48),ge=l(oe),be=ge.mul(R);be.isNegative()||be.gt(fe);)oe-=ie,ge=l(oe,this.unsigned),be=ge.mul(R);ge.isZero()&&(ge=O),de=de.add(ge),fe=fe.sub(be)}return de},V.div=V.divide,V.modulo=function(R){if(t(R)||(R=p(R)),n){var Z=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,R.low,R.high);return c(Z,n.get_high(),this.unsigned)}return this.sub(this.div(R).mul(R))},V.mod=V.modulo,V.rem=V.modulo,V.not=function(){return c(~this.low,~this.high,this.unsigned)},V.and=function(R){return t(R)||(R=p(R)),c(this.low&R.low,this.high&R.high,this.unsigned)},V.or=function(R){return t(R)||(R=p(R)),c(this.low|R.low,this.high|R.high,this.unsigned)},V.xor=function(R){return t(R)||(R=p(R)),c(this.low^R.low,this.high^R.high,this.unsigned)},V.shiftLeft=function(R){return t(R)&&(R=R.toInt()),(R&=63)===0?this:R<32?c(this.low<<R,this.high<<R|this.low>>>32-R,this.unsigned):c(0,this.low<<R-32,this.unsigned)},V.shl=V.shiftLeft,V.shiftRight=function(R){return t(R)&&(R=R.toInt()),(R&=63)===0?this:R<32?c(this.low>>>R|this.high<<32-R,this.high>>R,this.unsigned):c(this.high>>R-32,this.high>=0?0:-1,this.unsigned)},V.shr=V.shiftRight,V.shiftRightUnsigned=function(R){if(t(R)&&(R=R.toInt()),R&=63,R===0)return this;var Z=this.high;if(R<32){var oe=this.low;return c(oe>>>R|Z<<32-R,Z>>>R,this.unsigned)}else return R===32?c(Z,0,this.unsigned):c(Z>>>R-32,0,this.unsigned)},V.shru=V.shiftRightUnsigned,V.shr_u=V.shiftRightUnsigned,V.toSigned=function(){return this.unsigned?c(this.low,this.high,!1):this},V.toUnsigned=function(){return this.unsigned?this:c(this.low,this.high,!0)},V.toBytes=function(R){return R?this.toBytesLE():this.toBytesBE()},V.toBytesLE=function(){var R=this.high,Z=this.low;return[Z&255,Z>>>8&255,Z>>>16&255,Z>>>24,R&255,R>>>8&255,R>>>16&255,R>>>24]},V.toBytesBE=function(){var R=this.high,Z=this.low;return[R>>>24,R>>>16&255,R>>>8&255,R&255,Z>>>24,Z>>>16&255,Z>>>8&255,Z&255]},e.fromBytes=function(R,Z,oe){return oe?e.fromBytesLE(R,Z):e.fromBytesBE(R,Z)},e.fromBytesLE=function(R,Z){return new e(R[0]|R[1]<<8|R[2]<<16|R[3]<<24,R[4]|R[5]<<8|R[6]<<16|R[7]<<24,Z)},e.fromBytesBE=function(R,Z){return new e(R[4]<<24|R[5]<<16|R[6]<<8|R[7],R[0]<<24|R[1]<<16|R[2]<<8|R[3],Z)},Rh}var yw=iR();const bw=Z2(yw),oR=_k({__proto__:null,default:bw},[yw]);const tr=bw||oR;function Fc(n){return tr.fromString(n,!0,16)}const xw=Fc("c3a5c85c97cb3127"),er=Fc("b492b66fbe98f273"),zt=Fc("9ae16a3b2f90404f");function Yh(n){return n.xor(n.shru(47))}function vw(n,e,t){const a=n.slice(e,e+t);return tr.fromBytes(Array.from(a),!0,!0)}function Ye(n,e){return vw(n,e,8)}function Pv(n,e){return vw(n,e,4)}function yt(n,e){return e===0?n:n.shru(e).or(n.shl(64-e))}function ws(n,e,t=Fc("9ddfea08eb382d69")){let a=n.xor(e).mul(t);a=a.xor(a.shru(47));let r=e.xor(a).mul(t);return r=r.xor(r.shru(47)),r=r.mul(t),r}function lR(n,e,t,a,r,o){r=r.add(n),o=yt(o.add(r).add(a),21);const l=r;return r=r.add(e),r=r.add(t),o=o.add(yt(r,44)),[r.add(a),o.add(l)]}function Mu(n,e,t,a){return lR(Ye(n,e),Ye(n,e+8),Ye(n,e+16),Ye(n,e+24),t,a)}function uR(n,e=n.length){if(e>=8){const t=zt.add(e*2),a=Ye(n,0).add(zt),r=Ye(n,e-8),o=yt(r,37).mul(t).add(a),l=yt(a,25).add(r).mul(t);return ws(o,l,t)}if(e>=4){const t=zt.add(e*2),a=Pv(n,0);return ws(a.shl(3).add(e),Pv(n,e-4),t)}if(e>0){const t=n[0],a=n[e>>1],r=n[e-1],o=t+(a<<8),l=e+(r<<2);return Yh(zt.mul(o).xor(xw.mul(l))).mul(zt)}return zt}function cR(n,e=n.length){const t=zt.add(e*2),a=Ye(n,0).mul(er),r=Ye(n,8),o=Ye(n,e-8).mul(t),l=Ye(n,e-16).mul(zt);return ws(yt(a.add(r),43).add(yt(o,30)).add(l),a.add(yt(r.add(zt),18)).add(o),t)}function fR(n,e=n.length){const t=zt.add(e*2),a=Ye(n,0).mul(zt),r=Ye(n,8),o=Ye(n,e-8).mul(t),l=Ye(n,e-16).mul(zt),c=yt(a.add(r),43).add(yt(o,30)).add(l),f=ws(c,a.add(yt(r.add(zt),18)).add(o),t),d=Ye(n,16).mul(t),p=Ye(n,24),m=c.add(Ye(n,e-32)).mul(t),y=f.add(Ye(n,e-24)).mul(t);return ws(yt(d.add(p),43).add(yt(m,30)).add(y),d.add(yt(p.add(a),18)).add(m),t)}function dR(n,e=n.length){const t=tr.fromNumber(81,!0);if(e<=32)return e<=16?uR(n,e):cR(n,e);if(e<=64)return fR(n,e);let a=t,r=t.mul(er).add(113),o=Yh(r.mul(zt).add(113)).mul(zt),l=[tr.UZERO,tr.UZERO],c=[tr.UZERO,tr.UZERO];a=a.mul(zt).add(Ye(n,0));let f=0;const d=(e-1>>6)*64,p=d+(e-1&63)-63;do a=yt(a.add(r).add(l[0]).add(Ye(n,f+8)),37).mul(er),r=yt(r.add(l[1]).add(Ye(n,f+48)),42).mul(er),a=a.xor(c[1]),r=r.add(l[0]).add(Ye(n,f+40)),o=yt(o.add(c[0]),33).mul(er),l=Mu(n,f,l[1].mul(er),a.add(c[0])),c=Mu(n,f+32,o.add(c[1]),r.add(Ye(n,f+16))),[o,a]=[a,o],f+=64;while(f!==d);const m=er.add(o.and(255).shl(1));return f=p,c[0]=c[0].add(e-1&63),l[0]=l[0].add(c[0]),c[0]=c[0].add(l[0]),a=yt(a.add(r).add(l[0]).add(Ye(n,f+8)),37).mul(m),r=yt(r.add(l[1]).add(Ye(n,f+48)),42).mul(m),a=a.xor(c[1].mul(9)),r=r.add(l[0].mul(9).add(Ye(n,f+40))),o=yt(o.add(c[0]),33).mul(m),l=Mu(n,f,l[1].mul(m),a.add(c[0])),c=Mu(n,f+32,o.add(c[1]),r.add(Ye(n,f+16))),[o,a]=[a,o],ws(ws(l[0],c[0],m).add(Yh(r).mul(xw)).add(o),ws(l[1],c[1],m).add(a),m)}function Oi(n,e){return e==="string"?or(n):Bc([n],e)}function hR(n,e){return n instanceof Float32Array&&e==="float32"||n instanceof Int32Array&&e==="int32"||n instanceof Uint8Array&&e==="bool"}function Bc(n,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=fr(n)),q().getBool("DEBUG")&&Xk(n,e),hR(n,e))return n;if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool"){const t=new Uint8Array(n.length);for(let a=0;a<t.length;++a)Math.round(n[a])!==0&&(t[a]=1);return t}else throw new Error(`Unknown data type ${e}`)}function Xn(){return q().platform.now()}function or(n,e="utf-8"){return e=e||"utf-8",q().platform.encode(n,e)}function wi(n,e="utf-8"){return e=e||"utf-8",q().platform.decode(n,e)}function Un(n){return q().platform.isTypedArray!=null?q().platform.isTypedArray(n):gw(n)}function fr(n,e=[],t=!1){if(e==null&&(e=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||cr(n)||n==null||Un(n)&&t)e.push(n);else if(Array.isArray(n)||Un(n))for(let a=0;a<n.length;++a)fr(n[a],e,t);else{let a=-1;for(const r of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(r)&&(a=Math.max(a,Number(r)));for(let r=0;r<=a;r++)fr(n[r],e,t)}return e}class pR{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new gR)}profileKernel(e,t,a){let r;const o=()=>{r=a()};let l;const c=Xn();if(this.backendTimer.timerAvailable())l=this.backendTimer.time(o);else{o();for(const d of r)d.dataSync();l=Promise.resolve({kernelMs:Xn()-c})}if(q().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let d=0;d<r.length;d++){const p=r[d];p.data().then(m=>{mR(m,p.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:l.then(d=>d.kernelMs),extraInfo:l.then(d=>d.getExtraProfileInfo!=null?d.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:t,outputs:a,timeMs:r,inputs:o,extraInfo:l}=e;a.forEach(c=>{Promise.all([c.data(),r,l]).then(f=>{this.logger.logKernelProfile(t,c,f[0],f[1],o,f[2])})})}}function mR(n,e,t){if(e!=="float32")return!1;for(let a=0;a<n.length;a++){const r=n[a];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${t}'`),!0}return!1}let gR=class{logKernelProfile(e,t,a,r,o,l){const c=typeof r=="number"?pi(`${r}ms`,9):r.error,f=pi(e,25),d=t.rank,p=t.size,m=pi(t.shape.toString(),14);let y="";for(const x in o){const v=o[x];if(v!=null){const S=v.shape||t.shape,w=S.length;y+=`${x}: ${w}D ${w>0?S:""} `}}console.log(`%c${f}	%c${c}	%c${d}D ${m}	%c${p}	%c${y}	%c${l}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function yR(n,e,t){const a={},r={};for(let f=0;f<e.length;f++)a[e[f].id]=!0;for(let f=0;f<n.length;f++){const d=n[f],p=d.inputs;for(const m in p){const y=p[m];let x=!1;for(let v=0;v<e.length;v++)if(a[y.id]){d.outputs.forEach(S=>a[S.id]=!0),x=!0,r[d.id]=!0;break}if(x)break}}const o={};o[t.id]=!0;const l={};for(let f=n.length-1;f>=0;f--){const d=n[f],p=d.inputs;for(let m=0;m<d.outputs.length;m++)if(o[d.outputs[m].id]){for(const y in p)o[p[y].id]=!0,l[d.id]=!0;break}}const c=[];for(let f=0;f<n.length;f++){const d=n[f];if(r[d.id]&&l[d.id]){const p={};for(const y in d.inputs){const x=d.inputs[y];a[x.id]&&(p[y]=x)}const m=Object.assign({},d);m.inputs=p,m.outputs=d.outputs,c.push(m)}}return c}function bR(n,e,t,a){for(let r=e.length-1;r>=0;r--){const o=e[r],l=[];if(o.outputs.forEach(f=>{const d=n[f.id];d!=null?l.push(d):l.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const c=o.gradient(l);for(const f in o.inputs){if(!(f in c))throw new Error(`Cannot backprop through input ${f}. Available gradients found: ${Object.keys(c)}.`);const d=t(()=>c[f]());if(d.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${f} must have 'float32' dtype, but has '${d.dtype}'`);const p=o.inputs[f];if(!st(d.shape,p.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${f}' has shape '${d.shape}', which does not match the shape of the input '${p.shape}'`);if(n[p.id]==null)n[p.id]=d;else{const m=n[p.id];n[p.id]=a(m,d),m.dispose()}}}}const Gv=20,Po=3,_h=7;function xR(n,e,t,a){const r=Nt(e),o=vR(n,e,t,r),l=e.length,c=Zu(n,e,t,r,o),f=["Tensor"];return a&&(f.push(`  dtype: ${t}`),f.push(`  rank: ${l}`),f.push(`  shape: [${e}]`),f.push("  values:")),f.push(c.map(d=>"    "+d).join(`
`)),f.join(`
`)}function vR(n,e,t,a){const r=se(e),o=a[a.length-1],l=new Array(o).fill(0),c=e.length,f=t==="complex64"?Wo(n):n;if(c>1)for(let d=0;d<r/o;d++){const p=d*o;for(let m=0;m<o;m++)l[m]=Math.max(l[m],Ho(f[p+m],0,t).length)}return l}function Ho(n,e,t){let a;return Array.isArray(n)?a=`${parseFloat(n[0].toFixed(_h))} + ${parseFloat(n[1].toFixed(_h))}j`:Ac(n)?a=`'${n}'`:t==="bool"?a=ww(n):a=parseFloat(n.toFixed(_h)).toString(),pi(a,e)}function ww(n){return n===0?"false":"true"}function Zu(n,e,t,a,r,o=!0){const l=t==="complex64"?2:1,c=e[0],f=e.length;if(f===0){if(t==="complex64"){const S=Wo(n);return[Ho(S[0],0,t)]}return t==="bool"?[ww(n[0])]:[n[0].toString()]}if(f===1){if(c>Gv){const w=Po*l;let T=Array.from(n.slice(0,w)),$=Array.from(n.slice((c-Po)*l,c*l));return t==="complex64"&&(T=Wo(T),$=Wo($)),["["+T.map((O,A)=>Ho(O,r[A],t)).join(", ")+", ..., "+$.map((O,A)=>Ho(O,r[c-Po+A],t)).join(", ")+"]"]}return["["+(t==="complex64"?Wo(n):Array.from(n)).map((w,T)=>Ho(w,r[T],t)).join(", ")+"]"]}const d=e.slice(1),p=a.slice(1),m=a[0]*l,y=[];if(c>Gv){for(let S=0;S<Po;S++){const w=S*m,T=w+m;y.push(...Zu(n.slice(w,T),d,t,p,r,!1))}y.push("...");for(let S=c-Po;S<c;S++){const w=S*m,T=w+m;y.push(...Zu(n.slice(w,T),d,t,p,r,S===c-1))}}else for(let S=0;S<c;S++){const w=S*m,T=w+m;y.push(...Zu(n.slice(w,T),d,t,p,r,S===c-1))}const x=f===2?",":"";y[0]="["+(c>0?y[0]+x:"");for(let S=1;S<y.length-1;S++)y[S]=" "+y[S]+x;let v=`,
`;for(let S=2;S<f;S++)v+=`
`;return y[y.length-1]=" "+y[y.length-1]+"]"+(o?"":v),y}function Wo(n){const e=[];for(let t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}class dr{constructor(e,t,a){if(this.dtype=t,this.shape=e.slice(),this.size=se(e),a!=null){const r=a.length;_(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=a||bt(t,this.size),this.strides=Nt(e)}set(e,...t){t.length===0&&(t=[0]),_(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);const a=this.locToIndex(t);this.values[a]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(const r of e){if(r<0||r>=this.shape[t]){const o=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(o)}t++}let a=e[e.length-1];for(let r=0;r<e.length-1;++r)a+=this.strides[r]*e[r];return this.values[a]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let a=0;a<e.length-1;++a)t+=this.strides[a]*e[a];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const t=new Array(this.shape.length);for(let a=0;a<t.length-1;++a)t[a]=Math.floor(e/this.strides[a]),e-=t[a]*this.strides[a];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return Kn().makeTensor(this.values,this.shape,this.dtype)}}let Kn=null,fi=null;function wR(n){Kn=n}function SR(n){fi=n}class St{constructor(e,t,a,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=se(e),this.strides=Nt(e),this.dataId=a,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return fi.buffer(this.shape,this.dtype,e)}bufferSync(){return fi.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return qh(this.shape,e,this.dtype==="complex64")}arraySync(){return qh(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=Kn().read(this.dataId);if(this.dtype==="string"){const t=await e;try{return t.map(a=>wi(a))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),Kn().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=Kn().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>wi(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await Kn().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Kn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return fi.print(this,e)}clone(){return this.throwIfDisposed(),fi.clone(this)}toString(e=!1){const t=this.dataSync();return xR(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),fi.cast(this,e)}variable(e=!0,t,a){return this.throwIfDisposed(),Kn().makeVariable(this,e,t,a)}}Object.defineProperty(St,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Sw(){return Ap("Tensor",()=>St)}Sw();class Ko extends St{constructor(e,t,a,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=a}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!st(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Kn().disposeTensor(this),this.dataId=e.dataId,Kn().incRef(this,null)}dispose(){Kn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Ko,Symbol.hasInstance,{value:n=>n instanceof St&&n.assign!=null&&n.assign instanceof Function});var Qh;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Qh||(Qh={}));var Zh;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Zh||(Zh={}));var Jh;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Jh||(Jh={}));var ep;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(ep||(ep={}));var tp;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(tp||(tp={}));const TR={float32:ep,int32:Zh,bool:Jh,complex64:tp};function ta(n,e){if(n==="string"||e==="string"){if(n==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${n} with ${e}`)}return TR[n][e]}function zc(n){return ta(n,"int32")}function Tw(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Cw(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function it(n,e){if(n.dtype===e.dtype)return[n,e];const t=ta(n.dtype,e.dtype);return[n.cast(t),e.cast(t)]}function CR(n,e){_(n.dtype===e.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${e.dtype}) input must match`)}function Nw(n){const e=[];return $w(n,e,new Set),e}function $w(n,e,t){if(n==null)return;if(n instanceof St){e.push(n);return}if(!NR(n))return;const a=n;for(const r in a){const o=a[r];t.has(o)||(t.add(o),$w(o,e,t))}}function NR(n){return Array.isArray(n)||typeof n=="object"}function Ah(n){return n.kernelName!=null}class Hv{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class Si{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Hv}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const a=e[t];if(await this.initializeBackend(a).success){await this.setBackend(a);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,a=1){return e in this.registryFactory?(Qn(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:a},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:t,asyncInit:a}=this.initializeBackend(e);if(!(a?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new pR(this.backendInstance),!0}setupRegisteredKernels(){Kh(this.backendName).forEach(t=>{t.setupFunc!=null&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Kh(e).forEach(a=>{a.disposeFunc!=null&&a.disposeFunc(this.registry[e])})}initializeBackend(e){const t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const a=t.factory();if(a&&!(a instanceof Ep)&&typeof a.then=="function"){const r=++this.pendingBackendInitId,o=a.then(l=>r<this.pendingBackendInitId?!1:(this.registry[e]=l,this.pendingBackendInit=null,!0)).catch(l=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,Qn(`Initialization of backend ${e} failed`),Qn(l.stack||l.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[e]=a,{success:!0,asyncInit:!1}}catch(a){return Qn(`Initialization of backend ${e} failed`),Qn(a.stack||a.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const a=e[t],{success:r,asyncInit:o}=this.initializeBackend(a);if(o||r)return{name:a,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const a=this.state.tensorInfo.get(t),r=a.backend,o=this.readSync(t),l=r.refCount(t);r.disposeData(t,!0),a.backend=e,e.move(t,o,a.shape,a.dtype,l),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let a=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=e}let r;return this.scopedRun(()=>this.startScope(a),()=>this.endScope(r),()=>(r=t(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(e,t,a){e();try{const r=a();return t(),r}catch(r){throw t(),r}}nextTensorId(){return Si.nextTensorId++}nextVariableId(){return Si.nextVariableId++}clone(e){const t=F.runKernel(Dc,{x:e}),a={x:e},r=l=>({x:()=>{const c="float32",f={x:l},d={dtype:c};return F.runKernel(Ic,f,d)}}),o=[];return this.addTapeNode(this.state.activeScope.name,a,[t],r,o,{}),t}runKernel(e,t,a){if(this.backendName==null&&this.backend,!(mc(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:a})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,a){const r=this.backend.numDataIds();let o=0;a.forEach(f=>{o+=f.dtype==="complex64"?3:1});const l=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],c=r-t-o-l;if(c>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${c} data ids) after running '${e}'`)}runKernelFunc(e){let t,a=[];const r=this.isTapeOn(),o=this.state.numBytes,l=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let c;this.backendName==null&&this.backend;let f;const d=Ah(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Ah(e)){const{kernelName:v,inputs:S,attrs:w}=e;this.backendName==null&&this.backend;const T=mc(v,this.backendName);_(T!=null,()=>`Cannot find registered kernel '${v}' for backend '${this.backendName}'`),c=()=>{const $=this.backend.numDataIds();f=T.kernelFunc({inputs:S,attrs:w,backend:this.backend});const O=Array.isArray(f)?f:[f];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(v,$,O);const A=O.map(z=>z.rank!=null?z:this.makeTensorFromTensorInfo(z));if(r){const z=this.getTensorsForGradient(v,S,A);a=this.saveTensorsForBackwardMode(z)}return A}}else{const{forwardFunc:v}=e,S=w=>{r&&(a=w.map(T=>this.keep(this.clone(T))))};c=()=>{const w=this.backend.numDataIds();f=this.tidy(()=>v(this.backend,S));const T=Array.isArray(f)?f:[f];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(d,w,T),T}}const{inputs:p,attrs:m}=e,y=Ah(e)?null:e.backwardsFunc;let x;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=c():(x=this.profiler.profileKernel(d,p,()=>c()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(x),t=x.outputs)}),r&&this.addTapeNode(d,p,t,y,a,m),this.state.profiling&&this.state.activeProfile.kernels.push({name:d,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-l,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(p).map(v=>p[v]!=null?p[v].shape:null),outputShapes:t.map(v=>v.shape),kernelTimeMs:x.timeMs,extraInfo:x.extraInfo}),Array.isArray(f)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(a=>this.keep(this.clone(a)))}getTensorsForGradient(e,t,a){const r=Xh(e);if(r!=null){const o=r.inputsToSave||[],l=r.outputsToSave||[];let c;r.saveAllInputs?(_(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),c=Object.keys(t).map(d=>t[d])):c=o.map(d=>t[d]);const f=a.filter((d,p)=>l[p]);return c.concat(f)}return[]}makeTensor(e,t,a,r){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");a=a||"float32",r=r||this.backend;let o=e;a==="string"&&Ac(e[0])&&(o=e.map(f=>or(f)));const l=r.write(o,t,a),c=new St(t,a,l,this.nextTensorId());if(this.trackTensor(c,r),a==="string"){const f=this.state.tensorInfo.get(l),d=Qk(o);this.state.numBytes+=d-f.bytes,f.bytes=d}return c}makeTensorFromDataId(e,t,a,r){a=a||"float32";const o={dataId:e,shape:t,dtype:a};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(e,t){const{dataId:a,shape:r,dtype:o}=e,l=new St(r,o,a,this.nextTensorId());return this.trackTensor(l,t),l}makeVariable(e,t=!0,a,r){a=a||this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));const o=new Ko(e,t,a,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let a=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(a=e.size*uc(e.dtype)),this.state.numBytes+=a,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:a})),e instanceof Ko||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const a=e.size*uc(e.dtype);this.state.numBytes-=a}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,a=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-a;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,a,r,o,l){const c={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:a,saved:o},f=Xh(e);f!=null&&(r=f.gradFunc),r!=null&&(c.gradient=d=>(d=d.map((p,m)=>{if(p==null){const y=a[m],x=Ts(y.size,y.dtype);return this.makeTensor(x,y.shape,y.dtype)}return p}),r(d.length>1?d:d[0],o,l))),this.state.activeTape.push(c)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=Nw(e),a=new Set(t.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const l=this.state.activeScope.track[o];!l.kept&&!a.has(l.id)&&l.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(e,t,a,r=!1){if(_(t.length>0,()=>"gradients() received an empty list of xs."),a!=null&&a.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${a.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));_(o instanceof St,()=>"The result y returned by f() must be a tensor.");const l=yR(this.state.activeTape,t,o);if(!r&&l.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const c={};c[o.id]=a??$R(o.shape),bR(c,l,d=>this.tidy(d),ER);const f=t.map(d=>c[d.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(d=>{for(const p of d.saved)p.dispose()}),this.state.activeTape=null),{value:o,grads:f}})}customGrad(e){return _(Hh(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{_(t.every(c=>c instanceof St),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let a;const r={};t.forEach((c,f)=>{r[f]=c});const o=(c,f)=>(a=e(...t,f),_(a.value instanceof St,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),_(Hh(a.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),a.value),l=(c,f)=>{const d=a.gradFunc(c,f),p=Array.isArray(d)?d:[d];_(p.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),_(p.every(y=>y instanceof St),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const m={};return p.forEach((y,x)=>{m[x]=()=>y}),m};return this.runKernelFunc({forwardFunc:o,backwardsFunc:l,inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=Xn(),a=await this.backend.time(e);return a.wallMs=Xn()-t,a}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Hv;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Si.nextTensorId=0;Si.nextVariableId=0;function $R(n){const e=tw(se(n),"float32");return F.makeTensor(e,n,"float32")}function Ew(){const n=aw();if(n._tfengine==null){const e=new nw(n);n._tfengine=new Si(e)}return aR(n._tfengine.ENV),wR(()=>n._tfengine),n._tfengine}const F=Ew();function ER(n,e){const t={a:n,b:e};return F.runKernel(Oc,t)}function kR(){return typeof navigator<"u"&&navigator!=null}function kw(n){if(n||kR()){if(n||(n=navigator),n.product==="ReactNative")return!0;const e=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!e){const t=n;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function Rw(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const qt=q();qt.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});qt.registerFlag("IS_BROWSER",()=>Rw());qt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");qt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));qt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));qt.registerFlag("PROD",()=>!1);qt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>qt.getBool("DEBUG"));qt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);qt.registerFlag("IS_TEST",()=>!1);qt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>qt.getBool("DEBUG"));qt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);qt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);qt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function ks(n,e){let t=n;if(Un(n))return e==="string"?[]:[n.length];if(Tw(n)){const r=n.channels||"RGBA";return[n.height,n.width*r.length]}else if(Cw(n))return[n.buffer.size/(e==null?4:uc(e))];if(!Array.isArray(n))return[];const a=[];for(;Array.isArray(t)||Un(t)&&e!=="string";)a.push(t.length),t=t[0];return Array.isArray(n)&&q().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&_w(n,a,[]),a}function _w(n,e,t){if(t=t||[],!Array.isArray(n)&&!Un(n)){_(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}_(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${n.length} elements`),_(n.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${n.length} elements`);const a=e.slice(1);for(let r=0;r<n.length;++r)_w(n[r],a,t.concat(r))}function Wv(n,e,t,a){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==e||n==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${a}' must be ${n} tensor, but got ${e} tensor`)}}function k(n,e,t,a="numeric"){if(n instanceof Sw())return Wv(a,n.dtype,e,t),n;let r=ol(n);if(r!=="string"&&["bool","int32","float32"].indexOf(a)>=0&&(r=a),Wv(a,r,e,t),n==null||!Un(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const f=n==null?"null":n.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${f}'`)}const o=ks(n,r);!Un(n)&&!Array.isArray(n)&&(n=[n]);const c=r!=="string"?Bc(n,r):fr(n,[],!0);return F.makeTensor(c,o,r)}function gc(n,e,t,a="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((o,l)=>k(o,`${e}[${l}]`,t,a))}const wy="__op";function I(n){const e=Object.keys(n);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0];const a=n[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+wy;const r=(...o)=>{F.startScope(t);try{const l=a(...o);return cr(l)&&console.error("Cannot return a Promise inside of tidy."),F.endScope(l),l}catch(l){throw F.endScope(null),l}};return Object.defineProperty(r,"name",{value:t,configurable:!0}),r}function RR(n,e){const t=k(n,"real","complex"),a=k(e,"imag","complex");vn(t.shape,a.shape,`real and imag shapes, ${t.shape} and ${a.shape}, must match in call to tf.complex().`);const r={real:t,imag:a};return F.runKernel(em,r)}const Ua=I({complex_:RR});function Rs(n,e,t,a){if(a==null)a=ol(n);else if(a==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Cw(n)||Tw(n)){if(a!=="float32"&&a!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${a}.`);return F.backend.createTensorFromGPUData(n,e||t,a)}if(!Un(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){wn(e);const r=se(e),o=se(t);_(r===o,()=>`Based on the provided shape, [${e}], the tensor should have ${r} values but has ${o}`);for(let l=0;l<t.length;++l){const c=t[l],f=l===t.length-1?c!==se(e.slice(l)):!0;_(t[l]===e[l]||!f,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!Un(n)&&!Array.isArray(n)&&(n=[n]),e=e||t,n=a!=="string"?Bc(n,a):fr(n,[],!0),F.makeTensor(n,e,a)}function Jn(n,e,t){const a=ks(n,t);return Rs(n,e,a,t)}const hr={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class aa{static join(e){return new aa(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(a=>Un(a)?a.buffer:a),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let a=0;a<e.length;a++){const r=e[a];a!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const o=t+r.byteLength;this.shards.push({buffer:r,start:t,end:o}),t=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);const a=this.findShardForByte(e);if(a===-1)throw new Error(`Could not find start shard for byte ${e}`);const r=t-e,o=new ArrayBuffer(r),l=new Uint8Array(o);let c=0;for(let f=a;f<this.shards.length;f++){const d=this.shards[f],m=e+c-d.start,y=c,v=Math.min(t,d.end)-d.start,S=new Uint8Array(d.buffer,m,v-m);if(l.set(S,y),c+=S.length,t<d.end)break}return o}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(r){return e<r.start?-1:e>=r.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const a=_R(this.shards,t);return a===-1?-1:(this.previousShardIndex=a,this.previousShardIndex)}}function _R(n,e){let t=0,a=n.length;for(;t<=a;){const r=Math.floor((a-t)/2)+t,o=e(n[r]);if(o===0)return r;o<0?a=r:t=r+1}return-1}function Oa(){return F}function De(n,e){return F.tidy(n,e)}function Mt(n){Nw(n).forEach(t=>t.dispose())}function Zn(n){return F.keep(n)}function Aw(){return F.backendName}function Ow(n,e,t=1){return F.registerBackend(n,e,t)}function Iw(){return F.backend}const Cs=4;async function AR(n,e){const t=[],a=[],r=Array.isArray(n)?n.map(l=>l.name):Object.keys(n);for(let l=0;l<r.length;++l){const c=r[l],f=Array.isArray(n)?n[l].tensor:n[c];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string"&&f.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${c}': ${f.dtype}`);const d={name:c,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){const p=new Promise(async m=>{const y=await f.bytes(),x=y.reduce((w,T)=>w+T.length,0)+Cs*y.length,v=new Uint8Array(x);let S=0;for(let w=0;w<y.length;w++){const T=y[w],$=new Uint8Array(new Uint32Array([T.length]).buffer);v.set($,S),S+=Cs,v.set(T,S),S+=T.length}m(v)});a.push(p)}else a.push(f.data());e!=null&&(d.group=e),t.push(d)}const o=await Promise.all(a);return{data:DR(o),specs:t}}function Dw(n,e){const t=new aa(n),a={};let r=0;for(const o of e){const l=OR(o,(c,f)=>t.slice(r+c,r+f));a[o.name]=Lw(o,t.slice(r,r+l)),r+=l}return a}function OR(n,e){const t=se(n.shape);let a;if("quantization"in n){const r=n.quantization;a=hr[r.dtype]}else if(n.dtype==="string"){let r=0;for(let o=0;o<t;o++)r+=Cs+new Uint32Array(e(r,r+Cs))[0];return r}else a=hr[n.dtype];return t*a}async function IR(n,e){const t=se(n.shape);let a;if("quantization"in n){const r=n.quantization;a=hr[r.dtype]}else if(n.dtype==="string"){let r=0;for(let o=0;o<t;o++)r+=Cs+new Uint32Array(await e(r,r+Cs))[0];return r}else a=hr[n.dtype];return t*a}function Lw(n,e){const t=n.name,a=n.dtype,r=n.shape,o=se(r);let l,c=0;if("quantization"in n){const f=n.quantization;if(f.dtype==="uint8"||f.dtype==="uint16"){if(!("min"in f&&"scale"in f))throw new Error(`Weight ${n.name} with quantization ${f.dtype} doesn't have corresponding metadata min and scale.`)}else if(f.dtype==="float16"){if(a!=="float32")throw new Error(`Weight ${n.name} is quantized with ${f.dtype} which only supports weights of type float32 not ${a}.`)}else throw new Error(`Weight ${n.name} has unknown quantization dtype ${f.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const d=hr[f.dtype],p=f.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(a==="float32")if(f.dtype==="uint8"||f.dtype==="uint16"){l=new Float32Array(p.length);for(let m=0;m<p.length;m++){const y=p[m];l[m]=y*f.scale+f.min}}else if(f.dtype==="float16")l=MR()(p);else throw new Error(`Unsupported quantization type ${f.dtype} for weight type float32.`);else if(a==="int32"){if(f.dtype!=="uint8"&&f.dtype!=="uint16")throw new Error(`Unsupported quantization type ${f.dtype} for weight type int32.`);l=new Int32Array(p.length);for(let m=0;m<p.length;m++){const y=p[m];l[m]=Math.round(y*f.scale+f.min)}}else throw new Error(`Unsupported dtype in weight '${t}': ${a}`);c+=o*d}else if(a==="string"){const f=se(n.shape);l=[];for(let d=0;d<f;d++){const p=new Uint32Array(e.slice(c,c+Cs))[0];c+=Cs;const m=new Uint8Array(e.slice(c,c+p));l.push(m),c+=p}}else{const f=hr[a];if(a==="float32")l=new Float32Array(e);else if(a==="int32")l=new Int32Array(e);else if(a==="bool")l=new Uint8Array(e);else if(a==="complex64"){l=new Float32Array(e);const d=new Float32Array(l.length/2),p=new Float32Array(l.length/2);for(let v=0;v<d.length;v++)d[v]=l[v*2],p[v]=l[v*2+1];const m=Jn(d,r,"float32"),y=Jn(p,r,"float32"),x=Ua(m,y);return m.dispose(),y.dispose(),x}else throw new Error(`Unsupported dtype in weight '${t}': ${a}`);c+=o*f}return Jn(l,r,a)}async function qv(n,e,t){let a=new Uint8Array(e);for(;a.byteLength<t;){const{done:r,value:o}=await n.read();if(r&&o==null){const c=t-a.byteLength;throw new Error(`Reader is done but ${c} bytes are still expected`)}const l=new Uint8Array(a.length+o.byteLength);l.set(a,0),l.set(new Uint8Array(o),a.length),a=l}return a.buffer}async function Fw(n,e){const t={},a=n.getReader();let r=new ArrayBuffer(0);for(const o of e){const l=await IR(o,async(d,p)=>(r=await qv(a,r,p),r.slice(d,p)));r=await qv(a,r,l);const c=r.slice(0,l);r=r.slice(l);const f=Lw(o,c);if(t[o.name]=f,Aw()==="webgpu"){const d=Iw();"uploadToGPU"in d&&se(f.shape)>=q().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&d.uploadToGPU(f.dataId)}}return t}function DR(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let e=0;const t=[];n.forEach(o=>{if(e+=o.byteLength,t.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const a=new Uint8Array(e);let r=0;return t.forEach(o=>{a.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),a.buffer}const Sy=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function jv(n){return Sy?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function LR(n){if(Sy)return Buffer.from(n).toString("base64");const e=new Uint8Array(n);let t="";for(let a=0,r=e.length;a<r;a++)t+=String.fromCharCode(e[a]);return btoa(t)}function FR(n){if(Sy){const a=Buffer.from(n,"base64");return a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)}const e=atob(n),t=new Uint8Array(e.length);for(let a=0;a<e.length;++a)t.set([e.charCodeAt(a)],a);return t.buffer}function BR(n){return aa.join(n)}function Xv(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);const t=n.split("/");return t[t.length-1]}function Bw(n,e){const t={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:e};return n.signature!=null&&(t.signature=n.signature),n.userDefinedMetadata!=null&&(t.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(t.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(t.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(t.trainingConfig=n.trainingConfig),t}function zw(n,e,t){const a={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(a.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");a.weightSpecs=e,a.weightData=t}return n.signature!=null&&(a.signature=n.signature),n.userDefinedMetadata!=null&&(a.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(a.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(a.initializerSignature=n.initializerSignature),a}async function Ty(n,e){let t,a;return n.weightsManifest!=null&&([t,a]=await e(n.weightsManifest)),zw(n,t,a)}function ll(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:jv(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:jv(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new aa(n.weightData).byteLength}}function np(n){const e=[];for(const t of n)e.push(...t.weights);return e}function zR(){const n=t=>{let a=t<<13,r=0;for(;(a&8388608)===0;)r-=8388608,a<<=1;return a&=-8388609,r+=947912704,a|r},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=n(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function UR(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let e=1;e<31;e++)n[e]=e<<23;for(let e=33;e<63;e++)n[e]=2147483648+(e-32<<23);return n}function VR(){const n=new Uint32Array(64);for(let e=0;e<64;e++)n[e]=1024;return n[0]=n[32]=0,n}function MR(){const n=zR(),e=UR(),t=VR();return a=>{const r=new ArrayBuffer(4*a.length),o=new Uint32Array(r);for(let l=0;l<a.length;l++){const c=a[l],f=n[t[c>>10]+(c&1023)]+e[c>>10];o[l]=f}return new Float32Array(r)}}class at{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return at.instance==null&&(at.instance=new at),at.instance}static registerSaveRouter(e){at.getInstance().saveRouters.push(e)}static registerLoadRouter(e){at.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return at.getHandlers(e,"save")}static getLoadHandlers(e,t){return at.getHandlers(e,"load",t)}static getHandlers(e,t,a){const r=[];return(t==="load"?at.getInstance().loadRouters:at.getInstance().saveRouters).forEach(l=>{const c=l(e,a);c!==null&&r.push(c)}),r}}const PR=n=>at.registerSaveRouter(n),GR=n=>at.registerLoadRouter(n),HR=n=>at.getSaveHandlers(n),WR=(n,e)=>at.getLoadHandlers(n,e);const ap="tensorflowjs",sp=1,ir="models_store",bs="model_info_store";function Uw(){if(!q().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,e=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function rp(n){const e=n.result;e.createObjectStore(ir,{keyPath:"modelPath"}),e.createObjectStore(bs,{keyPath:"modelPath"})}class pr{constructor(e){if(this.indexedDB=Uw(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((a,r)=>{const o=this.indexedDB.open(ap,sp);o.onupgradeneeded=()=>rp(o),o.onsuccess=()=>{const l=o.result;if(t==null){const c=l.transaction(ir,"readonly"),d=c.objectStore(ir).get(this.modelPath);d.onsuccess=()=>{if(d.result==null)return l.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));a(d.result.modelArtifacts)},d.onerror=p=>(l.close(),r(d.error)),c.oncomplete=()=>l.close()}else{t.weightData=aa.join(t.weightData);const c=ll(t),f=l.transaction(bs,"readwrite");let d=f.objectStore(bs),p;try{p=d.put({modelPath:this.modelPath,modelArtifactsInfo:c})}catch(y){return r(y)}let m;p.onsuccess=()=>{m=l.transaction(ir,"readwrite");const y=m.objectStore(ir);let x;try{x=y.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:c})}catch(v){return r(v)}x.onsuccess=()=>a({modelArtifactsInfo:c}),x.onerror=v=>{d=f.objectStore(bs);const S=d.delete(this.modelPath);S.onsuccess=()=>(l.close(),r(x.error)),S.onerror=w=>(l.close(),r(x.error))}},p.onerror=y=>(l.close(),r(p.error)),f.oncomplete=()=>{m==null?l.close():m.oncomplete=()=>l.close()}}},o.onerror=l=>r(o.error)})}}pr.URL_SCHEME="indexeddb://";const Vw=n=>q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(pr.URL_SCHEME)?qR(n.slice(pr.URL_SCHEME.length)):null;at.registerSaveRouter(Vw);at.registerLoadRouter(Vw);function qR(n){return new pr(n)}function jR(n){return n.startsWith(pr.URL_SCHEME)?n.slice(pr.URL_SCHEME.length):n}class XR{constructor(){this.indexedDB=Uw()}async listModels(){return new Promise((e,t)=>{const a=this.indexedDB.open(ap,sp);a.onupgradeneeded=()=>rp(a),a.onsuccess=()=>{const r=a.result,o=r.transaction(bs,"readonly"),c=o.objectStore(bs).getAll();c.onsuccess=()=>{const f={};for(const d of c.result)f[d.modelPath]=d.modelArtifactsInfo;e(f)},c.onerror=f=>(r.close(),t(c.error)),o.oncomplete=()=>r.close()},a.onerror=r=>t(a.error)})}async removeModel(e){return e=jR(e),new Promise((t,a)=>{const r=this.indexedDB.open(ap,sp);r.onupgradeneeded=()=>rp(r),r.onsuccess=()=>{const o=r.result,l=o.transaction(bs,"readwrite"),c=l.objectStore(bs),f=c.get(e);let d;f.onsuccess=()=>{if(f.result==null)return o.close(),a(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const p=c.delete(e),m=()=>{d=o.transaction(ir,"readwrite");const x=d.objectStore(ir).delete(e);x.onsuccess=()=>t(f.result.modelArtifactsInfo),x.onerror=v=>a(f.error)};p.onsuccess=m,p.onerror=y=>(m(),o.close(),a(f.error))}},f.onerror=p=>(o.close(),a(f.error)),l.oncomplete=()=>{d==null?o.close():d.oncomplete=()=>o.close()}},r.onerror=o=>a(r.error)})}}const Fa="/",di="tensorflowjs_models",Mw="info",KR="model_topology",YR="weight_specs",QR="weight_data",ZR="model_metadata";function Pw(n){return{info:[di,n,Mw].join(Fa),topology:[di,n,KR].join(Fa),weightSpecs:[di,n,YR].join(Fa),weightData:[di,n,QR].join(Fa),modelMetadata:[di,n,ZR].join(Fa)}}function Gw(n){for(const e of Object.values(n))window.localStorage.removeItem(e)}function JR(n){const e=n.split(Fa);if(e.length<3)throw new Error(`Invalid key format: ${n}`);return e.slice(1,e.length-1).join(Fa)}function e_(n){return n.startsWith(mr.URL_SCHEME)?n.slice(mr.URL_SCHEME.length):n}class mr{constructor(e){if(!q().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Pw(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),a=JSON.stringify(e.weightSpecs),r=ll(e),o=aa.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,a),this.LS.setItem(this.keys.weightData,LR(o));const l={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(l)),{modelArtifactsInfo:r}}catch{throw Gw(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},a=JSON.parse(this.LS.getItem(this.keys.topology));if(a==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=a;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const c=JSON.parse(o);t.format=c.format,t.generatedBy=c.generatedBy,t.convertedBy=c.convertedBy,c.signature!=null&&(t.signature=c.signature),c.userDefinedMetadata!=null&&(t.userDefinedMetadata=c.userDefinedMetadata),c.modelInitializer!=null&&(t.modelInitializer=c.modelInitializer),c.initializerSignature!=null&&(t.initializerSignature=c.initializerSignature),c.trainingConfig!=null&&(t.trainingConfig=c.trainingConfig)}const l=this.LS.getItem(this.keys.weightData);if(l==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=FR(l),t}}mr.URL_SCHEME="localstorage://";const Hw=n=>q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(mr.URL_SCHEME)?t_(n.slice(mr.URL_SCHEME.length)):null;at.registerSaveRouter(Hw);at.registerLoadRouter(Hw);function t_(n){return new mr(n)}class n_{constructor(){_(q().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),_(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},t=di+Fa,a=Fa+Mw;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(t)&&o.endsWith(a)){const l=JR(o);e[l]=JSON.parse(this.LS.getItem(o))}}return e}async removeModel(e){e=e_(e);const t=Pw(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);const a=JSON.parse(this.LS.getItem(t.info));return Gw(t),a}}const mi="://";class Bt{constructor(){this.managers={}}static getInstance(){return Bt.instance==null&&(Bt.instance=new Bt),Bt.instance}static registerManager(e,t){_(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(mi)&&(e=e.slice(0,e.indexOf(mi))),_(e.length>0,()=>"scheme must not be an empty string.");const a=Bt.getInstance();_(a.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),a.managers[e]=t}static getManager(e){const t=Bt.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(Bt.getInstance().managers)}}function Ju(n){if(n.indexOf(mi)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Bt.getSchemes().join(",")}`);return{scheme:n.split(mi)[0],path:n.split(mi)[1]}}async function Ww(n,e,t=!1){_(n!==e,()=>`Old path and new path are the same: '${n}'`);const a=at.getLoadHandlers(n);_(a.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),_(a.length<2,()=>`Copying failed because more than one (${a.length}) load handlers for source URL ${n}.`);const r=a[0],o=at.getSaveHandlers(e);_(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),_(o.length<2,()=>`Copying failed because more than one (${a.length}) save handlers for destination URL ${e}.`);const l=o[0],c=Ju(n).scheme,f=Ju(n).path,d=c===Ju(n).scheme,p=await r.load();t&&d&&await Bt.getManager(c).removeModel(f);const m=await l.save(p);return t&&!d&&await Bt.getManager(c).removeModel(f),m.modelArtifactsInfo}async function a_(){const n=Bt.getSchemes(),e={};for(const t of n){const a=await Bt.getManager(t).listModels();for(const r in a){const o=t+mi+r;e[o]=a[r]}}return e}async function s_(n){const e=Ju(n);return Bt.getManager(e.scheme).removeModel(e.path)}async function r_(n,e){return Ww(n,e,!1)}async function i_(n,e){return Ww(n,e,!0)}class o_{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!q().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",a=>{if(a.source===window&&a.data.name===this.messageName){a.stopPropagation();const r=this.functionRefs[a.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return gw(e)}}if(q().get("IS_BROWSER")){q().setPlatform("browser",new o_);try{Bt.registerManager(mr.URL_SCHEME,new n_)}catch{}try{Bt.registerManager(pr.URL_SCHEME,new XR)}catch{}}const l_={importFetch:()=>require("node-fetch")};let Oh;class u_{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return q().global.fetch!=null?q().global.fetch(e,t):(Oh==null&&(Oh=l_.importFetch()),Oh(e,t))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}q().get("IS_NODE")&&!q().get("IS_BROWSER")&&q().setPlatform("node",new u_);function tt(n,e="float32",t){return e=e||"float32",wn(n),new dr(n,e,t)}function c_(n,e){const t=k(n,"x","cast");if(!Kk(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");const a={x:t},r={dtype:e};return F.runKernel(Ic,a,r)}const rt=I({cast_:c_});function f_(n){const t={x:k(n,"x","clone","string_or_numeric")};return F.runKernel(Dc,t)}const Ba=I({clone_:f_});function Cy(n,e=!1){console.log(n.toString(e))}Ew();const d_={buffer:tt,cast:rt,clone:Ba,print:Cy};SR(d_);function h_(n,e){let t=k(n,"a","add"),a=k(e,"b","add");[t,a]=it(t,a);const r={a:t,b:a};return F.runKernel(Oc,r)}const we=I({add_:h_});function p_(n,e){let t=k(n,"a","floorDiv"),a=k(e,"b","floorDiv");[t,a]=it(t,a);const r={a:t,b:a};return F.runKernel(Om,r)}const Ny=I({floorDiv_:p_});function m_(n,e){let t=k(n,"a","div"),a=k(e,"b","div");if([t,a]=it(t,a),t.dtype==="int32"&&a.dtype==="int32")return Ny(t,a);const r={a:t,b:a},o={};return F.runKernel(vm,r,o)}const Ze=I({div_:m_});function g_(n,e){let t=k(n,"a","mul"),a=k(e,"b","mul");[t,a]=it(t,a);const r={a:t,b:a};return F.runKernel(cg,r)}const ue=I({mul_:g_});function y_(n){const e=k(n,"x","abs");if(e.dtype==="complex64"){const t={x:e};return F.runKernel(tm,t)}else{const t={x:e};return F.runKernel(Op,t)}}const an=I({abs_:y_});function b_(n){const t={x:k(n,"x","acos")};return F.runKernel(Ip,t)}const qw=I({acos_:b_});function x_(n){const t={x:k(n,"x","acosh")};return F.runKernel(Dp,t)}const jw=I({acosh_:x_});function v_(n){_(Array.isArray(n),()=>"The argument passed to tf.addN() must be a list of tensors"),_(n.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${n.length}`);const e=n.map((r,o)=>k(r,`tensors${o}`,"addN")),t=e[0];e.forEach(r=>{if(r.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(r=>{if(!st(r.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const a=e;return F.runKernel(Lp,a)}const Xw=I({addN_:v_});function w_(n,e=null,t=!1){const r={x:k(n,"x","all","bool")},o={axis:e,keepDims:t};return F.runKernel(Fp,r,o)}const Kw=I({all_:w_});function S_(n,e=null,t=!1){const r={x:k(n,"x","any","bool")},o={axis:e,keepDims:t};return F.runKernel(Bp,r,o)}const Yw=I({any_:S_});function T_(n,e=0){const a={x:k(n,"x","argMax")},r={axis:e};return F.runKernel(zp,a,r)}const Qw=I({argMax_:T_});function C_(n,e=0){const a={x:k(n,"x","argMin")},r={axis:e};return F.runKernel(Up,a,r)}const Zw=I({argMin_:C_});function N_(n){const t={x:k(n,"x","asin")};return F.runKernel(Vp,t)}const Jw=I({asin_:N_});function $_(n){const t={x:k(n,"x","asinh")};return F.runKernel(Mp,t)}const eS=I({asinh_:$_});function E_(n){const t={x:k(n,"x","atan")};return F.runKernel(Pp,t)}const tS=I({atan_:E_});function k_(n,e){let t=k(n,"a","atan2"),a=k(e,"b","atan2");[t,a]=it(t,a);const r={a:t,b:a};return F.runKernel(Hp,r)}const nS=I({atan2_:k_});function R_(n){const t={x:k(n,"x","atanh")};return F.runKernel(Gp,t)}const aS=I({atanh_:R_});function sS(n,e,t,a,r="NHWC",o){const l=n[3],c=[...e,l],f=Ii(r);return Sn(n,c,t,o,a,null,null,f)}function wr(n,e,t,a,r,o,l="channelsLast"){const[c,f]=Yo(e);let d;if(l==="channelsLast")d=[c,f,n[3],n[3]];else if(l==="channelsFirst")d=[c,f,n[1],n[1]];else throw new Error(`Unknown dataFormat ${l}`);return Sn(n,d,t,a,r,o,!1,l)}function ul(n,e,t,a,r,o,l="NDHWC"){const[c,f,d]=ip(e);let p,m;if(l==="NDHWC")m="channelsLast",p=[c,f,d,n[4],n[4]];else if(l==="NCDHW")m="channelsFirst",p=[c,f,d,n[1],n[1]];else throw new Error(`Unknown dataFormat ${l}`);return cl(n,p,t,a,r,!1,m,o)}function Sn(n,e,t,a,r,o,l=!1,c="channelsLast"){let[f,d,p,m]=[-1,-1,-1,-1];if(c==="channelsLast")[f,d,p,m]=n;else if(c==="channelsFirst")[f,m,d,p]=n;else throw new Error(`Unknown dataFormat ${c}`);const[y,x,,v]=e,[S,w]=Yo(t),[T,$]=Yo(a),O=gi(y,T),A=gi(x,$),{padInfo:z,outHeight:j,outWidth:G}=O_(r,d,p,S,w,O,A,o,c),X=l?v*m:v;let V;return c==="channelsFirst"?V=[f,X,j,G]:c==="channelsLast"&&(V=[f,j,G,X]),{batchSize:f,dataFormat:c,inHeight:d,inWidth:p,inChannels:m,outHeight:j,outWidth:G,outChannels:X,padInfo:z,strideHeight:S,strideWidth:w,filterHeight:y,filterWidth:x,effectiveFilterHeight:O,effectiveFilterWidth:A,dilationHeight:T,dilationWidth:$,inShape:n,outShape:V,filterShape:e}}function cl(n,e,t,a,r,o=!1,l="channelsLast",c){let[f,d,p,m,y]=[-1,-1,-1,-1,-1];if(l==="channelsLast")[f,d,p,m,y]=n;else if(l==="channelsFirst")[f,y,d,p,m]=n;else throw new Error(`Unknown dataFormat ${l}`);const[x,v,S,,w]=e,[T,$,O]=ip(t),[A,z,j]=ip(a),G=gi(x,A),X=gi(v,z),V=gi(S,j),{padInfo:U,outDepth:R,outHeight:Z,outWidth:oe}=I_(r,d,p,m,T,$,O,G,X,V,c),fe=o?w*y:w;let de;return l==="channelsFirst"?de=[f,fe,R,Z,oe]:l==="channelsLast"&&(de=[f,R,Z,oe,fe]),{batchSize:f,dataFormat:l,inDepth:d,inHeight:p,inWidth:m,inChannels:y,outDepth:R,outHeight:Z,outWidth:oe,outChannels:fe,padInfo:U,strideDepth:T,strideHeight:$,strideWidth:O,filterDepth:x,filterHeight:v,filterWidth:S,effectiveFilterDepth:G,effectiveFilterHeight:X,effectiveFilterWidth:V,dilationDepth:A,dilationHeight:z,dilationWidth:j,inShape:n,outShape:de,filterShape:e}}function __(n,e,t,a,r){a==null&&(a=$y(n,e,t));const o=n[0],l=n[1],c=Qo((o-e+2*a)/t+1,r),f=Qo((l-e+2*a)/t+1,r);return[c,f]}function A_(n,e,t,a,r,o){r==null&&(r=$y(n,e[0],a[0]));const l=[0,0,0,t];for(let c=0;c<3;c++)n[c]+2*r>=e[c]&&(l[c]=Qo((n[c]-e[c]+2*r)/a[c]+1,o));return l}function $y(n,e,t,a=1){const r=gi(e,a);return Math.floor((n[0]*(t-1)-t+r)/2)}function Yo(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function ip(n){return typeof n=="number"?[n,n,n]:n}function gi(n,e){return e<=1?n:n+(n-1)*(e-1)}function O_(n,e,t,a,r,o,l,c,f){let d,p,m;if(typeof n=="number"){d={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const x=__([e,t],o,a,n,c);p=x[0],m=x[1]}else if(n==="same"){p=Math.ceil(e/a),m=Math.ceil(t/r);const y=Math.max(0,(p-1)*a+o-e),x=Math.max(0,(m-1)*r+l-t),v=Math.floor(y/2),S=y-v,w=Math.floor(x/2),T=x-w;d={top:v,bottom:S,left:w,right:T,type:"SAME"}}else if(n==="valid")d={top:0,bottom:0,left:0,right:0,type:"VALID"},p=Math.ceil((e-o+1)/a),m=Math.ceil((t-l+1)/r);else if(typeof n=="object"){const y=f==="channelsLast"?n[1][0]:n[2][0],x=f==="channelsLast"?n[1][1]:n[2][1],v=f==="channelsLast"?n[2][0]:n[3][0],S=f==="channelsLast"?n[2][1]:n[3][1];d={top:y,bottom:x,left:v,right:S,type:y===0&&x===0&&v===0&&S===0?"VALID":"EXPLICIT"},p=Qo((e-o+y+x)/a+1,c),m=Qo((t-l+v+S)/r+1,c)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:d,outHeight:p,outWidth:m}}function I_(n,e,t,a,r,o,l,c,f,d,p){let m,y,x,v;if(n==="valid"&&(n=0),typeof n=="number"){m={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const w=A_([e,t,a,1],[c,f,d],1,[r,o,l],n,p);y=w[0],x=w[1],v=w[2]}else if(n==="same"){y=Math.ceil(e/r),x=Math.ceil(t/o),v=Math.ceil(a/l);const S=(y-1)*r+c-e,w=(x-1)*o+f-t,T=(v-1)*l+d-a,$=Math.floor(S/2),O=S-$,A=Math.floor(w/2),z=w-A,j=Math.floor(T/2),G=T-j;m={top:A,bottom:z,left:j,right:G,front:$,back:O,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:m,outDepth:y,outHeight:x,outWidth:v}}function Qo(n,e){if(!e)return Math.trunc(n);switch(e){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${e}`)}}function Zo(n){const[e,t,a]=Yo(n);return e===1&&t===1&&a===1}function on(n,e){return Zo(n)||Zo(e)}function gr(n){return Yo(n).every(e=>e>0)}function Ii(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function Vn(n,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")_(vi(e),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(a=>{a.forEach(r=>{_(vi(r),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${r}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${e}`)}}function D_(n,e){const a={x:k(n,"x","reshape","string_or_numeric")},r={shape:e};return F.runKernel(_g,a,r)}const te=I({reshape_:D_});function L_(n,e,t,a,r){const o=k(n,"x","avgPool","float32"),l=1;_(on(t,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${l}'`);let c=o,f=!1;o.rank===3&&(f=!0,c=te(o,[1,o.shape[0],o.shape[1],o.shape[2]])),_(c.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${c.rank}.`),Vn("avgPool",a,r);const d={x:c},p={filterSize:e,strides:t,pad:a,dimRoundingMode:r};let m=F.runKernel(Wp,d,p);return m=rt(m,o.dtype),f?te(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const Ey=I({avgPool_:L_});function F_(n,e,t,a,r,o="NDHWC"){const l=k(n,"x","avgPool3d","float32");let c=l,f=!1;l.rank===4&&(f=!0,c=te(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),_(c.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${c.rank}.`),_(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),_(typeof t=="number"&&t>0||Array.isArray(t)&&t[0]>0&&t[1]>0&&t[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${t}'`),Vn("avgPool3d",a,r);const d={x:c},p={filterSize:e,strides:t,pad:a,dimRoundingMode:r,dataFormat:o};let m=F.runKernel(qp,d,p);return m=rt(m,c.dtype),f?te(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}const rS=I({avgPool3d_:F_});function B_(n,e=0){_(n.length>=1,()=>"Pass at least one tensor to concat");const t=gc(n,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),t.length===1)return Ba(t[0]);const a=t,r={axis:e};return F.runKernel(nm,a,r)}const Dt=I({concat_:B_});function z_(n,e,t=!1,a=!1){let r=k(n,"a","matMul"),o=k(e,"b","matMul");[r,o]=it(r,o);const l={a:r,b:o},c={transposeA:t,transposeB:a};return F.runKernel(jp,l,c)}const Me=I({matMul_:z_});function U_(n){const t={x:k(n,"x","sigmoid","float32")};return F.runKernel(qg,t)}const lr=I({sigmoid_:U_});function V_(n,e,t){const a=k(n,"x","slice","string_or_numeric");if(a.rank===0)throw new Error("Slicing scalar is not possible");const r={x:a},o={begin:e,size:t};return F.runKernel(Pg,r,o)}const He=I({slice_:V_});function M_(n){const t={x:k(n,"x","tanh","float32")};return F.runKernel(dy,t)}const yc=I({tanh_:M_});function P_(n,e,t,a,r,o){const l=k(n,"forgetBias","basicLSTMCell"),c=k(e,"lstmKernel","basicLSTMCell"),f=k(t,"lstmBias","basicLSTMCell"),d=k(a,"data","basicLSTMCell"),p=k(r,"c","basicLSTMCell"),m=k(o,"h","basicLSTMCell"),y=Dt([d,m],1),x=Me(y,c),v=we(x,f),S=v.shape[0],w=v.shape[1]/4,T=[S,w],$=He(v,[0,0],T),O=He(v,[0,w],T),A=He(v,[0,w*2],T),z=He(v,[0,w*3],T),j=we(ue(lr($),yc(O)),ue(p,lr(we(l,A)))),G=ue(yc(j),lr(z));return[j,G]}const iS=I({basicLSTMCell_:P_});function G_(n,e,t){const a=k(n,"x","batchToSpaceND"),r=e.reduce((c,f)=>c*f);_(a.rank>=1+e.length,()=>`input rank is ${a.rank} but should be > than blockShape.length ${e.length}`),_(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),_(a.shape[0]%r===0,()=>`input tensor batch is ${a.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${r}`);const o={x:a},l={blockShape:e,crops:t};return F.runKernel(Xp,o,l)}const ky=I({batchToSpaceND_:G_});function H_(n){let e;return n.rank===0||n.rank===1?e=te(n,[1,1,1,n.size]):n.rank===2?e=te(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?e=te(n,[1,n.shape[0],n.shape[1],n.shape[2]]):e=n,e}function W_(n,e,t,a,r,o){o==null&&(o=.001);const l=k(n,"x","batchNorm"),c=k(e,"mean","batchNorm"),f=k(t,"variance","batchNorm");let d;r!=null&&(d=k(r,"scale","batchNorm"));let p;a!=null&&(p=k(a,"offset","batchNorm")),_(c.rank===f.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),_(p==null||c.rank===p.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),_(d==null||c.rank===d.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const y={x:H_(l),scale:d,offset:p,mean:c,variance:f},x={varianceEpsilon:o},v=F.runKernel(Im,y,x);return te(v,l.shape)}const fl=I({batchNorm_:W_});function q_(n,e,t,a,r,o){const l=k(n,"x","batchNorm"),c=k(e,"mean","batchNorm"),f=k(t,"variance","batchNorm");let d;r!=null&&(d=k(r,"scale","batchNorm"));let p;return a!=null&&(p=k(a,"offset","batchNorm")),_(l.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${l.rank}.`),_(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${c.rank}.`),_(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${f.rank}.`),d!=null&&_(d.rank===2||d.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${d.rank}.`),p!=null&&_(p.rank===2||p.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${p.rank}.`),fl(l,c,f,p,d,o)}const oS=I({batchNorm2d_:q_});function j_(n,e,t,a,r,o){const l=k(n,"x","batchNorm"),c=k(e,"mean","batchNorm"),f=k(t,"variance","batchNorm");let d;r!=null&&(d=k(r,"scale","batchNorm"));let p;return a!=null&&(p=k(a,"offset","batchNorm")),_(l.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${l.rank}.`),_(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${c.rank}.`),_(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${f.rank}.`),d!=null&&_(d.rank===3||d.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${d.rank}.`),p!=null&&_(p.rank===3||p.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${p.rank}.`),fl(l,c,f,p,d,o)}const lS=I({batchNorm3d_:j_});function X_(n,e,t,a,r,o){const l=k(n,"x","batchNorm"),c=k(e,"mean","batchNorm"),f=k(t,"variance","batchNorm");let d;r!=null&&(d=k(r,"scale","batchNorm"));let p;return a!=null&&(p=k(a,"offset","batchNorm")),_(l.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${l.rank}.`),_(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${c.rank}.`),_(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${f.rank}.`),d!=null&&_(d.rank===4||d.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${d.rank}.`),p!=null&&_(p.rank===4||p.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${p.rank}.`),fl(l,c,f,p,d,o)}const uS=I({batchNorm4d_:X_});function K_(n,e,t){const a=k(n,"x","bincount"),r=k(e,"weights","bincount");_(a.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${a.dtype}`),_(t>=0,()=>`size must be non-negative, but got ${t}.`),_(r.size===a.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${a.shape}, weights shape: ${r.shape}.`);const o={x:a,weights:r},l={size:t};return F.runKernel(Kp,o,l)}const Ry=I({bincount_:K_});function Y_(n,e){const t=k(n,"x","bitwiseAnd"),a=k(e,"y","bitwiseAnd");if(!st(t.shape,a.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${t.shape}, y: ${a.shape}`);if(t.dtype!=="int32"||a.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${t.dtype} and type of y: ${a.dtype}`);const r={a:t,b:a};return F.runKernel(Yp,r)}const cS=I({bitwiseAnd_:Y_});function Q_(n,e){const t=k(n,"s0","broadcastArgs","int32"),a=k(e,"s1","broadcastArgs","int32");if(t.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);if(a.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${a.rank}`);const r={s0:t,s1:a};return F.runKernel(Qp,r)}const fS=I({broadcastArgs_:Q_});function Z_(n,e){let t=k(n,"broadcastTo","x");const a=t.shape;if(wn(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){const d=t.shape.slice();for(;d.length<e.length;)d.unshift(1);t=te(t,d)}const r=t.shape,o=Array.from(e);for(let d=e.length-1;d>=0;d--)if(r[d]===e[d])o[d]=1;else if(t.shape[d]!==1)throw new Error(`broadcastTo(): [${a}] cannot be broadcast to [${e}].`);if(o.map((d,p)=>d>1?p:-1).filter(d=>d>=0).length===0)return Ba(t);const c={x:t},f={reps:o};return F.runKernel(Lc,c,f)}const yi=I({broadcastTo_:Z_});function J_(n){const t={x:k(n,"x","ceil","float32")};return F.runKernel(Zp,t)}const dS=I({ceil_:J_});function Di(n,e,t){wn(n),t=t||ol(e);const a={shape:n,value:e,dtype:t};return F.runKernel(Rm,{},a)}function eA(n,e,t){const a=k(n,"x","clipByValue");if(_(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return Di(a.shape,e,a.dtype);const r={x:a},o={clipValueMin:e,clipValueMax:t};return F.runKernel(Jp,r,o)}const hS=I({clipByValue_:eA});function tA(n){return Dt(n,0)}const pS=I({concat1d_:tA});function nA(n,e){return Dt(n,e)}const mS=I({concat2d_:nA});function aA(n,e){return Dt(n,e)}const gS=I({concat3d_:aA});function sA(n,e){return Dt(n,e)}const yS=I({concat4d_:sA});function rA(n,e,t,a,r="NHWC",o=[1,1],l){const c=k(n,"x","conv2d","float32"),f=k(e,"filter","conv2d","float32");let d=c,p=!1;c.rank===3&&(p=!0,d=te(c,[1,c.shape[0],c.shape[1],c.shape[2]])),_(d.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${d.rank}.`),_(f.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${f.rank}.`),Vn("conv2d",a,l);const m=r==="NHWC"?d.shape[3]:d.shape[1];_(m===f.shape[2],()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${f.shape[2]}.`),_(on(t,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${o}'`),_(gr(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),_(gr(t),()=>"Error in conv2D: Strides should be larger than 0.");const y={x:d,filter:f},x={strides:t,pad:a,dataFormat:r,dilations:o,dimRoundingMode:l},v=F.runKernel(am,y,x);return p?te(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const dl=I({conv2d_:rA});function iA(n,e,t,a,r="NWC",o=1,l){const c=k(n,"x","conv1d"),f=k(e,"filter","conv1d");let d=c,p=!1;c.rank===2&&(p=!0,d=te(c,[1,c.shape[0],c.shape[1]])),_(d.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${d.rank}.`),_(f.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${f.rank}.`),Vn("conv1d",a,l),_(d.shape[2]===f.shape[1],()=>`Error in conv1d: depth of input (${d.shape[2]}) must match input depth for filter ${f.shape[1]}.`),_(on(t,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${o}'`),_(gr(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),_(gr(t),()=>"Error in conv1D: Stride should be larger than 0."),_(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const m=te(f,[1,f.shape[0],f.shape[1],f.shape[2]]),y=te(d,[d.shape[0],1,d.shape[1],d.shape[2]]),w=dl(y,m,[1,t],a,"NHWC",[1,o],l);return p?te(w,[w.shape[2],w.shape[3]]):te(w,[w.shape[0],w.shape[2],w.shape[3]])}const bS=I({conv1d_:iA});function oA(n,e,t,a,r,o="NHWC",l){_(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let c=n,f=e,d=!1;e.rank===3&&(d=!0,f=te(e,[1,e.shape[0],e.shape[1],e.shape[2]]),c=[1,n[0],n[1],n[2]]),_(c.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${c.length}.`),_(f.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${f.rank}`),_(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);const p=o==="NHWC"?c[3]:c[1],m=o==="NHWC"?f.shape[3]:f.shape[1];_(p===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${p}) must match input depth for filter ${t.shape[2]}.`),_(m===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${m}) must match output depth for filter ${t.shape[3]}.`),Vn("conv2dDerInput",r,l);const y={dy:f,filter:t},x={strides:a,pad:r,dataFormat:o,dimRoundingMode:l,inputShape:c},v=F.runKernel(rm,y,x);return d?te(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const xS=I({conv2DBackpropInput_:oA});function lA(n,e,t,a,r,o){const l=k(n,"x","conv2dTranspose"),c=k(e,"filter","conv2dTranspose");return xS(t,l,c,a,r,"NHWC",o)}const vS=I({conv2dTranspose_:lA});function uA(n,e,t,a,r="NDHWC",o=[1,1,1]){const l=k(n,"x","conv3d"),c=k(e,"filter","conv3d");let f=l,d=!1;l.rank===4&&(d=!0,f=te(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),_(f.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${f.rank}.`),_(c.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${c.rank}.`),_(f.shape[4]===c.shape[3],()=>`Error in conv3d: depth of input (${f.shape[4]}) must match input depth for filter ${c.shape[3]}.`),_(on(t,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${o}'`),_(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`),_(gr(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),_(gr(t),()=>"Error in conv3D: Strides should be larger than 0.");const p={x:f,filter:c},m={strides:t,pad:a,dataFormat:r,dilations:o},y=F.runKernel(im,p,m);return d?te(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}const wS=I({conv3d_:uA});function cA(n,e,t,a,r){_(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let o=n,l=e,c=!1;e.rank===4&&(c=!0,l=te(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),o=[1,n[0],n[1],n[2],n[3]]);const f=o[4],d=l.shape[4];_(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),_(l.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${l.rank}`),_(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),_(f===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${f}) must match input depth for filter ${t.shape[3]}.`),_(d===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${d}) must match output depth for filter ${t.shape[4]}.`);const p={dy:l,filter:t},m={pad:r,strides:a,inputShape:o},y=F.runKernel(om,p,m);return c?te(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}const fA=I({conv3DBackpropInput_:cA});function dA(n,e,t,a,r){const o=k(n,"x","conv3dTranspose"),l=k(e,"filter","conv3dTranspose");return fA(t,o,l,a,r)}const SS=I({conv3dTranspose_:dA});function hA(n){const t={x:k(n,"x","cos","float32")};return F.runKernel(lm,t)}const TS=I({cos_:hA});function pA(n){const t={x:k(n,"x","cosh","float32")};return F.runKernel(um,t)}const CS=I({cosh_:pA});function mA(n,e=0,t=!1,a=!1){const o={x:k(n,"x","cumprod")},l={axis:e,exclusive:t,reverse:a};return F.runKernel(cm,o,l)}const NS=I({cumprod_:mA});function gA(n,e=0,t=!1,a=!1){const o={x:k(n,"x","cumsum")},l={axis:e,exclusive:t,reverse:a};return F.runKernel(fm,o,l)}const $S=I({cumsum_:gA});function yA(n,e,t,a=!1){const r=k(n,"x","denseBincount"),o=k(e,"weights","denseBincount");_(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),_(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),_(t>=0,()=>`size must be non-negative, but got ${t}.`),_(o.size===r.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${o.shape}.`);const l={x:r,weights:o},c={size:t,binaryOutput:a};return F.runKernel(hm,l,c)}const ES=I({denseBincount_:yA});function bA(n,e,t="NHWC"){const a=k(n,"x","depthToSpace","float32"),r=t==="NHWC"?a.shape[1]:a.shape[2],o=t==="NHWC"?a.shape[2]:a.shape[3],l=t==="NHWC"?a.shape[3]:a.shape[1];_(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),_(r*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${e}  for depthToSpace with input shape
    ${a.shape}`),_(o*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${e} for depthToSpace with input shape
        ${a.shape}`),_(l%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${l} for depthToSpace with input shape ${a.shape}`);const c={x:a},f={blockSize:e,dataFormat:t};return F.runKernel(pm,c,f)}const kS=I({depthToSpace_:bA});function xA(n,e,t,a,r="NHWC",o=[1,1],l){const c=k(n,"x","depthwiseConv2d","float32"),f=k(e,"filter","depthwiseConv2d","float32");let d=c,p=!1;c.rank===3&&(p=!0,d=te(c,[1,c.shape[0],c.shape[1],c.shape[2]])),_(d.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),_(f.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`);const m=r==="NHWC"?d.shape[3]:d.shape[1];_(m===f.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${m}) must match the inChannels dimension in filter ${f.shape[2]}.`),Vn("depthwiseConv2d",a,l);const y={x:d,filter:f},x={strides:t,pad:a,dataFormat:r,dilations:o,dimRoundingMode:l},v=F.runKernel(mm,y,x);return p?te(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Uc=I({depthwiseConv2d_:xA});function vA(n){const t={x:k(n,"x","diag")};return F.runKernel(bm,t)}const RS=I({diag_:vA});function wA(n,e,t,a,r=[1,1],o="NHWC"){const l=k(n,"x","dilation2d"),c=k(e,"filter","dilation2d");_(l.rank===3||l.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${l.rank}.`),_(c.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${c.rank}.`),_(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let f=l,d=!1;l.rank===3&&(f=te(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=!0),_(f.shape[3]===c.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${f.shape[3]} vs ${c.shape[2]}`);const p={x:f,filter:c},m={strides:t,pad:a,dilations:r},y=F.runKernel(xm,p,m);return d?te(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const _S=I({dilation2d_:wA});function bc(n,e){const t=n.length,a=[];for(let r=0;r<t;r++){const o=t-1-r,l=n[o]||1;(e[e.length-1-r]||1)>1&&l===1&&a.unshift(o)}return a}function AS(n,e){const t=[];for(let a=0;a<e.length;a++){const r=n[n.length-a-1],o=e.length-a-1,l=e[o];(r==null||r===1&&l>1)&&t.unshift(o)}return t}function Fe(n,e){const t=Math.max(n.length,e.length),a=new Array(t);for(let r=0;r<t;r++){let o=n[n.length-r-1];o==null&&(o=1);let l=e[e.length-r-1];if(l==null&&(l=1),o===1)a[t-r-1]=l;else if(l===1)a[t-r-1]=o;else if(o!==l){const c=`Operands could not be broadcast together with shapes ${n} and ${e}.`;throw Error(c)}else a[t-r-1]=o}return a}function SA(n,e){let t=k(n,"a","equal","string_or_numeric"),a=k(e,"b","equal","string_or_numeric");[t,a]=it(t,a),Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(Cm,r)}const _y=I({equal_:SA});function TA(n,e,t){const a=k(e,"a","where"),r=k(t,"b","where"),o=k(n,"condition","where","bool"),l=Fe(Fe(o.shape,a.shape),r.shape),c=yi(o,l),f=yi(a,l),d=yi(r,l),p={condition:c,t:f,e:d};return F.runKernel(Vg,p)}const za=I({where_:TA});function CA(n){const t={x:k(n,"x","zerosLike")};return F.runKernel(by,t)}const sn=I({zerosLike_:CA});function NA(n,e){let t=k(n,"a","div"),a=k(e,"b","div");[t,a]=it(t,a);const r=Ze(t,a),o=sn(r),l=_y(a,o);return za(l,o,r)}const OS=I({divNoNan_:NA});function $A(n,e){const t=k(n,"t1","dot"),a=k(e,"t2","dot");_((t.rank===1||t.rank===2)&&(a.rank===1||a.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${a.rank}.`);const r=t.rank===1?t.size:t.shape[1],o=a.rank===1?a.size:a.shape[0];if(_(r===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${r} and ${o}.`),t.rank===1&&a.rank===1){const l=te(t,[1,-1]),c=te(a,[-1,1]),f=Me(l,c);return te(f,[])}else if(t.rank===1&&a.rank===2){const l=te(t,[1,-1]),c=te(a,[a.shape[0],a.shape[1]]),f=Me(l,c);return te(f,[f.size])}else if(t.rank===2&&a.rank===1){const l=te(a,[-1,1]),c=Me(t,l);return te(c,[c.size])}else{const l=te(a,[a.shape[0],a.shape[1]]);return Me(t,l)}}const IS=I({dot_:$A});function EA(n,...e){const t=e.map((r,o)=>k(r,`tensors${o}`,"einsum")),a={equation:n};return F.runKernel(wm,t,a)}const nr=I({einsum_:EA});function kA(n){const t={x:k(n,"x","elu","float32")};return F.runKernel(Sm,t)}const Ay=I({elu_:kA});function RA(n,e){const t=k(n,"x","ensureShape","string_or_numeric");if(!qk(t.shape,e))throw new Error(`EnsureShape: Shape of tensor ${t.shape} is not compatible with expected shape ${e}`);return n}const DS=I({ensureShape_:RA});function _A(n){let e=k(n,"x","erf");_(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=rt(e,"float32"));const t={x:e};return F.runKernel(Tm,t)}const LS=I({erf_:_A});function Oy(n,e){for(let t=0;t<n.length;++t)if(n[n.length-t-1]!==e-1-t)return!1;return!0}function FS(n,e,t){const a=n.length+e.length,r=[];let o=0,l=0;for(let c=0;c<a;c++)t.indexOf(c)===-1?r.push(n[o++]):r.push(e[l++]);return r}function ha(n,e){const t=[],a=n.length;for(let o=0;o<a;o++)e.indexOf(o)===-1&&t.push(n[o]);const r=e.map(o=>n[o]);return[t,r]}function Tn(n,e){const t=e.map(a=>1);return FS(n,t,e)}function sa(n,e,t){_(Oy(e,t),()=>`${n} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function Mn(n,e){if(Oy(n,e))return null;const t=[];for(let a=0;a<e;++a)n.indexOf(a)===-1&&t.push(a);return n.forEach(a=>t.push(a)),t}function Iy(n){return n.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function Pn(n,e){const t=[];for(let a=e-n;a<e;++a)t.push(a);return t}function AA(n,e=null,t=!1){const r={x:k(n,"x","max")},o={reductionIndices:e,keepDims:t};return F.runKernel(Jm,r,o)}const ur=I({max_:AA});function OA(n,e=null,t=!1){const r={x:k(n,"x","min")},o={axis:e,keepDims:t};return F.runKernel(rg,r,o)}const xc=I({min_:OA});function IA(n,e){let t=k(n,"base","pow"),a=k(e,"exp","pow");[t,a]=it(t,a);const r={a:t,b:a};return F.runKernel(vg,r)}const Ti=I({pow_:IA});function _e(n,e){if((Un(n)&&e!=="string"||Array.isArray(n))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Un(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Rs(n,[],[],e)}function DA(n){const t={x:k(n,"x","sqrt","float32")};return F.runKernel(Xg,t)}const ca=I({sqrt_:DA});function LA(n){const e=k(n,"x","square"),t={};return F.runKernel("Square",{x:e},t)}const zn=I({square_:LA});function FA(n,e=null,t=!1){let a=k(n,"x","sum");a.dtype==="bool"&&(a=rt(a,"int32"));const r={x:a},o={axis:e,keepDims:t};return F.runKernel(Kg,r,o)}const Qe=I({sum_:FA});function BA(n,e="euclidean",t=null,a=!1){n=k(n,"x","norm");const r=BS(n,e,t);let o=r.shape;if(a){const l=xt(t,n.shape);o=Tn(r.shape,l)}return te(r,o)}function BS(n,e,t=null){if(n.rank===0)return an(n);if(n.rank!==1&&t===null)return BS(te(n,[-1]),e,t);if(n.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return Qe(an(n),t);if(e===1/0)return ur(an(n),t);if(e===-1/0)return xc(an(n),t);if(e==="euclidean"||e===2)return ca(Qe(Ti(an(n),_e(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return ur(Qe(an(n),t[0]),t[1]-1);if(e===1/0)return ur(Qe(an(n),t[1]),t[0]);if(e===-1/0)return xc(Qe(an(n),t[1]),t[0]);if(e==="fro"||e==="euclidean")return ca(Qe(zn(n),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}const hl=I({norm_:BA});function zA(n,e=null,t=!1){return hl(n,"euclidean",e,t)}const zS=I({euclideanNorm_:zA});function UA(n){const t={x:k(n,"x","exp")};return F.runKernel(Nm,t)}const Ns=I({exp_:UA});function VA(n,e=0){const t=k(n,"x","expandDims","string_or_numeric");_(e<=t.rank,()=>"Axis must be <= rank of the tensor");const a={input:t},r={dim:e};return F.runKernel($m,a,r)}const Ia=I({expandDims_:VA});function MA(n){const t={x:k(n,"x","expm1")};return F.runKernel(Em,t)}const US=I({expm1_:MA});function PA(n,e){const t=k(n,"x","tile","string_or_numeric");_(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);const a={x:t},r={reps:e};return F.runKernel(Lc,a,r)}const bi=I({tile_:PA});function GA(n,e,t,a="float32"){e==null&&(e=n);const r=tt([n,e],a),o=n<=e?n:e;for(let c=0;c<o;++c)r.set(1,c,c);const l=te(r.toTensor(),[n,e]);if(t==null)return l;if(t.length===1)return bi(Ia(l,0),[t[0],1,1]);if(t.length===2)return bi(Ia(Ia(l,0),0),[t[0],t[1],1,1]);if(t.length===3)return bi(Ia(Ia(Ia(l,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}const Dy=I({eye_:GA});function HA(n){const t={x:k(n,"x","floor","float32")};return F.runKernel(Am,t)}const Ly=I({floor_:HA});function WA(n,e,t=0,a=0){const r=k(n,"x","gather"),o=k(e,"indices","gather","int32"),l={x:r,indices:o},c={axis:t,batchDims:a};return F.runKernel(Dm,l,c)}const Fy=I({gather_:WA});function qA(n,e){let t=k(n,"a","greater","string_or_numeric"),a=k(e,"b","greater","string_or_numeric");[t,a]=it(t,a),Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(Fm,r)}const pl=I({greater_:qA});function jA(n,e){let t=k(n,"a","greaterEqual","string_or_numeric"),a=k(e,"b","greaterEqual","string_or_numeric");[t,a]=it(t,a),Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(Bm,r)}const By=I({greaterEqual_:jA});function XA(n){const t={input:k(n,"input","imag")};return F.runKernel(Um,t)}const ml=I({imag_:XA});function KA(n){const t={x:k(n,"x","isFinite")};return F.runKernel(Vm,t)}const VS=I({isFinite_:KA});function YA(n){const t={x:k(n,"x","isInf")};return F.runKernel(Mm,t)}const MS=I({isInf_:YA});function QA(n){const t={x:k(n,"x","isNaN")};return F.runKernel(Pm,t)}const PS=I({isNaN_:QA});function ZA(n,e=.2){const a={x:k(n,"x","leakyRelu")},r={alpha:e};return F.runKernel(Gm,a,r)}const zy=I({leakyRelu_:ZA});function JA(n,e){let t=k(n,"a","less","string_or_numeric"),a=k(e,"b","less","string_or_numeric");[t,a]=it(t,a),Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(Hm,r)}const vc=I({less_:JA});function eO(n,e){let t=k(n,"a","lessEqual","string_or_numeric"),a=k(e,"b","lessEqual","string_or_numeric");[t,a]=it(t,a),Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(Wm,r)}const Vc=I({lessEqual_:eO});function GS(n,e,t){if(t<=0)throw new Error("The number of values should be positive.");const a={start:n,stop:e,num:t};return F.runKernel(qm,{},a)}function tO(n,e=5,t=1,a=1,r=.5){const o=k(n,"x","localResponseNormalization");_(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),_(vi(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let l=o,c=!1;o.rank===3&&(c=!0,l=te(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const f={x:l},d={depthRadius:e,bias:t,alpha:a,beta:r},p=F.runKernel(Zm,f,d);return c?te(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const HS=I({localResponseNormalization_:tO});function nO(n){const t={x:k(n,"x","log","float32")};return F.runKernel(jm,t)}const Ci=I({log_:nO});function aO(n){const t={x:k(n,"x","log1p")};return F.runKernel(Xm,t)}const Uy=I({log1p_:aO});function WS(n,e){_(Hh(n),()=>"The f passed in variableGrads(f) must be a function"),_(e==null||Array.isArray(e)&&e.every(d=>d instanceof Ko),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const t=e!=null;if(!t){e=[];for(const d in F.registeredVariables)e.push(F.registeredVariables[d])}const a=t?e.filter(d=>!d.trainable):null,r=e.length;e=e.filter(d=>d.trainable),_(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:l,grads:c}=F.gradients(n,e,null,o);_(c.some(d=>d!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),_(l.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${l.rank} tensor`);const f={};return e.forEach((d,p)=>{c[p]!=null&&(f[d.name]=c[p])}),a?.forEach(d=>f[d.name]=null),{value:l,grads:f}}function fa(n){return F.customGrad(n)}function sO(n){const t={x:k(n,"x","neg")};return F.runKernel(fg,t)}const ea=I({neg_:sO});function rO(n){const t={x:k(n,"x","softplus")};return F.runKernel(jg,t)}const Vy=I({softplus_:rO});function iO(n){const e=k(n,"x","logSigmoid");return fa(a=>({value:ea(Vy(ea(a))),gradFunc:l=>ue(l,lr(ea(a)))}))(e)}const qS=I({logSigmoid_:iO});function oO(n,e){let t=k(n,"a","sub"),a=k(e,"b","sub");[t,a]=it(t,a);const r={a:t,b:a};return F.runKernel(cy,r)}const Ee=I({sub_:oO});function lO(n,e=-1){const t=k(n,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return fa((r,o)=>{const c=ur(r,e,!0),f=Ee(r,c),d=Ee(rt(f,"float32"),Ci(Qe(Ns(f),e,!0)));return o([d]),{value:d,gradFunc:(m,y)=>{const[x]=y,v=!0,S=Ns(x);return Ee(m,ue(Qe(m,e,v),S))}}})(t)}const jS=I({logSoftmax_:lO});function uO(n,e=null,t=!1){const a=k(n,"x","logSumExp"),r=xt(e,a.shape),o=ur(a,r,!0),l=Ee(a,o),c=Ns(l),f=Qe(c,r),d=Ci(f),p=we(te(o,d.shape),d);if(t){const m=Tn(p.shape,r);return te(p,m)}return p}const My=I({logSumExp_:uO});function cO(n,e){const t=k(n,"a","logicalAnd","bool"),a=k(e,"b","logicalAnd","bool");Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(Km,r)}const Jo=I({logicalAnd_:cO});function fO(n){const t={x:k(n,"x","logicalNot","bool")};return F.runKernel(Ym,t)}const Py=I({logicalNot_:fO});function dO(n,e){const t=k(n,"a","logicalOr","bool"),a=k(e,"b","logicalOr","bool");Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(Qm,r)}const Gy=I({logicalOr_:dO});function hO(n,e){const t=k(n,"a","logicalXor","bool"),a=k(e,"b","logicalXor","bool");return Fe(t.shape,a.shape),Jo(Gy(n,e),Py(Jo(n,e)))}const XS=I({logicalXor_:hO});const Pu=2147483648;function pO(n,e,t="left"){const a=k(n,"sortedSequence","searchSorted"),r=k(e,"values","searchSorted"),o=a.shape[a.shape.length-1],l=r.shape[r.shape.length-1],c=te(a,[-1,o]),f=te(r,[-1,l]);if(c.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(c.shape[0]!==f.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(se(f.shape)>=Pu)throw new Error(`values tensor size must less than ${Pu}`);if(c.shape[1]>=Pu)throw new Error(`trailing dim_size must less than ${Pu} for int32 output type, was ${c.shape[1]}`);const d={sortedSequence:c,values:f},p={side:t};return F.runKernel(Ug,d,p)}const Mc=I({searchSorted_:pO});function KS(n,e){return Mc(n,e,"left")}function mO(n,e,t,a,r){const o=k(n,"x","maxPool"),l=1;let c=o,f=!1;o.rank===3&&(f=!0,c=te(o,[1,o.shape[0],o.shape[1],o.shape[2]])),_(c.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${c.rank}.`),_(on(t,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${l}'`),Vn("maxPool",a,r);const d={x:c},p={filterSize:e,strides:t,pad:a,dimRoundingMode:r},m=F.runKernel(tg,d,p);return f?te(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const Hy=I({maxPool_:mO});function gO(n,e=[1,1,1],t,a,r,o="NDHWC"){const l=k(n,"x","maxPool3d");let c=l,f=!1;l.rank===4&&(f=!0,c=te(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),_(c.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${c.rank}.`),_(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),Vn("maxPool3d",a,r);const d={x:c},p={filterSize:e,strides:t,pad:a,dimRoundingMode:r,dataFormat:o},m=F.runKernel(ng,d,p);return f?te(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}const YS=I({maxPool3d_:gO});function yO(n,e,t,a,r=!1){const l={x:k(n,"x","maxPoolWithArgmax")},c={filterSize:e,strides:t,pad:a,includeBatchInIndex:r},f=F.runKernel(ag,l,c);return{result:f[0],indexes:f[1]}}const QS=I({maxPoolWithArgmax_:yO});function bO(n,e){let t=k(n,"a","maximum"),a=k(e,"b","maximum");[t,a]=it(t,a),t.dtype==="bool"&&(t=rt(t,"int32"),a=rt(a,"int32")),Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(eg,r)}const Wy=I({maximum_:bO});function xO(n,e=null,t=!1){const r={x:k(n,"x","mean")},o={axis:e,keepDims:t};return F.runKernel(sg,r,o)}const el=I({mean_:xO});function Va(n,e="float32"){if(wn(n),e==="complex64"){const a=Va(n,"float32"),r=Va(n,"float32");return Ua(a,r)}const t=Ts(se(n),e);return F.makeTensor(t,n,e)}function xs(n,e="float32"){if(wn(n),e==="complex64"){const a=xs(n,"float32"),r=Va(n,"float32");return Ua(a,r)}const t=tw(se(n),e);return F.makeTensor(t,n,e)}function ZS(n,e,{indexing:t="xy"}={}){if(t!=="xy"&&t!=="ij")throw new TypeError(`${t} is not a valid third argument to meshgrid`);if(n===void 0)return[];let a=k(n,"x","meshgrid",n instanceof St?n.dtype:"float32");if(e===void 0)return[a];let r=k(e,"y","meshgrid",e instanceof St?e.dtype:"float32");const o=se(a.shape),l=se(r.shape);return t==="xy"?(a=te(a,[1,-1]),r=te(r,[-1,1]),[Me(xs([l,1],a.dtype),a),Me(r,xs([1,o],r.dtype))]):(a=te(a,[-1,1]),r=te(r,[1,-1]),[Me(a,xs([1,l],a.dtype)),Me(xs([o,1],r.dtype),r)])}function vO(n,e){let t=k(n,"a","minimum"),a=k(e,"b","minimum");[t,a]=it(t,a),t.dtype==="bool"&&(t=rt(t,"int32"),a=rt(a,"int32")),Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(ig,r)}const tl=I({minimum_:vO});function wO(n,e,t){_(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);const a=k(n,"x","mirrorPad");if(a.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");_(e.length===a.rank,()=>`Padding doesn't match input. Must be ${a.rank}. Got ${e.length}.`);const r=t==="reflect"?1:0;for(let c=0;c<a.rank;c++)_(e[c].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),_(e[c][0]>=0&&e[c][0]<=a.shape[c]-r&&e[c][1]>=0&&e[c][1]<=a.shape[c]-r,()=>`Padding in dimension ${c} cannot be greater than or equal to ${a.shape[c]-r} or less than 0 for input of shape ${a.shape}`);const o={paddings:e,mode:t},l={x:a};return F.runKernel(og,l,o)}const JS=I({mirrorPad_:wO});function SO(n,e){let t=k(n,"a","mod"),a=k(e,"b","mod");[t,a]=it(t,a);const r={a:t,b:a};return F.runKernel(lg,r)}const eT=I({mod_:SO});function TO(n,e=null,t=!1){n=k(n,"x","moments");const a=xt(e,n.shape),r=el(n,a,t);let o=r.shape;t||(o=Tn(r.shape,a));const l=zn(Ee(rt(n,"float32"),te(r,o))),c=el(l,a,t);return{mean:r,variance:c}}const tT=I({moments_:TO});function CO(n,e,t,a){const r=k(e,"data","multiRNNCell"),o=gc(t,"c","multiRNNCell"),l=gc(a,"h","multiRNNCell");let c=r;const f=[];for(let m=0;m<n.length;m++){const y=n[m](c,o[m],l[m]);f.push(y[0]),f.push(y[1]),c=y[1]}const d=[],p=[];for(let m=0;m<f.length;m+=2)d.push(f[m]),p.push(f[m+1]);return[d,p]}const nT=I({multiRNNCell_:CO});function NO(n,e,t,a=!1){const r=k(n,"logits","multinomial"),o=r.size,l=r.rank;if(o<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${o}.`);if(l>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${l}`);t=t||Math.random();const f={logits:l===1?te(r,[1,-1]):r},d={numSamples:e,seed:t,normalized:a},p=F.runKernel(ug,f,d);return l===1?te(p,[p.size]):p}const aT=I({multinomial_:NO});function $O(n,e){let t=k(n,"a","notEqual","string_or_numeric"),a=k(e,"b","notEqual","string_or_numeric");[t,a]=it(t,a),Fe(t.shape,a.shape);const r={a:t,b:a};return F.runKernel(dg,r)}const qy=I({notEqual_:$O});function EO(n,e,t=1,a=0,r="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const l={indices:k(n,"indices","oneHot","int32")},c={dtype:r,depth:e,onValue:t,offValue:a};return F.runKernel(yg,l,c)}const sT=I({oneHot_:EO});function kO(n){const t={x:k(n,"x","onesLike")};return F.runKernel(gg,t)}const rT=I({onesLike_:kO});function RO(n,e){const t=k(n,"v1","outerProduct"),a=k(e,"v2","outerProduct");_(t.rank===1&&a.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${a.rank}.`);const r=te(t,[-1,1]),o=te(a,[1,-1]);return Me(r,o)}const iT=I({outerProduct_:RO});function _O(n,e,t=0){const a=k(n,"x","pad");if(a.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:e,constantValue:t},o={x:a};return F.runKernel(xg,o,r)}const Li=I({pad_:_O});function AO(n,e,t=0){return _(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),Li(n,[e],t)}const oT=I({pad1d_:AO});function OO(n,e,t=0){return _(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Li(n,e,t)}const lT=I({pad2d_:OO});function IO(n,e,t=0){return _(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Li(n,e,t)}const uT=I({pad3d_:IO});function DO(n,e,t=0){return _(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Li(n,e,t)}const cT=I({pad4d_:DO});function LO(n,e,t){const a=k(n,"x","spaceToBatchND");_(a.rank>=1+e.length,()=>`input rank ${a.rank} should be > than [blockShape] ${e.length}`),_(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),_(a.shape.reduce((l,c,f)=>f>0&&f<=e.length?l&&(c+t[f-1][0]+t[f-1][1])%e[f-1]===0:l,!0),()=>`input spatial dimensions ${a.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);const r={x:a},o={blockShape:e,paddings:t};return F.runKernel(Yg,r,o)}const jy=I({spaceToBatchND_:LO});function FO(n,e,t,a,r,o,l){r==null&&(r=[1,1]),o==null&&(o=1),a===0&&(a="valid");const c=k(n,"x","maxPool");let f=c,d=!1;c.rank===3&&(d=!0,f=te(c,[1,c.shape[0],c.shape[1],c.shape[2]])),_(on(o,r),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${r}'`);const p=wr(f.shape,e,o,r,a),m=[p.dilationHeight,p.dilationWidth];let y;a==="same"?y=zO([p.filterHeight,p.filterWidth],m):y=[[0,0],[0,0]];const x=m[0]===1&&m[1]===1,[v,S]=BO([p.inHeight,p.inWidth],m,y),w=x?a:"valid",T=x?f:jy(f,m,v),O=(t==="avg"?()=>Ey(T,e,o,w,l):()=>Hy(T,e,o,w,l))(),A=x?O:ky(O,m,S);return d?te(A,[A.shape[1],A.shape[2],A.shape[3]]):A}function BO(n,e,t){const a=t.map(p=>p[0]),r=t.map(p=>p[1]),o=n.concat(a,r),l=e.map((p,m)=>(p-o[m]%p)%p),c=r.map((p,m)=>p+l[m]),f=e.map((p,m)=>[a[m],c[m]]),d=e.map((p,m)=>[0,l[m]]);return[f,d]}function zO(n,e){const a=n.map((l,c)=>l+(l-1)*(e[c]-1)).map(l=>l-1),r=a.map(l=>Math.floor(l/2)),o=a.map((l,c)=>l-r[c]);return a.map((l,c)=>[r[c],o[c]])}const fT=I({pool_:FO});function UO(n,e){const t=k(n,"x","prelu"),a=k(e,"alpha","prelu"),r={x:t,alpha:a};return F.runKernel(wg,r)}const Xy=I({prelu_:UO});function VO(n,e=null,t=!1){let a=k(n,"x","prod");a.dtype==="bool"&&(a=rt(a,"int32"));const r={x:a},o={axis:e,keepDims:t};return F.runKernel(Sg,r,o)}const dT=I({prod_:VO});function MO(n,e,t,a){const r=n.map((p,m)=>k(p,`tensors${m}`,"raggedGather","int32")),o=k(e,"paramsDenseValues","raggedGather"),l=k(t,"indices","raggedGather","int32"),c={paramsNestedSplits:r,paramsDenseValues:o,indices:l},f={outputRaggedRank:a},d=F.runKernel(Tg,c,f);return{outputNestedSplits:d.slice(0,d.length-1),outputDenseValues:d[d.length-1]}}const hT=I({raggedGather_:MO});function PO(n,e,t){const a=k(n,"starts","raggedRange"),r=k(e,"limits","raggedRange",a.dtype),o=k(t,"deltas","raggedRange",a.dtype),l={starts:a,limits:r,deltas:o},c=F.runKernel(Cg,l);return{rtNestedSplits:c[0],rtDenseValues:c[1]}}const pT=I({raggedRange_:PO});function GO(n,e,t,a,r){const o=k(n,"shape","raggedTensorToTensor","int32"),l=k(e,"values","raggedTensorToTensor"),c=k(t,"defaultValue","raggedTensorToTensor",l.dtype),f=a.map((m,y)=>k(m,`tensors${y}`,"raggedTensorToTensor","int32")),d={shape:o,values:l,defaultValue:c,rowPartitionTensors:f},p={rowPartitionTypes:r};return F.runKernel(Ng,d,p)}const mT=I({raggedTensorToTensor_:GO});function HO(n,e,t){wn(n);const a=se(n);let r=null;if(t==null||t==="float32")r=new Float32Array(a);else if(t==="int32")r=new Int32Array(a);else if(t==="bool")r=new Uint8Array(a);else throw new Error(`Unknown data type ${t}`);for(let o=0;o<a;o++)r[o]=e();return F.makeTensor(r,n,t)}const gT=I({rand_:HO});var ec={exports:{}},WO=ec.exports,Kv;function qO(){return Kv||(Kv=1,(function(n){(function(e,t,a){function r(f){var d=this,p=c();d.next=function(){var m=2091639*d.s0+d.c*23283064365386963e-26;return d.s0=d.s1,d.s1=d.s2,d.s2=m-(d.c=m|0)},d.c=1,d.s0=p(" "),d.s1=p(" "),d.s2=p(" "),d.s0-=p(f),d.s0<0&&(d.s0+=1),d.s1-=p(f),d.s1<0&&(d.s1+=1),d.s2-=p(f),d.s2<0&&(d.s2+=1),p=null}function o(f,d){return d.c=f.c,d.s0=f.s0,d.s1=f.s1,d.s2=f.s2,d}function l(f,d){var p=new r(f),m=d&&d.state,y=p.next;return y.int32=function(){return p.next()*4294967296|0},y.double=function(){return y()+(y()*2097152|0)*11102230246251565e-32},y.quick=y,m&&(typeof m=="object"&&o(m,p),y.state=function(){return o(p,{})}),y}function c(){var f=4022871197,d=function(p){p=String(p);for(var m=0;m<p.length;m++){f+=p.charCodeAt(m);var y=.02519603282416938*f;f=y>>>0,y-=f,y*=f,f=y>>>0,y-=f,f+=y*4294967296}return(f>>>0)*23283064365386963e-26};return d}t&&t.exports?t.exports=l:this.alea=l})(WO,n)})(ec)),ec.exports}var tc={exports:{}},jO=tc.exports,Yv;function XO(){return Yv||(Yv=1,(function(n){(function(e,t,a){function r(c){var f=this,d="";f.x=0,f.y=0,f.z=0,f.w=0,f.next=function(){var m=f.x^f.x<<11;return f.x=f.y,f.y=f.z,f.z=f.w,f.w^=f.w>>>19^m^m>>>8},c===(c|0)?f.x=c:d+=c;for(var p=0;p<d.length+64;p++)f.x^=d.charCodeAt(p)|0,f.next()}function o(c,f){return f.x=c.x,f.y=c.y,f.z=c.z,f.w=c.w,f}function l(c,f){var d=new r(c),p=f&&f.state,m=function(){return(d.next()>>>0)/4294967296};return m.double=function(){do var y=d.next()>>>11,x=(d.next()>>>0)/4294967296,v=(y+x)/(1<<21);while(v===0);return v},m.int32=d.next,m.quick=m,p&&(typeof p=="object"&&o(p,d),m.state=function(){return o(d,{})}),m}t&&t.exports?t.exports=l:this.xor128=l})(jO,n)})(tc)),tc.exports}var nc={exports:{}},KO=nc.exports,Qv;function YO(){return Qv||(Qv=1,(function(n){(function(e,t,a){function r(c){var f=this,d="";f.next=function(){var m=f.x^f.x>>>2;return f.x=f.y,f.y=f.z,f.z=f.w,f.w=f.v,(f.d=f.d+362437|0)+(f.v=f.v^f.v<<4^(m^m<<1))|0},f.x=0,f.y=0,f.z=0,f.w=0,f.v=0,c===(c|0)?f.x=c:d+=c;for(var p=0;p<d.length+64;p++)f.x^=d.charCodeAt(p)|0,p==d.length&&(f.d=f.x<<10^f.x>>>4),f.next()}function o(c,f){return f.x=c.x,f.y=c.y,f.z=c.z,f.w=c.w,f.v=c.v,f.d=c.d,f}function l(c,f){var d=new r(c),p=f&&f.state,m=function(){return(d.next()>>>0)/4294967296};return m.double=function(){do var y=d.next()>>>11,x=(d.next()>>>0)/4294967296,v=(y+x)/(1<<21);while(v===0);return v},m.int32=d.next,m.quick=m,p&&(typeof p=="object"&&o(p,d),m.state=function(){return o(d,{})}),m}t&&t.exports?t.exports=l:this.xorwow=l})(KO,n)})(nc)),nc.exports}var ac={exports:{}},QO=ac.exports,Zv;function ZO(){return Zv||(Zv=1,(function(n){(function(e,t,a){function r(c){var f=this;f.next=function(){var p=f.x,m=f.i,y,x;return y=p[m],y^=y>>>7,x=y^y<<24,y=p[m+1&7],x^=y^y>>>10,y=p[m+3&7],x^=y^y>>>3,y=p[m+4&7],x^=y^y<<7,y=p[m+7&7],y=y^y<<13,x^=y^y<<9,p[m]=x,f.i=m+1&7,x};function d(p,m){var y,x=[];if(m===(m|0))x[0]=m;else for(m=""+m,y=0;y<m.length;++y)x[y&7]=x[y&7]<<15^m.charCodeAt(y)+x[y+1&7]<<13;for(;x.length<8;)x.push(0);for(y=0;y<8&&x[y]===0;++y);for(y==8?x[7]=-1:x[y],p.x=x,p.i=0,y=256;y>0;--y)p.next()}d(f,c)}function o(c,f){return f.x=c.x.slice(),f.i=c.i,f}function l(c,f){c==null&&(c=+new Date);var d=new r(c),p=f&&f.state,m=function(){return(d.next()>>>0)/4294967296};return m.double=function(){do var y=d.next()>>>11,x=(d.next()>>>0)/4294967296,v=(y+x)/(1<<21);while(v===0);return v},m.int32=d.next,m.quick=m,p&&(p.x&&o(p,d),m.state=function(){return o(d,{})}),m}t&&t.exports?t.exports=l:this.xorshift7=l})(QO,n)})(ac)),ac.exports}var sc={exports:{}},JO=sc.exports,Jv;function eI(){return Jv||(Jv=1,(function(n){(function(e,t,a){function r(c){var f=this;f.next=function(){var p=f.w,m=f.X,y=f.i,x,v;return f.w=p=p+1640531527|0,v=m[y+34&127],x=m[y=y+1&127],v^=v<<13,x^=x<<17,v^=v>>>15,x^=x>>>12,v=m[y]=v^x,f.i=y,v+(p^p>>>16)|0};function d(p,m){var y,x,v,S,w,T=[],$=128;for(m===(m|0)?(x=m,m=null):(m=m+"\0",x=0,$=Math.max($,m.length)),v=0,S=-32;S<$;++S)m&&(x^=m.charCodeAt((S+32)%m.length)),S===0&&(w=x),x^=x<<10,x^=x>>>15,x^=x<<4,x^=x>>>13,S>=0&&(w=w+1640531527|0,y=T[S&127]^=x+w,v=y==0?v+1:0);for(v>=128&&(T[(m&&m.length||0)&127]=-1),v=127,S=512;S>0;--S)x=T[v+34&127],y=T[v=v+1&127],x^=x<<13,y^=y<<17,x^=x>>>15,y^=y>>>12,T[v]=x^y;p.w=w,p.X=T,p.i=v}d(f,c)}function o(c,f){return f.i=c.i,f.w=c.w,f.X=c.X.slice(),f}function l(c,f){c==null&&(c=+new Date);var d=new r(c),p=f&&f.state,m=function(){return(d.next()>>>0)/4294967296};return m.double=function(){do var y=d.next()>>>11,x=(d.next()>>>0)/4294967296,v=(y+x)/(1<<21);while(v===0);return v},m.int32=d.next,m.quick=m,p&&(p.X&&o(p,d),m.state=function(){return o(d,{})}),m}t&&t.exports?t.exports=l:this.xor4096=l})(JO,n)})(sc)),sc.exports}var rc={exports:{}},tI=rc.exports,e2;function nI(){return e2||(e2=1,(function(n){(function(e,t,a){function r(c){var f=this,d="";f.next=function(){var m=f.b,y=f.c,x=f.d,v=f.a;return m=m<<25^m>>>7^y,y=y-x|0,x=x<<24^x>>>8^v,v=v-m|0,f.b=m=m<<20^m>>>12^y,f.c=y=y-x|0,f.d=x<<16^y>>>16^v,f.a=v-m|0},f.a=0,f.b=0,f.c=-1640531527,f.d=1367130551,c===Math.floor(c)?(f.a=c/4294967296|0,f.b=c|0):d+=c;for(var p=0;p<d.length+20;p++)f.b^=d.charCodeAt(p)|0,f.next()}function o(c,f){return f.a=c.a,f.b=c.b,f.c=c.c,f.d=c.d,f}function l(c,f){var d=new r(c),p=f&&f.state,m=function(){return(d.next()>>>0)/4294967296};return m.double=function(){do var y=d.next()>>>11,x=(d.next()>>>0)/4294967296,v=(y+x)/(1<<21);while(v===0);return v},m.int32=d.next,m.quick=m,p&&(typeof p=="object"&&o(p,d),m.state=function(){return o(d,{})}),m}t&&t.exports?t.exports=l:this.tychei=l})(tI,n)})(rc)),rc.exports}var ic={exports:{}};const aI={},sI=Object.freeze(Object.defineProperty({__proto__:null,default:aI},Symbol.toStringTag,{value:"Module"})),rI=Ak(sI);var iI=ic.exports,t2;function oI(){return t2||(t2=1,(function(n){(function(e,t,a){var r=256,o=6,l=52,c="random",f=a.pow(r,o),d=a.pow(2,l),p=d*2,m=r-1,y;function x(A,z,j){var G=[];z=z==!0?{entropy:!0}:z||{};var X=T(w(z.entropy?[A,O(t)]:A??$(),3),G),V=new v(G),U=function(){for(var R=V.g(o),Z=f,oe=0;R<d;)R=(R+oe)*r,Z*=r,oe=V.g(1);for(;R>=p;)R/=2,Z/=2,oe>>>=1;return(R+oe)/Z};return U.int32=function(){return V.g(4)|0},U.quick=function(){return V.g(4)/4294967296},U.double=U,T(O(V.S),t),(z.pass||j||function(R,Z,oe,fe){return fe&&(fe.S&&S(fe,V),R.state=function(){return S(V,{})}),oe?(a[c]=R,Z):R})(U,X,"global"in z?z.global:this==a,z.state)}function v(A){var z,j=A.length,G=this,X=0,V=G.i=G.j=0,U=G.S=[];for(j||(A=[j++]);X<r;)U[X]=X++;for(X=0;X<r;X++)U[X]=U[V=m&V+A[X%j]+(z=U[X])],U[V]=z;(G.g=function(R){for(var Z,oe=0,fe=G.i,de=G.j,P=G.S;R--;)Z=P[fe=m&fe+1],oe=oe*r+P[m&(P[fe]=P[de=m&de+Z])+(P[de]=Z)];return G.i=fe,G.j=de,oe})(r)}function S(A,z){return z.i=A.i,z.j=A.j,z.S=A.S.slice(),z}function w(A,z){var j=[],G=typeof A,X;if(z&&G=="object")for(X in A)try{j.push(w(A[X],z-1))}catch{}return j.length?j:G=="string"?A:A+"\0"}function T(A,z){for(var j=A+"",G,X=0;X<j.length;)z[m&X]=m&(G^=z[m&X]*19)+j.charCodeAt(X++);return O(z)}function $(){try{var A;return y&&(A=y.randomBytes)?A=A(r):(A=new Uint8Array(r),(e.crypto||e.msCrypto).getRandomValues(A)),O(A)}catch{var z=e.navigator,j=z&&z.plugins;return[+new Date,e,j,e.screen,O(t)]}}function O(A){return String.fromCharCode.apply(0,A)}if(T(a.random(),t),n.exports){n.exports=x;try{y=rI}catch{}}else a["seed"+c]=x})(typeof self<"u"?self:iI,[],Math)})(ic)),ic.exports}var Ih,n2;function lI(){if(n2)return Ih;n2=1;var n=qO(),e=XO(),t=YO(),a=ZO(),r=eI(),o=nI(),l=oI();return l.alea=n,l.xor128=e,l.xorwow=t,l.xorshift7=a,l.xor4096=r,l.tychei=o,Ih=l,Ih}var Ky=lI();class Yy{constructor(e,t,a,r,o){this.mean=e,this.stdDev=t,this.dtype=a,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const l=o||Math.random();this.random=Ky.alea(l.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let e,t,a=!1;for(;!a;){let r,o,l;do r=2*this.random()-1,o=2*this.random()-1,l=r*r+o*o;while(l>=1||l===0);const c=Math.sqrt(-2*Math.log(l)/l);e=this.mean+this.stdDev*r*c,t=this.mean+this.stdDev*o*c,(!this.truncated||this.isValidTruncated(e))&&(a=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class uI{constructor(e,t,a,r){this.alpha=e,this.beta=1/t,this.dtype=a;const o=r||Math.random();this.randu=Ky.alea(o.toString()),this.randn=new Yy(0,1,a,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,a,r,o,l;for(;;){do r=this.randn.nextValue(),l=1+this.c*r;while(l<=0);if(l*=l*l,e=r*r,t=1-.331*e*e,a=.5*e+this.d*(1-l+Math.log(l)),o=this.randu(),o<t||Math.log(o)<a)break}return l=1/this.beta*this.d*l,this.alpha<1&&(l*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(l)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class cI{constructor(e=0,t=1,a,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=a,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=Ky.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function fI(n,e,t=1,a="float32",r){if(wn(n),t==null&&(t=1),a==null&&(a="float32"),a!=="float32"&&a!=="int32")throw new Error(`Unsupported data type ${a}`);const o=new uI(e,t,a,r),l=tt(n,a);for(let c=0;c<l.values.length;c++)l.values[c]=o.nextValue();return l.toTensor()}const yT=I({randomGamma_:fI});function dI(n,e=0,t=1,a,r){if(wn(n),a!=null&&a==="bool")throw new Error(`Unsupported data type ${a}`);const o=new Yy(e,t,a,!1,r),l=tt(n,a);for(let c=0;c<l.values.length;c++)l.values[c]=o.nextValue();return l.toTensor()}const Qy=I({randomNormal_:dI});function hI(n,e,t){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return Qy(n,0,1,e,t)}const bT=I({randomStandardNormal_:hI});function pI(n,e=0,t=1,a="float32",r){wn(n);const o=tt(n,a),l=new cI(e,t,null,r);for(let c=0;c<o.values.length;c++)o.values[c]=l.nextValue();return o.toTensor()}const Pc=I({randomUniform_:pI});function mI(n,e,t,a){return Pc(n,e,t,"int32",a)}const xT=I({randomUniformInt_:mI});function Ni(n,e,t=1,a="float32"){if(t===0)throw new Error("Cannot have a step of zero");const r={start:n,stop:e,step:t,dtype:a};return F.runKernel($g,{},r)}function gI(n){const t={input:k(n,"input","real")};return F.runKernel(Eg,t)}const $i=I({real_:gI});function yI(n){const t={x:k(n,"x","reciprocal")};return F.runKernel(kg,t)}const vT=I({reciprocal_:yI});function bI(n){const t={x:k(n,"x","relu")};return F.runKernel(Rg,t)}const gl=I({relu_:bI});function xI(n){const t={x:k(n,"x","relu6")};return F.runKernel(Ig,t)}const Zy=I({relu6_:xI});function vI(n,e){const a={x:k(n,"x","reverse")},r={dims:e};return F.runKernel(Dg,a,r)}const $s=I({reverse_:vI});function wI(n){const e=k(n,"x","reverse");return _(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),$s(e,0)}const wT=I({reverse1d_:wI});function SI(n,e){const t=k(n,"x","reverse");return _(t.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`),$s(t,e)}const ST=I({reverse2d_:SI});function TI(n,e){const t=k(n,"x","reverse");return _(t.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`),$s(t,e)}const TT=I({reverse3d_:TI});function CI(n,e){const t=k(n,"x","reverse");return _(t.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`),$s(t,e)}const CT=I({reverse4d_:CI});function NI(n){const t={x:k(n,"x","round")};return F.runKernel(Lg,t)}const Jy=I({round_:NI});function $I(n){const t={x:k(n,"x","rsqrt","float32")};return F.runKernel(Fg,t)}const NT=I({rsqrt_:$I});function EI(n){const t={x:k(n,"x","selu")};return F.runKernel(Mg,t)}const $T=I({selu_:EI});function kI(n,e,t,a,r,o=[1,1],l="NHWC"){const c=k(n,"x","separableConv2d"),f=k(e,"depthwiseFilter","separableConv2d"),d=k(t,"pointwiseFilter","separableConv2d");let p=c,m=!1;if(c.rank===3&&(m=!0,p=te(c,[1,c.shape[0],c.shape[1],c.shape[2]])),l==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");_(p.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${p.rank}.`),_(f.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${f.rank}.`),_(d.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${f.rank}.`),_(d.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${d.shape[0]}.`),_(d.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${d.shape[1]}.`);const y=f.shape[2],x=f.shape[3];_(d.shape[2]===y*x,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${y*x}, but got ${d.shape[2]}.`);const v=Uc(p,f,a,r,l,o),w=dl(v,d,1,"valid",l);return m?te(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const ET=I({separableConv2d_:kI});async function RI(n,e){const t=k(n,"x","setdiff1d"),a=k(e,"y","setdiff1d");_(t.dtype===a.dtype,()=>`x and y should have the same dtype, but got x (${t.dtype}) and y (${a.dtype}).`),_(t.rank===1,()=>`x should be 1D tensor, but got x (${t.shape}).`),_(a.rank===1,()=>`y should be 1D tensor, but got y (${a.shape}).`);const r=await t.data(),o=await a.data(),l=new Set(o);let c=0;for(let p=0;p<r.length;p++)l.has(r[p])||c++;const f=new dr([c],t.dtype),d=new dr([c],"int32");for(let p=0,m=0;p<r.length;p++)l.has(r[p])||(f.values[m]=r[p],d.values[m]=p,m++);return[f.toTensor(),d.toTensor()]}const kT=RI;function _I(n){const t={x:k(n,"x","sign")};return F.runKernel(Wg,t)}const RT=I({sign_:_I});function AI(n){const t={x:k(n,"x","sin","float32")};return F.runKernel(Gg,t)}const _T=I({sin_:AI});function OI(n){const t={x:k(n,"x","sinh")};return F.runKernel(Hg,t)}const AT=I({sinh_:OI});function II(n,e,t){const a=k(n,"x","slice1d");return _(a.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${a.rank} tensor`),He(a,[e],[t])}const OT=I({slice1d_:II});function DI(n,e,t){const a=k(n,"x","slice2d");return _(a.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${a.rank} tensor`),He(a,e,t)}const IT=I({slice2d_:DI});function LI(n,e,t){const a=k(n,"x","slice3d");return _(a.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${a.rank} tensor`),He(a,e,t)}const DT=I({slice3d_:LI});function FI(n,e,t){const a=k(n,"x","slice4d");return _(a.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${a.rank} tensor`),He(a,e,t)}const LT=I({slice4d_:FI});function BI(n,e=-1){const t=k(n,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);const a={logits:t},r={dim:e};return F.runKernel(Zg,a,r)}const e0=I({softmax_:BI});function zI(n){_(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const e={input:n};return F.runKernel(km,e)}const Gc=I({fft_:zI});function UI(n){_(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const e={input:n};return F.runKernel(zm,e)}const nl=I({ifft_:UI});function VI(n){const e=n.shape[n.shape.length-1],t=n.size/e;let a;if(e<=2){const r=te(n,[t,e]);a=nl(r)}else{const r=[t,2*(e-1)],o=te($i(n),[t,e]),l=te(ml(n),[t,e]),c=$s(He(o,[0,1],[t,e-2]),1),f=ue($s(He(l,[0,1],[t,e-2]),1),_e(-1)),d=Dt([o,c],1),p=Dt([l,f],1),m=te(Ua(d,p),[r[0],r[1]]);a=nl(m)}if(a=$i(a),n.rank===3&&n.shape[0]!==0){const r=a,o=n.shape[0];a=te(a,[o,a.shape[0]/o,a.shape[1]]),r.dispose()}return a}const t0=I({irfft_:VI});function MI(n,e,t=0){const r={x:k(n,"x","split")},o={numOrSizeSplits:e,axis:t};return F.runKernel(Qg,r,o)}const Ei=I({split_:MI});function PI(n,e){_(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let t=n.shape[n.shape.length-1];const a=n.size/t;let r;if(e!=null&&e<t){const v=n.shape.map(w=>0),S=n.shape.map(w=>w);S[n.shape.length-1]=e,r=He(n,v,S),t=e}else if(e!=null&&e>t){const v=n.shape.map(S=>S);v[n.shape.length-1]=e-t,r=Dt([n,Va(v)],n.shape.length-1),t=e}else r=n;const o=sn(r),l=te(Ua(r,o),[a,t]),c=Gc(l),f=Math.floor(t/2)+1,d=$i(c),p=ml(c),m=Ei(d,[f,t-f],d.shape.length-1),y=Ei(p,[f,t-f],p.shape.length-1),x=r.shape.slice();return x[r.shape.length-1]=f,te(Ua(m[0],y[0]),x)}const Hc=I({rfft_:PI});function GI(n,e){let t=k(n,"a","squaredDifference"),a=k(e,"b","squaredDifference");[t,a]=it(t,a),Fe(t.shape,a.shape);const r={a:t,b:a},o={};return F.runKernel(sy,r,o)}const n0=I({squaredDifference_:GI});function HI(n,e){const t=k(n,"x","squeeze","string_or_numeric");return te(t,Es(t.shape,e).newShape)}const yl=I({squeeze_:HI});function WI(n,e=0){const t=gc(n,"tensors","stack","string_or_numeric");_(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&_(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");const a=t,r={axis:e};return F.runKernel(bg,a,r)}const da=I({stack_:WI});function qI(n,e=0){const a={x:k(n,"x","step")},r={alpha:e};return F.runKernel(xy,a,r)}const a0=I({step_:qI});function jI(n,e,t,a,r=0,o=0,l=0,c=0,f=0){const p={x:k(n,"x","stridedSlice","string_or_numeric")},m={begin:e,end:t,strides:a,beginMask:r,endMask:o,ellipsisMask:l,newAxisMask:c,shrinkAxisMask:f};return F.runKernel(iy,p,m)}const FT=I({stridedSlice_:jI});function XI(n){const t={x:k(n,"x","tan","float32")};return F.runKernel(fy,t)}const BT=I({tan_:XI});function bn(n,e){Ai(n);const t=ks(n,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Rs(n,null,t,e)}function xi(n,e,t){if(Ai(n),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const a=ks(n,t);if(a.length!==2&&a.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(a.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Rs(n,e,a,t)}function s0(n,e,t){if(Ai(n),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const a=ks(n,t);if(a.length!==3&&a.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(a.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Rs(n,e,a,t)}function zT(n,e,t){if(Ai(n),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const a=ks(n,t);if(a.length!==4&&a.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(a.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Rs(n,e,a,t)}function UT(n,e,t){if(Ai(n),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const a=ks(n,t);if(a.length!==5&&a.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(a.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Rs(n,e,a,t)}function VT(n,e,t){if(Ai(n),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const a=ks(n,t);if(a.length!==6&&a.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(a.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||a,Rs(n,e,a,t)}function MT(n,e,t){const a=e.rank>1?e.shape[e.rank-1]:1,r=e.rank>1?e.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${e.shape}, shape: ${n}, sliceDim: ${a}, and batchDim: ${r}.`;if(t.rank<r)throw new Error(o+` update.rank < ${r}. `);if(n.length<a+(t.rank-r))throw new Error(o+` Output shape length < ${a+(t.rank-r)}`);if(t.rank!==r+n.length-a)throw new Error(o+` update.rank != ${r+n.length-a}`);for(let l=0;l<r;++l)if(t.shape[l]!==e.shape[l])throw new Error(o+` updates.shape[${l}] (${t.shape[l]}) != indices.shape[${l}] (${e.shape[l]}).`);for(let l=0;l<t.rank-r;++l)if(t.shape[l+r]!==n[l+a])throw new Error(o+` updates.shape[${l+r}] (${t.shape[l+r]}) != shape[${l+r}] (${n[l+r]})`)}function r0(n,e,t){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(t.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}MT(t,e,n)}function Wc(n,e,t){const a=e.shape.length,r=a>1?e.shape[a-1]:1,o=t.length;let l=1;for(let m=r;m<o;++m)l*=t[m];const c=r<1?1:r,f=se(e.shape)/c,d=[...Nt(t.slice(0,r)),1],p=se(t);return{sliceRank:r,numUpdates:f,sliceSize:l,strides:d,outputSize:p}}function KI(n,e,t){const a=k(n,"tensor","tensorScatterupdate"),r=k(e,"indices","tensorScatterupdate","int32"),o=k(t,"updates","tensorScatterupdate");if(r0(o,r,a.shape),a.dtype!==o.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${a.dtype} and ${o.dtype}.`);const l={tensor:a,indices:r,updates:o},c={};return F.runKernel(zg,l,c)}const PT=I({tensorScatterUpdate_:KI});function YI(n,e=1,t=!0){const a=k(n,"x","topk");if(a.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const r=a.shape[a.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>r)throw new Error(`'k' passed to topk() must be <= the last dimension (${r}) but got ${e}`);const o={x:a},l={k:e,sorted:t},[c,f]=F.runKernel(hy,o,l);return{values:c,indices:f}}const GT=I({topk_:YI});function QI(n,e=0,t=1,a,r){if(wn(n),a!=null&&a==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new Yy(e,t,a,!0,r),l=tt(n,a);for(let c=0;c<l.values.length;c++)l.values[c]=o.nextValue();return l.toTensor()}const HT=I({truncatedNormal_:QI});function ZI(n,e=0){const t=k(n,"x","unique","string_or_numeric");_(t.rank>0,()=>"The input tensor must be at least 1D");const a={x:t},r={axis:e},[o,l]=F.runKernel(my,a,r);return{values:o,indices:l}}const WT=I({unique_:ZI});function JI(n,e,t){const a=k(n,"x","unsortedSegmentSum"),r=k(e,"segmentIds","unsortedSegmentSum","int32");_(vi(t),()=>"numSegments must be of dtype int");const o={x:a,segmentIds:r},l={numSegments:t};return F.runKernel(yy,o,l)}const qT=I({unsortedSegmentSum_:JI});function eD(n,e=0){const t=k(n,"x","unstack","string_or_numeric");_(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);const a={value:t},r={axis:e};return F.runKernel(gy,a,r)}const _s=I({unstack_:eD});function jT(n,e){return Mc(n,e,"right")}function XT(n,e=!0,t,a){return F.makeVariable(n,e,t,a)}function KT(n,e){const t=[];for(let o=0;o<e.length;o++)e[o]&&t.push(o);const a=tt(n,"int32"),r=tt([t.length,n.length],"int32");for(let o=0;o<t.length;o++){const l=a.indexToLoc(t[o]),c=o*n.length;r.values.set(l,c)}return r.toTensor()}async function tD(n){const e=k(n,"condition","whereAsync","bool"),t=await e.data(),a=KT(e.shape,t);return n!==e&&e.dispose(),a}const i0=tD;async function nD(n,e,t){const a=k(n,"tensor","boolMask"),r=k(e,"mask","boolMask","bool"),o=t??0,l=r.rank,c=a.shape;_(l>0,()=>"mask cannot be scalar"),vn(c.slice(o,o+l),r.shape,"mask's shape must match the first K dimensions of tensor's shape,");let f=1;for(let S=o;S<o+l;S++)f*=c[S];const d=c.slice(0,o).concat([f],c.slice(o+l)),p=te(a,d),m=te(r,[-1]),y=await i0(m),x=yl(y,[1]),v=Fy(p,x,o);return n!==a&&a.dispose(),e!==r&&r.dispose(),x.dispose(),p.dispose(),m.dispose(),y.dispose(),v}const YT=nD;function aD(n,e,t){const a=k(n,"x","transpose");if(e==null&&(e=a.shape.map((l,c)=>c).reverse()),_(a.rank===e.length,()=>`Error in transpose: rank of input ${a.rank} must match length of perm ${e}.`),e.forEach(l=>{_(l>=0&&l<a.rank,()=>`All entries in 'perm' must be between 0 and ${a.rank-1} but got ${e}`)}),a.rank<=1)return a.clone();const r={x:a},o={perm:e};return a.dtype==="complex64"?De(()=>{let l=$i(a),c=ml(a);return l=F.runKernel(Xo,{x:l},o),c=F.runKernel(Xo,{x:c},o),t&&(c=ea(c)),Ua(l,c)}):F.runKernel(Xo,r,o)}const wc=I({transpose_:aD});function sD(n,e,t,a,r=!0){const o=k(n,"v","movingAverage"),l=k(e,"x","movingAverage"),c=k(t,"decay","movingAverage");CR(o,l),_(st(o.shape,l.shape),()=>"Shape mismatch in v and x");const f=_e(1),d=Ee(f,c);let p=ue(Ee(l,o),d);if(r){_(a!=null,()=>"When using zeroDebias: true, step is required.");const m=k(a,"step","movingAverage");p=Ze(p,Ee(f,Ti(c,m)))}return we(o,p)}const QT=I({movingAverage_:sD});function rD(n,e,t){wn(t);const a=k(n,"indices","scatterND","int32"),r=k(e,"updates","scatterND");r0(r,a,t);const o={indices:a,updates:r},l={shape:t};return F.runKernel(Bg,o,l)}const ZT=I({scatterND_:rD});function iD(n,e,t,a){if(n.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${n.shape}.`);const r=n.rank>0?n.shape[0]:1,o=n.rank>1?n.shape[1]:1;if(t.length!==o)throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${o}.`);const l=e.size;if(!(e.rank===0||e.rank===1&&l===r))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${r}]`);if(e.dtype!==a.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}function oD(n,e,t,a=0){wn(t);const r=k(n,"sparseIndices","sparseToDense","int32"),o=k(e,"sparseValues","sparseToDense","string_or_numeric"),l=k(a,"defaultValue","sparseToDense",o.dtype);iD(r,o,t,l);const c={sparseIndices:r,sparseValues:o,defaultValue:l},f={outputShape:t};return F.runKernel(ay,c,f)}const JT=I({sparseToDense_:oD});function lD(n,e){const t=k(e,"indices","gatherND","int32"),r={params:k(n,"x","gatherND","string_or_numeric"),indices:t};return F.runKernel(Lm,r)}const eC=I({gatherND_:lD});function uD(n,e){if(e==null)return n.shape.slice();if(st(n.shape,e))return e;if(n.shape.length===e.length){const t=[];for(let a=0;a<n.shape.length;a++)e[a]==null&&n.shape[a]!=null?t.push(n.shape[a]):t.push(e[a]);return t}return e}function cD(n,e,t,a){const r=k(n,"x","dropout");if(_(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),_(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return n instanceof St?r.clone():r;const o=uD(r,t),l=1-e,c=Ze(Ly(we(Pc(o,0,1,"float32",a),l)),l);return ue(r,c)}const tC=I({dropout_:cD});function o0(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function qc(n,e,t){const a=1-n%2,r=new Float32Array(n);for(let o=0;o<n;++o){const l=2*Math.PI*o/(n+a-1);r[o]=e-t*Math.cos(l)}return bn(r,"float32")}async function fD(n,e,t=1){const a=k(n,"predictions","inTopK"),r=k(e,"targets","inTopK");_(a.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${a.rank}`),_(a.rank-1===r.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${a.rank} and targets rank ${r.rank}`),vn(a.shape.slice(0,a.shape.length-1),r.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const o=a.shape[a.shape.length-1];_(t>0&&t<=o,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${o}), but got ${t}`);const l=await a.data(),c=await r.data(),[f,d]=[l.length/o,o],p=Ss("bool",f);for(let m=0;m<f;m++){const y=m*d,x=l.subarray(y,y+d),v=[];for(let S=0;S<x.length;S++)v.push({value:x[S],index:S});v.sort((S,w)=>w.value-S.value),p[m]=0;for(let S=0;S<t;S++)if(v[S].index===c[m]){p[m]=1;break}}return n!==a&&a.dispose(),e!==r&&r.dispose(),Jn(p,r.shape,"bool")}const nC=fD;function dD(n,e,t,a,r,o="NHWC",l){let c=n;n.rank===3&&(c=te(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let f=e;f.rank===3&&(f=te(e,[1,e.shape[0],e.shape[1],e.shape[2]])),_(c.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${c.shape}.`),_(f.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${f.shape}.`),_(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);const d=o==="NHWC"?c.shape[3]:c.shape[1],p=o==="NHWC"?f.shape[3]:f.shape[1];_(d===t[2],()=>`Error in conv2dDerFilter: depth of input ${d}) must match input depth in filter (${t[2]}.`),_(p===t[3],()=>`Error in conv2dDerFilter: depth of dy (${p}) must match output depth for filter (${t[3]}).`),Vn("conv2dDerFilter",r,l);const m={x:c,dy:f},y={strides:a,pad:r,dataFormat:o,dimRoundingMode:l,filterShape:t};return F.runKernel(sm,m,y)}const hD=I({conv2DBackpropFilter_:dD});function jc(n,e,t){if(t==null||t==="linear")return n;if(t==="relu")return ue(n,a0(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function Xc(n,e){let t=e;const a=AS(n.shape,e.shape);return a.length>0&&(t=Qe(t,a)),te(t,n.shape)}function Kc(n,e,t,a){if(e==="linear")return n;if(e==="relu")return gl(n);if(e==="elu")return Ay(n);if(e==="relu6")return Zy(n);if(e==="prelu")return Xy(n,t);if(e==="leakyrelu")return zy(n,a);if(e==="sigmoid")return lr(n);throw new Error(`Unknown fused activation ${e}.`)}const Yc=(n,e)=>!(n>0)||e==="linear";function pD({x:n,filter:e,strides:t,pad:a,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:l,bias:c,activation:f="linear",preluActivationWeights:d,leakyreluAlpha:p}){if(f=f||"linear",Yc(F.state.gradientDepth,f)===!1){_(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let j=dl(n,e,t,a,r,o,l);return c!=null&&(j=we(j,c)),Kc(j,f,d,p)}const m=k(n,"x","conv2d","float32"),y=k(e,"filter","conv2d","float32");let x=m,v=!1;m.rank===3&&(v=!0,x=te(m,[1,m.shape[0],m.shape[1],m.shape[2]])),_(x.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${x.rank}.`),_(y.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${y.rank}.`),Vn("fused conv2d",a,l);const S=r==="NHWC"?x.shape[3]:x.shape[1];_(y.shape[2]===S,()=>`Error in conv2d: depth of input (${S}) must match input depth for filter ${y.shape[2]}.`),_(on(t,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${o}'`);const w=Sn(x.shape,y.shape,t,o,a,l);let T;c!=null&&(T=k(c,"bias","fused conv2d"),[T]=it(T,m),r==="NHWC"?Fe(w.outShape,T.shape):(_(T.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${T.shape.length}.`),_(T.shape.length===0||T.shape[0]===w.outChannels||T.shape[0]===1,()=>`Error in fused conv2d: bias shape (${T.shape}) is not compatible with the number of output channels (${w.outChannels})`)));let $;if(d!=null){const j=d.shape;if(_(j.length<=1||j.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${j.length}.`),j.length===1)_(j[0]===1||j[0]===w.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${j}) is not compatible with the number of output channels (${w.outChannels}).`);else if(j.length===3)try{Fe(j,w.outShape)}catch{const X=`Error in fused conv2d: PReLU activation weights (${j}) is not compatible with the output shape of the conv2d (${w.outShape}).`;throw Error(X)}$=k(d,"prelu weights","fused conv2d")}const O=(j,G)=>{_(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[X,V,U,R]=G,Z=jc(j,U,f);_(Zo(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const oe=xS(V.shape,Z,X,t,a),fe=hD(V,Z,X.shape,t,a),de=[oe,fe];if(R!=null){const P=Xc(R,Z);de.push(P)}return de},A={x,filter:y,bias:T,preluActivationWeights:$},z={strides:t,pad:a,dataFormat:r,dilations:o,dimRoundingMode:l,activation:f,leakyreluAlpha:p};return c==null?fa((G,X,V)=>{let U=F.runKernel(dc,A,z);return V([X,G,U]),v&&(U=te(U,[U.shape[1],U.shape[2],U.shape[3]])),{value:U,gradFunc:O}})(x,y):fa((G,X,V,U)=>{let R=F.runKernel(dc,A,z);return U([X,G,R,V]),v&&(R=te(R,[R.shape[1],R.shape[2],R.shape[3]])),{value:R,gradFunc:O}})(x,y,T)}const mD=I({fusedConv2d_:pD});function gD(n,e,t,a,r,o=[1,1],l){let c=n;n.rank===3&&(c=te(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let f=e;f.rank===3&&(f=te(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const d={x:c,dy:f},p={strides:a,pad:r,dimRoundingMode:l,dilations:o,filterShape:t};return F.runKernel(gm,d,p)}const yD=I({depthwiseConv2dNativeBackpropFilter_:gD});function bD(n,e,t,a,r,o=[1,1],l){let c=e,f=!1;e.rank===3&&(f=!0,c=te(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const d={dy:c,filter:t},p={strides:a,pad:r,dimRoundingMode:l,dilations:o,inputShape:n},m=F.runKernel(ym,d,p);return f?te(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const xD=I({depthwiseConv2dNativeBackpropInput_:bD});function vD({x:n,filter:e,strides:t,pad:a,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:l,bias:c,activation:f="linear",preluActivationWeights:d,leakyreluAlpha:p}){if(Yc(F.state.gradientDepth,f)===!1){let z=Uc(n,e,t,a,r,o,l);return c!=null&&(z=we(z,c)),Kc(z,f,d,p)}const m=k(n,"x","depthwiseConv2d","float32"),y=k(e,"filter","depthwiseConv2d","float32");let x=m,v=!1;m.rank===3&&(v=!0,x=te(m,[1,m.shape[0],m.shape[1],m.shape[2]])),_(x.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${x.rank}.`),_(y.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${y.rank}.`),_(x.shape[3]===y.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${x.shape[3]}) must match the inChannels dimension in filter ${y.shape[2]}.`),o==null&&(o=[1,1]),_(on(t,o),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${o}'`),Vn("fused depthwiseConv2d",a,l);const S=Sn(x.shape,y.shape,t,o,a,l,!0);let w;c!=null&&(w=k(c,"bias","fused conv2d"),[w]=it(w,m),Fe(S.outShape,w.shape));let T;d!=null&&(T=k(d,"prelu weights","fused depthwiseConv2d"));const $=(z,j)=>{_(Zo(o),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);const[G,X,V,U]=j,R=jc(z,V,f),Z=xD(X.shape,R,G,t,a,o,l),oe=yD(X,R,G.shape,t,a,o,l);if(U!=null){const fe=Xc(w,R);return[Z,oe,fe]}return[Z,oe]},O={x,filter:y,bias:w,preluActivationWeights:T},A={strides:t,pad:a,dataFormat:r,dilations:o,dimRoundingMode:l,activation:f,leakyreluAlpha:p};return c==null?fa((j,G,X)=>{let V=F.runKernel(hc,O,A);return X([G,j,V]),v&&(V=te(V,[V.shape[1],V.shape[2],V.shape[3]])),{value:V,gradFunc:$}})(x,y):fa((j,G,X,V)=>{let U=F.runKernel(hc,O,A);return V([G,j,U,X]),v&&(U=te(U,[U.shape[1],U.shape[2],U.shape[3]])),{value:U,gradFunc:$}})(x,y,w)}const wD=I({fusedDepthwiseConv2d_:vD});function SD({a:n,b:e,transposeA:t=!1,transposeB:a=!1,bias:r,activation:o="linear",preluActivationWeights:l,leakyreluAlpha:c=.2}){if(Yc(F.state.gradientDepth,o)===!1){let R=Me(n,e,t,a);return r!=null&&(R=we(R,r)),Kc(R,o,l,c)}let f=k(n,"a","fused matMul"),d=k(e,"b","fused matMul");[f,d]=it(f,d);const p=t?f.shape[f.rank-2]:f.shape[f.rank-1],m=a?d.shape[d.rank-1]:d.shape[d.rank-2],y=t?f.shape[f.rank-1]:f.shape[f.rank-2],x=a?d.shape[d.rank-2]:d.shape[d.rank-1],v=f.shape.slice(0,-2),S=d.shape.slice(0,-2),w=se(v),T=se(S);_(p===m,()=>`Error in fused matMul: inner shapes (${p}) and (${m}) of Tensors with shapes ${f.shape} and ${d.shape} and transposeA=${t} and transposeB=${a} must match.`);const O=Fe(f.shape.slice(0,-2),d.shape.slice(0,-2)).concat([y,x]),A=t?te(f,[w,p,y]):te(f,[w,y,p]),z=a?te(d,[T,x,m]):te(d,[T,m,x]);let j;r!=null&&(j=k(r,"bias","fused matMul"),[j]=it(j,f),Fe(O,j.shape));let G;l!=null&&(G=k(l,"prelu weights","fused matMul"));const X=(R,Z)=>{const[oe,fe,de,P]=Z,ae=jc(te(R,de.shape),de,o);let ie,ge;if(!t&&!a?(ie=Me(ae,fe,!1,!0),ge=Me(oe,ae,!0,!1)):!t&&a?(ie=Me(ae,fe,!1,!1),ge=Me(ae,oe,!0,!1)):t&&!a?(ie=Me(fe,ae,!1,!0),ge=Me(oe,ae,!1,!1)):(ie=Me(fe,ae,!0,!0),ge=Me(ae,oe,!0,!0)),r!=null){const be=Xc(P,ae);return[ie,ge,be]}else return[ie,ge]},V={a:A,b:z,bias:j,preluActivationWeights:G},U={transposeA:t,transposeB:a,activation:o,leakyreluAlpha:c};return r==null?fa((Z,oe,fe)=>{const de=F.runKernel(fc,V,U);return fe([Z,oe,de]),{value:te(de,O),gradFunc:X}})(A,z):fa((Z,oe,fe,de)=>{const P=F.runKernel(fc,V,U);return de([Z,oe,P,fe]),{value:te(P,O),gradFunc:X}})(A,z,j)}const TD=I({fusedMatMul_:SD});const aC=Object.freeze(Object.defineProperty({__proto__:null,conv2d:mD,depthwiseConv2d:wD,matMul:TD},Symbol.toStringTag,{value:"Module"}));function CD(n){return qc(n,.54,.46)}const ND=I({hammingWindow_:CD});function $D(n){return qc(n,.5,.5)}const sC=I({hannWindow_:$D});function ED(n,e,t,a=!1,r=0){let o=0;const l=[];for(;o+e<=n.size;)l.push(He(n,o,e)),o+=t;if(a)for(;o<n.size;){const c=o+e-n.size,f=Dt([He(n,o,e-c),Di([c],r)]);l.push(f),o+=t}return l.length===0?xi([],[0,e]):te(Dt(l),[l.length,e])}const rC=I({frame_:ED});function kD(n,e,t,a,r=sC){a==null&&(a=o0(e));const o=rC(n,e,t),l=ue(o,r(e));return Hc(l,a)}const RD=I({stft_:kD});function _D(n,e,t,a,r="bilinear",o=0){const l=k(n,"image","cropAndResize"),c=k(e,"boxes","cropAndResize","float32"),f=k(t,"boxInd","cropAndResize","int32"),d=c.shape[0];_(l.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${l.rank}.`),_(c.rank===2&&c.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${d},4] but had shape ${c.shape}.`),_(f.rank===1&&f.shape[0]===d,()=>`Error in cropAndResize: boxInd must be have size [${d}] but had shape ${c.shape}.`),_(a.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${a.length}.`),_(a[0]>=1&&a[1]>=1,()=>`cropSize must be atleast [1,1], but was ${a}`),_(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const p={image:l,boxes:c,boxInd:f},m={method:r,extrapolationValue:o,cropSize:a};return F.runKernel(dm,p,m)}const AD=I({cropAndResize_:_D});function OD(n){const e=k(n,"image","flipLeftRight","float32");_(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const t={image:e};return F.runKernel(_m,t,{})}const ID=I({flipLeftRight_:OD});function DD(n){const e=k(n,"image","grayscaleToRGB"),t=e.rank-1,a=e.shape[t];_(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),_(a===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${a}.`);const r=new Array(e.rank);return r.fill(1,0,t),r[t]=3,bi(e,r)}const LD=I({grayscaleToRGB_:DD});function FD(n){const e=k(n,"image","RGBToGrayscale"),t=e.rank-1,a=e.shape[t];_(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),_(a===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${a}.`);const r=e.dtype,o=rt(e,"float32"),l=bn([.2989,.587,.114]);let c;switch(e.rank){case 2:c=nr("ij,j->i",o,l);break;case 3:c=nr("ijk,k->ij",o,l);break;case 4:c=nr("ijkl,l->ijk",o,l);break;case 5:c=nr("ijklm,m->ijkl",o,l);break;case 6:c=nr("ijklmn,n->ijklm",o,l);break;default:throw new Error("Not a valid tensor rank.")}return c=Ia(c,-1),rt(c,r)}const BD=I({rgbToGrayscale_:FD});function zD(n,e,t=0,a=.5){const r=k(n,"image","rotateWithOffset","float32");_(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},l={radians:e,fillValue:t,center:a};return F.runKernel(vy,o,l)}const UD=I({rotateWithOffset_:zD});function Fi(n,e,t,a,r,o){a==null&&(a=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const l=n.shape[0];return t=Math.min(t,l),_(0<=a&&a<=1,()=>`iouThreshold must be in [0, 1], but was '${a}'`),_(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),_(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),_(e.rank===1,()=>"scores must be a 1D tensor"),_(e.shape[0]===l,()=>`scores has incompatible shape with boxes. Expected ${l}, but was ${e.shape[0]}`),_(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:t,iouThreshold:a,scoreThreshold:r,softNmsSigma:o}}function VD(n,e,t,a=.5,r=Number.NEGATIVE_INFINITY){const o=k(n,"boxes","nonMaxSuppression","float32"),l=k(e,"scores","nonMaxSuppression","float32"),c=Fi(o,l,t,a,r);t=c.maxOutputSize,a=c.iouThreshold,r=c.scoreThreshold;const f={maxOutputSize:t,iouThreshold:a,scoreThreshold:r};return F.runKernel(hg,{boxes:o,scores:l},f)}const MD=I({nonMaxSuppression_:VD});function PD(n,e,t){const a=GD(n,e,t),r=a<0?-(a+1):a;n.splice(r,0,e)}function GD(n,e,t){return WD(n,e,t||HD)}function HD(n,e){return n>e?1:n<e?-1:0}function WD(n,e,t){let a=0,r=n.length,o=0,l=!1;for(;a<r;){o=a+(r-a>>>1);const c=t(e,n[o]);c>0?a=o+1:(r=o,l=!c)}return l?a:-a-1}function iC(n,e,t,a,r){return l0(n,e,t,a,r,0)}function oC(n,e,t,a,r,o){return l0(n,e,t,a,r,0,!1,o,!0)}function lC(n,e,t,a,r,o){return l0(n,e,t,a,r,o,!0)}function l0(n,e,t,a,r,o,l=!1,c=!1,f=!1){const d=[];for(let w=0;w<e.length;w++)e[w]>r&&d.push({score:e[w],boxIndex:w,suppressBeginIndex:0});d.sort(a2);const p=o>0?-.5/o:0,m=[],y=[];for(;m.length<t&&d.length>0;){const w=d.pop(),{score:T,boxIndex:$,suppressBeginIndex:O}=w;if(T<r)break;let A=!1;for(let z=m.length-1;z>=O;--z){const j=qD(n,$,m[z]);if(j>=a){A=!0;break}if(w.score=w.score*jD(a,p,j),w.score<=r)break}w.suppressBeginIndex=m.length,A||(w.score===T?(m.push($),y.push(w.score)):w.score>r&&PD(d,w,a2))}const x=m.length,v=t-x;c&&v>0&&(m.push(...new Array(v).fill(0)),y.push(...new Array(v).fill(0)));const S={selectedIndices:m};return l&&(S.selectedScores=y),f&&(S.validOutputs=x),S}function qD(n,e,t){const a=n.subarray(e*4,e*4+4),r=n.subarray(t*4,t*4+4),o=Math.min(a[0],a[2]),l=Math.min(a[1],a[3]),c=Math.max(a[0],a[2]),f=Math.max(a[1],a[3]),d=Math.min(r[0],r[2]),p=Math.min(r[1],r[3]),m=Math.max(r[0],r[2]),y=Math.max(r[1],r[3]),x=(c-o)*(f-l),v=(m-d)*(y-p);if(x<=0||v<=0)return 0;const S=Math.max(o,d),w=Math.max(l,p),T=Math.min(c,m),$=Math.min(f,y),O=Math.max(T-S,0)*Math.max($-w,0);return O/(x+v-O)}function jD(n,e,t){const a=Math.exp(e*t*t);return t<=n?a:0}function a2(n,e){return n.score-e.score||n.score===e.score&&e.boxIndex-n.boxIndex}async function XD(n,e,t,a=.5,r=Number.NEGATIVE_INFINITY){const o=k(n,"boxes","nonMaxSuppressionAsync"),l=k(e,"scores","nonMaxSuppressionAsync"),c=Fi(o,l,t,a,r);t=c.maxOutputSize,a=c.iouThreshold,r=c.scoreThreshold;const f=await Promise.all([o.data(),l.data()]),d=f[0],p=f[1],{selectedIndices:m}=iC(d,p,t,a,r);return o!==n&&o.dispose(),l!==e&&l.dispose(),bn(m,"int32")}const KD=XD;function YD(n,e,t,a=.5,r=Number.NEGATIVE_INFINITY,o=0){const l=k(n,"boxes","nonMaxSuppression"),c=k(e,"scores","nonMaxSuppression"),f=Fi(l,c,t,a,r,o);t=f.maxOutputSize,a=f.iouThreshold,r=f.scoreThreshold,o=f.softNmsSigma;const d={boxes:l,scores:c},p={maxOutputSize:t,iouThreshold:a,scoreThreshold:r,softNmsSigma:o},m=F.runKernel(mg,d,p);return{selectedIndices:m[0],selectedScores:m[1]}}const QD=I({nonMaxSuppressionWithScore_:YD});async function ZD(n,e,t,a=.5,r=Number.NEGATIVE_INFINITY,o=0){const l=k(n,"boxes","nonMaxSuppressionAsync"),c=k(e,"scores","nonMaxSuppressionAsync"),f=Fi(l,c,t,a,r,o);t=f.maxOutputSize,a=f.iouThreshold,r=f.scoreThreshold,o=f.softNmsSigma;const d=await Promise.all([l.data(),c.data()]),p=d[0],m=d[1],{selectedIndices:y,selectedScores:x}=lC(p,m,t,a,r,o);return l!==n&&l.dispose(),c!==e&&c.dispose(),{selectedIndices:bn(y,"int32"),selectedScores:bn(x)}}const JD=ZD;function e3(n,e,t,a=.5,r=Number.NEGATIVE_INFINITY,o=!1){const l=k(n,"boxes","nonMaxSuppression"),c=k(e,"scores","nonMaxSuppression"),f=Fi(l,c,t,a,r,null),d=f.maxOutputSize,p=f.iouThreshold,m=f.scoreThreshold,y={boxes:l,scores:c},x={maxOutputSize:d,iouThreshold:p,scoreThreshold:m,padToMaxOutputSize:o},v=F.runKernel(pg,y,x);return{selectedIndices:v[0],validOutputs:v[1]}}const t3=I({nonMaxSuppressionPadded_:e3});async function n3(n,e,t,a=.5,r=Number.NEGATIVE_INFINITY,o=!1){const l=k(n,"boxes","nonMaxSuppressionAsync"),c=k(e,"scores","nonMaxSuppressionAsync"),f=Fi(l,c,t,a,r,null),d=f.maxOutputSize,p=f.iouThreshold,m=f.scoreThreshold,[y,x]=await Promise.all([l.data(),c.data()]),{selectedIndices:v,validOutputs:S}=oC(y,x,d,p,m,o);return l!==n&&l.dispose(),c!==e&&c.dispose(),{selectedIndices:bn(v,"int32"),validOutputs:_e(S,"int32")}}const a3=n3;function s3(n,e,t=!1,a=!1){const r=k(n,"images","resizeBilinear");_(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),_(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),_(a===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,l=!1;r.rank===3&&(l=!0,o=te(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const c={images:o},f={alignCorners:t,halfPixelCenters:a,size:e},d=F.runKernel(Og,c,f);return l?te(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const r3=I({resizeBilinear_:s3});function i3(n,e,t=!1,a=!1){const r=k(n,"images","resizeNearestNeighbor");_(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),_(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),_(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),_(a===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,l=!1;r.rank===3&&(l=!0,o=te(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const c={images:o},f={alignCorners:t,halfPixelCenters:a,size:e},d=F.runKernel(Ag,c,f);return l?te(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const o3=I({resizeNearestNeighbor_:i3});function l3(n,e="binary",t=!1,a=.5){const r=k(n,"image","threshold"),o=.2989,l=.587,c=.114,f=r.shape[0]*r.shape[1];let d=ue(bn([a]),255),p,m,y,x;if(_(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),_(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),_(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),_(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),r.shape[2]===3){[p,m,y]=Ei(r,[1,1,1],-1);const w=ue(p,o),T=ue(m,l),$=ue(y,c);x=we(we(w,T),$)}else x=n;if(e==="otsu"){const w=Ry(rt(Jy(x),"int32"),Jn([]),256);d=u3(w,f)}const v=t?Vc(x,d):pl(x,d);return rt(ue(v,255),"int32")}function u3(n,e){let t=bn([-1]),a=bn([0]),r=bn([0]),o,l,c,f,d,p;for(let m=0;m<n.size-1;m++){o=He(n,0,m+1),l=He(n,m+1),d=Ze(Qe(o),e),p=Ze(Qe(l),e);const y=Qe(ue(o,Ni(0,o.size)));c=Ze(y,Qe(o));const x=Di(l.shape,o.size),v=we(Ni(0,l.size),x),S=ue(l,v);f=Ze(Qe(S),Qe(l));const w=Ee(c,f),T=Ee(c,f),$=ue(d,p);r=ue(ue($,w),T);const O=pl(r,a);a=za(O,r,a),t=za(O,bn([m]),t)}return t}const c3=I({threshold_:l3});function f3(n,e,t="nearest",a="constant",r=0,o){const l=k(n,"image","transform","float32"),c=k(e,"transforms","transform","float32");_(l.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${l.rank}.`),_(c.rank===2&&(c.shape[0]===l.shape[0]||c.shape[0]===1)&&c.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),_(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const f={image:l,transforms:c},d={interpolation:t,fillMode:a,fillValue:r,outputShape:o};return F.runKernel(py,f,d)}const d3=I({transform_:f3});function h3(n,e,t){const a=k(n,"a","bandPart");_(a.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${a.rank}.`);const r=a.shape,[o,l]=a.shape.slice(-2);let c,f;typeof e=="number"?(_(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),_(e<=o,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${o}).`),c=k(e<0?o:e,"numLower","bandPart")):(_(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),c=za(vc(e,0),o,tl(e,o))),typeof t=="number"?(_(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`),_(t<=l,()=>`bandPart(): numUpper (${t}) must not be greater than the number of columns (${l}).`),f=k(t<0?l:t,"numUpper","bandPart")):(_(t.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),f=za(vc(t,0),l,tl(t,l)));const d=te(Ni(0,o,1,"int32"),[-1,1]),p=Ni(0,l,1,"int32"),m=Ee(d,p),y=Jo(Vc(m,c),By(m,ea(f))),x=Va([o,l],a.dtype);return te(da(_s(te(a,[-1,o,l])).map(v=>za(y,v,x))),r)}const p3=I({bandPart_:h3});function m3(n){let e;if(Array.isArray(n)){e=!1,_(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=n[0].shape[0];for(let o=1;o<n.length;++o)_(n[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[o].shape[0]} vs. ${r})`)}else e=!0,n=Ei(n,n.shape[0],0).map(r=>yl(r,[0]));_(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const t=[],a=n;for(let r=0;r<n.length;++r)t.push(F.tidy(()=>{let o=a[r];if(r>0)for(let l=0;l<r;++l){const c=ue(Qe(ue(t[l],o)),t[l]);o=Ee(o,c)}return Ze(o,hl(o,"euclidean"))}));return e?da(t,0):t}const g3=I({gramSchmidt_:m3});function y3(n,e=!1){if(_(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return s2(n,e);{const t=n.shape.slice(0,n.shape.length-2).reduce((f,d)=>f*d),a=_s(te(n,[t,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),r=[],o=[];a.forEach(f=>{const[d,p]=s2(f,e);r.push(d),o.push(p)});const l=te(da(r,0),n.shape),c=te(da(o,0),n.shape);return[l,c]}}function s2(n,e=!1){return F.tidy(()=>{_(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const t=n.shape[0],a=n.shape[1];let r=Dy(t),o=Ba(n);const l=xi([[1]],[1,1]);let c=Ba(l);const f=t>=a?a:t;for(let d=0;d<f;++d){const p=o,m=c,y=r;[c,o,r]=F.tidy(()=>{const x=He(o,[d,d],[t-d,1]),v=hl(x),S=He(o,[d,d],[1,1]),w=za(pl(S,0),xi([[-1]]),xi([[1]])),T=Ee(S,ue(w,v)),$=Ze(x,T);$.shape[0]===1?c=Ba(l):c=Dt([l,He($,[1,0],[$.shape[0]-1,$.shape[1]])],0);const O=ea(Ze(Me(w,T),v)),A=He(o,[d,0],[t-d,a]),z=ue(O,c),j=wc(c);if(d===0)o=Ee(A,Me(z,Me(j,A)));else{const V=Ee(A,Me(z,Me(j,A)));o=Dt([He(o,[0,0],[d,a]),V],0)}const G=wc(z),X=He(r,[0,d],[t,r.shape[1]-d]);if(d===0)r=Ee(X,Me(Me(X,c),G));else{const V=Ee(X,Me(Me(X,c),G));r=Dt([He(r,[0,0],[t,d]),V],1)}return[c,o,r]}),Mt([p,m,y])}return!e&&t>a&&(r=He(r,[0,0],[t,a]),o=He(o,[0,0],[a,a])),[r,o]})}const b3=I({qr_:y3});var Ut;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ut||(Ut={}));function x3(n,e,t=Ut.SUM_BY_NONZERO_WEIGHTS){const a=k(n,"losses","computeWeightedLoss");let r=null;e!=null&&(r=k(e,"weights","computeWeightedLoss"));const o=r==null?a:ue(a,r);if(t===Ut.NONE)return o;if(t===Ut.SUM)return Qe(o);if(t===Ut.MEAN){if(r==null)return el(o);{const l=a.size/r.size,c=Ze(Qe(o),Qe(r));return l>1?Ze(c,_e(l)):c}}if(t===Ut.SUM_BY_NONZERO_WEIGHTS){if(r==null)return Ze(Qe(o),_e(a.size));{const l=ue(r,xs(a.shape)),c=rt(Qe(qy(l,_e(0))),"float32");return Ze(Qe(o),c)}}throw Error(`Unknown reduction: ${t}`)}const Ma=I({computeWeightedLoss_:x3});function v3(n,e,t,a=Ut.SUM_BY_NONZERO_WEIGHTS){const r=k(n,"labels","absoluteDifference"),o=k(e,"predictions","absoluteDifference");let l=null;t!=null&&(l=k(t,"weights","absoluteDifference")),vn(r.shape,o.shape,"Error in absoluteDifference: ");const c=an(Ee(r,o));return Ma(c,l,a)}const w3=I({absoluteDifference_:v3});function S3(n,e,t,a,r=Ut.SUM_BY_NONZERO_WEIGHTS){const o=k(n,"labels","cosineDistance"),l=k(e,"predictions","cosineDistance");let c=null;a!=null&&(c=k(a,"weights","cosineDistance")),vn(o.shape,l.shape,"Error in cosineDistance: ");const f=_e(1),d=Ee(f,Qe(ue(o,l),t,!0));return Ma(d,c,r)}const T3=I({cosineDistance_:S3});function C3(n,e,t,a=Ut.SUM_BY_NONZERO_WEIGHTS){let r=k(n,"labels","hingeLoss");const o=k(e,"predictions","hingeLoss");let l=null;t!=null&&(l=k(t,"weights","hingeLoss")),vn(r.shape,o.shape,"Error in hingeLoss: ");const c=_e(1);r=Ee(ue(_e(2),r),c);const f=gl(Ee(c,ue(r,o)));return Ma(f,l,a)}const N3=I({hingeLoss_:C3});function $3(n,e,t,a=1,r=Ut.SUM_BY_NONZERO_WEIGHTS){const o=k(n,"labels","huberLoss"),l=k(e,"predictions","huberLoss");let c=null;t!=null&&(c=k(t,"weights","huberLoss")),vn(o.shape,l.shape,"Error in huberLoss: ");const f=_e(a),d=an(Ee(l,o)),p=tl(d,f),m=Ee(d,p),y=we(ue(_e(.5),zn(p)),ue(f,m));return Ma(y,c,r)}const E3=I({huberLoss_:$3});function k3(n,e,t,a=1e-7,r=Ut.SUM_BY_NONZERO_WEIGHTS){const o=k(n,"labels","logLoss"),l=k(e,"predictions","logLoss");let c=null;t!=null&&(c=k(t,"weights","logLoss")),vn(o.shape,l.shape,"Error in logLoss: ");const f=_e(1),d=_e(a),p=ea(ue(o,Ci(we(l,d)))),m=ue(Ee(f,o),Ci(we(Ee(f,l),d))),y=Ee(p,m);return Ma(y,c,r)}const R3=I({logLoss_:k3});function _3(n,e,t,a=Ut.SUM_BY_NONZERO_WEIGHTS){const r=k(n,"labels","meanSquaredError"),o=k(e,"predictions","meanSquaredError");let l=null;t!=null&&(l=k(t,"weights","meanSquaredError")),vn(r.shape,o.shape,"Error in meanSquaredError: ");const c=n0(r,o);return Ma(c,l,a)}const A3=I({meanSquaredError_:_3});function O3(n,e){const t=k(n,"labels","sigmoidCrossEntropyWithLogits"),a=k(e,"logits","sigmoidCrossEntropyWithLogits");vn(t.shape,a.shape,"Error in sigmoidCrossEntropyWithLogits: ");const r=gl(a),o=ue(a,t),l=Uy(Ns(ea(an(a))));return we(Ee(r,o),l)}function I3(n,e,t,a=0,r=Ut.SUM_BY_NONZERO_WEIGHTS){let o=k(n,"multiClassLabels","sigmoidCrossEntropy");const l=k(e,"logits","sigmoidCrossEntropy");let c=null;if(t!=null&&(c=k(t,"weights","sigmoidCrossEntropy")),vn(o.shape,l.shape,"Error in sigmoidCrossEntropy: "),a>0){const d=_e(a),p=_e(1),m=_e(.5);o=we(ue(o,Ee(p,d)),ue(m,d))}const f=O3(o,l);return Ma(f,c,r)}const D3=I({sigmoidCrossEntropy_:I3});function L3(n,e,t=-1){if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${t}`);return fa((r,o,l)=>{const f=My(o,[t],!0),d=Ee(rt(o,"float32"),f);l([r,d]);const p=ea(ue(d,r));return{value:Qe(p,[t]),gradFunc:(x,v)=>{const[S,w]=v,T=Tn(x.shape,[t]);return[ue(te(x,T),Ee(rt(S,"float32"),Ns(w))),ue(te(x,T),Ee(Ns(w),rt(S,"float32")))]}}})(n,e)}function F3(n,e,t,a=0,r=Ut.SUM_BY_NONZERO_WEIGHTS){let o=k(n,"onehotLabels","softmaxCrossEntropy");const l=k(e,"logits","softmaxCrossEntropy");let c=null;if(t!=null&&(c=k(t,"weights","softmaxCrossEntropy")),vn(o.shape,l.shape,"Error in softmaxCrossEntropy: "),a>0){const d=_e(a),p=_e(1),m=_e(o.shape[1]);o=we(ue(o,Ee(p,d)),Ze(d,m))}const f=L3(o,l);return Ma(f,c,r)}const B3=I({softmaxCrossEntropy_:F3});function z3(n,e,t,a){const r=k(n,"indices","sparseFillEmptyRows","int32"),o=k(e,"values","sparseFillEmptyRows"),l=k(t,"denseShape","sparseFillEmptyRows","int32"),c=k(a,"defaultValue","sparseFillEmptyRows",o.dtype);if(r.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${r.shape}`);if(o.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${o.shape}`);if(l.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${l.shape}`);if(c.rank!==0)throw new Error(`Default value should be a scalar but received shape ${c.shape}`);const f={indices:r,values:o,denseShape:l,defaultValue:c},d=F.runKernel(Jg,f);return{outputIndices:d[0],outputValues:d[1],emptyRowIndicator:d[2],reverseIndexMap:d[3]}}const U3=I({sparseFillEmptyRows_:z3});function V3(n,e,t){const a=k(n,"inputIndices","sparseReshape","int32"),r=k(e,"inputShape","sparseReshape","int32"),o=k(t,"newShape","sparseReshape","int32");if(a.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${a.shape}`);if(r.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${r.shape}`);if(o.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${o.shape}`);const l={inputIndices:a,inputShape:r,newShape:o},c=F.runKernel(ey,l);return{outputIndices:c[0],outputShape:c[1]}}const M3=I({sparseReshape_:V3});function P3(n,e,t){const a=k(n,"data","sparseSegmentMean"),r=k(e,"indices","sparseSegmentMean","int32"),o=k(t,"segmentIds","sparseSegmentMean","int32");if(a.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);const l={data:a,indices:r,segmentIds:o};return F.runKernel(ty,l)}const G3=I({sparseSegmentMean_:P3});function H3(n,e,t){const a=k(n,"data","sparseSegmentSum"),r=k(e,"indices","sparseSegmentSum","int32"),o=k(t,"segmentIds","sparseSegmentSum","int32");if(a.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);const l={data:a,indices:r,segmentIds:o};return F.runKernel(ny,l)}const W3=I({sparseSegmentSum_:H3});function q3(n,e,t,a,r,o,l,c){const f=k(n,"data","stringNGrams","string");if(f.dtype!=="string")throw new Error("Data must be of datatype string");if(f.shape.length!==1)throw new Error(`Data must be a vector, saw: ${f.shape}`);const d=k(e,"dataSplits","stringNGrams");if(d.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const p={separator:t,nGramWidths:a,leftPad:r,rightPad:o,padWidth:l,preserveShortSequences:c},m={data:f,dataSplits:d},y=F.runKernel(oy,m,p);return{nGrams:y[0],nGramsSplits:y[1]}}const j3=I({stringNGrams_:q3});function X3(n,e,t=!0){const a=k(n,"input","stringSplit","string"),r=k(e,"delimiter","stringSplit","string");if(a.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${a.shape}`);if(r.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${r.shape}`);const o={skipEmpty:t},l={input:a,delimiter:r},c=F.runKernel(ly,l,o);return{indices:c[0],values:c[1],shape:c[2]}}const K3=I({stringSplit_:X3});function Y3(n,e){const t=k(n,"input","stringToHashBucketFast","string"),a={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const r={input:t};return F.runKernel(uy,r,a)}const Q3=I({stringToHashBucketFast_:Y3});function Z3(n,e,t,a=!0){const r=k(n,"input","staticRegexReplace","string"),o={pattern:e,rewrite:t,replaceGlobal:a};return F.runKernel(ry,{x:r},o)}const J3=I({staticRegexReplace_:Z3});const uC={fft:Gc,ifft:nl,rfft:Hc,irfft:t0},cC={hammingWindow:ND,hannWindow:sC,frame:rC,stft:RD},u0={flipLeftRight:ID,grayscaleToRGB:LD,resizeNearestNeighbor:o3,resizeBilinear:r3,rgbToGrayscale:BD,rotateWithOffset:UD,cropAndResize:AD,nonMaxSuppression:MD,nonMaxSuppressionAsync:KD,nonMaxSuppressionWithScore:QD,nonMaxSuppressionWithScoreAsync:JD,nonMaxSuppressionPadded:t3,nonMaxSuppressionPaddedAsync:a3,threshold:c3,transform:d3},fC={bandPart:p3,gramSchmidt:g3,qr:b3},dC={absoluteDifference:w3,computeWeightedLoss:Ma,cosineDistance:T3,hingeLoss:N3,huberLoss:E3,logLoss:R3,meanSquaredError:A3,sigmoidCrossEntropy:D3,softmaxCrossEntropy:B3},hC={sparseFillEmptyRows:U3,sparseReshape:M3,sparseSegmentMean:G3,sparseSegmentSum:W3},pC={stringNGrams:j3,stringSplit:K3,stringToHashBucketFast:Q3,staticRegexReplace:J3};const e4=new Map,t4=new Map;class n4{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class ar{constructor(){this.classNameMap={}}static getMap(){return ar.instance==null&&(ar.instance=new ar),ar.instance}static register(e){ar.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function a4(n,e,t){_(n.className!=null,()=>"Class being registered does not have the static className property defined."),_(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),_(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof t>"u"&&(t=n.className);const a=t,r=e+">"+a;return ar.register(n),e4.set(r,n),t4.set(n,r),n}class As extends n4{minimize(e,t=!1,a){const{value:r,grads:o}=this.computeGradients(e,a);if(a!=null){const l=a.map(c=>({name:c.name,tensor:o[c.name]}));this.applyGradients(l)}else this.applyGradients(o);return Mt(o),t?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return WS(e,t)}dispose(){this.iterations_!=null&&Mt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:_e(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(As,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class mC extends As{static get className(){return"Adadelta"}constructor(e,t,a=null){super(),this.learningRate=e,this.rho=t,this.epsilon=a,this.accumulatedGrads=[],this.accumulatedUpdates=[],a==null&&(this.epsilon=F.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(a=>a.name):Object.keys(e)).forEach((a,r)=>{const o=F.registeredVariables[a],l=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${a}/accum_grad`,variable:De(()=>sn(o).variable(l))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${a}/accum_var`,variable:De(()=>sn(o).variable(l))});const c=Array.isArray(e)?e[r].tensor:e[a];if(c==null)return;const f=this.accumulatedGrads[r].variable,d=this.accumulatedUpdates[r].variable;De(()=>{const p=we(ue(f,this.rho),ue(zn(c),1-this.rho)),m=ue(Ze(ca(we(d,this.epsilon)),ca(we(f,this.epsilon))),c),y=we(ue(d,this.rho),ue(zn(m),1-this.rho));f.assign(p),d.assign(y);const x=we(ue(m,-this.learningRate),o);o.assign(x)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Mt(this.accumulatedGrads.map(e=>e.variable)),Mt(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=e.length/2,a=!1;this.accumulatedGrads=e.slice(0,t).map(r=>({originalName:r.name,variable:r.tensor.variable(a)})),this.accumulatedUpdates=e.slice(t,t*2).map(r=>({originalName:r.name,variable:r.tensor.variable(a)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}class gC extends As{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(a=>a.name):Object.keys(e)).forEach((a,r)=>{const o=F.registeredVariables[a];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${a}/accumulator`,variable:De(()=>Di(o.shape,this.initialAccumulatorValue).variable(!1))});const l=Array.isArray(e)?e[r].tensor:e[a];if(l==null)return;const c=this.accumulatedGrads[r].variable;De(()=>{const f=we(c,zn(l));c.assign(f);const d=we(ue(Ze(l,ca(we(f,F.backend.epsilon()))),-this.learningRate),o);o.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Mt(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulatedGrads=e.map(a=>({originalName:a.name,variable:a.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}class yC extends As{static get className(){return"Adam"}constructor(e,t,a,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=a,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],De(()=>{this.accBeta1=_e(t).variable(),this.accBeta2=_e(a).variable()}),r==null&&(this.epsilon=F.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(a=>a.name):Object.keys(e);De(()=>{const a=Ee(1,this.accBeta1),r=Ee(1,this.accBeta2);t.forEach((o,l)=>{const c=F.registeredVariables[o],f=!1;this.accumulatedFirstMoment[l]==null&&(this.accumulatedFirstMoment[l]={originalName:`${o}/m`,variable:De(()=>sn(c).variable(f))}),this.accumulatedSecondMoment[l]==null&&(this.accumulatedSecondMoment[l]={originalName:`${o}/v`,variable:De(()=>sn(c).variable(f))});const d=Array.isArray(e)?e[l].tensor:e[o];if(d==null)return;const p=this.accumulatedFirstMoment[l].variable,m=this.accumulatedSecondMoment[l].variable,y=we(ue(p,this.beta1),ue(d,1-this.beta1)),x=we(ue(m,this.beta2),ue(zn(d),1-this.beta2)),v=Ze(y,a),S=Ze(x,r);p.assign(y),m.assign(x);const w=we(ue(Ze(v,we(ca(S),this.epsilon)),-this.learningRate),c);c.assign(w)}),this.accBeta1.assign(ue(this.accBeta1,this.beta1)),this.accBeta2.assign(ue(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Mt(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Mt(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e),De(()=>{this.accBeta1.assign(Ti(this.beta1,this.iterations_+1)),this.accBeta2.assign(Ti(this.beta2,this.iterations_+1))});const t=e.length/2,a=!1;this.accumulatedFirstMoment=e.slice(0,t).map(r=>({originalName:r.name,variable:r.tensor.variable(a)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(r=>({originalName:r.name,variable:r.tensor.variable(a)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}class bC extends As{static get className(){return"Adamax"}constructor(e,t,a,r=null,o=0){super(),this.learningRate=e,this.beta1=t,this.beta2=a,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],De(()=>{this.iteration=_e(0).variable(),this.accBeta1=_e(t).variable()}),r==null&&(this.epsilon=F.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(a=>a.name):Object.keys(e);De(()=>{const a=Ee(1,this.accBeta1),r=Ze(-this.learningRate,we(ue(this.iteration,this.decay),1));t.forEach((o,l)=>{const c=F.registeredVariables[o],f=!1;this.accumulatedFirstMoment[l]==null&&(this.accumulatedFirstMoment[l]={originalName:`${o}/m`,variable:sn(c).variable(f)}),this.accumulatedWeightedInfNorm[l]==null&&(this.accumulatedWeightedInfNorm[l]={originalName:`${o}/v`,variable:sn(c).variable(f)});const d=Array.isArray(e)?e[l].tensor:e[o];if(d==null)return;const p=this.accumulatedFirstMoment[l].variable,m=this.accumulatedWeightedInfNorm[l].variable,y=we(ue(p,this.beta1),ue(d,1-this.beta1)),x=ue(m,this.beta2),v=an(d),S=Wy(x,v);p.assign(y),m.assign(S);const w=we(ue(Ze(r,a),Ze(y,we(S,this.epsilon))),c);c.assign(w)}),this.iteration.assign(we(this.iteration,1)),this.accBeta1.assign(ue(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Mt(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Mt(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}class c0 extends As{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(a=>a.name):Object.keys(e)).forEach((a,r)=>{const o=Array.isArray(e)?e[r].tensor:e[a];if(o==null)return;const l=F.registeredVariables[a];De(()=>{const c=we(ue(this.c,o),l);l.assign(c)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Zn(_e(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}class xC extends c0{static get className(){return"Momentum"}constructor(e,t,a=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=a,this.accumulations=[],this.m=_e(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(a=>a.name):Object.keys(e)).forEach((a,r)=>{const o=F.registeredVariables[a];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${a}/momentum`,variable:De(()=>sn(o).variable(!1))});const l=this.accumulations[r].variable,c=Array.isArray(e)?e[r].tensor:e[a];c!=null&&De(()=>{let f;const d=we(ue(this.m,l),c);this.useNesterov?f=we(ue(this.c,we(c,ue(d,this.m))),o):f=we(ue(this.c,d),o),l.assign(d),o.assign(f)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Mt(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulations=e.map(a=>({originalName:a.name,variable:a.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}class vC extends As{static get className(){return"RMSProp"}constructor(e,t=.9,a=0,r=null,o=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=a,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,r==null&&(this.epsilon=F.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(a=>a.name):Object.keys(e)).forEach((a,r)=>{const o=F.registeredVariables[a],l=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${a}/rms`,variable:De(()=>sn(o).variable(l))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${a}/momentum`,variable:De(()=>sn(o).variable(l))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${a}/mg`,variable:De(()=>sn(o).variable(l))});const c=Array.isArray(e)?e[r].tensor:e[a];if(c==null)return;const f=this.accumulatedMeanSquares[r].variable,d=this.accumulatedMoments[r].variable;De(()=>{const p=we(ue(f,this.decay),ue(zn(c),1-this.decay));if(this.centered){const m=this.accumulatedMeanGrads[r].variable,y=we(ue(m,this.decay),ue(c,1-this.decay)),x=Ze(ue(c,this.learningRate),ca(Ee(p,we(zn(y),this.epsilon)))),v=we(ue(d,this.momentum),x);f.assign(p),m.assign(y),d.assign(v);const S=Ee(o,v);o.assign(S)}else{const m=we(ue(f,this.decay),ue(zn(c),1-this.decay)),y=we(ue(d,this.momentum),Ze(ue(c,this.learningRate),ca(we(m,this.epsilon))));f.assign(m),d.assign(y);const x=Ee(o,y);o.assign(x)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Mt(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Mt(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Mt(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,a=!1;this.accumulatedMeanSquares=e.slice(0,t).map(r=>({originalName:r.name,variable:r.tensor.variable(a)})),this.accumulatedMoments=e.slice(t,t*2).map(r=>({originalName:r.name,variable:r.tensor.variable(a)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(r=>({originalName:r.name,variable:r.tensor.variable(a)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}const s4=[mC,gC,yC,bC,xC,vC,c0];function r4(){for(const n of s4)a4(n)}const i4="model",o4=".json",l4=".weights.bin";function r2(n){return new Promise(e=>setTimeout(e)).then(n)}class yr{constructor(e){if(!q().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(yr.URL_SCHEME)&&(e=e.slice(yr.URL_SCHEME.length)),(e==null||e.length===0)&&(e=i4),this.modelJsonFileName=e+o4,this.weightDataFileName=e+l4}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=aa.join(e.weightData),a=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],o=Bw(e,r),l=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),c=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(c.download=this.modelJsonFileName,c.href=l,await r2(()=>c.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const f=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;f.download=this.weightDataFileName,f.href=a,await r2(()=>f.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:ll(e)}}}}yr.URL_SCHEME="downloads://";class u4{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{const a=new FileReader;a.onload=r=>{const o=JSON.parse(r.target.result),l=o.modelTopology;if(l==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(o.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:l});return}const f=Ty(o,d=>this.loadWeights(d));e(f)},a.onerror=r=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),a.readAsText(this.jsonFile)})}loadWeights(e){const t=[],a=[];for(const l of e)t.push(...l.weights),a.push(...l.paths);const r=this.checkManifestAndWeightFiles(e),o=a.map(l=>this.loadWeightsFile(l,r[l]));return Promise.all(o).then(l=>[t,l])}loadWeightsFile(e,t){return new Promise((a,r)=>{const o=new FileReader;o.onload=l=>{const c=l.target.result;a(c)},o.onerror=l=>r(`Failed to weights data from file of path '${e}'.`),o.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){const t=[],a=this.weightsFiles.map(o=>Xv(o.name)),r={};for(const o of e)o.paths.forEach(l=>{const c=Xv(l);if(t.indexOf(c)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${c}'`);if(t.push(c),a.indexOf(c)===-1)throw new Error(`Weight file with basename '${c}' is not provided.`);r[l]=this.weightsFiles[a.indexOf(c)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const c4=n=>q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(yr.URL_SCHEME)?f4(n.slice(yr.URL_SCHEME.length)):null;at.registerSaveRouter(c4);function f4(n="model"){return new yr(n)}function d4(n){return new u4(n)}function i2(n,e,t,a){l(n),t=t??0,a=a??1,c(t,a);let r=0;const o=f=>(f.then(d=>{const p=t+ ++r/n.length*(a-t);return e(p),d}),f);function l(f){_(f!=null&&Array.isArray(f)&&f.length>0,()=>"promises must be a none empty array")}function c(f,d){_(f>=0&&f<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${f}`),_(d>=0&&d<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${d}`),_(d>=f,()=>`startFraction must be no more than endFraction, but got startFraction ${f} and endFraction ${d}`)}return Promise.all(n.map(o))}async function wC(n,e){e==null&&(e={});const t=e.fetchFunc==null?q().platform.fetch:e.fetchFunc,a=n.map(m=>t(m,e.requestInit,{isBinary:!0})),c=(e.onProgress==null?await Promise.all(a):await i2(a,e.onProgress,0,.5)).map(m=>m.arrayBuffer());return e.onProgress==null?await Promise.all(c):await i2(c,e.onProgress,.5,1)}function h4(n,e){var t;const a=e.fetchFunc==null?q().platform.fetch:e.fetchFunc;let r=0,o;return(t=e.onProgress)===null||t===void 0||t.call(e,0),new ReadableStream({pull:async l=>{for(var c;r<n.length;){o||(o=(await a(n[r],e.requestInit,{isBinary:!0})).body.getReader());const{done:f,value:d}=await o.read();if(f){r++,o=void 0,(c=e.onProgress)===null||c===void 0||c.call(e,r/n.length);continue}l.enqueue(d);return}l.close()}})}async function p4(n,e="",t,a){return SC(l=>wC(l,{requestInit:a}))(n,e,t)}function SC(n){return async(e,t="",a)=>{const r=e.map(()=>!1),o={},l=a!=null?a.map(()=>!1):[],c=[];if(e.forEach((x,v)=>{let S=0;x.weights.forEach(w=>{const T="quantization"in w?w.quantization.dtype:w.dtype,$=hr[T]*se(w.shape),O=()=>{r[v]=!0,o[v]==null&&(o[v]=[]),o[v].push({manifestEntry:w,groupOffset:S,sizeBytes:$})};a!=null?a.forEach((A,z)=>{A===w.name&&(O(),l[z]=!0)}):O(),c.push(w.name),S+=$})}),!l.every(x=>x)){const x=a.filter((v,S)=>!l[S]);throw new Error(`Could not find weights in manifest with names: ${x.join(", ")}. 
Manifest JSON has weights with names: ${c.join(", ")}.`)}const f=r.reduce((x,v,S)=>(v&&x.push(S),x),[]),d=[];f.forEach(x=>{e[x].paths.forEach(v=>{const S=t+(t.endsWith("/")?"":"/")+v;d.push(S)})});const p=await n(d),m={};let y=0;return f.forEach(x=>{const v=e[x].paths.length,S=new aa(p.slice(y,y+v));o[x].forEach(T=>{const $=S.slice(T.groupOffset,T.groupOffset+T.sizeBytes),O=Dw($,[T.manifestEntry]);for(const A in O)m[A]=O[A]}),y+=v}),m}}const m4="application/octet-stream",g4="application/json";class f0{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(_(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=q().platform.fetch,_(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&_(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const a=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r=Bw(e,a);if(t.body.append("model.json",new Blob([JSON.stringify(r)],{type:g4}),"model.json"),e.weightData!=null){const l=aa.join(e.weightData);t.body.append("model.weights.bin",new Blob([l],{type:m4}),"model.weights.bin")}const o=await this.fetch(this.path,t);if(o.ok)return{modelArtifactsInfo:ll(e),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let l=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?l+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":l+=" Please make sure the server is serving valid JSON for this request.",new Error(l)}const a=t.modelTopology,r=t.weightsManifest;if(a==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return Ty(e,t=>this.loadWeights(t))}async loadStream(){const e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),a=np(e.weightsManifest),r=()=>h4(t,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:a,getWeightStream:r})}async getWeightUrls(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[a,r]=y4(t),o=this.weightPathPrefix||a,l=[],c=[];for(const f of e)for(const d of f.paths)this.weightUrlConverter!=null?c.push(this.weightUrlConverter(d)):l.push(o+d+r);return this.weightUrlConverter&&l.push(...await Promise.all(c)),l}async loadWeights(e){const t=await this.getWeightUrls(e),a=np(e),r=await wC(t,this.loadOptions);return[a,r]}}f0.URL_SCHEME_REGEX=/^https?:\/\//;function y4(n){const e=n.lastIndexOf("/"),t=n.lastIndexOf("?"),a=n.substring(0,e),r=t>e?n.substring(t):"";return[a+"/",r]}function op(n){return n.match(f0.URL_SCHEME_REGEX)!=null}const TC=(n,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(n)?t=n.every(a=>op(a)):t=op(n),t)return d0(n,e)}return null};at.registerSaveRouter(TC);at.registerLoadRouter(TC);function d0(n,e){return new f0(n,e)}function b4(n,e){return d0(n,e)}class Dh{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class CC{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class x4{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function v4(n,e,t,a){const r=arguments;return new x4(NC(...r))}function NC(n,e,t,a){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new Dh(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Dh({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Dh({modelTopology:n,weightSpecs:e,weightData:t,trainingConfig:a}))}function w4(n){return new CC(n)}function S4(n){return new CC(n)}const h0=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:aa,browserFiles:d4,browserHTTPRequest:b4,concatenateArrayBuffers:BR,copyModel:r_,decodeWeights:Dw,decodeWeightsStream:Fw,encodeWeights:AR,fromMemory:v4,fromMemorySync:NC,getLoadHandlers:WR,getModelArtifactsForJSON:Ty,getModelArtifactsForJSONSync:zw,getModelArtifactsInfoForJSON:ll,getSaveHandlers:HR,getWeightSpecs:np,http:d0,isHTTPScheme:op,listModels:a_,loadWeights:p4,moveModel:i_,registerLoadRouter:GR,registerSaveRouter:PR,removeModel:s_,weightsLoaderFactory:SC,withSaveHandler:w4,withSaveHandlerSync:S4},Symbol.toStringTag,{value:"Module"}));let Zs;function T4(n,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let t=!1,a=!1,r=!1,o=!1,l=!1,c=!1;if(n.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)a=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)r=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)o=!0;else if(n.getContext!=null)l=!0;else if(typeof ImageBitmap<"u"&&n instanceof ImageBitmap)c=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(mc(cc,F.backendName)!=null){const v={pixels:n},S={numChannels:e};return F.runKernel(cc,v,S)}const[d,p]=r?[n.videoWidth,n.videoHeight]:[n.width,n.height];let m;if(l)m=n.getContext("2d").getImageData(0,0,d,p).data;else if(a||t)m=n.data;else if(o||r||c){if(Zs==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Zs=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Zs=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Zs.canvas.width=d,Zs.canvas.height=p,Zs.drawImage(n,0,0,d,p),m=Zs.getImageData(0,0,d,p).data}let y;if(e===4)y=new Int32Array(m);else{const v=d*p;y=new Int32Array(v*e);for(let S=0;S<v;S++)for(let w=0;w<e;++w)y[S*e+w]=m[S*4+w]}return s0(y,[p,d,e],"int32")}const C4=I({fromPixels_:T4});function $C(n,e){const t=n.shape.length,a=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(a<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${a}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[a-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[a-1]} vs. ${t}`);if(se(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const r=e.shape,o=r[r.length-1];let l=1;for(let m=0;m<r.length-1;++m)l*=r[m];const c=n.shape,f=r.slice();f.pop();let d=1;for(let m=o;m<t;++m)d*=c[m],f.push(c[m]);const p=[...Nt(n.shape).map(m=>m/d),1].slice(0,o);return[f,l,d,p]}const lp=-2,N4=-1;function $4(n,e,t){const a=n.shape.length;_(a===e.length,()=>`Error in slice${a}D: Length of begin ${e} must match the rank of the array (${a}).`),_(a===t.length,()=>`Error in slice${a}D: Length of size ${t} must match the rank of the array (${a}).`);for(let r=0;r<a;++r)_(e[r]+t[r]<=n.shape[r],()=>`Error in slice${a}D: begin[${r}] + size[${r}] (${e[r]+t[r]}) would overflow input.shape[${r}] (${n.shape[r]})`)}function E4(n,e,t){const a=[];for(let r=0;r<n.length;r++)a[r]=Math.ceil((e[r]-n[r])/t[r]);return a}function EC(n,e,t){let a=t.length;for(let r=0;r<t.length;r++)if(t[r]>1){a=r;break}for(let r=a+1;r<t.length;r++)if(e[r]>0||t[r]!==n[r])return!1;return!0}function kC(n,e){let t=n.length>0?n[n.length-1]:1;for(let a=0;a<n.length-1;a++)t+=n[a]*e[a];return t}function k4(n,e,t){let a;const r=n.shape.length;typeof e=="number"?a=[e,...new Array(r-1).fill(0)]:e.length<r?a=e.concat(new Array(r-e.length).fill(0)):a=e.slice(),a.forEach(l=>{_(l!==-1,()=>"slice() does not support negative begin indexing.")});let o;return t==null?o=new Array(r).fill(-1):typeof t=="number"?o=[t,...new Array(r-1).fill(-1)]:t.length<r?o=t.concat(new Array(r-t.length).fill(-1)):o=t,o=o.map((l,c)=>l>=0?l:(_(l===-1,()=>`Negative size values should be exactly -1 but got ${l} for the slice() size at index ${c}.`),n.shape[c]-a[c])),[a,o]}function R4(n,e,t,a,r,o,l,c,f){let d;if(a==null?(d=new Array(e.length),d.fill(1)):d=a,l!=null&&(l&l-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let p=!1;const m={dims:d.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:d.slice(),beginMask:r,endMask:o,ellipsisMask:l,newAxisMask:c,shrinkAxisMask:f};for(let O=0;O<m.dims;O++)p&&(1<<O&c)!==0&&m.numAddAxisAfterEllipsis++,1<<O&l&&(p=!0);p||(m.ellipsisMask|=1<<m.dims,m.dims++);const y={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};_4(m,y);let x=!0,v=!0,S=!0;const w=[],T=[];for(let O=0;O<n.length;++O){if(y.strides[O]===0)throw Error(`strides[${O}] must be non-zero`);const A=!!(y.shrinkAxisMask&1<<O),z=n[O];if(z===-1){w.push(A?1:-1);continue}const j=[y.beginMask&1<<O,y.endMask&1<<O],G=[y.strides[O]>0?0:-1,y.strides[O]>0?z:z-1];if(A&&y.strides[O]<=0)throw Error("only stride 1 allowed on non-range indexing.");S=S&&y.strides[O]===1;const X=!!(y.beginMask&1<<O&&y.endMask&1<<O);if(y.beginValid&&y.endValid){if(A){const Z=y.begin[O]<0?z+y.begin[O]:y.begin[O];if(y.begin[O]=Z,y.end[O]=y.begin[O]+1,Z<0||Z>=z)throw Error(`slice index ${y.begin[O]} of dimension ${O} out of bounds.`)}else y.begin[O]=o2(y.begin[O],0,y.strides[O],z,j,G),y.end[O]=o2(y.end[O],1,y.strides[O],z,j,G);const R=y.strides[O]===1&&y.begin[O]===0&&y.end[O]===z;x=x&&R,v=v&&(O===0&&y.strides[O]===1||R)}else x=x&&y.strides[O]===1&&X,v=v&&(O===0&&y.strides[O]===1||X);let V,U=!1;if(y.beginValid&&y.endValid?(V=y.end[O]-y.begin[O],U=!0):A?(V=1,U=!0):X&&z>=0&&(y.strides[O]<0?V=-z:V=z,U=!0),U){let R;V===0||V<0!=y.strides[O]<0?R=0:R=Math.trunc(V/y.strides[O])+(V%y.strides[O]!==0?1:0),w.push(R)}else w.push(-1)}for(let O=0;O<y.finalShapeGatherIndices.length;++O){const A=y.finalShapeGatherIndices[O];A>=0?T.push(w[A]):A===lp&&T.push(1)}return{finalShapeSparse:T.filter((O,A)=>y.finalShapeGatherIndices[A]!==lp),finalShape:T,isIdentity:x,sliceDim0:v,isSimpleSlice:S,begin:y.begin,end:y.end,strides:y.strides}}function _4(n,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=n.begin!=null,e.endValid=n.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let a=0;a<n.dims;a++)if(1<<a&n.ellipsisMask){const r=Math.min(e.dims-(n.dims-a)+1+n.numAddAxisAfterEllipsis,e.dims);for(;t<r;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=a}else if(1<<a&n.newAxisMask)e.finalShapeGatherIndices.push(lp),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);n.begin!=null&&(e.begin[t]=n.begin[a]),n.end!=null&&(e.end[t]=n.end[a]),e.strides[t]=n.strides[a],n.beginMask&1<<a&&(e.beginMask|=1<<t),n.endMask&1<<a&&(e.endMask|=1<<t),n.shrinkAxisMask&1<<a?(e.finalShapeGatherIndices.push(N4),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(a)),e.inputShapeGatherIndicesSparse[t]=a,t++}}function o2(n,e,t,a,r,o){if(r[e])return t>0?o[e]:o[e+1&1];{const l=n<0?a+n:n;return l<o[0]?o[0]:l>o[1]?o[1]:l}}const A4=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function RC(){return new Promise(n=>A4(()=>n()))}function _C(n,e){const t=n[0].length;n.forEach((r,o)=>{_(r.length===t,()=>`Error in concat${t}D: rank of tensors[${o}] must be the same as the rank of the rest (${t})`)}),_(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);const a=n[0];n.forEach((r,o)=>{for(let l=0;l<t;l++)_(l===e||r[l]===a[l],()=>`Error in concat${t}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${a}) along the non-concatenated axis ${o}.`)})}function br(n,e){const t=n[0].slice();for(let a=1;a<n.length;a++)t[e]+=n[a][e];return t}var Yn;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(Yn||(Yn={}));function AC(n,e,t){let a=new Array;if(t==null&&e==null)return a;if(e==null)for(;a.length<n+t.length;)a.push(-1);else a=e.slice();if(t==null)return a;if(n+t.length!==a.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${n+t.length}, but shape.rank = ${a.length}`);for(let r=1;r<t.length;++r){const o=t[r],l=a[a.length-t.length+r],c=a[l];if(o>=0)if(c>=0){if(c!==o)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${r+n}] = ${o} but shape[${r+n}] = ${c}`)}else a[l]=o}return a}function OC(n){const e={FIRST_DIM_SIZE:Yn.FIRST_DIM_SIZE,VALUE_ROWIDS:Yn.VALUE_ROWIDS,ROW_LENGTHS:Yn.ROW_LENGTHS,ROW_SPLITS:Yn.ROW_SPLITS,ROW_LIMITS:Yn.ROW_LIMITS,ROW_STARTS:Yn.ROW_STARTS},t=[];for(const a of n)if(a in e)t.push(e[a]);else break;return t}function IC(n){return n.length===0?0:n[0]===Yn.FIRST_DIM_SIZE?n.length-1:n.length}function DC(n,e){if(n==null||e==null)return;const t=n.length,a=e.length;if(t>=a)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${t} must be less than ragged tensor input flatValues.rank = ${a})`);for(let r=0;r<Math.min(t,a-1);++r){const o=n[r],l=e[r+1];if(o>=0&&l>=0&&o!==1&&o!==l)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${r-n.length}] = ${o} but ragged tensor input.flatValues.shape[${r-n.length}] = ${l}`)}}const p0=30;function Qc(n){return n<=p0?n:Wh(n,Math.floor(Math.sqrt(n)))}function LC(n,e,t){const a=t*(typeof n=="number"?n:n[0]),r=e*(typeof n=="number"?n:n[1]);return[a,r]}function m0(n,e,t,a=!0){let r=[];if(a)r=r.concat(e.slice(0)),r.push(n[0]/t),r=r.concat(n.slice(1));else{r=r.concat(n[0]);const o=e.length;for(let l=0;l<o;++l)r=r.concat([n[l+1]/e[l],e[l]]);r=r.concat(n.slice(o+1))}return r}function g0(n,e,t=!0){const a=[];if(t){a.push(e);for(let r=e+1;r<n;++r)r<=2*e?(a.push(r),a.push(r-(e+1))):a.push(r)}else{const r=[],o=[];for(let l=1;l<n;++l)l>=e*2+1||l%2===1?o.push(l):r.push(l);a.push(...r),a.push(0),a.push(...o)}return a}function y0(n,e,t,a=!0){const r=[];a?r.push(n[0]/t):r.push(n[0]*t);for(let o=1;o<n.length;++o)o<=e.length?a?r.push(e[o-1]*n[o]):r.push(n[o]/e[o-1]):r.push(n[o]);return r}function FC(n,e){const t=[0];for(let a=0;a<e;++a)t.push(n[a][0]);return t}function BC(n,e,t){const a=n.slice(0,1);for(let r=0;r<t;++r)a.push(n[r+1]-e[r][0]-e[r][1]);return a}const zC=1.7580993408473768,UC=1.0507009873554805;const VC=.3275911,MC=.254829592,PC=-.284496736,GC=1.421413741,HC=-1.453152027,WC=1.061405429;function up(n,e){if(n.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${e.length}.`);const t=new Float32Array(n.length*2);for(let a=0;a<t.length;a+=2)t[a]=n[a/2],t[a+1]=e[a/2];return t}const Lh="->",O4=/->/g,l2=",",u2="...";function qC(n,e){n=n.replace(/\s/g,"");const t=(n.length-n.replace(O4,"").length)/Lh.length;if(t<1)throw new Error("Equations without an arrow are not supported.");if(t>1)throw new Error(`Equation must contain exactly one arrow ("${Lh}").`);const[a,r]=n.split(Lh);_(a.indexOf(u2)===-1,()=>`The ellipsis notation ("${u2}") is not supported yet.`);const o=a.split(l2),l=o.length;if(e!==l)throw new Error(`Expected ${l} input tensors, received ${e}`);if(l>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const c=[];for(let y=0;y<r.length;++y){const x=r[y];if(!o.some(v=>v.indexOf(x)!==-1))throw new Error(`Output subscripts contain the label ${x} not present in the input subscripts.`);c.indexOf(x)===-1&&c.push(x)}for(let y=0;y<a.length;++y){const x=a[y];c.indexOf(x)===-1&&x!==l2&&c.push(x)}const f=new Array(o.length);for(let y=0;y<l;++y){if(new Set(o[y].split("")).size!==o[y].length)throw new Error(`Found duplicate axes in input component ${o[y]}. Support for duplicate axes in input is not implemented yet.`);f[y]=[];for(let x=0;x<o[y].length;++x)f[y].push(c.indexOf(o[y][x]))}const d=c.length,p=r.length,m=[];for(let y=p;y<d;++y)m.push(y);return{allDims:c,summedDims:m,idDims:f}}function jC(n,e){let t=new Array(n);t.fill(-1);for(let r=0;r<e.length;++r)t[e[r]]=r;const a=[];for(let r=0;r<n;++r)t[r]===-1&&a.push(r);return t=t.filter(r=>r!==-1),{permutationIndices:t,expandDims:a}}function XC(n,e,t){const a=new Array(n);for(let r=0;r<t.length;++r){const o=t[r].shape;for(let l=0;l<e[r].length;++l)a[e[r][l]]===void 0?a[e[r][l]]=o[l]:_(a[e[r][l]]===o[l],()=>`Expected dimension ${a[e[r][l]]} at axis ${l} of input shaped ${JSON.stringify(o)}, but got dimension ${o[l]}`)}}function KC(n,e){const t=n,a=[];let r=0;n.length===0&&t.push(-1),r=n.length+1;for(let l=0;l<r;++l)a.push([]);const o=[];for(let l=0;l<t.length;++l){const c=t[l],f=I4(e,c);for(const d of f)o.indexOf(d)===-1&&(a[l].push(d),o.push(d))}return{path:t,steps:a}}function YC(n){return n.every((e,t)=>e===t)}function I4(n,e){const t=[];for(let a=0;a<n.length;++a)(n[a].length===0||n[a].indexOf(e)!==-1||e===-1)&&t.push(a);return t}function QC(n,e,t=0){let a=[];if(typeof e=="number")_(n.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),a=new Array(e).fill(n.shape[t]/e);else{const r=e.reduce((l,c)=>(c===-1&&(l+=1),l),0);_(r<=1,()=>"There should be only one negative value in split array.");const o=e.indexOf(-1);if(o!==-1){const l=e.reduce((c,f)=>f>0?c+f:c);e[o]=n.shape[t]-l}_(n.shape[t]===e.reduce((l,c)=>l+c),()=>"The sum of sizes must match the size of the axis dimension."),a=e}return a}function ZC(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function JC(n,e){return`indices(${n}, 0) is invalid: ${e} < 0`}function eN(n,e,t){return`indices(${n}, 0) is invalid: ${e} >= ${t}`}function tN(n,e){return`only one output dimension may be -1, not both ${n} and ${e}`}function nN(n,e){return`size ${n} must be non-negative, not ${e}`}function aN(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function sN(n,e){const t=se(n),a=se(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${a}. inputShape=${n} outputShape= ${e}`}function rN(n,e){const t=se(n),a=se(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${a}. inputShape=${n} outputShape=${e}`}function cp(){return"segment ids must be >= 0"}function iN(){return"segment ids are not increasing"}function oN(n,e){return`Segment id ${n} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function lN(n,e,t){return`Bad: indices[${n}] == ${e} out of range [0, ${t})`}function D4(n,e){let t=!1,a;for(n<=p0?(a=n,t=!0):a=Wh(n,Math.floor(Math.sqrt(n)));!t;)a>e||a===n?t=!0:a=Wh(n,a+1);return a}function L4(n,e,t){const a=[],r=n.length;for(let o=0;o<r;o++)o!==e?a.push(n[o]):a.push(t);return a}function F4(n,e,t,a){const r=e.shape.length,o=n.shape.length;if(a!==0&&(a<-r||a>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${a}`);if(a<0&&(a+=r),a>o)throw new Error(`batchDims (${a}) must be less than rank(x) (
    ${o}).`);if(t<a)throw new Error(`batchDims (${a}) must be less than or equal to axis (${t}).`);for(let m=0;m<a;++m)if(n.shape[m]!==e.shape[m])throw new Error(`x.shape[${m}]: ${n.shape[m]} should be equal to indices.shape[${m}]: ${e.shape[m]}.`);const l=n.shape[t],c=[];let f=1,d=1,p=1;for(let m=0;m<a;++m)c.push(n.shape[m]),f*=n.shape[m];for(let m=a;m<t;m++)c.push(n.shape[m]),d*=n.shape[m];for(let m=a;m<r;m++)c.push(e.shape[m]);for(let m=t+1;m<o;m++)c.push(n.shape[m]),p*=n.shape[m];return{batchSize:f,sliceSize:p,outerSize:d,dimSize:l,outputShape:c}}function ki(n){try{return n.map(e=>wi(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function uN(n){return n.map(e=>or(e))}const cN=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:MC,ERF_A2:PC,ERF_A3:GC,ERF_A4:HC,ERF_A5:WC,ERF_P:VC,PARALLELIZE_THRESHOLD:p0,get RowPartitionType(){return Yn},SELU_SCALE:UC,SELU_SCALEALPHA:zC,applyActivation:Kc,assertAndGetBroadcastShape:Fe,assertAxesAreInnerMostDims:sa,assertParamsConsistent:_C,axesAreInnerMostDims:Oy,calculateShapes:Wc,checkEinsumDimSizes:XC,checkPadOnDimRoundingMode:Vn,combineLocations:FS,combineRaggedTensorToTensorShapes:AC,computeConv2DInfo:Sn,computeConv3DInfo:cl,computeDefaultPad:$y,computeDilation2DInfo:sS,computeOptimalWindowSize:Qc,computeOutAndReduceShapes:ha,computeOutShape:br,computePool2DInfo:wr,computePool3DInfo:ul,convertConv2DDataFormat:Ii,decodeEinsumEquation:qC,eitherStridesOrDilationsAreOne:on,expandShapeToKeepDim:Tn,fromStringArrayToUint8:uN,fromUint8ToStringArray:ki,getAxesPermutation:Mn,getBroadcastDims:bc,getEinsumComputePath:KC,getEinsumPermutation:jC,getFusedBiasGradient:Xc,getFusedDyActivation:jc,getImageCenter:LC,getInnerMostAxes:Pn,getPermuted:g0,getRaggedRank:IC,getReductionAxes:AS,getReshaped:m0,getReshapedPermuted:y0,getRowPartitionTypesHelper:OC,getSliceBeginCoords:FC,getSliceSize:BC,getSparseFillEmptyRowsIndicesDenseShapeMismatch:ZC,getSparseFillEmptyRowsNegativeIndexErrorMessage:JC,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:eN,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:aN,getSparseReshapeInputOutputMismatchErrorMessage:rN,getSparseReshapeInputOutputMultipleErrorMessage:sN,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:tN,getSparseReshapeNegativeOutputDimErrorMessage:nN,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:lN,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:cp,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:iN,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:oN,getUndoAxesPermutation:Iy,isIdentityPermutation:YC,mergeRealAndImagArrays:up,prepareAndValidate:$C,prepareSplitSize:QC,shouldFuse:Yc,stridesOrDilationsArePositive:gr,tupleValuesAreOne:Zo,upcastType:ta,validateDefaultValueShape:DC,validateInput:r0,validateUpdateShape:MT,warn:Qn},Symbol.toStringTag,{value:"Module"}));r4();const B4=Object.freeze(Object.defineProperty({__proto__:null,Abs:Op,Acos:Ip,Acosh:Dp,AdadeltaOptimizer:mC,AdagradOptimizer:gC,AdamOptimizer:yC,AdamaxOptimizer:bC,Add:Oc,AddN:Lp,All:Fp,Any:Bp,ArgMax:zp,ArgMin:Up,Asin:Vp,Asinh:Mp,Atan:Pp,Atan2:Hp,Atanh:Gp,AvgPool:Wp,AvgPool3D:qp,AvgPool3DGrad:rw,AvgPoolGrad:sw,BatchMatMul:jp,BatchToSpaceND:Xp,Bincount:Kp,BitwiseAnd:Yp,BroadcastArgs:Qp,Cast:Ic,Ceil:Zp,ClipByValue:Jp,Complex:em,ComplexAbs:tm,Concat:nm,Conv2D:am,Conv2DBackpropFilter:sm,Conv2DBackpropInput:rm,Conv3D:im,Conv3DBackpropFilterV2:iw,Conv3DBackpropInputV2:om,Cos:lm,Cosh:um,CropAndResize:dm,Cumprod:cm,Cumsum:fm,DataStorage:J2,DenseBincount:hm,DepthToSpace:pm,DepthwiseConv2dNative:mm,DepthwiseConv2dNativeBackpropFilter:gm,DepthwiseConv2dNativeBackpropInput:ym,Diag:bm,Dilation2D:xm,get ENV(){return _p},Einsum:wm,Elu:Sm,EluGrad:ow,Environment:nw,Equal:Cm,Erf:Tm,Exp:Nm,ExpandDims:$m,Expm1:Em,FFT:km,Fill:Rm,FlipLeftRight:_m,Floor:Am,FloorDiv:Om,FromPixels:cc,FusedBatchNorm:Im,FusedConv2D:dc,FusedDepthwiseConv2D:hc,GatherNd:Lm,GatherV2:Dm,Greater:Fm,GreaterEqual:Bm,IFFT:zm,Identity:Dc,Imag:Um,IsFinite:Vm,IsInf:Mm,IsNan:Pm,KernelBackend:Ep,LRN:Zm,LRNGrad:lw,LeakyRelu:Gm,Less:Hm,LessEqual:Wm,LinSpace:qm,Log:jm,Log1p:Xm,LogicalAnd:Km,LogicalNot:Ym,LogicalOr:Qm,Max:Jm,MaxPool:tg,MaxPool3D:ng,MaxPool3DGrad:cw,MaxPoolGrad:uw,MaxPoolWithArgmax:ag,Maximum:eg,Mean:sg,Min:rg,Minimum:ig,MirrorPad:og,Mod:lg,MomentumOptimizer:xC,Multinomial:ug,Multiply:cg,Neg:fg,NonMaxSuppressionV3:hg,NonMaxSuppressionV4:pg,NonMaxSuppressionV5:mg,NotEqual:dg,OP_SCOPE_SUFFIX:wy,OneHot:yg,OnesLike:gg,Optimizer:As,Pack:bg,PadV2:xg,Pow:vg,Prelu:wg,Prod:Sg,RMSPropOptimizer:vC,RaggedGather:Tg,RaggedRange:Cg,RaggedTensorToTensor:Ng,Range:$g,get Rank(){return Qh},Real:Eg,RealDiv:vm,Reciprocal:kg,get Reduction(){return Ut},Relu:Rg,Relu6:Ig,Reshape:_g,ResizeBilinear:Og,ResizeBilinearGrad:dw,ResizeNearestNeighbor:Ag,ResizeNearestNeighborGrad:fw,Reverse:Dg,RotateWithOffset:vy,Round:Lg,Rsqrt:Fg,SGDOptimizer:c0,ScatterNd:Bg,SearchSorted:Ug,Select:Vg,Selu:Mg,Sigmoid:qg,Sign:Wg,Sin:Gg,Sinh:Hg,Slice:Pg,Softmax:Zg,Softplus:jg,SpaceToBatchND:Yg,SparseFillEmptyRows:Jg,SparseReshape:ey,SparseSegmentMean:ty,SparseSegmentSum:ny,SparseToDense:ay,SplitV:Qg,Sqrt:Xg,Square:hw,SquaredDifference:sy,StaticRegexReplace:ry,Step:xy,StridedSlice:iy,StringNGrams:oy,StringSplit:ly,StringToHashBucketFast:uy,Sub:cy,Sum:Kg,Tan:fy,Tanh:dy,Tensor:St,TensorBuffer:dr,TensorScatterUpdate:zg,Tile:Lc,TopK:hy,Transform:py,Transpose:Xo,Unique:my,Unpack:gy,UnsortedSegmentSum:yy,Variable:Ko,ZerosLike:by,_FusedMatMul:fc,abs:an,acos:qw,acosh:jw,add:we,addN:Xw,all:Kw,any:Yw,argMax:Qw,argMin:Zw,asin:Jw,asinh:eS,atan:tS,atan2:nS,atanh:aS,avgPool:Ey,avgPool3d:rS,backend:Iw,backend_util:cN,basicLSTMCell:iS,batchNorm:fl,batchNorm2d:oS,batchNorm3d:lS,batchNorm4d:uS,batchToSpaceND:ky,bincount:Ry,bitwiseAnd:cS,booleanMaskAsync:YT,broadcastArgs:fS,broadcastTo:yi,buffer:tt,cast:rt,ceil:dS,clipByValue:hS,clone:Ba,complex:Ua,concat:Dt,concat1d:pS,concat2d:mS,concat3d:gS,concat4d:yS,conv1d:bS,conv2d:dl,conv2dTranspose:vS,conv3d:wS,conv3dTranspose:SS,cos:TS,cosh:CS,cosineWindow:qc,cumprod:NS,cumsum:$S,customGrad:fa,denseBincount:ES,depthToSpace:kS,depthwiseConv2d:Uc,diag:RS,dilation2d:_S,dispose:Mt,div:Ze,divNoNan:OS,dot:IS,dropout:tC,einsum:nr,elu:Ay,enclosingPowerOfTwo:o0,engine:Oa,ensureShape:DS,env:q,equal:_y,erf:LS,euclideanNorm:zS,exp:Ns,expandDims:Ia,expm1:US,eye:Dy,fft:Gc,fill:Di,floor:Ly,floorDiv:Ny,fused:aC,gather:Fy,gatherND:eC,getBackend:Aw,getGradient:Xh,getKernel:mc,getKernelsForBackend:Kh,greater:pl,greaterEqual:By,ifft:nl,imag:ml,image:u0,inTopKAsync:nC,io:h0,irfft:t0,isFinite:VS,isInf:MS,isNaN:PS,keep:Zn,leakyRelu:zy,less:vc,lessEqual:Vc,linalg:fC,linspace:GS,localResponseNormalization:HS,log:Ci,log1p:Uy,logSigmoid:qS,logSoftmax:jS,logSumExp:My,logicalAnd:Jo,logicalNot:Py,logicalOr:Gy,logicalXor:XS,losses:dC,lowerBound:KS,matMul:Me,max:ur,maxPool:Hy,maxPool3d:YS,maxPoolWithArgmax:QS,maximum:Wy,mean:el,meshgrid:ZS,min:xc,minimum:tl,mirrorPad:JS,mod:eT,moments:tT,movingAverage:QT,mul:ue,multiRNNCell:nT,multinomial:aT,neg:ea,nextFrame:RC,norm:hl,notEqual:qy,oneHot:sT,ones:xs,onesLike:rT,op:I,outerProduct:iT,pad:Li,pad1d:oT,pad2d:lT,pad3d:uT,pad4d:cT,pool:fT,pow:Ti,prelu:Xy,print:Cy,prod:dT,raggedGather:hT,raggedRange:pT,raggedTensorToTensor:mT,rand:gT,randomGamma:yT,randomNormal:Qy,randomStandardNormal:bT,randomUniform:Pc,randomUniformInt:xT,range:Ni,real:$i,reciprocal:vT,registerBackend:Ow,registerKernel:pw,relu:gl,relu6:Zy,reshape:te,reverse:$s,reverse1d:wT,reverse2d:ST,reverse3d:TT,reverse4d:CT,rfft:Hc,round:Jy,rsqrt:NT,scalar:_e,scatterND:ZT,searchSorted:Mc,selu:$T,separableConv2d:ET,setdiff1dAsync:kT,sigmoid:lr,sign:RT,signal:cC,sin:_T,sinh:AT,slice:He,slice1d:OT,slice2d:IT,slice3d:DT,slice4d:LT,softmax:e0,softplus:Vy,spaceToBatchND:jy,sparse:hC,sparseToDense:JT,spectral:uC,split:Ei,sqrt:ca,square:zn,squaredDifference:n0,squeeze:yl,stack:da,step:a0,stridedSlice:FT,string:pC,sub:Ee,sum:Qe,sumOutType:zc,tan:BT,tanh:yc,tensor:Jn,tensor1d:bn,tensor2d:xi,tensor3d:s0,tensor4d:zT,tensor5d:UT,tensor6d:VT,tensorScatterUpdate:PT,tidy:De,tile:bi,topk:GT,transpose:wc,truncatedNormal:HT,unique:WT,unsortedSegmentSum:qT,unstack:_s,upcastType:ta,upperBound:jT,variable:XT,variableGrads:WS,where:za,whereAsync:i0,zeros:Va,zerosLike:sn},Symbol.toStringTag,{value:"Module"}));const z4=q();z4.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var tn;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(tn||(tn={}));var c2;(function(n){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(c2||(c2={}));const U4={};function fN(n){return U4[n]}function C(n,e,t,a,r){const o=e.inputParams[n];if(o&&o.inputIndexStart!==void 0){const c=o.inputIndexStart,f=o.inputIndexEnd===0?void 0:o.inputIndexEnd===void 0?c+1:o.inputIndexEnd,d=c<0?e.inputNames.length+c:c;if(o.type==="tensor")return Tt(e.inputNames[d],t,a,r);if(o.type==="tensors"){const y=e.inputs.slice(c,f);return e.inputNames.slice(c,f).filter((v,S)=>{var w;return((w=y[S])===null||w===void 0?void 0:w.op)!=="NoOp"}).map(v=>Tt(v,t,a,r))}const p=Tt(e.inputNames[d],t,a,r),m=p.dataSync();return o.type==="number"?m[0]:qh(p.shape,m)}const l=e.attrParams[n];return l&&l.value}function Tt(n,e,t,a){const[r,o]=nn(n,t);if(a!=null){const c=a.getHashTableHandleByName(r);if(c!=null)return c}const l=t.currentContextIds.find(c=>!!e[Sc(r,c)]);return l!==void 0?e[Sc(r,l)][o]:void 0}function f2(n,e,t){return e[Sc(n,t.currentContextId)]}function Da(n,e){const[t,a,r]=nn(n,e);return[Sc(t,e&&e.currentContextId),a,r]}function Sc(n,e){return e?`${n}-${e}`:n}function nn(n,e){if(n==="")return["",0,void 0];const t=e!=null&&e.parseNodeNameCache!=null;if(t){const o=e.parseNodeNameCache.get(n);if(o!=null)return o}const a=n.split(":");let r;if(a.length===1)r=[n,0,void 0];else{const o=a[0],l=a.length===3?a[1]:void 0,c=Number(a[a.length-1]);r=[o,c,l]}return t&&e.parseNodeNameCache.set(n,r),r}function oc(n,e,t){let a=C("pad",n,e,t);if(a==="explicit"){a=C("explicitPaddings",n,e,t);const r=[[0,0],[0,0],[0,0],[0,0]];for(let o=0;o<4;o++)r[o][0]=a[o*2],r[o][1]=a[o*2+1];return r}return a}function La(n){return n.kept?n:Ba(n)}const V4=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],M4=Object.freeze(Object.defineProperty({__proto__:null,json:V4},Symbol.toStringTag,{value:"Module"}));const P4=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],G4=Object.freeze(Object.defineProperty({__proto__:null,json:P4},Symbol.toStringTag,{value:"Module"}));const H4=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],W4=Object.freeze(Object.defineProperty({__proto__:null,json:H4},Symbol.toStringTag,{value:"Module"}));const q4=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],j4=Object.freeze(Object.defineProperty({__proto__:null,json:q4},Symbol.toStringTag,{value:"Module"}));const X4=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],K4=Object.freeze(Object.defineProperty({__proto__:null,json:X4},Symbol.toStringTag,{value:"Module"}));const Y4=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Q4=Object.freeze(Object.defineProperty({__proto__:null,json:Y4},Symbol.toStringTag,{value:"Module"}));const Z4=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],J4=Object.freeze(Object.defineProperty({__proto__:null,json:Z4},Symbol.toStringTag,{value:"Module"}));const eL=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],tL=Object.freeze(Object.defineProperty({__proto__:null,json:eL},Symbol.toStringTag,{value:"Module"}));const nL=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],aL=Object.freeze(Object.defineProperty({__proto__:null,json:nL},Symbol.toStringTag,{value:"Module"}));const sL=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],rL=Object.freeze(Object.defineProperty({__proto__:null,json:sL},Symbol.toStringTag,{value:"Module"}));const iL=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],oL=Object.freeze(Object.defineProperty({__proto__:null,json:iL},Symbol.toStringTag,{value:"Module"}));const lL=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],uL=Object.freeze(Object.defineProperty({__proto__:null,json:lL},Symbol.toStringTag,{value:"Module"}));const cL=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],fL=Object.freeze(Object.defineProperty({__proto__:null,json:cL},Symbol.toStringTag,{value:"Module"}));const dL=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],hL=Object.freeze(Object.defineProperty({__proto__:null,json:dL},Symbol.toStringTag,{value:"Module"}));const pL=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],mL=Object.freeze(Object.defineProperty({__proto__:null,json:pL},Symbol.toStringTag,{value:"Module"}));const gL=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],yL=Object.freeze(Object.defineProperty({__proto__:null,json:gL},Symbol.toStringTag,{value:"Module"}));const bL=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],xL=Object.freeze(Object.defineProperty({__proto__:null,json:bL},Symbol.toStringTag,{value:"Module"}));const vL=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],wL=Object.freeze(Object.defineProperty({__proto__:null,json:vL},Symbol.toStringTag,{value:"Module"}));const SL=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],TL=Object.freeze(Object.defineProperty({__proto__:null,json:SL},Symbol.toStringTag,{value:"Module"}));class d2{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[M4,G4,W4,j4,K4,Q4,J4,tL,aL,rL,oL,uL,fL,hL,mL,yL,xL,wL,TL],t=[].concat(...e.map(a=>a.json));this.opMappers=t.reduce((a,r)=>(a[r.tfOpName]=r,a),{})}transformGraph(e,t={}){const a=e.node,r=[],o=[],l=[],c=a.reduce((S,w)=>(S[w.name]=this.mapNode(w),w.op.startsWith("Placeholder")?r.push(S[w.name]):w.op==="Const"?o.push(S[w.name]):(w.input==null||w.input.length===0)&&l.push(S[w.name]),S),{});let f=[];const d=[];let p={},m={};t!=null&&(p=this.mapSignatureEntries(t.inputs),m=this.mapSignatureEntries(t.outputs));const y=Object.keys(c);y.forEach(S=>{const w=c[S];w.inputNames.forEach((T,$)=>{const[O,,A]=Da(T),z=c[O];if(z.outputs!=null){const j=z.outputs.indexOf(A);if(j!==-1){const G=`${O}:${j}`;w.inputNames[$]=G}}w.inputs.push(z),z.children.push(w)})}),Object.keys(m).length===0?y.forEach(S=>{const w=c[S];w.children.length===0&&d.push(w)}):Object.keys(m).forEach(S=>{const[w]=Da(S),T=c[w];T!=null&&(T.signatureKey=m[S],d.push(T))}),Object.keys(p).length>0?Object.keys(p).forEach(S=>{const[w]=Da(S),T=c[w];T&&(T.signatureKey=p[S],f.push(T))}):f=r;let x={};e.library!=null&&e.library.function!=null&&(x=e.library.function.reduce((S,w)=>(S[w.signature.name]=this.mapFunction(w),S),{}));const v={nodes:c,inputs:f,outputs:d,weights:o,placeholders:r,signature:t,functions:x};return l.length>0&&(v.initNodes=l),v}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,a)=>(t[e[a].name]=a,t),{})}mapNode(e){const t=fN(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const a={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(r=>r.startsWith("^")?r.slice(1):r),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(a.inputParams=t.inputs.reduce((r,o)=>(r[o.name]={type:o.type,inputIndexStart:o.start,inputIndexEnd:o.end},r),{})),t.attrs!=null&&(a.attrParams=t.attrs.reduce((r,o)=>{const l=o.type;let c;switch(o.type){case"string":c=fp(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=fp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"string[]":c=bp(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=bp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"number":c=hp(e.attr,o.tfName,o.defaultValue||0),c===void 0&&o.tfDeprecatedName&&(c=hp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"number[]":c=yp(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=yp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"bool":c=dp(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=dp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"bool[]":c=vp(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=vp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"shape":c=gp(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=gp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"shape[]":c=xp(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=xp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"dtype":c=pp(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=pp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"dtype[]":c=mp(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=mp(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"func":c=h2(e.attr,o.tfName,o.defaultValue),c===void 0&&o.tfDeprecatedName&&(c=h2(e.attr,o.tfDeprecatedName,o.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${o.type} for op: ${e.op}`)}return r[o.name]={value:c,type:l},r},{})),a}mapFunction(e){const t=e.nodeDef,a=[],r=[];let o={};t!=null&&(o=t.reduce((m,y)=>(m[y.name]=this.mapNode(y),y.op==="Const"&&r.push(m[y.name]),m),{}));const l=[],c=[];e.signature.inputArg.forEach(m=>{const[y]=Da(m.name),x={name:y,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:b0(m.type),type:"dtype"}},children:[]};x.signatureKey=m.name,l.push(x),o[y]=x}),Object.keys(o).forEach(m=>{const y=o[m];y.inputNames.forEach((x,v)=>{const[S,,w]=Da(x),T=o[S];if(T.outputs!=null){const $=T.outputs.indexOf(w);if($!==-1){const O=`${S}:${$}`;y.inputNames[v]=O}}y.inputs.push(T),T.children.push(y)})});const d=e.ret;e.signature.outputArg.forEach(m=>{const[y,x]=Da(d[m.name]),v=o[y];v!=null&&(v.defaultOutput=x,c.push(v))});const p=this.mapArgsToSignature(e);return{nodes:o,inputs:l,outputs:c,weights:r,placeholders:a,signature:p}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,a)=>(t[a.name]=this.mapArgToTensorInfo(a),t),{}),outputs:e.signature.outputArg.reduce((t,a)=>(t[a.name]=this.mapArgToTensorInfo(a,e.ret),t),{})}}mapArgToTensorInfo(e,t){let a=e.name;return t!=null&&(a=t[a]),{name:a,dtype:e.type}}}function CL(n){const e=q().global;if(typeof e.atob<"u")return e.atob(n);if(typeof Buffer<"u")return new Buffer(n,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function dN(n,e){const t=Array.isArray(n)?String.fromCharCode.apply(null,n):CL(n);return e?t:t.toLowerCase()}function fp(n,e,t,a=!1){const r=n[e];return r!=null?dN(r.s,a):t}function dp(n,e,t){const a=n[e];return a?a.b:t}function hp(n,e,t){const a=n[e]||{},r=a.i!=null?a.i:a.f!=null?a.f:t;return typeof r=="number"?r:parseInt(r,10)}function b0(n){switch(typeof n=="string"&&(n=tn[n]),n){case tn.DT_FLOAT:case tn.DT_HALF:return"float32";case tn.DT_INT32:case tn.DT_INT64:case tn.DT_INT8:case tn.DT_UINT8:return"int32";case tn.DT_BOOL:return"bool";case tn.DT_DOUBLE:return"float32";case tn.DT_STRING:return"string";case tn.DT_COMPLEX64:case tn.DT_COMPLEX128:return"complex64";default:return null}}function h2(n,e,t){const a=n[e];return a&&a.func?a.func.name:t}function pp(n,e,t){const a=n[e];return a&&a.type?b0(a.type):t}function mp(n,e,t){const a=n[e];return a&&a.list&&a.list.type?a.list.type.map(r=>b0(r)):t}function hN(n){if(!n.unknownRank)return n.dim!=null?n.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function gp(n,e,t){const a=n[e];return a&&a.shape?hN(a.shape):t}function yp(n,e,t){const a=n[e];return a?((a.list.f&&a.list.f.length?a.list.f:a.list.i)||[]).map(r=>typeof r=="number"?r:parseInt(r,10)):t}function bp(n,e,t,a=!1){const r=n[e];return r&&r.list&&r.list.s?r.list.s.map(o=>dN(o,a)):t}function xp(n,e,t){const a=n[e];return a&&a.list&&a.list.shape?a.list.shape.map(r=>hN(r)):t}function vp(n,e,t){const a=n[e];return a&&a.list&&a.list.b?a.list.b:t}class NL{constructor(e,t,a){this.node=e,this.tensorMap=t,this.context=a,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(r=>this.getInput(r)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((r,o)=>(r[o]=this.getAttr(o),r),{}))}getInput(e){return Tt(e,this.tensorMap,this.context)}getAttr(e,t){const a=this.node.rawAttrs[e];if(a.tensor!=null)return Tt(e,this.tensorMap,this.context);if(a.i!=null||a.f!=null)return hp(this.node.rawAttrs,e,t);if(a.s!=null)return fp(this.node.rawAttrs,e,t);if(a.b!=null)return dp(this.node.rawAttrs,e,t);if(a.shape!=null)return gp(this.node.rawAttrs,e,t);if(a.type!=null)return pp(this.node.rawAttrs,e,t);if(a.list!=null){if(a.list.i!=null||a.list.f!=null)return yp(this.node.rawAttrs,e,t);if(a.list.s!=null)return bp(this.node.rawAttrs,e,t);if(a.list.shape!=null)return xp(this.node.rawAttrs,e,t);if(a.list.b!=null)return vp(this.node.rawAttrs,e,t);if(a.list.type!=null)return mp(this.node.rawAttrs,e,t)}return t}}const $t=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:wy,abs:an,acos:qw,acosh:jw,add:we,addN:Xw,all:Kw,any:Yw,argMax:Qw,argMin:Zw,asin:Jw,asinh:eS,atan:tS,atan2:nS,atanh:aS,avgPool:Ey,avgPool3d:rS,basicLSTMCell:iS,batchNorm:fl,batchNorm2d:oS,batchNorm3d:lS,batchNorm4d:uS,batchToSpaceND:ky,bincount:Ry,bitwiseAnd:cS,booleanMaskAsync:YT,broadcastArgs:fS,broadcastTo:yi,buffer:tt,cast:rt,ceil:dS,clipByValue:hS,clone:Ba,complex:Ua,concat:Dt,concat1d:pS,concat2d:mS,concat3d:gS,concat4d:yS,conv1d:bS,conv2d:dl,conv2dTranspose:vS,conv3d:wS,conv3dTranspose:SS,cos:TS,cosh:CS,cosineWindow:qc,cumprod:NS,cumsum:$S,denseBincount:ES,depthToSpace:kS,depthwiseConv2d:Uc,diag:RS,dilation2d:_S,div:Ze,divNoNan:OS,dot:IS,dropout:tC,einsum:nr,elu:Ay,enclosingPowerOfTwo:o0,ensureShape:DS,equal:_y,erf:LS,euclideanNorm:zS,exp:Ns,expandDims:Ia,expm1:US,eye:Dy,fft:Gc,fill:Di,floor:Ly,floorDiv:Ny,fused:aC,gather:Fy,gatherND:eC,greater:pl,greaterEqual:By,ifft:nl,imag:ml,image:u0,inTopKAsync:nC,irfft:t0,isFinite:VS,isInf:MS,isNaN:PS,leakyRelu:zy,less:vc,lessEqual:Vc,linalg:fC,linspace:GS,localResponseNormalization:HS,log:Ci,log1p:Uy,logSigmoid:qS,logSoftmax:jS,logSumExp:My,logicalAnd:Jo,logicalNot:Py,logicalOr:Gy,logicalXor:XS,losses:dC,lowerBound:KS,matMul:Me,max:ur,maxPool:Hy,maxPool3d:YS,maxPoolWithArgmax:QS,maximum:Wy,mean:el,meshgrid:ZS,min:xc,minimum:tl,mirrorPad:JS,mod:eT,moments:tT,movingAverage:QT,mul:ue,multiRNNCell:nT,multinomial:aT,neg:ea,norm:hl,notEqual:qy,oneHot:sT,ones:xs,onesLike:rT,op:I,outerProduct:iT,pad:Li,pad1d:oT,pad2d:lT,pad3d:uT,pad4d:cT,pool:fT,pow:Ti,prelu:Xy,print:Cy,prod:dT,raggedGather:hT,raggedRange:pT,raggedTensorToTensor:mT,rand:gT,randomGamma:yT,randomNormal:Qy,randomStandardNormal:bT,randomUniform:Pc,randomUniformInt:xT,range:Ni,real:$i,reciprocal:vT,relu:gl,relu6:Zy,reshape:te,reverse:$s,reverse1d:wT,reverse2d:ST,reverse3d:TT,reverse4d:CT,rfft:Hc,round:Jy,rsqrt:NT,scalar:_e,scatterND:ZT,searchSorted:Mc,selu:$T,separableConv2d:ET,setdiff1dAsync:kT,sigmoid:lr,sign:RT,signal:cC,sin:_T,sinh:AT,slice:He,slice1d:OT,slice2d:IT,slice3d:DT,slice4d:LT,softmax:e0,softplus:Vy,spaceToBatchND:jy,sparse:hC,sparseToDense:JT,spectral:uC,split:Ei,sqrt:ca,square:zn,squaredDifference:n0,squeeze:yl,stack:da,step:a0,stridedSlice:FT,string:pC,sub:Ee,sum:Qe,tan:BT,tanh:yc,tensor:Jn,tensor1d:bn,tensor2d:xi,tensor3d:s0,tensor4d:zT,tensor5d:UT,tensor6d:VT,tensorScatterUpdate:PT,tile:bi,topk:GT,transpose:wc,truncatedNormal:HT,unique:WT,unsortedSegmentSum:qT,unstack:_s,upperBound:jT,variable:XT,where:za,whereAsync:i0,zeros:Va,zerosLike:sn},Symbol.toStringTag,{value:"Module"}));const $L=(n,e,t,a=$t)=>{switch(n.op){case"BiasAdd":case"AddV2":case"Add":return[a.add(C("a",n,e,t),C("b",n,e,t))];case"AddN":return[a.addN(C("tensors",n,e,t))];case"FloorMod":case"Mod":return[a.mod(C("a",n,e,t),C("b",n,e,t))];case"Mul":return[a.mul(C("a",n,e,t),C("b",n,e,t))];case"RealDiv":case"Div":return[a.div(C("a",n,e,t),C("b",n,e,t))];case"DivNoNan":return[a.divNoNan(C("a",n,e,t),C("b",n,e,t))];case"FloorDiv":return[a.floorDiv(C("a",n,e,t),C("b",n,e,t))];case"Sub":return[a.sub(C("a",n,e,t),C("b",n,e,t))];case"Minimum":return[a.minimum(C("a",n,e,t),C("b",n,e,t))];case"Maximum":return[a.maximum(C("a",n,e,t),C("b",n,e,t))];case"Pow":return[a.pow(C("a",n,e,t),C("b",n,e,t))];case"SquaredDifference":return[a.squaredDifference(C("a",n,e,t),C("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const EL=(n,e,t,a=$t)=>{switch(n.op){case"Abs":case"ComplexAbs":return[a.abs(C("x",n,e,t))];case"Acos":return[a.acos(C("x",n,e,t))];case"Acosh":return[a.acosh(C("x",n,e,t))];case"Asin":return[a.asin(C("x",n,e,t))];case"Asinh":return[a.asinh(C("x",n,e,t))];case"Atan":return[a.atan(C("x",n,e,t))];case"Atan2":return[a.atan2(C("x",n,e,t),C("y",n,e,t))];case"Atanh":return[a.atanh(C("x",n,e,t))];case"Ceil":return[a.ceil(C("x",n,e,t))];case"Complex":return[a.complex(C("real",n,e,t),C("imag",n,e,t))];case"Cos":return[a.cos(C("x",n,e,t))];case"Cosh":return[a.cosh(C("x",n,e,t))];case"Elu":return[a.elu(C("x",n,e,t))];case"Erf":return[a.erf(C("x",n,e,t))];case"Exp":return[a.exp(C("x",n,e,t))];case"Expm1":return[a.expm1(C("x",n,e,t))];case"Floor":return[a.floor(C("x",n,e,t))];case"Log":return[a.log(C("x",n,e,t))];case"Log1p":return[a.log1p(C("x",n,e,t))];case"Imag":return[a.imag(C("x",n,e,t))];case"Neg":return[a.neg(C("x",n,e,t))];case"Reciprocal":return[a.reciprocal(C("x",n,e,t))];case"Real":return[a.real(C("x",n,e,t))];case"Relu":return[a.relu(C("x",n,e,t))];case"Round":return[a.round(C("x",n,e,t))];case"Selu":return[a.selu(C("x",n,e,t))];case"Sigmoid":return[a.sigmoid(C("x",n,e,t))];case"Sin":return[a.sin(C("x",n,e,t))];case"Sign":return[a.sign(C("x",n,e,t))];case"Sinh":return[a.sinh(C("x",n,e,t))];case"Softplus":return[a.softplus(C("x",n,e,t))];case"Sqrt":return[a.sqrt(C("x",n,e,t))];case"Square":return[a.square(C("x",n,e,t))];case"Tanh":return[a.tanh(C("x",n,e,t))];case"Tan":return[a.tan(C("x",n,e,t))];case"ClipByValue":return[a.clipByValue(C("x",n,e,t),C("clipValueMin",n,e,t),C("clipValueMax",n,e,t))];case"Relu6":return[a.relu6(C("x",n,e,t))];case"Rsqrt":return[a.rsqrt(Tt(n.inputNames[0],e,t))];case"LeakyRelu":return[a.leakyRelu(C("x",n,e,t),C("alpha",n,e,t))];case"Prelu":return[a.prelu(C("x",n,e,t),C("alpha",n,e,t))];case"IsNan":return[a.isNaN(Tt(n.inputNames[0],e,t))];case"IsInf":return[a.isInf(Tt(n.inputNames[0],e,t))];case"IsFinite":return[a.isFinite(Tt(n.inputNames[0],e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};function Fn(n,e,t=""){if(!(typeof n=="number"||typeof e=="number")){_(n.length===e.length,()=>t+` Shapes ${n} and ${e} must match`);for(let a=0;a<n.length;a++){const r=n[a],o=e[a];_(r<0||o<0||r===o,()=>t+` Shapes ${n} and ${e} must match`)}}}function p2(n){return!(typeof n=="number"||n.some(e=>e<0))}function Go(n,e,t){let a=wp(n,t);const r=!p2(a);if(r&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${a}`);if(r&&e.forEach(o=>{a=wp(o.shape,a)}),!p2(a))throw new Error(`Non-fully-defined elementShape: ${a}`);return a}function wp(n,e){if(typeof n=="number")return e;if(typeof e=="number")return n;if(n.length!==e.length)throw new Error(`Incompatible ranks during merge: ${n} vs. ${e}`);const t=[];for(let a=0;a<n.length;++a){const r=n[a],o=e[a];if(r>=0&&o>=0&&r!==o)throw new Error(`Incompatible shape during merge: ${n} vs. ${e}`);t[a]=r>=0?r:o}return t}class kL{constructor(e,t,a,r,o,l,c){this.name=e,this.dtype=t,this.maxSize=a,this.elementShape=r,this.identicalElementShapes=o,this.dynamicSize=l,this.clearAfterRead=c,this.tensors=[],this.closed_=!1,this.idTensor=_e(0),Zn(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const a=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),Fn(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),a.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(a.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);a.tensor=t,Zn(t),a.written=!0,this.tensors[e]=a}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((a,r)=>this.write(a,t[r]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let r=0;r<this.size();r++)e.push(r)}if(e.length===0)return Jn([],[0].concat(this.elementShape));const a=this.readMany(e);return Fn(this.elementShape,a[0].shape,"TensorArray shape mismatch: "),da(a,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return Jn([],[0].concat(this.elementShape));const t=[];for(let r=0;r<this.size();r++)t.push(r);const a=this.readMany(t);return Fn(this.elementShape,a[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${a[0].shape})`),Dt(a,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const a=Math.max(...e);if(!this.dynamicSize&&a>=this.maxSize)throw new Error(`Max index must be < array size (${a}  vs. ${this.maxSize})`);this.writeMany(e,_s(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let a=0;const r=e.map(f=>(a+=f,a));if(a!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${a}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const o=a===0?0:t.size/a,l=[];De(()=>{t=te(t,[1,a,o]);for(let f=0;f<e.length;++f){const p=[0,f===0?0:r[f-1],0],m=[1,e[f],o];l[f]=te(He(t,p,m),this.elementShape)}return l});const c=[];for(let f=0;f<e.length;f++)c[f]=f;this.writeMany(c,l)}}class xr{get id(){return this.idTensor.id}constructor(e,t,a,r=-1){this.tensors=e,this.elementShape=t,this.elementDtype=a,e?.forEach(o=>{if(a!==o.dtype)throw new Error(`Invalid data types; op elements ${a}, but list elements ${o.dtype}`);Fn(t,o.shape,"TensorList shape mismatch: "),Zn(o)}),this.idTensor=_e(0),this.maxNumElements=r,Zn(this.idTensor)}copy(){return new xr([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,a=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(a!==-1&&this.tensors.length!==a)throw new Error(`Operation expected a list with ${a} elements but got a list with ${this.tensors.length} elements.`);Fn(e,this.elementShape,"TensorList shape mismatch: ");const r=Go(this.elementShape,this.tensors,e);return De(()=>{const o=this.tensors.map(l=>te(l,r));return da(o,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const a=Go(this.elementShape,this.tensors,e),r=this.tensors.pop();return r.kept=!1,Fn(r.shape,e,"TensorList shape mismatch: "),te(r,a)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(Fn(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Zn(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new xr([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let a=0;a<Math.min(this.tensors.length,e);++a)t.tensors[a]=this.tensors[a];return t}getItem(e,t,a){if(a!==this.elementDtype)throw new Error(`Invalid data types; op elements ${a}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);Fn(this.tensors[e].shape,t,"TensorList shape mismatch: ");const r=Go(this.elementShape,this.tensors,t);return te(this.tensors[e],r)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);Fn(this.elementShape,t.shape,"TensorList shape mismatch: "),Zn(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,a){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);Fn(this.elementShape,a,"TensorList shape mismatch: "),e=e.slice(0,this.size());const r=Go(this.elementShape,this.tensors,a);return e.length===0?Jn([],[0].concat(r)):De(()=>{const o=e.map(l=>te(this.tensors[l],r));return da(o,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);Fn(this.elementShape,t,"TensorList shape mismatch: ");const a=Go(this.elementShape,this.tensors,t);return this.size()===0?Jn([],[0].concat(a)):De(()=>{const r=this.tensors.map(o=>te(o,a));return Dt(r,0)})}}function RL(n,e,t){const a=n.dtype;if(n.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${n.shape}`);if(n.dtype!==t)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${t}`);const r=n.shape.slice(1);Fn(r,e,"TensorList shape mismatch: ");const o=_s(n);return new xr(o,e,a)}function _L(n,e,t,a){return new xr([],n,e,a)}function AL(n,e,t,a){if(e.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${n.shape[0]}`);const r=Math.max(...e);if(a!=null&&a!==-1&&r>=a)throw new Error(`Max index must be < array size (${r}  vs. ${a})`);const o=new xr([],t,n.dtype,a),l=_s(n,0);return e.forEach((c,f)=>{o.setItem(c,l[f])}),o}function OL(n,e,t){let a=0;const r=e.map(p=>(a+=p,a));if(a!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${a}, and tensor's shape is: ${n.shape}`);const o=n.shape.slice(1),l=wp(o,t),c=a===0?0:n.size/a,f=De(()=>{const p=[];n=te(n,[1,a,c]);for(let m=0;m<e.length;++m){const x=[0,m===0?0:r[m-1],0],v=[1,e[m],c];p[m]=te(He(n,x,v),l)}return n.dispose(),p}),d=new xr([],t,n.dtype,e.length);for(let p=0;p<f.length;p++)d.setItem(p,f[p]);return d}const IL=async(n,e,t)=>{switch(n.op){case"If":case"StatelessIf":{const a=C("thenBranch",n,e,t),r=C("elseBranch",n,e,t),o=C("cond",n,e,t),l=C("args",n,e,t);return(await o.data())[0]?t.functionMap[a].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap):t.functionMap[r].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{const a=C("body",n,e,t),r=C("cond",n,e,t),o=C("args",n,e,t),l=await t.functionMap[r].executeFunctionAsync(o,t.tensorArrayMap,t.tensorListMap),c=o.map(p=>p.id);let f=await l[0].data();l.forEach(p=>{!p.kept&&c.indexOf(p.id)===-1&&p.dispose()});let d=o;for(;f[0];){const p=d;d=await t.functionMap[a].executeFunctionAsync(d,t.tensorArrayMap,t.tensorListMap);const m=d.map(x=>x.id);p.forEach(x=>{!x.kept&&c.indexOf(x.id)===-1&&m.indexOf(x.id)===-1&&x.dispose()});const y=await t.functionMap[r].executeFunctionAsync(d,t.tensorArrayMap,t.tensorListMap);f=await y[0].data(),y.forEach(x=>{!x.kept&&c.indexOf(x.id)===-1&&m.indexOf(x.id)===-1&&x.dispose()})}return d}case"LoopCond":{const a=C("pred",n,e,t);return[La(a)]}case"Switch":{const a=C("pred",n,e,t);let r=C("data",n,e,t);return r.kept||(r=La(r)),(await a.data())[0]?[void 0,r]:[r,void 0]}case"Merge":{const a=n.inputNames.find(r=>Tt(r,e,t)!==void 0);if(a){const r=Tt(a,e,t);return[La(r)]}return}case"Enter":{const a=C("frameName",n,e,t),r=C("tensor",n,e,t);return t.enterFrame(a),[La(r)]}case"Exit":{const a=C("tensor",n,e,t);return t.exitFrame(),[La(a)]}case"NextIteration":{const a=C("tensor",n,e,t);return t.nextIteration(),[La(a)]}case"TensorArrayV3":{const a=C("size",n,e,t),r=C("dtype",n,e,t),o=C("elementShape",n,e,t),l=C("dynamicSize",n,e,t),c=C("clearAfterRead",n,e,t),f=C("identicalElementShapes",n,e,t),d=C("name",n,e,t),p=new kL(d,r,a,o,f,l,c);return t.addTensorArray(p),[p.idTensor,_e(1)]}case"TensorArrayWriteV3":{const a=C("tensorArrayId",n,e,t),r=C("index",n,e,t),o=C("tensor",n,e,t),l=t.getTensorArray(a.id);return l.write(r,o),[l.idTensor]}case"TensorArrayReadV3":{const a=C("tensorArrayId",n,e,t),r=C("index",n,e,t);return[t.getTensorArray(a.id).read(r)]}case"TensorArrayGatherV3":{const a=C("tensorArrayId",n,e,t),r=C("indices",n,e,t),o=C("dtype",n,e,t);return[t.getTensorArray(a.id).gather(r,o)]}case"TensorArrayScatterV3":{const a=C("tensorArrayId",n,e,t),r=C("indices",n,e,t),o=C("tensor",n,e,t),l=t.getTensorArray(a.id);return l.scatter(r,o),[l.idTensor]}case"TensorArrayConcatV3":{const a=C("tensorArrayId",n,e,t),r=t.getTensorArray(a.id),o=C("dtype",n,e,t);return[r.concat(o)]}case"TensorArraySplitV3":{const a=C("tensorArrayId",n,e,t),r=C("tensor",n,e,t),o=C("lengths",n,e,t),l=t.getTensorArray(a.id);return l.split(o,r),[l.idTensor]}case"TensorArraySizeV3":{const a=C("tensorArrayId",n,e,t),r=t.getTensorArray(a.id);return[_e(r.size(),"int32")]}case"TensorArrayCloseV3":{const a=C("tensorArrayId",n,e,t),r=t.getTensorArray(a.id);return r.clearAndClose(),[r.idTensor]}case"TensorListSetItem":{const a=C("tensorListId",n,e,t),r=C("index",n,e,t),o=C("tensor",n,e,t),l=t.getTensorList(a.id);return l.setItem(r,o),[l.idTensor]}case"TensorListGetItem":{const a=C("tensorListId",n,e,t),r=C("index",n,e,t),o=C("elementShape",n,e,t),l=C("elementDType",n,e,t);return[t.getTensorList(a.id).getItem(r,o,l)]}case"TensorListScatterV2":case"TensorListScatter":{const a=C("indices",n,e,t),r=C("tensor",n,e,t),o=C("elementShape",n,e,t),l=C("numElements",n,e,t),c=AL(r,a,o,l);return t.addTensorList(c),[c.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const a=C("elementShape",n,e,t),r=C("elementDType",n,e,t);let o;n.op==="TensorListReserve"?o="numElements":o="maxNumElements";const l=C(o,n,e,t),c=n.op==="TensorListReserve"?-1:l,f=_L(a,r,l,c);return t.addTensorList(f),[f.idTensor]}case"TensorListGather":{const a=C("tensorListId",n,e,t),r=C("indices",n,e,t),o=C("elementShape",n,e,t),l=C("elementDType",n,e,t);return[t.getTensorList(a.id).gather(r,l,o)]}case"TensorListStack":{const a=C("tensorListId",n,e,t),r=C("elementShape",n,e,t),o=C("elementDType",n,e,t),l=C("numElements",n,e,t);return[t.getTensorList(a.id).stack(r,o,l)]}case"TensorListFromTensor":{const a=C("tensor",n,e,t),r=C("elementShape",n,e,t),o=C("elementDType",n,e,t),l=RL(a,r,o);return t.addTensorList(l),[l.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const a=C("tensorListId",n,e,t),r=t.getTensorList(a.id),o=C("dtype",n,e,t),l=C("elementShape",n,e,t);return[r.concat(o,l)]}case"TensorListPushBack":{const a=C("tensorListId",n,e,t),r=C("tensor",n,e,t),o=t.getTensorList(a.id);return o.pushBack(r),[o.idTensor]}case"TensorListPopBack":{const a=C("tensorListId",n,e,t),r=C("elementShape",n,e,t),o=C("elementDType",n,e,t);return[t.getTensorList(a.id).popBack(r,o)]}case"TensorListSplit":{const a=C("tensor",n,e,t),r=C("elementShape",n,e,t),o=C("lengths",n,e,t),l=OL(a,o,r);return t.addTensorList(l),[l.idTensor]}case"TensorListLength":{const a=C("tensorListId",n,e,t),r=t.getTensorList(a.id);return[_e(r.size(),"int32")]}case"TensorListResize":{const a=C("tensorListId",n,e,t),r=C("size",n,e,t),l=t.getTensorList(a.id).resize(r);return t.addTensorList(l),[l.idTensor]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};function m2(n,e,t){const[a,r]=C("fusedOps",n,e,t),o=a==="biasadd",l=!o,c=r==="prelu",f=a==="fusedbatchnorm",d=C("numArgs",n,e,t);if(o){if(c&&d!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!c&&o&&d!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(f)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const p=C("strides",n,e,t),m=oc(n,e,t),y=C("dataFormat",n,e,t).toUpperCase(),x=C("dilations",n,e,t);let[v,S]=C("args",n,e,t);l&&(S=v,v=void 0);const w=C("leakyreluAlpha",n,e,t);return{stride:p,pad:m,dataFormat:y,dilations:x,biasArg:v,preluArg:S,activationFunc:r,leakyreluAlpha:w}}const DL=(n,e,t,a=$t)=>{switch(n.op){case"Conv1D":{const r=C("stride",n,e,t),o=C("pad",n,e,t),l=C("dataFormat",n,e,t).toUpperCase(),c=C("dilation",n,e,t);return[a.conv1d(C("x",n,e,t),C("filter",n,e,t),r,o,l,c)]}case"Conv2D":{const r=C("strides",n,e,t),o=oc(n,e,t),l=C("dataFormat",n,e,t).toUpperCase(),c=C("dilations",n,e,t);return[a.conv2d(C("x",n,e,t),C("filter",n,e,t),[r[1],r[2]],o,l,[c[1],c[2]])]}case"_FusedConv2D":{const{stride:r,pad:o,dataFormat:l,dilations:c,biasArg:f,preluArg:d,activationFunc:p,leakyreluAlpha:m}=m2(n,e,t);return[a.fused.conv2d({x:C("x",n,e,t),filter:C("filter",n,e,t),strides:[r[1],r[2]],pad:o,dataFormat:l,dilations:[c[1],c[2]],bias:f,activation:p,preluActivationWeights:d,leakyreluAlpha:m})]}case"FusedDepthwiseConv2dNative":{const{stride:r,pad:o,dataFormat:l,dilations:c,biasArg:f,preluArg:d,activationFunc:p,leakyreluAlpha:m}=m2(n,e,t);return[a.fused.depthwiseConv2d({x:C("x",n,e,t),filter:C("filter",n,e,t),strides:[r[1],r[2]],pad:o,dataFormat:l,dilations:[c[1],c[2]],bias:f,activation:p,preluActivationWeights:d,leakyreluAlpha:m})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const r=C("outputShape",n,e,t),o=C("strides",n,e,t),l=oc(n,e,t);return[a.conv2dTranspose(C("x",n,e,t),C("filter",n,e,t),r,[o[1],o[2]],l)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const r=C("strides",n,e,t),o=oc(n,e,t),l=C("dilations",n,e,t),c=C("dataFormat",n,e,t).toUpperCase();return[a.depthwiseConv2d(C("input",n,e,t),C("filter",n,e,t),[r[1],r[2]],o,c,[l[1],l[2]])]}case"Conv3D":{const r=C("strides",n,e,t),o=C("pad",n,e,t),l=C("dataFormat",n,e,t).toUpperCase(),c=C("dilations",n,e,t);return[a.conv3d(C("x",n,e,t),C("filter",n,e,t),[r[1],r[2],r[3]],o,l,[c[1],c[2],c[3]])]}case"AvgPool":{const r=C("strides",n,e,t),o=C("pad",n,e,t),l=C("kernelSize",n,e,t);return[a.avgPool(C("x",n,e,t),[l[1],l[2]],[r[1],r[2]],o)]}case"MaxPool":{const r=C("strides",n,e,t),o=C("pad",n,e,t),l=C("kernelSize",n,e,t);return[a.maxPool(C("x",n,e,t),[l[1],l[2]],[r[1],r[2]],o)]}case"MaxPoolWithArgmax":{const r=C("strides",n,e,t),o=C("pad",n,e,t),l=C("kernelSize",n,e,t),c=C("includeBatchInIndex",n,e,t),{result:f,indexes:d}=a.maxPoolWithArgmax(C("x",n,e,t),[l[1],l[2]],[r[1],r[2]],o,c);return[f,d]}case"AvgPool3D":{const r=C("strides",n,e,t),o=C("pad",n,e,t),l=C("kernelSize",n,e,t);return[a.avgPool3d(C("x",n,e,t),[l[1],l[2],l[3]],[r[1],r[2],r[3]],o)]}case"MaxPool3D":{const r=C("strides",n,e,t),o=C("pad",n,e,t),l=C("kernelSize",n,e,t);return[a.maxPool3d(C("x",n,e,t),[l[1],l[2],l[3]],[r[1],r[2],r[3]],o)]}case"Dilation2D":{const r=C("strides",n,e,t),o=C("pad",n,e,t),l=C("dilations",n,e,t),c=r[1],f=r[2],d=l[1],p=l[2];return[a.dilation2d(C("x",n,e,t),C("filter",n,e,t),[c,f],o,[d,p],"NHWC")]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const LL=(n,e,t,a=$t)=>{switch(n.op){case"Fill":{const r=C("shape",n,e,t),o=C("dtype",n,e,t),l=C("value",n,e,t);return[a.fill(r,l,o)]}case"LinSpace":{const r=C("start",n,e,t),o=C("stop",n,e,t),l=C("num",n,e,t);return[a.linspace(r,o,l)]}case"Multinomial":{const r=C("logits",n,e,t),o=C("numSamples",n,e,t),l=C("seed",n,e,t);return[a.multinomial(r,o,l)]}case"OneHot":{const r=C("indices",n,e,t),o=C("depth",n,e,t),l=C("onValue",n,e,t),c=C("offValue",n,e,t),f=C("dtype",n,e,t);return[a.oneHot(r,o,l,c,f)]}case"Ones":return[a.ones(C("shape",n,e,t),C("dtype",n,e,t))];case"OnesLike":return[a.onesLike(C("x",n,e,t))];case"RandomStandardNormal":return[a.randomStandardNormal(C("shape",n,e,t),C("dtype",n,e,t),C("seed",n,e,t))];case"RandomUniform":return[a.randomUniform(C("shape",n,e,t),C("minval",n,e,t),C("maxval",n,e,t),C("dtype",n,e,t))];case"RandomUniformInt":return[a.randomUniformInt(C("shape",n,e,t),C("minval",n,e,t),C("maxval",n,e,t),C("seed",n,e,t))];case"Range":{const r=C("start",n,e,t),o=C("stop",n,e,t),l=C("step",n,e,t);return[a.range(r,o,l,C("dtype",n,e,t))]}case"TruncatedNormal":{const r=C("shape",n,e,t),o=C("mean",n,e,t),l=C("stdDev",n,e,t),c=C("seed",n,e,t);return[a.truncatedNormal(r,o,l,C("dtype",n,e,t),c)]}case"Zeros":return[a.zeros(C("shape",n,e,t),C("dtype",n,e,t))];case"ZerosLike":return[a.zerosLike(C("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};function Fh(n,e,t){const a=C("boxes",n,e,t),r=C("scores",n,e,t),o=C("maxOutputSize",n,e,t),l=C("iouThreshold",n,e,t),c=C("scoreThreshold",n,e,t),f=C("softNmsSigma",n,e,t);return{boxes:a,scores:r,maxOutputSize:o,iouThreshold:l,scoreThreshold:c,softNmsSigma:f}}const FL=async(n,e,t,a,r=$t)=>{switch(n.op){case"NonMaxSuppressionV5":{const{boxes:o,scores:l,maxOutputSize:c,iouThreshold:f,scoreThreshold:d,softNmsSigma:p}=Fh(n,e,t),m=await r.image.nonMaxSuppressionWithScoreAsync(o,l,c,f,d,p);return[m.selectedIndices,m.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:o,scores:l,maxOutputSize:c,iouThreshold:f,scoreThreshold:d}=Fh(n,e,t),p=C("padToMaxOutputSize",n,e,t),m=await r.image.nonMaxSuppressionPaddedAsync(o,l,c,f,d,p);return[m.selectedIndices,m.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:o,scores:l,maxOutputSize:c,iouThreshold:f,scoreThreshold:d}=Fh(n,e,t);return[await r.image.nonMaxSuppressionAsync(o,l,c,f,d)]}case"Where":{const o=r.cast(C("condition",n,e,t),"bool"),l=[await r.whereAsync(o)];return o.dispose(),l}case"ListDiff":return r.setdiff1dAsync(C("x",n,e,t),C("y",n,e,t));default:throw TypeError(`Node type ${n.op} is not implemented`)}};const BL=(n,e,t,a=$t)=>{switch(n.op){case"LowerBound":{const r=C("sortedSequence",n,e,t),o=C("values",n,e,t);return[a.lowerBound(r,o)]}case"TopKV2":{const r=C("x",n,e,t),o=C("k",n,e,t),l=C("sorted",n,e,t),c=a.topk(r,o,l);return[c.values,c.indices]}case"UpperBound":{const r=C("sortedSequence",n,e,t),o=C("values",n,e,t);return[a.upperBound(r,o)]}case"Unique":{const r=C("x",n,e,t),o=a.unique(r);return[o.values,o.indices]}case"UniqueV2":{const r=C("x",n,e,t),o=C("axis",n,e,t),l=a.unique(r,o);return[l.values,l.indices]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const zL=(n,e,t,a=$t)=>{switch(n.op){case"Const":return e[n.name];case"PlaceholderWithDefault":const r=C("default",n,e,t);return[Tt(n.name,e,t)||r];case"Placeholder":return[Tt(n.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const p=C("x",n,e,t);return[La(p)]}case"IdentityN":return C("x",n,e,t).map(p=>La(p));case"Snapshot":const o=C("x",n,e,t);return[La(o)];case"Shape":return[a.tensor1d(C("x",n,e,t).shape,"int32")];case"ShapeN":return C("x",n,e,t).map(p=>a.tensor1d(p.shape));case"Size":return[a.scalar(C("x",n,e,t).size,"int32")];case"Rank":return[a.scalar(C("x",n,e,t).rank,"int32")];case"NoOp":return[a.scalar(1)];case"Print":const l=C("x",n,e,t),c=C("data",n,e,t),f=C("message",n,e,t),d=C("summarize",n,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(f);for(let p=0;p<c.length;p++)console.log(Array.prototype.slice.call(c[p].dataSync()).slice(0,d));return[l];default:throw TypeError(`Node type ${n.op} is not implemented`)}};class UL{get id(){return this.handle.id}constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=_e(0),this.tensorMap=new Map,Zn(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return _e(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const a=await e.data();return this.tensorMap.forEach(r=>r.dispose()),this.tensorMap.clear(),De(()=>{const r=_s(t),o=a.length,l=r.length;_(o===l,()=>`The number of elements doesn't match, keys has ${o} elements, the values has ${l} elements.`);for(let c=0;c<o;c++){const f=a[c],d=r[c];Zn(d),this.tensorMap.set(f,d)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);const a=await e.data();return De(()=>{const r=[];for(let o=0;o<a.length;o++){const l=a[o],c=this.findWithDefault(l,t);r.push(c)}return da(r)})}findWithDefault(e,t){const a=this.tensorMap.get(e);return a??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}const VL=async(n,e,t,a)=>{switch(n.op){case"HashTable":case"HashTableV2":{const r=a.getHashTableHandleByName(n.name);if(r!=null)return[r];{const o=C("keyDType",n,e,t),l=C("valueDType",n,e,t),c=new UL(o,l);return a.addHashTable(n.name,c),[c.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const r=C("tableHandle",n,e,t,a),o=C("keys",n,e,t),l=C("values",n,e,t);return[await a.getHashTableById(r.id).import(o,l)]}case"LookupTableFind":case"LookupTableFindV2":{const r=C("tableHandle",n,e,t,a),o=C("keys",n,e,t),l=C("defaultValue",n,e,t);return[await a.getHashTableById(r.id).find(o,l)]}case"LookupTableSize":case"LookupTableSizeV2":{const r=C("tableHandle",n,e,t,a);return[a.getHashTableById(r.id).tensorSize()]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const ML=(n,e,t,a=$t)=>{switch(n.op){case"ResizeBilinear":{const r=C("images",n,e,t),o=C("size",n,e,t),l=C("alignCorners",n,e,t),c=C("halfPixelCenters",n,e,t);return[a.image.resizeBilinear(r,[o[0],o[1]],l,c)]}case"ResizeNearestNeighbor":{const r=C("images",n,e,t),o=C("size",n,e,t),l=C("alignCorners",n,e,t),c=C("halfPixelCenters",n,e,t);return[a.image.resizeNearestNeighbor(r,[o[0],o[1]],l,c)]}case"CropAndResize":{const r=C("image",n,e,t),o=C("boxes",n,e,t),l=C("boxInd",n,e,t),c=C("cropSize",n,e,t),f=C("method",n,e,t),d=C("extrapolationValue",n,e,t);return[a.image.cropAndResize(r,o,l,c,f,d)]}case"ImageProjectiveTransformV3":{const r=C("images",n,e,t),o=C("transforms",n,e,t),l=C("outputShape",n,e,t),c=C("fillValue",n,e,t),f=C("interpolation",n,e,t),d=C("fillMode",n,e,t);return[a.image.transform(r,o,f.toLowerCase(),d.toLowerCase(),c,l)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const PL=(n,e,t,a=$t)=>{switch(n.op){case"Equal":return[a.equal(C("a",n,e,t),C("b",n,e,t))];case"NotEqual":return[a.notEqual(C("a",n,e,t),C("b",n,e,t))];case"Greater":return[a.greater(C("a",n,e,t),C("b",n,e,t))];case"GreaterEqual":return[a.greaterEqual(C("a",n,e,t),C("b",n,e,t))];case"Less":return[a.less(C("a",n,e,t),C("b",n,e,t))];case"LessEqual":return[a.lessEqual(C("a",n,e,t),C("b",n,e,t))];case"LogicalAnd":return[a.logicalAnd(C("a",n,e,t),C("b",n,e,t))];case"LogicalNot":return[a.logicalNot(C("a",n,e,t))];case"LogicalOr":return[a.logicalOr(C("a",n,e,t),C("b",n,e,t))];case"Select":case"SelectV2":return[a.where(C("condition",n,e,t),C("a",n,e,t),C("b",n,e,t))];case"BitwiseAnd":return[a.bitwiseAnd(C("a",n,e,t),C("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const GL=(n,e,t,a=$t)=>{switch(n.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[a.matMul(C("a",n,e,t),C("b",n,e,t),C("transposeA",n,e,t),C("transposeB",n,e,t))];case"Einsum":return[a.einsum(C("equation",n,e,t),...C("tensors",n,e,t))];case"Transpose":return[a.transpose(C("x",n,e,t),C("perm",n,e,t))];case"_FusedMatMul":const[r,o]=C("fusedOps",n,e,t),l=r==="biasadd",c=o==="prelu",f=C("numArgs",n,e,t),d=C("leakyreluAlpha",n,e,t);if(l){if(c&&f!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!c&&f!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[p,m]=C("args",n,e,t);return[a.fused.matMul({a:C("a",n,e,t),b:C("b",n,e,t),transposeA:C("transposeA",n,e,t),transposeB:C("transposeB",n,e,t),bias:p,activation:o,preluActivationWeights:m,leakyreluAlpha:d})];case"MatrixBandPart":return[a.linalg.bandPart(C("a",n,e,t),C("numLower",n,e,t),C("numUpper",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const HL=(n,e,t,a=$t)=>{switch(n.op){case"EuclideanNorm":return[a.euclideanNorm(C("x",n,e,t),C("axis",n,e,t),C("keepDims",n,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[a.batchNorm(C("x",n,e,t),C("mean",n,e,t),C("variance",n,e,t),C("offset",n,e,t),C("scale",n,e,t),C("epsilon",n,e,t))];case"FusedBatchNormV3":return[a.batchNorm(C("x",n,e,t),C("mean",n,e,t),C("variance",n,e,t),C("offset",n,e,t),C("scale",n,e,t),C("epsilon",n,e,t))];case"LRN":return[a.localResponseNormalization(C("x",n,e,t),C("radius",n,e,t),C("bias",n,e,t),C("alpha",n,e,t),C("beta",n,e,t))];case"Softmax":return[a.softmax(C("x",n,e,t))];case"LogSoftmax":return[a.logSoftmax(C("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const WL=(n,e,t,a=$t)=>{switch(n.op){case"RaggedGather":{const{outputNestedSplits:r,outputDenseValues:o}=a.raggedGather(C("paramsNestedSplits",n,e,t),C("paramsDenseValues",n,e,t),C("indices",n,e,t),C("outputRaggedRank",n,e,t));return r.concat(o)}case"RaggedRange":{const{rtNestedSplits:r,rtDenseValues:o}=a.raggedRange(C("starts",n,e,t),C("limits",n,e,t),C("splits",n,e,t));return[r,o]}case"RaggedTensorToTensor":return[a.raggedTensorToTensor(C("shape",n,e,t),C("values",n,e,t),C("defaultValue",n,e,t),C("rowPartitionTensors",n,e,t),C("rowPartitionTypes",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const qL=(n,e,t,a=$t)=>{switch(n.op){case"Max":{const c=C("axis",n,e,t),f=C("keepDims",n,e,t);return[a.max(C("x",n,e,t),c,f)]}case"Mean":{const c=C("axis",n,e,t),f=C("keepDims",n,e,t);return[a.mean(C("x",n,e,t),c,f)]}case"Min":{const c=C("axis",n,e,t),f=C("keepDims",n,e,t);return[a.min(C("x",n,e,t),c,f)]}case"Sum":{const c=C("axis",n,e,t),f=C("keepDims",n,e,t);return[a.sum(C("x",n,e,t),c,f)]}case"All":{const c=C("axis",n,e,t),f=C("keepDims",n,e,t);return[a.all(C("x",n,e,t),c,f)]}case"Any":{const c=C("axis",n,e,t),f=C("keepDims",n,e,t);return[a.any(C("x",n,e,t),c,f)]}case"ArgMax":{const c=C("axis",n,e,t);return[a.argMax(C("x",n,e,t),c)]}case"ArgMin":{const c=C("axis",n,e,t);return[a.argMin(C("x",n,e,t),c)]}case"Prod":{const c=C("axis",n,e,t),f=C("keepDims",n,e,t);return[a.prod(C("x",n,e,t),c,f)]}case"Cumprod":{const c=C("axis",n,e,t),f=C("exclusive",n,e,t),d=C("reverse",n,e,t);return[a.cumprod(C("x",n,e,t),c,f,d)]}case"Cumsum":{const c=C("axis",n,e,t),f=C("exclusive",n,e,t),d=C("reverse",n,e,t);return[a.cumsum(C("x",n,e,t),c,f,d)]}case"Bincount":const r=C("x",n,e,t),o=C("weights",n,e,t),l=C("size",n,e,t);return[a.bincount(r,o,l)];case"DenseBincount":{const c=C("x",n,e,t),f=C("weights",n,e,t),d=C("size",n,e,t),p=C("binaryOutput",n,e,t);return[a.denseBincount(c,f,d,p)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const jL=(n,e,t,a=$t)=>{switch(n.op){case"ConcatV2":case"Concat":{const r=C("n",n,e,t),o=C("axis",n,e,t);let l=C("tensors",n,e,t);return l=l.slice(0,r),[a.concat(l,o)]}case"Gather":{const r=C("x",n,e,t),o=C("indices",n,e,t);return[a.gather(r,a.cast(o,"int32"),0)]}case"GatherV2":{const r=C("axis",n,e,t),o=C("batchDims",n,e,t),l=C("x",n,e,t),c=C("indices",n,e,t);return[a.gather(l,a.cast(c,"int32"),r,o)]}case"Reverse":{const r=C("dims",n,e,t),o=[];for(let c=0;c<r.length;c++)r[c]&&o.push(c);const l=C("x",n,e,t);return[a.reverse(l,o)]}case"ReverseV2":{const r=C("axis",n,e,t),o=C("x",n,e,t);return[a.reverse(o,r)]}case"Slice":{const r=C("begin",n,e,t),o=C("size",n,e,t);return[a.slice(C("x",n,e,t),r,o)]}case"StridedSlice":{const r=C("begin",n,e,t),o=C("end",n,e,t),l=C("strides",n,e,t),c=C("beginMask",n,e,t),f=C("endMask",n,e,t),d=C("ellipsisMask",n,e,t),p=C("newAxisMask",n,e,t),m=C("shrinkAxisMask",n,e,t),y=C("x",n,e,t);return[a.stridedSlice(y,r,o,l,c,f,d,p,m)]}case"Pack":return De(()=>{const r=C("axis",n,e,t),o=C("tensors",n,e,t),l=o[0].shape,c=a.squeeze(o[0]).shape,f=o.map(d=>{const p=st(d.shape,l);if(!p&&!st(a.squeeze(d).shape,c))throw new Error("the input tensors shape does not match");return p?d:a.reshape(d,l)});return[a.stack(f,r)]});case"Unpack":{const r=C("axis",n,e,t),o=C("tensor",n,e,t);return a.unstack(o,r)}case"Tile":{const r=C("reps",n,e,t);return[a.tile(C("x",n,e,t),r)]}case"Split":case"SplitV":{const r=C("axis",n,e,t),o=C("numOrSizeSplits",n,e,t),l=C("x",n,e,t);return a.split(l,o,r)}case"ScatterNd":{const r=C("indices",n,e,t),o=C("values",n,e,t),l=C("shape",n,e,t);return[a.scatterND(r,o,l)]}case"GatherNd":{const r=C("x",n,e,t),o=C("indices",n,e,t);return[a.gatherND(r,o)]}case"SparseToDense":{const r=C("sparseIndices",n,e,t),o=C("outputShape",n,e,t),l=C("sparseValues",n,e,t),c=C("defaultValue",n,e,t);return[a.sparseToDense(r,l,o,l.dtype===c.dtype?c:a.cast(c,l.dtype))]}case"TensorScatterUpdate":{const r=C("indices",n,e,t),o=C("values",n,e,t),l=C("tensor",n,e,t);return[a.tensorScatterUpdate(l,r,o)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const XL=(n,e,t,a=$t)=>{switch(n.op){case"SparseFillEmptyRows":{const{outputIndices:r,outputValues:o,emptyRowIndicator:l,reverseIndexMap:c}=a.sparse.sparseFillEmptyRows(C("indices",n,e,t),C("values",n,e,t),C("denseShape",n,e,t),C("defaultValue",n,e,t));return[r,o,l,c]}case"SparseReshape":{const{outputIndices:r,outputShape:o}=a.sparse.sparseReshape(C("inputIndices",n,e,t),C("inputShape",n,e,t),C("newShape",n,e,t));return[r,o]}case"SparseSegmentMean":return[a.sparse.sparseSegmentMean(C("data",n,e,t),C("indices",n,e,t),C("segmentIds",n,e,t))];case"SparseSegmentSum":return[a.sparse.sparseSegmentSum(C("data",n,e,t),C("indices",n,e,t),C("segmentIds",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const KL=(n,e,t,a=$t)=>{switch(n.op){case"FFT":return[a.fft(C("x",n,e,t))];case"IFFT":return[a.ifft(C("x",n,e,t))];case"RFFT":return[a.rfft(C("x",n,e,t))];case"IRFFT":return[a.irfft(C("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const YL=(n,e,t,a=$t)=>{switch(n.op){case"StaticRegexReplace":return[a.string.staticRegexReplace(C("input",n,e,t),C("pattern",n,e,t),C("rewrite",n,e,t),C("replaceGlobal",n,e,t))];case"StringNGrams":{const{nGrams:r,nGramsSplits:o}=a.string.stringNGrams(C("data",n,e,t),C("dataSplits",n,e,t),C("separator",n,e,t),C("nGramWidths",n,e,t),C("leftPad",n,e,t),C("rightPad",n,e,t),C("padWidth",n,e,t),C("preserveShortSequences",n,e,t));return[r,o]}case"StringSplit":{const{indices:r,values:o,shape:l}=a.string.stringSplit(C("input",n,e,t),C("delimiter",n,e,t),C("skipEmpty",n,e,t));return[r,o,l]}case"StringToHashBucketFast":return[a.string.stringToHashBucketFast(C("input",n,e,t),C("numBuckets",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const QL=(n,e,t,a=$t)=>{switch(n.op){case"Cast":return[a.cast(C("x",n,e,t),C("dtype",n,e,t))];case"ExpandDims":{const r=C("axis",n,e,t);return[a.expandDims(C("x",n,e,t),r)]}case"Squeeze":{const r=C("axis",n,e,t);return[a.squeeze(C("x",n,e,t),r)]}case"Reshape":return[a.reshape(C("x",n,e,t),C("shape",n,e,t))];case"EnsureShape":return[a.ensureShape(C("x",n,e,t),C("shape",n,e,t))];case"MirrorPad":return[a.mirrorPad(C("x",n,e,t),C("padding",n,e,t),C("mode",n,e,t))];case"PadV2":case"Pad":return[a.pad(C("x",n,e,t),C("padding",n,e,t),C("constantValue",n,e,t))];case"SpaceToBatchND":{const r=C("blockShape",n,e,t),o=C("paddings",n,e,t);return[a.spaceToBatchND(C("x",n,e,t),r,o)]}case"BatchToSpaceND":{const r=C("blockShape",n,e,t),o=C("crops",n,e,t);return[a.batchToSpaceND(C("x",n,e,t),r,o)]}case"DepthToSpace":{const r=C("blockSize",n,e,t),o=C("dataFormat",n,e,t).toUpperCase();return[a.depthToSpace(C("x",n,e,t),r,o)]}case"BroadcastTo":return[a.broadcastTo(C("x",n,e,t),C("shape",n,e,t))];case"BroadcastArgs":return[a.broadcastArgs(C("s0",n,e,t),C("s1",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};function g2(n,e,t,a,r=De){const o=((l,c,f)=>{switch(l.category){case"arithmetic":return r(()=>$L(l,c,f));case"basic_math":return r(()=>EL(l,c,f));case"control":return IL(l,c,f);case"convolution":return r(()=>DL(l,c,f));case"creation":return r(()=>LL(l,c,f));case"dynamic":return FL(l,c,f);case"evaluation":return r(()=>BL(l,c,f));case"image":return r(()=>ML(l,c,f));case"graph":return r(()=>zL(l,c,f));case"logical":return r(()=>PL(l,c,f));case"matrices":return r(()=>GL(l,c,f));case"normalization":return r(()=>HL(l,c,f));case"ragged":return r(()=>WL(l,c,f));case"reduction":return r(()=>qL(l,c,f));case"slice_join":return r(()=>jL(l,c,f));case"sparse":return r(()=>XL(l,c,f));case"spectral":return r(()=>KL(l,c,f));case"string":return r(()=>YL(l,c,f));case"transformation":return r(()=>QL(l,c,f));case"hash_table":return VL(l,c,f,a);case"custom":const d=fN(l.op);if(d&&d.customExecutor)return d.customExecutor(new NL(l,c,f));throw TypeError(`Custom op ${l.op} is not registered.`);default:throw TypeError(`Unknown op '${l.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(n,e,t);return cr(o)?o.then(l=>[].concat(l)):[].concat(o)}class y2{constructor(e={},t={},a={},r={},o){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=a,this.functionMap=r,this.parseNodeNameCache=o,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const a=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(a))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}function b2(n,e,t,a){const r=new Set,o=[];let l=null,c=null;const f=new Set,d=new Set(Object.keys(n).map(y=>nn(y)[0]));a=a||[];const p=new Set(a.map(y=>nn(y.name)[0])),m=[...e];for(;m.length>0;){const y=m.pop();if((sr(y)||rF(y)||iF(y))&&l==null&&(l=y,c=l.children.map(x=>x.name).filter(x=>r.has(x))),r.add(y.name),t[y.name]==null&&!d.has(y.name)&&!p.has(y.name)){if(y.inputs.length===0){o.push(y.name);continue}y.inputs.forEach(x=>{f.has(x.name)||(f.add(x.name),m.push(x))})}}return{inputs:n,outputs:e,usedNodes:r,missingInputs:o,dynamicNode:l,syncInputs:c}}function ZL(n,e){const{usedNodes:t,inputs:a}=e,r=Object.keys(a).map(w=>nn(w)[0]).map(w=>n.nodes[w]),o=n.initNodes||[],l=w=>t.has(typeof w=="string"?w:w.name);function c(w){return[...new Map(w.map(T=>[T.name,T])).values()]}const f=c([...r,...n.weights,...o]).filter(l),d=c([...f,...Object.values(n.nodes)]).filter(l),p=new Map(d.map(w=>[w.name,w])),m={};for(const w of d){m[w.name]=m[w.name]||0;for(const T of w.children)l(T)||(m[T.name]=Number.POSITIVE_INFINITY),m[T.name]=(m[T.name]||0)+1}const y=Object.entries(m).filter(([,w])=>w===0).map(([w])=>w),x=[...y];for(;y.length>0;){const w=y.pop(),T=p.get(w);for(const $ of T.children.filter(l))--m[$.name]===0&&(x.push($.name),y.push($.name))}const v=x.map(w=>p.get(w)),S=JL(v,f);return eF(S,f),S}function JL(n,e){const t=new Map(n.map(l=>[l.name,l])),a=e.map(l=>l.name),r=new Set(a);for(;a.length>0;){const l=a.pop(),c=t.get(l);for(const f of c.children)!t.has(f.name)||r.has(f.name)||(r.add(f.name),a.push(f.name))}return n.filter(l=>r.has(l.name))}class Gu extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function eF(n,e){const t=new Map(n.map((c,f)=>[c.name,f])),a=new Set(e.map(c=>c.name)),r=c=>a.has(typeof c=="string"?c:c.name),o=new Set(n.map(c=>c.name)),l=c=>o.has(typeof c=="string"?c:c.name);for(const c of n){for(const f of c.children.filter(l)){if(!t.has(f.name))throw new Gu(`Child ${f.name} of node ${c.name} is unreachable.`);if(t.get(c.name)>t.get(f.name))throw new Gu(`Node ${c.name} is scheduled to run after its child ${f.name}.`)}if(!r(c))for(const f of c.inputs){if(!t.has(f.name))throw new Gu(`Input ${f.name} of node ${c.name} is unreachable.`);if(t.get(f.name)>t.get(c.name))throw new Gu(`Node ${c.name} is scheduled to run before its input ${f.name}.`)}}}function tF(n){const e=new Map(n.map((c,f)=>[c.name,f])),t=Number.MAX_SAFE_INTEGER,a=n.map((c,f)=>sr(c)?t:f),r=c=>{const f=a[e.get(c.name)];return f??-1},o=n.map((c,f)=>c.children.map(r).reduce((d,p)=>Math.max(d,p),a[f])),l=new Map;for(let c=0;c<n.length;++c){const f=o[c];if(f===t)continue;const d=n[c],p=n[f];l.has(p.name)||l.set(p.name,[]),l.get(p.name).push(d)}return l}const nF=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),aF=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),sF=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function sr(n){return nF.has(n.op)}function rF(n){return aF.has(n.op)}function iF(n){return sF.has(n.op)}class Tc{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map(a=>e[a].map(r=>r.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(a=>{this._functionExecutorMap[a]=new Tc(e.functions[a],this)})}getCompilationKey(e,t){const a=e.map(o=>o.name).sort(),r=t.map(o=>o.name).sort();return a.join(this.SEPARATOR)+"--"+r.join(this.SEPARATOR)}compile(e,t){const a=b2(e,t,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:o,syncInputs:l}=a;if(o!=null)throw new Error(`This execution contains the node '${o.name}', which has the dynamic op '${o.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${l}]`);if(r.length>0){const d=t.map(m=>m.name),p=Object.keys(e);throw new Error(`Cannot compute the outputs [${d}] from the provided inputs [${p}]. Missing the following inputs: [${r}]`)}const c=ZL(this.graph,a),f=tF(c);return{orderedNodes:c,nodeLiveUntilMap:f}}cloneAndKeepTensor(e){if(e==null)return null;const t=e.clone();return Zn(t),t}cloneTensorList(e){return e?e.map(a=>this.cloneAndKeepTensor(a)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([t,a])=>[t,this.cloneTensorList(a)]))}execute(e,t){this.disposeIntermediateTensors(),e=this.mapInputs(e);const a=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const r=a.map(y=>this.graph.nodes[nn(y)[0]]),o=t.map(y=>nn(y)[0]),l=new Set(o);let c=o.map(y=>this.graph.nodes[y]);c.length===0&&(c=this._outputs);const f=this.getCompilationKey(r,c);let d=this.compiledMap.get(f);d==null&&(d=this.compile(e,c),this.compiledMap.set(f,d));try{this.keepIntermediateTensors=q().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(y){this.keepIntermediateTensors=!1,console.warn(y.message)}const p={},m={};return De(()=>{const y=new y2(this.weightMap,p,m,this.functionExecutorMap,this.parseNodeNameCache),x=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(T=>{const[$,O]=nn(T,y),A=[];A[O]=e[T],x[$]=A,this.keepIntermediateTensors&&(this.clonedTensorsMap[$]=this.cloneTensorList(A))});const v=this.getFrozenTensorIds(x),{orderedNodes:S,nodeLiveUntilMap:w}=d;for(const T of S){if(x[T.name])continue;const $=g2(T,x,y,this._resourceManager);if(cr($))throw new Error(`The execution of the op '${T.op}' returned a promise. Please use model.executeAsync() instead.`);x[T.name]=$,this.keepIntermediateTensors&&(this.clonedTensorsMap[T.name]=this.cloneTensorList($)),this.checkTensorForDisposalWithNodeLiveUntilInfo(T,x,y,v,l,w.get(T.name))}return this.parent==null&&y.dispose(v),t.map(T=>Tt(T,x,y))})}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map(a=>e[a]).map(a=>a.map(r=>r.id)));return new Set(t)}checkTensorForDisposal(e,t,a,r,o,l,c){if(!(sr(t)||l.has(e))){for(const f of a[e])f!=null&&(c[f.id]=(c[f.id]||0)+t.children.length);for(const f of t.inputs){if(sr(f))continue;const d=f2(f.name,a,r);if(d!=null)for(const p of d){if(!p||p.kept||o.has(p.id))continue;const m=c[p.id];m===1?(p.dispose(),delete c[p.id]):m!=null&&c[p.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,t,a,r,o,l){function c(f){return sr(f)||o.has(f.name)}if(!(sr(e)||l==null))for(const f of l){if(c(f))continue;const d=f2(f.name,t,a);for(const p of d)!p||p.kept||r.has(p.id)||p.dispose()}}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const t of e)t&&!t.isDisposed&&t.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,t,a=!1,r={},o={}){this.disposeIntermediateTensors(),a||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=q().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(y){this.keepIntermediateTensors=!1,console.warn(y.message)}const l=new y2(this.weightMap,r,o,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const c=await this.executeWithControlFlow(e,l,t,a),f=t.map(y=>Tt(y,c,l)),d=f.map(y=>y.id),p=Object.keys(e).map(y=>e[y].id),m=new Set([...d,...p,...this.weightIds]);return Object.values(c).forEach(y=>{y.forEach(x=>{x&&!x.isDisposed&&!m.has(x.id)&&x.dispose()})}),this.parent==null&&l.dispose(m),f}async executeFunctionAsync(e,t,a){const r=e.reduce((o,l,c)=>(o[this.inputs[c].name]=l,o),{});return this._executeAsync(r,this.outputNodes,!0,t,a)}async executeWithControlFlow(e,t,a,r){const o=Object.keys(e),l=o.map(A=>this.graph.nodes[nn(A)[0]]),c=a.map(A=>nn(A)[0]),f=new Set(c);let d=c.map(A=>this.graph.nodes[A]);d.length===0&&(d=this._outputs);const{usedNodes:p,missingInputs:m,dynamicNode:y,syncInputs:x}=b2(e,d,this.weightMap,this._initNodes),v=[...l,...this.graph.weights,...this._initNodes||[]].map(A=>({node:A,contexts:t.currentContext})),S=Object.assign({},this.weightMap);Object.keys(e).forEach(A=>{const[z,j]=nn(A),G=[];G[j]=e[A],S[z]=G});const w={},T=this.getFrozenTensorIds(S),$={};for(;v.length>0;){const A=this.processStack(l,v,t,S,$,T,f,w,p);await Promise.all(A)}y==null&&!r&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const O=d.filter(A=>!sr(A)&&!Tt(A.name,S,t)).map(A=>A.name);if(O.length>0){let A="";throw y!=null&&(A=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${x}]`),new Error(`Cannot compute the outputs [${O}] from the provided inputs [${o}]. Consider providing the following inputs: [${m}]. ${A}`)}return S}processStack(e,t,a,r,o,l,c,f,d){const p=[];for(;t.length>0;){const m=t.pop();a.currentContext=m.contexts;let y="";if(m.node.op==="Enter"&&C("isConstant",m.node,r,a)&&([y]=Da(m.node.name,a)),r[m.node.name]==null){const x=g2(m.node,r,a,this._resourceManager);y||([y]=Da(m.node.name,a));const v=a.currentContext;cr(x)?p.push(x.then(S=>(r[y]=S,this.keepIntermediateTensors&&(this.clonedTensorsMap[y]=this.cloneTensorList(S)),a.currentContext=v,this.checkTensorForDisposal(y,m.node,r,a,l,c,f),this.processChildNodes(m.node,t,a,r,o,d),S))):(r[y]=x,this.keepIntermediateTensors&&(this.clonedTensorsMap[y]=this.cloneTensorList(x)),this.checkTensorForDisposal(y,m.node,r,a,l,c,f),this.processChildNodes(m.node,t,a,r,o,d))}else this.processChildNodes(m.node,t,a,r,o,d)}return p}processChildNodes(e,t,a,r,o,l){e.children.forEach(c=>{const[f]=Da(c.name,a);o[f]||!l.has(c.name)||(c.op==="Merge"?c.inputNames.some(d=>!!Tt(d,r,a))&&(o[f]=!0,t.push({contexts:a.currentContext,node:c})):c.inputNames.every(d=>!!Tt(d,r,a))&&(o[f]=!0,t.push({contexts:a.currentContext,node:c})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{const a=e[t],[r]=nn(t),o=this.graph.nodes[r];if(o.attrParams.shape&&o.attrParams.shape.value){const l=o.attrParams.shape.value,c=l.length===a.shape.length&&a.shape.every((f,d)=>l[d]===-1||l[d]===f);_(c,()=>`The shape of dict['${o.name}'] provided in model.execute(dict) must be [${l}], but was [${a.shape}]`)}o.attrParams.dtype&&o.attrParams.dtype.value&&_(a.dtype===o.attrParams.dtype.value,()=>`The dtype of dict['${o.name}'] provided in model.execute(dict) must be ${o.attrParams.dtype.value}, but was ${a.dtype}`)})}mapInputs(e){var t,a;const r={};for(const o in e){const l=(a=(t=this._signature)===null||t===void 0?void 0:t.inputs)===null||a===void 0?void 0:a[o];l!=null?r[l.name]=e[o]:r[o]=e[o]}return r}checkInputs(e){const t=Object.keys(e).filter(a=>{const[r]=nn(a);return this.graph.nodes[r]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>{var a,r;const o=(r=(a=this._signature)===null||a===void 0?void 0:a.outputs)===null||r===void 0?void 0:r[t];return o!=null?o.name:t},{})}checkOutputs(e){e.forEach(t=>{const[a]=nn(t);if(!this.graph.nodes[a])throw new Error(`The output '${t}' is not found in the graph`)})}}class oF{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}const lF="?tfjs-format=file",uF="model.json";class cF{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,t={},a=h0){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=a,t==null&&(this.loadOptions={}),this.resourceManager=new oF}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return cr(e)?e.then(t=>t.getWeightStream==null?this.loadSync(t):this.loadStreaming(t)):this.loadSync(e)}loadSync(e){const t=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,t)}async loadStreaming(e){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const t=await Fw(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,t)}loadWithWeightMap(e,t){this.artifacts=e;const a=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const o=this.artifacts.userDefinedMetadata;o.signature!=null&&(r=o.signature),o.structuredOutputKeys!=null&&(this.structuredOutputKeys=o.structuredOutputKeys)}if(this.signature=r,this.version=`${a.versions.producer}.${a.versions.minConsumer}`,this.executor=new Tc(d2.Instance.transformGraph(a,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(t),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const o=d2.Instance.transformGraph(e.modelInitializer);this.initializer=new Tc(o),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,t){if(typeof e=="string"){const a=this.io.getSaveHandlers(e);if(a.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(a.length>1)throw new Error(`Found more than one (${a.length}) save handlers for URL '${e}'`);e=a[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const t=e instanceof St?[e]:e,a={};return t.forEach((r,o)=>a[this.structuredOutputKeys[o]]=r),a}return e}predict(e,t){const a=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(a)}async predictAsync(e,t){const a=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(a)}normalizeInputs(e){var t;if(!(e instanceof St)&&!Array.isArray(e)){const o=(t=this.signature)===null||t===void 0?void 0:t.inputs;if(o!=null)for(const l in o){const c=o[l];c.resourceId!=null&&(e[l]=this.resourceIdToCapturedInput[c.resourceId])}return e}e=Array.isArray(e)?e:[e];const a=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+a!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-a} non-resource placeholders, while there are ${e.length} input tensors provided.`);let r=0;return this.inputNodes.reduce((o,l)=>{var c,f,d;const p=(d=(f=(c=this.signature)===null||c===void 0?void 0:c.inputs)===null||f===void 0?void 0:f[l])===null||d===void 0?void 0:d.resourceId;return p!=null?o[l]=this.resourceIdToCapturedInput[p]:o[l]=e[r++],o},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const t=this.initializerSignature.outputs,a=Object.keys(t);for(let r=0;r<a.length;r++){const o=a[r],l=t[o];this.resourceIdToCapturedInput[l.resourceId]=e[r]}}}execute(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const a=this.executor.execute(e,t);return a.length>1?a:a[0]}async executeAsync(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const a=await this.executor.executeAsync(e,t);return a.length>1?a:a[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,a)=>(t[a]=[e[a]],t),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Mt(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function x2(n,e={},t=h0){if(n==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof n=="string"&&(n=fF(n));const a=new cF(n,e,t);return await a.load(),a}function fF(n){return n.endsWith("/")||(n=n+"/"),`${n}${uF}${lF}`}function Cc(n,e,t,a){return new(t||(t=Promise))(function(r,o){function l(d){try{f(a.next(d))}catch(p){o(p)}}function c(d){try{f(a.throw(d))}catch(p){o(p)}}function f(d){var p;d.done?r(d.value):(p=d.value,p instanceof t?p:new t(function(m){m(p)})).then(l,c)}f((a=a.apply(n,[])).next())})}function Nc(n,e){var t,a,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(f){return function(d){return(function(p){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,a&&(r=2&p[0]?a.return:p[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,p[1])).done)return r;switch(a=0,r&&(p=[2&p[0],r.value]),p[0]){case 0:case 1:r=p;break;case 4:return l.label++,{value:p[1],done:!1};case 5:l.label++,a=p[1],p=[0];continue;case 7:p=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(p[0]===6||p[0]===2)){l=0;continue}if(p[0]===3&&(!r||p[1]>r[0]&&p[1]<r[3])){l.label=p[1];break}if(p[0]===6&&l.label<r[1]){l.label=r[1],r=p;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(p);break}r[2]&&l.ops.pop(),l.trys.pop();continue}p=e.call(n,l)}catch(m){p=[6,m],a=0}finally{t=r=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}})([f,d])}}}var dF={0:"tench, Tinca tinca",1:"goldfish, Carassius auratus",2:"great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias",3:"tiger shark, Galeocerdo cuvieri",4:"hammerhead, hammerhead shark",5:"electric ray, crampfish, numbfish, torpedo",6:"stingray",7:"cock",8:"hen",9:"ostrich, Struthio camelus",10:"brambling, Fringilla montifringilla",11:"goldfinch, Carduelis carduelis",12:"house finch, linnet, Carpodacus mexicanus",13:"junco, snowbird",14:"indigo bunting, indigo finch, indigo bird, Passerina cyanea",15:"robin, American robin, Turdus migratorius",16:"bulbul",17:"jay",18:"magpie",19:"chickadee",20:"water ouzel, dipper",21:"kite",22:"bald eagle, American eagle, Haliaeetus leucocephalus",23:"vulture",24:"great grey owl, great gray owl, Strix nebulosa",25:"European fire salamander, Salamandra salamandra",26:"common newt, Triturus vulgaris",27:"eft",28:"spotted salamander, Ambystoma maculatum",29:"axolotl, mud puppy, Ambystoma mexicanum",30:"bullfrog, Rana catesbeiana",31:"tree frog, tree-frog",32:"tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui",33:"loggerhead, loggerhead turtle, Caretta caretta",34:"leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea",35:"mud turtle",36:"terrapin",37:"box turtle, box tortoise",38:"banded gecko",39:"common iguana, iguana, Iguana iguana",40:"American chameleon, anole, Anolis carolinensis",41:"whiptail, whiptail lizard",42:"agama",43:"frilled lizard, Chlamydosaurus kingi",44:"alligator lizard",45:"Gila monster, Heloderma suspectum",46:"green lizard, Lacerta viridis",47:"African chameleon, Chamaeleo chamaeleon",48:"Komodo dragon, Komodo lizard, dragon lizard, giant lizard, Varanus komodoensis",49:"African crocodile, Nile crocodile, Crocodylus niloticus",50:"American alligator, Alligator mississipiensis",51:"triceratops",52:"thunder snake, worm snake, Carphophis amoenus",53:"ringneck snake, ring-necked snake, ring snake",54:"hognose snake, puff adder, sand viper",55:"green snake, grass snake",56:"king snake, kingsnake",57:"garter snake, grass snake",58:"water snake",59:"vine snake",60:"night snake, Hypsiglena torquata",61:"boa constrictor, Constrictor constrictor",62:"rock python, rock snake, Python sebae",63:"Indian cobra, Naja naja",64:"green mamba",65:"sea snake",66:"horned viper, cerastes, sand viper, horned asp, Cerastes cornutus",67:"diamondback, diamondback rattlesnake, Crotalus adamanteus",68:"sidewinder, horned rattlesnake, Crotalus cerastes",69:"trilobite",70:"harvestman, daddy longlegs, Phalangium opilio",71:"scorpion",72:"black and gold garden spider, Argiope aurantia",73:"barn spider, Araneus cavaticus",74:"garden spider, Aranea diademata",75:"black widow, Latrodectus mactans",76:"tarantula",77:"wolf spider, hunting spider",78:"tick",79:"centipede",80:"black grouse",81:"ptarmigan",82:"ruffed grouse, partridge, Bonasa umbellus",83:"prairie chicken, prairie grouse, prairie fowl",84:"peacock",85:"quail",86:"partridge",87:"African grey, African gray, Psittacus erithacus",88:"macaw",89:"sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita",90:"lorikeet",91:"coucal",92:"bee eater",93:"hornbill",94:"hummingbird",95:"jacamar",96:"toucan",97:"drake",98:"red-breasted merganser, Mergus serrator",99:"goose",100:"black swan, Cygnus atratus",101:"tusker",102:"echidna, spiny anteater, anteater",103:"platypus, duckbill, duckbilled platypus, duck-billed platypus, Ornithorhynchus anatinus",104:"wallaby, brush kangaroo",105:"koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus",106:"wombat",107:"jelly fish",108:"sea anemone, anemone",109:"brain coral",110:"flatworm, platyhelminth",111:"nematode, nematode worm, roundworm",112:"conch",113:"snail",114:"slug",115:"sea slug, nudibranch",116:"chiton, coat-of-mail shell, sea cradle, polyplacophore",117:"chambered nautilus, pearly nautilus, nautilus",118:"Dungeness crab, Cancer magister",119:"rock crab, Cancer irroratus",120:"fiddler crab",121:"king crab, Alaska crab, Alaskan king crab, Alaska king crab, Paralithodes camtschatica",122:"American lobster, Northern lobster, Maine lobster, Homarus americanus",123:"spiny lobster, langouste, rock lobster, crawfish, crayfish, sea crawfish",124:"crayfish, crawfish, crawdad, crawdaddy",125:"hermit crab",126:"isopod",127:"white stork, Ciconia ciconia",128:"black stork, Ciconia nigra",129:"spoonbill",130:"flamingo",131:"little blue heron, Egretta caerulea",132:"American egret, great white heron, Egretta albus",133:"bittern",134:"crane",135:"limpkin, Aramus pictus",136:"European gallinule, Porphyrio porphyrio",137:"American coot, marsh hen, mud hen, water hen, Fulica americana",138:"bustard",139:"ruddy turnstone, Arenaria interpres",140:"red-backed sandpiper, dunlin, Erolia alpina",141:"redshank, Tringa totanus",142:"dowitcher",143:"oystercatcher, oyster catcher",144:"pelican",145:"king penguin, Aptenodytes patagonica",146:"albatross, mollymawk",147:"grey whale, gray whale, devilfish, Eschrichtius gibbosus, Eschrichtius robustus",148:"killer whale, killer, orca, grampus, sea wolf, Orcinus orca",149:"dugong, Dugong dugon",150:"sea lion",151:"Chihuahua",152:"Japanese spaniel",153:"Maltese dog, Maltese terrier, Maltese",154:"Pekinese, Pekingese, Peke",155:"Shih-Tzu",156:"Blenheim spaniel",157:"papillon",158:"toy terrier",159:"Rhodesian ridgeback",160:"Afghan hound, Afghan",161:"basset, basset hound",162:"beagle",163:"bloodhound, sleuthhound",164:"bluetick",165:"black-and-tan coonhound",166:"Walker hound, Walker foxhound",167:"English foxhound",168:"redbone",169:"borzoi, Russian wolfhound",170:"Irish wolfhound",171:"Italian greyhound",172:"whippet",173:"Ibizan hound, Ibizan Podenco",174:"Norwegian elkhound, elkhound",175:"otterhound, otter hound",176:"Saluki, gazelle hound",177:"Scottish deerhound, deerhound",178:"Weimaraner",179:"Staffordshire bullterrier, Staffordshire bull terrier",180:"American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",181:"Bedlington terrier",182:"Border terrier",183:"Kerry blue terrier",184:"Irish terrier",185:"Norfolk terrier",186:"Norwich terrier",187:"Yorkshire terrier",188:"wire-haired fox terrier",189:"Lakeland terrier",190:"Sealyham terrier, Sealyham",191:"Airedale, Airedale terrier",192:"cairn, cairn terrier",193:"Australian terrier",194:"Dandie Dinmont, Dandie Dinmont terrier",195:"Boston bull, Boston terrier",196:"miniature schnauzer",197:"giant schnauzer",198:"standard schnauzer",199:"Scotch terrier, Scottish terrier, Scottie",200:"Tibetan terrier, chrysanthemum dog",201:"silky terrier, Sydney silky",202:"soft-coated wheaten terrier",203:"West Highland white terrier",204:"Lhasa, Lhasa apso",205:"flat-coated retriever",206:"curly-coated retriever",207:"golden retriever",208:"Labrador retriever",209:"Chesapeake Bay retriever",210:"German short-haired pointer",211:"vizsla, Hungarian pointer",212:"English setter",213:"Irish setter, red setter",214:"Gordon setter",215:"Brittany spaniel",216:"clumber, clumber spaniel",217:"English springer, English springer spaniel",218:"Welsh springer spaniel",219:"cocker spaniel, English cocker spaniel, cocker",220:"Sussex spaniel",221:"Irish water spaniel",222:"kuvasz",223:"schipperke",224:"groenendael",225:"malinois",226:"briard",227:"kelpie",228:"komondor",229:"Old English sheepdog, bobtail",230:"Shetland sheepdog, Shetland sheep dog, Shetland",231:"collie",232:"Border collie",233:"Bouvier des Flandres, Bouviers des Flandres",234:"Rottweiler",235:"German shepherd, German shepherd dog, German police dog, alsatian",236:"Doberman, Doberman pinscher",237:"miniature pinscher",238:"Greater Swiss Mountain dog",239:"Bernese mountain dog",240:"Appenzeller",241:"EntleBucher",242:"boxer",243:"bull mastiff",244:"Tibetan mastiff",245:"French bulldog",246:"Great Dane",247:"Saint Bernard, St Bernard",248:"Eskimo dog, husky",249:"malamute, malemute, Alaskan malamute",250:"Siberian husky",251:"dalmatian, coach dog, carriage dog",252:"affenpinscher, monkey pinscher, monkey dog",253:"basenji",254:"pug, pug-dog",255:"Leonberg",256:"Newfoundland, Newfoundland dog",257:"Great Pyrenees",258:"Samoyed, Samoyede",259:"Pomeranian",260:"chow, chow chow",261:"keeshond",262:"Brabancon griffon",263:"Pembroke, Pembroke Welsh corgi",264:"Cardigan, Cardigan Welsh corgi",265:"toy poodle",266:"miniature poodle",267:"standard poodle",268:"Mexican hairless",269:"timber wolf, grey wolf, gray wolf, Canis lupus",270:"white wolf, Arctic wolf, Canis lupus tundrarum",271:"red wolf, maned wolf, Canis rufus, Canis niger",272:"coyote, prairie wolf, brush wolf, Canis latrans",273:"dingo, warrigal, warragal, Canis dingo",274:"dhole, Cuon alpinus",275:"African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus",276:"hyena, hyaena",277:"red fox, Vulpes vulpes",278:"kit fox, Vulpes macrotis",279:"Arctic fox, white fox, Alopex lagopus",280:"grey fox, gray fox, Urocyon cinereoargenteus",281:"tabby, tabby cat",282:"tiger cat",283:"Persian cat",284:"Siamese cat, Siamese",285:"Egyptian cat",286:"cougar, puma, catamount, mountain lion, painter, panther, Felis concolor",287:"lynx, catamount",288:"leopard, Panthera pardus",289:"snow leopard, ounce, Panthera uncia",290:"jaguar, panther, Panthera onca, Felis onca",291:"lion, king of beasts, Panthera leo",292:"tiger, Panthera tigris",293:"cheetah, chetah, Acinonyx jubatus",294:"brown bear, bruin, Ursus arctos",295:"American black bear, black bear, Ursus americanus, Euarctos americanus",296:"ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus",297:"sloth bear, Melursus ursinus, Ursus ursinus",298:"mongoose",299:"meerkat, mierkat",300:"tiger beetle",301:"ladybug, ladybeetle, lady beetle, ladybird, ladybird beetle",302:"ground beetle, carabid beetle",303:"long-horned beetle, longicorn, longicorn beetle",304:"leaf beetle, chrysomelid",305:"dung beetle",306:"rhinoceros beetle",307:"weevil",308:"fly",309:"bee",310:"ant, emmet, pismire",311:"grasshopper, hopper",312:"cricket",313:"walking stick, walkingstick, stick insect",314:"cockroach, roach",315:"mantis, mantid",316:"cicada, cicala",317:"leafhopper",318:"lacewing, lacewing fly",319:"dragonfly, darning needle, devil's darning needle, sewing needle, snake feeder, snake doctor, mosquito hawk, skeeter hawk",320:"damselfly",321:"admiral",322:"ringlet, ringlet butterfly",323:"monarch, monarch butterfly, milkweed butterfly, Danaus plexippus",324:"cabbage butterfly",325:"sulphur butterfly, sulfur butterfly",326:"lycaenid, lycaenid butterfly",327:"starfish, sea star",328:"sea urchin",329:"sea cucumber, holothurian",330:"wood rabbit, cottontail, cottontail rabbit",331:"hare",332:"Angora, Angora rabbit",333:"hamster",334:"porcupine, hedgehog",335:"fox squirrel, eastern fox squirrel, Sciurus niger",336:"marmot",337:"beaver",338:"guinea pig, Cavia cobaya",339:"sorrel",340:"zebra",341:"hog, pig, grunter, squealer, Sus scrofa",342:"wild boar, boar, Sus scrofa",343:"warthog",344:"hippopotamus, hippo, river horse, Hippopotamus amphibius",345:"ox",346:"water buffalo, water ox, Asiatic buffalo, Bubalus bubalis",347:"bison",348:"ram, tup",349:"bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky Mountain sheep, Ovis canadensis",350:"ibex, Capra ibex",351:"hartebeest",352:"impala, Aepyceros melampus",353:"gazelle",354:"Arabian camel, dromedary, Camelus dromedarius",355:"llama",356:"weasel",357:"mink",358:"polecat, fitch, foulmart, foumart, Mustela putorius",359:"black-footed ferret, ferret, Mustela nigripes",360:"otter",361:"skunk, polecat, wood pussy",362:"badger",363:"armadillo",364:"three-toed sloth, ai, Bradypus tridactylus",365:"orangutan, orang, orangutang, Pongo pygmaeus",366:"gorilla, Gorilla gorilla",367:"chimpanzee, chimp, Pan troglodytes",368:"gibbon, Hylobates lar",369:"siamang, Hylobates syndactylus, Symphalangus syndactylus",370:"guenon, guenon monkey",371:"patas, hussar monkey, Erythrocebus patas",372:"baboon",373:"macaque",374:"langur",375:"colobus, colobus monkey",376:"proboscis monkey, Nasalis larvatus",377:"marmoset",378:"capuchin, ringtail, Cebus capucinus",379:"howler monkey, howler",380:"titi, titi monkey",381:"spider monkey, Ateles geoffroyi",382:"squirrel monkey, Saimiri sciureus",383:"Madagascar cat, ring-tailed lemur, Lemur catta",384:"indri, indris, Indri indri, Indri brevicaudatus",385:"Indian elephant, Elephas maximus",386:"African elephant, Loxodonta africana",387:"lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens",388:"giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca",389:"barracouta, snoek",390:"eel",391:"coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus kisutch",392:"rock beauty, Holocanthus tricolor",393:"anemone fish",394:"sturgeon",395:"gar, garfish, garpike, billfish, Lepisosteus osseus",396:"lionfish",397:"puffer, pufferfish, blowfish, globefish",398:"abacus",399:"abaya",400:"academic gown, academic robe, judge's robe",401:"accordion, piano accordion, squeeze box",402:"acoustic guitar",403:"aircraft carrier, carrier, flattop, attack aircraft carrier",404:"airliner",405:"airship, dirigible",406:"altar",407:"ambulance",408:"amphibian, amphibious vehicle",409:"analog clock",410:"apiary, bee house",411:"apron",412:"ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin",413:"assault rifle, assault gun",414:"backpack, back pack, knapsack, packsack, rucksack, haversack",415:"bakery, bakeshop, bakehouse",416:"balance beam, beam",417:"balloon",418:"ballpoint, ballpoint pen, ballpen, Biro",419:"Band Aid",420:"banjo",421:"bannister, banister, balustrade, balusters, handrail",422:"barbell",423:"barber chair",424:"barbershop",425:"barn",426:"barometer",427:"barrel, cask",428:"barrow, garden cart, lawn cart, wheelbarrow",429:"baseball",430:"basketball",431:"bassinet",432:"bassoon",433:"bathing cap, swimming cap",434:"bath towel",435:"bathtub, bathing tub, bath, tub",436:"beach wagon, station wagon, wagon, estate car, beach waggon, station waggon, waggon",437:"beacon, lighthouse, beacon light, pharos",438:"beaker",439:"bearskin, busby, shako",440:"beer bottle",441:"beer glass",442:"bell cote, bell cot",443:"bib",444:"bicycle-built-for-two, tandem bicycle, tandem",445:"bikini, two-piece",446:"binder, ring-binder",447:"binoculars, field glasses, opera glasses",448:"birdhouse",449:"boathouse",450:"bobsled, bobsleigh, bob",451:"bolo tie, bolo, bola tie, bola",452:"bonnet, poke bonnet",453:"bookcase",454:"bookshop, bookstore, bookstall",455:"bottlecap",456:"bow",457:"bow tie, bow-tie, bowtie",458:"brass, memorial tablet, plaque",459:"brassiere, bra, bandeau",460:"breakwater, groin, groyne, mole, bulwark, seawall, jetty",461:"breastplate, aegis, egis",462:"broom",463:"bucket, pail",464:"buckle",465:"bulletproof vest",466:"bullet train, bullet",467:"butcher shop, meat market",468:"cab, hack, taxi, taxicab",469:"caldron, cauldron",470:"candle, taper, wax light",471:"cannon",472:"canoe",473:"can opener, tin opener",474:"cardigan",475:"car mirror",476:"carousel, carrousel, merry-go-round, roundabout, whirligig",477:"carpenter's kit, tool kit",478:"carton",479:"car wheel",480:"cash machine, cash dispenser, automated teller machine, automatic teller machine, automated teller, automatic teller, ATM",481:"cassette",482:"cassette player",483:"castle",484:"catamaran",485:"CD player",486:"cello, violoncello",487:"cellular telephone, cellular phone, cellphone, cell, mobile phone",488:"chain",489:"chainlink fence",490:"chain mail, ring mail, mail, chain armor, chain armour, ring armor, ring armour",491:"chain saw, chainsaw",492:"chest",493:"chiffonier, commode",494:"chime, bell, gong",495:"china cabinet, china closet",496:"Christmas stocking",497:"church, church building",498:"cinema, movie theater, movie theatre, movie house, picture palace",499:"cleaver, meat cleaver, chopper",500:"cliff dwelling",501:"cloak",502:"clog, geta, patten, sabot",503:"cocktail shaker",504:"coffee mug",505:"coffeepot",506:"coil, spiral, volute, whorl, helix",507:"combination lock",508:"computer keyboard, keypad",509:"confectionery, confectionary, candy store",510:"container ship, containership, container vessel",511:"convertible",512:"corkscrew, bottle screw",513:"cornet, horn, trumpet, trump",514:"cowboy boot",515:"cowboy hat, ten-gallon hat",516:"cradle",517:"crane",518:"crash helmet",519:"crate",520:"crib, cot",521:"Crock Pot",522:"croquet ball",523:"crutch",524:"cuirass",525:"dam, dike, dyke",526:"desk",527:"desktop computer",528:"dial telephone, dial phone",529:"diaper, nappy, napkin",530:"digital clock",531:"digital watch",532:"dining table, board",533:"dishrag, dishcloth",534:"dishwasher, dish washer, dishwashing machine",535:"disk brake, disc brake",536:"dock, dockage, docking facility",537:"dogsled, dog sled, dog sleigh",538:"dome",539:"doormat, welcome mat",540:"drilling platform, offshore rig",541:"drum, membranophone, tympan",542:"drumstick",543:"dumbbell",544:"Dutch oven",545:"electric fan, blower",546:"electric guitar",547:"electric locomotive",548:"entertainment center",549:"envelope",550:"espresso maker",551:"face powder",552:"feather boa, boa",553:"file, file cabinet, filing cabinet",554:"fireboat",555:"fire engine, fire truck",556:"fire screen, fireguard",557:"flagpole, flagstaff",558:"flute, transverse flute",559:"folding chair",560:"football helmet",561:"forklift",562:"fountain",563:"fountain pen",564:"four-poster",565:"freight car",566:"French horn, horn",567:"frying pan, frypan, skillet",568:"fur coat",569:"garbage truck, dustcart",570:"gasmask, respirator, gas helmet",571:"gas pump, gasoline pump, petrol pump, island dispenser",572:"goblet",573:"go-kart",574:"golf ball",575:"golfcart, golf cart",576:"gondola",577:"gong, tam-tam",578:"gown",579:"grand piano, grand",580:"greenhouse, nursery, glasshouse",581:"grille, radiator grille",582:"grocery store, grocery, food market, market",583:"guillotine",584:"hair slide",585:"hair spray",586:"half track",587:"hammer",588:"hamper",589:"hand blower, blow dryer, blow drier, hair dryer, hair drier",590:"hand-held computer, hand-held microcomputer",591:"handkerchief, hankie, hanky, hankey",592:"hard disc, hard disk, fixed disk",593:"harmonica, mouth organ, harp, mouth harp",594:"harp",595:"harvester, reaper",596:"hatchet",597:"holster",598:"home theater, home theatre",599:"honeycomb",600:"hook, claw",601:"hoopskirt, crinoline",602:"horizontal bar, high bar",603:"horse cart, horse-cart",604:"hourglass",605:"iPod",606:"iron, smoothing iron",607:"jack-o'-lantern",608:"jean, blue jean, denim",609:"jeep, landrover",610:"jersey, T-shirt, tee shirt",611:"jigsaw puzzle",612:"jinrikisha, ricksha, rickshaw",613:"joystick",614:"kimono",615:"knee pad",616:"knot",617:"lab coat, laboratory coat",618:"ladle",619:"lampshade, lamp shade",620:"laptop, laptop computer",621:"lawn mower, mower",622:"lens cap, lens cover",623:"letter opener, paper knife, paperknife",624:"library",625:"lifeboat",626:"lighter, light, igniter, ignitor",627:"limousine, limo",628:"liner, ocean liner",629:"lipstick, lip rouge",630:"Loafer",631:"lotion",632:"loudspeaker, speaker, speaker unit, loudspeaker system, speaker system",633:"loupe, jeweler's loupe",634:"lumbermill, sawmill",635:"magnetic compass",636:"mailbag, postbag",637:"mailbox, letter box",638:"maillot",639:"maillot, tank suit",640:"manhole cover",641:"maraca",642:"marimba, xylophone",643:"mask",644:"matchstick",645:"maypole",646:"maze, labyrinth",647:"measuring cup",648:"medicine chest, medicine cabinet",649:"megalith, megalithic structure",650:"microphone, mike",651:"microwave, microwave oven",652:"military uniform",653:"milk can",654:"minibus",655:"miniskirt, mini",656:"minivan",657:"missile",658:"mitten",659:"mixing bowl",660:"mobile home, manufactured home",661:"Model T",662:"modem",663:"monastery",664:"monitor",665:"moped",666:"mortar",667:"mortarboard",668:"mosque",669:"mosquito net",670:"motor scooter, scooter",671:"mountain bike, all-terrain bike, off-roader",672:"mountain tent",673:"mouse, computer mouse",674:"mousetrap",675:"moving van",676:"muzzle",677:"nail",678:"neck brace",679:"necklace",680:"nipple",681:"notebook, notebook computer",682:"obelisk",683:"oboe, hautboy, hautbois",684:"ocarina, sweet potato",685:"odometer, hodometer, mileometer, milometer",686:"oil filter",687:"organ, pipe organ",688:"oscilloscope, scope, cathode-ray oscilloscope, CRO",689:"overskirt",690:"oxcart",691:"oxygen mask",692:"packet",693:"paddle, boat paddle",694:"paddlewheel, paddle wheel",695:"padlock",696:"paintbrush",697:"pajama, pyjama, pj's, jammies",698:"palace",699:"panpipe, pandean pipe, syrinx",700:"paper towel",701:"parachute, chute",702:"parallel bars, bars",703:"park bench",704:"parking meter",705:"passenger car, coach, carriage",706:"patio, terrace",707:"pay-phone, pay-station",708:"pedestal, plinth, footstall",709:"pencil box, pencil case",710:"pencil sharpener",711:"perfume, essence",712:"Petri dish",713:"photocopier",714:"pick, plectrum, plectron",715:"pickelhaube",716:"picket fence, paling",717:"pickup, pickup truck",718:"pier",719:"piggy bank, penny bank",720:"pill bottle",721:"pillow",722:"ping-pong ball",723:"pinwheel",724:"pirate, pirate ship",725:"pitcher, ewer",726:"plane, carpenter's plane, woodworking plane",727:"planetarium",728:"plastic bag",729:"plate rack",730:"plow, plough",731:"plunger, plumber's helper",732:"Polaroid camera, Polaroid Land camera",733:"pole",734:"police van, police wagon, paddy wagon, patrol wagon, wagon, black Maria",735:"poncho",736:"pool table, billiard table, snooker table",737:"pop bottle, soda bottle",738:"pot, flowerpot",739:"potter's wheel",740:"power drill",741:"prayer rug, prayer mat",742:"printer",743:"prison, prison house",744:"projectile, missile",745:"projector",746:"puck, hockey puck",747:"punching bag, punch bag, punching ball, punchball",748:"purse",749:"quill, quill pen",750:"quilt, comforter, comfort, puff",751:"racer, race car, racing car",752:"racket, racquet",753:"radiator",754:"radio, wireless",755:"radio telescope, radio reflector",756:"rain barrel",757:"recreational vehicle, RV, R.V.",758:"reel",759:"reflex camera",760:"refrigerator, icebox",761:"remote control, remote",762:"restaurant, eating house, eating place, eatery",763:"revolver, six-gun, six-shooter",764:"rifle",765:"rocking chair, rocker",766:"rotisserie",767:"rubber eraser, rubber, pencil eraser",768:"rugby ball",769:"rule, ruler",770:"running shoe",771:"safe",772:"safety pin",773:"saltshaker, salt shaker",774:"sandal",775:"sarong",776:"sax, saxophone",777:"scabbard",778:"scale, weighing machine",779:"school bus",780:"schooner",781:"scoreboard",782:"screen, CRT screen",783:"screw",784:"screwdriver",785:"seat belt, seatbelt",786:"sewing machine",787:"shield, buckler",788:"shoe shop, shoe-shop, shoe store",789:"shoji",790:"shopping basket",791:"shopping cart",792:"shovel",793:"shower cap",794:"shower curtain",795:"ski",796:"ski mask",797:"sleeping bag",798:"slide rule, slipstick",799:"sliding door",800:"slot, one-armed bandit",801:"snorkel",802:"snowmobile",803:"snowplow, snowplough",804:"soap dispenser",805:"soccer ball",806:"sock",807:"solar dish, solar collector, solar furnace",808:"sombrero",809:"soup bowl",810:"space bar",811:"space heater",812:"space shuttle",813:"spatula",814:"speedboat",815:"spider web, spider's web",816:"spindle",817:"sports car, sport car",818:"spotlight, spot",819:"stage",820:"steam locomotive",821:"steel arch bridge",822:"steel drum",823:"stethoscope",824:"stole",825:"stone wall",826:"stopwatch, stop watch",827:"stove",828:"strainer",829:"streetcar, tram, tramcar, trolley, trolley car",830:"stretcher",831:"studio couch, day bed",832:"stupa, tope",833:"submarine, pigboat, sub, U-boat",834:"suit, suit of clothes",835:"sundial",836:"sunglass",837:"sunglasses, dark glasses, shades",838:"sunscreen, sunblock, sun blocker",839:"suspension bridge",840:"swab, swob, mop",841:"sweatshirt",842:"swimming trunks, bathing trunks",843:"swing",844:"switch, electric switch, electrical switch",845:"syringe",846:"table lamp",847:"tank, army tank, armored combat vehicle, armoured combat vehicle",848:"tape player",849:"teapot",850:"teddy, teddy bear",851:"television, television system",852:"tennis ball",853:"thatch, thatched roof",854:"theater curtain, theatre curtain",855:"thimble",856:"thresher, thrasher, threshing machine",857:"throne",858:"tile roof",859:"toaster",860:"tobacco shop, tobacconist shop, tobacconist",861:"toilet seat",862:"torch",863:"totem pole",864:"tow truck, tow car, wrecker",865:"toyshop",866:"tractor",867:"trailer truck, tractor trailer, trucking rig, rig, articulated lorry, semi",868:"tray",869:"trench coat",870:"tricycle, trike, velocipede",871:"trimaran",872:"tripod",873:"triumphal arch",874:"trolleybus, trolley coach, trackless trolley",875:"trombone",876:"tub, vat",877:"turnstile",878:"typewriter keyboard",879:"umbrella",880:"unicycle, monocycle",881:"upright, upright piano",882:"vacuum, vacuum cleaner",883:"vase",884:"vault",885:"velvet",886:"vending machine",887:"vestment",888:"viaduct",889:"violin, fiddle",890:"volleyball",891:"waffle iron",892:"wall clock",893:"wallet, billfold, notecase, pocketbook",894:"wardrobe, closet, press",895:"warplane, military plane",896:"washbasin, handbasin, washbowl, lavabo, wash-hand basin",897:"washer, automatic washer, washing machine",898:"water bottle",899:"water jug",900:"water tower",901:"whiskey jug",902:"whistle",903:"wig",904:"window screen",905:"window shade",906:"Windsor tie",907:"wine bottle",908:"wing",909:"wok",910:"wooden spoon",911:"wool, woolen, woollen",912:"worm fence, snake fence, snake-rail fence, Virginia fence",913:"wreck",914:"yawl",915:"yurt",916:"web site, website, internet site, site",917:"comic book",918:"crossword puzzle, crossword",919:"street sign",920:"traffic light, traffic signal, stoplight",921:"book jacket, dust cover, dust jacket, dust wrapper",922:"menu",923:"plate",924:"guacamole",925:"consomme",926:"hot pot, hotpot",927:"trifle",928:"ice cream, icecream",929:"ice lolly, lolly, lollipop, popsicle",930:"French loaf",931:"bagel, beigel",932:"pretzel",933:"cheeseburger",934:"hotdog, hot dog, red hot",935:"mashed potato",936:"head cabbage",937:"broccoli",938:"cauliflower",939:"zucchini, courgette",940:"spaghetti squash",941:"acorn squash",942:"butternut squash",943:"cucumber, cuke",944:"artichoke, globe artichoke",945:"bell pepper",946:"cardoon",947:"mushroom",948:"Granny Smith",949:"strawberry",950:"orange",951:"lemon",952:"fig",953:"pineapple, ananas",954:"banana",955:"jackfruit, jak, jack",956:"custard apple",957:"pomegranate",958:"hay",959:"carbonara",960:"chocolate sauce, chocolate syrup",961:"dough",962:"meat loaf, meatloaf",963:"pizza, pizza pie",964:"potpie",965:"burrito",966:"red wine",967:"espresso",968:"cup",969:"eggnog",970:"alp",971:"bubble",972:"cliff, drop, drop-off",973:"coral reef",974:"geyser",975:"lakeside, lakeshore",976:"promontory, headland, head, foreland",977:"sandbar, sand bar",978:"seashore, coast, seacoast, sea-coast",979:"valley, vale",980:"volcano",981:"ballplayer, baseball player",982:"groom, bridegroom",983:"scuba diver",984:"rapeseed",985:"daisy",986:"yellow lady's slipper, yellow lady-slipper, Cypripedium calceolus, Cypripedium parviflorum",987:"corn",988:"acorn",989:"hip, rose hip, rosehip",990:"buckeye, horse chestnut, conker",991:"coral fungus",992:"agaric",993:"gyromitra",994:"stinkhorn, carrion fungus",995:"earthstar",996:"hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola frondosa",997:"bolete",998:"ear, spike, capitulum",999:"toilet tissue, toilet paper, bathroom tissue"},ms=224,hF={"1.00":"module_apply_default/MobilenetV1/Logits/global_pool","2.00":"module_apply_default/MobilenetV2/Logits/AvgPool"},hi={"1.00":{.25:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_025_224/classification/1",inputRange:[0,1]},"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_050_224/classification/1",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_075_224/classification/1",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_100_224/classification/1",inputRange:[0,1]}},"2.00":{"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_050_224/classification/2",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_075_224/classification/2",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2",inputRange:[0,1]}}};function pF(n){return n===void 0&&(n={version:1,alpha:1}),Cc(this,void 0,void 0,function(){var e,t,a,r,o,l,c;return Nc(this,function(f){switch(f.label){case 0:if(B4==null)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");if(e=n.version.toFixed(2),t=n.alpha?n.alpha.toFixed(2):"",a=-1,r=1,n.modelUrl==null){if(!(e in hi))throw new Error("Invalid version of MobileNet. Valid versions are: "+Object.keys(hi));if(!(t in hi[e]))throw new Error("MobileNet constructed with invalid alpha "+n.alpha+". Valid multipliers for this version are: "+Object.keys(hi[e])+".");l=hi[e][t].inputRange,a=l[0],r=l[1]}return n.inputRange!=null&&(c=n.inputRange,a=c[0],r=c[1]),[4,(o=new mF(e,t,n.modelUrl,a,r)).load()];case 1:return f.sent(),[2,o]}})})}var mF=(function(){function n(e,t,a,r,o){r===void 0&&(r=-1),o===void 0&&(o=1),this.version=e,this.alpha=t,this.modelUrl=a,this.inputMin=r,this.inputMax=o,this.normalizationConstant=(o-r)/255}return n.prototype.load=function(){return Cc(this,void 0,void 0,function(){var e,t,a,r,o=this;return Nc(this,function(l){switch(l.label){case 0:return this.modelUrl?(e=this,[4,x2(this.modelUrl)]):[3,2];case 1:return e.model=l.sent(),[3,4];case 2:return t=hi[this.version][this.alpha].url,a=this,[4,x2(t,{fromTFHub:!0})];case 3:a.model=l.sent(),l.label=4;case 4:return[4,(r=De(function(){return o.model.predict(Va([1,ms,ms,3]))})).data()];case 5:return l.sent(),r.dispose(),[2]}})})},n.prototype.infer=function(e,t){var a=this;return t===void 0&&(t=!1),De(function(){e instanceof St||(e=C4(e));var r=we(ue(rt(e,"float32"),a.normalizationConstant),a.inputMin),o=r;(e.shape[0]!==ms||e.shape[1]!==ms)&&(o=u0.resizeBilinear(r,[ms,ms],!0));var l,c=te(o,[-1,ms,ms,3]);if(t){var f=hF[a.version],d=a.model.execute(c,f);l=yl(d,[1,2])}else{var p=a.model.predict(c);l=He(p,[0,1],[-1,1e3])}return l})},n.prototype.classify=function(e,t){return t===void 0&&(t=3),Cc(this,void 0,void 0,function(){var a,r;return Nc(this,function(o){switch(o.label){case 0:return[4,gF(a=this.infer(e),t)];case 1:return r=o.sent(),a.dispose(),[2,r]}})})},n})();function gF(n,e){return Cc(this,void 0,void 0,function(){var t,a,r,o,l,c,f;return Nc(this,function(d){switch(d.label){case 0:return[4,(t=e0(n)).data()];case 1:for(a=d.sent(),t.dispose(),r=[],f=0;f<a.length;f++)r.push({value:a[f],index:f});for(r.sort(function(p,m){return m.value-p.value}),o=new Float32Array(e),l=new Int32Array(e),f=0;f<e;f++)o[f]=r[f].value,l[f]=r[f].index;for(c=[],f=0;f<l.length;f++)c.push({className:dF[l[f]],probability:o[f]});return[2,c]}})})}const rr={},Hu={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function yF(n,e){rr[n]=e}function na(n,e){if(!(n in rr)||e!=null){const a=xF(n,e);if(a!==null)rr[n]=a;else return console.log("Could not get context for WebGL version",n),null}const t=rr[n];return t==null||t.isContextLost()?(delete rr[n],na(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),rr[n])}function bF(n){if(!q().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function xF(n,e){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const t=e??bF(n);return t.addEventListener("webglcontextlost",a=>{a.preventDefault(),delete rr[n]},!1),q().getBool("SOFTWARE_WEBGL_ENABLED")&&(Hu.failIfMajorPerformanceCaveat=!1),n===1?t.getContext("webgl",Hu)||t.getContext("experimental-webgl",Hu):t.getContext("webgl2",Hu)}var al;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(al||(al={}));var xn;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(xn||(xn={}));var Ct;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Ct||(Ct={}));function bl(n,e){return[e,n]}function vF(n,e){return n*e}function Wu(n){const e=se(n),t=Math.ceil(e/4);return Gh(t)}function Bi(n,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(n/2))]}function wF(n,e){const[t,a]=Bi(n,e);return t*a*4}function x0(n,e){const t=n;let a,r,o,l,c,f,d,p,m,y;return q().getNumber("WEBGL_VERSION")===2?(a=t.R32F,r=t.R16F,o=t.RGBA16F,l=t.RGBA32F,c=t.RED,d=4,p=1,m=t.HALF_FLOAT,y=t.FLOAT,f=t.RGBA8):(a=n.RGBA,r=n.RGBA,o=n.RGBA,l=t.RGBA,c=n.RGBA,d=4,p=4,m=e!=null?e.HALF_FLOAT_OES:null,y=n.FLOAT,f=n.RGBA),{internalFormatFloat:a,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:l,textureFormatFloat:c,downloadTextureFormat:f,downloadUnpackNumChannels:d,defaultNumChannels:p,textureTypeHalfFloat:m,textureTypeFloat:y}}function ce(n,e){const t=e();return q().getBool("DEBUG")&&SF(n),t}function SF(n){const e=n.getError();if(e!==n.NO_ERROR)throw new Error("WebGL Error: "+$F(n,e))}const TF=596e-10,CF=65504;function NF(n){return!!(q().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||TF<Math.abs(n)&&Math.abs(n)<CF)}function $F(n,e){switch(e){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function qu(n,e){return Pa(n,()=>n.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function EF(n,e){const t=Pa(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(ce(n,()=>n.shaderSource(t,e)),ce(n,()=>n.compileShader(t)),n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function kF(n,e){const t=Pa(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(ce(n,()=>n.shaderSource(t,e)),ce(n,()=>n.compileShader(t)),q().get("ENGINE_COMPILE_ONLY"))return t;if(n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw pN(e,n.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}const RF=/ERROR: [0-9]+:([0-9]+):/g;function pN(n,e){const t=RF.exec(e);if(t==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(n);return}const a=+t[1],r=n.split(`
`),o=r.length.toString().length+2,l=r.map((m,y)=>pi((y+1).toString(),o)+m);let c=0;for(let m=0;m<l.length;m++)c=Math.max(l[m].length,c);const f=l.slice(0,a-1),d=l.slice(a-1,a),p=l.slice(a);console.log(f.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${pi(d[0],c)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(p.join(`
`))}function _F(n){return Pa(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function AF(n,e){if(ce(n,()=>n.linkProgram(e)),!q().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Bh(n,e){if(ce(n,()=>n.validateProgram(e)),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function OF(n,e){const t=Pa(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ce(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),ce(n,()=>n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function IF(n,e){const t=Pa(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ce(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t)),ce(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function DF(n){return Pa(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function LF(n,e){const t=q().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||e<=0){const a=`[${n}x${e}]`;throw new Error("Requested texture size "+a+" is invalid.")}if(n>t||e>t){const a=`[${n}x${e}]`,r=`[${t}x${t}]`;throw new Error("Requested texture size "+a+" greater than WebGL maximum on this browser / GPU "+r+".")}}function FF(n){return Pa(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function v2(n,e,t,a,r,o,l){const c=n.getAttribLocation(e,t);return c===-1?!1:(ce(n,()=>n.bindBuffer(n.ARRAY_BUFFER,a)),ce(n,()=>n.vertexAttribPointer(c,r,n.FLOAT,!1,o,l)),ce(n,()=>n.enableVertexAttribArray(c)),!0)}function BF(n,e,t){PF(n,t),ce(n,()=>n.activeTexture(n.TEXTURE0+t)),ce(n,()=>n.bindTexture(n.TEXTURE_2D,e))}function zF(n,e,t){return Pa(n,()=>n.getUniformLocation(e,t),'uniform "'+t+'" not present in program.')}function UF(n,e,t){return n.getUniformLocation(e,t)}function VF(n,e,t,a){ce(n,()=>BF(n,e,a)),ce(n,()=>n.uniform1i(t,a))}function zh(n,e,t){ce(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),ce(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0))}function w2(n,e){ce(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),ce(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function ju(n){const e=n.checkFramebufferStatus(n.FRAMEBUFFER);if(e!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+MF(n,e))}function MF(n,e){switch(e){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function Pa(n,e,t){const a=ce(n,()=>e());if(a==null)throw new Error(t);return a}function PF(n,e){const t=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,a=e+n.TEXTURE0;if(a<n.TEXTURE0||a>t){const r=`[gl.TEXTURE0, gl.TEXTURE${t}]`;throw new Error(`textureUnit must be in ${r}.`)}}function Ri(n,e=2){return se(n.slice(0,n.length-e))}function _i(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function Xu(n){let e=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(e=[Ri(n),..._i(n)]),e}function GF(n,e=!1){let t=q().getNumber("WEBGL_MAX_TEXTURE_SIZE"),a=q().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");a===1/0&&q().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(a=t/2),e&&(t=t*2,a=a*2,n=n.map((c,f)=>f>=n.length-2?kp(n[f]):n[f]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Es(n).newShape);let r=se(n),o=null;n.length<=1&&r<=t?o=[1,r]:n.length===2&&n[0]<=t&&n[1]<=t?o=n:n.length===3&&n[0]*n[1]<=t&&n[2]<=t?o=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=t&&n[1]*n[2]<=t?o=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=t&&n[3]<=t?o=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=t&&n[1]*n[2]*n[3]<=t&&(o=[n[0],n[1]*n[2]*n[3]]);const l=o!=null&&Math.max(...o)>a&&Math.min(...o)<=(e?2:1)&&Math.min(...o)>0;if(o==null||l)if(e){const c=Ri(n);let f=2,d=2;n.length&&([f,d]=_i(n)),r=c*(f/2)*(d/2),o=Gh(r).map(p=>p*2)}else o=Gh(r);return o}function Ku(n){return n%2===0}function $c(n,e){if(n=n.slice(-2),e=e.slice(-2),st(n,e)||!n.length||!e.length||n[0]===0||n[1]===0||e[0]===0||e[1]===0)return!0;if(n.length!==e.length){const t=n[n.length-1],a=e[e.length-1];if(t===a||Ku(t)&&Ku(a)&&(n[0]===1||e[0]===1))return!0}return n[1]===e[1]&&Ku(n[0])&&Ku(e[0])}let Uh,Vh;function HF(n){if(Uh==null){const e=na(n);Uh=e.getParameter(e.MAX_TEXTURE_SIZE)}return Uh}function WF(n){if(Vh==null){const e=na(n);Vh=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Vh)}function qF(n){if(n===0)return 0;let e;const t=na(n);return Bn(t,"EXT_disjoint_timer_query_webgl2")&&n===2?e=2:Bn(t,"EXT_disjoint_timer_query")?e=1:e=0,e}function Bn(n,e){return n.getExtension(e)!=null}function S2(n){try{if(na(n)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function jF(n){if(n===0)return!1;const e=na(n);if(n===1){if(!Bn(e,"OES_texture_float"))return!1}else if(!Bn(e,"EXT_color_buffer_float"))return!1;return Sp(e)}function XF(n){if(n===0)return!1;const e=na(n);if(n===1){if(!Bn(e,"OES_texture_float")||!Bn(e,"WEBGL_color_buffer_float"))return!1}else{if(Bn(e,"EXT_color_buffer_float"))return Sp(e);const a="EXT_color_buffer_half_float";if(Bn(e,a)){const r=e.getExtension(a);return KF(e,r)}return!1}return Sp(e)}function Sp(n){const e=x0(n),t=n.createTexture();n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);const o=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,o),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0);const l=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(t),n.deleteFramebuffer(o),l}function KF(n,e){const t=x0(n,e),a=n.createTexture();n.bindTexture(n.TEXTURE_2D,a),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatHalfFloat,1,1,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);const l=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,l),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a,0);const c=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(a),n.deleteFramebuffer(l),c}function YF(n){return n!==2?!1:na(n).fenceSync!=null}function xl(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&_(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}const me=q();me.registerFlag("HAS_WEBGL",()=>me.getNumber("WEBGL_VERSION")>0);me.registerFlag("WEBGL_VERSION",()=>S2(2)?2:S2(1)?1:0);me.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);me.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>me.get("WEBGL_VERSION")===2);me.registerFlag("WEBGL_CPU_FORWARD",()=>!0);me.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);me.registerFlag("WEBGL_PACK",()=>me.getBool("HAS_WEBGL"));me.registerFlag("WEBGL_PACK_NORMALIZATION",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_PACK_CLIP",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_PACK_REDUCE",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_LAZILY_UNPACK",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_CONV_IM2COL",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>me.getBool("WEBGL_PACK"));me.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>HF(me.getNumber("WEBGL_VERSION")));me.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>WF(me.getNumber("WEBGL_VERSION")));me.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=me.getNumber("WEBGL_VERSION");return n===0?0:qF(n)});me.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>me.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!kw());me.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>jF(me.getNumber("WEBGL_VERSION")));me.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>me.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:me.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));me.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>XF(me.getNumber("WEBGL_VERSION")));me.registerFlag("WEBGL_FENCE_API_ENABLED",()=>YF(me.getNumber("WEBGL_VERSION")));me.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>me.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);me.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});me.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>kw()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});me.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);me.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);me.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);me.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);me.registerFlag("WEBGL_EXP_CONV",()=>!1);me.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>me.getBool("IS_TEST"));me.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);me.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);me.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);me.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function Gt(){let n,e,t,a,r,o,l,c,f,d;return q().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",e="in",t="out",a="in",r="texture",o="outputColor",l="out vec4 outputColor;",c=q().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",f="",d=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",e="attribute",t="varying",a="varying",r="texture2D",o="gl_FragColor",l="",c=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,f=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,d=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:e,varyingVs:t,varyingFs:a,texture2D:r,output:o,defineOutput:l,defineSpecialNaN:c,defineSpecialInf:f,defineRound:d}}function Sr(n,e,t="index"){const a=Nt(e);return a.map((r,o)=>{const l=`int ${n[o]} = ${t} / ${r}`,c=o===a.length-1?`int ${n[o+1]} = ${t} - ${n[o]} * ${r}`:`index -= ${n[o]} * ${r}`;return`${l}; ${c};`}).join("")}function Zc(n,e,t="index"){const a=Nt(e);return a.map((r,o)=>{const l=`int ${n[o]} = ${t} / outShapeStrides[${o}]`,c=o===a.length-1?`int ${n[o+1]} = ${t} - ${n[o]} * outShapeStrides[${o}]`:`index -= ${n[o]} * outShapeStrides[${o}]`;return`${l}; ${c};`}).join("")}function QF(n,e){const t=n.length,a=n.map(o=>`${e}[${o}]`),r=new Array(t-1);r[t-2]=a[t-1];for(let o=t-3;o>=0;--o)r[o]=`(${r[o+1]} * ${a[o+1]})`;return r}function ZF(n,e,t="index"){const a=n.map((o,l)=>l),r=QF(a,e);return r.map((o,l)=>{const c=`int ${n[l]} = ${t} / ${r[l]}`,f=l===r.length-1?`int ${n[l+1]} = ${t} - ${n[l]} * ${r[l]}`:`index -= ${n[l]} * ${r[l]}`;return`${c}; ${f};`}).join("")}function v0(n){const e=Nt(n).map(t=>t.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function w0(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const mN=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;const{getBroadcastDims:gN}=cN;function JF(n,e,t){const a=[];if(n.forEach(x=>{const v=se(x.shapeInfo.logicalShape);if(x.shapeInfo.isUniform?a.push(`uniform float ${x.name}${v>1?`[${v}]`:""};`):(a.push(`uniform sampler2D ${x.name};`),a.push(`uniform int offset${x.name};`)),t.enableShapeUniforms){const{uniformShape:S}=S0(t.packedInputs,x.shapeInfo.logicalShape,x.shapeInfo.texShape);switch(S.length){case 1:a.push(`uniform int ${x.name}Shape;`);break;case 2:a.push(`uniform ivec2 ${x.name}Shape;`);break;case 3:a.push(`uniform ivec3 ${x.name}Shape;`);break;case 4:a.push(`uniform ivec4 ${x.name}Shape;`);break}a.push(`uniform ivec2 ${x.name}TexShape;`)}}),t.enableShapeUniforms){switch(e.logicalShape.length){case 1:a.push("uniform int outShape;");break;case 2:a.push("uniform ivec2 outShape;"),a.push("uniform int outShapeStrides;");break;case 3:a.push("uniform ivec3 outShape;"),a.push("uniform ivec2 outShapeStrides;");break;case 4:a.push("uniform ivec4 outShape;"),a.push("uniform ivec3 outShapeStrides;");break}a.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach(x=>{a.push(`uniform ${x.type} ${x.name}${x.arrayIndex?`[${x.arrayIndex}]`:""};`)});const r=a.join(`
`),o=n.map(x=>eB(x,e,t.packedInputs,t.enableShapeUniforms)).join(`
`),l=e.texShape,c=Gt(),f=aB(c);let d,p,m=iB(c);return e.isPacked?(d=tB(e.logicalShape,l,t.enableShapeUniforms),p=rB(c)):(d=nB(e.logicalShape,l,t.enableShapeUniforms),p=sB(c)),t.packedInputs&&(m+=cB),[m,f,p,r,d,o,t.userCode].join(`
`)}function zi(n,e=!1){const t=n.shapeInfo.logicalShape;switch(t.length){case 0:return SB(n,e);case 1:return CB(n,e);case 2:return $B(n,e);case 3:return kB(n,e);case 4:return _B(n,e);case 5:return AB(n);case 6:return OB(n);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function yN(n,e){switch(n.shapeInfo.logicalShape.length){case 0:return wB(n);case 1:return TB(n,e);case 2:return NB(n,e);case 3:return EB(n,e);default:return RB(n,e)}}function eB(n,e,t=!1,a){let r="";t?r+=yN(n,a):r+=zi(n,a);const o=n.shapeInfo.logicalShape,l=e.logicalShape;return o.length<=l.length&&(t?r+=IB(n,e):r+=DB(n,e)),r}function tB(n,e,t){switch(n.length){case 0:return bN();case 1:return fB(n,e,t);case 2:return xB(n,e,t);case 3:return hB(n,e,t);default:return mB(n,e,t)}}function nB(n,e,t){switch(n.length){case 0:return bN();case 1:return dB(n,e,t);case 2:return vB(n,e,t);case 3:return pB(n,e,t);case 4:return gB(n,e,t);case 5:return yB(n,e);case 6:return bB(n,e);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function aB(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function sB(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function rB(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function iB(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${oB}
    ${lB}
    ${uB}
  `}const oB=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,lB=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,uB=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,cB=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function bN(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function fB(n,e,t){const a=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return a[0]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${a[1]}.0);
      }
    `:a[1]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${a[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${a[0]}, ${a[1]}));
      return 2 * (resTexRC.x * ${a[1]} + resTexRC.y);
    }
  `}function dB(n,e,t){return e[0]===1?t?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?t?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function hB(n,e,t){if(t)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const a=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(n[2]/2),o=r*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${a[0]}, ${a[1]}));
      int index = resTexRC.x * ${a[1]} + resTexRC.y;

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec3(b, r, c);
    }
  `}function pB(n,e,t){if(t)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Zc(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const a=Sr(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${a}
      return ivec3(r, c, d);
    }
  `}function mB(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const a=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(n[n.length-1]/2),o=r*Math.ceil(n[n.length-2]/2);let l=o,c="",f="b, r, c";for(let d=2;d<n.length-1;d++)l*=n[n.length-d-1],c=`
      int b${d} = index / ${l};
      index -= b${d} * ${l};
    `+c,f=`b${d}, `+f;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${a[0]}, ${a[1]}));
      int index = resTexRC.x * ${a[1]} + resTexRC.y;

      ${c}

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec${n.length}(${f});
    }
  `}function gB(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Zc(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const a=Sr(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${a}
      return ivec4(r, c, d, d2);
    }
  `}function yB(n,e){const t=Sr(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function bB(n,e){const t=Sr(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function xB(n,e,t){const a=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(st(n,e))return t?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${a[0]}, ${a[1]}));
      }
    `;const r=Math.ceil(n[1]/2);return t?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${a[0]}, ${a[1]}));

      int index = resTexRC.x * ${a[1]} + resTexRC.y;
      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec2(r, c);
    }
  `}function vB(n,e,t){return st(n,e)?t?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:n[1]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:t?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function Tr(n){return`offset${n}`}function wB(n){const e=n.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),a=Gt();return`
    vec4 ${t}() {
      return ${a.texture2D}(${e}, halfCR);
    }
  `}function SB(n,e){const t=n.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`float ${a}() {return ${t};}`;const[r,o]=n.shapeInfo.texShape;if(r===1&&o===1)return`
      float ${a}() {
        return sampleTexture(${t}, halfCR);
      }
    `;const l=Tr(t);if(e)return`
    float ${a}() {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${l});
      return sampleTexture(${t}, uv);
    }
  `;const[c,f]=n.shapeInfo.texShape;return`
    float ${a}() {
      vec2 uv = uvFromFlat(${c}, ${f}, ${l});
      return sampleTexture(${t}, uv);
    }
  `}function TB(n,e){const t=n.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1),r=n.shapeInfo.texShape,o=Gt();if(e)return`
    vec4 ${a}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${o.texture2D}(${t}, uv);
    }
  `;const l=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];return`
    vec4 ${a}(int index) {
      vec2 uv = packedUVfrom1D(
        ${l[0]}, ${l[1]}, index);
      return ${o.texture2D}(${t}, uv);
    }
  `}function CB(n,e){const t=n.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`
      float ${a}(int index) {
        ${Ui(n)}
      }
    `;const r=n.shapeInfo.texShape,o=r[0],l=r[1];if(l===1&&o===1)return`
      float ${a}(int index) {
        return sampleTexture(${t}, halfCR);
      }
    `;const c=Tr(t);return l===1?e?`
      float ${a}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${c}) + 0.5) / float(${t}TexShape[0]));
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${a}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${c}) + 0.5) / ${o}.0);
        return sampleTexture(${t}, uv);
      }
    `:o===1?e?`
      float ${a}(int index) {
        vec2 uv = vec2((float(index + ${c}) + 0.5) / float(${t}TexShape[1]), 0.5);
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${a}(int index) {
        vec2 uv = vec2((float(index + ${c}) + 0.5) / ${l}.0, 0.5);
        return sampleTexture(${t}, uv);
      }
    `:e?`
    float ${a}(int index) {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${c});
      return sampleTexture(${t}, uv);
    }
  `:`
    float ${a}(int index) {
      vec2 uv = uvFromFlat(${o}, ${l}, index + ${c});
      return sampleTexture(${t}, uv);
    }
  `}function NB(n,e){const t=n.shapeInfo.logicalShape,a=n.name,r="get"+a.charAt(0).toUpperCase()+a.slice(1),o=n.shapeInfo.texShape,l=o[0],c=o[1],f=Gt();if(o!=null&&st(t,o))return e?`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}TexShape[1], ${a}TexShape[0]);

        return ${f.texture2D}(${a}, uv);
      }
    `:`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${c}.0, ${l}.0);

        return ${f.texture2D}(${a}, uv);
      }
    `;if(e)return`
    vec4 ${r}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${a}TexShape[0]) / 2.0), ceil(float(${a}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${a}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${f.texture2D}(${a}, uv);
    }
  `;const d=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],p=Math.ceil(t[1]/2);return`
    vec4 ${r}(int row, int col) {
      vec2 uv = packedUVfrom2D(${p}, ${d[0]}, ${d[1]}, row, col);
      return ${f.texture2D}(${a}, uv);
    }
  `}function $B(n,e){const t=n.shapeInfo.logicalShape,a=n.name,r="get"+a.charAt(0).toUpperCase()+a.slice(1),o=n.shapeInfo.texShape;if(o!=null&&st(t,o)){if(e)return`
      float ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}TexShape[1], ${a}TexShape[0]);
        return sampleTexture(${a}, uv);
      }
    `;const y=o[0],x=o[1];return`
    float ${r}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${x}.0, ${y}.0);
      return sampleTexture(${a}, uv);
    }
  `}const{newShape:l,keptDims:c}=Es(t),f=l;if(f.length<t.length){const y=Vi(n,f),x=["row","col"];return`
      ${zi(y,e)}
      float ${r}(int row, int col) {
        return ${r}(${Mi(x,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));
        ${Ui(n)}
      }
    `;const d=o[0],p=o[1],m=Tr(a);return p===1?e?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${m}), vec3(${a}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${a}TexShape[0]));
        return sampleTexture(${a}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${m}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${d}.0);
      return sampleTexture(${a}, uv);
    }
  `:d===1?e?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${m}), vec3(${a}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${a}TexShape[1]), 0.5);
        return sampleTexture(${a}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${m}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${p}.0, 0.5);
      return sampleTexture(${a}, uv);
    }
  `:e?`
      float ${r}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${a}Shape[1] + col + ${m};
        vec2 uv = uvFromFlat(${a}TexShape[0], ${a}TexShape[1], index);
        return sampleTexture(${a}, uv);
      }
    `:`
  float ${r}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${t[1]} + col + ${m};
    vec2 uv = uvFromFlat(${d}, ${p}, index);
    return sampleTexture(${a}, uv);
  }
`}function EB(n,e){const t=n.shapeInfo.logicalShape,a=n.name,r="get"+a.charAt(0).toUpperCase()+a.slice(1),o=n.shapeInfo.texShape,l=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(t[0]===1){const y=t.slice(1),x=[1,2],v=Vi(n,y),S=["b","row","col"];return`
        ${yN(v,e)}
        vec4 ${r}(int b, int row, int col) {
          return ${r}(${Mi(S,x)});
        }
      `}const c=Gt();if(e)return`
    vec4 ${r}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${a}TexShape[0]) / 2.0), ceil(float(${a}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${a}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${a}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${c.texture2D}(${a}, uv);
    }
  `;const f=l[0],d=l[1],p=Math.ceil(t[2]/2),m=p*Math.ceil(t[1]/2);return`
    vec4 ${r}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${f}, ${d}, ${m}, ${p}, b, row, col);
      return ${c.texture2D}(${a}, uv);
    }
  `}function kB(n,e){const t=n.shapeInfo.logicalShape,a=n.name,r="get"+a.charAt(0).toUpperCase()+a.slice(1),o=t[1]*t[2],l=t[2],{newShape:c,keptDims:f}=Es(t),d=c;if(d.length<t.length){const S=Vi(n,d),w=["row","col","depth"];return`
        ${zi(S,e)}
        float ${r}(int row, int col, int depth) {
          return ${r}(${Mi(w,f)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${o}, ${l}, 1)));
        ${Ui(n)}
      }
    `;const p=n.shapeInfo.texShape,m=p[0],y=p[1],x=n.shapeInfo.flatOffset;if(y===o&&x==null)return e?`
      float ${r}(int row, int col, int depth) {
        int stride1 = ${a}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${a}TexShape[1], ${a}TexShape[0]);
        return sampleTexture(${a}, uv);
      }
    `:`
        float ${r}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${l}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${y}.0, ${m}.0);
          return sampleTexture(${a}, uv);
        }
      `;if(y===l&&x==null)return e?`
      float ${r}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${a}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${a}TexShape[1], ${a}TexShape[0]);
        return sampleTexture(${a}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${y}.0, ${m}.0);
      return sampleTexture(${a}, uv);
    }
  `;const v=Tr(a);return e?`
    float ${r}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${a}Shape[1] * ${a}Shape[2];
      int stride1 = ${a}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${v};
      vec2 uv = uvFromFlat(${a}TexShape[0], ${a}TexShape[1], index);
      return sampleTexture(${a}, uv);
    }
    `:`
      float ${r}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o} + col * ${l} + depth + ${v};
        vec2 uv = uvFromFlat(${m}, ${y}, index);
        return sampleTexture(${a}, uv);
      }
  `}function RB(n,e){const t=n.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1),r=Gt();if(e)return`
    vec4 ${a}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${t}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${r.texture2D}(${t}, uv);
    }
  `;const o=n.shapeInfo.logicalShape,l=o.length,c=n.shapeInfo.texShape,f=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],d=f[0],p=f[1],m=Math.ceil(o[l-1]/2);let y=m*Math.ceil(o[l-2]/2),x="int b, int row, int col",v=`b * ${y} + (row / 2) * ${m} + (col / 2)`;for(let S=2;S<l-1;S++)x=`int b${S}, `+x,y*=o[l-S-1],v=`b${S} * ${y} + `+v;return`
    vec4 ${a}(${x}) {
      int index = ${v};
      int texR = index / ${p};
      int texC = index - texR * ${p};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${p}, ${d});
      return ${r.texture2D}(${t}, uv);
    }
  `}function _B(n,e){const t=n.shapeInfo.logicalShape,a=n.name,r="get"+a.charAt(0).toUpperCase()+a.slice(1),o=t[3],l=t[2]*o,c=t[1]*l,{newShape:f,keptDims:d}=Es(t);if(f.length<t.length){const $=Vi(n,f),O=["row","col","depth","depth2"];return`
      ${zi($,e)}
      float ${r}(int row, int col, int depth, int depth2) {
        return ${r}(${Mi(O,d)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${c}, ${l}, ${o}, 1)));
        ${Ui(n)}
      }
    `;const p=n.shapeInfo.flatOffset,m=n.shapeInfo.texShape,y=m[0],x=m[1],v=`int stride2 = ${a}Shape[3];`,S=`int stride1 = ${a}Shape[2] * stride2;`,w=`int stride0 = ${a}Shape[1] * stride1;`;if(x===c&&p==null)return e?`
      float ${r}(int row, int col, int depth, int depth2) {
        ${v}
        ${S}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${a}TexShape[1], ${a}TexShape[0]);
        return sampleTexture(${a}, uv);
      }
    `:`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${l}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${x}.0, ${y}.0);
        return sampleTexture(${a}, uv);
      }
    `;if(x===o&&p==null)return e?`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${a}Shape[1] * ${a}Shape[2], ${a}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${a}TexShape[1], ${a}TexShape[0]);
        return sampleTexture(${a}, uv);
      }
    `:`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${t[1]*t[2]}, ${t[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${x}.0, ${y}.0);
        return sampleTexture(${a}, uv);
      }
    `;const T=Tr(a);return e?`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${v}
      ${S}
      ${w}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${a}TexShape[0], ${a}TexShape[1], index + ${T});
      return sampleTexture(${a}, uv);
    }
  `:`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${l} +
          depth * ${o} + depth2;
      vec2 uv = uvFromFlat(${y}, ${x}, index + ${T});
      return sampleTexture(${a}, uv);
    }
  `}function AB(n){const e=n.shapeInfo.logicalShape,t=n.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1),r=e[4],o=e[3]*r,l=e[2]*o,c=e[1]*l,{newShape:f,keptDims:d}=Es(e);if(f.length<e.length){const S=Vi(n,f),w=["row","col","depth","depth2","depth3"];return`
      ${zi(S)}
      float ${a}(int row, int col, int depth, int depth2, int depth3) {
        return ${a}(${Mi(w,d)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${a}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${l}, ${o}, ${r})) +
          depth3;
        ${Ui(n)}
      }
    `;const p=n.shapeInfo.flatOffset,m=n.shapeInfo.texShape,y=m[0],x=m[1];if(x===c&&p==null)return`
      float ${a}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${l}, ${o}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${x}.0, ${y}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(x===r&&p==null)return`
      float ${a}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${x}.0, ${y}.0);
        return sampleTexture(${t}, uv);
      }
    `;const v=Tr(t);return`
    float ${a}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${l} + depth * ${o} +
          depth2 * ${r} + depth3 + ${v};
      vec2 uv = uvFromFlat(${y}, ${x}, index);
      return sampleTexture(${t}, uv);
    }
  `}function OB(n){const e=n.shapeInfo.logicalShape,t=n.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:r,keptDims:o}=Es(e);if(r.length<e.length){const w=Vi(n,r),T=["row","col","depth","depth2","depth3","depth4"];return`
      ${zi(w)}
      float ${a}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${a}(${Mi(T,o)});
      }
    `}const l=e[5],c=e[4]*l,f=e[3]*c,d=e[2]*f,p=e[1]*d;if(n.shapeInfo.isUniform)return`
      float ${a}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${p}, ${d}, ${f}, ${c})) +
          dot(
            vec2(depth3, depth4),
            vec2(${l}, 1)));
        ${Ui(n)}
      }
    `;const m=n.shapeInfo.flatOffset,y=n.shapeInfo.texShape,x=y[0],v=y[1];if(v===p&&m==null)return`
      float ${a}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${d}, ${f}, ${c}, ${l})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${v}.0, ${x}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(v===l&&m==null)return`
      float ${a}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${v}.0, ${x}.0);
        return sampleTexture(${t}, uv);
      }
    `;const S=Tr(t);return`
    float ${a}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${p} + col * ${d} + depth * ${f} +
          depth2 * ${c} + depth3 * ${l} + depth4 + ${S};
      vec2 uv = uvFromFlat(${x}, ${v}, index);
      return sampleTexture(${t}, uv);
    }
  `}function Ui(n){const e=n.name,t=se(n.shapeInfo.logicalShape);return t<2?`return ${e};`:`
    for (int i = 0; i < ${t}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function IB(n,e){const t=n.name,a=t.charAt(0).toUpperCase()+t.slice(1),r="get"+a+"AtOutCoords",o=n.shapeInfo.logicalShape.length,l=e.logicalShape.length,c=gN(n.shapeInfo.logicalShape,e.logicalShape),f=We(l),d=l-o;let p;const m=["x","y","z","w","u","v"];o===0?p="":l<2&&c.length>=1?p="coords = 0;":p=c.map($=>`coords.${m[$+d]} = 0;`).join(`
`);let y="";l<2&&o>0?y="coords":y=n.shapeInfo.logicalShape.map(($,O)=>`coords.${m[O+d]}`).join(", ");let x="return outputValue;";const S=se(n.shapeInfo.logicalShape)===1,T=se(e.logicalShape)===1;if(o===1&&!S&&!T)x=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(S&&!T)l===1?x=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:x=`
        return vec4(outputValue.x);
      `;else if(c.length){const $=o-2,O=o-1;c.indexOf($)>-1&&c.indexOf(O)>-1?x="return vec4(outputValue.x);":c.indexOf($)>-1?x="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":c.indexOf(O)>-1&&(x="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${r}() {
      ${f} coords = getOutputCoords();
      ${p}
      vec4 outputValue = get${a}(${y});
      ${x}
    }
  `}function DB(n,e){const t=n.name,a=t.charAt(0).toUpperCase()+t.slice(1),r="get"+a+"AtOutCoords",o=e.texShape,l=n.shapeInfo.texShape,c=n.shapeInfo.logicalShape.length,f=e.logicalShape.length;if(!n.shapeInfo.isUniform&&c===f&&n.shapeInfo.flatOffset==null&&st(l,o))return`
      float ${r}() {
        return sampleTexture(${t}, resultUV);
      }
    `;const d=We(f),p=gN(n.shapeInfo.logicalShape,e.logicalShape),m=f-c;let y;const x=["x","y","z","w","u","v"];c===0?y="":f<2&&p.length>=1?y="coords = 0;":y=p.map(S=>`coords.${x[S+m]} = 0;`).join(`
`);let v="";return f<2&&c>0?v="coords":v=n.shapeInfo.logicalShape.map((S,w)=>`coords.${x[w+m]}`).join(", "),`
    float ${r}() {
      ${d} coords = getOutputCoords();
      ${y}
      return get${a}(${v});
    }
  `}function We(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function S0(n,e,t){const{newShape:a,keptDims:r}=Es(e),o=e.length,l=n&&o===3&&e[0]===1,c=l?e.slice(1):a,f=!n&&o>1&&!st(e,t)&&a.length<o||l;return{useSqueezeShape:f,uniformShape:f?c:e,keptDims:r}}function Vi(n,e){const t=JSON.parse(JSON.stringify(n));return t.shapeInfo.logicalShape=e,t}function Mi(n,e){return e.map(t=>n[t]).join(", ")}function LB(n,e,t,a){const r=t.map((p,m)=>{const y={logicalShape:p.shape,texShape:p.isUniform?null:p.texData.texShape,isUniform:p.isUniform,isPacked:p.isUniform?!1:p.texData.isPacked,flatOffset:null};return p.texData!=null&&p.texData.slice!=null&&p.texData.slice.flatOffset>0&&(y.flatOffset=p.texData.slice.flatOffset),{name:e.variableNames[m],shapeInfo:y}}),o=r.map(p=>p.shapeInfo),l={logicalShape:a.shape,texShape:a.texData.texShape,isUniform:!1,isPacked:a.texData.isPacked,flatOffset:null},c=JF(r,l,e),f=kF(n.gl,c),d=n.createProgram(f);return q().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:f,source:c,webGLProgram:d,inShapeInfos:o,outShapeInfo:l,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(d),Object.assign({program:e,fragmentShader:f,source:c,webGLProgram:d,inShapeInfos:o,outShapeInfo:l},xN(n,e,d)))}function xN(n,e,t){const a=[],r=[];let o,l,c,f=null,d=null;d=n.getUniformLocation(t,"NAN",!1),q().getNumber("WEBGL_VERSION")===1&&(f=n.getUniformLocation(t,"INFINITY",!1));const p=!1;for(const m of e.variableNames){const y={name:m,uniform:n.getUniformLocation(t,m,p),offset:n.getUniformLocation(t,`offset${m}`,p)};e.enableShapeUniforms&&(y.shape=n.getUniformLocation(t,`${m}Shape`,p),y.texShape=n.getUniformLocation(t,`${m}TexShape`,p)),a.push(y)}if(e.enableShapeUniforms&&(o=n.getUniformLocation(t,"outShape",p),c=n.getUniformLocation(t,"outShapeStrides",p),l=n.getUniformLocation(t,"outTexShape",p)),e.customUniforms)for(const m of e.customUniforms)r.push(n.getUniformLocation(t,m.name,p));return{variablesLocations:a,customUniformLocations:r,infLoc:f,nanLoc:d,outShapeLocation:o,outShapeStridesLocation:c,outTexShapeLocation:l}}function T2(n,e){if(n.length!==e.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${e.length} inputs`);n.forEach((t,a)=>{const r=t.logicalShape,o=e[a],l=o.shape;if(!st(r,l))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${l} must match`);if(t.isUniform&&o.isUniform)return;const c=t.texShape,f=o.isUniform?null:o.texData.texShape;if(!st(c,f))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${c} and ${f} must match`)})}function FB(n,e,t,a,r){e.program.enableShapeUniforms||(T2(e.inShapeInfos,t),T2([e.outShapeInfo],[a]));const o=a.texData.texture,l=a.texData.texShape;a.texData.isPacked?n.setOutputPackedMatrixTexture(o.texture,l[0],l[1]):n.setOutputMatrixTexture(o.texture,l[0],l[1]),n.setProgram(e.webGLProgram),n.bindVertexArray(e.webGLProgram.vao),q().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&n.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&n.gl.uniform1f(e.nanLoc,NaN);for(let f=0;f<t.length;++f){const d=t[f],{uniform:p,offset:m,shape:y,texShape:x}=e.variablesLocations[f];if(y){const{uniformShape:v}=S0(e.program.packedInputs,d.shape,d.texData.texShape);switch(v.length){case 1:n.gl.uniform1iv(y,new Int32Array(v));break;case 2:n.gl.uniform2iv(y,new Int32Array(v));break;case 3:n.gl.uniform3iv(y,new Int32Array(v));break;case 4:n.gl.uniform4iv(y,new Int32Array(v));break}}if(x&&n.gl.uniform2i(x,d.texData.texShape[0],d.texData.texShape[1]),p!=null){if(d.isUniform){if(se(d.shape)<2)n.gl.uniform1f(p,d.uniformValues[0]);else{let v=d.uniformValues;v instanceof Float32Array||(v=new Float32Array(v)),n.gl.uniform1fv(p,v)}continue}d.texData.slice!=null&&m!=null&&n.gl.uniform1i(m,d.texData.slice.flatOffset),n.setInputMatrixTexture(d.texData.texture.texture,p,f)}}const c=e.outShapeLocation;if(c)switch(a.shape.length){case 1:n.gl.uniform1iv(c,new Int32Array(a.shape));break;case 2:n.gl.uniform2iv(c,new Int32Array(a.shape));break;case 3:n.gl.uniform3iv(c,new Int32Array(a.shape));break;case 4:n.gl.uniform4iv(c,new Int32Array(a.shape));break}if(e.outShapeStridesLocation){const f=Nt(a.shape);switch(a.shape.length){case 2:n.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(f));break;case 3:n.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(f));break;case 4:n.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(f));break}}if(e.outTexShapeLocation&&n.gl.uniform2i(e.outTexShapeLocation,a.texData.texShape[0],a.texData.texShape[1]),e.program.customUniforms&&r)for(let f=0;f<e.program.customUniforms.length;++f){const d=e.program.customUniforms[f],p=e.customUniformLocations[f],m=r[f];if(d.type==="float")n.gl.uniform1fv(p,m);else if(d.type==="vec2")n.gl.uniform2fv(p,m);else if(d.type==="vec3")n.gl.uniform3fv(p,m);else if(d.type==="vec4")n.gl.uniform4fv(p,m);else if(d.type==="int")n.gl.uniform1iv(p,m);else if(d.type==="ivec2")n.gl.uniform2iv(p,m);else if(d.type==="ivec3")n.gl.uniform3iv(p,m);else if(d.type==="ivec4")n.gl.uniform4iv(p,m);else throw Error(`uniform type ${d.type} is not supported yet.`)}n.executeProgram()}function BB(n,e,t){let a="";e.concat(t).forEach(l=>{const c=l.texData!=null&&l.texData.slice!=null&&l.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!l.isUniform){const f=l.texData.texShape,{useSqueezeShape:d,uniformShape:p,keptDims:m}=S0(n.packedInputs,l.shape,f);let y="",x="",v="";if(p.length===1&&n.packedInputs){const z=[Math.ceil(f[0]/2),Math.ceil(f[1]/2)];y=`${z[0]>1}_${z[1]>1}`}else if(p.length===2&&!n.packedInputs)x=`${p[0]>1}_${p[1]>1}`;else if(p.length>2&&!n.packedInputs){const z=Nt(p);v=`${z[0]===f[1]}_${z[z.length-1]===f[1]}`}const S=l.shape.length,w=p.length===2&&st(l.shape,f),T=se(l.shape)===1,$=bc(l.shape,t.shape),O=!n.packedInputs&&S===t.shape.length&&st(f,t.texData.texShape),A=n.packedInputs||p.length>2?"":`${f[0]>1}_${f[1]>1}`;a+=`${S}_${O}_${d?m:""}_${p.length}_${T}_${$}_${w}_${y}_${x}_${v}_${A}_${c}`}else{const f=l.isUniform?"uniform":l.texData.texShape;a+=`${l.shape}_${f}_${c}`}});const r=n.userCode;let o=n.constructor.name;return o+="_"+a+"_"+r+`${q().getNumber("WEBGL_VERSION")}`,o}function Lt(n){return q().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class zB{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=al.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=Gt();this.outputShape=e,this.enableShapeUniforms=Lt(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Zc(["r","c","d"],e):Sr(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}class UB{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=al.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=Gt();this.outputShape=e,this.enableShapeUniforms=Lt(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Zc(["r","c","d"],e):Sr(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}class VB{constructor(e){this.variableNames=["A"],this.outTexUsage=xn.DOWNLOAD;const t=Gt();this.outputShape=e,this.userCode=`
      ${mN}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}class MB{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=xn.DOWNLOAD;const t=Gt();this.outputShape=e,this.userCode=`
      ${mN}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}const PB={R:0,G:1,B:2,A:3};class C2{constructor(e,t=!1,a="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=Gt();this.outputShape=e,this.enableShapeUniforms=Lt(this.outputShape.length);let o="result";t&&(o="floor(result * 255. + 0.5)");let l="";for(let c=0;c<a.length;c++){const f=a[c];l+=`
          if(offset == ${c}) {
            result = values[${PB[f]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?w0():v0(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${a.length});

        flatIndex = idiv(flatIndex, ${a.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${r.texture2D}(A, uv);
          ${l}
        }
        ${r.output} = vec4(${o}, 0., 0., 0.);
      }
    `}}class GB{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const a=Gt();this.outputShape=e,this.enableShapeUniforms=Lt(this.outputShape.length);let r="",o="result";t&&(o="floor(result * 255. + 0.5)");for(let l=0;l<=1;l++)for(let c=0;c<=1;c++){const f=l*2+c;r+=`
          localCoords = coords;
          if(localCoords[2] + ${c} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${c};
          if (localCoords[1] + ${l} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${l};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${a.texture2D}(A, uv);

            if (offset == 0) {
              result[${f}] = values[0];
            } else if (offset == 1) {
              result[${f}] = values[1];
            } else if (offset == 2) {
              result[${f}] = values[2];
            } else {
              result[${f}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?w0():v0(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${a.output} = ${o};
        }
    `}}function HB(n){const e=Gt(),t=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return EF(n,t)}function WB(n){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return OF(n,e)}function qB(n){const e=new Uint16Array([0,1,2,2,1,3]);return IF(n,e)}function vl(n,e,t,a,r,o){LF(e,t);const l=DF(n),c=n.TEXTURE_2D;return ce(n,()=>n.bindTexture(c,l)),ce(n,()=>n.texParameteri(c,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),ce(n,()=>n.texParameteri(c,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),ce(n,()=>n.texParameteri(c,n.TEXTURE_MIN_FILTER,n.NEAREST)),ce(n,()=>n.texParameteri(c,n.TEXTURE_MAG_FILTER,n.NEAREST)),q().getNumber("WEBGL_VERSION")===1?ce(n,()=>n.texImage2D(c,0,a,e,t,0,r,o,null)):ce(n,()=>n.texStorage2D(c,1,a,e,t)),ce(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:l,texShape:[t,e]}}function vN(n){return n.internalFormatFloat}function jB(n,e,t,a){const[r,o]=bl(e,t);return vl(n,r,o,vN(a),a.textureFormatFloat,n.FLOAT)}function wN(n){return n.internalFormatHalfFloat}function XB(n,e,t,a){const[r,o]=bl(e,t);return vl(n,r,o,wN(a),a.textureFormatFloat,a.textureTypeHalfFloat)}function SN(n){return n.downloadTextureFormat}function KB(n,e,t,a){const[r,o]=bl(e,t);return vl(n,r,o,SN(a),n.RGBA,n.UNSIGNED_BYTE)}function TN(n){return n.internalFormatPackedFloat}function YB(n,e,t,a){const[r,o]=Bi(e,t);return vl(n,r,o,TN(a),n.RGBA,n.FLOAT)}function CN(n){return n.internalFormatPackedHalfFloat}function QB(n,e,t,a){const[r,o]=Bi(e,t);return vl(n,r,o,CN(a),n.RGBA,a.textureTypeHalfFloat)}function ZB(n,e,t){return ce(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),v2(n,e,"clipSpacePos",t,3,20,0)&&v2(n,e,"uv",t,2,20,12)}function JB(n,e,t,a,r,o){ce(n,()=>n.bindTexture(n.TEXTURE_2D,e));let l,c,f;r instanceof Uint8Array?(l=new Uint8Array(t*a*4),c=n.UNSIGNED_BYTE,f=n.RGBA):(l=new Float32Array(t*a*4),c=n.FLOAT,f=o.internalFormatPackedFloat),l.set(r),q().getNumber("WEBGL_VERSION")===2?ce(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t,a,n.RGBA,c,l)):ce(n,()=>n.texImage2D(n.TEXTURE_2D,0,f,t,a,0,n.RGBA,c,l)),ce(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function ez(n,e,t){ce(n,()=>n.bindTexture(n.TEXTURE_2D,e)),t.data instanceof Uint8Array?q().getNumber("WEBGL_VERSION")===2?ce(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t.width,t.height,n.RGBA,n.UNSIGNED_BYTE,t.data)):ce(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,t.width,t.height,0,n.RGBA,n.UNSIGNED_BYTE,t.data)):q().getNumber("WEBGL_VERSION")===2?ce(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t)):ce(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)),ce(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function tz(n,e,t,a){const r=n.createBuffer();ce(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,r));const c=4*4*e*t;return ce(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,c,n.STREAM_READ)),ce(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,0)),ce(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),r}function nz(n,e,t){const a=n,r=new Float32Array(t);return a.bindBuffer(a.PIXEL_PACK_BUFFER,e),a.getBufferSubData(a.PIXEL_PACK_BUFFER,0,r),a.bindBuffer(a.PIXEL_PACK_BUFFER,null),r}function az(n,e,t,a){const[r,o]=bl(e,t),l=4,c=new Uint8Array(vF(e*t,l));return ce(n,()=>n.readPixels(0,0,r,o,a.downloadTextureFormat,n.UNSIGNED_BYTE,c)),new Float32Array(c.buffer)}function sz(n,e,t,a,r,o,l,c){const f=n,d=new Float32Array(wF(o,l));return f.bindBuffer(f.PIXEL_PACK_BUFFER,e),f.getBufferSubData(f.PIXEL_PACK_BUFFER,0,d),f.bindBuffer(f.PIXEL_PACK_BUFFER,null),d}function rz(n,e,t){const a=new Float32Array(e*t*4);return ce(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,a)),a}class Mh{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const t=q().getNumber("WEBGL_VERSION");if(e!=null?(this.gl=e,yF(t,e)):this.gl=na(t),e=this.gl,q().getNumber("WEBGL_VERSION")===2){const o=e;this.createVertexArray=()=>ce(o,()=>o.createVertexArray()),this.bindVertexArray=l=>ce(o,()=>o.bindVertexArray(l)),this.deleteVertexArray=l=>ce(o,()=>o.deleteVertexArray(l)),this.getVertexArray=()=>ce(o,()=>o.getParameter(o.VERTEX_ARRAY_BINDING))}else if(e!=null){const o=e.getExtension("OES_vertex_array_object");if(o==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>ce(e,()=>o.createVertexArrayOES()),this.bindVertexArray=l=>ce(e,()=>o.bindVertexArrayOES(l)),this.deleteVertexArray=l=>ce(e,()=>o.deleteVertexArrayOES(l)),this.getVertexArray=()=>ce(e,()=>e.getParameter(o.VERTEX_ARRAY_BINDING_OES))}let a="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),q().getNumber("WEBGL_VERSION")===1){const o="OES_texture_float",l="OES_texture_half_float";if(this.textureFloatExtension=qu(this.gl,o),Bn(this.gl,l))this.textureHalfFloatExtension=qu(this.gl,l);else if(q().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(a),Bn(this.gl,r))this.colorBufferHalfFloatExtension=qu(this.gl,r);else if(q().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(a="EXT_color_buffer_float",Bn(this.gl,a))this.colorBufferFloatExtension=this.gl.getExtension(a);else if(Bn(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=WB(this.gl),this.indexBuffer=qB(this.gl),this.framebuffer=FF(this.gl),this.textureConfig=x0(this.gl,this.textureHalfFloatExtension)}get debug(){return q().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;ce(e,()=>e.finish()),ce(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),ce(e,()=>e.deleteFramebuffer(this.framebuffer)),ce(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),ce(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),ce(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),jB(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),XB(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),KB(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),ez(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,a,r){this.throwIfDisposed(),JB(this.gl,e,t,a,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),QB(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),YB(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(w2(this.gl,this.framebuffer),this.outputTexture=null),ce(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,a){return this.downloadMatrixDriver(e,()=>az(this.gl,t,a,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,a,r,o,l){return sz(this.gl,e,t,a,r,o,l,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return nz(this.gl,e,t)}createBufferFromTexture(e,t,a){this.bindTextureToFrameBuffer(e);const r=tz(this.gl,t,a,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,a;if(q().getBool("WEBGL_FENCE_API_ENABLED")){const r=e,o=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),a=()=>{const l=r.clientWaitSync(o,0,0);return l===r.ALREADY_SIGNALED||l===r.CONDITION_SATISFIED},t=o}else q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),a=()=>this.isQueryAvailable(t,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):a=()=>!0;return{query:t,isFencePassed:a}}downloadMatrixFromPackedTexture(e,t,a){return this.downloadMatrixDriver(e,()=>rz(this.gl,t,a))}createProgram(e){this.throwIfDisposed();const t=this.gl;this.vertexShader==null&&(this.vertexShader=HB(t));const a=_F(t);ce(t,()=>t.attachShader(a,this.vertexShader)),ce(t,()=>t.attachShader(a,e)),AF(t,a);const r=Object.assign(a,{vao:this.createVertexArray()});return this.debug&&Bh(t,r),r}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);const t=this.gl;ce(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),ZB(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(ce(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Bh(this.gl,this.program),ce(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,a=!0){return this.throwIfDisposed(),a?zF(this.gl,e,t):UF(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),ce(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,a){this.throwIfDisposed(),this.throwIfNoProgram(),VF(this.gl,e,t,a)}setOutputMatrixTexture(e,t,a){this.setOutputMatrixTextureDriver(e,a,t)}setOutputPackedMatrixTexture(e,t,a){this.throwIfDisposed();const[r,o]=Bi(t,a);this.setOutputMatrixTextureDriver(e,r,o)}setOutputMatrixWriteRegion(e,t,a,r){this.setOutputMatrixWriteRegionDriver(a,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,a,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Bh(this.gl,this.program),ju(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;if(this.debug){const t=this.getVertexArray();console.assert(t===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}ce(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),ce(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=qu(this.gl,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const a=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=a.createQuery();return a.beginQuery(r.TIME_ELAPSED_EXT,o),o}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const t=this.gl,a=this.getQueryTimerExtensionWebGL2();t.endQuery(a.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await Uv(()=>this.disposed||this.isQueryAvailable(e,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(t===0)return null;if(t===2){const a=this.gl;return a.getQueryParameter(e,a.QUERY_RESULT)/1e6}else{const a=this.getQueryTimerExtensionWebGL1();return a.getQueryObjectEXT(e,a.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){const a=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=a.getQueryParameter(e,a.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}else{const a=this.getQueryTimerExtensionWebGL1(),r=a.getQueryObjectEXT(e,a.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(a.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){const e=iz(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){const{resolveFn:a}=this.itemsToPoll[t];a()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let a;"setTimeoutCustom"in q().platform&&(a=q().platform.setTimeoutCustom.bind(q().platform)),Uv(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,a)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),zh(this.gl,e,this.framebuffer),this.debug&&ju(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(zh(this.gl,this.outputTexture,this.framebuffer),this.debug&&ju(this.gl)):w2(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const a=t();return this.unbindTextureToFrameBuffer(),a}setOutputMatrixTextureDriver(e,t,a){this.throwIfDisposed();const r=this.gl;zh(r,e,this.framebuffer),this.debug&&ju(r),this.outputTexture=e,ce(r,()=>r.viewport(0,0,t,a)),ce(r,()=>r.scissor(0,0,t,a))}setOutputMatrixWriteRegionDriver(e,t,a,r){this.throwIfDisposed(),ce(this.gl,()=>this.gl.scissor(e,t,a,r))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function iz(n){let e=0;for(;e<n.length&&n[e]();++e);return e-1}function oz(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;++t)e[t]=Math.abs(n[t]);return e}function Cn(n){return(e,t,a,r,o)=>{const l=Fe(e,t),c=l.length,f=Nt(l),d=se(l),p=Ss(o,d),m=e.length,y=t.length,x=Nt(e),v=Nt(t),S=bc(e,l),w=bc(t,l);if(S.length+w.length===0)for(let T=0;T<p.length;++T)p[T]=n(a[T%a.length],r[T%r.length]);else for(let T=0;T<p.length;++T){const $=Rp(T,c,f),O=$.slice(-m);S.forEach(G=>O[G]=0);const A=jh(O,m,x),z=$.slice(-y);w.forEach(G=>z[G]=0);const j=jh(z,y,v);p[T]=n(a[A],r[j])}return[p,l]}}function lz(n,e,t,a){if(a==="int32"){const r=Int32Array.from(n);return[e,"int32",r]}if(a==="bool"){const r=Bc([0],t),[o,l]=Cn((c,f)=>c!==f?1:0)(e,[],n,r,"bool");return[l,"bool",o]}throw new Error(`Error in Cast: failed to cast ${t} to ${a}`)}const uz=Cn(((n,e)=>n+e));function cz(n,e,t,a,r){const o=se(a),l=Ts(r,t);for(let c=0;c<n.length;c++){const f=n[c];if(f<0)throw new Error("Input x must be non-negative!");f>=r||(o>0?l[f]+=e[c]:l[f]+=1)}return l}function fz(n,e,t,a=!1){const r=n.shape[0],o=n.shape[1],l=tt([r,t],e.dtype);for(let c=0;c<r;c++)for(let f=0;f<o;f++){const d=n.get(c,f);if(d<0)throw new Error("Input x must be non-negative!");d>=t||(a?l.set(1,c,d):e.size>0?l.set(l.get(c,d)+e.get(c,f),c,d):l.set(l.get(c,d)+1,c,d))}return l}const dz=Cn(((n,e)=>n&e));function Ga(n){return(e,t,a)=>{const r=bt(t,e.length);for(let o=0;o<e.length;++o)r[o]=n(e[o],a);return r}}const hz=Ga(n=>Math.ceil(n));function pz(n,e,t,a){const r=bt(t,se(e));if(a&&t!=="string"){let o=0;n.forEach(l=>{const c=se(l.shape);r.set(l.vals,o),o+=c})}else{let o=0;n.forEach(l=>{const c=t==="string"?ki(l.vals):l.vals;let f=0;for(let d=0;d<l.shape[0];++d){const p=d*e[1]+o;for(let m=0;m<l.shape[1];++m)r[p+m]=c[f++]}o+=l.shape[1]})}return r}const mz=Cn((n,e)=>n===e?1:0);const gz=Ga(n=>Math.exp(n));const yz=Ga(n=>Math.expm1(n));const bz=Ga(n=>Math.floor(n));function xz(n,e,t,a,r,o,l,c,f){const d=tt([a,o],t);for(let p=0;p<a;p++){const m=[];let y=0;for(let x=0;x<r;x++){const v=n[p*r+x];y+=v*l[x],m.push(v)}if(y<0||y>=f/o)throw new Error(`Invalid indices: ${m} does not index into ${c}`);for(let x=0;x<o;x++)d.values[p*o+x]=e.get(...e.indexToLoc(y*o+x))}return d}function vz(n,e,t){const a=tt(t,n.dtype);for(let r=0;r<a.size;++r){const l=a.indexToLoc(r).slice(),c=l[0],f=l[2],d=e.locToIndex([c,f]);l[2]=e.values[d];const p=n.locToIndex(l);0<=p&&p<n.values.length&&(a.values[r]=n.values[p])}return a}const wz=Cn((n,e)=>n>e?1:0);const Sz=Cn((n,e)=>n>=e?1:0);const Tz=Cn((n,e)=>n<e?1:0);const Cz=Cn((n,e)=>n<=e?1:0);function Nz(n,e,t){const a=(e-n)/(t-1),r=Ts(t,"float32");r[0]=n;for(let o=1;o<r.length;o++)r[o]=r[o-1]+a;return r}const $z=Ga(n=>Math.log(n));function Ez(n,e,t,a){const r=Ss(a,se(t));for(let o=0;o<r.length;++o){const l=o*e;let c=n[l];for(let f=0;f<e;++f){const d=n[l+f];(Number.isNaN(d)||d>c)&&(c=d)}r[o]=c}return r}const kz=Cn(((n,e)=>Math.max(n,e)));const Rz=Cn(((n,e)=>Math.min(n,e)));const NN=Cn(((n,e)=>n*e));function _z(n,e,t){const a=Oi(-1,t);return NN([],e,a,n,t)}const Az=Cn(((n,e)=>n!==e?1:0));function Oz(n,e,t,a,r){const o=e.length,l=se(e),c=Nt(e),f=Nt(r),d=Ss(t,se(r));for(let p=0;p<l;++p){const m=Rp(p,o,c),y=new Array(m.length);for(let v=0;v<y.length;v++)y[v]=m[a[v]];const x=jh(y,o,f);d[x]=n[p]}return d}function Iz(n,e,t,a){const[r,o]=ha(n,a),l=ta(e,"int32"),c=Ts(se(r),l),f=se(o);for(let d=0;d<c.length;++d){const p=d*f;let m=1;for(let y=0;y<f;++y)m*=t[p+y];c[d]=m}return{outVals:c,outShape:r,outDtype:l}}function Dz(n,e,t){n.forEach((a,r)=>{if(a<0||a>=t){const o=Rp(r,e.length,Nt(e)).join(",");throw new Error(`indices[${o}] = ${a} is not in [0, ${t})`)}})}function Lz(n,e){for(let t=0;t<n.length;++t){const a=n[t],r=t===n.length-1?e:n[t+1].length;if(a.length===0)throw new Error("Ragged splits may not be empty");if(a[0]<0)throw new Error("Ragged splits must be non-negative");if(a[a.length-1]>r)throw new Error("Ragged splits must not point past values");for(let o=1;o<a.length;++o)if(a[o-1]>a[o])throw new Error("Ragged splits must be sorted in ascending order")}}function Fz(n,e,t,a){const r=[];let o=0;const l=e.length-1+t.length,c=new Array(l).fill(null).map(()=>[0]);Lz(t,a);let f=1;for(let d=0;d<e.length-1;++d){f*=e[d];const p=e[d+1];for(let m=1;m<f+1;++m)c[d].push(m*p)}for(let d=0;d<n.length;++d){let p=n[d],m=n[d]+1;for(let y=0;y<t.length;++y){const x=t[y],v=y+e.length-1;if(v>=0){const S=c[v],w=S[S.length-1]-x[p];for(let T=p;T<m;++T)c[v].push(x[T+1]+w)}p=x[p],m=x[m]}m!==p&&(r.push([p,m]),o+=m-p)}return{outSplits:c,valueSlices:r,numValues:o}}function Bz(n){const e=[];for(let t=0;t<n.length;++t){const a=n[t].length,r=bt("int32",a);e.push(r),n[t].forEach((o,l)=>r[l]=o)}return e}function N2(n,e){const t=n.slice(0,e);for(;t.length<e;)t.push(1);for(let a=e;a<n.length;a++)t[e-1]*=n[a];return t}function zz(n,e,t,a,r,o){const l=N2(e,2)[1],c=N2(o,2)[1];let f=0;for(const d of t)for(let p=d[0];p<d[1];++p){for(let m=0;m<a;++m)r[f*c+m]=n[p*l+m];++f}}function Uz(n,e,t,a,r){const o=e.slice();o[0]=r;const l=bt(t,se(o)),c=n.length,f=c===0?0:c/e[0];return zz(n,e,a,f,l,o),[l,o]}function Vz(n,e,t,a,r,o,l,c){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");const f=e[0][0]-1;if(Dz(o,l,f),a.length===0)throw new Error("params.rank must be nonzero");const d=a[0],{outSplits:p,valueSlices:m,numValues:y}=Fz(o,l,n,d),x=Bz(p),v=Uz(t,a,r,m,y);return[x,v[0],v[1]]}const $2=2147483647;function Mz(n,e,t,a,r,o,l){if(e.length>1)throw new Error("starts must be a scalar or vector");if(r.length>1)throw new Error("limits must be a scalar or vector");if(l.length>1)throw new Error("deltas must be a scalar or vector");const c=e.length===0,f=r.length===0,d=l.length===0,p=[];c||p.push(e[0]),f||p.push(r[0]),d||p.push(l[0]);for(let w=1;w<p.length;++w)if(p[w]!==p[w-1])throw new Error("starts, limits, and deltas must have the same shape");const m=p.length===0?1:p[0],y=bt("int32",m+1);y[0]=0;for(let w=0;w<m;++w){const T=c?n[0]:n[w],$=f?a[0]:a[w],O=d?o[0]:o[w];if(O===0)throw new Error("Requires delta != 0");let A;if(O>0&&$<T||O<0&&$>T)A=0;else if(A=Math.ceil(Math.abs(($-T)/O)),A>$2)throw new Error(`Requires ((limit - start) / delta) <= ${$2}`);y[w+1]=y[w]+A}const x=y[m],v=bt(t,x);let S=0;for(let w=0;w<m;++w){const T=y[w+1]-y[w];let $=c?n[0]:n[w];const O=d?o[0]:o[w];for(let A=0;A<T;++A)v[S++]=$,$+=O}return[y,v]}var Ln=Yn;class Ec{constructor(e,t,a,r,o,l,c,f,d,p){this.shape=e,this.shapeShape=t,this.values=a,this.valuesShape=r,this.valuesDType=o,this.defaultValue=l,this.defaultValueShape=c,this.rowPartitionValues=f,this.rowPartitionValuesShapes=d,this.rowPartitionTypes=OC(p),this.raggedRank=IC(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===Ln.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===Ln.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case Ln.VALUE_ROWIDS:return Ec.getMaxWidthValueRowID(t);case Ln.ROW_SPLITS:return Ec.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${Ln[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const t=e.length;if(t===0||t===1)return 0;let a=0;for(let r=0;r<t-1;++r){const o=e[r+1]-e[r];o>a&&(a=o)}return a}static getMaxWidthValueRowID(e){const t=e.length;if(t===0)return 0;let a=0,r=e[0],o=0;for(let l=1;l<t;++l){const c=e[l];c!==r&&(r=c,o=Math.max(l-a,o),a=l)}return Math.max(t-a,o)}tensorShapeFromTensor(e,t,a=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return k2(e,a)}calculateOutputSize(e){const t=this.valuesShape,a=this.defaultValueShape;DC(a,t);const r=this.tensorShapeFromTensor(this.shape,this.shapeShape),l=AC(this.raggedRank,r,t);l[0]<0&&(l[0]=e);for(let c=1;c<=this.raggedRank;++c)l[c]<0&&(l[c]=this.getMaxWidth(c));return l}calculateFirstParentOutputIndex(e,t,a){const r=Math.min(e,a),o=[];let l=0;for(let c=0;c<r;++c,l+=t)o.push(l);for(let c=r;c<e;++c)o.push(-1);return _(o.length===e,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(e,t,a,r){const o=e.length,l=[];for(let c=0;c<o-1;++c){const f=e[c+1]-e[c];let d=Math.min(r,f),p=t[c];p===-1&&(d=0);for(let m=0;m<d;++m)l.push(p),p+=a;for(let m=0;m<f-d;++m)l.push(-1)}if(o>0&&l.length!==e[o-1])throw new Error("Invalid row split size.");return l}calculateOutputIndexValueRowID(e,t,a,r){const o=e.length,l=[];if(o===0)return[];let c=0,f=e[0];if(f>=t.length)throw new Error(`Got currentValueRowId=${f}, which is not less than ${t.length}`);let d=t[f];l.push(d);for(let p=1;p<o;++p){const m=e[p];if(m===f)d>=0&&(++c,c<r?d+=a:d=-1);else{if(c=0,f=m,m>=t.length)throw new Error(`Got nextValueRowId=${m} which is not less than ${t.length}`);d=t[m]}l.push(d)}if(l.length!==e.length)throw new Error("Invalid row ids.");return l}calculateOutputIndex(e,t,a,r){const o=this.getRowPartitionTensor(e),l=this.getRowPartitionTypeByDimension(e);switch(l){case Ln.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,t,a,r);case Ln.ROW_SPLITS:if(o.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${o.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(o,t,a,r);default:throw new Error(`Unsupported partition type: ${Ln[l]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case Ln.FIRST_DIM_SIZE:return e[0];case Ln.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Ln.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Ln[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),a=this.calculateOutputSize(t),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let f=r.length-2;f>=0;--f)r[f]=r[f+1]*a[f+1];const o=k2(a,!1),l=bt(this.valuesDType,se(o));if(r[0]*a[0]>0){let f=this.calculateFirstParentOutputIndex(t,r[0],a[0]);for(let d=1;d<=this.raggedRank;++d)f=this.calculateOutputIndex(d-1,f,r[d],a[d]);this.setOutput(this.raggedRank,f,l,o)}return[o,l]}setOutput(e,t,a,r){if(a.length===0)return;const o=this.values,l=a;let c=r.slice();c=c.slice(e+1);const f=se(c),d=t.length;let p=this.defaultValue;if(p.length!==f&&p.length!==1){const v=this.defaultValueShape;De(()=>{const S=te(p,v);p=yi(S,c).dataSync()})}let m=0,y=0,x=0;for(let v=0;v<=d;++v){let S=v<d?t[v]:-1;if(S===x){++x;continue}if(y<x){const w=o.subarray(m*f),T=l.subarray(y*f),$=(x-y)*f;E2(T,w,$)}if(v>=d){const w=a.length;S=Math.floor(w/f)}if(S>x)if(this.defaultValue.length===1)l.subarray(x*f,S*f).fill(this.defaultValue[0]),x=S;else for(;S>x;){const w=l.slice(x*f);E2(w,p,f),++x}S<0?(m=v+1,y=x):(m=v,y=x,x=y+1)}}}function E2(n,e,t){for(let a=0;a<t;a++)n[a]=e[a]}function k2(n,e){const t=[];for(let a of n){if(a<0){if(!e)throw new Error(`Dimension ${a} must be >= 0`);if(a<-1)throw new Error(`Dimension ${a} must be >= -1`);a=-1}t.push(a)}return t}function Pz(n,e,t,a,r,o,l,c,f,d){return new Ec(n,e,t,a,r,o,l,c,f,d).compute()}function Gz(n,e,t,a){const r=n===e,o=n<e&&t<0,l=e<n&&t>1;if(r||o||l)return Ts(0,a);const c=Math.abs(Math.ceil((e-n)/t)),f=Ts(c,a);e<n&&t===1&&(t=-1),f[0]=n;for(let d=1;d<f.length;d++)f[d]=f[d-1]+t;return f}const Hz=Ga(n=>1/Math.sqrt(n));function Wz(n,e,t,a,r,o,l,c,f,d){const p=[a/r,r],m=n.values,y=e.values;if(a===0)return tt(t,e.dtype);const x=f instanceof dr?f:tt(p,e.dtype);typeof f=="string"||typeof f=="number"?x.values.fill(f):typeof f=="boolean"&&x.values.fill(+f);for(let v=0;v<o;v++){const S=[];let w=0;for(let T=0;T<l;T++){const $=m[v*l+T];S.push($),w+=$*c[T]}if(w<0||w>=a/r)throw new Error(`Invalid indices: ${S} does not index into ${t}`);for(let T=0;T<r;T++)x.values[w*r+T]=e.rank===0?y[0]:y[v*r+T]}return x}const qz=Ga(n=>1/(1+Math.exp(-n)));function jz(n,e,t,a,r){const o=EC(a,e,t),l=se(t),c=Nt(a);if(o){const m=kC(e,c);return r==="string"?n.slice(m,m+l):n.subarray(m,m+l)}const f=r==="string"?ki(n):n,d=tt(a,r,f),p=tt(t,r);for(let m=0;m<p.size;++m){const y=p.indexToLoc(m),x=y.map((v,S)=>v+e[S]);p.set(d.get(...x),...y)}return r==="string"?uN(p.values):p.values}function Xz(n,e,t,a,r,o,l){const c=e[0],f=o[0],d=new Array(f),p=new Array(c),m=e[1];if(f===0){if(c!==0)throw new Error(ZC(c));const w=bt(t,0),T=bt(r,0);return[w,[0,m],T,d,p]}let y=!0,x=0;const v=new Array(f).fill(0);for(let w=0;w<c;++w){const T=n[w*m];if(T<0)throw new Error(JC(w,T));if(T>=f)throw new Error(eN(w,T,f));++v[T],y=y&&T>=x,x=T}let S=!0;for(let w=0;w<f;++w){const T=v[w]===0;d[w]=T,S=S&&!T,v[w]=Math.max(v[w],1),w>0&&(v[w]+=v[w-1])}if(S&&y){const w=n,T=a;for(let $=0;$<c;++$)p[$]=$;return[w,[c,m],T,d,p]}else{const w=v[f-1],T=bt(t,w*m),$=bt(r,w),O=new Array(f).fill(0);for(let A=0;A<c;++A){const z=n[A*m],j=O[z],G=(z===0?0:v[z-1])+j;O[z]++;for(let X=0;X<m;++X)T[G*m+X]=n[A*m+X];$[G]=a[A],p[A]=G}for(let A=0;A<f;++A)if(O[A]===0){const j=A===0?0:v[A-1];T[j*m+0]=A;for(let G=1;G<m;++G)T[j*m+G]=0;$[j]=l}return[T,[w,m],$,d,p]}}function Kz(n,e,t,a,r){const o=se(a),l=e[0],c=r.length,f=[];let d=1,p=-1;for(let w=0;w<c;++w){const T=r[w];if(T===-1){if(p!==-1)throw new Error(tN(p,w));p=w,f.push(1)}else{if(T<0)throw new Error(nN(w,T));d*=T,f.push(T)}}if(p!==-1){if(d<=0)throw new Error(aN());const w=Math.trunc(o/d);if(d*w!==o)throw new Error(sN(a,f));f[p]=w}if(se(f)!==o)throw new Error(rN(a,f));const y=a.length,x=[];if(y>0){x[y-1]=1;for(let w=y-2;w>=0;--w)x[w]=x[w+1]*a[w+1]}const v=[];if(c>0){v[c-1]=1;for(let w=c-2;w>=0;--w)v[w]=v[w+1]*f[w+1]}const S=bt(t,l*c);for(let w=0;w<l;++w){let T=0;for(let $=0;$<y;++$)T+=n[w*y+$]*x[$];for(let $=0;$<c;++$)S[w*c+$]=Math.trunc(T/v[$]),T%=v[$]}return[S,[l,c],f]}function Yz(n,e,t,a,r,o=!1,l=0){const c=a.length,f=[e[0],n.length/e[0]],d=f[1],m=c>0?r[c-1]+1:0;if(m<0)throw new Error(cp());const y=e.slice();y[0]=m;const x=y.reduce((O,A)=>O*A,1),v=bt(t,x);if(c===0)return m>0&&v.fill(l),[v,y];if(m<=0)throw new Error(cp());let S=0,w=1,T=0,$=r[S];for(;;){let O=0;if(w<c){if(O=r[w],$===O){++w;continue}if($>=O)throw new Error(iN())}if($<0||$>=m)throw new Error(oN($,m));$>T&&v.fill(l,T*d,$*d);for(let A=S;A<w;++A){const z=a[A];if(z<0||z>=f[0])throw new Error(lN(A,a[A],f[0]));for(let j=0;j<d;j++)v[$*d+j]+=n[z*d+j]}if(o)for(let A=0;A<d;A++)v[$*d+A]/=w-S;if(S=w,++w,T=$+1,$=O,w>c)break}return T<m&&v.fill(l,T*d,m*d),[v,y]}const Qz=Ga(n=>Math.sqrt(n));const Zz=Ga((n,e)=>{const{pattern:t,replaceGlobal:a,rewrite:r}=e;return n.replace(new RegExp(t,a?"g":""),r)});function Jz(n,e,t,a){const r=tt(n,e.dtype);for(let o=0;o<r.size;o++){const l=r.indexToLoc(o),c=new Array(l.length);for(let f=0;f<c.length;f++)c[f]=l[f]*t[f]+a[f];r.set(e.get(...c),...l)}return r}class eU{constructor(e,t,a,r,o,l){this.separator=or(e),this.nGramWidths=t,this.leftPad=or(a),this.rightPad=or(r),this.padWidth=o,this.preserveShort=l}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const a=this.getPadWidth(t);return Math.max(0,e+2*a-t+1)}createNGrams(e,t,a,r,o,l){for(let c=0;c<o;++c){const f=this.getPadWidth(l),d=Math.max(0,f-c),p=Math.max(0,f-(o-(c+1))),m=l-(d+p),y=t+(d>0?0:c-f);let x=0;x+=d*this.leftPad.length;for(let $=0;$<m;++$)x+=e[y+$].length;x+=p*this.rightPad.length;const v=d+p+m-1;x+=v*this.separator.length,a[r+c]=new Uint8Array(x);const S=a[r+c];let w=0;const T=$=>$.forEach(O=>S[w++]=O);for(let $=0;$<d;++$)T(this.leftPad),T(this.separator);for(let $=0;$<m-1;++$)T(e[y+$]),T(this.separator);if(m>0){T(e[y+m-1]);for(let $=0;$<p;++$)T(this.separator),T(this.rightPad)}else{for(let $=0;$<p-1;++$)T(this.rightPad),T(this.separator);T(this.rightPad)}}}compute(e,t){const a=e.length,r=t.length;if(r>0){let f=t[0];if(f!==0)throw new Error(`First split value must be 0, got ${f}`);for(let d=1;d<r;++d){let p=t[d]>=f;if(p=p&&t[d]<=a,!p)throw new Error(`Invalid split value ${t[d]}, must be in [${f}, ${a}]`);f=t[d]}if(f!==a)throw new Error(`Last split value must be data size. Expected ${a}, got ${f}`)}const o=r-1,l=bt("int32",r);if(a===0||r===0){const f=new Array(a);for(let d=0;d<=o;++d)l[d]=0;return[f,l]}l[0]=0;for(let f=1;f<=o;++f){const d=t[f]-t[f-1];let p=0;this.nGramWidths.forEach(m=>{p+=this.getNumNGrams(d,m)}),this.preserveShort&&d>0&&p===0&&(p=1),l[f]=l[f-1]+p}const c=new Array(l[o]);for(let f=0;f<o;++f){const d=t[f];let p=l[f];if(this.nGramWidths.forEach(m=>{const y=t[f+1]-t[f],x=this.getNumNGrams(y,m);this.createNGrams(e,d,c,p,x,m),p+=x}),this.preserveShort&&p===l[f]){const m=t[f+1]-t[f];if(m===0)continue;const y=m+2*this.padWidth;this.createNGrams(e,d,c,p,1,y)}}return[c,l]}}function tU(n,e,t,a,r,o,l,c){return new eU(t,a,r,o,l,c).compute(n,e)}function nU(n,e,t,a){if(!n.length)return;if(e.length===0){for(let o=0;o<n.length;++o)a.push(n.subarray(o,o+1));return}if(e.length===1){const o=e[0];let l=n.indexOf(o);for(;l!==-1;){const c=n.subarray(0,l);(!t||c.length!==0)&&a.push(c),n=n.subarray(l+1),l=n.indexOf(o)}(!t||n.length!==0)&&a.push(n);return}let r=0;for(let o=0;o<n.length+1;o++)if(o===n.length||e.indexOf(n[o])!==-1){const l=n.subarray(r,o);(!t||l.length!==0)&&a.push(l),r=o+1}}function aU(n,e,t){const a=n.length,r=[];let o=0,l=0;const c=new Array(a);for(let y=0;y<a;++y){const x=r.length;nU(n[y],e,t,r);const v=r.length-x;c[y]=v,o+=v,l=Math.max(l,v)}const f=bt("int32",o*2),d=new Array(o),p=[a,l];let m=0;for(let y=0;y<a;++y)for(let x=0;x<c[y];++x)f[m*2]=y,f[m*2+1]=x,d[m]=r[m],++m;return[f,d,p]}function sU(n,e){const t=bt("int32",n.length);for(let a=0;a<n.length;++a)t[a]=dR(n[a]).modulo(e).getLowBitsUnsigned();return t}const rU=Cn(((n,e)=>n-e));function iU(n,e){const t=new Array(n.rank);for(let r=0;r<t.length;r++)t[r]=n.shape[r]*e[r];const a=tt(t,n.dtype);for(let r=0;r<a.values.length;++r){const o=a.indexToLoc(r),l=new Array(n.rank);for(let f=0;f<l.length;f++)l[f]=o[f]%n.shape[f];const c=n.locToIndex(l);a.values[r]=n.values[c]}return a}const qo=(n,e)=>{const t=e.value-n.value;return t===0?n.index-e.index:t};function $N(n,e,t=0,a=n.length-1){for(;a>t;){if(a-t>600){const c=a-t+1,f=e-t+1,d=Math.log(c),p=.5*Math.exp(2*d/3),m=.5*Math.sqrt(d*p*(c-p)/c)*Math.sign(f-c/2),y=Math.max(t,Math.floor(e-f*p/c+m)),x=Math.min(a,Math.floor(e+(c-f)*p/c+m));$N(n,e,y,x)}const r=n[e];let o=t,l=a;for(Mo(n,t,e),qo(n[a],r)>0&&Mo(n,t,a);o<l;){for(Mo(n,o,l),o++,l--;qo(n[o],r)<0;)o=o+1;for(;qo(n[l],r)>0;)l=l-1}qo(n[t],r)===0?Mo(n,t,l):(l=l+1,Mo(n,l,a)),l<=e&&(t=l+1),e<=l&&(a=l-1)}}function oU(n,e,t,a,r){const o=e[e.length-1],[l,c]=[n.length/o,o],f=Ss(t,l*a),d=Ss("int32",l*a);for(let m=0;m<l;m++){const y=m*c,x=n.subarray(y,y+c);let v=new Array(x.length);x.forEach(($,O)=>v[O]={value:$,index:O}),a<v.length&&($N(v,a),v=v.slice(0,a)),r&&v.sort(qo);const S=m*a,w=f.subarray(S,S+a),T=d.subarray(S,S+a);for(let $=0;$<a;$++)w[$]=v[$].value,T[$]=v[$].index}const p=e.slice();return p[p.length-1]=a,[tt(p,t,f),tt(p,"int32",d)]}function lU(n,e,t,a){const r=xt(e,t)[0],o=[1,t[0],1];for(let v=0;v<r;v++)o[0]*=t[v];o[1]=t[r];for(let v=r+1;v<t.length;v++)o[2]*=t[v];const l=new Map,c=new Int32Array(t[r]),f=new dr(o,a,n),d=[],p=o[0]===1&&o[2]===1;for(let v=0;v<t[r];v++){let S;if(p)S=n[v].toString();else{const T=[];for(let $=0;$<o[0];$++)for(let O=0;O<o[2];O++)T.push(f.get($,v,O));S=T.join(",")}const w=l.get(S);if(w!=null)c[v]=w;else{const T=l.size;l.set(S,T),c[v]=T,d.push(v)}}const m=o.slice();m[1]=l.size;const y=new dr(m,a);d.forEach((v,S)=>{for(let w=0;w<o[0];w++)for(let T=0;T<o[2];T++)y.set(f.get(w,v,T),w,S,T)});const x=t.slice();return x[r]=m[1],{outputValues:y.values,outputShape:x,indices:c}}const uU=Object.freeze(Object.defineProperty({__proto__:null,addImpl:uz,bincountImpl:cz,bincountReduceImpl:fz,bitwiseAndImpl:dz,castImpl:lz,ceilImpl:hz,concatImpl:pz,equalImpl:mz,expImpl:gz,expm1Impl:yz,floorImpl:bz,gatherNdImpl:xz,gatherV2Impl:vz,greaterEqualImpl:Sz,greaterImpl:wz,lessEqualImpl:Cz,lessImpl:Tz,linSpaceImpl:Nz,logImpl:$z,maxImpl:Ez,maximumImpl:kz,minimumImpl:Rz,multiplyImpl:NN,negImpl:_z,notEqualImpl:Az,prodImpl:Iz,raggedGatherImpl:Vz,raggedRangeImpl:Mz,raggedTensorToTensorImpl:Pz,rangeImpl:Gz,rsqrtImpl:Hz,scatterImpl:Wz,sigmoidImpl:qz,simpleAbsImpl:oz,sliceImpl:jz,sparseFillEmptyRowsImpl:Xz,sparseReshapeImpl:Kz,sparseSegmentReductionImpl:Yz,sqrtImpl:Qz,staticRegexReplaceImpl:Zz,stridedSliceImpl:Jz,stringNGramsImpl:tU,stringSplitImpl:aU,stringToHashBucketFastImpl:sU,subImpl:rU,tileImpl:iU,topKImpl:oU,transposeImpl:Oz,uniqueImpl:lU},Symbol.toStringTag,{value:"Module"}));const{addImpl:cU,bincountImpl:EN,bincountReduceImpl:fU,bitwiseAndImpl:dU,castImpl:hU,ceilImpl:pU,concatImpl:mU,equalImpl:gU,expImpl:yU,expm1Impl:bU,floorImpl:xU,gatherNdImpl:vU,gatherV2Impl:wU,greaterImpl:SU,greaterEqualImpl:TU,lessImpl:CU,lessEqualImpl:NU,linSpaceImpl:$U,logImpl:EU,maxImpl:kU,maximumImpl:RU,minimumImpl:_U,multiplyImpl:AU,negImpl:OU,notEqualImpl:IU,prodImpl:DU,raggedGatherImpl:LU,raggedRangeImpl:FU,raggedTensorToTensorImpl:BU,rangeImpl:zU,rsqrtImpl:UU,scatterImpl:VU,sigmoidImpl:MU,simpleAbsImpl:kN,sliceImpl:PU,sparseFillEmptyRowsImpl:GU,sparseReshapeImpl:HU,sparseSegmentReductionImpl:RN,sqrtImpl:WU,staticRegexReplaceImpl:qU,stridedSliceImpl:jU,stringNGramsImpl:XU,stringSplitImpl:KU,stringToHashBucketFastImpl:YU,subImpl:QU,tileImpl:ZU,topKImpl:JU,transposeImpl:T0,uniqueImpl:eV}=uU;function _N(n,e){return["x","y","z","w","u","v"].slice(0,e).map(t=>`${n}.${t}`)}function Vt(n,e){return e===1?[n]:_N(n,e)}function tV(n,e){if(n===1)return"rc";let t="";for(let a=0;a<n;a++)t+=e[a],a<n-1&&(t+=",");return t}class nV{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=Lt(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const t=Vt("rc",this.rank),a=We(this.rank),r=this.getOutOfBoundsCondition(t),o=this.getSetup(t),l=this.getOutput(t);this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();

          if(${r}) {
            setOutput(vec4(0));
          } else {
            ${o}

            setOutput(vec4(${l}));
          }
        }
      `}}getSourceCoordsArr(e){const t=[];for(let a=0;a<=1;a++)for(let r=0;r<=1;r++){let o=`${a===0?"r":"rp1"}, ${r===0?"c":"cp1"}`;for(let l=2;l<this.rank;l++)o=`${e[e.length-1-l]},`+o;t.push(o)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let a=this.rank-2;a<this.rank;a++)t+=`${e[a]} >= ${this.enableShapeUniforms?`outShape[${a}]`:this.outputShape[a]}`,a<this.rank-1&&(t+="||");return t}getSetup(e){if(this.rank===1)return"";const t=e.slice(-2),a=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${a};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){const t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}class AN{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=Lt(this.outputShape.length);let a="";for(let r=0;r<4;r++){let o="thisRC = rc;";r%2===1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),a+=`
        ${o}
        ${r>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${r}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${r>0?"}":""}
      `}this.userCode=`
      ${aV(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?w0():v0(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${a}

        setOutput(result);
      }
    `}}function aV(n,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?ZF(["r","c","d"],"inputShape"):Sr(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class sV{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,a){const r=_2(t,a),o=A2(e,r,a);o in this.freeTextures||(this.freeTextures[o]=[]),o in this.usedTextures||(this.usedTextures[o]=[]);const l=R2(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,a);if(this.freeTextures[o].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=l,this.log();const f=this.freeTextures[o].pop();return this.usedTextures[o].push(f),f}let c;return r===Ct.PACKED_2X2_FLOAT32?c=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===Ct.PACKED_2X2_FLOAT16?c=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===Ct.UNPACKED_FLOAT32?c=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===Ct.UNPACKED_FLOAT16?c=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===Ct.PACKED_4X1_UNSIGNED_BYTE&&(c=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[o].push(c),this.numUsedTextures++,this._numBytesAllocated+=l,this.log(),c}releaseTexture(e,t,a,r){if(this.freeTextures==null)return;const o=_2(a,r),l=A2(t,o,r);l in this.freeTextures||(this.freeTextures[l]=[]);const c=R2(t,o,this.gpgpu.gl,this.gpgpu.textureConfig,r),f=q().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");f!==-1&&this._numBytesAllocated>f?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=c):(this.freeTextures[l].push(e),this.numFreeTextures++,this._numBytesFree+=c),this.numUsedTextures--;const d=this.usedTextures[l],p=d&&d.indexOf(e);if(p==null||p<0)throw new Error("Cannot release a texture that was never provided by this texture manager");d[p]=d[d.length-1],d.pop(),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function rV(n,e){const t=n;if(e===t.R32F)return 4;if(e===t.R16F)return 2;if(e===t.RGBA32F)return 16;if(e===n.RGBA)return 16;if(e===t.RGBA16F)return 8;if(e===t.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function R2(n,e,t,a,r){const o=iV(e,a);let l;if(r){const[f,d]=Bi(n[0],n[1]);l=f*d}else{const[f,d]=bl(n[0],n[1]);l=f*d}const c=rV(t,o);return l*c}function iV(n,e){switch(n){case Ct.PACKED_2X2_FLOAT32:return TN(e);case Ct.PACKED_2X2_FLOAT16:return CN(e);case Ct.UNPACKED_FLOAT32:return vN(e);case Ct.UNPACKED_FLOAT16:return wN(e);case Ct.PACKED_4X1_UNSIGNED_BYTE:return SN(e);default:throw new Error(`Unknown physical texture type ${n}`)}}function oV(n){return q().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?Ct.PACKED_2X2_FLOAT32:Ct.UNPACKED_FLOAT32:n?Ct.PACKED_2X2_FLOAT16:Ct.UNPACKED_FLOAT16}function _2(n,e){if(n===xn.UPLOAD)return Ct.PACKED_2X2_FLOAT32;if(n===xn.RENDER||n==null)return oV(e);if(n===xn.DOWNLOAD||n===xn.PIXELS)return Ct.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function A2(n,e,t){return`${n[0]}_${n[1]}_${e}_${t}`}class ua{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=Lt(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const Gn="if (isnan(x)) return x;",lV="return x;",O2="return abs(x);",uV="return (x >= 0.0) ? x : (exp(x) - 1.0);",cV=Gn+`
  return (x < 0.0) ? 0.0 : x;
`,fV=Gn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,ys="return x;",dV="return 1.0 / (1.0 + exp(-1.0 * x));";const hV="return x;",pV=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,mV=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,gV=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,yV="return 1.0 / (1.0 + exp(-1.0 * x));";class vs{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=Lt(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class bV{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=Lt(this.outputShape.length);const t=e.length,a=Vt("rc",t),r=We(t),o=tV(t,a),l=a.slice(-2),c=t<=1?"rc":`vec2(${l.join(",")})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${o});

        setOutput(getChannel(packedInput, ${c}));
      }
    `}}const xV=KT,vV=1e-7,wV=1e-4,Yu={};function SV(n){return n in Yu||(Yu[n]={}),Yu[n]}const TV=q().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),CV=600;function NV(){return q().global.screen==null?1024:q().global.screen.height*q().global.screen.width*window.devicePixelRatio*CV/1024/1024}class Jc extends Ep{nextDataId(){return Jc.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!q().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(e!=null){if(e instanceof Mh)t=e;else{const a=na(q().getNumber("WEBGL_VERSION"),e);t=new Mh(a)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const a=na(q().getNumber("WEBGL_VERSION"));t=new Mh(a),this.binaryCache=SV(q().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new sV(this.gpgpu),this.numMBBeforeWarning=NV(),this.texData=new J2(this,Oa())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,a,r,o,l){const c=this.makeTensorInfo(t,a),f=this.texData.get(c.dataId);f.isPacked=!1,f.texture={texture:e,texShape:[r,o]},f.texShape=[r,o];const d=Xu(t),p=new C2(d,!1,l),m=this.runWebGLProgram(p,[c],a,[[r,o]]);return m.shape=t,f.texture=null,this.disposeIntermediateTensorInfo(c),m.dataId}write(e,t,a){if((q().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||q().getBool("DEBUG"))&&this.checkNumericalProblems(e),a==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:a,values:e,usage:xn.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){const t=this.texData.get(e);t.refCount--}}move(e,t,a,r,o){if(q().getBool("DEBUG")&&this.checkNumericalProblems(t),r==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:a,dtype:r,values:t,usage:xn.UPLOAD,refCount:o})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:a,dtype:r,complexTensorInfos:o,slice:l,shape:c,isPacked:f}=t;if(l!=null){let y;f?y=new vs(c,ys):y=new ua(c,ys);const x=this.runWebGLProgram(y,[{dataId:e,shape:c,dtype:r}],r),v=this.readSync(x.dataId);return this.disposeIntermediateTensorInfo(x),v}if(a!=null)return this.convertAndCacheOnCPU(e);if(r==="string")return a;const d=this.activeTimers!=null;let p;d&&(p=Xn());let m;if(r==="complex64"){const y=this.readSync(o.real.dataId),x=this.readSync(o.imag.dataId);m=up(y,x)}else m=this.getValuesFromTexture(e);return d&&(this.downloadWaitMs+=Xn()-p),this.convertAndCacheOnCPU(e,m)}async read(e){if(this.pendingRead.has(e)){const v=this.pendingRead.get(e);return new Promise(S=>v.push(S))}const t=this.texData.get(e),{values:a,shape:r,slice:o,dtype:l,complexTensorInfos:c,isPacked:f}=t;if(o!=null){let v;f?v=new vs(r,ys):v=new ua(r,ys);const S=this.runWebGLProgram(v,[{dataId:e,shape:r,dtype:l}],l),w=this.read(S.dataId);return this.disposeIntermediateTensorInfo(S),w}if(a!=null)return this.convertAndCacheOnCPU(e);if(q().getBool("DEBUG")&&!q().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&q().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let d=null,p;if(l!=="complex64"&&q().get("WEBGL_BUFFER_SUPPORTED")){p=this.decode(e);const v=this.texData.get(p.dataId);d=this.gpgpu.createBufferFromTexture(v.texture.texture,...Wu(r))}this.pendingRead.set(e,[]),l!=="complex64"&&await this.gpgpu.createAndWaitForFence();let m;if(l==="complex64"){const v=await Promise.all([this.read(c.real.dataId),this.read(c.imag.dataId)]),S=v[0],w=v[1];m=up(S,w)}else if(d==null)m=this.getValuesFromTexture(e);else{const v=se(r);m=this.gpgpu.downloadFloat32MatrixFromBuffer(d,v)}if(p!=null&&this.disposeIntermediateTensorInfo(p),d!=null){const v=this.gpgpu.gl;ce(v,()=>v.deleteBuffer(d))}const y=this.convertAndCacheOnCPU(e,m),x=this.pendingRead.get(e);return this.pendingRead.delete(e),x.forEach(v=>v(y)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&Oa().removeDataId(e,this),this.pendingDeletes--),y}readToGPU(e,t={}){const a=this.texData.get(e),{values:r,shape:o,slice:l,dtype:c,isPacked:f,texture:d}=a;if(c==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(l!=null){let x;f?x=new vs(o,ys):x=new ua(o,ys);const v=this.runWebGLProgram(x,[{dataId:e,shape:o,dtype:c}],c),S=this.readToGPU(v,t);return this.disposeIntermediateTensorInfo(v),S}if(d==null)throw r!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const p=this.decode(e,t.customTexShape),m=Oa().makeTensorFromTensorInfo(p),y=this.texData.get(p.dataId);return Object.assign({tensorRef:m},y.texture)}bufferSync(e){const t=this.readSync(e.dataId);if(e.dtype==="string")try{const a=t.map(r=>wi(r));return tt(e.shape,e.dtype,a)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return tt(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){const a=e[t];if(!NF(a))throw q().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${a} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${a} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:t,dtype:a,isPacked:r}=this.texData.get(e),o=se(t);if(q().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const y=this.decode(e),x=this.texData.get(y.dataId),v=this.gpgpu.downloadMatrixFromPackedTexture(x.texture.texture,...Wu(t)).subarray(0,o);return this.disposeIntermediateTensorInfo(y),v}const l=q().getBool("WEBGL_PACK")&&r===!0,c=l?Xu(t):t,f=l?new MB(c):new VB(c),d=this.runWebGLProgram(f,[{shape:c,dtype:a,dataId:e}],"float32"),p=this.texData.get(d.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(p.texture.texture,p.texShape[0],p.texShape[1]).subarray(0,o);return this.disposeIntermediateTensorInfo(d),m}timerAvailable(){return q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const t=this.activeTimers,a=[];let r=!1;this.programTimersStack==null?(this.programTimersStack=a,r=!0):this.activeTimers.push(a),this.activeTimers=a,e();const o=fr(this.activeTimers.map(f=>f.query)).filter(f=>f!=null),l=fr(this.activeTimers.map(f=>f.name)).filter(f=>f!=null);this.activeTimers=t,r&&(this.programTimersStack=null);const c={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const f=await Promise.all(o);c.kernelMs=Wk(f),c.getExtraProfileInfo=()=>f.map((d,p)=>({name:l[p],ms:d})).map(d=>`${d.name}: ${d.ms}`).join(", ")}else c.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,c})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Xn(),endMs:null}}endTimer(e){return q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Xn(),e)}async getQueryTime(e){if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:a}=this.texData.get(e);return a!=null&&(this.disposeData(a.real.dataId,t),this.disposeData(a.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:a,texShape:r,usage:o,isPacked:l,slice:c}=this.texData.get(e),f=c&&c.origDataId||e,d=this.dataRefCount.get(f);d>1?this.dataRefCount.set(f,d-1):(this.dataRefCount.delete(f),t!=null&&(this.numBytesInGPU-=this.computeBytes(r,a),this.textureManager.releaseTexture(t,r,o,l)));const p=this.texData.get(e);p.texture=null,p.texShape=null,p.isPacked=!1,p.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=TV){return q().getBool("WEBGL_CPU_FORWARD")&&e.every(a=>this.texData.get(a.dataId).texture==null&&se(a.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){Qn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return xV(e.shape,t)}packedUnaryOp(e,t,a){const r=new vs(e.shape,t),o=this.compileAndRun(r,[e],a);return Oa().makeTensorFromTensorInfo(o)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const r=kN(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,r)}if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,O2,e.dtype);const t=new ua(e.shape,O2),a=this.compileAndRun(t,[e]);return Oa().makeTensorFromTensorInfo(a)}makeTensorInfo(e,t,a){let r;if(t==="string"&&a!=null&&a.length>0&&Ac(a[0])){const o=a.map(l=>or(l));r=this.write(o,e,t)}else r=this.write(a,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,a){return Oa().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,a),this)}unpackTensor(e){const t=new bV(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new nV(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){const a=[Ri(e.shape),..._i(e.shape)],r={dtype:e.dtype,shape:a,dataId:e.dataId},o=[Ri(t),..._i(t)],l=new AN(o,a),c=!0,f=[a],d=this.runWebGLProgram(l,[r],e.dtype,f,c);return{dataId:d.dataId,shape:t,dtype:d.dtype}}decode(e,t){const a=this.texData.get(e),{isPacked:r,shape:o,dtype:l}=a;if(t!=null){const y=se(o),x=t[0]*t[1]*4;_(y<=x,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const c=Xu(o);let f;r?f=new UB(c):f=new zB(c);const d=!0,p=[t??Wu(c)],m=this.runWebGLProgram(f,[{shape:c,dtype:l,dataId:e}],l,p,d,t);return{dtype:l,shape:o,dataId:m.dataId}}runWebGLProgram(e,t,a,r,o=!1,l){const c=this.makeTensorInfo(e.outputShape,a),f=this.texData.get(c.dataId);if(e.packedOutput&&(f.isPacked=!0),e.outPackingScheme===al.DENSE){const T=l??Wu(e.outputShape);f.texShape=T.map($=>$*2)}if(e.outTexUsage!=null&&(f.usage=e.outTexUsage),se(c.shape)===0)return f.values=Ss(c.dtype,0),c;const d=[],p=t.map(T=>{if(T.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let $=this.texData.get(T.dataId);if($.texture==null){if(!e.packedInputs&&se(T.shape)<=q().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:T.shape,texData:null,isUniform:!0,uniformValues:$.values};e.packedInputs&&($.isPacked=!0,$.shape=T.shape)}if(this.uploadToGPU(T.dataId),!!$.isPacked!=!!e.packedInputs)T=$.isPacked?this.unpackTensor(T):this.packTensor(T),d.push(T),$=this.texData.get(T.dataId);else if($.isPacked&&!$c($.shape,T.shape)){const O=T,A=T.shape;T.shape=$.shape,T=this.packedReshape(T,A),d.push(T),$=this.texData.get(T.dataId),O.shape=A}return{shape:T.shape,texData:$,isUniform:!1}});this.uploadToGPU(c.dataId);const m={shape:c.shape,texData:f,isUniform:!1},y=BB(e,p,m),x=this.getAndSaveBinary(y,()=>LB(this.gpgpu,e,p,m)),v=this.activeTimers!=null;let S;v&&(S=this.startTimer()),q().get("ENGINE_COMPILE_ONLY")||FB(this.gpgpu,x,p,m,r),d.forEach(T=>this.disposeIntermediateTensorInfo(T)),v&&(S=this.endTimer(S),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(S)}));const w=q().getNumber("WEBGL_FLUSH_THRESHOLD");if(w>0){const T=Xn();T-this.lastGlFlushTime>w&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=T)}if(!q().getBool("WEBGL_LAZILY_UNPACK")&&f.isPacked&&o===!1){const T=this.unpackTensor(c);return this.disposeIntermediateTensorInfo(c),T}return c}compileAndRun(e,t,a,r,o=!1){return a=a||t[0].dtype,this.runWebGLProgram(e,t,a,r,o)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(q().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(t=>{this.gpgpu.deleteProgram(this.binaryCache[t].webGLProgram),delete this.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=De(()=>{if(!q().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=q().getBool("DEBUG");q().set("DEBUG",!1);const t=this.abs(_e(1e-8)).dataSync()[0];if(q().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?vV:wV}uploadToGPU(e){const t=this.texData.get(e),{shape:a,dtype:r,values:o,texture:l,usage:c,isPacked:f}=t;if(l!=null)return;const d=this.activeTimers!=null;let p;d&&(p=Xn());let m=t.texShape;if(m==null&&(m=GF(a,f),t.texShape=m),o!=null){const y=Xu(a);let x,v=m[1],S=m[0];const w=o instanceof Uint8Array||o instanceof Uint8ClampedArray;(f||!w)&&([v,S]=Bi(m[0],m[1])),f?x=new GB(y,w):x=new C2(y,w);const T=w?[S,v]:m,$=this.makeTensorInfo(T,r),O=this.texData.get($.dataId);w?O.usage=xn.PIXELS:O.usage=xn.UPLOAD,O.texShape=T,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture($.dataId),v,S,o);const A=[[S,v]],j=this.runWebGLProgram(x,[$],r,A,!0),G=this.texData.get(j.dataId);t.texShape=G.texShape,t.isPacked=G.isPacked,t.usage=G.usage,q().get("ENGINE_COMPILE_ONLY")?this.disposeData(j.dataId):(t.texture=G.texture,t.values=null,this.texData.delete(j.dataId)),this.disposeIntermediateTensorInfo($),d&&(this.uploadWaitMs+=Xn()-p)}else{const y=this.acquireTexture(m,c,r,f);t.texture=y}}convertAndCacheOnCPU(e,t){const a=this.texData.get(e),{dtype:r}=a;return t!=null&&(a.values=$V(t,r)),a.values}acquireTexture(e,t,a,r){if(this.numBytesInGPU+=this.computeBytes(e,a),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${o} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*uc(t)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(const[,t]of Object.entries(this.binaryCache)){const a=new Promise(r=>{try{this.checkCompletion_(t),r(!0)}catch(o){throw o}});e.push(a)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await RC(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(pN(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);const{variablesLocations:t,customUniformLocations:a,infLoc:r,nanLoc:o,outShapeLocation:l,outShapeStridesLocation:c,outTexShapeLocation:f}=xN(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=a,e.infLoc=r,e.nanLoc=o,e.outShapeLocation=l,e.outShapeStridesLocation=c,e.outTexShapeLocation=f}}createTensorFromGPUData(e,t,a){e.channels=e.channels||"RGBA";const{texture:r,height:o,width:l,channels:c}=e,f=Oa().backend;if(!f.gpgpu.gl.isTexture(r))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const d=f.writeTexture(r,t,a,o,l,c);return Oa().makeTensorFromDataId(d,t,a,f)}}Jc.nextDataId=0;function $V(n,e){if(e==="float32"||e==="complex64")return n;if(e==="int32"||e==="bool"){const t=e==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let a=0;a<t.length;++a)t[a]=Math.round(n[a]);return t}else throw new Error(`Unknown dtype ${e}`)}Rw()&&Ow("webgl",()=>new Jc,2);const C0=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class vr{constructor(e,t,a){this.variableNames=["A","B"],this.outputShape=Fe(t,a),this.enableShapeUniforms=Lt(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const Cr=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class Pi{constructor(e,t,a,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Fe(t,a);const o=this.outputShape.length;this.enableShapeUniforms=Lt(o);let l="";if(r)if(o===0||se(this.outputShape)===1)l=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(l=`
          ${We(o)} coords = getOutputCoords();
        `,o===1)this.enableShapeUniforms?l+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:l+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const f=Vt("coords",o);this.enableShapeUniforms?l+=`
            bool nextRowOutOfBounds =
              (${f[o-2]} + 1) >= outShape[${o} - 2];
            bool nextColOutOfBounds =
              (${f[o-1]} + 1) >= outShape[${o} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:l+=`
            bool nextRowOutOfBounds =
              (${f[o-2]} + 1) >= ${this.outputShape[o-2]};
            bool nextColOutOfBounds =
              (${f[o-1]} + 1) >= ${this.outputShape[o-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${l}

        setOutput(result);
      }
    `}}function rn(n){const{inputs:e,backend:t}=n,{x:a}=e;return t.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}const EV={kernelName:Dc,backendName:"webgl",kernelFunc:rn};function Os(n){const{inputs:e,backend:t}=n,{real:a,imag:r}=e,o=t.makeTensorInfo(a.shape,"complex64"),l=t.texData.get(o.dataId),c=rn({inputs:{x:a},backend:t}),f=rn({inputs:{x:r},backend:t});return l.complexTensorInfos={real:c,imag:f},o}const kV={kernelName:em,backendName:"webgl",kernelFunc:Os};const ON="return (a < 0.) ? b * a : a;",IN=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function RV(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{alpha:o}=a,l=t.makeTensorInfo([],"float32",Oi(o,"float32")),c=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Pi(IN,r.shape,l.shape):new vr(ON,r.shape,l.shape),f=t.runWebGLProgram(c,[r,l],"float32");return t.disposeIntermediateTensorInfo(l),f}const _V={kernelName:Gm,backendName:"webgl",kernelFunc:RV};const DN="return (a < 0.) ? b * a : a;",LN=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function AV(n){const{inputs:e,backend:t}=n,{x:a,alpha:r}=e,o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Pi(LN,a.shape,r.shape):new vr(DN,a.shape,r.shape);return t.runWebGLProgram(o,[a,r],"float32")}const OV={kernelName:wg,backendName:"webgl",kernelFunc:AV};const Gi="if (isnan(x)) return x;";function Le({opSnippet:n,packedOpSnippet:e,cpuKernelImpl:t,dtype:a}){return({inputs:r,backend:o})=>{const{x:l}=r,c=o,f=a||l.dtype;if(c.shouldExecuteOnCPU([l])&&t!=null){const m=c.texData.get(l.dataId),y=t(m.values,f);return c.makeTensorInfo(l.shape,f,y)}const d=q().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let p;return d?p=new vs(l.shape,e):p=new ua(l.shape,n),c.runWebGLProgram(p,[l],f)}}function Et({opSnippet:n,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:a=!1,cpuKernelImpl:r,dtype:o}){return({inputs:l,backend:c})=>{const{a:f,b:d}=l,p=c;if(a&&f.dtype==="complex64"){const v=p.texData.get(f.dataId),S=p.texData.get(d.dataId),[w,T]=[[v.complexTensorInfos.real,S.complexTensorInfos.real],[v.complexTensorInfos.imag,S.complexTensorInfos.imag]].map(O=>{const[A,z]=O,j={dataId:A.dataId,dtype:A.dtype,shape:f.shape},G={dataId:z.dataId,dtype:z.dtype,shape:d.shape},X=new vr(n,f.shape,d.shape);return p.runWebGLProgram(X,[j,G],ta(A.dtype,z.dtype))}),$=Os({inputs:{real:w,imag:T},backend:p});return p.disposeIntermediateTensorInfo(w),p.disposeIntermediateTensorInfo(T),$}const m=o||ta(f.dtype,d.dtype);if((f.dtype==="string"||d.dtype==="string"||p.shouldExecuteOnCPU([f,d]))&&r!=null){const v=p.texData.get(f.dataId).values,S=p.texData.get(d.dataId).values,w=f.dtype==="string"?ki(v):v,T=f.dtype==="string"?ki(S):S,[$,O]=r(f.shape,d.shape,w,T,m),A=p.makeTensorInfo(O,m),z=p.texData.get(A.dataId);return z.values=$,A}const y=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let x;return y?x=new Pi(e,f.shape,d.shape,t):x=new vr(n,f.shape,d.shape),p.runWebGLProgram(x,[f,d],m)}}function sl(n,e=!1){if(n==="linear")return e?hV:lV;if(n==="relu")return e?mV:cV;if(n==="elu")return e?pV:uV;if(n==="relu6")return e?gV:fV;if(n==="prelu")return e?LN:DN;if(n==="leakyrelu")return e?IN:ON;if(n==="sigmoid")return e?yV:dV;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class FN{constructor(e,t,a,r=!1,o=!1,l=!1,c=null,f=!1,d=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a,this.enableShapeUniforms=Lt(this.outputShape.length);const p=r?e[1]:e[2],m=Math.ceil(p/2),y=r?"i * 2, rc.y":"rc.y, i * 2",x=o?"rc.z, i * 2":"i * 2, rc.z",v=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],S=o?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let w="",T="";c&&(f?w=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${c}
        }`:d?w=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${c}
        }`:w=`vec4 activation(vec4 x) {
          ${c}
        }`,T="result = activation(result);");const $=l?"result += getBiasAtOutCoords();":"";l&&this.variableNames.push("bias"),f&&this.variableNames.push("preluActivationWeights"),d&&this.variableNames.push("leakyreluAlpha");let O="rc.x",A="rc.x";e[0]<t[0]?O=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(A=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${w}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${m}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${O};
        int batchB = ${A};
        for (int i = 0; i < ${m}; i++) {
          vec4 a = getMatrixA(batchA, ${y});
          vec4 b = getMatrixB(batchB, ${x});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${v[0]} * ${S[0]});
          result += (${v[1]} * ${S[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${$}

        ${T}

        setOutput(result);
      }
    `}}const I2={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class D2{constructor(e,t,a){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Fe(t,a),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}const L2="return a * b;";function N0(n){const{inputs:e,backend:t}=n,{a,b:r}=e,o=ta(a.dtype,r.dtype);if(a.dtype==="complex64"){const c=t.texData.get(a.dataId),f=t.texData.get(r.dataId),d=new D2(I2.REAL,a.shape,r.shape),p=new D2(I2.IMAG,a.shape,r.shape),m=[{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:a.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:a.shape},{dataId:f.complexTensorInfos.real.dataId,dtype:f.complexTensorInfos.real.dtype,shape:r.shape},{dataId:f.complexTensorInfos.imag.dataId,dtype:f.complexTensorInfos.imag.dtype,shape:r.shape}],y=t.runWebGLProgram(d,m,"float32"),x=t.runWebGLProgram(p,m,"float32"),v=Os({inputs:{real:y,imag:x},backend:t});return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(x),v}if(t.shouldExecuteOnCPU([a,r])){const c=t.texData.get(a.dataId),f=t.texData.get(r.dataId),[d,p]=AU(a.shape,r.shape,c.values,f.values,o),m=t.makeTensorInfo(p,o),y=t.texData.get(m.dataId);return y.values=d,m}let l;return q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?l=new Pi(L2,a.shape,r.shape):l=new vr(L2,a.shape,r.shape),t.runWebGLProgram(l,[a,r],o)}const IV={kernelName:cg,backendName:"webgl",kernelFunc:N0};function DV(n,e,t){const a=[Ri(n.shape),..._i(n.shape)],r={dtype:n.dtype,shape:a,dataId:n.dataId},o=[Ri(e),..._i(e)],l=new AN(o,a),c=!0,f=[a],d=t.runWebGLProgram(l,[r],n.dtype,f,c);return{dataId:d.dataId,shape:e,dtype:d.dtype}}function le(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{shape:o}=a,l=t,c=se(r.shape),f=jk(o,c),d=se(f);_(c===d,()=>`The new shape (${f}) has ${d} elements and the old shape (${r.shape}) has ${c} elements. The new shape and old shape must have the same number of elements.`);const p=l.texData.get(r.dataId);return p.isPacked&&!$c(r.shape,f)&&!(p.texture!==null&&$c(p.shape,f))?DV(r,f,l):(l.incRef(r.dataId),{dataId:r.dataId,shape:f,dtype:r.dtype})}const LV={kernelName:_g,backendName:"webgl",kernelFunc:le};class F2{constructor(e,t){this.variableNames=["x"];const{windowSize:a,batchSize:r,inSize:o,outSize:l}=e;this.outputShape=[r,l];const c=Math.floor(a/4)*4,f=a%4;let d="sumValue += dot(values, ones);";if(t!=null){const m=1/t;d=`sumValue += dot(values * ${vi(m)?m.toPrecision(2):m}, ones);`}let p="";o%a>0&&(p=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${a};

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${c};
        if (${f===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${d}
        } else if (${f===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${d}
        } else if (${f===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${d}
        }
        setOutput(sumValue);
      }
    `}}class FV{constructor(e,t){this.variableNames=["x"];const{windowSize:a,batchSize:r,inSize:o,outSize:l}=e;this.outputShape=[r,l];let c="0.0",f="";t==="prod"?c="1.0":t==="min"?(c="1.0 / 1e-20",f="min"):t==="max"&&(c="-1.0 / 1e-20",f="max");let d=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="sum"?d="sumValue":t==="prod"?d="prodValue":t==="all"?d="allValue":t==="any"&&(d="anyValue");const p=Math.floor(a/4)*4,m=a%4;let y=`
      if (${t==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${t==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${f}(values, minMaxValue);
        if (${t==="min"} || ${t==="max"}) {
          minMaxValue = ${f}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,x="vec4";t==="all"?(c="1.0",y=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,x="bvec4"):t==="any"&&(c="0.0",y=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,x="bvec4");let v="";o%a>0&&(v=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${c};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${v}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${a};

        vec4 minMaxValue = vec4(${c});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${p}; i += 4) {
          int inIdx = inOffset + i;
          ${x} values = ${x}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${y}
        }

        int inIdx = inOffset + ${p};
        if (${m===1}) {
          ${x} values = ${x}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${y}
        } else if (${m===2}) {
          ${x} values = ${x}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${y}
        } else if (${m===3}) {
          ${x} values = ${x}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${y}
        }
        setOutput(${d});
      }
    `}}function BV(n){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const t=e.length?e[e.length-1].outSize:n[1],a=Qc(t);e.push({inSize:t,windowSize:a,outSize:Math.ceil(t/a)})}return e}function Nr(n,e,t,a){const r=BV(n.shape);let o=n;for(let l=0;l<r.length;l++){const{inSize:c,windowSize:f,outSize:d}=r[l];let p,m;t==="mean"?p=l===0?new F2({windowSize:f,inSize:c,batchSize:n.shape[0],outSize:d},c):new F2({windowSize:f,inSize:c,batchSize:n.shape[0],outSize:d}):p=new FV({windowSize:f,inSize:c,batchSize:n.shape[0],outSize:d},t),m=o,o=a.runWebGLProgram(p,[o],e),m.dataId!==n.dataId&&a.disposeIntermediateTensorInfo(m)}return o}class zV{constructor(e,t){this.variableNames=["A"];const a=new Array(e.length);for(let l=0;l<a.length;l++)a[l]=e[t[l]];this.outputShape=a,this.rank=a.length;const r=We(this.rank),o=UV(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${o}));
    }
    `}}function UV(n){const e=n.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],a=new Array(e);for(let r=0;r<n.length;r++)a[n[r]]=t[r];return a.join()}class VV{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const a=new Array(e.length);for(let p=0;p<a.length;p++)a[p]=e[t[p]];if(this.outputShape=a,this.rank=a.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const r=We(this.rank),o=_N("rc",this.rank),l=new Array(this.rank);for(let p=0;p<t.length;p++)l[t[p]]=o[p];const c=`vec2(${l.slice(-2).join()})`,f=`++${o[this.rank-1]} < ${a[this.rank-1]}`,d=`getChannel(getA(${l.join()}), ${c})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${d};
      if(${f}) {
        result[1] = ${d};
      }
      --${o[this.rank-1]};
      if(++${o[this.rank-2]} < ${a[this.rank-2]}) {
        result[2] = ${d};
        if(${f}) {
          result[3] = ${d};
        }
      }
      setOutput(result);
    }
    `}}function ef(n,e,t){const a=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new VV(n.shape,e):new zV(n.shape,e);return t.runWebGLProgram(a,[n],n.dtype)}function MV(n,e,t,a){const r=e,o=n.shape.length,l=xt(r,n.shape);let c=l;const f=Mn(c,o),d=f!=null;let p=n;d&&(p=ef(n,f,a),c=Pn(c.length,o)),sa("sum",c,o);const[m,y]=ha(p.shape,c);let x=m;t&&(x=Tn(m,l));const v=se(y),w=se(n.shape)/v,T=le({inputs:{x:p},attrs:{shape:[w,v]},backend:a}),$=zc(n.dtype),O=Nr(T,$,"sum",a),A=le({inputs:{x:O},attrs:{shape:x},backend:a});return a.disposeIntermediateTensorInfo(T),a.disposeIntermediateTensorInfo(O),d&&a.disposeIntermediateTensorInfo(p),A}function tf(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{axis:o,keepDims:l}=a;return MV(r,o,l,t)}const PV={kernelName:Kg,backendName:"webgl",kernelFunc:tf};function Pt(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{perm:o}=a,l=t,c=r.shape.length,f=new Array(c);for(let p=0;p<f.length;p++)f[p]=r.shape[o[p]];let d;if(l.shouldExecuteOnCPU([r])){const m=l.texData.get(r.dataId).values,y=T0(m,r.shape,r.dtype,o,f);d=l.makeTensorInfo(f,r.dtype);const x=l.texData.get(d.dataId);x.values=y}else d=ef(r,o,l);return d}const GV={kernelName:Xo,backendName:"webgl",kernelFunc:Pt};const BN=1e3;function kc({a:n,b:e,transposeA:t,transposeB:a,backend:r,bias:o=null,preluActivationWeights:l=null,leakyreluAlpha:c=0,activation:f=null}){const d=n.shape.length,p=e.shape.length,m=t?n.shape[d-2]:n.shape[d-1],y=a?e.shape[p-1]:e.shape[p-2],x=t?n.shape[d-1]:n.shape[d-2],v=a?e.shape[p-2]:e.shape[p-1],S=n.shape.slice(0,-2),w=e.shape.slice(0,-2),T=se(S),$=se(w),A=Fe(n.shape.slice(0,-2),e.shape.slice(0,-2)).concat([x,v]);_(m===y,()=>`Error in matMul: inner shapes (${m}) and (${y}) of Tensors with shapes ${n.shape} and ${e.shape} and transposeA=${t} and transposeB=${a} must match.`);const z=t?[T,m,x]:[T,x,m],j=a?[$,v,y]:[$,y,v],G=le({inputs:{x:n},backend:r,attrs:{shape:z}}),X=le({inputs:{x:e},backend:r,attrs:{shape:j}}),V=[G,X],U=Math.max(T,$),R=t?G.shape[1]:G.shape[2],Z=o!=null,oe=l!=null,fe=f==="leakyrelu",de=f!=null?sl(f,!0):null,P=Z||oe||fe||de!=null;let ae;if((x===1||v===1)&&R>BN&&P===!1){let ge=G,be=X;t&&(ge=Pt({inputs:{x:G},backend:r,attrs:{perm:[0,2,1]}}),V.push(ge)),a&&(be=Pt({inputs:{x:X},backend:r,attrs:{perm:[0,2,1]}}),V.push(be));const L=v!==1,Q=v===1;let re=ge;L&&(re=le({inputs:{x:ge},backend:r,attrs:{shape:[U,R,1]}}),V.push(re));const he=v===1?2:1;let Se=be;Q&&(Se=le({inputs:{x:be},backend:r,attrs:{shape:[U,1,R]}}),V.push(Se));const $e=N0({inputs:{a:re,b:Se},backend:r});ae=tf({inputs:{x:$e},backend:r,attrs:{axis:he,keepDims:!0}}),V.push($e)}else{const ge=ta(n.dtype,e.dtype),be=new FN(z,j,[U,x,v],t,a,Z,de,oe,fe),L=[G,X];if(o!=null&&L.push(o),oe&&L.push(l),fe){const Q=r.makeTensorInfo([],"float32",Oi(c,"float32"));L.push(Q),V.push(Q)}ae=r.runWebGLProgram(be,L,ge)}const ie=le({inputs:{x:ae},backend:r,attrs:{shape:A}});V.push(ae);for(const ge of V)r.disposeIntermediateTensorInfo(ge);return ie}function HV(n){const{inputs:e,backend:t,attrs:a}=n,{a:r,b:o,bias:l,preluActivationWeights:c}=e,{transposeA:f,transposeB:d,activation:p,leakyreluAlpha:m}=a;return kc({a:r,b:o,transposeA:f,transposeB:d,backend:t,bias:l,preluActivationWeights:c,leakyreluAlpha:m,activation:p})}const WV={kernelName:fc,backendName:"webgl",kernelFunc:HV};const B2="return abs(x);";function qV(n){const{inputs:e,backend:t}=n,{x:a}=e;if(t.shouldExecuteOnCPU([a])&&a.dtype!=="complex64"){const o=t.texData.get(a.dataId),l=kN(o.values);return t.makeTensorInfo(a.shape,a.dtype,l)}let r;return q().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new vs(a.shape,B2):r=new ua(a.shape,B2),t.runWebGLProgram(r,[a],a.dtype)}const jV={kernelName:Op,backendName:"webgl",kernelFunc:qV};const XV=Gn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,KV=Le({opSnippet:XV}),YV={kernelName:Ip,backendName:"webgl",kernelFunc:KV};const QV=Gn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,ZV=Le({opSnippet:QV}),JV={kernelName:Dp,backendName:"webgl",kernelFunc:ZV};const z2="return a + b;",eM=Et({opSnippet:z2,packedOpSnippet:z2,supportsComplex:!0,cpuKernelImpl:cU}),tM={kernelName:Oc,backendName:"webgl",kernelFunc:eM};class nM{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((o,l)=>`T${l}`);const a=[];this.variableNames.forEach(o=>{a.push(`float v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${a.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}}class aM{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((o,l)=>`T${l}`);const a=[];this.variableNames.forEach(o=>{a.push(`vec4 v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${a.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}}function lc(n){const{inputs:e,backend:t}=n,a=e;if(a.length===1)return rn({inputs:{x:a[0]},backend:t});if(a.length>q().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const f=Math.floor(a.length/2),d=lc({inputs:a.slice(0,f),backend:t}),p=lc({inputs:a.slice(f),backend:t});return lc({inputs:[d,p],backend:t})}const r=a.map(f=>f.dtype).reduce((f,d)=>ta(f,d)),o=a.map(f=>f.shape),c=q().getBool("WEBGL_PACK")?new aM(a[0].shape,o):new nM(a[0].shape,o);return t.runWebGLProgram(c,a,r)}const sM={kernelName:Lp,backendName:"webgl",kernelFunc:lc};function rM(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{axis:o,keepDims:l}=a,c=r.shape.length,f=xt(o,r.shape);let d=f;const p=Mn(d,c);let m=r;p!=null&&(m=Pt({inputs:{x:r},backend:t,attrs:{perm:p}}),d=Pn(d.length,c)),sa("all",d,c);const[y,x]=ha(m.shape,d),v=se(x),S=le({inputs:{x:m},backend:t,attrs:{shape:[-1,v]}}),w=Nr(S,S.dtype,"all",t);let T;if(l){const $=Tn(y,f);T=le({inputs:{x:w},backend:t,attrs:{shape:$}})}else T=le({inputs:{x:w},backend:t,attrs:{shape:y}});return t.disposeIntermediateTensorInfo(S),t.disposeIntermediateTensorInfo(w),p!=null&&t.disposeIntermediateTensorInfo(m),T}const iM={kernelName:Fp,backendName:"webgl",kernelFunc:rM};function oM(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{axis:o,keepDims:l}=a,c=r.shape.length,f=xt(o,r.shape);let d=f;const p=Mn(d,c);let m=r;p!=null&&(m=Pt({inputs:{x:r},backend:t,attrs:{perm:p}}),d=Pn(d.length,c)),sa("any",d,c);const[y,x]=ha(m.shape,d),v=se(x),S=le({inputs:{x:m},backend:t,attrs:{shape:[-1,v]}}),w=Nr(S,S.dtype,"any",t);let T;if(l){const $=Tn(y,f);T=le({inputs:{x:w},backend:t,attrs:{shape:$}})}else T=le({inputs:{x:w},backend:t,attrs:{shape:y}});return t.disposeIntermediateTensorInfo(S),t.disposeIntermediateTensorInfo(w),p!=null&&t.disposeIntermediateTensorInfo(m),T}const lM={kernelName:Bp,backendName:"webgl",kernelFunc:oM};class uM{constructor(e,t,a){this.variableNames=["A"];const{windowSize:r,batchSize:o,outSize:l}=e;a||this.variableNames.push("bestIndicesA"),this.outputShape=[o,l];const c=t==="max"?">":"<",f=a?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${f};
          float candidate = getA(batch, inIdx);
          if (candidate ${c} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class cM{constructor(e,t,a,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,_(e.length>2,()=>`Packed arg${a.charAt(0).toUpperCase()+a.slice(1)} supports only inputs with rank above 2.`);const o=e[e.length-1],l=Math.ceil(o/t);this.outputShape=e.slice(0,-1),l>1&&this.outputShape.push(l),r||this.variableNames.push("bestIndicesA");const c=this.outputShape,f=c.length,d=We(f),p=Vt("coords",f);let m,y;if(l===1){y=f+1;const X=We(y);m=`
        ${X} sourceLocR = ${X}(${p.join()}, 0);
        ++${p[f-1]};
        ${X} sourceLocG = ${X}(${p.join()}, 0);
        ++${p[f-2]};
        ${X} sourceLocA = ${X}(${p.join()}, 0);
        --${p[f-1]};
        ${X} sourceLocB = ${X}(${p.join()}, 0);
        --${p[f-2]};`}else y=f,m=`
        ${d} sourceLocR = coords;
        ++${p[f-1]};
        ${d} sourceLocG = coords;
        ++${p[f-2]};
        ${d} sourceLocA = coords;
        --${p[f-1]};
        ${d} sourceLocB = coords;
        --${p[f-2]};`;const x=["x","y","z","w","u","v"].slice(0,y),v="."+x[y-1],S=x.map(X=>"int "+X),w=Vt("sourceLocR",y-1).concat("inIdx.r"),T=Vt("sourceLocG",y-1).concat("inIdx.g"),$=Vt("sourceLocB",y-1).concat("inIdx.b"),O=Vt("sourceLocA",y-1).concat("inIdx.a"),A=a==="max"?"greaterThan":"lessThan",z=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${w.join()}),
                             getBestIndicesAChannel(${T.join()}),
                             getBestIndicesAChannel(${$.join()}),
                             getBestIndicesAChannel(${O.join()})));`,j=`vec4(
            getAChannel(${w.join()}),
            hasNextCol ? getAChannel(${T.join()}) : 0.,
            hasNextRow ? getAChannel(${$.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${O.join()}) : 0.)`,G=r?"":`
      float getBestIndicesAChannel(${S.join()}) {
        return getChannel(getBestIndicesA(${x.join()}),
                                          vec2(${x.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${S.join()}) {
        return getChannel(getA(${x.join()}),
                               vec2(${x.slice(-2).join()}));
      }
      ${G}
      void main() {
        ${d} coords = getOutputCoords();
        bool hasNextCol = ${p[f-1]} < ${c[f-1]-1};
        bool hasNextRow = ${p[f-2]} < ${c[f-2]-1};
        ${m}
        ivec4 srcIdx = ivec4(sourceLocR${v}, sourceLocG${v},
          sourceLocB${v}, sourceLocA${v}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${j};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${z}
          vec4 candidate = ${j};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${A}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function zN(n,e,t,a=null){let r=e.shape[0],o=e.shape[1];a!=null&&(r=a.shape[0],o=a.shape[1]);const l=Qc(o),c={windowSize:l,inSize:o,batchSize:r,outSize:Math.ceil(o/l)},f=new uM(c,t,a==null),d=[e];a!=null&&d.push(a);const p=n.runWebGLProgram(f,d,"int32");if(p.shape[1]===1)return p;const m=zN(n,e,t,p);return n.disposeIntermediateTensorInfo(p),m}function UN(n,e,t,a=null){const r=a!=null?a.shape:e.shape,o=r[r.length-1],l=Qc(o),c=new cM(r,l,t,a==null),f=a==null?[e]:[e,a],d=n.runWebGLProgram(c,f,"int32");if(d.shape.length===e.shape.length){const p=UN(n,e,t,d);return n.disposeIntermediateTensorInfo(d),p}return d}function VN(n,e,t,a){const r=[t];if(sa("arg"+a.charAt(0).toUpperCase()+a.slice(1),r,e.shape.length),!q().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const o=[],l=n.texData.get(e.dataId),c=l!==null&&l.isPacked;let f=e;c&&(f=n.unpackTensor(e),o.push(f));const[d,p]=ha(f.shape,r),m=se(p),y=le({inputs:{x:f},backend:n,attrs:{shape:[-1,m]}});o.push(y);const x=zN(n,y,a);o.push(x);const v=le({inputs:{x},backend:n,attrs:{shape:d}});return o.forEach(S=>n.disposeIntermediateTensorInfo(S)),v}return UN(n,e,a)}function fM(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{axis:o}=a;let l=xt(o,r.shape);const c=Mn(l,r.shape.length);let f=r;const d=[];c!=null&&(f=Pt({inputs:{x:r},backend:t,attrs:{perm:c}}),d.push(f),l=Pn(l.length,f.shape.length)),sa("argMax",[l[0]],f.shape.length);const p=VN(t,f,l[0],"max");return d.forEach(m=>t.disposeIntermediateTensorInfo(m)),p}const dM={kernelName:zp,backendName:"webgl",kernelFunc:fM};function hM(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{axis:o}=a;let l=xt(o,r.shape);const c=Mn(l,r.shape.length);let f=r;const d=[];c!=null&&(f=Pt({inputs:{x:r},backend:t,attrs:{perm:c}}),d.push(f),l=Pn(l.length,f.shape.length)),sa("argMin",[l[0]],f.shape.length);const p=VN(t,f,l[0],"min");return d.forEach(m=>t.disposeIntermediateTensorInfo(m)),p}const pM={kernelName:Up,backendName:"webgl",kernelFunc:hM};const mM=Gn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,gM=Le({opSnippet:mM}),yM={kernelName:Vp,backendName:"webgl",kernelFunc:gM};const bM=Gn+"return log(x + sqrt(x * x + 1.0));",xM=Le({opSnippet:bM}),vM={kernelName:Mp,backendName:"webgl",kernelFunc:xM};const wM=Gn+`
  return atan(x);
`,SM=Le({opSnippet:wM}),TM={kernelName:Pp,backendName:"webgl",kernelFunc:SM};const CM=C0+`
  return atan(a, b);
`,NM=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Cr+`
  return result;
`,$M=Et({opSnippet:CM,packedOpSnippet:NM}),EM={kernelName:Hp,backendName:"webgl",kernelFunc:$M};const kM=Gn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,RM=Le({opSnippet:kM}),_M={kernelName:Gp,backendName:"webgl",kernelFunc:RM};class rl{constructor(e,t,a,r=!1,o=!1){if(this.variableNames=["x"],t==="avg"&&a)throw new Error("Cannot compute positions for average pool.");const l=e.filterWidth,c=e.strideHeight,f=e.strideWidth,d=e.dilationHeight,p=e.dilationWidth,m=e.effectiveFilterHeight,y=e.effectiveFilterWidth,x=e.padInfo.top,v=e.padInfo.left;this.outputShape=e.outShape;const S=t==="avg",w=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,T=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let $="0.0";if(S||($="-1.0 / 1e-20"),a){this.userCode=`
        const ivec2 strides = ivec2(${c}, ${f});
        const ivec2 pads = ivec2(${x}, ${v});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${m};
              wR += ${d}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${y};
                wC += ${p}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?o?w:T:`wR * ${y} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const O="max";let A=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(A="avgValue / max(count, 1.0)");const z=Math.floor(l/4)*4,j=l%4,G=`
      if (${S}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${O}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${c}, ${f});
      const ivec2 pads = ivec2(${x}, ${v});
      const float initializationValue = ${$};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${$});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${m};
            wR += ${d}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${z}; wC += 4) {
            int xC = xCCorner + wC * ${p};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${p}, d),
              getValue(batch, xR, xC + 2 * ${p}, d),
              getValue(batch, xR, xC + 3 * ${p}, d)
            );

            ${G}
          }

          int xC = xCCorner + ${z};
          if (${j===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${G}
          } else if (${j===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${p}, d),
              initializationValue,
              initializationValue
            );

            ${G}
          } else if (${j===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${p}, d),
              getValue(batch, xR, xC + 2 * ${p}, d),
              initializationValue
            );

            ${G}
          }
        }
        setOutput(${A});
      }
    `}}class $0{constructor(e,t,a,r=!1,o=!1){if(this.variableNames=["x"],t==="avg"&&a)throw new Error("Cannot compute positions for average pool.");const l=e.filterWidth,c=e.strideDepth,f=e.strideHeight,d=e.strideWidth,p=e.dilationDepth,m=e.dilationHeight,y=e.dilationWidth,x=e.effectiveFilterDepth,v=e.effectiveFilterHeight,S=e.effectiveFilterWidth,w=e.padInfo.front,T=e.padInfo.top,$=e.padInfo.left;this.outputShape=e.outShape;const O=t==="avg";let A="0.0";if(O||(A="-1.0 / 1e-20"),a){this.userCode=`
        const ivec3 strides =
            ivec3(${c}, ${f}, ${d});
        const ivec3 pads = ivec3(${w}, ${T}, ${$});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${x};
              wD += ${p}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${v};
                wR += ${m}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${S};
                  wC += ${y}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?o?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${v} * ${S} +
                      wR * ${S} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const z="max";let j=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(j="avgValue / max(count, 1.0)");const G=Math.floor(l/4)*4,X=l%4,V=`
      if (${O}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${z}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${c}, ${f}, ${d});
      const ivec3 pads = ivec3(${w}, ${T}, ${$});
      const float initializationValue = ${A};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${A});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${x};
            wD += ${p}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${v};
            wR += ${m}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${G}; wC += 4) {
              int xC = xCCorner + wC * ${y};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${y}, ch),
                getValue(batch, xD, xR, xC + 2 * ${y}, ch),
                getValue(batch, xD, xR, xC + 3 * ${y}, ch)
              );

              ${V}
            }

            int xC = xCCorner + ${G};
            if (${X===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${V}
            } else if (${X===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${y}, ch),
                initializationValue,
                initializationValue
              );

              ${V}
            } else if (${X===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${y}, ch),
                getValue(batch, xD, xR, xC + 2 * ${y}, ch),
                initializationValue
              );

              ${V}
            }
          }
        }
        setOutput(${j});
      }
    `}}function AM(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e;xl(r,"avgPool");const{filterSize:o,strides:l,pad:c,dimRoundingMode:f}=a,d=1;_(on(l,d),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${l} and dilations '${d}'`);const p=wr(r.shape,o,l,d,c,f);if(p.filterWidth===1&&p.filterHeight===1&&st(p.inShape,p.outShape))return rn({inputs:{x:r},backend:t});const m=new rl(p,"avg",!1);return t.runWebGLProgram(m,[r],"float32")}const OM={kernelName:Wp,backendName:"webgl",kernelFunc:AM};function IM(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{filterSize:o,strides:l,pad:c,dimRoundingMode:f,dataFormat:d}=a,p=[1,1,1],m=ul(r.shape,o,l,p,c,f,d),y=new $0(m,"avg",!1);return t.runWebGLProgram(y,[r],"float32")}const DM={kernelName:qp,backendName:"webgl",kernelFunc:IM};class LM{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterHeight,a=e.filterWidth,r=e.strideHeight,o=e.strideWidth,l=e.dilationHeight,c=e.dilationWidth,f=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=f-1-e.padInfo.top,m=d-1-e.padInfo.left,y=1/(t*a);this.userCode=`
      const ivec2 pads = ivec2(${p}, ${m});
      const float avgMultiplier = float(${y});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${f};
            wR += ${l}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${d};
            wC+= ${c}) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class FM{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterDepth,a=e.filterHeight,r=e.filterWidth,o=e.strideDepth,l=e.strideHeight,c=e.strideWidth,f=e.dilationDepth,d=e.dilationHeight,p=e.dilationWidth,m=e.effectiveFilterDepth,y=e.effectiveFilterHeight,x=e.effectiveFilterWidth,v=m-1-e.padInfo.front,S=y-1-e.padInfo.top,w=x-1-e.padInfo.left,T=1/(t*a*r);this.userCode=`
      const ivec3 pads = ivec3(${v}, ${S}, ${w});
      const float avgMultiplier = float(${T});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${m};
            wD += ${f}) {
          float dyD = float(dyDCorner + wD) / ${o}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${y};
              wR += ${d}) {
            float dyR = float(dyRCorner + wR) / ${l}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${x};
                wC += ${p}) {
              float dyC = float(dyCCorner + wC) / ${c}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function BM(n){const{inputs:e,backend:t,attrs:a}=n,{dy:r,input:o}=e,l=o,{filterSize:c,strides:f,pad:d,dimRoundingMode:p}=a,m=[1,1,1],y=ul(l.shape,c,f,m,d,p),x=new FM(y);return t.runWebGLProgram(x,[r],l.dtype)}const zM={kernelName:rw,backendName:"webgl",kernelFunc:BM};function UM(n){const{inputs:e,backend:t,attrs:a}=n,{dy:r,input:o}=e,l=o;xl([r,o],"avgPoolGrad");const{filterSize:c,strides:f,pad:d}=a,p=wr(l.shape,c,f,1,d),m=new LM(p);return t.runWebGLProgram(m,[r],l.dtype)}const VM={kernelName:sw,backendName:"webgl",kernelFunc:UM};function MM(n){const{inputs:e,backend:t,attrs:a}=n,{a:r,b:o}=e,{transposeA:l,transposeB:c}=a;return kc({a:r,b:o,transposeA:l,transposeB:c,backend:t})}const PM={kernelName:jp,backendName:"webgl",kernelFunc:MM};class GM{constructor(e,t,a,r,o,l){this.outputShape=[],this.variableNames=["x","mean","variance"],Fe(e,t),Fe(e,a);let c="0.0";r!=null&&(Fe(e,r),this.variableNames.push("offset"),c="getOffsetAtOutCoords()");let f="1.0";o!=null&&(Fe(e,o),this.variableNames.push("scale"),f="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${c};
        float scale = ${f};
        float inv = scale * inversesqrt(variance + float(${l}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class HM{constructor(e,t,a,r,o,l){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Fe(e,t),Fe(e,a);let c="vec4(0.0)";r!=null&&(Fe(e,r),this.variableNames.push("offset"),c="getOffsetAtOutCoords()");let f="vec4(1.0)";o!=null&&(Fe(e,o),this.variableNames.push("scale"),f="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${c};
        vec4 scale = ${f};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${l}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const WM=({inputs:n,backend:e,attrs:t})=>{const{x:a,mean:r,variance:o,offset:l,scale:c}=n;_(r.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),_(l==null||r.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),_(c==null||r.shape.length===c.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:f}=t;f==null&&(f=.001);const d=[a,r,o];let p=null;l!=null&&(p=l.shape,d.push(l));let m=null;c!=null&&(m=c.shape,d.push(c));const y=q().getBool("WEBGL_PACK_NORMALIZATION")?new HM(a.shape,r.shape,o.shape,p,m,f):new GM(a.shape,r.shape,o.shape,p,m,f);return e.runWebGLProgram(y,d,d[0].dtype)},qM={kernelName:Im,backendName:"webgl",kernelFunc:WM};class jM{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const t=We(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const a=XM(this.rank);let r;const o=e.map((l,c)=>`sourceLoc.${Tp[c]} = start[${c}] + coords.${Tp[c]};`);r=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${o.join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${a}));
      }
    `}}const Tp=["x","y","z","w","u","v"];function XM(n){if(n===1)return"sourceLoc";if(n<=6)return Tp.slice(0,n).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class KM{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=We(this.rank),a=Vt("coords",this.rank),r=Vt("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":`vec2(${r.slice(-2).join()})`,l=`getChannel(getSource(${r.join()}), ${o})`,c=`
      result.x = ${l};
      if (++${a[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${l};
        --${r[this.rank-1]};
      }
    `,f=this.rank===1?"":`
      --${a[this.rank-1]};
      if (++${a[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${l};
        if (++${a[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${l};
        }
      }
    `,d=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((p,m)=>`start[${m}]`).join()});`:e.map((p,m)=>`${r[m]} = ${a[m]} + start[${m}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${d}
        vec4 result = vec4(0.);
        ${c}
        ${f}
        setOutput(result);
      }
    `}}function YM(n,e,t,a){const r=a.texData.get(n.dataId),o=a.makeTensorInfo(t,n.dtype),l=a.texData.get(o.dataId);Object.assign(l,r),l.refCount=1,l.shape=t,l.dtype=n.dtype;let c=kC(e,Nt(n.shape));r.slice&&(c+=r.slice.flatOffset),l.slice={flatOffset:c,origDataId:r.slice&&r.slice.origDataId||n.dataId};const f=a.dataRefCount.get(l.slice.origDataId)||1;return a.dataRefCount.set(l.slice.origDataId,f+1),o}function Hi(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{begin:o,size:l}=a,[c,f]=k4(r,o,l);if($4(r,c,f),se(f)===0)return t.makeTensorInfo(f,r.dtype,[]);if(t.shouldExecuteOnCPU([r])||r.dtype==="string"){const m=t.texData.get(r.dataId),y=PU(m.values,c,f,r.shape,r.dtype);return t.makeTensorInfo(f,r.dtype,y)}const{isPacked:d}=t.texData.get(r.dataId),p=EC(r.shape,c,f);if(d||!p){const m=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new KM(f):new jM(f),y=[c];return t.runWebGLProgram(m,[r],r.dtype,y)}return t.uploadToGPU(r.dataId),YM(r,c,f,t)}const QM={kernelName:Pg,backendName:"webgl",kernelFunc:Hi};const ZM=n=>{const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{blockShape:o,crops:l}=a;_(r.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const c=o.reduce(($,O)=>$*O),f=m0(r.shape,o,c),d=g0(f.length,o.length),p=y0(r.shape,o,c),m=FC(l,o.length),y=BC(p,l,o.length),x=[],v=le({inputs:{x:r},backend:t,attrs:{shape:f}}),S=Pt({inputs:{x:v},backend:t,attrs:{perm:d}}),w=le({inputs:{x:S},backend:t,attrs:{shape:p}}),T=Hi({inputs:{x:w},backend:t,attrs:{begin:m,size:y}});return x.push(v),x.push(S),x.push(w),x.forEach($=>t.disposeIntermediateTensorInfo($)),T},JM={kernelName:Xp,backendName:"webgl",kernelFunc:ZM};function e6(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,weights:o}=e,{size:l}=a,c=t.readSync(r.dataId),f=t.readSync(o.dataId),d=EN(c,f,o.dtype,o.shape,l);return t.makeTensorInfo([l],o.dtype,d)}const t6={kernelName:Kp,backendName:"webgl",kernelFunc:e6};const n6=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,a6=`
  return float(int(a.r) & int(b.r));
`;function s6(n){const{inputs:e,backend:t}=n,{a,b:r}=e,o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS"),l=q().getNumber("WEBGL_VERSION");if(t.shouldExecuteOnCPU([a,r])||l===1){const f=t.texData.get(a.dataId).values,d=t.texData.get(r.dataId).values,[p,m]=dU(a.shape,r.shape,f,d,a.dtype),y=t.makeTensorInfo(m,a.dtype),x=t.texData.get(y.dataId);return x.values=p,y}let c;return o?c=new Pi(n6,a.shape,r.shape,!1):c=new vr(a6,a.shape,r.shape),t.runWebGLProgram(c,[a,r],a.dtype)}const r6={kernelName:Yp,backendName:"webgl",kernelFunc:s6};function i6(n){const{inputs:e,backend:t}=n,{s0:a,s1:r}=e,o=t.readSync(a.dataId),l=t.readSync(r.dataId),c=Fe(Array.from(o),Array.from(l));return t.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const o6={kernelName:Qp,backendName:"webgl",kernelFunc:i6};const l6="return float(a != b);",MN=Et({opSnippet:l6,cpuKernelImpl:IU,dtype:"bool"}),u6={kernelName:dg,backendName:"webgl",kernelFunc:MN};function wl(n){const{inputs:e,backend:t}=n,{input:a}=e,r=t.texData.get(a.dataId);return rn({inputs:{x:r.complexTensorInfos.real},backend:t})}const c6={kernelName:Eg,backendName:"webgl",kernelFunc:wl};const f6="return float(int(x));";function d6(n,e){const t=new ua(n.shape,f6),a=e.runWebGLProgram(t,[n],"int32");return{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}function Cp(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{dtype:o}=a;if(o==="complex64"){if(r.dtype==="complex64")return rn({inputs:{x:r},backend:t});const l=Va(r.shape),c=Cp({inputs:{x:r},backend:t,attrs:{dtype:"float32"}}),f=Os({inputs:{real:c,imag:l},backend:t});return l.dispose(),t.disposeIntermediateTensorInfo(c),f}if(r.dtype==="complex64"){const l=wl({inputs:{input:r},backend:t}),c=Cp({inputs:{x:l},backend:t,attrs:{dtype:o}});return t.disposeIntermediateTensorInfo(l),c}if(!Yk(r.dtype,o)){const l=rn({inputs:{x:r},backend:t});return{dataId:l.dataId,shape:l.shape,dtype:o}}if(t.shouldExecuteOnCPU([r])){const l=t.texData.get(r.dataId).values,[c,f,d]=hU(l,r.shape,r.dtype,o);return t.makeTensorInfo(c,f,d)}if(o==="int32")return d6(r,t);if(o==="bool"){const l=t.makeTensorInfo([],"bool",Ss("bool",1)),f=MN({inputs:{a:r,b:l},backend:t});return t.disposeIntermediateTensorInfo(l),f}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${o}`)}const h6={kernelName:Ic,backendName:"webgl",kernelFunc:Cp};const U2="return ceil(x);",p6=Le({opSnippet:U2,packedOpSnippet:U2,cpuKernelImpl:pU}),m6={kernelName:Zp,backendName:"webgl",kernelFunc:p6};class g6{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class y6{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function b6(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{clipValueMin:o,clipValueMax:l}=a;let c;q().getBool("WEBGL_PACK_CLIP")?c=new y6(r.shape):c=new g6(r.shape);const f=[[o],[l]];return t.runWebGLProgram(c,[r],r.dtype,f)}const x6={kernelName:Jp,backendName:"webgl",kernelFunc:b6};class v6{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function V2(n,e){return{dataId:e.dataId,dtype:e.dtype,shape:n.shape}}function w6(n){const{inputs:e,backend:t}=n,{x:a}=e,r=t.texData.get(a.dataId),o=new v6(a.shape),l=[V2(a,r.complexTensorInfos.real),V2(a,r.complexTensorInfos.imag)];return t.runWebGLProgram(o,l,l[0].dtype)}const S6={kernelName:tm,backendName:"webgl",kernelFunc:w6};class T6{constructor(e){this.outputShape=[],this.outputShape=br(e,1),this.variableNames=e.map((l,c)=>`T${c}`);const t=new Array(e.length-1);t[0]=e[0][1];for(let l=1;l<t.length;l++)t[l]=t[l-1]+e[l][1];const a=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let l=1;l<t.length;l++){const c=t[l-1];a.push(`else if (yC < ${t[l]}) setOutput(getT${l}(yR, yC-${c}));`)}const r=t.length,o=t[t.length-1];a.push(`else setOutput(getT${r}(yR, yC-${o}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${a.join(`
        `)}
      }
    `}}class C6{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=br(e,t);const a=this.outputShape,r=a.length,o=We(r),l=Vt("coords",r),c=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map((S,w)=>`T${w}`);const f=new Array(e.length-1);f[0]=e[0][t];for(let S=1;S<f.length;S++)f[S]=f[S-1]+e[S][t];const d=c[t],p=c.slice(-2),m=c.join();let y=`if (${d} < ${f[0]}) {
        return getChannel(
            getT0(${m}), vec2(${p.join()}));
        }`;for(let S=1;S<f.length;S++){const w=f[S-1];y+=`
        if (${d} < ${f[S]}  && ${d} >= ${f[S-1]}) {
          return getChannel(
            getT${S}(${Qu(c,d,w)}),
            vec2(${Qu(p,d,w)}));
        }`}const x=f.length,v=f[f.length-1];y+=`
        return getChannel(
          getT${x}(${Qu(c,d,v)}),
          vec2(${Qu(p,d,v)}));`,this.userCode=`
      float getValue(${c.map(S=>"int "+S)}) {
        ${y}
      }

      void main() {
        ${o} coords = getOutputCoords();
        vec4 result = vec4(getValue(${l}), 0., 0., 0.);

        ${l[r-1]} = ${l[r-1]} + 1;
        if (${l[r-1]} < ${a[r-1]}) {
          result.g = getValue(${l});
        }

        ${l[r-2]} = ${l[r-2]} + 1;
        if (${l[r-2]} < ${a[r-2]}) {
          result.a = getValue(${l});
        }

        ${l[r-1]} = ${l[r-1]} - 1;
        if (${l[r-2]} < ${a[r-2]} &&
            ${l[r-1]} < ${a[r-1]}) {
          result.b = getValue(${l});
        }
        setOutput(result);
      }
    `}}function Qu(n,e,t){const a=n.indexOf(e);return n.map((o,l)=>l===a?`${o} - ${t}`:o).join()}function nf(n){const{inputs:e,backend:t}=n,{input:a}=e,r=t.texData.get(a.dataId);return rn({inputs:{x:r.complexTensorInfos.imag},backend:t})}const N6={kernelName:Um,backendName:"webgl",kernelFunc:nf};function jo(n,e,t){const a=n[0].dtype;if(a==="complex64"){const x=n.map($=>wl({inputs:{input:$},backend:t})),v=n.map($=>nf({inputs:{input:$},backend:t})),S=jo(x,e,t),w=jo(v,e,t),T=Os({inputs:{real:S,imag:w},backend:t});return x.forEach($=>t.disposeIntermediateTensorInfo($)),v.forEach($=>t.disposeIntermediateTensorInfo($)),t.disposeIntermediateTensorInfo(S),t.disposeIntermediateTensorInfo(w),T}let r=t.shouldExecuteOnCPU(n);if(a==="string"&&(r=!0),r){const x=n.map(A=>{const j=[-1,se(A.shape.slice(e))];return le({inputs:{x:A},backend:t,attrs:{shape:j}})}),v=x.map(A=>({vals:t.readSync(A.dataId),shape:A.shape})),S=br(x.map(A=>A.shape),1),w=x[0].shape[0]===1,T=mU(v,S,a,w),$=br(n.map(A=>A.shape),e),O=t.makeTensorInfo($,a,T);return x.forEach(A=>t.disposeIntermediateTensorInfo(A)),O}const o=n.filter(x=>se(x.shape)>0),l=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&o[0].shape.length>1;if(o.length===1){const x=l?new ua(n[0].shape,ys):new vs(n[0].shape,ys);return t.runWebGLProgram(x,n,a)}const c=q().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(o.length>c){const x=[];for(let S=0;S<o.length;S+=c){const w=o.slice(S,S+c);x.push(jo(w,e,t))}const v=jo(x,e,t);for(const S of x)t.disposeIntermediateTensorInfo(S);return v}if(l){const x=new C6(o.map(v=>v.shape),e);return t.runWebGLProgram(x,o,a)}const{tensors2D:f,outShape:d}=$6(o,e,t),p=new T6(f.map(x=>x.shape)),m=t.runWebGLProgram(p,f,a);f.forEach(x=>t.disposeIntermediateTensorInfo(x));const y=le({inputs:{x:m},attrs:{shape:d},backend:t});return t.disposeIntermediateTensorInfo(m),y}function $6(n,e,t){const a=br(n.map(o=>o.shape),e);return{tensors2D:n.map(o=>le({inputs:{x:o},attrs:{shape:[-1,se(o.shape.slice(e))]},backend:t})),outShape:a}}function PN(n){const{inputs:e,backend:t,attrs:a}=n,{axis:r}=a,o=xt(r,e[0].shape)[0],l=e.map(d=>d.shape);_C(l,o);const c=br(e.map(d=>d.shape),o);if(se(c)===0)return t.makeTensorInfo(c,e[0].dtype,[]);const f=e.filter(d=>se(d.shape)>0);return f.length===1?rn({inputs:{x:f[0]},backend:t}):jo(f,o,t)}const E6={kernelName:nm,backendName:"webgl",kernelFunc:PN};class GN{constructor(e,t=!1,a=null,r=!1,o=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const l=e.padInfo.top,c=e.padInfo.left,f=e.strideHeight,d=e.strideWidth,p=e.dilationHeight,m=e.dilationWidth,y=e.filterHeight,x=e.filterWidth,v=Math.floor(e.inChannels/4)*4,S=e.inChannels%4,w=e.dataFormat==="channelsLast",T=w?1:2,$=w?2:3,O=w?3:1;let A="",z="";a&&(r?A=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:o?A=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:A=`
          float activation(float x) {
            ${a}
          }
        `,z="result = activation(result);");const j=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${A}

      const ivec2 strides = ivec2(${f}, ${d});
      const ivec2 pads = ivec2(${l}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${O}];

        ivec2 xRCCorner =
            ivec2(coords[${T}], coords[${$}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${y}; wR++) {
          int xR = xRCorner + wR * ${p};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${x}; wC++) {
            int xC = xCCorner + wC * ${m};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${v}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${w}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${S===1}) {

              if (${w}) {
                dotProd +=
                    getX(batch, xR, xC, ${v}) *
                    getW(wR, wC, ${v}, d2);
              } else {
                dotProd +=
                    getX(batch, ${v}, xR, xC) *
                    getW(wR, wC, ${v}, d2);
              }

            } else if (${S===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${v}, d2),
                getW(wR, wC, ${v} + 1, d2)
              );

              if (${w}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${v}),
                  getX(batch, xR, xC, ${v} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${v}, xR, xC),
                  getX(batch, ${v} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${S===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${v}, d2),
                getW(wR, wC, ${v} + 1, d2),
                getW(wR, wC, ${v} + 2, d2)
              );

              if (${w}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${v}),
                  getX(batch, xR, xC, ${v} + 1),
                  getX(batch, xR, xC, ${v} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${v}, xR, xC),
                  getX(batch, ${v} + 1, xR, xC),
                  getX(batch, ${v} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${j}
        ${z}
        setOutput(result);
      }
    `}}class k6{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,a=e.padInfo.top,r=e.padInfo.left,o=e.strideDepth,l=e.strideHeight,c=e.strideWidth,f=e.dilationDepth,d=e.dilationHeight,p=e.dilationWidth,m=e.filterDepth,y=e.filterHeight,x=e.filterWidth,v=Math.floor(e.inChannels/4)*4,S=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${o}, ${l}, ${c});
      const ivec3 pads = ivec3(${t}, ${a}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${m}; wF++) {
          int xF = xFCorner + wF * ${f};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${y}; wR++) {
            int xR = xRCorner + wR * ${d};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${x}; wC++) {
              int xC = xCCorner + wC * ${p};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${v}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${S===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${v}) *
                  getW(wF, wR, wC, ${v}, d2);
              } else if (${S===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${v}),
                  getX(batch, xF, xR, xC, ${v} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${v}, d2),
                  getW(wF, wR, wC, ${v} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${S===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${v}),
                  getX(batch, xF, xR, xC, ${v} + 1),
                  getX(batch, xF, xR, xC, ${v} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${v}, d2),
                  getW(wF, wR, wC, ${v} + 1, d2),
                  getW(wF, wR, wC, ${v} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class HN{constructor(e,t=!1,a=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Lt(this.outputShape.length);const l=e.padInfo.left,c=e.strideWidth,f=e.dilationWidth,d=e.filterHeight,p=e.filterWidth,m=p;let y=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let w=0;w<p;w++)y+=`
           vec4 xTexelC${w*2};
           int xTexelC${w*2}Ready;
           vec4 xTexelC${w*2+1};
           int xTexelC${w*2+1}Ready;
           vec4 xC${w};`;y+=`
     for (int r = 0; r < ${d}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let w=0;w<p;w++)y+=`
           xTexelC${w*2} = vec4(0.0);
           xTexelC${w*2}Ready = 0;
           xTexelC${w*2+1} = vec4(0.0);
           xTexelC${w*2+1}Ready = 0;
           xC${w} = vec4(0.0);`;y+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let w=0;w<(m+1)/2;w++){const T=w*2;if(y+=`
           xC = xCCorner + ${T*f};
           `,c===1){if(T<p&&(l%2===1?(y+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T}Ready == 0) {
                   xTexelC${T} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${T}.zw = vec2(0.0);
                   }
                   xTexelC${T}Ready = 1;
                 }
               `,f===1&&T>0?y+=`
                 xC${T} = vec4(xTexelC${T-2}.zw, xTexelC${T}.xy);
                 `:y+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${T} = vec4(previous.zw, xTexelC${T}.xy);
                   } else {
                     xC${T} = vec4(0.0, 0.0, xTexelC${T}.xy);
                   }
                   `):y+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${T}Ready == 0) {
                   xTexelC${T} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${T}.zw = vec2(0.0);
                   }
                   xTexelC${T}Ready = 1;
                 }

                 xC${T} = xTexelC${T};
                 `,T+1<p)){const $=l%2===0?kp(f):f;f%2===0&&l%2===1||f%2!==0&&l%2!==1?(y+=`
                   xCOffset = xC + imod(pads[1], 2) + ${$};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T+1}Ready == 0) {
                     xTexelC${T+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${T+1}.zw = vec2(0.0);
                     }
                     xTexelC${T+1}Ready = 1;
                   }
                   `,f>1?y+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${T+1} = vec4(previous.zw, xTexelC${T+1}.xy);
                     } else {
                      xC${T+1} = vec4(0.0, 0.0, xTexelC${T+1}.xy);
                     }
                     `:y+=`
                     xC${T+1} = vec4(xTexelC${T}.zw, xTexelC${T+1}.xy);
                     `):$===1?y+=`
                     xC${T+1} = xTexelC${T};
                     `:y+=`
                     xCOffset = xC + ${$};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T+1}Ready == 0) {
                       xTexelC${T+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${T+1}.zw = vec2(0.0);
                       }
                       xTexelC${T+1}Ready = 1;
                     }

                     xC${T+1} = xTexelC${T+1};
                     `}}else T<p&&(l%2===1?(y+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T}Ready == 0) {
                   xTexelC${T} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${T}.zw = vec2(0.0);
                   }
                   xTexelC${T}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${T+1}Ready == 0) {
                   xTexelC${T+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${T+1}.zw = vec2(0.0);
                   }
                   xTexelC${T+1}Ready = 1;
                 }

                 xC${T} = vec4(xTexelC${T}.zw, xTexelC${T+1}.zw);
               `,T+1<p&&(y+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${T+1} = vec4(xTexelC${T+1}.xy, final.xy);
                 `)):(y+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${T}Ready == 0) {
                   xTexelC${T} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${T}.zw = vec2(0.0);
                   }
                   xTexelC${T}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T+1}Ready == 0) {
                   xTexelC${T+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${T+1}.zw = vec2(0.);
                   }
                   xTexelC${T+1}Ready = 1;
                 }

                 xC${T} = vec4(
                   xTexelC${T}.xy, xTexelC${T+1}.xy);
               `,T+1<p&&(y+=`
                   xC${T+1} = vec4(xTexelC${T}.zw, xTexelC${T+1}.zw);
                 `)));T<p&&(y+=`
             wTexel = getW(r, ${T}, d1, d2);
             dotProd += xC${T}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${T}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,T+1<p&&(y+=`
               wTexel = getW(r, ${T+1}, d1, d2);
               dotProd += xC${T+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${T+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}y+=`
     }
   `,y+=`
     }
   `,y+=`
     }
   `;let x="",v="";a&&(r?x=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${a}
         }`:o?x=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${a}
         }`:x=`vec4 activation(vec4 x) {
           ${a}
         }`,v="result = activation(result);");const S=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${x}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${y}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${S}
         ${v}
         setOutput(result);
       }
     `}}class R6{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=Lt(this.outputShape.length);const{dataFormat:a}=t,r=Gt(),o=a==="channelsLast",l=o?1:2,c=o?2:3,f=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let d="";for(let p=0;p<=1;p++)for(let m=0;m<=1;m++)d+=`
          blockIndex = rc.z + ${m};
          pos = rc.y + ${p};

          ${f}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${l}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${c}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${o}) {
                  innerDims = vec2(d1, ch);
                  result[${p*2+m}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${p*2+m}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${d}

        ${r.output} = result;
      }
    `}}function Rc(n,e){const t=n.length;return t>=3?e?[...n.slice(0,-3),n[t-3]*n[t-2],n[t-1]]:[...n.slice(0,-3),n[t-3],n[t-2]*n[t-1]]:!e&&t===1&&n[0]>1?[n[0],1]:null}function WN({x:n,filter:e,convInfo:t,backend:a,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:l=0,activation:c=null}){const f=n.shape,d=a.texData.get(n.dataId),p=t.inChannels,m=f[0]*f[1]*f[2],y=t.outChannels,x=t.dataFormat==="channelsLast",v=!1,S=!1;let w;const T=[];if(o!=null){const A=Rc(o.shape,x);A!=null&&(o=le({inputs:{x:o},backend:a,attrs:{shape:A}}),T.push(o))}if(r!=null){const A=Rc(r.shape,x);A!=null&&(r=le({inputs:{x:r},backend:a,attrs:{shape:A}}),T.push(r))}if(!((m===1||y===1)&&p>BN)&&d.isPacked&&x&&d.texture!=null&&f[2]%2!==0&&st(d.shape.slice(-3),f.slice(-3))){const A=f[0]*f[1]*(f[2]+1),z={dataId:n.dataId,shape:[1,A,t.inChannels],dtype:n.dtype},j=d.shape;d.shape=d.shape.slice(),d.shape[d.shape.length-2]++,_($c(d.shape,z.shape),()=>`packed reshape ${d.shape} to ${z.shape} isn't free`);const G=le({inputs:{x:e},backend:a,attrs:{shape:[1,t.inChannels,t.outChannels]}});T.push(G);const X=kc({a:z,b:G,backend:a,transposeA:v,transposeB:S,bias:r,activation:c,preluActivationWeights:o,leakyreluAlpha:l}),V=a.texData.get(X.dataId);_(V.isPacked,()=>"batchMatMul result is expected to be packed"),d.shape=j,V.shape=t.outShape,w=rn({inputs:{x:X},backend:a}),w.shape=t.outShape,T.push(X)}else{const A=t.outHeight*t.outWidth,z=le({inputs:{x:n},backend:a,attrs:{shape:x?[t.batchSize,A,t.inChannels]:[t.batchSize,t.inChannels,A]}}),j=le({inputs:{x:e},backend:a,attrs:{shape:[1,t.inChannels,t.outChannels]}}),G=kc({a:x?z:j,b:x?j:z,transposeA:!x,transposeB:S,backend:a,bias:r,activation:c,preluActivationWeights:o,leakyreluAlpha:l});w=le({inputs:{x:G},backend:a,attrs:{shape:t.outShape}}),T.push(z),T.push(j),T.push(G)}for(const A of T)a.disposeIntermediateTensorInfo(A);return w}function qN({x:n,filter:e,convInfo:t,backend:a,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:l=0,activation:c=null}){const{filterWidth:f,filterHeight:d,inChannels:p,outWidth:m,outHeight:y,dataFormat:x}=t,v=x==="channelsLast",S=f*d*p,w=y*m,T=[t.batchSize,S,w],$=!0,O=!1,A=[];if(o!=null){const ie=Rc(o.shape,v);ie!=null&&(o=le({inputs:{x:o},backend:a,attrs:{shape:ie}}),A.push(o))}if(r!=null){const ie=Rc(r.shape,v);ie!=null&&(r=le({inputs:{x:r},backend:a,attrs:{shape:ie}}),A.push(r))}const z=le({inputs:{x:e},backend:a,attrs:{shape:[1,S,se(e.shape)/S]}});A.push(z);const j=new R6(T,t),G=[n.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],X=a.runWebGLProgram(j,[n],"float32",G),V=le({inputs:{x:X},backend:a,attrs:{shape:T}});A.push(X),A.push(V);const U=r!=null,R=o!=null,Z=c==="leakyrelu",oe=c?sl(c,!0):null,fe=new FN(v?V.shape:z.shape,v?z.shape:V.shape,v?[t.batchSize,w,t.outChannels]:[t.batchSize,t.outChannels,w],$,O,U,oe,R,Z),de=v?[V,z]:[z,V];if(r&&de.push(r),R&&de.push(o),Z){const ie=a.makeTensorInfo([],"float32",Oi(l,"float32"));de.push(ie),A.push(ie)}const P=a.runWebGLProgram(fe,de,"float32"),ae=le({inputs:{x:P},backend:a,attrs:{shape:t.outShape}});A.push(P);for(const ie of A)a.disposeIntermediateTensorInfo(ie);return ae}function _6(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,filter:o}=e,{strides:l,pad:c,dataFormat:f,dilations:d,dimRoundingMode:p}=a,m=Ii(f),y=Sn(r.shape,o.shape,l,d,c,p,!1,m);let x;if(y.filterHeight===1&&y.filterWidth===1&&y.dilationHeight===1&&y.dilationWidth===1&&y.strideHeight===1&&y.strideWidth===1&&(y.padInfo.type==="SAME"||y.padInfo.type==="VALID"))x=WN({x:r,filter:o,convInfo:y,backend:t});else if(y.strideWidth<=2&&m==="channelsLast"&&q().getBool("WEBGL_EXP_CONV")){const S=new HN(y),w=[[y.padInfo.top,y.padInfo.left],[y.strideHeight,y.strideWidth],[y.dilationHeight,y.dilationWidth],[y.inHeight,y.inWidth]];x=t.runWebGLProgram(S,[r,o],"float32",w)}else if(q().getBool("WEBGL_CONV_IM2COL"))x=qN({x:r,filter:o,convInfo:y,backend:t});else{const S=new GN(y);x=t.runWebGLProgram(S,[r,o],"float32")}const v=le({inputs:{x},backend:t,attrs:{shape:y.outShape}});return t.disposeIntermediateTensorInfo(x),v}const A6={kernelName:am,backendName:"webgl",kernelFunc:_6};class O6{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,a=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,l=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${a} - ${o};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${l?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class I6{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,a=e.filterWidth,r=e.strideHeight,o=e.strideWidth,l=e.dataFormat==="channelsLast",c=t-1-e.padInfo.top,f=a-1-e.padInfo.left,d=l?1:2,p=l?2:3,m=l?3:1;this.userCode=`
      const ivec2 pads = ivec2(${c}, ${f});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${m}];

        ivec2 dyCorner = ivec2(coords[${d}], coords[${p}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${a} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${l}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class D6{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,a=e.strideHeight,r=e.strideWidth,o=e.padInfo.front,l=e.padInfo.top,c=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${o};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${a} - ${l};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${c};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class L6{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,a=e.filterHeight,r=e.filterWidth,o=e.strideDepth,l=e.strideHeight,c=e.strideWidth,f=t-1-e.padInfo.front,d=a-1-e.padInfo.top,p=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${f}, ${d}, ${p});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${o}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${a}; wR++) {
            float dyR = float(dyRCorner + wR) / ${l}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${a} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${c}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function F6(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,dy:o}=e,{strides:l,pad:c,dataFormat:f,dimRoundingMode:d,filterShape:p}=a,m=Ii(f),y=Sn(r.shape,p,l,1,c,d,!1,m),x=new O6(y);return t.runWebGLProgram(x,[r,o],"float32")}const B6={kernelName:sm,backendName:"webgl",kernelFunc:F6};class z6{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=Lt(this.outputShape.length);const t=e.filterHeight,a=e.filterWidth,r=t-1-e.padInfo.top,o=a-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${a}; wC++) {
            int wCPerm = ${a} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}function U6(n){const{inputs:e,backend:t,attrs:a}=n,{dy:r,filter:o}=e,{inputShape:l,strides:c,pad:f,dataFormat:d,dimRoundingMode:p}=a,m=Ii(d),y=Sn(l,o.shape,c,1,f,p,!1,m);if(q().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&m==="channelsLast"){const x=[[y.strideHeight,y.strideWidth]],v=new z6(y);return t.runWebGLProgram(v,[r,o],"float32",x)}else{const x=new I6(y);return t.runWebGLProgram(x,[r,o],"float32")}}const V6={kernelName:rm,backendName:"webgl",kernelFunc:U6};function M6(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,filter:o}=e,{strides:l,pad:c,dilations:f}=a,d=cl(r.shape,o.shape,l,f,c),p=new k6(d);return t.runWebGLProgram(p,[r,o],"float32")}const P6={kernelName:im,backendName:"webgl",kernelFunc:M6};function G6(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,dy:o}=e,{strides:l,pad:c,filterShape:f}=a,d=cl(r.shape,f,l,1,c),p=new D6(d);return t.runWebGLProgram(p,[r,o],"float32")}const H6={kernelName:iw,backendName:"webgl",kernelFunc:G6};function W6(n){const{inputs:e,backend:t,attrs:a}=n,{dy:r,filter:o}=e,{pad:l,strides:c,inputShape:f}=a,d=cl(f,o.shape,c,1,l),p=new L6(d);return t.runWebGLProgram(p,[r,o],"float32")}const q6={kernelName:om,backendName:"webgl",kernelFunc:W6};const j6=Gi+`
  return cos(x);
`,X6=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Cr}
  return result;
`,K6=Le({opSnippet:j6,packedOpSnippet:X6}),Y6={kernelName:lm,backendName:"webgl",kernelFunc:K6};const Q6=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,Z6=Le({opSnippet:Q6}),J6={kernelName:um,backendName:"webgl",kernelFunc:Z6};class eP{constructor(e,t,a,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[l,c,f,d]=e,[p]=t,[m,y]=a;this.outputShape=[p,m,y,d];const x=r==="bilinear"?1:0,[v,S]=[`${c-1}.0`,`${f-1}.0`],[w,T,$]=m>1?[`${(c-1)/(m-1)}`,"(y2-y1) * height_ratio",`y1*${v} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${v}`],[O,A,z]=y>1?[`${(f-1)/(y-1)}`,"(x2-x1) * width_ratio",`x1*${S} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${S}`];this.userCode=`
      const float height_ratio = float(${w});
      const float width_ratio = float(${O});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${l}) {
          return;
        }

        float height_scale = ${T};
        float width_scale = ${A};

        float in_y = ${$};
        if( in_y < 0.0 || in_y > ${v} ) {
          setOutput(float(${o}));
          return;
        }
        float in_x = ${z};
        if( in_x < 0.0 || in_x > ${S} ) {
          setOutput(float(${o}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${x} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}const tP=n=>{const{inputs:e,backend:t,attrs:a}=n,{image:r,boxes:o,boxInd:l}=e,{cropSize:c,method:f,extrapolationValue:d}=a,p=new eP(r.shape,o.shape,c,f,d);return t.runWebGLProgram(p,[r,o,l],"float32")},nP={kernelName:dm,backendName:"webgl",kernelFunc:tP};var il;(function(n){n.Prod="*",n.Sum="+"})(il||(il={}));class M2{constructor(e,t,a,r){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const o=this.outputShape.length,l=this.op===il.Prod?"1.0":"0.0",c=a?l:`getX(${P2(o,"coords",this.op)})`,f=this.outputShape[this.outputShape.length-1];let d="",p="";a?(d=r?`end != ${f-1}`:"end != 0",p=r?"end + 1":"end - 1"):(d=r?`end + pow2 < ${f}`:"end >= pow2",p=r?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${We(o)} coords = getOutputCoords();
        int end = ${G2(o,"coords",this.op)};
        float val = ${c};
        int pow2 = int(pow(2.0, index));
        if (${d}) {
          int idx = ${p};
          ${G2(o,"coords",this.op)} = idx;
          val ${this.op}= getX(${P2(o,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function P2(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.x, ${e}.y`;if(n===3)return`${e}.x, ${e}.y, ${e}.z`;if(n===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function G2(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.y`;if(n===3)return`${e}.z`;if(n===4)return`${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function jN(n,e,t,a,r,o){const l=e.shape.length,c=Mn([a],l);let f=e;c!=null&&(f=Pt({inputs:{x:e},backend:t,attrs:{perm:c}}));const d=Pn(1,l)[0];if(d!==l-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${a}`);const p=f.shape[d];let m=rn({inputs:{x:f},backend:t});for(let y=0;y<=Math.ceil(Math.log2(p))-1;y++){const x=new M2(n,f.shape,!1,o),v=[[y]],S=m;m=t.runWebGLProgram(x,[m],m.dtype,v),t.disposeIntermediateTensorInfo(S)}if(r){const y=new M2(n,f.shape,r,o),x=m;m=t.runWebGLProgram(y,[m],m.dtype),t.disposeIntermediateTensorInfo(x)}if(c!=null){const y=Iy(c),x=Pt({inputs:{x:m},backend:t,attrs:{perm:y}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),x}return m}function aP(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{axis:o,exclusive:l,reverse:c}=a;return jN(il.Prod,r,t,o,l,c)}const sP={kernelName:cm,backendName:"webgl",kernelFunc:aP};function rP(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{axis:o,exclusive:l,reverse:c}=a;return jN(il.Sum,r,t,o,l,c)}const iP={kernelName:fm,backendName:"webgl",kernelFunc:rP};function oP(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,weights:o}=e,{size:l,binaryOutput:c}=a;if(r.shape.length===1){const f=t.readSync(r.dataId),d=t.readSync(o.dataId),p=EN(f,d,o.dtype,o.shape,l);return t.makeTensorInfo([l],o.dtype,p)}else if(r.shape.length===2){const f=t.bufferSync(r),d=t.bufferSync(o),p=fU(f,d,l,c);return t.makeTensorInfo(p.shape,o.dtype,p.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const lP={kernelName:hm,backendName:"webgl",kernelFunc:oP};class uP{constructor(e,t,a){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=a,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function cP(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{blockSize:o,dataFormat:l}=a,c=r.shape[0],f=l==="NHWC"?r.shape[1]:r.shape[2],d=l==="NHWC"?r.shape[2]:r.shape[3],p=l==="NHWC"?r.shape[3]:r.shape[1],m=f*o,y=d*o,x=p/(o*o),v=l==="NHWC"?[c,m,y,x]:[c,x,m,y],S=new uP(v,o,l);return t.runWebGLProgram(S,[r],r.dtype)}const fP={kernelName:pm,backendName:"webgl",kernelFunc:cP};class XN{constructor(e,t=!1,a=null,r=!1,o=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Lt(this.outputShape.length);const l=e.filterHeight,c=e.filterWidth,f=e.outChannels/e.inChannels;let d="",p="";a&&(r?d=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:o?d=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:d=`
          float activation(float x) {
            ${a}
          }
        `,p="result = activation(result);");const m=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${d}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${f};
        int q = d2 - d1 * ${f};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${l}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${c}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${m}
        ${p}
        setOutput(result);
      }
    `}}class KN{constructor(e,t=!1,a=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Lt(this.outputShape.length);const l=e.outChannels/e.inChannels,c=e.padInfo.left,f=e.strideWidth,d=e.dilationWidth,p=e.filterHeight,m=e.filterWidth,y=m;let x=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let T=0;T<m;T++)x+=`
          vec4 xTexelC${T*2};
          int xTexelC${T*2}Ready;
          vec4 xTexelC${T*2+1};
          int xTexelC${T*2+1}Ready;
          vec4 xC${T};`;x+=`
    for (int r = 0; r < ${p}; r++) {
      `;for(let T=0;T<m;T++)x+=`
          xTexelC${T*2} = vec4(0.0);
          xTexelC${T*2}Ready = 0;
          xTexelC${T*2+1} = vec4(0.0);
          xTexelC${T*2+1}Ready = 0;
          xC${T} = vec4(0.0);`;x+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let T=0;T<(y+1)/2;T++){const $=T*2;if(x+=`
          xC = xCCorner + ${$*d};
          `,f===1){if($<m&&(c%2===1?(x+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$}Ready == 0) {
                  xTexelC${$} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${$}.zw = vec2(0.0);
                  }
                  xTexelC${$}Ready = 1;
                }
              `,d===1&&$>0?x+=`
                xC${$} = vec4(xTexelC${$-2}.zw, xTexelC${$}.xy);
                `:x+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${$} = vec4(previous.zw, xTexelC${$}.xy);
                  } else {
                    xC${$} = vec4(0.0, 0.0, xTexelC${$}.xy);
                  }
                  `):x+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${$}Ready == 0) {
                  xTexelC${$} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${$}.zw = vec2(0.0);
                  }
                  xTexelC${$}Ready = 1;
                }

                xC${$} = xTexelC${$};
                `,$+1<m)){const O=c%2===0?kp(d):d;d%2===0&&c%2===1||d%2!==0&&c%2!==1?(x+=`
                  xCOffset = xC + imod(pads[1], 2) + ${O};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$+1}Ready == 0) {
                    xTexelC${$+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${$+1}.zw = vec2(0.0);
                    }
                    xTexelC${$+1}Ready = 1;
                  }
                  `,d>1?x+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${$+1} = vec4(previous.zw, xTexelC${$+1}.xy);
                    } else {
                     xC${$+1} = vec4(0.0, 0.0, xTexelC${$+1}.xy);
                    }
                    `:x+=`
                    xC${$+1} = vec4(xTexelC${$}.zw, xTexelC${$+1}.xy);
                    `):O===1?x+=`
                    xC${$+1} = xTexelC${$};
                    `:x+=`
                    xCOffset = xC + ${O};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$+1}Ready == 0) {
                      xTexelC${$+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${$+1}.zw = vec2(0.0);
                      }
                      xTexelC${$+1}Ready = 1;
                    }

                    xC${$+1} = xTexelC${$+1};
                    `}}else $<m&&(c%2===1?(x+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$}Ready == 0) {
                  xTexelC${$} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${$}.zw = vec2(0.0);
                  }
                  xTexelC${$}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${$+1}Ready == 0) {
                  xTexelC${$+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${$+1}.zw = vec2(0.0);
                  }
                  xTexelC${$+1}Ready = 1;
                }

                xC${$} = vec4(xTexelC${$}.zw, xTexelC${$+1}.zw);
              `,$+1<m&&(x+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${$+1} = vec4(xTexelC${$+1}.xy, final.xy);
                `)):(x+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${$}Ready == 0) {
                  xTexelC${$} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${$}.zw = vec2(0.0);
                  }
                  xTexelC${$}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$+1}Ready == 0) {
                  xTexelC${$+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${$+1}.zw = vec2(0.);
                  }
                  xTexelC${$+1}Ready = 1;
                }

                xC${$} = vec4(
                  xTexelC${$}.xy, xTexelC${$+1}.xy);
              `,$+1<m&&(x+=`
                  xC${$+1} = vec4(xTexelC${$}.zw, xTexelC${$+1}.zw);
                `)));$<m&&(x+=`
            wTexel = getW(r, ${$}, d1, q);
            dotProd += xC${$} * vec4(wTexel.xz, wTexel.xz);
          `,$+1<m&&(x+=`
              wTexel = getW(r, ${$+1}, d1, q);
              dotProd += xC${$+1} * vec4(wTexel.xz, wTexel.xz);
            `))}x+=`
    }
  `,x+=`
      }
    `;let v="",S="";a&&(r?v=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:o?v=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:v=`vec4 activation(vec4 x) {
          ${a}
        }`,S="result = activation(result);");const w=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${v}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${x}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${w}
        ${S}
        setOutput(result);
      }
    `}}function dP(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,filter:o}=e,{strides:l,pad:c,dilations:f,dimRoundingMode:d}=a;let p=f;p==null&&(p=[1,1]),_(on(l,p),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${p}'`);const m=Sn(r.shape,o.shape,l,p,c,d,!0);let y;q().getBool("WEBGL_PACK_DEPTHWISECONV")&&m.strideWidth<=2&&m.outChannels/m.inChannels===1?y=new KN(m):y=new XN(m);const x=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]];return t.runWebGLProgram(y,[r,o],"float32",x)}const hP={kernelName:mm,backendName:"webgl",kernelFunc:dP};class pP{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,a=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,l=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${l} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${a} - ${o};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class mP{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,a=e.filterWidth,r=e.strideHeight,o=e.strideWidth,l=t-1-e.padInfo.top,c=a-1-e.padInfo.left,f=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${l}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${a} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${f}; dm++) {
              int d2 = d1 * ${f} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function gP(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,dy:o}=e,{strides:l,dilations:c,pad:f,dimRoundingMode:d,filterShape:p}=a,m=Sn(r.shape,p,l,c,f,d,!0),y=new pP(m);return t.runWebGLProgram(y,[r,o],"float32")}const yP={kernelName:gm,backendName:"webgl",kernelFunc:gP};function bP(n){const{inputs:e,backend:t,attrs:a}=n,{dy:r,filter:o}=e,{strides:l,dilations:c,pad:f,dimRoundingMode:d,inputShape:p}=a,m=Sn(p,o.shape,l,c,f,d,!0),y=new mP(m);return t.runWebGLProgram(y,[r,o],"float32")}const xP={kernelName:ym,backendName:"webgl",kernelFunc:bP};class vP{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function wP(n){const{inputs:e,backend:t}=n,{x:a}=e,r=[...a.shape,...a.shape],o=se(a.shape),l=le({inputs:{x:a},backend:t,attrs:{shape:[o]}}),c=new vP(o),f=t.runWebGLProgram(c,[l],l.dtype),d=le({inputs:{x:f},backend:t,attrs:{shape:r}});return t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(f),d}const SP={kernelName:bm,backendName:"webgl",kernelFunc:wP};class TP{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:a,padInfo:r,strideHeight:o,strideWidth:l,filterHeight:c,filterWidth:f,dilationHeight:d,dilationWidth:p}=e,{top:m,left:y}=r;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${l});
      const ivec2 pads = ivec2(${m}, ${y});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${c}; h++) {
          int hIn = hBeg + h * ${d};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${f}; w++) {
              int wIn = wBeg + w * ${p};

              if (wIn >= 0 && wIn < ${a}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}function CP(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,filter:o}=e,{strides:l,pad:c,dilations:f}=a,d=sS(r.shape,o.shape,l,c,"NHWC",f);let p;const m=new TP(d);p=t.runWebGLProgram(m,[r,o],"float32");const y=le({inputs:{x:p},backend:t,attrs:{shape:d.outShape}});return t.disposeIntermediateTensorInfo(p),y}const NP={kernelName:xm,backendName:"webgl",kernelFunc:CP};function $P(n){const{inputs:e,backend:t,attrs:a}=n,{equation:r}=a,o=e,{allDims:l,summedDims:c,idDims:f}=qC(r,o.length);XC(l.length,f,o);const{path:d,steps:p}=KC(c,f),m=p.length;let y=null,x=l.length;const v=[];for(let S=0;S<m;++S){for(const w of p[S]){const{permutationIndices:T,expandDims:$}=jC(x,f[w]);let O;YC(T)?O=o[w]:(O=Pt({inputs:{x:o[w]},backend:t,attrs:{perm:T}}),v.push(O));const A=O.shape.slice();for(let z=0;z<$.length;++z)A.splice($[z],0,1);st(O.shape,A)||(O=le({inputs:{x:O},backend:t,attrs:{shape:A}}),v.push(O)),y===null?y=O:(y=N0({inputs:{a:O,b:y},backend:t}),v.push(y))}S<m-1&&(d[S]>=0&&(y=tf({inputs:{x:y},backend:t,attrs:{axis:d[S]-(l.length-x),keepDims:!1}}),v.push(y)),x--)}for(const S of v)S!==y&&t.disposeIntermediateTensorInfo(S);return y}const EP={kernelName:wm,backendName:"webgl",kernelFunc:$P};const kP="return (x >= 0.0) ? x : (exp(x) - 1.0);",RP=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,_P=Le({opSnippet:kP,packedOpSnippet:RP}),AP={kernelName:Sm,backendName:"webgl",kernelFunc:_P};const OP="return (b >= 0.0) ? a : a * (b + 1.0);",IP=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,DP=n=>{const{inputs:e,backend:t}=n,{dy:a,y:r}=e,o=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Pi(IP,a.shape,r.shape):new vr(OP,a.shape,r.shape);return t.runWebGLProgram(o,[a,r],a.dtype)},LP={kernelName:ow,backendName:"webgl",kernelFunc:DP};const FP=`
  return vec4(equal(a, b));
`,BP="return float(a == b);",zP=Et({opSnippet:BP,packedOpSnippet:FP,dtype:"bool",cpuKernelImpl:gU}),UP={kernelName:Cm,backendName:"webgl",kernelFunc:zP};const VP=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${VC};
  float a1 = ${MC};
  float a2 = ${PC};
  float a3 = ${GC};
  float a4 = ${HC};
  float a5 = ${WC};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,MP=Le({opSnippet:VP}),PP={kernelName:Tm,backendName:"webgl",kernelFunc:MP};const GP=Gi+`
  return exp(x);
`,HP=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,YN=Le({opSnippet:GP,packedOpSnippet:HP,cpuKernelImpl:yU,dtype:"float32"}),WP={kernelName:Nm,backendName:"webgl",kernelFunc:YN};function Np(n){const{inputs:e,attrs:t,backend:a}=n,{dim:r}=t,{input:o}=e,l=o.shape.length,c=o.shape.slice();let f=r;return r<0&&(_(-(l+1)<=r,()=>`Axis must be in the interval [${-(l+1)}, ${l}]`),f=l+r+1),c.splice(f,0,1),le({inputs:{x:o},backend:a,attrs:{shape:c}})}const qP={kernelName:$m,backendName:"webgl",kernelFunc:Np};const H2="return exp(x) - 1.0;",jP=Le({opSnippet:H2,packedOpSnippet:H2,cpuKernelImpl:bU}),XP={kernelName:Em,backendName:"webgl",kernelFunc:jP};class W2{constructor(e,t,a){this.variableNames=["real","imag"];const r=t[1];this.outputShape=t;const o=a?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,l=a?`${r}.0`:"1.0";let c;if(e==="real")c="return real * expR - imag * expI;";else if(e==="imag")c="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${o};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${c}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${l};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function QN(n,e,t){const a=t.texData.get(n.dataId),r=se(n.shape),o=n.shape[n.shape.length-1],l=r/o,c=le({inputs:{x:n},backend:t,attrs:{shape:[l,o]}}),f=c.shape,d=new W2("real",f,e),p=new W2("imag",f,e),m=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:f},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:f}],y=t.runWebGLProgram(d,m,"float32"),x=t.runWebGLProgram(p,m,"float32"),v=Os({inputs:{real:y,imag:x},backend:t});t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(x);const S=le({inputs:{x:v},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(v),S}function KP(n){const{inputs:e,backend:t}=n,{input:a}=e;return QN(a,!1,t)}const YP={kernelName:km,backendName:"webgl",kernelFunc:KP};class QP{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function Sl(n){const{backend:e,attrs:t}=n,{shape:a,value:r}=t;let{dtype:o}=t;if(o=o||ol(r),o==="string"){const l=bt(o,se(a));return l.fill(r),e.makeTensorInfo(a,o,l)}else{const l=new QP(a,r),c=[[r]];return e.runWebGLProgram(l,[],o,c)}}const ZP={kernelName:Rm,backendName:"webgl",kernelFunc:Sl};class JP{constructor(e){this.variableNames=["Image"],this.outputShape=[];const t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const e5={kernelName:_m,backendName:"webgl",kernelFunc:({inputs:n,backend:e})=>{const{image:t}=n,a=e,r=new JP(t.shape);return a.runWebGLProgram(r,[t],t.dtype)}};const q2="return floor(x);",t5=Le({opSnippet:q2,packedOpSnippet:q2,cpuKernelImpl:xU}),n5={kernelName:Am,backendName:"webgl",kernelFunc:t5};const a5=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,s5=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,r5=Et({opSnippet:a5,packedOpSnippet:s5,dtype:"int32"}),i5={kernelName:Om,backendName:"webgl",kernelFunc:r5};class o5{constructor(e){this.variableNames=["A"];const t=Gt(),[a,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${a}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class l5{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const t=Gt(),[a,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${a}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}const u5={kernelName:cc,backendName:"webgl",kernelFunc:c5};let ci,Ph=q().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function c5(n){const{inputs:e,backend:t,attrs:a}=n;let{pixels:r}=e;const{numChannels:o}=a,l=typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement,c=typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement,[f,d]=l?[r.videoWidth,r.videoHeight]:[r.width,r.height],p=[d,f],m=[d,f,o];if(c||l){const S=q().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(ci==null||S!==Ph)&&(Ph=S,ci=document.createElement("canvas").getContext("2d",{willReadFrequently:Ph})),ci.canvas.width=f,ci.canvas.height=d,ci.drawImage(r,0,0,f,d),r=ci.canvas}const y=t.makeTensorInfo(p,"int32");t.texData.get(y.dataId).usage=xn.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(y.dataId),r);const x=q().getBool("WEBGL_PACK")?new l5(m):new o5(m),v=t.runWebGLProgram(x,[y],"int32");return t.disposeData(y.dataId),v}function f5(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,filter:o,bias:l,preluActivationWeights:c}=e,{strides:f,pad:d,dataFormat:p,dilations:m,dimRoundingMode:y,activation:x,leakyreluAlpha:v}=a,S=Ii(p),w=Sn(r.shape,o.shape,f,m,d,y,!1,S);let T;const $=[],O=l!=null,A=c!=null,z=x==="leakyrelu",j=()=>{const X=[r,o],V=(U,R)=>{if(R==="NCHW"&&U.shape.length===1&&U.shape[0]!==1){const Z=le({inputs:{x:U},backend:t,attrs:{shape:[U.shape[0],1,1]}});return $.push(Z),Z}return U};if(O&&X.push(V(l,p)),A&&X.push(V(c,p)),z){const U=t.makeTensorInfo([],"float32",Oi(v,"float32"));X.push(U),$.push(U)}return X};if(w.filterHeight===1&&w.filterWidth===1&&w.dilationHeight===1&&w.dilationWidth===1&&w.strideHeight===1&&w.strideWidth===1&&(w.padInfo.type==="SAME"||w.padInfo.type==="VALID"))T=WN({x:r,filter:o,convInfo:w,backend:t,bias:l,activation:x,preluActivationWeights:c,leakyreluAlpha:v});else if(w.strideWidth<=2&&S==="channelsLast"&&q().getBool("WEBGL_EXP_CONV")){const X=x?sl(x,!0):null,V=new HN(w,O,X,A,z),U=[[w.padInfo.top,w.padInfo.left],[w.strideHeight,w.strideWidth],[w.dilationHeight,w.dilationWidth],[w.inHeight,w.inWidth]],R=j();T=t.runWebGLProgram(V,R,"float32",U)}else if(q().getBool("WEBGL_CONV_IM2COL"))T=qN({x:r,filter:o,convInfo:w,backend:t,bias:l,activation:x,preluActivationWeights:c,leakyreluAlpha:v});else{const X=x?sl(x,!1):null,V=new GN(w,O,X,A,z),U=j();T=t.runWebGLProgram(V,U,"float32")}const G=le({inputs:{x:T},backend:t,attrs:{shape:w.outShape}});return $.push(T),$.forEach(X=>t.disposeIntermediateTensorInfo(X)),G}const d5={kernelName:dc,backendName:"webgl",kernelFunc:f5};function h5(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,filter:o,bias:l,preluActivationWeights:c}=e,{strides:f,pad:d,dilations:p,dimRoundingMode:m,activation:y,leakyreluAlpha:x}=a,v=[];let S=p;S==null&&(S=[1,1]),_(on(f,S),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${f} and dilations '${S}'`);const w=Sn(r.shape,o.shape,f,S,d,m,!0),T=q().getBool("WEBGL_PACK_DEPTHWISECONV")&&w.strideWidth<=2&&w.outChannels/w.inChannels===1,$=y?sl(y,T):null,O=[r,o],A=l!=null,z=c!=null,j=y==="leakyrelu";if(A&&O.push(l),z&&O.push(c),j){const U=t.makeTensorInfo([],"float32",Oi(x,"float32"));O.push(U),v.push(U)}let G;T?G=new KN(w,A,$,z,j):G=new XN(w,A,$,z,j);const X=[[w.padInfo.top,w.padInfo.left],[w.strideHeight,w.strideWidth],[w.dilationHeight,w.dilationWidth],[w.inHeight,w.inWidth]],V=t.runWebGLProgram(G,O,"float32",X);return v.forEach(U=>t.disposeIntermediateTensorInfo(U)),V}const p5={kernelName:hc,backendName:"webgl",kernelFunc:h5};class m5{constructor(e,t,a,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=["x","indices"],this.outputShape=a;const o=We(a.length);let l=`
    int index;`;for(let c=0;c<this.sliceDim;c++)l+=`
          index = round(getIndices(coords[0], ${c}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[c]};
          flattenIndex += index * ${this.strides[c]};`;this.userCode=`
         void main() {
          ${o} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${l}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}function g5(n){const{inputs:e,backend:t}=n,{params:a,indices:r}=e,o=r.shape,l=o[o.length-1],c=se(a.shape),[f,d,p,m]=$C(a,r),y=le({inputs:{x:r},backend:t,attrs:{shape:[d,l]}}),x=le({inputs:{x:a},backend:t,attrs:{shape:[se(a.shape)/p,p]}});if(t.shouldExecuteOnCPU([a,r])||a.dtype==="string"){const T=t.readSync(r.dataId),$=t.bufferSync(a),O=vU(T,$,a.dtype,d,l,p,m,a.shape,c);return t.makeTensorInfo(f,a.dtype,O.values)}const v=new m5(l,m,[d,p],a.shape),S=t.runWebGLProgram(v,[x,y],x.dtype),w=le({inputs:{x:S},backend:t,attrs:{shape:f}});return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(S),w}const y5={kernelName:Lm,backendName:"webgl",kernelFunc:g5};class b5{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const a=We(this.rank),r=x5(e);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}function x5(n,e){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[];for(let r=0;r<n.length;r++)r===2?a.push("index"):a.push(`${t[r]}`);return a.join()}function ZN(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,indices:o}=e,{axis:l,batchDims:c}=a,f=xt(l,r.shape)[0];if(q().get("DEBUG")){const $=t.readSync(o.dataId),O=r.shape[f];for(let A=0;A<$.length;++A){const z=$[A];_(z<=O-1&&z>=0,()=>`GatherV2: the index value ${z} is not in [0, ${O-1}]`)}}const d=F4(r,o,f,c),p=se(o.shape),m=[],y=le({inputs:{x:r},backend:t,attrs:{shape:[d.batchSize,d.outerSize,d.dimSize,d.sliceSize]}}),x=le({inputs:{x:o},backend:t,attrs:{shape:[d.batchSize,p/d.batchSize]}});m.push(y),m.push(x);const v=[d.batchSize,d.outerSize,p/d.batchSize,d.sliceSize];if(t.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const $=t.bufferSync(x),O=t.bufferSync(y),A=wU(O,$,v);return m.forEach(z=>t.disposeIntermediateTensorInfo(z)),t.makeTensorInfo(d.outputShape,A.dtype,A.values)}const S=new b5(y.shape,v),w=t.runWebGLProgram(S,[y,x],y.dtype);m.push(w);const T=le({inputs:{x:w},backend:t,attrs:{shape:d.outputShape}});return m.forEach($=>t.disposeIntermediateTensorInfo($)),T}const v5={kernelName:Dm,backendName:"webgl",kernelFunc:ZN};const w5="return float(a > b);",S5=`
  return vec4(greaterThan(a, b));
`,T5=Et({opSnippet:w5,packedOpSnippet:S5,cpuKernelImpl:SU,dtype:"bool"}),C5={kernelName:Fm,backendName:"webgl",kernelFunc:T5};const N5="return float(a >= b);",$5=`
  return vec4(greaterThanEqual(a, b));
`,E5=Et({opSnippet:N5,packedOpSnippet:$5,dtype:"bool",cpuKernelImpl:TU}),k5={kernelName:Bm,backendName:"webgl",kernelFunc:E5};function R5(n){const{inputs:e,backend:t}=n,{input:a}=e;return QN(a,!0,t)}const _5={kernelName:zm,backendName:"webgl",kernelFunc:R5};const A5="return float(!isnan(x) && !isinf(x));",O5=Le({opSnippet:A5,dtype:"bool"}),I5={kernelName:Vm,backendName:"webgl",kernelFunc:O5};const D5="return float(isinf(x));",L5=Le({opSnippet:D5,dtype:"bool"}),F5={kernelName:Mm,backendName:"webgl",kernelFunc:L5};const B5="return float(isnan(x));",z5=Le({opSnippet:B5,dtype:"bool"}),U5={kernelName:Pm,backendName:"webgl",kernelFunc:z5};const V5="return float(a < b);",M5=`
  return vec4(lessThan(a, b));
`,P5=Et({opSnippet:V5,packedOpSnippet:M5,cpuKernelImpl:CU,dtype:"bool"}),G5={kernelName:Hm,backendName:"webgl",kernelFunc:P5};const H5="return float(a <= b);",W5=`
  return vec4(lessThanEqual(a, b));
`,q5=Et({opSnippet:H5,packedOpSnippet:W5,cpuKernelImpl:NU,dtype:"bool"}),j5={kernelName:Wm,backendName:"webgl",kernelFunc:q5};function X5(n){const{backend:e,attrs:t}=n,{start:a,stop:r,num:o}=t,l=$U(a,r,o);return e.makeTensorInfo([l.length],"float32",l)}const K5={kernelName:qm,backendName:"webgl",kernelFunc:X5};const Y5=Gi+`
  return x < 0.0 ? 0./0. : log(x);
`,Q5=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,Z5=Le({opSnippet:Y5,packedOpSnippet:Q5,cpuKernelImpl:EU}),J5={kernelName:jm,backendName:"webgl",kernelFunc:Z5};const eG=Gi+`
  return log(1.0 + x);
`,tG=Le({opSnippet:eG}),nG={kernelName:Xm,backendName:"webgl",kernelFunc:tG};const aG="return float(a >= 1.0 && b >= 1.0);",sG=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,rG=Et({opSnippet:aG,packedOpSnippet:sG,dtype:"bool"}),iG={kernelName:Km,backendName:"webgl",kernelFunc:rG};const oG="return float(!(x >= 1.0));",lG=Le({opSnippet:oG}),uG={kernelName:Ym,backendName:"webgl",kernelFunc:lG};const cG="return float(a >= 1.0 || b >= 1.0);",fG=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dG=Et({opSnippet:cG,packedOpSnippet:fG,dtype:"bool"}),hG={kernelName:Qm,backendName:"webgl",kernelFunc:dG};class pG{constructor(e,t,a,r,o){this.variableNames=["x"],this.outputShape=[];const l=t,c=e[3]-1;this.outputShape=e;let f;const d=`float(${a}) + float(${r}) * sum`;o===.5?f=`inversesqrt(${d})`:o===1?f=`1.0/(${d})`:f=`exp(log(${d}) * float(-${o}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${l}; j <= ${l}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${c}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${f};
        setOutput(val);
      }
    `}}class mG{constructor(e,t,a,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const l=t,c=e[3]-1;this.outputShape=e;let f;const d=`float(${a}) + float(${r}) * sum`;o===.5?f=`inversesqrt(${d})`:o===1?f=`1.0/(${d})`:f=`exp(log(${d}) * float(-${o}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${l};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${l}; j <= ${l}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${c}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${f};
        setOutput(result);
      }
    `}}const gG=n=>{const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{depthRadius:o,bias:l,alpha:c,beta:f}=a,d=q().getBool("WEBGL_PACK_NORMALIZATION")?new mG(r.shape,o,l,c,f):new pG(r.shape,o,l,c,f);return t.runWebGLProgram(d,[r],r.dtype)},yG={kernelName:Zm,backendName:"webgl",kernelFunc:gG};class bG{constructor(e,t,a,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=a,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${a});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${o})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${o});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}const xG=n=>{const{inputs:e,backend:t,attrs:a}=n,{x:r,y:o,dy:l}=e,{depthRadius:c,bias:f,alpha:d,beta:p}=a,m=new bG(r.shape,c,f,d,p);return t.runWebGLProgram(m,[r,o,l],r.dtype)},vG={kernelName:lw,backendName:"webgl",kernelFunc:xG};function wG(n,e,t,a){const r=se(e),l=se(n.shape)/r,c=le({inputs:{x:n},attrs:{shape:[l,r]},backend:a}),f=Nr(c,n.dtype,"max",a),d=le({inputs:{x:f},attrs:{shape:t},backend:a});return a.disposeIntermediateTensorInfo(c),a.disposeIntermediateTensorInfo(f),d}function JN(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{reductionIndices:o,keepDims:l}=a,c=r.shape.length,f=xt(o,r.shape);let d=f;const p=Mn(d,c),m=p!=null,y=t.shouldExecuteOnCPU([r]);let x=r;if(m){if(y){const O=t.texData.get(x.dataId).values,A=new Array(c);for(let G=0;G<A.length;G++)A[G]=r.shape[p[G]];const z=T0(O,r.shape,r.dtype,p,A);x=t.makeTensorInfo(A,r.dtype);const j=t.texData.get(x.dataId);j.values=z}else x=ef(r,p,t);d=Pn(d.length,c)}sa("max",d,c);const[v,S]=ha(x.shape,d);let w=v;l&&(w=Tn(v,f));let T;if(y){const O=t.texData.get(x.dataId).values,A=kU(O,se(S),w,r.dtype);T=t.makeTensorInfo(w,r.dtype);const z=t.texData.get(T.dataId);z.values=A}else T=wG(x,S,w,t);return m&&t.disposeIntermediateTensorInfo(x),T}const SG={kernelName:Jm,backendName:"webgl",kernelFunc:JN};const TG=C0+`
  return max(a, b);
`,CG=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Cr+`
  return result;
`,NG=Et({opSnippet:TG,packedOpSnippet:CG,cpuKernelImpl:RU}),$G={kernelName:eg,backendName:"webgl",kernelFunc:NG};function EG(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e;xl(r,"maxPool");const{filterSize:o,strides:l,pad:c,dimRoundingMode:f}=a,d=1;_(on(l,d),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${l} and dilations '${d}'`);const p=wr(r.shape,o,l,d,c,f);if(p.filterWidth===1&&p.filterHeight===1&&st(p.inShape,p.outShape))return rn({inputs:{x:r},backend:t});const m=new rl(p,"max",!1);return t.runWebGLProgram(m,[r],r.dtype)}const kG={kernelName:tg,backendName:"webgl",kernelFunc:EG};function RG(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{filterSize:o,strides:l,pad:c,dataFormat:f,dimRoundingMode:d}=a,p=[1,1,1],m=ul(r.shape,o,l,p,c,d,f),y=new $0(m,"max",!1);return t.runWebGLProgram(y,[r],r.dtype)}const _G={kernelName:ng,backendName:"webgl",kernelFunc:RG};class AG{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideHeight,a=e.strideWidth,r=e.dilationHeight,o=e.effectiveFilterHeight,l=e.effectiveFilterWidth,c=o-1-e.padInfo.top,f=l-1-e.padInfo.left,d=o*l-1;this.userCode=`
      const ivec2 pads = ivec2(${c}, ${f});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${o};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l}; wC++) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${d} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${l} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class OG{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideDepth,a=e.strideHeight,r=e.strideWidth,o=e.dilationDepth,l=e.dilationHeight,c=e.dilationWidth,f=e.effectiveFilterDepth,d=e.effectiveFilterHeight,p=e.effectiveFilterWidth,m=f-1-e.padInfo.front,y=d-1-e.padInfo.top,x=p-1-e.padInfo.left,v=f*d*p-1;this.userCode=`
      const ivec3 pads = ivec3(${m}, ${y}, ${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${f};
           wD += ${o}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${p};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${v} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${d} * ${p} +
                  wR * ${p} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function IG(n){const{inputs:e,backend:t,attrs:a}=n,{dy:r,input:o}=e,l=o,{filterSize:c,strides:f,pad:d,dimRoundingMode:p}=a,m=[1,1,1],y=ul(l.shape,c,f,m,d,p),x=new $0(y,"max",!0),v=t.runWebGLProgram(x,[l],l.dtype),S=new OG(y),w=t.runWebGLProgram(S,[r,v],l.dtype);return t.disposeIntermediateTensorInfo(v),w}const DG={kernelName:cw,backendName:"webgl",kernelFunc:IG};function LG(n){const{inputs:e,backend:t,attrs:a}=n,{dy:r,input:o,output:l}=e,c=o;xl([o,l],"maxPoolGrad");const{filterSize:f,strides:d,pad:p,dimRoundingMode:m}=a,y=wr(c.shape,f,d,1,p,m),x=!0,v=new rl(y,"max",x),S=t.runWebGLProgram(v,[c],c.dtype),w=new AG(y),T=t.runWebGLProgram(w,[r,S],c.dtype);return t.disposeIntermediateTensorInfo(S),T}const FG={kernelName:uw,backendName:"webgl",kernelFunc:LG};function BG(n,e,t,a){let r=new rl(t,"max",!1);const o=a.runWebGLProgram(r,[n],"float32");r=new rl(t,"max",!0,!0,e);const l=a.runWebGLProgram(r,[n],"float32");return[o,l]}const zG={kernelName:ag,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:a}=n,{filterSize:r,strides:o,pad:l,includeBatchInIndex:c}=e,f=t;_(a.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.shape.length}.`);const d=[1,1];_(on(o,d),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${d}'`);const p=wr(a.shape,r,o,d,l),[m,y]=BG(a,c,p,f);return[m,y]}};function UG(n,e,t,a){const r=se(e),l=se(n.shape)/r,c=le({inputs:{x:n},attrs:{shape:[l,r]},backend:a}),f=Nr(c,"float32","mean",a),d=le({inputs:{x:f},attrs:{shape:t},backend:a});return a.disposeIntermediateTensorInfo(c),a.disposeIntermediateTensorInfo(f),d}const VG={kernelName:sg,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:a}=n,{keepDims:r,axis:o}=e,l=t,c=a.shape.length,f=xt(o,a.shape);let d=f;const p=Mn(d,c),m=p!=null,y=l.shouldExecuteOnCPU([a]),x=[];let v=a;if(m){if(y){const A=l.texData.get(v.dataId).values,z=new Array(c);for(let X=0;X<z.length;X++)z[X]=a.shape[p[X]];const j=T0(A,a.shape,a.dtype,p,z);v=l.makeTensorInfo(z,a.dtype);const G=l.texData.get(v.dataId);G.values=j}else v=ef(a,p,l);x.push(v),d=Pn(d.length,c)}sa("sum",d,c);const[S,w]=ha(v.shape,d);let T=S;r&&(T=Tn(S,f));const $=UG(v,w,T,l);for(const O of x)l.disposeIntermediateTensorInfo(O);return $}};function MG(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{axis:o,keepDims:l}=a,c=r.shape.length,f=xt(o,r.shape);let d=f;const p=Mn(d,c);let m=r;p!=null&&(m=Pt({inputs:{x:r},backend:t,attrs:{perm:p}}),d=Pn(d.length,r.shape.length)),sa("min",d,c);const[y,x]=ha(m.shape,d),v=se(x),S=le({inputs:{x:m},backend:t,attrs:{shape:[-1,v]}}),w=Nr(S,S.dtype,"min",t);let T;if(l){const $=Tn(y,f);T=le({inputs:{x:w},backend:t,attrs:{shape:$}})}else T=le({inputs:{x:w},backend:t,attrs:{shape:y}});return t.disposeIntermediateTensorInfo(S),t.disposeIntermediateTensorInfo(w),p!=null&&t.disposeIntermediateTensorInfo(m),T}const PG={kernelName:rg,backendName:"webgl",kernelFunc:MG};const GG=C0+`
  return min(a, b);
`,HG=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Cr+`
  return result;
`,WG=Et({opSnippet:GG,packedOpSnippet:HG,cpuKernelImpl:_U}),qG={kernelName:ig,backendName:"webgl",kernelFunc:WG};class jG{constructor(e,t,a){this.variableNames=["x"],this.outputShape=t.map((p,m)=>p[0]+e[m]+p[1]);const r=e.length,o=We(r),l=t.map(p=>p[0]).join(","),c=t.map((p,m)=>p[0]+e[m]).join(","),f=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),d=a==="reflect"?0:1;if(r===1){this.userCode=`
        int start = ${l};
        int end = ${c};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${d};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${d};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${o} start = ${o}(${l});
      ${o} end = ${o}(${c});

      void main() {
        ${o} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${d};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${d};
          }
        }
        ${o} coords = outC - start;
        setOutput(getX(${f}));
      }
    `}}class XG{constructor(e,t,a){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((v,S)=>v[0]+e[S]+v[1]);const r=e.length,o=We(r),l=t.map(v=>v[0]).join(","),c=t.map((v,S)=>v[0]+e[S]).join(","),f=Vt("rc",r),d=Vt("source",r),p=`${f[r-1]} < ${this.outputShape[r-1]}`,m=r===1?"source":`vec2(${d.slice(-2).join()})`,y=a==="reflect"?0:1;let x="";if(r===1){const v=`
        ${o} source = rc;
        if (source < start) {
          source = start * 2 - source - ${y};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${y};
        }
        source -= start;
      `;x=`
        ${o} rc = outputLoc;
        ${v}
        result[0] = getChannel(getX(${d.join()}), ${m});
        ${f[r-1]} += 1;
        if(${p}) {
          ${v}
          result[1] = getChannel(getX(${d.join()}), ${m});
        }
      `}else{const v=`
        ${o} source = rc;
        ${o} lt = ${o}(lessThan(source, start));
        ${o} gte = ${o}(greaterThanEqual(source, end));
        ${o} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${y}) +
                gte * ((end - 1) * 2 - source + ${y});
        source -= start;
      `;x=`
        ${o} rc = outputLoc;
        ${v}
        result[0] = getChannel(getX(${d.join()}), ${m});
        ${f[r-1]} += 1;
        if(${p}) {
          ${v}
          result[1] = getChannel(getX(${d.join()}), ${m});
        }
        rc = outputLoc;
        ${f[r-2]} += 1;
        if(${f[r-2]} < ${this.outputShape[r-2]}) {
          ${v}
          result[2] = getChannel(getX(${d.join()}), ${m});
          ${f[r-1]} += 1;
          if(${p}) {
            ${v}
            result[3] = getChannel(getX(${d.join()}), ${m});
          }
        }
      `}this.userCode=`
      const ${o} start = ${o}(${l});
      const ${o} end = ${o}(${c});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${x}
        setOutput(result);
      }
    `}}const KG=({inputs:n,backend:e,attrs:t})=>{const{x:a}=n,{paddings:r,mode:o}=t,l=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new XG(a.shape,r,o):new jG(a.shape,r,o);return e.runWebGLProgram(l,[a],a.dtype)},YG={kernelName:og,backendName:"webgl",kernelFunc:KG};const QG=`if (b == 0.0) return NAN;
  return mod(a, b);`,ZG=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Cr+`
  return result;
`,JG=Et({opSnippet:QG,packedOpSnippet:ZG}),e8={kernelName:lg,backendName:"webgl",kernelFunc:JG};class t8{constructor(e,t,a){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,a],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}const n8=`
if (a == b) {
  return 1.0;
};
return a / b;`,a8=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,e$=Et({opSnippet:n8,packedOpSnippet:a8,checkOutOfBounds:!0}),s8={kernelName:vm,backendName:"webgl",kernelFunc:e$};const j2="return a - b;",t$=Et({opSnippet:j2,packedOpSnippet:j2,supportsComplex:!0,cpuKernelImpl:QU}),r8={kernelName:cy,backendName:"webgl",kernelFunc:t$};function n$(n){const{inputs:e,backend:t,attrs:a}=n,{logits:r}=e,{dim:o}=a,l=xt([o],r.shape),c=JN({inputs:{x:r},backend:t,attrs:{reductionIndices:l,keepDims:!1}}),f=Tn(c.shape,l),d=le({inputs:{x:c},backend:t,attrs:{shape:f}}),p=t$({inputs:{a:r,b:d},backend:t}),m=YN({inputs:{x:p},backend:t}),y=tf({inputs:{x:m},backend:t,attrs:{axis:l,keepDims:!1}}),x=le({inputs:{x:y},backend:t,attrs:{shape:f}}),v=e$({inputs:{a:m,b:x},backend:t});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(x),v}const i8={kernelName:Zg,backendName:"webgl",kernelFunc:n$};function o8(n){const{inputs:e,backend:t,attrs:a}=n,{logits:r}=e,{numSamples:o,seed:l,normalized:c}=a,f=c?r:n$({inputs:{logits:r},backend:t,attrs:{dim:r.shape.length-1}}),d=f.shape[0],p=f.shape[1],m=new t8(d,p,o),y=[[l]],x=t.runWebGLProgram(m,[f],"int32",y);return c||t.disposeIntermediateTensorInfo(f),x}const l8={kernelName:ug,backendName:"webgl",kernelFunc:o8};const u8=Gn+`
  return -x;
`,c8=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function f8(n){const{inputs:e,backend:t}=n,{x:a}=e;if(t.shouldExecuteOnCPU([a])){const o=t.texData.get(a.dataId),[l,c]=OU(o.values,a.shape,a.dtype);return t.makeTensorInfo(c,a.dtype,l)}let r;return q().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new vs(a.shape,c8):r=new ua(a.shape,u8),t.runWebGLProgram(r,[a],a.dtype)}const d8={kernelName:fg,backendName:"webgl",kernelFunc:f8};const h8=iC;function p8(n){Qn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:a}=n,{boxes:r,scores:o}=e,{maxOutputSize:l,iouThreshold:c,scoreThreshold:f}=a,d=t.readSync(r.dataId),p=t.readSync(o.dataId),{selectedIndices:m}=h8(d,p,l,c,f);return t.makeTensorInfo([m.length],"int32",new Int32Array(m))}const m8={kernelName:hg,backendName:"webgl",kernelFunc:p8};const g8=oC;function y8(n){Qn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:a}=n,{boxes:r,scores:o}=e,{maxOutputSize:l,iouThreshold:c,scoreThreshold:f,padToMaxOutputSize:d}=a,p=t.readSync(r.dataId),m=t.readSync(o.dataId),{selectedIndices:y,validOutputs:x}=g8(p,m,l,c,f,d);return[t.makeTensorInfo([y.length],"int32",new Int32Array(y)),t.makeTensorInfo([],"int32",new Int32Array([x]))]}const b8={kernelName:pg,backendName:"webgl",kernelFunc:y8};const x8=lC;function v8(n){Qn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:a}=n,{boxes:r,scores:o}=e,{maxOutputSize:l,iouThreshold:c,scoreThreshold:f,softNmsSigma:d}=a,p=t.readSync(r.dataId),m=t.readSync(o.dataId),y=l,x=c,v=f,S=d,{selectedIndices:w,selectedScores:T}=x8(p,m,y,x,v,S);return[t.makeTensorInfo([w.length],"int32",new Int32Array(w)),t.makeTensorInfo([T.length],"float32",new Float32Array(T))]}const w8={kernelName:mg,backendName:"webgl",kernelFunc:v8};class S8{constructor(e,t,a,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${a}),
                      float(index == coords.y)));
      }
    `}}const T8=n=>{const{inputs:e,backend:t,attrs:a}=n,{indices:r}=e,{dtype:o,depth:l,onValue:c,offValue:f}=a,d=se(r.shape),p=new S8(d,l,c,f),m=le({inputs:{x:r},backend:t,attrs:{shape:[d]}}),y=t.runWebGLProgram(p,[m],o);t.disposeIntermediateTensorInfo(m);const x=[...r.shape,l],v=le({inputs:{x:y},backend:t,attrs:{shape:x}});return t.disposeIntermediateTensorInfo(y),v},C8={kernelName:yg,backendName:"webgl",kernelFunc:T8};function _c(n){const{inputs:e,backend:t}=n,{x:a}=e;if(a.dtype==="complex64"){const r=wl({inputs:{input:a},backend:t}),o=_c({inputs:{x:r},backend:t}),l=nf({inputs:{input:a},backend:t}),c=_c({inputs:{x:l},backend:t}),f=Os({inputs:{real:o,imag:c},backend:t});return t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(c),f}else return Sl({attrs:{shape:a.shape,dtype:a.dtype,value:a.dtype==="string"?"":0},backend:t})}const N8={kernelName:by,backendName:"webgl",kernelFunc:_c};function a$(n){const{inputs:e,backend:t}=n,{x:a}=e;if(a.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(a.dtype==="complex64"){const r=wl({inputs:{input:a},backend:t}),o=a$({inputs:{x:r},backend:t}),l=nf({inputs:{input:a},backend:t}),c=_c({inputs:{x:l},backend:t}),f=Os({inputs:{real:o,imag:c},backend:t});return t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(c),f}else return Sl({attrs:{shape:a.shape,dtype:a.dtype,value:1},backend:t})}const $8={kernelName:gg,backendName:"webgl",kernelFunc:a$};function E8(n){const{inputs:e,backend:t,attrs:a}=n,{axis:r}=a;if(e.length===1)return Np({inputs:{input:e[0]},backend:t,attrs:{dim:r}});const o=e[0].shape,l=e[0].dtype;e.forEach(p=>{vn(o,p.shape,"All tensors passed to stack must have matching shapes"),_(l===p.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],f=e.map(p=>{const m=Np({inputs:{input:p},backend:t,attrs:{dim:r}});return c.push(m),m}),d=PN({inputs:f,backend:t,attrs:{axis:r}});return c.forEach(p=>t.disposeIntermediateTensorInfo(p)),d}const k8={kernelName:bg,backendName:"webgl",kernelFunc:E8};class R8{constructor(e,t,a){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((d,p)=>d[0]+e[p]+d[1]);const r=e.length,o=We(r),l=t.map(d=>d[0]).join(","),c=t.map((d,p)=>d[0]+e[p]).join(","),f=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);if(r===1){this.userCode=`
        int start = ${l};
        int end = ${c};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${o} start = ${o}(${l});
      ${o} end = ${o}(${c});

      void main() {
        ${o} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${o} coords = outC - start;
          setOutput(getX(${f}));
        }
      }
    `}}class _8{constructor(e,t,a){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((S,w)=>S[0]+e[w]+S[1]);const r=e.length,o=We(r),l=t.map(S=>S[0]).join(","),c=t.map((S,w)=>S[0]+e[w]).join(","),f=Vt("rc",r),d=Vt("source",r),p=`${f[r-1]} < ${this.outputShape[r-1]}`,m=r===1?"source":`vec2(${d.slice(-2).join()})`,y=[`${o} rc = outputLoc;`,`${f[r-1]} += 1;
       if(${p}) {
      `,r===1?"":`}
       rc = outputLoc;
       ${f[r-2]} += 1;
       if(${f[r-2]} < ${this.outputShape[r-2]}) {`,r===1?"":`  ${f[r-1]} += 1;
         if(${p}) {`],x=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let v="";for(let S=0,w=r===1?2:4;S<w;S++)v+=`
        ${y[S]}
        if (${x}) {
          result[${S}] = float(value);
        } else {
          ${o} source = rc - start;
          result[${S}] = getChannel(getX(${d.join()}), ${m});
        }
      `;v+=r===1?"} ":"}}",this.userCode=`
      const ${o} start = ${o}(${l});
      const ${o} end = ${o}(${c});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${v}
        setOutput(result);
      }
    `}}const s$=n=>{const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{paddings:o,constantValue:l}=a;if(se(r.shape)===0){const d=o.map((p,m)=>p[0]+r.shape[m]+p[1]);return Sl({backend:t,attrs:{shape:d,value:l,dtype:r.dtype}})}const c=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new _8(r.shape,o,l):new R8(r.shape,o,l),f=[[l]];return t.runWebGLProgram(c,[r],r.dtype,f)},A8={kernelName:xg,backendName:"webgl",kernelFunc:s$};const O8=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,I8=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+Cr+`
  return result;
`,D8=Et({opSnippet:O8,packedOpSnippet:I8}),L8={kernelName:vg,backendName:"webgl",kernelFunc:D8};function F8(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{axis:o,keepDims:l}=a,c=r.shape.length,f=[],d=xt(o,r.shape);let p=d;const m=Mn(p,c);let y=r;m!=null&&(y=Pt({inputs:{x:r},backend:t,attrs:{perm:m}}),p=Pn(p.length,c),f.push(y)),sa("prod",p,c);let x;if(t.shouldExecuteOnCPU([y])){const v=t.texData.get(y.dataId).values,{outVals:S,outShape:w,outDtype:T}=DU(y.shape,y.dtype,v,p);x=t.makeTensorInfo(w,T,S)}else{const[v,S]=ha(y.shape,p),w=se(S),T=le({inputs:{x:y},backend:t,attrs:{shape:[-1,w]}}),$=zc(r.dtype),O=Nr(T,$,"prod",t);x=le({inputs:{x:O},backend:t,attrs:{shape:v}}),f.push(T),f.push(O)}if(l){f.push(x);const v=Tn(x.shape,d);x=le({inputs:{x},backend:t,attrs:{shape:v}})}return f.forEach(v=>t.disposeIntermediateTensorInfo(v)),x}const B8={kernelName:Sg,backendName:"webgl",kernelFunc:F8};function z8(n){const{inputs:e,backend:t,attrs:a}=n,{paramsNestedSplits:r,paramsDenseValues:o,indices:l}=e,{outputRaggedRank:c}=a,f=r.map(T=>t.readSync(T.dataId)),d=r.map(T=>T.shape),p=t.readSync(o.dataId),m=t.readSync(l.dataId),[y,x,v]=LU(f,d,p,o.shape,o.dtype,m,l.shape,c),S=y.map(T=>t.makeTensorInfo([T.length],"int32",T)),w=t.makeTensorInfo(v,o.dtype,x);return S.concat([w])}const U8={kernelName:Tg,backendName:"webgl",kernelFunc:z8};function V8(n){const{inputs:e,backend:t}=n,{starts:a,limits:r,deltas:o}=e,l=t.readSync(a.dataId),c=t.readSync(r.dataId),f=t.readSync(o.dataId),[d,p]=FU(l,a.shape,a.dtype,c,r.shape,f,o.shape),m=t.makeTensorInfo([d.length],"int32",d),y=t.makeTensorInfo([p.length],a.dtype,p);return[m,y]}const M8={kernelName:Cg,backendName:"webgl",kernelFunc:V8};function P8(n){const{inputs:e,backend:t,attrs:a}=n,{shape:r,values:o,defaultValue:l,rowPartitionTensors:c}=e,{rowPartitionTypes:f}=a,d=t.readSync(r.dataId),p=t.readSync(o.dataId),m=t.readSync(l.dataId),y=c.map(w=>t.readSync(w.dataId)),x=c.map(w=>w.shape),[v,S]=BU(d,r.shape,p,o.shape,o.dtype,m,l.shape,y,x,f);return t.makeTensorInfo(v,o.dtype,S)}const G8={kernelName:Ng,backendName:"webgl",kernelFunc:P8};const r$=n=>{const{backend:e,attrs:t}=n,{start:a,stop:r,step:o,dtype:l}=t,c=zU(a,r,o,l);return e.makeTensorInfo([c.length],l,c)},H8={kernelName:$g,backendName:"webgl",kernelFunc:r$};const W8="return 1.0 / x;",q8=Le({opSnippet:W8}),j8={kernelName:kg,backendName:"webgl",kernelFunc:q8};const X8=Gn+`
  return (x < 0.0) ? 0.0 : x;
`,K8=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Y8=Le({opSnippet:X8,packedOpSnippet:K8}),Q8={kernelName:Rg,backendName:"webgl",kernelFunc:Y8};const Z8=Gn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,J8=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,eH=Le({opSnippet:Z8,packedOpSnippet:J8}),tH={kernelName:Ig,backendName:"webgl",kernelFunc:eH};class nH{constructor(e,t,a,r,o){this.variableNames=["A"],this.outputShape=[];const[l,c,f,d]=e;this.outputShape=[l,t,a,d];const p=[r&&t>1?c-1:c,r&&a>1?f-1:f],m=[r&&t>1?t-1:t,r&&a>1?a-1:a];let y;o?y="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":y="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${p[0]/m[0]},
          ${p[1]/m[1]});
      const vec2 inputShapeRC = vec2(${c}.0, ${f}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${y};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class aH{constructor(e,t,a,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[l,c,f,d]=e;this.outputShape=[l,t,a,d];const p=[r&&t>1?c-1:c,r&&a>1?f-1:f],m=[r&&t>1?t-1:t,r&&a>1?a-1:a];let y;o?y="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":y="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${p[0]/m[0]},
          ${p[1]/m[1]},
          ${p[1]/m[1]});
      const vec3 inputShapeRC = vec3(${c}.0, ${f}.0,
                                     ${f}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${y};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${d-1};
        bool hasNextRow = coords.z < ${a-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}function sH(n){const{inputs:e,backend:t,attrs:a}=n,{images:r}=e,{alignCorners:o,halfPixelCenters:l,size:c}=a,[f,d]=c,p=q().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new aH(r.shape,f,d,o,l):new nH(r.shape,f,d,o,l);return t.runWebGLProgram(p,[r],"float32")}const rH={kernelName:Og,backendName:"webgl",kernelFunc:sH};class iH{constructor(e,t,a){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,r,o]=t,[,l,c]=e,f=[a&&l>1?r-1:r,a&&c>1?o-1:o],d=[a&&l>1?l-1:l,a&&c>1?c-1:c],p=f[0]/d[0],m=f[1]/d[1],y=1/p,x=1/m,v=Math.ceil(y)*2+2,S=Math.ceil(x)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${p});
        const float widthScale = float(${m});

        const float invHeightScale = float(${y});
        const float invWidthScale = float(${x});

        const int winHeight = int(${v});
        const int winWidth = int(${S});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${l}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${c}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${o-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function oH(n){const{inputs:e,backend:t,attrs:a}=n,{images:r,dy:o}=e,{alignCorners:l}=a,c=new iH(o.shape,r.shape,l);return t.runWebGLProgram(c,[o],o.dtype)}const lH={kernelName:dw,backendName:"webgl",kernelFunc:oH};class uH{constructor(e,t,a,r,o){this.variableNames=["A"],this.outputShape=[];const[l,c,f,d]=e;this.outputShape=[l,t,a,d];const p=[r&&t>1?c-1:c,r&&a>1?f-1:f],m=[r&&t>1?t-1:t,r&&a>1?a-1:a],y=r?"0.5":"0.0";let x;o?x="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":x="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${p[0]/m[0]},
          ${p[1]/m[1]});
      const vec2 inputShapeRC = vec2(${c}.0, ${f}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${x};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${y})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class cH{constructor(e,t,a,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[l,c,f,d]=e;this.outputShape=[l,t,a,d];const p=[r&&t>1?c-1:c,r&&a>1?f-1:f],m=[r&&t>1?t-1:t,r&&a>1?a-1:a],y=r?"0.5":"0.0";let x;o?x="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":x="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${p[0]/m[0]},
          ${p[1]/m[1]},
          ${p[1]/m[1]});
      const vec3 inputShapeRC = vec3(${c}.0, ${f}.0,
                                     ${f}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${x};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${y})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${d-1};
        bool hasNextRow = coords.z < ${a-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}function fH(n){const{inputs:e,backend:t,attrs:a}=n,{images:r}=e,{alignCorners:o,halfPixelCenters:l,size:c}=a,[f,d]=c,p=q().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new cH(r.shape,f,d,o,l):new uH(r.shape,f,d,o,l);return t.runWebGLProgram(p,[r],r.dtype)}const dH={kernelName:Ag,backendName:"webgl",kernelFunc:fH};class hH{constructor(e,t,a){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,r,o]=t,[,l,c]=e,f=[a&&l>1?r-1:r,a&&c>1?o-1:o],d=[a&&l>1?l-1:l,a&&c>1?c-1:c],p=f[0]/d[0],m=f[1]/d[1],y=1/p,x=1/m,v=Math.ceil(y)*2+2,S=Math.ceil(x)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${p});
        const float widthScale = float(${m});

        const float invHeightScale = float(${y});
        const float invWidthScale = float(${x});

        const int winHeight = int(${v});
        const int winWidth = int(${S});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${l}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${c}) {
              continue;
            }

            float sourceFracRow =
              float(${f[0]}) *
                (float(dyR) / float(${d[0]}));

            float sourceFracCol =
                float(${f[1]}) *
                  (float(dyC) / float(${d[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${a} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${o}) - 1),
                ${a} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function pH(n){const{inputs:e,backend:t,attrs:a}=n,{images:r,dy:o}=e,{alignCorners:l}=a,c=new hH(o.shape,r.shape,l);return t.runWebGLProgram(c,[o],o.dtype)}const mH={kernelName:fw,backendName:"webgl",kernelFunc:pH};class gH{constructor(e,t){this.variableNames=["x"];const a=e.length;if(a>4)throw new Error(`WebGL backend: Reverse of rank-${a} tensor is not yet supported`);if(this.outputShape=e,a===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const r=c=>t.indexOf(c)!==-1&&e[c]!==1?`${e[c]} - coords[${c}] - 1`:`coords[${c}]`,o=e.map((c,f)=>r(f)).join(","),l=We(a);this.userCode=`
      void main() {
        ${l} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}}class yH{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const a=e.length;if(a>4)throw new Error(`WebGL backend: Reverse of rank-${a} tensor is not yet supported`);this.outputShape=e;const r=Vt("rc",a),o=`${r[a-1]} + 1 < ${this.outputShape[a-1]}`,l=`${r[a-2]} + 1 < ${this.outputShape[a-2]}`,c=We(a);a===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${o}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${c} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${f(r.slice())};
          if(${o}){
            result.g = ${d(r.slice())};
          }
          if(${l}) {
            result.b = ${p(r.slice())};
            if(${o}) {
              result.a = ${m(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function f(v){return y(v)}function d(v){return v[a-1]="("+v[a-1]+" + 1)",y(v)}function p(v){return v[a-2]="("+v[a-2]+" + 1)",y(v)}function m(v){return v[a-1]="("+v[a-1]+" + 1)",v[a-2]="("+v[a-2]+" + 1)",y(v)}function y(v){const S=e.map(($,O)=>x(O,v)),w=S.join(","),T=S.slice(-2).join(",");return`getChannel(getX(${w}), vec2(${T}))`}function x(v,S){return t.indexOf(v)!==-1&&e[v]!==1?`${e[v]} - ${S[v]} - 1`:`${S[v]}`}}}function bH(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{dims:o}=a,l=r.shape.length,c=xt(o,r.shape);if(l===0)return rn({inputs:{x:r},backend:t});const f=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new yH(r.shape,c):new gH(r.shape,c);return t.runWebGLProgram(f,[r],r.dtype)}const xH={kernelName:Dg,backendName:"webgl",kernelFunc:bH};class vH{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const a=e[1],r=e[2];this.outputShape=e;let o="";typeof t=="number"?o=`float outputValue = ${t.toFixed(2)};`:o=`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${o}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${a}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const wH={kernelName:vy,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:a}=n,{radians:r,fillValue:o,center:l}=e,c=t,f=new vH(a.shape,o),[d,p]=LC(l,a.shape[1],a.shape[2]),m=[[d,p,Math.sin(r),Math.cos(r)]];return c.runWebGLProgram(f,[a],a.dtype,m)}};const SH=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,TH=Le({opSnippet:SH}),CH={kernelName:Lg,backendName:"webgl",kernelFunc:TH};const NH="return inversesqrt(x);",$H=Le({opSnippet:NH,cpuKernelImpl:UU}),EH={kernelName:Fg,backendName:"webgl",kernelFunc:$H};class E0{constructor(e,t,a,r,o,l,c=!0,f=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=l;const d=We(o.length),p=We(l.length);let m="";a===1?m="i":a===2&&(m="i, j");const y=`getIndices(${m})`;let x="";r===1?x="i":r===2&&(x="i, coords[1]");const v=`getUpdates(${x})`;let S="";f&&(S="coords[0], coords[1]");const w=`getDefaultValue(${S})`,T=t>1?"strides[j]":"strides";this.userCode=`
        ${d} strides = ${d}(${o});

        void main() {
          ${p} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${y});
              flattenedIndex += index * ${T};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${v};
              found = true;
            }
          }
          setOutput(mix(${w}, sum, float(found)));
        }
      `}}class kH{constructor(e,t,a,r,o,l,c=!0,f=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=l;const d=We(o.length),p=We(l.length);let m="";a===1?m="i":a===2&&(m="i, j");const y=`getIndices(${m})`;let x="";r===1?x="i":r===2&&(x="i, coords[1]");const v=`getUpdates(${x})`;let S="";f&&(S="coords[0], coords[1]");const w=`getDefaultValue(${S})`,T=t>1?"strides[j]":"strides",$=t>1?"strides[j + 1]":"strides";this.userCode=`
        ${d} strides = ${d}(${o});

        void main() {
          ${p} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${y});
              flattenedIndex += index.xz * ${T};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${$};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${v};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${w}, sum, found));
        }
      `}}function RH(n){const{inputs:e,backend:t,attrs:a}=n,{indices:r,updates:o}=e,{shape:l}=a,{sliceRank:c,numUpdates:f,sliceSize:d,strides:p,outputSize:m}=Wc(o,r,l),y=[m/d,d];if(m===0)return t.makeTensorInfo(l,r.dtype);const x=le({inputs:{x:r},backend:t,attrs:{shape:[f,c]}}),v=le({inputs:{x:o},backend:t,attrs:{shape:[f,d]}}),S=t.makeTensorInfo([],"float32",new Float32Array([0]));let w;q().getBool("WEBGL_PACK")?w=new kH(f,c,x.shape.length,v.shape.length,p,y):w=new E0(f,c,x.shape.length,v.shape.length,p,y);const T=t.runWebGLProgram(w,[v,x,S],v.dtype),$=le({inputs:{x:T},backend:t,attrs:{shape:l}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(v),t.disposeIntermediateTensorInfo(T),t.disposeIntermediateTensorInfo(S),$}const _H={kernelName:Bg,backendName:"webgl",kernelFunc:RH};class AH{constructor(e,t,a,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,a];const o="while (left < right) {",l=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,c=q().getNumber("WEBGL_VERSION")===2?o:l,f=r==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${c}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${f} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}function OH(n){const{inputs:e,backend:t,attrs:a}=n,{sortedSequence:r,values:o}=e,{side:l}=a,c=new AH(r.shape[0],r.shape[1],o.shape[1],l),f=[[r.shape[1]]];return t.runWebGLProgram(c,[r,o],"int32",f)}const IH={kernelName:Ug,backendName:"webgl",kernelFunc:OH};class DH{constructor(e,t,a){this.variableNames=["c","a","b"],this.outputShape=t;let r,o;if(a>4)throw Error(`Where for rank ${a} is not yet supported`);if(a===1)o="resRC",r="resRC";else{const c=["resRC.x","resRC.y","resRC.z","resRC.w"],f=[],d=[];for(let p=0;p<t.length;p++)d.push(`${c[p]}`),p<e&&f.push(`${c[p]}`);r=f.join(),o=d.join()}const l=We(a);this.userCode=`
      void main() {
        ${l} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${o}));
        } else {
          setOutput(getB(${o}));
        }
      }
    `}}function LH(n){const{inputs:e,backend:t}=n,{condition:a,t:r,e:o}=e,l=new DH(a.shape.length,r.shape,r.shape.length);return t.runWebGLProgram(l,[a,r,o],ta(r.dtype,o.dtype))}const FH={kernelName:Vg,backendName:"webgl",kernelFunc:LH};const BH=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${zC};
  float scale = ${UC};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,zH=Le({opSnippet:BH}),UH={kernelName:Mg,backendName:"webgl",kernelFunc:zH};const VH=Gi+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,MH=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,PH=Le({opSnippet:VH,packedOpSnippet:MH,cpuKernelImpl:MU}),GH={kernelName:qg,backendName:"webgl",kernelFunc:PH};const HH=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,WH=Le({opSnippet:HH}),qH={kernelName:Wg,backendName:"webgl",kernelFunc:WH};const jH=Gi+`
  return sin(x);
`,XH=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Cr}
  return result;
`,KH=Le({opSnippet:jH,packedOpSnippet:XH}),YH={kernelName:Gg,backendName:"webgl",kernelFunc:KH};const QH=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,ZH=Le({opSnippet:QH}),JH={kernelName:Hg,backendName:"webgl",kernelFunc:ZH};const eW=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,tW=Le({opSnippet:eW}),nW={kernelName:jg,backendName:"webgl",kernelFunc:tW};const aW=n=>{const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{blockShape:o,paddings:l}=a;_(r.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const c=o.reduce((T,$)=>T*$),f=[[0,0]];f.push(...l);for(let T=1+o.length;T<r.shape.length;++T)f.push([0,0]);const d=[],p=s$({inputs:{x:r},backend:t,attrs:{paddings:f,constantValue:0}}),m=m0(p.shape,o,c,!1),y=g0(m.length,o.length,!1),x=y0(p.shape,o,c,!1),v=le({inputs:{x:p},backend:t,attrs:{shape:m}}),S=Pt({inputs:{x:v},backend:t,attrs:{perm:y}}),w=le({inputs:{x:S},backend:t,attrs:{shape:x}});return d.push(p),d.push(v),d.push(S),d.forEach(T=>t.disposeIntermediateTensorInfo(T)),w},sW={kernelName:Yg,backendName:"webgl",kernelFunc:aW};function rW(n){const{inputs:e,backend:t}=n,{indices:a,values:r,denseShape:o,defaultValue:l}=e;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${o.shape}`);if(a.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${a.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${r.shape}`);if(l.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${l.shape}`);const c=t.readSync(a.dataId),f=t.readSync(r.dataId),d=t.readSync(o.dataId),p=t.readSync(l.dataId)[0],[m,y,x,v,S]=GU(c,a.shape,a.dtype,f,r.dtype,d,p);return[t.makeTensorInfo(y,a.dtype,m),t.makeTensorInfo([y[0]],r.dtype,x),t.makeTensorInfo([v.length],"bool",new Uint8Array(v.map(w=>Number(w)))),t.makeTensorInfo([S.length],a.dtype,new Int32Array(S))]}const iW={kernelName:Jg,backendName:"webgl",kernelFunc:rW};function oW(n){const{inputs:e,backend:t}=n,{inputIndices:a,inputShape:r,newShape:o}=e;if(a.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${a.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const l=Array.from(t.readSync(r.dataId)),c=t.readSync(a.dataId),f=Array.from(t.readSync(o.dataId)),[d,p,m]=HU(c,a.shape,a.dtype,l,f);return[t.makeTensorInfo(p,a.dtype,d),t.makeTensorInfo([m.length],o.dtype,new Int32Array(m))]}const lW={kernelName:ey,backendName:"webgl",kernelFunc:oW};function uW(n){const{inputs:e,backend:t}=n,{data:a,indices:r,segmentIds:o}=e;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${o.shape}`);const l=t.readSync(a.dataId),c=t.readSync(r.dataId),f=t.readSync(o.dataId),[d,p]=RN(l,a.shape,a.dtype,c,f,!0);return t.makeTensorInfo(p,a.dtype,d)}const cW={kernelName:ty,backendName:"webgl",kernelFunc:uW};function fW(n){const{inputs:e,backend:t}=n,{data:a,indices:r,segmentIds:o}=e;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${o.shape}`);const l=t.readSync(a.dataId),c=t.readSync(r.dataId),f=t.readSync(o.dataId),[d,p]=RN(l,a.shape,a.dtype,c,f);return t.makeTensorInfo(p,a.dtype,d)}const dW={kernelName:ny,backendName:"webgl",kernelFunc:fW};function hW(n){const{inputs:e,backend:t,attrs:a}=n,{sparseIndices:r,sparseValues:o,defaultValue:l}=e,{outputShape:c}=a,{sliceRank:f,numUpdates:d,sliceSize:p,strides:m,outputSize:y}=Wc(o,r,c),x=!1;if(o.dtype==="string"){const T=t.bufferSync(r),$=t.bufferSync(o),O=wi(t.readSync(l.dataId)[0]),A=VU(T,$,c,y,p,d,f,m,O,x);return t.makeTensorInfo(c,A.dtype,A.values)}const v=new E0(d,f,r.shape.length,o.shape.length,m,[y,1],x),S=t.runWebGLProgram(v,[o,r,l],o.dtype),w=le({inputs:{x:S},backend:t,attrs:{shape:c}});return t.disposeIntermediateTensorInfo(S),w}const pW={kernelName:ay,backendName:"webgl",kernelFunc:hW};function mW(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{numOrSizeSplits:o,axis:l}=a,c=xt(l,r.shape)[0],f=QC(r,o,c),d=r.shape.length,p=new Array(d).fill(0),m=r.shape.slice();return f.map(y=>{const x=[...m];x[c]=y;const v=Hi({inputs:{x:r},backend:t,attrs:{begin:p,size:x}});return p[c]+=y,v})}const gW={kernelName:Qg,backendName:"webgl",kernelFunc:mW};const X2="return sqrt(x);",yW=Le({opSnippet:X2,packedOpSnippet:X2,cpuKernelImpl:WU}),bW={kernelName:Xg,backendName:"webgl",kernelFunc:yW};const xW="return x * x;",vW=Le({opSnippet:xW}),wW={kernelName:hw,backendName:"webgl",kernelFunc:vW};const K2="return (a - b) * (a - b);",SW=Et({opSnippet:K2,packedOpSnippet:K2}),TW={kernelName:sy,backendName:"webgl",kernelFunc:SW};function CW(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");const o=t.readSync(r.dataId),l=ki(o),c=qU(l,"string",a);return t.makeTensorInfo(r.shape,"string",c)}const NW={kernelName:ry,backendName:"webgl",kernelFunc:CW};function $W({inputs:n,attrs:e,backend:t}){const{x:a}=n,r=Gn+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,o=new ua(a.shape,r);return t.runWebGLProgram(o,[a],a.dtype)}const EW={kernelName:xy,backendName:"webgl",kernelFunc:$W};class kW{constructor(e,t,a){this.variableNames=["x"],this.outputShape=a;const r=a.length,o=We(a.length),l=We(a.length);let c="";if(r===1)c="coords * strides + begin";else{let f=0;c=a.map((d,p)=>(f++,a.length===1?`coords * strides[${p}] + begin[${p}]`:`coords[${f-1}] * strides[${p}] + begin[${p}]`)).join(",")}this.userCode=`
      ${o} begin = ${o}(${e});
      ${o} strides = ${o}(${t});

      void main() {
        ${l} coords = getOutputCoords();
        setOutput(getX(${c}));
      }
    `}}function RW(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{begin:o,end:l,strides:c,beginMask:f,endMask:d,ellipsisMask:p,newAxisMask:m,shrinkAxisMask:y}=a,{finalShapeSparse:x,finalShape:v,isIdentity:S,sliceDim0:w,isSimpleSlice:T,begin:$,end:O,strides:A}=R4(r.shape,o,l,c,f,d,p,m,y);let z;if(S)z=le({inputs:{x:r},backend:t,attrs:{shape:v}});else if(w||T){_(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const G=E4($,O,A),X=Hi({inputs:{x:r},backend:t,attrs:{begin:$,size:G}});z=le({inputs:{x:X},backend:t,attrs:{shape:v}}),t.disposeIntermediateTensorInfo(X)}else if(t.shouldExecuteOnCPU([r])){const X=t.readSync(r.dataId),V=tt(r.shape,r.dtype,X),U=jU(x,V,A,$);z=t.makeTensorInfo(v,r.dtype,U.values)}else{const X=new kW($,A,x);z=t.runWebGLProgram(X,[r],r.dtype)}const j=le({inputs:{x:z},backend:t,attrs:{shape:v}});return t.disposeIntermediateTensorInfo(z),j}const _W={kernelName:iy,backendName:"webgl",kernelFunc:RW};function AW(n){const{inputs:e,backend:t,attrs:a}=n,{separator:r,nGramWidths:o,leftPad:l,rightPad:c,padWidth:f,preserveShortSequences:d}=a,{data:p,dataSplits:m}=e,y=t.readSync(p.dataId),x=t.readSync(m.dataId),[v,S]=XU(y,x,r,o,l,c,f,d);return[t.makeTensorInfo([v.length],"string",v),t.makeTensorInfo(m.shape,"int32",S)]}const OW={kernelName:oy,backendName:"webgl",kernelFunc:AW};function IW(n){const{inputs:e,backend:t,attrs:a}=n,{skipEmpty:r}=a,{input:o,delimiter:l}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(l.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${l.shape}`);const c=t.readSync(o.dataId),f=t.readSync(l.dataId)[0],[d,p,m]=KU(c,f,r),y=p.length;return[t.makeTensorInfo([y,2],"int32",d),t.makeTensorInfo([y],"string",p),t.makeTensorInfo([2],"int32",new Int32Array(m))]}const DW={kernelName:ly,backendName:"webgl",kernelFunc:IW};function LW(n){const{inputs:e,backend:t,attrs:a}=n,{numBuckets:r}=a,{input:o}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const l=t.readSync(o.dataId),c=YU(l,r);return t.makeTensorInfo(o.shape,"int32",c)}const FW={kernelName:uy,backendName:"webgl",kernelFunc:LW};const BW="return tan(x);",zW=Le({opSnippet:BW}),UW={kernelName:fy,backendName:"webgl",kernelFunc:zW};const VW=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,MW=Le({opSnippet:VW}),PW={kernelName:dy,backendName:"webgl",kernelFunc:MW};function GW(n){const{inputs:e,backend:t,attrs:a}=n,{tensor:r,indices:o,updates:l}=e,{sliceRank:c,numUpdates:f,sliceSize:d,strides:p,outputSize:m}=Wc(l,o,r.shape),y=[m/d,d];if(m===0)return t.makeTensorInfo(r.shape,o.dtype);const x=le({inputs:{x:o},backend:t,attrs:{shape:[f,c]}}),v=le({inputs:{x:l},backend:t,attrs:{shape:[f,d]}}),S=le({inputs:{x:r},backend:t,attrs:{shape:y}}),w=new E0(f,c,x.shape.length,v.shape.length,p,y,!1,!0),T=t.runWebGLProgram(w,[v,x,S],S.dtype),$=le({inputs:{x:T},backend:t,attrs:{shape:r.shape}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(v),t.disposeIntermediateTensorInfo(S),t.disposeIntermediateTensorInfo(T),$}const HW={kernelName:zg,backendName:"webgl",kernelFunc:GW};class WW{constructor(e,t){this.variableNames=["A"];const a=new Array(e.length);for(let l=0;l<a.length;l++)a[l]=e[l]*t[l];this.outputShape=a,this.rank=a.length;const r=We(this.rank),o=qW(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${o}));
      }
    `}}function qW(n){const e=n.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${n[0]})`;const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],a=[];for(let r=0;r<n.length;r++)a.push(`imod(${t[r]}, ${n[r]})`);return a.join()}function i$(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{reps:o}=a;if(r.dtype==="string"||r.shape.length>5){const f=t.readSync(r.dataId),d=r.dtype==="string"?f.map(y=>wi(y)):f,p=tt(r.shape,r.dtype,d),m=ZU(p,o);return t.makeTensorInfo(m.shape,m.dtype,m.values)}const l=new WW(r.shape,o);return t.runWebGLProgram(l,[r],r.dtype)}const jW={kernelName:Lc,backendName:"webgl",kernelFunc:i$};class XW{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class KW{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function Js(n,e){e!==null&&n.disposeIntermediateTensorInfo(e)}function Y2(n){let e=1;for(;e<n;)e*=2;return e}function YW(n){const{inputs:e,backend:t,attrs:a}=n,{x:r}=e,{k:o,sorted:l}=a,c=q().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),f=q().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),d=r.shape,p=d[d.length-1];if(t.shouldExecuteOnCPU([r])||p<c||o>f){const U=t.readSync(r.dataId),[R,Z]=JU(U,d,r.dtype,o,l);return[t.makeTensorInfo(R.shape,R.dtype,R.values),t.makeTensorInfo(Z.shape,Z.dtype,Z.values)]}if(o===0)return d[d.length-1]=0,[t.makeTensorInfo(d,r.dtype,[]),t.makeTensorInfo(d,"int32",[])];if(p===1)return[r,Sl({attrs:{shape:d,dtype:"int32",value:0},backend:t})];const m=t.texData.get(r.dataId),y=m!==null&&m.isPacked,x=y?t.unpackTensor(r):r,S=se(d)/p,w=le({inputs:{x},attrs:{shape:[S,p]},backend:t});y&&Js(t,x);const T=Y2(o),$=Y2(p);let O=null;const A=()=>O===null?[w,w]:[w,O],z=(U,R,Z)=>{const oe=A(),fe=new XW(Z),P=[[p],[O===null?1:0],[Number.NEGATIVE_INFINITY],[U],[R]],ae=O;O=t.runWebGLProgram(fe,oe,"int32",P),Js(t,ae)};for(let U=1;U<T;U*=2){const R=U*2;for(let Z=U;Z>=1;Z/=2)z(R,Z,[S,$])}for(let U=$;U>T;U/=2){const R=A(),Z=new KW([S,U/2]),fe=[[p],[O===null?1:0],[T]],de=O;O=t.runWebGLProgram(Z,R,"int32",fe),Js(t,de);const P=T/2,ae=P*2;for(let ie=P;ie>=1;ie/=2)z(ae,ie,O.shape)}let j=O;O=Hi({inputs:{x:O},backend:t,attrs:{begin:0,size:[S,o]}}),Js(t,j);let G=ZN({inputs:{x:w,indices:O},backend:t,attrs:{axis:1,batchDims:1}});Js(t,w);const X=d.slice(0,-1);X.push(o),j=O,O=le({inputs:{x:O},attrs:{shape:X},backend:t}),Js(t,j);const V=G;return G=le({inputs:{x:G},attrs:{shape:X},backend:t}),Js(t,V),[G,O]}const QW={kernelName:hy,backendName:"webgl",kernelFunc:YW};class ZW{constructor(e,t,a,r,o,l){this.variableNames=["Image","Transforms"],this.outputShape=l;const c=a==="nearest"?1:2;let f;switch(r){case"constant":f=1;break;case"reflect":f=2;break;case"wrap":f=3;break;case"nearest":f=4;break;default:f=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${f} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${f} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${f} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${o});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${o});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${c} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}function JW(n){const{inputs:e,backend:t,attrs:a}=n,{image:r,transforms:o}=e,{interpolation:l,fillMode:c,fillValue:f,outputShape:d}=a,[p,m,y,x]=r.shape,[v,S]=d??[m,y],w=[p,v,S,x],T=new ZW(m,y,l,c,f,w);return t.runWebGLProgram(T,[r,o],"float32")}const e7={kernelName:py,backendName:"webgl",kernelFunc:JW};function t7(n){const{inputs:e,attrs:t,backend:a}=n,{axis:r}=t,{x:o}=e;xl(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const l=a.readSync(o.dataId),{outputValues:c,outputShape:f,indices:d}=eV(l,r,o.shape,o.dtype);return[a.makeTensorInfo(f,o.dtype,c),a.makeTensorInfo([d.length],"int32",d)]}const n7={kernelName:my,backendName:"webgl",kernelFunc:t7};function a7(n){const{inputs:e,backend:t,attrs:a}=n,{value:r}=e;let{axis:o}=a;o<0&&(o+=r.shape.length);const l=r,c=l.shape.length,f=r.shape[o],d=new Array(c-1);let p=0;for(let S=0;S<c;S++)S!==o&&(d[p++]=l.shape[S]);const m=[],y=new Array(c).fill(0),x=l.shape.slice();x[o]=1;const v=new Array(f);for(let S=0;S<v.length;S++){y[o]=S;const w=Hi({inputs:{x:l},backend:t,attrs:{begin:y,size:x}}),T=le({inputs:{x:w},backend:t,attrs:{shape:d}});v[S]=T,m.push(w)}return m.forEach(S=>t.disposeIntermediateTensorInfo(S)),v}const s7={kernelName:gy,backendName:"webgl",kernelFunc:a7};class r7{constructor(e,t){this.variableNames=["x","segmentIds"];const a=e.windowSize,r=e.batchSize,o=e.inSize,l=e.numSegments,c=l*Math.ceil(o/a);this.outputShape=[r,c];const f="0.0",d="sumValue",p=Math.floor(a/4)*4,m=a%4,y=`
        sumValue += dot(values, segFilter);
    `;let x="";o%a>0&&(x=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `);let v="";o%a>0&&(v=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${f};

      float getValue(int batch, int inIdx) {
        ${x}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${v}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${l})) * float(${a}));
        int currentSeg = int(mod(float(outIdx), float(${l})));

        float sumValue = 0.0;

        for (int i = 0; i < ${p}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${y}
        }

        int inIdx = inOffset + ${p};
        if (${m===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${y}
        } else if (${m===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${y}
        } else if (${m===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${y}
        }
        setOutput(${d});
      }
    `}}function i7(n){const{inputs:e,backend:t,attrs:a}=n,{x:r,segmentIds:o}=e,{numSegments:l}=a,c=r.shape.length,f=[];let d=0;const p=Mn([d],c);let m=r;p!=null&&(m=Pt({inputs:{x:r},backend:t,attrs:{perm:p}}),f.push(m),d=Pn(1,c)[0]);const y=L4(m.shape,d,l),x=se([m.shape[d]]),v=le({inputs:{x:m},backend:t,attrs:{shape:[-1,x]}});f.push(v);const S=zc(r.dtype),w=(A,z,j,G,X)=>{const V=A.shape[0],U=A.shape[1],R=D4(U,X),Z={windowSize:R,inSize:U,batchSize:V,numSegments:X},oe=new r7(Z,z),fe=t.compileAndRun(oe,[A,j],G);if(f.push(fe),fe.shape[1]===X)return fe;const de=r$({backend:t,attrs:{start:0,stop:X,step:1,dtype:"float32"}}),P=i$({inputs:{x:de},backend:t,attrs:{reps:[U/R]}});return f.push(de),f.push(P),w(fe,z,P,G,X)},T=w(v,"unsortedSegmentSum",o,S,l),$=le({inputs:{x:T},backend:t,attrs:{shape:y}});let O=$;if(p!=null){f.push($);const A=Iy(p);O=Pt({inputs:{x:O},backend:t,attrs:{perm:A}})}return f.forEach(A=>t.disposeIntermediateTensorInfo(A)),O}const o7={kernelName:yy,backendName:"webgl",kernelFunc:i7};const l7=[WV,jV,YV,JV,tM,sM,iM,lM,dM,pM,yM,vM,TM,EM,_M,OM,DM,zM,VM,PM,qM,JM,t6,r6,o6,h6,m6,x6,kV,S6,E6,A6,B6,V6,P6,H6,q6,Y6,J6,nP,sP,iP,lP,fP,hP,yP,xP,SP,NP,EP,AP,LP,UP,PP,WP,qP,XP,YP,ZP,e5,n5,i5,u5,d5,p5,y5,v5,C5,k5,EV,_5,N6,I5,F5,U5,_V,G5,j5,K5,J5,nG,iG,uG,hG,yG,vG,SG,$G,kG,_G,DG,FG,zG,VG,PG,qG,YG,e8,l8,IV,d8,m8,b8,w8,u6,C8,$8,k8,A8,L8,OV,B8,U8,M8,G8,H8,c6,s8,j8,Q8,tH,LV,rH,lH,dH,mH,xH,wH,CH,EH,_H,IH,FH,UH,GH,qH,YH,JH,QM,i8,nW,sW,iW,lW,cW,dW,pW,gW,bW,wW,TW,NW,EW,_W,OW,DW,FW,r8,PV,UW,PW,HW,jW,QW,e7,GV,n7,s7,o7,N8];for(const n of l7)pw(n);class u7{levels;currentLevel;constructor(){this.levels=["debug","info","warn","error"],this.currentLevel="debug"}setLevel(e){this.levels.includes(e)?this.currentLevel=e:console.error(`Nivel de log no válido: ${e}`)}log(e,t){const a=this.levels.indexOf(e),r=this.levels.indexOf(this.currentLevel);if(a>=r){const o=new Date().toISOString();console.log(`[${e.toUpperCase()}] ${o}: ${t}`)}}debug(e){this.log("debug",e)}info(e){this.log("info",e)}warn(e){this.log("warn",e)}error(e){this.log("error",e)}}const jn=new u7;async function c7(n){const e=await fetch("http://localhost:3001/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n})}),t=await e.json();if(console.log("DeepL proxy response:",t),!e.ok)throw new Error("Error en el proxy de traducción");if(!t.translations||!t.translations[0])throw new Error("DeepL no devolvió traducciones válidas");return t.translations[0].text}const Q2=["café","coffee"];function f7(){const[n,e]=gs.useState(null),[t,a]=gs.useState(null),[r,o]=gs.useState(""),[l,c]=gs.useState([]),[f,d]=gs.useState(""),p=gs.useRef(null),m=async()=>{try{d("Cargando modelo MobileNet..."),jn.info("Cargando modelo MobileNet...");const v=await pF();e(v),jn.info("Modelo cargado con éxito"),d("Modelo cargado")}catch(v){jn.error("Error cargando el modelo:"+v.message),d("Error cargando el modelo")}};gs.useEffect(()=>{jn.info("Aplicación iniciada"),m()},[]);const y=v=>{const S=v.target.files?.[0];if(S){a(S);const w=URL.createObjectURL(S);o(w),c([]),jn.info("Imagen seleccionada: "+S.name)}},x=async()=>{if(!n){alert("El modelo aún no se ha cargado. Espera un momento e inténtalo de nuevo");return}if(!p.current){alert("No se encontró la referencia de la imagen");return}try{d("Clasificando la imagen..."),jn.info("Clasificando la imagen...");const v=await n.classify(p.current);if(jn.info("Resultados en inglés: "+JSON.stringify(v)),v.some(T=>Q2.some($=>T.className.toLowerCase().includes($.toLowerCase()))))throw new Error("Se detectó una palabra prohibida en la clasificación");d("Traduciendo resultados..."),jn.info("Traduciendo resultados...");const w=await Promise.all(v.map(async T=>{const $=await c7(T.className);return{...T,translatedName:$}}));c(w),d("Traducción completada")}catch(v){throw jn.error("Error clasificando o traduciendo la imagen: "+v.message),d("Error durante la clasificación o traducción"),v}};return It.jsxs("div",{children:[It.jsx("h1",{children:"Clasificador de imágenes + Traducción (Chaining)"}),It.jsxs("p",{children:[It.jsx("strong",{children:"Palabras prohibidas:"})," ",Q2.join(", ")]}),It.jsx("p",{children:f}),It.jsx("p",{children:"Selecciona una imagen ..."}),It.jsx("input",{type:"file",accept:"image/*",onChange:y}),r&&It.jsx("div",{children:It.jsx("img",{ref:p,src:r,alt:"Vista previa"})}),t&&It.jsx("button",{onClick:x,children:"Clasificar y traducir"}),l.length>0&&It.jsxs("div",{children:[It.jsx("h2",{children:"Resultados:"}),It.jsx("ul",{children:l.map((v,S)=>It.jsxs("li",{children:["Original: ",v.className," | ","","Traducción: ",v.translatedName," | ","","Prob: ",(v.probability*100).toFixed(2),"%"]},S))})]})]})}class d7 extends Pk.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){jn.warn(`Error capturado por ErrorBoundary: ${e.message}`),jn.debug(`Información del error: ${t.componentStack}`)}render(){return this.state.hasError?this.props.fallback:this.props.children}}Mk.createRoot(document.getElementById("root")).render(It.jsx(d7,{fallback:It.jsx("div",{children:"¡Ha ocurrido un error inesperado!"}),children:It.jsx(f7,{})}));
