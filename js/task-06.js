const validationInput = document.querySelector("#validation-input");
const dontClick = document.querySelector("#dont");
const resetBtn = document.querySelector("#reset");

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length < validationInput.dataset.length) {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  } else {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
});

resetBtn.addEventListener("click", () => {
  validationInput.value = "";
  validationInput.classList.remove("invalid");
  validationInput.classList.remove("valid");
});
