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
    let myString = str.split(""); //Here we are spliting the string into an array.
    
    result = true; //This would be the default value to return
    let myStringCompare1 = ""; //these are going to be the strings that we must use to compare if i is a palindrome word
    let myStringCompare2 = "";

        for (let i = 0; i < myString.length; i++) { 
           
            if (myString[i]==" ") { //In this if we are going to discard  any blanckspaces in the word.
               
            }else{
               myStringCompare1= myStringCompare1+myString[i]; //Here is where we are going to put all the letters different tan blanckspace
            }            
        }

       
        for (let i = 0; i < myString.length; i++) { 
           
            if (myString[i]==" ") { //In this if we are going to discard  any blanckspaces in the word.
               
            }else{
               myStringCompare2= myString[i]+myStringCompare2;//Here is where we are going to put all the letters different tan blanckspace, but backwords
            }            
        }

        console.log(myStringCompare1+myStringCompare2)

        if (myStringCompare1 == myStringCompare2 ) { //And in here we are going to do the final check to see if the word is palindrome
            
        }else{
           result = false; //If the word is not palindrome, here is where we are going to indicate it
        }

        return result;

    /* Only make changes below this comment */
}
  




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;