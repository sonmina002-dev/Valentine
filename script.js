const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bearImg = document.getElementById('bear-img');
const music = document.getElementById('song');

const noTexts = [
    "No", "Are you sure?", "What if I asked really nicely?", "Pretty please", 
    "With a chocolate rice cake on top", "What about a matcha frostie", 
    "PLEASE POOKIE", "But :(", "I am going to die", "Yep im dead", 
    "ok ur talking to nathan's ghost", "please babe", ":((((", 
    "PRETTY PLEASE", "Estoy muerto", "No :("
];

let noCount = 0;
let scale = 1;

function startApp() {
    document.getElementById('overlay').style.display = 'none';
    music.play().catch(e => console.log("Music play failed:", e));
}

noBtn.addEventListener('click', () => {
    noCount++;
    if (noCount < noTexts.length) {
        noBtn.innerText = noTexts[noCount];
    }
    scale += 0.5;
    yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener('click', () => {
    document.getElementById('sub-text').innerHTML = "Yay!!! ❤️";
    bearImg.src = "https://media.tenor.com/gU_Pb_7p_5YAAAAj/mochi-mochi-peach-cat-cat.gif";
    document.querySelector('.button-wrapper').style.display = 'none';
});
