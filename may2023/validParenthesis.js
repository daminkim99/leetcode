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
    //create a search string 
    let search = "(){}[]"
    //iterate through a pair in the string to see if exists in the search pair 
    for(let i=0; i<s.length; i+=2){
        let substr = s.slice(i,i+2)
        //if wrong bracket or not a pair, then returns false 
        if (!search.includes(substr)){
            return false
        }
    }
    return true
};

console.log(isValid("()"), "true")
console.log(isValid("(]"), "false")