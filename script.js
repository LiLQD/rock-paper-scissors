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
function getComputerChoice(){
    let randomNumber = Math.round(Math.random() * 100)
    console.log(randomNumber)
    if(randomNumber <= 33){
        return "Rock"
    }
    else if(randomNumber > 33 && randomNumber <= 66){
        return "Paper"
    }
    else{
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
function getHumanChoice(){
    let humanChoice = prompt("Type 1 for rock, 2 for paper, 3 for scissors")
    console.log(humanChoice)
    if(humanChoice == 1){
        return "Rock"
    }
    else if(humanChoice == 2){
        return "Paper"
    }
    else if(humanChoice == 3){
        return "Scissors"
    }
    else{
        return "Error input"
    }
}

/*
Use the human and computer player choices as arguments

*/