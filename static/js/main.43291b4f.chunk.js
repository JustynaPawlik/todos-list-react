(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(3),o=n.n(a),i=(n(8),n(9),n(0)),r=function(){return Object(i.jsxs)("form",{className:"form",children:[Object(i.jsx)("input",{type:"text",className:"form__input",placeholder:"Co jest do zrobienia?"}),Object(i.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})},d=(n(11),function(t){var e=t.tasks,n=t.hideDoneTasks;return Object(i.jsx)("ul",{className:"tasksList",children:e.map((function(t){return Object(i.jsxs)("li",{className:'<li className="\n            tasks__item'.concat(t.done&&n?" tasks__item--hidden":""),children:[Object(i.jsx)("button",{className:"tasks__button tasks__button--done",children:t.done?"\u2713":""}),Object(i.jsx)("span",{className:"tasks__content".concat(t.done?" tasks__content--done":""),children:t.content}),Object(i.jsx)("button",{className:"tasks__button tasks__button--remove",children:"\ud83d\uddd1"})]},t.id)}))})}),j=(n(12),function(t){var e=t.tasks,n=t.hideDoneTasks;return Object(i.jsx)("div",{className:"buttons",children:e.length>0&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("button",{className:"buttons__button buttons__button-done",children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(i.jsx)("button",{className:"buttons__button buttons__button--hidden",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})})}),l=(n(13),function(t){var e=t.title,n=t.body,s=t.extraHeaderConntent;return Object(i.jsxs)("section",{className:"section",children:[Object(i.jsxs)("header",{className:"section__header",children:[Object(i.jsx)("h2",{className:"section__title",children:e}),s]}),Object(i.jsx)("div",{children:n})]})}),b=(n(14),function(t){var e=t.title;return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{children:e})})}),u=(n(15),function(t){var e=t.children;return Object(i.jsx)("main",{className:"container",children:e})}),h=[{id:1,content:"przej\u015b\u0107 na Reacta",done:!1},{id:2,content:"zje\u015b\u0107 obiad",done:!0}];var _=function(){return Object(i.jsxs)(u,{className:"container",children:[Object(i.jsx)(b,{title:"Lista zada\u0144"}),Object(i.jsx)(l,{title:"Dodaj nowe zadanie",body:Object(i.jsx)(r,{})}),Object(i.jsx)(l,{title:"Lista zada\u0144",body:Object(i.jsx)(d,{tasks:h,hideDoneTasks:false}),extraHeaderConntent:Object(i.jsx)(j,{tasks:h,hideDoneTasks:false})})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),a(t),o(t)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(_,{})}),document.getElementById("root")),x()}],[[16,1,2]]]);
//# sourceMappingURL=main.43291b4f.chunk.js.map