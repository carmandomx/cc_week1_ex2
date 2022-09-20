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
    //regular expresion for any non-alphanumeric character
    let reg = /[\W_]/g;
    //lower case the string then use the regex to replace 
    let lowercase_str=str.toLowerCase().replace(reg,"");
    //store the reverse of the string in backwards
    let backwards = lowercase_str.split("").reverse().join("");
    //check if the backwads string is equal to the original string
    if(lowercase_str===backwards){
        //if true, return true
        return true;
    }
    //else is not palindrome so return false
    return false;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;