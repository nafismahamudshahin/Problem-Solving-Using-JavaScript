const weeklyStepsSummary = (stepsArray) => {
    if (!Array.isArray(stepsArray)) return "invalid";
    let totalSteps = 0;
    for (const step of stepsArray) {
        if (typeof step !== "number") return "invalid";
        totalSteps += step;
    }
    return { totalSteps: totalSteps, goalReached: totalSteps >= 50000 ? true : false };
}



const steps = weeklyStepsSummary([8000, 7500, 9200, 6000, 10000, 5500, 4000])
// → { totalSteps: 50200, goalReached: true }
console.log(steps)