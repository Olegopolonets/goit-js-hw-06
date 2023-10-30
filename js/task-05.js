const textInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");
const reverse = document.querySelector("#name-output-reverse");

textInput.addEventListener("input", (event) => {
  const evCurrentValue = event.currentTarget.value;
  if (evCurrentValue === "") {
    nameOutput.textContent = "Anonymous";
    reverse.textContent = "suomynonA";
  } else {
    nameOutput.textContent = evCurrentValue;
    reverse.textContent = evCurrentValue.split("").reverse().join("");
  }
});
