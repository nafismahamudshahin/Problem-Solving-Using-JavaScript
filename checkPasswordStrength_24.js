/*

Problem 24 — Password Strength Validator:
A signup form needs to validate password strength before allowing registration.

Input
A string, for example: "Nafis@123"


Output
Return "Strong" if the password satisfies ALL of the following:
Length is at least 8 characters
Contains at least one uppercase letter
Contains at least one digit
Contains at least one special character (!@#$%^&*)

Otherwise return "Weak".

Challenge 
Return "Invalid" if the input is not a string.

Tips: Use regular expressions (test()) or loop with charCodeAt().

*/

const checkPasswordStrength = password => {
    if (!password || typeof password !== "string") return "Invalid";
    if (password.length < 8) return "Weak";
    /*
        // way 1:
        const specialCodes = [33, 64, 35, 36, 37, 94, 38, 42];
        let uppercase = false;
        let digits = false;
        let specialChar = false;
        for (let i = 0; i < password.length; i++) {
            let code = password.charCodeAt(i)
            // check upparcase:
            if (code >= 65 && code <= 90) uppercase = true;
            // check digits:
            if (code >= 48 && code <= 57) digits = true;
            // check special character:
            if (specialCodes.includes(code)) specialChar = true
        }
        // return uppercase && digits && specialChar ? "Strong" : "Weak";
     
    */
    return /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password) ? "Strong" : "Weak"
}



// test case:
console.log(checkPasswordStrength("hellos@dA1"))

