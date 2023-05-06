/* 5.6.23

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

given the array and a target, two params => non empty
return the index of the target, or if it doesn't exist then give the index of where it would be hypothetically

[1,3,5,6], target= 5 => 2 
[1,3,5,6], target = 2 => 1 

*/ 

let searchInsert = function(nums, target) {
    if (nums.includes(target)){
        let number = nums.filter(item => item === target)[0]
        return nums.indexOf(number)
    } else{
         nums.push(target)
         nums.sort((a,b) => a-b)
         return nums.indexOf(target)
    }
    
};

console.log(searchInsert([1,3,5,6],5),"2")
console.log(searchInsert([1,3,5,6],2),"1")