// ! Case 1:
// var anish = {
//   fname: "Anish",
//   lname: "sethi",
//   age: 20,
//   course: "Python",

//   printName: function () {
//     return `Hello , how are you ${this.fname} ${this.lname}`;
//   },
// };

// console.log(anish);
// console.log(anish.printName);
// console.log(anish.printName());

// let sambit = {
//   fname: "Smabit",
//   lname: "padhihari",
//   age: 20,
//   course: "java",
// };
// console.log(sambit);

// console.log(anish.printName.call(sambit));
// console.log(anish.printName.apply(sambit));
// console.log(anish.printName.bind(sambit)());

// ! Case 2:
var anish = {
  fname: "Anish",
  lname: "sethi",
  age: 20,
  course: "Python",

  printName: function (branch, location) {
    return `Hello , how are you ${this.fname} ${this.lname} , you opted for ${this.course} in this ${branch} in location of ${location}`;
  },
};

console.log(anish);
console.log(anish.printName);
console.log(anish.printName("Pyspiders", "Delhi"));

let sambit = {
  fname: "Smabit",
  lname: "padhihari",
  age: 20,
  course: "java",
};
console.log(sambit);

// console.log(anish.printName.call(sambit , arg1 , arg2 ,...));
// console.log(anish.printName.apply(sambit , [arg1 , arg2 ,...]));
// console.log(anish.printName.bind(sambit , arg1 , arg2 ,...)());

console.log(anish.printName.call(sambit, "Pyspders", "Noida"));
console.log(anish.printName.apply(sambit, ["Pyspiders", "Gurugram"]));
console.log(anish.printName.bind(sambit, "Pyspders", "Noida")());

// ? Call:
// It is used to borrow the functions into the objects.
// arguments should sepaeated by comma.
// It will invoke automatically.

// ? Apply:
// It is used to borrow the functions into the objects.
// arguments should separated by comma in an array.
// It will invoke automatically.

// ? Bind:
// It is used to borrow the functions into the objects.
// arguments should separated by comma.
// It will not invoke automatically.

// ! Case 3 :

function joiningInfo(date, month, year) {
  return `
        Hii ${this.sname}, thank you for opting ${this.course} course in ${this.branch} in ${this.location} ,
        now you can continue classes from ${date} ${month} ${year} , All the best... ${this.sname}
    `;
}

let swati = {
  sname: "swati",
  course: "Java",
  branch: "JSpiders",
  location: "Delhi",
};

let shivani = {
  sname: "shivani",
  course: "Python",
  branch: "PySpiders",
  location: "Noida",
};

let chirag = {
  sname: "chirag",
  course: "Manual",
  branch: "QSpiders",
  location: "Delhi",
};

console.log(joiningInfo.call(swati, 15, "Oct", 2024));
console.log(joiningInfo.call(shivani, 14, "Nov", 2025));
console.log(joiningInfo.call(chirag, 31, "Feb", 2026));

console.log(joiningInfo.apply(swati, [15, "Oct", 2024]));
console.log(joiningInfo.apply(shivani, [14, "Nov", 2025]));
console.log(joiningInfo.apply(chirag, [31, "Feb", 2026]));

console.log(joiningInfo.bind(swati, 15, "Oct", 2024)());
console.log(joiningInfo.bind(shivani, 14, "Nov", 2025)());
console.log(joiningInfo.bind(chirag, 31, "Feb", 2026)());


// ! Math:
console.log(Math);


// ! Date: