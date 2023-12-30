//找到完全没有障碍物的行和列

const board1 = [['+', '+', '0', '+', '+', '0'],
                ['+', '+', '0', '0', '0', '0'],
                ['0', '0', '0', '+', '+', '0'],
                ['0', '0', '0', '0', '0', '0']];


//main function
const findPath = (board) => {
   const m = board.length;
   const n = board[0].length;
   
   let row = new Array(m);
   let column = new Array(n);
   
   for(let i = 0; i < m; i++){
     for(let j = 0; j < n; j++){
        if(board[i][j] === '+'){
          row[i] = false;
          column[j] = false;
        }    
     }
   }
   
   let resRow = [];
   let p1 = 0;
   for(let i = 0; i < row.length; i++){
     if(row[i] !== false){
       resRow[p1] = i;
       p1++;
     }
   }
   
   let resColumn = [];
   let p2 = 0;
   for(let i = 0; i < column.length; i++){
     if(column[i] !== false){
       resColumn[p2] = i;
       p2++;
     }
   }
   
   return {Row: resRow, Column: resColumn};
   
}

console.log(findPath(board1));
