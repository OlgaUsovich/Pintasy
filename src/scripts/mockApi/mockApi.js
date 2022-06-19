const getCards = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          console.log("error 404!!!!");
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  );

export { getCards };
