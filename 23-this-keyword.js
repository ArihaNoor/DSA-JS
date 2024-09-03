//-------------Current Context------------

//Jab hum browser mai console krtay hain this keyword ko to wo hmay return karta hai
// Window Object

//Jab hum node mai print kartay hain this keyword to return karta hai empty object

const user = {
  username: "Ariha",
  MyFunction: function Name() {
    console.log(`${this.username}, Welcome`);
  },
};

// user.MyFunction()
// user.username = "Noor"
// user.MyFunction();

//Now Let suppose we try to print this keyword in the function

function ThisFunc() {
  const username = "Ariha";
  console.log(this.username);
}

// ThisFunc()

//This above function shows that we are unable to access this keyword in the function like in the objects

//----------Arrow Function------------

const arrow = () => {
    console.log(this)
};

arrow()


//we can also write arrow function this way 

const FunctionOne = (num1,num2) => num1 + num2
const FunctionTwo = (num1,num2) => (num1 + num2)

//if we have one liner statment we can use this format also instead of writing return 





