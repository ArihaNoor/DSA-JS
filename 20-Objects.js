const User = {
    email : "math@gmail.com",
    username: "arihanoor", 
    age: 21,
    Posts: ["A", "B", "C"], 
    greetings: function (){

    }
}



// console.log(User)

//---------------------Object Freeze Method------------------

// Object.freeze(User); //koi b change propagate nahi ho gya after freezing

User.email = "ariha@gmail.com"

// console.log(User);

//-------------------Functions in Objects------------------

// console.log(User.greetings())


//--------------String Interpolation-------------------------







