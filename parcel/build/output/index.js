parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({3:[function(require,module,exports) {

},{}],1:[function(require,module,exports) {
require("bulma");var e=document.querySelector(".add-item"),n=document.querySelector(".write-item"),i=document.querySelector(".task-list");function t(e){var n='\n  <li class="panel-block">\n      <div class="container is-fluid">\n          '+e+"\n      </div>\n  </li>\n";i.innerHTML+=n}e.addEventListener("click",function(){var e=n.value;e&&t(e)});
},{"bulma":3}]},{},[1])
//# sourceMappingURL=/index.map