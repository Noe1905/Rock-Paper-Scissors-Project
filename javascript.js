function getComputerChoice () {
    let choice = '';
    const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        choice = "paper";
    } else if (randomNumber === 1) {
        choice = "scissors";
    } else {
        choice = "rock";
    }
    return choice;
}
console.log(getComputerChoice());



