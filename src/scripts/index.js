import { addDropdownListener } from "./components/header.js";
import cards from "../data/cards.json";
import board from "../data/boards.json";
import { renderBoards } from "./components/boards.js";
import {
  getStorageData,
  setStorageData,
} from "./localStorageApi/localStorageApi.js";
import { addDropdownListener } from "./components/Header.js";
import { renderBoards } from "./components/Boards.js";
import { setTestData, getStorageData } from "./localStorageApi/localStorageApi.js";
import { renderBoards } from "./components/boards.js";
import { renderCards } from "./components/Сards.js";
import { getStorageData, setStorageData, setTestData } from "./localStorageApi/localStorageApi.js";

init();

function init() {
  addDropdownListener();

  setTestData();

  const boards = getStorageData("boards");
  const cards = getStorageData("cards");

  renderBoards(boards);
  renderCards(cards);
}
