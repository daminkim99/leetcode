/* 5.5.23 

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

array of nums => no empty, only integers 
return the number that only occurs once 

[1,2,3,4,4,3,1] => 2 
[0,0,1,1,4,7,7] => 4 

*/

let singleNumber = nums => {
    //filter array, with the condition that indexOf does equals lastIndexOf
    let number = nums.filter(number =>  nums.indexOf(number) == nums.lastIndexOf(number))
    //return the element 
    return number[0].toString()
}


console.log(singleNumber([1,2,3,4,4,3,1], '2'))
console.log(singleNumber([0,0,1,1,4,7,7], '4'))

