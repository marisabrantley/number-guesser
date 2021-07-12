let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>  {
    return Math.floor(Math.random() * 10);
}
// Gives a target number between 0 and 9

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (Math.abs(humanGuess - targetGuess) > Math.abs(computerGuess - targetGuess)) {
        return true;
    };
    
    if (Math.abs(humanGuess - targetGuess) < Math.abs (computerGuess - targetGuess)) {
        return false;
    };
}
// Determines winner based on closest guess to target

const updateScore= (winner) => {
    if (winner === 'human') {
        humanScore ++;
    } else if (winner === 'computer') {
        computerScore ++;
    } 
};
// Updates score after win

const advanceRound = () => currentRoundNumber ++;
// Updates the round number after each round.

updateScore('human');
console.log(humanScore); 
// To confirm that this value increased by 1

updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1