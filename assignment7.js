// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lower case
// --- Examples
// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False   

function getSortedAlphabets(word) {
    if (!word) { return; }
     word = word.toLowerCase()
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                .replace(/\s{2,}/g," ");
     word = word.split('');
     word = word.sort();
     word = word.join('');
     return word;
 }

 anagrams = (word1,word2) =>  getSortedAlphabets(word1) === getSortedAlphabets(word2);
 console.log(anagrams('rail safety', 'fairy tales'));
 console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
 console.log(anagrams('Hi there', 'Bye there'));