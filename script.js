console.log("Hello World")

/* pseudocode
Initialize a variable
If it gets a 0 it should be rock
If it gets a 1 it should be paper
If it gets a 2 it should be scissors
Print string result 
*/
function getComputerChoice(){
    const num = Math.floor(Math.random()*3);
    return num === 0 ? "rock" : num === 1 ? "paper" : "scissors";
}

/* pseudocode
Initialize a variable
Give the prompt to be the variable
if it gets 1 it should be rock
if it gets 2 it should be paper
if it gets 3 it should be scissors
Print string result
*/
function getHumanChoice(){
    const choice = String(prompt("Enter the thing you want to use: Rock, Paper, or Scissors", ""));
    if (choice === null) return ""; 
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    const player = humanChoice.toLowerCase();
    const computer = computerChoice;
    if (player === "rock" && computer === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (player === "paper" && computer === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (player === "scissors" && computer === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if (player === "rock" && computer === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if (player === "paper" && computer === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (player === "scissors" && computer === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if (player === computer && computer === player) {
        console.log("Stale!");
    }
    else {
        console.log("Round Invalid");
    }
    console.log("Scoreboard ", "Player:",humanScore,"Computer:", computerScore);
}

function playGame(){
    for (let i=1;i<=5;i++){
        console.log("Round ",i)
        const humanSelection = getHumanChoice();

        if (humanSelection === ""){
            console.log("Match forfeited")
        }
        const computerSelection = getComputerChoice();
        console.log("You chose: ",humanSelection);
        console.log("Computer chose: ",computerSelection);
        playRound(humanSelection, computerSelection);
    }
    console.log("Game OVER!")
    if (humanScore>computerScore){
        console.log("You won the game!");
    }
    else if (humanScore<computerScore){
        console.log("You lose! Computer won!")
    }
    else console.log("Tiebreaker!")
    console.log("Final Score --- ", "You:",humanScore,"Computer:",computerScore);
}

playGame();