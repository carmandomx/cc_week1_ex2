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

    /* Expresion regular para remover espacios en blanco */
    const regExp = /\s+/g;

    /* Se le asigna a una variable el valor de 'str' pero convirtiendo todas las letras a minusculas y removiendo los espacios en blanco */
    let lowRegExp = str.toLowerCase().replace(regExp, '');

    /* Se divide la cadena letra por letra con método split, con el método reverse voteamos la cadena y con el método join volvemos a integrar la cadena */
    let newStr = lowRegExp.split('').reverse().join('');
    
    /* Comparar la cadena 'normal' vs la cadena en reversa */
    if(newStr === lowRegExp) {
        return true;
    }
    else {
        return false;
    }
        
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;