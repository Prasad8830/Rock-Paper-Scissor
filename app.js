let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame=()=>{
    msg.innerText="Draw";
    msg.style.backgroundColor = "#081b31";
}

showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame=(userChoice)=>{
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin = (compChoice==="paper"?false:true);
        }
        else if(userChoice==="paper"){
            userWin = (compChoice==="scissors"?false:true);
        }
        else{
            userWin = (compChoice==="rock"?false:true);
        }
        showWinner(userWin);
    }
}

const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

