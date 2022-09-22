const refs = {
  input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (Number(refs.input.dataset.length) === event.currentTarget.value.length) {
    return refs.input.classList.add('valid');
  }
  return refs.input.classList.add('invalid');
}
