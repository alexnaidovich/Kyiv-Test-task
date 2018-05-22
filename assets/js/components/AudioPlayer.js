const audio = document.querySelector('#audio');
const control = document.querySelector('#audio-control');
const play = control.querySelector('#audio-play'),
      stop = control.querySelector('#audio-stop');

control.addEventListener('click', e => {
  e.preventDefault();
  control.classList.toggle('audio-active');
  let target = e.target;
  if (target.getAttribute('data-audio') === 'play') {
    audio.play();
    play.classList.remove('unhidden');
    stop.classList.add('unhidden');
  } else {
    audio.pause();
    stop.classList.remove('unhidden');
    play.classList.add('unhidden');
  }
})