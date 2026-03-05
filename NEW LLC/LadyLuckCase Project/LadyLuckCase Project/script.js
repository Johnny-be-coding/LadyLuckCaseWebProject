
const skins=[

{
name:"Butterfly Knife | Emerald Rose",
rarity:"gold",
chance:0.26,
img:"skins/knife.png"
},

{
name:"AK-47 | Wild Lotus",
rarity:"red",
chance:0.64,
img:"skins/ak.png"
},

{
name:"M4A1-S | Pink Printstream",
rarity:"pink",
chance:3,
img:"skins/m4.png"
},

{
name:"Glock | Vogue",
rarity:"purple",
chance:15,
img:"skins/glock.png"
},

{
name:"P250 | Royal Romance",
rarity:"blue",
chance:80,
img:"skins/p250.png"
},

// ===== МЯСТО ЗА ТВОИТЕ CUSTOM SKINS =====

{
name:"CUSTOM SKIN 1",
rarity:"blue",
chance:80,
img:"skins/custom1.png"
},

{
name:"CUSTOM SKIN 2",
rarity:"purple",
chance:15,
img:"skins/custom2.png"
},

{
name:"CUSTOM SKIN 3",
rarity:"pink",
chance:3,
img:"skins/custom3.png"
},

// ========================================

// останалите до 17
{name:"Skin 1",rarity:"pink",chance:5,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\m4a4Done.png"},
{name:"Skin 2",rarity:"pink",chance:5,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\USPsDone.jpg"},
{name:"Skin 3",rarity:"blue",chance:80,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\P250Done.jpg"},
{name:"Skin 4",rarity:"purple",chance:15,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\Mac10Done.jpg"},
{name:"Skin 5",rarity:"purple",chance:15,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\Mp5 SD.jpg"},
{name:"Skin 6",rarity:"pink",chance:3,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\DeagleDone.jpg"},
{name:"Skin 7",rarity:"blue",chance:80,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\NovaDone.jpg"},
{name:"Skin 8",rarity:"blue",chance:80,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\Mag7Done.png"},
{name:"Skin 9",rarity:"blue",chance:80,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\FamasDone.jpg"},
{name:"Skin 10",rarity:"blue",chance:80,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\ScoutDone.jpg"},
{name:"Skin 11",rarity:"blue",chance:80,img:"skins/s11.png"},
{name:"Skin 12",rarity:"red",chance:3,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\AwpDone.jpg"},
{name:"Skin 13",rarity:"red",chance:3,img:""},
{name:"Skin 14",rarity:"gold",chance:1,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\ShadowDaggersDone.png"},
{name:"Skin 15",rarity:"blue",chance:80,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\Done.jpg"},
{name:"Skin 16",rarity:"blue",chance:80,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\Tec9Done.jpg"},
{name:"Skin 17",rarity:"blue",chance:80,img:"c:\Users\pc1_24\Desktop\LadyLuckCase Project\LadyLuckCase Project\pictures\Xm9Done.jpg"}

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

spinningSound=new Audio("sounds/spin.mp3");
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