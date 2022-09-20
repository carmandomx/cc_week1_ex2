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

    //Replacing the spaces for nothing, and converting to lowercase to avoid that problem 
    let compactString = str.replace(/ /gi,"").toLowerCase();

    //Converting compactString into an array
    let original = Array.from(compactString);
 
    //creating a copy
    let inverted = [...original];

    //Creating an reversed/inverted array from original
    inverted.reverse();

    //Checking the result and creating the returns
    if(original.toString() == inverted.toString()){
        return true;
    } else{
        return false;
    } 
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;