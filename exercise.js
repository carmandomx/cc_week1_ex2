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
const palindrome = (str) =>
 {
    /* Only make changes below this comment */

    /* the method replace() is to return the new string with some*/
    /* or all matches of a pattern with a replacement*/

    let word = str.replace(/ /g,"").toLowerCase();

    /*Save the inputs in a variables to compare them*/

    let original = Array.from(word);

    let inverted = [...original];

    /*create a function to invert the input "word"*/

    inverted.reverse();

    if(original.toString() === inverted.toString()){
        return true;
    } else{
        return false;
    } 

    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;