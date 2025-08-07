console.log("Hello World")
function getComputerChoice() {
    // getenerate a random number between 1-3
    let randomNumber = Math.floor(Math.random()* 3) + 1;
    console.log(randomNumber);
    // sets computer possible choices
    let choice_1 = "Rock";
    let choice_2 = "paper";
    let choice_3 = "Scissors";
    // hold value for what computer choice will be in the future
    let computerChoice = "";
     // give the computer a choice from the value of random number and stores it in the variable computerChoice
    if (randomNumber === 1){
        computerChoice = choice_1
        // console.log(choice_1);
    } else if (randomNumber === 2 ) {
        computerChoice = choice_2
        // console.log(choice_2);
    } else {
        computerChoice = choice_3
        // console.log(choice_3);
    }
    console.log("Computer choose " + computerChoice)
    return computerChoice;
}
getComputerChoice()
// Get human choice via prompt and shoiaves it into the humanChoice Variable
function getHumanChoice() {
    let humanChoice = prompt("enter your choice");
    console.log("You choose " + humanChoice);
    // convert humanChoice to lowercase Character
    // let humanChoiceCnvt = humanChoice.toLowerCase();
    // console.log(humanChoiceCnvt);
    return humanChoice;

}
// getHumanChoice()

// Keep track of players score 
let humanScore = 0;
let computerScore = 0;
// converts Human and Computer Choices to Lowercase
function playround (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    // sets condition for who win the Rock Paper Scissors game and prints the winner in the console
    if (humanChoice === computerChoice) {
        console.log("It's a draw!"); }
        else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose paper beats rock");
    }   else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose scissors beats paper");
    }   else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose rock beats scissors");
    }   else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win paper beats rock");
    }   else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win rock beats scissors")
    }   else {
        console.log("You win scissors beats paper")
    }
        
}
// pass and stores the return value of human and computer choice into the variable "humanSelection" and "computerSelection"
 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();
// calls playground function to run inputing the return or humanChoice and computerChoice value as arguement
playround(humanSelection, computerSelection);



