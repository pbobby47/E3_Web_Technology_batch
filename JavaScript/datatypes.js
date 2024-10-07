console.log("=== Datatypes ===");
// ? String
var sname = "Hardik";
console.log(sname);
console.log(typeof (sname));

// ? Number
var serialNo = 420;
console.log(serialNo);
console.log(typeof (serialNo));

// ? Boolean
var isPlaced = false;
console.log(isPlaced);
console.log(typeof (isPlaced));

// ? undefined
var isMarried;
console.log(isMarried);
console.log(typeof (isMarried));

// ? null
var wife = null;
console.log(wife);
console.log(typeof (wife)); // ! object

// ? object
var student1 = {
    sname: "hardik",
    course: "Java FS",
    rating: "*",
    no_of_interviews_attended:2    
}

console.log(student1);
console.log(typeof (student1)); // ! object

// ? array
var ar = [10, 20, "hello", "hii", true, undefined, "Nickky"];
console.log(ar);
console.log(typeof (ar)); // ! object

// ? function
function sum(a, b) {
    return a + b;
}
console.log(sum);
console.log(sum(10, 20));
console.log(typeof (sum));

// ? Math
console.log(Math);

// ? Date
console.log(new Date());