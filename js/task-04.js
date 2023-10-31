let currentValue = 0;

const endValue = document.querySelector("#value");
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const linkVideo = document.querySelector(".link-video");

function isCorectNumber() {
  return currentValue == 19
    ? linkVideo.classList.remove("hidden")
    : linkVideo.classList.add("hidden");
}

decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  endValue.textContent = `${currentValue}`;
  isCorectNumber();
});

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  endValue.textContent = `${currentValue}`;
  isCorectNumber();
});
