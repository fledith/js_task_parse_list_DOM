parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}var t=document.querySelectorAll("li"),n=function t(n,e,r,s){a(this,t),this.name=n,this.position=e,this.salary=r,this.age=s};function e(a){for(var t=[],e=0;e<a.length;e++)t[t.length]=new n(a[e].innerText,a[e].dataset.position,+a[e].dataset.salary.replace(/\D/g,""),a[e].dataset.age);return t}function r(a){return a.sort(function(a,t){return t.salary-a.salary}).forEach(function(a){a.salary="$"+a.salary.toLocaleString()}),a}function s(a,t){t.forEach(function(t,n){a[n].innerText=t.name,a[n].dataset.position=t.position,a[n].dataset.salary=t.salary,a[n].dataset.age=t.age})}var i=e(t),o=r(i);s(t,o);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9153c6cd.js.map