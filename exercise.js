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

    /*
    In this first part I declare a new array (array1), which will be composed by the given string without spaces. To remove the spaces 
    I use the combination of split(" ").join(""), splitting the string and putting it back together without spaces, and then I add another 
    split("") to separate the string inside array1.
    */ 

    const arr1 = str.split(" ").join("").split(""); //Declare array 1.
    const arr2 = []; //Declare a second array to complete it with the string backwards.

    for (let index = arr1.length - 1; index >= 0; index--){ //I start a loop to go from the back to the front of the array arr1.
            
        arr2.push(arr1[index]); //I nest the elements inside the array from back to front to the new array.

    }

    return arr1.toString() === arr2.toString() ? true : false; //I convert the arrays to strings, check if they are equal and return true or false.

    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;