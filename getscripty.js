// Script with UI for click interactivity
const body = document.querySelector('body');
const rockSelect = document.querySelector('#rock');
const paperSelect = document.querySelector('#paper');
const scissorsSelect = document.querySelector('#scissors');

const scoreBoard = document.createElement('div');
scoreBoard.classList.add('score-board');
body.appendChild(scoreBoard);

rockSelect.addEventListener('click', () => {
    const playerChoice = 'rock';
    const computerChoice = getComputerChoice();
    playRound(playerChoice,computerChoice);
    // scoreBoard.textContent = `You ` + playRound(playerChoice,computerChoice) + `!`;
})
paperSelect.addEventListener('click', () => {
    const playerChoice = 'paper';
    const computerChoice = getComputerChoice();
    playRound(playerChoice,computerChoice);
    // scoreBoard.textContent = `You ` + playRound(playerChoice,computerChoice) + `!`;
})
scissorsSelect.addEventListener('click', () => {
    const playerChoice = 'scissors';
    const computerChoice = getComputerChoice();
    playRound(playerChoice,computerChoice);
    // scoreBoard.textContent = `You ` + playRound(playerChoice,computerChoice) + `!`;
})

/*
const buttons = [rockSelect, paperSelect, scissorsSelect];
for (const button in buttons) {
    button.addEventListener('click', () => {

    });
}
*/

// function asks the player for their move via input window
function getPlayerChoice() {
    while (true) {
        var playerMove = prompt('Enter your move');
        playerMove = playerMove.trim().toLowerCase();
        if (playerMove === null || playerMove !== 'rock' && playerMove !== 'paper' && playerMove !== 'scissors') {
            console.log("Invalid move. Try again.");
            alert("Invalid move. Try again.");
            continue;
        }
        break;
    }
    return playerMove;
}

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

// initiates the game, with a loop making sure that 5 rounds are played.
// score variable will inform us how many times we won at the end of the game
let playGame = () => {
    var score = 0;
    // alert("We're going to play a game! Best of 5 rounds! We're keeping score!");
    // for (let i = 0; i < 5; i++) {
        let outcome = playRound(getPlayerChoice(), getComputerChoice());
        outcome == 'win' ? score++ : score;
        console.log(`Your current score is ${score}.`)
    // }
    // console.log(`The final score is ${score}!`);
}

// playGame();