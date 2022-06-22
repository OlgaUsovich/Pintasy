import { getStorageData } from "../localStorageApi/localStorageApi.js";
import { BOARDS } from "../localStorageApi/constants.js";
import { createElement, capitalize, showMessage } from "../utils/helpers/helpers.js";
import { renderCards, addCardToBoard } from "./Card.js";
import { getCards } from "../mockApi/mockApi.js";
import { URL_CARDS } from "../mockApi/constants.js";

function createBoardItem(board) {
    const boardItem = createElement("li", "");
    const linkToBoardItem = createElement("a", "dropdown-item");

    boardItem.id = board.id;
    linkToBoardItem.href = "#";
    linkToBoardItem.id = "dropdown-menu-btn";
    linkToBoardItem.textContent = capitalize(board.name);

    boardItem.append(linkToBoardItem);

    return boardItem;
}

function renderBoards(boards) {
    const boardList = document.querySelector("#dropdown-list");
    for (const board of boards) {
        const boardItem = createBoardItem(board);
        boardItem.addEventListener("click", onBoardClick);
        boardList.append(boardItem);
    }
}

function renderModalBoards(boards) {
    const modalWindow = document.getElementById("modal");
    const modalForm = document.getElementById("modal-form");
    const cardId = modalWindow.dataset.card;

    const radioForm = document.getElementById('complain-container');
    const radioFormButtons = document.getElementById('complain-container-btns');
    const boardList = document.getElementById("modal-list-item-board");

    if (radioForm) {
        radioForm.remove();
        radioFormButtons.remove();
    }

    if (boardList) {
        boardList.remove();
    }

    const newBoardList = createElement("ul");
    newBoardList.id = "modal-list-item-board";
    modalForm.append(newBoardList);

    for (const board of boards) {
        const boardItem = createBoardItem(board);
        if (board.cardsIds.includes(cardId)) {
            const messageText = "This card is already on the selected board!";
            boardItem.addEventListener('click', () => showMessage(messageText, 'text-bg-danger', 'btn-close-white'));
        } else {
            boardItem.addEventListener('click', onModalBoardClick)
        }

        boardItem.classList = "boards-btn";
        console.log(newBoardList)
        newBoardList.append(boardItem);
    }
}

function onBoardClick({target}) {
    const boards = getStorageData(BOARDS);
    const board = boards.find((board) => board.id === target.parentElement.id);
    getCards(URL_CARDS)
        .then((cards) => cards.filter((card) => board.cardsIds.includes(card.id)))
        .then(renderCards)
}

function onModalBoardClick({target}) {
    const boardId = target.parentElement.id;
    const cardId = document.querySelector("#modal").dataset.card;
    addCardToBoard(cardId, boardId);

    const boards = getStorageData(BOARDS);
    const board = boards.find(board => board.id === boardId);
    const messageText = `Card added on ${board.name}`;
    showMessage(messageText, 'text-bg-success', 'btn-close-white');
}

export {createBoardItem, renderBoards, renderModalBoards};
