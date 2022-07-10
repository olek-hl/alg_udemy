// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700

// Constraints:
// Time Complexity - O(N)

const maxSubarraySum = (arr,  num) => {
    if (num > arr.length) {
        return null;
    };
    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum+=arr[i];
    };
    let tempSum = 0;
    for (let i = num; i < arr.length; i++) {
        console.log(tempSum)
        console.log(maxSum)
        tempSum = maxSum - arr[i-num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null