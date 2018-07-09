var songs = ["../media/youre_the_rock.wav", "../media/restoration.wav", "../media/march_on.wav"];

var song = new Audio();
var currentSong = 0;

function playSong() {
  song.src = songs[currentSong];
  song.play();
}

function playTrackOne() {
  currentSong = 0;
  song.pause();
  if (song.paused) {
    playSong();
  }else{
    song.pause();
  }
}

function playTrackTwo() {
  currentSong = 1;
  song.pause();
  if (song.paused) {
    playSong();
  }else{
    song.pause();
  }
}

function playTrackThree() {
  currentSong = 2;
  song.pause();
  if (song.paused) {
    playSong();
  }else{
    song.pause();
  }
}