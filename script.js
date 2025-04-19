function getComputerChoice() {
    let val = Math.floor(Math.random() * 3)
    if (val == 0) {
        return "Rock"
    } else if (val == 1) {
        return "Paper"
    } else if (val == 2) {
        return "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors")
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound(e) {
        final.innerText = ""
        let humanChoice = e.target.id
        let computerChoice = getComputerChoice()
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        let win = false
        let winners = [["Paper", "Rock"],["Rock", "Scissors"], ["Scissors", "Paper"]]
        if (humanChoice == computerChoice) {
            results.innerText = "Tie! Both played "+humanChoice + "."
        } else {
            for (let i = 0; i < winners.length; i++) {
                if (winners[i][0] == humanChoice && winners[i][1] == computerChoice) {
                    win = true
                }
            }
            if (win == true) {
                results.innerText = "You win! "+humanChoice+" beats "+computerChoice + "."
                humanScore = humanScore + 1
                score.innerText = "Human Score: " +humanScore
                score.innerText += ", Computer Score: "+computerScore
            } else {
                results.innerText = "You lose! "+computerChoice+" beats "+humanChoice + "."
                computerScore = computerScore + 1
                score.innerText = "Human Score: " +humanScore
                score.innerText += ", Computer Score: "+computerScore
            }
            
        }
        if (humanScore != 5 && computerScore != 5) {
            score.innerText = "Human Score: " +humanScore
            score.innerText += ", Computer Score: "+computerScore
        }
        if (humanScore == 5) {
            final.innerText = "You win!🏆"
            humanScore = 0
            computerScore = 0
        } else if (computerScore == 5) {
            final.innerText = "Computer wins!🖥️"
            humanScore = 0
            computerScore = 0
        }
    }

    let results = document.querySelector("#results")
    let score = document.querySelector("#score")
    let final = document.querySelector("#final")

    let rockButton = document.querySelector("#rock")
    rockButton.addEventListener("click", playRound)
    let paperButton = document.querySelector("#paper")
    paperButton.addEventListener("click", playRound)
    let scissorsButton = document.querySelector("#scissors")
    scissorsButton.addEventListener("click", playRound)
}

playGame()

