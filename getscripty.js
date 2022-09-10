// Script with UI for click interactivity
var score = 0;
var losses = 0;
var gameNum = 1;

const body = document.querySelector('body');
const rockSelect = document.querySelector('#rock');
const paperSelect = document.querySelector('#paper');
const scissorsSelect = document.querySelector('#scissors');

const buttons = document.getElementsByClassName('image');
const arrayButtons = Array.from(buttons);

const scoreBoard = document.createElement('div');
scoreBoard.classList.add('score-board');
body.appendChild(scoreBoard);

// Generates a random integer between 0 and 2, and then returns
// a move based on that number.
let getComputerChoice = () => {
    // gen a random number for later use
    var randomNum = Math.floor(Math.random() * 3);

    // define the array with move set 
    var moves = ['rock', 'paper', 'scissors'];

    // select the random move
    let compMove = moves[randomNum];

    // return statement
    return compMove;
}

// Plays a single round (one player move VS one computer move)
let playRound = (playerChoice, computerChoice) => {
    var outcome;

    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'rock') outcome = 'draw';
            if (computerChoice == 'paper') outcome = 'lose';
            if (computerChoice == 'scissors') outcome = 'win';
            break;
        case 'paper':
            if (computerChoice == 'rock') outcome = 'win';
            if (computerChoice == 'paper') outcome = 'draw';
            if (computerChoice == 'scissors') outcome = 'lose';
            break;
        case 'scissors':
            if (computerChoice == 'rock') outcome = 'lose';
            if (computerChoice == 'paper') outcome = 'win';
            if (computerChoice == 'scissors') outcome = 'draw';
            break;
        default:
            alert("Incorrect moveset");
            outcome = null;
    }

    console.log(`Your choice: ${playerChoice}\nComputer choice: ${computerChoice}\nOutcome: ${outcome}`);
    scoreBoard.textContent = `You ` + outcome + `!`;

    return outcome;
}

/* doesnt work. 
let removeListeners = () => {
    rockSelect.removeEventListener('click',process);
    paperSelect.removeEventListener('click',process);
    scissors.Select.removeEventListener('click',process);
}
*/

let handler = (move) => {
    const playerChoice = move;
    const computerChoice = getComputerChoice();
    const outcome = playRound(playerChoice, computerChoice);
    switch (outcome) {
        case 'win':
            score++;
            break;
        case 'lose':
            losses++;
            break;
        default:
            break;
    }
    scoreBoard.textContent = `Score is ${score}`
}

let removeEventListeners = () => {
    arrayButtons.forEach((button) => {
        button.removeEventListener('click', player);
    })
}

let player = (e) => {
    if (gameNum == 5) removeEventListeners();
    let playerMove = e.target.id;
    handler(playerMove);
    gameNum++;
    if (gameNum == 6) {
        if (score > losses) scoreBoard.textContent = `You win! Final score is ${score}.`;
        else {scoreBoard.textContent = `You lose. Final score is ${score}.`}
    }
}

// rockSelect.addEventListener('click', player);
arrayButtons.forEach((button) => {
    button.addEventListener('click', player);
})
