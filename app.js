let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score")

const resetScore=()=>{
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "rgba(0, 0, 0, 0.487)"
};

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click",resetScore);


const genCompChoice =()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    // console.log("Game was draw.")
    msg.innerText = "Game was Draw. Play again"
    msg.style.backgroundColor = "rgba(0, 0, 0, 0.487)"
}

const showWinner = (userWin, userChoice, CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green"

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose");
        msg.innerText = `You Lose. ${CompChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"

    }
}

const playGame=(userChoice)=>{
    // console.log("user choice =",userChoice);

    //generate computer choice
    const CompChoice=genCompChoice();
    // console.log("Computer choice =",CompChoice);

    if(userChoice === CompChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
            userWin = CompChoice === "paper" ? false : true;
        }
    else if(userChoice === "paper"){
        //rock,scissor
        userWin = CompChoice === "scissors" ? false : true;
    }
    else{
        //rock, paper
        userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});
