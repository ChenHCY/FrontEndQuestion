/*BEF.dev 162. find the single integer

Given an array of integers, all integers appear twice except one integer, could you quickly target it ?

const arr = [10, 2, 2 , 1, 0, 0, 10]
findSingle(arr) // 1

What is time & space cost of your approach ? Could you do better ?

*/

//My Solution: Used Stack() and arr.sort();
//Time: O(n^2)  Space: O(1)
/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  // your code here
  const stack = [];

  arr.sort();
  
  for(let num of arr){
    if(num == stack[stack.length - 1]){
      stack.pop();
    } else{
      stack.push(num);
    }
  }

  return stack.pop();
}

const arr = [10, 2, 2 , 1, 0, 0, 10]

console.log(findSingle(arr))


//Solution 2: Used HashSet(): Hashset used for remove dulipcate number
//Time: O(n) Space: O(n / 2)
function findSingle(arr) {
  const single = new Set();

  arr.forEach((num) => {
    if (single.has(num)) {
      single.delete(num);
    } else {
      single.add(num);
    }
  });

  return single.values().next().value; //输出haset里面的第一个元素
  //这是JavaScript获取Set对象第一个值的简洁方法，因为该next()方法返回迭代器序列中的第一个值。
}

const arr = [10, 2, 2 , 1, 0, 0, 10]
console.log(findSingle(arr));


//Solution 3: Used HashMap to counts the appear times of every number, then return the number only appear once
//Time: O(n)  Space: O(n)
function findSingle(arr) {
  // your code here
  const map = new Map();
  let res = 0;
  
  for(const num of arr){ //count the every number occur times
    map.set(num, (map.get(num) || 0) + 1);
  }

  for(const key of map.keys()){
    if(map.get(key) == 1){
      res = key;
      break;
    }
  }

  return res;
}

const arr = [10, 2, 2 , 1, 0, 0, 10]
console.log(findSingle(arr));
