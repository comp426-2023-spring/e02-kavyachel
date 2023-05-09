//Rules for RPSLS
const RULES = {
    'rock': {
        'rock': "It's a tie",
        'paper': 'You lose',
        'scissors': 'You win',
        'lizard': 'You win',
        'spock': 'You lose'
    },
    'paper': {
        'rock': 'You win',
        'paper': "It's a tie", 
        'scissors': 'You lose',
        'lizard': 'You lose',
        'spock': 'You win'
    },
    'scissors': {
        'rock': 'You lose',
        'paper': 'You win',
        'scissors':  "It's a tie",
        'lizard': 'You win',
        'spock': 'You lose'
    },
    'lizard': {
        'rock': 'You lose',
        'paper': 'You win',
        'scissors': 'You lose',
        'lizard':  "It's a tie",
        'spock': 'You win'
    },
    'spock': {
        'rock': 'You win',
        'paper': 'You lose',
        'scissors': 'You win',
        'lizard': 'You lose',
        'spock': "It's a tie!"
    }
  };
  
  //RPS function
  export function rps(play) {
    const options = ['rock', 'paper', 'scissors'];
    //If move is undefined, pick a random option
    if (play === undefined)
        return {player: options[Math.floor(Math.random() * 3)]};
  
    //if move is not in options list, throw error.
    play = play.toLowerCase();
    if (!options.includes(play)) {
      console.error(play + " is out of range");
      console.log(`Rules for Rock Paper Scissors:
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock CRUSHES Scissors`);
      process.exit(1);
    }
    //opponents move is random
    var opponent_play = options[Math.floor(Math.random() * 3)];
    return {player: play, opponent: opponent_play, result: RULES[play][opponent_play]}
  }
  
  //RPSLS function
  export function rpsls(play) {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    //if play is undefined, pick a random play.
    if (play === undefined)
        return {player: options[Math.floor(Math.random() * 5)]};
  
    //if play not in options list, out of range.
    play = play.toLowerCase();
    if (!options.includes(play)) {
        console.error(play + ' is out of range.');
        console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
  
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock SMOOSHES Lizard
        - Lizard POISONS Spock
        - Spock SMASHES Scissors
        - Scissors DECAPITATES Lizard
        - Lizard EATS Paper
        - Paper DISPROVES Spock
        - Spock VAPORIZES Rock
        - Rock CRUSHES Scissors`);
        process.exit(1);
    }
  
    var opponent_play = options[Math.floor(Math.random() * 5)];
    return {player: play, opponent: opponent_play, result: RULES[play][opponent_play]}
  }