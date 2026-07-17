// const btn = document.querySelector('button')
// const div = document.querySelector('div')
// const main = document.querySelector('main')
// const body = document.body

// btn.addEventListener('click', (events)=>{
//     console.log('button triggered')
// }, {capture:true})

// div.addEventListener('click', (events)=>{
//     console.log('div triggered')
// },{capture:true})

// main.addEventListener('click', (events)=>{
//     console.log('main triggered')
// },{capture:true})

// body.addEventListener('click', (events)=>{
//     console.log('body triggered')
// },{capture:true})



const form = document.querySelector('form')
const inp1 = document.querySelector('#name')
const inp2 = document.querySelector('#email')
const user = document.querySelector('.users')

form.addEventListener('submit', (events)=>{
    events.preventDefault()
    
    let name = inp1.value
    let email = inp2.value

    // if(name.trim() ==='' && email.trim() === '') return

    user.innerHTML += `<div class="user_card">
            <div class="img_box">
                <img src="https://images.unsplash.com/photo-1783950023744-ee1ca8f55859?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image is here">
            </div>
            <div class="text">
                <h3>Name:${name}</h3>
                <p>Email:${email}</p>
            </div>
        </div>`

    form.reset()


})