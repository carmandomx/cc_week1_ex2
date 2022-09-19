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
    str = str.replace(/\s/g, ''); //remove spaces from string
    var str = str.split(""); //getting an array with all the characters from the string;
    var rev = [...str].reverse(); //creating a temporal array which reverses the original one

    for(let i=0, j=0; i<str.length; i++, j++) { //create a for loop to iterate the arrays
        if (str[i] == rev[j]) { //if the first element of the original array is the same character as the reversed one, continue
            continue;
        }
        else { //if the first elements are not the same, it means it's not a palindrome, so we return false
            return false;
        }
    } 
    return true; //as the loop breaks when it finds a mismatch, if it doesn't find it it's because the string is a palindrome, so we return true

    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;