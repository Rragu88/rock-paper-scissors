const actions = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

const container = document.querySelector('.container')
const rock = document.createElement('button');
rock.textContent = 'Rock';
const paper = document.createElement('button');
paper.textContent = 'Paper';
const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
const results = document.createElement('div');
const showPlayerScore = document.createElement('span');
const showComputerScore = document.createElement('span');

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
results.appendChild(showPlayerScore);
results.appendChild(showComputerScore);
container.appendChild(results);

// function to get random action
function computerPlay() {
    const randomIndex = Math.floor(Math.random() * actions.length);
    const item = actions[randomIndex];
    return item;
}

// function that plays a round of rps and tallies the score
function playRound(e) {
    if (e.currentTarget.textContent === 'Rock') {
        playerSelection = actions[0].toLocaleLowerCase();
        console.log(playerSelection);
    } else if (e.currentTarget.textContent === 'Paper') {
        playerSelection = actions[1].toLocaleLowerCase();
        console.log(playerSelection);
    } else {
        playerSelection = actions[2].toLocaleLowerCase();
        console.log(playerSelection);
    }

    let computerSelection = computerPlay().toLowerCase();

    if (playerSelection === computerSelection) {
        alert('It is a tie... Go again!');
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')
        || (playerSelection === 'rock' && computerSelection === 'scissors')) {
            playerScore++;
            showPlayerScore.textContent = `Player score: ${playerScore}`;
    } else if ((computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper')
        || (computerSelection === 'rock' && playerSelection === 'scissors')) {
            computerScore++;
            showComputerScore.textContent = `Computer score: ${computerScore}`;
    }

    if (playerScore === 5) {
        alert('You win!');
    } else if (computerScore === 5) {
        alert('The computer wins :(')
    }
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);




// plays a game of rps to 5 and says who won
// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }

//     if (playerScore === computerScore) {
//         alert('The game ends in a tie!!!!');
//     } else if (playerScore > computerScore) {
//         alert('You win!!!!')
//     } else {
//         alert('The computer wins :(');
//     }
// }

