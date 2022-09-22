const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.classList.add('item');
  return listEl;
});
ingredientsContainerEl.append(...elements);
