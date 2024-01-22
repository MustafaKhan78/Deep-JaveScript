// Primitive data types are immutable
// let string = 'hello';
// string[1] = 'k';
// console.log(string);

let num = 42; // Integer
let name = "John"; // String
let isTrue = true; // Boolean
let nullValue = null; // Null
let undefinedValue; // Undefined

// non-primitive mutable
// const array = ['a','b'];
// array[1] = 'k'
// console.log(array);

let numbers = [1, 2, 3, 4, 5]; // Array of integers
let person = { name: "Alice", age: 30 }; // Object with properties

function greet(name) {
    console.log("Hello, " + name + "!");
}

let myMap = new Map(); // Map data structure
myMap.set("Name", "Mustafa");

let uniqueNumbers = new Set([1, 2, 3, 4, 5]); // Set of unique values






// const a = 1000000000000000000000000000000000000000000n;
// console.log(a); // BigInt



// let b; 
// console.log(b); //undefined 
// console.log(c); // undecleared



// let num = '10';
// num++ // Number // implicit
// Number(num) // explicit
// console.log(num);




// // NaN // an invalid Number
// const a = 'hello'
// console.log(a - 10);





// Negative Zero
// var positiveZero = 0;
// var negativeZero = -0;

// console.log(positiveZero === negativeZero); // Output: true
// console.log(1 / positiveZero); // Output: Infinity
// console.log(1 / negativeZero); // Output: -Infinity

// let zero = -0;
// console.log(zero)
// let trip_x = 0 === zero
// console.log(trip_x)
// console.log(zero.toString()); // When we convert negative numbers to string it will be remove the negtive things and return only value
// console.log(zero>0) // false
// console.log(zero<0) // false
// console.log(Object.is(zero,-0)) // -0 is equal to itself;
// console.log(Object.is(zero,0)) // false bcz -0 is not equal to 0;