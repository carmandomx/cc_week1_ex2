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
    
    
    /* Only make changes below this comment */

    //regex = regular expression 
    //\w removes all non-alphanumeric characters(“\W” matches the non-word characters.)
    //The g means Global, and causes the replace call to replace all matches, not just the first one.
    /*
    [  ] are the start and end of a character set.
    _ is the "_" character.
    / mark the beginning and end of a regular expression. */
    var re = /[\W_]/g;


    //The toLowerCase method returns the value of the string converted to lowercase.
    //The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement .
    
    
    //we convert capital leter words to lowercase words using .toLowerCase()
    //we replace the spaces with replace and use 're' (that is used to detect non-word characters ) and replace them with not space
    var low = str.toLowerCase().replace(re,"");

    //Since a palindrome is a word or phrase that's read or spelled the same way backwards or forwards when we ignore spaces, punctuation or symbols. 
    //That's why we use this line so we can separate the words into letters, to create an a array with the letters, then with reverse() reverse it and then join it, to see if the word spelled the same way backwards or forwards when we ignore spaces.

    //The split() method splits a string into an array of substrings. The split() method returns the new array. The split() method does not change the original string.
    //Reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first.
    //The join() method joins all the elements of an array (or an array-like object) into a string and returns this string
    var check = low.split("").reverse().join(""); 


    //if the word converted and replaced is equals to the array of words that where reversed then the palindrome is happenning
    if (low == check){
        return true;
    }
    else{
        return false;
    }
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;