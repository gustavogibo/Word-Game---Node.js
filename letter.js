var chalk = require("chalk");

function Letter(underlying) { 
    this.underlying = underlying;
    this.guessed = false;
    this.defineCharacter = function() {
        if(this.guessed) {

            return this.underlying;

        } else {

            return "_";

        }
    };
    this.checkGuessed = function (guess) {

        if(guess == this.underlying || this.guessed == true) {

            this.guessed = true;

        }  else {

            this.guessed = false;

        }
        
    }


};

module.exports = {
    Letter: Letter
};