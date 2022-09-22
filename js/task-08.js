// dataForm
const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (!mail || !password) {
    return alert('Адреса ел. пошти та пароль - обовязкові до заповнення');
  }

  const formData = { mail, password };
  refs.form.reset();
  return console.log(formData);
}
