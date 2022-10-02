let userWins = 0;
let computerWins = 0;
let draws  = 0;
let result;

let userGame;
let computerGame;
let userFinalInput;
let computerFinalInput;
let keepOnPlaying;

let gameRatio = userWins/computerWins;
let gameRigging = 0.5;
let gameCounter = 0;


while (confirm("Continue?")) {
    function userAnswer() {  
        userAnswer = prompt("Rock (R), Paper(P), Scissors(S)?");
        userGame = userAnswer.toUpperCase();
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
        if (gameRatio > gameRigging && gameCounter > 1){
    //the rigged game, if at least one game has been played
    //with the current ratio of .5, it means that if user wins first game, computer automatically wins the second
            if (userGame === "R") {
                return computerGame === "Paper"
            } else if (userGame === "P") {
                return computerGame === "Scissors"
            } else if (userGame === "S") {
                return computerGame = "Rock"
            }
    //the correct game
        } else {
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
    }
    
    computerFinalInput = computerAnswer(computerGame)
       
    
    //coding the game 
    function game(human, computer) {
        if (human == "Rock") {
            if (computer == "Rock") {
                draws++;
                result = "It's a draw!"
            } else if (computer == "Scissors") {
                computerWins++;
                result = "Boo! Computer wins..."
            } else {
               userWins++;
               result = "You win!"
            }
        }  else if (human == "Scissors") {
            if (computer == "Scissors") {
                draws++;
                result = "It's a draw!"
            } else if (computer == "Rock") {
                computerWins++;
                result = "Boo! Computer wins..."
            } else {
                userWins++;
                result = "You win!"
            }
        }  else if (human == "Paper") {
            if (computer == "Paper") {
                draws++;
                result = "It's a draw!"
            } else if (computer == "Scissors") {
                computerWins++;
                result = "Boo! Computer wins..."
            } else {
                userWins++;
                result = "You win!"
            }
        }
        alert(`You chose ${userFinalInput}. Computer chose ${computerFinalInput}. ${result}.  The score is ${userWins} - ${computerWins} (${draws} draws).`);  
    }
    
    gameCounter++;
    game(userFinalInput, computerFinalInput);
}


//It kind of works, if you ignore the fact that it starts with the prompt, but I'm not happy about the method used, of having to nest everything
//inside the loop (Excel style), instead of elegantly calling each thing when I needed it 