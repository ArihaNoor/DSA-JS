// -----------Scope-------
// When we were using var there is scope issue

// let we have 3 variables


// let a = 2;
// const b = 3;
// var c = 5;

// console.log(a);
// console.log(b);
// console.log(c);



// {
//     //functions, conditionals, loops 
// }



// {
//     let c = 2;
//     console.log(c)
// }

// these are {} scope of any function, loop, or conditional
// let suppose we have

if (true) {
  let a = 2;  //let have block level scope
  const b = 3; //const have block level scope
  var c = 5; //it have global scope
}

// console.log(a);
// console.log(b);
console.log(c);


//-------------IMP-----------------

//Values in global scope are accessible in the block scope but values in block scope should not be
//accessible in the global scope


let age = 2;
if(age>10){
    console.log("ABC");
    // let c = 2;
}

// console.log(c)