/* 5.2.23

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

- parameters 
1. array of numbers => str x 
2. number 
- returns an array of two numbers indices from the parameter array 
- [2,7,11,15] targe t= 9  => [0,1]
*/

var twoSum = function(nums, target) {
    //set up two loops, and see if the two numbers add up 
    let indexes =[]
    for (let i =0; i < nums.length-1; i++){
        for (let j=i+1; j<nums.length ; j++){
          //if the two numbers add up , append the indexes of the array  
            if(nums[i] + nums[j] === target){
                indexes.push(i,j)
            }
        }
    }
    return indexes
};