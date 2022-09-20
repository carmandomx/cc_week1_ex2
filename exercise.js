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
    
    let reverseStr = ""; //We create a empty variable to storage the reverse string
    str = str.replace(/ /g, ''); //We use the function replace to replace all de blank space of our String. 

    //With the str without blank space we use a "for" starting from the last to firts character to storage the reverseString
    for (var i = str.length -1; i >= 0; i--) {
        reverseStr += str[i];
    }

    //we do the comparison between the string and the reverseString
    if(str != reverseStr) {
        return false;    //If not are equal the return false
    }
    else {
        return true;   //#Else return true
    }
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;
