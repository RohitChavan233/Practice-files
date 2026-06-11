var user = {
    name: 'rohit',
    age: 20,
    batch: 'cohot 3',
    college: {
        collegeName: "theem college",
        students:500,
        course : 'CSE'

    },
    skills: ['js', 'python', 'react', 'node']
}

var obj = JSON.stringify(user)
var obj = JSON.parse(obj)

console.log(obj);

