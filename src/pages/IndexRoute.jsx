import React from "react";
import MainComponent from "../components/main-component/MainComponent";
import PopularFlashcards from "../components/popular-flashcards/PopularFlashcards";
import AdvertFlashcards from "../components/advert-flashcards/AdvertFlashcards";
import Reviews from "../components/reviews/Reviews";
import Questions from "../components/faq/Questions";

const IndexRoute = () => {
  return (
    <div>
      <div>
        <MainComponent />
      </div>
      <PopularFlashcards />
      <AdvertFlashcards />
      <Reviews />
      <Questions />
    </div>
  );
};

export default IndexRoute;
