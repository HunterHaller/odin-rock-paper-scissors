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

function playGame() {
    let humanScore = 0
    let computerScore = 0

    let playerScoreHolder = document.querySelector("#playerScore")
    let computerScoreHolder = document.querySelector("#computerScore")
    let roundResults = document.querySelector("#roundResults")
    let finalResults = document.querySelector("#results")

    console.log("The game begins!")

    function playRound(humanChoice, computerChoice) {
        let humanFixed = humanChoice.toLowerCase()
        console.log("You chose " + humanFixed)
        console.log("The computer chose " + computerChoice)

        let roundText = "You played "
        roundResults.textContent = roundText.concat(" ", humanFixed, ", and the computer played ", computerChoice)

        if (humanFixed == computerChoice) {
            console.log("Tied, no points given!!!!")
        } else if (humanFixed == "rock") {
            if (computerChoice == "paper") {
                computerScore++
            }
            else if (computerChoice == "scissors") {
                humanScore++
            }
        } else if (humanFixed == "paper") {
            if (computerChoice == "scissors") {
                computerScore++
            }
            else if (computerChoice == "rock") {
                humanScore++
                console.log("Point to you!")
            }
        } else if (humanFixed == "scissors") {
            if (computerChoice == "rock") {
                computerScore++
                console.log("Point computer!")
            }
            else if (computerChoice == "paper") {
                humanScore++
                console.log("Point to you!")
            }
        }

        playerScoreHolder.textContent = humanScore
        computerScoreHolder.textContent = computerScore
    }

    let list = document.querySelector(".buttonList");

    list.addEventListener("click", (event) => {
        let target = event.target;
        playRound(target.id, getComputerChoice())

        if ((humanScore == 5) || (computerScore == 5)) {
            if (humanScore < computerScore) {
                finalResults.textContent = "Computer wins overall!"
                return ("Computer wins overall!")
            }
            else if (humanScore > computerScore) {
                finalResults.textContent = "You win!!!"
                return ("You win the whole game!")
            }
            else {
                return ("A TIE!?!?!?")
            }
        }
    })


}

console.log(playGame())