// let name = prompt("What is your name ?")
// console.log(name);
// alert("Warning")

// function eventHandle() {
//     console.log("Button Clicked");
// }


const button = document.getElementById("myButton")
const heading = document.getElementById("heading")

// button.onclick = () => {
//     console.log("Button Clicked..");
//     heading.style.color = "green"
//     heading.style.backgroundColor = "gray"
//     heading.style.fontSize = "20px"
// }


//! Event Object
button.onclick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
}

const input = document.getElementById("myInput")
input.onchange = (e) => {
    console.log(e.target.value);
}

//! Event Listner
const eventBtn = document.getElementById("event")

function eventList() {
    console.log("Event listner");
}
eventBtn.addEventListener("click", eventList)

// eventBtn.addEventListener("dblclick", () => {
//     console.log("Button Clicked");
//     console.log("Add event listner");
// })

setTimeout(() => {
    eventBtn.removeEventListener("click", eventList)
    console.log("Event listner removed");

}, 3000)