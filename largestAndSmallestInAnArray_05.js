const leargestAndSmallest = (numbers) => {
    if (!Array.isArray(numbers)) return "Invalid";
    let leargest = -Infinity;
    let smallest = Infinity;
    for (let num of numbers) {
        if (typeof num == "number") {
            if (leargest < num) leargest = num;
            if (smallest > num) smallest = num;
        } else return "Invalid";
    }
    return { leargest: leargest, smallest: smallest };
}

const numbers = [4, 5, 2, 33, 34, 56, 34, 2, 1, 4, 5, 6];
console.log(leargestAndSmallest(numbers));