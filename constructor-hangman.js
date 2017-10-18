// use inquirer Validate to take only letters, or else throw err
// point Word js to Letter js, and main js to Word js


var inquirer = require("inquirer");
var Game = require("./game");


var thisGame = new Game();
thisGame.initialize();
thisGame.printPostGuess();

var runGame = function() {
	// stop inquirer recursive calls if game is won, or if no more guesses left
	// console.log("have guesses left? " + (thisGame.numberGuesses > 0))
	if ((!thisGame.checkWin()) && (thisGame.numberGuesses > 0)) {
		inquirer.prompt([
			{
				type: "input",
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
		if (thisGame.numberGuesses === 0) {
			console.log("\n------------------------------------");
			console.log("--- No more guesses :( GAME OVER ---");
			console.log("------------------------------------\n")
		} else {
			//when game is won, Congratulate the user!
			console.log("YOU WIN !")
		}


		//prompt player for replay option
		// inquirer.prompt([
		// 	{
		// 		type: "confirm",
		// 		message: "Play again?",
		// 		// default: "yes",
		// 		name: "replay"
		// 	}
		// ]).then(function(answer) {
		// 	console.log(answer.replay);
		// 	if (answer.replay) {
		// 		var newGame = new Game();
		// 		newGame.initialize();
		// 		newGame.printPostGuess();
		// 		runGame(newGame);
		// 	} else {
		// 		console.log("See you next time!")
		// 	}
		// });
	}

}

runGame();