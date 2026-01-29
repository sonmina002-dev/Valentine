const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainHeading = document.getElementById('main-heading');
const bearImg = document.getElementById('bear-img');
const music = document.getElementById('song');

const noTexts = [
    "No", "Are you sure?", "Really sure??", "Think again!", 
    "Last chance!", "Surely not?", "You might regret this!", 
    "Give it another thought!", "Are you absolutely sure?", 
    "This could be a mistake!", "Have a heart!", 
    "Don't be so cold!", "Change of heart?", 
    "Is that your final answer?", "You're breaking my heart ;("
];

let noCount = 0;

noBtn.addEventListener('click', () => {
    noCount++;
    
    // 1. Change the text of the No button
    if (noCount < noTexts.length) {
        noBtn.innerText = noTexts[noCount];
    } else {
        noBtn.innerText = "No :(";
    }

    // 2. Make the Yes button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.4) + "px";
    yesBtn.style.padding = (currentSize * 0.8) + "px " + (currentSize * 1.2) + "px";
});

yesBtn.addEventListener('click', () => {
    mainHeading.innerHTML = "Yay!!! ❤️❤️❤️";
    bearImg.src = "https://media.tenor.com/gU_Pb_7p_5YAAAAj/mochi-mochi-peach-cat-cat.gif"; // Happy cat
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('sub-text').style.display = 'none';
});

function playMusic() {
    music.play();
}
