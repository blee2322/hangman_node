//This will hold the prompt. This will be the file we execute in Node.
var inquirer = require("inquirer");
var randomWord = require("./hangmangame.js");
// console.log(randomWord);
// There will be a function that will get a random word for the user to guess at the beginning of the game.

startGame();

function startGame () {
  var newMovie = new randomWord();
  console.log(newMovie);
  getUserGuess(newMovie)
}

function getUserGuess(word) {
  inquirer.prompt([

  {
    type: "input",
    name: "letter",
    message: "Guess A Letter:"
  }

  ]).then(function(guess){

      // word.renderWord(guess.letter);

      if(!word.show) {
        if(word.guessesLeft > 0){
          getUserGuess(word);
        }else
          console.log("Sorry You Have Run Out of Guesses");
          startGame();
        }   
      if(word.show){
        startGame();
      }
    })
}
// There will be a function that will prompt the user to guess a letter(inquirer).
