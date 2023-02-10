function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}


let playerPoints = 0;
let computerPoints = 0;

const pTagPlayer = document.querySelector('.player');
const pTagComputer = document.querySelector('.computer');
const pTagTie = document.querySelector('.tie');


function game() {
    let playerChoice;
    const buttons = document.querySelectorAll('.option');
    buttons.forEach((button) => {button.addEventListener('click', () => {
        buttonId = button.getAttribute('id');
        if (buttonId == 'scissors') {
            playerChoice = 'scissors';
        } else if (buttonId == 'rock') {
            playerChoice = 'rock';
        } else if (buttonId == 'paper') {
            playerChoice = 'paper';
        }


        // this next part took me an embarrassingly long time to figure out
        let winner = playRound(getComputerChoice(), playerChoice);

        if (playerPoints != 5 && computerPoints != 5){
            if (winner == 'player') {
                playerPoints += 1;
                pTagPlayer.textContent = `You: ${playerPoints}`;
                if (playerPoints == 5) {
                    buttons.forEach((button) => {
                        button.style.opacity = '50%';
                        button.style.cursor = 'default'
                    });
        
                    pTagPlayer.style.color = 'yellow';
                    pTagPlayer.textContent = 'You won!'
                    pTagComputer.style.opacity = '60%';
                }
            } else if (winner == 'computer') {
                computerPoints += 1;
                pTagComputer.textContent = `Computer: ${computerPoints}`
                if (computerPoints == 5) {
                    buttons.forEach((button) => {
                        button.style.opacity = '50%';
                        button.style.cursor = 'default'
                    });
        
                    pTagPlayer.style.opacity = '60%';
                    pTagComputer.style.color = 'yellow';
                    pTagComputer.textContent = 'The computer won!'
                }
            } else if (winner == 'tie!') {
                pTagTie.style.cssText = 'color: yellow; opacity: 100%'
                setTimeout(() => {pTagTie.style.cssText = 'color: yellow; transition: opacity 1s; opacity: 0%;'}, 500) // fade in-out effect
            }
        }
    })});
}


function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return 'tie!'
    } else if ((computerChoice == 'rock' && playerChoice == 'scissors') || (computerChoice == 'scissors' && playerChoice == 'paper') || (computerChoice == 'paper' && playerChoice == 'rock')) {
        return 'computer'
    } else if ((computerChoice == 'rock' && playerChoice == 'paper') || (computerChoice == 'scissors' && playerChoice == 'rock') || (computerChoice == 'paper' && playerChoice == 'scissors')){
        return 'player'
    }
}

game();