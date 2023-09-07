/* JavaScript Algorithms and Data Structures 5 Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

    cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

//cid里面存的是硬币名字，和我们收银抽屉里面存在的每个硬币的总额
function checkCashRegister(price, cash, cid) {
  //the coin name and amount value ==> 每个硬币的名字 和 对应的总额
  const coinArr = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  //first count "the change due"
  let change = (cash - price) * 100;
  let changeArr = []; //the change due array

  //second, count the cid total value
  let cidTotal = 0;
  for(let i = 0; i < cid.length; i++){
    cidTotal += cid[i][1] * 100;
  }

  //third, compare the cidTotal with change due value
  if(cidTotal < change){ //如果找零不够，输出没有足够的零钱
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (cidTotal === change) { //如果零钱刚好够，则输出关闭
    return {status: "CLOSED", change: cid};
  } else { //零钱足够的
    for(let i = coinArr.length - 1; i >= 0; i--){
      let coinName = coinArr[i][0]; //the coin name
      let coinValue = coinArr[i][1] * 100; //the coin amount value 

      //cid里面存的是硬币名字，和我们收银抽屉里面存在的每个硬币的总额，所以我们要计算出当前硬币的数量
      let avalibleCoinCounts = cid[i][1] / coinArr[i][1]; //Hom many the coin can used it 

      //然后开始计算使用的coin
      //首先计算使用当前硬币coin需要的数量，然后和我们有的数量进行比较 取最小值
      let returnCoins = Math.min(change / coinValue, avalibleCoinCounts);
      returnCoins = Math.floor(returnCoins); //因为可能存在小数，所以向下取整，硬币不能拆开
      const currUsedReturnAmount = returnCoins * coinValue; //计算使用这个硬币最大的找零值

      if(currUsedReturnAmount > 0){//it can used return 
        //按照规则 存入最后的 res obejct
        changeArr.push([coinName, currUsedReturnAmount / 100]);
        //计算剩余还需要的找零值，保留两位小数
        change -= currUsedReturnAmount; 
      }
    }

    //还需要继续找零，the change due value is not over
    if(parseFloat(change) > 0){
       return {status: "INSUFFICIENT_FUNDS", change: []};
    } 
  
    console.log(changeArr);
    return {status: "OPEN", change: changeArr};
  }
}


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


