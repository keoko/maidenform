/*! For license information please see mf-648.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[648],{4648:(t,e,n)=>{n.r(e),n.d(e,{createActorContext:()=>I,shallowEqual:()=>h,useActor:()=>x,useInterpret:()=>v,useMachine:()=>O,useSelector:()=>C,useSpawn:()=>P});var r=n(9654),u=n(5668),o=n(5797);const a=r.useLayoutEffect;function i(t){var e=r.useRef();return e.current||(e.current={v:t()}),e.current.v}var c=function(){return c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var u in e=arguments[n])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t},c.apply(this,arguments)},s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(r=Object.getOwnPropertySymbols(t);u<r.length;u++)e.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(t,r[u])&&(n[r[u]]=t[r[u]])}return n},f=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,u,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){u={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(u)throw u.error}}return a};function l(t,e){var n=i((function(){return"function"==typeof t?t():t})),r=e.context,u=e.guards,f=e.actions,l=e.activities,v=e.services,p=e.delays,d=(e.state,s(e,["context","guards","actions","activities","services","delays","state"])),h=i((function(){var t={context:r,guards:u,actions:f,activities:l,services:v,delays:p},e=n.withConfig(t,(function(){return c(c({},n.context),r)}));return(0,o.interpret)(e,d)}));return a((function(){Object.assign(h.machine.options.actions,f),Object.assign(h.machine.options.guards,u),Object.assign(h.machine.options.activities,l),Object.assign(h.machine.options.services,v),Object.assign(h.machine.options.delays,p)}),[f,u,l,v,p]),h}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var u=f(e,2),a=u[0],i=void 0===a?{}:a,c=u[1],s=l(t,i);return(0,r.useEffect)((function(){if(c){var t=s.subscribe((0,o.toObserver)(c));return function(){t.unsubscribe()}}}),[c]),(0,r.useEffect)((function(){var t=i.state;return s.start(t?o.State.create(t):void 0),function(){s.stop(),s.status=o.InterpreterStatus.NotStarted}}),[]),s}function p(t){return 0!==t.status?t.getSnapshot():t.machine.initialState}function d(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function h(t,e){if(d(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var u=0;u<n.length;u++)if(!Object.prototype.hasOwnProperty.call(e,n[u])||!d(t[n[u]],e[n[u]]))return!1;return!0}function b(t){return"state"in t&&"machine"in t}function y(t,e,n){if(t.status===o.InterpreterStatus.NotStarted)return!0;var r=void 0===n.changed&&(Object.keys(n.children).length>0||"boolean"==typeof e.changed);return!(n.changed||r)}var S=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,u,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){u={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(u)throw u.error}}return a};function g(t){return t}function O(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var a=S(e,1)[0],i=void 0===a?{}:a,c=l(t,i),s=(0,r.useCallback)((function(){return c.status===o.InterpreterStatus.NotStarted?i.state?o.State.create(i.state):c.machine.initialState:c.getSnapshot()}),[c]),f=(0,r.useCallback)((function(t,e){return y(c,t,e)}),[c]),v=(0,r.useCallback)((function(t){return c.subscribe(t).unsubscribe}),[c]),p=(0,u.useSyncExternalStoreWithSelector)(v,s,s,g,f);return(0,r.useEffect)((function(){var t=i.state;return c.start(t?o.State.create(t):void 0),function(){c.stop(),c.status=o.InterpreterStatus.NotStarted}}),[]),[p,c.send,c]}function m(t){return t}function j(t){return"state"in t}function w(t){return"getSnapshot"in t?b(t)?p(t):t.getSnapshot():j(t)?t.state:void 0}function x(t,e){void 0===e&&(e=w);var n=(0,r.useRef)(t),o=(0,r.useRef)([]),c=(0,r.useCallback)((function(e){return t.subscribe(e).unsubscribe}),[t]),s=(0,r.useCallback)((function(){return e(t)}),[t,e]),f=(0,r.useCallback)((function(e,n){return b(t)?y(t,e,n):e===n}),[t]),l=(0,u.useSyncExternalStoreWithSelector)(c,s,s,m,f),v=i((function(){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[0],u=n.current;(function(t){return"deferred"in t})(u)&&u.deferred?o.current.push(r):u.send(r)}}));return a((function(){for(n.current=t;o.current.length>0;){var e=o.current.shift();t.send(e)}}),[t]),[l,v]}var E=function(t,e){return t===e},k=function(t,e){if(b(t)){if(0===t.status&&e.current)return e.current;var n=p(t);return e.current=0===t.status?n:null,n}return j(t)?t.state:void 0};function C(t,e,n,o){void 0===n&&(n=E);var a=(0,r.useRef)(null),i=(0,r.useCallback)((function(e){return t.subscribe(e).unsubscribe}),[t]),c=(0,r.useCallback)((function(){return o?o(t):k(t,a)}),[t,o]);return(0,u.useSyncExternalStoreWithSelector)(i,c,c,e,n)}function P(t){return i((function(){return(0,o.spawnBehavior)(t)}))}var N=function(){return N=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var u in e=arguments[n])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t},N.apply(this,arguments)};function I(t,e,n){var u=r.createContext(null),o=u.Provider;function a(u){var a=u.children,i=u.machine,c=void 0===i?t:i,s=u.options,f=v(c,N(N({},e),s),n);return r.createElement(o,{value:f},a)}function i(){var t=r.useContext(u);if(!t)throw new Error('You used a hook from "'.concat(a.displayName,"\" but it's not inside a <").concat(a.displayName,"> component."));return t}return a.displayName="ActorProvider(".concat(t.id,")"),{Provider:a,useActorRef:i,useActor:function(){return x(i())},useSelector:function(t,e){return C(i(),t,e)}}}},2173:(t,e,n)=>{var r=n(9654),u="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},o=r.useState,a=r.useEffect,i=r.useLayoutEffect,c=r.useDebugValue;function s(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!u(t,n)}catch(t){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),r=o({inst:{value:n,getSnapshot:e}}),u=r[0].inst,f=r[1];return i((function(){u.value=n,u.getSnapshot=e,s(u)&&f({inst:u})}),[t,n,e]),a((function(){return s(u)&&f({inst:u}),t((function(){s(u)&&f({inst:u})}))}),[t]),c(n),n};e.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},5917:(t,e,n)=>{var r=n(9654),u=n(1374),o="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},a=u.useSyncExternalStore,i=r.useRef,c=r.useEffect,s=r.useMemo,f=r.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,n,r,u){var l=i(null);if(null===l.current){var v={hasValue:!1,value:null};l.current=v}else v=l.current;l=s((function(){function t(t){if(!c){if(c=!0,a=t,t=r(t),void 0!==u&&v.hasValue){var e=v.value;if(u(e,t))return i=e}return i=t}if(e=i,o(a,t))return e;var n=r(t);return void 0!==u&&u(e,n)?e:(a=t,i=n)}var a,i,c=!1,s=void 0===n?null:n;return[function(){return t(e())},null===s?void 0:function(){return t(s())}]}),[e,n,r,u]);var p=a(t,l[0],l[1]);return c((function(){v.hasValue=!0,v.value=p}),[p]),f(p),p}},1374:(t,e,n)=>{t.exports=n(2173)},5668:(t,e,n)=>{t.exports=n(5917)}}]);