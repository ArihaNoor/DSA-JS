function reverse(x) {
  let ans = [];
  let original = x;
  if(x<0){
    x = x*-1;
  }
  while (x > 0) {
    let lastDigit = x % 10;
    ans.push(lastDigit);
    x = Math.floor(x / 10);
  }
  if (original < 0) {
    let number = Number(ans.join("").toString());
    return number*-1;
  } else {
    return Number(ans.join("").toString());
  }
}

console.log(reverse(-1234))
