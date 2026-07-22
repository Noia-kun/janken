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
// function getHumanChoice(){
//     const choice = String(prompt("Enter the thing you want to use: Rock, Paper, or Scissors", ""));
//     if (choice === null) return ""; 
//     return choice;
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    const player = humanChoice.toLowerCase();
    const computer = computerChoice;
    let resultText = "";
    if (player === "rock" && computer === "paper") {
        resultText = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (player === "paper" && computer === "scissors"){
        resultText = "You lose! Scissors beats Paper";
        computerScore++;
    }
    else if (player === "scissors" && computer === "rock") {
        resultText = "You lose! Rock beats Scissors";
        computerScore++;
    }
    else if (player === "rock" && computer === "scissors") {
        resultText = "You win! Rock beats Scissors";
        humanScore++;
    }
    else if (player === "paper" && computer === "rock") {
        resultText = "You win! Paper beats Rock";
        humanScore++;
    }
    else if (player === "scissors" && computer === "paper") {
        resultText = "You win! Scissors beats Paper";
        humanScore++;
    }
    else if (player === computer) {
        resultText = "Stale!";
    }
    else {
        resultText = "Round Invalid";
    }
    document.getElementById("results").textContent = resultText + " — You chose " + player + ", Computer chose " + computer + ". Scoreboard — Player: " + humanScore + ", Computer: " + computerScore;
    document.getElementById("matchScore").textContent = "Score — Player: " + humanScore + ", Computer: " + computerScore;
    if (humanScore === 5 || computerScore === 5){
        const winner = humanScore === 5 ? "Player" : "Computer";
        document.getElementById("results").textContent = winner + " wins the game!";
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
}

document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});