(this["webpackJsonpstudierendenfutter-frontend"]=this["webpackJsonpstudierendenfutter-frontend"]||[]).push([[0],{223:function(e,t,n){e.exports=n(347)},225:function(e,t,n){},252:function(e,t,n){},254:function(e,t,n){},339:function(e,t,n){},340:function(e,t,n){},341:function(e,t,n){},342:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(225),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(82),l=n(16),u=n(43),s=n(10);function i(e){var t=e.children;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",{style:{maxWidth:"500px",width:"100%"}},t))}var o=n(8),m=n.n(o),p=n(14),d=n(75),f=n(27),h=n(367),E=n(371),b=n(45),g=n.n(b),v={BACKEND_URL:"https://api.studierendenfutter.de"},w=v,y=w.BACKEND_URL+"/canteenUsers/login";function O(e){return j.apply(this,arguments)}function j(){return(j=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post(y,t);case 3:n=e.sent,window.localStorage.setItem("authToken",JSON.stringify({token:n.data.token})),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(){var e=Object(a.useState)({password:"",email:""}),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),i=u[0],o=u[1],b=function(e){var t=e.target,a=t.value,r=t.name;c(Object(f.a)(Object(f.a)({},n),{},Object(d.a)({},r,a)))},g=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n);case 2:e.sent?(o(!0),setTimeout((function(){return o(!1)}),5e3)):window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(h.a,{onSubmit:g},r.a.createElement("h2",null,"Login"),r.a.createElement("p",null,"Geben Sie Ihre E-Mail und Ihr Passwort an."),i&&r.a.createElement(E.a,{negative:!0},"Bitte versuche Sie eine andere E-Mail oder ein anderes Password ."),r.a.createElement(h.a.Input,{label:"E-Mail",type:"text",placeholder:"Ihre E-Mail-Adresse",value:n.email,name:"email",onChange:b}),r.a.createElement(h.a.Input,{label:"Password",type:"password",placeholder:"Ihr passwort",value:n.password,name:"password",onChange:b}),r.a.createElement(h.a.Button,{fluid:!0,type:"submit",positive:!0},"Login")),r.a.createElement(E.a,null," ","K\xf6nnen wir Ihnen weiterhelfen? Einfach eine E-Mail an"," ",r.a.createElement("a",{href:"mailto:moin@studierendenfutter.de"},"moin@studierendenfutter.de")," ","schicken."," "))}n(252);function x(){return r.a.createElement("div",{className:"sf-canteen-user-login-page"},r.a.createElement(i,null,r.a.createElement(k,null)))}var N=n(368),S=n(349);function C(e){var t=e.columnNames,n=void 0===t?[]:t,a=e.content,c=void 0===a?[]:a;return r.a.createElement(N.a,{celled:!0},r.a.createElement(N.a.Header,null,r.a.createElement(N.a.Row,null,n.map((function(e){return r.a.createElement(N.a.HeaderCell,{key:e},e)})))),r.a.createElement(N.a.Body,null,c.map((function(e){return r.a.createElement(N.a.Row,{key:e[0]},e.map((function(e){return e})))}))))}function D(){return{authorization:"Bearer "+JSON.parse(window.localStorage.getItem("authToken")).token}}function M(e,t){var n=D();return g.a.delete(e,{data:t,headers:n})}var L=n(369),U=n(373),B=n(73);function A(e){var t=e.updateReadyData,n=e.setUpdateReady,a=e.update,c=e.header,l=e.text,u=e.icon,s=void 0===u?"pencil alternate":u;return r.a.createElement(L.a,{open:!!t,onClose:function(){return n()},basic:!0},r.a.createElement(U.a,{icon:!0},r.a.createElement(B.a,{name:s}),c),r.a.createElement(L.a.Content,null,r.a.createElement("p",{style:{textAlign:"center"}},l)),r.a.createElement(L.a.Actions,null,r.a.createElement(S.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return n()}},r.a.createElement(B.a,{name:"remove"})," Nein"),r.a.createElement(S.a,{color:"green",inverted:!0,onClick:function(){a(t),n()}},r.a.createElement(B.a,{name:"checkmark"})," Ja")))}function G(e){return parseFloat(e+"").toFixed(2).replace(".",",")}function I(e){return e.toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function R(e){var t=e.meals,n=e.past,l=void 0!==n&&n,u=(e.present,Object(a.useState)()),i=Object(s.a)(u,2),o=i[0],d=i[1];return t?r.a.createElement("div",null,r.a.createElement(C,{columnNames:["Gericht",l?"Erschien am":"Erscheint am","Preise","Kategorien","Aktion"],content:t.map((function(e){return[r.a.createElement(N.a.Cell,null,e.name),r.a.createElement(N.a.Cell,null,I(new Date(Date.parse(e.date)))),r.a.createElement(N.a.Cell,null,r.a.createElement("nobr",null,"- Studierende: ",G(e.prices[0].price)," \u20ac"),r.a.createElement("br",null),r.a.createElement("nobr",null,"- Besch\xe4ftigte: ",G(e.prices[0].price)," \u20ac"),r.a.createElement("br",null),r.a.createElement("nobr",null,"- Sonstige: ",G(e.prices[0].price)," \u20ac"),r.a.createElement("br",null)),r.a.createElement(N.a.Cell,{collapsing:!0},e.types.map((function(e){return r.a.createElement("img",{style:{height:"15px"},alt:e.name,src:e.icon_url})}))),r.a.createElement(N.a.Cell,null,r.a.createElement("div",null,r.a.createElement(S.a,{as:c.b,to:"/meals/".concat(e.id),icon:"pencil",primary:!0,content:"Bearbeiten"}),r.a.createElement(S.a,{as:S.a,onClick:function(){return d(e)},icon:"trash alternate outline",negative:!0,content:"L\xf6schen"})))]}))}),o&&r.a.createElement(A,{updateReadyData:o,update:function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t.id,M(w.BACKEND_URL+"/canteenUsers/meals/"+n);case 2:window.location.reload();case 3:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),setUpdateReady:d,header:"Gericht l\xf6schen",text:'Sind Sie sicher, dass Sie "'.concat(o.name,'" l\xf6schen wollen?'),icon:"trash"}),t&&0===t.length&&r.a.createElement("p",null,"Sie haben noch keine Gerichte eingetragen."),r.a.createElement(S.a,{icon:"add",as:c.b,to:"/meals/create",primary:!0,content:"Gericht hinzuf\xfcgen"})):null}function _(e){return K.apply(this,arguments)}function K(){return(K=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=D(),e.next=4,g.a.get(t,{headers:n});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function T(){return _(w.BACKEND_URL+"/canteenUsers/meals")}function F(e){var t=e.filter,n=e.past,c=void 0!==n&&n,l=e.present,u=void 0!==l&&l,i=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,console.log(t),r(t[0].meals);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),[n]}(),o=Object(s.a)(i,1)[0];return o&&t&&(o=o.filter(t)),r.a.createElement(R,{meals:o,past:c,present:u})}function H(){return function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(s.a)(n,2),c=r[0],l=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;l(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("authToken")}n(254);function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}function z(){var e=H();return Object(s.a)(e,1)[0]?r.a.createElement("div",{className:"sf-canteen-user-page"},r.a.createElement("h1",null,"Meine Gerichte heute im Lunchletter"),r.a.createElement("p",{className:"sf-canteen-user-page-date"},(new Date).toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),r.a.createElement(F,{filter:function(e){return e.date===P(new Date)}})):r.a.createElement(x,null)}var W=n(211),J=n(372),V=n(365),Y=n(154),Z=n.n(Y),$=(n(255),n(208)),q=n.n($);function Q(e){var t=e.meal,n=e.setMeal,c=Object(a.useState)(t),l=Object(s.a)(c,2),u=l[0],i=l[1];if(Object(a.useEffect)((function(){i(t)}),[t]),!u)return null;var o=function(){var e=parseFloat((u.price+"").replace(",",".")).toString();isNaN(e)&&(e=""),i(Object(f.a)(Object(f.a)({},u),{},{price:e})),n(Object(f.a)(Object(f.a)({},u),{},{price:e}))},m=function(e){var n=e.target,a=n.name,r=n.value;i(Object(f.a)(Object(f.a)({},t),{},Object(d.a)({},a,r)))};return r.a.createElement(h.a,null,r.a.createElement(h.a.Input,{value:u.name,label:"Gericht",name:"name",placeholder:"Unter welchem Namen soll Ihr Gericht erscheinen?",onChange:m,onBlur:o}),r.a.createElement(h.a.Field,null,r.a.createElement("label",null,"Preis"),r.a.createElement(V.a,{value:u.price,name:"price",placeholder:"Welchen Preis hat Ihr Gericht?",onChange:m,onBlur:o,icon:"euro"})),r.a.createElement(h.a.Field,null,r.a.createElement("label",null,"Erscheint am"),r.a.createElement(h.a.Input,{value:new Date(Date.parse(u.date)),selected:new Date(Date.parse(u.date)),label:"Datum",locale:"de",dateFormat:"dd/MM/yyyy",as:Z.a,name:"date",onChange:function(e){i(Object(f.a)(Object(f.a)({},u),{},{date:P(e)})),n(Object(f.a)(Object(f.a)({},u),{},{date:P(e)}))},icon:"euro sign"})))}function X(e,t){var n=D();return g.a.post(e,t,{headers:n})}Object(Y.registerLocale)("de",q.a);var ee=w.BACKEND_URL+"/canteenUsers/meals";function te(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X(ee,t);case 3:return n=e.sent,e.abrupt("return",n.data.meal);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ae(e,t){return re.apply(this,arguments)}function re(){return(re=Object(p.a)(m.a.mark((function e(t,n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.BACKEND_URL+"/canteenUsers/meals/"+t+"/types",e.prev=1,console.log(n),e.next=5,X(a,n);case 5:return r=e.sent,c=r.data.mealMealHasMealType,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function ce(e){return _(w.BACKEND_URL+"/canteenUsers/canteen")}function le(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1];function c(){return(c=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:t=e.sent,console.log(t.canteen),r(t.canteen);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]),[n]}n(339);var ue={2:"Fisch",1:"Fleisch",3:"Vegetarisch",4:"Vegan"},se={1:["https://studierendenfutter.de/wp-content/uploads/2020/09/Cow-checked.png","https://studierendenfutter.de/wp-content/uploads/2020/09/Cow-crossed.png"],2:["https://studierendenfutter.de/wp-content/uploads/2020/09/Fish-checked.png","https://studierendenfutter.de/wp-content/uploads/2020/09/Fish-crossed.png"],3:["https://studierendenfutter.de/wp-content/uploads/2020/09/Vegeterian-checked.png","https://studierendenfutter.de/wp-content/uploads/2020/09/Vegeterian-crossed.png"],4:["https://studierendenfutter.de/wp-content/uploads/2020/09/Vegan-checked.png","https://studierendenfutter.de/wp-content/uploads/2020/09/Vegan-crossed.png"]},ie=[1,2,3,4];function oe(e){var t=e.mealHasMealTypes,n=e.createMealHasMealType,a=e.deleteMealHasMealType;return r.a.createElement("div",null,r.a.createElement(U.a,null,"Kategorien"),t&&0===t.length&&r.a.createElement(E.a,{warning:!0},"Diesem Gericht wurde noch keine Kategorie hinzugef\xfcgt. Es braucht mindestens eine Kategorie, um im Lunchletter angezeigt zu werden."," "),ie.map((function(e){var c=t.reduce((function(t,n){return t||n===e}),!1);return r.a.createElement("button",{className:"sf-canteen-user-category-button",onClick:function(){return c?a(e):n(e)}},r.a.createElement("img",{src:c?se[e][0]:se[e][1],alt:ue[e],height:"50"}))})))}n(340);function me(){var e=Object(l.f)(),t=Object(a.useState)({name:"",date:P(),price:""}),n=Object(s.a)(t,2),c=n[0],u=n[1],i=Object(a.useState)(0),o=Object(s.a)(i,2),d=o[0],h=o[1],b=le(),g=Object(s.a)(b,1)[0],v=Object(a.useState)([]),w=Object(s.a)(v,2),y=w[0],O=w[1],j=function(){var t=Object(p.a)(m.a.mark((function t(){var n,a,r,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(Object(f.a)(Object(f.a)({},c),{},{canteen_id:g.id}));case 2:n=t.sent,console.log(n),t.t0=m.a.keys(y);case 5:if((t.t1=t.t0()).done){t.next=14;break}return a=t.t1.value,r=y[a],t.next=10,ae(n.id,{meal_type_id:r});case 10:l=t.sent,console.log(l),t.next=5;break;case 14:e.push("/");case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"sf-canteen-user-create-meal-page"},r.a.createElement("h1",null,"Meine Gerichte heute im Lunchletter"),r.a.createElement("p",{className:"sf-canteen-user-page-date"},I(new Date)),r.a.createElement(J.a.Group,{widths:3},r.a.createElement(J.a,{active:0===d,link:!0,onClick:function(){return h(0)},className:"done"},r.a.createElement(B.a,{name:"food",color:"green"}),r.a.createElement(J.a.Content,null,r.a.createElement(J.a.Title,null,"Gericht erstellen"))),r.a.createElement(J.a,{active:1===d,disabled:d<1,link:!0,className:d>0?"done":""},r.a.createElement(B.a,{name:"info",color:d<1?"grey":"green"}),r.a.createElement(J.a.Content,null,r.a.createElement(J.a.Title,null,"Best\xe4tigen")))),0===d&&r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,'Tragen Sie den Namen und Preis des Gerichtes ein. W\xe4hlen Sie das Datum aus an dem das Gericht erscheinen soll und klicken Sie anschlie\xdfend auf "Weiter".'),r.a.createElement(Q,{meal:c,setMeal:u}),r.a.createElement("br",null),r.a.createElement(oe,{mealHasMealTypes:y,deleteMealHasMealType:function(e){return O(y.filter((function(t){return t!==e})))},createMealHasMealType:function(e){return O([].concat(Object(W.a)(y),[e]))}}),r.a.createElement("br",null),r.a.createElement(S.a,{negative:!0,onClick:function(){e.push("/")}},"Abbrechen"),r.a.createElement(S.a,{positive:!0,onClick:function(){return h(1)}},"Weiter")),1===d&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Stimmt alles?"),r.a.createElement("p",null,c.name),r.a.createElement("p",null,"Erscheint am ",I(new Date(c.date))),r.a.createElement("p",null,"Preise:",r.a.createElement("br",null),"- Studierende: ",c.price," \u20ac",r.a.createElement("br",null),"- Besch\xe4ftigte: ",c.price," \u20ac",r.a.createElement("br",null),"- Sonstige: ",c.price," \u20ac"),r.a.createElement("p",null,"Kategorien:"),ie.map((function(e){var t=y.reduce((function(t,n){return t||n===e}),!1);return r.a.createElement("img",{src:t?se[e][0]:se[e][1],alt:ue[e],height:"50"})})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{negative:!0,onClick:function(){h(0)}},"Zur\xfcck"),r.a.createElement(S.a,{positive:!0,onClick:function(){return j()}},"Anlegen")))}function pe(e){return de.apply(this,arguments)}function de(){return(de=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.BACKEND_URL+"/canteenUsers/meals/"+t,e.prev=1,e.next=4,_(n);case 4:return a=e.sent,e.abrupt("return",a.meal);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function fe(e,t){var n=D();return g.a.put(e,t,{headers:n})}function he(e){return fe(w.BACKEND_URL+"/canteenUsers/meals/"+e.id,e)}function Ee(e){return be.apply(this,arguments)}function be(){return(be=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.BACKEND_URL+"/canteenUsers/meals/"+t+"/types",e.prev=1,e.next=4,_(n);case 4:return a=e.sent,console.log(a),e.abrupt("return",a.mealHasMealTypes);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function ge(e,t){return M(w.BACKEND_URL+"/canteenUsers/meals/"+e+"/types/"+t)}n(341);function ve(){var e=Object(l.h)().mealId,t=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1];function l(){return u.apply(this,arguments)}function u(){return(u=Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(t);case 2:return e.next=4,l();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l()}),[]),[r,function(e){return i.apply(this,arguments)}]}(e),n=Object(s.a)(t,2),c=n[0],u=n[1],i=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],c=n[1];function l(){return u.apply(this,arguments)}function u(){return(u=Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,ae(e,{meal_type_id:n});case 3:return t.next=5,l();case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge(e,n);case 2:return t.next=4,l();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l()}),[]),[r,function(e){return i.apply(this,arguments)},function(e){return o.apply(this,arguments)}]}(e),o=Object(s.a)(i,3),d=o[0],f=o[1],h=o[2];return r.a.createElement("div",{className:"sf-canteen-user-patch-meal-page"},r.a.createElement("h1",{size:"large"},"Gericht bearbeiten"),r.a.createElement("p",{className:"sf-canteen-user-page-date"},I(new Date)),r.a.createElement(Q,{meal:c,setMeal:u}),r.a.createElement("br",null),r.a.createElement(oe,{mealHasMealTypes:d.map((function(e){return e.meal_type_id})),createMealHasMealType:f,deleteMealHasMealType:function(e){return h(d.find((function(t){return t.meal_type_id===e})).id)}}))}var we=n(366);n(342);function ye(e){var t=e.children,n=Object(l.f)(),a=H(),c=Object(s.a)(a,1)[0],u=Object(l.g)(),i="undefined"!==typeof c;return r.a.createElement("div",{className:"".concat(i?"sf-canteen-user-topbar-logged-in":"sf-canteen-user-topbar-logged-out")},r.a.createElement("div",{className:"sf-canteen-user-topbar"},i?r.a.createElement("div",{className:"sf-canteen-user-topbar-buttons"},r.a.createElement(we.a,{content:"Start",inverted:!0,basic:!0,position:"right center",trigger:r.a.createElement(S.a,{circular:!0,size:"big",icon:"home",onClick:function(){return n.push("/")},className:"/"===u.pathname?"sf-canteen-user-topbar-button-active":"sf-canteen-user-topbar-button"})}),r.a.createElement(we.a,{content:"Gerichte",inverted:!0,basic:!0,position:"right center",trigger:r.a.createElement(S.a,{circular:!0,size:"big",icon:"list",onClick:function(){return n.push("/meals")},className:"/meals"===u.pathname?"sf-canteen-user-topbar-button-active":"sf-canteen-user-topbar-button"})}),r.a.createElement(we.a,{content:"Gericht anlegen",inverted:!0,basic:!0,position:"right center",trigger:r.a.createElement(S.a,{circular:!0,size:"big",icon:"plus",onClick:function(){return n.push("/meals/create")},className:"/meals/create"===u.pathname?"sf-canteen-user-topbar-button-active":"sf-canteen-user-topbar-button"})}),r.a.createElement(we.a,{content:"Einstellungen",inverted:!0,basic:!0,position:"right center",trigger:r.a.createElement(S.a,{circular:!0,size:"big",icon:"setting",onClick:function(){return n.push("/settings")},className:"/settings"===u.pathname?"sf-canteen-user-topbar-button-active":"sf-canteen-user-topbar-button"})})):r.a.createElement("div",{className:"sf-canteen-user-topbar-img"})),r.a.createElement("div",{className:"sf-canteen-user-content"},r.a.createElement("div",{className:"sf-canteen-user-top-area"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://studierendenfutter.de/wp-content/uploads/2021/05/Logo-mein-Studierendenfutter-DUNKEL-transparent-Large.png",height:"70",alt:"Mein Studierendenfutter"})),i?r.a.createElement("div",null,r.a.createElement(S.a,{inverted:!0,negative:!0,basic:!0,onClick:function(){window.localStorage.removeItem("authToken"),n.push("/"),window.location.reload()}},"Ausloggen")):r.a.createElement("div",null)),t))}n(343),n(344);function Oe(){var e=H(),t=Object(s.a)(e,1)[0],n=Object(a.useState)("today"),c=Object(s.a)(n,2),l=c[0],u=c[1];return t?r.a.createElement("div",{className:"sf-canteen-user-page"},r.a.createElement("h1",null,"Alle Gerichte"),r.a.createElement("p",{className:"sf-canteen-user-meals-date"},(new Date).toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),r.a.createElement("div",{class:"sf-canteen-user-tabs"},r.a.createElement("button",{className:"today"===l?"sf-canteen-user-tab-active":"",onClick:function(){return u("today")}},"Heutige Gerichte"),r.a.createElement("button",{className:"planned"===l?"sf-canteen-user-tab-active":"",onClick:function(){return u("planned")}},"Geplante Gerichte"),r.a.createElement("button",{className:"past"===l?"sf-canteen-user-tab-active":"",onClick:function(){return u("past")}},"Vergangene Gerichte")),"today"===l&&r.a.createElement(F,{filter:function(e){return e.date===P(new Date)}}),"planned"===l&&r.a.createElement(F,{filter:function(e){return new Date(e.date)>new Date}}),"past"===l&&r.a.createElement(F,{filter:function(e){return new Date(e.date)<new Date},past:!0})):r.a.createElement(x,null)}function je(){return _(w.BACKEND_URL+"/canteenUsers")}function ke(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.BACKEND_URL+"/canteenUsers",e.next=3,fe(n,t);case 3:return a=e.sent,e.abrupt("return",a.data.token);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ne(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1],c=H(),u=Object(s.a)(c,2)[1];Object(l.f)();function i(){return(i=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:t=e.sent,r(t.canteenUser);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(t);case 2:return n=e.sent,console.log(t,n),e.next=6,u({token:n});case 6:window.location.reload();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),[n,function(e){return o.apply(this,arguments)}]}n(345);var Se=function(){var e=le(),t=Object(s.a)(e,1)[0],n=Ne(),c=Object(s.a)(n,2),l=c[0],u=c[1],i=Object(a.useState)(),o=Object(s.a)(i,2),m=o[0],p=o[1],d=Object(a.useState)(),f=Object(s.a)(d,2),b=f[0],g=f[1],v=Object(a.useState)(),w=Object(s.a)(v,2),y=w[0],O=w[1],j=Object(a.useState)(!0),k=Object(s.a)(j,2),x=k[0],N=k[1];return Object(a.useEffect)((function(){p(l.email)}),[l]),r.a.createElement("div",{className:"sf-canteen-user-settings-page"},r.a.createElement("div",null,r.a.createElement("h1",null,"Restaurantdaten"),t&&r.a.createElement("table",{className:"sf-canteen-user-settings-table"},r.a.createElement("tr",null,r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-label"},r.a.createElement("b",null,"Restaurant")),r.a.createElement("td",null,t.name),r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-explanation"},"So erscheint das Restaurant im Lunchletter")),r.a.createElement("tr",null,r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-label"},r.a.createElement("b",null,"Hinterlegte Website")),r.a.createElement("td",null,t.link),r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-explanation"},'Diese Seite ist als URL hinter dem "Location-Link" im Lunchletter hinterlegt')),r.a.createElement("tr",null,r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-label"},r.a.createElement("b",null,"Adresse")),r.a.createElement("td",null,t.address),r.a.createElement("td",{className:"sf-canteen-user-settings-table-data-explanation"})))),r.a.createElement("div",{style:{width:"300px"}},r.a.createElement("h1",null,"Mein Account"),r.a.createElement("h3",null,"E-Mail"),r.a.createElement(h.a,{onSubmit:function(){return u({email:m})}},r.a.createElement(h.a.Field,null,r.a.createElement(h.a.Input,{value:m,onChange:function(e,t){p(t.value)}})),r.a.createElement(S.a,{type:"submit",positive:!0,fluid:!0},"E-Mail Speichern")),r.a.createElement("br",null),r.a.createElement(h.a,{onSubmit:function(){return b===y?u({password:b}):N(!1)}},!x&&r.a.createElement(E.a,null,"Die Passw\xf6rter stimmen nicht \xfcberein."),r.a.createElement("h3",null,"Password \xe4ndern"),r.a.createElement(h.a.Field,null,r.a.createElement("label",null,"Neues Passwort"),r.a.createElement(h.a.Input,{value:b,name:"old-password",type:"password",onChange:function(e,t){g(t.value)}})),r.a.createElement(h.a.Field,null,r.a.createElement("label",null,"Neues Passwort best\xe4tigen"),r.a.createElement(h.a.Input,{value:y,name:"new-password",type:"password",onChange:function(e,t){O(t.value)}})),r.a.createElement(S.a,{type:"submit",positive:!0,fluid:!0},"Password speichern"))))},Ce=(n(346),function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(ye,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(z,null)),r.a.createElement(l.a,{exact:!0,path:"/meals"},r.a.createElement(Oe,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/create"},r.a.createElement(me,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/:mealId"},r.a.createElement(ve,null)),r.a.createElement(l.a,{exact:!0,path:"/settings"},r.a.createElement(Se,null))))))}),De=document.getElementById("root");De.hasChildNodes()?Object(u.hydrate)(r.a.createElement(Ce,null),De):Object(u.render)(r.a.createElement(Ce,null),De),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[223,1,2]]]);
//# sourceMappingURL=main.2a651d13.chunk.js.map