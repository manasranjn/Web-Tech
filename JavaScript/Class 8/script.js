const button = document.getElementById("myButton")
const button2 = document.getElementsByClassName("btn")
// button.innerText = "Click Here"
// console.log(button);
// console.log(button2);

const paragraph = document.getElementsByClassName("para")
// console.log(paragraph);
// paragraph[0].innerText = "This is a paragraph"

// for (let item of paragraph) {
//     item.innerText = "Hello"
// }

// Array.from(paragraph).forEach(para => {
//     console.log(para);
//     para.innerText = "This is a paragraph"
// });

// Array.from(paragraph).map((item) => {
//     console.log(item);
//     item.innerText = "Map method"
//     item.style.color = "red"
//     item.style.fontSize = "30px"
// })

//! Attribute Manipulation
//? getAttribute()
// const btn = document.querySelector(".btn")
// let btnAttribute = btn.getAttribute("class")
// console.log(btnAttribute);

const anchor = document.getElementById("myLink")
// console.log(anchor.getAttribute("href"));

//? setAttribute()
// btn.setAttribute("id", "buttonId")
// console.log(btn);
// btn.setAttribute("class", "btn btn2 btn3 btn4")
// console.log(btn);

//! Insert Element
let heading = document.createElement("h1")
console.log(heading);
heading.innerText = "This is a heading"
const box = document.querySelector(".box")

// box.append(heading)
// box.prepend(heading)
// box.before(heading)
// box.after(heading)

//! Delete Element
const para = document.getElementById("para")
// para.remove()

//! Event 
