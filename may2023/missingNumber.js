/* 5.12.23 

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

an array of numbers, from 0 to n minus one number 
return that one number that is missing 

[3,0,1] => 2 
[0,1] => 2 
[9,6,4,2,3,5,7,0,1] => 8 
*/ 

let missingNumber = function(nums) {
  
    for (let i = 0 ; i < nums.length+1 ; i++){
        //loop through the array and if it doesn't have the number then return it 
        if(!nums.includes(i)){
            return i
        }
    }
};

console.log(missingNumber([3,0,1]),"2")
console.log(missingNumber([0,1]),"2")
console.log(missingNumber([9,6,4,2,3,5,7,0,1]),"8")