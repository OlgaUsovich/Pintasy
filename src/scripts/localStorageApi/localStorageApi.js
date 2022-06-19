import cardsJson from "../../data/cards.json";
import boardsJson from "../../data/boards.json";
import { BOARDS, CARDS, HIDDEN } from "./constants.js";

const getStorageData = (key) => {
  const storageData = JSON.parse(localStorage.getItem(key));

  return storageData;
};

const setStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const setTestData = () => {
  if (!getStorageData(CARDS)) {
    setStorageData(CARDS, cardsJson);
  }
  if (!getStorageData(BOARDS)) {
    setStorageData(BOARDS, boardsJson);
  }
  if (!getStorageData(HIDDEN)) {
    setStorageData(HIDDEN, []);
  }
};

export { getStorageData, setStorageData, setTestData };
