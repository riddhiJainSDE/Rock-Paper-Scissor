let user=0
let comp=0
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#message");
userscore=document.querySelector("#user-score")
compscore=document.querySelector("#comp-score")
const genCompChoice= ()=>{
    const options=["rock","paper","scissors"]
    const idx=Math.floor(Math.random()*3)
    return options[idx]
};
const playGame=(userChoice)=>
{
console.log("user choice",userChoice);
const compChoice=genCompChoice();
console.log("comp choice ",compChoice);
     if(userChoice===compChoice)
    {
        console.log("game is draw")
        msg.innerText="Its a draw"
        msg.style.backgroundColor = "#081b31";
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
            {
                userWin= compChoice==="paper" ? false: true
            }
        else if(userChoice==="paper")
            {
                userWin= compChoice==="scissors" ? false: true
            }
        else if(userChoice==="scissors")
                {
                    userWin= compChoice==="rock" ? false: true
                }
                gameshow(userWin,userChoice,compChoice)
    }

};
gameshow= (userWin,userChoice,compChoice)=>{
if(userWin)
    {
        user++;
        compscore.innerText=user
    console.log("you win");
   
    msg.innerText=`You Win , your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    }
else
{
    comp++;
    userscore.innerText=user
   console.log("you lose")
   msg.innerText=`You Lose , your ${userChoice} beaten by ${compChoice}`
   msg.style.backgroundColor = "red";

}
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
    //    console.log("choice was clicked",userChoice)
       playGame(userChoice)
    })
}
);
