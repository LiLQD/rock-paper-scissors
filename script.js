let humanScore = 0
let computerScore = 0

/* 
Initialize a variable and set it for random value
Multiple that var with 100 and round to the nearest integer for a value start from 0 to 100
Use condition statement to check:
if var <= 33 return rock
else if var >33 <=66 return paper
else return scissors 
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
Use condition statement to check:
if var === 1 return rock
else if var === 2 return paper
else if return === 3 scissors 
else return "Error input"
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
Use the human and computer player choices as arguments
if(humanChoice === computerChoice) 
    print draw
    skip to the next game
else if(humanChoice === "Rock" && computerChoice === "Paper")
    print you lose
    add 1 point to computer
    skip to the next game
else if(humanChoice === "Rock" && computerChoice === "Scissors")
    print you win
    add 1 point to human
    skip to the next game
else if(humanChoice === "Paper" && computerChoice === "Scissors")
    print you lose
    add 1 point to computer
    skip to the next game
else if(humanChoice === "Paper" && computerChoice === "Rock")
    print you win
    add 1 point to human
    skip to the next game
else if(humanChoice === "Scissors" && computerChoice === "Rock")
    print you lose
    add 1 point to computer
    skip to the next game
else if(humanChoice === "Scissors" && computerChoice === "Paper")
    print you win
    add 1 point to human
    skip to the next game

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
/*
Repeat the gameplay 5 time
Every loop:
Recall getHumanChoice and assign its to a variable
Recall getComputerChoice and assign its to a variable
call playRound function use getHumanChoice and getComputerChoice return value as agruments 
check who is winner and track score
*/
function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log("Player score: " + humanScore + " Computer score: " + computerScore)
        console.log(" ")
    }
}
playGame()