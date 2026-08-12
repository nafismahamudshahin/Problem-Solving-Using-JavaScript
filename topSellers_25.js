/*

Problem 25 — Debugging Challenge: Top Sellers Board

Function Name Must be: topSellers

An online shop's dashboard shows the top 3 sellers (by units sold) who sold at least 50 units, with names in Title Case (first letter capital, rest lowercase).

A junior developer wrote the function but introduced several ES6 bugs. Fix all the bugs without changing the function name.

Input:
[
  { name: "rafi", unitsSold: 120 },
  { name: "SADIA", unitsSold: 40 },
  { name: "karim", unitsSold: 90 },
  { name: "nafis", unitsSold: 60 }
]


Output
["Rafi", "Karim", "Nafis"]

Challenge
After fixing the bugs, the function must also handle:
Return "Invalid" if the input is not an array
Return "Invalid" if the array is empty
Return "Invalid" if any object is missing name or unitsSold
Return "Invalid" if unitsSold is not a number

*/

const topSellers = sellers => {
  if (!sellers || !Array.isArray(sellers) || sellers.length === 0) return "Invalid";
  let isValid = true;
  const topSellersList = sellers.reduce((sellersList, seller) => {
    if (!isValid) return sellersList;
    if (!seller || !Object.hasOwn(seller, "name") || !Object.hasOwn(seller, "unitsSold") || typeof seller.unitsSold !== "number" || !Number.isFinite(seller.unitsSold)) {
      isValid = false;
      return sellersList;
    }

    if (seller.unitsSold >= 50) {
      sellersList.push((seller.name)[0].toUpperCase() + (seller.name).slice(1).toLowerCase());
    }
    return sellersList;
  }, [])
  return isValid ? topSellersList : "Invalid";
}

// test case:
console.log(topSellers([{ name: "rafi", unitsSold: 120 }, { name: "SADIA", unitsSold: 40 }, { name: "karim", unitsSold: 90 }, { name: "nafis", unitsSold: 60 }]))