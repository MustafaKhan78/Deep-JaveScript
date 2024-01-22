// Global Scope
let New = 'Mustafa';
console.log(New);



// Module Scope ye import export ke doran hota hai

// Function Scope
function hey() {
    console.log("Hey Mustafa");
}

function exampleFunction2() {
    if (true) {
        var localVarInBlock = "I am a local variable inside a block";
        console.log(localVarInBlock);
    }

    console.log(localVarInBlock);
}

exampleFunction2();
// Outputs:
// "I am a local variable inside a block"
// "I am a local variable inside a block"

function exampleFunction1() {
    var localVar = "I am a local variable";
    console.log(localVar);
}

exampleFunction1(); // Outputs: "I am a local variable"


// Block Scope
{
    const New2 = "Hello Mustafa"
    console.log(New2);
}

const PI = 3.14;

if (true) {
    const radius = 5;
    const area = PI * radius * radius;
    console.log("Area inside block:", area);
}
// Area inside block 78.5

if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar);
}
// I am a block-scoped variable


// Lexical Scope
hello()
function hello() {
    console.log("Hello From Function 2");
}

function outerFunction() {
    let outerVar = "I am from outer function";
  
    function innerFunction() {
      console.log(outerVar);
    }
  
    innerFunction(); // "I am from outer function" ko print karega
  }
  
  outerFunction();
  
  
  function closureExample() {
    let outerVar = "I am from outer function";
  
    function innerFunction() {
      console.log(outerVar);
    }
  
    return innerFunction;
  }
  
  const closure = closureExample();
  closure(); // "I am from outer function" ko print karega

function lexicalBlockScope() {
    if (true) {
      let blockVar = "I am from block scope";
      console.log(blockVar);
    }
  
    // console.log(blockVar); // Error! blockVar is not defined
  }
  
  lexicalBlockScope(); // "I am from block scope" ko print karega