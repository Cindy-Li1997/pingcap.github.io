!function(t){var r={};function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/js/",i(i.s=22)}({22:function(n,e){var t,r,i=$("#tpc-ranking-switch .first"),a=$("#tpc-ranking-switch .second"),s=$("#tpc-ranking-switch .slider");function o(n){var e;n?(e="https://internal.pingcap.net/pcp/api/rank/season/1",s.text(t),s.css("left","1rem")):(e="https://internal.pingcap.net/pcp/api/rank/all",s.text(r),s.css("left","calc(50% - 1rem)")),$.getJSON(e,function(n){$("#ranking-list").empty(),n.sort(function(n,e){return e.score-n.score}).map(function(n,e){$("<div>"+(e<3?'<div class="medal medal'+(e+1)+'"></div>':'<div class="index">'+(e+1)+"</div>")+'<div class="github"></div>          <div class="main">            <div class="info">              <div class="name">'+n.name+(n.community?"":' <span class="ti"></span>')+("team"===n.type?' <span class="team">Team</span>':"")+'</div>              <div class="score">'+n.score+'</div>            </div>            <div class="progress-wrapper">              <progress class="progress" value="'+n.score+'" max="10000" />            </div>          </div>        </div>').appendTo("#ranking-list")})})}r="cn"==$(".slider").data("lang")?(t="赛季积分","历史积分"):window.matchMedia("(max-width: 768px)").matches?(t="S1 CC","CC History"):(t="S1 Contribution Credit","Contribution Credit History"),i.on("click",function(){return o(!0)}),a.on("click",function(){return o()}),$(document).ready(function(){return o(!0)},$(".first")[0].innerText=t,$(".second")[0].innerText=r)}});