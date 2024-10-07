// ! === for in , for of , forEach() ===:
var ar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(ar);

// ? For in:
// for in will iterate through the indexing.
// ~ Syntax:
// for (let variableName in collection) {
//     console.log(variableName);
// }

for (let i in ar) {
  console.log(i);
}

for (let i in [100, 200, 300, 400]) {
  console.log(i);
}

for (let i in "Shivani Listen Here") {
  console.log(i);
}

// ? For of:
// for of will iterate through the values(elements).
// ~ Syntax:
// for (let variableName of collection) {
//     console.log(variableName);
// }

for (let i of ar) {
  console.log(i);
}

for (let i of "Varun FrontEnd Dev") {
  console.log(i);
}

// ? forEach():
// It is a higher order function
// It requires a callback to execute.
// Callback have to contain 2 variables(optional), 1st variable points to values , 2nd variable points to indexes.

ar.forEach(callback_fn);

function callback_fn(val, ind) {
  console.log(val, ind);
}

console.log("=== Named Function ===");

ar.forEach(function callback_fn(val, ind) {
  console.log(val, ind);
});

console.log("== Arrow Function ====");

ar.forEach((val, ind) => console.log(val, ind));
[100, 200, 300, 400].forEach((val, ind) => console.log(val, ind));

// ! You should not use forEach() on strings.
// ! You have to use only on Arrays.
// let s = "Shivani Late Commer";
// s.forEach((val, ind) => console.log(val, ind));
// // "Shivani Late Commer".forEach((val, ind) => console.log(val, ind));
