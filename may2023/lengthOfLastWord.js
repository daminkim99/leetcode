/* 5.7.23 

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

string with words and spaces ==> never empty, just alphabet
return the length of last word in the string 


" Fly to the moon " => 4 
" Get me that melon " => 5 
"Abracadabra" => 11 

*/ 

let lengthOfLastWord = function(s){
    // make the string into an array 
    let arr = s.split(' ')
    //filter out the element with " "
    let newArr = arr.filter(item => item !== '')
    //return the length of the last element 
    return newArr[newArr.length-1].length
}   

console.log(lengthOfLastWord(" Fly to the moon "), "4")
console.log(lengthOfLastWord(" Get me that melon "), "5")
console.log(lengthOfLastWord("Abracadabra"), "11")
