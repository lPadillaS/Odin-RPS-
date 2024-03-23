let compChoice = document.getElementById("computer-Choice");
let userChoice = document.getElementById("player-Choice");
let restartButton = document.getElementById("reset-button");
let buttons = document.getElementsByName("user-choice");
let sub = document.getElementById("sub-button");
sub.addEventListener("click", () => {
    checkWinner(checkUserchoice(), computerChoice())
});
function checkWinner(userMove, computerMove){
    if (userMove == computerMove){
        console.log("it's a tie");
    }
    else if(userMove == "rock" && computerMove == "paper"){
        console.log("computer wins");
    }
    else if (userMove == "paper" && computerMove == "rock"){
        console.log("You win");
    }
    else if(userMove == "rock" && computerMove == "scissors"){
        console.log("You win");
    }
    else if(userMove == "scissors" && computerMove == "rock"){
        console.log("computer wins");
    }
    else if(userMove == "paper" && computerMove == "scissors"){
        console.log("computer wins");
    }
    else if(userMove == "scissors" && computerMove == "paper"){
        console.log("you win");
    }
}
function checkUserchoice()
{
    for(let button of buttons)
    {
        if (button.checked){
            choiceImage = document.createElement("img");
            choiceImage.id = "user-image";
            choiceImage.src = `images/${button.value}.png`;
            let rem = document.getElementById("user-image");
            if (rem){
                rem.remove();
            }
            userChoice.append(choiceImage);
            return button.value;
        }   
    }
}
function computerChoice()
{
    choice = Math.floor(Math.random() * 3) + 1;
    choiceImage2 = document.createElement("img");
    choiceImage2.id = "computer-image";
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
    let rem = document.getElementById("computer-image");
    if (rem){
        rem.remove();
    }
    compChoice.append(choiceImage2);
    return compMove;
}

