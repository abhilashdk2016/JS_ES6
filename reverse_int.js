function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join(''); 
    console.log(parseInt(reversed));
    return Math.sign(n) * parseInt(reversed); 
  }

console.log(reverseInt(-500));
module.exports = reverseInt;