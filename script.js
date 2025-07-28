console.log("Hello World")
function getComputerChoice() {
    // getenerate a random number between 1-10
    let randomNumber = Math.floor(Math.random()* 3) + 1;
    console.log(randomNumber);
    // sets computer possible choices
    let choice_1 = "Rock";
        choice_2 = "paper";
        choice_3 = "Scissors";
    if (randomNumber === 1){
        console.log(choice_1);
    } else if (randomNumber === 2 ) {
        console.log(choice_2);
    } else {
        console.log(choice_3);
    }

}
getComputerChoice()