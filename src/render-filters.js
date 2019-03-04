import getFilterElement from '../src/get-filter-element.js';
import filterData from '../src/filter-data.js';

const filterContainer = document.querySelector(`.main-navigation`);

export default () => {
  filterData.forEach((item) => {
    filterContainer.insertAdjacentHTML(`beforeend`, getFilterElement(item.caption, item.href, item.amount, item.isActive));
  });
};
