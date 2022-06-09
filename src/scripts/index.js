import { openDrop, addDropdownListener } from "./components/header.js";
import cards from "../data/cards.json";
import boards from "../data/boards.json";
import {getStorageData, setStorageData} from "./localStorageApi/localStorageApi.js"

init()

function init () {
    addDropdownListener()
}