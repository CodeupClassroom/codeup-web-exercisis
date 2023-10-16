function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function checkGuess () {
    const userGuess = parseInt(prompt("Guess a number between 1 and 100"))
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        alert("Enter a number between 1 and 100 Please")
        checkGuess()
    }
}
checkGuess()