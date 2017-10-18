var Letter = require("./letter");
var Word = require("./word");

var Game = function() {
	// store array wordList
	this.wordList = ["hiking"];
	
	// set number of guesses remaining
	this.numberGuesses = 7;

	// store letters already guessed 
	this.lettersGuessed = [];

	// Set currentWord, create Word Obj, and create gameState (array of Letter objects)
	this.initialize = function() {
		// set the current word to a (random) word from wordList
		this.currentWord = this.wordList[0];
		
		// Store a game state
		this.wordObj = new Word(this.currentWord);
		this.gameState = this.wordObj.gameStateConstructor(this.currentWord);
		console.log("Starting gameState: " + JSON.stringify(this.gameState, null, 2));
	}


	// <METHOD> Check a single guess. Calls on Word.checkOneGuess, then push to lettersGuessed array
	this.updateGameState = function(guess) {
		// if letter has already been guessed, let user know
		if (this.lettersGuessed.indexOf(guess) > -1) {
			console.log("This letter has already been guessed!")
		}
		// ELSE run the check guess 
		else {
			// this.wordObj.checkOneGuess(guess);
			var atLeastOneCorrect = false;
			this.gameState.forEach(function(letterObj) { 
				if (letterObj.value === guess) {
					// console.log("im in the updateGameState forEach!")
					letterObj.guessedCorrectly = true;
					atLeastOneCorrect = true;
				}
			});
			if (atLeastOneCorrect) {
				console.log("---------------");
				console.log("    CORRECT!   ");
				console.log("---------------\n");
			} else {
				this.numberGuesses--;
				console.log("---------------");
				console.log("   INCORRECT!  ");
				console.log("---------------\n");
			}
			// update Game's copy of gameState so that it reflects the changes
			// this.gameState = this.wordObj.gameState;
			// add guess to array of lettersGuessed
			this.lettersGuessed.push(guess);
		}
	}

	// <METHOD> checkWin:  returns true if all its letters are guessed 
	this.checkWin = function() {
		var ans = true;
		this.gameState.forEach(function(letterObj) {
			if (!letterObj.guessedCorrectly) {
				ans = false;
			}
		})
		return ans;
	}
	
	// <METHOD> printPostGuess:  following a guess: game state, letters guessed 
	this.printPostGuess = function() {
		var displayableGameState = "";

		// console.log(this.gameState);

		this.gameState.forEach(function(letterObj) {
			// console.log(letterObj)
			displayableGameState += letterObj.printLetter();
			displayableGameState += " ";
		})

		console.log(displayableGameState);
		console.log("Letters Guessed: " + this.lettersGuessed +"\n");
		console.log("# Of Guesses: " + this.numberGuesses);
	}
}


module.exports = Game;
