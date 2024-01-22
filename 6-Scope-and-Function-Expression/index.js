// Function Expression
// Syntax for function Decalartion:-
function declaration() {
    console.log("hello declartion");
}


// Syntax for function Expression(anonymous):-
let variableName = function (x, y) {
    console.log("No name");
};

// Syntax for function Expression (named):-
let variablename2 = function functionName(x, y) {
    console.log("Named function");
};

declaration()
variableName()
variablename2()



// Arrow function
var arrowfunction = (a, b) => a * b;
console.log(arrowfunction(2, 4));