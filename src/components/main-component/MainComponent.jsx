import React from "react";
import "./main.css";
import pic from "../../assets/7504489 1.png";
import bg from "../../assets/Rectangle 107.png";

const MainComponent = () => {
  return (
    <main>
      <div className="pic">
        <img src={pic} alt="" />
      </div>
      <div className="bg">
        <img src={bg} alt="" />
      </div>

      <div className="main-texts">
        <h1>Unlock Fluency with Flashcards</h1>
        <p>
          Ignite Your Language Adventure: Unleash Fluency with Flashcards for
          English and Georgian. Dive into Dynamic Learning, Where Each Card
          Holds the Key to Bilingual Proficiency. Elevate Your Communication
          Skills Today!
        </p>
        <button>Start Learning</button>
      </div>
    </main>
  );
};

export default MainComponent;
