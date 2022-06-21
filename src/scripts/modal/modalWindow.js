import { getStorageData } from "../localStorageApi/localStorageApi.js"
import { renderModalBoard } from "../components/Board.js"
import { BOARDS } from "../localStorageApi/constants.js"

function openModalWindow({ target }) {
    const modalWindow = document.querySelector("#modal");
    if (target.id === "add-button") {
      modalWindow.style.display = "block";
    }
  
    const boards = getStorageData(BOARDS);
    renderModalBoard(boards);
  }

  function closeModalWindow({ target }) {
    if (target.id === "btn-close" || target.id === "dropdown-menu-btn") {
      const modalWindow = document.querySelector("#modal");
      modalWindow.style.display = "none";
    }
  }

  export {openModalWindow, closeModalWindow}