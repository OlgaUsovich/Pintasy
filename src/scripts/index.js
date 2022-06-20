import { addHeaderListeners } from "./components/Header.js";
import { renderBoards } from "./components/Board.js";
import { renderCards } from "./components/Сard.js";
import { getStorageData, setTestData } from "./localStorageApi/localStorageApi.js";
import { BOARDS } from "./localStorageApi/constants.js";
import { getCards } from "./mockApi/mockApi.js"
import { URL_CARDS } from "./mockApi/constants.js";
import { addMansoryLayout } from "./utils/helpers/helpers";


init();

function init() {
    addHeaderListeners();

    setTestData();

    const boards = getStorageData(BOARDS);

    renderBoards(boards);
    getCards(URL_CARDS)
     .then(renderCards)
     .then(addMansoryLayout)
}