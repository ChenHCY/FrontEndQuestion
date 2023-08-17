/*BFE.dev 32. implement `Promise.all()`

Could you write your own all() ? which should works the same as Promise.all()

note

Do not use Promise.all() directly, it is not helping
*/

/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  // your code here
  return new Promise((resolve, reject) => {
      //promises时空的
    if(!promises.length){
      return resolve([]); //输出也是空的
    }

    let result = []; //用来记录成功resolve的promise
    let count = promises.length; //用来记录还有多少剩余的Promise

    //main travser：Promise.all()只有等到所有Promise都被成功解析时，才会输出成功
    for(let i = 0; i < promises.length; i++){
      Promise.resolve(promises[i]).then((res) =>{
        count--; //有一个Promise解析成功
        //不要push，push会导致结果乱序
        //Don't use the push method,it will cause the results to be out of order
        result[i] = res; //记录解析的结果

        //使用count确保所有的promise都执行完毕
        if(count === 0){
          resolve(result); //输出解析成功和结果
        }
      }, err => {
        reject(err); //如果有一个Promise被拒绝，输出拒绝，函数暂停
      });
    }

  });
}


//Other solution from google search
Promise.myAll = (promises) => {
  return new Promise((rs, rj) => {
    // counter
    let count = 0
    // Storage results
    let result = []
    const len = promises.length
    
    if (len === 0) {
      return rs([])
    }
    
    promises.forEach((p, i) => {
      // Some array items may not be Promise and need to be converted manually
      Promise.resolve(p).then((res) => {
        count += 1
        // Collect the return value of each Promise 
        result[ i ] = res
        // Set the value of Promise to result, when all Promises are successful
        if (count === len) {
          rs(result)
        }
        // As long as one promise fails, the result is failure
      }).catch(rj)
    })
  })
}
