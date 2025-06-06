// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         // console.log("Successfull ", response);
//         response.json()
//             .then((result) => {
//                 console.log(result);
//             })
//     })
//     .catch((reject) => {
//         console.log("Rejected ", reject);
//     })


//! async $ await
async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response);
    let data = await response.json()
    console.log(data);
}
// getData()
// console.log("Test");
// setTimeout(() => {
//     console.log("Hi");
// }, 100)
// console.log("Hello");


//! Operations on Object
let obj = {
    name: "Manas",
    age: 24,
}
//? Add a key
obj.marks = 100
// console.log(obj);

//? Update object
obj.name = "Rishabh"
// console.log(obj);

//? Delete a key
delete obj.age
// console.log(obj);

//! Hoisting
//? Variable Hoisting
console.log(a);

var a = 10
console.log(a);

//? function Hoisting
example()
// check()

let check = () => {
    console.log("Function Hoisting");

}
check()

function example() {
    console.log("Function Hoisting");

}
example()