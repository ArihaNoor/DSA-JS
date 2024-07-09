const Array = [1,2,3,4,5,5,5]

for(let i=0;i<Array.length;i++){
    // console.log(`${i} = ${Array[i]}`)
}

let i=0;
while(i<Array.length){
    // console.log(`${i} = ${Array[i]}`);
    i++;
}

Array.forEach(i => {
    console.log(`${i} = ${Array[i]}`);
});