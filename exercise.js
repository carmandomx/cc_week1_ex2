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
    let strarr = str.split(" ").join("");//here we split the input parameter and remove de spaces between
    let strarr2 = [];//we create an empty array
    for(i=strarr.length-1; i>=0;i--){//here we iterate inside the strarr beggining from the last element and ending with the first one
        strarr2.push(strarr[i]);//each character is saved into the empty array
    }
    let strarr3 = strarr2.join("");//we transform the elements of the strarr2 into a string and save them into a new variable
    if (strarr===strarr3){ //we compare the first string without spaces with the result, if results are equal it returns true, otherwise it returns false
        return true;
    }else{
        return false;
    }
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;