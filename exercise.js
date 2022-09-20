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

  /* replace method to remove whitespaces. /s is regex for whitespaces and /g is for global */
  str = str.replace(/\s+/g, '');
  /* split method to get an array with all the characters */
  const strLetters = str.split('');
  /* for loop to search if any character doesn't match */
  for (let i = 0; i < strLetters.length / 2; i++) {
    /* if condition that actually checks if the current character matches with its opposite one */
    if (strLetters[i] !== strLetters[strLetters.length - 1 - i]) {
      /* return false if some character doesn't match */
      return false;
    }
  }
  /* return true if all characters did match */
  return true;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;
