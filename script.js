const canvas =document.getElementById("snow");
const ctx=canvas.getContext("2d");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let snowflakes=[];
for(let i=0;i<150;i++){
  snowflakes.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*4+1,
    d:Math.random()*1+1
  });
}
function drawSnow(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";
  ctx.beginPath();

for(let flake of snowflakes){
  ctx.moveTo(flake.x,flake.y);
  ctx.arc(flake.x,flake.y,flake.r,0,Math.PI*2);
}
  ctx.fill();
moveSnow();
}
function moveSnow(){
  for(let flake of snowflakes){
       flake.y+=flake.d;
       if(flake.y>canvas.height){
  flake.y=0;
  flake.x=Math.random()*canvas.width;
  }
}
}
setInterval(drawSnow,25);
window.addEventListener("resize",()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});


