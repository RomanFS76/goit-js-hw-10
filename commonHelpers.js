import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as i}from"./assets/vendor-2b44ac2e.js";const t=document.querySelector("[data-start]"),u=document.querySelector("[data-days]"),l=document.querySelector("[data-hours]"),m=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");t.addEventListener("click",e=>{t.disabled=!1,y()});t.disabled=!0;const a=new Date;let r;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r>=a?t.disabled=!1:(t.disabled=!0,window.alert("Please choose a date in the future"))}};i("#datetime-picker",h);function y(){setInterval(S,1e3)}const o=r-a;console.log(`currentTime: ${a}`);console.log(`differenceTime: ${o}`);console.log(`userSelectDates: ${r}`);function S(){o>0?(o-=1e3,$(p(o))):clearInterval(intervalId)}function $({days:e,hours:c,minutes:s,seconds:d}){u.textContent=`${e}`,l.textContent=`${c}`,m.textContent=`${s}`,f.textContent=`${d}`}function n(e){return String(e).padStart(2,"0")}function p(e){n(Math.floor(e/864e5)),n(Math.floor(e%864e5/36e5)),n(Math.floor(e%864e5%36e5/6e4)),n(Math.floor(e%864e5%36e5%6e4/1e3))}
//# sourceMappingURL=commonHelpers.js.map
