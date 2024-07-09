//Associative arrays are not available in JS

// Shallow Copy and Deep Copy 
//--Shallow Copy-- shares the same referene point if we change in the copy will be changed automatically to the original 
//--Deep Copy-- does not shares the same reference point if we change in the copy it will not changed in the original 

// JS uses Shallow copy concept

const Arr = [0,1,2,3,4,5]
const names = ["Ariha", "Noor"]

console.log(Arr[1]);

//Array Methods 

Arr.push(9);
// console.log(Arr);

Arr.pop()
// console.log(Arr);

Arr.unshift(0);
// console.log(Arr);

Arr.shift();
// console.log(Arr);

console.log(Arr.includes(3));
console.log(Arr.indexOf(3));

console.log(Arr.join("-"))

//Array 

const Array1 = [1,2,3,4,5,6]
console.log("A",Array1)

console.log("B", Array1)
console.log(Array1.slice(2,7)) //it will not change the original array

console.log("C", Array1)
console.log(Array1.splice(2,7)) //it will change the original array
console.log("C", Array1)

//Concat VS Spread Operators 

const Heroes = ["A", "B", "C"];
const M_Heroes = ["D", "E", "F"]

const newHeroes = Heroes.concat(M_Heroes);
console.log(newHeroes);

const New_Heroes = [...Heroes, ...M_Heroes]
console.log(New_Heroes)

//Both do the same work but spread operator can take many values but concat only 1

const number = "12334343";
// Array -- isArray, from, of
console.log(Array.isArray(Heroes));
console.log(Array.from(number));
console.log(Array.of(number, Heroes)); //whatever variables we give it will make an array by combining these variables 