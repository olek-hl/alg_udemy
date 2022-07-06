/* 

Write a function called same, which accepts two arrays. 
The function should return true if every value in the array 
has it's corresponding value squared in the second array. 
The frequency of values must be the same

*/

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    };
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    };
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    };
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        };
        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }
    return true;
}

console.log(same([3,3,2], [9,9,4]));
console.log(same([1,2], [1,1,4]));
console.log(same([1, 1, 0], [1, 1, 0]));
console.log(same([22, 11, 0], [1, 1]));
console.log(same([22, 11, 0, 1], [1, 0, 121, 484]));