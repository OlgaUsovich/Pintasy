import boardsJson from "../../data/boards.json";
import { BOARDS, REPORTED } from "./constants.js";

const getStorageData = (key) => {
  const storageData = JSON.parse(localStorage.getItem(key));

  return storageData;
};

const setStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const setTestData = () => {
  if (!getStorageData(BOARDS)) {
    setStorageData(BOARDS, boardsJson);
  }
  if (!getStorageData(REPORTED)) {
    setStorageData(REPORTED, []);
  }
};

export { getStorageData, setStorageData, setTestData };
