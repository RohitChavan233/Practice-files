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
const timer = document.querySelector('#timer')

let time = 0
let interval

const randomBox = ()=>{
        time += 1
        timer.textContent = time

        const left_ = Math.random() * 100
        const top_ = Math.random() * 100

        box.style.left = `${left_}%`
        box.style.top = `${top_}%`
}

btn.addEventListener('click', () => {

    clearInterval(interval)

    interval = setInterval(() => {
        randomBox()
    }, 1000);

    setTimeout(() => {
        clearTimeout(interval)
    }, 10000);
})