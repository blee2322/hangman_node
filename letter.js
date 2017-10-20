//This file will hold all place and contain letter specific logic. Probably a prototype function that will show placeholders.
//This function determines whether or not a letter or dash appears.
function Letter(letters) {
  this.letters = letters;
  this.show = false;
  this.renderLetter = function() {
    if(this.show === false) { //If a letter does not appear put show underscore.
      return "_";
    }else
    return letters;
  }
}

module.exports = Letter;



