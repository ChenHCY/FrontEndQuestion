/* Q1:  实现 arguments的使用*/

function add(x, y){
	
	if(arguments.length >= 2){
		let arr = Array.from(arguments);
		return arr.reduce((item, sum) => sum + item);
	} else{
		return function(y){
			return x + y;
		}
	}
}

console.log(add(2, 5) === 7);
console.log(add(2, 5, 1) === 7);
console.log(add(2)(5) === 7);
console.log(add(2)(5, 1) === 7);


/* Q2:  字符串中添加 + or - 实现总值等于100 ==> 282. Expression Add Operators 的变形*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 100;

const fn = (nums, target) => {
    let res = [];

    function dfs(index, express, currValue, lasOper){
        //exit condition
        if(index === nums.length){
            if(currValue === target){
                res.push(express);
            }
            return; //一定要有个出口
        }

        for(let i = index; i < nums.length; i++){
            const currNumStr = nums.slice(index, i+1).join("");
            const currNum = parseInt(currNumStr, 10);

            if(index === 0){
                dfs(i + 1, currNumStr, currNum, currNum);
            } else{
                // + 
                dfs(i + 1, express + '+' + currNumStr, currValue + currNum, currNum);
                // - 
                dfs(i + 1, express + "-" + currNumStr, currValue - currNum, -currNum);
            }
        }
    };

    dfs(0, "", 0, 0);
    return res;
}

console.log(fn(nums, target));
