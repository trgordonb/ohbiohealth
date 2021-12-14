import React from "react";

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
  const optionsList = data.map((option) => (
    <button className="chatbot-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return (
    <div>
      <p>{optionsList}</p>
    </div>
  );
}

export default GenderOptions;