// use inquirer Validate to take only letters, or else throw err
// point Word js to Letter js, and main js to Word js


var inquirer = require("inquirer");
var Game = require("./game");


var thisGame = new Game();
thisGame.initialize();
thisGame.printPostGuess();

var runGame = function() {
	if (!thisGame.checkWin()) {
		inquirer.prompt([
			{
				// type: "input",
				message: "Guess a letter!",
				// validate: to require a alpha input 
				name: "userGuess"

			}
		]).then(function(answers) {
			// check guess
			thisGame.updateGameState(answers.userGuess);

			// display new gameState, new lettersGuessed
			thisGame.printPostGuess();
			runGame();
		})
	} else {
		//when game is won, Congratulate the user!
		console.log("YOU WIN !")
	}

}

runGame();