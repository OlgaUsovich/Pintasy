import { addDropdownListener } from "./components/header.js";
import cardsJson from "../data/cards.json";
import boardsJson from "../data/boards.json";
import { getStorageData, setStorageData } from "./localStorageApi/localStorageApi.js";

init()

function init () {
    addDropdownListener()

    if(!getStorageData('cards')){
        setStorageData('cards', cardsJson);
    }

    if(!getStorageData('boards')){
        setStorageData('boards', boardsJson)
    }
}