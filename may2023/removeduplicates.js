/* 5.11.23 

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

paramter is array of nums , can be empty 
return the length of the array in the original array 


*/ 


var removeDuplicates = function(nums) {
    //loop through the nums array 
    for (let i=0 ; i < nums.length ; i++){
    //if there are no elements in the array, break 
        if (i==nums.length){
            break
        }
    //if the element equals the next element, then remove the element 
        if (nums[i]===nums[i+1]){
            nums.splice(i,1)
            i--
        }
    }
    return nums.length
}