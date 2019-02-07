function maxCharacter(s) {
    charCount = {};
    maxChar = '';
    for(let c of s.toString()) {
        if(!charCount[c]){
            charCount[c] = 0;
        }
        charCount[c]++;
        if(maxChar == '' || charCount[maxChar] < charCount[c]) {
            maxChar = c;
        }
    }
    console.log(charCount);
    return maxChar;
}

console.log(maxCharacter("apple 1231111"));
module.exports = maxCharacter;
