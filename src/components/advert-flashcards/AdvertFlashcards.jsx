import React from "react";
import "./ad.css";
import left from "../../assets/Vertical Squiggle Line 03.png";
import right from "../../assets/Vertical Squiggle Line 4.png";

const AdvertFlashcards = () => {
  return (
    <div className="ad-div">
      <div className="ad-div-container">
        <img src={left} alt="" className="left" />
        <img src={right} alt="" className="right" />
        <h1>Smash your new language with our Flashcards</h1>
        <div className="ad-divs">
          <p>Explore Flashcards</p>
          <p>Support 24/7</p>
          <p>Create Flashcards</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertFlashcards;
