// If i use "==" equal in a condition, it's just check the values of the variable, and also convert the type int a similiar type.
const first = 1;
const second = true;
if (first == second) {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}
// If I use "===" equal in a condition, it's check "values" and also the "type", that's why this condition is false.
const third = 1;
const fourth = true;
if (first === second) {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}