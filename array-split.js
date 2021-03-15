const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const part = nums.slice(2, 5);
//  Here we are doing splice, splice means like delete, not equal delete
const removed = nums.splice(2, 3, 77, 88);
// console.log(removed);
// console.log(nums);
// Here we can join each elements of this array. and in the cotetion mark ("") we can use like(","), (" "), ("any word").
const joining = nums.join("");
console.log(joining);