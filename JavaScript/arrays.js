// ! === Array ===
/*
    An Array is a collection of homogeneous or heterogeneous datatypes.
    Array helps to store multiple values into a  single variable.
*/

// ! == Creation ==
// ? 1. Literals:
var ar = [10, 20, 30, 40, 50]; // homogeneous
console.log(ar);

var ar = ["Mohit", 20, "PFS", true, undefined, null]; // Heterogeneous
console.log(ar);

// ? 2. new Keyword:
var ar = new Array(); // we allocating space for array.
console.log(ar);

var ar = new Array(10, 20, 30, true, undefined);
console.log(ar);

var ar = new Array(10, 20, 30);
console.log(ar);

var ar = new Array(10); // If we pass only one array element it will consider as length of an array.
console.log(ar);

// ! ===== Insertion ====
var ar = [];
console.log(ar);

ar[0] = "Lovely";
ar[1] = "Meenal";
ar[2] = "Shivani";
ar[5] = "Anish";

console.log(ar);

// ! ===== Modification =====
console.log(ar);

ar[2] = "Late Commer Shivani";
ar[5] = "Anish vs Varun";
console.log(ar);

// ! ===== deletion ======
delete ar[1];
delete ar[2];
console.log(ar);

// ! =============== Array Methods =====================
var ar = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(ar);

// ? 1. pop():
// It is used to remove the last element in an array.
// Syntax: variableName.pop();
ar.pop();
console.log(ar);

// ? 2. push():
// It is used to add the element at last index in an array.
// Syntax: variableName.push(element);
// add - nth
ar.push(800);
console.log(ar);

// ? 3. shift():
// remove - 0th
ar.shift();
console.log(ar);

// ? 4. unshift():
// add - 0th
ar.unshift(100);
console.log(ar);

// ? 5. Array.isArray():
console.log(ar);
console.log(typeof ar);
console.log(Array.isArray(ar));

// ? 6. slice():
// It used to extract  the sub array of an array.
// It will not modify the original array.
// Syntax: variableName.slice(SI , EI);

console.log(ar.slice(2, 4));

// ? 7. Splice():
// It used to modify the original array.
// syntax: variableName.splice(SI , no.of elements to delete , Elmenents to add);
var ar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(ar);

// ar.splice(2, 3, 300, 400, 500);
// ar.splice(1, 4);
ar.splice(1, 4, 400);

console.log(ar);

var ar = ["Lovely", "Meenal", "Himanshu", "Sambit", "ayush", "shivani"];
console.log(ar);

// ar.splice(1, 3, "senior Developer");
// ar.splice(3, 0, "Mohit" ,"Tejaswi");
ar.splice(4, 0, "Mohit");

console.log(ar);

// ? join():
var ar = ["Hardik", "Love", "Sunny_Leone"];
console.log(ar);
console.log(ar.toString());
console.log(ar.toString("&*")); // ! WRONG
console.log(ar.join());
console.log(ar.join(""));
console.log(ar.join(" "));
console.log(ar.join("$"));
console.log(ar.join("&*()"));
console.log(ar.join("#"));

// ? concat():
// firstVariablName.concat(second , third , ....);

var ar1 = ["Hardik"];
var ar2 = ["Loves"];
var ar3 = ["Sunny Leone"];
var mergedArray = ar1.concat(ar2, ar3);
console.log(mergedArray);

// ? reverse():
var ar = [10, 20, 30, 40, 50];
console.log(ar);
console.log(ar.reverse());

var ar = ["One", "TWO", "Three", "Four", "five"];
console.log(ar);
console.log(ar.reverse());

// ? indexOf():
var ar = [10, 20, 30, 40, 50, 60, 40, 70, 80, 70, 40];
console.log(ar);
console.log(ar.indexOf(40));

// ? lastIndexOf():
console.log(ar.lastIndexOf(40));

// ? includes():
console.log(ar.includes(50));
console.log(ar.includes(500));

// ? sort():
var ar = [ "Meenal", "Swati", "Himanshu",  "Varun","Anish", "Tejashvi", "Nikky", "Ayush"];
console.log(ar);
console.log(ar.sort());

var ar = [10, 20, 150, 1000, 3, 70, 60, 750, 83, 670];
console.log(ar);
console.log(ar.sort()); // 3 , 10 , 20 , 60 , 70 , 150 , 1000.
// sort will consider all the elements as strings.
// If we want to perform based on numbers we have to use comaparision function.

console.log(ar.sort(comparsion_fn));
function comparsion_fn(a, b) {
  return a - b;
}

console.log(ar.sort(comparsion_fn2));
function comparsion_fn2(a, b) {
  return b - a;
}

console.log(ar.sort((a, b) => a - b));
console.log(ar.sort((a, b) => b - a));
