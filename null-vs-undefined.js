// If a variable value is not declarred 
let pakhi;
// If there is no return then, it will be undefined.
function add(num1, num2) {
    console.log(num1 + num2);
    return;
}
// If a parameter not declared, then it's show undefined.
function add(num1, num2) {
    console.log(num1, num2);
}
const result = add(13);
console.log(result);
// In a object, if there is no value what i want
const result = { name: 'Hriday', Id: '17ACE063' };
console.log(result.gf);
// If I set the variable value = undefined, it will be undefined.
let fun = undefined;
console.log(fun);
let ages = [10, 12, 20, 30];
console.log(ages[11]);