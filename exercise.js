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
    // Create a variable to storage the string that users gives you so that you can modify it later, also use a method to avoid capitalize and other that remove empty spaces so this can't affect your result.
    const newStr = str.replace(/ /g, "").toLowerCase();
    // Then I duplicate the variable above in order to modify it without modifying the original so that we can compare them at the end.
    let opposite = newStr;
    // As it is an string, we need to change this using the method split, so we have an iterable now, there is a method called reverse that works over arrays, once we have the reverse, it still being an array, so we need to take it back to an string with the method join
    opposite = opposite.split("").reverse().join("");
    // I used a conditional if to compare the str with the opposite, if true, then it returns true, if not, then it returns false.
    // I used the ternary operator to make the conditional in order to make the code as small as possible
    let isEqual = newStr === opposite ? true : false
    // Then we need to return the comparison result
    return isEqual;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;