import { createBoardItem } from "./createBoardItem.js"
import { getStorageData } from "../localStorageApi/localStorageApi.js"

const boards = getStorageData('boards')


function renderBoards(boards) {
    const boardList = document.querySelector('#dropdown-list')
    for (const board of boards) {
        const boardItem = createBoardItem(board)
        boardList.append(boardItem)
    }
    console.log(boardList)
}

export {renderBoards, boards}