// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

console.log('Using Reduce');
console.log(reverse_reduce('apple'));
console.log(reverse_reduce('  abcd'));
function reverse_reduce(str) {
    return str.split('').reduce((r, s) => s + r);
}

console.log('Using Third Variable');
console.log(reverse_thirdvariable('apple'));
console.log(reverse_thirdvariable('  abcd'));
function reverse_thirdvariable(str) {
    let rs = '';
    for(let s of str) {
        rs = s + rs;
        // 1: rs = a + ''; rs=a
        // 2: rs = p + a; rs = pa;
        // 3: rs = p + pa: rs = ppa;
        // 4: rs = l + ppa; rs = lppa;
        // 5: rs = e + lppa; rs = elppa; 
    }
    return rs;
}

console.log('Using Inbuilt Reverse');
console.log(reverse_inbuilt('apple'));
console.log(reverse_inbuilt('  abcd'));
function reverse_inbuilt(str) {
    return str.split('').reverse().join('');
}
module.exports = { reverse_reduce,  reverse_thirdvariable, reverse_inbuilt};
