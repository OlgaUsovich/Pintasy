const createBoardItem = (board) => {
    const boardItem = createElement('li', 'dropdown-item')
    boardItem.id = board.id
    
    const linkToBoardItem = createElement('a', 'link-desk-item-1')
    linkToBoardItem.href = '#'
    linkToBoardItem.textContent = upperCase(board.name)

    boardItem.append(linkToBoardItem)

    return boardItem
}

export {createBoardItem}