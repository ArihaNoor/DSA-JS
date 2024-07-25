function factors(num){
    let factor = [];
    for(let i=0;i<=num;i++){
        if(num%i==0){
            factor.push(i);
        }
    }
    return factor;
}


function CommonDivisor(n1,n2){
    let Factor1 = factors(n1);
    let Factor2 = factors(n2);
    const filteredArray = Factor1.filter(value => Factor2.includes(value));
    let largest = filteredArray[0];
    for(let i=0;i<filteredArray.length;i++){
        if(filteredArray[i]>largest){
            largest = filteredArray[i]
        }
    }
    let LCM = (n1*n2)/largest
    let list = [LCM,largest]
    return list;
}

console.log(CommonDivisor(5,10))