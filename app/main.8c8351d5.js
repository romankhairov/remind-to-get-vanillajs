parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({6:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
require("bulma");var e=document.querySelector(".add-item"),t=document.querySelector(".write-item"),d=document.querySelector(".task-list");function n(e){var t=this.parentNode.parentNode.parentNode;t.parentNode.removeChild(t)}function a(e){var t=document.getElementById("task-list"),d=document.createElement("li");d.classList.add("panel-block");var a=document.createElement("div");a.classList.add("container","is-fluid"),a.innerText=e;var i=document.createElement("p");i.classList.add("control");var l=document.createElement("div");l.classList.add("field","is-grouped");var r=document.createElement("button");r.classList.add("button","is-small","is-success","is-outlined"),r.innerText="Done";var c=document.createElement("button");c.classList.add("delete","remove-btn"),c.addEventListener("click",n),l.appendChild(i),i.appendChild(r),i.appendChild(c),d.appendChild(a),d.appendChild(l),t.insertBefore(d,t.childNodes[0])}e.addEventListener("click",function(){var e=t.value;e&&a(e)});
},{"bulma":6}]},{},[4], null)
//# sourceMappingURL=main.cc3aa024.map