// Prototype
// In javascript, every function and object has a property named prototype by default.
function person() {
    this.name = "yaseen",
        this.age = 23
}
//Creating objects
const person1 = new person();
const person2 = new person();

console.log(person);

// Protypal class
// function Workshop(teacher) {
//     this.teacher = teacher;
// }
// Workshop.prototype.ask = function (question) {
//     console.log(this.teacher, question);
// };

// var deepjs = new Workshop("kyle");
// var reactjs = new Workshop("suzy");

// deepjs.ask("Is 'prototype' a class?");

// reactjs.ask("isn't 'protoype' ugly?");

// Prototype Chain
// const myObject = {
//     city: "Madrid",
//     greet() {
//         console.log(`Greetings from ${this.city}`);
//     },
// };

// myObject.greet(); // Greetings from Madrid


// Dunder Prototypes
// function workshop(teacher) {
//     this.teacher = teacher;
// }
// workshop.prototype.ask = function (question) {
//     console.log(this.teacher, question);
// };

// var deepjs = new workshop("kyle");
// deepjs.constructor === workshop;
// deepjs.__proto__ === workshop.prototype;
// Object.getPrototypeOf(deepjs) === workshop.prototype;

// deepjs.ask("what's up")


// Shadowing Prototype
function workshop(teacher) {
    this.teacher = teacher;
}
workshop.prototype.ask = function (question) {
    console.log(this.teacher, question);
};
var deepJs = new workshop("simp");

deepJs.ask = function (question) {
    this.__proto__.ask.call(this, question.toUpperCase());
};
deepJs.ask("Is this fake polymorphism?");