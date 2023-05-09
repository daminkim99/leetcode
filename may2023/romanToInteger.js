/* 5.9.23 

Given a roman numeral, convert it to an integer.

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

*/ 

const symbols = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

let romanToInt = function(s) {
    let count = 0 
    //iterate through the letters and obtain its value of the letters
    for (let i =0 ; i < s.length; i++){
        let current = s[i]
        let next = s[i+1]
        //if the letter to the right is less than the value of itself then subtract itself from the value, while skipping the next char
        if (symbols[current] < symbols[next]){
            count += symbols[next]-symbols[current]
            console.log("here", symbols[current])
            i++
        //add to the count the value of itself 
        } else {
            count += symbols[current]
            console.log("nohere", symbols[current])
        }
    }
    return count
}
