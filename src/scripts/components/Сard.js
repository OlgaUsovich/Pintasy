import Masonry from "masonry-layout";

import { createElement } from "../utils/helpers/helpers.js";
import { getStorageData, setStorageData } from "../localStorageApi/localStorageApi.js";
import { BOARDS, REPORTED } from "../localStorageApi/constants.js";

function createCard(cardData) {
    const card = createElement('div', 'p-2 card-item');
    const imageContainer = createElement('div', 'position-relative');
    const image = createElement('img', 'card-image rounded-4');
    const menuBtn = createElement('button', 'modal-menu rounded-circle position-absolute bg-aqua bg-opacity-75');
    const descriptionContainer = createElement('div', 'd-flex gap-3 mt-2');
    const avatar = createElement('img', 'card-avatar rounded-circle');
    const description = createElement('span', 'card-description', cardData.description);
    const cardMenu = createElement('div', 'card-menu d-none bg-secondary position-absolute rounded-4 p-3 bg-opacity-75 d-flex flex-column justify-content-center align-items-stretch gap-3');
    const addBtn = createElement('button', 'btn btn-outline-dark','Add to board');
    const complaintBtn = createElement('button', 'btn btn-outline-dark','Complain');

    card.id = cardData.id;
    menuBtn.id = cardData.id;
    image.src = cardData.image;
    avatar.src = cardData.avatar;

    cardMenu.append(addBtn, complaintBtn);
    imageContainer.append(image, menuBtn, cardMenu);
    descriptionContainer.append(avatar, description);
    card.append(imageContainer, descriptionContainer);

    menuBtn.addEventListener('click', onCardMenuClick);
     
    return card
}

function onCardMenuClick({target}){
    if(target.id === this.id){
        const cardMenu = this.nextSibling;
        cardMenu.classList.toggle('d-none');
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

    boards.forEach(board => {
        if (board.id === boardId) {
            board.cardsIds.push(cardId);
        }
    })

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

export { createCard, renderCards, addCardToBoard, complainCard }