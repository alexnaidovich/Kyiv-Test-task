const audio = document.querySelector('#audio');
const control = document.querySelector('#audio-control');

control.addEventListener('click', e => {
  e.preventDefault();
  control.classList.toggle('audio-active');
  audio.paused ? audio.play() : audio.pause();
})