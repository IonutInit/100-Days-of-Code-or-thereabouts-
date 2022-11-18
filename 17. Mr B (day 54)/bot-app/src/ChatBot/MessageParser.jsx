import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }

    if (message.includes('dog')) {
      actions.handleDog();
    }

    if (message.includes('know')) {
      actions.handleKnowing();
    }

    if (message.includes('nice')) {
      actions.handleTool();
    }

    if (message.includes('nice')) {
      actions.handlePositivity();
    }

    if (message.includes('fun')) {
      actions.handleFun();
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;