import {URL_CARDS} from "./constants";

const getCards = () =>
  new Promise((resolve, reject) =>
    fetch(URL_CARDS)
      .then((response) => {
        if (response.status === 404) {
          reject(new Error("Page not found"));
        } else if (response.ok) {
          return response.json();
        }
      })
      .then((cards) => resolve(cards))
      .catch((error) => reject(error))
  );

export { getCards };
