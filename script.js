let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submit = document.querySelector("#submit");
// let email = emailOriginal.toString();
// let password = passwordOrinal.toString();

function login (event) {
    event.preventDefault();

    if (email.value === "tryber@teste.com" && password.value === "123456" ) {
        alert ("Olá, Tryber!");
    } else {
        alert ("Email ou senha inválidos.");
    }
}

submit.addEventListener('click', login);