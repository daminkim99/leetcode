/* 5.10.23 

Given an integer x, return true if x is a 
palindrome, and false otherwise.
*/ 

var isPalindrome = function(x) {
    //make into string, split into an array, reverse, then join and see if it matches the original 
     return x == x.toString().split('').reverse().join("")
};