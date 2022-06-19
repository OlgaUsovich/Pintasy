import Masonry from "masonry-layout";

const createElement = (tag, className, text = "") => {
  const element = document.createElement(tag);
  element.classList = className;
  element.textContent = text;

  return element;
};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

function addMansoryLayout () {
  const grid = document.getElementById('cards');

  const masonry = new Masonry(grid, {
    itemSelector: ".card-item",
    gutter: 10,
    fitWidth: true
  });
}

export { createElement, capitalize, addMansoryLayout };
