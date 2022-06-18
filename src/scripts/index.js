import { addHeaderListeners } from "./components/header.js";
import { renderBoards } from "./components/boards.js";
import { renderCards } from "./components/Сards.js";
import { getStorageData, setStorageData, setTestData } from "./localStorageApi/localStorageApi.js";

init();

function init() {
  addHeaderListeners();

  setTestData();

  const boards = getStorageData("boards");
  const cards = getStorageData("cards");

  renderBoards(boards);
  renderCards(cards);
}
