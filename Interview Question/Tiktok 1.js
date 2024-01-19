/*
Given an integer array queries and a positive integer intLength, return an array answer where answer[i] is either the queries[i](th) smallest positive palindrome of length intLength or -1 if no such palindrome exists.
A palindrome is a number that reads the same backwards and forwards. Palindromes cannot have leading zeros.

Ex1:
Input: queries = [1,2,3,10] intLength = 2
Output: 11,22,33,-1

Ex2:
Input: queries = [1,2,3,11] intLength = 3
Output: 101,111,121,202
*/

// we first find the max value of queries, we know when we can end
//1. we use intLength to creta all the Palindromes that have inLength digits
// ==> function: Math.pow(10, ) time: O(maxValue * inLength)
//2. we just 1 2 3 11 smaeellest one => time: O(queries.length)

// Ex3:
// intLength = 4 , first 3 palidromes：1001 1111 1221  
// intLength = 5,  10001 10101 10201. ==> Math.pow(10, intLength - 1)+1 ==> smallest 
// String str = add new dighit into mid of the length
// 

// output = given a i, and intLength. 
// i = 1  100 01  i = 2 10101 i = 3 10201  i = 11 110
// For example: intLength = 5,  10001 10101 10201.


//main function O(n * intLength) n is th length of queries
const queries1 = [1,2,3,10];
const intLength1 = 2;

const queries = [1,2,3,11];
const intLength = 3;

// small function: to create all the Palindromes number
//time: O(n) n is the inLengths, also means the length of digits
const createPalindromes = (i, intLength) => {
    let mid = Math.ceil(intLength / 2); //2
    let base = Math.pow(10, mid - 1) + i; // 10

    //create the palidrome
    let str = base.toString(); 
    let resP;
    if(intLength % 2 == 0){ //如果回文长度为双数，只需要反转前半部分减去中间一位
        resP = str + str.slice(0, str.length).split('').reverse();
    } else {//如果回文长度为单数，反转全部前半部分
        resP = str + str.slice(0, str.length - 1).split('').reverse();   
    }
    return resP; 
}

//main function: travser all the element
//Time: O(m) is the length of queries
const fn = (queries, intLength) => {
    let res = [];
    
    for(const q of queries){
        //check to find queries[i]
        let num = createPalindromes(q - 1, intLength);
        if(num.length == intLength){ //检查回文长度是否符合要求
            res.push(+(num)); //把字符串转换为数字，
        } else{ //如果不符合，加入-1
            res.push(-1);   
        }
    }
    
    return res;
}

console.log("test print")
console.log(fn(queries1, intLength1));//print out
console.log(fn(queries, intLength));//print out
