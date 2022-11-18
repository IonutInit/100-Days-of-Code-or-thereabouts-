import React from "react";

import "./options.css";

const Options = (props) => {
  const options = [
    {
      text: "Start learning Assembly",
      handler: () => {},
      id: 1,
    },
    { text: "See a nice picture", 
    handler: props.actionProvider.handleOof, 
    id: 2 },
    { text: "Search Amazon for ropes", 
    handler: () => {},
    id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;