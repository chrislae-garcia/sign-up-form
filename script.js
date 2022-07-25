const inputPassword = document.querySelector('#password');
const inputConfirm = document.querySelector('#confirm');

inputConfirm.addEventListener('input', () => {

  if (inputPassword.value != inputConfirm.value) {
    inputConfirm.setCustomValidity('Password does not match');
    inputConfirm.reportValidity();
  } else {
    inputConfirm.setCustomValidity('');
  }
});