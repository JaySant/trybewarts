const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#submit');
const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', login);

submitButton.disabled = true;

function checkAgreement(event) {
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('change', checkAgreement);

function counterText() {
  const limit = 500;
  if (textarea.value.length <= 500 && textarea.value.length > -1) {
    const counter = document.querySelector('#counter');
    counter.innerText = limit - textarea.value.length;
  }
}

textarea.addEventListener('keyup', counterText);
