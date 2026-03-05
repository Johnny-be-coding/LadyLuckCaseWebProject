const skins = [

  { name:"P250", rarity:"blue", chance:80, img:"pictures/P250Done.jpg" },
  { name:"Tec 9", rarity:"blue", chance:80, img:"pictures/Tec9Done.jpg" },
  { name:"USP-S", rarity:"blue", chance:80, img:"pictures/USPsDone.jpg" },
  { name:"Shadow Daggers", rarity:"gold", chance:0.26, img:"pictures/ShadowDaggersDone.png" },
  { name:"M4A4", rarity:"red", chance:0.64, img:"pictures/m4a4Done.png" },
  { name:"AK 47", rarity:"red", chance:0.64, img:"pictures/ak 47Done.png" },
  { name:"Five Seven", rarity:"blue", chance:80, img:"pictures/FiveSevenDone.jpg" },
  { name:"Famas", rarity:"blue", chance:80, img:"pictures/FamasDone.jpg" },
  { name:"Mag7", rarity:"blue", chance:80, img:"pictures/Mag7Done.png" },
  { name:"Mp7", rarity:"blue", chance:80, img:"pictures/Mp7Done.jpg" },
  { name:"Nova", rarity:"blue", chance:80, img:"pictures/NovaDone.jpg" },
  { name:"Deagle", rarity:"pink", chance:3, img:"pictures/DeagleDone.jpg" },
  { name:"Mp5 SD", rarity:"purple", chance:15, img:"pictures/Mp5 SD.jpg" },
  { name:"Mac 10", rarity:"purple", chance:15, img:"pictures/Mac10Done.jpg" },
  { name:"Xm9", rarity:"blue", chance:80, img:"pictures/Xm9Done.jpg" },
  { name:"AWP", rarity:"pink", chance:3, img:"pictures/AwpDone.jpg" },

  // === Допълнителни custom skins ===
  { name:"Skin 1", rarity:"pink", chance:3, img:"pictures/DeagleDone.jpg" },
  { name:"Skin 2", rarity:"pink", chance:3, img:"pictures/AwpDone.jpg" },
  { name:"Skin 3", rarity:"blue", chance:80, img:"pictures/Xm9Done.jpg" },
  { name:"Skin 4", rarity:"purple", chance:15, img:"pictures/Mac10Done.jpg" },
  { name:"Skin 5", rarity:"purple", chance:15, img:"pictures/Mp5 SD.jpg" },
  { name:"Skin 6", rarity:"pink", chance:3, img:"pictures/DeagleDone.jpg" },
  { name:"Skin 7", rarity:"blue", chance:80, img:"pictures/NovaDone.jpg" },
  { name:"Skin 8", rarity:"blue", chance:80, img:"pictures/Mp7Done.jpg" },
  { name:"Skin 9", rarity:"blue", chance:80, img:"pictures/Mag7Done.png" },
  { name:"Skin 10", rarity:"blue", chance:80, img:"pictures/FamasDone.jpg" },
  { name:"Skin 11", rarity:"blue", chance:80, img:"pictures/FiveSevenDone.jpg" },
  { name:"Skin 12", rarity:"red", chance:0.64, img:"pictures/ak 47Done.png" },
  { name:"Skin 13", rarity:"red", chance:0.64, img:"pictures/m4a4Done.png" },
  { name:"Skin 14", rarity:"gold", chance:0.26, img:"pictures/ShadowDaggersDone.png" },
  { name:"Skin 15", rarity:"blue", chance:80, img:"pictures/USPsDone.jpg" },
  { name:"Skin 16", rarity:"blue", chance:80, img:"pictures/Tec9Done.jpg" },
  { name:"Skin 17", rarity:"blue", chance:80, img:"pictures/P250Done.jpg" }

];

const reel=document.getElementById("reel");
const reelContainer=document.getElementById("reelContainer");
const openBtn=document.getElementById("openBtn");
const result=document.getElementById("result");
const newCaseBtn=document.getElementById("newCaseBtn");
const glow=document.getElementById("caseGlow");

let spinningSound;

function pickSkin(){

let total=skins.reduce((a,b)=>a+b.chance,0);
let r=Math.random()*total;
let sum=0;

for(let s of skins){

sum+=s.chance;

if(r<=sum) return s;

}

}

function createReel(winner){

reel.innerHTML="";

let items=[];

for(let i=0;i<6;i++) skins.forEach(s=>items.push(s));

let winPos=40+Math.floor(Math.random()*5);

items[winPos]=winner;

items.forEach(s=>{

let div=document.createElement("div");

div.className="reel-item "+s.rarity;

div.innerHTML=`
<img src="${s.img}">
<div>${s.name}</div>
`;

reel.appendChild(div);

});

reelContainer.style.display="block";

let itemWidth=180;

let target=winPos*itemWidth-400;

let start=null;

spinningSound=new Audio("d:\NEW LLC\LadyLuckCase Project\LadyLuckCase Project\sounds\spin.mp3");
spinningSound.loop=true;
spinningSound.volume=0.5;
spinningSound.play();

function animate(t){

if(!start)start=t;

let progress=(t-start)/5000;

if(progress>1)progress=1;

let ease=1-Math.pow(1-progress,3);

reel.style.transform=`translateX(-${ease*target}px)`;

if(progress<1){

requestAnimationFrame(animate);

}else{

spinningSound.pause();

showResult(winner);

}

}

requestAnimationFrame(animate);

}

function showResult(skin){

glow.className="case-glow glow-"+skin.rarity;
glow.style.opacity=1;

result.innerHTML=`

<div class="skin-card ${skin.rarity}">

<h2>${skin.name}</h2>

<img src="${skin.img}" width="200">

<p>Rarity: ${skin.rarity.toUpperCase()}</p>

</div>

`;

newCaseBtn.style.display="inline-block";

}

openBtn.onclick=()=>{

openBtn.disabled=true;

const winner=pickSkin();

createReel(winner);

}

newCaseBtn.onclick=()=>{

location.reload();

}