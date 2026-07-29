// student Grade Calculation:
// grade (A+ for 90+, A for 80+,
// B for 70+, F below 70).
const gradeMark = (mark) => {
    let grade = "";
    if (mark >= 90) grade = "A+";
    else if (mark >= 80) grade = "A";
    else if (mark >= 70) grade = "B";
    else if (mark < 70 && mark > 0) grade = "F";
    else grade = "Invalid mark";

    return grade;
}


// This function Generate Studnet report card:
const generateReportCard = (student) => {
    if (typeof student == "object" && !Array.isArray(student)) return "invalid";
    if (typeof student.bangla !== "number" || typeof student.english !== "number" || typeof student.mark !== "number") return "invalid";
    let totalMarks = student.bangla + student.english + student.math;
    let averateMark = totalMarks / 3;

    return { name: student.name, total: totalMarks, average: averateMark, grade: gradeMark(averateMark) };
}


// tast Case:
const student = { name: 'Ayan', bangla: 78, english: 85, math: 92 }
let st = [4, 5, 6];
console.log(generateReportCard(student))         // Report: { name:'Ayan', total:255, average:85, grade:'A' }