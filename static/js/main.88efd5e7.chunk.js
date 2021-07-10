(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var r,a,c,o,i,s,d,u,l,b,j,h,x,p,f,m,g,O,k,v=t(0),w=t.n(v),y=t(21),z=t.n(y),T=t(16),D=t(26),C=t(8),S=t(6),I={color:{teal:"hsl(180, 100%, 25%)",lightTeal:"hsl(180, 100%, 30%)",activeTeal:"hsl(180, 100%, 35%)",disabled:"#ccc",gray:"#aaa",white:"#fff",green:"hsl(120, 61%, 34%)",lightGreen:"hsl(120, 61%, 39%)",red:"hsl(348, 83%, 47%)",lightRed:"hsl(348, 83%, 52%)",boxShadow:"#ddd"},breakpoint:{mobile:767}},F=t(35),E=t(7),H=S.d.form(r||(r=Object(E.a)(["\n    display: flex;\n    grid-column: 2;\n    margin: 10px 0;\n    justify-content: space-around;\n    align-items: center;\n    }\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n        flex-direction: column;\n"])),(function(n){return n.theme.breakpoint.mobile})),J=S.d.input(a||(a=Object(E.a)(["\n    flex-grow: 4;\n    margin-right: 20px;\n    padding: 10px;\n    border: 1px solid #ccc;\n    margin-left: 20px;\n    }\n\n    @media (max-width: ","px) {\n        margin: 0 0 10px;\n        width: 90%;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),L=S.d.button(c||(c=Object(E.a)(["\n    padding: 10px;\n    background-color: hsl(180, 100%, 25%);\n    color: ",";\n    border: none;\n    transition: 0.3s;\n    }\n\n    @media (max-width: ","px) {\n        flex-shrink: 0;\n        flex-grow: 0;\n        margin-bottom: 10px;\n        width: 90%;\n    }\n\n    &:hover {\n        transform: scale(1.1);\n    }\n    \n    &:active {\n        background: hsl(180, 100%, 35%);\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobile})),N=t(33),P=t(20),R="tasks",A=function(n){return localStorage.setItem(R,JSON.stringify(n))},B=Object(P.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(R)).tasks||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,a=t.findIndex((function(n){return n.id===r}));t[a].done=!t[a].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,a=t.findIndex((function(n){return n.id===r}));t.splice(a,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(N.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(a){r.e(a)}finally{r.f()}},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),G=B.actions,M=G.addTask,U=G.toggleHideDone,_=G.toggleTaskDone,Z=G.removeTask,q=G.setAllDone,K=G.fetchExampleTasks,Q=G.setTasks,V=function(n){return n.tasks},W=B.reducer,X=t(2),Y=function(){var n=Object(v.useState)(""),e=Object(F.a)(n,2),t=e[0],r=e[1],a=Object(v.useRef)(null),c=Object(T.b)();return Object(X.jsxs)(H,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(c(M({content:e,done:!1,id:Object(P.c)()})),r(""),a.current.focus())},children:[Object(X.jsx)(J,{value:t,ref:a,type:"text",className:"form__input",placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return r(e.value)}}),Object(X.jsx)(L,{children:"Dodaj zadanie"})]})},$=S.d.ul(o||(o=Object(E.a)(["\n    list-style-type: none;\n    margin: 0 10px;\n    padding: 10px;\n"]))),nn=S.d.li(i||(i=Object(E.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    padding: 10px;\n    grid-gap: 10px;\n    border-bottom: 1px solid ",";\n    margin-bottom: 10px;\n    align-items: center;\n    word-break: break-all;\n\n    ","\n"])),(function(n){return n.theme.color.gray}),(function(n){return n.hidden&&Object(S.c)(s||(s=Object(E.a)(["\n        display: none;\n    "])))})),en=S.d.span(d||(d=Object(E.a)(["\n    ","\n"])),(function(n){return n.done&&Object(S.c)(u||(u=Object(E.a)(["\n        text-decoration: line-through;\n    "])))})),tn=S.d.button(l||(l=Object(E.a)(["\n    padding: 0;\n    width: 30px;\n    height: 30px;\n    color: ",";\n    border: none;\n    transition: background 0.3s;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(S.c)(b||(b=Object(E.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n        }\n    "])),(function(n){return n.theme.color.green}),(function(n){return n.theme.color.lightGreen}))}),(function(n){return n.remove&&Object(S.c)(j||(j=Object(E.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n        }\n    "])),(function(n){return n.theme.color.red}),(function(n){return n.theme.color.lightRed}))})),rn=function(){var n=Object(T.c)(V),e=n.tasks,t=n.hideDone,r=Object(T.b)();return Object(X.jsx)($,{children:e.map((function(n){return Object(X.jsxs)(nn,{hidden:n.done&&t,children:[Object(X.jsx)(tn,{toggleDone:!0,onClick:function(){return r(_(n.id))},children:n.done?"\u2713":""}),Object(X.jsx)(en,{done:n.done,children:n.content}),Object(X.jsx)(tn,{remove:!0,onClick:function(){return r(Z(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},an=function(n){var e=n.title;return Object(X.jsx)("header",{className:"header",children:Object(X.jsx)("h1",{children:e})})},cn=S.d.div(h||(h=Object(E.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 14px; \n}\n"]))),on=S.d.button(x||(x=Object(E.a)(["\n    color: ",";\n    border: none;\n    background: transparent;\n    transition: 0.3s;\n    \n    &:hover {\n            color: ",";;\n        }\n\n    &: active: {\n        color: ",";;\n    }\n\n    &: disabled {\n        color: ",";\n}\n\n@media (max-width: ","px) {\n        flex-basis: 100%;\n        margin: 10px;\n    }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.lightTeal}),(function(n){return n.theme.color.activeTeal}),(function(n){return n.theme.color.disabled}),(function(n){return n.theme.breakpoint.mobile})),sn=function(){var n=Object(T.c)(V),e=n.tasks,t=n.hideDone,r=Object(T.b)();return Object(X.jsxs)(cn,{children:[Object(X.jsx)(on,{onClick:function(){return r(K())},children:"Pobierz przyk\u0142adowe zadania"}),e.length>0&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(on,{onClick:function(){return r(U())},children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(X.jsx)(on,{onClick:function(){return r(q())},disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})]})},dn=S.d.section(p||(p=Object(E.a)(["\n    margin: 10px 0;\n    background-color: ",";\n    box-shadow: 0 0 5px ",";\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.boxShadow})),un=S.d.header(f||(f=Object(E.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    margin: 0;\n    font-size: 22px;\n    border-bottom: 1px solid rgb(240, 236, 236);\n}\n\n@media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),ln=S.d.h2(m||(m=Object(E.a)(["\nfont-size: 22px;\n}\n\n@media (max-width: ","px) {\n        grid-template-columns: 1fr;\n        padding-bottom: 20px;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),bn=S.d.div(g||(g=Object(E.a)(["\n    padding: 20px;\n}\n"]))),jn=function(n){var e=n.title,t=n.body,r=n.extraHeaderConntent;return Object(X.jsxs)(dn,{children:[Object(X.jsxs)(un,{children:[Object(X.jsx)(ln,{children:e}),r]}),Object(X.jsx)(bn,{children:t})]})},hn=S.d.main(O||(O=Object(E.a)(["\n    max-width: 900px;\n    margin: 20px auto;\n    padding: 10px;\n}\n"]))),xn=function(n){var e=n.children;return Object(X.jsx)(hn,{children:e})},pn=Object(S.b)(k||(k=Object(E.a)(["\nhtml {\n    box-sizing: border-box;\n  }\n  \n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n  \n  body {\n    background-color: rgb(240, 236, 236);\n    font-family: 'Montserrat', sans-serif;\n  }\n"])));var fn=function(){return Object(X.jsx)(S.a,{theme:I,children:Object(X.jsxs)(xn,{children:[Object(X.jsx)(pn,{}),Object(X.jsx)(an,{title:"Lista zada\u0144"}),Object(X.jsx)(jn,{title:"Dodaj nowe zadanie",body:Object(X.jsx)(Y,{})}),Object(X.jsx)(jn,{title:"Lista zada\u0144",body:Object(X.jsx)(rn,{}),extraHeaderConntent:Object(X.jsx)(sn,{})})]})})},mn=function(){return Object(X.jsx)(D.a,{children:Object(X.jsxs)("nav",{children:[Object(X.jsx)("ul",{children:Object(X.jsx)("li",{children:Object(X.jsx)(D.b,{to:"/zadania",children:"Zadania"})})}),Object(X.jsx)(C.c,{children:Object(X.jsx)(C.a,{path:"/zadania",children:Object(X.jsx)(fn,{})})})]})})},gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),c(n),o(n)}))},On=t(36),kn=t(11),vn=t.n(kn),wn=t(15),yn=t(34),zn=function(){var n=Object(yn.a)(vn.a.mark((function n(){var e;return vn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todos-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Tn=vn.a.mark(Sn),Dn=vn.a.mark(In),Cn=vn.a.mark(Fn);function Sn(){var n;return vn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(wn.c)(1e3);case 3:return e.next=5,Object(wn.b)(zn);case 5:return n=e.sent,e.next=8,Object(wn.d)(Q(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(wn.b)(alert,"Co\u015b posz\u0142o nie tak!");case 14:case"end":return e.stop()}}),Tn,null,[[0,10]])}function In(){var n;return vn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(wn.e)(V);case 2:return n=e.sent,e.next=5,Object(wn.b)(A,n);case 5:case"end":return e.stop()}}),Dn)}function Fn(){return vn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(wn.g)(K.type,Sn);case 2:return n.next=4,Object(wn.f)("*",In);case 4:case"end":return n.stop()}}),Cn)}var En=vn.a.mark(Hn);function Hn(){return vn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(wn.a)([Fn()]);case 2:case"end":return n.stop()}}),En)}var Jn=Object(On.a)(),Ln=Object(P.a)({reducer:{tasks:W},middleware:[Jn]});Jn.run(Hn);var Nn=Ln;z.a.render(Object(X.jsx)(w.a.StrictMode,{children:Object(X.jsx)(T.a,{store:Nn,children:Object(X.jsx)(mn,{})})}),document.getElementById("root")),gn()}},[[49,1,2]]]);
//# sourceMappingURL=main.88efd5e7.chunk.js.map