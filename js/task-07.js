const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
const link = document.getElementById("link");
input.value = input.min;

input.addEventListener("input", () => {
  text.style.fontSize = `${input.value}px`;
  if (input.value == 96) {
    text.style.textDecoration = "underline";
    link.setAttribute(
      "href",
      "https://www.youtube.com/watch?v=OyDyOweu-PA&ab_channel=tutatu"
    );
  } else {
    text.style.textDecoration = "none";
    link.removeAttribute("href");
  }
});
