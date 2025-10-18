const getCharacters = () => {
    return fetch("https://hp-api.onrender.com/api/characters/")
        .then((response) => response.json())
        .then((data) => data);
};

export default getCharacters;