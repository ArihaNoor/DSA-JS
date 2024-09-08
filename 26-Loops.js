//-------For Loop-----------

let myArray = [1, 2, 3, 4];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element)
}

//While Loop

let index = 0;
while (index < myArray.length) {
  // console.log(myArray[index])
  index++;
}

//Do While Loop

let indexWhile = 0;
do {
  //  console.log(myArray[indexWhile])
  indexWhile++;
} while (indexWhile < myArray.length);

//-------For Of Loop-------------

for (const element of myArray) {
  // console.log(element)
}

let myObjects = [
  {
    name: "Ariha",
    age: 21,
    degree: "Software Engineering",
    hobby: "coding",
  },
  {
    name: "John",
    age: 22,
    degree: "Software Engineering",
    hobby: "coding",
  },
  {
    name: "Sonia",
    age: 22,
    degree: "Software Engineering",
    hobby: "coding",
  },
];

for (const element of myObjects) {
//   console.log(element);
}

for (const key in myObjects[0]) {
    // console.log(myObjects[0][key])
}


// In Arrays we have only numeric keys like 0-n but in objects we have any key value 


//---------For Each Loop---------------

// It always takes a callback function in the loop 

// Callback function is a function but it doesnot have its name


let myCoding = ["Java", "JavaScript", "Python", "Ruby", "C++"]

myCoding.forEach(element => {
    // console.log(element)
});

// let suppose we have defined function 

function Print(message){
    // console.log(message)
}

myCoding.forEach(Print)


myCoding.forEach((element, index, myCoding) => {
    // console.log(element, index, myCoding)
});