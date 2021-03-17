(this["webpackJsonpstudierendenfutter-frontend"]=this["webpackJsonpstudierendenfutter-frontend"]||[]).push([[0],{207:function(e,t,n){e.exports=n(325)},209:function(e,t,n){},323:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(209),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(61),l=n(16),u=n(41),i=n(14);function o(e){var t=e.children;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",{style:{maxWidth:"500px"}},t))}var s=n(9),m=n.n(s),p=n(15),f=n(75),d=n(46),h=n(345),E=n(340),v=n(346),b=n(344),g=n(44),w=n.n(g),y={BACKEND_URL:"https://api.studierendenfutter.de"},O=y.BACKEND_URL+"/canteenUsers/login";function j(e){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post(O,t);case 3:n=e.sent,window.localStorage.setItem("authToken",JSON.stringify({token:n.data.token})),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(){var e=Object(a.useState)({password:"",email:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),o=u[0],s=u[1],g=function(e){var t=e.target,a=t.value,r=t.name;c(Object(d.a)({},n,Object(f.a)({},r,a)))},w=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(n);case 2:e.sent?(s(!0),setTimeout((function(){return s(!1)}),5e3)):window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(v.a,null,"Login"),o&&r.a.createElement(b.a,{negative:!0},"Bitte versuche Sie eine andere E-Mail oder ein anderes Password ."),r.a.createElement(E.a.Input,{label:"E-Mail",type:"text",placeholder:"Ihre E-Mail-Adresse",value:n.email,name:"email",onChange:g}),r.a.createElement(E.a.Input,{label:"Password",type:"password",placeholder:"Ihr passwort",value:n.password,name:"password",onChange:g}),r.a.createElement(E.a.Button,{fluid:!0,type:"button",positive:!0,onClick:w},"Login"))),r.a.createElement(b.a,{info:!0}," ","K\xf6nnen wir Ihnen weiterhelfen? Einfach eine E-Mail an"," ",r.a.createElement("a",{href:"mailto:moin@studierendenfutter.de"},"moin@studierendenfutter.de")," ","schicken."," "))}function C(){return r.a.createElement(o,null,r.a.createElement(x,null))}var S=n(327),D=n(341),N=n(72);function U(e){var t=e.columnNames,n=void 0===t?[]:t,a=e.content,c=void 0===a?[]:a;return r.a.createElement(D.a,{celled:!0},r.a.createElement(D.a.Header,null,r.a.createElement(D.a.Row,null,n.map((function(e){return r.a.createElement(D.a.HeaderCell,{key:e},e)})))),r.a.createElement(D.a.Body,null,c.map((function(e){return r.a.createElement(D.a.Row,{key:e[0]},e.map((function(e){return e})))}))))}function B(){return{authorization:"Bearer "+JSON.parse(window.localStorage.getItem("authToken")).token}}function I(e,t){var n=B();return w.a.delete(e,{data:t,headers:n})}var K=n(342);function _(e){var t=e.updateReadyData,n=e.setUpdateReady,a=e.update,c=e.header,l=e.text,u=e.icon,i=void 0===u?"pencil alternate":u;return r.a.createElement(K.a,{open:!!t,onClose:function(){return n()},basic:!0},r.a.createElement(v.a,{icon:!0},r.a.createElement(N.a,{name:i}),c),r.a.createElement(K.a.Content,null,r.a.createElement("p",{style:{textAlign:"center"}},l)),r.a.createElement(K.a.Actions,null,r.a.createElement(S.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return n()}},r.a.createElement(N.a,{name:"remove"})," Nein"),r.a.createElement(S.a,{color:"green",inverted:!0,onClick:function(){a(t),n()}},r.a.createElement(N.a,{name:"checkmark"})," Ja")))}function A(e){var t=e.meals,n=Object(a.useState)(),l=Object(i.a)(n,2),u=l[0],o=l[1];return t?r.a.createElement("div",null,r.a.createElement(S.a,{icon:"add",as:c.b,to:"/meals/create",positive:!0,content:"Gericht hinzuf\xfcgen"}),r.a.createElement(U,{columnNames:["Gericht","Erscheint am","Preis","Kategorien","Aktion"],content:t.map((function(e){return[r.a.createElement(D.a.Cell,null,e.name),r.a.createElement(D.a.Cell,null,new Date(Date.parse(e.date)).toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),r.a.createElement(D.a.Cell,null,(t=e.prices[0].price,parseFloat(t+"").toFixed(2).replace(".",","))," \u20ac"),r.a.createElement(D.a.Cell,{collapsing:!0},e.types.map((function(e){return r.a.createElement("img",{style:{height:"15px"},alt:e.name,src:e.icon_url})}))),r.a.createElement(D.a.Cell,{collapsing:!0},r.a.createElement("div",null,r.a.createElement(S.a,{as:c.b,to:"/meals/".concat(e.id),icon:!0,primary:!0},r.a.createElement(N.a,{name:"edit"}),"Bearbeiten"),r.a.createElement(S.a,{as:S.a,onClick:function(){return o(e)},icon:!0,negative:!0},r.a.createElement(N.a,{name:"trash"}),"L\xf6schen")))];var t}))}),u&&r.a.createElement(_,{updateReadyData:u,update:function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t.id,I(y.BACKEND_URL+"/canteenUsers/meals/"+n);case 2:window.location.reload();case 3:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),setUpdateReady:o,header:"Gericht l\xf6schen",text:'Sind Sie sicher, dass sie "'.concat(u.name,'" l\xf6schen wollen?'),icon:"trash"}),t&&0===t.length&&r.a.createElement("p",null,"Sie haben noch keine Gerichte eingetragen."," ",r.a.createElement(c.b,{to:"/meals/create"},"Jetzt loslegen."))):null}function L(e){return R.apply(this,arguments)}function R(){return(R=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=B(),e.next=4,w.a.get(t,{headers:n});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function M(){return L(y.BACKEND_URL+"/canteenUsers/meals")}function F(){var e=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,console.log(t),r(t[0].meals);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),[n]}(),t=Object(i.a)(e,1)[0];return r.a.createElement(A,{meals:t})}function z(){return function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(i.a)(n,2),c=r[0],l=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;l(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("authToken")}function G(){var e=z();return Object(i.a)(e,1)[0]?r.a.createElement(F,null):r.a.createElement(C,null)}var J=n(338),T=n(96),W=n(147),P=n.n(W);n(237);function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}var V=n(195),Y=n.n(V);function $(e){var t=e.meal,n=e.setMeal,c=Object(a.useState)(t),l=Object(i.a)(c,2),u=l[0],o=l[1];if(Object(a.useEffect)((function(){o(t)}),[t]),!u)return null;var s=function(){var e=parseFloat((u.price+"").replace(",",".")).toString();isNaN(e)&&(e=""),o(Object(d.a)({},u,{price:e})),n(Object(d.a)({},u,{price:e}))},m=function(e){var n=e.target,a=n.name,r=n.value;o(Object(d.a)({},t,Object(f.a)({},a,r)))};return r.a.createElement(E.a,null,r.a.createElement(E.a.Input,{value:u.name,label:"Gericht",name:"name",placeholder:"Unter welchem Namen soll Ihr Gericht erscheinen?",onChange:m,onBlur:s}),r.a.createElement(E.a.Field,null,r.a.createElement("label",null,"Preis"),r.a.createElement(J.a,{value:u.price,name:"price",placeholder:"Welchen Preis hat Ihr Gericht?",onChange:m,onBlur:s,icon:"euro"})),r.a.createElement(E.a.Field,null,r.a.createElement("label",null,"Datum"),r.a.createElement(E.a.Input,{value:new Date(Date.parse(u.date)),selected:new Date(Date.parse(u.date)),label:"Datum",locale:"de",dateFormat:"dd/MM/yyyy",as:P.a,name:"date",onChange:function(e){o(Object(d.a)({},u,{date:H(e)})),n(Object(d.a)({},u,{date:H(e)}))},icon:"euro sign"}),r.a.createElement(T.a,{pointing:"left",color:"blue"},"An diesem Datum erscheint das Gericht.")))}function q(e,t){var n=B();return w.a.post(e,t,{headers:n})}Object(W.registerLocale)("de",Y.a);var Q=y.BACKEND_URL+"/canteenUsers/meals";function X(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(Q,t);case 3:return n=e.sent,e.abrupt("return",n.data.meal);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ee(e){return L(y.BACKEND_URL+"/canteenUsers/canteen")}function te(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1];function c(){return(c=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:t=e.sent,console.log(t.canteen),r(t.canteen);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]),[n]}var ne=n(339);function ae(e){return re.apply(this,arguments)}function re(){return(re=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.BACKEND_URL+"/canteenUsers/meals/"+t+"/types",e.prev=1,e.next=4,L(n);case 4:return a=e.sent,console.log(a),e.abrupt("return",a.mealHasMealTypes);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function ce(e,t){return le.apply(this,arguments)}function le(){return(le=Object(p.a)(m.a.mark((function e(t,n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=y.BACKEND_URL+"/canteenUsers/meals/"+t+"/types",e.prev=1,console.log(n),e.next=5,q(a,n);case 5:return r=e.sent,c=r.data.mealMealHasMealType,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function ue(e,t,n){return I(y.BACKEND_URL+"/canteenUsers/meals/"+e+"/types/"+t,{code:n})}var ie={2:"Fisch",1:"Fleisch",3:"Vegetarisch",4:"Vegan"};function oe(e){var t=e.mealId,n=Object(a.useState)(0),c=Object(i.a)(n,2),l=c[0],u=c[1],o=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];function l(){return u.apply(this,arguments)}function u(){return(u=Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(e,n);case 2:return t.next=4,l();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(e,n);case 2:return t.next=4,l();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l()}),[]),[r,function(e){return o.apply(this,arguments)},function(e){return s.apply(this,arguments)}]}(t),s=Object(i.a)(o,3),f=s[0],d=s[1],E=s[2];return r.a.createElement("div",null,r.a.createElement(v.a,null,"Kategorien"),r.a.createElement(U,{columnNames:["Name","Bild",""],content:f.map((function(e){return[r.a.createElement(D.a.Cell,null,ie[e.meal_type_id]),r.a.createElement(D.a.Cell,null,r.a.createElement("img",{alt:ie[e.meal_type_id]+" image",src:e.icon_url,style:{width:"16px"}})),r.a.createElement(D.a.Cell,{collapsing:!0},r.a.createElement(S.a,{icon:"trash",negative:!0,onClick:function(){return E(e.id)}}))]}))}),f&&0===f.length&&r.a.createElement(b.a,{warning:!0},"Diesem Gericht wurde noch keine Kategorie hinzugef\xfcgt. Es braucht mindestens eine Kategorie, um im Lunchletter angezeigt zu werden."," "),r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(v.a,{size:"small"},"Kategorien hinzuf\xfcgen"),r.a.createElement(ne.a,{placeholder:"W\xe4hlen Sie eine Kategorie aus. ",fluid:!0,search:!0,selection:!0,value:l,onChange:function(e,t){var n=t.value;return u(n)},label:"Canteen",options:[{key:1,value:1,text:"Fleisch"},{key:2,value:2,text:"Fisch"},{key:3,value:3,text:"Vegetarisch"},{key:4,value:4,text:"Vegan"}]}),r.a.createElement("br",null),r.a.createElement(S.a,{positive:!0,content:"Kategorie hinzuf\xfcgen",onClick:function(){return d({meal_id:t,meal_type_id:l})}}))))}function se(){var e=Object(l.f)(),t=Object(a.useState)({name:"",date:H(),price:""}),n=Object(i.a)(t,2),c=n[0],u=n[1],s=te(),f=Object(i.a)(s,1)[0],h=Object(a.useState)(),E=Object(i.a)(h,2),g=E[0],w=E[1],y=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(Object(d.a)({},c,{canteen_id:f.id}));case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(o,null," ",r.a.createElement(v.a,{size:"large"},g?'"'.concat(g.name,'" Kategorien hinzuf\xfcgen'):"Neues Gericht anlegen"),!g&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{info:!0},'Tragen Sie den Namen und Preis des Gerichtes ein. W\xe4hlen Sie das Datum aus an dem das Gericht erscheinen soll und klicken Sie anschlie\xdfend auf "Erstellen".'),r.a.createElement($,{meal:c,setMeal:u}),r.a.createElement("br",null),r.a.createElement(S.a,{icon:"send",positive:!0,onClick:y},"Weiter"),r.a.createElement(S.a,{icon:"send",negative:!0,basic:!0,onClick:function(){e.push("/")}},"Abbrechen")),g&&r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,{mealId:g.id}),r.a.createElement("br",null),r.a.createElement(S.a,{positive:!0,onClick:function(){return e.push("/")}},"Fertig")))}function me(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.BACKEND_URL+"/canteenUsers/meals/"+t,e.prev=1,e.next=4,L(n);case 4:return a=e.sent,e.abrupt("return",a.meal);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function fe(e){return function(e,t){var n=B();return w.a.put(e,t,{headers:n})}(y.BACKEND_URL+"/canteenUsers/meals/"+e.id,e)}function de(){var e=Object(l.g)().mealId,t=function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1];function l(){return u.apply(this,arguments)}function u(){return(u=Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(t);case 2:return e.next=4,l();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l()}),[]),[r,function(e){return o.apply(this,arguments)}]}(e),n=Object(i.a)(t,2),c=n[0],u=n[1];return r.a.createElement(o,null,r.a.createElement(v.a,{size:"large"},"Gericht bearbeiten"),r.a.createElement($,{meal:c,setMeal:u}),r.a.createElement("br",null),r.a.createElement(oe,{mealId:e}))}n(323);function he(e){var t=e.children,n=Object(l.f)(),a=z(),u=Object(i.a)(a,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"sf-canteen-user-topbar"},r.a.createElement(c.b,{to:"/",color:"white"},r.a.createElement("div",{className:"sf-canteen-user-topbar-left"},r.a.createElement("img",{src:"https://studierendenfutter.de/wp-content/uploads/2021/02/Header-Desktop-s.png",alt:"Kochm\xfctze \xfcber gekreuzten Messer und Gabel",className:"sf-canteen-user-topbar-img"}))),u?r.a.createElement("div",null,r.a.createElement(S.a,{inverted:!0,color:"white",onClick:function(){return n.push("/")}},"\xdcbersicht"),r.a.createElement(S.a,{inverted:!0,color:"red",onClick:function(){window.localStorage.removeItem("authToken"),n.push("/"),window.location.reload()}},"Ausloggen")):r.a.createElement("div",null)),r.a.createElement("div",{className:"sf-canteen-user-content"},t))}n(324);var Ee=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(he,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(G,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/create"},r.a.createElement(se,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/:mealId"},r.a.createElement(de,null))))))},ve=document.getElementById("root");ve.hasChildNodes()?Object(u.hydrate)(r.a.createElement(Ee,null),ve):Object(u.render)(r.a.createElement(Ee,null),ve),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[207,1,2]]]);
//# sourceMappingURL=main.33e4ef64.chunk.js.map