const btn = document.querySelector('button')
const div = document.querySelector('div')
const main = document.querySelector('main')
const body = document.body

btn.addEventListener('click', (events)=>{
    console.log('button triggered')
})

div.addEventListener('click', (events)=>{
    console.log('div triggered')
})

main.addEventListener('click', (events)=>{
    console.log('main triggered')
})

body.addEventListener('click', (events)=>{
    console.log('body triggered')
})