// Outer loop count the number of rows 
// Inner loop focuses on the number of columns

console.log("1st Pattern")
// 1st Pattern 
for(let i=0;i<5;i++){
    let row = "";
    for(let j=0;j<5;j++){
        row += "*"
    }
    console.log(row);
}
console.log("2nd Pattern")

// 2nd Pattern 
for(let i=0;i<5;i++){
    let row = "";
    for(let j=0;j<=i;j++){
        row += "*"
    }
    console.log(row);
}

console.log("3rd Pattern")

//3rd Pattern 
for(let i=0;i<5;i++){
    let row = "";
    for(let j=0;j<=i;j++){
        row += j+1
    }
    console.log(row);
}

console.log("4th Pattern")

//4th Pattern 
for(let i=0;i<5;i++){
    let row = "";
    for(let j=0;j<=i;j++){
        row += i+1
    }
    console.log(row);
}

console.log("5th Pattern")

//5th Pattern 
for(let i=5;i>0;i--){
    let row = "";
    for(let j=0;j<i;j++){
        row += "*"
    }
    console.log(row);
}

//6th Pattern
console.log("6th Pattern")
for(let i=5;i>0;i--){
    let row = "";
    for(let j=0;j<i;j++){
        row += j+1
    }
    console.log(row);
}

//7th Pattern
console.log("7th Pattern")
for(let i=0;i<9;i++){
    let row = "";
    for(let j=0;j<9;j++){
        if(ij){
            row += "*"
        }
    }
    console.log(row);
}

