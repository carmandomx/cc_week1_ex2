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
    let original2 = [];
    let original = str.split(""); 
    for(let i=0;i<original.length;i++){ //In this cycle we get rid of the spaces in the string if there is any 
        if(original[i]!== " "){
            original2+=original[i];
        }
    }
    let reversed = "";
    for(let i=original2.length-1;i>=0;i--){ //Here we reverse the string by doing a count down instead of a count up to and saving the value 
        reversed += original2[i];
    }

    if(reversed === original2){ //Here we just make sure that the reverse is equal to the original and return the answer
        return true;
    }else 
        return false;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;