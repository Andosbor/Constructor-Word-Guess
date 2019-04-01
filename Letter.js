var Letter = function(character,guessed){

    //underscore to represent unanswered spot or filled in letter if answered
    this.character = character;

    //boolean value to tell if letter has been answered
    this.guessed = guessed;

    //function to fill in the underlying character if it has been guessed correctly
    this.returner = function(){
        if (this.guessed === true){
            console.log("correct letter has been guessed!");
        }
        else{
            console.log("did not guess correct letter")
        }
    }

    //function to check if user guess equals a character
    this.checker = function(guess){
        if (guess === character){
            this.guessed = true;
        }
    }
}
module.exports = Letter;