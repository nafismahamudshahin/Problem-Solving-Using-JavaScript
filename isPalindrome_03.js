// Problem 03:
// Write a function that checks if a string is a palindrome.
const isPalindrome = (text) => {
    let textReverse = "";
    for (const char of text) {
        textReverse = char + textReverse;
    }
    if (textReverse === text) {
        return true;
    }
    return false;
}

// test 1:
let text = "madam";
console.log(isPalindrome(text));

// test 2:
text = "hello";
console.log(isPalindrome(text));