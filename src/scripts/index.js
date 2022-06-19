import { addHeaderListeners } from "./components/Header.js";
import { renderBoards } from "./components/Board.js";
import { renderCards } from "./components/Сards.js";
import { getStorageData, setTestData } from "./localStorageApi/localStorageApi.js";
import { BOARDS, CARDS } from "./localStorageApi/constants.js";
import { addMansoryLayout } from "./utils/helpers/helpers";

init();

function init() {
    addHeaderListeners();

    setTestData();

    const boards = getStorageData(BOARDS);
    const cards = getStorageData(CARDS);

    renderBoards(boards);
    renderCards(cards);

    addMansoryLayout();
}