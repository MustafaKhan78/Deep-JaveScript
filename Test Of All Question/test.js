// Question 1
// let a = {
//     name: "hello",
// };

// let b = {
//     name: "hello",
// };

// console.log(a == b); // false
// console.log(a === b); // false

// // Question 2
// var x = 40;
// console.log(x); // 40
// x++; // 40
// console.log(x); // 41
// ++x; // 42
// console.log(x); // 42

// // Question 3
// x = "40";
// y = x + 1;
// console.log(y); // 401
// y++
// y = x -= 1;
// z = x + 1 - y
// console.log(y); // 39
// console.log(z);

// Question 4

// There are 2 types
// 1. Primitive  2. Non Primitive
// Primitives
// String, Number, Boolean , Bigint, Symbol , Null, Undefined
// Non Primitives
// Array, Object, Function, Classs;

// let x = 0;
// console.log(null == x); // false

// let x = [];
// console.log(Array.isArray(x)); // true

// function fn() { }
// console.log(typeof fn); // function

// var x;
// console.log(x);
// x = 5; // undefined

// let x = [];
// let y = x;
// let z = [];
// console.log(x == y); // true
// console.log(x == z); // false
// console.log(y == z); // fasle

// console.log(x === y); // true
// console.log(x === z); // false
// console.log(y === z); // false
// x.push(5);
// console.log(x); // 5
// console.log(y); // 5
// console.log(z); // []

// console.log(Object.is(-0, 0)); // false

// const str = "a";
// console.log(+str); // NaN
// console.log(Number(str)); // NaN
// console.log(parseInt(str)); // NaN
// console.log(parseFloat(str)); // NaN

// console.log(1 < 2); // true
// console.log(2 < 3); // true
// console.log(1 < 2 < 3); // true 
// console.log(3 > 2 > 1); // true

// console.log(10 === 10); // true
// console.log([] == true); // false

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(try2 == 10);
// let try2  = 10 // reference error;



// const str = '1';
// console.log(+str - 1) // 0
// var obj1 = {
//     name: 'kyle'
// }
// var obj = obj1
// console.log(obj == obj1) // true

// // ||(Or) operator finds the truty value first;
// // && (And) operator finds the falsey value first;

// console.log([1] == true) // true
// console.log([''] == true) // false
// console.log(0 === -0) // false
// console.log(String(0) == Number.parseFloat(-0)) // true

// console.log(1 || 0 || false); // 1
// console.log(2 || 3 || 4); // 2
// console.log(0 && false && true); // 0

// const num = 10;
// const strnum = String(num);
// const boolnum = !num;
// const boolNum2 = Boolean(num)
// console.log(boolNum2);
// console.log(boolnum);
// const strbool = Boolean(strnum)
// const numval = strnum - boolnum

// const string = "b" + 'a' + "n" + +'a' + 'n';
// console.log(string); 
// var num = 10.3;

// const strNum = String(num); // '10.3'
// const boolenNum = Boolean(num) // true
// const numberNum = Number(strNum) // 10.3
// const boolenNum2 = Number(boolenNum) // 1
// const toNull = Number(null); // 0
// const toUndefined = Number(undefined); // 0
// console.log(toUndefined);
// const nestedArr = Number([[[[]]]]); // 0
// const nullToBoolean = Boolean(null) // false
// console.log(nullToBoolean);
// const undefinedToBoolean = Boolean(undefined) // false
// console.log(undefinedToBoolean);

console.log(true == []); 
console.log(true == ![]);
console.log(false == []); 
console.log(false == ![]);
