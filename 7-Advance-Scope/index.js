// Advance scope
// lexical scope
var a = 10;
var func = function () {
    var b = 20;
    console.log("a  and b is accessible(outer):", a, b);
    var innerFunc = function () {
        var c = 30;
        console.log("a and b and c is accessible(inner)", a, b, c);
    };
    innerFunc();
    return;
};
func();
console.log("only a is a accessible (global):", a);


// IIFE (Immediate Invoked Function Expression ):
// ye globle variable ko kbhi nhi dundhega
(function () {
    console.log("hello yaseen ");
})();

// IIFE is anonymous
(function (teacher) {
    console.log("hello Mustafa");
})();


// Blocking Scoping
{
    let p = 110;
    const q = 100;
}
console.log(p); // refernce Error p is not defined
console.log(q); // refernce Error q is not defined

`scope doesn't restrict  var variable outside the block`;

{
    var a = 100;
    var b = 200;
}
console.log(a); // a =100
console.log(b); // b =200


// Choosing let or var
console.log(x); //undefined
var x = 5;
console.log(x); // 5

console.log(y);
let y = 5;
console.log(y);
// ReferenceError: Cannot access 'y' before initialization



// Const Keyword
var teacher = "suzy";
teacher = "kyle";

const myTeacher = teacher;
myTeacher = "suzm"; // getting typeerror for assign

const teachers = ["kyle", "suzi"];
teachers[1] = "braine"; // but here assigning its working

console.log(teacher);
console.log(teachers);
console.log(myTeacher);


// Hoisting
// hoisting in javascript is a behavior in which a function or a variable can be used before declaration For example

var a;
a = 5;
console.log(a);

// By using Intilazation first

// a = 8;
// var a;
// console.log(a);


// console.log(a);
// var a = 5