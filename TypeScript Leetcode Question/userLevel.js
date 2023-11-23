const userArr = [
  { User: 'user1', Level: 1 },
  { User: 'user2', Level: 1 },
  { User: 'user3', Level: 2 },
  { User: 'user4', Level: 2 },
  { User: 'user5', Level: 3 }
];

// Solution 1: Not use reduce function  ***********************************************************
// 1. travser all the element and add them toegther with same level
let groupUsers = [];

for(let i = 0; i < userArr.length; i++){
  let currLevel = userArr[i].Level;

  // 检查groupUsers是否已经存在了这个级别，如果是的，hasNot会直接得到对应的array，用在后面add 
  const hasNot = groupUsers.find(item => item.level === currLevel);
  
  if(hasNot){ //已经有这个级别的空间
    hasNot.users.push(userArr[i].User);
  } else{ //给这个级别开空间，并把当前user name放入记录
    groupUsers.push({level: currLevel, users: [userArr[i].User]});
  }
}

// 2. then we need sort all the element based on level increasing order
const sortLevels = groupUsers.sort((a, b) => a.level - b.level);

// 3. Display render the all level with each user
sortLevels.forEach(groupItem => {
  console.log(`Level ${groupItem.level}`); //依照格式输出
  groupItem.users.forEach(user => {
    let currNum = user.replace(/\D/g, ''); // Extracting numbers from the User string ==> 提取一个字符串中的所有数字
    console.log(`User ${currNum}`); //依照格式输出
  })
});


// Solution 2: Used reduce function() 来根据条件 合并累积 *****************************************************************
// 1. travser all the element and add them toegther with same level
const groupUsers = userArr.reduce((map, user) => {
  const currLevel = user.Level;
  //if did not meet same level before
  if(!map[currLevel]){
    map[currLevel] = []; //create a empty space
  } 
  map[currLevel].push(user.User); // add the user into same level list
  return map;
}, {});

// 2. then we need sort all the element based on level increasing order
const sortLevels = Object.keys(groupUsers).sort((a, b) => a - b);

// 3. Display render the all level with each user
sortLevels.forEach(level => {
  console.log(`Level ${level}`); //依照格式输出
  
  groupUsers[level].forEach(user => {
    let currNum = ""; //记录每个User的编号
    for(let i = 0; i < user.length; i++){
      if(!isNaN(Number(user[i]))){ //判断这个字符是不是数字
        currNum += user[i];
      }
    }
    console.log(`User ${currNum}`); //依照格式输出
  };
  
});
