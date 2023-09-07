/* JavaScript Algorithms and Data Structures Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

Example:
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
*/

unction palindrome(str) {
  let charStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = charStr.length - 1;

  while(left < right){
    if(charStr[left] != charStr[right]){
      return false;
    }
    left++;
    right--;
  }

  return true;
}

palindrome("A man, a plan, a canal. Panama");
