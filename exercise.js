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
    let newString = str.replace(/\s/g, "").toLowerCase(); // researched a way to remove spaces and found this regular expression, this will remove de space in the global string and replace it with "" which is an empty space, and creates a new string in lower case with no spaces
    let reversedString = newString.split("").reverse().join(""); // I created a new string that will be spelled backwards, I split it per characters that will create an array, then it reverses it and joins it back for the comparison, i used the split method to check if everything is working properly meaning that it's removing the spaces, if there were an error the array whould show an empty string.
    if (newString === reversedString){ //the comparison between the altered string without spaces and in lower case, and the other string which should be reversed, without spaces and in lower case as well
        return true; // if the two strings match then the original sentence is a palindrome
    }
    return false; // if not then it will return false
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;