// Multiply pointers - sumZero
// Write a function called sumZero which accept a sorted array of integers.
// The function should find the first pair where the sum is 0
// Return an array that includes both values that sum to zero or undefined

const sumZero = (arr) => {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while (rightPointer > leftPointer) {
        let sum = arr[leftPointer] + arr[rightPointer];
        if (sum === 0) {
            return [arr[leftPointer], arr[rightPointer]]
        };
        sum > 0 ? rightPointer-- : leftPointer++;
    }
};

console.log(sumZero([-3, -2, -1, 3, 4, 7]));
console.log(sumZero([-3, -2, -1, 0, 4, 7]));
console.log(sumZero([-300, -2, -1, 0, 4, , 300, 700]));