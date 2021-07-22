(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,d,u,l,b,j,h,x,f,O,p,m,g,k,v,w=t(0),y=t.n(w),z=t(22),T=t.n(z),C=t(9),D=t(17),S=t(8),E=t(7),N=t(4),F=N.d.main(r||(r=Object(E.a)(["\n    max-width: 900px;\n    margin: 20px auto;\n    padding: 10px;\n}\n"]))),P=t(2),U=function(n){var e=n.children;return Object(P.jsx)(F,{children:e})},I=function(n){var e=n.title;return Object(P.jsx)("header",{className:"header",children:Object(P.jsx)("h1",{children:e})})},L=N.d.section(c||(c=Object(E.a)(["\n    margin: 10px 0;\n    background-color: ",";\n    box-shadow: 0 0 5px ",";\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.boxShadow})),J=N.d.header(a||(a=Object(E.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    margin: 0;\n    font-size: 22px;\n    border-bottom: 1px solid rgb(240, 236, 236);\n}\n\n@media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),R=N.d.h2(o||(o=Object(E.a)(["\nfont-size: 22px;\n}\n\n@media (max-width: ","px) {\n        grid-template-columns: 1fr;\n        padding-bottom: 20px;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),A=N.d.div(i||(i=Object(E.a)(["\n    padding: 20px;\n}\n"]))),H=function(n){var e=n.title,t=n.button,r=n.body,c=n.extraHeaderConntent;return Object(P.jsxs)(L,{children:[Object(P.jsxs)(J,{children:[Object(P.jsx)(R,{children:e}),t,c]}),Object(P.jsx)(A,{children:r})]})},B=function(){return Object(P.jsxs)(U,{children:[Object(P.jsx)(I,{title:"O autorze"}),Object(P.jsx)(H,{title:"Justyna Pawlik",body:Object(P.jsx)(P.Fragment,{children:"cdn..."})})]})},G=t(27),M=t(21),_="tasks",W=function(n){return localStorage.setItem(_,JSON.stringify(n))},Z=Object(M.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(_))||[],hideDone:!1,loading:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(G.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},setAllNotDone:function(n){var e,t=n.tasks,r=Object(G.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!1}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(n){n.loading=!0},fetchExampleTasksSuccess:function(n,e){var t=e.payload;n.tasks=t,n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1}}}),q=Z.actions,K=q.addTask,Q=q.toggleHideDone,V=q.toggleTaskDone,X=q.removeTask,Y=q.setAllDone,$=q.setAllNotDone,nn=q.fetchExampleTasks,en=q.fetchExampleTasksError,tn=q.fetchExampleTasksSuccess,rn=(q.setTasks,function(n){return n.tasks}),cn=function(n){return rn(n).tasks},an=function(n){return rn(n).hideDone},on=function(n){return 0===cn(n).length},sn=function(n){return cn(n).every((function(n){return n.done}))},dn=function(n){return cn(n).every((function(n){return!n.done}))},un=function(n){return n.tasks.loading},ln=Z.reducer,bn=function(){var n=Object(S.i)().id,e=Object(C.c)((function(e){return function(n,e){return cn(n).find((function(n){return n.id===e}))}(e,n)}));return Object(P.jsxs)(U,{children:[Object(P.jsx)(I,{title:"Szczego\u0142y zadania"}),Object(P.jsx)(H,{title:e?e.content:"Nie znaleziono zadania \ud83d\ude22",body:!!e&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("strong",{children:"Uko\u0144czono:"})," ",e.done?"Tak":"Nie"]})})]})},jn=t(35),hn=N.d.form(s||(s=Object(E.a)(["\n    display: flex;\n    grid-column: 2;\n    margin: 10px 0;\n    justify-content: space-around;\n    align-items: center;\n    }\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n        flex-direction: column;\n"])),(function(n){return n.theme.breakpoint.mobile})),xn=N.d.button(d||(d=Object(E.a)(["\n    padding: 10px;\n    background-color: hsl(180, 100%, 25%);\n    color: ",";\n    border: none;\n    transition: 0.3s;\n    }\n\n    @media (max-width: ","px) {\n        flex-shrink: 0;\n        flex-grow: 0;\n        margin-bottom: 10px;\n        width: 90%;\n    }\n\n    &:hover {\n        transform: scale(1.1);\n    }\n    \n    &:active {\n        background: hsl(180, 100%, 35%);\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobile})),fn=N.d.input(u||(u=Object(E.a)(["\n    flex-grow: 4;\n    margin-right: 20px;\n    padding: 10px;\n    border: 1px solid #ccc;\n    margin-left: 20px;\n    }\n\n    @media (max-width: ","px) {\n        margin: 0 0 10px;\n        width: 90%;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),On=function(){var n=Object(w.useState)(""),e=Object(jn.a)(n,2),t=e[0],r=e[1],c=Object(w.useRef)(null),a=Object(C.b)();return Object(P.jsxs)(hn,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(a(K({content:e,done:!1,id:Object(M.c)()})),r(""),c.current.focus())},children:[Object(P.jsx)(fn,{value:t,ref:c,type:"text",className:"form__input",placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return r(e.value)}}),Object(P.jsx)(xn,{children:"Dodaj zadanie"})]})},pn=N.d.ul(l||(l=Object(E.a)(["\n    list-style-type: none;\n    margin: 0 10px;\n    padding: 10px;\n"]))),mn=N.d.li(b||(b=Object(E.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    padding: 10px;\n    grid-gap: 10px;\n    border-bottom: 1px solid ",";\n    margin-bottom: 10px;\n    align-items: center;\n    word-break: break-all;\n\n    ","\n"])),(function(n){return n.theme.color.gray}),(function(n){return n.hidden&&Object(N.c)(j||(j=Object(E.a)(["\n        display: none;\n    "])))})),gn=N.d.span(h||(h=Object(E.a)(["\n    ","\n"])),(function(n){return n.done&&Object(N.c)(x||(x=Object(E.a)(["\n        text-decoration: line-through;\n    "])))})),kn=N.d.button(f||(f=Object(E.a)(["\n    padding: 0;\n    width: 30px;\n    height: 30px;\n    color: ",";\n    border: none;\n    transition: background 0.3s;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(N.c)(O||(O=Object(E.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n        }\n    "])),(function(n){return n.theme.color.green}),(function(n){return n.theme.color.lightGreen}))}),(function(n){return n.remove&&Object(N.c)(p||(p=Object(E.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n        }\n    "])),(function(n){return n.theme.color.red}),(function(n){return n.theme.color.lightRed}))})),vn=Object(N.d)(D.b)(m||(m=Object(E.a)(["\n    text-decoration: none;\n    color: ",";\n    \n    &:hover {\n        color: ",";;\n    }\n    }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.lightTeal})),wn="szukaj",yn=function(n){var e=Object(S.h)();return new URLSearchParams(e.search).get(n)},zn=function(){var n=yn(wn),e=Object(C.c)((function(e){return function(n,e){var t=cn(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(e,n)})),t=Object(C.b)(),r=Object(C.c)(an);return Object(P.jsx)(pn,{children:e.map((function(n){return Object(P.jsxs)(mn,{hidden:n.done&&r,children:[Object(P.jsx)(kn,{toggleDone:!0,onClick:function(){return t(V(n.id))},children:n.done?"\u2713":""}),Object(P.jsx)(gn,{done:n.done,children:Object(P.jsx)(vn,{to:"/zadania/".concat(n.id),children:n.content})}),Object(P.jsx)(kn,{remove:!0,onClick:function(){return t(X(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},Tn=N.d.div(g||(g=Object(E.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 14px; \n}\n"]))),Cn=N.d.button(k||(k=Object(E.a)(["\n    color: ",";\n    border: none;\n    background: transparent;\n    transition: 0.3s;\n    font-size: 14px; \n    \n    &:hover {\n            color: ",";;\n        }\n\n    &: active: {\n        color: ",";;\n    }\n\n    &: disabled {\n        color: ",";\n}\n\n@media (max-width: ","px) {\n        flex-basis: 100%;\n        margin: 10px;\n    }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.lightTeal}),(function(n){return n.theme.color.activeTeal}),(function(n){return n.theme.color.disabled}),(function(n){return n.theme.breakpoint.mobile})),Dn=function(){var n=Object(C.c)(sn),e=Object(C.c)(dn),t=Object(C.c)(on),r=Object(C.c)(an),c=Object(C.b)();return Object(P.jsx)(Tn,{children:!t&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(Cn,{onClick:function(){return c(Q())},children:[r?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(P.jsx)(Cn,{onClick:function(){return c($())},disabled:e,children:"Odznacz uko\u0144czone"}),Object(P.jsx)(Cn,{onClick:function(){return c(Y())},disabled:n,children:"Uko\u0144cz wszystkie"})]})})},Sn=N.d.div(v||(v=Object(E.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr;\n"]))),En=function(){var n=yn(wn),e=function(){var n=Object(S.h)(),e=Object(S.g)();return function(t){var r=t.key,c=t.value,a=new URLSearchParams(n.search);void 0===c?a.delete(r):a.set(r,c);var o=a.toString();e.push("".concat(n.pathname,"?").concat(o))}}();return Object(P.jsx)(Sn,{children:Object(P.jsx)(fn,{placeholder:"Filtruj zadania",value:n||"",onChange:function(n){var t=n.target;e({key:wn,value:""!==t.value.trim()?t.value:void 0})}})})},Nn=function(){var n=Object(C.b)(),e=Object(C.c)(un);return Object(P.jsx)(Cn,{disabled:e,onClick:function(){return n(nn())},children:e?"\u0142adowanie...":"Pobierz przyk\u0142adowe zadania"})};var Fn,Pn,Un,In=function(){return Object(P.jsxs)(U,{children:[Object(P.jsx)(I,{title:"Lista zada\u0144"}),Object(P.jsx)(H,{button:Object(P.jsx)(Nn,{}),title:"Dodaj nowe zadanie",body:Object(P.jsx)(On,{})}),Object(P.jsx)(H,{title:"Wyszukiwarka",body:Object(P.jsx)(En,{})}),Object(P.jsx)(H,{title:"Lista zada\u0144",body:Object(P.jsx)(zn,{}),extraHeaderConntent:Object(P.jsx)(Dn,{})})]})},Ln=N.d.ul(Fn||(Fn=Object(E.a)(["\ndisplay: flex;\njustify-content: center;\nbackground-color: ",";\nlist-style: none;\nmargin: 0;\n"])),(function(n){return n.theme.color.teal})),Jn=N.d.li(Pn||(Pn=Object(E.a)(["\nmargin: 20px;\n"]))),Rn="link-active",An=Object(N.d)(D.c).attrs((function(){return{activeClassName:Rn}}))(Un||(Un=Object(E.a)(["\ncolor: ",";\ntext-decoration: none;\n\n    &."," {\n        font-weight: bold;;\n    }\n\n    &:hover {\n        text-decoration: underline;\n       \n    }\n"])),(function(n){return n.theme.color.white}),Rn),Hn=function(){return Object(P.jsx)("nav",{children:Object(P.jsxs)(Ln,{children:[Object(P.jsx)(Jn,{children:Object(P.jsx)(An,{to:"/zadania",children:"Zadania"})}),Object(P.jsx)(Jn,{children:Object(P.jsx)(An,{to:"/autor",children:"O autorze"})})]})})},Bn=function(){return Object(P.jsxs)(D.a,{children:[Object(P.jsx)(Hn,{}),Object(P.jsxs)(S.d,{children:[Object(P.jsx)(S.b,{path:"/zadania/:id",children:Object(P.jsx)(bn,{})}),Object(P.jsx)(S.b,{path:"/zadania",children:Object(P.jsx)(In,{})}),Object(P.jsx)(S.b,{path:"/autor",children:Object(P.jsx)(B,{})}),Object(P.jsx)(S.b,{path:"/",children:Object(P.jsx)(S.a,{to:"/zadania"})})]})]})},Gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))},Mn=t(36),_n=t(12),Wn=t.n(_n),Zn=t(16),qn=t(34),Kn=function(){var n=Object(qn.a)(Wn.a.mark((function n(){var e;return Wn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todos-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Qn=Wn.a.mark(Yn),Vn=Wn.a.mark($n),Xn=Wn.a.mark(ne);function Yn(){var n;return Wn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Zn.c)(1e3);case 3:return e.next=5,Object(Zn.b)(Kn);case 5:return n=e.sent,e.next=8,Object(Zn.d)(tn(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Zn.d)(en());case 14:return e.next=16,Object(Zn.b)(alert,"Co\u015b posz\u0142o nie tak!");case 16:case"end":return e.stop()}}),Qn,null,[[0,10]])}function $n(){var n;return Wn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zn.e)(cn);case 2:return n=e.sent,e.next=5,Object(Zn.b)(W,n);case 5:case"end":return e.stop()}}),Vn)}function ne(){return Wn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Zn.g)(nn.type,Yn);case 2:return n.next=4,Object(Zn.f)("*",$n);case 4:case"end":return n.stop()}}),Xn)}var ee=Wn.a.mark(te);function te(){return Wn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Zn.a)([ne()]);case 2:case"end":return n.stop()}}),ee)}var re=Object(Mn.a)(),ce=Object(M.a)({reducer:{tasks:ln},middleware:[re]});re.run(te);var ae,oe=ce,ie=Object(N.b)(ae||(ae=Object(E.a)(["\nhtml {\n    box-sizing: border-box;\n  }\n  \n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n  \n  body {\n    background-color: rgb(240, 236, 236);\n    font-family: 'Montserrat', sans-serif;\n  }\n"])));T.a.render(Object(P.jsx)(y.a.StrictMode,{children:Object(P.jsx)(C.a,{store:oe,children:Object(P.jsxs)(N.a,{theme:{color:{teal:"hsl(180, 100%, 25%)",lightTeal:"hsl(180, 100%, 30%)",activeTeal:"hsl(180, 100%, 35%)",disabled:"#ccc",gray:"#aaa",white:"#fff",green:"hsl(120, 61%, 34%)",lightGreen:"hsl(120, 61%, 39%)",red:"hsl(348, 83%, 47%)",lightRed:"hsl(348, 83%, 52%)",boxShadow:"#ddd"},breakpoint:{mobile:767}},children:[Object(P.jsx)(ie,{}),Object(P.jsx)(Bn,{})]})})}),document.getElementById("root")),Gn()}},[[49,1,2]]]);
//# sourceMappingURL=main.517daf79.chunk.js.map