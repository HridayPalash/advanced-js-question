// Falsy
/**
 * undefined
 * 0
 * ""
 * null
 * NaN
 * false
 */
// Truthy
/**
 * '0'
 * ' '
 * []
 * {}
 * 'name'
 */
const name = false;
console.log(name);
if (name) {
    console.log('Condition is true');
} else {
    console.log('Condition is false');
}
