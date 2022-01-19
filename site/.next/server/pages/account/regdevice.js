(() => {
var exports = {};
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 3149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DeviceRegPage)
});

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/use-request.js
var use_request = __webpack_require__(9799);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
;// CONCATENATED MODULE: external "react-cloudinary-upload-widget"
const external_react_cloudinary_upload_widget_namespaceObject = require("react-cloudinary-upload-widget");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/account/regdevice.js









DeviceRegPage.getInitialProps = async ctx => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;
  return {
    cloudName,
    preset
  };
};

function DeviceRegPage({
  cloudName,
  preset
}) {
  const {
    0: deviceId,
    1: setDeviceId
  } = (0,external_react_.useState)('');
  const {
    0: fileUrl,
    1: setFileUrl
  } = (0,external_react_.useState)('');
  const {
    0: fileName,
    1: setFileName
  } = (0,external_react_.useState)('-');
  const {
    t,
    i18n
  } = (0,external_react_i18next_.useTranslation)();
  const {
    doRequest,
    errors
  } = (0,use_request/* default */.Z)({
    url: '/api/devices',
    method: 'put',
    body: {
      deviceId: deviceId,
      purchaseProofUrl: fileUrl
    },
    onSuccess: data => {
      if (data && data.id) {
        external_react_toastify_.toast.info('Device sucessfully registered');
      }

      setDeviceId('');
    }
  });

  const handleSubmit = async e => {
    e.preventDefault();
    doRequest();
  };

  (0,external_react_.useEffect)(() => {
    if (errors) {
      external_react_toastify_.toast.error(errors);
    }
  }, [errors]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-16",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full md:w-96 md:max-w-full mx-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "mt-10 mb-10 px-4 font-bold text-3xl",
        children: t('regdevice')
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full md:w-96 md:max-w-full mx-auto p-4 bg-indigo-100",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "p-6 border border-gray-300 sm:rounded-md",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_cloudinary_upload_widget_namespaceObject.WidgetLoader, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_cloudinary_upload_widget_namespaceObject.Widget, {
          sources: ['local'],
          cloudName: cloudName,
          uploadPreset: preset,
          folder: 'ohbiohealth',
          logging: false,
          onSuccess: res => {
            let tmpFileUrl = res.info.url;

            if (res.info.format === 'pdf') {
              tmpFileUrl = tmpFileUrl.slice(0, tmpFileUrl.length - 3) + 'jpg';
            }

            setFileName(res.info.original_filename);
            setFileUrl(tmpFileUrl);
          },
          onFailure: res => console.log(res)
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "mt-6 mb-6",
          children: fileName
        }), /*#__PURE__*/jsx_runtime_.jsx("form", {
          onSubmit: handleSubmit,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
              className: "block mb-6",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "text-gray-700",
                children: t('deviceid')
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                id: "deviceId",
                name: "deviceId",
                className: " block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ",
                value: deviceId,
                type: "text",
                onChange: e => setDeviceId(e.target.value)
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "submit",
              value: t('submit'),
              className: " h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 "
            })]
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [799], () => (__webpack_exec__(3149)));
module.exports = __webpack_exports__;

})();