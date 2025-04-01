const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


class Game {
    round(playerMove, computerMove){

        let move = `${playerMove} vs ${computerMove}`

        switch(move) {
            case "scissors vs paper": console.log("HUMAN PLAYER WINS")
            break;
            case "rock vs scissors": console.log("HUMAN PLAYER WINS")
            break;
            case "paper vs rock": console.log("HUMAN PLAYER WINS")
            break;
            case "paper vs paper": console.log("DRAW")
            break;
            case "rock vs rock": console.log("DRAW")
            break;
            case "paper vs paper": console.log("DRAW")
            break;
            case "paper vs scissors": console.log("HUMAN PLAYER LOSES")
            break;
            case "scissors vs rock": console.log("HUMAN PLAYER LOSES")
            break;
            case "rock vs paper": console.log("HUMAN PLAYER LOSES")
            break;
        }
    }
}

// let newGame = new Game

// newGame.start('Scissors', 'Paper')

// ------------- //

class Player {
    constructor(currentMove, score){
        currentMove = '',
        score = 0
    }

    moveRock(){
        currentMove = 'rock'
    }

    moveScissors(){
        currentMove = 'scissors'
    }

    movePaper(){
        currentMove = 'paper'
    }
}




class HumanPlayer extends Player { 
    constructor(currentMove, score) {
        super(currentMove, score)
        this.currentMove = currentMove
        this.score = score
    }
    static playerMove = ''

    move() {rl.question("Rock, Paper or Scissors?"), function(playerInput){
        owercaseInput = input.toLowerCase()
    if(lowercaseInput !== 'rock'){
        console.log("ERROR") 
    }
    else if(lowercaseInput !== 'scissors'){ 
        console.log("ERROR")
    }
    else if(lowercaseInput !== 'paper'){ 
        console.log("ERROR")
    } else {
        console.log(`You selected ${input}!`);
    };
    currentMove = playerInput
        console.log(playerInput)
        }
     //   console.log(`rounds: ${rounds}, move: ${playerMove}`)
        rl.close()
        }}

    // when HumanPlayer.movePaper() -- reassign currentMove to paper




class ComputerPlayer extends Player {
    constructor(currentMove, score) {
        super(currentMove, score)
        this.currentMove = currentMove
        this.score = score
    }
    
    move () {
        let move = Math.floor(Math.random() * 3) + 1

        if(move === 1){
        this.currentMove = 'scissors'
        }  
        else if (move == 2) {
        this.currentMove = 'rock'
        }
        else if (move == 3) {
        this.currentMove = 'paper'
        }
    }
}


let gameOne = new Game
let NPCPlayer = new ComputerPlayer
let playerOne = new HumanPlayer
// playerOne.move()
let playerMove = 'scissors'
NPCPlayer.move()


console.log('THE COMPUTER CHOSE:' + NPCPlayer.currentMove) // this shows that we are successfully activating the random roll and saving the result to this.currentMove
// gameOne.round('scissors', 'paper') //practice game round with hard coded player moves, returns win for the human player


console.log('THE RESULT IS' + gameOne.round(playerMove, NPCPlayer.currentMove)) // this is coming back as 'undefined' because the Game.round() function doesn't return a value to be logged