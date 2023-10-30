const categoryList = document.getElementById("categories");
const elements = categoryList.children;
console.log(`Number of categories: ${elements.length}`);
[...elements].forEach((element) => {
  console.log(
    `
    Category: ${element.firstElementChild.textContent}, 
    Elements: ${element.querySelectorAll("li").length}
      `
  );
});
