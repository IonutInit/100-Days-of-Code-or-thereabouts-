import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import Options from '../botComponents/options';
import FunPicture from '../botComponents/funPicture';


const config = {
    botName: 'Mr B',
    initialMessages: [createChatBotMessage(`I'm Mr B, the compassion bot. Feel free to pour your heart out.`)],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#023047'
        },
        chatButton: {
            backgroundColor: '#fb8500'
        },
    },
    widgets: [
        {
            widgetName: 'options',
            widgetFunc: (props) => <Options {...props} />
        },
        {
            widgetName: 'FunPicture',
            widgetFunc: (props) => <FunPicture {...props} />,
          },
    ],
}

export default config