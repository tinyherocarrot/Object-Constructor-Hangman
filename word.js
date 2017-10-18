var Letter = require("./letter");

var  Word = function(currentWord) {


	/* <METHOD> gameStateConstructor:  initially parse currentWord into game state array
	 			call letter constructor, pushes letter OBJ to game state array*/
	this.gameStateConstructor = function(currentWord) {
		var gameState = []

		for (var i = 0; i < currentWord.length; i++) {
			gameState.push(new Letter(currentWord[i], false));
		}

		return gameState;
	};
		
}


module.exports = Word;