let button = document.querySelector("#new-quote-button").addEventListener("click", getQuote);
let textField = document.querySelector("#kanye-quote")
let list = document.querySelector("#kanye-quote-history")

function getQuote(){
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => {
        textField.textContent = data.quote       
    })
    /*Creating history - not the most elegant solution and surely not what was taught
    but I missed class; tried different methods, like pushing into an array, but didn't work*/
    let newListItem = document.createElement('li')  
    if (textField.textContent != "Insert Kanye Quote here.") {
        newListItem.textContent = textField.textContent
        list.appendChild(newListItem)
    }
}