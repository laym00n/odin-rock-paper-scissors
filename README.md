# Rock Paper Scissors game - The Odin Project

I made a rock paper scissors game using basic javascript. The goal was to make this game and play it through console tab available in developers tool.

***

## How to Play

Since the game does not use any HTML elements, you must run it from the console.

* Open the index.html file in your web browser (like Chrome or Firefox).

* Open the Developer Tools by pressing F12 (or right-click and select "Inspect").

* Click on the "Console" tab.

* To start the game, type playGame() and press Enter.

* A prompt box will appear asking for your choice. Type "rock", "paper", or "scissors" (any case will work).

* The console will log the result of the round and the current score.

* Repeat for 5 rounds. After the game, the console will declare the final winner!

---

## How it Works

The entire game logic is contained within the playGame() function. When called, it initializes the scores and uses helper functions to run the game:

* getRandomChoice(): Randomly generates 0, 1, or 2 and returns "rock", "paper", or "scissors".
* getHumanChoice(): Uses a prompt() to get text input from the user.
* playRound(): Takes the human and computer choices, compares them to find the winner, logs the result, and updates the score.

A for loop calls these functions 5 times to play the 5 rounds, and then a final if/else block checks the scores to declare the winner.