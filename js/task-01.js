const listItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItemsEl.length}`);

listItemsEl.forEach((element) => {
  const titleCategory = element.querySelector("h2").textContent;
  const countCategoryItems = element.querySelectorAll("li").length;
  console.log(`Categoty: ${titleCategory}`);
  console.log(`Elements: ${countCategoryItems}`);
});
