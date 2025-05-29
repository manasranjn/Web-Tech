const square = (a) => {
    return a ** 2
}
// console.log(square(2));

const printName = (name) => {
    console.log(`Hello ${name}`);
}
// printName("Manas")


let marks = [90, 80, 65, 85, 60, 40, 80, 75]
let newMark = marks.forEach((mark) => {
    // console.log(mark);
    return mark
})
// console.log(newMark);

//! map()
let newArr = marks.map((mark, index) => {
    // console.log(mark);
    // console.log(index);
    return mark - 10
})
// console.log(newArr);

//! filter()
// let filtered = marks.map((mark) => {
//     if (mark > 75) {
//         return mark
//     }
// })
// console.log(filtered); //Wrong

let filteredMark = marks.filter((mark) => {
    return mark > 75
})
// console.log(filteredMark);

//! reduce()
const totalMark = marks.reduce((sum, mark) => sum += mark, 0)
// console.log(totalMark);

// console.log(2 * false);
