export function setEventToCheckList() {
  const checkDiv = document.querySelectorAll('.is-checked');
  checkDiv.forEach((el) => el.addEventListener('click', () => saveCheckedToLocalStorage()));
}

export function saveCheckedToLocalStorage() {
  const checkDiv = document.querySelectorAll('.is-checked');
  const checkedList = [];
  checkDiv.forEach((el) => checkedList.push(el.children[0].checked));

  localStorage.setItem('checkList', JSON.stringify(checkedList));
}
