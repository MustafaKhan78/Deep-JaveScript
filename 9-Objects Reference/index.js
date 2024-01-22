// Implicit Binding:
// var person = {
//     name: 'John',
//     age: 120,
//     sayHello: function () {
//         console.log('Hello, ' + this.age + '!');
//     }
// };
// person.sayHello(); // Yahan 'this' person object ko refer karega.


// Explicit Binding:
// function sayHello() {
//     console.log('Hello, ' + this.name + '!');
// }

// var person1 = {
//     name: 'John'
// };

// var person2 = {
//     name: 'Alice'
// };

// // Explicit binding using call
// sayHello.call(person1); // 'this' ko person1 se bind kiya gaya hai.

// // Explicit binding using apply
// sayHello.apply(person2); // 'this' ko person2 se bind kiya gaya hai.

// // Explicit binding using bind
// var greetJohn = sayHello.bind(person1);
// greetJohn(); // 'this' ko person1 se bind kiya gaya hai.




// Class expression
// var Rectangle = class {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     calculateArea() {
//         return this.width * this.height;
//     }
// };

// // Object creation using the class
// var rectangleObject = new Rectangle(5, 10);

// // Accessing class methods and properties
// console.log(rectangleObject.calculateArea()); // Output: 50
// console.log(rectangleObject.width); // Output: 5


// Class expression anonymous
// var Circle = class {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     calculateArea() {
//         return Math.PI * this.radius * this.radius;
//     }
// };

// var circleObject = new Circle(7);
// console.log(circleObject.calculateArea()); // Output: Approximately 153.93804002589985
