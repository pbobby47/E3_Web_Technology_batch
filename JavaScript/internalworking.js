// console.log("start");

// var a = 10;
// console.log(a);

// var b = 20;
// console.log(b);

// var c = 30;
// console.log(c);

// console.log("end");

// ! ================ Hoisting ===================
// It is a process of accesing the variables before intilization and The variable should be decalared with VAR.

// console.log("start");
// console.log(data);

// var data = "This is the main data";

// console.log(data);
// console.log("end");

// ! ==================
// ! SCOPES:
/*
    Scope is the visibility of a variable.
    1. Global Scope
        Any varible declared with var comes under global scope.
        Global Variables will initiaze with undefined.
        So, we can access the variables before its actual initization.
        this process is called hoisting.

    2. Script Scope
        Any variable declared with let / const comes under script scope.
        let / const belongs to ES6+ features.
        so let and const will not intialize with any value.
        So, we cannot access before its actual initization.
        this process is called temporal dead zone.

    3. Local Scope
        Any varible declared with var/let/const inside any function comes under local scope.
*/

console.log("start");
console.log(a);
let a = 10;
console.log(a);

console.log(b);
const b = 20;
console.log(b);

console.log(c);
let c = 30;
console.log(c);
console.log("end");
