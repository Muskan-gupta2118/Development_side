console.log("js is connected")
let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","purple"];
 let started=false;
 let level=0;

 let h2=document.querySelector("h2");

 document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
 });
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randbtn);
}
function checkAns(idx){
    if (userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerText =`Game Over! press any key to start, your score was ${level}`;
    document.querySelector("body").style.Color="red";
    setTimeout(function(){
        document.querySelector("body").style.color="Blue";

    },150);
    reset();
}
}

function btnPress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started =false;
    gameseq=[];
    userseq=[];
    level=0;
}