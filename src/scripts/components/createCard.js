import { createElement } from "./utils/helpers/helpers.js";

function createCard(cardData) {
    const card = createElement('div');
    const image = createElement('img')
    const menuBtn = createElement('button');
    const avatar = createElement('img')
    const description = createElement('span', cardData.text)

    card.id = 'card';
    menuBtn.id = 'menuBtn';
    avatar.id = 'ava';
    description.id = 'text';

    card.append(image, menuBtn, avatar, description);

    return card
}

export { createCard }