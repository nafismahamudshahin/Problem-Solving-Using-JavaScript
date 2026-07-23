// Problem 04:
// Count how many digits are in a string.

function digitCount(string) {
    let cnt = 0;
    for (const str of string) {
        if (str >= 0 && str <= 9) {
            cnt++;
        }
    }
    return cnt;
}

console.log(digitCount("hello43442hell"))