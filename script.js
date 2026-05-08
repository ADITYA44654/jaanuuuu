// Custom Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Floating Hearts Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 300);

// Typing Animation (Used on love.html)
function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) return;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Relationship Counter (Change the date to your anniversary)
function updateCounter() {
    const startDate = new Date("2023-05-20"); // APNI DATE YAHAN DALO (YYYY-MM-DD)
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    const counterElement = document.getElementById('timer');
    if (counterElement) {
        counterElement.innerHTML = `${days} Days, ${hours} Hours, ${mins} Mins`;
    }
}
setInterval(updateCounter, 1000);

// Fun Page Functions
function funResponse(type) {
    if(type === 'love') alert("I knew it 😏! You are stuck with me forever ❤️");
    if(type === 'kiss') alert("Virtual Kiss Received! 💋 Check your forehead.");
    if(type === 'miss') alert("I miss you more than these lines of code could ever say 🥺");
}