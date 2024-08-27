const User = {
  email: "math@gmail.com",
  username: "arihanoor",
  age: 21,
  Posts: ["A", "B", "C"],
  greetings: function () {},
};

// console.log(User)

//---------------------Object Freeze Method------------------

// Object.freeze(User); //koi b change propagate nahi ho gya after freezing

User.email = "ariha@gmail.com";

// console.log(User);

//-------------------Functions in Objects------------------

// console.log(User.greetings())

//--------------String Interpolation-------------------------

//---------------Assigning values to object--------------

const InstaUser = {};

InstaUser.name = "Ariha";

// console.log(InstaUser)

//--------------Optional Chaining------------

//--this is used when we are getting response from the api like
//because it is also possible that data is null
//so we apply conditional that if data is recieved from the API than it should further proceed.
//if we don't use it than we have to use if else everywhere
// console.log(InstaUser?.name)

//------Array concatenation and Object Concatenation--------

// like in arrays we were using concat() and Join() functions to concat arrays
//same like we can also concat objects but not with concat or join

// let suppose we have 2 objects

let obj1 = { 1: "Ariha", 2: 21 };
let obj2 = { 3: "Noor", 4: 21 };

let obj3 = Object.assign({},obj1,obj2)  //{} this is target and other obj1 and obj2 are source 
                                        // this will return target object 
// But most of the time we don't use this syntax 

//----we use spread operator for objects also 

// let obj4 = {...obj1,...obj2}

// console.log(obj4);


//-------------Object Methods-------------

//------Keys 

// console.log(InstaUser)

// console.log(Object.keys(InstaUser))

// console.log(Object.values(InstaUser))

// console.log(Object.entries(InstaUser))

// console.log(Object.hasOwnProperty("name"))



//-----------------Object Destructuring--------------------

const Book = {
    bookName: "Novel Book",
    bookPrice: 1200,
    bookAuthor: "ABC"
}

//----Now Destructuring Value 

const {bookName: book} = Book; //we can destructure any object value

//agar kahi par b {book} is tarah say syntax ho ga to is ka mtlab hai k 
//yeh object destructuring ho rahi ha --- further in react


console.log(book);


//-------------APIs---------------
//MenuCard Example 
//Google Auth API 

//----JSON-----
//It is same like objects 


//Sample Fake API 
//https://jsonplaceholder.typicode.com/todos/1

//JSON Formatter 

//Beautify Code using Tree type 











