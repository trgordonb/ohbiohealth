(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{9799:function(e,r,t){"use strict";var n=t(4942),c=t(5861),o=t(7757),i=t.n(o),u=t(9669),a=t.n(u),s=t(7294);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.url,t=e.method,n=e.body,o=e.onSuccess,u=(0,s.useState)(null),p=u[0],l=u[1];return{doRequest:function(){var e=(0,c.Z)(i().mark((function e(){var c,u,s,p=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=p.length>0&&void 0!==p[0]?p[0]:{},e.prev=1,l(null),e.next=5,a()[t](r,d(d({},n),c));case 5:return u=e.sent,o&&o(u.data),e.abrupt("return",u.data);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),s=e.t0.response.data.errors.map((function(e){return"".concat(e.message)})),l(s[0]);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),errors:p}}},2977:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(5861),c=t(7757),o=t.n(c),i=t(5538),u=(t(993),t(7294)),a=t(9799),s=t(6793),p=t(5893);function d(e){var r=e.data,t=(0,s.$)(),c=t.t,d=(t.i18n,(0,a.Z)({url:"/api/devices/proofs",method:"put",onSuccess:function(e){e&&i.Am.info("Approval status updated")}})),l=d.doRequest,f=d.errors,h=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="app"===r.target.id.slice(0,3)?"approved":"rejected",n=r.target.id.slice(3,r.target.id.length),e.next=4,l({deviceId:n,action:t});case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=r.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:["Device Id: ",e._id]}),(0,p.jsxs)("p",{children:["Email: ",e.email]}),(0,p.jsx)("a",{href:e.purchaseProofUrl,children:"View receipt here"}),(0,p.jsx)("button",{id:"app".concat(e._id),onClick:h,children:"Approve"}),(0,p.jsx)("button",{id:"rej".concat(e._id),onClick:h,children:"Reject"})]},e._id)}));return(0,u.useEffect)((function(){f&&i.Am.error(f)}),[f]),(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:"w-full md:w-96 md:max-w-full mx-auto",children:[(0,p.jsx)(i.Ix,{}),(0,p.jsx)("h1",{className:"mt-10 font-bold text-xl",children:c("regdevice")}),(0,p.jsx)("ul",{children:v})]})})}d.getInitialProps=function(){var e=(0,n.Z)(o().mark((function e(r,t){var n,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/api/devices/proofs");case 2:return n=e.sent,c=n.data,e.abrupt("return",{data:c});case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},4748:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/approve",function(){return t(2977)}])}},function(e){e.O(0,[37,774,888,179],(function(){return r=4748,e(e.s=r);var r}));var r=e.O();_N_E=r}]);