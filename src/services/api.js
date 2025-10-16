const getCharacters = () => {
    return fetch("https://hp-api.onrender.com/api/characters/")
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.slice(0, 25);
            console.log(cleanData);
            return cleanData;
            });
};

export default getCharacters;