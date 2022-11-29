import { render } from './render.js';

const reset = document.querySelector('.reset');

reset.onclick = () => resetAll();

export function resetAll() {
  const spinner = document.querySelector('.spinner');
  const habits = document.querySelector('#habits');
  habits.innerHTML = '';
  spinner.classList.remove('d-none');
  setTimeout(() => {
    spinner.classList.add('dnone');
    localStorage.setItem('checkList', JSON.stringify([]));
    render();
    spinner.classList.remove('dnone');
    spinner.classList.add('d-none');
  }, 400);
}
