// const five = document.querySelector('#five')
// const main = document.querySelector('main')

// five.addEventListener('click',(events)=>{
//     console.log(events.target)
// } )

// main.addEventListener('click', (events)=>{
//     console.log(events.target)
// })



const main = document.querySelector('main')
const btn = document.querySelector('button')
const box = document.querySelector('.box')

btn.addEventListener('click', ()=>{
    const left_ = Math.random() * 50
    const top_ = Math.random() * 50

    box.style.left = `${left_}%`
    box.style.top = `${top_}%`
})