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
  let regEx = /[\W_]/g; //Regular expresion, any non-alphanumeric character and underscores
  let newStr = str.replace(regEx, "");

  let strRev = newStr.split("").reverse().join("");
  if (strRev === newStr) return true;
  return false;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;
