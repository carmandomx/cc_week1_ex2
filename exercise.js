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
    var splitted = str.split("");
    let reversed = splitted.reverse().join("").toString();
    let solution = reversed ;
    const len = reversed.length;  
    for (let i = 0; i < len; i++) {  
        if(reversed[i]==" "){
            console.log(i);
            let temp = solution[i];
            solution=setCharAt(solution,i,solution[i+1]);
            solution=setCharAt(solution,(i+1),temp);
        }
    } 
    if(str==solution){
        return true;
    }else{
        return false;
    }
    /* Only make changes below this comment */
}
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;