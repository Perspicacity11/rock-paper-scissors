const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


class Game {
    round(playerMove, computerMove){

        let move = `${playerMove} vs ${computerMove}`

        switch(move) {
            case "Scissors vs Paper": console.log("WIN")
            break;
            case "Rock vs Scissors": console.log("WIN")
            break;
            case "Paper vs Rock": console.log("WIN")
            break;
            case "Paper vs Paper": console.log("DRAW")
            break;
            case "Rock vs Rock": console.log("DRAW")
            break;
            case "Paper vs Paper": console.log("DRAW")
            break;
            case "Paper vs Scissors": console.log("LOSE")
            break;
            case "Scissors vs Rock": console.log("LOSE")
            break;
            case "Rock vs Paper": console.log("LOSE")
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
        console.log(`rounds: ${rounds}, move: ${playerMove}`)
        rl.close()
        }}

    // when HumanPlayer.movePaper() -- reassign currentMove to paper




class ComputerPlayer extends Player {
    constructor(currentMove, score) {
        this.currentMove = currentMove
        this.score = score
        super()
    }

    
    static move = Math.floor(Math.random() * 3) + 1
    
    move () {
        if(move === 1){
        this.currentMove = 'scissors'
        console.log(move)
        console.log(this.currentMove)
        }  
        else if (move == 2) {
        this.currentMove = 'rock'
        console.log(move)
        console.log(this.currentMove)
        }
        else if (move == 3) {
        this.currentMove = 'paper'
        console.log(move)
        console.log(this.currentMove)
        }
    }
}

let NPCPlayer = new ComputerPlayer('')
console.log(NPCPlayer.move())
