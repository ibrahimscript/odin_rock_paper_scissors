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
    }
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "Tie!";  
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Tie!";
    } else if (playerSelection == "scirssors" && computerSelection == "scissors") {
        return "Tie!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return "You Win! Scissors beats Paper";
    }

}

function game() {

  for(i = 0; i < 5; i++) {
    console.log(playRound(playerSelection(), computerSelection()))
  }

  if (playerScore > computerScore) {
    console.log("You win");
  } else if (computerScore > playerScore) {
    console.log("You lose")
  } else if (playerScore == computerScore) {
    console.log("Tie!");
  }
}

game();