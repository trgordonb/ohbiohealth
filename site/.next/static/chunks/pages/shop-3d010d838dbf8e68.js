(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{9799:function(r,e,t){"use strict";var n=t(4942),o=t(5861),c=t(7757),i=t.n(c),s=t(9669),u=t.n(s),a=t(7294);function d(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function p(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,n.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}e.Z=function(r){var e=r.url,t=r.method,n=r.body,c=r.onSuccess,s=(0,a.useState)(null),d=s[0],f=s[1];return{doRequest:function(){var r=(0,o.Z)(i().mark((function r(){var o,s,a,d=arguments;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=d.length>0&&void 0!==d[0]?d[0]:{},r.prev=1,f(null),r.next=5,u()[t](e,p(p({},n),o));case 5:return s=r.sent,c&&c(s.data),r.abrupt("return",s.data);case 10:r.prev=10,r.t0=r.catch(1),console.log(r.t0),a=r.t0.response.data.errors.map((function(r){return"".concat(r.message)})),f(a[0]);case 15:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(){return r.apply(this,arguments)}}(),errors:d}}},7688:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var n=t(5861),o=t(7757),c=t.n(o),i=t(6793),s=t(7294),u=t(9799),a=t(5893),d=function(r){var e=(0,u.Z)({url:"/api/profiles/orders",method:"post",onSuccess:function(r){}}),t=e.doRequest;e.errors;return(0,s.useEffect)((function(){var e=!1;function o(){"undefined"!=typeof Ecwid&&(Ecwid.OnAPILoaded.add((function(){e||(e=!0,r.currentUser&&Ecwid.Cart.setCustomerEmail(r.currentUser.email),xProductBrowser("categoriesPerRow=3","views=grid(3,3) list(10) table(20)","categoryView=grid","searchView=list","id=ecStoreProductBrowser"))})),Ecwid.OnOrderPlaced.add(function(){var e=(0,n.Z)(c().mark((function e(n){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((o={orderNumber:n.orderNumber,total:n.total,items:n.items}).items=o.items.map((function(r){return{product:{price:r.product.price,name:r.product.name,sku:r.product.sku,url:r.product.url},quantity:r.quantity}})),!r.currentUser){e.next=5;break}return e.next=5,t({orderNumber:o.orderNumber,total:o.total,items:o.items});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()))}if(window.ec=window.ec||{},window.ec.config=window.ec.config||{},window.ec.config.storefrontUrls=window.ec.config.storefrontUrls||{},window.ec.config.storefrontUrls.cleanUrls=!0,window.ec.config.storefrontUrls.queryBasedCleanUrls=!0,window.ecwid_script_defer=!0,window.ecwid_dynamic_widgets=!0,document.getElementById("ecwid-script"))o();else{var i=document.createElement("script");i.charset="utf-8",i.type="text/javascript",i.src="https://app.ecwid.com/script.js?"+r.storeId+"&data_platform=nextjs",i.id="ecwid-script",i.onload=o,document.body.appendChild(i)}}),[]),(0,a.jsx)("div",{id:"ecStoreProductBrowser"})};d.defaultProps={storeId:13433173};var p=d,f=t(4155);function l(r){var e=r.data,t=r.currentUser;(0,i.$)().t;return(0,a.jsx)("div",{className:"m-auto p-5 max-w-4xl",children:(0,a.jsx)(p,{storeId:e,currentUser:t})})}l.getInitialProps=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=f.env.NEXT_PUBLIC_ECWID_STOREID,r.abrupt("return",{data:t});case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},7102:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return t(7688)}])}},function(r){r.O(0,[774,888,179],(function(){return e=7102,r(r.s=e);var e}));var e=r.O();_N_E=e}]);