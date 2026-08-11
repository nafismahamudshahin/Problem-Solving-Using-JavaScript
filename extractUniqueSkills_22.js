/*

Problem 22 — Unique Skill Extractor:
A job portal collects skills from multiple resumes, but the list often has duplicates (case-insensitive).

Input ----------------------------------------
An array of strings, for example: ["JavaScript", "python", "javascript", "React"]

Challenge -------------------------------------
Return "Invalid" if:
The input is not an array
The array is empty
The array contains any non-string value


*/

const extractUniqueSkills = skills => {
    if (!skills || !Array.isArray(skills) || skills.length === 0) return "Invalid";
    let isValid = true;
    const uniqueSkills = skills.reduce((uniqueSkillsList, skill) => {
        if (!isValid) return uniqueSkillsList;
        if (!skill || typeof skill !== "string") {
            isValid = false;
            return uniqueSkillsList;
        }
        if (!uniqueSkillsList.some(exists => exists.toLowerCase() === skill.toLowerCase())) {
            uniqueSkillsList.push(skill);
        }
        return uniqueSkillsList;
    }, [])
    return isValid ? uniqueSkills : "Invalid";
}

// tese case:

console.log(extractUniqueSkills(["JavaScript", "python", "javascript", "React"]));


// Output ----------------------------------------
// An array of unique skills, keeping the first occurrence's original casing, in order of first appearance.
// ["JavaScript", "python", "React"]