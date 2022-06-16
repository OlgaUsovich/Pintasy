import { addDropdownListener } from "./components/Header.js";
import cardsJson from "../data/cards.json";
import boardsJson from "../data/boards.json";
import { renderBoards } from "./components/Boards.js";
import { setTestData, getStorageData } from "./localStorageApi/localStorageApi.js";

init();

function init() {
  addDropdownListener();

  setTestData()

  const boards = getStorageData("boards");

  renderBoards(boards);
}
