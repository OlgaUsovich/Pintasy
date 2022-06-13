import { addDropdownListener } from "./components/header.js";
import cardsJson from "../data/cards.json";
import boardsJson from "../data/boards.json";
import { renderBoards } from "./components/boards.js";
import { getMockData, url } from "./mockApi/mockApi.js";
import { getStorageData, setStorageData} from "./localStorageApi/localStorageApi.js";

init();

function init() {
  addDropdownListener();

  if (!getStorageData("cards")) {
    setStorageData("cards", cardsJson);
  }

  if (!getStorageData("boards")) {
    setStorageData("boards", boardsJson);
  }
  const boards = getStorageData("boards");
  renderBoards(boards);
  getMockData(url, renderBoards)
}
