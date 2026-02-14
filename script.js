const canvas = document.getElementById('techCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Inisialisasi Partikel
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#00d2ff';
        ctx.fill();
    }

    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;
        let color = '#00d2ff';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

// Garis penghubung antar partikel (efek teknologi/grid)
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance/20000);
                ctx.strokeStyle = 'rgba(0, 210, 255,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

window.addEventListener('resize', function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
    // Ambil elemen-elemen DOM
const joinBtn = document.getElementById('joinBtn');
const modal = document.getElementById('joinModal');
const closeBtn = document.querySelector('.close-btn');
const regForm = document.getElementById('registrationForm');

// Fungsi membuka modal
joinBtn.addEventListener('click', () => {
    modal.classList.add('active');
    // Efek guncangan kecil pada tombol saat diklik
    joinBtn.style.transform = "scale(0.95)";
    setTimeout(() => joinBtn.style.transform = "scale(1)", 100);
});

// Fungsi menutup modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Tutup modal jika user klik di luar area form
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Handle submit form dengan simulasi loading
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = regForm.querySelector('.btn-submit');
    
    // Animasi Loading Tech
    submitBtn.innerText = "UPLOADING_DATA...";
    submitBtn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("ACCESS GRANTED. Welcome to Nexus.");
        modal.classList.remove('active');
        submitBtn.innerText = "CONFIRM_LINK";
        submitBtn.style.opacity = "1";
        regForm.reset();
    }, 2000);
});
});

init();
animate();
