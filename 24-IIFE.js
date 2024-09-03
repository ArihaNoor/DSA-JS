// Immediately Invoked Function Expressions ----------- IIFE

// Sometimes global scope values make local or block scope values polluted 
// because as we know that block level variables can access the globals scope values 



// For Immediate Execution of the Function --- like we want some function to execute immediately 
// as file loads


(function Name(){

})();


//--------How we can write IIFE----------


//It is known as Named IIFE

// (function MyFunction(){
//     console.log("DB Connected")
// })();


//-----Here we need to add semicolon because it doesnot implicity know where scope will end

//------Same we can do with Arrow Functions----------

((name)=>{
    // console.log("DB Connected TWO", name)
    return name;
});let name = ("Ariha")

// console.log(name)



// ((name)=>{
//     // console.log("DB Connected TWO", name)
//     return name;
// });let name = ("Ariha")

// console.log(name)