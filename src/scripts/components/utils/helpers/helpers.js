const createElement = (tag, className, text = "") => {
  const element = document.createElement(tag);
  element.classList = className;
  element.textContent = text;

  return element
};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export { createElement, capitalize };
