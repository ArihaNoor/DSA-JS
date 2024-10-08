let myCoding = ["ruby", "java", "cpp", "js"];

let myArray = []

myCoding.forEach((item)=>{
  myArray.push(item)
});

// console.log(myArray)

let values = myCoding.forEach((item) => {
  // console.log(item)
});

// console.log(values)  //Output: Undefined

//Foreach loop doesnot return any value.

//To return from a foreach loop

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// mynums.forEach((num) => {
//   console.log(num+3)
// });


//foreach function will not return any value only for printing


const filteredNums = mynums.filter((item)=>{
  return item>7
});


// console.log(filteredNums)

// so where we have to return we use filter function




//----------Implicit Return-----------

const Arrow = () => 2+3;

const Arrow2 = () => (2+3);

//----------Explicit Return-----------------


const Arrow4 = () => {
  return 2+3
}

// console.log(Arrow4())


const Arrow3 = () => {
  // return mynums[0];
};






//--------------Map---------------

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addTen = Numbers.map((item)=>{
  return item+10;
})

// console.log(addTen)



//--------Method Chaining---------

//we can use multiple functions at the same time

const chaining = Numbers.map((item) => {
    return item*10;
}).map((item) => {
    return item+1
}).filter((item) => {
    return item>50;
});


// console.log(chaining)






//-------------reduce----------------

const sum = Numbers.reduce(
  (accumulator, currentValue) => {
    console.log(`Acc: ${accumulator}, Current Value: ${currentValue}`)
    return accumulator + currentValue;
  },0
)

// console.log(sum)