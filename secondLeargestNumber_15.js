const secondLargest = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length < 2) return "Invalid";
    let leargest = -Infinity;
    let secondLeargestNum = -Infinity;
    for (let num of numbers) {
        if (num > leargest) {
            secondLeargestNum = leargest;
            leargest = num;
        } else if (num > secondLeargestNum) {
            secondLeargestNum = num;
        }
    }
    return secondLeargestNum;
}

console.log(secondLargest([45, 12, 89, 3, 67])) // → 67
console.log(secondLargest([45, 6])) // → 6
console.log(secondLargest([45, 6, 30])) // → 30
