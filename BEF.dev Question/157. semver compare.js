/*BEF.dev 157. semver compare

Please implement a function to compare 2 semver strings.

compare('12.1.0', '12.0.9')
// 1, meaning first one is greater

compare('12.1.0', '12.1.2')
// -1, meaning latter one is greater

compare('5.0.1', '5.0.1')
// 0, meaning they are equal.
*/

/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  // your code here
  //把两个string通过split(".") 分隔并且存入到array[]里面
  let arr1 = v1.split(".").map(Number);
  let arr2 = v2.split(".").map(Number); 
  //.map(Number) 是一个将字符串值数组转换为数字值数组

  let i = 0;

  //遍历比较两个array[]里面的每个值
  while(i < arr1.length){
    console.log(arr1[i]);
    console.log(arr2[i]);
    if(arr1[i] > arr2[i]){
      return 1;
    } 
    
    if (arr1[i] < arr2[i]){
      return -1;
    }

    i++;
  }

  return 0;
}

console.log(compare('0.1.100', '0.1.99'));
