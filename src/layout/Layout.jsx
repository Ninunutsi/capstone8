import React, { useState } from "react";
import "./layout.css";
import logo from "../assets/FASHION__1_-removebg-preview 1.png";
import { NavLink, Outlet } from "react-router-dom";
import instagram from "../assets/🦆 icon _instagram alt icon_.png";
import linkedin from "../assets/🦆 icon _social linkedin_.png";
import facebook from "../assets/🦆 icon _Facebook icon_.png";
import twitter from "../assets/🦆 icon _twitter circle_.png";
import support from "../assets/support_agent.png";
import Modal from "../components/modal/Modal";

const Layout = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div className="layout-header">
        <header>
          <div>
            <NavLink to="/">
              <img src={logo} alt="loog" />
            </NavLink>
          </div>
          <nav>
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/learn">
                <li>Learn</li>
              </NavLink>
              <NavLink to="/add">
                <li>Add Flashcards</li>
              </NavLink>
              <NavLink to="/library">
                <li>Library</li>
              </NavLink>
              <NavLink to="/profile">
                <li>Profile</li>
              </NavLink>
            </ul>
            <button className="log-in">Log In</button>
            <button className="sign-up">Sign Up</button>
          </nav>
        </header>
      </div>
      <Outlet />
      <div className="layout-footer">
        <div className="footer-left">
          <img src={logo} alt="" className="logo" />
          <div className="social-net">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="footer-mid-nav">
          <ul>
            <li>Home</li>
            <li>Flashcards</li>
            <li>Play and learn</li>
            <li>Add Flashcards</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>Library</li>
            <li>Terms & Conditions</li>
            <NavLink to="faq">
              <li>FAQs</li>
            </NavLink>
          </ul>
        </div>
        <div className="footer-right">
          <div className="sup-btn" onClick={handleClick}>
            <img src={support} alt="" />
            Support
          </div>
          {visible && <Modal />}
          <p>Copyright 2023. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
