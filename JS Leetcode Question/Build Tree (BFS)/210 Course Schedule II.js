/* 210. Course Schedule II

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
All the pairs [ai, bi] are distinct.

*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // create a map [{1: []}] 
    const graphArray = new Array(numCourses).fill(0).map(() => []);
    // create a array to conunt each task still need dependencies [0, 2, 1]
    const indgree = new Array(numCourses).fill(0);

    // build tree
    for (const [taskA, taskB] of prerequisites){
        graphArray[taskB].push(taskA); // [{taskB: [taskA, taskC]}] ==> finish taskB, then we could finish task A and task C
        indgree[taskA]++;  // count task A has how many depeneces
    }

    console.log(graphArray)
    console.log(indgree)

    // collect the task with no dependencies need
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

        // find next task we could start it
        for(const next of graphArray[curr]){ // [taskA, taskC]
            indgree[next]--; // reduce counts

            // this task did not need more depences, could add queue 
            if(indgree[next] === 0){
                queue.push(next);
            }
        }
    }

    // check the limit, if final result length not equals n
    if(res.length !== numCourses){
        return []; // has conflict
    }

    return res;    
};
