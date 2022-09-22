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
  //first write to lower case the string and re-assign the variable.
  str = str.toLowerCase();
  // for 'stringBack' we replace blank spaces (for nothing ""), next convert string to array, for reverse it and join again all letters for .
  let stringBack = str.replace(/ /g, "").split("").reverse().join("");
  //addition we create other variable called "stringNoS" (string without spaces) then replace blank spaces for nothing ("") and create 1 word for comparate it.
  stringNoS = str.replace(/ /g, "");
  //first evaluation; if 'str' not exist we send a warning.
  if (!str) {
    return "Only string characters";
    //second evaluation; besides if "str" not is a "string" type we send another warning.
  } else if (typeof str !== "string") {
    return "Only string values";
    //third evaluation; for cases of "str" lenght ir less or equal to 1 we can't evaluate the word, for that we send a "false"
  } else if (str.lenght <= 1) {
    return false;
    //for case that all works fine, we comparate our 2 variables:
  } else {
    return stringNoS === stringBack
      ? true //if are equals
      : false; //or not equals
  }
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;
