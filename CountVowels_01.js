// problem No: 01
// Counts how many vowels are in a string.

const countVowels = (text) => {
    text = text.toLowerCase();
    let vowels = 0;
    for (const char of text) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            vowels++;
        }
    }
    return vowels;
}
const text = "Hello how are you";
numberOfVowels = countVowels(text);
console.log("Total Vowels: ", numberOfVowels)