export const id=401;export const ids=[401];export const modules={1707:(r,e,n)=>{n.d(e,{j:()=>_});var t=n(767),o=n(6448),a=n(680),i=n(9318),l=n(8857),c=n.n(l),u=n(6305),s=n(9816);const f=JSON.parse('{"Panels":{"close":{"label":"Close {{name}} Panel"}},"CartItem":{"item":{"label":"Item"},"options":{"label":"Selected Options"},"links":{"label":"Links"},"bundle":{"label":"Selected Bundle Options"},"configurations":{"label":"Selected Configurations"},"errors":{"label":"Errors"},"sku":{"label":"SKU"},"price":{"label":"Price","each":"each"},"quantity":{"label":"Quantity"},"total":{"label":"Total"}},"Cart":{"OrderSummary":{"subtotal":"Subtotal","estimatedTax":"Estimated Tax","estimatedShipping":"Estimated Shipping","estimatedTotal":"Estimated Total"}},"Form":{"Quantity":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity"}}}');var p={default:f,en_US:f,fr_FR:JSON.parse('{"Panels":{"close":{"label":"Fermer le panneau du {{name}}"}},"CartItem":{"item":{"label":"Article"},"options":{"label":"Options Sélectionnées"},"links":{"label":"Liens"},"bundle":{"label":"Options Groupées Sélectionnées"},"configurations":{"label":"Configurations Sélectionnées"},"errors":{"label":"Erreurs"},"sku":{"label":"SKU"},"price":{"label":"Prix","each":"chaque"},"quantity":{"label":"Quantité"},"total":{"label":"Total"}},"Cart":{"OrderSummary":{"subtotal":"Subtotal","estimatedTax":"TTaxe Estimée","estimatedShipping":"Frais de livraison Estimés","estimatedTotal":"Total Estimé"}},"Form":{"Quantity":{"decreaseLabel":"Diminuer la quantité","increaseLabel":"Augmenter la quantité"}}}')},d=function(r){return c()(p.default,p[r]||{})},m=(n(3354),n(618)),y=["lang","className","children"];function v(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function h(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){b(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function b(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}var g=function(r){var e=r.lang,n=void 0===e?"en_US":e,t=r.className,o=r.children,a=function(r,e){if(null==r)return{};var n,t,o=function(r,e){if(null==r)return{};var n,t,o={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(o[n]=r[n])}return o}(r,y);return(0,m.tZ)(s.Pj,{definition:d(n),children:(0,m.tZ)("div",h(h({},a),{},{className:(0,u.S)(["sfsdk-ui-kit",t]),children:o}))})},O=n(4668);function w(){return w=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},w.apply(this,arguments)}var j=n(3537);function S(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function x(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){C(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function C(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function P(){return P=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},P.apply(this,arguments)}var k={default:n(6709),en_US:n(6709),fr_FR:n(5431)},E=function(r){var e=r.children,n=[w({},(0,a.v9)((function(r){return r.config}))),O.gO,O.rp][0].locale;return(0,o.d4)((function(){var r=new Event("StorefrontSDKReady");window.dispatchEvent(r)}),[]),(0,m.tZ)(g,{lang:n,children:(0,m.tZ)(s.Pj,{definition:c()(k.default,k[n]||{}),children:e})})},T=function(r){var e=P({},r);return(0,m.tZ)(a.zt,{store:i.h,children:(0,m.tZ)(E,x({},e))})},_=function(r){var e=r.endpoint,n=r.mesh;return i.h.dispatch((0,j.gO)({endpoint:e,mesh:n})),function(r){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;o&&(0,t.sY)((0,m.tZ)(T,{endpoint:e,mesh:n,children:(0,m.tZ)(r,{})}),o)}}}},6305:(r,e,n)=>{function t(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}n.d(e,{S:()=>o});var o=function(r){return r.reduce((function(r,e){if(!e)return r;if("string"==typeof e&&(r+=" ".concat(e)),Array.isArray(e)){var n=(l=2,function(r){if(Array.isArray(r))return r}(i=e)||function(r,e){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,a=[],i=!0,l=!1;try{for(n=n.call(r);!(i=(t=n.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(r){l=!0,o=r}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(i,l)||function(r,e){if(r){if("string"==typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(r,e):void 0}}(i,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];o&&a&&(r+=" ".concat(o))}var i,l;return r}),"").trim()}},5828:(r,e,n)=>{(e=n(361)(!1)).push([r.id,"/* https://cssguidelin.es/#bem-like-naming */\n\n.sfsdk-ui-kit {\n    /* Colors */\n    /* Online Generator (Material Design) – http://mcg.mbitson.com/ */\n\n    /* Primary Color */\n    --color-primary--50: #e4e4e4;\n    --color-primary--100: #bdbdbd;\n    --color-primary--200: #919191;\n    --color-primary--300: #646464;\n    --color-primary--400: #434343;\n    --color-primary--500: #222222;\n    --color-primary--600: #1e1e1e;\n    --color-primary--700: #191919;\n    --color-primary--800: #141414;\n    --color-primary--900: #0c0c0c;\n\n    --color-primary: var(--text-color);\n    --color-on-primary: var(--clr-white);\n\n    /* Secondary Color */\n    --color-secondary--50: #ffffff;\n    --color-secondary--100: #ffffff;\n    --color-secondary--200: #ffffff;\n    --color-secondary--300: #ffffff;\n    --color-secondary--400: #ffffff;\n    --color-secondary--500: #ffffff;\n    --color-secondary--600: #ffffff;\n    --color-secondary--700: #ffffff;\n    --color-secondary--800: #ffffff;\n    --color-secondary--900: #ffffff;\n\n    --color-secondary: var(--clr-pink);\n    --color-on-secondary: #222;\n\n    /* Gray */\n    --color-gray--50: #fafafa;\n    --color-gray--100: #f5f5f5;\n    --color-gray--200: #eeeeee;\n    --color-gray--300: #e0e0e0;\n    --color-gray--400: #bdbdbd;\n    --color-gray--500: #9e9e9e;\n    --color-gray--600: #757575;\n    --color-gray--700: #616161;\n    --color-gray--800: #424242;\n    --color-gray--900: #212121;\n\n    --color-gray: var(--color-gray--600);\n    --color-on-gray: var(--color-gray--50);\n\n    /* Surface */\n    --color-surface: #f6f6f6;\n    --color-on-surface: #222222;\n\n    /* Alerts */\n    --color-error: #ef5350;\n    --color-notice: #0070f3;\n    --color-warning: #f57c00;\n\n    /* Spacing: gaps, margin, padding, etc. */\n    --spacing-xxs: 0.15625rem;\n    --spacing-xs: 0.3125rem;\n    --spacing-sm: 0.625rem;\n    --spacing-md: 1.25rem;\n    --spacing-lg: 2.5rem;\n    --spacing-xl: 3.75rem;\n    --spacing-2xl: 4.25rem;\n    --spacing-3xl: 4.75rem;\n\n    /* Font Families */\n    --font-body: var(--ff-gilroy-regular);\n\n    /* Font Sizes */\n    --font-xs: 0.75rem;\n    --font-sm: 0.875rem;\n    --font-md: 1rem;\n    --font-lg: 1.125rem;\n    --font-xl: 1.25rem;\n    --font-2xl: 1.5rem;\n    --font-3xl: 1.875rem;\n    --font-4xl: 2.25rem;\n    --font-5xl: 3rem;\n\n    /* Font Weights */\n    --font-thin: 100;\n    --font-extralight: 200;\n    --font-light: 300;\n    --font-normal: 400;\n    --font-medium: 500;\n    --font-semibold: 600;\n    --font-bold: 700;\n    --font-extrabold: 800;\n    --font-black: 900;\n\n    /* Line Heights */\n    --leading-none: 0;\n    --leading-tight: 1.25;\n    --leading-snug: 1.375;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.625;\n    --leading-loose: 1.625;\n}",""]),r.exports=e},361:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n=function(r,e){var n,t,o,a=r[1]||"",i=r[3];if(!i)return a;if(e&&"function"==typeof btoa){var l=(n=i,t=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),c=i.sources.map((function(r){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(r," */")}));return[a].concat(c).concat([l]).join("\n")}return[a].join("\n")}(e,r);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(r,n,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<r.length;l++){var c=[].concat(r[l]);t&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},8857:r=>{var e=function(r){return function(r){return!!r&&"object"==typeof r}(r)&&!function(r){var e=Object.prototype.toString.call(r);return"[object RegExp]"===e||"[object Date]"===e||function(r){return r.$$typeof===n}(r)}(r)},n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function t(r,e){return!1!==e.clone&&e.isMergeableObject(r)?l((n=r,Array.isArray(n)?[]:{}),r,e):r;var n}function o(r,e,n){return r.concat(e).map((function(r){return t(r,n)}))}function a(r){return Object.keys(r).concat(function(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter((function(e){return r.propertyIsEnumerable(e)})):[]}(r))}function i(r,e){try{return e in r}catch(r){return!1}}function l(r,n,c){(c=c||{}).arrayMerge=c.arrayMerge||o,c.isMergeableObject=c.isMergeableObject||e,c.cloneUnlessOtherwiseSpecified=t;var u=Array.isArray(n);return u===Array.isArray(r)?u?c.arrayMerge(r,n,c):function(r,e,n){var o={};return n.isMergeableObject(r)&&a(r).forEach((function(e){o[e]=t(r[e],n)})),a(e).forEach((function(a){(function(r,e){return i(r,e)&&!(Object.hasOwnProperty.call(r,e)&&Object.propertyIsEnumerable.call(r,e))})(r,a)||(i(r,a)&&n.isMergeableObject(e[a])?o[a]=function(r,e){if(!e.customMerge)return l;var n=e.customMerge(r);return"function"==typeof n?n:l}(a,n)(r[a],e[a],n):o[a]=t(e[a],n))})),o}(r,n,c):t(n,c)}l.all=function(r,e){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce((function(r,n){return l(r,n,e)}),{})};var c=l;r.exports=c},3964:function(r){r.exports=function(r,e,n,t,o){for(e=e.split?e.split("."):e,t=0;t<e.length;t++)r=r?r[e[t]]:o;return r===o?n:r}},9816:(r,e,n)=>{n.d(e,{Pj:()=>O,Cf:()=>T,xv:()=>k});var t,o=n(767),a=n(6448),i=n(3964),l=n.n(i),c={};function u(r,e,n){if(3===r.nodeType){var t="textContent"in r?r.textContent:r.nodeValue||"";if(!1!==u.options.trim){var o=0===e||e===n.length-1;if((!(t=t.match(/^[\s\n]+$/g)&&"all"!==u.options.trim?" ":t.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===u.options.trim||o?"":" "))||" "===t)&&n.length>1&&o)return null}return t}if(1!==r.nodeType)return null;var a=String(r.nodeName).toLowerCase();if("script"===a&&!u.options.allowScripts)return null;var i,l,c=u.h(a,function(r){var e=r&&r.length;if(!e)return null;for(var n={},t=0;t<e;t++){var o=r[t],a=o.name,i=o.value;"on"===a.substring(0,2)&&u.options.allowEvents&&(i=new Function(i)),n[a]=i}return n}(r.attributes),(l=(i=r.childNodes)&&Array.prototype.map.call(i,u).filter(f))&&l.length?l:null);return u.visitor&&u.visitor(c),c}var s,f=function(r){return r},p={};function d(r){var e=(r.type||"").toLowerCase(),n=d.map;n&&n.hasOwnProperty(e)?(r.type=n[e],r.props=Object.keys(r.props||{}).reduce((function(e,n){var t;return e[(t=n,t.replace(/-(.)/g,(function(r,e){return e.toUpperCase()})))]=r.props[n],e}),{})):r.type=e.replace(/[^a-z0-9-]/i,"")}const m=function(r){function e(){r.apply(this,arguments)}return r&&(e.__proto__=r),(e.prototype=Object.create(r&&r.prototype)).constructor=e,e.setReviver=function(r){s=r},e.prototype.shouldComponentUpdate=function(r){var e=this.props;return r.wrap!==e.wrap||r.type!==e.type||r.markup!==e.markup},e.prototype.setComponents=function(r){if(this.map={},r)for(var e in r)if(r.hasOwnProperty(e)){var n=e.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[n]=r[e]}},e.prototype.render=function(r){var e=r.wrap;void 0===e&&(e=!0);var n,a=r.type,i=r.markup,l=r.components,f=r.reviver,m=r.onError,y=r["allow-scripts"],v=r["allow-events"],h=r.trim,b=function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&-1===e.indexOf(t)&&(n[t]=r[t]);return n}(r,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),g=f||this.reviver||this.constructor.prototype.reviver||s||o.h;this.setComponents(l);var O={allowScripts:y,allowEvents:v,trim:h};try{n=function(r,e,n,o,a){var i=function(r,e){var n,o,a,i,l="html"===e?"text/html":"application/xml";"html"===e?(i="body",a="<!DOCTYPE html>\n<html><body>"+r+"</body></html>"):(i="xml",a='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+r+"</xml>");try{n=(new DOMParser).parseFromString(a,l)}catch(r){o=r}if(n||"html"!==e||((n=t||(t=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var r=document.createElement("iframe");return r.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",r.setAttribute("sandbox","allow-forms"),document.body.appendChild(r),r.contentWindow.document}())).open(),n.write(a),n.close()),n){var c=n.getElementsByTagName(i)[0],u=c.firstChild;return r&&!u&&(c.error="Document parse failed."),u&&"parsererror"===String(u.nodeName).toLowerCase()&&(u.removeChild(u.firstChild),u.removeChild(u.lastChild),c.error=u.textContent||u.nodeValue||o||"Unknown error",c.removeChild(u)),c}}(r,e);if(i&&i.error)throw new Error(i.error);var l=i&&i.body||i;d.map=o||p;var s=l&&function(r,e,n,t){return u.visitor=e,u.h=n,u.options=t||c,u(r)}(l,d,n,a);return d.map=null,s&&s.props&&s.props.children||null}(i,a,g,this.map,O)}catch(r){m?m({error:r}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+r)}if(!1===e)return n||null;var w=b.hasOwnProperty("className")?"className":"class",j=b[w];return j?j.splice?j.splice(0,0,"markup"):"string"==typeof j?b[w]+=" markup":"object"==typeof j&&(j.markup=!0):b[w]="markup",g("div",b,n||null)},e}(o.wA);var y=(0,o.kr)({intl:{}});function v(r){return null!=r}function h(r,e){for(var n in e)r[n]=e[n];return r}function b(r,e){var n=h({},r);for(var t in e)e.hasOwnProperty(t)&&(r[t]&&e[t]&&"object"==typeof r[t]&&"object"==typeof e[t]?n[t]=b(r[t],e[t]):n[t]=r[t]||e[t]);return n}var g=/[?&#]intl=show/;function O(r){var e=r.scope,n=r.mark,t=r.definition,i=function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&-1===e.indexOf(t)&&(n[t]=r[t]);return n}(r,["scope","mark","definition"]),l=h({},(0,a.qp)(y).intl||{});return e&&(l.scope=e),t&&(l.dictionary=b(l.dictionary||{},t)),(n||"undefined"!=typeof location&&String(location).match(g))&&(l.mark=!0),(0,o.h)(y.Provider,{value:{intl:l}},i.children)}function w(r,e){if(arguments.length<2)return e=r,function(r){return w(r,e)};function n(n){return(0,o.h)(O,e||{},(0,o.h)(r,n))}return n.getWrappedComponent=r&&r.getWrappedComponent||function(){return r},n}var j={};function S(r,e,n,t){return r&&r.replace(/\{\{([\w.-]+)\}\}/g,x.bind(null,e||j,n,t))}function x(r,e,n,t,o){for(var a=o.split("."),i=r,l=0;l<a.length;l++){if(null==(i=i[a[l]]))return"";if(i&&i.type===k)return C(i.props.id,e,n,i.props.fields,i.props.plural,i.props.fallback)}return"string"==typeof i&&i.match(/\{\{/)&&(i=S(i,r)),i}function C(r,e,n,t,o,a){e&&(r=e+"."+r);var i=n&&l()(n,r);return(o||0===o)&&i&&"object"==typeof i&&(i=i.splice?i[o]||i[0]:0===o&&v(i.none||i.zero)?i.none||i.zero:1===o&&v(i.one||i.singular)?i.one||i.singular:i.some||i.many||i.plural||i.other||i),i&&S(i,t,e,n)||a||null}function P(r){var e=r.value,n=r.id,t=(0,a.qp)(y).intl;if(t&&t.mark){var i="dictionary"+(t&&t.scope?"."+t.scope:"")+"."+n;return(0,o.h)("mark",{style:{background:e?l()(t,i)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:n},e)}return e}function k(r){var e=r.id,n=r.children,t=r.plural,i=r.fields,l=(0,a.qp)(y).intl,c=C(e,l&&l.scope,l&&l.dictionary,i,t,n);return(0,o.h)(P,{id:e,value:c})}function E(r,e,n){var t={};for(var o in e=e||{},r=function(r){if("string"==typeof(r=r||{})&&(r=r.split(",")),"join"in r){for(var e={},n=0;n<r.length;n++){var t=r[n].trim();t&&(e[t.split(".").pop()]=t)}return e}return r}(r),r)if(r.hasOwnProperty(o)&&r[o]){var a=r[o];n||"string"!=typeof a?a.type===k&&(a=h({fallback:a.props.children},a.props),t[o]=C(a.id,e.scope,e.dictionary,a.fields,a.plural,a.fallback)):t[o]=C(a,e.scope,e.dictionary)}return t}function T(r){var e=r.children,n=(0,a.qp)(y).intl;return e&&e.length?e.map((function(r){return(0,o.Tm)(r,E(r.props,n,!0))})):e&&(0,o.Tm)(e,E(e.props,n,!0))}function _(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&-1===e.indexOf(t)&&(n[t]=r[t]);return n}function A(r){var e=r.html,n=r.id,t=_(r,["html","id"]);return(0,o.h)(P,{id:n,value:e?"string"==typeof e?(0,o.h)(m,Object.assign({},{type:"html",trim:!1},t,{markup:e})):(0,o.h)("span",null,e):e})}w.intl=w,w.IntlContext=y,w.IntlProvider=O,w.Text=k,w.MarkupText=function(r){var e=r.id,n=r.fields,t=r.plural,a=r.children,i=_(r,["id","fields","plural","children"]);return(0,o.h)(T,null,(0,o.h)(A,Object.assign({},{html:(0,o.h)(k,{id:e,fields:n,plural:t,children:a}),id:e},i)))},w.Localizer=T,w.withText=function(r){return function(e){function n(n,t){var i=(0,a.qp)(y).intl,l=E("function"==typeof r?r(n,{intl:i}):r,i);return(0,o.h)(e,h(h({},n),l))}return n.getWrappedComponent=e&&e.getWrappedComponent||function(){return e},n}},w.useText=function(r){var e=(0,a.qp)(y).intl;return E("function"==typeof r?r({intl:e}):r,e)},w.translate=C},3354:(r,e,n)=>{var t=n(487),o=n(5828);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.id,o,""]]);t(o,{insert:"head",singleton:!1}),r.exports=o.locals||{}},487:(r,e,n)=>{var t,o=function(){var r={};return function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}r[e]=n}return r[e]}}(),a=[];function i(r){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===r){e=n;break}return e}function l(r,e){for(var n={},t=[],o=0;o<r.length;o++){var l=r[o],c=e.base?l[0]+e.base:l[0],u=n[c]||0,s="".concat(c," ").concat(u);n[c]=u+1;var f=i(s),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:s,updater:y(p,e),references:1}),t.push(s)}return t}function c(r){var e=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var a=n.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(e);else{var i=o(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,s=(u=[],function(r,e){return u[r]=e,u.filter(Boolean).join("\n")});function f(r,e,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=s(e,o);else{var a=document.createTextNode(o),i=r.childNodes;i[e]&&r.removeChild(i[e]),i.length?r.insertBefore(a,i[e]):r.appendChild(a)}}function p(r,e,n){var t=n.css,o=n.media,a=n.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var d=null,m=0;function y(r,e){var n,t,o;if(e.singleton){var a=m++;n=d||(d=c(e)),t=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=c(e),t=p.bind(null,n,e),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)};return t(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;t(r=e)}else o()}}r.exports=function(r,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=l(r=r||[],e);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<n.length;t++){var o=i(n[t]);a[o].references--}for(var c=l(r,e),u=0;u<n.length;u++){var s=i(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=c}}}},618:(r,e,n)=>{n.d(e,{tZ:()=>a,BX:()=>a}),n(9654);var t=n(767),o=0;function a(r,e,n,a,i){var l,c,u={};for(c in e)"ref"==c?l=e[c]:u[c]=e[c];var s={type:r,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:i,__self:a};if("function"==typeof r&&(l=r.defaultProps))for(c in l)void 0===u[c]&&(u[c]=l[c]);return t.YM.vnode&&t.YM.vnode(s),s}},6709:r=>{r.exports=JSON.parse('{"Cart":{"heading":"Shopping Cart","empty":"You have no items in your shopping cart.","removeProduct":{"label":"Remove {{name}}"},"download":{"label":"Download"},"loading":{"label":"Loading"},"checkout":{"label":"Secured Checkout"}}}')},5431:r=>{r.exports=JSON.parse('{"Cart":{"heading":"Panier","empty":"Vous n\'avez aucun article dans votre panier.","removeProduct":{"label":"Retirer {{name}}"},"download":{"label":"Télécharger"},"loading":{"label":"Chargement"},"checkout":{"label":"Paiement Sécurisé"}}}')}};import r from"./runtime.js";import*as e from"./renderer.js";r.C(e);import*as n from"./vendors.js";r.C(n);import*as t from"./api.js";r.C(t);var o=(1707,r(r.s=1707)).j;export{o as renderer};