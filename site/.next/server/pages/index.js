(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage, stateRef) {
    _defineProperty(this, "setChatbotMessage", (message, newstate) => {
      let stateKey = Object.keys(newstate).length === 1 ? Object.keys(newstate)[0] : null;
      let stateValue = Object.values(newstate).length === 1 ? Object.values(newstate)[0] : null;

      if (stateKey && stateValue) {
        this.setState(state => _objectSpread(_objectSpread({}, state), {}, {
          [stateKey]: stateValue,
          step: state.step + 1,
          messages: [...state.messages, message]
        }));
      } else {
        this.setState(state => _objectSpread(_objectSpread({}, state), {}, {
          step: state.step + 1,
          messages: [...state.messages, message]
        }));
      }
    });

    _defineProperty(this, "setClientMessage", message => {
      this.setState(state => _objectSpread(_objectSpread({}, state), {}, {
        messages: [...state.messages, message]
      }));
    });

    _defineProperty(this, "handleYes", () => {
      const reply = this.createClientMessage(this.stateRef.t('y'));
      this.setClientMessage(reply);

      if (this.stateRef.step === 1) {
        const message = this.createChatbotMessage(this.stateRef.t('q2'), {
          withAvatar: false,
          delay: 500,
          widget: "yesno"
        });
        this.setChatbotMessage(message, {
          muscleache: true
        });
      } else if (this.stateRef.step === 2) {
        const message = this.createChatbotMessage(this.stateRef.t('q3'), {
          withAvatar: false,
          delay: 500,
          widget: "yesno"
        });
        this.setChatbotMessage(message, {
          needlesensation: true
        });
      } else if (this.stateRef.step === 3) {
        const message = this.createChatbotMessage(this.stateRef.t('q4'), {
          withAvatar: false,
          delay: 500,
          widget: "yesno"
        });
        this.setChatbotMessage(message, {
          burningsensation: true
        });
      } else if (this.stateRef.step === 4) {
        const message1 = this.createChatbotMessage(this.stateRef.t('p1'), {
          withAvatar: false,
          delay: 500,
          widget: 'bodydiagram'
        });
        this.setChatbotMessage(message1, {
          numbsensation: true
        });
        const message2 = this.createChatbotMessage(this.stateRef.t('p2'));
        this.setChatbotMessage(message2, {});
      }
    });

    _defineProperty(this, "handleNo", () => {
      const reply = this.createClientMessage(this.stateRef.t('n'));
      this.setClientMessage(reply);

      if (this.stateRef.step === 1) {
        const message = this.createChatbotMessage(this.stateRef.t('q2'), {
          withAvatar: false,
          delay: 500,
          widget: "yesno"
        });
        this.setChatbotMessage(message, {
          muscleache: false
        });
      } else if (this.stateRef.step === 2) {
        const message = this.createChatbotMessage(this.stateRef.t('q3'), {
          withAvatar: false,
          delay: 500,
          widget: "yesno"
        });
        this.setChatbotMessage(message, {
          needlesensation: false
        });
      } else if (this.stateRef.step === 3) {
        const message = this.createChatbotMessage(this.stateRef.t('q4'), {
          withAvatar: false,
          delay: 500,
          widget: "yesno"
        });
        this.setChatbotMessage(message, {
          burningsensation: false
        });
      } else if (this.stateRef.step === 4) {
        const message1 = this.createChatbotMessage(this.stateRef.t('p1'), {
          withAvatar: false,
          delay: 500,
          widget: 'bodydiagram'
        });
        this.setChatbotMessage(message1, {
          numbsensation: false
        });
        const message2 = this.createChatbotMessage(this.stateRef.t('p2'));
        this.setChatbotMessage(message2, {});
      }
    });

    _defineProperty(this, "handleGoodbye", () => {
      const message = this.createChatbotMessage(this.stateRef.t('q5'));
      this.setChatbotMessage(message, {});
    });

    _defineProperty(this, "handleBadInput", () => {
      const message = this.createChatbotMessage(this.stateRef.t('e1'));
      this.setChatbotMessage(message, {});
    });

    _defineProperty(this, "handleInvalidInput", () => {
      const message = this.createChatbotMessage(this.stateRef.t('e2'));
      this.setChatbotMessage(message, {});
    });

    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionProvider);

/***/ }),

/***/ 9360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (this.state.step >= 6) {
      let points = message.replace(/\s+/g, '');
      let re = /^(\d+(,\d+)*)?$/gm;

      if (!points.match(re)) {
        this.actionProvider.handleBadInput();
      } else {
        let pointsArr = [];
        let invalid = false;
        points.split(',').forEach(point => {
          let parsed = parseInt(point);

          if (parsed >= 1 && parsed <= 10) {
            pointsArr.push(parsed);
          } else {
            invalid = true;
          }
        });

        if (invalid) {
          this.actionProvider.handleInvalidInput();
        } else {
          console.log('Points: ', pointsArr);
          console.log('State: ', this.state);
          axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/profiles/painconditions`, {
            muscleache: this.state.muscleache,
            needlesensation: this.state.needlesensation,
            burningsensation: this.state.burningsensation,
            numbsensation: this.state.numbsensation
          }).then(response => {
            console.log('Response: ', response);
          });
          this.actionProvider.handleGoodbye();
        }
      }
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageParser);

/***/ }),

/***/ 8241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ chatbot_config)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ChatBotOptions/YesNoOptions.js




function YesNoOptions(props) {
  const {
    t,
    i18n
  } = (0,external_react_i18next_.useTranslation)();
  const data = [{
    text: t('y'),
    handler: props.actionProvider.handleYes,
    id: 1
  }, {
    text: t('n'),
    handler: props.actionProvider.handleNo,
    id: 2
  }];
  const optionsList = data.map(option => /*#__PURE__*/jsx_runtime_.jsx("button", {
    className: "bg-gray-300 cursor-pointer border-indigo-700 p-2 m-2 rounded-md min-w-fit focus:text-white focus:bg-indigo-500",
    onClick: option.handler,
    children: option.text
  }, option.id));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: optionsList
    })
  });
}

/* harmony default export */ const ChatBotOptions_YesNoOptions = (YesNoOptions);
;// CONCATENATED MODULE: external "react-conditionally-render"
const external_react_conditionally_render_namespaceObject = require("react-conditionally-render");
var external_react_conditionally_render_default = /*#__PURE__*/__webpack_require__.n(external_react_conditionally_render_namespaceObject);
// EXTERNAL MODULE: ./components/ChatBotInfoBox/ChatBotInfoBox.module.css
var ChatBotInfoBox_module = __webpack_require__(9991);
var ChatBotInfoBox_module_default = /*#__PURE__*/__webpack_require__.n(ChatBotInfoBox_module);
;// CONCATENATED MODULE: ./components/ChatBotInfoBox/ChatBotInfoBox.js




const ChatBotInfoBox = ({
  children,
  setState
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (ChatBotInfoBox_module_default()).informationBox,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ChatBotInfoBox_module_default()).informationBoxContent,
      children: children
    })
  });
};

/* harmony default export */ const ChatBotInfoBox_ChatBotInfoBox = (ChatBotInfoBox);
// EXTERNAL MODULE: ./components/ChatBotBodyDiagram/ChatBotBodyDiagram.module.css
var ChatBotBodyDiagram_module = __webpack_require__(5303);
var ChatBotBodyDiagram_module_default = /*#__PURE__*/__webpack_require__.n(ChatBotBodyDiagram_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/images/bodyback.jpg
/* harmony default export */ const bodyback = ({"src":"/_next/static/media/bodyback.fe37e0eb.jpg","height":718,"width":254,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgAAwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsAP/xAAXEAEAAwAAAAAAAAAAAAAAAAABAAIx/9oACAEBAAE/AAu4z//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});
;// CONCATENATED MODULE: ./public/images/bodyfront.jpg
/* harmony default export */ const bodyfront = ({"src":"/_next/static/media/bodyfront.9f968a4c.jpg","height":718,"width":252,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgAAwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAr4P/xAAXEAEAAwAAAAAAAAAAAAAAAAABAAJB/9oACAEBAAE/AAvjP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});
;// CONCATENATED MODULE: ./components/ChatBotBodyDiagram/ChatBotBodyDiagram.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const ChatBotBodyDiagram = ({
  infoBox,
  setState
}) => {
  (0,external_react_.useEffect)(() => {
    setState(state => _objectSpread(_objectSpread({}, state), {}, {
      infoBox: "bodydiagram"
    }));
  }, [setState]);
  const showBodyDiagram = infoBox === "bodydiagram";
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_conditionally_render_default()), {
      condition: showBodyDiagram,
      show: /*#__PURE__*/jsx_runtime_.jsx(ChatBotInfoBox_ChatBotInfoBox, {
        setState: setState,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (ChatBotBodyDiagram_module_default()).flexcontainer,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (ChatBotBodyDiagram_module_default()).flexchild,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
              src: bodyfront,
              alt: "Body Front",
              width: 130,
              height: 400
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (ChatBotBodyDiagram_module_default()).flexchild,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
              src: bodyback,
              alt: "Body Back",
              width: 130,
              height: 400
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const ChatBotBodyDiagram_ChatBotBodyDiagram = (ChatBotBodyDiagram);
// EXTERNAL MODULE: ./utils/i18n.js
var i18n = __webpack_require__(8554);
;// CONCATENATED MODULE: ./chatbot/config.js
function config_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function config_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { config_ownKeys(Object(source), true).forEach(function (key) { config_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { config_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function config_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const config = {
  botName: "UserProfileBot",
  initialMessages: [],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#28334AFF"
    },
    chatButton: {
      backgroundColor: "#567572ff"
    }
  },
  customComponents: {
    header: () => /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        backgroundColor: "#567572ff",
        padding: "5px",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        display: "flex",
        fontSize: "1rem",
        paddingTop: "12.5px",
        paddingBottom: "12.5px",
        paddingRight: "12.5px",
        paddingLeft: "12.5px",
        color: "white",
        fontWeight: "700",
        alignItems: "center"
      },
      children: i18n.nextI18next.i18n.t('talkassistant')
    })
  },
  state: {
    muscleache: false,
    needlesensation: false,
    burningsensation: false,
    numbsensation: false,
    step: 1,
    infoBox: '',
    painpoints: []
  },
  widgets: [{
    widgetName: "yesno",
    widgetFunc: props => /*#__PURE__*/jsx_runtime_.jsx(ChatBotOptions_YesNoOptions, config_objectSpread({}, props))
  }, {
    widgetName: "bodydiagram",
    widgetFunc: props => /*#__PURE__*/jsx_runtime_.jsx(ChatBotBodyDiagram_ChatBotBodyDiagram, config_objectSpread({}, props)),
    mapStateToProps: ["infoBox"]
  }]
};
/* harmony default export */ const chatbot_config = (config);

/***/ }),

/***/ 3869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Hero() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "w-full h-96 bg-hero-pattern text-white flex flex-col items-center justify-center text-center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
      className: "text-5xl text-white font-semibold z-20",
      children: t('welcome')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
      className: "text-2xl text-white font-semibold z-20",
      children: t('energy')
    })]
  });
}

/***/ }),

/***/ 5506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_NewsletterSubscribe)
});

;// CONCATENATED MODULE: external "react-mailchimp-subscribe"
const external_react_mailchimp_subscribe_namespaceObject = require("react-mailchimp-subscribe");
var external_react_mailchimp_subscribe_default = /*#__PURE__*/__webpack_require__.n(external_react_mailchimp_subscribe_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "html-entities"
const external_html_entities_namespaceObject = require("html-entities");
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/NewsletterForm.js







const NewsletterForm = ({
  status,
  message,
  onValidated
}) => {
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)(null);
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)(null);
  const {
    t
  } = (0,external_react_i18next_.useTranslation)();

  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const isFormValidated = onValidated({
      EMAIL: email
    });
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  const handleInputKeyEvent = event => {
    setError(null); // Number 13 is the "Enter" key on the keyboard

    if (event.keyCode === 13) {
      event.preventDefault();
      handleFormSubmit();
    }
  };

  const getMessage = message => {
    var _message$split, _result$, _result$1$trim, _result$2;

    if (!message) {
      return null;
    }

    const result = (_message$split = message === null || message === void 0 ? void 0 : message.split('-')) !== null && _message$split !== void 0 ? _message$split : null;

    if ("0" !== (result === null || result === void 0 ? void 0 : (_result$ = result[0]) === null || _result$ === void 0 ? void 0 : _result$.trim())) {
      return (0,external_html_entities_namespaceObject.decode)(message);
    }

    const formattedMessage = (_result$1$trim = result === null || result === void 0 ? void 0 : (_result$2 = result[1]) === null || _result$2 === void 0 ? void 0 : _result$2.trim()) !== null && _result$1$trim !== void 0 ? _result$1$trim : null;
    return formattedMessage ? (0,external_html_entities_namespaceObject.decode)(formattedMessage) : null;
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full md:w-96 md:max-w-full mx-auto bg-indigo-300 rounded-lg shadow-lg",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "p-6 border border-gray-300 sm:rounded-md",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "block mb-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-gray-700 text-xl font-bold",
            children: t('subscribe')
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "block px-2 py-2 w-full mt-1 border-gray-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
            onChange: event => {
              var _event$target$value, _event$target;

              return setEmail((_event$target$value = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value) !== null && _event$target$value !== void 0 ? _event$target$value : '');
            },
            type: "email",
            placeholder: t('youremail'),
            onKeyUp: event => handleInputKeyEvent(event)
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mb-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800",
            onClick: handleFormSubmit,
            children: t('submit')
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mb-6",
          children: [status === "sending" && /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: t('sending')
          }), status === "error" || error ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: error || getMessage(message)
            }
          }) : null, status === "success" && status !== "error" && !error && /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: t('thanksubscribe')
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const components_NewsletterForm = (NewsletterForm);
;// CONCATENATED MODULE: ./components/NewsletterSubscribe.js




const NewsletterSubscribe = ({
  mailChimpUrl
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_mailchimp_subscribe_default()), {
    url: mailChimpUrl,
    render: props => {
      const {
        subscribe,
        status,
        message
      } = props || {};
      return /*#__PURE__*/jsx_runtime_.jsx(components_NewsletterForm, {
        status: status,
        message: message,
        onValidated: formData => subscribe(formData)
      });
    }
  });
};

/* harmony default export */ const components_NewsletterSubscribe = (NewsletterSubscribe);

/***/ }),

/***/ 8214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ VerticalFeatureRow)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3135);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_3__]);
react_markdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const VerticalFeatureRow = props => {
  const verticalFeatureClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()('mt-20', 'flex', 'flex-wrap', 'items-center', {
    'flex-row-reverse': props.reverse
  });
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: verticalFeatureClass,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `w-full sm:w-1/2 text-center sm:px-6 py-6 rounded-lg shadow-lg bg-gradient-to-r ${props.reverse ? ' from-cyan-300 to-indigo-500' : ' from-indigo-500 to-cyan-300'}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
        className: "text-3xl text-gray-800 font-semibold",
        children: props.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "mt-6 text-base text-gray-800 leading-6 whitespace-pre-wrap list-disc",
        children: props.description
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "w-full sm:w-1/2 p-6",
      children: props.imageOverride ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "mx-auto object-center p-4",
        src: `${router.basePath}${props.image}`,
        alt: props.imageAlt
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "mx-auto object-center p-4",
        src: `${router.basePath}${props.image}`,
        alt: props.imageAlt,
        width: 300,
        height: 300
      })
    })]
  });
};


});

/***/ }),

/***/ 2748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3869);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5106);
/* harmony import */ var _components_VerticalFeatureRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8214);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var react_chatbot_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4795);
/* harmony import */ var react_chatbot_kit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_chatbot_kit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9779);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3041);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _chatbot_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8241);
/* harmony import */ var _chatbot_MessageParser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9360);
/* harmony import */ var _chatbot_ActionProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4661);
/* harmony import */ var _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5506);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Section__WEBPACK_IMPORTED_MODULE_2__, _components_VerticalFeatureRow__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Section__WEBPACK_IMPORTED_MODULE_2__, _components_VerticalFeatureRow__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















HomePage.getInitialProps = async ctx => {
  const mailChimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  const storeId = process.env.NEXT_PUBLIC_ECWID_STOREID;
  const options = {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };
  const resEN = await fetch('https://cms.ohbiohealth.club/documents', _objectSpread({
    method: 'GET'
  }, options));
  const resZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&', _objectSpread({
    method: 'GET'
  }, options));
  const dataEN = await resEN.json();
  const dataZH = await resZH.json();
  return {
    data: {
      link: mailChimpUrl,
      storeId: storeId,
      about: {
        en: dataEN.filter(item => item.type === 'aboutus')[0].text,
        zh: dataZH.filter(item => item.type === 'aboutus')[0].text
      },
      technology: {
        en: dataEN.filter(item => item.type === 'technology')[0].text,
        zh: dataZH.filter(item => item.type === 'technology')[0].text
      },
      BM: {
        en: dataEN.filter(item => item.type === 'BMfunctions')[0].text,
        zh: dataZH.filter(item => item.type === 'BMfunctions')[0].text
      },
      QM: {
        en: dataEN.filter(item => item.type === 'QMfunctions')[0].text,
        zh: dataZH.filter(item => item.type === 'QMfunctions')[0].text
      },
      BES: {
        en: dataEN.filter(item => item.type === 'BESfunctions')[0].text,
        zh: dataZH.filter(item => item.type === 'BESfunctions')[0].text
      },
      SEG: {
        en: dataEN.filter(item => item.type === 'SEGfunctions')[0].text,
        zh: dataZH.filter(item => item.type === 'SEGfunctions')[0].text
      },
      contact: {
        en: dataEN.filter(item => item.type === 'contact')[0].text,
        zh: dataZH.filter(item => item.type === 'contact')[0].text
      },
      faq: {
        en: dataEN.filter(item => item.type === 'faq')[0].text
      }
    }
  };
};

function HomePage({
  currentUser,
  data
}) {
  const {
    0: showChatBot,
    1: setShowChatBot
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
  const {
    0: aboutContent,
    1: setAboutContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.about[i18n.language]);
  const {
    0: technologyContent,
    1: setTechnologyContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.technology[i18n.language]);
  const {
    0: BMContent,
    1: setBMContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.BM[i18n.language]);
  const {
    0: QMContent,
    1: setQMContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.QM[i18n.language]);
  const {
    0: BESContent,
    1: setBESContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.BES[i18n.language]);
  const {
    0: SEGContent,
    1: setSEGContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.SEG[i18n.language]);
  const {
    0: contactContent,
    1: setContactContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.contact[i18n.language]);
  const {
    0: faqContent,
    1: setFAQContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.faq.en);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAboutContent(data.about[i18n.language]);
    setTechnologyContent(data.technology[i18n.language]);
    setBMContent(data.BM[i18n.language]);
    setQMContent(data.QM[i18n.language]);
    setBESContent(data.BES[i18n.language]);
    setSEGContent(data.SEG[i18n.language]);
    setContactContent(data.contact[i18n.language]);

    if (currentUser) {
      setShowChatBot(true);

      if (currentUser.id) {
        _chatbot_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z = _objectSpread(_objectSpread({}, _chatbot_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z), {}, {
          state: _objectSpread(_objectSpread({}, _chatbot_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"].state */ .Z.state), {}, {
            userId: currentUser.id,
            language: i18n.language,
            t: t
          })
        });
      }
    }
  }, [i18n.language]);

  const closeChatbot = () => {
    setShowChatBot(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((react_cookie_consent__WEBPACK_IMPORTED_MODULE_9___default()), {
      buttonText: t('ok'),
      children: t('cookie')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Section__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .$, {
      id: "about",
      title: t('aboutus'),
      description: aboutContent,
      large: true,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        id: "technology",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_VerticalFeatureRow__WEBPACK_IMPORTED_MODULE_3__/* .VerticalFeatureRow */ .E, {
          title: t('qtechnology'),
          description: technologyContent,
          image: "/images/feature.svg",
          imageAlt: "First feature alt text",
          imageOverride: true
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        className: "flex items-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h1", {
          className: "text-gray-800 text-4xl mx-auto mt-20 font-bold",
          children: t('products')
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        id: "productsBM",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_VerticalFeatureRow__WEBPACK_IMPORTED_MODULE_3__/* .VerticalFeatureRow */ .E, {
          title: "BM",
          description: BMContent,
          image: "/images/BM.png",
          imageAlt: "BM alt text",
          reverse: true
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        id: "productsQM",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_VerticalFeatureRow__WEBPACK_IMPORTED_MODULE_3__/* .VerticalFeatureRow */ .E, {
          title: "QM",
          description: QMContent,
          image: "/images/QE.png",
          imageAlt: "QM alt text"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        id: "productsBES",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_VerticalFeatureRow__WEBPACK_IMPORTED_MODULE_3__/* .VerticalFeatureRow */ .E, {
          title: "BES",
          description: BESContent,
          image: "/images/BES.png",
          imageAlt: "BES alt text",
          reverse: true
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        id: "productsSEG",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_VerticalFeatureRow__WEBPACK_IMPORTED_MODULE_3__/* .VerticalFeatureRow */ .E, {
          title: "SEG",
          description: SEGContent,
          image: "/images/SEG.png",
          imageAlt: "SEG alt text"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
      id: "chatbot",
      className: "items-center text-center",
      children: showChatBot && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((reactjs_popup__WEBPACK_IMPORTED_MODULE_11___default()), {
        position: 'center top',
        trigger: open => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "bg-gradient-to-r from-cyan-500 via-indigo-300 to-indigo-500 rounded-lg shadow-lg",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h2", {
                className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl px-6",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
                  className: "block text-gray-700",
                  children: t('pain1')
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                className: "mt-8 flex lg:mt-0 lg:flex-shrink-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "inline-flex rounded-md shadow",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    href: "/#chatbot",
                    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-white bg-gray-700 hover:bg-indigo-700",
                    children: t('getstart')
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "ml-3 inline-flex rounded-md shadow",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      href: "/#chatbot",
                      className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-indigo-600 bg-white hover:bg-indigo-50",
                      children: t('learn')
                    })
                  })]
                })
              })]
            })
          })
        }),
        closeOnDocumentClick: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((react_chatbot_kit__WEBPACK_IMPORTED_MODULE_8___default()), {
          config: _objectSpread(_objectSpread({}, _chatbot_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z), {}, {
            initialMessages: [(0,react_chatbot_kit__WEBPACK_IMPORTED_MODULE_8__.createChatBotMessage)(t('surveyintro')), (0,react_chatbot_kit__WEBPACK_IMPORTED_MODULE_8__.createChatBotMessage)(t('q1'), {
              withAvatar: false,
              delay: 500,
              widget: "yesno"
            })]
          }),
          messageParser: _chatbot_MessageParser__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
          actionProvider: _chatbot_ActionProvider__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
          placeholderText: t('enterresponse')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      id: "services",
      className: "flex flex-wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "w-full sm:w-1/2 mt-20 text-center sm:px-6",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h3", {
          className: "text-3xl text-gray-900 font-semibold",
          children: t('services')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "mt-20 flex flex-wrap",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "w-full sm:w-1/2 m-15 mx-auto my-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "mx-auto my-auto",
              src: "https://cms.ohbiohealth.club/uploads/Onour_224eb9361d.png",
              width: 200,
              height: 200
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "w-full sm:w-1/2 m-15 mx-auto my-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "mx-auto my-auto",
              src: "https://cms.ohbiohealth.club/uploads/woopie_27f9b598d3.png",
              width: 200,
              height: 200
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "w-full sm:w-1/2 mt-20 text-center sm:px-6",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h3", {
          className: "text-3xl text-gray-900 font-semibold",
          children: t('partners')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "mt-20 flex flex-wrap",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "w-full sm:w-1/2 m-15 mx-auto my-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "mx-auto my-auto",
              src: "https://cms.ohbiohealth.club/uploads/cyberport_d8cac9ac3f.png",
              width: 200,
              height: 200
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "w-full sm:w-1/2 m-15 mx-auto my-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "mx-auto my-auto",
              src: "https://cms.ohbiohealth.club/uploads/jade_16a737d4f2.png",
              width: 200,
              height: 200
            })
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
      id: "faq",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .$, {
        title: t('faq'),
        description: faqContent
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
      id: "contact",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .$, {
        title: t('contact'),
        description: contactContent
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .$, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          mailChimpUrl: data.link
        })
      })
    })]
  });
}
});

/***/ }),

/***/ 5303:
/***/ ((module) => {

// Exports
module.exports = {
	"flexcontainer": "ChatBotBodyDiagram_flexcontainer__9edxS",
	"flexchild": "ChatBotBodyDiagram_flexchild__963Z_"
};


/***/ }),

/***/ 9991:
/***/ ((module) => {

// Exports
module.exports = {
	"informationBox": "ChatBotInfoBox_informationBox__Hng5C",
	"closeMessageBoxIcon": "ChatBotInfoBox_closeMessageBoxIcon__djJid",
	"informationBoxLogo": "ChatBotInfoBox_informationBoxLogo__ObdMe",
	"closeMessageBox": "ChatBotInfoBox_closeMessageBox__CaDL9"
};


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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

/***/ 5429:
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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4795:
/***/ ((module) => {

"use strict";
module.exports = require("react-chatbot-kit");

/***/ }),

/***/ 9779:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie-consent");

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

/***/ }),

/***/ 3041:
/***/ ((module) => {

"use strict";
module.exports = require("reactjs-popup");

/***/ }),

/***/ 3135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

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
var __webpack_exports__ = __webpack_require__.X(0, [400,664,675,254], () => (__webpack_exec__(2748)));
module.exports = __webpack_exports__;

})();