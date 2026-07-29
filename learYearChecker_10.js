// This function check leap year if year is leap year then return true otherwose false
const isLeapYear = (year) => {
    if (typeof year !== "number") return "Invalid";
    if (year % 4 == 0) {
        if (year % 100 === 0)
            if (year % 400 == 0)
                return true;
            else return false;
        return true;
    }
    return false;
}

console.log(isLeapYear(2024)); // → true
console.log(isLeapYear(1900)); // → false
console.log(isLeapYear(2000)); // → true