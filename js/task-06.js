const validationInput = document.querySelector("#validation-input");
const dontClick = document.querySelector("#dont");
const resetBtn = document.querySelector("#reset");

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length < validationInput.dataset.length) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  } else {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  }
});

resetBtn.addEventListener("click", () => {
  validationInput.value = "";
  validationInput.classList.remove("invalid");
  validationInput.classList.remove("valid");
});
