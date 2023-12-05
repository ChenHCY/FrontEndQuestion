/* Leetcode 863 · Binary Tree Path Sum IV

If the depth of a tree is smaller than 5, this tree can be represented by a list of three-digits integers.

For each integer in this list:

  1. The hundreds digit represents the depth D of this node, 1 <= D <= 4.
  2. The tens digit represents the position P of this node in the level it belongs to, 1 <= P <= 8. The position is the same as that in a full binary tree.
  3. The units digit represents the value V of this node, 0 <= V <= 9.

Given a list of ascending three-digits integers representing a binary with the depth smaller than 5. You need to return the sum of all paths from the root towards the leaves.

Example 1:

Input: [113, 215, 221]
Output: 12
Explanation:
  The tree that the list represents is:
    3
   / \
  5   1
  The path sum is (3 + 5) + (3 + 1) = 12.
  
Example 2:

Input: [113, 221]
Output: 4
Explanation:
  The tree that the list represents is:
    3
     \
      1
  The path sum is 3 + 1 = 4.
*/

const pathSum = (nums) => {
    let res = 0;
    let map = new Map();
    
    // Save all the elements into the hashmap
    for (let num of nums) {
        let key = Math.floor(num / 10); // it means d + p
        let value = Math.floor(num % 10);
        map.set(key, value);
    }

    const dfs = (rootKey, sum) => {
      // Exit condition
      if (!map.has(rootKey)) {
          return;
      }
      
      //console.log(map.get(rootKey));
      sum += map.get(rootKey);

      let currDepth = Math.floor(rootKey / 10);
      let currP = Math.floor(rootKey % 10);

      let childLeftKey = (currDepth + 1) * 10 + (2 * currP  - 1);
      let childRightKey = childLeftKey + 1;


      // If it does not have any children nodes, arrived at leaves, add into res
      if (!map.has(childLeftKey) && !map.has(childRightKey)) {
          res += sum;
          return;
      }

      // Modify the recursion to handle the case where a child is absent
      dfs(childLeftKey, sum);
      dfs(childRightKey, sum);
      
    };

    // Start the DFS from the root key
    dfs(Math.floor(nums[0] / 10), 0);

    return res;
};


const test1 = [113, 215, 221];
const test2 = [114, 213, 315, 321, 435, 449];

console.log(pathSum(test1)); // Output: 12
console.log(pathSum(test2)); // Output: 42
