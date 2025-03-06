function getComputerChoice() {
    let choice = Math.random()
    if (choice <= 0.3) {
        return "rock"
    }
    else if ((choice > 0.03) && (choice <= 0.6)) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    return (prompt("CHOOSE YOUR WEAPON: "))
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        let humanFixed = humanChoice.toLowerCase()
        console.log("You chose " + humanFixed)
        console.log("The computer chose " + computerChoice)
        if (humanFixed == computerChoice) {
            console.log("Tied!!!!")
        }
        else if (humanFixed == "rock") {
            if (computerChoice == "paper") {
                computerScore++
                console.log("Point computer!")
            }
            else if (computerChoice == "scissors") {
                humanScore++
                console.log("Point to you!")
            }
        }
        else if (humanFixed == "paper") {
            if (computerChoice == "scissors") {
                computerScore++
                console.log("Point computer!")
            }
            else if (computerChoice == "rock") {
                humanScore++
                console.log("Point to you!")
            }
        }
        else if (humanFixed == "scissors") {
            if (computerChoice == "rock") {
                computerScore++
                console.log("Point computer!")
            }
            else if (computerChoice == "paper") {
                humanScore++
                console.log("Point to you!")
            }
        }
        else {
            return ("Bad input, try again!")
        }
    }
    //Play 5 rounds:
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    //Declare the winner!
    console.log("FINAL SCORES:")
    console.log("COMPUTER: " + computerScore)
    console.log("YOU: " + humanScore)
    if (humanScore < computerScore){
        return("Computer wins overall!")
    }
    else if (humanScore > computerScore){
        return("You win the whole game!")
    }
    else {
        return("A TIE!?!?!?")
    }
}

console.log(playGame())