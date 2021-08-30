const num = 123
let sum = 0
let firstNum = Math.floor ( num / 100 ) ;
let secondNum = Math.floor ( ( num - firstNum * 100 ) / 10 )
let thiredNum = num - firstNum * 100 - secondNum * 10 ;
sum = firstNum + secondNum + thiredNum ;
console.log(sum)