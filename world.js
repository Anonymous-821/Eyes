var audio = new Audio("3tamilmoviemusic-24292.mp3");
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
playButton.addEventListener("click", () => {
    audio.play();
    pauseButton.style.display = 'inline';
});
pauseButton.addEventListener("click", () =>{
    audio.pause();
    playButton.style.display = 'inline';
});