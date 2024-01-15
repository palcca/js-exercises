
//get the random choice for computer
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

//play a round
//if its a tie return tie
//if player wins return winner
//if player loses return loser
function playRound(playerSelection, computerChoice){
    computerChoice=getComputerChoice();
    if (playerSelection === computerChoice){
        console.log("Its a tie!")
        return "tie";
    } else {
        switch (playerSelection){
            case "rock":
                switch (computerChoice){
                    case "paper": 
                            console.log("You lose! "+computerChoice+" beats "+playerSelection);
                            computerScore++;
                    case "scissors":
                            console.log("You win! "+playerSelection+" beats "+computerChoice);
                            playerScore++;
                }
                break; 
            case "paper":
                switch (computerChoice){
                    case "scissors": 
                            console.log("You lose! "+computerChoice+" beats "+playerSelection);
                            computerScore++;
                    case "rock":
                            console.log("You win! "+playerSelection+" beats "+computerChoice);
                            playerScore++;
                }
                break;
            case "scissors":
                switch (computerChoice){
                    case "rock": 
                            console.log("You lose! "+computerChoice+" beats "+playerSelection);
                            computerScore++;
                            return "loser";
                    case "paper":
                            console.log("You win! "+playerSelection+" beats "+computerChoice);
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
                "Your score: " + playerScore + "; Computer score: " + computerScore + ";" ;
            }
);

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
            playRound("paper");
            scoreContainer.textContent = 
                "Your score: " + playerScore + "; Computer score: " + computerScore + ";" ;
            }
);

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
            playRound("scissors");
            scoreContainer.textContent = 
                "Your score: " + playerScore + "; Computer score: " + computerScore + ";" ;
            }
);



