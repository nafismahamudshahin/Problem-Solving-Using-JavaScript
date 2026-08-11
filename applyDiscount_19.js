/*

Problem 19 — Discount Calculator:

A flash sale gives every item a flat ৳15 discount. The function must return the total sum of all discounted prices.

---------- Input  -----------
An array of numbers, for example: [100, 80, 120]

--------- Output ----------
255

------ Explanation --------
Discounted prices: [85, 65, 105] → Total: 85 + 65 + 105 = 255

------- Challenge ----------
Return "Invalid" if:
The input is not an array
The array is empty
The array contains any non-number value
Any discounted price would go below 0


*/
const applyDiscount = (prices) => {
    if (!Array.isArray(prices) || prices.length === 0) return "Invalid";
    // const totalDiscount = prices.length * 15;
    let isValid = true;
    const totalPrice = prices.reduce((total, current) => {
        if (typeof current !== "number") {
            isValid = false;
            return total;
        }
        const afterDiscount = current - 15;
        if (afterDiscount < 0) {
            isValid = false;
            return total;
        }
        return total + afterDiscount;
    }, 0)

    return isValid ? totalPrice : "Invalid";
}

// test case:
console.log(applyDiscount([100, 80, 120])) // 255
console.log(applyDiscount([100, 10, 120])) // Invalid