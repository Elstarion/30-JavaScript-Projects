const audioCache = {};
const playButtons = document.querySelectorAll('button');

function playAudio(sound) {
  const audio = audioCache[sound];
  audio.currentTime = 0;
  audio.play();
}

// cache audio objects to prevent creating them on repeated keypress
playButtons.forEach((button) => {
  const sound = button.dataset.sound;
  audioCache[sound] = new Audio(`./sounds/${sound}.wav`);

  button.addEventListener('click', (e) => {
    playAudio(sound);
  });
});

window.addEventListener('keydown', (e) => {
  const button = document.querySelector(`button[data-key='${e.code}']`);
  if (button) {
    playAudio(button.dataset.sound);
  }
});
