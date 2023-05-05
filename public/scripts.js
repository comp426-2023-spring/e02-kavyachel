// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

//import { rps, rpsls } from "../lib/rpsls.js";

// choose game mode
function getSelectedGameMode() {
    const gameModeButton = document.querySelector(".game:checked");
    return gameModeButton ? gameModeButton.getAttribute("id") : null;
}

//hide radio on submit and display user options
document.getElementById("gameModeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
    document.getElementById("gameModeForm").style.display = "none";
    console.log("This is working") // hide form
    showGameOptions()
  });

//show options (5 if rpsls, 3 if rps)
function showGameOptions() {
    /**document.querySelectorAll(".game").forEach((gameModeButton) => {
        gameModeButton.addEventListener("change", () => {**/
            const gameButtonsContainer = document.querySelector(".game-mode");
    
            const gameMode = getSelectedGameMode();
            if (gameMode === "rps") {
                gameButtonsContainer.innerHTML = `
                    <input type="radio" class="user-inputs-button" name="user-choice" value="rock" choice-content="rock"> Rock
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="paper" choice-content="paper"> Paper
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="scissors" choice-content="scissors"> Scissors
                `;
            } else if (gameMode === "rpsls") {
                gameButtonsContainer.innerHTML = `
                    <input type="radio" class="user-inputs-button" name="user-choice" value="rock" choice-content="rock"> Rock
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="paper" choice-content="paper"> Paper
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="scissors" choice-content="scissors"> Scissors
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="lizard" choice-content="lizard"> Lizard
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="spock" choice-content="spock"> Spock
                `;
            }
            /** 
        });
    });
}*/

//click on an option, show you win/you lose/tie and start over button 
}
