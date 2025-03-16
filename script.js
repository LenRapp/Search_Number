
const randomNumber = Math.floor(Math.random()*10) + 1;
console.log(randomNumber);

function guessNumber() {
    let guessButton = document.getElementById("guessButton");
    let userGuess = parseInt(prompt("Entrer le nombre à trouver :"));

    guessButton.className = "";

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        guessButton.textContent = "Veuillez entrer un nombre valide entre 1 et 10.";
        guessButton.classList.add("too-low");
    } else if (userGuess < randomNumber) {
        guessButton.textContent = "Dommage !!! Le numéro est trop petit";
        guessButton.classList.add("too-low");
    } else if (userGuess > randomNumber) {
        guessButton.textContent = "Dommage !!! Le numéro est trop grand";
        guessButton.classList.add("too-high");
    } else {
        guessButton.textContent = "Bravo !!! Le nombre était " + randomNumber;
        guessButton.classList.add("correct");
    }

}










