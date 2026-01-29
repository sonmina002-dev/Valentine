const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bearImg = document.getElementById('bear-img');
const music = document.getElementById('song');

const noTexts = [
    "No", "Are you sure?", "Really sure??", "Think again!", 
    "Last chance!", "Pookie please!", "No :("
];

let noCount = 0;
let scale = 1;

noBtn.addEventListener('click', () => {
    noCount++;
    
    // Change No text
    if (noCount < noTexts.length) {
        noBtn.innerText = noTexts[noCount];
    }

    // Grow Yes button
    scale += 0.3;
    yesBtn.style.transform = `scale(${scale})`;
    
    // Move No button slightly so it doesn't get covered
    const x = (Math.random() - 0.5) * 60;
    const y = (Math.random() - 0.5) * 60;
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
