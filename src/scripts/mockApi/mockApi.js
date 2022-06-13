import { URL_BOARDS } from "../components/utils/constants.js";

function getMockData(link, renderFunction) {
  fetch(link)
    .then((res) => res.json())
    .then(renderFunction);
}

export { getMockData, URL_BOARDS };
