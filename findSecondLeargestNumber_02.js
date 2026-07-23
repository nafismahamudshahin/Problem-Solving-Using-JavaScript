// Problem 2: 
// Find the Second Largest Number
function secondLargest(array) {
    let leargest = -1;
    let secondLargestNumber = -1;
    for (const num of array) {
        if (num > leargest) {
            secondLargestNumber = leargest;
            leargest = num;
        }
    }

    return secondLargestNumber;
}

const secondLargestNumber = secondLargest([4, 3, 5, 6, 7, 2, 3, 6, 3, 10, 23, 43, 56, 60, 32]);
console.log(secondLargestNumber);