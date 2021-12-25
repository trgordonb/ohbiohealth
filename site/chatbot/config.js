import { createChatBotMessage } from 'react-chatbot-kit';
import YesNoOptions from '../components/ChatBotOptions/YesNoOptions';
import { nextI18next } from '../utils/i18n';

const config = {  
    botName: "UserProfileBot",
    initialMessages: [
        createChatBotMessage(nextI18next.i18n.t('surveyintro')),
        createChatBotMessage(nextI18next.i18n.t('q1'), {
            withAvatar: false,
            delay: 500,
            widget: "yesno"
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
        header: () => (
            <div
              style={{
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
              }}
            >
              {nextI18next.i18n.t('talkassistant')}
            </div>
        ),
    },
    state: {
        muscleache: false,
        needlesensation: false,
        burningsensation: false,
        numbsensation: false,
        step: 1
    },
    widgets: [
        {
          widgetName: "yesno",
          widgetFunc: (props) => <YesNoOptions {...props} />
        }
    ]
};

export default config;