// Custom Alert Function
function showMessage(msg) {
    const alertBox = document.getElementById('custom-alert');
    const alertMsg = document.getElementById('alert-msg');
    alertMsg.innerText = msg;
    alertBox.classList.add('active');
    setTimeout(() => {
        alertBox.classList.remove('active');
    }, 2500);
}

// Anniversary Counter (Settings for 2-3 months)
function updateCounter() {
    const startDate = new Date("2024-03-10"); // Yahan apni exact date daalein
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    const timer = document.getElementById('timer');
    if(timer) timer.innerHTML = `${days} Days, ${hours}h, ${mins}m`;
}
setInterval(updateCounter, 1000);

// Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = Math.random();
    heart.style.transition = '5s linear';
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
    }, 100);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// Play Music on first click
document.addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    if (audio.paused) audio.play();
}, { once: true });