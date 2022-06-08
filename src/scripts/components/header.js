const openDrop = ({target}) => {
    const bordsMenuItem = document.querySelector('#dropdown-list-item')
    if(target.id === 'dropdown-menu-link') {
        bordsMenuItem.classList.toggle('active')
    }
}

const addDropdownListener = () => {
    const header = document.querySelector('#header')
    header.addEventListener('click', openDrop)
}

export {openDrop, addDropdownListener}




