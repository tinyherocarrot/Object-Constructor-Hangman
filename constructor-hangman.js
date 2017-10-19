// NOTE TO SELF: use inquirer Validate to take only letters, or else throw err?

var inquirer = require("inquirer");
var Game = require("./game");

// Recursive function for running Games until player doesnt wanna play no more. 
// Takes in a specific game object to run.
var runGame = function(gameObj) {
	
	// stop inquirer recursive calls if game is won, or if no more guesses left
	if ((!gameObj.checkWin()) && (gameObj.numberGuesses > 0)) {
		
		inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter!",
				// validate: to require a alpha input 
				name: "userGuess"

			}
		]).then(function(answers) {
			// check guess
			gameObj.updateGameState(answers.userGuess.toLowerCase());

			// display new gameState, new lettersGuessed
			gameObj.printPostGuess();

			// recursive call to prompt user for another guess
			runGame(gameObj);
		
		})

	} else {
		gameObj.printLoseWin();


		// prompt player for replay option
		inquirer.prompt([
			{
				type: "confirm",
				message: "Play again?",
				// default: "yes",
				name: "replay"
			}
		]).then(function(answer) {
			if (answer.replay) {
				var newGame = new Game();
				newGame.initialize();
				newGame.printPostGuess();
				runGame(newGame);
			} else {
				console.log("\n-------------------------");
				console.log("|   See you next time!  |");
				console.log("-------------------------\n");
			}
		});
	}

}


//start a game
var thisGame = new Game();
thisGame.initialize();
thisGame.printPostGuess();

runGame(thisGame);