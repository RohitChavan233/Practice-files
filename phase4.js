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


function CreateBook (bookName, auth, Page){
    this.bookName = bookName;
    this.authorName = auth;
    this.pages = Page ;
}

let book = new CreateBook('Rich Dad Poor Dad', 'JK Rowling', 553)
let book1 = new CreateBook('Rich Dad Poor Dad', 'JK Rowling', 553)
console.log(book);
console.log(book1);
