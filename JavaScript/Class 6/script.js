// console.log(window);
// console.log(document);

//! DOM Selection Methods
//? getElementById()
const headingElement = document.getElementById("heading")
// console.log(headingElement);

//? getElementsByClassName()
const headEle = document.getElementsByClassName("head")
// console.log(headEle);

//? getElementsByTagName()
const tagSelect = document.getElementsByTagName("p")
// console.log(tagSelect);

//? getElementsByName()
const element = document.getElementsByName("name")
// console.log(element);

//? querySelector()
const idElement = document.querySelector("#heading")
// console.log(idElement);
const classElement = document.querySelector(".head")
// console.log(classElement);

//? querySelectorAll()
const classElements = document.querySelectorAll(".head")
// console.log(classElements);

const idElements = document.querySelectorAll("#heading")
// console.log(idElements);

const tagElements = document.querySelectorAll("p")
// console.log(tagElements);