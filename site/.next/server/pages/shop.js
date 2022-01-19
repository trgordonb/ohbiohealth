"use strict";
(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 7688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ShopPage)
});

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/use-request.js
var use_request = __webpack_require__(9799);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ProductBrowser.js





const ProductBrowser = props => {
  const {
    doRequest,
    errors
  } = (0,use_request/* default */.Z)({
    url: '/api/profiles/orders',
    method: 'post',
    onSuccess: data => {}
  });
  (0,external_react_.useEffect)(() => {
    let ecwidLoaded = false;

    function load_ecwid() {
      if (typeof Ecwid != 'undefined') {
        Ecwid.OnAPILoaded.add(function () {
          if (!ecwidLoaded) {
            ecwidLoaded = true;

            if (props.currentUser) {
              Ecwid.Cart.setCustomerEmail(props.currentUser.email);
            }

            xProductBrowser("categoriesPerRow=3", "views=grid(3,3) list(10) table(20)", "categoryView=grid", "searchView=list", "id=ecStoreProductBrowser");
          }
        });
        Ecwid.OnOrderPlaced.add(async order => {
          let sentOrder = {
            orderNumber: order.orderNumber,
            total: order.total,
            items: order.items
          };
          sentOrder.items = sentOrder.items.map(item => {
            return {
              product: {
                price: item.product.price,
                name: item.product.name,
                sku: item.product.sku,
                url: item.product.url
              },
              quantity: item.quantity
            };
          });

          if (props.currentUser) {
            await doRequest({
              orderNumber: sentOrder.orderNumber,
              total: sentOrder.total,
              items: sentOrder.items
            });
          }
        });
      }
    }

    window.ec = window.ec || {};
    window.ec.config = window.ec.config || {};
    window.ec.config.storefrontUrls = window.ec.config.storefrontUrls || {};
    window.ec.config.storefrontUrls.cleanUrls = true;
    window.ec.config.storefrontUrls.queryBasedCleanUrls = true;
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

    if (!document.getElementById('ecwid-script')) {
      var script = document.createElement('script');
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src = 'https://app.ecwid.com/script.js?' + props.storeId + '&data_platform=nextjs';
      script.id = 'ecwid-script';
      script.onload = load_ecwid;
      document.body.appendChild(script);
    } else {
      load_ecwid();
    }
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "ecStoreProductBrowser"
  });
};

ProductBrowser.defaultProps = {
  storeId: 13433173
};
/* harmony default export */ const components_ProductBrowser = (ProductBrowser);
;// CONCATENATED MODULE: ./pages/shop.js




ShopPage.getInitialProps = async ctx => {
  const storeId = process.env.NEXT_PUBLIC_ECWID_STOREID;
  return {
    data: storeId
  };
};

function ShopPage({
  data,
  currentUser
}) {
  const {
    t
  } = (0,external_react_i18next_.useTranslation)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "m-auto p-5 max-w-4xl",
    children: /*#__PURE__*/jsx_runtime_.jsx(components_ProductBrowser, {
      storeId: data,
      currentUser: currentUser
    })
  });
}

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [799], () => (__webpack_exec__(7688)));
module.exports = __webpack_exports__;

})();