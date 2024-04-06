import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';



const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEL = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

// btnStart.addEventListener('click',);

btnStart.disabled = true;


const currentTime = new Date();
console.log(currentTime);

let userSelectDates;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
        userSelectDates = selectedDates[0];

        if (selectedDates[0] >= currentTime) {
        btnStart.disabled = false;
            } else {
            btnStart.disabled = true;
            window.alert('Please choose a date in the future');
        }
    }
};

flatpickr('#datetime-picker', options);

        const differenceTime = (userSelectDates - currentTime);
        // console.log(differenceTime);
        // updateTimer(differenceTime);
    // console.log(updateTimer(differenceTime));


console.log(userSelectDates);
console.log(differenceTime);


function updateTimer({ days, hours, minutes, seconds }) { 
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEL.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;
};

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = addLeadingZero(Math.floor(ms / day));
//     // Remaining hours
//     const hours = addLeadingZero(Math.floor((ms % day) / hour));
//     // Remaining minutes
//     const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//     // Remaining seconds
//     const seconds = addLeadingZero(
//       Math.floor((((ms % day) % hour) % minute) / second)
//     );

//     return { days, hours, minutes, seconds };
// }

