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
    let array=(str).split(' ') /* creating array consisting only of words (spaces retired)  ------ > anita lava la tina*/
    let suma = ''
    
    for (let i = 0; i<array.length; i++){ /* adjoint all words to form only one ------> anitalavalatina */
        suma=suma+array[i]
    }

    let len = suma.length /* quantity of letters*/

    if (len%2===0){ /* Checking for the parity of the quantity of letters. Even case*/
        for (let i = 0; i < (len)/2;i++){
            if (suma[i]!==suma[len-1-i]){ /* Check equality on 'contrary' letters in the word. Meaning the first with the last, the second one with the penultimate... */
                
                return false
            }
        }
    return true
    } else { /* odd case*/
        for (let i = 0; i < Math.trunc((len)/2)+1;i++){
            if (suma[i]!==suma[len-1-i]){
                
                return false
            }
        }
        return true
    }
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;