import { getStorageData } from "../localStorageApi/localStorageApi.js";
import { renderCards } from "./Сard.js";
import { addMansoryLayout } from "../utils/helpers/helpers";
import { getCards } from "../mockApi/mockApi.js";
import { URL_CARDS } from "../mockApi/constants.js";

const openDrop = ({ target }) => {
  const bordsMenuItem = document.querySelector("#dropdown-list");
  if (target.id === "dropdown-menu-btn") {
    bordsMenuItem.classList.toggle("d-block");
  }
};

const addHeaderListeners = () => {
  const header = document.querySelector("#header");
  header.addEventListener("click", openDrop);
  header.addEventListener("input", onSearchInput);
};

function onSearchInput(event) {
  const search = document.querySelector("#input-header>input");
  const searchText = search.value.toLowerCase();
  getCards(URL_CARDS)
    .then(cards =>
      cards.filter(
        (card) => card.description.toLowerCase().search(searchText) !== -1
      )
    )
    .then(renderCards)
    .then(addMansoryLayout);
}

export { addHeaderListeners, onSearchInput };
