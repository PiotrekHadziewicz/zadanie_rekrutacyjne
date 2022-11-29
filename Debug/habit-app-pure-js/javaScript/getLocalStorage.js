export function getHabitList() {
  const habits = localStorage.getItem('habits');
  const array = JSON.parse(habits);

  return array || [];
}

export function getCheckList() {
  const checkList = localStorage.getItem('checkList');
  const array = JSON.parse(checkList);

  return array || [];
}

export function getLocalDate() {
  const currentDay = localStorage.getItem('currentDay');
  const day = JSON.parse(currentDay);

  return day || 0;
}
