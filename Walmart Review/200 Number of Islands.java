/* 200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/
//Solution 1: Used DFS method, 填海算法，记录岛屿的数量
class Solution {
    public int numIslands(char[][] grid) {
        if(grid.length == 0 || grid[0].length == 0){
            return 0;
        }

        int m = grid.length; //区域的宽度
        int n = grid[0].length; //区域的长度
        int countLand = 0; //计算岛屿的数量

        //main travser all the grid space check the island
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(grid[i][j] == '1'){
                    countLand += 1; //发现一块岛屿，计数
                    dfs(grid, m, n, i, j);
                }
            }
        }

        return countLand; //输出岛屿的数量
    }

    public void dfs(char[][] grid, int m, int n, int x, int y){
        //exit condition: 超出界限，or 遇到海洋
        if(x < 0 || x >= m || y < 0 || y >= n || grid[x][y] == '0'){
            return;
        }

        //如果在区域内，且还是陆地，则进行记录，标记陆地已经访问过, “填海算法”
        grid[x][y] = '0';
        //继续向四个方向遍历
        dfs(grid, m, n, x + 1, y);
        dfs(grid, m, n, x - 1, y);
        dfs(grid, m, n, x, y + 1);
        dfs(grid, m, n, x, y - 1); 
    }
}
