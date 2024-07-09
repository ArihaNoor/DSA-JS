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
console.log(name.lastIndexOf('a')) //it will return last occurence
const substr = name.substring(0,3); //this is exclusive range, will not include 4th character
console.log(substr);

const newStr = name.slice(-3); //this will start substring from end, last index, we can also give -ve value to the slice method
console.log(newStr);

console.log(name.length);

let string = "     hello     "
console.log(string);
console.log(string.trim()); //it will remove starting and ending extra spaces

console.log(string.replace(" ","h"))
console.log(string.replaceAll(" ","h"))

console.log(name.includes('ariha'));

console.log(name.split(" "))

console.log(name.charCodeAt(2)) //return ASCII code of character at given index

let str = "Hello World";
console.log(str.valueOf()); // returns value of string

console.log(str.startsWith('0'));

console.log(str.localeCompare(newStr))



