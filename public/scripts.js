// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

import { rps, rpsls } from "lib/rpsls.js";

// choose game mode
function getSelectedGameMode() {
    const gameModeButton = document.querySelector(".game:checked");
    return gameModeButton ? gameModeButton.getAttribute("id") : null;
}

//show options (5 if rpsls, 3 if rps)
//click on an option, show you win/you lose/tie

