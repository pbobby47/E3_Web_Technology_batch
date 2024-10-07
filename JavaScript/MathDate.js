// ! ======== Math =========
// Math is an object that allows us to perform mathematical operations.
// In math objects we will have many inbuilt properties and methods.

// !=== Math Methods ===
/*  Math methods are:
                    1. abs()
                    2. round()
                    3. floor()
                    4. ceil()
                    5. pow()
                    6. sqrt()
                    7. cbrt()
                    8. min()
                    9. max()
                    10. random()
                    11. trunc()
*/

console.log(Math);

// ? abs()
// It will convert negative numbers into positive.
console.log(Math.abs(48)); // 48
console.log(Math.abs(-48)); // 48

// ? round()
// It will round off the number to the nearest number.
console.log(Math.round(20.8)); // 21
console.log(Math.round(20.4)); // 20
console.log(Math.round(20.5)); // 21

// ? floor()
// It will round off the number to the lowest nearest number.
console.log(Math.floor(20.8)); // 20
console.log(Math.floor(20.4)); // 20

// ? ceil()
// It will round off the number to the highest nearest number.
console.log(Math.ceil(20.8)); // 21
console.log(Math.ceil(20.4)); // 21

// ? pow()
// It will return the power value of a number.
console.log(2 ** 3); // 8
console.log(Math.pow(2, 3)); // 8

// ? sqrt()
// It will return the square root value of a number.
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(24)); // 4.8
console.log(Math.sqrt(16)); // 4

// ? cbrt()
// It will return the cube root value of a number.
console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt(2)); // 1.2599210498948732

// ? min()
// It will return the minimum number of numbers.
console.log(Math.min(10, -20, 3, 5, 80, -500)); // -500

// ? max()
// It will return the maximum number of numbers.
console.log(Math.max(10, 20, 3, 5, -80, 500)); // 500

// ? random()
// It will return a number between 0 to 1.
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 100);
console.log(Math.random() * 1000);
console.log(Math.random() * 10000);

// ? trunc()
// It will remove the decimal values.
console.log(Math.trunc(50.84651)); // 50
console.log(Math.trunc(3515.51684165)); // 3515
// console.log(Math.trunc(Math.random() * 10000));
console.log(Math.trunc(Math.random() * 10000));


//! ===== Date ======
// Date is an inbuilt object.
// It allows us to access system date and time.
// We can create custom dates and times also.


// We have to create a date object by using a new keyword.


// let date = new Date();
// console.log(date); // It will return date according to system


// let date = new Date("2024 may 21, 22:45:45:4568");
// console.log(date); // It will return custom date

/*
// ? === Get Methods ===:
    getFullYear()
    getMonth()
    getDate()
    getDay()
    getTime()
    getHours()
    getMinutes()
    getSeconds()
    getMilliseconds()
*/
/*
var date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
*/
/*!
// ? === Set Methods ===
    setFullYear()
    setMonth()
    setDate()
    setHours()
    setMinutes()
    setSeconds()
    setMilliseconds()
*/

var date = new Date("2024 may 21, 22:45:45:4568");
console.log(date); // It will return custom date

date.setFullYear(2029);
date.setMonth(6);
date.setHours(12);
date.setMinutes(20);
date.setSeconds(58);
date.setMilliseconds(300);
console.log(date);
