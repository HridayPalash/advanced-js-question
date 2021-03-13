const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);
// function square(element) {
//     return element * element;
    
// }
// const result = numbers.map(function (element) {
//     return element * element;
// });
// const result = element => element * element;
// const result = x => x * x;
// It is the modern way, to doing the modern "map" work, when we want doing something through array
const result = numbers.map(x => x * x);
console.log(result);
// Filter is like filtering
const bigger = numbers.filter(x => x < 5);
console.log(bigger);
// find is like, when we have a array, and we want to find a specific values from array, and "find" always give the first value of requirement
const isThere = numbers.find(x => x > 5);
console.log(isThere);