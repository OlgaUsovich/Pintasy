import boardsJson from "../../data/boards.json";
import { BOARDS, REPORTED } from "./constants.js";

const getStorageData = (key) => {
  const storageData = JSON.parse(localStorage.getItem(key));

  return storageData;
};

const setStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const setBoardsData = () => {
  if (!getStorageData(BOARDS)) {
    setStorageData(BOARDS, boardsJson);
  }
};

export { getStorageData, setStorageData, setBoardsData };
