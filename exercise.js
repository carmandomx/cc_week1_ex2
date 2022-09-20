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

    const words = str.split(' ').join('')//first we start by using the split and join methods, split erases all the spaces and join puts together all it sees without spaces 
    for (let i = 0; i <words.length-1; i++) { //so we can have an array with just letters. then we started a for cycle and we made  the comparisson between the first and last
        if (words[i] != words[words.length-1-i]) //letter of every word 
        return false;
      }
    /* Only make changes below this comment */
    return true;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;