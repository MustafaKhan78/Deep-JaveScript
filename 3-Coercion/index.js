// Implict Coercion

let a = '20';
a = a + 1; 
console.log(a) // 201
a++ // increment using postFix Position. It will converted data type string to number.
console.log(a) // 202 


// Explict Coercion
const num2 = '20';

const val = Number(num2);

console.log(val);

