function sumOfDivisors(N)
    {
        let divisor = []
        let sum=0;
        for(let i=0;i<=N;i++){
            for(let j=0;j<=i;j++){
                if(j%i==0){
                divisor.push(j);
            }
        }
        }
        for(let i=0;i<divisor.length;i++){
            sum+=divisor[i];
        }
        return sum;
    }

    console.log(sumOfDivisors(5))