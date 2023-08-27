// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'AHA';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#97144d',
    },
    chatButton: {
      backgroundColor: '#97144d',
    },
  },
};

export default config;