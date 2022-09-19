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
    
    //Split by spaces and after join the array to obtain a constant with just one word
    const words = str.split(' ').join('');
    //This help me to show in the console the word I obtained.
    console.log(words);
    //Variable to have the word's length 
    let len = words.length-1;

    //Cycle to verify the word with and inverse sense
    //Thats mean the first letter with the last, after the second with the second last...
    //word[0] == word[len-0] ... word[0] == word[len-1] ... word[i] == word[len-i]

    for(let i = 0;i<len;i++){

        if(words[i] != words[len-i]){
            //if not, it's not a palindrome
            return false;
        }
    }
    //It is a palindorme
    return true;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;