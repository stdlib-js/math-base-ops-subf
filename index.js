// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=n,r=function(t){return e.call(t)},f=Object.prototype.hasOwnProperty,u=function(t,o){return null!=t&&f.call(t,o)},l="function"==typeof Symbol?Symbol.toStringTag:"",i=u,a=l,c=n,y=r,p=function(t){var o,n,e;if(null==t)return c.call(t);n=t[a],o=i(t,a);try{t[a]=void 0}catch(o){return c.call(t)}return e=c.call(t),o?t[a]=n:delete t[a],e},d=o&&"symbol"==typeof Symbol.toStringTag?p:y,b="function"==typeof Float32Array,m=function(t){return b&&t instanceof Float32Array||"[object Float32Array]"===d(t)},s=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null,S=m,F=s,g=h,v="function"==typeof Float32Array?Float32Array:void 0,A=function(){throw new Error("not implemented")},T=new(function(){var t,o;if("function"!=typeof g)return!1;try{o=new g([1,3.14,-3.14,5e40]),t=S(o)&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===F}catch(o){t=!1}return t}()?v:A)(1),w=t;"function"!=typeof w&&(w=function(t){return T[0]=t,T[0]});var I=w;return function(t,o){return I(I(t)-I(o))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).subf=o();
//# sourceMappingURL=index.js.map
