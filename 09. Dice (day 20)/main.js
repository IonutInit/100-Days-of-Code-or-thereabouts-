
let roll = document.querySelector("#button").addEventListener("click", getDice);
let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");
let die1Value = document.getElementById("die1-value");
let die2Value = document.getElementById("die2-value");
// let randomNumber1 = 0;
// let randomNUmber2 = 0;


// function getDice() {
//     let counter = 0;
//     while (counter < 5) {
//         let randomNumber1 = Math.floor(Math.random()*5);
//         die1.src = `assets/Style${style}_${randomNumber1 + 1}.svg`;
//         let randomNumber2 = Math.floor(Math.random()*5);
//         die2.src = `assets/Style${style}_${randomNumber2 + 1}.svg`; 
//         console.log(counter)
//         counter++;    }
//     ;
// }



function getDice() {
    let style = document.getElementById("style-number").value
    let randomNumber1 = Math.floor(Math.random()*5);
    die1.src = `assets/Style${style}_${randomNumber1 + 1}.svg`;
    let randomNumber2 = Math.floor(Math.random()*5);
    die2.src = `assets/Style${style}_${randomNumber2 + 1}.svg`;
    die1Value.textContent = randomNumber1 + 1;
    die2Value.textContent = randomNumber2 + 1;
}


// console.log(style)
console.dir(die1Value)