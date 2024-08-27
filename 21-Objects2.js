//---------------------Object Freeze Method------------------

// console.log(User)

//Object.freeze(User); //koi b change propagate nahi ho gya after freezing

// User.email = "ariha@gmail.com";

// console.log(User);


const User = {
    "email": "math@gmail.com",
    "user-name": "arihanoor",
    "age": 21,
    Posts: ["A", "B", "C"],
    greetings: function () {
      console.log("Hello! Ariha")
    },
  };
  
  // console.log(User["user-name"])
  
  
  //-------------------Functions in Objects------------------
  
  // console.log(User.greetings())
  
  
  
  
  
  //--------------String Interpolation-------------------------
  
  
  
  // let variable = "Ariha"
  
  // let string = `My Name is ${variable}`
  
  // console.log(`My Name is ${variable}`)
  
  // console.log("My Name is " + variable)
  

  
//-------------Object Methods-------------

//------Keys 

// console.log(InstaUser)

// console.log(Object.keys(InstaUser))

// console.log(Object.values(InstaUser))

// console.log(Object.entries(InstaUser))

// console.log(Object.hasOwnProperty("Username"))