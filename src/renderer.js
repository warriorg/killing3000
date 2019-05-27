const hash = require('./hash.js');
const regexp = require('./regexp.js') 

document.getElementById('hash').addEventListener('click', (e) => {
    const mainContainer = document.querySelector(".main-container")
    mainContainer.innerHTML = hash.render()
    hash.registerEvent()
})

document.getElementById('regexp').addEventListener('click', (e) => {
    const mainContainer = document.querySelector(".main-container")
    mainContainer.innerHTML = regexp.render()
})
