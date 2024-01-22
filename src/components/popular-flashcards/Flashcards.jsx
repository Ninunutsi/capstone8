import React from "react";

const Flashcards = ({ name, number }) => {
  return (
    <div className="flashcard">
      <div className="flashcard-header">
        <p>Simple Words</p>
        <p>{name}</p>
      </div>
      <div className="flashcard-mid">32 Cards</div>
      <button className="flashcard-btn">Start Learning</button>
    </div>
  );
};

export default Flashcards;
