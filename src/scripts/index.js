import { addDropdownListener } from "./components/Header.js";
import { renderBoards } from "./components/Boards.js";
import { setTestData, getStorageData } from "./localStorageApi/localStorageApi.js";

init();

function init() {
  addDropdownListener();

  setTestData()

  const boards = getStorageData("boards");

  renderBoards(boards);
}
