let getComputerChoice = () => {
    let arrChoices = ['rock','paper','scissors'];
    let rand = Math.floor(Math.random() * 3);
    // console.log(arrChoices[rand]);

    return arrChoices[rand];
}

let playGame = (playerChoice,computerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);

    // DRAW BLOCK
    if (playerChoice == computerChoice) {
        return "It's a draw";
    }
    
    // ROCK BLOCK
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return `You win! You played Rock; Computer played Scissors.
        Rock beats scissors!`;
    }
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        return `You lose! You played Rock; Computer played Paper.
        Paper beats rock!`;
    }

    // PAPER BLOCK
    if (playerChoice == 'paper' && computerChoice == 'rock') {
        return `You win! You played Paper; Computer played Rock.
        Paper beats rock!`;
    }
    if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return `You lose! You played Paper; Computer played Scissors.
        Scissors beats paper!`;
    }

    // SCISSORS BLOCK
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return `You lose! You played Scissors; Computer played Rock.
        Rock beats scissors!`;
    }
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return `You win! You played Scissors; Computer played Paper.
        Scissors beats paper!`;
    }
}