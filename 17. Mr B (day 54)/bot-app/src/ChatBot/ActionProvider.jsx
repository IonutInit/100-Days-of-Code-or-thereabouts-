import React from 'react';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Are you lonely today?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleKnowing = () => {
    const botMessage = createChatBotMessage('Because you programmed me to ask, you tool.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTool = () => {
    const botMessage = createChatBotMessage(`Sorry mate, I'm just telling it how it is.`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleFun = () => {
    const botMessage = createChatBotMessage(`Dude, just unplug me.`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOof = () => {
    const botMessage = createChatBotMessage(
      "A nice picture just for you.",
      {
        widget: 'FunPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  const handlePositivity = () => {
     setTimeout(function(){
      const botMessage = createChatBotMessage(
      "But here are some suggestions that might cheer you up.",
      {
        widget: 'options',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
     }, 2000) 
    
    
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOof,
            handleKnowing,
            handleTool,
            handleFun,
            handlePositivity,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;