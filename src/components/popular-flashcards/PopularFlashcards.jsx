import React from "react";
import "./popular.css";
import Flashcards from "./Flashcards";
const PopularFlashcards = () => {
  return (
    <div className="popular-flashcards">
      <p>Popular Flashcards</p>
      <div className="flashcards-div">
        <Flashcards name="John Oliver" />
        <Flashcards name="John Oliver" />
        <Flashcards name="John Oliver" />
      </div>
    </div>
  );
};

export default PopularFlashcards;
