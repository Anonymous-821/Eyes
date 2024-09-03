var video = document.getElementById('video');

var playButton = document.getElementById('playButton');
function myFunction() {
    if (video.paused) {
      video.play();
      playButton.innerHTML = "Pause";
    } else {
      video.pause();
      playButton.innerHTML = "Play";
    }
}
