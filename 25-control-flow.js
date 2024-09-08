//---------If-Else 
//---------IF-Else-If

// let IsLoggedIn = false

// if(!IsLoggedIn){
//     console.log("User LoggedIn Successfully");
// }else{
//     console.log("User Login Failed");
// }


//== and === Difference 

// 1- == compares value 
// 2- === compare value and type


//!= and ==,  !==



//----------Short Hand Notation 

// if(age>10) console.log("Young") //not readable 


//--------&&------------
let PaymentSuccessfull = false;
let user = true;
//---------||----------
// console.log(PaymentSuccessfull || user)



//--------Conditional Rendering--------------


//---------Falsy Values 

// 0, False, -0, 0n, BigInt, null, undefined, Nan, ""


// console.log(0==" ")


//--------Truthy Values 

// true, 1, "0", "false", " ", [], {}, function(){}



// console.log()








//-------How to Check Array and Object are emmpty or not----

const ArrayLen = []
// console.log(ArrayLen.length)

const ObjectNew = {
    username: "ariha"
}

// console.log(Object.keys(ObjectNew).length)

// console.log(Object.keys(ObjectNew).length);



//-----Nullish Operator ---- ??

const name = undefined ?? "Ariha";
console.log(name)
 

//------Ternary Operator --- ? 

const IsLoggedIn = false;

let Subscribe = false;

Subscribe = IsLoggedIn===true ? Subscribe=true : Subscribe=false;

// console.log(Subscribe);
