/*

Problem 8 — Temperature Alert System:
A weather app converts a week's Celsius readings into Fahrenheit and flags any day above 100°F as "Hot".

Input -------------------------------
An array of numbers (Celsius), for example: [30, 38, 20]


Output ----------------------------
An array of objects: { celsius: Number, fahrenheit: Number, status: String }

Challenge -------------------------
Return "Invalid" if:
The input is not an array
The array is empty
The array contains any non-number value

Tips: Use map().
fahrenheit = celsius * 9/5 + 32 (round to 1 decimal place)
status is "Hot" if fahrenheit > 100, otherwise "Normal"

*/

const temperatureAlerts = (readings) => {
    if (!readings || !Array.isArray(readings) || readings.length === 0) return "Invalid";
    let isValid = true;
    const temperatureStatus = readings.map(reading => {
        if (!isValid) return reading;
        if (typeof reading !== "number" || Number.isNaN(reading)) {
            isValid = false;
            return reading;
        }
        let fahrenheit = Math.round(((reading * 1.8) + 32) * 10) / 10;
        return { celsius: reading, fahrenheit, status: fahrenheit > 100 ? "Hot" : "Normal" }
    })
    return isValid ? temperatureStatus : "Invalid";
}

console.log(temperatureAlerts([30, 38, 20]))
console.log(temperatureAlerts([30, null, 20]))
console.log(temperatureAlerts([30, '38', 20]))