exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 5106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3135);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_0__]);
react_markdown__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const Section = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  className: `max-w-screen-lg mx-auto px-3 ${props.yPadding ? props.yPadding : 'py-16'}`,
  children: [(props.title || props.description) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "mb-12 text-center",
    children: [props.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
      className: "text-4xl text-gray-900 font-bold",
      children: props.title
    }), props.description && props.large && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_0__["default"], {
      className: "mt-6 text-xl leading-9 whitespace-pre-wrap",
      children: props.description
    }), props.description && !props.large && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_0__["default"], {
      className: "mt-6 text-base leading-6 whitespace-pre-wrap",
      children: props.description
    })]
  }), props.children]
});


});

/***/ }),

/***/ 8554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(1017);

const NextI18Next = (__webpack_require__(1377)["default"]);

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'zh',
  otherLanguages: ['en'],
  localePath: path.resolve("./public/static/locales")
});
const {
  appWithTranslation,
  withTranslation
} = NextI18NextInstance;
module.exports = {
  nextI18next: NextI18NextInstance,
  appWithTranslation,
  withTranslation
};

/***/ })

};
;