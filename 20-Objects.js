
//---------------Assigning values to object--------------

const InstaUser = {
    name: "Ariha",
};

InstaUser.name = "Noor";
InstaUser.age = 21
InstaUser.LoggedIn = true;

// console.log(InstaUser)


//--------------Optional Chaining------------

//--this is used when we are getting response from the api like
//because it is also possible that data is null
//so we apply conditional that if data is recieved from the API than it should further proceed.
//if we don't use it than we have to use if else everywhere


// console.log(InstaUser?.name)





//------Array concatenation and Object Concatenation--------


const Array1 = [1,2,3]
const Array2 = [2,4,5,6]

const Array3 = [...Array1,...Array2]

// console.log(Array3)



// like in arrays we were using concat() and Join() functions to concat arrays
//same like we can also concat objects but not with concat or join

// let suppose we have 2 objects


let obj1 = { 1: "Ariha", 2: 21 };
let obj2 = { 3: "Noor", 4: 21 };


let obj3 = Object.assign({},obj1,obj2)  //{} this is target and other obj1 and obj2 are source 
                                        // this will return target object 
// But most of the time we don't use this syntax 

// console.log(obj3);


//----we use spread operator for objects also 

let obj4 = {...obj1,...obj2}

// console.log(obj4);



//-----------------Object Destructuring--------------------

const Book = {
    bookName: "Novel Book",
    bookPrice: 1200,
    bookAuthor: "ABC"
}

//----Now Destructuring Value 

const {bookAuthor: book} = Book; //we can destructure any object value

console.log(book);

//agar kahi par b {book} is tarah say syntax ho ga to is ka mtlab hai k 
//yeh object destructuring ho rahi ha --- further in react


// console.log(book);


// const Company = {}

// const Navbar = ({companyName}) =>{
    
// }





//-------------APIs---------------
//MenuCard Example 
//Google Auth API 



//----JSON-----
//It is same like objects 


//Sample Fake API 
//https://jsonplaceholder.typicode.com/todos/1

//JSON Formatter 

//Beautify Code using Tree type 











