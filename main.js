//This will hold the prompt. This will be the file we execute in Node.
var inquirer = require("inquirer");
var randomWord = require("./hangmangame.js");
var checkWord = require("./word.js");
console.log(checkWord);
console.log(randomWord);
//There will be a function that will get a random word for the user to guess at the beginning of the game.
var wins = 0;
var losses = 0;
startGame();

function startGame () {
  var word = word.getMovie();
  console.log(word)
  getUserGuess(word);

}

function getUserGuess(word) {
  inquirer.prompt([

  {
    type: "input",
    name: "letter",
    message: "Guess A Letter:"
  }

  ]).then(function(guess){

      word.renderWord;

      if(!word.found) {
        if(word.guessesLeft > 0){
          getUserGuess(word);
        }else
          startGame();
        }   
      if(word.found){
        startGame()
      }
    })
}
// There will be a function that will prompt the user to guess a letter(inquirer).
