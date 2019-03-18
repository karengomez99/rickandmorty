import { lorem } from '../config/texts';

const getCharacter = (element) => {
    const container = document.createElement('div');
    container.setAttribute('class', 'character col-4');

    const img = document.createElement('img');
    img.setAttribute('src', element.image);
    container.appendChild(img);

    return container;
}

const getDetailsUI = (results) => {
    const id = sessionStorage.getItem('character');

    const caracterContainer = document.createElement('div');
    caracterContainer.setAttribute('class', 'row justify-content-center');

    const description = document.createElement('div');
    description.setAttribute('class', 'col-6');

    const descriptionText = document.createTextNode(lorem);
    description.appendChild(descriptionText);

    caracterContainer.appendChild(getCharacter(results[Number(id) - 1]));
    caracterContainer.appendChild(description);

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    container.appendChild(caracterContainer);

    return container;
}


export default getDetailsUI;
