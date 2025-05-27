//! String and it's methods
let str = "1234"
let str2 = "Hello"

let name = "Rahul"
let age = 20

//* String literals
// console.log("My name is ", name, " and age is ", age);

let str3 = `Hello everyone`
// console.log(typeof str3);

// console.log(`My name is ${name}, and age is ${age}`);

// console.log("Hello \neveryone");
// console.log("Hello \teveryone");

//* Methods
let val = "Lorem ipsum dolor sit amet consectetur dolor adipisicing elit. Voluptatibus cum exercitationem quas dolor aspernatur, excepturi, quos reprehenderit soluta qui recusandae labore dolor totam ut minima, tenetur ab quam voluptate accusamus dolor beatae."
//? slice()
let subStr = val.slice(10, 20)
// console.log(subStr);

//? indexOf()
// console.log(val.indexOf('abcd'));

//? charAt()
// console.log(val.charAt(10));

//? toLowerCase()
let lowerStr = val.toLowerCase()
// console.log(lowerStr);

//? toUpperCase()
let upperStr = val.toUpperCase()
// console.log(upperStr);

//? lastIndexOf()
// console.log(val.lastIndexOf("dolor"));

//? replace()
// let replacedStr = val.replace("dolor", "Hi")
// console.log(val);
// console.log(replacedStr);

//? replaceAll()
// let replaceAllStr = val.replaceAll("dolor", "Hello")
// console.log(replaceAllStr);

//? length
// console.log(val.length);

//? split()
// let splitStr = val.split("dolor")
// console.log(splitStr);


//! Functions in JS
//? Pre-defined function
// console.log("Pre-defined function");

//? User Defined Function
//* Normal Function
// function add() {
//     let a = 10
//     let b = 20
//     console.log(a + b);
// }
// add()

//! Type-A (Without parameter)
// function sum() {
//     return 10 + 10
// }
// console.log(sum());

//! Type-B (With Parameter)
// function sum(a, b) {
//     return a + b
// }
// console.log(sum(10, 20));
// console.log(sum(100, 120));
// console.log(sum(1, 220));

//* Arrow function
// let sum = () => {
//     console.log(10 + 20);
// }
// sum()

//* Anonymous function
// let add = function () {
//     console.log(100 + 900);
// }
// add()

//* Callback function
// ()=>{

// }

//? forEach()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = arr.forEach((item) => {
    console.log("Hello");
    console.log(item);
    // return item
})

console.log(newArr);