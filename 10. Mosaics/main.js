let countries = {    
    1: {
        slot: 9,
        name: "Thailand",
        rank: 51,
        used: false
    },
    2: {
        slot: 3,
        name: "Spain",
        rank: 52,
        used: false
    },
    3: {
        slot: 4,
        name: "Turkmenistan",
        rank: 53,
        used: false
    }  
}


let randNum = Math.floor(Math.random()*3);
let score = 5;

tile.src = `assets/Tiles1_${randNum + 1}.svg`;

const scoreText = document.querySelector("#score");
scoreText.textContent = score;



function playgame() {document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {        
        if (item.textContent == countries[randNum + 1].slot) {
            score++;
            scoreText.textContent = score;
            console.log("One point up");
            randNum = Math.floor(Math.random()*3);
            tile.src = `assets/Tiles1_${randNum + 1}.svg`;            
        } else {
            score--;
            scoreText.textContent = score;
            console.log("One point down");
            randNum = Math.floor(Math.random()*3);
            tile.src = `assets/Tiles1_${randNum + 1}.svg`;
        }
    })
  })}

  if(score > 0) {    
    playgame();
  } 