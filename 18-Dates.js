// Same like Math is a Global object we can also use it.

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof(myDate))


let myCreatedDate = new Date(2023,0,23)
//Months are starting from 0 in JavaScript
console.log(myCreatedDate.toDateString())

