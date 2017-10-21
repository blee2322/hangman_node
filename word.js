//This will contain word logic and data of current word.
//Something that determines whether or not if the word is guessed or not
//Function that displays text
var letter = require ("./letter.js");

//Creates New Chosen Word
function Word (wordChoice) {
  this.wordChoice = wordChoice;
  this.lett = [];
  this.guessesLeft = 15;
  this.lttrguessed = false;
//This for loop will push letters into the lett array equal the length of the word.
  this.getLet = function() { 
    for(var i = 0; i < this.wordChoice.length; i++) {
        this.lett.push(new letter(this.wordChoice[i]));
    }
  };

module.exports = Word; 


var w = new Word("Alien");
w.getLet();
console.log(w.lett);