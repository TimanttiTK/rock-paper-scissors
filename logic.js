        console.log("Hello World")
        let humanScore = 0;
        let computerScore = 0;        
        function getComputerChoice() {
            let computer = Math.floor(Math.random() * 3);
            if (computer === 0) {
                return "rock";
            } else if (computer === 1) {
                return "paper";
            } else {
                return "scissors";
            }
        }
            function playRound(selection) {
                const computerChoice = getComputerChoice();
                if (selection === computerChoice) {
                    console.log("Tie");
                } else if (selection === "rock" && computerChoice === "scissors") {
                    console.log("You win")
                    humanScore++;
                } else if (selection === "scissors" && computerChoice === "paper") {
                    console.log("You win")
                    humanScore++;
                } else if (selection === "paper" && computerChoice === "rock") {
                    console.log("You win")
                    humanScore++;
                } else {
                    console.log("You lose")
                    computerScore++;
                }
                return {humanScore, computerScore}
            }

        // buttons is a node list. It looks and acts much like an array.
        // const buttons = document.querySelectorAll("button");
        const buttons = document.querySelectorAll('#container button');

        // we use the .forEach method to iterate through each button
        buttons.forEach((button) => {
            // and for each one we add a 'click' listener
            button.addEventListener("click", () => {
                const selection = button.id;
                playRound(selection);
            });
        });
