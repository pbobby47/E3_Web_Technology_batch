// ! === Functions ===========
// Function is a block code to be execueted whenever we are invoked.

// ? Types of Functions:
/*
    1. Named Function:
    2. Anonymous Function:
    3. First Class Function:
    4. Functional Expression
    5. Arrow function
    6. Immediate Invokation function expression(IIFE)
    7. Higher Order Function
    8. Call Back Function
    9. Nested Function
*/

// ! Named Function:
// A Funtion declared with an identifier name is called a named function.
// ? Ex:
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, 20));

// ! Anonymous Function:
// A Funtion declared without an identifier name is called a Anonymous function.
// ? Ex:
// let add = function (a, b) {
//   return a + b;
// };
// console.log(add(10, 20));

// ! First Class Function:
// A function which is assigned as a value to a variable is called First Class Function.
// ! Functional Expression:
// An expression of storing the function into a variable. The whole expression is called functional expression.

// ! Arrow Function:
// Arrow function is an advanced function.
// It helps to reduce the code.
// ? Ex:
// let square = (a) => {
//     return a ** 2;
// }
// console.log(square);

// ? If we have only one parameter then parenthesis not required.
// let square = a => {
//   return a ** 2;
// };
// console.log(square);

// ? If we have only one return statement in a block then block not required.
// let square = a => a ** 2;
// console.log(square);

// ! Immediate Invokation function expression(IIFE):

// ? Syntax: ()();

// (
//     function (a, b) {
//         console.log(a + b);
//     }
// )
// (10,20);

// ! Higher Order Function:
// Any function which accepts another function as an argument is called HOF.
// HOF's will also return a function.
// The same function which it receives it return again.

// ! Callback Order Function:
// Any function which sends as an argument to another function is called callback function.
/*
console.log("start"); // 1

function Calculator(a, b, callback_fn) {
    return callback_fn(a, b); // 3 , 5 , 8 , 10 , 12 , 14
}

function sum(a, b) {
  return a + b; // 4
}

function sub(a, b) {
  return a - b; // 9
}

function multiply(a, b) {
  return a * b; // 13 
}

console.log(Calculator(40, 20, sum)); // 2 , 6
console.log(Calculator(40, 20, sub)); // 7 , 10
console.log(Calculator(40, 20, multiply)); // 11  , 15

console.log("end"); // 16
*/

// ! Nested Function:
/*
console.log("start"); // 1

function outer() {
  var a = 10; // 3
  var b = 20; // 4
  var c = 300; // 5

  function inner() {
    var m = 30; // 7
    var n = 40; // 8
    return a + b + m + n; // 9
  }

  return inner(); // 6 , 10
}
console.log(outer()); // 2 , 11

console.log("end"); // 12
*/

// ? Example 2:
console.log("start"); // 1

function gp() {
  var acre_g = 50; // 3

  function p() {
    var acre_p = 20; // 6

    function sumit() {
      var acre_s = -30; // 9 

      var total = acre_g + acre_p + acre_s; // 10

      return total; // 10
    }
    return sumit; // 7
  }
  return p; // 4
}
console.log(gp()()());  // 2 , 5 , 8 , 11
// Curing - is a process of invoking the nested functions along with parent functions.

console.log("end"); // 12
