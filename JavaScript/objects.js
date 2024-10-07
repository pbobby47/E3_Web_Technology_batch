// ! ==== Objects =====

// ? ====== 1. Object Literals =======
let obj = {
  name: "Sumit",
  age: 20,
  course: "Python",
  placed: true,
  rating: "*",
  47: "Rider",
  name: "Shivani",
};

console.log(obj);

// ? creation:
// ~ Syntax : objName.keyName = value;
// ~ Syntax : objName["keyName"] = value;

obj.lastName = "Saxena";
obj.married = false;
obj.kids = 4;
// obj.50 = "Hello"; // ! Error

obj["intrests"] = "chess";
obj["50"] = "Hello";

console.log(obj);

// ? Retreiving:
// To retreive the properties of an object . we have 2 ways.
// They are 1. dot notation  ,  2. bracket notation

// ~ 1. dot notation === objName.keyName
console.log(obj.name);
console.log(obj.course);
console.log(obj.placed);
console.log(obj.kids);
// console.log(obj.47); //! If there is any key as number we cannot access using dot notation.

// ~ 2. bracket notation === objName["keyName"]
// if there is any key as number we can access using bracket notation.
console.log(obj["name"]);
console.log(obj["course"]);

let placed = "kids";
console.log(obj[placed]); // placed here is gonna work as variablename. if any value is assigned into variable that will passed as value.

// ? deletion :
// var ar = [10, 20, 30];
// console.log(ar);
// delete ar[1];
// console.log(ar);

delete obj.rating;
// delete obj.50; // ! Error
delete obj["50"];

console.log(obj);

// ? ====== 2. new Object =======
console.log("====== 2. new Object =======");

let obj1 = new Object();
console.log(obj1);

obj1.ename = "Ayush";
obj1.sal = 500;
obj1.job = "counsellor";

console.log(obj1);

// creation as like above
// retreiving as like above
// deletion as like above

// ! ======= 3. constructor function ==========
console.log("======= 3. constructor function ==========");

class students {
  constructor(name, age, course) {
    // this["empName"] = name;
    //   this.empName = name;
    this.name = name;
    this.age = age;
    this.course = course;

    // console.log(this); // It will points to the current instance of an object.
  }
}

console.log(students);
// console.log(students("Hardik", 20, "Java")); //! Class constructor students cannot be invoked without 'new'

let hardik = new students("Hardik", 20, "Java");
console.log(hardik);

// hardik["skills"] = ["html", "css", "js"];
// console.log(hardik);

let Shivani = new students("Shivani", 20, "Late Comming");
console.log(Shivani);

// ! ================== methods ===================
let lovely = {
  name: "Lovely",
  age: 20,
  course: "React JS",
  skills: ["html", "css", "js"],
};
console.log(lovely);

// ! keys:
// ~ Syntax : Object.keys(objectName)
console.log(Object.keys(lovely));

// ! values:
// ~ Syntax : Object.values(objectName)
console.log(Object.values(lovely));

// ! entries:
// ~ Syntax : Object.entries(objectName)
console.log(Object.entries(lovely));

// ! hasOwnProperty:
// ~ Syntax : objectName.hasOwnProperty(keyName)
console.log(lovely.hasOwnProperty("age"));
console.log(lovely.hasOwnProperty("marks"));

// ! assign:
// ~ Syntax : Object.assign(obj1 , obj2 , obj3 , ...)
let objA = {
  name: "ayush",
  age: 20,
};

let objB = {
  course: "reactjs",
  skills: ["html", "css", "js"],
};

let objC = {
  isPlaced: false,
  name: "varun",
  address: {
    streetNo: 123,
    cityName: "Delhi",
  },
};

console.log(objA);
console.log(objB);
console.log(objC);

let mergedObject = Object.assign({}, objA, objB, objC);
console.log(mergedObject);

console.log(objA);
console.log(objB);
console.log(objC);
