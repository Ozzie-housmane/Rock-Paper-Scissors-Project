// Generates a random choice ("Rock", "Paper", or "Scissors") for the computer.
// Uses Math.random() to produce a number between 1–3, then maps each number to a choice.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3) + 1;
    let choice_1 = "Rock";
    let choice_2 = "paper";
    let choice_3 = "Scissors";
    let computerChoice = "";
    if (randomNumber === 1){
        computerChoice = choice_1
    } else if (randomNumber === 2 ) {
        computerChoice = choice_2
    } else {
        computerChoice = choice_3
    }
    console.log("Computer choose " + computerChoice)
    return computerChoice;
}

// Prompts the user to enter their choice ("Rock", "Paper", or "Scissors").
// Returns the raw user input (case is handled later).
function getHumanChoice() {
    let humanChoice = prompt("enter your choice");
    console.log("You choose " + humanChoice);
    return humanChoice;
}

// Tracks player scores across all rounds.
let humanScore = 0;
let computerScore = 0;

// Plays a single round of Rock–Paper–Scissors.
// Converts both choices to lowercase, compares them, updates scores, and logs results.
function playround (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a draw!"); }
        else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose paper beats rock");
        computerScore ++;
    }   else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose scissors beats paper");
        computerScore ++;
    }   else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose rock beats scissors");
        computerScore ++;
    }   else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win paper beats rock");
        humanScore ++;
    }   else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win rock beats scissors")
        humanScore ++;
    }   else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win scissors beats paper")
        humanScore ++;
    } else {
        console.log("input value is Rock, Paper or Scissors")
    }
    console.log("Score: Human = " + humanScore + ", Computer = " + computerScore);
}

// Plays a full 5-round game and determines the final winner.
function playgame () {
   playround(getHumanChoice(), getComputerChoice());
   playround(getHumanChoice(), getComputerChoice());
   playround(getHumanChoice(), getComputerChoice());
   playround(getHumanChoice(), getComputerChoice());
   playround(getHumanChoice(), getComputerChoice());
   
   if (humanScore === computerScore){
        console.log("It's a Draw no Winner Emerge")
    } else if (humanScore > computerScore){
        console.log("Congratulations you were victorious")
    } else if (humanScore < computerScore){
        console.log("Too bad Computer wins")
    }
}

// Start the game
playgame()


