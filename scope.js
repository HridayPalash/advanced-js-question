let bonus = 20;
function sum(first, second) {
    let result = first + second + bonus;
    console.log(result);
    if (result>9) {
        var mood = "happy";
        mood = "cranky";
        mood = "chilly";
        console.log(mood);
    }
    console.log(mood);
    return result;
    // console.log(bonus);
}
const output = sum(3, 7);
// console.log(output);
// console.log(bonus);

/**
 * "let" and "const" is more organized and it can be used in "block scpe".
 * "var" is more flexible and it can be used in "hoesting scope".
 */