"use strict";
/*2. Guessing Game (Using while loop )
Objective: Create a simple number guessing game where the user tries to guess a randomly
generated number between 1 and a specified maximum value using a predefined set of guesses.*/
let maxiValue = 10;
let randomNum = (Math.floor(Math.random() * maxiValue + 1));
console.log(randomNum);
let correctGuess = false;
let guessedNum = [2, 3, 8, 6, 5, 9, 1];
let n = 0;
while (!correctGuess && n < guessedNum.length) {
    let currentGuess = guessedNum[n];
    if (currentGuess === randomNum) {
        correctGuess = true;
        console.log(`Congrats! You've guessed the correct number.`);
    }
    else if (currentGuess < randomNum) {
        console.log(`Your guess ${currentGuess} is too low... Try Again`);
    }
    else
        (currentGuess > randomNum);
    {
        console.log(`Your guess ${currentGuess} is too high... Try Again`);
    }
    ;
    n++;
}
;
console.log(`The random number was ${randomNum}`);
