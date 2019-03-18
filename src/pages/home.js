const handleClick = () => {
    location.assign('#/characters');
};

const getRandom = max => Math.floor(Math.random() * max);

const getUniqueElements = (size, max) => {
    const elements = [];
    while (elements.length < size) {
        const randomNumber = getRandom(max);
        if (!elements.includes(randomNumber)) {
            elements.push(randomNumber);
        }
    }
    return elements;
}

const randomCharacters = results => getUniqueElements(3, results.length)
    .map(element => {
        const container = document.createElement('div');
        container.setAttribute('id', results[element].id);
        container.setAttribute('class', 'character col-4');

        const img = document.createElement('img');
        img.setAttribute('src', results[element].image);
        container.appendChild(img);

        return container;
    });

const getHomeUI = (results) => {
    const charactersList = document.createElement('div');
    charactersList.setAttribute('class', 'row charactersList justify-content-center');

    randomCharacters(results).forEach(element => {
        charactersList.appendChild(element);
    });

    const footer =  document.createElement('div');
    footer.setAttribute('class', 'row justify-content-end');

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('class', 'col-2');

    const button = document.createElement('button');
    button.setAttribute('class', 'btn btn-primary');
    button.addEventListener('click', handleClick);
    const buttonText = document.createTextNode('Ver todos');
    button.appendChild(buttonText);

    footer.appendChild(buttonContainer);
    buttonContainer.appendChild(button);

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    container.appendChild(charactersList);
    container.appendChild(footer);

    return container;
}


export default getHomeUI;
