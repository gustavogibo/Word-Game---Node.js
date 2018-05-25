var word = require("./word.js");
var inquirer = require("inquirer");
var chalk = require("chalk");

var guesses = [];
var remainingGuesses = 10;

var words = ["javascript", "python", "database", "backend", "frontend", "technology"];

var randomItem = words[Math.floor(Math.random()*words.length)];

var newWord = new word.Word();

newWord.createLetters("database");

newWord.showWord();
guessLetter();


function guessLetter() {

    inquirer.prompt([{
        type: 'input',
        name: 'letter',
        message: chalk.green("Guess a Letter")
    }]).then(answer => {

        if(guesses.indexOf(answer.letter) != -1) {

            console.log(chalk.red("You chose this letter already! Try again."));
            newWord.showWord();
            guessLetter();

        } else {
        
            var change = newWord.guessLetter(answer.letter);

            if(change == 0) {

                remainingGuesses--;

            }

            guesses.push(answer.letter);

            if(remainingGuesses > 0 && newWord.checkWordCompleted() == false) {

                // console.log(newWord.letters);
                // console.log("---------------");
                console.log(chalk.yellow(guesses));
                console.log("Remaining guesses: " +chalk.cyan(remainingGuesses));
                newWord.showWord();
                guessLetter();
        
            } else if (newWord.checkWordCompleted() == true){

                newWord.showWord();
                console.log(chalk.bgGreen("CONGRATULATIONS!"));

            } else {

                console.log(chalk.magenta("Good luck next time!"));
            }
        }

    });

    

}


