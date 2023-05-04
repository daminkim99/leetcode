/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

parameter 
- needle => string , only lowercases , not empty, 
- haystack => string, the whole word, not empty 

return the index, if none are found => -1 

needle "hay" , haystack "haystack" -> 0
needle "niz" haystack "organization" -> 4 
needle "beef" haystack "bottle"--> -1 

*/

var strStr = function(needle,haystack) {
    //use search function 
    return haystack.search(needle)
    
};



console.log(strStr("hay","haystack"), "0")
console.log(strStr("niz","organization"), "4")
console.log(strStr("beef","bottle"), "-1")




