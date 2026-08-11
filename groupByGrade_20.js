/*

Problem 20 — Group Students by Grade

A result management system wants to group students by their letter grade.

Input ------------------------
An array of objects, each with name and grade properties.
[
  {name:"Rafi", grade:"A"},
  {name:"Sadia", grade:"B"},
  {name:"Karim", grade:"A"}
]

Challenge --------------------
Return "Invalid" if:
The input is not an array
The array is empty
Any object is missing name or grade

*/

const groupByGrade = (students) => {
    if (!students || !Array.isArray(students) || students.length === 0) return "Invalid";
    let isValid = true;
    const gradeGroups = students.reduce((studentGroupByGrade, student) => {
        if (!isValid) return studentGroupByGrade;

        if (!student || typeof student !== "object" || Array.isArray(student) || !Object.hasOwn(student, "name") || !Object.hasOwn(student, "grade")) {
            isValid = false;
            return studentGroupByGrade;
        }

        if (!Object.hasOwn(studentGroupByGrade, student.grade)) {
            studentGroupByGrade[student.grade] = [];
        }
        studentGroupByGrade[student.grade].push(student.name);
        return studentGroupByGrade;
    }, {});

    return isValid ? gradeGroups : "Invalid";
}

let students = [
    { name: "Rafi", grade: "A" },
    { name: "Sadia", grade: "B" },
    { name: "Karim", grade: "A" }
]
console.log(groupByGrade(students))

// Output ----------------------------
// An object where each key is a grade and the value is an array of student names.
// { A: ["Rafi", "Karim"], B: ["Sadia"] }


