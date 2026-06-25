// const person = {
//     name: "Rahul",
//     age: 22,
//     city: "Delhi"
// }

// for (let a in person) {
//     console.log(a + " : " + person[a]);
// }


// const persons = {
//     name: "Rahul",
//     age: 22,
//     city: "Delhi"
// };

// for (let a in persons) {
//     console.log(a);          // key
//     console.log(persons[a]);  // value
// }




// var person = {
//     name: "Rahul",
//     age: 22,
//     city: "Delhi"
// };

// console.log("email" in person);



// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }

// var obj = {...obj1, ...obj2}

// console.log(obj);

// function greet(){
//     console.log("happy birthday");

//     function sayHi(){
//         console.log("hi");   
//     }
//     return sayHi()
// }

// var ncp = greet()

// console.log(ncp);





// function createBankAccount(){
//     let balance = 0

//     return{
//         deposit(amount){balance += amount; return balance;},
//         getBalance(){return balance }
//     }
// }


// const acc = createBankAccount()
// acc.deposit(500)

// console.log(acc.getBalance());
// // console.log(acc.balance);

// var obj = {
//     firstName: ' Rohit ',
//     lastName: ' Chavan ',
//     age : 33,
//     getIntro: function(){
//         console.log(this.lastName + this.firstName);

//     }
// }

// var obj2 = {
//     firstName:' Rohan ',
//     lastName: ' Chavan '
// }

// obj.getIntro.call(obj2)


// var student1 = {
//     firstName: 'rohit',
//     lastName: 'chavan',
//     getIntro: function (city, state) {
//         console.log(`${this.firstName} ${this.lastName}, ${city} (${state})`);

//     }
// }

// var student2 = {
//     firstName: 'rohan',
//     lastName: 'chavan',
// }


// var out = student1.getIntro.bind(student2, "Boisar", "Maharashtra")

// console.log(out);
// out()
