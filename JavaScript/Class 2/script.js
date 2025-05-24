//! Non-primitive or reference type
//? array type
let arr = [10, "Hello", true, undefined, [10, 20], null]
// console.log(arr);
// console.log(typeof arr);
// console.log(arr[2]);


//? object type
let obj = {
    name: "Manas",
    course: "MCA",
    mark: 9.5
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);

//? function
function sayHello() {
    console.log("Hello everyone");
    console.log("Good Morning");
}
// sayHello()
// sayHello()
// sayHello()
// sayHello()


//! Operator
//? Arithmetic Operator
let val1 = 4
let val2 = 3

// let addition = val1 + val2
// console.log("Addition=", addition);

// let sub = val1 - val2
// console.log("Subtraction=", sub);

// let multi = val1 * val2
// console.log("Multiplication", multi);

// let div = val1 / val2
// console.log("Division= ", div);

// let mod = val1 % val2
// console.log("Modulus=", mod);

// let expo = val1 ** val2
// console.log("Exponent= ", expo);

//? Assignment Operator (=,+=,-+,*=,/=,%=,**=)

// let ab = 20
// let xy = 90

// ab += xy // ab = ab+xy
// console.log(ab);

// ab -= 10
// console.log(ab);

// ab *= 5
// console.log(ab);

// ab /= 4
// console.log(ab);

// ab %= 3
// console.log(ab);

// ab **= 6 // ab = ab ** 6
// console.log(ab);

//?Logical operator Logical AND (&&), Logical OR (||), Logical NOT (!)
// console.log("Logical operator");

let first = true
let second = false
let third = true

// console.log(first && second);
// console.log(first && third);
// console.log(first || second);
// console.log(first || third);
// console.log(!first);
// console.log(!second);

//?Unary operator
let val = 10

// console.log("Pre increment=", ++val);
// console.log("Post increment=", val++);
// console.log(val);
// console.log(--val);
// val++
// val--
// ++val
// console.log(val++);
// // console.log(val);
// console.log("Pre Decrement= ", --val);
// console.log("Post Decrement= ", val++);
// console.log(val);


//! Conditional/Decision Making Statements
//? simple if
// let age = 19
// if (age >= 18) {
//     console.log("You can vote");
// }

//? if..else
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can't vote");
// }

//? else..if
// let time = 190
// if (time < 12) {
//     console.log("Good morning");
// } else if (time >= 12 && time <= 16) {
//     console.log("Good afternoon");
// } else if (time >= 17 && time <= 24) {
//     console.log("Good evening");
// } else {
//     console.log("Invalid time");
// }

//? switch case
let value = 2
switch (value) {
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    case 3:
        console.log("Case 3");
        break;
    default:
        console.log("Default case");
}