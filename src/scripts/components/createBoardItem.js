import { createElement, capitalize } from "./utils/helpers/helpers.js";

const createBoardItem = (board) => {
  const boardItem = createElement("li", "dropdown-item");
  boardItem.id = board.id;

  const linkToBoardItem = createElement("a", "link-desk-item-1");
  linkToBoardItem.href = "#";
  linkToBoardItem.textContent = capitalize(board.name);

  boardItem.append(linkToBoardItem);

  return boardItem;
};

export { createBoardItem };
