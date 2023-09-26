/* use the JS achived the 2048 game

have four direction: left, right, up, down
*/

/*
[null, null, null, 2]
[null, null, null, 4]
[null, 2,     2,   4]
[null, 2,     4,   4]
*/

let board = [[null, null, null, 2], [null, null, null, 4], [null, 2, 2, 4], [null, 2, 4, 4]];
let newBoard = [[], [], [], []];

//function to do the 2048 game
const move2048 = (arr, str) => {
  //check the direction and move the grids
  switch(str){

  /********************* left part ****************************/
  case "left":
    let index = 0; //used for marked the new board rows

    //traver all the elment from oldboard and followed direction move
    arr.forEach((itemArr) => {
      let stack = []; //use stack to check whether is same value grids

      for(let i = 0; i < itemArr.length; i++){
        //if find the grid value is empty
        if(itemArr[i] === 0 || itemArr[i] === null){
          continue;
        }

        //if find the same value grids
        if(stack.length != 0 && stack[stack.length - 1] === itemArr[i]){
          let newNum = stack.pop() + itemArr[i]; //count the sum
          stack.push(newNum); //add sum into stack again
          continue;
        }
        stack.push(itemArr[i]); //if not meet any same value grid, just add into stack
      }

      //add the final anser into new Board
      for(let i = 0; i < itemArr.length; i++){
        if(typeof stack[i] === 'number'){
          newBoard[index][i] = stack[i];
        } else{
          newBoard[index][i] = null;
        }
      }

      index++;
    });

    return newBoard;

  /********************* right part ****************************/
  case "right":
    let i2 = 0; //used for marked the new board rows

    //traver all the elment from oldboard and followed direction move
    arr.forEach((itemArr) => {
      let stack = []; //use stack to check whether is same value grids

      for(let i = itemArr.length - 1; i >= 0; i--){
        //if find the grid value is empty
        if(itemArr[i] === 0 || itemArr[i] === null){
          continue;
        }

        //if find the same value grids
        if(stack.length != 0 && stack[stack.length - 1] === itemArr[i]){
          let newNum = stack.pop() + itemArr[i]; //count the sum
          stack.push(newNum); //add sum into stack again
          continue;
        }
        stack.push(itemArr[i]); //if not meet any same value grid, just add into stack
      }

      console.log(stack)

     //add the final anser into new Board
      for(let i = stack.length - 1; i >= 0; i--){
        if(typeof stack[i] === 'number'){
          newBoard[i2].push(stack[i]);
        }
      }

      //Beacuse the direction is right, so all the number should move to right side
      while(newBoard[i2].length < itemArr.length){
        newBoard[i2].unshift(null);
      }

      i2++;
    });

    return newBoard;

  /********************* up part ****************************/
  case "up":
    //traver all element grids based on column
    for (let j = 0; j < arr[0].length; j++) {
      let stack = []; //stack for used meet the same grid value

      for (let i = 0; i < arr.length; i++) {
        //if find the grid value is empty
        if (arr[i][j] === 0 || arr[i][j] === null) {
          continue;
        }

        //check whether meet same value grid
        if (stack.length !== 0 && stack[stack.length - 1] === arr[i][j]) {
          let newNum = stack.pop() + arr[i][j];
          stack.push(newNum);
          continue;
        }
        stack.push(arr[i][j]);
      }

      //add the number into newBoard
      for (let i = 0; i < arr.length; i++) {
        if (typeof stack[i] === 'number') {
          newBoard[i][j] = stack[i];
        } else {
          newBoard[i][j] = null;
        } 
      }
    } 

    return newBoard;

  /********************* down part ****************************/
  case "down":
    //traver all element grids based on column
    for (let j = 0; j < arr[0].length; j++) {
      let stack = []; //stack for used meet the same grid value

      for (let i = arr.length - 1; i >= 0; i--) {
        //if find the grid value is empty
        if (arr[i][j] === 0 || arr[i][j] === null) {
          continue;
        }

        //check whether meet same value grid
        if (stack.length !== 0 && stack[stack.length - 1] === arr[i][j]) {
          let newNum = stack.pop() + arr[i][j];
          stack.push(newNum);
          continue;
        }
        stack.push(arr[i][j]);
      }

      /* stack output:
      []
      [ 4 ]
      [ 4, 2 ]
      [ 8, 4, 2 ]
      */

      //add the number into newBoard
      for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof stack[0] === 'number') {
          newBoard[i][j] = stack.shift(); //get the first left number of stack and remove it
        } else {
          newBoard[i][j] = null;
        } 
      }
    }

    return newBoard;
  
  }
}

 /********************* Test case part ****************************/
console.log(move2048(board, "down"));
