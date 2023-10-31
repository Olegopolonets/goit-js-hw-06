const validationInput = document.querySelector("#validation-input");
const dontClick = document.querySelector("#dont");
const resetBtn = document.querySelector("#reset");

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === 6) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});

resetBtn.addEventListener("click", () => {
  validationInput.value = "";
  validationInput.classList.remove("invalid");
  validationInput.classList.remove("valid");
});
