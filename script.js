function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = rand(1, 20);
let totalAttempts = 6;
console.log(randomNumber);

function guessNumber() {
	let inputElement = document.querySelector("#guess");
	let numberOfAttempts = document.querySelector("#numberOfAttemptsLeft");
	let hintParagraph = document.querySelector("#hint");
	let resultParagraph = document.querySelector("#result");

	// if not entered any number
	if (inputElement.value.trim() === "") {
		hintParagraph.innerText = `Please enter a guess 🔮`;
        return;
    }
	// run out of guesses
	if (totalAttempts === 1) {
		resultParagraph.innerText = `The number of guesses has run out, please try again! 😓`;
		resultParagraph.style.color = "rgba(152, 36, 123, 0.974)";
		hintParagraph.style.display = "none";
		// check button disabled and "play again" appear
		document.getElementById("check").style.display = "none";
		document.getElementById("reload").style.display = "block";
		return;
	}
	// comments
	totalAttempts--;
	numberOfAttempts.innerText = totalAttempts;
	let inputValue = inputElement.value;

	if (inputValue > randomNumber) {
		hintParagraph.innerText = `Try lower number! 👇`;
	} else if (inputValue < randomNumber) {
		hintParagraph.innerText = `Try higher number! 👆`;
	} else {
		resultParagraph.innerText = `Congratulations! You guessed the number! 🥳`;
		resultParagraph.style.color = "rgba(152, 36, 123, 0.974)";
		resultParagraph.innerHTML += `<br><span style="font-size: smaller;"> After ${6 - totalAttempts} attempt(s)</span>`;
		hintParagraph.style.display = "none";
		// check button disabled and play again appear
        document.getElementById("check").disabled = true;
		document.getElementById("check").style.display = "none";
		document.getElementById("reload").style.display = "block";
	}
}
function refreshPage() {
    location.reload();
}


