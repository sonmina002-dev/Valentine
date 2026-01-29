const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bearImg = document.getElementById('bear-img');
const music = document.getElementById('song');

const noTexts = [
    "No", "Are you sure?", "Really sure??", "Think again!", 
    "Pookie please!", "Don't do this!", "No :("
];

let noCount = 0;
let scale = 1;

// Function to start music and hide overlay
function startApp() {
    document.getElementById('overlay').style.display = 'none';
    music.play();
}

noBtn.addEventListener('click', () => {
    noCount++;
    
    // 1. Change No button text
    if (noCount < noTexts.length) {
        noBtn.innerText = noTexts[noCount];
    }

    // 2. Make Yes bigger (like the video)
    scale += 0.4;
    yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener('click', () => {
    document.getElementById('main-heading').innerHTML = "Yay!!! ❤️";
    document.getElementById('sub-text').style.display = 'none';
    bearImg.src = "https://media.tenor.com/gU_Pb_7p_5YAAAAj/mochi-mochi-peach-cat-cat.gif";
    document.querySelector('.button-wrapper').style.display = 'none';
});
