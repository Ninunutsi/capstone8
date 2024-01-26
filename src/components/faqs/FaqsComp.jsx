import React, { useState } from "react";
import faq from "../../assets/Rectangle 91.png";
import "./faqs.css";

const data = [
  {
    id: 1,
    question:
      "How does the flashcard system work on the website for language learning?",
    answer:
      "At the moment, our focus is on English and Georgian. However, we are actively exploring opportunities to expand and diversify language offerings in the near future.",
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
      "At the moment, our focus is on English and Georgian. However, we are actively exploring opportunities to expand and diversify language offerings in the near future.",
  },
  {
    id: 4,
    question: "How is user progress tracked on the website?",
    answer:
      "At the moment, our focus is on English and Georgian. However, we are actively exploring opportunities to expand and diversify language offerings in the near future.",
  },
  {
    id: 5,
    question:
      "How does the flashcard system work on the website for language learning?",
    answer:
      "At the moment, our focus is on English and Georgian. However, we are actively exploring opportunities to expand and diversify language offerings in the near future.",
  },
  {
    id: 6,
    question:
      "How does the flashcard system work on the website for language learning?",
    answer:
      "At the moment, our focus is on English and Georgian. However, we are actively exploring opportunities to expand and diversify language offerings in the near future.",
  },
];

const FaqsComp = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  return (
    <div className="faq-container">
      <img src={faq} alt="" />
      <div className="faq-texts">
        <h3>Frequentky asked questions</h3>
        <p>Questions you might ask about our product and service</p>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`faq-item ${
              activeQuestion === index ? "show-answer" : ""
            }`}
            onClick={() => handleQuestionClick(index)}
          >
            <h4 className="question">{item.question}</h4>
            <div className="answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsComp;
