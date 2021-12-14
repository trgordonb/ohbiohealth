(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4626:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Hero_hero__q3Jev"
};


/***/ }),

/***/ 9180:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__S4aNf",
	"right": "Layout_right__mkOfM"
};


/***/ }),

/***/ 1992:
/***/ ((module) => {

// Exports
module.exports = {
	"newsletter": "Newsletter_newsletter__IJRJq",
	"formgroup": "Newsletter_formgroup__ZYbKe",
	"message": "Newsletter_message__W5gOk",
	"subscribeBtn": "Newsletter_subscribeBtn__eFUpf"
};


/***/ }),

/***/ 2888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-icons/si"
const si_namespaceObject = require("react-icons/si");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Hero.module.css
var Hero_module = __webpack_require__(4626);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./components/Hero.js


function Hero() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Hero_module_default()).hero,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Welcome To OH Biohealth"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Energized for health"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(9180);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: external "react-chatbot-kit"
const external_react_chatbot_kit_namespaceObject = require("react-chatbot-kit");
var external_react_chatbot_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_chatbot_kit_namespaceObject);
;// CONCATENATED MODULE: external "reactjs-popup"
const external_reactjs_popup_namespaceObject = require("reactjs-popup");
var external_reactjs_popup_default = /*#__PURE__*/__webpack_require__.n(external_reactjs_popup_namespaceObject);
;// CONCATENATED MODULE: ./components/ChatBotOptions/GenderOptions.js


function GenderOptions(props) {
    const data = [
        {
            text: "Male",
            handler: props.actionProvider.handleGenderMale,
            id: 1
        },
        {
            text: "Female",
            handler: props.actionProvider.handleGenderFemale,
            id: 2
        }, 
    ];
    const optionsList = data.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: "chatbot-button",
            onClick: option.handler,
            children: option.text
        }, option.id)
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: optionsList
        })
    }));
}
/* harmony default export */ const ChatBotOptions_GenderOptions = (GenderOptions);

;// CONCATENATED MODULE: ./chatbot/config.js



const config = {
    botName: "UserProfileBot",
    initialMessages: [
        (0,external_react_chatbot_kit_namespaceObject.createChatBotMessage)(`Hi. I'm here to get to know you better.`),
        (0,external_react_chatbot_kit_namespaceObject.createChatBotMessage)(`What is your gender ?`, {
            withAvatar: false,
            delay: 500,
            widget: "genderoptions"
        })
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#28334AFF"
        },
        chatButton: {
            backgroundColor: "#567572ff"
        }
    },
    customComponents: {
        header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    backgroundColor: "#567572ff",
                    padding: "5px",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    display: "flex",
                    fontSize: "0.85rem",
                    paddingTop: "12.5px",
                    paddingBottom: "12.5px",
                    paddingRight: "12.5px",
                    paddingLeft: "12.5px",
                    fontWeight: "700",
                    alignItems: "center"
                },
                children: "Conversation with Assistant"
            })
    },
    state: {
        gender: "",
        weight: "",
        step: 1
    },
    widgets: [
        {
            widgetName: "genderoptions",
            widgetFunc: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(ChatBotOptions_GenderOptions, {
                    ...props
                })
        }
    ]
};
/* harmony default export */ const chatbot_config = (config);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./chatbot/MessageParser.js

class MessageParser {
    constructor(actionProvider, state){
        this.actionProvider = actionProvider;
        this.state = state;
    }
    parse(message) {
        const lowercase = message.toLowerCase();
        if (lowercase.includes('done')) {
            if (this.state.step === 2) {
                console.log('State: ', this.state);
                external_axios_default().put(`/api/profiles/${this.state.userId}`, {
                    gender: this.state.gender
                }).then((response)=>{
                    console.log('Response: ', response);
                });
                this.actionProvider.handleGoodbye();
            }
        } else {
            this.actionProvider.handleUnknown();
        }
    }
}
/* harmony default export */ const chatbot_MessageParser = (MessageParser);

;// CONCATENATED MODULE: ./chatbot/ActionProvider.js
class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage){
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }
    setChatbotMessage = (message, newstate)=>{
        let stateKey = Object.keys(newstate).length === 1 ? Object.keys(newstate)[0] : null;
        let stateValue = Object.values(newstate).length === 1 ? Object.values(newstate)[0] : null;
        if (stateKey && stateValue) {
            this.setState((state)=>({
                    ...state,
                    [stateKey]: stateValue,
                    step: state.step + 1,
                    messages: [
                        ...state.messages,
                        message
                    ]
                })
            );
        } else {
            this.setState((state)=>({
                    ...state,
                    messages: [
                        ...state.messages,
                        message
                    ]
                })
            );
        }
    };
    handleGenderMale = ()=>{
        const message = this.createChatbotMessage("We have updated your profile accordingly. Type done to save.");
        this.setChatbotMessage(message, {
            gender: 'male'
        });
    };
    handleGenderFemale = ()=>{
        const message = this.createChatbotMessage("We have updated your profile accordingly. Type done to save.");
        this.setChatbotMessage(message, {
            gender: 'female'
        });
    };
    handleUnknown = ()=>{
        const message = this.createChatbotMessage("Not sure what you mean, try again?");
        this.setChatbotMessage(message, {
        });
    };
    handleGoodbye = ()=>{
        const message = this.createChatbotMessage("Thanks for your time. Hope to hear from you soon.");
        this.setChatbotMessage(message, {
        });
    };
}
/* harmony default export */ const chatbot_ActionProvider = (ActionProvider);

;// CONCATENATED MODULE: external "react-mailchimp-subscribe"
const external_react_mailchimp_subscribe_namespaceObject = require("react-mailchimp-subscribe");
var external_react_mailchimp_subscribe_default = /*#__PURE__*/__webpack_require__.n(external_react_mailchimp_subscribe_namespaceObject);
;// CONCATENATED MODULE: external "html-entities"
const external_html_entities_namespaceObject = require("html-entities");
// EXTERNAL MODULE: ./styles/Newsletter.module.css
var Newsletter_module = __webpack_require__(1992);
var Newsletter_module_default = /*#__PURE__*/__webpack_require__.n(Newsletter_module);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
;// CONCATENATED MODULE: ./components/NewsletterForm.js





const NewsletterForm = ({ status , message: message1 , onValidated  })=>{
    const { 0: error , 1: setError  } = (0,external_react_.useState)(null);
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)(null);
    const { t , i18n  } = (0,external_react_i18next_.useTranslation)();
    const handleFormSubmit = ()=>{
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
    const handleInputKeyEvent = (event)=>{
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            event.preventDefault();
            handleFormSubmit();
        }
    };
    const getMessage = (message)=>{
        var ref, ref1;
        if (!message) {
            return null;
        }
        const result = (message === null || message === void 0 ? void 0 : message.split('-')) ?? null;
        if ("0" !== (result === null || result === void 0 ? void 0 : (ref = result[0]) === null || ref === void 0 ? void 0 : ref.trim())) {
            return (0,external_html_entities_namespaceObject.decode)(message);
        }
        const formattedMessage = (result === null || result === void 0 ? void 0 : (ref1 = result[1]) === null || ref1 === void 0 ? void 0 : ref1.trim()) ?? null;
        return formattedMessage ? (0,external_html_entities_namespaceObject.decode)(formattedMessage) : null;
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Newsletter_module_default()).newsletter,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: t('subscribe')
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Newsletter_module_default()).formgroup,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            onChange: (event)=>{
                                var ref;
                                return setEmail((event === null || event === void 0 ? void 0 : (ref = event.target) === null || ref === void 0 ? void 0 : ref.value) ?? '');
                            },
                            type: "email",
                            placeholder: t('youremail'),
                            onKeyUp: (event)=>handleInputKeyEvent(event)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (Newsletter_module_default()).subscribeBtn,
                            onClick: handleFormSubmit,
                            children: t('submit')
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Newsletter_module_default()).message,
                    children: [
                        status === "sending" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: t('sending')
                        }),
                        status === "error" || error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: error || getMessage(message1)
                            }
                        }) : null,
                        status === "success" && status !== "error" && !error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: t('thanksubscribe')
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_NewsletterForm = (NewsletterForm);

;// CONCATENATED MODULE: ./components/NewsletterSubscribe.js



const NewsletterSubscribe = ()=>{
    const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_mailchimp_subscribe_default()), {
        url: MAILCHIMP_URL,
        render: (props)=>{
            const { subscribe , status , message  } = props || {
            };
            return(/*#__PURE__*/ jsx_runtime_.jsx(components_NewsletterForm, {
                status: status,
                message: message,
                onValidated: (formData)=>subscribe(formData)
            }));
        }
    }));
};
/* harmony default export */ const components_NewsletterSubscribe = (NewsletterSubscribe);

;// CONCATENATED MODULE: ./pages/index.js














function HomePage({ currentUser  }) {
    const { 0: showChatBot , 1: setShowChatBot  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (currentUser && !currentUser.hasProvidedInfo) {
            external_react_toastify_.toast.info('We would like to know more about you. Please chat with our assistant down here.');
            setShowChatBot(true);
            if (currentUser.id) {
                chatbot_config = {
                    ...chatbot_config,
                    state: {
                        ...chatbot_config.state,
                        userId: currentUser.id
                    }
                };
            }
        }
    }, [
        currentUser
    ]);
    const closeChatbot = ()=>{
        setShowChatBot(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).container,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_NewsletterSubscribe, {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).right,
                children: showChatBot && /*#__PURE__*/ jsx_runtime_.jsx((external_reactjs_popup_default()), {
                    trigger: (open)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "btn-icon btn-secondary",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiChatbot, {
                                }),
                                "Assistant"
                            ]
                        })
                    ,
                    position: "top right",
                    closeOnDocumentClick: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_chatbot_kit_default()), {
                        config: chatbot_config,
                        messageParser: chatbot_MessageParser,
                        actionProvider: chatbot_ActionProvider
                    })
                })
            })
        ]
    }));
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2888));
module.exports = __webpack_exports__;

})();