const input = document.querySelector("#search-bar");
const emojiContainer = document.querySelector("#emoji-container");

function renderEmojies(searchVal = ""){
    let filteredList = emojiList.filter((emojiObj) =>{
        if(emojiObj.description.indexOf(searchVal) != -1){
            return true;
        }

        if(emojiObj.tags.some((elem) => elem.startsWith(searchVal))){
            return true;
        }

        if(emojiObj.aliases.some((elem) => elem.startsWith(searchVal))){
            return true;
        }
    })
    // console.log(filteredList)
    emojiContainer.innerHTML = "";
    filteredList.forEach((emojiObj) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p class="emoji">${emojiObj.emoji}</p>
            <p class="alias">${emojiObj.aliases[0]}</p>
            <p class="description">${emojiObj.description}</p>
        `
        div.classList.add("emoji-card");
        emojiContainer.appendChild(div);
    })
}

window.onload = () => renderEmojies();

input.addEventListener("keyup",() => {
    let searchVal = input.value;
    renderEmojies(searchVal)
})