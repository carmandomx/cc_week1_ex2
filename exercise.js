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

    const charsArray = str.split("").filter(item => item.trim() !== ""); // split each character but remove white spaces
    const regularStr = charsArray.join(""); // join the spaceless array back into a string

    const reverseArray = charsArray.reverse(); // Reversing the previous spaceless array
    const reverseStr = reverseArray.join(""); // Putting the reverse array back into a string
    let answer; // declaring variable to store the answer
    if (regularStr == reverseStr) {
        // if both strings match (regular and reverse), it's a palindrome
        answer = true;
    } else {
        // if strings don't match, it's not a palindrome
        answer = false;
    }
    return answer;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;