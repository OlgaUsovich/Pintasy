import { createElement } from "./utils/helpers/helpers.js";

function createCard(cardData) {
    const card = createElement('div', 'card');
    const image = createElement('img', 'image', cardData.image)
    const menuBtn = createElement('button', 'menuBtn');
    const avatar = createElement('img', 'ava', cardData.avatar)
    const description = createElement('span', 'text', cardData.description)

    image.src = cardData.image;
    avatar.src = cardData.avatar;
    description.src = document.createTextNode(cardData.description);
    card.id = cardData.id;

    card.append(image, menuBtn, avatar, description);

    return card
}

export { createCard }