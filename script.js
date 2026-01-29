const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bearImg = document.getElementById('bear-img');
const music = document.getElementById('song');

const noTexts = [
    "No", "Are you sure?", "Really sure??", "Think again!", 
    "Last chance!", "Surely not?", "Pookie please!", 
    "Don't do this!", "Have a heart!", "No :("
];

let noCount = 0;
let scale = 1;

noBtn.addEventListener('click', () => {
    noCount++;
    
    // 1. Change No button text
    if (noCount < noTexts.length) {
        noBtn.innerText = noTexts[noCount];
    }

    // 2. Make Yes bigger
    scale += 0.35;
    yesBtn.style.transform = `scale(${scale})`;
    
    // 3. Move the No button slightly so it isn't hidden by the growing Yes
    const x = (Math.random() - 0.5) * 80;
    const y = (Math.random() - 0.5) * 80;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener('click', () => {
    document.getElementById('main-heading').innerHTML = "Yay!!! ❤️";
    document.getElementById('sub-text').style.display = 'none';
    bearImg.src = "https://media.tenor.com/gU_Pb_7p_5YAAAAj/mochi-mochi-peach-cat-cat.gif";
    document.querySelector('.button-wrapper').style.display = 'none';
});

function playMusic() {
    music.play();
}
