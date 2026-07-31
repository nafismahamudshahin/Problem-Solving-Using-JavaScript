const runningTotal = (amounts) => {
    if (!Array.isArray(amounts)) return "Invalid";
    let runningTotalAmount = [];
    let currentAmount = 0;
    for (const amount of amounts) {
        if (typeof amount !== "number" || Number.isNaN(amount)) return "Invalid";
        runningTotalAmount.push(amount + currentAmount);
        currentAmount += amount;
    }
    return runningTotalAmount;
}

console.log(runningTotal([100, 50, 25])) // → [100, 150, 175]