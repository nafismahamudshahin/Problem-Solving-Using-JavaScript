// Function Name Must be: orderSummary
// An e-commerce site wants to generate an order confirmation message right after checkout.
// Input
// An object, for example:
// js
// {
//   customer: "Nafis",
//   item: "Laptop",
//   price: 55000
// }
// A message using template literals.
// -------------- Output -------
// Nafis, your order for Laptop (৳55000) has been confirmed.

// --------- Challenge ----------
// Return "Invalid" if:
// The input is not an object
// The object is missing customer, item, or price
// price is not a number

const orderSummary = (order) => {
    if (!order || typeof order !== "object" || Array.isArray(order)) return "Invalid";
    if (!Object.hasOwn(order, "customer") || !Object.hasOwn(order, "item") || !Object.hasOwn(order, "price")) {
        return "Invalid";
    }
    const { customer, item, price } = order;
    if (typeof price !== "number") return "Invalid";
    return `${customer}, your order for ${item} (৳${price}) has been confirmed.`
}


// test case:
console.log(orderSummary({ customer: "Nafis", item: "Laptop", price: 55000 }))