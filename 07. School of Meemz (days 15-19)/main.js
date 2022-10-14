let meme1 = document.querySelector("#meme-1");
let meme2 = document.querySelector("#meme-2");
let meme3 = document.querySelector("#meme-3");

let meme1checkbox = document.querySelector("#meme-1-checkbox");
let meme2checkbox = document.querySelector("#meme-2-checkbox");
let meme3checkbox = document.querySelector("#meme-3-checkbox");

let submitButton = document.querySelector("#submit");
let refreshButton = document.querySelector("#refresh");

//function when button clicked which refreshes images 
//fetch new memes from API 

async function getImage() {
    let api = await fetch ("https://api.imgflip.com/get_memes");
    let data = await api.json();
    console.log(data);
    let memeImages = [];
    for (let i=0; i<3; i++) {
        let random = Math.floor(Math.random() * 101);
        let meme = data.data.memes[random];
        let memeURL = meme.url;
        memeImages.push(memeURL);
    }

    if (meme1checkbox.checked !== true) {
        meme1.src = memeImages[0];
    }
    if (meme2checkbox.checked !== true) {
        meme2.src = memeImages[1];
    }
    if (meme3checkbox.checked !== true) {
        meme3.src = memeImages[2]; 
    }
    
    canSubmit();
}

function canSubmit() {
    if (meme1checkbox.checked === true && meme2checkbox.checked === true && meme3checkbox.checked === true) {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", true);
    }
}

refreshButton.addEventListener("click", getImage);

