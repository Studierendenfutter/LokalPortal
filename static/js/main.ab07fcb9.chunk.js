(this["webpackJsonpstudierendenfutter-frontend"]=this["webpackJsonpstudierendenfutter-frontend"]||[]).push([[0],{223:function(e,t,n){e.exports=n(347)},225:function(e,t,n){},252:function(e,t,n){},254:function(e,t,n){},339:function(e,t,n){},340:function(e,t,n){},341:function(e,t,n){},342:function(e,t,n){},343:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(225),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(81),l=n(16),u=n(42),s=n(9);function i(e){var t=e.children;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",{style:{maxWidth:"500px",width:"100%"}},t))}var o=n(5),p=n.n(o),m=n(11),f=n(74),d=n(17),h=n(367),b=n(371),E=n(44),v=n.n(E),g={BACKEND_URL:"https://api.studierendenfutter.de"},w=g,y=w.BACKEND_URL+"/canteenUsers/login";function O(e){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post(y,t);case 3:n=e.sent,window.localStorage.setItem("authToken",JSON.stringify({token:n.data.token})),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(){var e=Object(a.useState)({password:"",email:""}),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),i=u[0],o=u[1],E=function(e){var t=e.target,a=t.value,r=t.name;c(Object(d.a)(Object(d.a)({},n),{},Object(f.a)({},r,a)))},v=function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n);case 2:e.sent?(o(!0),setTimeout((function(){return o(!1)}),5e3)):window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(h.a,{onSubmit:v},r.a.createElement("h2",null,"Login"),r.a.createElement("p",null,"Geben Sie Ihre E-Mail und Ihr Passwort an."),i&&r.a.createElement(b.a,{negative:!0},"Bitte versuche Sie eine andere E-Mail oder ein anderes Passwort."),r.a.createElement(h.a.Input,{label:"E-Mail",type:"text",placeholder:"Ihre E-Mail-Adresse",value:n.email,name:"email",onChange:E}),r.a.createElement(h.a.Input,{label:"Passwort",type:"password",placeholder:"Ihr Passwort",value:n.password,name:"password",onChange:E}),r.a.createElement(h.a.Button,{fluid:!0,type:"submit",positive:!0},"Login")),r.a.createElement(b.a,null," ","K\xf6nnen wir Ihnen weiterhelfen? Einfach eine E-Mail an"," ",r.a.createElement("a",{href:"mailto:moin@studierendenfutter.de"},"moin@studierendenfutter.de")," ","schicken."," "))}n(252);function k(){return r.a.createElement("div",{className:"sf-canteen-user-login-page"},r.a.createElement(i,null,r.a.createElement(x,null)))}var N=n(368),_=n(373);function C(e){var t=e.columnNames,n=void 0===t?[]:t,a=e.content,c=void 0===a?[]:a;return r.a.createElement(N.a,{celled:!0},r.a.createElement(N.a.Header,null,r.a.createElement(N.a.Row,null,n.map((function(e){return r.a.createElement(N.a.HeaderCell,{key:e},e)})))),r.a.createElement(N.a.Body,null,c.map((function(e){return r.a.createElement(N.a.Row,{key:e[0]},e.map((function(e){return e})))}))))}function S(){return{authorization:"Bearer "+JSON.parse(window.localStorage.getItem("authToken")).token}}function D(e,t){var n=S();return v.a.delete(e,{data:t,headers:n})}var B=n(369),M=n(374),U=n(94);function L(e){var t=e.updateReadyData,n=e.setUpdateReady,a=e.update,c=e.header,l=e.text,u=e.icon,s=void 0===u?"pencil alternate":u;return r.a.createElement(B.a,{open:!!t,onClose:function(){return n()},basic:!0},r.a.createElement(M.a,{icon:!0},r.a.createElement(U.a,{name:s}),c),r.a.createElement(B.a.Content,null,r.a.createElement("p",{style:{textAlign:"center"}},l)),r.a.createElement(B.a.Actions,null,r.a.createElement(_.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return n()}},r.a.createElement(U.a,{name:"remove"})," Nein"),r.a.createElement(_.a,{color:"green",inverted:!0,onClick:function(){a(t),n()}},r.a.createElement(U.a,{name:"checkmark"})," Ja")))}function R(e){return parseFloat(e+"").toFixed(2).replace(".",",")}function A(e){return e.toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function K(e){var t=e.meals,n=e.past,l=void 0!==n&&n,u=Object(a.useState)(),i=Object(s.a)(u,2),o=i[0],f=i[1];return t?r.a.createElement("div",null,r.a.createElement(C,{columnNames:["Gericht",l?"Erschien am":"Erscheint am","Preise","Kategorien","Aktion"],content:t.map((function(e){return[r.a.createElement(N.a.Cell,null,e.name),r.a.createElement(N.a.Cell,null,A(new Date(Date.parse(e.date)))),r.a.createElement(N.a.Cell,null,r.a.createElement("nobr",null,"- Studierende: ",R(e.prices[0].price)," \u20ac"),r.a.createElement("br",null),r.a.createElement("nobr",null,"- Besch\xe4ftigte: ",R(e.prices[1].price)," \u20ac"),r.a.createElement("br",null),r.a.createElement("nobr",null,"- Sonstige: ",R(e.prices[3].price)," \u20ac"),r.a.createElement("br",null)),r.a.createElement(N.a.Cell,{collapsing:!0},e.types.map((function(e){return r.a.createElement("img",{style:{height:"15px"},alt:e.name,src:e.icon_url})}))),r.a.createElement(N.a.Cell,null,r.a.createElement("div",null,r.a.createElement(_.a,{as:c.b,to:"/meals/".concat(e.id),icon:"pencil",primary:!0,content:"Bearbeiten"}),r.a.createElement(_.a,{as:_.a,onClick:function(){return f(e)},icon:"trash alternate outline",negative:!0,content:"L\xf6schen"})))]}))}),o&&r.a.createElement(L,{updateReadyData:o,update:function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t.id,D(w.BACKEND_URL+"/canteenUsers/meals/"+n);case 2:window.location.reload();case 3:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),setUpdateReady:f,header:"Gericht l\xf6schen",text:'Sind Sie sicher, dass Sie "'.concat(o.name,'" l\xf6schen wollen?'),icon:"trash"}),t&&0===t.length&&r.a.createElement("p",null,"Sie haben noch keine Gerichte eingetragen."),r.a.createElement(_.a,{icon:"add",as:c.b,to:"/meals/create",primary:!0,content:"Gericht hinzuf\xfcgen"})):null}function G(e){return I.apply(this,arguments)}function I(){return(I=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=S(),e.next=4,v.a.get(t,{headers:n});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function P(){return G(w.BACKEND_URL+"/canteenUsers/meals")}function T(e){var t=e.filter,n=e.past,c=void 0!==n&&n,l=e.present,u=void 0!==l&&l,i=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:if((t=e.sent)&&t[0]){e.next=6;break}return r([]),e.abrupt("return");case 6:r(t[0].meals);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),[n]}(),o=Object(s.a)(i,1)[0];return o&&t&&(o=o.filter(t)),r.a.createElement(K,{meals:o,past:c,present:u})}function F(){return function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(s.a)(n,2),c=r[0],l=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;l(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("authToken")}n(254);function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}function z(){var e=F();return Object(s.a)(e,1)[0]?r.a.createElement("div",{className:"sf-canteen-user-page"},r.a.createElement("h1",null,"Meine Gerichte heute im Lunchletter"),r.a.createElement("p",{className:"sf-canteen-user-page-date"},(new Date).toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),r.a.createElement(T,{filter:function(e){return e.date===H(new Date)}})):r.a.createElement(k,null)}var J=n(100),V=n(372),W=n(153),q=n.n(W),Y=(n(255),n(209)),Z=n.n(Y);function $(e){var t=e.meal,n=e.setMeal,c=Object(a.useState)(t),l=Object(s.a)(c,2),u=l[0],i=l[1];if(Object(a.useEffect)((function(){i(t)}),[t]),!u)return null;return r.a.createElement(h.a,null,r.a.createElement(h.a.Input,{value:u.name,label:"Gericht",name:"name",placeholder:"Unter welchem Namen soll Ihr Gericht erscheinen?",onChange:function(e){var n=e.target,a=n.name,r=n.value;i(Object(d.a)(Object(d.a)({},t),{},Object(f.a)({},a,r)))},onBlur:function(){i(Object(d.a)({},u)),n(Object(d.a)({},u))}}),r.a.createElement(h.a.Field,null,r.a.createElement("label",null,"Erscheint am"),r.a.createElement(h.a.Input,{value:new Date(Date.parse(u.date)),selected:new Date(Date.parse(u.date)),label:"Datum",locale:"de",dateFormat:"dd/MM/yyyy",as:q.a,name:"date",onChange:function(e){i(Object(d.a)(Object(d.a)({},u),{},{date:H(e)})),n(Object(d.a)(Object(d.a)({},u),{},{date:H(e)}))},icon:"euro sign"})))}function Q(e,t){var n=S();return v.a.post(e,t,{headers:n})}Object(W.registerLocale)("de",Z.a);var X=w.BACKEND_URL+"/canteenUsers/meals";function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q(X,t);case 3:return n=e.sent,e.abrupt("return",n.data.meal);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ne(e,t){return ae.apply(this,arguments)}function ae(){return(ae=Object(m.a)(p.a.mark((function e(t,n){var a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.BACKEND_URL+"/canteenUsers/meals/"+t+"/prices",e.prev=1,e.next=4,Q(a,n);case 4:return r=e.sent,c=r.data.userCategoryMealPrice,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function re(e,t){return ce.apply(this,arguments)}function ce(){return(ce=Object(m.a)(p.a.mark((function e(t,n){var a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.BACKEND_URL+"/canteenUsers/meals/"+t+"/types",e.prev=1,e.next=4,Q(a,n);case 4:return r=e.sent,c=r.data.mealMealHasMealType,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function le(e){return G(w.BACKEND_URL+"/canteenUsers/canteen")}function ue(e,t){var n=S();return v.a.put(e,t,{headers:n})}function se(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.BACKEND_URL+"/canteenUsers/canteen",e.next=3,ue(n,t);case 3:return a=e.sent,e.abrupt("return",a.data.token);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1];function c(){return l.apply(this,arguments)}function l(){return(l=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,console.log(t.canteen),r(t.canteen);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(t);case 2:return e.next=4,c();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){c()}),[]),[n,function(e){return u.apply(this,arguments)}]}var pe=n(366),me=(n(339),{2:"Fisch",1:"Fleisch",3:"Vegetarisch",4:"Vegan"}),fe={1:["https://studierendenfutter.de/wp-content/uploads/2020/09/Cow-checked.png","https://studierendenfutter.de/wp-content/uploads/2020/09/Cow-crossed.png"],2:["https://studierendenfutter.de/wp-content/uploads/2020/09/Fish-checked.png","https://studierendenfutter.de/wp-content/uploads/2020/09/Fish-crossed.png"],3:["https://studierendenfutter.de/wp-content/uploads/2020/09/Vegeterian-checked.png","https://studierendenfutter.de/wp-content/uploads/2020/09/Vegeterian-crossed.png"],4:["https://studierendenfutter.de/wp-content/uploads/2020/09/Vegan-checked.png","https://studierendenfutter.de/wp-content/uploads/2020/09/Vegan-crossed.png"]},de=[1,2,3,4];function he(e){var t=e.mealHasMealTypes,n=e.createMealHasMealType,a=e.deleteMealHasMealType;return r.a.createElement("div",null,r.a.createElement(M.a,null,"Kategorien"),t&&0===t.length&&r.a.createElement(b.a,{warning:!0},"Diesem Gericht wurde noch keine Kategorie hinzugef\xfcgt. Es braucht mindestens eine Kategorie, um im Lunchletter angezeigt zu werden."," "),de.map((function(e){var c=t.reduce((function(t,n){return t||n===e}),!1);return r.a.createElement(pe.a,{content:me[e],inverted:!0,basic:!0,position:"right center",trigger:r.a.createElement("button",{className:"sf-canteen-user-category-button",onClick:function(){return c?a(e):n(e)}},r.a.createElement("img",{src:c?fe[e][0]:fe[e][1],alt:me[e],height:"50"}))})})))}n(340),n(341);var be={1:"f\xfcr Studenten",2:"f\xfcr Besch\xe4ftigte",4:"f\xfcr Sonstige"};function Ee(e){if(void 0!==e){var t=parseFloat((e+"").replace(",","."));if(!isNaN(t))return t.toFixed(2)}}function ve(e){var t=e.mealPrices,n=e.setMealPrices,c=Object(a.useState)(t),l=Object(s.a)(c,2),u=l[0],i=l[1];if(Object(a.useEffect)((function(){i(t)}),[t]),!u||4!==u.length)return"";var o=function(){var e=Object(J.a)(u);for(var a in e)e[a]=Object(d.a)(Object(d.a)({},t[a]),{},{price:Ee(e[a].price)});var r=e.find((function(e){return void 0!==e.price}));if(r)for(var c in e)void 0===e[c].price&&(e[c]=Object(d.a)(Object(d.a)({},t[c]),{},{price:r.price}));n(e)};return r.a.createElement(h.a,null,r.a.createElement(M.a,null,"Preis"),r.a.createElement(b.a,{warning:!0,visible:!(u[0].price||u[1].price||u[3].price)},"Diesem Gericht wurde noch kein Preis hinzugef\xfcgt."),r.a.createElement(h.a.Group,{widths:"equal"},u.sort((function(e,t){return e.user_category_id>t.user_category_id})).map((function(e,t){return 3!==e.user_category_id?r.a.createElement(h.a.Input,{key:e.user_category_id,className:"sf-canteen-user-price-input",value:void 0!==e.price?e.price:u[0].price||u[1].price||u[3].price||"",label:be[e.user_category_id],name:"price",onChange:function(e){var n=e.target.value;""===n&&(n="0.00");var a=Object(J.a)(u);a[t]=Object(d.a)(Object(d.a)({},a[t]),{},{price:n}),i(a)},onBlur:o,icon:"euro"}):""}))))}function ge(){var e=Object(l.f)(),t=Object(a.useState)({name:"",date:H()}),n=Object(s.a)(t,2),c=n[0],u=n[1],i=Object(a.useState)([{user_category_id:1},{user_category_id:2},{user_category_id:3},{user_category_id:4}]),o=Object(s.a)(i,2),f=o[0],h=o[1],b=Object(a.useState)(0),E=Object(s.a)(b,2),v=E[0],g=E[1],w=oe(),y=Object(s.a)(w,1)[0],O=Object(a.useState)([]),j=Object(s.a)(O,2),x=j[0],k=j[1],N=function(){var t=Object(m.a)(p.a.mark((function t(){var n,a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee(Object(d.a)(Object(d.a)({},c),{},{canteen_id:y.id}));case 2:n=t.sent,t.t0=p.a.keys(x);case 4:if((t.t1=t.t0()).done){t.next=10;break}return a=t.t1.value,t.next=8,re(n.id,{meal_type_id:x[a]});case 8:t.next=4;break;case 10:t.t2=p.a.keys(f);case 11:if((t.t3=t.t2()).done){t.next=17;break}return r=t.t3.value,t.next=15,ne(n.id,f[r]);case 15:t.next=11;break;case 17:e.push("/");case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=f[0].price&&x.length>0;return r.a.createElement("div",{className:"sf-canteen-user-create-meal-page"},r.a.createElement("h1",null,"Meine Gerichte heute im Lunchletter"),r.a.createElement("p",{className:"sf-canteen-user-page-date"},A(new Date)),r.a.createElement(V.a.Group,{widths:3},r.a.createElement(V.a,{active:0===v,link:!0,onClick:function(){return g(0)},className:"done"},r.a.createElement(U.a,{name:"food",color:"green"}),r.a.createElement(V.a.Content,null,r.a.createElement(V.a.Title,null,"Gericht erstellen"))),r.a.createElement(V.a,{active:1===v,disabled:v<1,link:!0,className:v>0?"done":""},r.a.createElement(U.a,{name:"info",color:v<1?"grey":"green"}),r.a.createElement(V.a.Content,null,r.a.createElement(V.a.Title,null,"Best\xe4tigen")))),0===v&&r.a.createElement(r.a.Fragment,null,r.a.createElement($,{meal:c,setMeal:u}),r.a.createElement("br",null),r.a.createElement(ve,{mealPrices:f,setMealPrices:h}),r.a.createElement("br",null),r.a.createElement(he,{mealHasMealTypes:x,deleteMealHasMealType:function(e){return k(x.filter((function(t){return t!==e})))},createMealHasMealType:function(e){return k([].concat(Object(J.a)(x),[e]))}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_.a,{negative:!0,style:{marginRight:"20px"},onClick:function(){e.push("/")}},"Abbrechen"),r.a.createElement(_.a,{positive:!0,onClick:function(){return g(1)},disabled:!C},"Weiter")),1===v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Stimmt alles?"),r.a.createElement("p",null,c.name),r.a.createElement("p",null,"Erscheint am ",A(new Date(c.date))),r.a.createElement("p",null,"Preise:",r.a.createElement("br",null),"- Studierende: ",f[0].price," \u20ac",r.a.createElement("br",null),"- Besch\xe4ftigte: ",f[1].price," \u20ac",r.a.createElement("br",null),"- Sonstige: ",f[3].price," \u20ac"),r.a.createElement("p",null,"Kategorien:"),de.map((function(e){var t=x.reduce((function(t,n){return t||n===e}),!1);return r.a.createElement("img",{key:e,src:t?fe[e][0]:fe[e][1],alt:me[e],height:"50"})})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_.a,{negative:!0,style:{marginRight:"20px"},onClick:function(){g(0)}},"Zur\xfcck"),r.a.createElement(_.a,{positive:!0,onClick:function(){return N()}},"Anlegen")))}function we(e){return ye.apply(this,arguments)}function ye(){return(ye=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.BACKEND_URL+"/canteenUsers/meals/"+t,e.prev=1,e.next=4,G(n);case 4:return a=e.sent,e.abrupt("return",a.meal);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Oe(e){return ue(w.BACKEND_URL+"/canteenUsers/meals/"+e.id,e)}function je(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.BACKEND_URL+"/canteenUsers/meals/"+t+"/types",e.prev=1,e.next=4,G(n);case 4:return a=e.sent,e.abrupt("return",a.mealHasMealTypes);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function ke(e,t){return D(w.BACKEND_URL+"/canteenUsers/meals/"+e+"/types/"+t)}function Ne(e){return _e.apply(this,arguments)}function _e(){return(_e=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.BACKEND_URL+"/canteenUsers/meals/"+t+"/prices",e.prev=1,e.next=4,G(n);case 4:return a=e.sent,e.abrupt("return",a.mealPrices);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Ce(e,t){return D(w.BACKEND_URL+"/canteenUsers/meals/"+e+"/prices/"+t)}n(342);function Se(){var e=Object(l.h)().mealId,t=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1];function l(){return u.apply(this,arguments)}function u(){return(u=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,we(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe(t);case 2:return e.next=4,l();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l()}),[]),[r,function(e){return i.apply(this,arguments)}]}(e),n=Object(s.a)(t,2),c=n[0],u=n[1],i=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],c=n[1];function l(){return u.apply(this,arguments)}function u(){return(u=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,je(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re(e,{meal_type_id:n});case 2:return t.next=4,l();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ke(e,n);case 2:return t.next=4,l();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l()}),[]),[r,function(e){return i.apply(this,arguments)},function(e){return o.apply(this,arguments)}]}(e),o=Object(s.a)(i,3),f=o[0],d=o[1],h=o[2],b=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],c=n[1];function l(){return u.apply(this,arguments)}function u(){return(u=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ne(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(e,n);case 2:return t.next=4,l();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ce(e,n);case 2:return t.next=4,l();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l()}),[]),[r,function(e){return i.apply(this,arguments)},function(e){return o.apply(this,arguments)}]}(e),E=Object(s.a)(b,3),v=E[0],g=E[1],w=E[2],y=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.id);case 2:return console.log(t),e.next=5,g({price:t.price,user_category_id:t.user_category_id});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"sf-canteen-user-patch-meal-page"},r.a.createElement("h1",{size:"large"},"Gericht bearbeiten"),r.a.createElement("p",{className:"sf-canteen-user-page-date"},A(new Date)),r.a.createElement($,{meal:c,setMeal:u}),r.a.createElement("br",null),r.a.createElement(ve,{mealPrices:v,setMealPrices:y}),r.a.createElement("br",null),r.a.createElement(he,{mealHasMealTypes:f.map((function(e){return e.meal_type_id})),createMealHasMealType:d,deleteMealHasMealType:function(e){return h(f.find((function(t){return t.meal_type_id===e})).id)}}))}n(343);function De(e){var t=e.children,n=Object(l.f)(),a=F(),c=Object(s.a)(a,1)[0],u=Object(l.g)(),i="undefined"!==typeof c;return r.a.createElement("div",{className:"".concat(i?"sf-canteen-user-topbar-logged-in":"sf-canteen-user-topbar-logged-out")},r.a.createElement("div",{className:"sf-canteen-user-topbar"},i?r.a.createElement("div",{className:"sf-canteen-user-topbar-buttons"},r.a.createElement(pe.a,{content:"Start",inverted:!0,basic:!0,position:"right center",trigger:r.a.createElement(_.a,{circular:!0,size:"big",icon:"home",onClick:function(){return n.push("/")},className:"/"===u.pathname?"sf-canteen-user-topbar-button-active":"sf-canteen-user-topbar-button"})}),r.a.createElement(pe.a,{content:"Gerichte",inverted:!0,basic:!0,position:"right center",trigger:r.a.createElement(_.a,{circular:!0,size:"big",icon:"list",onClick:function(){return n.push("/meals")},className:"/meals"===u.pathname?"sf-canteen-user-topbar-button-active":"sf-canteen-user-topbar-button"})}),r.a.createElement(pe.a,{content:"Gericht anlegen",inverted:!0,basic:!0,position:"right center",trigger:r.a.createElement(_.a,{circular:!0,size:"big",icon:"plus",onClick:function(){return n.push("/meals/create")},className:"/meals/create"===u.pathname?"sf-canteen-user-topbar-button-active":"sf-canteen-user-topbar-button"})}),r.a.createElement(pe.a,{content:"Einstellungen",inverted:!0,basic:!0,position:"right center",trigger:r.a.createElement(_.a,{circular:!0,size:"big",icon:"setting",onClick:function(){return n.push("/settings")},className:"/settings"===u.pathname?"sf-canteen-user-topbar-button-active":"sf-canteen-user-topbar-button"})})):r.a.createElement("div",{className:"sf-canteen-user-topbar-img"})),r.a.createElement("div",{className:"sf-canteen-user-content"},r.a.createElement("div",{className:"sf-canteen-user-top-area"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://studierendenfutter.de/wp-content/uploads/2021/05/Logo-mein-Studierendenfutter-DUNKEL-transparent-Large.png",height:"70",alt:"Mein Studierendenfutter"})),i?r.a.createElement("div",null,r.a.createElement(_.a,{inverted:!0,color:"red",onClick:function(){window.localStorage.removeItem("authToken"),n.push("/"),window.location.reload()}},"Ausloggen")):r.a.createElement("div",null)),t))}n(344);function Be(){var e=F(),t=Object(s.a)(e,1)[0],n=Object(a.useState)("today"),c=Object(s.a)(n,2),l=c[0],u=c[1];return t?r.a.createElement("div",{className:"sf-canteen-user-page"},r.a.createElement("h1",null,"Alle Gerichte"),r.a.createElement("p",{className:"sf-canteen-user-meals-date"},(new Date).toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),r.a.createElement("div",{class:"sf-canteen-user-tabs"},r.a.createElement("button",{className:"today"===l?"sf-canteen-user-tab-active":"",onClick:function(){return u("today")}},"Heutige Gerichte"),r.a.createElement("button",{className:"planned"===l?"sf-canteen-user-tab-active":"",onClick:function(){return u("planned")}},"Geplante Gerichte"),r.a.createElement("button",{className:"past"===l?"sf-canteen-user-tab-active":"",onClick:function(){return u("past")}},"Vergangene Gerichte")),"today"===l&&r.a.createElement(T,{filter:function(e){return e.date===H(new Date)}}),"planned"===l&&r.a.createElement(T,{filter:function(e){return new Date(e.date)>new Date}}),"past"===l&&r.a.createElement(T,{filter:function(e){return new Date(e.date)<new Date},past:!0})):r.a.createElement(k,null)}var Me=n(365);function Ue(){return G(w.BACKEND_URL+"/canteenUsers")}function Le(e){return Re.apply(this,arguments)}function Re(){return(Re=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.BACKEND_URL+"/canteenUsers",e.next=3,ue(n,t);case 3:return a=e.sent,e.abrupt("return",a.data.token);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ae(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1],c=F(),l=Object(s.a)(c,2)[1];function u(){return(u=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue();case 2:t=e.sent,r(t.canteenUser);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Le(t);case 2:return n=e.sent,e.next=5,l({token:n});case 5:window.location.reload();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),[n,function(e){return i.apply(this,arguments)}]}n(345);var Ke=function(){var e=oe(),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Ae(),u=Object(s.a)(l,2),i=u[0],o=u[1],p=Object(a.useState)(),m=Object(s.a)(p,2),f=m[0],d=m[1],E=Object(a.useState)(),v=Object(s.a)(E,2),g=v[0],w=v[1],y=Object(a.useState)(),O=Object(s.a)(y,2),j=O[0],x=O[1],k=Object(a.useState)(!0),N=Object(s.a)(k,2),C=N[0],S=N[1];return Object(a.useEffect)((function(){d(i.email)}),[i]),r.a.createElement("div",{className:"sf-canteen-user-settings-page"},r.a.createElement("div",null,r.a.createElement("h1",null,"Restaurantdaten"),n&&r.a.createElement("table",{className:"sf-canteen-user-settings-table"},r.a.createElement("tr",null,r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-label"},r.a.createElement("b",null,"Restaurant")),r.a.createElement("td",null,n.name),r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-explanation"},"So erscheint das Restaurant im Lunchletter")),r.a.createElement("tr",null,r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-label"},r.a.createElement("b",null,"Hinterlegte Website")),r.a.createElement("td",null,n.link),r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-explanation"},'Diese Seite ist als URL hinter dem "Location-Link" im Lunchletter hinterlegt')),r.a.createElement("tr",null,r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-label"},r.a.createElement("b",null,"Bestellen Button anzeigen?")),r.a.createElement("td",null,r.a.createElement(Me.a,{checked:1===n.show_order_url,toggle:!0,onChange:function(){return c({show_order_url:0===(null===n||void 0===n?void 0:n.show_order_url)})}})),r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-explanation"},"Aktiviert im Lunchletter einen Button zum Bestellen der Gerichte.")),r.a.createElement("tr",{style:n.show_order_url?{}:{color:"#BBBBBB"}},r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-label"},r.a.createElement("b",null,"Bestell-Website")),r.a.createElement("td",null,n.order_url),r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-explanation",style:n.show_order_url?{}:{color:"#BBBBBB"}},"Diese Seite ist hinter dem Bestellen Button hinterlegt.")),r.a.createElement("tr",null,r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-label"},r.a.createElement("b",null,"Adresse")),r.a.createElement("td",null,n.address),r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-explanation"})))),r.a.createElement("div",{style:{width:"300px"}},r.a.createElement("h1",null,"Mein Account"),r.a.createElement("h3",null,"E-Mail"),r.a.createElement(h.a,{onSubmit:function(){return o({email:f})}},r.a.createElement(h.a.Field,null,r.a.createElement(h.a.Input,{value:f,onChange:function(e,t){d(t.value)}})),r.a.createElement(_.a,{type:"submit",positive:!0,fluid:!0},"E-Mail Speichern")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{onSubmit:function(){return g===j?o({password:g}):S(!1)}},!C&&r.a.createElement(b.a,null,"Die Passw\xf6rter stimmen nicht \xfcberein."),r.a.createElement("h3",null,"Passwort \xe4ndern"),r.a.createElement(h.a.Field,null,r.a.createElement("label",null,"Neues Passwort"),r.a.createElement(h.a.Input,{value:g,name:"old-password",type:"password",onChange:function(e,t){w(t.value)}})),r.a.createElement(h.a.Field,null,r.a.createElement("label",null,"Neues Passwort best\xe4tigen"),r.a.createElement(h.a.Input,{value:j,name:"new-password",type:"password",onChange:function(e,t){x(t.value)}})),r.a.createElement(_.a,{type:"submit",positive:!0,fluid:!0},"Password speichern"))))},Ge=(n(346),function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(De,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(z,null)),r.a.createElement(l.a,{exact:!0,path:"/meals"},r.a.createElement(Be,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/create"},r.a.createElement(ge,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/:mealId"},r.a.createElement(Se,null)),r.a.createElement(l.a,{exact:!0,path:"/settings"},r.a.createElement(Ke,null))))))}),Ie=document.getElementById("root");Ie.hasChildNodes()?Object(u.hydrate)(r.a.createElement(Ge,null),Ie):Object(u.render)(r.a.createElement(Ge,null),Ie),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[223,1,2]]]);
//# sourceMappingURL=main.ab07fcb9.chunk.js.map