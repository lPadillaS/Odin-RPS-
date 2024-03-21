let compChoice = document.getElementById("computer-Choice");
let userChoice = document.getElementById("player-Choice");
let restartButton = document.getElementById("reset-button");
let playButton = document.getElementById("play-button");
let buttons = document.getElementsByName("user-choice");
let sub = document.getElementById("sub-button");
sub.addEventListener("click", () => {
    checkWinner(checkUserchoice(), computerChoice())
});
function checkWinner(userMove, computerMove){
    console.log(userMove, computerMove)
}
function checkUserchoice()
{
    for(let button of buttons)
    {
        if (button.checked){
            choiceImage = document.createElement("img");
            choiceImage.src = `images/${button.value}.png`;

            userChoice.append(choiceImage);
            return button.value
        }   
    }
}
function computerChoice()
{
    choice = Math.floor(Math.random() * 3) + 1;
    choiceImage2 = document.createElement("img");
    compMove = null;
    switch(choice)
    {
        case 1:
            choiceImage2.src = "images/rock.png";
            compMove = "rock";
            break;
        case 2:
            choiceImage2.src = "images/paper.png";
            compMove = "paper";
            break;
        case 3:
            choiceImage2.src = "images/scissors.png";
            compMove = "scissors";
            break;
    }
    compChoice.append(choiceImage2);
    return compMove;
}

