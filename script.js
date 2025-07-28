console.log("Hello World")
function getComputerChoice() {
    // getenerate a random number between 1-10
    let randomNumber = Math.floor(Math.random()* 3) + 1;
    console.log(randomNumber);
    // sets computer possible choices
    const choice = ["Rock","Paper", "Scissors" ]
    console.log(choice[1])
    if (randomNumber === 1){
        console.log(choice[0]);
    } else if (randomNumber === 2 ) {
        console.log(choice[1]);
    } else {
        console.log(choice[2]);
    }

}
getComputerChoice()