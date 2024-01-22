import React from "react";
import "./games.css";

const Game1Comp = () => {
  return (
    <div className="game1-div">
      <div className="timer-div">3:40</div>
      <div className="questions-num">1/20</div>
      <div className="main-word">Book</div>
      <div className="answers">
        <div>
          <p>წიგნი</p>
        </div>
        <div>
          <p>დოქი</p>
        </div>
        <div>
          <p>ფანქარი</p>
        </div>

        <div>
          <p>სახლი</p>
        </div>
        <div>
          <p>ჭიქა</p>
        </div>
      </div>
      <div className="btns">
        <button className="skip">Skip</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
};

export default Game1Comp;
