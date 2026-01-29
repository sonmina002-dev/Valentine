const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bearImg = document.getElementById('bear-img');
const music = document.getElementById('song');

const noTexts = [
    "No", "Are you sure?", "Really sure??", "Think again!", 
    "Last chance!", "Pookie please!", "No :("
];

let noCount = 0;

// Function to handle auto-play bypass
function startMusic() {
    music.play().catch(e => console.log("Audio waiting for interaction"));
}

noBtn.addEventListener('click', () => {
    startMusic(); 
    noCount++;
    if (noCount < noTexts.length) {
        noBtn.innerText = noTexts[noCount];
    }
    // No button moves slightly to stay fun, but Yes stays same size
    const x = (Math.random() - 0.5) * 50;
    const y = (Math.random() - 0.5) * 50;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener('click', () => {
    startMusic();
    document.getElementById('main-heading').innerHTML = "Yay!!! ❤️";
    document.getElementById('sub-text').style.display = 'none';
    bearImg.src = "https://media.tenor.com/gU_Pb_7p_5YAAAAj/mochi-mochi-peach-cat-cat.gif";
    document.querySelector('.button-wrapper').style.display = 'none';
});
