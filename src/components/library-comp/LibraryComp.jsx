import React from "react";
import "./library.css";
import search from "../../assets/amico.png";

const LibraryComp = () => {
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode("A".charCodeAt(0) + index)
  );
  return (
    <div className="library-container">
      <div className="search-left">
        <div className="dropdowns">
          <label>
            <select name="" id="">
              <option value="" disabled selected>
                Choose native language
              </option>
              <option value="georgian">Georgian</option>
              <option value="English">English</option>
            </select>
          </label>

          <label>
            <select name="" id="">
              <option value="" disabled selected>
                Choose level
              </option>
              <option value="first">1</option>
              <option value="second">2</option>
            </select>
          </label>
        </div>
        <div className="alphabet">
          {alphabet.map((letter) => (
            <p key={letter}>{letter}</p>
          ))}
        </div>
        <p className="other-filters">Use Other Filters</p>
        <div>
          <label htmlFor="">
            <select name="" id="">
              <option value="" disabled selected>
                Choose category
              </option>
              <option value="first">1</option>
              <option value="second">2</option>
            </select>
          </label>
        </div>

        <div className="radios">
          <label htmlFor="">
            <input type="radio" name="" id="" />
            Flashcards added by You
          </label>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            Popular Flashcards
          </label>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            Popular Flashcards
          </label>
        </div>
        <button className="search">Search</button>

        <img src={search} alt="" className="search-pic" />
      </div>
      <div className="library-right">
        <div className="library-list">
          <div className="list-item">
            <p>წიგნი</p>
            <p>-</p>
            <p>Book</p>
          </div>
          <div className="list-item">
            <p>წიგნი</p>
            <p>-</p>
            <p>Book</p>
          </div>
          <div className="list-item">
            <p>წიგნი</p>
            <p>-</p>
            <p>Book</p>
          </div>
          <div className="list-item">
            <p>წიგნი</p>
            <p>-</p>
            <p>Book</p>
          </div>
          <div className="list-item">
            <p>წიგნი</p>
            <p>-</p>
            <p>Book</p>
          </div>
          <div className="list-item">
            <p>წიგნი</p>
            <p>-</p>
            <p>Book</p>
          </div>
          <div className="list-item">
            <p>წიგნი</p>
            <p>-</p>
            <p>Book</p>
          </div>
          <div className="list-item">
            <p>წიგნი</p>
            <p>-</p>
            <p>Book</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryComp;
