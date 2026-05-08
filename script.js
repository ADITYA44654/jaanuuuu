const audio = document.getElementById('bg-music');

// Autoplay on first click
document.addEventListener('click', () => {
    audio.play().catch(e => console.log("Music blocked"));
}, { once: true });

const pages = {
    home: `
        <div class="glass-card animate-in">
            <div class="profile-pic"><img src="https://i.ibb.co/SwW9HDc7/IMG-20260303-202411-125.jpg"></div>
            <h1 class="special-font">Meri peace ❤️</h1>
            <p style="margin-top:10px;">January mein hum dost bane, par 1st March wo din tha jab mera dil tumhare liye dhadakne laga...</p>
            <button class="btn" onclick="loadPage('love')">Hamari Kahani Dekho</button>
        </div>`,
    love: `
        <div class="glass-card animate-in">
            <h2 class="special-font">Dosti Se Mohabbat tak..</h2>
            <p style="font-style: italic; font-size: 1rem; line-height: 1.7; text-align: justify;">
                "January se dosti shuru hui, sab kuch normal tha. Phir waqt guzra aur March ka wo mahina aaya jab hum dost se kahin zyada ban gaye. <br><br>
                Aaj hamare is khoobsurat safar ko kuch hi waqt hua hai, par mujhe lagta hai jaise main hamesha se tumhara hi tha. Jab tak main hu, tab tak main sirf tumhara hu."
            </p>
            <button class="btn" onclick="loadPage('memories')">Hamare Pal</button>
        </div>`,
    memories: `
        <div class="glass-card animate-in" style="max-height: 80vh; overflow-y: auto;">
            <h2 class="special-font">Hamare Pal</h2>
            <div class="polaroid">
                <img src="https://i.ibb.co/SwW9HDc7/IMG-20260303-202411-125.jpg">
                <p>Meri Pyaari Jaan ❤️</p>
            </div>
            <div class="polaroid" style="transform: rotate(2deg);">
                <img src="https://i.ibb.co/zHmdTV4L/file-00000000764871fda1b72e0a3af44481.png">
                <p> Mere Saath Rehna 🤌🏻</p>
            </div>
        </div>`,
    fun: `
        <div class="glass-card animate-in">
            <h2 class="special-font">Pyaar Wali Masti</h2>
            <button class="btn" style="width:100%" onclick="showPopup('Hehe, pakdi gayi! I love you so much. 😏❤️', '🤭')">Do you love me?</button>
            <button class="btn" style="width:100%" onclick="showPopup('Mmuuaaahhh! A big warm kiss for my baby! 💋❤️', '😘')">Kiss me 😗</button>
            <button class="btn" style="width:100%" onclick="showPopup('Main toh har pal tumhare reply ka wait karta hoon... bohot miss karta hoon! 🥺', '🧸')">Miss me?</button>
        </div>`,
    special: `
        <div class="glass-card animate-in">
            <h2 class="special-font">Kuch haseeen Pal...</h2>
            <p style="margin-bottom:10px;">Hamare Ishq ke ek-ek pal ka hisaab:</p>
            <div id="timer" style="font-size: 2rem; margin: 20px 0; font-weight: bold;"></div>
            <p style="font-size: 0.9rem;">Seconds Beet Chuke Hain...</p>
            <p style="margin-top:15px;">"Jab tak main hoon, main sirf tumhara hoon." ❤️</p>
            <div style="font-size: 3rem; margin-top: 15px; animation: heartbeat 1.2s infinite;">💖</div>
        </div>`
};

function loadPage(pageName) {
    const content = document.getElementById('main-content');
    content.innerHTML = pages[pageName];
    if(pageName === 'special') startTimer();
    window.scrollTo(0,0);
}

// THE SECOND COUNTER (From March 1, 2026)
function startTimer() {
    const start = new Date("2026-03-01T00:00:00"); 
    const updateTimer = () => {
        const now = new Date();
        const diff = Math.floor((now - start) / 1000); // TOTAL SECONDS
        const el = document.getElementById('timer');
        if(el) el.innerText = diff.toLocaleString(); // Adds commas like 5,875,200
    };
    updateTimer();
    setInterval(updateTimer, 1000);
}

function showPopup(msg, icon) {
    document.getElementById('popup-text').innerText = msg;
    document.getElementById('popup-icon').innerText = icon;
    document.getElementById('popup').classList.add('show');
}
function closePopup() { document.getElementById('popup').classList.remove('show'); }

setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}, 500);

const style = document.createElement('style');
style.innerHTML = `@keyframes heartbeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }`;
document.head.appendChild(style);