import { getStorageData } from "../localStorageApi/localStorageApi.js";
import { BOARDS } from "../localStorageApi/constants.js";
import { createElement, capitalize } from "../utils/helpers/helpers.js";
import { renderCards } from "./Сards.js";
import { getCards } from "../mockApi/mockApi.js";
import { URL_CARDS } from "../mockApi/constants.js";

function createBoardItem(board) {
  const boardItem = createElement("li", "");
  boardItem.id = board.id;

  const linkToBoardItem = createElement("a", "dropdown-item");
  linkToBoardItem.href = "#";
  linkToBoardItem.id = "dropdown-menu-btn";
  linkToBoardItem.textContent = capitalize(board.name);

  boardItem.append(linkToBoardItem);
  boardItem.addEventListener("click", onBoardClick);
  return boardItem;
}

function renderBoards(boards) {
  const boardList = document.querySelector("#dropdown-list");
  for (const board of boards) {
    const boardItem = createBoardItem(board);
    boardList.append(boardItem);
  }
}

function onBoardClick({ target }) {
  const boards = getStorageData(BOARDS);
  const board = boards.find((board) => board.id === target.parentElement.id);
  getCards(URL_CARDS)
    .then((cards) => cards.filter((card) => board.cardsIds.includes(card.id)))
    .then(renderCards)
}

export { createBoardItem, renderBoards };
