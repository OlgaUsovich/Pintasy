import { createBoardItem } from "./createBoardItem.js"

const dataItem = [
    {
      "cardsIds": [],
      "name": "vel ut et",
      "id": "1"
    },
    {
      "cardsIds": [],
      "name": "est numquam cumque",
      "id": "2"
    },
    {
      "cardsIds": [],
      "name": "maxime tempore ut",
      "id": "3"
    }
  ]


function renderBoards(boards) {
    const boardList = document.querySelector('#dropdown-list')
    for (const board of boards) {
        const boardItem = createBoardItem(board)
        boardList.append(boardItem)
    }
    console.log(boardList)
}

export {renderBoards, dataItem}