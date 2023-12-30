const board1 = [['+', '+', '+', '+', '+', '+', '+', '0', '0'],
                ['+', '+', '0', '0', '0', '0', '0', '+', '+'],
                ['0', '0', '0', '0', '0', '+', '+', '0', '+'],
                ['+', '+', '0', '+', '+', '+', '+', '0', '0'],
                ['+', '+', '0', '0', '0', '0', '0', '0', '+'],
                ['+', '+', '0', '+', '+', '0', '+', '0', '+']];
const start1_1 = [2, 0]; // Expected output = (5, 2)
const start1_2 = [0, 7]; // Expected output = (0, 8)
const start1_3 = [5, 2]; // Expected output = (2, 0) or (5, 5)
const start1_4 = [5, 5]; // Expected output = (5, 7)


//main function
const findPath = (board, start) => {
   const m = board.length;
   const n = board[0].length;
   const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
   
   // is in the borad
   const isValid = (row, column) => row >= 0 && row < m && column >= 0 && column < n;
   
   //will exit
   const isExit = (row, column) => row === 0 || row === m - 1 || column === 0 || column === n - 1;
   
   const queue = [[start[0], start[1], 0]];
   const visited = new Set();
   
   visited.add(`${start[0]},${start[1]}`);
   
   while(queue.length > 0){
     const [currRow, currColumn, pathCost] = queue.shift();
     
     // 4 directions
     for(const [dx, dy] of directions){
       const newRow = currRow + dx;
       const newColumn = currColumn + dy;
       
       if(isValid(newRow, newColumn) && board[newRow][newColumn] == '0' && !visited.has(`${newRow},${newColumn}`)){
         if(isExit(newRow, newColumn)){
           return [newRow, newColumn];
         }
         
        queue.push([newRow, newColumn, pathCost + 1]);
        visited.add(`${newRow},${newColumn}`);
       }
     }
   }
   
   return null;
}

console.log(findPath(board1, start1_1));
console.log(findPath(board1, start1_2));
console.log(findPath(board1, start1_3));
console.log(findPath(board1, start1_4));
