import { addDropdownListener } from "./components/header.js";
import cardsJson from "../data/cards.json";
import boardsJson from "../data/boards.json";
import { renderBoards } from "./components/boards.js";
import { getStorageData, setStorageData } from "./localStorageApi/localStorageApi.js";

init();

function init() {
  addDropdownListener();

  setTestData()

  if (!getStorageData("boards")) {
    setStorageData("boards", boardsJson);
  }
  if (!getStorageData("hidden")) {
    setStorageData("hidden", [])
  }
  const boards = getStorageData("boards");

  renderBoards(boards);
}
