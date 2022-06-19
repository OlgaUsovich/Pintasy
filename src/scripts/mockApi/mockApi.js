const getCards = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          reject(new Error("Page not found"));
        } else if (response.ok) {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  );

export { getCards };
