const analyzeEmailDomains = (text) => {
    const textArray = text.split(" ");
    let validEmailAddressCount = 0;
    let longEmail = ""
    for (const mail of textArray) {
        if (mail.endsWith(".com") && mail.includes("@")) {
            validEmailAddressCount++;
            if (mail.length > longEmail.length) {
                longEmail = mail;
            }
        }

    }
    return { emailCount: validEmailAddressCount, longestDomain: longEmail };
}


console.log(analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com"));
// → { emailCount: 3, longestDomain: "programminghero.com" }



console.log(analyzeEmailDomains("Hello everyone!"))
// → { emailCount: 0, longestDomain: "" }