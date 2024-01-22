// Closure
function mulFn() {
    var mul = 9;
    return function (val) {
        mul = mul * val;
        return mul;
    };
}

var mul = mulfn();
console.log(mul); // function anonymous
console.log(mul(13));


// Module Pattern
// function EmployeeDetails() {
//     var name = "Mayank";
//     var age = 30;
//     var designation = "Developer";
//     var salary = "50000";

//     return {
//         name: name,
//         age: age,
//         designation: designation,
//     };
// }

// var newEmployee = EmployeeDetails();

// var userName = newEmployee.name;
// var userAge = newEmployee.age;
// var userDesignation = newEmployee.designation;
// var usersalary = newEmployee.salary;

// console.log(userName);
// console.log(userAge);
// console.log(userDesignation);
// console.log(newEmployee);
// console.log(usersalary);