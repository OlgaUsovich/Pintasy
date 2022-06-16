import { createElement } from "../utils/helpers/helpers.js";
import { getStorageData } from "../localStorageApi/localStorageApi.js"

function createCard(cardData) {
    const card = createElement('div', 'm-2 card-item');
    const imageContainer = createElement('div', 'position-relative');
    const image = createElement('img', 'card-image rounded-4', cardData.image)
    const menuBtn = createElement('button', 'modal-menu rounded-circle position-absolute bg-aqua bg-opacity-75');
    const descriptionContainer = createElement('div', 'd-flex gap-3 mt-2');
    const avatar = createElement('img', 'card-avatar rounded-circle', cardData.avatar)
    const description = createElement('span', 'card-description', cardData.description)

    image.src = cardData.image;
    avatar.src = cardData.avatar;
    description = document.createTextNode(cardData.description);

    imageContainer.append(image, menuBtn);
    descriptionContainer.append(avatar, description);
    card.append(imageContainer, descriptionContainer);

    return card
}

function renderCards(cards) {
    const cards = getStorageData(cards);
    const cardsContainer = document.getElement('#cards');
    cardsContainer.classList.add('row row-cols-lg-5 row-cols-sm-2 row-cols-md-3')

    cards.filter(card => {
        if (!card.hidden) {
            cardsContainer.append(createCard(card));
        }
    })
}

export { createCard, renderCards }