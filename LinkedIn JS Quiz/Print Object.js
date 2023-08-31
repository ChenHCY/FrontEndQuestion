/*LinkedIN JavaScript Quiz */

// Question 1:
const props = [
{id: 1, name: "Tom"},
{id: 2, name: "Jack"},
{id: 3, name: "FAKE"}
];

const [, , { name }] = props;
console.log(name);

//Print Output: FAKE

//Line 9 前两个是空集，则输出第三个name Fake
