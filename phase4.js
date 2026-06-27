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
    this.getfrontPage = function (){
        console.log('Book Name:', this.bookName);
        console.log('Author Name:', this.authorName);
        console.log('Pages:', this.pages);
        
    }
}

let book = new CreateBook('Rich Dad Poor Dad', 'Robert Kiyosaki', 553)
let book1 = new CreateBook('Rich Dad Poor Dad', 'Robert Kiyosaki', 553)
let book2 = new CreateBook('Sapiens', 'Yuvan Noah Harrari', 850)

// console.log(book);
// console.log(book1);
// console.log(book2);

book.getfrontPage()
