const openDrop = ({ target }) => {
  const bordsMenuItem = document.querySelector("#dropdown-list");
  if (target.id === "dropdown-menu-link") {
    bordsMenuItem.classList.toggle("d-block");
  }
};

const addDropdownListener = () => {
  const header = document.querySelector("#header");
  header.addEventListener("click", openDrop);
};

function onSearchCards(event) {
  const cards = getStorageData(cards);
  const search = document.querySelector('#input-header');
  const searchText = includes(search.value.toLowerCase());
  const searchCards = cards.filter((card) => card.text.toLowerCase().search(searchText) != -1)

  render(searchCards)
}

export { addDropdownListener, onSearchCards };