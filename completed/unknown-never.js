"use strict";
// "Unknown" is almost like "any", but more restrictive
let userInput;
let userName;
userInput = 6;
userInput = "Max";
// Needs a type check
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
const result = generateError("An error occurred!", 500);
console.log(result);
