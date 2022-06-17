const getStorageData = (key) => {
  const storageData = JSON.parse(localStorage.getItem(key));

  return storageData;
};

const setStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const setTestData = () => {
  if (!getStorageData("cards")) {
    setStorageData("cards", cardsJson);
  }
  if (!getStorageData("boards")) {
    setStorageData("boards", boardsJson);
  }
  if (!getStorageData("hidden")) {
    setStorageData("hidden", ["1"])
  }
}

export { getStorageData, setStorageData, setTestData };
