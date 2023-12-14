/* Q2:  实现 arguments的使用*/

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
