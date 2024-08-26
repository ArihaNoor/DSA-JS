const myArr = [0,2,3,4,44,8, "true", "Ariha"]

// console.log(myArr[2])

const myArr2 = new Array(1,2,33,4)



// Array is not only of a single type like in other programming languages 
// we can add any type of data in the array 

// -----------Associative Arrayy---------
// In javascript we don't have associative  
// Associative array is like objects like we have key and value 

//---------Zero based Indexing-----------

// Shallow Copy and Deep Copy 
//Shallow copy share same reference point change in original 
//Deep copy change in copy not in original --- properties do not share the same reference 

// Array Methods

//push 
//pop
//shift
//unshift
//toString
//includes
// indexOf
//join -- adds all the elements to a string
//Slice-- returns section of an array it does not effect the original array
//splice-- it removes the array elements from an original array 

//--------Spread Operator---------
const arr = ["Ariha", 1,2,3,4]

// console.log(...arr)


//------------Flat Method---------------
// let suppose we have an array inside array like nested arrays than we can make this into one array 

const newArray = [1,2,3,4,[1,2,3,4,[1,2,3,4,4]]]

// console.log(newArray.flat(Infinity))


//-----------Array from--------

const newArr = Array.from("Ariha")

// console.log(newArr)



