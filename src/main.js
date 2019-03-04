import renderFilters from '../src/render-filters.js';
import renderCards from '../src/render-cards';
import initiateFilterCards from '../src/initiate-filter-cards';

const allMoviesCardContainer = document.querySelector(`.films-list .films-list__container`);
const topRatedMoviesCardContainer = document.querySelector(`.films-list--top-rated .films-list__container`);
const mostCommentedMoviesCardContainer = document.querySelector(`.films-list--most-commented .films-list__container`);

renderFilters();
renderCards(allMoviesCardContainer);
renderCards(topRatedMoviesCardContainer);
renderCards(mostCommentedMoviesCardContainer);
initiateFilterCards();
