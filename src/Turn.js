class Turn{
    constructor(guess, card){
        this.guess = guess
        //When would I instantiate card?
        this.card = card

//method to evaluate guess so we want to check if the users guess equals the correct answer on the card
//this.c
//method to give feedback
    }

    returnGuess(){
        return this.guess
    }

    returnCard(){
        return this.card
    }

    evaluateGuess(){
        if(this.guess === this.card.correctAnswer) {
            return true
        } else {
            return false
        }
    }
    giveFeedback(){
        if(this.evaluateGuess() === true) {
            return 'correct!'
        } else {
            return "incorrect!"
        }
    }
}

module.exports = Turn