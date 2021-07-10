(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,d,u,l,b,j,h,x,f,p,O,m,g,k=t(0),v=t.n(k),w=t(22),y=t.n(w),z=t(10),T=t(17),D=t(8),C=t(7),S=t(6),N=S.d.main(r||(r=Object(C.a)(["\n    max-width: 900px;\n    margin: 20px auto;\n    padding: 10px;\n}\n"]))),F=t(2),I=function(n){var e=n.children;return Object(F.jsx)(N,{children:e})},J=function(n){var e=n.title;return Object(F.jsx)("header",{className:"header",children:Object(F.jsx)("h1",{children:e})})},P=S.d.section(c||(c=Object(C.a)(["\n    margin: 10px 0;\n    background-color: ",";\n    box-shadow: 0 0 5px ",";\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.boxShadow})),E=S.d.header(a||(a=Object(C.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    margin: 0;\n    font-size: 22px;\n    border-bottom: 1px solid rgb(240, 236, 236);\n}\n\n@media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),H=S.d.h2(o||(o=Object(C.a)(["\nfont-size: 22px;\n}\n\n@media (max-width: ","px) {\n        grid-template-columns: 1fr;\n        padding-bottom: 20px;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),L=S.d.div(i||(i=Object(C.a)(["\n    padding: 20px;\n}\n"]))),R=function(n){var e=n.title,t=n.body,r=n.extraHeaderConntent;return Object(F.jsxs)(P,{children:[Object(F.jsxs)(E,{children:[Object(F.jsx)(H,{children:e}),r]}),Object(F.jsx)(L,{children:t})]})},U=function(){return Object(F.jsxs)(I,{children:[Object(F.jsx)(J,{title:"O autorze"}),Object(F.jsx)(R,{title:"Justyna Pawlik",body:Object(F.jsx)(F.Fragment,{children:"nanana"})})]})},A=t(33),B=t(21),G="tasks",M=function(n){return localStorage.setItem(G,JSON.stringify(n))},_=Object(B.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(G))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(A.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),Z=_.actions,q=Z.addTask,K=Z.toggleHideDone,Q=Z.toggleTaskDone,V=Z.removeTask,W=Z.setAllDone,X=Z.fetchExampleTasks,Y=Z.setTasks,$=function(n){return n.tasks},nn=function(n){return $(n).tasks},en=function(n){return $(n).hideDone},tn=function(n){return 0===nn(n).length},rn=function(n){return nn(n).every((function(n){return n.done}))},cn=_.reducer,an=function(){var n=Object(D.h)().id,e=Object(z.c)((function(e){return cn(e,n)}));return Object(F.jsxs)(I,{children:[Object(F.jsx)(J,{title:"Szczego\u0142y zadania"}),Object(F.jsx)(R,{title:e?e.content:"Nie znaleziono zadania \ud83d\ude22",body:Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("strong",{children:"Uko\u0144czono:"})," ",e.done?"Tak":"Nie"]})})]})},on=t(35),sn=S.d.form(s||(s=Object(C.a)(["\n    display: flex;\n    grid-column: 2;\n    margin: 10px 0;\n    justify-content: space-around;\n    align-items: center;\n    }\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n        flex-direction: column;\n"])),(function(n){return n.theme.breakpoint.mobile})),dn=S.d.input(d||(d=Object(C.a)(["\n    flex-grow: 4;\n    margin-right: 20px;\n    padding: 10px;\n    border: 1px solid #ccc;\n    margin-left: 20px;\n    }\n\n    @media (max-width: ","px) {\n        margin: 0 0 10px;\n        width: 90%;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),un=S.d.button(u||(u=Object(C.a)(["\n    padding: 10px;\n    background-color: hsl(180, 100%, 25%);\n    color: ",";\n    border: none;\n    transition: 0.3s;\n    }\n\n    @media (max-width: ","px) {\n        flex-shrink: 0;\n        flex-grow: 0;\n        margin-bottom: 10px;\n        width: 90%;\n    }\n\n    &:hover {\n        transform: scale(1.1);\n    }\n    \n    &:active {\n        background: hsl(180, 100%, 35%);\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobile})),ln=function(){var n=Object(k.useState)(""),e=Object(on.a)(n,2),t=e[0],r=e[1],c=Object(k.useRef)(null),a=Object(z.b)();return Object(F.jsxs)(sn,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(a(q({content:e,done:!1,id:Object(B.c)()})),r(""),c.current.focus())},children:[Object(F.jsx)(dn,{value:t,ref:c,type:"text",className:"form__input",placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return r(e.value)}}),Object(F.jsx)(un,{children:"Dodaj zadanie"})]})},bn=S.d.ul(l||(l=Object(C.a)(["\n    list-style-type: none;\n    margin: 0 10px;\n    padding: 10px;\n"]))),jn=S.d.li(b||(b=Object(C.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    padding: 10px;\n    grid-gap: 10px;\n    border-bottom: 1px solid ",";\n    margin-bottom: 10px;\n    align-items: center;\n    word-break: break-all;\n\n    ","\n"])),(function(n){return n.theme.color.gray}),(function(n){return n.hidden&&Object(S.c)(j||(j=Object(C.a)(["\n        display: none;\n    "])))})),hn=S.d.span(h||(h=Object(C.a)(["\n    ","\n"])),(function(n){return n.done&&Object(S.c)(x||(x=Object(C.a)(["\n        text-decoration: line-through;\n    "])))})),xn=S.d.button(f||(f=Object(C.a)(["\n    padding: 0;\n    width: 30px;\n    height: 30px;\n    color: ",";\n    border: none;\n    transition: background 0.3s;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(S.c)(p||(p=Object(C.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n        }\n    "])),(function(n){return n.theme.color.green}),(function(n){return n.theme.color.lightGreen}))}),(function(n){return n.remove&&Object(S.c)(O||(O=Object(C.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n        }\n    "])),(function(n){return n.theme.color.red}),(function(n){return n.theme.color.lightRed}))})),fn=function(){var n=Object(z.c)(nn),e=Object(z.b)(),t=Object(z.c)(en);return Object(F.jsx)(bn,{children:n.map((function(n){return Object(F.jsxs)(jn,{hidden:n.done&&t,children:[Object(F.jsx)(xn,{toggleDone:!0,onClick:function(){return e(Q(n.id))},children:n.done?"\u2713":""}),Object(F.jsx)(hn,{done:n.done,children:Object(F.jsx)(T.b,{to:"/zadania/".concat(n.id),children:n.content})}),Object(F.jsx)(xn,{remove:!0,onClick:function(){return e(V(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},pn=S.d.div(m||(m=Object(C.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 14px; \n}\n"]))),On=S.d.button(g||(g=Object(C.a)(["\n    color: ",";\n    border: none;\n    background: transparent;\n    transition: 0.3s;\n    \n    &:hover {\n            color: ",";;\n        }\n\n    &: active: {\n        color: ",";;\n    }\n\n    &: disabled {\n        color: ",";\n}\n\n@media (max-width: ","px) {\n        flex-basis: 100%;\n        margin: 10px;\n    }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.lightTeal}),(function(n){return n.theme.color.activeTeal}),(function(n){return n.theme.color.disabled}),(function(n){return n.theme.breakpoint.mobile})),mn=function(){var n=Object(z.c)(rn),e=Object(z.c)(tn),t=Object(z.c)(en),r=Object(z.b)();return Object(F.jsxs)(pn,{children:[Object(F.jsx)(On,{onClick:function(){return r(X())},children:"Pobierz przyk\u0142adowe zadania"}),!e&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(On,{onClick:function(){return r(K())},children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(F.jsx)(On,{onClick:function(){return r(W())},disabled:n,children:"Uko\u0144cz wszystkie"})]})]})};var gn=function(){var n=Object(D.g)();return Object(F.jsxs)(I,{children:[n.pathname,Object(F.jsx)(J,{title:"Lista zada\u0144"}),Object(F.jsx)(R,{title:"Dodaj nowe zadanie",body:Object(F.jsx)(ln,{})}),Object(F.jsx)(R,{title:"Lista zada\u0144",body:Object(F.jsx)(fn,{}),extraHeaderConntent:Object(F.jsx)(mn,{})})]})},kn=function(){return Object(F.jsx)(T.a,{children:Object(F.jsxs)("nav",{children:[Object(F.jsxs)("ul",{children:[Object(F.jsx)("li",{children:Object(F.jsx)(T.c,{activeClassName:"active",to:"/zadania",children:"Zadania"})}),Object(F.jsx)("li",{children:Object(F.jsx)(T.c,{activeClassName:"active",to:"/autor",children:"O autorze"})})]}),Object(F.jsxs)(D.d,{children:[Object(F.jsx)(D.b,{path:"/zadania/:id",children:Object(F.jsx)(an,{})}),Object(F.jsx)(D.b,{path:"/zadania",children:Object(F.jsx)(gn,{})}),Object(F.jsx)(D.b,{path:"/autor",children:Object(F.jsx)(U,{})}),Object(F.jsx)(D.b,{path:"/",children:Object(F.jsx)(D.a,{to:"/zadania"})})]})]})})},vn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))},wn=t(36),yn=t(12),zn=t.n(yn),Tn=t(16),Dn=t(34),Cn=function(){var n=Object(Dn.a)(zn.a.mark((function n(){var e;return zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todos-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Sn=zn.a.mark(In),Nn=zn.a.mark(Jn),Fn=zn.a.mark(Pn);function In(){var n;return zn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Tn.c)(1e3);case 3:return e.next=5,Object(Tn.b)(Cn);case 5:return n=e.sent,e.next=8,Object(Tn.d)(Y(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Tn.b)(alert,"Co\u015b posz\u0142o nie tak!");case 14:case"end":return e.stop()}}),Sn,null,[[0,10]])}function Jn(){var n;return zn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Tn.e)(nn);case 2:return n=e.sent,e.next=5,Object(Tn.b)(M,n);case 5:case"end":return e.stop()}}),Nn)}function Pn(){return zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Tn.g)(X.type,In);case 2:return n.next=4,Object(Tn.f)("*",Jn);case 4:case"end":return n.stop()}}),Fn)}var En=zn.a.mark(Hn);function Hn(){return zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Tn.a)([Pn()]);case 2:case"end":return n.stop()}}),En)}var Ln=Object(wn.a)(),Rn=Object(B.a)({reducer:{tasks:cn},middleware:[Ln]});Ln.run(Hn);var Un,An=Rn,Bn=Object(S.b)(Un||(Un=Object(C.a)(["\nhtml {\n    box-sizing: border-box;\n  }\n  \n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n  \n  body {\n    background-color: rgb(240, 236, 236);\n    font-family: 'Montserrat', sans-serif;\n  }\n"])));y.a.render(Object(F.jsx)(v.a.StrictMode,{children:Object(F.jsx)(z.a,{store:An,children:Object(F.jsxs)(S.a,{theme:{color:{teal:"hsl(180, 100%, 25%)",lightTeal:"hsl(180, 100%, 30%)",activeTeal:"hsl(180, 100%, 35%)",disabled:"#ccc",gray:"#aaa",white:"#fff",green:"hsl(120, 61%, 34%)",lightGreen:"hsl(120, 61%, 39%)",red:"hsl(348, 83%, 47%)",lightRed:"hsl(348, 83%, 52%)",boxShadow:"#ddd"},breakpoint:{mobile:767}},children:[Object(F.jsx)(Bn,{}),Object(F.jsx)(kn,{})]})})}),document.getElementById("root")),vn()}},[[49,1,2]]]);
//# sourceMappingURL=main.1fdb6ac9.chunk.js.map