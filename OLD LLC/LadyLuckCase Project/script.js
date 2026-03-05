const skins = [
    { name: "P250 | Royal Romance", rarity: "Covert", color: "#ffd700", desc: "Нежни рози и златни акценти – перфектният избор за всяка дама." },
    { name: "Glock-18 | Vogue", rarity: "Classified", color: "#cc99ff", desc: "Модерен розово-черен дизайн с елегантна дама." },
    { name: "MAC-10 | Allure", rarity: "Restricted", color: "#66ccff", desc: "Мистична японска красавица – привлича погледите." },
    { name: "MP9 | Starlight Protector", rarity: "Classified", color: "#cc99ff", desc: "Звездно небе в розово – късметът на нощната кралица." },
    { name: "Desert Eagle | Corinthian", rarity: "Restricted", color: "#66ccff", desc: "Златни орнаменти и женствена грация." },
    { name: "AK-47 | Wild Lotus (8 March Ed.)", rarity: "Covert", color: "#ffd700", desc: "Лотос в нежно розово – най-редкият дроп!" },
    { name: "M4A1-S | Printstream Pink", rarity: "Classified", color: "#cc99ff", desc: "Модерен черно-розов принт." },
    { name: "Butterfly Knife | Emerald Rose", rarity: "Rare Special", color: "#00ffaa", desc: "Изумрудено-розов нож – истинският джакпот!" }
];

const caseEl = document.getElementById("case");
const btn = document.getElementById("openBtn");
const resultEl = document.getElementById("result");
const reelContainer = document.getElementById("reelContainer");
const reel = document.getElementById("reel");
const confettiCanvas = document.getElementById("confettiCanvas");

let isOpening = false;

function pickSkin() {
    let total = skins.reduce((a, s) => a + (s.chance || 10), 0);
    let r = Math.random() * total,
        sum = 0;
    for (let s of skins) { sum += s.chance || 10; if (r <= sum) return s; }
    return skins[skins.length - 1];
}

// === Реалистична CS2 лента ===
function createReel(winner) {
    reel.innerHTML = "";
    let items = [];
    for (let i = 0; i < 7; i++) skins.forEach(s => items.push(Object.assign({}, s)));

    const winnerPos = 42 + Math.floor(Math.random() * 6); // ~43-то място
    items[winnerPos] = Object.assign({}, winner);

    items.forEach((skin, i) => {
        const div = document.createElement("div");
        div.className = "reel-item";
        div.style.borderColor = skin.color;
        div.innerHTML = `<strong>${skin.name}</strong><br><small>${skin.rarity}</small>`;
        reel.appendChild(div);
    });

    reelContainer.style.display = "block";

    const itemWidth = 176; // 158px + gap 18px
    const centerOffset = reelContainer.clientWidth / 2 - 79;
    const targetScroll = winnerPos * itemWidth - centerOffset;

    // Анимация на забавяне (като в CS2)
    let startTime = Date.now();
    const duration = 5200;

    function animate() {
        const elapsed = Date.now() - startTime;
        let progress = Math.min(elapsed / duration, 1);
        progress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        reel.style.transform = `translateX(-${progress * targetScroll}px)`;

        if (progress < 1) requestAnimationFrame(animate);
        else finishOpening(winner);
    }
    animate();
}

function finishOpening(winner) {
    setTimeout(() => {
        reelContainer.style.display = "none";
        reel.style.transform = "translateX(0)";

        showResult(winner);

        // Конфети само при редки кожи
        if (winner.rarity.includes("Covert") || winner.rarity.includes("Rare")) launchConfetti();
    }, 800);
}

function showResult(skin) {
    resultEl.innerHTML = `
    <div class="skin-card">
      <div class="skin-name">${skin.name}</div>
      <div class="skin-rarity" style="color:${skin.color}">${skin.rarity}</div>
      <div class="skin-desc">${skin.desc}</div>
    </div>
  `;
    setTimeout(() => document.querySelector(".skin-card").classList.add("show"), 50);
}

// === Конфети (чисто vanilla) ===
function launchConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    confettiCanvas.style.display = "block";
    const ctx = confettiCanvas.getContext("2d");
    let particles = [];

    class Particle {
        constructor() {
            this.x = Math.random() * confettiCanvas.width;
            this.y = Math.random() * confettiCanvas.height - confettiCanvas.height;
            this.size = Math.random() * 9 + 6;
            this.speedX = Math.random() * 4 - 2;
            this.speedY = Math.random() * 7 + 4;
            this.color = ["#ff2e7a", "#ffd700", "#ff9ec1", "#00ffcc"][Math.floor(Math.random() * 4)];
            this.rotation = Math.random() * 360;
            this.rotSpeed = Math.random() * 12 - 6;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotSpeed;
            this.speedY += 0.12;
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 1.8);
            ctx.restore();
        }
    }

    for (let i = 0; i < 220; i++) particles.push(new Particle());

    let frame = 0;

    function anim() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].y > confettiCanvas.height) particles.splice(i, 1);
        }
        if (particles.length > 0 && frame < 320) requestAnimationFrame(anim);
        else confettiCanvas.style.display = "none";
        frame++;
    }
    anim();
}

// === Отваряне ===
function openCase() {
    if (isOpening) return;
    isOpening = true;
    btn.disabled = true;
    btn.textContent = "Отваря се...";

    const audio = new Audio("https://assets.codepen.io/605876/csgo-case-open-short.mp3");
    audio.volume = 0.45;
    audio.play().catch(() => {});

    caseEl.classList.add("open");

    setTimeout(() => {
        const winner = pickSkin();
        createReel(winner);
    }, 2100);
}

btn.addEventListener("click", openCase);