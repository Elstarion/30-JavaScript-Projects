const audioCache = {};
const keys = document.querySelectorAll('.key');

function playAudio(sound, key) {
  const audio = audioCache[sound];
  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

// cache audio objects to prevent creating them on repeated keypress
keys.forEach((key) => {
  const sound = key.dataset.sound;
  audioCache[sound] = new Audio(`./sounds/${sound}.wav`);

  key.addEventListener('click', () => {
    playAudio(sound, key);
  });

  key.addEventListener('transitionend', (e) => {
    // remove class only once
    if (e.propertyName !== 'transform') return;
    key.classList.remove('playing');
  });
});

window.addEventListener('keydown', (e) => {
  const key = document.querySelector(`div[data-key='${e.code}']`);

  if (key) {
    playAudio(key.dataset.sound, key);
  }
});
