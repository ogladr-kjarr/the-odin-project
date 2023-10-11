function standardizeInput(mixedCase) {
    let lowerCase = mixedCase.toLowerCase();  
    let startIsUpperCase = lowerCase.charAt(0).toUpperCase() + lowerCase.substring(1);
    return startIsUpperCase;
  }

function getComputerChoice(){
    let guessIndex = Math.floor(Math.random() * 3);
    switch(guessIndex) {
        case 0: return "Rock";
                break;
        case 1: return "Paper";
                break;
        case 2: return "Scissors";
                break;
    } 
}

function playRound(playerSelection, computerSelection){
    let standerdizedPlayerSelection = standardizeInput(playerSelection);

    if(standerdizedPlayerSelection === "Rock"){
        if(computerSelection === "Rock") return "Draw! Rock matches Rock";
        else if(computerSelection === "Paper") return "You Lose: Paper beats Rock";
        else return "You Win: Rock beats Scissors";
    } else if(standerdizedPlayerSelection === "Paper"){
        if(computerSelection === "Rock") return "You Win: Paper beats Rock";
        else if(computerSelection === "Paper") return "Draw! Paper matches Paper";
        else return "You Lose: Scissors beats Paper";
    } else if(standerdizedPlayerSelection === "Scissors") {
        if (computerSelection === "Rock") return "You Lose: Rock beats Paper";
        else if(computerSelection === "Paper") return "You Win: Scissors beats Paper";
        else return "Draw: Scissors matches Scissors";
    } else {
        return "Game nullified, Please enter only 'rock', or 'paper', or 'scissors'";
    }
}

function game() {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Please enter either: rock, paper, scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();