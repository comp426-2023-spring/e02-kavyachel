// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

import { rps, rpsls } from "./lib/rpsls.js";

//Get game mode
function getGameMode() {
    const gameModeButton = document.querySelector(".game:checked");
    return gameModeButton ? gameModeButton.getAttribute("id") : null;
}

//Hide radio on submit and display user options
document.getElementById("gameModeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
    document.getElementById("gameModeForm").style.display = "none";
    const playAgainstOpponent = document.getElementById("opponent").checked;
    showGameOptions(playAgainstOpponent)
  });

//Display options (5 if rpsls, 3 if rps)
const gameButtonsContainer = document.querySelector(".game-mode");
function showGameOptions(playAgainstOpponent) {
    const gameMode = getGameMode();
    if(playAgainstOpponent){
        if (gameMode === "rps") {
            gameButtonsContainer.innerHTML = `
                <button class="user-inputs-button" name="user-choice" value="rock" id="rock">Rock</button>
    
                <button class="user-inputs-button" name="user-choice" value="paper" id="paper">Paper</button>
    
                <button class="user-inputs-button" name="user-choice" value="scissors" id="scissors">Scissors</button>
            `;
        } else if (gameMode === "rpsls") {
            gameButtonsContainer.innerHTML = `
                <button class="user-inputs-button" name="user-choice" value="rock" id="rock">Rock</button>
    
                <button class="user-inputs-button" name="user-choice" value="paper" id="paper">Paper</button>
                
                <button class="user-inputs-button" name="user-choice" value="scissors" id="scissors">Scissors</button>
    
                <button class="user-inputs-button" name="user-choice" value="lizard" id="lizard">Lizard</button>
    
                <button class="user-inputs-button" name="user-choice" value="spock" id="spock">Spock</button>
                
            `;
        }
    }
    else{
        gameButtonsContainer.innerHTML = `
            <button class="user-inputs-button" name="user-choice" id="rock">Shoot</button>
        `;
    }
    
}

gameButtonsContainer.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
      const playAgainstOpponent = document.getElementById("opponent").checked;
      play(event.target.id, playAgainstOpponent);
    }
  });

//Display result
const resultContainer = document.querySelector(".result");
function play(playerSelection, playAgainstOpponent) {
    let gameResult;
    if (playAgainstOpponent) {
        console.log("playing against opponent")
        if (getGameMode() === "rps") {
            gameResult = rps(playerSelection);
        } else if (getGameMode() === "rpsls") {
            gameResult = rpsls(playerSelection);
        }
        resultContainer.innerHTML = `<p>You chose ${gameResult.player}. Your opponent chose ${gameResult.opponent}. ${gameResult.result}</p>
        <button class="start-over">START OVER</button>`;
    }
    else{
        if(getGameMode() === "rps") {
            gameResult = rps().player;
        }
        else {
            gameResult = rpsls().player;
        }
        
        resultContainer.innerHTML = `<p>${gameResult}</p><button class="start-over">START OVER</button>`;
    }
}

//Start Over
resultContainer.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        location.reload();
    }
  });




