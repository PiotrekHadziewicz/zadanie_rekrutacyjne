import './javaScript/reset.js';
import './javaScript/add.js';
import './javaScript/remove.js';
import { render } from './javaScript/render.js';
import { resetAll } from './javaScript/reset.js';
import { getLocalDate } from './javaScript/getLocalStorage.js';

render();

document.querySelector('#input').focus();

window.onload = () => {
  const localDay = getLocalDate();
  const dayNow = new Date().getDate();

  if (dayNow !== localDay) {
    resetAll();
    localStorage.setItem('currentDay', JSON.stringify(dayNow));
  }
};
