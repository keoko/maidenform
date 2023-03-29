/*! For license information please see mf-707.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[707],{4668:(t,e,r)=>{"use strict";r.d(e,{rB:()=>p,gO:()=>y,rp:()=>m,Tf:()=>d});var n=r(9814),o="\n  query STORE_CONFIG_QUERY {\n    storeConfig {\n      ...StoreConfigFragment\n    }\n    \n    availableStores {\n      ...StoreConfigFragment\n    }\n\n    currency {\n      available_currency_codes\n      default_display_currency_code\n      base_currency_code\n    }\n  }\n\n  ".concat("\nfragment StoreConfigFragment on StoreConfig {\n    store_group_name\n    store_name\n    store_code\n    locale\n    store_sort_order\n    is_default_store\n}","\n"),a=r(9318),i=r(3537),c=r(585),l=r(6152);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d={};function p(){}function h(){}function y(){}var m={};c(m,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(x([])));v&&v!==e&&r.call(v,o)&&(m=v);var b=y.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,a,i,c){var l=f(t[o],t,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==u(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=y,c(b,"constructor",y),c(y,"constructor",h),h.displayName=c(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,i,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),c(b,i,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function f(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}var d=new c.r,p=new c.r;a.h.subscribe((function(){d.value=a.h.getState().config.selectedStore,p.value=a.h.getState().config.availableStores}));var h=function(t){throw Error(t.map((function(t){return t.message})).join(" "))},y=function(t){a.h.dispatch((0,i.gO)(t))},m=function(){var t,e=(t=s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.h.dispatch((0,i.rp)(e)),(0,n.g)(o,{method:"GET"}).then((function(t){var r=t.errors,n=t.data;if(r)return h(r);var o=n.storeConfig.locale,c=n.availableStores.sort((function(t,e){return t.store_sort_order-e.store_sort_order})).map((function(t){var r=t.store_group_name,n=t.store_name,o=t.store_code,a=t.is_default_store;return{group:r,name:n,code:o,selected:(null!=e?e:a)===o}}));(0,l.batch)((function(){a.h.dispatch((0,i.WU)(c)),a.h.dispatch((0,i.i_)(o))}))}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}()},1707:(t,e,r)=>{"use strict";r.r(e),r.d(e,{renderer:()=>I});var n=r(8914),o=r(6448),a=r(6152),i=r(9318),c=r(8857),l=r.n(c),u=r(6305),s=r(9816);const f=JSON.parse('{"Panels":{"close":{"label":"Close {{name}} Panel"}},"CartItem":{"item":{"label":"Item"},"options":{"label":"Selected Options"},"links":{"label":"Links"},"bundle":{"label":"Selected Bundle Options"},"configurations":{"label":"Selected Configurations"},"errors":{"label":"Errors"},"sku":{"label":"SKU"},"price":{"label":"Price","each":"each"},"quantity":{"label":"Quantity"},"total":{"label":"Total"}},"Cart":{"OrderSummary":{"subtotal":"Subtotal","estimatedTax":"Estimated Tax","estimatedShipping":"Estimated Shipping","estimatedTotal":"Estimated Total"}},"Form":{"Quantity":{"label":"Quantity","decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity"},"TileSelect":{"selected":"Selected: {{label}}"}}}');var d={default:f,en_US:f,fr_FR:JSON.parse('{"Panels":{"close":{"label":"Fermer le panneau du {{name}}"}},"CartItem":{"item":{"label":"Article"},"options":{"label":"Options Sélectionnées"},"links":{"label":"Liens"},"bundle":{"label":"Options Groupées Sélectionnées"},"configurations":{"label":"Configurations Sélectionnées"},"errors":{"label":"Erreurs"},"sku":{"label":"SKU"},"price":{"label":"Prix","each":"chaque"},"quantity":{"label":"Quantité"},"total":{"label":"Total"}},"Cart":{"OrderSummary":{"label":"Quantité","subtotal":"Subtotal","estimatedTax":"TTaxe Estimée","estimatedShipping":"Frais de livraison Estimés","estimatedTotal":"Total Estimé"}},"Form":{"Quantity":{"decreaseLabel":"Diminuer la quantité","increaseLabel":"Augmenter la quantité"},"TileSelect":{"selected":"Choisie: {{label}}"}}}')},p=function(t){return l()(d.default,d[t]||{})},h=(r(2675),r(618)),y=["lang","className","children"];function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(t){var e=t.lang,r=void 0===e?"en_US":e,n=t.className,o=t.children,a=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,y);return(0,h.tZ)(s.Pj,{definition:p(r),children:(0,h.tZ)("div",g(g({},a),{},{className:(0,u.S)(["sfsdk-ui-kit",n]),children:o}))})},w=r(4668);function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},O.apply(this,arguments)}var S=r(3537);function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(){return x=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},x.apply(this,arguments)}var P={default:r(6709),en_US:r(6709),fr_FR:r(5431)},L=function(t){var e=t.children,r=[O({},(0,a.useSelector)((function(t){return t.config}))),w.gO,w.rp][0].locale;return(0,o.d4)((function(){var t=new Event("StorefrontSDKReady");window.dispatchEvent(t)}),[]),(0,h.tZ)(b,{lang:r,children:(0,h.tZ)(s.Pj,{definition:l()(P.default,P[r]||{}),children:e})})},k=function(t){var e=x({},t);return(0,h.tZ)(a.Provider,{store:i.h,children:(0,h.tZ)(L,j({},e))})},I=function(t){var e=t.endpoint,r=t.mesh;return i.h.dispatch((0,S.gO)({endpoint:e,mesh:r})),function(t){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;o&&(0,n.render)((0,h.tZ)(k,{endpoint:e,mesh:r,children:(0,h.tZ)(t,{})}),o)}}}},9318:(t,e,r)=>{"use strict";r.d(e,{h:()=>s});var n=r(3387),o=r(2857),a=r(3537),i=r(743),c=r(9119),l=r(3561),u="STOREFRONT_SDK-STORE",s=(0,n.configureStore)({reducer:{cart:o.ZP,config:a.ZP,customer:i.ZP,panel:c.ZP,editItem:l.ZP},preloadedState:function(){try{var t=localStorage.getItem(u);if(null===t)return;return JSON.parse(t)}catch(t){return void console.warn(t)}}()});s.subscribe((function(){return function(t){try{var e=JSON.stringify(t);localStorage.setItem(u,e)}catch(t){console.warn(t)}}(s.getState())}))},2857:(t,e,r)=>{"use strict";r.d(e,{B$:()=>p,RV:()=>d,ZP:()=>y,fg:()=>h,s9:()=>s,st:()=>f});var n=r(3387);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={loading:!1,id:null,total_quantity:0,items:[],prices:void 0,errors:[],loadingItems:{}},l=(0,n.createSlice)({name:"cart",initialState:c,reducers:{resetCart:function(){return c},setCartLoading:function(t,e){t.loading=e.payload},setCart:function(t,e){return a({errors:t.errors,loadingItems:t.loadingItems},e.payload)},setErrors:function(t,e){t.errors=e.payload},setLoadingItems:function(t,e){var r=a({},t.loadingItems),n=e.payload.id;e.payload.active?r[n]=!0:delete r[n],t.loadingItems=a({},r)}}}),u=l.actions,s=u.resetCart,f=u.setCartLoading,d=u.setCart,p=u.setErrors,h=u.setLoadingItems;const y=l.reducer},3537:(t,e,r)=>{"use strict";r.d(e,{WU:()=>l,ZP:()=>u,gO:()=>a,i_:()=>c,rp:()=>i});var n=(0,r(3387).createSlice)({name:"config",initialState:{endpoint:null},reducers:{setEndpoint:function(t,e){t.endpoint=e.payload.endpoint,e.payload.mesh&&(t.mesh=e.payload.mesh)},setSelectedStore:function(t,e){t.selectedStore=e.payload},setLocale:function(t,e){t.locale=e.payload},setAvailableStores:function(t,e){t.availableStores=e.payload}}}),o=n.actions,a=o.setEndpoint,i=o.setSelectedStore,c=o.setLocale,l=o.setAvailableStores;const u=n.reducer},743:(t,e,r)=>{"use strict";r.d(e,{GF:()=>c,ZP:()=>s,cv:()=>l,nT:()=>u});var n=r(3387),o={loading:!1,customerToken:null},a=(0,n.createSlice)({name:"customer",initialState:o,reducers:{resetCustomer:function(){return o},setCustomerLoading:function(t,e){t.loading=e.payload},setCustomerToken:function(t,e){t.customerToken=e.payload}}}),i=a.actions,c=i.resetCustomer,l=i.setCustomerLoading,u=i.setCustomerToken;const s=a.reducer},3561:(t,e,r)=>{"use strict";r.d(e,{B$:()=>s,M$:()=>d,RP:()=>a,Yb:()=>u,ZP:()=>p,hN:()=>c,o8:()=>i,pX:()=>l,sI:()=>f});var n=(0,r(3387).createSlice)({name:"editItem",initialState:{loading:!1,sku:null,cartItemUid:null,variantId:null,errors:[],data:null,quantity:"0"},reducers:{setEditItem:function(t,e){var r=e.payload,n=r.loading,o=r.sku,a=r.cartItemUid,i=r.variantId,c=r.errors,l=r.data,u=r.quantity;t.loading=n,t.sku=o,t.cartItemUid=a,t.variantId=i,t.errors=c,t.data=l,t.quantity=u},setItemLoading:function(t,e){t.loading=e.payload},setSku:function(t,e){t.sku=e.payload},setCartItemUid:function(t,e){t.cartItemUid=e.payload},setVariantId:function(t,e){t.variantId=e.payload},setErrors:function(t,e){t.errors=e.payload},setEditItemData:function(t,e){t.data=e.payload},setQuantity:function(t,e){t.quantity=e.payload}}}),o=n.actions,a=o.setEditItem,i=o.setItemLoading,c=o.setSku,l=o.setCartItemUid,u=o.setVariantId,s=o.setErrors,f=o.setEditItemData,d=o.setQuantity;const p=n.reducer},9119:(t,e,r)=>{"use strict";r.d(e,{ZP:()=>a,dL:()=>o});var n=(0,r(3387).createSlice)({name:"panel",initialState:{active:null},reducers:{setActivePanel:function(t,e){t.active=e.payload}}}),o=n.actions.setActivePanel;const a=n.reducer},6305:(t,e,r)=>{"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{S:()=>o});var o=function(t){return t.reduce((function(t,e){if(!e)return t;if("string"==typeof e&&(t+=" ".concat(e)),Array.isArray(e)){var r=(c=2,function(t){if(Array.isArray(t))return t}(i=e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(i,c)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(i,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];o&&a&&(t+=" ".concat(o))}var i,c;return t}),"").trim()}},585:(t,e,r)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function p(){}function h(){}function y(){}var m={};u(m,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(x([])));v&&v!==e&&r.call(v,i)&&(m=v);var b=y.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(a,i,c,l){var u=f(t[a],t,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==n(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,c,l)}),(function(t){o("throw",t,c,l)})):e.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,l)}))}l(u.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function S(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function x(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=y,u(b,"constructor",y),u(y,"constructor",h),h.displayName=u(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(O.prototype),u(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),u(b,l,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function a(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.d(e,{r:()=>c});var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._value=null!=e?e:null,this._listeners=[]}var e,r;return e=t,r=[{key:"value",get:function(){return this._value},set:function(t){var e=JSON.stringify(this._value)!==JSON.stringify(t);if(this._value=t,e){var r=this._listeners.map(function(){var e,r=(e=o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null==r?void 0:r(t));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(t){a(i,n,o,c,l,"next",t)}function l(t){a(i,n,o,c,l,"throw",t)}c(void 0)}))});return function(t){return r.apply(this,arguments)}}());Promise.all(r)}}},{key:"watch",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this._listeners.push(t),o=n-1;return r||t(this.value),{cancel:function(){e._listeners[o]=null}}}}],r&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3990:(t,e,r)=>{(e=r(361)(!1)).push([t.id,"/* https://cssguidelin.es/#bem-like-naming */\n\n.sfsdk-ui-kit {\n  /* Colors */\n  /* Online Generator (Material Design) – http://mcg.mbitson.com/ */\n\n  /* Primary Color */\n  --color-primary--50: #e4e4e4;\n  --color-primary--100: #bdbdbd;\n  --color-primary--200: #919191;\n  --color-primary--300: #646464;\n  --color-primary--400: #434343;\n  --color-primary--500: #222222;\n  --color-primary--600: #1e1e1e;\n  --color-primary--700: #191919;\n  --color-primary--800: #141414;\n  --color-primary--900: #0c0c0c;\n\n  --color-primary: var(--color-primary--500);\n  --color-on-primary: var(--color-primary--50);\n\n  /* Secondary Color */\n  --color-secondary--50: #ffffff;\n  --color-secondary--100: #ffffff;\n  --color-secondary--200: #ffffff;\n  --color-secondary--300: #ffffff;\n  --color-secondary--400: #ffffff;\n  --color-secondary--500: #ffffff;\n  --color-secondary--600: #ffffff;\n  --color-secondary--700: #ffffff;\n  --color-secondary--800: #ffffff;\n  --color-secondary--900: #ffffff;\n\n  --color-secondary: var(--color-secondary--500);\n  --color-on-secondary: #222;\n\n  /* Gray */\n  --color-gray--50: #fafafa;\n  --color-gray--100: #f5f5f5;\n  --color-gray--200: #eeeeee;\n  --color-gray--300: #e0e0e0;\n  --color-gray--400: #bdbdbd;\n  --color-gray--500: #9e9e9e;\n  --color-gray--600: #757575;\n  --color-gray--700: #616161;\n  --color-gray--800: #424242;\n  --color-gray--900: #212121;\n\n  --color-gray: var(--color-gray--600);\n  --color-on-gray: var(--color-gray--50);\n\n  /* Surface */\n  --color-surface: #f6f6f6;\n  --color-on-surface: #222222;\n\n  /* Alerts */\n  --color-error: #ef5350;\n  --color-notice: #0070f3;\n  --color-warning: #f57c00;\n\n  /* Spacing: gaps, margin, padding, etc. */\n  --spacing-xxs: 0.15625rem;\n  --spacing-xs: 0.3125rem;\n  --spacing-sm: 0.625rem;\n  --spacing-md: 1.25rem;\n  --spacing-lg: 2.5rem;\n  --spacing-xl: 3.75rem;\n  --spacing-2xl: 4.25rem;\n  --spacing-3xl: 4.75rem;\n\n  /* Font Families */\n  --font-body: system-ui, sans-serif;\n\n  /* Font Sizes */\n  --font-xs: 0.75rem;\n  --font-sm: 0.875rem;\n  --font-md: 1rem;\n  --font-lg: 1.125rem;\n  --font-xl: 1.25rem;\n  --font-2xl: 1.5rem;\n  --font-3xl: 1.875rem;\n  --font-4xl: 2.25rem;\n  --font-5xl: 3rem;\n\n  /* Font Weights */\n  --font-thin: 100;\n  --font-extralight: 200;\n  --font-light: 300;\n  --font-normal: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --font-extrabold: 800;\n  --font-black: 900;\n\n  /* Line Heights */\n  --leading-none: 0;\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 1.625;\n\n  font-family: var(--font-body);\n}\n\n/* Reset CSS */\n\n.sfsdk-ui-kit {\n  line-height: 1;\n}\n",""]),t.exports=e},8857:t=>{"use strict";var e=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===r}(t)}(t)},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?c((r=t,Array.isArray(r)?[]:{}),t,e):t;var r}function o(t,e,r){return t.concat(e).map((function(t){return n(t,r)}))}function a(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function i(t,e){try{return e in t}catch(t){return!1}}function c(t,r,l){(l=l||{}).arrayMerge=l.arrayMerge||o,l.isMergeableObject=l.isMergeableObject||e,l.cloneUnlessOtherwiseSpecified=n;var u=Array.isArray(r);return u===Array.isArray(t)?u?l.arrayMerge(t,r,l):function(t,e,r){var o={};return r.isMergeableObject(t)&&a(t).forEach((function(e){o[e]=n(t[e],r)})),a(e).forEach((function(a){(function(t,e){return i(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,a)||(i(t,a)&&r.isMergeableObject(e[a])?o[a]=function(t,e){if(!e.customMerge)return c;var r=e.customMerge(t);return"function"==typeof r?r:c}(a,r)(t[a],e[a],r):o[a]=n(e[a],r))})),o}(t,r,l):n(r,l)}c.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,r){return c(t,r,e)}),{})};var l=c;t.exports=l},2675:(t,e,r)=>{var n=r(487),o=r(3990);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);n(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},6709:t=>{"use strict";t.exports=JSON.parse('{"Cart":{"heading":"Shopping Cart","empty":"You have no items in your shopping cart.","error":{"unexpected":"Oops! Something went wrong! Please contact merchant."},"editProduct":{"label":"Edit {{name}}"},"removeProduct":{"label":"Remove {{name}}"},"download":{"label":"Download"},"loading":{"label":"Loading"},"checkout":{"label":"Secured Checkout"}},"EditItem":{"backToCart":"Back to cart","cancel":"Cancel","edit":"Update cart item","heading":"Edit {{name}}","noSku":"No cart item selected for editing."},"Checkout":{"heading":"Checkout","place_order":"place order","create_sample_cart":"create sample cart","continue_shipping_method":"continue to shipping method","continue_payment_information":"continue to payment information","checkout_step_sample_cart":"0. Sample Cart","checkout_step_shipping_method":"2. Shipping Method","checkout_step_review_info":"3. Review Info","checkout_step_payment_information":"4. Payment Information"}}')},5431:t=>{"use strict";t.exports=JSON.parse('{"Cart":{"heading":"Panier","empty":"Vous n\'avez aucun article dans votre panier.","error":{"unexpected":"Oops! Quelque chose s\'est mal passé ! Veuillez contacter le marchand."},"editProduct":{"label":"Éditer {{name}}"},"removeProduct":{"label":"Retirer {{name}}"},"download":{"label":"Télécharger"},"loading":{"label":"Chargement"},"checkout":{"label":"Paiement Sécurisé"}},"EditItem":{"backToCart":"Retour au panier","cancel":"Annuler","edit":"Mise à jour panier","heading":"Éditer {{name}}","noSku":"Aucun article du panier sélectionné pour modification."}}')}}]);