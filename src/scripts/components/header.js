const openDrop = ({ target }) => {
  const bordsMenuItem = document.querySelector("#dropdown-list");
  if (target.id === "dropdown-menu-btn") {
    bordsMenuItem.classList.toggle("d-block");
  }
};

const addDropdownListener = () => {
  const header = document.querySelector("#header");
  header.addEventListener("click", openDrop);
};

export { addDropdownListener };
