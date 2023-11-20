const scriptURL = 'https://script.google.com/macros/s/AKfycbz2dNfOsnWuuAXifYD4Pd9BdKxgHE72KlrCmzCnsbhJE9vUBW-k37JNO2y1uNhWUZq7PQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})