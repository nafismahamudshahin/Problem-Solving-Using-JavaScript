/*
Problem 17 — Premium Product Filter

Function Name Must be: filterPremiumProducts

An online store wants to show only premium products (price above 1000) on its "Premium Picks" page.

--------- Input ---------
An array of objects, each with name and price properties.

js
[
  {name:"Pen", price:20},
  {name:"Watch", price:1500}
]

-------- Output ----------

An array containing only products with price > 1000.

[{name:"Watch", price:1500}]


-------- Challenge ------------
Return "Invalid" if:
The input is not an array
The array is empty
Any object is missing the price property, or price is not a number

*/

const filterPremiumProducts = (products) => {
    // validation:
    if (!Array.isArray(products) || products.length === 0) return "Invalid";
    // for (const product of products) {
    //     // product must be object:
    //     if (!product || typeof product !== "object" || Array.isArray(product) || !Object.hasOwn(product, "price") || typeof product.price !== "number") return "Invalid"
    // }
    // return products.filter(product => product.price > 1000);
    let isValid = true;
    const allProducts = products.reduce((productList, product) => {
        if (!isValid) return productList;
        if (!product || typeof product !== "object" || Array.isArray(product) || !Object.hasOwn(product, "price") || typeof product.price !== "number") {
            isValid = false;
            return productList;
        }

        if (product.price > 1000) {
            productList.push(product);
        }
        return productList;
    }, [])
    return isValid ? allProducts : "Invalid";
}

// test case:
console.log(filterPremiumProducts([{ name: "Pen", price: 20 }, { name: "Watch", price: 1500 }]));
console.log(filterPremiumProducts([{}]));