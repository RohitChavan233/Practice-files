// var place = {
//     placeName: 'Office',
//     behavior: 'Proffesional',
//     sayHi: function(){
//         const insidePlace = {
//             placeName: 'Meeting room',
//             behavior: 'Roasting',
//             sayHiInforntOffriends:function(){
//                 console.log(this.behavior);
//             },
//             sayHiInforntOfClients:()=>{
//                 console.log(this.behavior);
//             },
//         }

//         insidePlace.sayHiInforntOfClients()
//     },
// }

// place.sayHi()


// function CreateBook (bookName, auth, Page){
//     this.bookName = bookName;
//     this.authorName = auth;
//     this.pages = Page ;
//     this.getfrontPage = function (){
//         console.log('Book Name:', this.bookName);
//         console.log('Author Name:', this.authorName);
//         console.log('Pages:', this.pages);

//     }
// }

// let book = new CreateBook('Rich Dad Poor Dad', 'Robert Kiyosaki', 553)
// let book1 = new CreateBook('Rich Dad Poor Dad', 'Robert Kiyosaki', 553)
// let book2 = new CreateBook('Sapiens', 'Yuvan Noah Harrari', 850)

// console.log(book);
// console.log(book1);
// console.log(book2);

// book.getfrontPage()

// class MakeBooks {
//     constructor(bookName, auth, Page) {
//         this.bookName = bookName;
//         this.authorName = auth;
//         this.pages = Page;
//         this.getfrontPage = function () {
//             console.log('Book Name:', this.bookName);
//             console.log('Author Name:', this.authorName);
//             console.log('Pages:', this.pages);
//         }
//     }
// }

// let obj = new MakeBooks('Rich Dad Poor Dad', 'Robert Kiyosaki', 553)
// console.log(obj);
// obj.getfrontPage()

class User{
    constructor(fname, lname, age){
        this.fname = fname
        this.lname = lname
        this.age = age
        
    }
    greet(){
        console.log("Hello JI, ", this.fname);
        
    }
}


class Admin extends User{
    constructor(fname, lname, age){
        super(fname, lname, age)
        this.isVerified = true
    }

    addCourse(){
        console.log("Add Your Course");
    }

    removeCourse(){
        console.log("Remove all the Course");
    }
}

var u1 = new User('rohit', 'chavan', 20)
var u2 = new Admin('rohan', 'chavan', 15)

console.log(u1);
console.log(u2);


u2.removeCourse()
