// get a random rock paper or scissors from the computer
function getRandomChoice() {

    // create a variable to store choice
    let choice;

    // generate a random number
    let randomNum = Math.floor(Math.random() * (2 + 1));

    // check the value of randomNum var
    if (randomNum === 1) {
        choice = "Rock";
    }
    else if (randomNum === 0) {
        choice = "Paper";
    }
    else {
        choice = "Scissors"
    }

    return choice;
}

