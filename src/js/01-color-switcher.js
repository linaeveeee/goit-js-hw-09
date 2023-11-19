const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let colorInterval;

refs.btnStart.addEventListener('click', handleBtnStart);
refs.btnStop.addEventListener('click', handleBtnStop);

function handleBtnStart() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  colorInterval = setInterval(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handleBtnStop() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(colorInterval);
}
