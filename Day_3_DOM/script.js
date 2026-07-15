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

// const inp = document.querySelector('input')
// const btn = document.querySelector('button')

// btn.addEventListener('click', ()=>{
//     console.log(inp.value)
// })


// creasting inserting and removing elements form dom

// const main  = document.querySelector('main')
// // console.log(footer)

// const footer = document.createElement('footer')
// const span = document.createElement('span')
// const child = document.body.appendChild(footer)

// span.textContent = "hello "

// main.append(span)
// main.appendChild(footer)
// main.removeChild(span)

const main = document.querySelector('main')

const box1 = document.createElement('div')
const box2 = document.createElement('div')
const box3 = document.createElement('div')

box1.classList.add('box')
box2.classList.add('box')
box2.style.backgroundColor = "yellow"
box3.classList.add('box')
box3.style.backgroundColor = 'blue'
main.append(box1, box2)

main.replaceChild(box3, box1)




// box2.style.backgroundColor = "yellow"
// box3.style.backgroundColor = "blue"

// main.insertBefore(box2, box1)
// main.prepend(box3)




