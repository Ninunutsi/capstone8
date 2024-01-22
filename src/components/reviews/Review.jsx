import React from "react";
import "./reviews.css";

const Review = ({ name, img }) => {
  return (
    <div className="review-div">
      <img src={img} alt="" />
      <div className="review-texts">
        <h5>{name}</h5>
        <p>
          This website's dynamic flashcards have redefined my language learning
          experience
        </p>
      </div>
    </div>
  );
};

export default Review;
