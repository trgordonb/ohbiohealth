"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  req
}) => {
  if (true) {
    // We are on the server
    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers
    });
  } else {}
});

/***/ }),

/***/ 7480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ CenteredFooter)
});

;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/FooterCopyright.js




const FooterCopyright = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-3513251595" + " " + "footer-copyright",
  children: ["\xA9 Copyright ", new Date().getFullYear(), " OH Biohealth", /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "3513251595",
    children: [".footer-copyright.jsx-3513251595 a{--tw-text-opacity:1;color:rgb(3 169 244/var(--tw-text-opacity));}", ".footer-copyright.jsx-3513251595 a:hover{-webkit-text-decoration-line:underline;-webkit-text-decoration-line:underline;text-decoration-line:underline;}"]
  })]
});


;// CONCATENATED MODULE: ./components/FooterIconList.js




const FooterIconList = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-386846369" + " " + "footer-icon-list flex flex-wrap",
  children: [props.children, /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "386846369",
    children: [".footer-icon-list.jsx-386846369 a:not(:last-child){margin-right:.75rem;}", ".footer-icon-list.jsx-386846369 a{--tw-text-opacity:1;color:rgb(160 174 192/var(--tw-text-opacity));}", ".footer-icon-list.jsx-386846369 a:hover{--tw-text-opacity:1;color:rgb(74 85 104/var(--tw-text-opacity));}", ".footer-icon-list.jsx-386846369 svg{fill:currentColor;height:1.25rem;width:1.25rem;}"]
  })]
});


;// CONCATENATED MODULE: ./components/CenteredFooter.js






const CenteredFooter = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-541721229" + " " + "text-center",
  children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "jsx-541721229",
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "jsx-541721229" + " " + "navbar mt-5 flex flex-row justify-center font-medium text-xl text-gray-800",
      children: props.children
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "jsx-541721229" + " " + "mt-8 flex justify-center",
    children: /*#__PURE__*/jsx_runtime_.jsx(FooterIconList, {
      children: props.iconList
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "jsx-541721229" + " " + "mt-8 text-sm",
    children: /*#__PURE__*/jsx_runtime_.jsx(FooterCopyright, {})
  }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "541721229",
    children: [".navbar.jsx-541721229 li{margin-left:1rem;margin-right:1rem;}"]
  })]
});



/***/ }),

/***/ 1931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _CenteredFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7480);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5106);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Section__WEBPACK_IMPORTED_MODULE_2__]);
_Section__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







function Footer(props) {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "bg-gray-100",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Section__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .$, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_CenteredFooter__WEBPACK_IMPORTED_MODULE_1__/* .CenteredFooter */ .R, {
        iconList: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
            href: "https://www.facebook.com/OnourHolistic",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("svg", {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
                  d: "M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
            href: "https://www.youtube.com/channel/UCXjd7VSLVHL3R3GUZ_LqtQw",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
                  d: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
            href: "https://www.instagram.com/ohbiohealth",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("svg", {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
                  d: "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
                })
              })
            })
          })]
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
            href: "/privacy",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              children: t('privacy')
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
            href: "/terms",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              children: t('terms')
            })
          })
        })]
      })
    })
  });
}
});

/***/ }),

/***/ 9785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Dropdown.js



function DropDown({
  title,
  items,
  short,
  links,
  isLanguageMenu = false
}) {
  const {
    t,
    i18n
  } = (0,external_react_i18next_.useTranslation)();

  const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));

  const languageList = ['en', 'zh'];

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative group",
    children: [isLanguageMenu && /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: "mt-1 block px-2 py-1 text-white font-semibold rounded group-hover:bg-gray-800 sm:mt-0 sm:ml-2",
      children: ["\uD83C\uDF10\xA0", title]
    }), !isLanguageMenu && /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "mt-1 block px-2 py-1 text-white font-semibold rounded group-hover:bg-gray-800 sm:mt-0 sm:ml-2",
      children: title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `hidden group-hover:block absolute right-0 py-0 ${short ? 'w-18' : 'w-36'} bg-white shadow-xl`,
      children: [!isLanguageMenu && zip([items, links]).map(([item, link]) => {
        return /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "block px-4 py-2 text-gray-800 hover:bg-gray-800 hover:text-white",
          href: link,
          children: item
        }, item);
      }), isLanguageMenu && zip([items, links, languageList]).map(([item, link, lang]) => {
        return /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "block px-4 py-2 text-gray-800 hover:bg-gray-800 hover:text-white",
          href: link,
          onClick: () => changeLanguage(lang),
          children: item
        }, item);
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/DropdownResponsive.js




function DropDownResponsive({
  title,
  items,
  links,
  isLanguageMenu = false
}) {
  const {
    t,
    i18n
  } = (0,external_react_i18next_.useTranslation)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const languageList = ['en', 'zh'];

  const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "px-2 py-1 sm:hidden mt-2",
    children: [isLanguageMenu && /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      onClick: () => setIsOpen(!isOpen),
      className: "text-white font-semibold block",
      children: ["\uD83C\uDF10\xA0", title, "\xA0\u25BC"]
    }), !isLanguageMenu && /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      onClick: () => setIsOpen(!isOpen),
      className: "text-white font-semibold block",
      children: [title, "\xA0\u25BC"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "",
      children: [!isLanguageMenu && isOpen && zip([items, links]).map(([item, link]) => {
        return /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "mt-2 block text-gray-400 hover:text-white",
          href: link,
          children: item
        }, item);
      }), isLanguageMenu && isOpen && zip([items, links, languageList]).map(([item, link, lang]) => {
        return /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "mt-2 block text-gray-400 hover:text-white",
          href: link,
          onClick: () => {
            changeLanguage(lang);
          },
          children: item
        }, item);
      })]
    })]
  });
}
// EXTERNAL MODULE: ./hooks/use-appstate.js
var use_appstate = __webpack_require__(5350);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header.js











function Header({
  currentUser
}) {
  const {
    t,
    i18n
  } = (0,external_react_i18next_.useTranslation)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: dismissBar,
    1: setDismissBar
  } = (0,external_react_.useState)(false);
  const {
    hasDismissedNotification,
    setHasDismissedNotification
  } = (0,use_appstate/* useAppState */.m)();
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    let displayMessage = '';

    if (currentUser && currentUser.usertype === 'client') {
      if (!currentUser.hasProvidedInfo) {
        displayMessage = t('basic');
      } else if (currentUser.hasBoughtDevice && !currentUser.hasRegDevice && !currentUser.hasFinishedSurvey) {
        displayMessage = t('buydevice');
      } else if (currentUser.hasBoughtDevice && currentUser.hasRegDevice && !currentUser.hasFinishedSurvey) {
        displayMessage = t('talkchatbot');
      }
    }

    if (displayMessage === '' || hasDismissedNotification) {
      setDismissBar(true);
    } else {
      setDismissBar(false);
    }
  }, [currentUser]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [!dismissBar && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-0 p-2 text-white bg-gray-800 text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [currentUser && !currentUser.hasProvidedInfo && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: t('basic')
          }), currentUser && currentUser.hasBoughtDevice && !currentUser.hasRegDevice && !currentUser.hasFinishedSurvey && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: t('buydevice')
          }), currentUser && currentUser.hasBoughtDevice && currentUser.hasRegDevice && !currentUser.hasFinishedSurvey && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: t('talkchatbot')
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "ml-10 border-2 border-white p-1",
            onClick: () => {
              setHasDismissedNotification(true);
              setDismissBar(true);
            },
            type: "button",
            children: t('dismiss')
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "bg-gradient-to-r from-indigo-500 to-cyan-500 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between px-4 py-3 sm:p-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "",
            onClick: () => {
              router.replace('/');
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
              className: "h-8",
              src: "/OHLogo.jpg",
              alt: "hello",
              width: 100,
              height: 40
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "sm:hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: () => setIsOpen(!isOpen),
            type: "button",
            className: "block text-gray-500 hover:text-white hover:outline-none focus:text-white focus:outline-none",
            children: isOpen ? /*#__PURE__*/jsx_runtime_.jsx("svg", {
              className: "h-6 w-6 fill-current",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              })
            }) : /*#__PURE__*/jsx_runtime_.jsx("svg", {
              className: "h-6 w-6 fill-current",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              })
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: `${isOpen ? 'block' : 'hidden'} sm:block`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "px-2 pt-2 pb-4 sm:flex sm:p-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/#about",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800",
              children: t('aboutus')
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/#technology",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2",
              children: t('technology')
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden sm:block",
            children: /*#__PURE__*/jsx_runtime_.jsx(DropDown, {
              title: t('products'),
              items: ['BM', 'QM', 'BES', 'SEG', t('pain1')],
              short: false,
              links: ['/#productsBM', '/#productsQM', '/#productsBES', '/#productsSEG', '/#chatbot']
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(DropDownResponsive, {
            title: t('products'),
            items: ['BM', 'QM', 'BES', 'SEG', t('pain1')],
            links: ['/#productsBM', '/#productsQM', '/#productsBES', '/#productsSEG', '/#chatbot']
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/#services",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2",
              children: t('service')
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2",
              children: t('shop')
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden sm:block",
            children: /*#__PURE__*/jsx_runtime_.jsx(DropDown, {
              title: t('support'),
              items: [t('faq'), t('contact')],
              short: false,
              links: ['/#faq', '/#contact']
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(DropDownResponsive, {
            title: t('support'),
            items: [t('faq'), t('contact')],
            links: ['/#faq', '/#contact']
          }), currentUser && currentUser.usertype === 'admin' && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden sm:block",
            children: /*#__PURE__*/jsx_runtime_.jsx(DropDown, {
              title: t('admin'),
              items: [t('adddevice'), t('approve')],
              short: false,
              links: ['/admin/devicereg', '/admin/approve']
            })
          }), currentUser && currentUser.usertype === 'admin' && /*#__PURE__*/jsx_runtime_.jsx(DropDownResponsive, {
            title: t('admin'),
            items: [t('adddevice'), t('approve')],
            links: ['/admin/devicereg', '/admin/approve']
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden sm:block",
            children: /*#__PURE__*/jsx_runtime_.jsx(DropDown, {
              title: `${i18n.language === 'en' ? 'EN' : '繁'}`,
              items: ['EN', '繁'],
              short: true,
              links: ['#', '#'],
              isLanguageMenu: true
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(DropDownResponsive, {
            title: `${i18n.language === 'en' ? 'EN' : '繁'}`,
            items: ['EN', '繁'],
            links: ['#', '#'],
            isLanguageMenu: true
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden sm:block",
            children: /*#__PURE__*/jsx_runtime_.jsx(DropDown, {
              title: t('account'),
              items: currentUser ? [t('regdevice'), t('order'), t('signout')] : [t('signin'), t('register')],
              short: false,
              links: currentUser ? ['/account/regdevice', '/account/orders', '/account/signout'] : ['/account/signin', '/account/signup']
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(DropDownResponsive, {
            title: t('account'),
            items: currentUser ? [t('regdevice'), t('order'), t('signout')] : [t('signin'), t('register')],
            links: currentUser ? ['/account/regdevice', '/account/orders', '/account/signout'] : ['/account/signin', '/account/signup']
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4808);
/* harmony import */ var _hooks_use_appstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5350);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9785);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1931);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8554);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8890);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_client_ApolloClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3149);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_3__]);
_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const AppComponent = ({
  Component,
  pageProps,
  currentUser,
  footerData
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_hooks_use_appstate__WEBPACK_IMPORTED_MODULE_1__/* .AppStateProvider */ .W, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {
        client: _data_client_ApolloClient__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_5___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          currentUser: currentUser
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Component, _objectSpread({
          currentUser: currentUser
        }, pageProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          data: footerData
        })]
      })
    })
  });
};

AppComponent.getInitialProps = async appContext => {
  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(appContext.ctx);
  const {
    data
  } = await client.get('/api/users/currentuser');
  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);
  }

  return _objectSpread({
    pageProps
  }, data);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_4__.appWithTranslation)(AppComponent));
});

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8890:
/***/ ((module) => {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ 4809:
/***/ ((module) => {

module.exports = require("node-fetch");

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

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,675,278,254], () => (__webpack_exec__(2551)));
module.exports = __webpack_exports__;

})();