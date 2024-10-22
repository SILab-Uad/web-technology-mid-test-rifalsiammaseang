// TODO: Implement the password generation logic based on user input

export const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // Create a variable for the character set based on selected options
    let charpw = "";

    if (options.includeUppercase) charpw += uppercase;
    if (options.includeLowercase) charpw += lowercase;
    if (options.includeNumbers) charpw += numbers;
    if (options.includeSpecialChars) charpw += specialChars;

    // if (charpw === "") {
    //     alert("Minimal pilih 1 opsi dek!");
    //     return "";
    // }

    if (charpw === "") {
        throw new Error("At least one character type must be selected.");
    }

    // Generate the password based on the selected criteria
    let pw = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charpw.length);
        pw += charpw[randomIndex];
    }
    return pw;
};