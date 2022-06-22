import Masonry from "masonry-layout";
import { getStorageData, setStorageData } from "../localStorageApi/localStorageApi.js";
import { REPORTED, BOARDS } from "../localStorageApi/constants.js";
import { createElement, createRadioBtnGroup } from "../utils/helpers/helpers.js";
import { openModalWindow, closeModalWindow } from "../modal/modalWindow.js";

function createCard({id: cardId, image: cardImage, description: cardDescription, avatar: cardAvatar}) {
    const card = createElement('div', 'p-2 card-item');
    const imageContainer = createElement('div', 'position-relative');
    const image = createElement('img', 'card-image rounded-4');
    const menuBtn = createElement('button', 'modal-menu rounded-circle position-absolute bg-aqua bg-opacity-75');
    const descriptionContainer = createElement('div', 'd-flex gap-3 mt-2');
    const avatar = createElement('img', 'card-avatar rounded-circle');
    const description = createElement('span', 'card-description', cardDescription);
    const cardMenu = createElement('div', 'card-menu d-none bg-secondary position-absolute rounded-4 p-3 bg-opacity-75 d-flex flex-column justify-content-center align-items-stretch gap-3');
    const addBtn = createElement('button', 'btn btn-outline-dark', 'Add to board');
    const complaintBtn = createElement('button', 'btn btn-outline-dark', 'Complain');

    card.id = cardId;
    menuBtn.id = cardId;
    image.src = cardImage;
    avatar.src = cardAvatar;
    addBtn.id = "add-button";
    complaintBtn.id = "complain-btn";
    addBtn.dataset.card = cardId;

    cardMenu.append(addBtn, complaintBtn);
    imageContainer.append(image, menuBtn, cardMenu);
    descriptionContainer.append(avatar, description);
    card.append(imageContainer, descriptionContainer);

    const modalWindow = document.querySelector("#modal");

    menuBtn.addEventListener("click", onCardMenuClick);

    addBtn.addEventListener("click", openModalWindow);
    complaintBtn.addEventListener("click", onComplainBtnClick);
    modalWindow.addEventListener("click", closeModalWindow);

    return card;
}

function onCardMenuClick({target}) {
    if (target.id === this.id) {
        const cardMenu = this.nextSibling;
        cardMenu.classList.toggle("d-none");
    }
}

function renderCards(cards) {
    const cardsContainer = document.getElementById('cards');
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
    const hiddenCards = getStorageData(REPORTED);

    cards.forEach(card => {
        if (!hiddenCards.includes(card.id)) {
            cardsContainer.append(createCard(card));
        }
    })

    let totalImagesLoaded = 0;
    const totalImages = cards.reduce((acc, cur) => acc.add(cur.image).add(cur.avatar), new Set()).size;

    cardsContainer.addEventListener("load", (e) => {
        totalImagesLoaded += 1
        if (totalImagesLoaded === totalImages) {
            const masonry = new Masonry(cardsContainer, {
                itemSelector: ".card-item",
                gutter: 10,
                fitWidth: true,
            });
        }
    }, true)
}

function addCardToBoard(cardId, boardId) {
    const boards = getStorageData(BOARDS);

    boards.forEach((board) => {
        if (board.id === boardId) {
            board.cardsIds.push(cardId);
        }
    });

    setStorageData(BOARDS, boards);
}

function complainCard(cardId) {
    const reportedCards = getStorageData(REPORTED);

    if (!reportedCards) {
        setStorageData(REPORTED, []);
    }
    reportedCards.push(cardId);

    setStorageData(REPORTED, reportedCards);
}

function onComplainBtnClick({target}) {
  if (target.id === 'complain-btn') {

    const radioBtnData = {
      notRelevantInput: 'Not relevant to me',
      notRightLanguageInput: 'Not in a language I understand',
      spamInput: 'Seen Pin too many times',
      badPictureInput: 'Blurry or pixelated image'
    }


    const modalWindow = document.getElementById('modal');
    const modalWindowForm = document.getElementById('modal-form');
    const formContainer = document.getElementById('complain-container');
    const formContainerBtns = document.getElementById('complain-container-btns');
    const boardsList = document.getElementById('modal-list-item-board');

    if (formContainer) {
      formContainer.remove();
      formContainerBtns.remove();
    }

    if (boardsList) {
        boardsList.remove();
    }

    const btnContainer = createElement('div', 'd-flex gap-3');
    const submitBtn = createElement('button', 'btn btn-dark', "Send");
    const closeBtn = createElement('button', 'btn btn-light', "Cancel");

    submitBtn.type = "submit";
    closeBtn.type = "button";
    btnContainer.id = "complain-container-btns"

    btnContainer.append(submitBtn, closeBtn);
    modalWindowForm.append(createRadioBtnGroup(radioBtnData, 'complains'), btnContainer);

    modalWindow.style.display = "block";
  }
}

export { createCard, renderCards, addCardToBoard, complainCard }