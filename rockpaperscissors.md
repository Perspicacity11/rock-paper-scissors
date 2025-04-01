class Game
    method to start the game, ask for the number of rounds to play (reprompt at the end of the game)

    static variable for desired number of rounds (inputted as an argument by the user)
    
    Contains the logic for comparing the input (rock, paper, scissors) from the human and computer players, and returning a result for the round

    static variable for winning combinations of moves
    (if humanPlayer input == rock, && computerPlayer input == scissors, return 'round win')


class Player

currentMove = static variable, saves result of the methods
roundScore = iterates with each won round
gameScore = iterates with every two rounds won

    - method playRock

    - method playScissors

    - method playPaper


subclass humanPlayer
    CLI input for move (invoking one of the above methods)
    needs to store input move as a variable to be passed to the Game class


subclass computerPlayer
    random selection of rock, paper or scissors methods
    needs to store input move as a variable to be passed to the Game class

