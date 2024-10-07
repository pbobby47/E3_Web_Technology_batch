// ! String:
// It is a collection of characters which are enclosed in single quotes (' ')/ double quotes(" ") / back ticks (` `).

var s = "JavaScript - 1";

var s = "JavaScript - 2";

var s = `JavaScript - 3`;
console.log(s);
console.log(typeof s);

var s = "It's a javascript class";
console.log(s);

var s = `Welcome to "JavaScript" Class`;
console.log(s);

var s = "Hello maa`m";
console.log(s);

// ! String Interpolation:
// `......${variableName}....`;

var sname = "Meenal";
var course = "Python Full Stack";

var s = "Hello ${sname}, Thankyou for opting for ${course}"; // ! Not work
var s = "Hello ${sname}, Thankyou for opting for ${course}"; // ! Not work
var s = `Hello ${sname}, Thankyou for opting for ${course}`;
console.log(s);

// ! length (property):
var s = "JavaScript";
console.log(s);
// console.log(s.length()); // ! Error
console.log(s.length);

// ! =============== String Methods ================
// ? 1. toLowerCase():
var s = "JavaScript";
console.log(s);
console.log(s.toLowerCase());

// ? 2. toUpperCase():
var s = "JavaScript";
console.log(s);
console.log(s.toUpperCase());

// ? 3. trimStart():
var s = "          JavaScript         ";
console.log(s);
console.log(s.length);
console.log(s.trimStart());
console.log(s.trimStart().length);

// ? 4. trimEnd():
var s = "          JavaScript         ";
console.log(s);
console.log(s.length);
console.log(s.trimEnd());
console.log(s.trimEnd().length);

// ? 5. trim():
var s = "          JavaScript         ";
console.log(s);
console.log(s.length);
console.log(s.trim());
console.log(s.trim().length);

// ? 6. toString():
var n = 10;
console.log(n);
console.log(typeof n);

var s = n.toString();
console.log(s);
console.log(typeof s);

// ? 7. replace():
var s =
  "something is happening because of something happened in the past , so don't do that something this something will not happen again...";

console.log(s);
console.log(s.replace("something", "nothing"));

// ? 8. replaceAll():
var s =
  "something is happening because of something happened in the past , so don't do that something this something will not happen again...";

console.log(s);
console.log(s.replaceAll("something", "nothing"));

// ? 9. substr():
// variableName.substr(si , length);

var s = "I Love JavaScript";
console.log(s);
console.log(s.substr(7, 10));
console.log(s.substr(2, 4));

// ? 9. subString():
// variableName.subString(si , ei);

var s = "I Love JavaScript";
console.log(s);
console.log(s.substring(7, 17));
console.log(s.substring(2, 6));

// ? 9. slice():
// variableName.slice(si , ei);

var s = "I Love JavaScript";
console.log(s);
console.log(s.slice(7, 17));
console.log(s.slice(2, 6));

// ? 10. concact:
// firstvariableName.concat( secondvariableName , thirdvariableName ,....);
var s1 = "Tata";
var s2 = "Consultancy";
var s3 = "Services";

console.log(s1 + " " + s2 + " " + s3);
console.log(s1, s2, s3);
var s = s1.concat(" ", s2, " ", s3);
console.log(s);

// ? 11. split:
var s = "I Love JavaScript";
console.log(s);
console.log(s.split());
console.log(s.split(""));
console.log(s.split(" "));

var s = "I#Love#JavaScript";
console.log(s);
console.log(s.split("#"));

var s = "I%Love%JavaScript";
console.log(s);
console.log(s.split("%"));

// ? 12. indexOf():
// variableName.indexOf(char); // index position
var s = "JavaScript";
console.log(s);
console.log(s.indexOf("a"));
console.log(s.indexOf("S"));

// ? 13. lastIndexOf():
// variableName.lastIndexOf(char); // index position
var s = "JavaScript";
console.log(s);
console.log(s.lastIndexOf("a"));
console.log(s.lastIndexOf("S"));
console.log(s.lastIndexOf("s"));

// ? 14. includes():
// variableName.includes(char); // boolean
var s = "JavaScript";
console.log(s);
console.log(s.includes("a"));
console.log(s.includes("m"));
console.log(s.includes("S"));
console.log(s.includes("s"));

// ? 15 . charAt():
// variableName.charAt(indexPosition); // chars
var s = "JavaScript";
console.log(s);
console.log(s.charAt(1));
console.log(s.charAt(4));
console.log(s.charAt(8));
console.log(s.charAt(15));

// ? 15 . charCodeAt():
// variableName.charCodeAt(indexPosition); // char's ASCII value
var s = "JavaScript";
console.log(s);
console.log(s.charCodeAt(1)); // 97
console.log(s.charCodeAt(4));
console.log(s.charCodeAt(8));

// ? 16. String.fromCharCode():
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(75)); // K
