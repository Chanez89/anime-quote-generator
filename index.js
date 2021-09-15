const BASE_URL = 'https://animechan.vercel.app/api/random'
const SEARCH_URL = 'https://animechan.vercel.app/api/quotes/character?name='



let animeHeader = document.getElementById('anime-header')
let charName = document.getElementById('character-name')
let quote = document.getElementById('quote-p')
let quoteDiv = document.getElementById('quote-div')
let generateBttn = document.getElementById('generate-bttn')
let thumbUpBttn = document.getElementById('thumbs-up')
let thumbDownBttn = document.getElementById('thumbs-down')

let charSearchInput = document.getElementById('search')
let charQuotesContainer = document.getElementById('searched-quotes')

const fetchData = () => {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => renderData(json))
}



const fetchQuery = (searchQuery) => {
    fetch(SEARCH_URL + searchQuery)
        .then((response) => response.json())
        .then((json) => renderCharacterFactory(json));
};


const renderCharacterFactory = (characterData) => {
    pageReset();
    if (!!characterData) {
        characterData.forEach((character) => renderCharacter(character));
    }

};

const getSearchString = () => {
    let searchQuery = charSearchInput.value;
    if (!!searchQuery) {

        fetchQuery(searchQuery);
    } else {
        renderErrorMessage();
    }
};


charSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        getSearchString();
    }
});

const fetchQuery = (searchQuery) => {
    fetch(SEARCH_URL + searchQuery)
        .then((response) => response.json())
        .then((json) => renderCharacterFactory(json));
};


const renderCharacterFactory = (characterData) => {
    pageReset();
    if (!!characterData) {
        characterData.forEach((character) => renderCharacter(character));
    }

};

const getSearchString = () => {
    let searchQuery = charSearchInput.value;
    if (!!searchQuery) {

const pageReset = () => {
    charSearchInput.value = "";
    charQuotesContainer.innerHTML = "";
};

const renderErrorMessage = () => {
    pageReset();
    let errorMessage = document.createElement("p");
    errorMessage.innerText = "Anime Character Not Found";
    charQuotesContainer.appendChild(errorMessage);
};

        fetchQuery(searchQuery);
    } else {
        renderErrorMessage();
    }
};

const pageReset = () => {
    charSearchInput.value = "";
    charQuotesContainer.innerHTML = "";
};

const renderErrorMessage = () => {
    pageReset();
    let errorMessage = document.createElement("p");
    errorMessage.innerText = "Anime Character Not Found";
    charQuotesContainer.appendChild(errorMessage);
};

let renderData = (animeInfo) => {
    animeHeader.innerText = `Anime: ${animeInfo.anime}`
    charName.innerText = `Character: ${animeInfo.character}`
    quote.innerText = `Quote: "${animeInfo.quote}"`
}


const renderCharacter = (character) => {
    let li = document.createElement("li");
    li.innerText = character.quote;
    charQuotesContainer.appendChild(li);

let renderData = (animeInfo) => {
    animeHeader.innerText = `Anime: ${animeInfo.anime}`
    charName.innerText = `Character: ${animeInfo.character}`
    quote.innerText = `Quote: "${animeInfo.quote}"`
}

};


const renderCharacter = (character) => {
    boldChar = character.character.bold()
    let li = document.createElement("li");
    li.innerText = `${boldChar}: ${character.quote}`;
    charQuotesContainer.appendChild(li);
};


generateBttn.addEventListener('click', fetchData)

generateBttn.addEventListener('click', fetchData)

charSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        getSearchString();
    }
});