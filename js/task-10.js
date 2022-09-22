function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  targetContainer: document.querySelector('#boxes'),
};

refs.create.addEventListener('click', checkQty);
refs.destroy.addEventListener('click', destroyBoxes);

function checkQty() {
  const max = refs.input.getAttribute('max');
  const min = refs.input.getAttribute('min');
  const value = Number(refs.input.value);
  if (value <= max && min < value) {
    return createBoxes(refs.input.value);
  }
}

function createBoxes(amount) {
  const boxes = [];
  let boxElSizes = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');

    boxEl.style.width = `${boxElSizes}px`;
    boxEl.style.height = `${boxElSizes}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxes.push(boxEl);

    boxElSizes += 10;
  }
  refs.targetContainer.append(...boxes);
}

function destroyBoxes() {
  refs.targetContainer.innerHTML = '';
  refs.input.value = '0';
}
