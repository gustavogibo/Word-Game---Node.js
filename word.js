var newLetter = require("./letter.js");
var chalk = require("chalk");

function Word() {

    this.letters = [];
    this.showWord = function () {

        var result = "";
        for (let index = 0; index < this.letters.length; index++) {
            
            if(index == this.letters.length-1) {
                result += this.letters[index].defineCharacter();
            } else {
                result += this.letters[index].defineCharacter() + " ";
            }
            
        }

        console.log(chalk.blue(result));
    };
    this.checkWordCompleted = function () {

        for (let index = 0; index < this.letters.length; index++) {

            if(this.letters[index].guessed == false) {

                return false;

            }

        }

        return true;
    };
    this.guessLetter = function(guess) {

        var countTrueBefore = 0;
        var countTrueAfter = 0;

        for (let index = 0; index < this.letters.length; index++) {
            
            
            if (this.letters[index].guessed) {

                countTrueBefore++;
                
            }

            this.letters[index].checkGuessed(guess);
            
        }

        for (let index = 0; index < this.letters.length; index++) {

            if(this.letters[index].guessed) {

                countTrueAfter++;

            }

        }

        if(countTrueAfter > countTrueBefore) {

            return 1;

        } else {

            return 0;
        }

    };
    this.createLetters = function (word) {

        for (let index = 0; index < word.length; index++) {
    
            var letter = new newLetter.Letter(word[index]);
            this.letters.push(letter); 
            
        }
    }

    

}

module.exports = {
    Word: Word
};