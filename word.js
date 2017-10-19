var Letter = require("./letter");

var  Word = function(currentWord) {
	this.letterObjArr = [];

	// automatically construct the letterObjArr by parsing currentWord, calling Letter constructor
	for (var i = 0; i < currentWord.length; i++) {
		this.letterObjArr.push(new Letter(currentWord[i], false));
	}

}


Word.prototype.checkOneGuess = function(guess) {
	var atLeastOneCorrect = false;
	this.letterObjArr.forEach(function(letterObj) { 
		if (letterObj.value === guess) {
			// console.log("im in the updateGameState forEach!")
			letterObj.guessedCorrectly = true;
			atLeastOneCorrect = true;
		}
	});
	
	return atLeastOneCorrect;
}

Word.prototype.printWord = function() {
	var displayableGameState = "";
	this.letterObjArr.forEach(function(letterObj) {
		displayableGameState += letterObj.printLetter();
		displayableGameState += " ";
	})
	return displayableGameState;
};

module.exports = Word;