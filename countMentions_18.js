/*
Problem 18 — Mention Counter

Function Name Must be: countMentions

Threadly, a text-based social app, wants to detect how many people are mentioned in a post and who was mentioned first among the shortest usernames.

Input:
A string, post, for example: "Great work team @nafis @sadia @karim"

Output:
An object of shape: { mentionCount: Number, shortestMention: String }

mentionCount → total number of words starting with @
shortestMention → the mention text (without @) with the fewest characters (if tie, return the one appearing first)
If there are no mentions, shortestMention should be ""

Challenge
Return "Invalid" if the input is not a string.
Tips: Use split(" ") and startsWith("@").
Starter Code

*/

const countMentions = (post) => {
    if (!post || typeof post !== "string") return "Invalid";
    const words = post.split(" ");
    const filteredWords = words.filter(word => word.startsWith("@"));
    const mentionCount = filteredWords.length;
    let shortestMention = "";
    for (const word of filteredWords) {
        const tag = word.slice(1);
        if (shortestMention === "" || tag.length < shortestMention.length) {
            shortestMention = tag;
        }

    }
    return { mentionCount, shortestMention }
}

// tase case:
console.log(countMentions("Great work team @nafis @sadia @karim"))

// Sample Test Cases
// Input	Output
// "Great work team @nafis @sadia @karim"	{ mentionCount: 3, shortestMention: "sadia" }
// "No mentions here"	{ mentionCount: 0, shortestMention: "" }
// "@ai @ml full stack"	{ mentionCount: 2, shortestMention: "ai" }
// 456	Invalid