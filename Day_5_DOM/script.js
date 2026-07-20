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
const scoree = document.querySelector('#score')
const overlay = document.querySelector('#overlay')
const box = document.createElement('div')
box.classList.add('box')

let time = 0
let interval
let score = 0

const randomColor = () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

const randomBox = () => {
    main.append(box)

    let mainH = main.clientHeight - box.offsetHeight
    let mainW = main.clientWidth - box.offsetWidth

    const left_ = Math.random() * mainH
    const top_ = Math.random() * mainW

    box.style.left = `${top_}px`
    box.style.top = `${left_}px`
}

btn.addEventListener('click', () => {
    randomBox()
    randomColor()
    clearInterval(interval)

    interval = setInterval(() => {
        randomBox()
        randomColor()
        time += 1
        timer.textContent = time

    }, 1000);

    setTimeout(() => {
        clearTimeout(interval)
        overlay.style.display = 'flex'
    }, 10000);
})

box.addEventListener('click', () => {
    score += 10

    scoree.textContent = score
    // interval = setInterval(() => {
    //     randomBox()
    //     randomColor()    

    // }, 1000);
})