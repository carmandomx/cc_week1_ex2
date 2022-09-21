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
    
    const stsr = str; //Copyng the value into a local val

    let word=stsr.split(''); //"''" Defines the split level

    var better=[]; //Empty array for comparing
    
    var aux=0; //Aux var to count valid indexes

    for (t=0; t<word.length; t++) //Erasing inner and outer space
    {
         //To count empty spaces
        if(word[t] == ' ')
        {
            aux++; //If the sentence has empty space, it's skipped
        }
        else
        {
            better[t-aux]=word[t];
        }
    }
    
    var palindromex=[]; //Variable to store the flipped word

    for (i=0; i<better.length; i++) //flipping
    {
        palindromex[i] = better[better.length-1-i];
    }

    //Converting to string 4 easy handling
    var stn1=palindromex.toString();
    var stn2=better.toString();

    //letters are not palindromes
    if (better.length<2)
    {
        return toBeDefined();
    }
    
    //Anita cleans the vat 
    else if (stn1 == stn2)
    {
        return true;
    }

    else if (stn1 != stn2)
    {
        return false;
    }
    
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;
