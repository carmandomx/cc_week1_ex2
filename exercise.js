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
    
    noSpaces = str.replaceAll(" ", "").toLowerCase();  //20. Replace all spaces with blanks "" and convert the string to Lower Case
    backwardsArr = [];                                 //21.Create an array where we will store the reversed string characters
    for (let i = noSpaces.length - 1; i >= 0; i--) {   //22. Make a Decreasing For Loop with the length of the String with no spaces
      backwardsArr.push(noSpaces[i]);                  //23. Push the reversed characters into the new Array
    }
                                                       
    const backwardsStr = backwardsArr.join("");        //26. Declare a variable where we will join the reverse characters into a string 
    return backwardsStr === noSpaces;                  //27. Compare the Reversed String with the original No Space String
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;