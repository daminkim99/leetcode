/* 5.13.23 

A perfect number is a positive integer that is equal to the sum of its positive
divisors, excluding the number itself. A divisor of an integer x is an integer that 
can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.

parameters is a number
returns the true if sum of  number's divisors equal the number or false otherwise 

28 ==> true because divisors = 1,2,4,7,14
7 ==> false because divisors = 1 

*/ 

let checkPerfectNumber = function(num) {
    //create an array to carry the divisors 
    let divisors = []
    //add the divisors into an array 
    for ( let i =0 ; i < num ; i++){
        if (num % i ==0){
            divisors.push(i)
        }
    }
    //add up the divisors 
    let sum = divisors.reduce((sum,i) => sum + i ,0)
    //check if the divisors sum equals the original number 
    return sum == num
};

console.log(checkPerfectNumber(28), 'true')
console.log(checkPerfectNumber(7), 'false')