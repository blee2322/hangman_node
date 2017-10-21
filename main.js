//This will hold the prompt. This will be the file we execute in Node.
var inquirer = require("inquirer");
var randomWord = require("./hangmangame.js");
var checkWord = require("./word.js");

startGame();
//There will be a function that will get a random word for the user to guess at the beginning of the game.
function startGame() {
  var word = randomWord.getMovie();
  randomWord.display();
  getUserGuess(wrd);
}

function getUserGuess(wrd) {
  inquirer.prompt([

  {
    type: "input",
    name: "letter",
    message: "Guess A Letter:",
  }

  ]).then(function(guess){
}
// There will be a function that will prompt the user to guess a letter(inquirer).
