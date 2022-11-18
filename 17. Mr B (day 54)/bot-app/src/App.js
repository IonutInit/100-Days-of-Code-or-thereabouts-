import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
import config from './ChatBot/config'
import ActionProvider from './ChatBot/ActionProvider';
import MessageParser from './ChatBot/MessageParser';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{marginBottom: '50px'}}>Mr B + Ionut = BFFs</h1>
      <div className='botContainer'>
      <Chatbot 
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
      </div>
     
    </div>
  );
}

export default App;
