let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");
const genCompChoice= () => {
    const option=["rock","paper","scissors"];
    // rock paper scissors//
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawgame=() => {
    msg.innerText="game draw";
    msg.style.backgroundColor="#081b31";
};

const showwinner = (userwin,userchoice,compchoice)=> {
    if(userwin) {
       userScore++;
       userscorepara.innerText=userScore;
        msg.innerText="you win";
      msg.style.backgroundColor="green";
    } else {
        compScore++;
        compscore.innerText=compScore;
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }
};

const playGame= (userchoice)=> {
 console.log("userchoice= ",userchoice);
 
//generate computer choice------////  
const compchoice= genCompChoice();
console.log("comp choice=",compchoice)

// figth---///
if(userchoice=== compchoice) {
    // draw game
    drawgame();
} 
else {
    let userwin=true;
    if (userchoice==="rock") {
        // scissor,paper----//
       userwin= compchoice==="paper"? false:true;
    } 
    else if (userchoice==="paper") {
        // rock,scissor//
        userwin=compchoice==="scissors" ? false:true;
    } 
    else {
        // rock,paper//
        userwin= compchoice==="rock"? false:true
    }
    showwinner(userwin,userchoice,compchoice);
}

};

 choices.forEach((choice) => {
     choice.addEventListener("click", () => {
     const userchoice= choice.getAttribute("id");
     playGame(userchoice);

     });
 });