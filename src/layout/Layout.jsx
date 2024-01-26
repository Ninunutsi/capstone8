import React, { useState } from "react";
import "./layout.css";
import logo from "../assets/FASHION__1_-removebg-preview 1.png";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import instagram from "../assets/instagramIcon.png";
import linkedin from "../assets/linkedinIcon.png";
import facebook from "../assets/fbIcon.png";
import twitter from "../assets/twitterIcon.png";
import support from "../assets/support_agent.png";
import Modal from "../components/modal/Modal";
import { useNavigate } from "react-router-dom/dist";

const Layout = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    setVisible(!visible);
  };

  const renderNavLink = (to, text) => (
    <NavLink
      key={to}
      to={to}
      isActive={() => location.pathname === to}
      className={location.pathname === to ? "active" : ""}
    >
      <li>{text}</li>
    </NavLink>
  );

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
              {renderNavLink("/", "Home")}
              {renderNavLink("/learn", "Learn")}
              {renderNavLink("/add", "Add Flashcards")}
              {renderNavLink("/library", "Library")}
              {renderNavLink("/profile", "Profile")}
            </ul>
            <button onClick={() => navigate("login")} className="log-in">
              Log In
            </button>
            <button onClick={() => navigate("signup")} className="sign-up">
              Sign Up
            </button>
          </nav>
        </header>
      </div>
      <Outlet />
      <div className="layout-footer">
        <div className="footer-left">
          <img src={logo} alt="" className="logo" />
          <div className="social-net">
            <img src={instagram} alt="icon" />
            <img src={facebook} alt="icon" />
            <img src={linkedin} alt="icon" />
            <img src={twitter} alt="icon" />
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
