const handleClick = (id) => {
    sessionStorage.setItem('character', id);
    location.assign('#/details');
};

const characters = results => results
    .map(element => {
        const container = document.createElement('div');
        container.setAttribute('id', element.id);
        container.setAttribute('class', 'character col-4');
        container.addEventListener('click', () => handleClick(element.id));

        const img = document.createElement('img');
        img.setAttribute('src', element.image);
        container.appendChild(img);

        return container;
    });

const getCharactersUI = (results) => {
    const charactersList = document.createElement('div');
    charactersList.setAttribute('class', 'row charactersList justify-content-center');

    characters(results).forEach(element => {
        charactersList.appendChild(element);
    });

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    container.appendChild(charactersList);

    return container;
}


export default getCharactersUI;
