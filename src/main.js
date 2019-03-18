import './main.scss';
import getHomeUI from './pages/home.js';
import getCharactersUI from './pages/characters.js';
import getDetailsUI from './pages/details.js';

let results;
let currentPage;

const createUI = (results) => {
    if (typeof currentPage !== 'undefined') {
        currentPage.parentNode.removeChild(currentPage);
    }

    switch (window.location.hash) {
        case '#/home': currentPage = getHomeUI(results);
            break;
        case '#/characters': currentPage = getCharactersUI(results);
            break;
        case '#/details': currentPage = getDetailsUI(results);
            break;
        default: currentPage = getHomeUI(results);
    }
    document.body.appendChild(currentPage)
}

window.addEventListener('load', () => {
    fetch('https://rickandmortyapi.com/api/character').then((response) => {
        return response.json();
    }).then((response) => {
        results = response.results;
        createUI(results);
    });
});

window.addEventListener('hashchange', () => {
    createUI(results);
});