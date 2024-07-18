function findFirstAndLast(nums, target) {
    const result = { first: -1, last: -1 };

    // Binary search for the first occurrence
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            result.first = mid;
            end = mid - 1; // Move left to find the first occurrence
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    // Binary search for the last occurrence
    start = 0;
    end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            result.last = mid;
            start = mid + 1; // Move right to find the last occurrence
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    if (result.first === -1) {
        console.log(`Element not found in the array`);
    } else {
        console.log(`The first occurrence of element ${target} is located at index ${result.first}`);
        console.log(`The last occurrence of element ${target} is located at index ${result.last}`);
    }
}

// User definable input
const userNumsInput = prompt("Enter a sorted array of numbers separated by commas:");
const nums = userNumsInput.split(',').map(Number);
const target = Number(prompt("Enter the target number:"));

findFirstAndLast(nums, target);
