// --- JAVASCRIPT EFFECTS ---

// 1. Typewriter Effect (Efek Mengetik)
const textElement = document.getElementById('typewriter');
const textToType = "Selamat Datang di Masa Depan // Koneksi Stabil...";
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Kecepatan mengetik
    }
}

// Jalankan saat halaman dimuat
window.onload = typeWriter;

// 2. Parallax Effect pada Kartu (Tilt 3D ringan)
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Mengubah border warna saat mouse bergerak di atas kartu
        card.style.borderColor = `rgba(${x}, ${y}, 255, 0.5)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});

// 3. Random Glitch Trigger pada Judul
const title = document.querySelector('.glitch');
setInterval(() => {
    // Kadang-kadang ubah warna shadow secara acak
    const randomColor = Math.random() > 0.5 ? 'var(--neon-cyan)' : 'var(--neon-pink)';
    title.style.textShadow = `2px 2px 0px ${randomColor}`;
    
    setTimeout(() => {
        title.style.textShadow = 'none';
    }, 100);
}, 3000);
