import React from "react";
import "./games.css";

const Game2Comp = () => {
  return (
    <div className="game1-div">
      <div className="timer-div">3:40</div>
      <div className="questions-num">1/20</div>
      <div className="game2-words">
        <div className="main-word game2">Book</div>
        <div className="enter">
          <input type="text" placeholder="Enter Word" />
        </div>
      </div>
      <div className="btns">
        <button className="skip">Skip</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
};

export default Game2Comp;
