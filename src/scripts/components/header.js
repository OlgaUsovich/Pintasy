const listItem = document.querySelector('#item')
const header = document.querySelector('#header')


const openDrop = ({target}) => {
    if(target.id === 'dropdownMenuLink') {
        listItem.classList.toggle('active')
    }
}

header.addEventListener('click', openDrop)

export {openDrop}