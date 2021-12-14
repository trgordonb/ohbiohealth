(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 9180:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__S4aNf",
	"right": "Layout_right__mkOfM"
};


/***/ }),

/***/ 414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9180);
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




AboutPage.getInitialProps = async (ctx)=>{
    const options = {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };
    const resEN = await fetch('https://cms.ohbiohealth.club/articles?current=true&&type=aboutus', {
        method: 'GET',
        ...options
    });
    const resZH = await fetch('https://cms.ohbiohealth.club/articles?_locale=zh-Hant&&current=true&&type=aboutus', {
        method: 'GET',
        ...options
    });
    const dataEN = await resEN.json();
    const dataZH = await resZH.json();
    return {
        data: {
            en: dataEN[0],
            zh: dataZH[0]
        }
    };
};
function AboutPage({ data  }) {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data[i18n.language].title);
    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data[i18n.language].text);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setTitle(data[i18n.language].title);
        setText(data[i18n.language].text);
    }, [
        i18n.language
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: text
            })
        ]
    }));
};


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

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(414));
module.exports = __webpack_exports__;

})();