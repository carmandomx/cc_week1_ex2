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
    //We split the words and put them in a variable that will be a list or list of objects 
    //and ignore any blank space between them
    let allwords = str.split(" ");
    //We reset the input to nothing
    str = "";

    //With a for loop we go through all the words and sum the up and create "no spaces" string
    //This is a "treatment" to the input, to transform the input to a understandable piece of data
    for (let i = 0; i<allwords.length; i++)
    {
        str = str + allwords[i];
    }

    //This is the for loop to find wether it is a palindrome. At last! 
    const len = str.length;
    
    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
            //False means it's not a palindrome
            return false;
        }
    }
    //True means it is a palindrome
    return true;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;