import filterCards from '../src/filter-cards';
import filterData from '../src/filter-data.js';

const filterContainer = document.querySelector(`.main-navigation`);

export default () => {
  filterContainer.addEventListener(`click`, function (event) {
    event.preventDefault();
    const previouslySelectedFilter = document.querySelector(`.main-navigation__item--active`);
    previouslySelectedFilter.classList.remove(`main-navigation__item--active`);
    const selectedFilter = event.target;
    selectedFilter.classList.add(`main-navigation__item--active`);
    filterData.isActive = !filterData.isActive;
    filterCards();
  });
};
