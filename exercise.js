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
    // Initialize a variable to an empty array
    let arr = [];
    // Remove spaces in the received string and asign the new string to the "arr" variable 
    arr = str.replace(' ', '');
    /* 
        Divide the new string in characters
        Here we have an array of characters
    */
    arr = arr.split('');
    /*
        Declare some variables
        The first one will be used to counting how many times a character is the same that certain character
    */ 
    let count = 0;
    // The second one will be the variable returned by the function
    let isPalindrome = false;
    // The third one will be the lenght of our array without spaces and divided in characters that is the "arr" array
    let arrLength = arr.length;
    // for cycle will evaluate the "arr" array 
    for (let i = 0; i < arrLength ; i++) {
    /*  
        Every time that the character in "i" position of    the array is the same as the character in the position "arrLenght-1-i" of the same array, the count will be incremented by 1

        e.g for hola the first comparison for i = 0, then arr[0] == arr[5-1-0] 
        the "5-1" is the index of the last character in the array
    */
        if(arr[i] == arr[arrLength-1-i]){
            count++;
        }

    }
    // At the end od the cycle if the count is the same as the lenght of the evaluated array "arr" the variable "isPalindrome" will have the value "true" otherwise it will have the value "false
    count == arrLength ? isPalindrome = true : isPalindrome = false;
    // Return the variable "isPalindrome"
    return isPalindrome;
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;