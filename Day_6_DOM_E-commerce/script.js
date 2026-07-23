const createBtn = document.querySelector('#create')
const formDiv = document.querySelector('.form')
const close = document.querySelector('#close')
const form = document.querySelector('form')

const productArr = []

createBtn.addEventListener('click', () => {
    formDiv.style.display = 'flex'
})

close.addEventListener('click', () => {
    formDiv.style.display = 'none'
})


form.addEventListener('submit', (event) => {
    event.preventDefault()

    let productName = event.target[0].value
    let description = event.target[1].value
    let price = event.target[2].value
    let image = event.target[3].value

    if (productName.trim() === '' || description.trim() === '' || price.trim() === '' || image === '') {
        alert('Please fill all the fields')
        return
    }


    let obj = {
        productName,
        description,
        price,
        image,
    }

    productArr.push(obj)

    // console.log(productArr)
    // console.log(obj)

    form.reset()
})