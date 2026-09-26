function playAudio(sound) {
  return new Audio(`./sounds/${sound}.wav`).play();
}

const playButtons = document.querySelectorAll('button');

playButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playAudio(e.target.dataset.id);
  });
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyA') {
    playAudio('boom');
  }

  if (e.code === 'KeyS') {
    playAudio('clap');
  }

  if (e.code === 'KeyD') {
    playAudio('hihat');
  }

  if (e.code === 'KeyF') {
    playAudio('kick');
  }

  if (e.code === 'KeyG') {
    playAudio('openhat');
  }

  if (e.code === 'KeyH') {
    playAudio('ride');
  }

  if (e.code === 'KeyJ') {
    playAudio('snare');
  }

  if (e.code === 'KeyK') {
    playAudio('tink');
  }

  if (e.code === 'KeyL') {
    playAudio('tom');
  }
});
