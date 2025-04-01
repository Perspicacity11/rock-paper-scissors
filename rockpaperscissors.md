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


Game steps:

1: Instantiate new Game object, which instantiates two Player objects (one humanPlayer, one computerPlayer)

2: User inputs number of games desired; desired games saved as static variable in the Game object (we assume that a game is best-of-three rounds)

3: User prompted to input their move - rock, paper or scissors; saved as static variable in the Player object, used as input to invoke one of three methods (playRock, playScissors or playPaper)

4: computerPlayer randomly selects one of three methods - playRock, playScissors or playPaper; returns the input to a static variable in the Player object

5: Game object compares the humanPlayer and computerPlayer move variables, uses conditional to determine who won, and iterates the roundScore variable accordingly

6: Game declares the winner of the round, reprompts the user for a move

7: computerPlayer makes their move

8: Game object compares the moves and iterates the roundScore for round 2

9: when either the humanPlayer or computerPlayer roundScore reaches 2, the Player object iterates the gameScore variable for the relevant player

10: when either the humanPlayer or computerPlayer gameScore variable reaches ((desiredRounds / 2) + 1), the game is ended with a victory message for the winner



