
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
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection === computerChoice){
        
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

//5 round of rock, paper, scissors
//make variable for counting score
//loop 5 round of r-p-s;
    //get the players choice
    //call function to play a round
    //if the round winner is player then increase player score
    //if the round is lost then increase computer score
    //if its a tie then play another round
function game(){
    let playerScore=0;
    let computerScore=0;
    for (i=1;i<=5;i++){
        playerSelection=prompt("Rock, Paper, Scissor?");
        switch(playRound(playerSelection)){
            case "winner" : 
                playerScore++;
                break;
            case "loser" : 
                computerScore++;
                break; 
            case "tie":
                alert("Its a tie");
                i--;
                break;
        }
        console.log("Player score: " + playerScore + " Computer score: " + computerScore);
    }
    
    if (computerScore > 2){
        console.log("Winner is Computer")
    } else if(playerScore > 2) {
        console.log("You Won!!!")
    }
}
game();
