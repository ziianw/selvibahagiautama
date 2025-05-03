const scriptURL = 'https://script.google.com/macros/s/AKfycby78TbibYBLFvd8MC0CjnY3rvRyiGOiCCOjFqrKF52j263yEXtMlbBJmC9t5AQwE4ts/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})