//This will contain word logic and data of current word.
//Something that determines whether or not if the word is guessed or not
//Function that displays text
var Letter = require ("./letter.js");

//Creates New Chosen Word
function Word (wordChoice) {
  this.wordChoice = wordChoice;
  this.incorrect = true
  //This will collect letters
  this.lett = [];
  //This will collect guesses
  this.guesses = [];
  this.guessesLeft = 10
//This for loop will push letters into the lett array equal the length of the word.
  this.getLetter = function() { 
    for(var i = 0; i < this.wordChoice.length; i++) {
        this.lett.push(new Letter(this.wordChoice[i]));
    }
  }
  this.

  //This will check the indexOf the chosen word in the array. A value of -1 means the letter does not exist in word object.
  this.validateLetter = function(letter) {
    this.incorrect = true
    this.validLetter = false
    //Does letter any instance of the letter exist in the word?
    if(this.guesses.indexOf(letter) != -1) {
      this.validLetter = true;
    } else { //
      this.guesses.push(letter);
      for (var i = 0; i < this.lett.length; i++) {
        if(this.lett[i] = letter) {
          this.incorrect = false;
        }else
          this.inccorrect = true;
          this.guessesLeft --
      }
    }
  }
};
