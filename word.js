//This will contain word logic and data of current word.
//Something that determines whether or not if the word is guessed or not
//Function that displays text
var Letter = require ("./letter.js");
console.log(Letter);
//Creates New Chosen Word blanks
function Word (wordChoice) {
  var lett = [];
  var wordArray = wordChoice.split("");
  this.show = false;
  this.guessesLeft = 15;
//This for loop will push letters into the lett array equal the length of the word.
  wordArray.forEach(function(letters){
    lett.push(new Letter(letters));
    console.log(lett);
  });

  this.renderWord = function() {
    var wordString = "";
    lett.forEach(function(currentLetter){
      wordString += currentLetter.renderWord();  
    });
    console.log("" + wordString +"Guesses Left: " + this.guessesLeft);
  }
  
  this.validateLetter = function(userGuess) {
    this.guessesLeft --;
    //wordChoice.show will equal true when all the letters are guessed.
    this.show = lett.every(function(currentLetter) {
      if(userGuess === currentLetter.letters){
        currentLetter.show = true;
      }
      return currentLetter.show;
    });
  }
}

var w = "Alien";
Word(w);