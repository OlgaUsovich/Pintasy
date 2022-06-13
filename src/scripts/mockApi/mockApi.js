import { URL_BOARDS } from "./constantLinks.js";

function getMockData(link, renderFunction) {
  fetch(link)
    .then((res) => res.json())
    .then(renderFunction);
}

getMockData(URL_BOARDS);
export { getMockData, URL_BOARDS };
