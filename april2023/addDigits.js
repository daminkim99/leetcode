/* 4.25.23 

Given an integer num, repeatedly add all its digits until 
the result has only one digit, and return it.

a number integer 
 the only digit remaining after repeatedly summing 
38 ==> 2 


*/

var addDigits = function(num) {
    //converts the number into an array 
    let arrNum = num.toString().split('').map(Number)
    // while the array has more than one item, then keep the loop going , adding the numbers 
    while (arrNum.length > 1){
        let sum = arrNum.reduce((sum,item ) => {
            return sum + +item
        },0)
        arrNum = sum.toString().split('').map(Number)
    } 
    //returns the only element in the array 
    return arrNum[0]
};