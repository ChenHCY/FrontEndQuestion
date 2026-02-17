/*
190. Reverse Bits

Reverse bits of a given 32 bits signed integer.

Example 1:

Input: n = 43261596

Output: 964176192

Explanation:

Integer	Binary
43261596	00000010100101000001111010011100
964176192	00111001011110000010100101000000

Example 2:

Input: n = 2147483644

Output: 1073741822

Explanation:

Integer	Binary
2147483644	01111111111111111111111111111100
1073741822	00111111111111111111111111111110
 

Constraints:

0 <= n <= 2^31 - 2
n is even.
Follow up: If this function is called many times, how would you optimize it?
*/

// 类比：反转十进制数
// 假设你有一个数字 1234，你想把它反转成 4321。你可以按照以下步骤操作：

// 1. 取最后一位数字（n/10）：4（1234 变为 123）。
// 2. 将(res + n%10) 加到结果中：（结果为 0，现在为 4）。
// 3. 要加上下一个数字（3），首先将结果（res*10）向右移动（4 变为 40），然后加上3 得到 43。

/**
 * @param {number} n
 * @return {number}
 */
// 反转二进制数
// 1. 提取比特（n & 1）：这就像取“最后一位数字”。在二进制中， & 1它告诉你这个数字是以 0 还是 1 结尾。
// 2. 移位（res << 1）：在十进制中，乘以 10 即可将数字向左移动一位。在二进制中，左移一位即可将位向右移动一位。这样“个位”就空出来了，可以放入新的一位。
// 3. 合并( res | bit): 将刚刚提取的部分放入结果中刚刚创建的空白空间中。
// 4. 丢弃已用位（n >>= 1）: 将原始数字向右移动，有效地丢弃“最后一位数字”，以便在下一个循环中查看下一位。
var reverseBits = function(n) {
    let res;

    for(let i = 0; i < 32; i++){
        res <<= 1; // move left, 让res 里面有了新的空间
        res |= (n & 1); // (n & 1) 是 n最右边的数，取出来和res 合并
        n >>= 1; // move n 右边移动1位，==》 然后循环提取下一个，知道全部提取完成
    }

    return res;
};
