var inquire = require(".\letter.js");

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
    };
    this.guessLetter = function(guess) {

        for (let index = 0; index < this.letters.length; index++) {
            
            this.letters[index].checkGuessed(guess);
            
        }

    };

    

}