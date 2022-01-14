const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#submit');
const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

function login(event) {
  event.preventDefault();

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', login);

submitButton.disabled = true;

function checkAgreement (event) {
  if(event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('change', checkAgreement);