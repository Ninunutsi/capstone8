import React from "react";
import err from "../assets/Untitled design_page-0001 1.png";
import "./wildcard.css";
import { NavLink } from "react-router-dom";

const Wildcard = () => {
  return (
    <div className="wildcard-div">
      <img src={err} alt="" />
      <div className="wildcard-texts">
        <p className="err-msg">Oopps!</p>
        <p className="err-msg">Page not found</p>
        <p className="msg">If you want to continue studying click here</p>
        <NavLink to="/">
          <button className="btn">Start learning</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Wildcard;
