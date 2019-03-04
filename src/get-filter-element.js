export default (caption, href, amount, isActive = false) => {
  return `
    <a href=${href} class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``}">${caption} (${amount})</a>
    `;
};
