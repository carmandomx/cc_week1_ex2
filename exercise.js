/* * Instructions *
    A palindrome is a word or phrase that's read or spelled the same way backwards or forwards when we ignore spaces,
    punctuation or symbols.

    Note that for this exercise you will only need to remove spaces as no symbols or punctuations will be present in the
    test cases.

    You will receive a string as argument str and you need to return TRUE if the string is a palindrome or false if the string
    is not a palindrome

    Hint: You can use the String method split() to obtain an array with all the characters from the string.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const palindrome = (str) => {
    /* Only make changes below this comment */
    let rep = /[^A-Za-z0-9]/g; //Search for all non-alphanumerical characters (like spaces, dots, comas)
    let lowStr = str.toLowerCase().replace(rep,"") //All the characters in the string are now lowercase and the non-alphanumerical characters will be replaced with ""  
    let revString = lowStr.split("").reverse().join("") //Reverse all the remain characters from the lowercased string
    return revString === lowStr
    /* Only make changes below this comment */
}

var a = "anita lava la tina"
var b = "race car"
var c = "Carlos Reyes"

console.log(palindrome(a))
console.log(palindrome(b))
console.log(palindrome(c))


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;