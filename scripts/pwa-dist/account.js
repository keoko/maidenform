/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.0.0, @magento/venia-sample-payments-checkmo: ^0.0.10, @magento/upward-security-headers: ~1.0.12, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.1, @magento/peregrine: ~13.0.0, @magento/pagebuilder: ~8.0.0, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.2, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+wdc":function(e,n,t){"use strict"
var r,a,o,l
if("object"==typeof performance&&"function"==typeof performance.now){var i=performance
n.unstable_now=function(){return i.now()}}else{var u=Date,c=u.now()
n.unstable_now=function(){return u.now()-c}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,f=null,b=function(){if(null!==s)try{var e=n.unstable_now()
s(!0,e),s=null}catch(e){throw setTimeout(b,0),e}}
r=function(e){null!==s?setTimeout(r,0,e):(s=e,setTimeout(b,0))},a=function(e,n){f=setTimeout(e,n)},o=function(){clearTimeout(f)},n.unstable_shouldYield=function(){return!1},l=n.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,p=window.clearTimeout
if("undefined"!=typeof console){window.cancelAnimationFrame
window.requestAnimationFrame}var w=!1,v=null,y=-1,m=5,h=0
n.unstable_shouldYield=function(){return n.unstable_now()>=h},l=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e||(m=0<e?Math.floor(1e3/e):5)}
var _=new MessageChannel,g=_.port2
_.port1.onmessage=function(){if(null!==v){var e=n.unstable_now()
h=e+m
try{v(!0,e)?g.postMessage(null):(w=!1,v=null)}catch(e){throw g.postMessage(null),e}}else w=!1},r=function(e){v=e,w||(w=!0,g.postMessage(null))},a=function(e,t){y=d(function(){e(n.unstable_now())},t)},o=function(){p(y),y=-1}}function H(e,n){var t=e.length
e.push(n)
e:for(;;){var r=t-1>>>1,a=e[r]
if(!(void 0!==a&&0<I(a,n)))break e
e[r]=n,e[t]=a,t=r}}function J(e){return void 0===(e=e[0])?null:e}function K(e){var n=e[0]
if(void 0!==n){var t=e.pop()
if(t!==n){e[0]=t
e:for(var r=0,a=e.length;r<a;){var o=2*(r+1)-1,l=e[o],i=o+1,u=e[i]
if(void 0!==l&&0>I(l,t))void 0!==u&&0>I(u,l)?(e[r]=u,e[i]=t,r=i):(e[r]=l,e[o]=t,r=o)
else{if(!(void 0!==u&&0>I(u,t)))break e
e[r]=u,e[i]=t,r=i}}}return n}return null}function I(e,n){var t=e.sortIndex-n.sortIndex
return 0!==t?t:e.id-n.id}var k=[],j=[],O=1,x=null,P=3,C=!1,E=!1,F=!1
function T(e){for(var n=J(j);null!==n;){if(null===n.callback)K(j)
else{if(!(n.startTime<=e))break
K(j),n.sortIndex=n.expirationTime,H(k,n)}n=J(j)}}function U(e){if(F=!1,T(e),!E)if(null!==J(k))E=!0,r(V)
else{var n=J(j)
null!==n&&a(U,n.startTime-e)}}function V(e,t){E=!1,F&&(F=!1,o()),C=!0
var r=P
try{for(T(t),x=J(k);null!==x&&(!(x.expirationTime>t)||e&&!n.unstable_shouldYield());){var l=x.callback
if("function"==typeof l){x.callback=null,P=x.priorityLevel
var i=l(x.expirationTime<=t)
t=n.unstable_now(),"function"==typeof i?x.callback=i:x===J(k)&&K(k),T(t)}else K(k)
x=J(k)}if(null!==x)var u=!0
else{var c=J(j)
null!==c&&a(U,c.startTime-t),u=!1}return u}finally{x=null,P=r,C=!1}}var M=l
n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){E||C||(E=!0,r(V))},n.unstable_getCurrentPriorityLevel=function(){return P},n.unstable_getFirstCallbackNode=function(){return J(k)},n.unstable_next=function(e){switch(P){case 1:case 2:case 3:var n=3
break
default:n=P}var t=P
P=n
try{return e()}finally{P=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=M,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var t=P
P=e
try{return n()}finally{P=t}},n.unstable_scheduleCallback=function(e,t,l){var i=n.unstable_now()
switch("object"==typeof l&&null!==l?l="number"==typeof(l=l.delay)&&0<l?i+l:i:l=i,e){case 1:var u=-1
break
case 2:u=250
break
case 5:u=1073741823
break
case 4:u=1e4
break
default:u=5e3}return e={id:O++,callback:t,priorityLevel:e,startTime:l,expirationTime:u=l+u,sortIndex:-1},l>i?(e.sortIndex=l,H(j,e),null===J(k)&&e===J(j)&&(F?o():F=!0,a(U,l-i))):(e.sortIndex=u,H(k,e),E||C||(E=!0,r(V))),e},n.unstable_wrapCallback=function(e){var n=P
return function(){var t=P
P=n
try{return e.apply(this,arguments)}finally{P=t}}}},3:function(e,n,t){t("FASw"),e.exports=t("wj6O")},FASw:function(e,n,t){globalThis.__fetchLocaleData__=async function getLocale(e){if("en_US"===e)return t.e(6).then(t.t.bind(null,"5I32",3))
throw new Error("Unable to locate locale "+e+" within generated dist directory.")}},MgzW:function(e,n,t){"use strict"
var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable
e.exports=function shouldUseNative(){try{if(!Object.assign)return!1
var e=new String("abc")
if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1
for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t
if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1
var r={}
return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,l,i=function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in t=Object(arguments[u]))a.call(t,c)&&(i[c]=t[c])
if(r){l=r(t)
for(var s=0;s<l.length;s++)o.call(t,l[s])&&(i[l[s]]=t[l[s]])}}return i}},QCnb:function(e,n,t){"use strict"
e.exports=t("+wdc")},wj6O:function(e,n,t){"use strict"
t.r(n),t.d(n,"default",function(){return l})
var r=t("q1tI"),a=t.n(r),o=t("i8i4"),l=e=>a.a.createElement("div",null,"Hello Account")
Object(o.render)(a.a.createElement(l,null),document.querySelector(".block.commerce-account"))}},[[3,0,1]]])
