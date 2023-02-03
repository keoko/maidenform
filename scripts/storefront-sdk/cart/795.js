export const id=795;export const ids=[795];export const modules={3964:function(r){r.exports=function(r,e,t,n,o){for(e=e.split?e.split("."):e,n=0;n<e.length;n++)r=r?r[e[n]]:o;return r===o?t:r}},9816:(r,e,t)=>{t.d(e,{Pj:()=>b,Cf:()=>S,xv:()=>P});var n,o=t(767),i=t(6448),a=t(3964),l=t.n(a),p={};function u(r,e,t){if(3===r.nodeType){var n="textContent"in r?r.textContent:r.nodeValue||"";if(!1!==u.options.trim){var o=0===e||e===t.length-1;if((!(n=n.match(/^[\s\n]+$/g)&&"all"!==u.options.trim?" ":n.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===u.options.trim||o?"":" "))||" "===n)&&t.length>1&&o)return null}return n}if(1!==r.nodeType)return null;var i=String(r.nodeName).toLowerCase();if("script"===i&&!u.options.allowScripts)return null;var a,l,p=u.h(i,function(r){var e=r&&r.length;if(!e)return null;for(var t={},n=0;n<e;n++){var o=r[n],i=o.name,a=o.value;"on"===i.substring(0,2)&&u.options.allowEvents&&(a=new Function(a)),t[i]=a}return t}(r.attributes),(l=(a=r.childNodes)&&Array.prototype.map.call(a,u).filter(c))&&l.length?l:null);return u.visitor&&u.visitor(p),p}var s,c=function(r){return r},f={};function d(r){var e=(r.type||"").toLowerCase(),t=d.map;t&&t.hasOwnProperty(e)?(r.type=t[e],r.props=Object.keys(r.props||{}).reduce((function(e,t){var n;return e[(n=t,n.replace(/-(.)/g,(function(r,e){return e.toUpperCase()})))]=r.props[t],e}),{})):r.type=e.replace(/[^a-z0-9-]/i,"")}const m=function(r){function e(){r.apply(this,arguments)}return r&&(e.__proto__=r),(e.prototype=Object.create(r&&r.prototype)).constructor=e,e.setReviver=function(r){s=r},e.prototype.shouldComponentUpdate=function(r){var e=this.props;return r.wrap!==e.wrap||r.type!==e.type||r.markup!==e.markup},e.prototype.setComponents=function(r){if(this.map={},r)for(var e in r)if(r.hasOwnProperty(e)){var t=e.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[t]=r[e]}},e.prototype.render=function(r){var e=r.wrap;void 0===e&&(e=!0);var t,i=r.type,a=r.markup,l=r.components,c=r.reviver,m=r.onError,v=r["allow-scripts"],h=r["allow-events"],y=r.trim,g=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===e.indexOf(n)&&(t[n]=r[n]);return t}(r,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),w=c||this.reviver||this.constructor.prototype.reviver||s||o.h;this.setComponents(l);var b={allowScripts:v,allowEvents:h,trim:y};try{t=function(r,e,t,o,i){var a=function(r,e){var t,o,i,a,l="html"===e?"text/html":"application/xml";"html"===e?(a="body",i="<!DOCTYPE html>\n<html><body>"+r+"</body></html>"):(a="xml",i='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+r+"</xml>");try{t=(new DOMParser).parseFromString(i,l)}catch(r){o=r}if(t||"html"!==e||((t=n||(n=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var r=document.createElement("iframe");return r.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",r.setAttribute("sandbox","allow-forms"),document.body.appendChild(r),r.contentWindow.document}())).open(),t.write(i),t.close()),t){var p=t.getElementsByTagName(a)[0],u=p.firstChild;return r&&!u&&(p.error="Document parse failed."),u&&"parsererror"===String(u.nodeName).toLowerCase()&&(u.removeChild(u.firstChild),u.removeChild(u.lastChild),p.error=u.textContent||u.nodeValue||o||"Unknown error",p.removeChild(u)),p}}(r,e);if(a&&a.error)throw new Error(a.error);var l=a&&a.body||a;d.map=o||f;var s=l&&function(r,e,t,n){return u.visitor=e,u.h=t,u.options=n||p,u(r)}(l,d,t,i);return d.map=null,s&&s.props&&s.props.children||null}(a,i,w,this.map,b)}catch(r){m?m({error:r}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+r)}if(!1===e)return t||null;var O=g.hasOwnProperty("className")?"className":"class",x=g[O];return x?x.splice?x.splice(0,0,"markup"):"string"==typeof x?g[O]+=" markup":"object"==typeof x&&(x.markup=!0):g[O]="markup",w("div",g,t||null)},e}(o.wA);var v=(0,o.kr)({intl:{}});function h(r){return null!=r}function y(r,e){for(var t in e)r[t]=e[t];return r}function g(r,e){var t=y({},r);for(var n in e)e.hasOwnProperty(n)&&(r[n]&&e[n]&&"object"==typeof r[n]&&"object"==typeof e[n]?t[n]=g(r[n],e[n]):t[n]=r[n]||e[n]);return t}var w=/[?&#]intl=show/;function b(r){var e=r.scope,t=r.mark,n=r.definition,a=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===e.indexOf(n)&&(t[n]=r[n]);return t}(r,["scope","mark","definition"]),l=y({},(0,i.qp)(v).intl||{});return e&&(l.scope=e),n&&(l.dictionary=g(l.dictionary||{},n)),(t||"undefined"!=typeof location&&String(location).match(w))&&(l.mark=!0),(0,o.h)(v.Provider,{value:{intl:l}},a.children)}function O(r,e){if(arguments.length<2)return e=r,function(r){return O(r,e)};function t(t){return(0,o.h)(b,e||{},(0,o.h)(r,t))}return t.getWrappedComponent=r&&r.getWrappedComponent||function(){return r},t}var x={};function k(r,e,t,n){return r&&r.replace(/\{\{([\w.-]+)\}\}/g,C.bind(null,e||x,t,n))}function C(r,e,t,n,o){for(var i=o.split("."),a=r,l=0;l<i.length;l++){if(null==(a=a[i[l]]))return"";if(a&&a.type===P)return j(a.props.id,e,t,a.props.fields,a.props.plural,a.props.fallback)}return"string"==typeof a&&a.match(/\{\{/)&&(a=k(a,r)),a}function j(r,e,t,n,o,i){e&&(r=e+"."+r);var a=t&&l()(t,r);return(o||0===o)&&a&&"object"==typeof a&&(a=a.splice?a[o]||a[0]:0===o&&h(a.none||a.zero)?a.none||a.zero:1===o&&h(a.one||a.singular)?a.one||a.singular:a.some||a.many||a.plural||a.other||a),a&&k(a,n,e,t)||i||null}function T(r){var e=r.value,t=r.id,n=(0,i.qp)(v).intl;if(n&&n.mark){var a="dictionary"+(n&&n.scope?"."+n.scope:"")+"."+t;return(0,o.h)("mark",{style:{background:e?l()(n,a)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:t},e)}return e}function P(r){var e=r.id,t=r.children,n=r.plural,a=r.fields,l=(0,i.qp)(v).intl,p=j(e,l&&l.scope,l&&l.dictionary,a,n,t);return(0,o.h)(T,{id:e,value:p})}function E(r,e,t){var n={};for(var o in e=e||{},r=function(r){if("string"==typeof(r=r||{})&&(r=r.split(",")),"join"in r){for(var e={},t=0;t<r.length;t++){var n=r[t].trim();n&&(e[n.split(".").pop()]=n)}return e}return r}(r),r)if(r.hasOwnProperty(o)&&r[o]){var i=r[o];t||"string"!=typeof i?i.type===P&&(i=y({fallback:i.props.children},i.props),n[o]=j(i.id,e.scope,e.dictionary,i.fields,i.plural,i.fallback)):n[o]=j(i,e.scope,e.dictionary)}return n}function S(r){var e=r.children,t=(0,i.qp)(v).intl;return e&&e.length?e.map((function(r){return(0,o.Tm)(r,E(r.props,t,!0))})):e&&(0,o.Tm)(e,E(e.props,t,!0))}function L(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===e.indexOf(n)&&(t[n]=r[n]);return t}function _(r){var e=r.html,t=r.id,n=L(r,["html","id"]);return(0,o.h)(T,{id:t,value:e?"string"==typeof e?(0,o.h)(m,Object.assign({},{type:"html",trim:!1},n,{markup:e})):(0,o.h)("span",null,e):e})}O.intl=O,O.IntlContext=v,O.IntlProvider=b,O.Text=P,O.MarkupText=function(r){var e=r.id,t=r.fields,n=r.plural,i=r.children,a=L(r,["id","fields","plural","children"]);return(0,o.h)(S,null,(0,o.h)(_,Object.assign({},{html:(0,o.h)(P,{id:e,fields:t,plural:n,children:i}),id:e},a)))},O.Localizer=S,O.withText=function(r){return function(e){function t(t,n){var a=(0,i.qp)(v).intl,l=E("function"==typeof r?r(t,{intl:a}):r,a);return(0,o.h)(e,y(y({},t),l))}return t.getWrappedComponent=e&&e.getWrappedComponent||function(){return e},t}},O.useText=function(r){var e=(0,i.qp)(v).intl;return E("function"==typeof r?r({intl:e}):r,e)},O.translate=j},459:(r,e,t)=>{var n=t(5704);function o(){}function i(){}i.resetWarningCache=o,r.exports=function(){function r(r,e,t,o,i,a){if(a!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return r}r.isRequired=r;var t={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},216:(r,e,t)=>{r.exports=t(459)()},5704:r=>{r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5563:(r,e,t)=>{t.d(e,{Z:()=>p});var n=t(9654),o=t(216),i=t.n(o);function a(){return a=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},a.apply(this,arguments)}var l=(0,n.forwardRef)((function(r,e){var t=r.color,o=void 0===t?"currentColor":t,i=r.size,l=void 0===i?24:i,p=function(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}(r,["color","size"]);return n.default.createElement("svg",a({ref:e,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),n.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.displayName="Minus";const p=l},213:(r,e,t)=>{t.d(e,{Z:()=>p});var n=t(9654),o=t(216),i=t.n(o);function a(){return a=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},a.apply(this,arguments)}var l=(0,n.forwardRef)((function(r,e){var t=r.color,o=void 0===t?"currentColor":t,i=r.size,l=void 0===i?24:i,p=function(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}(r,["color","size"]);return n.default.createElement("svg",a({ref:e,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),n.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.displayName="Plus";const p=l}};