import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputDate: document.querySelector('input[type="text"]'),
  startBtn: document.querySelector('button[data-start]'),
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', handleTimerStart);
let userDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userDate = selectedDates[0].getTime();
    checkCorrectDate(userDate);
  },
};

flatpickr(refs.inputDate, options);

function checkCorrectDate(date) {
  const targetTime = deadlineTime(date);
  if (targetTime <= 0) {
    return Notiflix.Notify.failure('Please choose a date in the future');
  }

  refs.startBtn.disabled = false;
}

function deadlineTime(date) {
  const currentDate = new Date().getTime();
  const countDownTime = userDate - currentDate;
  return countDownTime;
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function handleTimerStart() {
  const inervalTimer = setInterval(() => {
    let timeLeft = deadlineTime(userDate);

    if (timeLeft <= 1000) {
      clearInterval(inervalTimer);
    }

    function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(ms / day);
      const hours = Math.floor((ms % day) / hour);
      const minutes = Math.floor(((ms % day) % hour) / minute);
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      timerDays.textContent = addLeadingZero(days);
      timerHours.textContent = addLeadingZero(hours);
      timerMinutes.textContent = addLeadingZero(minutes);
      timerSeconds.textContent = addLeadingZero(seconds);
    }

    convertMs(timeLeft);
  }, 1000);
}
