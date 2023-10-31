const form = document.querySelector(".login-form");
const button = document.querySelector('[type="submit"]');

function getValueOfEmail() {
  const inputEmail = document.querySelector('[type="email"]');
  if (inputEmail.value !== "") {
    return inputEmail.value;
  }
  alert("Нормально введи логін!");
}
function getValueOfPass() {
  const inputPass = document.querySelector('[type="password"]');
  if (inputPass.value !== "") {
    return inputPass.value;
  }
  alert("А де пароль? Ти шо кіберзлодій?");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = getValueOfEmail();
  const pass = getValueOfPass();
  console.log({ email, pass });
  form.reset();
});
