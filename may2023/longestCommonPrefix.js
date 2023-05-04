/* 5.3.23 

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

array --> strings, no empty, no special char, only letters 
return longest prefix string thats common amongst all of the elements in the array

['flower', 'fuzzy', 'frequent'] => 'f'
['flower','flow','flight'] => 'fl'

*/

var longestCommonPrefix = function(strs) {
   //letters of the first element 
   for (let i = 0; i <= strs[0].length; i++){
    //loop through other letters in the array 
        for (let j = 1; j < strs.length; j++ ){
            // Check if this character is also present in the same position of each string
            if (strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0]
};

console.log(longestCommonPrefix(['flower', 'fuzzy', 'frequent']), "'f'")
console.log(longestCommonPrefix(['flower','flow','flight']), "'fl'")

console.log("boo")