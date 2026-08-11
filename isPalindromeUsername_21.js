/*

Problem 6 — Palindrome Username Checker:
A platform wants to flag "fun" usernames that read the same forwards and backwards (case-insensitive, ignoring spaces).

Input -------------------------------
A string, for example: "Nafis Sifan"

Challenge ---------------------------
Return "Invalid" if:
The input is not a string
The string is empty after removing spaces

*/

const isPalindromeUsername = (username) => {
    if (!username || typeof username !== "string" || username.trim() === "") {
        return "Invalid";
    }
    const reverseUsername = username.split("").reverse().join("");
    return reverseUsername.toLocaleLowerCase() === username.toLocaleLowerCase();
}

// tase case:
console.log(isPalindromeUsername("Nafis Sifan")) // true
console.log(isPalindromeUsername("Sifan")) // false
console.log(isPalindromeUsername("mam")) // true


// Output ------------------------
// A boolean or "Invalid".
// Return true if the cleaned string (lowercase, spaces removed) is a palindrome
// Return false otherwise