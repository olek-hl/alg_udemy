// Frequency Counter - isAnagram
// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.
// Note: You may assume the string contains only lowercase alphabets.

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    };
    const frequencyCounter = {};
    for (let char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
    };
    for (let char of str2) {
        if (frequencyCounter[char]) {
            frequencyCounter[char]--
        } else {
            return false;
        }
    };
    return true;
}

console.log(isAnagram('', '')); // true
console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('raty', 'car')); // false
console.log(isAnagram('rat0', '0tar')); // true