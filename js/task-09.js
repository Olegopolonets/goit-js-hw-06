const body = document.querySelector("body");
const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
const countClick = document.querySelector(".count-click");
const countWrapper = document.querySelector(".count-wrapper");
const widget = document.querySelector(".widget");

changeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});

let count = 0;

function clickHandler(event) {
  count++;
  countClick.textContent = count;
  if (count === 3) {
    alert(
      "Ви натиснули на кнопку 3 рази, ви побачили, що вона міняє колір фону. Більше не натискайте, або натисніть 20 разів, можливо буде сюрприз."
    );
    countWrapper.classList.remove("hidden");
  }

  if (count === 20) {
    let imgPoroh = document.createElement("img");
    imgPoroh.src = "https://i.ibb.co/vsFJX4V/2023-10-31-112226.jpg";
    imgPoroh.width = 350;
    console.log(imgPoroh);
    widget.appendChild(imgPoroh);
  }
}

changeColor.addEventListener("click", clickHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
