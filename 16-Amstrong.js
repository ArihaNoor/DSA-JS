function Amstrong(num){
    let arr =  num.toString().split('').map(Number);
    let number = arr.length;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]**number;
    }
    if(sum==num){
        return true;
    }else{
        return false;
    }
}

console.log(Amstrong(153))