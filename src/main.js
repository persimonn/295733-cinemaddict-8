// FILTERS

const filterFeatures = [
  {
    caption: `All movies`,
    href: `#all`,
    amount: 221,
    isActive: true
  },
  {
    caption: `Watchlist`,
    href: `#watchlist`,
    amount: 15,
    isActive: false
  },
  {
    caption: `History`,
    href: `#history`,
    amount: 33,
    isActive: false
  },
  {
    caption: `Favorites`,
    href: `#favorites`,
    amount: 11,
    isActive: false
  },
  {
    caption: `Stats`,
    href: `#stats`,
    amount: `2`,
    isActive: false
  }
];

const filterContainer = document.querySelector(`.main-navigation`);

const getFilterElement = (caption, href, amount, isActive = false) => {
  return `
    <a href=${href} class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``}">${caption} (${amount})</a>
    `;
};

const renderFilters = () => {
  filterFeatures.forEach((item) => {
    filterContainer.insertAdjacentHTML(`beforeend`, getFilterElement(item.caption, item.href, item.amount, item.isActive));
  });
};

const getRandomNumberInInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const filterCards = () => {
  const removableElements = allMoviesCardContainer.querySelectorAll(`.film-card`);
  removableElements.forEach((elem) => allMoviesCardContainer.removeChild(elem));
  const filteredCardAmount = getRandomNumberInInterval(1, 7);
  for (let i = 0; i < filteredCardAmount; i++) {
    allMoviesCardContainer.insertAdjacentHTML(`beforeend`, getCardElement(cardData[0].title, cardData[0].rating, cardData[0].year, cardData[0].duration, cardData[0].genre, cardData[0].imgSrc, cardData[0].description, cardData[0].commentAmount));
  }
};

renderFilters();


filterContainer.addEventListener(`click`, function (event) {
  event.preventDefault();
  filterCards();
  console.log(event); 
  // event.target.isActive = !event.target.isActive;     // NOT WORKING! 
  // event.target.setAttribute(isActive, true);        // NOT WORKING! 
});

// CARDS
const cardData = [
  {
    title: `The Assassination Of Jessie James By The Coward Robert Ford`,
    rating: 9.8,
    year: `2018`,
    duration: `1h&nbsp;13m`,
    genre: `Comedy`,
    imgSrc: `./images/posters/accused.jpg`,
    description: `A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.`,
    commentAmount: 13
  }
];

const allMoviesCardContainer = document.querySelector(`.films-list .films-list__container`);
const topRatedMoviesCardContainer = document.querySelector(`.films-list--top-rated .films-list__container`);
const mostCommentedMoviesCardContainer = document.querySelector(`.films-list--most-commented .films-list__container`);

const getCardElement = (title, rating, year, duration, genre, imgSrc, description, commentAmount) => {
  return `  
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${imgSrc}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <button class="film-card__comments">${commentAmount}comments</button>

      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
    </article>
  `;
};

const renderCards = (cardContainer) => {
  if (cardContainer === allMoviesCardContainer) {
    for (let i = 0; i < 7; i++) {
      cardContainer.insertAdjacentHTML(`beforeend`, getCardElement(cardData[0].title, cardData[0].rating, cardData[0].year, cardData[0].duration, cardData[0].genre, cardData[0].imgSrc, cardData[0].description, cardData[0].commentAmount));
    }
  } else {
    for (let i = 0; i < 2; i++) {
      cardContainer.insertAdjacentHTML(`beforeend`, getCardElement(cardData[0].title, cardData[0].rating, cardData[0].year, cardData[0].duration, cardData[0].genre, cardData[0].imgSrc, cardData[0].description, cardData[0].commentAmount));
    }
  }
};

renderCards(allMoviesCardContainer);
renderCards(topRatedMoviesCardContainer);
renderCards(mostCommentedMoviesCardContainer);
