import React from "react";
import "./questions.css";

const Question = ({ question, answer }) => {
  return (
    <div className="question-div">
      <h4>{question}</h4>
      <p>{answer}</p>
    </div>
  );
};

export default Question;
