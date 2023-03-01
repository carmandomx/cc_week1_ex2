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

    /* Regular expression to remove whitespace */
    const regExp = /\s+/g;

    /* A variable is assigned the value of 'str' but converting all letters to lowercase and removing whitespace. */
    let lowRegExp = str.toLowerCase().replace(regExp, '');

    /* The string is divided letter by letter with the split method, with the reverse method we reverse the string and with the join method we integrate the string again */
    let newStr = lowRegExp.split('').reverse().join('');
    
    /* Compare 'normal' string vs string in reverse */
    if(newStr === lowRegExp) {
        return true;
    }
    else {
        return false;
    }
        
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;