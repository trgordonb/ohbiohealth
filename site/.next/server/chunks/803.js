exports.id = 803;
exports.ids = [803];
exports.modules = {

/***/ 142:
/***/ ((module) => {

// Exports
module.exports = {
	"auth": "AuthForm_auth__0Tp28"
};


/***/ }),

/***/ 6471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ url , method , body , onSuccess  })=>{
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const doRequest = async (props = {
    })=>{
        try {
            setErrors(null);
            const response = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, {
                ...body,
                ...props
            });
            if (onSuccess) {
                onSuccess(response.data);
            }
            return response.data;
        } catch (err) {
            console.log(err);
            setErrors(null);
        }
    };
    return {
        doRequest,
        errors
    };
});


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;