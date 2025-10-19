

// play the entire game
function playGame() {

    // global var to track scores
    let humanScore = 0;
    let computerScore = 0;

    // get a random rock paper or scissors from the computer
    function getRandomChoice() {

        // create a variable to store choice
        let computerchoice;

        // generate a random number
        let randomNum = Math.floor(Math.random() * (2 + 1));

        // check the value of randomNum var
        if (randomNum === 1) {
            computerChoice = "rock";
        }
        else if (randomNum === 0) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors"
        }
        return computerChoice;
    }

    // get choice from user
    function getHumanChoice() {

        // get choice from user
        let userChoice = prompt("Enter your choice");
        return userChoice;
    }

    // how a round is played
    function playRound(userChoice, computerChoice) {

        // lets make userChoice case-insensitive
        let player = userChoice.toLowerCase();

        // compare to check winner
        if (player === "rock" && computerChoice === "rock") {
            console.log("It's a tie.")
        }
        else if (player === "rock" && computerChoice === "paper") {
            console.log("You lose. paper beats rock.")
            computerScore += 1;
        }
        else if (player === "rock" && computerChoice === "scissors") {
            console.log("You win. rock beats scissors.");
            humanScore += 1;
        }
        else if (player === "paper" && computerChoice === "rock") {
            console.log("You win. paper beats rock.");
            humanScore += 1;
        }
        else if (player === "paper" && computerChoice === "paper") {
            console.log("It's a tie.");
        }
        else if (player === "paper" && computerChoice === "scissors") {
            console.log("You lose. scissors beats paper.");
            computerScore += 1;
        }
        else if (player === "scissors" && computerChoice === "rock") {
            console.log("You lose. rock beats scissors.");
            computerScore += 1;
        }
        else if (player === "scissors" && computerChoice === "paper") {
            console.log("You win. scissors beats paper.");
            humanScore += 1;
        }
        else {
            console.log("It's a tie.");
        }
    }

    for (let i = 0; i < 5; i++) {

        console.log(`---------- Round ${i+1} ----------`);
        
        // get user and computer choices
        let userChoice = getHumanChoice();
        let computerChoice = getRandomChoice();

        // play the round
        playRound(userChoice, computerChoice);

        // show current score
        console.log(`Score: You- ${humanScore} | Computer- ${computerScore}`);
    }

    // declare winner after 5 rounds
    console.log("------------------------------");
    console.log("GAME OVER!");

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the winner!");
    }
    else if (computerScore > humanScore) {
        console.log("You Lost. Better luck next time.");
    }
    else {
        console.log("No winners. It's a tie.");
    }

    // show final score
    console.log(`Final Score: You- ${humanScore} | Computer- ${computerScore}`)
}