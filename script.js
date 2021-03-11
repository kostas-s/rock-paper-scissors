const options = ["Rock", "Paper", "Scissors"]
let playerSelection = null
let computerSelection = null
let roundNumber = 1
let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        playerPlay(e.target.dataset.type)
    })
})

const playerScoreOutput = document.querySelector('.player-score');
const computerScoreOutput = document.querySelector('.computer-score');
const messageOutput = document.querySelector('.message');
const roundResultOutput = document.querySelector('.round-result');

function computerPlay(){
    computerSelection = options[Math.floor(Math.random() * options.length)]
}

function sanitizeInput(text){
    return text.trim().charAt(0).toUpperCase() + text.trim().substr(1).toLowerCase()
}

function playerPlay(move) {
    playerSelection = sanitizeInput(move)
    round();
}

function evaluateRound() {
    let result = "";
    console.log(`\n-ROUND ${roundNumber} EVALUATION-`)
    console.log("PLAYER CHOICE: ", playerSelection)
    console.log("COMPUTER CHOICE: ", computerSelection)
    if (options.indexOf(playerSelection) - options.indexOf(computerSelection) === 0) {
        console.log("===DRAW===")
        result = "Draw";
    } else if (options.indexOf(playerSelection) - options.indexOf(computerSelection) === 1 ||
               options.indexOf(playerSelection) - options.indexOf(computerSelection) === -2){
                   console.log("===PLAYER WINS===")
                   result = "Player Wins!";
                   playerScore++
               } else {
                   console.log("===CPU WINS===")
                   result = "CPU Wins...";
                   computerScore++
               }
    roundResultOutput.textContent = `Round ${roundNumber}: ${result}`
    messageOutput.textContent = `Player chose ${playerSelection}, CPU chose ${computerSelection}...`;
    printScores()
}

function printScores() {
    console.log(`===CURRENT SCORES===\n PLAYER: ${playerScore}\n CPU: ${computerScore}`)
    playerScoreOutput.textContent = playerScore;
    computerScoreOutput.textContent = computerScore;
}

function resetSelections(){
    computerSelection = null
    playerSelection = null
}

function round() {
    computerPlay()
    evaluateRound()
    resetSelections()
    roundNumber++
}

console.log("I WANNA ROCK!!!")
//round()