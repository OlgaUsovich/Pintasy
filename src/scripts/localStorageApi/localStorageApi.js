const getStorageData = (key) => {
  const storageData = JSON.parse(localStorage.getItem(key));

  return storageData;
};

const setStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getStorageData, setStorageData };
