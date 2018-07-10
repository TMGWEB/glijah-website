var songs = ["../media/mourn.mp3", "../media/have_faith_in_god.mp3", "../media/will_you_trust_in_the_lord.mp3", "../media/glow.mp3", "../media/new_beginning.mp3", "../media/we_bow_down.mp3", "../media/march_on.mp3", "../media/youre_the_rock.mp3", "../media/restoration.mp3", "../media/they_dont.mp3"];

var song = new Audio();
var currentSong = 0;
var i = 0;

function playSong() {
  song.src = songs[currentSong];
  song.play();
}

function playTrack() {
  if (song.paused) {
    currentSong = i;
    playSong();
  }
  else if (currentSong != i) {
    currentSong = i;
    playSong();
  }else{
    song.pause();
  }
}

function playTrackOne() {
  i = 0;
  playTrack();
}

function playTrackTwo() {
  i = 1;
  playTrack();
}

function playTrackThree() {
  i = 2;
  playTrack();
}

function playTrackFour() {
  i = 3;
  playTrack();
}

function playTrackFive() {
  i = 4;
  playTrack();
}

function playTrackSix() {
  i = 5;
  playTrack();
}

function playTrackSeven() {
  i = 6;
  playTrack();
}

function playTrackEight() {
  i = 7;
  playTrack();
}

function playTrackNine() {
  i = 8;
  playTrack();
}

function playTrackTen() {
  i = 9;
  playTrack();
}