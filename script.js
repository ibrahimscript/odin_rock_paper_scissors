const results = document.querySelector('.results');
const buttons = document.querySelectorAll('button');
const player = document.querySelector('.playerscore');
const computer = document.querySelector('.computerscore');


let playerScore = 0;
let computerScore = 0;

function playerSelection() {
  return prompt("Select: Rock, Paper, or Scissors").toLowerCase();
}

function computerSelection(){
    let selection = Math.floor(Math.random() * 3) + 1; 

    switch (selection) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}


function playRound(playerSelection, computerSelection){

    if (playerScore === 5) {
        results.textContent = "You Win!";
        playerScore = 0;
        computerScore = 0;
        return;
    } else if (computerScore === 5) {
        results.textContent = "The Computer Wins";
        playerScore = 0;
        computerScore = 0;
        return;
    } else {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        player.textContent = playerScore;
        computer.textContent = computerScore;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        player.textContent = playerScore;
        computer.textContent = computerScore;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        player.textContent = playerScore;
        computer.textContent = computerScore;
        return "Tie!";  
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        player.textContent = playerScore;
        computer.textContent = computerScore;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        player.textContent = playerScore;
        computer.textContent = computerScore;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        player.textContent = playerScore;
        computer.textContent = computerScore;
        return "Tie!";
    } else if (playerSelection == "scirssors" && computerSelection == "scissors") {
        player.textContent = playerScore;
        computer.textContent = computerScore;
        return "Tie!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        player.textContent = playerScore;
        computer.textContent = computerScore;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        player.textContent = playerScore;
        computer.textContent = computerScore;
        return "You Win! Scissors beats Paper";
    }

}

}



buttons.forEach(button => button.addEventListener('mousedown', function(e) {
    playRound(e.target.className, computerSelection());
    player.textContent = playerScore;
    computer.textContent = computerScore;
}))