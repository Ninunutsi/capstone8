import React from "react";
import "./reviews.css";
import samantha from "../../assets/Ellipse 11.png";
import george from "../../assets/Ellipse 12.png";
import john from "../../assets/Ellipse 13.png";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="reviews-div">
      <p>Reviews</p>
      <div className="reviews-container">
        <Review img={samantha} name={"Samantha"} />
        <Review img={george} name={"George"} />
        <Review img={john} name={"John"} />
      </div>
    </div>
  );
};

export default Reviews;
