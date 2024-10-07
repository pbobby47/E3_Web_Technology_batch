// ! =========== Filter , Map , Reduce ===========
// ? Filter:
// It is used to iterate through an array of elements which is gone check the condition.
// It will not effect the original array.
// It will create a new array.

// ? Map:
// It is used to iterate thorugh an array of elements which is gone update the elements.
// It will not effect the original array.
// It will create a new array.

var marks = [30, 56, 78, 12, 96, 45, 27];

// ? Normal:
var filteredArray = [];
for (let i of marks) {
  // console.log(i);
  if (i >= 35) {
    // console.log(i);
    filteredArray.push(i);
  }
}
console.log(filteredArray);

// ? Filter:
// Returns the elements of an array that meet the condition specified in a callback function.
// Case 1 :
console.log(marks.filter(check_condition));

function check_condition(i) {
  return i >= 35;
}

// Case 2 :
console.log(
  marks.filter(function check_condition(i) {
    return i >= 35;
  })
);

// Case 3 :
console.log(marks.filter(i => i >= 35));
// console.log(marks);

// ? Normal:
var salaries = [500, 600, 700, 450, 123, 750, 960, 480];

var new_salaries = [];
for (let i of salaries) {
  new_salaries.push(i + 50);
}
console.log(new_salaries);

// ? Map():
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// case 1:
console.log(salaries.map(updateSalaries));

function updateSalaries(i) {
  return i + 50;
}

// case 2:
console.log(
  salaries.map(function updateSalaries(i) {
    return i + 50;
  })
);

// case 3:
console.log(salaries.map(i => i + 50));

// ? Normal:
var marks = [30, 56, 78, 12, 96, 45, 27];
console.log(marks);

let sum = 0;

for (let i of marks) {
  sum += i;
}
console.log(sum);

// ? Reduce():
// The reduce method calls the callbackfn function one time for each element in the array.
// If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

// case 1:
console.log(marks.reduce(getTotalMarks, 0));

function getTotalMarks(sum, i) {
//   console.log(sum);
  return sum + i;
}

// case 2 :
console.log(
  marks.reduce(function getTotalMarks(sum, i) {
    // console.log(sum);
    return sum + i;
  }, 0)
);

// case 3 :
console.log(marks.reduce((sum, i) => sum + i, 0));
