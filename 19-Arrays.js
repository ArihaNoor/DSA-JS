// int array = [1,3,4,5,8]

// const myArr = [0,2, "true", "Ariha"]


const Person = [
    {
        name: "Ariha",
        age: 21   
    },
    {
        name: "Ariha",
        age: 21   
    },
    {
        name: "Ariha",
        age: 21   
    }
]




// Person.forEach((person)=>{console.log(person)})


// for(let i=0;i<myArr.length;i++){
//     console.log(myArr[i])
// }




// console.log(myArr[2])


// const number = 1

// const number2 = new Number()

// const myArrayObject = new Array();



// const myArr2 = new Array(1,2,33,4)




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


// const myArr = [0,2, "true", "Ariha"]

// console.log("Includes: " , myArr.includes("Ariha"))

// console.log("Index: " , myArr.indexOf("Ariha"))

// const newArrayJoin = myArr.join("-")

// console.log(newArrayJoin)

// console.log("Original Array: ", myArr)

// const SlicedArray = myArr.slice(1,3)

// console.log("Sliced Array", SlicedArray)

// console.log("Original Array: ", myArr)

// const SplicedArray = myArr.splice(1,3)

// console.log("Spliced Array", SplicedArray)

// console.log("Original Array: ", myArr)




// //--------Spread Operator---------
// const arr = ["Ariha", 1,2,3,4]
// console.log(arr)
// console.log(...arr)





//------------Flat Method---------------
// let suppose we have an array inside array like nested arrays than we can make this into one array 

// const newArray = [1,2,3,4,[1,2,3,4,[1,2,3,4,4]]]

// console.log(newArray)

// console.log(newArray.flat(Infinity))





//-----------Array from--------

// const name = "Ariha Noor"

// const newArr = Array.from(name)

// console.log(newArr.length)



