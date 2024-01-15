
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
let playerSelection;

//play a round
//if its a tie return tie
//if player wins return winner
//if player loses return loser
function playRound(playerSelection, computerChoice){
    computerChoice=getComputerChoice();
    //playerSelection=playerSelection.toLowerCase();
    if (playerSelection === computerChoice){
        console.log("Its a tie!")
        return "tie";
    } else {
        switch (playerSelection){
            case "rock":
                switch (computerChoice){
                    case "paper": 
                            console.log("You lose! "+computerChoice+" beats "+playerSelection);
                            return "loser";
                    case "scissors":
                            console.log("You win! "+playerSelection+" beats "+computerChoice)
                            return "winner";
                }
                break; 
            case "paper":
                switch (computerChoice){
                    case "scissors": 
                            console.log("You lose! "+computerChoice+" beats "+playerSelection)
                            return "loser";
                    case "rock":
                            console.log("You win! "+playerSelection+" beats "+computerChoice)
                            return "winner";
                }
                break;
            case "scissors":
                switch (computerChoice){
                    case "rock": 
                            console.log("You lose! "+computerChoice+" beats "+playerSelection)
                            return "loser";
                    case "paper":
                            console.log("You win! "+playerSelection+" beats "+computerChoice)
                            return "winner";
                }
                break;
        
        }
    }
}
const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", ()=> {
            playRound("rock")
            }
);

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
            playRound("paper");
            }
);

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
            playRound("scissors");
            }
);


