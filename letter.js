var Letter = function(value, guessedCorrectly) {
	this.value = value;
	this.guessedCorrectly = guessedCorrectly;

	// <METHOD> if letter has been guessed, display letter, otherwise display an underscore
	this.printLetter = function() {
		if (this.guessedCorrectly) {
			// print this.value
			return this.value;
		} else {
			// print underscore
			return "_";
		}
	}
}


// var newLetter1 = new Letter("h", true);
// var newLetter2 = new Letter("y", false);
// var newLetter3 = new Letter("t", false);
// var newLetter4 = new Letter("w", false);
// var newLetter5 = new Letter("i", true);
// var letterList = [newLetter1, newLetter2, newLetter3, newLetter4, newLetter5];

// var result = "";
// letterList.forEach(function(letterObj) {
// 	result += letterObj.printLetter();
// })
// console.log(result);

module.exports = Letter;