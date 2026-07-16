const btn = document.querySelector('button')
const div = document.querySelector('div')
const main = document.querySelector('main')
const body = document.body

btn.addEventListener('click', (events)=>{
    console.log('button triggered')
}, {capture:true})

div.addEventListener('click', (events)=>{
    console.log('div triggered')
},{capture:true})

main.addEventListener('click', (events)=>{
    console.log('main triggered')
},{capture:true})

body.addEventListener('click', (events)=>{
    console.log('body triggered')
},{capture:true})