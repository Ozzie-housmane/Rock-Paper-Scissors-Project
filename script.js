console.log("Hello World")
function getComputerChoice() {
    // getenerate a random number between 1-10
    let randomNumber = Math.floor(Math.random()* 10) + 1;
    console.log(randomNumber);
    // sets computer possible choices
    const choice = ["Rock","Paper", "Scissors" ]
    console.log(choice[1])
    if (randomNumber >= 4){
        console.log(choice[0]);
    } else if (randomNumber >= 7 ) {
        console.log(choice[1]);
    } else {
        console.log(choice[2]);
    }

}
getComputerChoice()