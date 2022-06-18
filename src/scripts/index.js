import { addHeaderListeners } from "./components/Header.js";
import { renderBoards } from "./components/Board.js";
import { renderCards } from "./components/Сards.js";
import { getStorageData,setTestData } from "./localStorageApi/localStorageApi.js";

init();

function init() {
  addHeaderListeners();

  setTestData();

  const boards = getStorageData("boards");
  const cards = getStorageData("cards");

  renderBoards(boards);
  renderCards(cards);
}
