import cardData from '../src/card-data';
import getCardElement from '../src/get-card-element';

const allMoviesCardContainer = document.querySelector(`.films-list .films-list__container`);

export default (cardContainer) => {
  const cardAmount = cardContainer === allMoviesCardContainer ? 7 : 2;
  for (let i = 0; i < cardAmount; i++) {
    cardContainer.insertAdjacentHTML(`beforeend`, getCardElement(cardData[0].title, cardData[0].rating, cardData[0].year, cardData[0].duration, cardData[0].genre, cardData[0].imgSrc, cardData[0].description, cardData[0].commentAmount));
  }
};
