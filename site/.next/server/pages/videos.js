(() => {
var exports = {};
exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 2886:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Videos_container__eADZ6",
	"grid": "Videos_grid__nj9Z5",
	"card": "Videos_card__WUHTn"
};


/***/ }),

/***/ 6977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ VideosPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Videos_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2886);
/* harmony import */ var _styles_Videos_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Videos_module_css__WEBPACK_IMPORTED_MODULE_2__);



async function getServerSideProps(ctx) {
    const reqUrl = `${process.env.NEXT_YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${process.env.NEXT_YOUTUBE_CHANNELID}&key=${process.env.NEXT_YOUTUBE_API_KEY}`;
    const res = await fetch(reqUrl);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}
function VideosPage({ data  }) {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Videos_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: t('video')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_styles_Videos_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),
                children: data && data.items && data.items.map(({ id , snippet ={
                }  })=>{
                    const { title , thumbnails ={
                    } , resourceId ={
                    }  } = snippet;
                    const { medium  } = thumbnails;
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: (_styles_Videos_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: `https://www.youtube.com/watch?v=${resourceId.videoId}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        width: medium.width,
                                        height: medium.height,
                                        src: medium.url,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: title
                                })
                            ]
                        })
                    }, id));
                })
            })
        ]
    }));
};


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
var __webpack_exports__ = (__webpack_exec__(6977));
module.exports = __webpack_exports__;

})();