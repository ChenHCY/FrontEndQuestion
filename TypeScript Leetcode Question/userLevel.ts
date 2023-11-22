interface User {
  User: string;
  Level: number;
}
// our array
const userArr: User[] = [
  { User: 'user1', Level: 1 },
  { User: 'user2', Level: 1 },
  { User: 'user3', Level: 2 },
  { User: 'user4', Level: 2 },
  { User: 'user5', Level: 3 }
];

// 1. traverse all the elements and add them together with the same level
const groupUsers: { [key: number]: string[] } = userArr.reduce((map, user) => {
  const currLevel = user.Level;
  // if did not meet the same level before
  if (!map[currLevel]) {
    map[currLevel] = []; // create an empty space
  }
  map[currLevel].push(user.User); // add the user into the same level list
  return map;
}, {} as { [key: number]: string[] }); 

// 2. then we need to sort all the elements based on level as increasing order
const sortLevels = Object.keys(groupUsers).sort((a, b) => Number(a) - Number(b));

// 3. Display render all levels with each user
sortLevels.forEach(level => {
  console.log(`Level ${level}`);
  groupUsers[Number(level)].forEach(user => {
    console.log(`${user}`);
  });
});
