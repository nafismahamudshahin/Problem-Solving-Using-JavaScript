const sumDigits = (num) => {
    if (typeof num !== "number" || Number.isNaN(num)) return "Invalid";
    let total = 0;
    while (num > 0) {
        total += num % 10;
        num = Math.floor(num / 10);
    }
    return total;
}

console.log(sumDigits(1234)); // → 10 (1+2+3+4)