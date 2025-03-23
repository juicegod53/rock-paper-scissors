function getComputerChoice() {
    let val = Math.floor(Math.random() * 3)
    if (val == 0) {
        return "rock"
    } else if (val == 1) {
        return "paper"
    } else if (val == 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors")
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        let win = false
        let winners = [["paper", "rock"],["rock", "scissors"], ["scissors", "paper"]]
        if (humanChoice == computerChoice) {
            console.log("Tie! Both played "+humanChoice)
        } else {
            for (let i = 0; i < winners.length; i++) {
                if (winners[i][0] == humanChoice && winners[i][1] == computerChoice) {
                    win = true
                }
            }
            if (win == true) {
                console.log("You win! "+humanChoice+" beats "+computerChoice)
                humanScore = humanScore + 1
            } else {
                console.log("You lose! "+computerChoice+" beats "+humanChoice)
                computerScore = computerScore + 1
            }
            
        }
    }
    while (humanScore != 5 && computerScore != 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        console.log("Your Score: "+humanScore)
        console.log("Computer Score: "+computerScore)
    }
    if (humanScore == 5) {
        console.log("You win!")
    } else if (computerScore == 5) {
        console.log("Computer wins!")
    }
}

playGame()

