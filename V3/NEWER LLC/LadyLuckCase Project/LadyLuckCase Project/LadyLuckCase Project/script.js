const skins = [

  { name:"P250", rarity:"blue", chance:80, img:"pictures/P250Done.jpg", desc:"Честит 8 март! Пожелавам ти домът винаги да е пълен с любов и топлина. Нека мъката и проблемите винаги те подминават." },
  { name:"Tec 9", rarity:"blue", chance:80, img:"pictures/Tec9Done.jpg", desc:"Честит 8 март! Нека очите ти блестят от радост, нека всичките ти мечти се превърнат в реалност." },
  { name:"USP-S", rarity:"blue", chance:80, img:"pictures/USPsDone.jpg", desc:"В този прекрасен ден искам искрено да те поздравя. Пожелавам ти да останеш все така нежна, мъдра и красива." },
  { name:"Shadow Daggers", rarity:"gold", chance:0.26, img:"pictures/ShadowDaggersDone.png", desc:"Честит 8 март, мила! Пожелавам ти всичко най-красиво в този прекрасен ден – много цветя, комплименти и усмивки." },
  { name:"M4A4", rarity:"red", chance:0.64, img:"pictures/m4a4Done.png", desc:"Честит 8 март! Пожелавам ти да вървиш през живота с лека походка и да получаваш с лекота всичко, което пожелаеш." },
  { name:"AK 47", rarity:"red", chance:0.64, img:"pictures/ak 47Done.png", desc: "Невъзможно е дори за миг да си представя света без теб, без твоята красота и нежност." },
  { name:"Five Seven", rarity:"blue", chance:80, img:"pictures/FiveSevenDone.jpg", desc: "Нека празникът 8 март бъде изпълнен с положителни емоции, букети цветя и приятни подаръци." },
  { name:"Famas", rarity:"blue", chance:80, img:"pictures/FamasDone.jpg", desc: "Честит 8 март! Пожелавам ти пролетно настроение и душата ти винаги да прелива от любов." },
  { name:"Mag7", rarity:"blue", chance:80, img:"pictures/Mag7Done.png", desc: "В най-нежния и красив ден в годината бързам да те поздравя за 8 март!" },
  { name:"Mp7", rarity:"blue", chance:80, img:"pictures/Mp7Done.jpg", desc: "Най-сладката и нежна, най-красивата и обичана! Честит 8 март, мила!" },
  { name:"Nova", rarity:"blue", chance:80, img:"pictures/NovaDone.jpg", desc: "Честит 8 март, Kurt! Нека пролетта винаги живее в душата ти." },
  { name:"Deagle", rarity:"pink", chance:3, img:"pictures/DeagleDone.jpg", desc: "Нека този прекрасен празник ти донесе много сбъднати мечти." },
  { name:"Mp5 SD", rarity:"purple", chance:15, img:"pictures/Mp5 SD.jpg", desc: "На 8 март бързам да ти пожелая всичко най-добро, най-важно и красиво за една прекрасна жена." },
  { name:"Mac 10", rarity:"purple", chance:15, img:"pictures/Mac10Done.jpg", desc: "Мила мамо, поздравления за 8 март! Желая ти пролетно настроение и безкрайно щастие." },
  { name:"Xm9", rarity:"blue", chance:80, img:"pictures/Xm9Done.jpg", desc: "Честит 8 март, мила мамо! Пожелавам ти океан от щастие и светлина в очите." },
  { name:"AWP", rarity:"pink", chance:3, img:"pictures/AwpDone.jpg", desc: "Скъпа моя мамо, поздравявам те за 8 март! Нека всички грижи и несгоди да изчезнат от живота ти." },

  // === Допълнителни custom skins ===
  { name:"Skin 1", rarity:"pink", chance:3, img:"pictures/DeagleDone.jpg", desc:"Нека този прекрасен празник ти донесе много сбъднати мечти." },
  { name:"Skin 2", rarity:"pink", chance:3, img:"pictures/AwpDone.jpg", desc:"Скъпа моя мамо, поздравявам те за 8 март! Нека всички грижи и несгоди да изчезнат от живота ти." },
  { name:"Skin 3", rarity:"blue", chance:80, img:"pictures/Xm9Done.jpg", desc:"Честит 8 март, мила мамо! Пожелавам ти океан от щастие и светлина в очите." },
  { name:"Skin 4", rarity:"purple", chance:15, img:"pictures/Mac10Done.jpg", desc:"Мила мамо, поздравления за 8 март! Желая ти пролетно настроение и безкрайно щастие." },
  { name:"Skin 5", rarity:"purple", chance:15, img:"pictures/Mp5 SD.jpg", desc:"На 8 март бързам да ти пожелая всичко най-добро, най-важно и красиво за една прекрасна жена." },
  { name:"Skin 6", rarity:"pink", chance:3, img:"pictures/DeagleDone.jpg", desc:"Нека този прекрасен празник ти донесе много сбъднати мечти." },
  { name:"Skin 7", rarity:"blue", chance:80, img:"pictures/NovaDone.jpg", desc:"Честит 8 март! Нека пролетта винаги живее в душата ти." },
  { name:"Skin 8", rarity:"blue", chance:80, img:"pictures/Mp7Done.jpg", desc:"Най-сладката и нежна, най-красивата и обичана! Честит 8 март, мила!" },
  { name:"Skin 9", rarity:"blue", chance:80, img:"pictures/Mag7Done.png", desc:"В най-нежния и красив ден в годината бързам да те поздравя за 8 март!" },
  { name:"Skin 10", rarity:"blue", chance:80, img:"pictures/FamasDone.jpg", desc:"Честит 8 март! Пожелавам ти пролетно настроение и душата ти винаги да прелива от любов." },
  { name:"Skin 11", rarity:"blue", chance:80, img:"pictures/FiveSevenDone.jpg", desc:"Нека празникът 8 март бъде изпълнен с положителни емоции, букети цветя и приятни подаръци." },
  { name:"Skin 12", rarity:"red", chance:0.64, img:"pictures/ak 47Done.png", desc:"Невъзможно е дори за миг да си представя света без теб, без твоята красота и нежност." },
  { name:"Skin 13", rarity:"red", chance:0.64, img:"pictures/m4a4Done.png", desc:"Честит 8 март! Пожелавам ти да вървиш през живота с лека походка и да получаваш с лекота всичко, което пожелаеш." },
  { name:"Skin 14", rarity:"gold", chance:0.26, img:"pictures/ShadowDaggersDone.png", desc:"Честит 8 март, мила! Пожелавам ти всичко най-красиво в този прекрасен ден – много цветя, комплименти и усмивки." },
  { name:"Skin 15", rarity:"blue", chance:80, img:"pictures/USPsDone.jpg", desc:"В този прекрасен ден искам искрено да те поздравя. Пожелавам ти да останеш все така нежна, мъдра и красива." },
  { name:"Skin 16", rarity:"blue", chance:80, img:"pictures/Tec9Done.jpg", desc:"Честит 8 март! Нека очите ти блестят от радост, нека всичките ти мечти се превърнат в реалност." },
  { name:"Skin 17", rarity:"blue", chance:80, img:"pictures/P250Done.jpg", desc:"Честит 8 март! Пожелавам ти домът винаги да е пълен с любов и топлина. Нека мъката и проблемите винаги те подминават." }

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
<div class="skin-desc">${skin.desc}</div>

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

function createConfetti() {
  for (let i = 0; i < 200; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}