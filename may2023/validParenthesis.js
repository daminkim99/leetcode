/* 5.8.23 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

string of brackets only 
return true if the brackets are closed in the same way, false otherwise 

"()" => true
"(]" => false 

*/ 

var isValid = function(s) {
    //loop through the string until there are no brackets to be replaced 
    while (
        s.indexOf("()") !== -1 || s.indexOf("{}") !== -1 || s.indexOf("[]") !== -1
    ){
        s = s.replace("()", "").replace("[]","").replace("{}","")
    }
    //return the length of the string, if empty that means that they were all a pair 
    return !s.length
};

console.log(isValid("()"), "true")
console.log(isValid("(]"), "false")