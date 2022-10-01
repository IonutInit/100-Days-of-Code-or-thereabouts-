
//defining game score variables
let userWins = 0;
let computerWins = 0;
let draws  = 0;
let result;

let userGame;
let computerGame;
let userFinalInput;
let computerFinalInput;
let keepOnPlaying;




//user input
function userAnswer() {  
    userAnswer = prompt("Rock (R), Paper(P), Scissors(S)?");
    let userGame = userAnswer.toUpperCase();
    if (userGame === "R") {
        return userGame = "Rock"
    } else if  (userGame === "P") {
        return userGame = "Paper"
    } else if (userGame === "S") {
        return userGame = "Scissors"
    }
}

userFinalInput = userAnswer(userGame);



//computer choice

function computerAnswer() {
    let randomChoice = Math.floor(Math.random ()*3);
let computerGame
if (randomChoice === 0) {
        return computerGame = "Rock"
    }
    else if (randomChoice === 1) {
        return computerGame = "Paper"
    }
    else if (randomChoice === 2) {
        return computerGame = "Scissors"
    }
}

computerFinalInput = computerAnswer(computerGame)


//coding the game 
function game() {
    if (userFinalInput == "Rock") {
        if (computerFinalInput == "Rock") {
            draws++;
            result = "It's a draw!"
        } else if (computerFinalInput == "Scissors") {
            computerWins++;
            result = "Boo! Computer wins..."
        } else {
           userWins++;
           result = "You win!"
        }
    }  else if (userFinalInput == "Scissors") {
        if (computerFinalInput == "Scissors") {
            draws++;
            result = "It's a draw!"
        } else if (computerFinalInput == "Rock") {
            computerWins++;
            result = "Boo! Computer wins..."
        } else {
            userWins++;
            result = "You win!"
        }
    }  else if (userFinalInput == "Paper") {
        if (computerFinalInput == "Paper") {
            draws++;
            result = "It's a draw!"
        } else if (computerFinalInput == "Scissors") {
            computerWins++;
            result = "Boo! Computer wins..."
        } else {
            userWins++;
            result = "You win!"
        }
    }
    alert(`You chose ${userFinalInput}. Computer chose ${computerFinalInput}. ${result}.  The score is ${userWins} - ${computerWins} (${draws} draws).`);
    document.getElementById("playerChoice").innerHTML = `You chose ${userFinalInput}.`;
    document.getElementById("computerChoice").innerHTML = `Computer chose ${computerFinalInput}.`;
    keepOnPlaying = confirm("Continue?");
}

game();



//! I wasn't able to create a game function that accepts parameters; this is OK for playing once, but puting this in a loop just make it repeats itself!

// while (keepOnPlaying) {
//     game();
// }