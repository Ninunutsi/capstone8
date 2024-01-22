import React from "react";
import Question from "./Question";
import "./questions.css";
import { NavLink } from "react-router-dom";
const data = [
  {
    id: 1,
    question:
      "How does the flashcard system work on the website for language learning?",
    answer:
      "Our website employs an interactive flashcard system designed to enhance language learning. Users engage with visual and mnemonic aids to reinforce vocabulary and language structures, creating an immersive and effective learning experience.",
  },
  {
    id: 2,
    question: "What languages are currently supported on the platform?",
    answer:
      "At the moment, our focus is on English and Georgian. However, we are actively exploring opportunities to expand and diversify language offerings in the near future.",
  },
  {
    id: 3,
    question: "How is user progress tracked on the website?",
    answer:
      "The website includes a user-friendly dashboard that tracks your progress, highlighting completed lessons, quiz scores, and proficiency milestones, providing a comprehensive overview of your language learning journey.",
  },
];
const Questions = () => {
  return (
    <div className="faq-container-main">
      <div className="questions-header">
        <p>Questions Asked</p>
        <NavLink to="faq">
          <p className="see-more">See more </p>
        </NavLink>
      </div>
      <div className="questions-container">
        {data.map(({ question, answer }) => (
          <Question question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
