const scriptURL = 'https://script.google.com/macros/s/AKfycbxPA1jwzAJt1sXh92GI4kmKQFG7HEI2dyf9zLI3x5O95c5_CjKnuPgIt4vFsVGFliVt1w/exec'

const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        form.reset();
})