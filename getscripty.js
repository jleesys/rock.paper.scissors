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
    // sanitizes input so that any combo of capitlization works, plus extra spaces at start/end
    playerChoice = playerChoice.toLowerCase().trim();
    // console.log(playerChoice);

    // DRAW BLOCK
    // FUNCTION OF BLOCK IS EXTENDED TO ALL OTHER CONDITIONS
    // Checks and logs whether the player wins, loses, or draws based on the moves.
    // Returns the condition (win,loss,draw) for later processing
    if (playerChoice == computerChoice) {
        let condition = 'draw';
        console.log(`It's a draw! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }

    // ROCK BLOCK
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        let condition = 'win';
        console.log(`You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        let condition = 'lose';
        console.log(`You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }

    // PAPER BLOCK
    if (playerChoice == 'paper' && computerChoice == 'rock') {
        let condition = 'win';
        console.log(`You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }
    if (playerChoice == 'paper' && computerChoice == 'scissors') {
        let condition = 'lose';
        console.log(`You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }

    // SCISSORS BLOCK
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        let condition = 'lose';
        console.log(`You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        let condition = 'win';
        console.log(`You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }
}

// initiates the game, with a loop making sure that 5 rounds are played.
// score variable will inform us how many times we won at the end of the game
let playGame = () => {
    let score = 0;
    for (i = 0; i < 5; i++) {
        if (playRound(getPlayerChoice(), getComputerChoice()) == 'win') {
            score++;
        }
    }
    console.log("Your score is " + score);
}

alert("Game is commencing! Open console to see your round results in real time (as you play/enter them).\nOpen console with the F12 key.")
playGame();