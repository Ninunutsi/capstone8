import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LayoutLearn = () => {
  return (
    <div className="layout-learn">
      <div className="layout-learn-btns">
        <NavLink to="/learn">
          <button>Choose Correct meaning</button>
        </NavLink>
        <NavLink to="/learn/game2">
          <button>Write correct meaning</button>
        </NavLink>
      </div>
      <div className="game1-container">
        <div className="game1-container-header">
          <label>
            <select name="" id="">
              <option value="" selected disabled>
                Choose game style
              </option>
            </select>
          </label>

          <label htmlFor="">
            set timer:
            <input type="text" placeholder="3 min" className="timer" />
          </label>

          <button className="start-game">Start Game</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutLearn;
