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


    /* I only want to keep alphabetic letters i must use [^A-Z] and [^a-z] 
    in order to convert everything else in "blank" so it gets removed from the string */
    /* NOTE: This can be done in the same line as in the previous step, for practice purposes are separated */
    var logStr = str.replace(/[^A-Za-z0-9]/g,'');

    /*Since JS does identify Upper and Lower cases as different characters, we must set all of them in the same condition,
    in this particular case will be lower cases.*/
    logStr = logStr.toLowerCase();  

    /* The logic is to compare characters from both sides of the word at the same time,
    either they are similar or not. Which is why we only lopp up the the midle of the word. */
    var len = logStr.length;
    for (var i = 0; i < len/2; i++) {

        if (logStr[i] !== logStr[len - 1 - i]) {
            return false;
        }
      }
      return true;
    
    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;