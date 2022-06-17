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

init();

function init() {
  addDropdownListener();

  if (!getStorageData("cards")) {
    setStorageData("cards", cards);
  }

  if (!getStorageData("boards")) {
    setStorageData("boards", board);
  }
  setTestData()

  const boards = getStorageData("boards");

  renderBoards(boards);
}