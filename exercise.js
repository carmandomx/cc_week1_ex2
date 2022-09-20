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
    //Declaration of variables:
    //Spliting the received string for further solutions
    let origin = str.split('');
    
    //Inicialization of the variable that will contain the reverse string
    let pal = [];

    //Index to travel the pal value, as the index for the origin is going backwards
    let revindex = 0;
    
    //Line of code to erase blank spaces
    origin = origin.filter(e => String(e).trim());

    /*Process to copy backwards the original string to a new string for 
    a future comparation*/
    for (let index = origin.length-1;  index >= 0; index--){
        pal[revindex] = origin[index];
        revindex++;   
    }

    //Final process to check if the string is a palindrome to return the answer
    if(pal.join('') === origin.join('')){
        console.log("It's a palindrome");
        return true;
    }else{
        console.log("It's not a palindrome");
        return false;
    }
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;