/* Leetcode 2718. Sum of Matrix After Queries

You are given an integer n and a 0-indexed 2D array queries where queries[i] = [typei, indexi, vali].

Initially, there is a 0-indexed n x n matrix filled with 0's. For each query, you must apply one of the following changes:

    · if typei == 0, set the values in the row with indexi to vali, overwriting any previous values.
    · if typei == 1, set the values in the column with indexi to vali, overwriting any previous values.
    
Return the sum of integers in the matrix after all queries are applied.

Example 1:

Input: n = 3, queries = [[0,0,1],[1,2,2],[0,2,3],[1,0,4]]
Output: 23
Explanation: The image above describes the matrix after each query. The sum of the matrix after all queries are applied is 23. 

Example 2:

Input: n = 3, queries = [[0,0,4],[0,1,2],[1,0,1],[0,2,3],[1,2,1]]
Output: 17
Explanation: The image above describes the matrix after each query. The sum of the matrix after all queries are applied is 17.

Constraints:

1 <= n <= 104
1 <= queries.length <= 5 * 104
queries[i].length == 3
0 <= typei <= 1
0 <= indexi < n
0 <= vali <= 105
*/

/* 此题思路是根据 queries[i] = [type, index, val] 的类型type, index value（位置 行数 OR 列数），来改变matrix中每个格子的值

 Beacuse it was overwriting any previous values ==> 覆盖任何以前的值 ==？ 所以我们应该从后面反向计算，如果遇到已经处理过的值，则不再改变
 
 type = 0, set the row values, type = 1 set the column value
*/

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function(n, queries) {
    let m = queries.length;
    let res = 0;
    const rowSet = new Set();
    const coluSet = new Set();
    //反向遍历
    for(let i = m - 1; i >= 0; i--){
        //if typei == 0, set the values in the row with indexi to vali, overwriting any previous values.
        if(queries[i][0] == 0 && !rowSet.has(queries[i][1])){
            res += (n - coluSet.size) * queries[i][2];
            rowSet.add(queries[i][1]);
        }

        //if typei == 1, set the values in the column with indexi to vali, overwriting any previous values.
        if(queries[i][0] == 1 && !coluSet.has(queries[i][1])){
            res += (n - rowSet.size) * queries[i][2];
            coluSet.add(queries[i][1]);
        }
    }

    return res;
};
