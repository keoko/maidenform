/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.0.0, @magento/venia-sample-payments-checkmo: ^0.0.10, @magento/upward-security-headers: ~1.0.12, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.1, @magento/peregrine: ~13.0.0, @magento/pagebuilder: ~8.0.0, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.2, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+wdc":function(e,n,t){"use strict"
var r,o,a,l
if("object"==typeof performance&&"function"==typeof performance.now){var i=performance
n.unstable_now=function(){return i.now()}}else{var u=Date,c=u.now()
n.unstable_now=function(){return u.now()-c}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,f=null,b=function(){if(null!==s)try{var e=n.unstable_now()
s(!0,e),s=null}catch(e){throw setTimeout(b,0),e}}
r=function(e){null!==s?setTimeout(r,0,e):(s=e,setTimeout(b,0))},o=function(e,n){f=setTimeout(e,n)},a=function(){clearTimeout(f)},n.unstable_shouldYield=function(){return!1},l=n.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,p=window.clearTimeout
if("undefined"!=typeof console){var w=window.cancelAnimationFrame
"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof w&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,y=null,m=-1,h=5,g=0
n.unstable_shouldYield=function(){return n.unstable_now()>=g},l=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):h=0<e?Math.floor(1e3/e):5}
var _=new MessageChannel,k=_.port2
_.port1.onmessage=function(){if(null!==y){var e=n.unstable_now()
g=e+h
try{y(!0,e)?k.postMessage(null):(v=!1,y=null)}catch(e){throw k.postMessage(null),e}}else v=!1},r=function(e){y=e,v||(v=!0,k.postMessage(null))},o=function(e,t){m=d(function(){e(n.unstable_now())},t)},a=function(){p(m),m=-1}}function H(e,n){var t=e.length
e.push(n)
e:for(;;){var r=t-1>>>1,o=e[r]
if(!(void 0!==o&&0<I(o,n)))break e
e[r]=n,e[t]=o,t=r}}function J(e){return void 0===(e=e[0])?null:e}function K(e){var n=e[0]
if(void 0!==n){var t=e.pop()
if(t!==n){e[0]=t
e:for(var r=0,o=e.length;r<o;){var a=2*(r+1)-1,l=e[a],i=a+1,u=e[i]
if(void 0!==l&&0>I(l,t))void 0!==u&&0>I(u,l)?(e[r]=u,e[i]=t,r=i):(e[r]=l,e[a]=t,r=a)
else{if(!(void 0!==u&&0>I(u,t)))break e
e[r]=u,e[i]=t,r=i}}}return n}return null}function I(e,n){var t=e.sortIndex-n.sortIndex
return 0!==t?t:e.id-n.id}var j=[],O=[],x=1,P=null,C=3,F=!1,L=!1,M=!1
function T(e){for(var n=J(O);null!==n;){if(null===n.callback)K(O)
else{if(!(n.startTime<=e))break
K(O),n.sortIndex=n.expirationTime,H(j,n)}n=J(O)}}function U(e){if(M=!1,T(e),!L)if(null!==J(j))L=!0,r(V)
else{var n=J(O)
null!==n&&o(U,n.startTime-e)}}function V(e,t){L=!1,M&&(M=!1,a()),F=!0
var r=C
try{for(T(t),P=J(j);null!==P&&(!(P.expirationTime>t)||e&&!n.unstable_shouldYield());){var l=P.callback
if("function"==typeof l){P.callback=null,C=P.priorityLevel
var i=l(P.expirationTime<=t)
t=n.unstable_now(),"function"==typeof i?P.callback=i:P===J(j)&&K(j),T(t)}else K(j)
P=J(j)}if(null!==P)var u=!0
else{var c=J(O)
null!==c&&o(U,c.startTime-t),u=!1}return u}finally{P=null,C=r,F=!1}}var E=l
n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){L||F||(L=!0,r(V))},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return J(j)},n.unstable_next=function(e){switch(C){case 1:case 2:case 3:var n=3
break
default:n=C}var t=C
C=n
try{return e()}finally{C=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=E,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var t=C
C=e
try{return n()}finally{C=t}},n.unstable_scheduleCallback=function(e,t,l){var i=n.unstable_now()
switch("object"==typeof l&&null!==l?l="number"==typeof(l=l.delay)&&0<l?i+l:i:l=i,e){case 1:var u=-1
break
case 2:u=250
break
case 5:u=1073741823
break
case 4:u=1e4
break
default:u=5e3}return e={id:x++,callback:t,priorityLevel:e,startTime:l,expirationTime:u=l+u,sortIndex:-1},l>i?(e.sortIndex=l,H(O,e),null===J(j)&&e===J(O)&&(M?a():M=!0,o(U,l-i))):(e.sortIndex=u,H(j,e),L||F||(L=!0,r(V))),e},n.unstable_wrapCallback=function(e){var n=C
return function(){var t=C
C=n
try{return e.apply(this,arguments)}finally{C=t}}}},4:function(e,n,t){t("FASw"),e.exports=t("iWbB")},FASw:function(e,n,t){globalThis.__fetchLocaleData__=async function getLocale(e){if("en_US"===e)return t.e(6).then(t.t.bind(null,"5I32",3))
throw new Error("Unable to locate locale "+e+" within generated dist directory.")}},MgzW:function(e,n,t){"use strict"
var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable
e.exports=function shouldUseNative(){try{if(!Object.assign)return!1
var e=new String("abc")
if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1
for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t
if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1
var r={}
return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,l,i=function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in t=Object(arguments[u]))o.call(t,c)&&(i[c]=t[c])
if(r){l=r(t)
for(var s=0;s<l.length;s++)a.call(t,l[s])&&(i[l[s]]=t[l[s]])}}return i}},QCnb:function(e,n,t){"use strict"
e.exports=t("+wdc")},iWbB:function(e,n,t){"use strict"
t.r(n),t.d(n,"default",function(){return l})
var r=t("q1tI"),o=t.n(r),a=t("i8i4"),l=e=>o.a.createElement("div",null,"Hello Login")
console.log("Login Loaded"),Object(a.render)(o.a.createElement(l,null),document.querySelector(".block.commerce-login"))}},[[4,0,1]]])
