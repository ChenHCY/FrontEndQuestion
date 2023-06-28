/* 304. Range Sum Query 2D - Immutable

Given a 2D matrix matrix, handle multiple queries of the following type:

    · Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Implement the NumMatrix class:

    · NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
    · int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

You must design an algorithm where sumRegion works on O(1) time complexity.

 Example 1:
 Input
["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
Output
[null, 8, 11, 12]

Explanation
NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
-104 <= matrix[i][j] <= 10^4
0 <= row1 <= row2 < m
0 <= col1 <= col2 < n
At most 104 calls will be made to sumRegion.
*/

//Solution 1: 暴力解法
//Time: O(n^2)  Space: O(n * m)  
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.data = matrix;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for(let i = row1; i <= row2; i++){
        for(let j = col1; j <= col2; j++){
            sum += this.data[i][j];
        }
    }
    return sum;
};
/*****************************************************************************************/

//Solution 2: Prefix Sum 前缀和数组
//Time: O(n∗m) => 预处理前缀和数组需要对原数组进行线性扫描, 计算结果为O(1)
//Space: O(n*m) => 创建了一个m * n长度的 二维前缀和数组
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    //创建一个二维的前缀和数组
    this.prefix = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    // 1. 二维前缀和数组 PrefixSum[][] 中的每一个格子记录的是「以当前格子为区域的右下角，区域左上角恒定为原数组的左上角的区域和」
    // ==> PrefixSum [i][j] 理解成是以 (i, j) 为右下角，(0, 0) 为左上角的 整个区域和
    // ==> 公式： PrefixSum [i][j] =  PrefixSum[i-1][j] + PrefixSum[i][j-1] - PrefixSum[i-1][j-1] + matrix[i][j];
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            this.prefix[i][j] = this.prefix[i - 1][j] + this.prefix[i][j - 1] - this.prefix[i - 1][j - 1] + matrix[i - 1][j - 1];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
// 2. 然后怎么计算一个区域的总和：比如： (x1, y1) 作为左上角 (x2, y2) 作为右下角 的区域和
// ==> 我们可以快速使用已经得出的前缀和数组进行求和：
// ==> 公式：areaSum = PrefixSum [x2][y2] - PrefixSum [x1 - 1][y2] - PrefixSum [x2][y1 - 1] + PrefixSum [x1 - 1][y1 - 1]
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let s1 = row1 + 1;
    let e1 = col1 + 1;
    let s2 = row2 + 1;
    let e2 = col2 + 1;
    let sum = this.prefix[s2][e2] - this.prefix[s1 - 1][e2] - this.prefix[s2][e1 - 1] + this.prefix[s1 - 1][e1 - 1];   
    return sum;
};


//Test part:
/** 
 * Your NumMatrix object will be instantiated and called as such:
 */
 var obj = new NumMatrix(matrix)
 var param_1 = obj.sumRegion(row1,col1,row2,col2)
