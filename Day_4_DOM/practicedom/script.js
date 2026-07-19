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
        users.innerHTML += `
        <div class="users-card">
            <div class="img">
                <img src="${elem.image}" alt="Image not found">
            </div> 
            <div id="values">
                <h3>Name: ${elem.name}</h3>
                <p>E-mail: ${elem.email}</p>
            </div>
            <div id="boxbtn">
                <button class="edit" onclick="editCard(${index})">Edit</button>
                <button class="del" onClick = "deleteCard(${index})">Delete</button>
            </div>
        </div>`
    })
}

ui()

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = inp1.value;
    const email = inp2.value;
    const image = url.value;

    if (editIndex === -1) {

        // Create new user
        usersData.push({
            name,
            email,
            image
        });

    } else {

        // Update existing user
        usersData[editIndex] = {
            ...usersData[editIndex],
            name,
            email,
            image
        };

        editIndex = -1;

        form.querySelector("button").textContent = "Create";
    }

    ui();

    form.reset();
});

let deleteCard = (index) => {
    usersData.splice(index, 1)
    ui()
}

let editIndex = -1


function editCard(index) {

    // Store which user is being edited
    editIndex = index;

    // Fill form inputs
    inp1.value = usersData[index].name;
    inp2.value = usersData[index].email;
    url.value = usersData[index].image;

    // Change button text
    form.querySelector("button").textContent = "Update";
}

