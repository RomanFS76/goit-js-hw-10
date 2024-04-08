// const formEl = document.querySelector('.form');

// const delayEl = document.querySelector('input[name="delay"]');
// console.log(delayEl);
// const btnForm = document.querySelector('button[type="submit"]');

// formEl.addEventListener('click', event => {
//     event.preventDefault();
//     console.log(event);
//  });

import iziToast from 'izitoast/dist/js/iziToast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

document.addEventListener('DOMContentLoaded', function () {
  
  form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = Number(form.delay.value);

    const promise = new Promise((resolve, reject) => {
      const radioValue = form.state.value;
      if (radioValue === 'fulfilled') {
        setTimeout(() => {
          resolve(delay);
        }, delay);
      } else if (radioValue === 'rejected') {
        setTimeout(() => {
          reject(delay);
        }, delay);
      }
    });

    promise
      .then(delay => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topCenter',
          timeout: 1500,
        });
      })
      .catch(delay => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topCenter',
          timeout: 1500,
        });
      });

    form.reset();
  });
});
