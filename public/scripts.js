// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

import { rps, rpsls } from "./lib/rpsls.js";

//Get game mode
function getGameMode() {
    const gameModeButton = document.querySelector(".game:checked");
    return gameModeButton ? gameModeButton.getAttribute("id") : null;
}

//Validate form
function validateForm() {
    console.log("form worjs")
    var radios = document.getElementsByName("game");
    var formValid = false;
  
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        formValid = true;
        break;
      }
    }
  
    if (!formValid) {
      alert("Please select a game option.");
      return false;
    }
    
    return true;
}

//Hide radio on submit and display user options
document.getElementById("gameModeForm").addEventListener("submit", function(event) {
    if(validateForm()){
        event.preventDefault(); // prevent form submission
        document.getElementById("gameModeForm").style.display = "none";
        const playAgainstOpponent = document.getElementById("opponent").checked;
        showGameOptions(playAgainstOpponent)
    }
  });

//Display options (5 if rpsls, 3 if rps)
const gameButtonsContainer = document.querySelector(".game-mode");
function showGameOptions(playAgainstOpponent) {
    const gameMode = getGameMode();
    if(playAgainstOpponent){
        if (gameMode === "rps") {
            gameButtonsContainer.innerHTML = `
                <button class="user-inputs-button" name="user-choice" value="rock" id="Rock">Rock</button>
    
                <button class="user-inputs-button" name="user-choice" value="paper" id="Paper">Paper</button>
    
                <button class="user-inputs-button" name="user-choice" value="scissors" id="Scissors">Scissors</button>
            `;
        } else if (gameMode === "rpsls") {
            gameButtonsContainer.innerHTML = `
                <button class="user-inputs-button" name="user-choice" value="rock" id="Rock">Rock</button>
    
                <button class="user-inputs-button" name="user-choice" value="paper" id="Paper">Paper</button>
                
                <button class="user-inputs-button" name="user-choice" value="scissors" id="Scissors">Scissors</button>
    
                <button class="user-inputs-button" name="user-choice" value="lizard" id="Lizard">Lizard</button>
    
                <button class="user-inputs-button" name="user-choice" value="spock" id="Spock">Spock</button>
                
            `;
        }
    }
    else{
        gameButtonsContainer.innerHTML = `
            <button class="user-inputs-button" name="user-choice" id="Rock">Shoot</button>
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
        gameButtonsContainer.innerHTML = ``;
        resultContainer.innerHTML = `<p>You chose ${gameResult.player}.  Your opponent chose ${gameResult.opponent}.  ${gameResult.result}!</p>
        <a href = "index.html" class = "start-over">START OVER</a>`;
    }
    else{
        if(getGameMode() === "rps") {
            gameResult = rps().player;
        }
        else {
            gameResult = rpsls().player;
        }
        gameButtonsContainer.innerHTML = ``;
        resultContainer.innerHTML = `<p>You got ${gameResult}!</p> <a href = "index.html" class = "start-over">START OVER</a>`;
    }
}






