// console.log('start')

// setTimeout(function x(){
//     console.log('TimeOut')
// }, 3000)



// console.log('end')

// setInterval(() => {
//     let i = 2
//     if (i == 2){
//         console.log(i)
//     }
// }, 3000);



async function dataLao(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await response.json()
    console.log(data)
}

dataLao()