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
    
    /* First remove the blank spaces with ".replace(/ /g,'')" 
    and then obtain an array with the characters from the str with .split('')
    saving the result in a variable called "array" */
    const array = str.replace(/ /g,'').split('');
    console.log(array);
    
    // Array without spaces to string
    const string1 = array.join('');

    /* With "array.reverse()" returns the array in reverse order
    and save it in "reverseArray" variable */
    const reverseArray = array.reverse();
    console.log(reverseArray);

    // Reverse array without spaces to string
    const string2 = reverseArray.join('');
    
    /* If the strings are the same then is it a Palindrome */
    if (string1 === string2) {
        return true;
    }
    else{
        return false;
    }

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;