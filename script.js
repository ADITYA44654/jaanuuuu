const audio = document.getElementById('bg-music');

// Music Logic
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        document.getElementById('music-icon').innerText = '⏸️';
    } else {
        audio.pause();
        document.getElementById('music-icon').innerText = '🎵';
    }
}

// Page Content Data
const pages = {
    home: `
        <div class="glass-card animate-in">
            <div class="profile-pic"><img src="https://i.ibb.co/SwW9HDc7/IMG-20260303-202411-125.jpg"></div>
            <h1 class="special-font">Mera Sukoon ❤️</h1>
            <p>Jab tak main hoon, main sirf tumhara hoon. Ye website hamari chhoti si duniya hai.</p>
            <button class="btn" onclick="loadPage('love')">Kuch Kehna Hai...</button>
        </div>`,
    love: `
        <div class="glass-card animate-in">
            <h2 class="special-font">Dil ki Baat</h2>
            <p style="font-style: italic; font-size: 0.95rem; line-height: 1.7;">
                "Pata nahi kal kya hoga, par aaj main tumhare saath hoon aur yahi kaafi hai. 
                2-3 mahine pehle tum ajnabi thi, aaj tum meri har muskurahat ki wajah ho. 
                Main tumse koi bada waada nahi karunga, bas jab tak hum saath hain, 
                main tumhe kabhi rone nahi dunga."
            </p>
            <button class="btn" onclick="loadPage('memories')">See Memories</button>
        </div>`,
    memories: `
        <div class="glass-card animate-in" style="max-height: 80vh; overflow-y: auto;">
            <h2 class="special-font">Our Moments</h2>
            <div class="polaroid"><img src="https://i.ibb.co/SwW9HDc7/IMG-20260303-202411-125.jpg"><p>Tumhari Ye Smile...🥺</p></div>
            <div class="polaroid" style="transform: rotate(2deg);"><img src="https://i.ibb.co/zHmdTV4L/file-00000000764871fda1b72e0a3af44481.png"><p>Sabse Pyaara Ehsas ❤️</p></div>
        </div>`,
    fun: `
        <div class="glass-card animate-in">
            <h2 class="special-font">Playful Love</h2>
            <button class="btn" style="width:100%" onclick="showPopup('Hehe, pakdi gayi! I love you more. 😏❤️', '🤭')">Do you love me?</button>
            <button class="btn" style="width:100%" onclick="showPopup(' वर्चुअल किस रिसीव्ड! 💋', '😘')">Kiss me 😗</button>
            <button class="btn" style="width:100%" onclick="showPopup('Main toh har pal tumhare message ka wait karta hoon. 🥺', '🧸')">Miss me?</button>
        </div>`,
    special: `
        <div class="glass-card animate-in">
            <h2 class="special-font">Together Since</h2>
            <div id="timer" style="font-size: 1.5rem; margin: 20px 0; font-weight: bold;"></div>
            <p>"Jab tak hum saath hain, har din special hai."</p>
            <div style="font-size: 3rem; margin-top: 15px;">💖</div>
        </div>`
};

// Page Loader
function loadPage(pageName) {
    const content = document.getElementById('main-content');
    content.innerHTML = pages[pageName];
    if(pageName === 'special') startTimer();
}

// Timer Logic
function startTimer() {
    const start = new Date("2024-03-20"); // APNI DATE DALO
    setInterval(() => {
        const diff = new Date() - start;
        const d = Math.floor(diff/(1000*60*60*24));
        const h = Math.floor((diff/(1000*60*60))%24);
        const m = Math.floor((diff/(1000*60))%60);
        const s = Math.floor((diff/1000)%60);
        const el = document.getElementById('timer');
        if(el) el.innerText = `${d}d ${h}h ${m}m ${s}s`;
    }, 1000);
}

// Popup Logic
function showPopup(msg, icon) {
    document.getElementById('popup-text').innerText = msg;
    document.getElementById('popup-icon').innerText = icon;
    document.getElementById('popup').classList.add('show');
}
function closePopup() { document.getElementById('popup').classList.remove('show'); }

// Floating Hearts
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}, 500);

// Interaction start
document.body.addEventListener('click', () => {
    if(audio.paused) toggleMusic();
}, {once: true});