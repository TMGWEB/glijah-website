const songs = [
  '../media/mourn.mp3',
  '../media/have_faith_in_god.mp3',
  '../media/will_you_trust_in_the_lord.mp3',
  '../media/glow.mp3',
  '../media/new_beginning.mp3',
  '../media/we_bow_down.mp3',
  '../media/march_on.mp3',
  '../media/youre_the_rock.mp3',
  '../media/restoration.mp3',
  '../media/they_dont.mp3'
];

const tracks = document.querySelectorAll('.btn__play');
tracks.forEach(track => track.addEventListener('click', playTrack));

const song = new Audio();
let currentSong;

function playTrack() {
  if (song.paused) {
    console.log(this);
    currentSong = this.getAttribute('data-track');
    song.src = songs[currentSong];
    song.play();
    return;
  }

  song.pause();
}
