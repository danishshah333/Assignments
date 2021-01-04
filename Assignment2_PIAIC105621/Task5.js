var num = 6;
var secretNumber = prompt("Please enter a number between 1-10 to guess the secret number");
secretNumber = Number(secretNumber);
if (secretNumber === num) {
    document.write ("Bingo! Correct answer");
} else if (secretNumber === num + 1 ) {
    document.write ("Close enough to the correct answer");
} else {
    document.write ("Try again");}