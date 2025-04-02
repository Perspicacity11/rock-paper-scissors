const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


class Game {
    round(playerMove, computerMove){

        let move = `${playerMove} vs ${computerMove}`

        switch(move) {
            case "scissors vs paper": return "HUMAN PLAYER WINS"
            case "rock vs scissors": return "HUMAN PLAYER WINS"
            case "paper vs rock": return "HUMAN PLAYER WINS"
            case "paper vs paper": return "DRAW"
            case "rock vs rock": return "DRAW"
            case "paper vs paper": return "DRAW"
            case "paper vs scissors": return "HUMAN PLAYER LOSES"
            case "scissors vs rock": return "HUMAN PLAYER LOSES"
            case "rock vs paper": return "HUMAN PLAYER LOSES"
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

    move() {rl.question("Rock, Paper or Scissors?"), function (playerInput) {
        lowercaseInput = input.toLowerCase()
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
    this.currentMove = playerInput
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



// PRACTICE GAME


let gameOne = new Game
let NPCPlayer = new ComputerPlayer
NPCPlayer.move()

let playerOne = new HumanPlayer
// playerOne.move()
let playerMove = 'scissors'

// console.log('THE HUMAN CHOSE: ' + playerOne.currentMove)
console.log(playerMove)

console.log('THE COMPUTER CHOSE: ' + NPCPlayer.currentMove) // this shows that we are successfully activating the random roll and saving the result to this.currentMove
// gameOne.round('scissors', 'paper') //practice game round with hard coded player moves, returns win for the human player


// console.log('THE RESULT IS: ' + gameOne.round(playerOne.currentMove, NPCPlayer.currentMove)) // this is coming back as 'undefined' because the Game.round() function doesn't return a value to be logged
console.log('THE RESULT IS: ' + gameOne.round(playerMove, NPCPlayer.currentMove)) // this is coming back as 'undefined' because the Game.round() function doesn't return a value to be logged