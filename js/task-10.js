const controls = document.getElementById("controls");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const width = i === 0 ? 30 : i * 10 + 30;
    const height = i === 0 ? 30 : i * 10 + 30;
    const color = getRandomHexColor();

    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = color;

    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = Number(controls.querySelector("input").value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
