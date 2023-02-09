function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}


function getPlayerChoice(choice) {
    choice = choice.toLowerCase();
    return choice
}


function decideWinner(computerChoice, playerChoice) {
    const arr = ['rock', 'paper', 'scissors'];

    if (computerChoice === playerChoice) {
        return 'tie!'
    } else if ((computerChoice == 'rock' && playerChoice == 'scissors') || (computerChoice == 'scissors' && playerChoice == 'paper') || (computerChoice == 'paper' && playerChoice == 'rock')) {
        return 'computer won'
    } else if (!arr.includes(playerChoice)){
        return 'wrong choice'
    } else {
        return 'player won'
    }
}


let playerPoints = 0;
let computerPoints = 0;
let roundsToPlay = 4;
for (let i = 0; i<=roundsToPlay; i++) {
    let player = getPlayerChoice( prompt('rock || paper || scissors') );
    let computer = getComputerChoice();
    let winner = decideWinner(computer, player, computerPoints, playerPoints)
    console.log( winner );

    // tie or wrong choice by the player increases the rounds to play
    if (winner == 'computer won') {
        computerPoints += 1;
    } else if (winner == 'player won') {
        playerPoints += 1;
    } else {
        roundsToPlay += 1;
    }
}

if (playerPoints > computerPoints) {
    console.log('%c PLAYER WON!', 'font-size: 25px; color: yellow')
} else {
    console.log('%c COMPUTER WON!', 'font-size: 25px; color: yellow')
}