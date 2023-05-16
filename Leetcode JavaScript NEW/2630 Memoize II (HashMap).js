/* Leetcode  2630 Memoize II (HashMap)

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

fn can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical if they are === to each other.

Example 1:

Input: 
getInputs = () => [[2,2],[2,2],[1,2]]
fn = function (a, b) { return a + b; }
Output: [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]
Explanation:
const inputs = getInputs();
const memoized = memoize(fn);
for (const arr of inputs) {
  memoized(...arr);
}

For the inputs of (2, 2): 2 + 2 = 4, and it required a call to fn().
For the inputs of (2, 2): 2 + 2 = 4, but those inputs were seen before so no call to fn() was required.
For the inputs of (1, 2): 1 + 2 = 3, and it required another call to fn() for a total of 2.

Example 2:

Input: 
getInputs = () => [[{},{}],[{},{}],[{},{}]] 
fn = function (a, b) { return ({...a, ...b}); }
Output: [{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}]
Explanation:
Merging two empty objects will always result in an empty object. It may seem like there should only be 1 call to fn() because of cache-hits, however none of those objects are === to each other.
Example 3:

Input: 
getInputs = () => { const o = {}; return [[o,o],[o,o],[o,o]]; }
fn = function (a, b) { return ({...a, ...b}); }
Output: [{"val":{},"calls":1},{"val":{},"calls":1},{"val":{},"calls":1}]
Explanation:
Merging two empty objects will always result in an empty object. The 2nd and 3rd third function calls result in a cache-hit. This is because every object passed in is identical.
 

Constraints:

1 <= inputs.length <= 10^5
0 <= inputs.flat().length <= 10^5
inputs[i][j] != NaN
*/

/* 思路： 此题是2623题的升级延续，但2623题有直接告诉args参数的类型，所以可以直接拼凑成key值

但在此题中，参数可以是任何类型，所以我们需要给每一个不同的args参数，生成一个新的id

然后根据这个id, 查找对应的fn 调用值

*/

/**
 * @param {Function} fn
 */

//Solution 1
function memoize(fn) {
    let idMap = new Map();
    let argsMap = new Map();
    let index = 0;
    return function(...args) {
        let argsId = JSON.stringify(args.map((argItem) => {
            //检查当前参数是否在之前有出先过
            idMap.set(argItem, idMap.get(argItem) ?? index++);
            return idMap.get(argItem); //输出当前参数对应的自创id
        }))
        //检查当前参数的id是否在以前出现过，如果有，直接输出fn调用的值 ==》 "memoize" 缓存效果
        let fnRest = argsMap.get(argsId) ?? fn(...args); //如果没有，使用当前参数调用fn，得到结果值
        argsMap.set(argsId, fnRest); //把当前args参数对应的id和fn的结果储存在一起
        return fnRest; //最后需要输出fn调用的结果
    }
}

//Soultion 2:
function memoize(fn) {
    const idMap = new Map(); //idMap记录 args参数 和 自创建id的对应关系
    const argsMap = new Map(); //argsMap 记录 最终参数args拼接的结果 和 之前已经产生 的对应关系
    let id = 0;
    //把每一个参数转化成一个id，然后根据id查找已经缓存产生的结果
    return function(...args) {
        //首先给每一个不同的参数生成一个新的id
        //方便和后面fn调用的结果进行对应
        const idList = args.slice().map((arg) => {
            //首先如果之前有过一样的参数arg
            if(idMap.has(arg)){
                return idMap.get(arg);
            } else{ //如果之前没有一样的参数arg
                id++;
                idMap.set(arg, id);
                return id;
            }
        });
        console.log("idList: " + idList);

        //然后根据每个id, 确认调用参数的类型
        const key = JSON.stringify(idList);
        console.log("key: " + key);
        if(argsMap.has(key)){ //如果有之前一样的参数，直接调用结果，形成“memoize”缓存效果
            return argsMap.get(key);
        } else{ //如果之前没有一样的参数
            const res = fn(...args); //生成新的fn调用结果
            argsMap.set(key, res); //把key值和fn调用的结果res 对应存入hashmap中
            return res; //输出function调用的结果
        }
    }
}

//Test Example:
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
 callCount += 1;
 return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
