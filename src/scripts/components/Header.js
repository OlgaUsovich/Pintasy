import { CARDS } from "../localStorageApi/constants.js";
import { getStorageData } from "../localStorageApi/localStorageApi.js";
import { renderCards } from "./Сards.js";
import { addMansoryLayout } from "../utils/helpers/helpers";

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
    const cards = getStorageData(CARDS);
    const search = document.querySelector('#input-header>input');
    const searchText = search.value.toLowerCase();
    const searchCards = cards.filter((card) => card.description.toLowerCase().search(searchText) !== -1);

    renderCards(searchCards);
    addMansoryLayout();
}

export { addHeaderListeners, onSearchInput };