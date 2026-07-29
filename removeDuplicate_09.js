// This function take an array of numbers and remove diplicate then return unique array:
const removeDuplicates = (numbers) => {
    if (!Array.isArray(numbers)) return "invalid";
    let uniqueNumbers = [];
    for (const num of numbers) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    }
    return uniqueNumbers;
}

// tast Case:
const uniqueNumbers = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueNumbers); // → [1, 2, 3, 4, 5]