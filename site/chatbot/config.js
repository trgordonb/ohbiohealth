import { createChatBotMessage } from 'react-chatbot-kit';
import GenderOptions from '../components/ChatBotOptions/GenderOptions';

const config = {  
    botName: "UserProfileBot",
    initialMessages: [
        createChatBotMessage(`Hi. I'm here to get to know you better.`),
        createChatBotMessage(`What is your gender ?`, {
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
              Conversation with Assistant
            </div>
        ),
    },
    state: {
        gender: "",
        weight: "",
        step: 1
    },
    widgets: [
        {
            widgetName: "genderoptions",
            widgetFunc: (props) => <GenderOptions {...props} />
        }
    ]
};

export default config;