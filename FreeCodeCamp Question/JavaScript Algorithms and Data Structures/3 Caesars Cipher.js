/*JavaScript Algorithms and Data Structures 3. Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

*/

function rot13(str) {
  let res = "";

  //main travser
  for(let i = 0; i < str.length; i++){
    //题目每个字母， 使用charCodeAt转换成d对应的ASCII code
    const currCode = str.charCodeAt(i);
    //console.log(currCode);

    //if traverse meet the character letter, encoded it
    //当遇到字母的时候，开始进行解码
    if(currCode >= 65 && currCode <= 90){
      
      //encode with ROT13, minus 13 to ASCII code
      //and can not out the line
      //首先解码需要往前推13个字母，同时这是一个环绕字母表的字符
      // 所以需要在低于“A”或高于“Z”时处理环绕
      let encode = currCode - 13;
      if(encode < 65){
        encode += 26;
      }
      //console.log(encode);
      //add the new ASCII code character into res string
      //得到解码之后的ASCII code，使用fromCharCode（）转换成对应的字母 加入到结果string
      res += String.fromCharCode(encode);
     // console.log(res);
    } else{ //如果不是字母，则直接添加进最后的解码string
      //if the curr character is not the letter, just add it into res string
      res += str[i];
    }
  }
  console.log(res);
  return res;
}

rot13("SERR PBQR PNZC");
