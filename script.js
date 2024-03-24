let compChoice = document.getElementById("computer-Choice");
let userChoice = document.getElementById("player-Choice");
let restartButton = document.getElementById("reset-button");
let buttons = document.getElementsByName("user-choice");
let sub = document.getElementById("sub-button");
let score_display = document.getElementById("score");
let announce = document.getElementById("announcer");
let score = {'computer': 0, 'user': 0};
sub.addEventListener("click", () => {
    checkWinner(checkUserchoice(), computerChoice())
});
restartButton.addEventListener("click", () => {
    score['computer'] = 0;
    score['user'] = 0;
    score_display.innerText = `${score['user']}:${score['computer']}`
})
function checkWinner(userMove, computerMove){
    if (userMove == computerMove){
        announce.innerText = "It's a tie!"
    }
    else if(userMove == "rock" && computerMove == "paper"){
        announce.innerText = "Computer wins!"
        score['computer']++;
    }
    else if (userMove == "paper" && computerMove == "rock"){
        announce.innerText = "You win!"
        score['user']++;
    }
    else if(userMove == "rock" && computerMove == "scissors"){
        announce.innerText = "You win!"
        score['user']++;
    }
    else if(userMove == "scissors" && computerMove == "rock"){
        announce.innerText = "Computer wins!"
        score['computer']++;
    }
    else if(userMove == "paper" && computerMove == "scissors"){
        announce.innerText = "Computer wins!"
        score['computer']++;
    }
    else if(userMove == "scissors" && computerMove == "paper"){
        announce.innerText  = "You win!"
        score['user']++;
    }
    score_display.innerText = `${score['user']}:${score['computer']}`
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

