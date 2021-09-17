const BASE_URL = 'https://animechan.vercel.app/api/random'
const SEARCH_URL = 'https://animechan.vercel.app/api/quotes/character?name='

let header = document.getElementById('header')
let animeHeader = document.getElementById('anime-header')
let charName = document.getElementById('character-name')
let quote = document.getElementById('quote-p')
let quoteDiv = document.getElementById('quote-div')
let generateBttn = document.getElementById('generate-bttn')
let thumbUpBttn = document.getElementById('thumbs-up')
let thumbDownBttn = document.getElementById('thumbs-down')
let charSearchInput = document.getElementById('search')
let charQuotesContainer = document.getElementById('searched-quotes')
let searchButton = document.getElementById('search-button')

const fetchData = () => {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => renderData(json))
}

const fetchQuery = (searchQuery) => {
    fetch(SEARCH_URL + searchQuery)
        .then((response) => response.json())
        .then((json) => renderCharacterFactory(json))
}

const renderCharacterFactory = (characterData) => {
    pageReset()
    if (!!characterData.error) {
        renderErrorMessage()
    } else {
        characterData.forEach((character) => renderCharacter(character));
    }
}

const getSearchString = () => {
    let searchQuery = charSearchInput.value;
    if (!!searchQuery) {
        fetchQuery(searchQuery)
    } else {
        renderErrorMessage()
    }
}

const pageReset = () => {
    charSearchInput.value = ""
    charQuotesContainer.innerHTML = ""
}

const renderErrorMessage = () => {
    pageReset()
    let errorMessage = document.createElement("p")
    errorMessage.innerText = "Anime Character Not Found"
    charQuotesContainer.appendChild(errorMessage)
}

const renderData = (animeInfo) => {
    animeHeader.innerText = `Anime: ${animeInfo.anime}`
    charName.innerText = `Character: ${animeInfo.character}`
    quote.innerText = `Quote: ${animeInfo.quote}`
}

const renderCharacter = (character) => {
    let li = document.createElement("li")
    li.innerHTML = `${character.character.bold()}: ${character.quote}`
    charQuotesContainer.appendChild(li)
}

function handleOnChangeEvent(x){
    document.body.style.backgroundImage = "url('"+x+"')"

    if (x != 'images/blossom.jpg' && x != "" && x != 'images/background2.jpg') {
        header.classList.add('headerbg')
    } else {
        header.classList.remove('headerbg')
    }
}

generateBttn.addEventListener('click', fetchData)

charSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        getSearchString()
    }
})

searchButton.addEventListener("click", (ee) => {
        ee.preventDefault()
        getSearchString()
})