/* BEF.dev 167. Intersection of unsorted arrays

Given two arrays, find the intersection(items occur in both arrays)

  1. arrays are not sorted, and might have duplicates.
  2. you can modify the arrays
  3. you can return the items in any order, but without duplicates.
This is an easy problem, What is the time & space complexity of your approach?
Time: O(n)  Space: O(n)
*/

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
  // your code here
  let res = []

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  for(let num of set2){
    if(set1.has(num)){
      res.push(num);
    }
  }

  return res;
}
