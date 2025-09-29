let humanScore = 0
let computerScore = 0

/* 
Initialize a variable and set it for random value
Multiple that var with 100 and round to the nearest integer for a value start from 0 to 100
*/
function getComputerChoice() {
    let randomNumber = Math.round(Math.random() * 100)
    // console.log(randomNumber)
    if (randomNumber <= 33) {
        console.log("Rock")
        return "Rock"
    }
    else if (randomNumber > 33 && randomNumber <= 66) {
        console.log("Paper")
        return "Paper"
    }
    else {
        console.log("Scissors")
        return "Scissors"
    }
}

/* 
Initialize a variable and let it assigned by player by prompt
*/
function getHumanChoice() {
    let humanChoice = prompt("Type 1 for rock, 2 for paper, 3 for scissors")
    // console.log(humanChoice)
    if (humanChoice == 1) {
        console.log("Rock")
        return "Rock"
    }
    else if (humanChoice == 2) {
        console.log("Paper")
        return "Paper"
    }
    else if (humanChoice == 3) {
        console.log("Scissors")
        return "Scissors"
    }
    else {
        return "Error input"
    }
}

/*
Check who is winner by use the human and computer player choices as arguments for condition
*/
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw")
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose")
        computerScore += 1
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose")
        computerScore += 1
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose")
        computerScore += 1
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win")
        humanScore += 1
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win")
        humanScore += 1
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win")
        humanScore += 1
    }
}
