import React from "react";
import pic from "../../assets/cuate.png";
import AddCard from "./AddCard";
import "./add.css";
const AddFlashCard = () => {
  return (
    <div className="addcard-container">
      <AddCard />
      <img src={pic} alt="" className="picture" />
    </div>
  );
};

export default AddFlashCard;
