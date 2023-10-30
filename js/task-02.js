const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

[...ingredients].forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = item;
  ingredientsList.append(listItem);
});

console.log(ingredientsList);
