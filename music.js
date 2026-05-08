// Music Persistence Logic
const audio = new Audio('Jaanu.m4a');
audio.loop = true;

function handleMusic() {
    if (localStorage.getItem('musicPlaying') === 'true') {
        audio.currentTime = localStorage.getItem('musicTime') || 0;
        audio.play().catch(() => {
            console.log("Waiting for user interaction to play music...");
        });
    }
}

// Save time before leaving page
window.addEventListener('beforeunload', () => {
    localStorage.setItem('musicTime', audio.currentTime);
});

// Initial play trigger
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        localStorage.setItem('musicPlaying', 'true');
    }
}, { once: false });

handleMusic();