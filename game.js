// var Letter = require("./letter");
var colors = require('colors'); 
var Word = require("./word");

var Game = function() {
	// store array wordList
	this.wordList = ['hiking', 'lake', 'topography', 'permit', 'thoreau', 'backpack', 'creek', 'summit', 'boots', 'sunscreen', 'chapstick', 'nalgene', 'granola', 'trail', 'switchback'],

	// set number of guesses remaining
	this.numberGuesses = 7;

	// store letters already guessed 
	this.lettersGuessed = [];

}

// Set currentWord, create Word Obj, and create gameState (array of Letter objects)
Game.prototype.initialize = function() {
	// set the current word to a (random) word from wordList
	this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];

	// Store a game state
	this.wordObj = new Word(this.currentWord);
}


// <METHOD> Check a single guess. Calls on Word.checkOneGuess, then push to lettersGuessed array
Game.prototype.updateGameState = function(guess) {
	
	// if letter has already been guessed, let user know
	if (this.lettersGuessed.indexOf(guess) > -1) {
		console.log("\n--------------------------------------------".yellow);
		console.log("|   This letter has already been guessed!  |".yellow);
		console.log("--------------------------------------------\n".yellow);
	}
	
	// ELSE run the check guess 
	else {
		if (this.wordObj.checkOneGuess(guess)) {
			console.error("\n---------------".bold.green);
			console.error("|   CORRECT!  |".bold.green);
			console.error("---------------\n".bold.green);
		} else {
			console.log("\n---------------".bold.red);
			console.log("|  INCORRECT! |".bold.red);
			console.log("---------------\n".bold.red);
			this.numberGuesses--;
		}

		// add guess to array of lettersGuessed
		this.lettersGuessed.push(guess);
	}
}


// <METHOD> checkWin:  returns true if all its letters are guessed 
Game.prototype.checkWin = function() {
	var ans = true;
	this.wordObj.letterObjArr.forEach(function(letterObj) {
		if (!letterObj.guessedCorrectly) {
			ans = false;
		}
	})
	return ans;
}


// <METHOD> printPostGuess:  following a guess: game state, letters guessed 
Game.prototype.printPostGuess = function() {
	// call print method in Word

	// compile a string of each letterObj, with proper spacing
	var displayableGameState = this.wordObj.printWord();

	// print the displayableGameState, along with letters already guessed, and number of guesses left
	console.log(`\n ${displayableGameState}`);
	console.log(`\nLetters Guessed: ${this.lettersGuessed}` );
	console.log(`# Of Guesses: ${this.numberGuesses} \n`);
}


Game.prototype.printLoseWin = function() {
	if (this.numberGuesses === 0) {
		console.log("\n------------------------------------");
		console.log("|   No more guesses :( GAME OVER   |");
		console.log("------------------------------------\n")
	} else {
		//when game is won, Congratulate the user!
		console.log("\n--------------");
		console.log("|  YOU WIN ! |");
		console.log("--------------\n")

	}
};

module.exports = Game;