//This will hold the prompt. This will be the file we execute in Node.
var inquirer = require("inquirer");
var randomWord = require("./hangmangame.js");
var checkWord = require("./word.js");
console.log(randomWord);
//There will be a function that will get a random word for the user to guess at the beginning of the game.

starGame();

function startGame () {
  var word = randomWord.getMovie();
  word.renderWord();
}

function getUserGuess(word) {
  inquirer.prompt([

  {
    type: "input",
    name: "letter",
    message: "Guess A Letter:",
    validate: function(input) {
      return/[a-z]/.test(input.trim.toLowerCase());
    }
  }

  ]).then(function(guess){

      word.va

}
// There will be a function that will prompt the user to guess a letter(inquirer).
