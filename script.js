let compChoice = document.getElementById("computer-Choice");
let userChoice = document.getElementById("player-Choice");

let buttons = document.getElementsByName("user-choice");
let sub = document.getElementById("sub-button");
sub.addEventListener("click", check);
coumputerChoice();
function check()
{
    for(let button of buttons)
    {
        if (button.checked){
            choiceImage = document.createElement("img");
            choiceImage.src = `images/${button.value}.png`;

            userChoice.append(choiceImage);

        }   
    }
}
function coumputerChoice()
{
    choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    choiceImage2 = document.createElement("img");
    switch(choice)
    {
        case 1:
            choiceImage2.src = "images/rock.png";
            break;
        case 2:
            choiceImage2.src = "images/paper.png";
            break;
        case 3:
            choiceImage2.src = "images/scissors.png";
            break;
    }
    compChoice.append(choiceImage2);
}

