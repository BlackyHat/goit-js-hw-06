const refs = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

refs.increment.addEventListener("click", onClickIncrementHandler);
refs.decrement.addEventListener("click", onClickDecrementHandler);
let counterValue = 0;

function onClickIncrementHandler() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
function onClickDecrementHandler() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}
