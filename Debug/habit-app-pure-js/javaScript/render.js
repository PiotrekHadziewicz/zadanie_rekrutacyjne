import { habitComponent } from './habitComponent.js';
import { getHabitList, getCheckList } from './getLocalStorage.js';
import { setEventToCheckList } from './setCheckList.js';

const habitsHTML = document.querySelector('#habits');

export function render() {
  const habitList = getHabitList();
  const checkList = getCheckList();

  if (!habitList) {
    return;
  }

  habitsHTML.innerHTML = '';

  habitList.forEach((habit, index) => {
    const habitElement = habitComponent(habit, checkList[index]);

    habitsHTML.innerHTML += habitElement;
  });

  setEventToCheckList();
}
