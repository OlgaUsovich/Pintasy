import { renderCards } from "./Card.js";
import { getCards } from "../mockApi/mockApi.js";
import { URL_CARDS } from "../mockApi/constants.js";

const openDropdownMenu = ({ target }) => {
  const boardsMenuItem = document.querySelector("#dropdown-list");
  if (target.id === "dropdown-menu-btn") {
    boardsMenuItem.classList.toggle("d-block");
  }
};

const bindHeaderListeners = () => {
  const header = document.querySelector("#header");
  header.addEventListener("click", openDropdownMenu);
  header.addEventListener("input", onSearchInput);
};

function onSearchInput(event) {
  const search = document.querySelector("#input-header>input");
  const searchText = search.value.toLowerCase();
  getCards(URL_CARDS)
    .then((cards) =>
      cards.filter(
        (card) => card.description.toLowerCase().search(searchText) !== -1
      )
    )
    .then(renderCards)
}

export { bindHeaderListeners, onSearchInput };
