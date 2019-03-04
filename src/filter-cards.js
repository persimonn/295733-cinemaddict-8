import getRandomNumberInInterval from '../src/utils.js';
import cardData from '../src/card-data';
import getCardElement from '../src/get-card-element';

const allMoviesCardContainer = document.querySelector(`.films-list .films-list__container`);

export default () => {
  const removableElements = allMoviesCardContainer.querySelectorAll(`.film-card`);
  removableElements.forEach((elem) => allMoviesCardContainer.removeChild(elem));
  const filteredCardAmount = getRandomNumberInInterval(1, 7);
  for (let i = 0; i < filteredCardAmount; i++) {
    allMoviesCardContainer.insertAdjacentHTML(`beforeend`, getCardElement(cardData[0].title, cardData[0].rating, cardData[0].year, cardData[0].duration, cardData[0].genre, cardData[0].imgSrc, cardData[0].description, cardData[0].commentAmount));
  }
};
