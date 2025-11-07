const USER_COUNT = 50000;
let usersA = [];
let usersB = [];
const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });
for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}
// console.log(userA,userB)

// Slow method

const commonFriendsSlow = (usersA, usersB) => {
  const commonFriend = [];
  const startTime = performance.now();
  usersA.forEach((userA) => {
    usersB.forEach((userB) => {
      if (userA.id === userB.id) {
        commonFriend.push(userA);
      }
    });
  });
  const endTime = performance.now();
  return { count: commonFriend.length, timeTookToFinish: endTime - startTime };
};
console.log(commonFriendsSlow(usersA,usersB))