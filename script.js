const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heading = document.getElementById('main-heading');
const music = document.getElementById('song');

let yesSize = 1;

// Make the NO button move when hovered or touched
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Make the YES button grow every time they try to hit NO
    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
}

// What happens when they click YES
yesBtn.addEventListener('click', () => {
    heading.innerHTML = "Yay! See you soon! ❤️";
    document.querySelector('.buttons').style.display = 'none';
});

function playMusic() {
    music.play();
}
