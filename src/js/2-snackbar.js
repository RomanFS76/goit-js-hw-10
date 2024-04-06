const formEl = document.querySelector('.form');



const delayEl = document.querySelector('input[name="delay"]');
console.log(delayEl);
const btnForm = document.querySelector('button[type="submit"]');


formEl.addEventListener('click', event => {
    event.preventDefault();
    console.log(event);
 });