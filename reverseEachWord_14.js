const reverseEachWord = (sentence) => {
    if (typeof sentence !== "string") return "Invalid";
    const words = sentence.split(" ");
    const reverseWords = [];
    for (const word of words) {
        let reverse = word.split('').reverse().join('');
        reverseWords.push(reverse);
    }
    return reverseWords.join(" ");
}

console.log(reverseEachWord('Hero is strong')) // → 'oreH si gnorts'