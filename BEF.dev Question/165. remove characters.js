/*BEF.dev 165. remove characters

Given a string contaning only a, b and c, remove all b and ac.

removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'

What is the time and space complexity of your approach?
Time: O(n)  Space: O(n)
*/

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  // your code here
  const stack = []; //stack

  for(let i = 0; i < input.length; i++){
    // input.charAt(i)  = input[i] 
    if(input.charAt(i) == 'c' && stack[stack.length - 1] == 'a'){
      stack.pop();
    } else if(input.charAt(i) != 'b'){
      stack.push(input.charAt(i));
    } 
  }

  return stack.join(''); //返回一个字符串，该字符串是通过将stack中的所有元素连接在一起而创建的，由空字符串分隔。
}

console.log(removeChars('cabbaabcca'));
