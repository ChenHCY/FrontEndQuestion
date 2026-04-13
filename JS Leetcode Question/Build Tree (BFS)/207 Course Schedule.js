/* 207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // create a map [[], [], []]
    const graphArray = new Array(numCourses).fill(0).map(() => []);
    // create a array to conunt each task still need dependencies [0, 2, 1]
    const indgree = new Array(numCourses).fill(0); // 一个节点还有多少“前置依赖”没完成

    // build tree
    for (const [taskA, taskB] of prerequisites){
        graphArray[taskB].push(taskA); // [[taskC], [taskA], ...] ==> taskA 是 taskC 的前置课 / taskB 是 taskA 的前置课 ==> 想学 taskA, 必须学完taskB
        indgree[taskA]++; // count taskB was other course prerequisites
    }

    console.log(graphArray)
    console.log(indgree)

    // collect the task with no dependencies needed
    const queue = []
    for(let i = 0; i < numCourses; i++){
        if(indgree[i] === 0){
            queue.push(i);
        }
    }
    console.log(queue)

    // BFS to travser other courses
    const res = [];

    while(queue.length){
        const curr = queue.shift(); // start the task could without any dependencies (prerequisites)
        res.push(curr); // added into result
        console.log(graphArray[curr])
        for(const next of graphArray[curr]){ // [taskB, taskC]
            console.log(next)
            indgree[next]--; // could finish nextTask one by one, so need reduct the counts

            // curr task did not more dependencies requirment, could finish ask next 
            if(indgree[next] === 0){
                queue.push(next);
            }
        }
    }

    // check the limit, if final result length not equals n
    if(res.length !== numCourses){
        return false; // has conflict
    }

    return true;
};
