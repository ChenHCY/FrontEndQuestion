/* JavaScript Algorithms and Data Structures  2. Roman Numeral Converter

Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	  1000
CM	900
D	  500
CD	400
C	  100
XC	90
L	  50
XL	40
X	  10
IX	9
V	  5
IV	4
I	  1
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanChar = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let res = "";

  for(let i in val){
    while(num >= val[i]){
      res += romanChar[i];
      num -= val[i];
    }
  }
  
  return res;
}

convertToRoman(36);
