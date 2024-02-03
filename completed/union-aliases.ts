type Combinable = number | string;
type CombinableDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: CombinableDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log("Combined ages: " + combinedAges);

const combinedNames = combine("Jack", "Sparrow", "as-text");
console.log("Combined names: " + combinedNames);

const combinedStringAges = combine("30", "26", "as-number");
console.log("Combined string ages: " + combinedStringAges);
