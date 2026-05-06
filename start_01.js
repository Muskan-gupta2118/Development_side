
 
 let btn = document.querySelector("button");
 console.dir(btn);

 

 btn.addEventListener("click",function(){
   let h1 = document.querySelector("h1");
   let randomcolor = getRandomcolor();
   h1.innerText = randomcolor;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
    
   console.log("color updated");
});

function getRandomcolor(){
   let Red = Math.floor(Math.random()*255);
   let green = Math.floor(Math.random()*255);
   let blue = Math.floor(Math.random()*255);
   let color =`rgb(${Red}, ${green}, ${blue})`;
   return color;   
}




