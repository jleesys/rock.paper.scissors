let getComputerChoice = () => {
    let arrChoices = ['rock','paper','scissors'];
    let rand = Math.floor(Math.random() * 3);
    // console.log(arrChoices[rand]);

    return arrChoices[rand];
}

let playRound = (playerChoice,computerChoice) => {
    playerChoice = playerChoice.toLowerCase().trim();
    // console.log(playerChoice);

    // DRAW BLOCK
    if (playerChoice == computerChoice) {
        let condition = 'draw';
        return `It's a draw! You played ${playerChoice}. The computer played ${computerChoice}.`
    }
    
    // ROCK BLOCK
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        let condition = 'win';
        return `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`
    }
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        let condition = 'lose';
        return `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`
    }

    // PAPER BLOCK
    if (playerChoice == 'paper' && computerChoice == 'rock') {
        let condition = 'win';
        return `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`
    }
    if (playerChoice == 'paper' && computerChoice == 'scissors') {
        let condition = 'lose';
        return `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`
    }

    // SCISSORS BLOCK
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        let condition = 'lose';
        return `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`
    }
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        let condition = 'win';
        return `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`
    }
}

let playGame = () => {
    let score = 0;
    for (i = 0 ; i < 5 ; i++) {
        console.log(playRound('rock',getComputerChoice()));
    }
}