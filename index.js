// ROCK PAPER SCISSORS

// global vars
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// select DOM elements
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const finalResultDiv = document.querySelector('.finalResult');

// add event listeners
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

// to get computer choices
function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice;
}

// play a round
function playRound(playerChoice) {
    // stop game if 5 rounds are already played
    if (roundsPlayed === 5) {
        return;
    }

    const computerChoice = getRandomChoice();
    result = "";

    // compare choices of player and computer
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
        roundsPlayed++;
    }
    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            roundsPlayed++
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            roundsPlayed++;
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    checkWinner();
}

// check for winner after 5 rounds
function checkWinner() {
    if (roundsPlayed === 5) {
        if (playerScore > computerScore) {
            finalResultDiv.textContent = "GAME OVER! You won.";
        }
        else if (playerScore < computerScore) {
            finalResultDiv.textContent = "GAME OVER! You lose.";
        }
        else {
            finalResultDiv.textContent = "GAME OVER! It's a tie.";
        }

        // disable buttons
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}