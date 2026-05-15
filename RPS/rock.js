document.addEventListener("DOMContentLoaded", () => {
    let userScore = 0;
    let compScore = 0;

    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");

    const userScorePara = document.querySelector("#user-score");
    const compScorePara = document.querySelector("#comp-score");

    // Generate Computer Choice
    const genCompChoice = () => {
        let options = ["rock", "paper", "scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    };

    // Draw Game
    const drawGame = () => {
        msg.innerText = "Game was Draw! Play again.";
        msg.style.backgroundColor = "plum";
    };

    // Show Winner
    const showWinner = (userWin, userChoice, compChoice) => {
        if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "lightgreen";
        } else {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor = "tomato";
        }
    };

    // Main Game Function
    const playGame = (userChoice) => {
        const compChoice = genCompChoice();

        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = false;
            if (userChoice === "rock") {
                // Rock beats Scissors
                userWin = compChoice === "scissors";
            } else if (userChoice === "paper") {
                // Paper beats Rock
                userWin = compChoice === "rock";
            } else if (userChoice === "scissors") {
                // Scissors beats Paper
                userWin = compChoice === "paper";
            }
            showWinner(userWin, userChoice, compChoice);
        }
    };

    // Add Event Listeners
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            if (userChoice) {
                playGame(userChoice);
            }
        });
    });
});