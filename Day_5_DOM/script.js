// const five = document.querySelector('#five')
// const main = document.querySelector('main')

// five.addEventListener('click',(events)=>{
//     console.log(events.target)
// } )

// main.addEventListener('click', (events)=>{
//     console.log(events.target)
// })



// const box = document.querySelector('.box')
const main = document.querySelector('main')
const btn = document.querySelector('button')
const timer = document.querySelector('#timer')
const box = document.createElement('div')
box.classList.add('box')

let time = 0
let interval

const randomBox = () => {
    main.append(box)
    time += 1
    timer.textContent = time

    const left_ = Math.random() * 100
    const top_ = Math.random() * 100

    box.style.left = `${left_}%`
    box.style.top = `${top_}%`
}

btn.addEventListener('click', () => {
    randomBox()
    clearInterval(interval)

    interval = setInterval(() => {
        randomBox()
    }, 1000);

    setTimeout(() => {
        clearTimeout(interval)
    }, 10000);
})