//This will contain word logic and data of current word.
//Something that determines whether or not if the word is guessed or not
//Function that displays text
var Letter = require ("./letter.js");

//Creates New Chosen Word
var Word = function(wordChoice) {
  this.wordChoice = wordChoice;
  //This will collect letters
  this.lett = [];
  this.guesses = [];
  this.guessesLeft = 10
//This for loop will push letters into the lett array.
  for(var i = 0; i < this.wordChoice.length; i++) {
      this.lett.push(new Letter(this.wordChoice[i]));
  }
  //This will check the indexOf the chosen word in the array. A value of -1 means the letter does not exist.
  this.validateLetter = function(letter) {
    this.incorrect = true
    this.validLetter = false
    if(this.guesses.indexOf(letter) != -1) {
      this.validate
    }
  }
};
