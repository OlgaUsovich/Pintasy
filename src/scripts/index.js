import { addDropdownListener } from "./components/header.js";
import cardsJson from "../data/cards.json";
import boardsJson from "../data/boards.json";
import { renderBoards } from "./components/boards.js";
import { renderCards } from "./components/cards.js";
import { getStorageData, setStorageData } from "./localStorageApi/localStorageApi.js";

init();

function init() {
  addDropdownListener();

  setTestData()
  if (!getStorageData("cards")) {
    setStorageData("cards", cardsJson);
  }
  if (!getStorageData("boards")) {
    setStorageData("boards", boardsJson);
  }
  if (!getStorageData("hidden")) {
    setStorageData("hidden", [])
  }
  const boards = getStorageData("boards");

  const cards = getStorageData("cards");
  renderCards(cards);

  renderBoards(boards);
}
