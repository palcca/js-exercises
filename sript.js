
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    switch(randomNumber){
        case 1 : return "rock";
        case 2 : return  "paper";
        case 3 : return "scissors";
        default:
    }
}

let playerScore=0;
let computerScore=0;
const result = document.querySelector("#result");

function playRound(playerSelection, computerChoice){
    computerChoice=getComputerChoice();
    if (playerSelection === computerChoice){
        result.textContent="It's a tie, try again!";
        return;
    } else {
        switch (playerSelection){
            case "rock":
                switch (computerChoice){
                    case "paper": 
                            result.textContent="You lose! "+computerChoice+" beats "+playerSelection;
                            computerScore++;
                            return;
                    case "scissors":
                            result.textContent="You win! "+playerSelection+" beats "+computerChoice;
                            playerScore++;
                            return;
                }
                break; 
            case "paper":
                switch (computerChoice){
                    case "scissors": 
                            result.textContent="You lose! "+computerChoice+" beats "+playerSelection;
                            computerScore++;
                            return;
                    case "rock": 
                            result.textContent= "You win! "+playerSelection+" beats "+computerChoice;
                            playerScore++;
                            return;
                }
                break;
            case "scissors":
                switch (computerChoice){
                    case "rock": 
                            result.textContent= "You lose! "+computerChoice+" beats "+playerSelection;
                            computerScore++;
                    case "paper": 
                            result.textContent= "You win! "+playerSelection+" beats "+computerChoice;
                            playerScore++;
                }
                break;
        
        }
    }
}
const scoreContainer = document.querySelector("#scoreContainer");
const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", ()=> {
            playRound("rock");
            scoreContainer.textContent = 
                "Your score: " + playerScore + " ; Computer score: " + computerScore;
            }
);

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
            playRound("paper");
            scoreContainer.textContent = 
                "Your score: " + playerScore + " ; Computer score: " + computerScore;
            }
);

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
            playRound("scissors");
            scoreContainer.textContent = 
                "Your score: " + playerScore + " ; Computer score: " + computerScore;
            }
);



