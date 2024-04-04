import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';



const btnStart = document.querySelector('[data-start]');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEL = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStart.disabled = true;


const currentTime = new Date();
// console.log(currentTime);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        let userSelectedDate;

        if (selectedDates[0] >= currentTime) {
            userSelectedDate = selectedDates[0];
            btnStart.disabled = false;
        } else {
            btnStart.disabled = true;
            window.alert('Please choose a date in the future');
        }

        const differenceTime = convertMs(userSelectedDate - currentTime);
        console.log(differenceTime);
        updateTimer(differenceTime);
        
        
    }
}

flatpickr('#datetime-picker', options);



function updateTimer({ days, hours, minutes, seconds }) { 
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEL.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

