const userArr = [
  { User: 'user1', Level: 1 },
  { User: 'user2', Level: 1 },
  { User: 'user3', Level: 2 },
  { User: 'user4', Level: 2 },
  { User: 'user5', Level: 3 }
];

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
