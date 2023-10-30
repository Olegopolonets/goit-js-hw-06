let currentValue = 0;

const endValue = document.querySelector("#value");
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  endValue.textContent = `${currentValue}`;
});

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  endValue.textContent = `${currentValue}`;
});
