/* BEF.dev 163. integer to roman numerals
Roman numerals are represented by combinations of following seven symbols, each with a fixed integer value.

Symbol	I	V	 X	L	   C	 D	 M
Value	  1	5	 10	50	100	500	1000

For Standard form, subtractive notation is used, meaning 4 is IV rather than IIII, 9 is IX rather than VIIII. Same rule applies to 40(XL) and 900(CM) .etc.

Simply speaking, the roman numerals in standard form follow these rules.

symbols are listed from highest to lowest, from left to right
from left to right, if the next symbol value is bigger than current one, it means subtracting, otherwise adding.
Please implement integerToRoman(). The input are all integers within valid range.

integerToRoman(123)
// 'CXXIII'

integerToRoman(1999)
// 'MCMXCIX'

integerToRoman(3420)
// 'MMMCDXX'
*/

/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */
/* 因为是要输出这个数值对应的罗马字母字符串，所以思路就是从最大值开始往小遍历

但num的值大于等于这个字母的值的时候，记录这个字母，然后num减去这个字母对应值

直到所以的罗马字母都遍历了一次，num == 0， 记录得到的字符串，也就是能组成这个数值的答案

*/
function integerToRoman(num) {
  // your code here
  const romantable = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
  let str = "";

  for(let i in romantable){ //i means character symbol
    while(num >= romantable[i]){ //table[i] means the value
      num -= romantable[i]; //minus the value in the num
      str += i; //add the character symbol into result string
    }
  }
  
  return str;
}


console.log(integerToRoman(3420));
