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
    let original = str.split(" ").join(""); //Here we remove the spaces if there is any
    let split = original.split('');//Here we create an array out of the string
    let reversed = split.reverse().join("");//In this line we reverse the previous array and joint it 
    if(reversed === original){ //Here we only compare if the reversed one is the same as the original and output a result
        return true;
    }else 
        return false;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;