function playerChoice() {
    let input = prompt("Rock, paper, or scissors?");
    return input;
}
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
        console.log( `It's a draw! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }
    
    // ROCK BLOCK
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        let condition = 'win';
        console.log( `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        let condition = 'lose';
        console.log( `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }

    // PAPER BLOCK
    if (playerChoice == 'paper' && computerChoice == 'rock') {
        let condition = 'win';
        console.log( `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }
    if (playerChoice == 'paper' && computerChoice == 'scissors') {
        let condition = 'lose';
        console.log( `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }

    // SCISSORS BLOCK
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        let condition = 'lose';
        console.log( `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        let condition = 'win';
        console.log( `You ${condition}! You played ${playerChoice}. The computer played ${computerChoice}.`);
        return condition;
    }
}

let playGame = () => {
    let score = 0;
    for (i = 0 ; i < 5 ; i++) {
        if (playRound('rock',getComputerChoice()) == 'win') {
            score++;
        } 
    }
    console.log("Your score is " + score);
}