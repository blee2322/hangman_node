//This will contain word logic and data of current word.
//Something that determines whether or not if the word is guessed or not
//Function that displays text
var letter = require ("./letter.js");

//Creates New Chosen Word blanks
function Word (wordChoice) {
  this.wordChoice = wordChoice;
  this.lett = [];
  this.found = false;
//This for loop will push letters into the lett array equal the length of the word.
  this.getLet = function() { 
    for(var i = 0; i < this.wordChoice.length; i++) {
        this.lett.push(new letter(this.wordChoice[i]));
        console.log(w.lett[i].letters);
    }
  };
  //Did we find the word?
  this.validateWord = function() {

    if(this.lett.every(function(currentLetter) {
      return currentLetter.show === true;
    })){

    this.found = true;
    return true;
  }
  }
//does the letter exist in the randomly chosen word?
  this.validateLetter = function(guessLetter) {
    for(var i = 0; i < this.lett.length; i++){
      if(this.lett[i].letters === guessLetter)
      this.lett[i].show = true
    } 
  }

  this.renderWord = function() {
    var str = "";
    
    for(var i = 0; i < this.lett.length; i++){
      var currentLetter = this.lett[i].renderLetter();
      str += currentLetter;
    }
    return str;

  }

}

