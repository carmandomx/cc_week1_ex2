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

    str = str.replaceAll(" ","");               // Delete all spaces on the string.
    const arrStr = str.split('');               // Create a new array, array for string, where the elements are the characters of the string.
    const arrReversed = arrStr.reverse();       // Create a new array from the array for string where the elements are reversed.
    const strReversed = arrReversed.join('');   // Create a string whit the reversed characters.
    
    // Control flow with strict equality to determine if both strins are equal. 
    // If both are equal, return yes and the word is a palindrome.
    // If both are not equal, return false and the word is not palindrome. 
    if (str === strReversed) {
        return true;
    }
    else {
        return false;
    }
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;