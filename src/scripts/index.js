import { bindHeaderListeners } from "./components/Header.js";
import { renderBoards } from "./components/Board.js";
import { renderCards } from "./components/Card.js";
import { getStorageData, setBoardsData } from "./localStorageApi/localStorageApi.js";
import { BOARDS } from "./localStorageApi/constants.js";
import { getCards } from "./mockApi/mockApi.js"
import { URL_CARDS } from "./mockApi/constants.js";


document.addEventListener('DOMContentLoaded', init);

function init() {
    setBoardsData();

    const boards = getStorageData(BOARDS);
    renderBoards(boards);

    getCards(URL_CARDS)
     .then(renderCards)

     bindHeaderListeners();
}

const modalWindow = document.querySelector('#modal')
