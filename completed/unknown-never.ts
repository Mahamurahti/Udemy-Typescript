// "Unknown" is almost like "any", but more restrictive
let userInput: unknown;
let userName: string;

userInput = 6;
userInput = "Max";

// Needs a type check
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

const result = generateError("An error occurred!", 500);
console.log(result);
