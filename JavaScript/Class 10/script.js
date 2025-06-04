// const input = document.getElementById("input")
// const button = document.getElementById("mybutton")
// const output = document.getElementById("output")

// button.onclick = () => {
//     inputValue = input.value
//     output.innerText = inputValue
// }

// const hoverBtn = document.getElementById("hover")
// hoverBtn.addEventListener("mouseenter", () => {
//     console.log("Mouse hovered");
// })

// const container = document.getElementById("container")
// const toggleButton = document.getElementById("toggleButton")

// toggleButton.addEventListener("click", () => {
//     // container.style.backgroundColor = "black"
//     // if (container.style.backgroundColor === "white") {
//     //     container.style.backgroundColor = "black"
//     // }
//     container.style.backgroundColor = container.style.backgroundColor === "white" ? "black" : "white"
// })


const animal = {
    makeSound: function () {
        console.log("Some generic sound...");
    },
};
// animal.makeSound()
const dog = {
    __proto__: animal, // Inheriting from 'animal'
    makeSound: function () {
        console.log("Bark! Bark!");
    },
};
// dog.makeSound()


const person = {
    greet: function () {
        console.log("Hello!");
    },
};

const student = Object.create(person); // student inherits from person
student.study = function () {
    console.log("Studying...");
};

// person.greet()
// student.greet()
// student.study()

//! Class and Constructor
class Example {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log(`My name is ${this.name}, age is ${this.age}`);
    }

    printHello() {
        console.log("Hello everyone");
    }
}

const obj1 = new Example("Tejash", 20)
// obj1.sayHello()
// obj1.printHello()

//! Inheritance
class Parent {
    sayHello() {
        console.log("Parent Class");

    }
}
class Child extends Parent {
    greet() {
        console.log("Hello everyone");
    }
    sayHello() {
        console.log("Child Class");

    }
}

const childObj = new Child()
childObj.greet()
childObj.sayHello()