//This will contain word logic and data of current word.
//Something that determines whether or not if the word is guessed or not
//Function that displays text
var Letter = require ("./letter.js");
console.log(Letter);
//Creates New Chosen Word blanks
function Word (wordChoice) {
  var self = this
  var lett = [];
  var wordArray = wordChoice.split("");
  self.show = false;
  self.guessesLeft = 15;
//self for loop will push letters into the lett array equal the length of the word.
  wordArray.forEach(function(letters){
    lett.push(new Letter(letters));
    // console.log(lett);
  });

  self.renderWord = function() {
    var wordString = "";
    lett.forEach(function(currentLetter){
      wordString += currentLetter.renderWord();  
    });
    console.log("" + wordString +"Guesses Left: " + self.guessesLeft);
  }
  
  self.validateLetter = function(userGuess) {
    self.guessesLeft --;
    //wordChoice.show will equal true when all the letters are guessed.
    self.show = lett.every(function(currentLetter) {
      if(userGuess === currentLetter.letters){
        currentLetter.show = true;
      }
      return currentLetter.show;
    });
  }
}

module.exports = Word;

// var w = "Alien";
// Word(w);