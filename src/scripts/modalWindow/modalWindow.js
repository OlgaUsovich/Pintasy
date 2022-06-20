import { createElement } from "../utils/helpers/helpers";

function closeModalWindow({target}) {
    if(target.id === 'btn-close') {
        const modalWindow = document.querySelector('#modal')
        modalWindow.style.display = 'none'  
    }
    
}

function openModalWindow({target}) {
    const modalWindow = document.querySelector('#modal')
    if(target.id === 'add-button') {
        modalWindow.style.display = 'block'
    }
    const boards = getStorageData(BOARDS);
    renderModalBoard(boards);
      
}
export {closeModalWindow, openModalWindow}

