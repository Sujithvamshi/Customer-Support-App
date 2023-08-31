// in config.js
import { createChatBotMessage,createCustomMessage,createClientMessage } from 'react-chatbot-kit';
import Overview from './Overview';
const botName = 'AHA';

const config = {
  initialMessages: [createClientMessage('Hello AHA!'),createChatBotMessage(`Hi! I'm ${botName}`),
  createChatBotMessage(
    "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
    {
      withAvatar: false,
      delay: 500,
    }
  )],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#97144d',
    },
    chatButton: {
      backgroundColor: '#97144d',
    },
  }
};

export default config;