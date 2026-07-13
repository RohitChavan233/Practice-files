// attributes and properties

// const h3 = document.querySelector('#id1')
// const res = h3.getAttribute('class')
// console.log(res)

// h3.removeAttribute('class')


// h3.setAttribute('width', '200px')
// console.log(h3.getAttribute('width'))

// console.log(h3.hasAttribute('class'))

// const userCart = document.querySelector('#user-cart')
// console.log(userCart)

// console.log(userCart.getAttribute('get-user'))






// input.value vs input.getAttribute("value")

const inp = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    console.log(inp.value)
})