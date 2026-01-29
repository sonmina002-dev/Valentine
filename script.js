const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const song = document.getElementById("song");

function playSong() {
  song.play();
}

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      height:100vh;
      background:linear-gradient(#bdefff,#87cefa);
      font-family:Arial;
    ">
      <h1 style="color:#4aa3df;font-size:50px;">YAY 💙</h1>
      <h2>YMT said YES 💕</h2>
      <p>Forever yours,<br>HHK</p>
    </div>
  `;
  song.play();
});
