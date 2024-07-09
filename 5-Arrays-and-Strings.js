//--Strings--
//Strings can be quoted in single quotes as well as double quotes -> " " OR ' '

//-- String Concatenation --

let name = "ariha Noor";
let age = 21;

//using backticks we doing string interpolation.
console.log(`${name} is ${age} years old.`)

console.log(`${name[0]}, ${name[1]}, ${name[2]}`)

// String Methods
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.indexOf('a')); //it will return first occurence of the character starting position from 0 index
const substr = name.substring(0,3); //this is exclusive range, will not include 4th character
console.log(substr);

const newStr = name.slice(-3); //this will start substring from end, last index, we can also give -ve value to the slice method
console.log(newStr);

console.log(name.length);

let string = "     hello     "
console.log(string);
console.log(string.trim()); //it will remove starting and ending extra spaces

