(window["webpackJsonpmonsters-rolodex"]=window["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),s=(n(11),n(1)),u=n.n(s),i=n(2),l=n(3),m=(n(13),n(14),function(e){var t=e.monster;return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:t.name,title:t.name,src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),a.a.createElement("h1",null,t.username),a.a.createElement("p",null,t.email))}),f=(n(15),function(e){var t=e.monsters;return a.a.createElement("div",{className:"card-list"},t.map(function(e){return a.a.createElement(m,{key:e.id,monster:e})}))}),d=(n(16),function(e){var t=e.handlerChange;return a.a.createElement("input",{type:"search",className:"search",placeholder:"Search...",onChange:t})}),h={getList:function(){var e=Object(i.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},p=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),s=Object(l.a)(c,2),m=s[0],p=s[1],w=function(){var e=Object(i.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getList();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=n.filter(function(e){return e.username.toLowerCase().includes(m.toLowerCase())||e.email.toLowerCase().includes(m.toLowerCase())});return Object(r.useEffect)(function(){w()},[]),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters Rolodex"),a.a.createElement(d,{handlerChange:function(e){return p(e.target.value)}}),a.a.createElement(f,{monsters:v}))},w=function(){return a.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.53094690.chunk.js.map