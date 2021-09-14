const BASE_URL = 'https://animechan.vercel.app/api/random'

let animeHeader = document.getElementById('anime-header')
let charName = document.getElementById('character-name')
let quote = document.getElementById('quote-p')
let quoteDiv = document.getElementById('quote-div')
let generateBttn = document.getElementById('generate-bttn')
let thumbUpBttn = document.getElementById('thumbs-up')
let thumbDownBttn = document.getElementById('thumbs-down')


let fetchData = () =>{
     fetch(BASE_URL)
        .then(response => response.json())
        .then(json => renderData(json))

}



let renderData = (animeInfo) => {
  

    animeHeader.innerText = `Anime: ${animeInfo.anime}`
    charName.innerText = `Character: ${animeInfo.character}`
    quote.innerText = `Quote: ${animeInfo.quote}`
    


}

generateBttn.addEventListener('click', fetchData)




















