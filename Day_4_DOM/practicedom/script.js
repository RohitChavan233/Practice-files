const form = document.querySelector('form')
const inp1 = document.querySelector('#name')
const inp2 = document.querySelector('#email')
const url = document.querySelector('#url')
const users = document.querySelector('.users')


let usersData = [
    {
        "id": 1,
        "name": "Aarav Sharma",
        "email": "aarav.sharma@example.com",
        "image": "https://randomuser.me/api/portraits/men/11.jpg",
        "dob": "2001-05-14"
    },
    {
        "id": 2,
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "image": "https://randomuser.me/api/portraits/women/25.jpg",
        "dob": "1999-11-08"
    },
    {
        "id": 3,
        "name": "Rohan Patil",
        "email": "rohan.patil@example.com",
        "image": "https://randomuser.me/api/portraits/men/42.jpg",
        "dob": "2002-01-27"
    },
    {
        "id": 4,
        "name": "Sneha Kulkarni",
        "email": "sneha.kulkarni@example.com",
        "image": "https://randomuser.me/api/portraits/women/63.jpg",
        "dob": "2000-09-19"
    },
    {
        "id": 5,
        "name": "Vikram Desai",
        "email": "vikram.desai@example.com",
        "image": "https://randomuser.me/api/portraits/men/78.jpg",
        "dob": "1998-03-05"
    }
]

let ui = () => {
    users.innerHTML = ''
    usersData.forEach((elem, index) => {
        users.innerHTML = `
        <div class="users-card">

            <div class="img">
                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Image not found">
            </div> 

            <div id="values">
                <h3>${name}}</h3>
                <p>${email}</p>
            </div>

            <div id="boxbtn">
                <button class="edit">Edit</button>
                <button class="del">Delete</button>
            </div>

        </div>`
    })
}

ui()

form.addEventListener('submit', (events) => {
    events.defaultPrevented()

    let name = inp1.value
    let email = inp2.value
    let image = url.value

    // console.log(name, email, image);
    usersData.push({
        name,
        email,
        image,
    })

    ui()


    form.reset()
})