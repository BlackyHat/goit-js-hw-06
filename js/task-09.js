function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btn: document.querySelector('.change-color'),
  colorLabel: document.querySelector('.color'),
  bodyAtr: document.body,
};

// const body = document.body;
// console.log(body);

refs.btn.addEventListener('click', onClickChangeBodyColor);

function onClickChangeBodyColor() {
  // console.log(getRandomHexColor());
  refs.bodyAtr.style.backgroundColor = getRandomHexColor();
  refs.colorLabel.textContent = refs.bodyAtr.style.backgroundColor;
}
