import { createElement } from "../utils/helpers/helpers";

function closeModalWindow({target}) {
    if(target.id === 'btn-close') {
        const modalWindow = document.querySelector('#modal')
        modalWindow.style.display = 'none'  
    }
    
}

export {closeModalWindow}

