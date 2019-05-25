const hash = require('./hash.js');

console.log(hash)

document.getElementById('hash').addEventListener('click', (e) => {
    const mainContainer = document.querySelector(".main-container")
    mainContainer.innerHTML = hash.render()
    hash.registerEvent()
})



