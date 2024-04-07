import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEL = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStart.disabled = true;

let userSelectDates;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] >= new Date()) {
      btnStart.disabled = false;
        userSelectDates = selectedDates[0];
    } else {
      btnStart.disabled = true;
      iziToast.show({
        message: 'Please choose a date in the future',
        position: 'topCenter',
        color: 'yellow',
        timeout: 1500,
      });
    }
  },
};

flatpickr('#datetime-picker', options);

btnStart.addEventListener('click', event => {
    let diff = userSelectDates - Date.now();
    const convertDate = convertMs(diff);

    updateTimer(convertDate);

    function startTimer() {
        const intervalId = setInterval(() => {
        if (diff > 2) {
            diff = diff - 1000;
            updateTimer(convertMs(diff));
            console.log(intervalId);
        } else {
            clearInterval(intervalId);
        }
        }, 1000);
    }

    startTimer();
    btnStart.disabled = true;
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minutesEL.textContent = `${minutes}`;
  secondsEl.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}






