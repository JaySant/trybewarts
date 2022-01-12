const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

function login(event) {
  event.preventDefault();

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

submit.addEventListener('click', login);
