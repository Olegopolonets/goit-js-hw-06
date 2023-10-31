const form = document.querySelector(".login-form");
const button = document.querySelector('[type="submit"]');

function getValueOfEmail() {
  const inputEmail = document.querySelector('[type="email"]');
  if (inputEmail.value !== "") {
    return inputEmail.value;
  }
  alert("Please fill all fields!");
}
function getValueOfPass() {
  const inputPass = document.querySelector('[type="password"]');
  if (inputPass.value !== "") {
    return inputPass.value;
  }
  alert("Please fill all fields!");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailCase = getValueOfEmail();
  const passCase = getValueOfPass();
  console.log({ emailCase, passCase });
  form.reset();
});
