let pennies = 1;
let giveChris;
const output = document.querySelector("output");


//Task 1
function handleClick() {
  console.log("I'm just to prove it's working!");
  pennies = pennies * 2;
  output.textContent = `${pennies} Pennies`;
}

//Task 2
let quote = document.querySelector('.quote');
quote.textContent = "Yeah, baby!";

//Task 3
let header = document.querySelector('h1');
header.style.textDecoration = 'underline';

//Task 4
function changeTipList(newTip) {
  let tipList = document.querySelector('#tips-list');
  newListItem = document.createElement('li');
  newListItem.textContent = newTip;
  tipList.appendChild(newListItem);
}

changeTipList('hello');
changeTipList("It Works!")

//Task 5
// document.title = "How to get rich through coding";

//Task 6
function changeTitle (newTitle) {
  document.title = newTitle;
}

changeTitle("Hack your poverty!")

//Task 7
function changeHeader (newHeader) {
  newHeader = document.querySelector('#inputHeader').value
  document.querySelector('h1').textContent = newHeader;
}

let tips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];

