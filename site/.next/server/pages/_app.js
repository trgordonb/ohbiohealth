(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7656:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP"
};


/***/ }),

/***/ 168:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__VYZ3G",
	"logo": "Header_logo__6vBZG"
};


/***/ }),

/***/ 3622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./api/build-client.js

/* harmony default export */ const build_client = (({ req  })=>{
    if (true) {
        // We are on the server
        return external_axios_default().create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        });
    } else {}
});

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(168);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
;// CONCATENATED MODULE: ./components/Header.js






function Header({ currentUser  }) {
    const { t , i18n  } = (0,external_react_i18next_.useTranslation)();
    (0,external_react_.useEffect)(()=>{
        i18n.changeLanguage('en');
    }, []);
    const onChangeLanguage = (language)=>{
        i18n.changeLanguage(language);
    };
    const links = [
        {
            label: t('aboutus'),
            href: '/about'
        },
        {
            label: t('products'),
            href: '/products'
        },
        {
            label: t('technology'),
            href: '/technology'
        },
        {
            label: t('service'),
            href: '/service'
        },
        {
            label: t('healthtip'),
            href: '/healthtips'
        },
        {
            label: t('video'),
            href: '/videos'
        },
        {
            label: t('faq'),
            href: '/faq'
        },
        currentUser && currentUser.usertype === 'admin' && {
            label: t('admin'),
            href: '/admin'
        },
        !currentUser && {
            label: t('signin'),
            href: '/account/signin'
        },
        currentUser && {
            label: t('signout'),
            href: '/account/signout'
        }
    ].filter((linkConfig)=>linkConfig
    ).map(({ label , href  })=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: label
                })
            })
        }, href));
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).logo,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/OHLogo.jpg",
                            width: 100,
                            height: 40
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        links,
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn-lang1",
                                onClick: ()=>onChangeLanguage('en')
                                ,
                                children: "EN"
                            })
                        }, 'english'),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn-lang2",
                                onClick: ()=>onChangeLanguage('zh')
                                ,
                                children: "繁"
                            })
                        }, 'zh')
                    ]
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(7656);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.js



async function getServerSideProps(ctx) {
    const options = {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };
    const resEN = await fetch('https://cms.ohbiohealth.club/documents?type=contact', {
        method: 'GET',
        ...options
    });
    const resZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=contact', {
        method: 'GET',
        ...options
    });
    const dataEN = await resEN.json();
    const dataZH = await resZH.json();
    return {
        props: {
            data: {
                en: dataEN[0].text,
                zh: dataZH[0].text
            }
        }
    };
}
function Footer({ data  }) {
    console.log(data);
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Copyright \xa9 OH Biohealth 2021"
        })
    }));
};

// EXTERNAL MODULE: ./utils/i18n.js
var i18n = __webpack_require__(9130);
;// CONCATENATED MODULE: ./pages/_app.js







const AppComponent = ({ Component , pageProps , currentUser  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                currentUser: currentUser
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                currentUser: currentUser,
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
            })
        ]
    }));
};
AppComponent.getInitialProps = async (appContext)=>{
    const client = build_client(appContext.ctx);
    const { data  } = await client.get('/api/users/currentuser');
    let pageProps = {
    };
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);
    }
    return {
        pageProps,
        ...data
    };
};
/* harmony default export */ const _app = ((0,i18n.appWithTranslation)(AppComponent));


/***/ }),

/***/ 9130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const path = __webpack_require__(1017);
const NextI18Next = (__webpack_require__(1377)["default"]);
const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'zh',
    otherLanguages: [
        'en'
    ]
});
const { appWithTranslation , withTranslation  } = NextI18NextInstance;
module.exports = {
    nextI18next: NextI18NextInstance,
    appWithTranslation,
    withTranslation
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,697], () => (__webpack_exec__(3622)));
module.exports = __webpack_exports__;

})();