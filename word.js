var Letter = require("./letter");

var  Word = function(currentWord) {


	// store array of Letter objects
	// this.gameState = [];

	/* <METHOD> gameStateConstructor:  initially parse currentWord into game state array
	 			call letter constructor, pushes letter OBJ to game state array*/
	this.gameStateConstructor = function(currentWord) {
		var gameState = []

		for (var i = 0; i < currentWord.length; i++) {
			gameState.push(new Letter(currentWord[i], false));
		}

		return gameState;
	};


	

	// <METHOD> checkOneGuess:  checks a guess to update game state
	// this.checkOneGuess = function(guess) {
	// 	var atLeastOneCorrect = false;
	// 	this.gameState.forEach(function(letterObj) { 
	// 		if (letterObj.value === guess) {
	// 			letterObj.guessedCorrectly = true;
	// 			atLeastOneCorrect = true;
	// 		}
	// 	});
	// 	if (atLeastOneCorrect) {
	// 		console.log("---------------");
	// 		console.log("    CORRECT!   ");
	// 		console.log("---------------");
	// 	} else {
	// 		console.log("---------------");
	// 		console.log("   INCORRECT!  ");
	// 		console.log("---------------");
	// 	}
	// };

	// <METHOD> printWord:  print game state, calls printLetter
	// this.printWord = function() {
	// 	this.gameState.forEach(function(letterObj) {
	// 		letterObj.printLetter();
	// 	})
	// }
}


module.exports = Word;