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

function renderModalBoard (boards) {
    const boardList = document.querySelector('#modal-list-item-board')
    for (const board of boards) {
      const boardItem = createBoardItem(board);
      boardItem.classList = 'boards-btn'
      boardList.append(boardItem);
    }
  }

export {closeModalWindow, openModalWindow, renderModalBoard}

