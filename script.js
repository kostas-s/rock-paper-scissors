const options = ["Rock", "Paper", "Scissors"]
let playerSelection = null
let computerSelection = null
let roundNumber = 1
let playerScore = 0
let computerScore = 0

function computerPlay(){
    computerSelection = options[Math.floor(Math.random() * options.length)]
}

function sanitizeInput(text){
    return text.trim().charAt(0).toUpperCase() + text.trim().substr(1).toLowerCase()
}

function playerPlay() {
    while (!playerSelection) {
        playerSelection = sanitizeInput(prompt("What is your move? Rock Paper or Scissors?"))
        if (options.indexOf(playerSelection) !== -1) return
        playerSelection = null
    }
}

function evaluateRound() {
    console.log(`\n-ROUND ${roundNumber} EVALUATION-`)
    console.log("PLAYER CHOICE: ", playerSelection)
    console.log("COMPUTER CHOICE: ", computerSelection)
    if (options.indexOf(playerSelection) - options.indexOf(computerSelection) === 0) {
        console.log("===DRAW===")
    } else if (options.indexOf(playerSelection) - options.indexOf(computerSelection) === 1 ||
               options.indexOf(playerSelection) - options.indexOf(computerSelection) === -2){
                   console.log("===PLAYER WINS===")
                   playerScore++
               } else {
                   console.log("===CPU WINS===")
                   computerScore++
               }
    printScores()
}

function printScores() {
    console.log(`===CURRENT SCORES===\n PLAYER: ${playerScore}\n CPU: ${computerScore}`)
}

function resetSelections(){
    computerSelection = null
    playerSelection = null
}

function round() {
    for (let i = 0; i < 5; i++){
        playerPlay()
        computerPlay()
        evaluateRound()
        resetSelections()
        roundNumber++
    }
}

console.log("I WANNA ROCK!!!")
round()