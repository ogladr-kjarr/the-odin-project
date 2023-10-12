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

function setTextWindow(newText){
    document.querySelector('.game-text').textContent = newText;

}

function getWinnerTallyElement(winner){
    if(winner === 'Human'){
        return document.querySelector('.human-tally');
    } else {
        return document.querySelector('.computer-tally');
    }
}

function updateTallyTable(winner){
    
    if (winner !== "Draw"){
        let elementToUpdate = getWinnerTallyElement(winner);
        let currentScore = +elementToUpdate.textContent;
        let newScore = currentScore + 1;
        elementToUpdate.textContent = newScore;
    }
}

function checkGamesFinished(winner){

    let winnerElement = getWinnerTallyElement(winner);
    if (+winnerElement.textContent === 5) {
        return true;
    } else {
        return false;
    }
}


function playRound(playerSelection, computerSelection){

    let gameOutcome = {};

    if(playerSelection === "Rock"){
        if(computerSelection === "Rock") {
            gameOutcome.text = "Draw! Rock matches Rock";
            gameOutcome.winner = "Draw"
        } 
        else if(computerSelection === "Paper") {
            gameOutcome.text = "You Lose: Paper beats Rock";
            gameOutcome.winner = "Computer";
        }
        else {
            gameOutcome.text = "You Win: Rock beats Scissors";
            gameOutcome.winner = "Human";   
        }
    } else if(playerSelection === "Paper"){
        if(computerSelection === "Rock") {
            gameOutcome.text = "You Win: Paper beats Rock";
            gameOutcome.winner = "Human";
        } 
        else if(computerSelection === "Paper") {
            gameOutcome.text = "Draw! Paper matches Paper";
            gameOutcome.winner = "Draw";
        }
        else {
            gameOutcome.text = "You Lose: Scissors beats Paper";
            gameOutcome.winner = "Computer";
        } 
    } else if(playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            gameOutcome.text = "You Lose: Rock beats Paper";
            gameOutcome.winner = "Computer";
        }
        else if(computerSelection === "Paper") {
            gameOutcome.text = "You Win: Scissors beats Paper";
            gameOutcome.winner = "Human";
        } 
        else {
            gameOutcome.text = "Draw: Scissors matches Scissors";
            gameOutcome.winner = "Draw";
        }
    }
    return gameOutcome;
}

function game(playerSelection) {
    let gameOutcome = playRound(playerSelection, getComputerChoice());
    setTextWindow(gameOutcome.text);
    updateTallyTable(gameOutcome.winner);
    if (checkGamesFinished(gameOutcome.winner)){
        if (gameOutcome.winner === "Human"){
            setTextWindow("Congratulations, you won the game set.")
        } else {
            setTextWindow("Commiserations, you lost the game set.")
        }
        document.querySelector('button#rock').removeEventListener('click', clickRock);
        document.querySelector('button#paper').removeEventListener('click', clickPaper);
        document.querySelector('button#scissors').removeEventListener('click', clickScissors);
    }
}

function clickRock() {
    game("Rock");
}

function clickPaper() {
    game("Paper");
}

function clickScissors() {
    game("Scissors");
}

let rockButton = document.querySelector('button#rock');
const paperButton = document.querySelector('button#paper');
const scissorsButton = document.querySelector('button#scissors');

rockButton.addEventListener('click', clickRock);

paperButton.addEventListener('click', clickPaper);

scissorsButton.addEventListener('click', clickScissors);