import React from "react";
import profile from "../../assets/prof (1).png";
import editprofile from "../../assets/prof (2).png";
import percent from "../../assets/Group 7.png";
import "./profile.css";

const ProfileComp = () => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="user-name-pic">
          <div className="pics">
            <img src={profile} alt="" />
            <img src={editprofile} alt="" className="ed" />
          </div>
          <h1>Sarah Hill</h1>
        </div>
        <div className="user-info">
          <div className="form">
            <label htmlFor="">
              <input type="text" placeholder="Sarahill@gmail.com" />
            </label>
            <label htmlFor="">
              <input type="text" placeholder="Sarah_H" />
            </label>
            <label htmlFor="">
              <input type="text" placeholder="Sarah" />
            </label>
            <label htmlFor="">
              <input type="text" placeholder="Hill" />
            </label>
            <label htmlFor="">
              <input type="text" placeholder="**********" />
            </label>
          </div>
          <button className="save-changes">Save Changes</button>
        </div>
      </div>
      <div className="profile-details">
        <div className="details-nav">
          <p>My Rating</p>
          <p>Flashcards you created</p>
          <p>Sets you learnt</p>
          <p>Popular flashcards</p>
        </div>
        <img src={percent} alt="" />
      </div>
    </div>
  );
};

export default ProfileComp;
