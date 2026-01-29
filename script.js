const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bearImg = document.getElementById('bear-img');
const music = document.getElementById('song');

const noTexts = [
    "No", "Are you sure?", "Really sure??", "Think again!", 
    "Last chance!", "Pookie please!", "No :("
];

let noCount = 0;
let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        music.play();
        musicStarted = true;
    }
}

noBtn.addEventListener('click', () => {
    startMusic(); // Plays music on first click
    noCount++;
    
    // Change No text but DO NOT grow Yes button
    if (noCount < noTexts.length) {
        noBtn.innerText = noTexts[noCount];
    }
});

yesBtn.addEventListener('click', () => {
    startMusic(); // Plays music if they click Yes immediately
    document.getElementById('main-heading').innerHTML = "Yay!!! ❤️";
    document.getElementById('sub-text').style.display = 'none';
    bearImg.src = "https://media.tenor.com/gU_Pb_7p_5YAAAAj/mochi-mochi-peach-cat-cat.gif";
    document.querySelector('.button-wrapper').style.display = 'none';
});
