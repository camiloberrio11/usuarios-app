(this["webpackJsonpusuarios-app"]=this["webpackJsonpusuarios-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(31),a(7)),u=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-between"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," ",r.a.createElement(o.b,{to:"/",className:"text-light"}," Usuarios App "))))},s=function(){return r.a.createElement("div",{className:"container btn-action"},r.a.createElement("button",{className:"btn btn-danger nuevo-post d-block d-md-inline-block mt-8"}," ",r.a.createElement(o.b,{to:"/usuarios"},"Obtener usuarios")),r.a.createElement("hr",null))},i=function(e){var t=e.usuario,a=t.id,n=t.name,c=t.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null," ",a," "),r.a.createElement("td",null,r.a.createElement("span",{className:"font-ewight-bold"}," ",n," ")),r.a.createElement("td",null," ",c," ")))},m=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"btn btn-warning nuevo-post d-block d-md-inline-block mt-8"}," ",r.a.createElement(o.b,{to:"/"},"Volver")))},E=a(9),b=a(12),d=a.n(b),p=a(16),f=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://gorest.co.in/public-api/").concat(t));case 2:if(!(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:throw new Error("Ha ocurrido un error con la petici\xf3n");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var O=function(){return{type:"OBTENER_USUARIOS",payload:!0}},v=function(e){return{type:"OBTENER_USUARIOS_EXITOSO",payload:e}},h=function(){return{type:"OBTENER_USUARIOS_ERROR",payload:!0}},N=a(25),g=function(){var e=Object(E.b)(),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red",t=Object(n.useState)(e),a=Object(N.a)(t,2),r=a[0],c=a[1],l=function(e){c(e)};return{changeColor:l,color:r}}("#56cc9d"),a=t.changeColor,c=t.color;Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O()),e.prev=1,e.next=4,f("users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE");case 4:a=e.sent,t(v(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(h());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var l=Object(E.c)((function(e){return e.usuarios.usuarios})),o=Object(E.c)((function(e){return e.usuarios.error})),u=Object(E.c)((function(e){return e.usuarios.loading}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{background:c},className:"text-center my-5"},"Listado de usuarios"),r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:function(){a("#28abb9")}},"Cambiar color de titulo"),o?r.a.createElement("p",{className:"font-weight-bold alert alert-danger text-center"},"Hubo un error "):null,u?r.a.createElement("p",{className:"text-center"},"Cargando..."):null,l.length<1&&r.a.createElement("p",null,"No existen usuarios disponibles"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"bg-primary table-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Id"),r.a.createElement("th",{scope:"col"},"Nombre"),r.a.createElement("th",{scope:"col"},"Email"))),r.a.createElement("tbody",null,l.length>0&&l.map((function(e){return r.a.createElement(i,{key:e.id,usuario:e})})))),r.a.createElement(m,null))},j=a(2),y=a(8),_=a(24),S=a(10),w={usuarios:[],loading:!1,error:null};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OBTENER_USUARIOS":return Object(S.a)(Object(S.a)({},e),{},{loading:t.payload});case"OBTENER_USUARIOS_EXITOSO":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:null,usuarios:t.payload});case"OBTENER_USUARIOS_ERROR":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:t.payload});default:return e}},k=Object(y.c)({usuarios:R}),x=Object(y.e)(k,Object(y.d)(Object(y.a)(_.a),"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));var U=function(){return r.a.createElement(o.a,null,r.a.createElement(E.a,{store:x},r.a.createElement(u,null),r.a.createElement(s,null),r.a.createElement("div",{className:"container mt-5"},r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/usuarios",component:g})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.307244ba.chunk.js.map