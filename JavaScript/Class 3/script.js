//! Loops in JS
//* for loop
// for (initialization; condition; iteration){

// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let arr = [10, 20, 30, 40, 245, 246, 24256, 24, 562, 456, 435]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//* while loop
// initialization;
// while(condition){
//     //instruction
//     iteration;
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

//* do-while loop
// initialization;
// do {
//     //instruction

//     iteration;
// } while (condition);

// let i = 0
// do {
//     console.log(i);
//     i++
// } while (i > 10)

//* for-of loop
// for(accumulator of variable){
//     //instruction
// }

// let arr = [10, 20, 30, 40, 245, 246, 24256, 24, 562, 456, 435]
// for (let item of arr) {
//     console.log(item);
// }

// let str = "Hello everyone"
// for (let s of str) {
//     console.log(s);
// }

//* for-in loop
let student = {
    name: "ABCD",
    age: 24,
    course: "Web-Dev",
    address: 'Bhubaneswar'
}

// for (let item in student) {
//     console.log("Key name: ", item, " Value is: ", student[item]);
// }


//! Array methods
let arr = ['Hi', 1, true, 20, 50]
console.log(arr);

//? push()
// arr.push(100, false, undefined)
// console.log(arr);

//? pop()
// arr.pop()
// console.log(arr);

//? unshift()
// arr.unshift([1, 2, 3, 4, 5, 6], { name: "XYZ", age: 20 })
// console.log(arr);

//? shift()
// arr.shift()
// console.log(arr);

//? slice()
// let subArr = arr.slice(1, 4)
// console.log(subArr);

//? toString()
// let strArr = arr.toString()
// console.log(strArr);

//? includes()
// let incl = arr.includes("Hi")
// console.log(incl);

//? reverse()
// let revArr = arr.reverse()
// console.log(arr);
// console.log(revArr);

//? splice()
// arr.splice(2, 0, "Hello", 10)
// arr.splice(2, 2)
arr.splice(1, 2, 100, 200, 300)
console.log(arr);
