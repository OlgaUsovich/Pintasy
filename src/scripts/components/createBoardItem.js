import { createElement, capitalize } from "./utils/helpers/helpers.js";

function createBoardItem (board) {
  const boardItem = createElement("li", "");
  boardItem.id = board.id;

  const linkToBoardItem = createElement("a", "dropdown-item");
  linkToBoardItem.href = "#";
  linkToBoardItem.textContent = capitalize(board.name);

  boardItem.append(linkToBoardItem);

  return boardItem;
};

export { createBoardItem };
