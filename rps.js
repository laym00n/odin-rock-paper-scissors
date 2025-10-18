// get a random rock paper or scissors from the computer
function getRandomChoice() {

    // create a variable to store choice
    let choice;

    // generate a random number
    let randomNum = Math.floor(Math.random() * (2 + 1));

    // check the value of randomNum var
    if (randomNum === 1) {
        choice = "rock";
    }
    else if (randomNum === 0) {
        choice = "paper";
    }
    else {
        choice = "scissors"
    }

    return choice;
}

// get choice from user
function getHumanChoice() {

    // get choice from user
    let userChoice = prompt("Enter your choice");

    return userChoice;
}

