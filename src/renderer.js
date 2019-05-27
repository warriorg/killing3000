const hash = require('./hash.js');
const regexp = require('./regexp.js') 
const codeif = require('./codeif')

const mainContainer = document.querySelector(".main-container")
document.getElementById('hash').addEventListener('click', (e) => {
    mainContainer.innerHTML = hash.render()
    hash.registerEvent()
})

document.getElementById('regexp').addEventListener('click', (e) => {
    mainContainer.innerHTML = regexp.render()
})


document.getElementById('codeif').addEventListener('click', (e) => {
    mainContainer.innerHTML = codeif.render()
})