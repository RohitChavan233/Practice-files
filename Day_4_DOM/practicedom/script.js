const form = document.querySelector('form')
const inp1 = document.querySelector('#name')
const inp2 = document.querySelector('#email')
const url = document.querySelector('#url')

form.addEventListener('submit', (events) => {
    events.defaultPrevented

    let name = inp1.value
    let email = inp2.value
    let image = url.value

    form.reset()
})